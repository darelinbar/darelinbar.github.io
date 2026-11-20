var l0=Object.defineProperty;var h0=(s,t,e)=>t in s?l0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var v=(s,t,e)=>h0(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="170",u0=0,uu=1,f0=2,Ap=1,wp=2,ai=3,di=0,$e=1,Ve=2,Bi=0,ks=1,fu=2,du=3,pu=4,d0=5,ts=100,p0=101,m0=102,g0=103,_0=104,x0=200,v0=201,M0=202,y0=203,cl=204,ll=205,b0=206,S0=207,T0=208,E0=209,A0=210,w0=211,R0=212,C0=213,P0=214,hl=0,ul=1,fl=2,Ks=3,dl=4,pl=5,ml=6,gl=7,dh=0,L0=1,I0=2,ki=0,D0=1,N0=2,F0=3,Rp=4,U0=5,O0=6,B0=7,mu="attached",Cp="detached",Pp=300,Ys=301,js=302,_l=303,xl=304,Ra=306,os=1e3,Fi=1001,ga=1002,Ze=1003,Lp=1004,wr=1005,on=1006,na=1007,qn=1008,pi=1009,Ip=1010,Dp=1011,Hr=1012,ph=1013,as=1014,Un=1015,$r=1016,mh=1017,gh=1018,$s=1020,Np=35902,Fp=1021,Up=1022,Mn=1023,Op=1024,Bp=1025,Hs=1026,Zs=1027,_h=1028,xh=1029,kp=1030,vh=1031,Mh=1033,ia=33776,sa=33777,ra=33778,oa=33779,vl=35840,Ml=35841,yl=35842,bl=35843,Sl=36196,Tl=37492,El=37496,Al=37808,wl=37809,Rl=37810,Cl=37811,Pl=37812,Ll=37813,Il=37814,Dl=37815,Nl=37816,Fl=37817,Ul=37818,Ol=37819,Bl=37820,kl=37821,aa=36492,Hl=36494,zl=36495,Hp=36283,Vl=36284,Gl=36285,Wl=36286,zr=2300,Vr=2301,Wa=2302,gu=2400,_u=2401,xu=2402,k0=2500,H0=0,zp=1,Xl=2,z0=3200,V0=3201,yh=0,G0=1,Di="",Fe="srgb",Je="srgb-linear",Ca="linear",pe="srgb",ps=7680,vu=519,W0=512,X0=513,q0=514,Vp=515,K0=516,Y0=517,j0=518,$0=519,ql=35044,Te=35048,Mu="300 es",hi=2e3,_a=2001;class sr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yu=1234567;const Pr=Math.PI/180,Js=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[s&255]+ke[s>>8&255]+ke[s>>16&255]+ke[s>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Ce(s,t,e){return Math.max(t,Math.min(e,s))}function bh(s,t){return(s%t+t)%t}function Z0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function J0(s,t,e){return s!==t?(e-s)/(t-s):0}function Lr(s,t,e){return(1-e)*s+e*t}function Q0(s,t,e,n){return Lr(s,t,1-Math.exp(-e*n))}function tg(s,t=1){return t-Math.abs(bh(s,t*2)-t)}function eg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function ng(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ig(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sg(s,t){return s+Math.random()*(t-s)}function rg(s){return s*(.5-Math.random())}function og(s){s!==void 0&&(yu=s);let t=yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ag(s){return s*Pr}function cg(s){return s*Js}function lg(s){return(s&s-1)===0&&s!==0}function hg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ug(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*f,a*l);break;case"YZY":s.set(c*f,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*f,a*h,a*l);break;case"XZX":s.set(a*h,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*h,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const dg={DEG2RAD:Pr,RAD2DEG:Js,generateUUID:yn,clamp:Ce,euclideanModulo:bh,mapLinear:Z0,inverseLerp:J0,lerp:Lr,damp:Q0,pingpong:tg,smoothstep:eg,smootherstep:ng,randInt:ig,randFloat:sg,randFloatSpread:rg,seededRandom:og,degToRad:ag,radToDeg:cg,isPowerOfTwo:lg,ceilPowerOfTwo:hg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:fg,normalize:fe,denormalize:In};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,o,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],M=i[1],y=i[4],x=i[7],I=i[2],w=i[5],R=i[8];return r[0]=o*_+a*M+c*I,r[3]=o*g+a*y+c*w,r[6]=o*p+a*x+c*R,r[1]=l*_+h*M+u*I,r[4]=l*g+h*y+u*w,r[7]=l*p+h*x+u*R,r[2]=f*_+d*M+m*I,r[5]=f*g+d*y+m*w,r[8]=f*p+d*x+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Jt;function Gp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Gr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pg(){const s=Gr("canvas");return s.style.display="block",s}const bu={};function Rr(s){s in bu||(bu[s]=!0,console.warn(s))}function mg(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gg(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _g(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Je,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Ca:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function fi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Su=[.64,.33,.3,.6,.15,.06],Tu=[.2126,.7152,.0722],Eu=[.3127,.329],Au=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Je]:{primaries:Su,whitePoint:Eu,transfer:Ca,toXYZ:Au,fromXYZ:wu,luminanceCoefficients:Tu,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:Su,whitePoint:Eu,transfer:pe,toXYZ:Au,fromXYZ:wu,luminanceCoefficients:Tu,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}});let ms;class xg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ms===void 0&&(ms=Gr("canvas")),ms.width=t.width,ms.height=t.height;const n=ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let vg=0;class Wp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(qa(i[o].image)):r.push(qa(i[o]))}else r=qa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function qa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?xg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mg=0;class Pe extends sr{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=Fi,i=Fi,r=on,o=qn,a=Mn,c=pi,l=Pe.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=yn(),this.name="",this.source=new Wp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Pp;Pe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(d+1)/2,I=(p+1)/2,w=(h+f)/4,R=(u+_)/4,L=(m+g)/4;return y>x&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=R/n):x>I?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=L/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=R/r,i=L/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yg extends sr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Wp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends yg{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Xp extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bg extends Pe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ue{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==f||l!==d||h!==m){let g=1-a;const p=c*f+l*d+h*m+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),w=Math.atan2(I,p*M);g=Math.sin(g*w)/I,a=Math.sin(a*w)/I}const x=a*M;if(c=c*g+f*x,l=l*g+d*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*d-l*f,t[e+1]=c*m+h*f+l*u-a*d,t[e+2]=l*m+h*d+a*f-c*u,t[e+3]=h*m-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u+f*d*m;break;case"YZX":this._x=f*h*u+l*d*m,this._y=l*d*u+f*h*m,this._z=l*h*m-f*d*u,this._w=l*h*u-f*d*m;break;case"XZY":this._x=f*h*u-l*d*m,this._y=l*d*u-f*h*m,this._z=l*h*m+f*d*u,this._w=l*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ru.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ru.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new P,Ru=new ue;class gi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),oo.subVectors(this.max,ur),gs.subVectors(t.a,ur),_s.subVectors(t.b,ur),xs.subVectors(t.c,ur),vi.subVectors(_s,gs),Mi.subVectors(xs,_s),Vi.subVectors(gs,xs);let e=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Vi.z,Vi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Vi.z,0,-Vi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Vi.y,Vi.x,0];return!Ya(e,gs,_s,xs,oo)||(e=[1,0,0,0,1,0,0,0,1],!Ya(e,gs,_s,xs,oo))?!1:(ao.crossVectors(vi,Mi),e=[ao.x,ao.y,ao.z],Ya(e,gs,_s,xs,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ti=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,ro=new gi,gs=new P,_s=new P,xs=new P,vi=new P,Mi=new P,Vi=new P,ur=new P,oo=new P,ao=new P,Gi=new P;function Ya(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Gi.fromArray(s,r);const a=i.x*Math.abs(Gi.x)+i.y*Math.abs(Gi.y)+i.z*Math.abs(Gi.z),c=t.dot(Gi),l=e.dot(Gi),h=n.dot(Gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Sg=new gi,fr=new P,ja=new P;class jn{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Sg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fr.subVectors(t,this.center);const e=fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(fr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fr.copy(t.center).add(ja)),this.expandByPoint(fr.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new P,$a=new P,co=new P,yi=new P,Za=new P,lo=new P,Ja=new P;class Zr{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$a.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),yi.copy(this.origin).sub($a);const r=t.distanceTo(e)*.5,o=-this.direction.dot(co),a=yi.dot(this.direction),c=-yi.dot(co),l=yi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*c-a,f=o*a-c,m=r*h,u>=0)if(f>=-m)if(f<=m){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=m?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($a).addScaledVector(co,f),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,i,r){Za.subVectors(e,t),lo.subVectors(n,t),Ja.crossVectors(Za,lo);let o=this.direction.dot(Ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const c=a*this.direction.dot(lo.crossVectors(yi,lo));if(c<0)return null;const l=a*this.direction.dot(Za.cross(yi));if(l<0||c+l>o)return null;const h=-a*yi.dot(Ja);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(t,e,n,i,r,o,a,c,l,h,u,f,d,m,_,g){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,f,d,m,_,g)}set(t,e,n,i,r,o,a,c,l,h,u,f,d,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),o=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+m*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,m=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-d,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tg,t,Eg)}lookAt(t,e,n){const i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),bi.crossVectors(n,ln),bi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),bi.crossVectors(n,ln)),bi.normalize(),ho.crossVectors(ln,bi),i[0]=bi.x,i[4]=ho.x,i[8]=ln.x,i[1]=bi.y,i[5]=ho.y,i[9]=ln.y,i[2]=bi.z,i[6]=ho.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],y=n[7],x=n[11],I=n[15],w=i[0],R=i[4],L=i[8],T=i[12],b=i[1],D=i[5],z=i[9],F=i[13],W=i[2],K=i[6],Y=i[10],Z=i[14],H=i[3],st=i[7],ht=i[11],dt=i[15];return r[0]=o*w+a*b+c*W+l*H,r[4]=o*R+a*D+c*K+l*st,r[8]=o*L+a*z+c*Y+l*ht,r[12]=o*T+a*F+c*Z+l*dt,r[1]=h*w+u*b+f*W+d*H,r[5]=h*R+u*D+f*K+d*st,r[9]=h*L+u*z+f*Y+d*ht,r[13]=h*T+u*F+f*Z+d*dt,r[2]=m*w+_*b+g*W+p*H,r[6]=m*R+_*D+g*K+p*st,r[10]=m*L+_*z+g*Y+p*ht,r[14]=m*T+_*F+g*Z+p*dt,r[3]=M*w+y*b+x*W+I*H,r[7]=M*R+y*D+x*K+I*st,r[11]=M*L+y*z+x*Y+I*ht,r[15]=M*T+y*F+x*Z+I*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+e*c*d-e*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+g*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=u*g*l-_*f*l+_*c*d-a*g*d-u*c*p+a*f*p,y=m*f*l-h*g*l-m*c*d+o*g*d+h*c*p-o*f*p,x=h*_*l-m*u*l+m*a*d-o*_*d-h*a*p+o*u*p,I=m*u*c-h*_*c-m*a*f+o*_*f+h*a*g-o*u*g,w=e*M+n*y+i*x+r*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=M*R,t[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*p-n*f*p)*R,t[2]=(a*g*r-_*c*r+_*i*l-n*g*l-a*i*p+n*c*p)*R,t[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*R,t[4]=y*R,t[5]=(h*g*r-m*f*r+m*i*d-e*g*d-h*i*p+e*f*p)*R,t[6]=(m*c*r-o*g*r-m*i*l+e*g*l+o*i*p-e*c*p)*R,t[7]=(o*f*r-h*c*r+h*i*l-e*f*l-o*i*d+e*c*d)*R,t[8]=x*R,t[9]=(m*u*r-h*_*r-m*n*d+e*_*d+h*n*p-e*u*p)*R,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*R,t[12]=I*R,t[13]=(h*_*i-m*u*i+m*n*f-e*_*f-h*n*g+e*u*g)*R,t[14]=(m*a*i-o*_*i-m*n*c+e*_*c+o*n*g-e*a*g)*R,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,m=r*u,_=o*h,g=o*u,p=a*u,M=c*l,y=c*h,x=c*u,I=n.x,w=n.y,R=n.z;return i[0]=(1-(_+p))*I,i[1]=(d+x)*I,i[2]=(m-y)*I,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+p))*w,i[6]=(g+M)*w,i[7]=0,i[8]=(m+y)*R,i[9]=(g-M)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=vs.set(i[0],i[1],i[2]).length();const o=vs.set(i[4],i[5],i[6]).length(),a=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],En.copy(this);const l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=hi){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let d,m;if(a===hi)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===_a)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=hi){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*l,d=(n+i)*h;let m,_;if(a===hi)m=(o+r)*u,_=-2*u;else if(a===_a)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vs=new P,En=new Gt,Tg=new P(0,0,0),Eg=new P(1,1,1),bi=new P,ho=new P,ln=new P,Cu=new Gt,Pu=new ue;class Hn{constructor(t=0,e=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ag=0;const Lu=new P,Ms=new ue,ni=new Gt,uo=new P,dr=new P,wg=new P,Rg=new ue,Iu=new P(1,0,0),Du=new P(0,1,0),Nu=new P(0,0,1),Fu={type:"added"},Cg={type:"removed"},ys={type:"childadded",child:null},Qa={type:"childremoved",child:null};class ye extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ye.DEFAULT_UP.clone();const t=new P,e=new Hn,n=new ue,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Gt},normalMatrix:{value:new Jt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(t,e){return Ms.setFromAxisAngle(t,e),this.quaternion.premultiply(Ms),this}rotateX(t){return this.rotateOnAxis(Iu,t)}rotateY(t){return this.rotateOnAxis(Du,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Iu,t)}translateY(t){return this.translateOnAxis(Du,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(dr,uo,this.up):ni.lookAt(uo,dr,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),Ms.setFromRotationMatrix(ni),this.quaternion.premultiply(Ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fu),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cg),Qa.child=t,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fu),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ye.DEFAULT_UP=new P(0,1,0);ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new P,ii=new P,tc=new P,si=new P,bs=new P,Ss=new P,Uu=new P,ec=new P,nc=new P,ic=new P,sc=new ce,rc=new ce,oc=new ce;class Dn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){An.subVectors(i,e),ii.subVectors(n,e),tc.subVectors(t,e);const o=An.dot(An),a=An.dot(ii),c=An.dot(tc),l=ii.dot(ii),h=ii.dot(tc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,m=(o*h-a*c)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(o,si.y),c.addScaledVector(a,si.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return sc.setScalar(0),rc.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(t,e),rc.fromBufferAttribute(t,n),oc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sc,r.x),o.addScaledVector(rc,r.y),o.addScaledVector(oc,r.z),o}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),ii.subVectors(t,e),An.cross(ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),An.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;bs.subVectors(i,n),Ss.subVectors(r,n),ec.subVectors(t,n);const c=bs.dot(ec),l=Ss.dot(ec);if(c<=0&&l<=0)return e.copy(n);nc.subVectors(t,i);const h=bs.dot(nc),u=Ss.dot(nc);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(bs,o);ic.subVectors(t,r);const d=bs.dot(ic),m=Ss.dot(ic);if(m>=0&&d<=m)return e.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ss,a);const g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Uu.subVectors(r,i),a=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(Uu,a);const p=1/(g+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(bs,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},fo={h:0,s:0,l:0};function ac(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=bh(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ac(o,r,t+1/3),this.g=ac(o,r,t),this.b=ac(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=qp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ne.fromWorkingColorSpace(He.copy(this),t),Math.round(Ce(He.r*255,0,255))*65536+Math.round(Ce(He.g*255,0,255))*256+Math.round(Ce(He.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(He.copy(this),e);const n=He.r,i=He.g,r=He.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Fe){ne.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,i=He.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(fo);const n=Lr(Si.h,fo.h,e),i=Lr(Si.s,fo.s,e),r=Lr(Si.l,fo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Dt;Dt.NAMES=qp;let Pg=0;class Bn extends sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=yn(),this.name="",this.blending=ks,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ll,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cl&&(n.blendSrc=this.blendSrc),this.blendDst!==ll&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class On extends Bn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new P,po=new gt;class jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class Kp extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yp extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class we extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lg=0;const dn=new Gt,cc=new ye,Ts=new P,hn=new gi,pr=new gi,Ne=new P;class Se extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gp(t)?Yp:Kp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return cc.lookAt(t),cc.updateMatrix(),this.applyMatrix4(cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(hn.min,pr.min),hn.expandByPoint(Ne),Ne.addVectors(hn.max,pr.max),hn.expandByPoint(Ne)):(hn.expandByPoint(pr.min),hn.expandByPoint(pr.max))}hn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(Ts.fromBufferAttribute(t,l),Ne.add(Ts)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new P,c[L]=new P;const l=new P,h=new P,u=new P,f=new gt,d=new gt,m=new gt,_=new P,g=new P;function p(L,T,b){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),m.sub(f);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(D),a[L].add(_),a[T].add(_),a[b].add(_),c[L].add(g),c[T].add(g),c[b].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,T=M.length;L<T;++L){const b=M[L],D=b.start,z=b.count;for(let F=D,W=D+z;F<W;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new P,x=new P,I=new P,w=new P;function R(L){I.fromBufferAttribute(i,L),w.copy(I);const T=a[L];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),x.crossVectors(w,T);const D=x.dot(c[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,D)}for(let L=0,T=M.length;L<T;++L){const b=M[L],D=b.start,z=b.count;for(let F=D,W=D+z;F<W;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[m++]=l[d++]}return new jt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ou=new Gt,Wi=new Zr,mo=new jn,Bu=new P,go=new P,_o=new P,xo=new P,lc=new P,vo=new P,ku=new P,Mo=new P;class ae extends ye{constructor(t=new Se,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(lc.fromBufferAttribute(u,t),o?vo.addScaledVector(lc,h):vo.addScaledVector(lc.sub(e),h))}e.add(vo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(mo.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(mo,Bu)===null||Wi.origin.distanceToSquared(Bu)>(t.far-t.near)**2))&&(Ou.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(Ou),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,I=y;x<I;x+=3){const w=a.getX(x),R=a.getX(x+1),L=a.getX(x+2);i=yo(this,p,t,n,l,h,u,w,R,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);i=yo(this,o,t,n,l,h,u,M,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let x=M,I=y;x<I;x+=3){const w=x,R=x+1,L=x+2;i=yo(this,p,t,n,l,h,u,w,R,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const M=g,y=g+1,x=g+2;i=yo(this,o,t,n,l,h,u,M,y,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Ig(s,t,e,n,i,r,o,a){let c;if(t.side===$e?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===di,a),c===null)return null;Mo.copy(a),Mo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Mo);return l<e.near||l>e.far?null:{distance:l,point:Mo.clone(),object:s}}function yo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,go),s.getVertexPosition(c,_o),s.getVertexPosition(l,xo);const h=Ig(s,t,e,n,go,_o,xo,ku);if(h){const u=new P;Dn.getBarycoord(ku,go,_o,xo,u),i&&(h.uv=Dn.getInterpolatedAttribute(i,a,c,l,u,new gt)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,c,l,u,new gt)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};Dn.getNormal(go,_o,xo,f.normal),h.face=f,h.barycoord=u}return h}class ls extends Se{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function m(_,g,p,M,y,x,I,w,R,L,T){const b=x/R,D=I/L,z=x/2,F=I/2,W=w/2,K=R+1,Y=L+1;let Z=0,H=0;const st=new P;for(let ht=0;ht<Y;ht++){const dt=ht*D-F;for(let At=0;At<K;At++){const Pt=At*b-z;st[_]=Pt*M,st[g]=dt*y,st[p]=W,l.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(At/R),u.push(1-ht/L),Z+=1}}for(let ht=0;ht<L;ht++)for(let dt=0;dt<R;dt++){const At=f+dt+K*ht,Pt=f+dt+K*(ht+1),V=f+(dt+1)+K*(ht+1),J=f+(dt+1)+K*ht;c.push(At,Pt,J),c.push(Pt,V,J),H+=6}a.addGroup(d,H,T),d+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ls(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function qe(s){const t={};for(let e=0;e<s.length;e++){const n=Qs(s[e]);for(const i in n)t[i]=n[i]}return t}function Dg(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function jp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ng={clone:Qs,merge:qe};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Bn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=Dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class $p extends ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=hi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new P,Hu=new gt,zu=new gt;class Ye extends $p{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,zu),e.subVectors(zu,Hu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,As=1;class Og extends ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ye(Es,As,t,e);i.layers=this.layers,this.add(i);const r=new Ye(Es,As,t,e);r.layers=this.layers,this.add(r);const o=new Ye(Es,As,t,e);o.layers=this.layers,this.add(o);const a=new Ye(Es,As,t,e);a.layers=this.layers,this.add(a);const c=new Ye(Es,As,t,e);c.layers=this.layers,this.add(c);const l=new Ye(Es,As,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zp extends Pe{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ys,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Bg extends cs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Zp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ls(5,5,5),r=new mi({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Bi});r.uniforms.tEquirect.value=e;const o=new ae(i,r),a=e.minFilter;return e.minFilter===qn&&(e.minFilter=on),new Og(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const hc=new P,kg=new P,Hg=new Jt;class Ji{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=hc.subVectors(n,e).cross(kg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(hc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hg.getNormalMatrix(t),i=this.coplanarPoint(hc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new jn,bo=new P;class Th{constructor(t=new Ji,e=new Ji,n=new Ji,i=new Ji,r=new Ji,o=new Ji){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],_=i[10],g=i[11],p=i[12],M=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,f-l,g-d,x-p).normalize(),n[1].setComponents(c+r,f+l,g+d,x+p).normalize(),n[2].setComponents(c+o,f+h,g+m,x+M).normalize(),n[3].setComponents(c-o,f-h,g-m,x-M).normalize(),n[4].setComponents(c-a,f-u,g-_,x-y).normalize(),e===hi)n[5].setComponents(c+a,f+u,g+_,x+y).normalize();else if(e===_a)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(bo.x=i.normal.x>0?t.max.x:t.min.x,bo.y=i.normal.y>0?t.max.y:t.min.y,bo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jp(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function zg(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const _=u[d];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Jr extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,f=e/c,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const M=p*f-o;for(let y=0;y<l;y++){const x=y*u-r;m.push(x,-M,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const y=M+l*p,x=M+l*(p+1),I=M+1+l*(p+1),w=M+1+l*p;d.push(y,x,w),d.push(x,I,w)}this.setIndex(d),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gg=`#ifdef USE_ALPHAHASH
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
#endif`,Wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yg=`#ifdef USE_AOMAP
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
#endif`,jg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$g=`#ifdef USE_BATCHING
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
#endif`,Zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,e_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u_=`#define PI 3.141592653589793
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
} // validated`,f_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,d_=`vec3 transformedNormal = objectNormal;
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
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C_=`#ifdef USE_GRADIENTMAP
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
}`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D_=`uniform bool receiveShadow;
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
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,F_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
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
#endif`,H_=`struct PhysicalMaterial {
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
}`,z_=`
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
#endif`,V_=`#if defined( RE_IndirectDiffuse )
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
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`#ifdef USE_MORPHTARGETS
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
#endif`,sx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
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
#endif`,ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,px=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ex=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ax=`float getShadowMask() {
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Px=`#ifdef USE_SKINNING
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
#endif`,Lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#ifdef USE_TRANSMISSION
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vx=`uniform sampler2D t2D;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`#include <common>
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
}`,Yx=`#if DEPTH_PACKING == 3200
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
}`,jx=`#define DISTANCE
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
}`,$x=`#define DISTANCE
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
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qx=`uniform float scale;
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
}`,tv=`uniform vec3 diffuse;
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
}`,ev=`#include <common>
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#define LAMBERT
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
}`,sv=`#define LAMBERT
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
}`,rv=`#define MATCAP
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
}`,ov=`#define MATCAP
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
}`,av=`#define NORMAL
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
}`,cv=`#define NORMAL
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
}`,lv=`#define PHONG
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
}`,hv=`#define PHONG
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
}`,uv=`#define STANDARD
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
}`,fv=`#define STANDARD
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
}`,dv=`#define TOON
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
}`,pv=`#define TOON
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
}`,mv=`uniform float size;
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
}`,gv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,xv=`uniform vec3 color;
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
}`,vv=`uniform float rotation;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:Vg,alphahash_pars_fragment:Gg,alphamap_fragment:Wg,alphamap_pars_fragment:Xg,alphatest_fragment:qg,alphatest_pars_fragment:Kg,aomap_fragment:Yg,aomap_pars_fragment:jg,batching_pars_vertex:$g,batching_vertex:Zg,begin_vertex:Jg,beginnormal_vertex:Qg,bsdfs:t_,iridescence_fragment:e_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:s_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:o_,color_fragment:a_,color_pars_fragment:c_,color_pars_vertex:l_,color_vertex:h_,common:u_,cube_uv_reflection_fragment:f_,defaultnormal_vertex:d_,displacementmap_pars_vertex:p_,displacementmap_vertex:m_,emissivemap_fragment:g_,emissivemap_pars_fragment:__,colorspace_fragment:x_,colorspace_pars_fragment:v_,envmap_fragment:M_,envmap_common_pars_fragment:y_,envmap_pars_fragment:b_,envmap_pars_vertex:S_,envmap_physical_pars_fragment:N_,envmap_vertex:T_,fog_vertex:E_,fog_pars_vertex:A_,fog_fragment:w_,fog_pars_fragment:R_,gradientmap_pars_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:I_,lights_pars_begin:D_,lights_toon_fragment:F_,lights_toon_pars_fragment:U_,lights_phong_fragment:O_,lights_phong_pars_fragment:B_,lights_physical_fragment:k_,lights_physical_pars_fragment:H_,lights_fragment_begin:z_,lights_fragment_maps:V_,lights_fragment_end:G_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:K_,map_fragment:Y_,map_pars_fragment:j_,map_particle_fragment:$_,map_particle_pars_fragment:Z_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:tx,morphcolor_vertex:ex,morphnormal_vertex:nx,morphtarget_pars_vertex:ix,morphtarget_vertex:sx,normal_fragment_begin:rx,normal_fragment_maps:ox,normal_pars_fragment:ax,normal_pars_vertex:cx,normal_vertex:lx,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:ux,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:dx,iridescence_pars_fragment:px,opaque_fragment:mx,packing:gx,premultiplied_alpha_fragment:_x,project_vertex:xx,dithering_fragment:vx,dithering_pars_fragment:Mx,roughnessmap_fragment:yx,roughnessmap_pars_fragment:bx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:Tx,shadowmap_vertex:Ex,shadowmask_pars_fragment:Ax,skinbase_vertex:wx,skinning_pars_vertex:Rx,skinning_vertex:Cx,skinnormal_vertex:Px,specularmap_fragment:Lx,specularmap_pars_fragment:Ix,tonemapping_fragment:Dx,tonemapping_pars_fragment:Nx,transmission_fragment:Fx,transmission_pars_fragment:Ux,uv_pars_fragment:Ox,uv_pars_vertex:Bx,uv_vertex:kx,worldpos_vertex:Hx,background_vert:zx,background_frag:Vx,backgroundCube_vert:Gx,backgroundCube_frag:Wx,cube_vert:Xx,cube_frag:qx,depth_vert:Kx,depth_frag:Yx,distanceRGBA_vert:jx,distanceRGBA_frag:$x,equirect_vert:Zx,equirect_frag:Jx,linedashed_vert:Qx,linedashed_frag:tv,meshbasic_vert:ev,meshbasic_frag:nv,meshlambert_vert:iv,meshlambert_frag:sv,meshmatcap_vert:rv,meshmatcap_frag:ov,meshnormal_vert:av,meshnormal_frag:cv,meshphong_vert:lv,meshphong_frag:hv,meshphysical_vert:uv,meshphysical_frag:fv,meshtoon_vert:dv,meshtoon_frag:pv,points_vert:mv,points_frag:gv,shadow_vert:_v,shadow_frag:xv,sprite_vert:vv,sprite_frag:Mv},yt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Wn={basic:{uniforms:qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:qe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:qe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:qe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:qe([yt.points,yt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:qe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:qe([yt.common,yt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:qe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:qe([yt.sprite,yt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:qe([yt.common,yt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:qe([yt.lights,yt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Wn.physical={uniforms:qe([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const So={r:0,b:0,g:0},qi=new Hn,yv=new Gt;function bv(s,t,e,n,i,r,o){const a=new Dt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function _(M){let y=!1;const x=m(M);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){const x=m(y);x&&(x.isCubeTexture||x.mapping===Ra)?(h===void 0&&(h=new ae(new ls(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:Qs(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(y.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yv.makeRotationFromEuler(qi)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==pe,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ae(new Jr(2,2),new mi({name:"BackgroundMaterial",uniforms:Qs(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,y){M.getRGB(So,jp(s)),n.buffers.color.setClear(So.r,So.g,So.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:_,addToRenderList:g}}function Sv(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(b,D,z,F,W){let K=!1;const Y=u(F,z,D);r!==Y&&(r=Y,l(r.object)),K=d(b,F,z,W),K&&m(b,F,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(b,D,z,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,D,z){const F=z.wireframe===!0;let W=n[b.id];W===void 0&&(W={},n[b.id]=W);let K=W[D.id];K===void 0&&(K={},W[D.id]=K);let Y=K[F];return Y===void 0&&(Y=f(c()),K[F]=Y),Y}function f(b){const D=[],z=[],F=[];for(let W=0;W<e;W++)D[W]=0,z[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:F,object:b,attributes:{},index:null}}function d(b,D,z,F){const W=r.attributes,K=D.attributes;let Y=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){const ht=W[H];let dt=K[H];if(dt===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),ht===void 0||ht.attribute!==dt||dt&&ht.data!==dt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function m(b,D,z,F){const W={},K=D.attributes;let Y=0;const Z=z.getAttributes();for(const H in Z)if(Z[H].location>=0){let ht=K[H];ht===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));const dt={};dt.attribute=ht,ht&&ht.data&&(dt.data=ht.data),W[H]=dt,Y++}r.attributes=W,r.attributesNum=Y,r.index=F}function _(){const b=r.newAttributes;for(let D=0,z=b.length;D<z;D++)b[D]=0}function g(b){p(b,0)}function p(b,D){const z=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;z[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),W[b]!==D&&(s.vertexAttribDivisor(b,D),W[b]=D)}function M(){const b=r.newAttributes,D=r.enabledAttributes;for(let z=0,F=D.length;z<F;z++)D[z]!==b[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(b,D,z,F,W,K,Y){Y===!0?s.vertexAttribIPointer(b,D,z,W,K):s.vertexAttribPointer(b,D,z,F,W,K)}function x(b,D,z,F){_();const W=F.attributes,K=z.getAttributes(),Y=D.defaultAttributeValues;for(const Z in K){const H=K[Z];if(H.location>=0){let st=W[Z];if(st===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(st=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(st=b.instanceColor)),st!==void 0){const ht=st.normalized,dt=st.itemSize,At=t.get(st);if(At===void 0)continue;const Pt=At.buffer,V=At.type,J=At.bytesPerElement,St=V===s.INT||V===s.UNSIGNED_INT||st.gpuType===ph;if(st.isInterleavedBufferAttribute){const it=st.data,Lt=it.stride,Ht=st.offset;if(it.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,it.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let It=0;It<H.locationSize;It++)g(H.location+It);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let It=0;It<H.locationSize;It++)y(H.location+It,dt/H.locationSize,V,ht,Lt*J,(Ht+dt/H.locationSize*It)*J,St)}else{if(st.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)p(H.location+it,st.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let it=0;it<H.locationSize;it++)g(H.location+it);s.bindBuffer(s.ARRAY_BUFFER,Pt);for(let it=0;it<H.locationSize;it++)y(H.location+it,dt/H.locationSize,V,ht,dt*J,dt/H.locationSize*it*J,St)}}else if(Y!==void 0){const ht=Y[Z];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(H.location,ht);break;case 3:s.vertexAttrib3fv(H.location,ht);break;case 4:s.vertexAttrib4fv(H.location,ht);break;default:s.vertexAttrib1fv(H.location,ht)}}}}M()}function I(){L();for(const b in n){const D=n[b];for(const z in D){const F=D[z];for(const W in F)h(F[W].object),delete F[W];delete D[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const z in D){const F=D[z];for(const W in F)h(F[W].object),delete F[W];delete D[z]}delete n[b.id]}function R(b){for(const D in n){const z=n[D];if(z[b.id]===void 0)continue;const F=z[b.id];for(const W in F)h(F[W].object),delete F[W];delete z[b.id]}}function L(){T(),o=!0,r!==i&&(r=i,l(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Tv(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<l.length;m++)o(l[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ev(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==Mn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===$r&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==pi&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!L)}function c(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=m>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:w}}function Av(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ji,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{const M=r?0:n,y=M*4;let x=p.clippingState||null;c.value=x,x=h(m,f,y,d);for(let I=0;I!==y;++I)x[I]=e[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function wv(s){let t=new WeakMap;function e(o,a){return a===_l?o.mapping=Ys:a===xl&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===_l||a===xl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Bg(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Eh extends $p{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fs=4,Vu=[.125,.215,.35,.446,.526,.582],es=20,uc=new Eh,Gu=new Dt;let fc=null,dc=0,pc=0,mc=!1;const Qi=(1+Math.sqrt(5))/2,ws=1/Qi,Wu=[new P(-Qi,ws,0),new P(Qi,ws,0),new P(-ws,0,Qi),new P(ws,0,Qi),new P(0,Qi,-ws),new P(0,Qi,ws),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fc,dc,pc),this._renderer.xr.enabled=mc,t.scissorTest=!1,To(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ys||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),pc=this._renderer.getActiveMipmapLevel(),mc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:$r,format:Mn,colorSpace:Je,depthBuffer:!1},i=qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rv(r)),this._blurMaterial=Cv(r,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,uc)}_sceneToCubeUV(t,e,n,i){const a=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Gu),h.toneMapping=ki,h.autoClear=!1;const d=new On({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),m=new ae(new ls,d);let _=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,_=!0):(d.color.copy(Gu),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;To(i,M*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ys||t.mapping===js;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;To(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,uc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wu[(i-r-1)%Wu.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ae(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*es-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):es;g>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);const p=[];let M=0;for(let R=0;R<es;++R){const L=R/_,T=Math.exp(-L*L/2);p.push(T),R===0?M+=T:R<g&&(M+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const x=this._sizeLods[i],I=3*x*(i>y-Fs?i-y+Fs:0),w=4*(this._cubeSize-x);To(e,I,w,3*x,2*x),c.setRenderTarget(e),c.render(u,uc)}}function Rv(s){const t=[],e=[],n=[];let i=s;const r=s-Fs+1+Vu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Fs?c=Vu[o-s+Fs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*d),y=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let w=0;w<d;w++){const R=w%3*2/3-1,L=w>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];M.set(T,_*m*w),y.set(f,g*m*w);const b=[w,w,w,w,w,w];x.set(b,p*m*w)}const I=new Se;I.setAttribute("position",new jt(M,_)),I.setAttribute("uv",new jt(y,g)),I.setAttribute("faceIndex",new jt(x,p)),t.push(I),i>Fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qu(s,t,e){const n=new cs(s,t,e);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function To(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Cv(s,t,e){const n=new Float32Array(es),i=new P(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ku(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Yu(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function Pv(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===_l||c===xl,h=c===Ys||c===js;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Xu(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Xu(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Lv(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Rr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Iv(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const _=f.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)t.update(f[m],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const _=d[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,m=u.attributes.position;let _=0;if(d!==null){const M=d.array;_=d.version;for(let y=0,x=M.length;y<x;y+=3){const I=M[y+0],w=M[y+1],R=M[y+2];f.push(I,w,w,R,R,I)}}else if(m!==void 0){const M=m.array;_=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const I=y+0,w=y+1,R=y+2;f.push(I,w,w,R,R,I)}}else return;const g=new(Gp(f)?Yp:Kp)(f,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Dv(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Nv(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fv(s,t,e){const n=new WeakMap,i=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let I=a.attributes.position.count*x,w=1;I>t.maxTextureSize&&(w=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const R=new Float32Array(I*w*4*u),L=new Xp(R,I,w,u);L.type=Un,L.needsUpdate=!0;const T=x*4;for(let D=0;D<u;D++){const z=p[D],F=M[D],W=y[D],K=I*w*4*D;for(let Y=0;Y<z.count;Y++){const Z=Y*T;m===!0&&(i.fromBufferAttribute(z,Y),R[K+Z+0]=i.x,R[K+Z+1]=i.y,R[K+Z+2]=i.z,R[K+Z+3]=0),_===!0&&(i.fromBufferAttribute(F,Y),R[K+Z+4]=i.x,R[K+Z+5]=i.y,R[K+Z+6]=i.z,R[K+Z+7]=0),g===!0&&(i.fromBufferAttribute(W,Y),R[K+Z+8]=i.x,R[K+Z+9]=i.y,R[K+Z+10]=i.z,R[K+Z+11]=W.itemSize===4?i.w:1)}}f={count:u,texture:L,size:new gt(I,w)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Uv(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Qp extends Pe{constructor(t,e,n,i,r,o,a,c,l,h=Hs){if(h!==Hs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hs&&(n=as),n===void 0&&h===Zs&&(n=$s),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ze,this.minFilter=c!==void 0?c:Ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const tm=new Pe,ju=new Qp(1,1),em=new Xp,nm=new bg,im=new Zp,$u=[],Zu=[],Ju=new Float32Array(16),Qu=new Float32Array(9),tf=new Float32Array(4);function rr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=$u[i];if(r===void 0&&(r=new Float32Array(i),$u[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Le(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Pa(s,t){let e=Zu[t];e===void 0&&(e=new Int32Array(t),Zu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ov(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function kv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function Hv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function zv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;tf.set(n),s.uniformMatrix2fv(this.addr,!1,tf),Ie(e,n)}}function Vv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Qu.set(n),s.uniformMatrix3fv(this.addr,!1,Qu),Ie(e,n)}}function Gv(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Le(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Le(e,n))return;Ju.set(n),s.uniformMatrix4fv(this.addr,!1,Ju),Ie(e,n)}}function Wv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Xv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function qv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function Kv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function Yv(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function jv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function $v(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function Zv(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function Jv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ju.compareFunction=Vp,r=ju):r=tm,e.setTexture2D(t||r,i)}function Qv(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||nm,i)}function tM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||im,i)}function eM(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||em,i)}function nM(s){switch(s){case 5126:return Ov;case 35664:return Bv;case 35665:return kv;case 35666:return Hv;case 35674:return zv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return qv;case 35669:case 35673:return Kv;case 5125:return Yv;case 36294:return jv;case 36295:return $v;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}function iM(s,t){s.uniform1fv(this.addr,t)}function sM(s,t){const e=rr(t,this.size,2);s.uniform2fv(this.addr,e)}function rM(s,t){const e=rr(t,this.size,3);s.uniform3fv(this.addr,e)}function oM(s,t){const e=rr(t,this.size,4);s.uniform4fv(this.addr,e)}function aM(s,t){const e=rr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cM(s,t){const e=rr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function lM(s,t){const e=rr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function hM(s,t){s.uniform1iv(this.addr,t)}function uM(s,t){s.uniform2iv(this.addr,t)}function fM(s,t){s.uniform3iv(this.addr,t)}function dM(s,t){s.uniform4iv(this.addr,t)}function pM(s,t){s.uniform1uiv(this.addr,t)}function mM(s,t){s.uniform2uiv(this.addr,t)}function gM(s,t){s.uniform3uiv(this.addr,t)}function _M(s,t){s.uniform4uiv(this.addr,t)}function xM(s,t,e){const n=this.cache,i=t.length,r=Pa(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||tm,r[o])}function vM(s,t,e){const n=this.cache,i=t.length,r=Pa(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||nm,r[o])}function MM(s,t,e){const n=this.cache,i=t.length,r=Pa(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||im,r[o])}function yM(s,t,e){const n=this.cache,i=t.length,r=Pa(e,i);Le(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||em,r[o])}function bM(s){switch(s){case 5126:return iM;case 35664:return sM;case 35665:return rM;case 35666:return oM;case 35674:return aM;case 35675:return cM;case 35676:return lM;case 5124:case 35670:return hM;case 35667:case 35671:return uM;case 35668:case 35672:return fM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return mM;case 36295:return gM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return xM;case 35679:case 36299:case 36307:return vM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return yM}}class SM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nM(e.type)}}class TM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bM(e.type)}}class EM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function ef(s,t){s.seq.push(t),s.map[t.id]=t}function AM(s,t,e){const n=s.name,i=n.length;for(gc.lastIndex=0;;){const r=gc.exec(n),o=gc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ef(e,l===void 0?new SM(a,s,t):new TM(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new EM(a),ef(e,u)),e=u}}}class ca{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);AM(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function nf(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const wM=37297;let RM=0;function CM(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sf=new Jt;function PM(s){ne._getMatrix(sf,ne.workingColorSpace,s);const t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Ca:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rf(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+CM(s.getShaderSource(t),o)}else return i}function LM(s,t){const e=PM(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function IM(s,t){let e;switch(t){case D0:e="Linear";break;case N0:e="Reinhard";break;case F0:e="Cineon";break;case Rp:e="ACESFilmic";break;case O0:e="AgX";break;case B0:e="Neutral";break;case U0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Eo=new P;function DM(){ne.getLuminanceCoefficients(Eo);const s=Eo.x.toFixed(4),t=Eo.y.toFixed(4),e=Eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function FM(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function UM(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Cr(s){return s!==""}function of(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function af(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const OM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(s){return s.replace(OM,kM)}const BM=new Map;function kM(s,t){let e=Qt[t];if(e===void 0){const n=BM.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}const HM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(s){return s.replace(HM,zM)}function zM(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lf(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function VM(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ap?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===wp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function GM(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case js:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function WM(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case js:t="ENVMAP_MODE_REFRACTION";break}return t}function XM(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dh:t="ENVMAP_BLENDING_MULTIPLY";break;case L0:t="ENVMAP_BLENDING_MIX";break;case I0:t="ENVMAP_BLENDING_ADD";break}return t}function qM(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function KM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=VM(e),l=GM(e),h=WM(e),u=XM(e),f=qM(e),d=NM(e),m=FM(r),_=i.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(g=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[lf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ki?"#define TONE_MAPPING":"",e.toneMapping!==ki?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ki?IM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,LM("linearToOutputTexel",e.outputColorSpace),DM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Kl(o),o=of(o,e),o=af(o,e),a=Kl(a),a=of(a,e),a=af(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+o,x=M+p+a,I=nf(i,i.VERTEX_SHADER,y),w=nf(i,i.FRAGMENT_SHADER,x);i.attachShader(_,I),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(w).trim();let K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,w);else{const Z=rf(i,I,"vertex"),H=rf(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Z+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(F===""||W==="")&&(Y=!1);Y&&(D.diagnostics={runnable:K,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:W,prefix:p}})}i.deleteShader(I),i.deleteShader(w),L=new ca(i,_),T=UM(i,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(_,wM)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=RM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}let YM=0;class jM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new $M(t),e.set(t,n)),n}}class $M{constructor(t){this.id=YM++,this.code=t,this.usedTimes=0}}function ZM(s,t,e,n,i,r,o){const a=new Sh,c=new jM,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return l.add(T),T===0?"uv":`uv${T}`}function g(T,b,D,z,F){const W=z.fog,K=F.geometry,Y=T.isMeshStandardMaterial?z.environment:null,Z=(T.isMeshStandardMaterial?e:t).get(T.envMap||Y),H=Z&&Z.mapping===Ra?Z.image.height:null,st=m[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,dt=ht!==void 0?ht.length:0;let At=0;K.morphAttributes.position!==void 0&&(At=1),K.morphAttributes.normal!==void 0&&(At=2),K.morphAttributes.color!==void 0&&(At=3);let Pt,V,J,St;if(st){const se=Wn[st];Pt=se.vertexShader,V=se.fragmentShader}else Pt=T.vertexShader,V=T.fragmentShader,c.update(T),J=c.getVertexShaderID(T),St=c.getFragmentShaderID(T);const it=s.getRenderTarget(),Lt=s.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,Xt=!!T.map,tt=!!T.matcap,ut=!!Z,C=!!T.aoMap,ot=!!T.lightMap,et=!!T.bumpMap,ft=!!T.normalMap,lt=!!T.displacementMap,Ct=!!T.emissiveMap,_t=!!T.metalnessMap,E=!!T.roughnessMap,S=T.anisotropy>0,k=T.clearcoat>0,G=T.dispersion>0,Q=T.iridescence>0,j=T.sheen>0,xt=T.transmission>0,ct=S&&!!T.anisotropyMap,vt=k&&!!T.clearcoatMap,Ot=k&&!!T.clearcoatNormalMap,at=k&&!!T.clearcoatRoughnessMap,wt=Q&&!!T.iridescenceMap,Tt=Q&&!!T.iridescenceThicknessMap,zt=j&&!!T.sheenColorMap,Et=j&&!!T.sheenRoughnessMap,te=!!T.specularMap,qt=!!T.specularColorMap,ie=!!T.specularIntensityMap,N=xt&&!!T.transmissionMap,mt=xt&&!!T.thicknessMap,$=!!T.gradientMap,nt=!!T.alphaMap,Mt=T.alphaTest>0,bt=!!T.alphaHash,Wt=!!T.extensions;let ge=ki;T.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ge=s.toneMapping);const De={shaderID:st,shaderType:T.type,shaderName:T.name,vertexShader:Pt,fragmentShader:V,defines:T.defines,customVertexShaderID:J,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Je,alphaToCoverage:!!T.alphaToCoverage,map:Xt,matcap:tt,envMap:ut,envMapMode:ut&&Z.mapping,envMapCubeUVHeight:H,aoMap:C,lightMap:ot,bumpMap:et,normalMap:ft,displacementMap:f&&lt,emissiveMap:Ct,normalMapObjectSpace:ft&&T.normalMapType===G0,normalMapTangentSpace:ft&&T.normalMapType===yh,metalnessMap:_t,roughnessMap:E,anisotropy:S,anisotropyMap:ct,clearcoat:k,clearcoatMap:vt,clearcoatNormalMap:Ot,clearcoatRoughnessMap:at,dispersion:G,iridescence:Q,iridescenceMap:wt,iridescenceThicknessMap:Tt,sheen:j,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:te,specularColorMap:qt,specularIntensityMap:ie,transmission:xt,transmissionMap:N,thicknessMap:mt,gradientMap:$,opaque:T.transparent===!1&&T.blending===ks&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:Mt,alphaHash:bt,combine:T.combine,mapUv:Xt&&_(T.map.channel),aoMapUv:C&&_(T.aoMap.channel),lightMapUv:ot&&_(T.lightMap.channel),bumpMapUv:et&&_(T.bumpMap.channel),normalMapUv:ft&&_(T.normalMap.channel),displacementMapUv:lt&&_(T.displacementMap.channel),emissiveMapUv:Ct&&_(T.emissiveMap.channel),metalnessMapUv:_t&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:ct&&_(T.anisotropyMap.channel),clearcoatMapUv:vt&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ot&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(T.sheenRoughnessMap.channel),specularMapUv:te&&_(T.specularMap.channel),specularColorMapUv:qt&&_(T.specularColorMap.channel),specularIntensityMapUv:ie&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:mt&&_(T.thicknessMap.channel),alphaMapUv:nt&&_(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ft||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Xt||nt),fog:!!W,useFog:T.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:At,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ge,decodeVideoTexture:Xt&&T.map.isVideoTexture===!0&&ne.getTransfer(T.map.colorSpace)===pe,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&ne.getTransfer(T.emissiveMap.colorSpace)===pe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ve,flipSided:T.side===$e,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Wt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&T.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)b.push(D),b.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(M(b,T),y(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function M(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=m[T.type];let D;if(b){const z=Wn[b];D=Ng.clone(z.uniforms)}else D=T.uniforms;return D}function I(T,b){let D;for(let z=0,F=h.length;z<F;z++){const W=h[z];if(W.cacheKey===b){D=W,++D.usedTimes;break}}return D===void 0&&(D=new KM(s,b,T,r),h.push(D)),D}function w(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function R(T){c.remove(T)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function JM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function QM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function uf(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,m,_,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,m,_,g){const p=o(u,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||QM),n.length>1&&n.sort(f||hf),i.length>1&&i.sort(f||hf)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function ty(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new uf,s.set(n,[o])):i>=r.length?(o=new uf,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ey(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Dt};break;case"SpotLight":e={position:new P,direction:new P,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function ny(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let iy=0;function sy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function ry(s){const t=new ey,e=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new Gt,o=new Gt;function a(l){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,M=0,y=0,x=0,I=0,w=0,R=0;l.sort(sy);for(let T=0,b=l.length;T<b;T++){const D=l[T],z=D.color,F=D.intensity,W=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*F,u+=z.g*F,f+=z.b*F;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],F);R++}else if(D.isDirectionalLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=K,n.directionalShadowMatrix[d]=D.shadow.matrix,M++}n.directional[d]=Y,d++}else if(D.isSpotLight){const Y=t.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(F),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;const Z=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,Z.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,x++}_++}else if(D.isRectAreaLight){const Y=t.get(D);Y.color.copy(z).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=Y,g++}else if(D.isPointLight){const Y=t.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=Y,m++}else if(D.isHemisphereLight){const Y=t.get(D);Y.skyColor.copy(D.color).multiplyScalar(F),Y.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=Y,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==y||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=y,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=R,n.version=iy++)}function c(l,h){let u=0,f=0,d=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function ff(s){const t=new ry(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function oy(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ff(s),t.set(i,[a])):r>=o.length?(a=new ff(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class ay extends Bn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cy extends Bn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
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
}`;function uy(s,t,e){let n=new Th;const i=new gt,r=new gt,o=new ce,a=new ay({depthPacking:V0}),c=new cy,l={},h=e.maxTextureSize,u={[di]:$e,[$e]:di,[Ve]:Ve},f=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ly,fragmentShader:hy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Se;m.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ap;let p=this.type;this.render=function(w,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Bi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const F=p!==ai&&this.type===ai,W=p===ai&&this.type!==ai;for(let K=0,Y=w.length;K<Y;K++){const Z=w[K],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||F===!0||W===!0){const dt=this.type!==ai?{minFilter:Ze,magFilter:Ze}:{};H.map!==null&&H.map.dispose(),H.map=new cs(i.x,i.y,dt),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ht=H.getViewportCount();for(let dt=0;dt<ht;dt++){const At=H.getViewport(dt);o.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),z.viewport(o),H.updateMatrices(Z,dt),n=H.getFrustum(),x(R,L,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&M(H,L),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(T,b,D)};function M(w,R){const L=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new cs(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,d,_,null)}function y(w,R,L,T){let b=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)b=D;else if(b=L.isPointLight===!0?c:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=b.uuid,F=R.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let K=W[F];K===void 0&&(K=b.clone(),W[F]=K,R.addEventListener("dispose",I)),b=K}if(b.visible=R.visible,b.wireframe=R.wireframe,T===ai?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=s.properties.get(b);z.light=L}return b}function x(w,R,L,T,b){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ai)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const F=t.update(w),W=w.material;if(Array.isArray(W)){const K=F.groups;for(let Y=0,Z=K.length;Y<Z;Y++){const H=K[Y],st=W[H.materialIndex];if(st&&st.visible){const ht=y(w,st,T,b);w.onBeforeShadow(s,w,R,L,F,ht,H),s.renderBufferDirect(L,null,F,ht,w,H),w.onAfterShadow(s,w,R,L,F,ht,H)}}}else if(W.visible){const K=y(w,W,T,b);w.onBeforeShadow(s,w,R,L,F,K,null),s.renderBufferDirect(L,null,F,K,w,null),w.onAfterShadow(s,w,R,L,F,K,null)}}const z=w.children;for(let F=0,W=z.length;F<W;F++)x(z[F],R,L,T,b)}function I(w){w.target.removeEventListener("dispose",I);for(const L in l){const T=l[L],b=w.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const fy={[hl]:ul,[fl]:ml,[dl]:gl,[Ks]:pl,[ul]:hl,[ml]:fl,[gl]:dl,[pl]:Ks};function dy(s,t){function e(){let N=!1;const mt=new ce;let $=null;const nt=new ce(0,0,0,0);return{setMask:function(Mt){$!==Mt&&!N&&(s.colorMask(Mt,Mt,Mt,Mt),$=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,bt,Wt,ge,De){De===!0&&(Mt*=ge,bt*=ge,Wt*=ge),mt.set(Mt,bt,Wt,ge),nt.equals(mt)===!1&&(s.clearColor(Mt,bt,Wt,ge),nt.copy(mt))},reset:function(){N=!1,$=null,nt.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,$=null,nt=null,Mt=null;return{setReversed:function(bt){if(mt!==bt){const Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);const ge=Mt;Mt=null,this.setClear(ge)}mt=bt},getReversed:function(){return mt},setTest:function(bt){bt?it(s.DEPTH_TEST):Lt(s.DEPTH_TEST)},setMask:function(bt){$!==bt&&!N&&(s.depthMask(bt),$=bt)},setFunc:function(bt){if(mt&&(bt=fy[bt]),nt!==bt){switch(bt){case hl:s.depthFunc(s.NEVER);break;case ul:s.depthFunc(s.ALWAYS);break;case fl:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case dl:s.depthFunc(s.EQUAL);break;case pl:s.depthFunc(s.GEQUAL);break;case ml:s.depthFunc(s.GREATER);break;case gl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=bt}},setLocked:function(bt){N=bt},setClear:function(bt){Mt!==bt&&(mt&&(bt=1-bt),s.clearDepth(bt),Mt=bt)},reset:function(){N=!1,$=null,nt=null,Mt=null,mt=!1}}}function i(){let N=!1,mt=null,$=null,nt=null,Mt=null,bt=null,Wt=null,ge=null,De=null;return{setTest:function(se){N||(se?it(s.STENCIL_TEST):Lt(s.STENCIL_TEST))},setMask:function(se){mt!==se&&!N&&(s.stencilMask(se),mt=se)},setFunc:function(se,Qe,bn){($!==se||nt!==Qe||Mt!==bn)&&(s.stencilFunc(se,Qe,bn),$=se,nt=Qe,Mt=bn)},setOp:function(se,Qe,bn){(bt!==se||Wt!==Qe||ge!==bn)&&(s.stencilOp(se,Qe,bn),bt=se,Wt=Qe,ge=bn)},setLocked:function(se){N=se},setClear:function(se){De!==se&&(s.clearStencil(se),De=se)},reset:function(){N=!1,mt=null,$=null,nt=null,Mt=null,bt=null,Wt=null,ge=null,De=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,I=null,w=null,R=new Dt(0,0,0),L=0,T=!1,b=null,D=null,z=null,F=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=Z>=2);let st=null,ht={};const dt=s.getParameter(s.SCISSOR_BOX),At=s.getParameter(s.VIEWPORT),Pt=new ce().fromArray(dt),V=new ce().fromArray(At);function J(N,mt,$,nt){const Mt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(N,bt),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Wt=0;Wt<$;Wt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(mt+Wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return bt}const St={};St[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(Ks),et(!1),ft(uu),it(s.CULL_FACE),C(Bi);function it(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Lt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ht(N,mt){return u[N]!==mt?(s.bindFramebuffer(N,mt),u[N]=mt,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function It(N,mt){let $=d,nt=!1;if(N){$=f.get(mt),$===void 0&&($=[],f.set(mt,$));const Mt=N.textures;if($.length!==Mt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,Wt=Mt.length;bt<Wt;bt++)$[bt]=s.COLOR_ATTACHMENT0+bt;$.length=Mt.length,nt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,nt=!0);nt&&s.drawBuffers($)}function Xt(N){return m!==N?(s.useProgram(N),m=N,!0):!1}const tt={[ts]:s.FUNC_ADD,[p0]:s.FUNC_SUBTRACT,[m0]:s.FUNC_REVERSE_SUBTRACT};tt[g0]=s.MIN,tt[_0]=s.MAX;const ut={[x0]:s.ZERO,[v0]:s.ONE,[M0]:s.SRC_COLOR,[cl]:s.SRC_ALPHA,[A0]:s.SRC_ALPHA_SATURATE,[T0]:s.DST_COLOR,[b0]:s.DST_ALPHA,[y0]:s.ONE_MINUS_SRC_COLOR,[ll]:s.ONE_MINUS_SRC_ALPHA,[E0]:s.ONE_MINUS_DST_COLOR,[S0]:s.ONE_MINUS_DST_ALPHA,[w0]:s.CONSTANT_COLOR,[R0]:s.ONE_MINUS_CONSTANT_COLOR,[C0]:s.CONSTANT_ALPHA,[P0]:s.ONE_MINUS_CONSTANT_ALPHA};function C(N,mt,$,nt,Mt,bt,Wt,ge,De,se){if(N===Bi){_===!0&&(Lt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),N!==d0){if(N!==g||se!==T){if((p!==ts||x!==ts)&&(s.blendEquation(s.FUNC_ADD),p=ts,x=ts),se)switch(N){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fu:s.blendFunc(s.ONE,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,y=null,I=null,w=null,R.set(0,0,0),L=0,g=N,T=se}return}Mt=Mt||mt,bt=bt||$,Wt=Wt||nt,(mt!==p||Mt!==x)&&(s.blendEquationSeparate(tt[mt],tt[Mt]),p=mt,x=Mt),($!==M||nt!==y||bt!==I||Wt!==w)&&(s.blendFuncSeparate(ut[$],ut[nt],ut[bt],ut[Wt]),M=$,y=nt,I=bt,w=Wt),(ge.equals(R)===!1||De!==L)&&(s.blendColor(ge.r,ge.g,ge.b,De),R.copy(ge),L=De),g=N,T=!1}function ot(N,mt){N.side===Ve?Lt(s.CULL_FACE):it(s.CULL_FACE);let $=N.side===$e;mt&&($=!$),et($),N.blending===ks&&N.transparent===!1?C(Bi):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const nt=N.stencilWrite;a.setTest(nt),nt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){b!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),b=N)}function ft(N){N!==u0?(it(s.CULL_FACE),N!==D&&(N===uu?s.cullFace(s.BACK):N===f0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Lt(s.CULL_FACE),D=N}function lt(N){N!==z&&(Y&&s.lineWidth(N),z=N)}function Ct(N,mt,$){N?(it(s.POLYGON_OFFSET_FILL),(F!==mt||W!==$)&&(s.polygonOffset(mt,$),F=mt,W=$)):Lt(s.POLYGON_OFFSET_FILL)}function _t(N){N?it(s.SCISSOR_TEST):Lt(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+K-1),st!==N&&(s.activeTexture(N),st=N)}function S(N,mt,$){$===void 0&&(st===null?$=s.TEXTURE0+K-1:$=st);let nt=ht[$];nt===void 0&&(nt={type:void 0,texture:void 0},ht[$]=nt),(nt.type!==N||nt.texture!==mt)&&(st!==$&&(s.activeTexture($),st=$),s.bindTexture(N,mt||St[N]),nt.type=N,nt.texture=mt)}function k(){const N=ht[st];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){Pt.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Pt.copy(N))}function Et(N){V.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),V.copy(N))}function te(N,mt){let $=l.get(mt);$===void 0&&($=new WeakMap,l.set(mt,$));let nt=$.get(N);nt===void 0&&(nt=s.getUniformBlockIndex(mt,N.name),$.set(N,nt))}function qt(N,mt){const nt=l.get(mt).get(N);c.get(mt)!==nt&&(s.uniformBlockBinding(mt,nt,N.__bindingPointIndex),c.set(mt,nt))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,I=null,w=null,R=new Dt(0,0,0),L=0,T=!1,b=null,D=null,z=null,F=null,W=null,Pt.set(0,0,s.canvas.width,s.canvas.height),V.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Lt,bindFramebuffer:Ht,drawBuffers:It,useProgram:Xt,setBlending:C,setMaterial:ot,setFlipSided:et,setCullFace:ft,setLineWidth:lt,setPolygonOffset:Ct,setScissorTest:_t,activeTexture:E,bindTexture:S,unbindTexture:k,compressedTexImage2D:G,compressedTexImage3D:Q,texImage2D:wt,texImage3D:Tt,updateUBOMapping:te,uniformBlockBinding:qt,texStorage2D:Ot,texStorage3D:at,texSubImage2D:j,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:vt,scissor:zt,viewport:Et,reset:ie}}function df(s,t,e,n){const i=py(n);switch(e){case Fp:return s*t;case Op:return s*t;case Bp:return s*t*2;case _h:return s*t/i.components*i.byteLength;case xh:return s*t/i.components*i.byteLength;case kp:return s*t*2/i.components*i.byteLength;case vh:return s*t*2/i.components*i.byteLength;case Up:return s*t*3/i.components*i.byteLength;case Mn:return s*t*4/i.components*i.byteLength;case Mh:return s*t*4/i.components*i.byteLength;case ia:case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ml:case bl:return Math.max(s,16)*Math.max(t,8)/4;case vl:case yl:return Math.max(s,8)*Math.max(t,8)/2;case Sl:case Tl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case El:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ol:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case kl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case aa:case Hl:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Hp:case Vl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Gl:case Wl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function py(s){switch(s){case pi:case Ip:return{byteLength:1,components:1};case Hr:case Dp:case $r:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case as:case ph:case Un:return{byteLength:4,components:1};case Np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function my(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,S){return d?new OffscreenCanvas(E,S):Gr("canvas")}function _(E,S,k){let G=1;const Q=_t(E);if((Q.width>k||Q.height>k)&&(G=k/Math.max(Q.width,Q.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(G*Q.width),xt=Math.floor(G*Q.height);u===void 0&&(u=m(j,xt));const ct=S?m(j,xt):u;return ct.width=j,ct.height=xt,ct.getContext("2d").drawImage(E,0,0,j,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+xt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function g(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,S,k,G,Q=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=S;if(S===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),S===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),S===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),S===s.RGBA){const xt=Q?Ca:ne.getTransfer(G);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=xt===pe?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(E,S){let k;return E?S===null||S===as||S===$s?k=s.DEPTH24_STENCIL8:S===Un?k=s.DEPTH32F_STENCIL8:S===Hr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===as||S===$s?k=s.DEPTH_COMPONENT24:S===Un?k=s.DEPTH_COMPONENT32F:S===Hr&&(k=s.DEPTH_COMPONENT16),k}function I(E,S){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ze&&E.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function w(E){const S=E.target;S.removeEventListener("dispose",w),L(S),S.isVideoTexture&&h.delete(S)}function R(E){const S=E.target;S.removeEventListener("dispose",R),b(S)}function L(E){const S=n.get(E);if(S.__webglInit===void 0)return;const k=E.source,G=f.get(k);if(G){const Q=G[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(E),Object.keys(G).length===0&&f.delete(k)}n.remove(E)}function T(E){const S=n.get(E);s.deleteTexture(S.__webglTexture);const k=E.source,G=f.get(k);delete G[S.__cacheKey],o.memory.textures--}function b(E){const S=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(S.__webglFramebuffer[G]))for(let Q=0;Q<S.__webglFramebuffer[G].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[G][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[G]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[G])}else{if(Array.isArray(S.__webglFramebuffer))for(let G=0;G<S.__webglFramebuffer.length;G++)s.deleteFramebuffer(S.__webglFramebuffer[G]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let G=0;G<S.__webglColorRenderbuffer.length;G++)S.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[G]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=E.textures;for(let G=0,Q=k.length;G<Q;G++){const j=n.get(k[G]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[G])}n.remove(E)}let D=0;function z(){D=0}function F(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function W(E){const S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.wrapR||0),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.colorSpace),S.join()}function K(E,S){const k=n.get(E);if(E.isVideoTexture&&lt(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(k,E,S);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function Y(E,S){const k=n.get(E);if(E.version>0&&k.__version!==E.version){V(k,E,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Z(E,S){const k=n.get(E);if(E.version>0&&k.__version!==E.version){V(k,E,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function H(E,S){const k=n.get(E);if(E.version>0&&k.__version!==E.version){J(k,E,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}const st={[os]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[ga]:s.MIRRORED_REPEAT},ht={[Ze]:s.NEAREST,[Lp]:s.NEAREST_MIPMAP_NEAREST,[wr]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[na]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},dt={[W0]:s.NEVER,[$0]:s.ALWAYS,[X0]:s.LESS,[Vp]:s.LEQUAL,[q0]:s.EQUAL,[j0]:s.GEQUAL,[K0]:s.GREATER,[Y0]:s.NOTEQUAL};function At(E,S){if(S.type===Un&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===na||S.magFilter===wr||S.magFilter===qn||S.minFilter===on||S.minFilter===na||S.minFilter===wr||S.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,st[S.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ht[S.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ze||S.minFilter!==wr&&S.minFilter!==qn||S.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Pt(E,S){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",w));const G=S.source;let Q=f.get(G);Q===void 0&&(Q={},f.set(G,Q));const j=W(S);if(j!==E.__cacheKey){Q[j]===void 0&&(Q[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[j].usedTimes++;const xt=Q[E.__cacheKey];xt!==void 0&&(Q[E.__cacheKey].usedTimes--,xt.usedTimes===0&&T(S)),E.__cacheKey=j,E.__webglTexture=Q[j].texture}return k}function V(E,S,k){let G=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=s.TEXTURE_3D);const Q=Pt(E,S),j=S.source;e.bindTexture(G,E.__webglTexture,s.TEXTURE0+k);const xt=n.get(j);if(j.version!==xt.__version||Q===!0){e.activeTexture(s.TEXTURE0+k);const ct=ne.getPrimaries(ne.workingColorSpace),vt=S.colorSpace===Di?null:ne.getPrimaries(S.colorSpace),Ot=S.colorSpace===Di||ct===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);let at=_(S.image,!1,i.maxTextureSize);at=Ct(S,at);const wt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let zt=y(S.internalFormat,wt,Tt,S.colorSpace,S.isVideoTexture);At(G,S);let Et;const te=S.mipmaps,qt=S.isVideoTexture!==!0,ie=xt.__version===void 0||Q===!0,N=j.dataReady,mt=I(S,at);if(S.isDepthTexture)zt=x(S.format===Zs,S.type),ie&&(qt?e.texStorage2D(s.TEXTURE_2D,1,zt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,zt,at.width,at.height,0,wt,Tt,null));else if(S.isDataTexture)if(te.length>0){qt&&ie&&e.texStorage2D(s.TEXTURE_2D,mt,zt,te[0].width,te[0].height);for(let $=0,nt=te.length;$<nt;$++)Et=te[$],qt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,wt,Tt,Et.data);S.generateMipmaps=!1}else qt?(ie&&e.texStorage2D(s.TEXTURE_2D,mt,zt,at.width,at.height),N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,wt,Tt,at.data)):e.texImage2D(s.TEXTURE_2D,0,zt,at.width,at.height,0,wt,Tt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,zt,te[0].width,te[0].height,at.depth);for(let $=0,nt=te.length;$<nt;$++)if(Et=te[$],S.format!==Mn)if(wt!==null)if(qt){if(N)if(S.layerUpdates.size>0){const Mt=df(Et.width,Et.height,S.format,S.type);for(const bt of S.layerUpdates){const Wt=Et.data.subarray(bt*Mt/Et.data.BYTES_PER_ELEMENT,(bt+1)*Mt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,bt,Et.width,Et.height,1,wt,Wt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,at.depth,wt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,at.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,at.depth,wt,Tt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,zt,Et.width,Et.height,at.depth,0,wt,Tt,Et.data)}else{qt&&ie&&e.texStorage2D(s.TEXTURE_2D,mt,zt,te[0].width,te[0].height);for(let $=0,nt=te.length;$<nt;$++)Et=te[$],S.format!==Mn?wt!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,Et.width,Et.height,wt,Tt,Et.data):e.texImage2D(s.TEXTURE_2D,$,zt,Et.width,Et.height,0,wt,Tt,Et.data)}else if(S.isDataArrayTexture)if(qt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,zt,at.width,at.height,at.depth),N)if(S.layerUpdates.size>0){const $=df(at.width,at.height,S.format,S.type);for(const nt of S.layerUpdates){const Mt=at.data.subarray(nt*$/at.data.BYTES_PER_ELEMENT,(nt+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,wt,Tt,Mt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Tt,at.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,at.width,at.height,at.depth,0,wt,Tt,at.data);else if(S.isData3DTexture)qt?(ie&&e.texStorage3D(s.TEXTURE_3D,mt,zt,at.width,at.height,at.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Tt,at.data)):e.texImage3D(s.TEXTURE_3D,0,zt,at.width,at.height,at.depth,0,wt,Tt,at.data);else if(S.isFramebufferTexture){if(ie)if(qt)e.texStorage2D(s.TEXTURE_2D,mt,zt,at.width,at.height);else{let $=at.width,nt=at.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(s.TEXTURE_2D,Mt,zt,$,nt,0,wt,Tt,null),$>>=1,nt>>=1}}else if(te.length>0){if(qt&&ie){const $=_t(te[0]);e.texStorage2D(s.TEXTURE_2D,mt,zt,$.width,$.height)}for(let $=0,nt=te.length;$<nt;$++)Et=te[$],qt?N&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,wt,Tt,Et):e.texImage2D(s.TEXTURE_2D,$,zt,wt,Tt,Et);S.generateMipmaps=!1}else if(qt){if(ie){const $=_t(at);e.texStorage2D(s.TEXTURE_2D,mt,zt,$.width,$.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt,Tt,at)}else e.texImage2D(s.TEXTURE_2D,0,zt,wt,Tt,at);g(S)&&p(G),xt.__version=j.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function J(E,S,k){if(S.image.length!==6)return;const G=Pt(E,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);const j=n.get(Q);if(Q.version!==j.__version||G===!0){e.activeTexture(s.TEXTURE0+k);const xt=ne.getPrimaries(ne.workingColorSpace),ct=S.colorSpace===Di?null:ne.getPrimaries(S.colorSpace),vt=S.colorSpace===Di||xt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Ot=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let nt=0;nt<6;nt++)!Ot&&!at?wt[nt]=_(S.image[nt],!0,i.maxCubemapSize):wt[nt]=at?S.image[nt].image:S.image[nt],wt[nt]=Ct(S,wt[nt]);const Tt=wt[0],zt=r.convert(S.format,S.colorSpace),Et=r.convert(S.type),te=y(S.internalFormat,zt,Et,S.colorSpace),qt=S.isVideoTexture!==!0,ie=j.__version===void 0||G===!0,N=Q.dataReady;let mt=I(S,Tt);At(s.TEXTURE_CUBE_MAP,S);let $;if(Ot){qt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,te,Tt.width,Tt.height);for(let nt=0;nt<6;nt++){$=wt[nt].mipmaps;for(let Mt=0;Mt<$.length;Mt++){const bt=$[Mt];S.format!==Mn?zt!==null?qt?N&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,0,0,bt.width,bt.height,zt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,te,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,0,0,bt.width,bt.height,zt,Et,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt,te,bt.width,bt.height,0,zt,Et,bt.data)}}}else{if($=S.mipmaps,qt&&ie){$.length>0&&mt++;const nt=_t(wt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,te,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt[nt].width,wt[nt].height,zt,Et,wt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,wt[nt].width,wt[nt].height,0,zt,Et,wt[nt].data);for(let Mt=0;Mt<$.length;Mt++){const Wt=$[Mt].image[nt].image;qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,0,0,Wt.width,Wt.height,zt,Et,Wt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,te,Wt.width,Wt.height,0,zt,Et,Wt.data)}}else{qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,zt,Et,wt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,te,zt,Et,wt[nt]);for(let Mt=0;Mt<$.length;Mt++){const bt=$[Mt];qt?N&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,0,0,zt,Et,bt.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Mt+1,te,zt,Et,bt.image[nt])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),j.__version=Q.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function St(E,S,k,G,Q,j){const xt=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),vt=y(k.internalFormat,xt,ct,k.colorSpace),Ot=n.get(S),at=n.get(k);if(at.__renderTarget=S,!Ot.__hasExternalTextures){const wt=Math.max(1,S.width>>j),Tt=Math.max(1,S.height>>j);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,j,vt,wt,Tt,S.depth,0,xt,ct,null):e.texImage2D(Q,j,vt,wt,Tt,0,xt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,Q,at.__webglTexture,0,et(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,Q,at.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(E,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),S.depthBuffer){const G=S.depthTexture,Q=G&&G.isDepthTexture?G.type:null,j=x(S.stencilBuffer,Q),xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=et(S);ft(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,j,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,j,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,j,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,E)}else{const G=S.textures;for(let Q=0;Q<G.length;Q++){const j=G[Q],xt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),vt=y(j.internalFormat,xt,ct,j.colorSpace),Ot=et(S);k&&ft(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,vt,S.width,S.height):ft(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ot,vt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,vt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=n.get(S.depthTexture);G.__renderTarget=S,(!G.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const Q=G.__webglTexture,j=et(S);if(S.depthTexture.format===Hs)ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Zs)ft(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ht(E){const S=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",Q)};G.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=G}if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Lt(S.__webglFramebuffer,E)}else if(k){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=s.createRenderbuffer(),it(S.__webglDepthbuffer[G],E,!1);else{const Q=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),it(S.__webglDepthbuffer,E,!1);else{const G=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,G,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(E,S,k){const G=n.get(E);S!==void 0&&St(G.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ht(E)}function Xt(E){const S=E.texture,k=n.get(E),G=n.get(S);E.addEventListener("dispose",R);const Q=E.textures,j=E.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=S.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let vt=0;vt<S.mipmaps.length;vt++)k.__webglFramebuffer[ct][vt]=s.createFramebuffer()}else k.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<S.mipmaps.length;ct++)k.__webglFramebuffer[ct]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(xt)for(let ct=0,vt=Q.length;ct<vt;ct++){const Ot=n.get(Q[ct]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&ft(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){const vt=Q[ct];k.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const Ot=r.convert(vt.format,vt.colorSpace),at=r.convert(vt.type),wt=y(vt.internalFormat,Ot,at,vt.colorSpace,E.isXRRenderTarget===!0),Tt=et(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,wt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),it(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),At(s.TEXTURE_CUBE_MAP,S);for(let ct=0;ct<6;ct++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)St(k.__webglFramebuffer[ct][vt],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,vt);else St(k.__webglFramebuffer[ct],E,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ct=0,vt=Q.length;ct<vt;ct++){const Ot=Q[ct],at=n.get(Ot);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),At(s.TEXTURE_2D,Ot),St(k.__webglFramebuffer,E,Ot,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),g(Ot)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,G.__webglTexture),At(ct,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)St(k.__webglFramebuffer[vt],E,S,s.COLOR_ATTACHMENT0,ct,vt);else St(k.__webglFramebuffer,E,S,s.COLOR_ATTACHMENT0,ct,0);g(S)&&p(ct),e.unbindTexture()}E.depthBuffer&&Ht(E)}function tt(E){const S=E.textures;for(let k=0,G=S.length;k<G;k++){const Q=S[k];if(g(Q)){const j=M(E),xt=n.get(Q).__webglTexture;e.bindTexture(j,xt),p(j),e.unbindTexture()}}}const ut=[],C=[];function ot(E){if(E.samples>0){if(ft(E)===!1){const S=E.textures,k=E.width,G=E.height;let Q=s.COLOR_BUFFER_BIT;const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(E),ct=S.length>1;if(ct)for(let vt=0;vt<S.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<S.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const Ot=n.get(S[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ot,0)}s.blitFramebuffer(0,0,k,G,0,0,k,G,Q,s.NEAREST),c===!0&&(ut.length=0,C.length=0,ut.push(s.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(j),C.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,C)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let vt=0;vt<S.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const Ot=n.get(S[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const S=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function et(E){return Math.min(i.maxSamples,E.samples)}function ft(E){const S=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function lt(E){const S=o.render.frame;h.get(E)!==S&&(h.set(E,S),E.update())}function Ct(E,S){const k=E.colorSpace,G=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Je&&k!==Di&&(ne.getTransfer(k)===pe?(G!==Mn||Q!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function _t(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ft}function gy(s,t){function e(n,i=Di){let r;const o=ne.getTransfer(i);if(n===pi)return s.UNSIGNED_BYTE;if(n===mh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===gh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ip)return s.BYTE;if(n===Dp)return s.SHORT;if(n===Hr)return s.UNSIGNED_SHORT;if(n===ph)return s.INT;if(n===as)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===$r)return s.HALF_FLOAT;if(n===Fp)return s.ALPHA;if(n===Up)return s.RGB;if(n===Mn)return s.RGBA;if(n===Op)return s.LUMINANCE;if(n===Bp)return s.LUMINANCE_ALPHA;if(n===Hs)return s.DEPTH_COMPONENT;if(n===Zs)return s.DEPTH_STENCIL;if(n===_h)return s.RED;if(n===xh)return s.RED_INTEGER;if(n===kp)return s.RG;if(n===vh)return s.RG_INTEGER;if(n===Mh)return s.RGBA_INTEGER;if(n===ia||n===sa||n===ra||n===oa)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vl||n===Ml||n===yl||n===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sl||n===Tl||n===El)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sl||n===Tl)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===El)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Al||n===wl||n===Rl||n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Fl||n===Ul||n===Ol||n===Bl||n===kl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Al)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ll)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Il)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ol)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===aa||n===Hl||n===zl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===aa)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hp||n===Vl||n===Gl||n===Wl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class _y extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oe extends ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xy={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;l.inputState.pinching&&f>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`;class yy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Pe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mi({vertexShader:vy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new Jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class by extends sr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,m=null;const _=new yy,g=e.getContextAttributes();let p=null,M=null;const y=[],x=[],I=new gt;let w=null;const R=new Ye;R.viewport=new ce;const L=new Ye;L.viewport=new ce;const T=[R,L],b=new _y;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=y[V];return J===void 0&&(J=new _c,y[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=y[V];return J===void 0&&(J=new _c,y[V]=J),J.getGripSpace()},this.getHand=function(V){let J=y[V];return J===void 0&&(J=new _c,y[V]=J),J.getHandSpace()};function F(V){const J=x.indexOf(V.inputSource);if(J===-1)return;const St=y[J];St!==void 0&&(St.update(V.inputSource,V.frame,l||o),St.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let V=0;V<y.length;V++){const J=x[V];J!==null&&(x[V]=null,y[V].disconnect(J))}D=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,M=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const J={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new cs(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let J=null,St=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=g.stencil?Zs:Hs,St=g.stencil?$s:as);const Lt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Lt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new cs(f.textureWidth,f.textureHeight,{format:Mn,type:pi,depthTexture:new Qp(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(V){for(let J=0;J<V.removed.length;J++){const St=V.removed[J],it=x.indexOf(St);it>=0&&(x[it]=null,y[it].disconnect(St))}for(let J=0;J<V.added.length;J++){const St=V.added[J];let it=x.indexOf(St);if(it===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=x.length){x.push(St),it=Ht;break}else if(x[Ht]===null){x[Ht]=St,it=Ht;break}if(it===-1)break}const Lt=y[it];Lt&&Lt.connect(St)}}const Y=new P,Z=new P;function H(V,J,St){Y.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const it=Y.distanceTo(Z),Lt=J.projectionMatrix.elements,Ht=St.projectionMatrix.elements,It=Lt[14]/(Lt[10]-1),Xt=Lt[14]/(Lt[10]+1),tt=(Lt[9]+1)/Lt[5],ut=(Lt[9]-1)/Lt[5],C=(Lt[8]-1)/Lt[0],ot=(Ht[8]+1)/Ht[0],et=It*C,ft=It*ot,lt=it/(-C+ot),Ct=lt*-C;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ct),V.translateZ(lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Lt[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const _t=It+lt,E=Xt+lt,S=et-Ct,k=ft+(it-Ct),G=tt*Xt/E*_t,Q=ut*Xt/E*_t;V.projectionMatrix.makePerspective(S,k,G,Q,_t,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function st(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let J=V.near,St=V.far;_.texture!==null&&(_.depthNear>0&&(J=_.depthNear),_.depthFar>0&&(St=_.depthFar)),b.near=L.near=R.near=J,b.far=L.far=R.far=St,(D!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,z=b.far),R.layers.mask=V.layers.mask|2,L.layers.mask=V.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;const it=V.parent,Lt=b.cameras;st(b,it);for(let Ht=0;Ht<Lt.length;Ht++)st(Lt[Ht],it);Lt.length===2?H(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),ht(V,b,it)};function ht(V,J,St){St===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(St.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Js*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let dt=null;function At(V,J){if(h=J.getViewerPose(l||o),m=J,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let it=!1;St.length!==b.cameras.length&&(b.cameras.length=0,it=!0);for(let Ht=0;Ht<St.length;Ht++){const It=St[Ht];let Xt=null;if(d!==null)Xt=d.getViewport(It);else{const ut=u.getViewSubImage(f,It);Xt=ut.viewport,Ht===0&&(t.setRenderTargetTextures(M,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(M))}let tt=T[Ht];tt===void 0&&(tt=new Ye,tt.layers.enable(Ht),tt.viewport=new ce,T[Ht]=tt),tt.matrix.fromArray(It.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(It.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ht===0&&(b.matrix.copy(tt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),it===!0&&b.cameras.push(tt)}const Lt=i.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ht=u.getDepthInformation(St[0]);Ht&&Ht.isValid&&Ht.texture&&_.init(t,Ht,i.renderState)}}for(let St=0;St<y.length;St++){const it=x[St],Lt=y[St];it!==null&&Lt!==void 0&&Lt.update(it,J,l||o)}dt&&dt(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Pt=new Jp;Pt.setAnimationLoop(At),this.setAnimationLoop=function(V){dt=V},this.dispose=function(){}}}const Ki=new Hn,Sy=new Gt;function Ty(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,jp(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,Ki.copy(x),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(Ki)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ey(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function l(M,y){let x=i[M.id];x===void 0&&(m(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",g));const I=y.program;n.updateUBOMapping(M,I);const w=t.render.frame;r[M.id]!==w&&(f(M),r[M.id]=w)}function h(M){const y=u();M.__bindingPointIndex=y;const x=s.createBuffer(),I=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,I,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],x=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,R=x.length;w<R;w++){const L=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,b=L.length;T<b;T++){const D=L[T];if(d(D,w,T,I)===!0){const z=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let K=0;K<F.length;K++){const Y=F[K],Z=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,z+W,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,y,x,I){const w=M.value,R=y+"_"+x;if(I[R]===void 0)return typeof w=="number"||typeof w=="boolean"?I[R]=w:I[R]=w.clone(),!0;{const L=I[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return I[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function m(M){const y=M.uniforms;let x=0;const I=16;for(let R=0,L=y.length;R<L;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,D=T.length;b<D;b++){const z=T[b],F=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=F.length;W<K;W++){const Y=F[W],Z=_(Y),H=x%I,st=H%Z.boundary,ht=H+st;x+=st,ht!==0&&I-ht<Z.storage&&(x+=I-ht),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const w=x%I;return w>0&&(x+=I-w),M.__size=x,M.__cache={},this}function _(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ay{constructor(t={}){const{canvas:e=pg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fe,this.toneMapping=ki,this.toneMappingExposure=1;const x=this;let I=!1,w=0,R=0,L=null,T=-1,b=null;const D=new ce,z=new ce;let F=null;const W=new Dt(0);let K=0,Y=e.width,Z=e.height,H=1,st=null,ht=null;const dt=new ce(0,0,Y,Z),At=new ce(0,0,Y,Z);let Pt=!1;const V=new Th;let J=!1,St=!1;const it=new Gt,Lt=new Gt,Ht=new P,It=new ce,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ut(){return L===null?H:1}let C=n;function ot(A,U){return e.getContext(A,U)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fh}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),C===null){const U="webgl2";if(C=ot(U,A),C===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,ft,lt,Ct,_t,E,S,k,G,Q,j,xt,ct,vt,Ot,at,wt,Tt,zt,Et,te,qt,ie,N;function mt(){et=new Lv(C),et.init(),qt=new gy(C,et),ft=new Ev(C,et,t,qt),lt=new dy(C,et),ft.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),Ct=new Nv(C),_t=new JM,E=new my(C,et,lt,_t,ft,qt,Ct),S=new wv(x),k=new Pv(x),G=new zg(C),ie=new Sv(C,G),Q=new Iv(C,G,Ct,ie),j=new Uv(C,Q,G,Ct),zt=new Fv(C,ft,E),at=new Av(_t),xt=new ZM(x,S,k,et,ft,ie,at),ct=new Ty(x,_t),vt=new ty,Ot=new oy(et),Tt=new bv(x,S,k,lt,j,d,c),wt=new uy(x,j,ft),N=new Ey(C,Ct,ft,lt),Et=new Tv(C,et,Ct),te=new Dv(C,et,Ct),Ct.programs=xt.programs,x.capabilities=ft,x.extensions=et,x.properties=_t,x.renderLists=vt,x.shadowMap=wt,x.state=lt,x.info=Ct}mt();const $=new by(x,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(Y,Z,!1))},this.getSize=function(A){return A.set(Y,Z)},this.setSize=function(A,U,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,Z=U,e.width=Math.floor(A*H),e.height=Math.floor(U*H),X===!0&&(e.style.width=A+"px",e.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(Y*H,Z*H).floor()},this.setDrawingBufferSize=function(A,U,X){Y=A,Z=U,H=X,e.width=Math.floor(A*X),e.height=Math.floor(U*X),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(dt)},this.setViewport=function(A,U,X,q){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,U,X,q),lt.viewport(D.copy(dt).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(At)},this.setScissor=function(A,U,X,q){A.isVector4?At.set(A.x,A.y,A.z,A.w):At.set(A,U,X,q),lt.scissor(z.copy(At).multiplyScalar(H).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(A){lt.setScissorTest(Pt=A)},this.setOpaqueSort=function(A){st=A},this.setTransparentSort=function(A){ht=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(A=!0,U=!0,X=!0){let q=0;if(A){let O=!1;if(L!==null){const pt=L.texture.format;O=pt===Mh||pt===vh||pt===xh}if(O){const pt=L.texture.type,Rt=pt===pi||pt===as||pt===Hr||pt===$s||pt===mh||pt===gh,Nt=Tt.getClearColor(),Ft=Tt.getClearAlpha(),Kt=Nt.r,$t=Nt.g,Ut=Nt.b;Rt?(m[0]=Kt,m[1]=$t,m[2]=Ut,m[3]=Ft,C.clearBufferuiv(C.COLOR,0,m)):(_[0]=Kt,_[1]=$t,_[2]=Ut,_[3]=Ft,C.clearBufferiv(C.COLOR,0,_))}else q|=C.COLOR_BUFFER_BIT}U&&(q|=C.DEPTH_BUFFER_BIT),X&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),vt.dispose(),Ot.dispose(),_t.dispose(),S.dispose(),k.dispose(),j.dispose(),ie.dispose(),N.dispose(),xt.dispose(),$.dispose(),$.removeEventListener("sessionstart",fs),$.removeEventListener("sessionend",su),zi.stop()};function nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Ct.autoReset,U=wt.enabled,X=wt.autoUpdate,q=wt.needsUpdate,O=wt.type;mt(),Ct.autoReset=A,wt.enabled=U,wt.autoUpdate=X,wt.needsUpdate=q,wt.type=O}function bt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Wt(A){const U=A.target;U.removeEventListener("dispose",Wt),ge(U)}function ge(A){De(A),_t.remove(A)}function De(A){const U=_t.get(A).programs;U!==void 0&&(U.forEach(function(X){xt.releaseProgram(X)}),A.isShaderMaterial&&xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,X,q,O,pt){U===null&&(U=Xt);const Rt=O.isMesh&&O.matrixWorld.determinant()<0,Nt=o0(A,U,X,q,O);lt.setMaterial(q,Rt);let Ft=X.index,Kt=1;if(q.wireframe===!0){if(Ft=Q.getWireframeAttribute(X),Ft===void 0)return;Kt=2}const $t=X.drawRange,Ut=X.attributes.position;let re=$t.start*Kt,_e=($t.start+$t.count)*Kt;pt!==null&&(re=Math.max(re,pt.start*Kt),_e=Math.min(_e,(pt.start+pt.count)*Kt)),Ft!==null?(re=Math.max(re,0),_e=Math.min(_e,Ft.count)):Ut!=null&&(re=Math.max(re,0),_e=Math.min(_e,Ut.count));const xe=_e-re;if(xe<0||xe===1/0)return;ie.setup(O,q,Nt,X,Ft);let tn,le=Et;if(Ft!==null&&(tn=G.get(Ft),le=te,le.setIndex(tn)),O.isMesh)q.wireframe===!0?(lt.setLineWidth(q.wireframeLinewidth*ut()),le.setMode(C.LINES)):le.setMode(C.TRIANGLES);else if(O.isLine){let Bt=q.linewidth;Bt===void 0&&(Bt=1),lt.setLineWidth(Bt*ut()),O.isLineSegments?le.setMode(C.LINES):O.isLineLoop?le.setMode(C.LINE_LOOP):le.setMode(C.LINE_STRIP)}else O.isPoints?le.setMode(C.POINTS):O.isSprite&&le.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)le.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))le.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Bt=O._multiDrawStarts,Qn=O._multiDrawCounts,he=O._multiDrawCount,Sn=Ft?G.get(Ft).bytesPerElement:1,ds=_t.get(q).currentProgram.getUniforms();for(let cn=0;cn<he;cn++)ds.setValue(C,"_gl_DrawID",cn),le.render(Bt[cn]/Sn,Qn[cn])}else if(O.isInstancedMesh)le.renderInstances(re,xe,O.count);else if(X.isInstancedBufferGeometry){const Bt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Qn=Math.min(X.instanceCount,Bt);le.renderInstances(re,xe,Qn)}else le.render(re,xe)};function se(A,U,X){A.transparent===!0&&A.side===Ve&&A.forceSinglePass===!1?(A.side=$e,A.needsUpdate=!0,so(A,U,X),A.side=di,A.needsUpdate=!0,so(A,U,X),A.side=Ve):so(A,U,X)}this.compile=function(A,U,X=null){X===null&&(X=A),p=Ot.get(X),p.init(U),y.push(p),X.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),A!==X&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const q=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const pt=O.material;if(pt)if(Array.isArray(pt))for(let Rt=0;Rt<pt.length;Rt++){const Nt=pt[Rt];se(Nt,X,O),q.add(Nt)}else se(pt,X,O),q.add(pt)}),y.pop(),p=null,q},this.compileAsync=function(A,U,X=null){const q=this.compile(A,U,X);return new Promise(O=>{function pt(){if(q.forEach(function(Rt){_t.get(Rt).currentProgram.isReady()&&q.delete(Rt)}),q.size===0){O(A);return}setTimeout(pt,10)}et.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Qe=null;function bn(A){Qe&&Qe(A)}function fs(){zi.stop()}function su(){zi.start()}const zi=new Jp;zi.setAnimationLoop(bn),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(A){Qe=A,$.setAnimationLoop(A),A===null?zi.stop():zi.start()},$.addEventListener("sessionstart",fs),$.addEventListener("sessionend",su),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,L),p=Ot.get(A,y.length),p.init(U),y.push(p),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(Lt),St=this.localClippingEnabled,J=at.init(this.clippingPlanes,St),g=vt.get(A,M.length),g.init(),M.push(g),$.enabled===!0&&$.isPresenting===!0){const pt=x.xr.getDepthSensingMesh();pt!==null&&Ga(pt,U,-1/0,x.sortObjects)}Ga(A,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(st,ht),tt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,tt&&Tt.addToRenderList(g,A),this.info.render.frame++,J===!0&&at.beginShadows();const X=p.state.shadowsArray;wt.render(X,A,U),J===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=g.opaque,O=g.transmissive;if(p.setupLights(),U.isArrayCamera){const pt=U.cameras;if(O.length>0)for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){const Ft=pt[Rt];ou(q,O,A,Ft)}tt&&Tt.render(A);for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++){const Ft=pt[Rt];ru(g,A,Ft,Ft.viewport)}}else O.length>0&&ou(q,O,A,U),tt&&Tt.render(A),ru(g,A,U);L!==null&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,U),ie.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],J===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function Ga(A,U,X,q){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){q&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const Rt=j.update(A),Nt=A.material;Nt.visible&&g.push(A,Rt,Nt,X,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const Rt=j.update(A),Nt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),It.copy(Rt.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(Nt)){const Ft=Rt.groups;for(let Kt=0,$t=Ft.length;Kt<$t;Kt++){const Ut=Ft[Kt],re=Nt[Ut.materialIndex];re&&re.visible&&g.push(A,Rt,re,X,It.z,Ut)}}else Nt.visible&&g.push(A,Rt,Nt,X,It.z,null)}}const pt=A.children;for(let Rt=0,Nt=pt.length;Rt<Nt;Rt++)Ga(pt[Rt],U,X,q)}function ru(A,U,X,q){const O=A.opaque,pt=A.transmissive,Rt=A.transparent;p.setupLightsView(X),J===!0&&at.setGlobalState(x.clippingPlanes,X),q&&lt.viewport(D.copy(q)),O.length>0&&io(O,U,X),pt.length>0&&io(pt,U,X),Rt.length>0&&io(Rt,U,X),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ou(A,U,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new cs(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?$r:pi,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const pt=p.state.transmissionRenderTarget[q.id],Rt=q.viewport||D;pt.setSize(Rt.z,Rt.w);const Nt=x.getRenderTarget();x.setRenderTarget(pt),x.getClearColor(W),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),tt&&Tt.render(X);const Ft=x.toneMapping;x.toneMapping=ki;const Kt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),J===!0&&at.setGlobalState(x.clippingPlanes,q),io(A,X,q),E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Ut=0,re=U.length;Ut<re;Ut++){const _e=U[Ut],xe=_e.object,tn=_e.geometry,le=_e.material,Bt=_e.group;if(le.side===Ve&&xe.layers.test(q.layers)){const Qn=le.side;le.side=$e,le.needsUpdate=!0,au(xe,X,q,tn,le,Bt),le.side=Qn,le.needsUpdate=!0,$t=!0}}$t===!0&&(E.updateMultisampleRenderTarget(pt),E.updateRenderTargetMipmap(pt))}x.setRenderTarget(Nt),x.setClearColor(W,K),Kt!==void 0&&(q.viewport=Kt),x.toneMapping=Ft}function io(A,U,X){const q=U.isScene===!0?U.overrideMaterial:null;for(let O=0,pt=A.length;O<pt;O++){const Rt=A[O],Nt=Rt.object,Ft=Rt.geometry,Kt=q===null?Rt.material:q,$t=Rt.group;Nt.layers.test(X.layers)&&au(Nt,U,X,Ft,Kt,$t)}}function au(A,U,X,q,O,pt){A.onBeforeRender(x,U,X,q,O,pt),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,U,X,q,A,pt),O.transparent===!0&&O.side===Ve&&O.forceSinglePass===!1?(O.side=$e,O.needsUpdate=!0,x.renderBufferDirect(X,U,q,O,A,pt),O.side=di,O.needsUpdate=!0,x.renderBufferDirect(X,U,q,O,A,pt),O.side=Ve):x.renderBufferDirect(X,U,q,O,A,pt),A.onAfterRender(x,U,X,q,O,pt)}function so(A,U,X){U.isScene!==!0&&(U=Xt);const q=_t.get(A),O=p.state.lights,pt=p.state.shadowsArray,Rt=O.state.version,Nt=xt.getParameters(A,O.state,pt,U,X),Ft=xt.getProgramCacheKey(Nt);let Kt=q.programs;q.environment=A.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(A.isMeshStandardMaterial?k:S).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",Wt),Kt=new Map,q.programs=Kt);let $t=Kt.get(Ft);if($t!==void 0){if(q.currentProgram===$t&&q.lightsStateVersion===Rt)return lu(A,Nt),$t}else Nt.uniforms=xt.getUniforms(A),A.onBeforeCompile(Nt,x),$t=xt.acquireProgram(Nt,Ft),Kt.set(Ft,$t),q.uniforms=Nt.uniforms;const Ut=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ut.clippingPlanes=at.uniform),lu(A,Nt),q.needsLights=c0(A),q.lightsStateVersion=Rt,q.needsLights&&(Ut.ambientLightColor.value=O.state.ambient,Ut.lightProbe.value=O.state.probe,Ut.directionalLights.value=O.state.directional,Ut.directionalLightShadows.value=O.state.directionalShadow,Ut.spotLights.value=O.state.spot,Ut.spotLightShadows.value=O.state.spotShadow,Ut.rectAreaLights.value=O.state.rectArea,Ut.ltc_1.value=O.state.rectAreaLTC1,Ut.ltc_2.value=O.state.rectAreaLTC2,Ut.pointLights.value=O.state.point,Ut.pointLightShadows.value=O.state.pointShadow,Ut.hemisphereLights.value=O.state.hemi,Ut.directionalShadowMap.value=O.state.directionalShadowMap,Ut.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ut.spotShadowMap.value=O.state.spotShadowMap,Ut.spotLightMatrix.value=O.state.spotLightMatrix,Ut.spotLightMap.value=O.state.spotLightMap,Ut.pointShadowMap.value=O.state.pointShadowMap,Ut.pointShadowMatrix.value=O.state.pointShadowMatrix),q.currentProgram=$t,q.uniformsList=null,$t}function cu(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=ca.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function lu(A,U){const X=_t.get(A);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function o0(A,U,X,q,O){U.isScene!==!0&&(U=Xt),E.resetTextureUnits();const pt=U.fog,Rt=q.isMeshStandardMaterial?U.environment:null,Nt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Je,Ft=(q.isMeshStandardMaterial?k:S).get(q.envMap||Rt),Kt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$t=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ut=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,_e=!!X.morphAttributes.color;let xe=ki;q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=x.toneMapping);const tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,le=tn!==void 0?tn.length:0,Bt=_t.get(q),Qn=p.state.lights;if(J===!0&&(St===!0||A!==b)){const fn=A===b&&q.id===T;at.setState(q,A,fn)}let he=!1;q.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Qn.state.version||Bt.outputColorSpace!==Nt||O.isBatchedMesh&&Bt.batching===!1||!O.isBatchedMesh&&Bt.batching===!0||O.isBatchedMesh&&Bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Bt.instancing===!1||!O.isInstancedMesh&&Bt.instancing===!0||O.isSkinnedMesh&&Bt.skinning===!1||!O.isSkinnedMesh&&Bt.skinning===!0||O.isInstancedMesh&&Bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Bt.instancingMorph===!1&&O.morphTexture!==null||Bt.envMap!==Ft||q.fog===!0&&Bt.fog!==pt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==at.numPlanes||Bt.numIntersection!==at.numIntersection)||Bt.vertexAlphas!==Kt||Bt.vertexTangents!==$t||Bt.morphTargets!==Ut||Bt.morphNormals!==re||Bt.morphColors!==_e||Bt.toneMapping!==xe||Bt.morphTargetsCount!==le)&&(he=!0):(he=!0,Bt.__version=q.version);let Sn=Bt.currentProgram;he===!0&&(Sn=so(q,U,O));let ds=!1,cn=!1,lr=!1;const ve=Sn.getUniforms(),zn=Bt.uniforms;if(lt.useProgram(Sn.program)&&(ds=!0,cn=!0,lr=!0),q.id!==T&&(T=q.id,cn=!0),ds||b!==A){lt.buffers.depth.getReversed()?(it.copy(A.projectionMatrix),gg(it),_g(it),ve.setValue(C,"projectionMatrix",it)):ve.setValue(C,"projectionMatrix",A.projectionMatrix),ve.setValue(C,"viewMatrix",A.matrixWorldInverse);const _i=ve.map.cameraPosition;_i!==void 0&&_i.setValue(C,Ht.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&ve.setValue(C,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ve.setValue(C,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,cn=!0,lr=!0)}if(O.isSkinnedMesh){ve.setOptional(C,O,"bindMatrix"),ve.setOptional(C,O,"bindMatrixInverse");const fn=O.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ve.setValue(C,"boneTexture",fn.boneTexture,E))}O.isBatchedMesh&&(ve.setOptional(C,O,"batchingTexture"),ve.setValue(C,"batchingTexture",O._matricesTexture,E),ve.setOptional(C,O,"batchingIdTexture"),ve.setValue(C,"batchingIdTexture",O._indirectTexture,E),ve.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&ve.setValue(C,"batchingColorTexture",O._colorsTexture,E));const hr=X.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&zt.update(O,X,Sn),(cn||Bt.receiveShadow!==O.receiveShadow)&&(Bt.receiveShadow=O.receiveShadow,ve.setValue(C,"receiveShadow",O.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(zn.envMap.value=Ft,zn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(zn.envMapIntensity.value=U.environmentIntensity),cn&&(ve.setValue(C,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&a0(zn,lr),pt&&q.fog===!0&&ct.refreshFogUniforms(zn,pt),ct.refreshMaterialUniforms(zn,q,H,Z,p.state.transmissionRenderTarget[A.id]),ca.upload(C,cu(Bt),zn,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ca.upload(C,cu(Bt),zn,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ve.setValue(C,"center",O.center),ve.setValue(C,"modelViewMatrix",O.modelViewMatrix),ve.setValue(C,"normalMatrix",O.normalMatrix),ve.setValue(C,"modelMatrix",O.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const fn=q.uniformsGroups;for(let _i=0,xi=fn.length;_i<xi;_i++){const hu=fn[_i];N.update(hu,Sn),N.bind(hu,Sn)}}return Sn}function a0(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function c0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,U,X){_t.get(A.texture).__webglTexture=U,_t.get(A.depthTexture).__webglTexture=X;const q=_t.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const X=_t.get(A);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,X=0){L=A,w=U,R=X;let q=!0,O=null,pt=!1,Rt=!1;if(A){const Ft=_t.get(A);if(Ft.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(C.FRAMEBUFFER,null),q=!1;else if(Ft.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(Ft.__hasExternalTextures)E.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ut=A.depthTexture;if(Ft.__boundDepthTexture!==Ut){if(Ut!==null&&_t.has(Ut)&&(A.width!==Ut.image.width||A.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Rt=!0);const $t=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[U])?O=$t[U][X]:O=$t[U],pt=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?O=_t.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?O=$t[X]:O=$t,D.copy(A.viewport),z.copy(A.scissor),F=A.scissorTest}else D.copy(dt).multiplyScalar(H).floor(),z.copy(At).multiplyScalar(H).floor(),F=Pt;if(lt.bindFramebuffer(C.FRAMEBUFFER,O)&&q&&lt.drawBuffers(A,O),lt.viewport(D),lt.scissor(z),lt.setScissorTest(F),pt){const Ft=_t.get(A.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ft.__webglTexture,X)}else if(Rt){const Ft=_t.get(A.texture),Kt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,X||0,Kt)}T=-1},this.readRenderTargetPixels=function(A,U,X,q,O,pt,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){lt.bindFramebuffer(C.FRAMEBUFFER,Nt);try{const Ft=A.texture,Kt=Ft.format,$t=Ft.type;if(!ft.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-q&&X>=0&&X<=A.height-O&&C.readPixels(U,X,q,O,qt.convert(Kt),qt.convert($t),pt)}finally{const Ft=L!==null?_t.get(L).__webglFramebuffer:null;lt.bindFramebuffer(C.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,U,X,q,O,pt,Rt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){const Ft=A.texture,Kt=Ft.format,$t=Ft.type;if(!ft.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-q&&X>=0&&X<=A.height-O){lt.bindFramebuffer(C.FRAMEBUFFER,Nt);const Ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.bufferData(C.PIXEL_PACK_BUFFER,pt.byteLength,C.STREAM_READ),C.readPixels(U,X,q,O,qt.convert(Kt),qt.convert($t),0);const re=L!==null?_t.get(L).__webglFramebuffer:null;lt.bindFramebuffer(C.FRAMEBUFFER,re);const _e=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await mg(C,_e,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,pt),C.deleteBuffer(Ut),C.deleteSync(_e),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,U=null,X=0){A.isTexture!==!0&&(Rr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),O=Math.floor(A.image.width*q),pt=Math.floor(A.image.height*q),Rt=U!==null?U.x:0,Nt=U!==null?U.y:0;E.setTexture2D(A,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Rt,Nt,O,pt),lt.unbindTexture()},this.copyTextureToTexture=function(A,U,X=null,q=null,O=0){A.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,X=null);let pt,Rt,Nt,Ft,Kt,$t,Ut,re,_e;const xe=A.isCompressedTexture?A.mipmaps[O]:A.image;X!==null?(pt=X.max.x-X.min.x,Rt=X.max.y-X.min.y,Nt=X.isBox3?X.max.z-X.min.z:1,Ft=X.min.x,Kt=X.min.y,$t=X.isBox3?X.min.z:0):(pt=xe.width,Rt=xe.height,Nt=xe.depth||1,Ft=0,Kt=0,$t=0),q!==null?(Ut=q.x,re=q.y,_e=q.z):(Ut=0,re=0,_e=0);const tn=qt.convert(U.format),le=qt.convert(U.type);let Bt;U.isData3DTexture?(E.setTexture3D(U,0),Bt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Bt=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Bt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Qn=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Sn=C.getParameter(C.UNPACK_SKIP_PIXELS),ds=C.getParameter(C.UNPACK_SKIP_ROWS),cn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$t);const lr=A.isDataArrayTexture||A.isData3DTexture,ve=U.isDataArrayTexture||U.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const zn=_t.get(A),hr=_t.get(U),fn=_t.get(zn.__renderTarget),_i=_t.get(hr.__renderTarget);lt.bindFramebuffer(C.READ_FRAMEBUFFER,fn.__webglFramebuffer),lt.bindFramebuffer(C.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let xi=0;xi<Nt;xi++)lr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(A).__webglTexture,O,$t+xi),A.isDepthTexture?(ve&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,O,_e+xi),C.blitFramebuffer(Ft,Kt,pt,Rt,Ut,re,pt,Rt,C.DEPTH_BUFFER_BIT,C.NEAREST)):ve?C.copyTexSubImage3D(Bt,O,Ut,re,_e+xi,Ft,Kt,pt,Rt):C.copyTexSubImage2D(Bt,O,Ut,re,_e+xi,Ft,Kt,pt,Rt);lt.bindFramebuffer(C.READ_FRAMEBUFFER,null),lt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else ve?A.isDataTexture||A.isData3DTexture?C.texSubImage3D(Bt,O,Ut,re,_e,pt,Rt,Nt,tn,le,xe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Bt,O,Ut,re,_e,pt,Rt,Nt,tn,xe.data):C.texSubImage3D(Bt,O,Ut,re,_e,pt,Rt,Nt,tn,le,xe):A.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,Ut,re,pt,Rt,tn,le,xe.data):A.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,Ut,re,xe.width,xe.height,tn,xe.data):C.texSubImage2D(C.TEXTURE_2D,O,Ut,re,pt,Rt,tn,le,xe);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ds),C.pixelStorei(C.UNPACK_SKIP_IMAGES,cn),O===0&&U.generateMipmaps&&C.generateMipmap(Bt),lt.unbindTexture()},this.copyTextureToTexture3D=function(A,U,X=null,q=null,O=0){return A.isTexture!==!0&&(Rr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0),Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,U,X,q,O)},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),lt.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,lt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class wh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wy extends ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ry{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new P;class Rh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Rh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pf=new P,mf=new ce,gf=new ce,Cy=new P,_f=new Gt,Ao=new P,xc=new jn,xf=new Gt,vc=new Zr;class sm extends ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new Gt,this.bindMatrixInverse=new Gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new gi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ao),this.boundingBox.expandByPoint(Ao)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ao),this.boundingSphere.expandByPoint(Ao)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xc.copy(this.boundingSphere),xc.applyMatrix4(i),t.ray.intersectsSphere(xc)!==!1&&(xf.copy(i).invert(),vc.copy(t.ray).applyMatrix4(xf),!(this.boundingBox!==null&&vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,vc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ce,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;mf.fromBufferAttribute(i.attributes.skinIndex,t),gf.fromBufferAttribute(i.attributes.skinWeight,t),pf.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=gf.getComponent(r);if(o!==0){const a=mf.getComponent(r);_f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Cy.copy(pf).applyMatrix4(_f),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class rm extends ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class om extends Pe{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Ze,h=Ze,u,f){super(null,o,a,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=new Gt,Py=new Gt;class La{constructor(t=[],e=[]){this.uuid=yn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Gt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Gt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Py;vf.multiplyMatrices(a,e[r]),vf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new La(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new om(e,t,t,Mn,Un);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new rm),this.bones.push(o),this.boneInverses.push(new Gt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Yl extends jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Rs=new Gt,Mf=new Gt,wo=[],yf=new gi,Ly=new Gt,mr=new ae,gr=new jn;class Iy extends ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ly)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),yf.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(yf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),gr.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),Mf.multiplyMatrices(n,Rs),mr.matrixWorld=Mf,mr.raycast(t,wo);for(let o=0,a=wo.length;o<a;o++){const c=wo[o];c.instanceId=r,c.object=this,e.push(c)}wo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new om(new Float32Array(i*this.count),i,this.count,_h,Un));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class am extends Bn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xa=new P,va=new P,bf=new Gt,_r=new Zr,Ro=new jn,Mc=new P,Sf=new P;class Ch extends ye{constructor(t=new Se,e=new am){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)xa.fromBufferAttribute(e,i-1),va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xa.distanceTo(va);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;bf.copy(i).invert(),_r.copy(t.ray).applyMatrix4(bf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){const p=h.getX(_),M=h.getX(_+1),y=Co(this,t,_r,c,p,M);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(d),p=Co(this,t,_r,c,_,g);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=l){const p=Co(this,t,_r,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Co(this,t,_r,c,m-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Co(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(xa.fromBufferAttribute(o,i),va.fromBufferAttribute(o,r),e.distanceSqToSegment(xa,va,Mc,Sf)>n)return;Mc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Mc);if(!(c<t.near||c>t.far))return{distance:c,point:Sf.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Tf=new P,Ef=new P;class Dy extends Ch{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Tf.fromBufferAttribute(e,i),Ef.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tf.distanceTo(Ef);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ny extends Ch{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Qr extends Bn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Af=new Gt,jl=new Zr,Po=new jn,Lo=new P;class Ia extends ye{constructor(t=new Se,e=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(i),Po.radius+=r,t.ray.intersectsSphere(Po)===!1)return;Af.copy(i).invert(),jl.copy(t.ray).applyMatrix4(Af);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=l.getX(m);Lo.fromBufferAttribute(u,g),wf(Lo,g,c,i,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Lo.fromBufferAttribute(u,m),wf(Lo,m,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wf(s,t,e,n,i,r,o){const a=jl.distanceSqToPoint(s);if(a<e){const c=new P;jl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Da extends Pe{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=e||(o.isVector2?new gt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],o=[],a=new P,c=new Gt;for(let d=0;d<=t;d++){const m=d/t;i[d]=this.getTangentAt(m,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ce(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ce(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ph extends $n{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fy extends Ph{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lh(){let s=0,t=0,e=0,n=0;function i(r,o,a,c){s=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Io=new P,yc=new Lh,bc=new Lh,Sc=new Lh;class Uy extends $n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Io.subVectors(i[0],i[1]).add(i[0]),l=Io);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Io.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Io),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),yc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,m,_,g),bc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,m,_,g),Sc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),bc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Sc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(yc.calc(c),bc.calc(c),Sc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rf(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*s+e}function Oy(s,t){const e=1-s;return e*e*t}function By(s,t){return 2*(1-s)*s*t}function ky(s,t){return s*s*t}function Ir(s,t,e,n){return Oy(s,t)+By(s,e)+ky(s,n)}function Hy(s,t){const e=1-s;return e*e*e*t}function zy(s,t){const e=1-s;return 3*e*e*s*t}function Vy(s,t){return 3*(1-s)*s*s*t}function Gy(s,t){return s*s*s*t}function Dr(s,t,e,n,i){return Hy(s,t)+zy(s,e)+Vy(s,n)+Gy(s,i)}class cm extends $n{constructor(t=new gt,e=new gt,n=new gt,i=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,i.x,r.x,o.x,a.x),Dr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Wy extends $n{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dr(t,i.x,r.x,o.x,a.x),Dr(t,i.y,r.y,o.y,a.y),Dr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lm extends $n{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xy extends $n{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hm extends $n{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(t,i.x,r.x,o.x),Ir(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qy extends $n{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ir(t,i.x,r.x,o.x),Ir(t,i.y,r.y,o.y),Ir(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class um extends $n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Rf(a,c.x,l.x,h.x,u.x),Rf(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new gt().fromArray(i))}return this}}var $l=Object.freeze({__proto__:null,ArcCurve:Fy,CatmullRomCurve3:Uy,CubicBezierCurve:cm,CubicBezierCurve3:Wy,EllipseCurve:Ph,LineCurve:lm,LineCurve3:Xy,QuadraticBezierCurve:hm,QuadraticBezierCurve3:qy,SplineCurve:um});class Ky extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new $l[i.type]().fromJSON(i))}return this}}class Zl extends Ky{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new lm(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new hm(this.currentPoint.clone(),new gt(t,e),new gt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new cm(this.currentPoint.clone(),new gt(t,e),new gt(n,i),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new um(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,o,a,c),this}absellipse(t,e,n,i,r,o,a,c){const l=new Ph(t,e,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ih extends Se{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ce(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new P,f=new gt,d=new P,m=new P,_=new P;let g=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-g,d.z=p*0,m.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(m)}for(let M=0;M<=e;M++){const y=n+M*h*i,x=Math.sin(y),I=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*x,u.y=t[w].y,u.z=t[w].x*I,o.push(u.x,u.y,u.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);const R=c[3*w+0]*x,L=c[3*w+1],T=c[3*w+0]*I;l.push(R,L,T)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){const x=y+M*t.length,I=x,w=x+t.length,R=x+t.length+1,L=x+1;r.push(I,w,L),r.push(R,L,w)}this.setIndex(r),this.setAttribute("position",new we(o,3)),this.setAttribute("uv",new we(a,2)),this.setAttribute("normal",new we(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.points,t.segments,t.phiStart,t.phiLength)}}class Dh extends Ih{constructor(t=1,e=1,n=4,i=8){const r=new Zl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new Dh(t.radius,t.length,t.capSegments,t.radialSegments)}}class Nh extends Se{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new we(r,3)),this.setAttribute("normal",new we(r.slice(),3)),this.setAttribute("uv",new we(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const y=new P,x=new P,I=new P;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],x),d(e[w+2],I),c(y,x,I,M)}function c(M,y,x,I){const w=I+1,R=[];for(let L=0;L<=w;L++){R[L]=[];const T=M.clone().lerp(x,L/w),b=y.clone().lerp(x,L/w),D=w-L;for(let z=0;z<=D;z++)z===0&&L===w?R[L][z]=T:R[L][z]=T.clone().lerp(b,z/D)}for(let L=0;L<w;L++)for(let T=0;T<2*(w-L)-1;T++){const b=Math.floor(T/2);T%2===0?(f(R[L][b+1]),f(R[L+1][b]),f(R[L][b])):(f(R[L][b+1]),f(R[L+1][b+1]),f(R[L+1][b]))}}function l(M){const y=new P;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(M),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const M=new P;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const x=g(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(x,1-I)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const y=o[M+0],x=o[M+2],I=o[M+4],w=Math.max(y,x,I),R=Math.min(y,x,I);w>.9&&R<.1&&(y<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,y){const x=M*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function m(){const M=new P,y=new P,x=new P,I=new P,w=new gt,R=new gt,L=new gt;for(let T=0,b=0;T<r.length;T+=9,b+=6){M.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),w.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),L.set(o[b+4],o[b+5]),I.copy(M).add(y).add(x).divideScalar(3);const D=g(I);_(w,b+0,M,D),_(R,b+2,y,D),_(L,b+4,x,D)}}function _(M,y,x,I){I<0&&M.x===1&&(o[y]=M.x-1),x.x===0&&x.z===0&&(o[y]=I/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nh(t.vertices,t.indices,t.radius,t.details)}}class fm extends Zl{constructor(t){super(t),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Zl().fromJSON(i))}return this}}const Yy={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=dm(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=Qy(s,t,r,e)),s.length>80*e){a=l=s[0],c=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Wr(r,o,e,a,c,d,0),o}};function dm(s,t,e,n,i){let r,o;if(i===hb(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Cf(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Cf(r,s[r],s[r+1],o);return o&&Na(o,o.next)&&(qr(o),o=o.next),o}function hs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Na(e,e.next)||be(e.prev,e,e.next)===0)){if(qr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&sb(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?$y(s,n,i,r):jy(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),qr(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Zy(hs(s),t,e),Wr(s,t,e,n,i,r,2)):o===2&&Jy(s,t,e,n,i,r):Wr(hs(s),t,e,n,i,r,1);break}}}function jy(s){const t=s.prev,e=s,n=s.next;if(be(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Us(i,a,r,c,o,l,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $y(s,t,e,n){const i=s.prev,r=s,o=s.next;if(be(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,m=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>f?h:f:u>f?u:f,p=Jl(d,m,t,e,n),M=Jl(_,g,t,e,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Us(a,h,c,u,l,f,y.x,y.y)&&be(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Us(a,h,c,u,l,f,x.x,x.y)&&be(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Us(a,h,c,u,l,f,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=d&&x.x<=_&&x.y>=m&&x.y<=g&&x!==i&&x!==o&&Us(a,h,c,u,l,f,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Zy(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Na(i,r)&&pm(i,n,n.next,r)&&Xr(i,r)&&Xr(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qr(n),qr(n.next),n=s=r),n=n.next}while(n!==s);return hs(n)}function Jy(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ab(o,a)){let c=mm(o,a);o=hs(o,o.next),c=hs(c,c.next),Wr(o,t,e,n,i,r,0),Wr(c,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Qy(s,t,e,n){const i=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:s.length,l=dm(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ob(l));for(i.sort(tb),r=0;r<i.length;r++)e=eb(i[r],e);return e}function tb(s,t){return s.x-t.x}function eb(s,t){const e=nb(s,t);if(!e)return t;const n=mm(e,s);return hs(n,n.next),hs(e,e.next)}function nb(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Us(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Xr(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&ib(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function ib(s,t){return be(s.prev,s,t.prev)<0&&be(t.next,s,s.next)<0}function sb(s,t,e,n){let i=s;do i.z===0&&(i.z=Jl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rb(i)}function rb(s){let t,e,n,i,r,o,a,c,l=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(o>1);return s}function Jl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ob(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Us(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function ab(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!cb(s,t)&&(Xr(s,t)&&Xr(t,s)&&lb(s,t)&&(be(s.prev,s,t.prev)||be(s,t.prev,t))||Na(s,t)&&be(s.prev,s,s.next)>0&&be(t.prev,t,t.next)>0)}function be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Na(s,t){return s.x===t.x&&s.y===t.y}function pm(s,t,e,n){const i=No(be(s,t,e)),r=No(be(s,t,n)),o=No(be(e,n,s)),a=No(be(e,n,t));return!!(i!==r&&o!==a||i===0&&Do(s,e,t)||r===0&&Do(s,n,t)||o===0&&Do(e,s,n)||a===0&&Do(e,t,n))}function Do(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function No(s){return s>0?1:s<0?-1:0}function cb(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&pm(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xr(s,t){return be(s.prev,s,s.next)<0?be(s,t,s.next)>=0&&be(s,s.prev,t)>=0:be(s,t,s.prev)<0||be(s,s.next,t)<0}function lb(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function mm(s,t){const e=new Ql(s.i,s.x,s.y),n=new Ql(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cf(s,t,e,n){const i=new Ql(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ql(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hb(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Nr{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Nr.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Pf(t),Lf(n,t);let o=t.length;e.forEach(Pf);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Lf(n,e[c]);const a=Yy.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Lf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Fh extends Se{constructor(t=new fm([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new we(i,3)),this.setAttribute("uv",new we(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ub;let y,x=!1,I,w,R,L;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,I=p.computeFrenetFrames(h,!1),w=new P,R=new P,L=new P),f||(g=0,d=0,m=0,_=0);const T=a.extractPoints(l);let b=T.shape;const D=T.holes;if(!Nr.isClockWise(b)){b=b.reverse();for(let tt=0,ut=D.length;tt<ut;tt++){const C=D[tt];Nr.isClockWise(C)&&(D[tt]=C.reverse())}}const F=Nr.triangulateShape(b,D),W=b;for(let tt=0,ut=D.length;tt<ut;tt++){const C=D[tt];b=b.concat(C)}function K(tt,ut,C){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(ut,C)}const Y=b.length,Z=F.length;function H(tt,ut,C){let ot,et,ft;const lt=tt.x-ut.x,Ct=tt.y-ut.y,_t=C.x-tt.x,E=C.y-tt.y,S=lt*lt+Ct*Ct,k=lt*E-Ct*_t;if(Math.abs(k)>Number.EPSILON){const G=Math.sqrt(S),Q=Math.sqrt(_t*_t+E*E),j=ut.x-Ct/G,xt=ut.y+lt/G,ct=C.x-E/Q,vt=C.y+_t/Q,Ot=((ct-j)*E-(vt-xt)*_t)/(lt*E-Ct*_t);ot=j+lt*Ot-tt.x,et=xt+Ct*Ot-tt.y;const at=ot*ot+et*et;if(at<=2)return new gt(ot,et);ft=Math.sqrt(at/2)}else{let G=!1;lt>Number.EPSILON?_t>Number.EPSILON&&(G=!0):lt<-Number.EPSILON?_t<-Number.EPSILON&&(G=!0):Math.sign(Ct)===Math.sign(E)&&(G=!0),G?(ot=-Ct,et=lt,ft=Math.sqrt(S)):(ot=lt,et=Ct,ft=Math.sqrt(S/2))}return new gt(ot/ft,et/ft)}const st=[];for(let tt=0,ut=W.length,C=ut-1,ot=tt+1;tt<ut;tt++,C++,ot++)C===ut&&(C=0),ot===ut&&(ot=0),st[tt]=H(W[tt],W[C],W[ot]);const ht=[];let dt,At=st.concat();for(let tt=0,ut=D.length;tt<ut;tt++){const C=D[tt];dt=[];for(let ot=0,et=C.length,ft=et-1,lt=ot+1;ot<et;ot++,ft++,lt++)ft===et&&(ft=0),lt===et&&(lt=0),dt[ot]=H(C[ot],C[ft],C[lt]);ht.push(dt),At=At.concat(dt)}for(let tt=0;tt<g;tt++){const ut=tt/g,C=d*Math.cos(ut*Math.PI/2),ot=m*Math.sin(ut*Math.PI/2)+_;for(let et=0,ft=W.length;et<ft;et++){const lt=K(W[et],st[et],ot);it(lt.x,lt.y,-C)}for(let et=0,ft=D.length;et<ft;et++){const lt=D[et];dt=ht[et];for(let Ct=0,_t=lt.length;Ct<_t;Ct++){const E=K(lt[Ct],dt[Ct],ot);it(E.x,E.y,-C)}}}const Pt=m+_;for(let tt=0;tt<Y;tt++){const ut=f?K(b[tt],At[tt],Pt):b[tt];x?(R.copy(I.normals[0]).multiplyScalar(ut.x),w.copy(I.binormals[0]).multiplyScalar(ut.y),L.copy(y[0]).add(R).add(w),it(L.x,L.y,L.z)):it(ut.x,ut.y,0)}for(let tt=1;tt<=h;tt++)for(let ut=0;ut<Y;ut++){const C=f?K(b[ut],At[ut],Pt):b[ut];x?(R.copy(I.normals[tt]).multiplyScalar(C.x),w.copy(I.binormals[tt]).multiplyScalar(C.y),L.copy(y[tt]).add(R).add(w),it(L.x,L.y,L.z)):it(C.x,C.y,u/h*tt)}for(let tt=g-1;tt>=0;tt--){const ut=tt/g,C=d*Math.cos(ut*Math.PI/2),ot=m*Math.sin(ut*Math.PI/2)+_;for(let et=0,ft=W.length;et<ft;et++){const lt=K(W[et],st[et],ot);it(lt.x,lt.y,u+C)}for(let et=0,ft=D.length;et<ft;et++){const lt=D[et];dt=ht[et];for(let Ct=0,_t=lt.length;Ct<_t;Ct++){const E=K(lt[Ct],dt[Ct],ot);x?it(E.x,E.y+y[h-1].y,y[h-1].x+C):it(E.x,E.y,u+C)}}}V(),J();function V(){const tt=i.length/3;if(f){let ut=0,C=Y*ut;for(let ot=0;ot<Z;ot++){const et=F[ot];Lt(et[2]+C,et[1]+C,et[0]+C)}ut=h+g*2,C=Y*ut;for(let ot=0;ot<Z;ot++){const et=F[ot];Lt(et[0]+C,et[1]+C,et[2]+C)}}else{for(let ut=0;ut<Z;ut++){const C=F[ut];Lt(C[2],C[1],C[0])}for(let ut=0;ut<Z;ut++){const C=F[ut];Lt(C[0]+Y*h,C[1]+Y*h,C[2]+Y*h)}}n.addGroup(tt,i.length/3-tt,0)}function J(){const tt=i.length/3;let ut=0;St(W,ut),ut+=W.length;for(let C=0,ot=D.length;C<ot;C++){const et=D[C];St(et,ut),ut+=et.length}n.addGroup(tt,i.length/3-tt,1)}function St(tt,ut){let C=tt.length;for(;--C>=0;){const ot=C;let et=C-1;et<0&&(et=tt.length-1);for(let ft=0,lt=h+g*2;ft<lt;ft++){const Ct=Y*ft,_t=Y*(ft+1),E=ut+ot+Ct,S=ut+et+Ct,k=ut+et+_t,G=ut+ot+_t;Ht(E,S,k,G)}}}function it(tt,ut,C){c.push(tt),c.push(ut),c.push(C)}function Lt(tt,ut,C){It(tt),It(ut),It(C);const ot=i.length/3,et=M.generateTopUV(n,i,ot-3,ot-2,ot-1);Xt(et[0]),Xt(et[1]),Xt(et[2])}function Ht(tt,ut,C,ot){It(tt),It(ut),It(ot),It(ut),It(C),It(ot);const et=i.length/3,ft=M.generateSideWallUV(n,i,et-6,et-3,et-2,et-1);Xt(ft[0]),Xt(ft[1]),Xt(ft[3]),Xt(ft[1]),Xt(ft[2]),Xt(ft[3])}function It(tt){i.push(c[tt*3+0]),i.push(c[tt*3+1]),i.push(c[tt*3+2])}function Xt(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fb(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new $l[i.type]().fromJSON(i)),new Fh(n,t.options)}}const ub={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new gt(r,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-u),new gt(f,1-m),new gt(_,1-p)]:[new gt(a,1-c),new gt(h,1-u),new gt(d,1-m),new gt(g,1-p)]}};function fb(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Fa extends Nh{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fa(t.radius,t.detail)}}class tr extends Se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new P,f=new P,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const M=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const w=I/e;u.x=-t*Math.cos(i+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+w*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(w+x,1-y),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const y=h[p][M+1],x=h[p][M],I=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&d.push(y,x,w),(p!==n-1||c<Math.PI)&&d.push(x,I,w)}this.setIndex(d),this.setAttribute("position",new we(m,3)),this.setAttribute("normal",new we(_,3)),this.setAttribute("uv",new we(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class je extends Bn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zn extends je{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class db extends Bn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Fo(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function pb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function mb(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function If(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function gm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class to{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class gb extends to{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case _u:r=t,a=2*e-n;break;case xu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case _u:o=t,c=2*n-e;break;case xu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*_+.5*m,x=d*g-d*_;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+M*o[l+I]+y*o[c+I]+x*o[u+I];return r}}class _b extends to{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class xb extends to{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Jn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fo(e,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fo(t.times,Array),values:Fo(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xb(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _b(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gb(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case zr:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case Wa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return Wa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&pb(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){const _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=Vr;class or extends Jn{constructor(t,e,n){super(t,e,n)}}or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=zr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class _m extends Jn{}_m.prototype.ValueTypeName="color";class er extends Jn{}er.prototype.ValueTypeName="number";class vb extends to{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let h=l+a;l!==h;l+=4)ue.slerpFlat(r,0,o,l-a,o,l,c);return r}}class nr extends Jn{InterpolantFactoryMethodLinear(t){return new vb(this.times,this.values,this.getValueSize(),t)}}nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Jn{constructor(t,e,n){super(t,e,n)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=zr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class ir extends Jn{}ir.prototype.ValueTypeName="vector";class Mb{constructor(t="",e=-1,n=[],i=k0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(bb(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=mb(c);c=If(c,1,h),l=If(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new er(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,m,_){if(d.length!==0){const g=[],p=[];gm(d,g,p,m),g.length!==0&&_.push(new u(f,g,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let M=0;M!==f[m].morphTargets.length;++M){const y=f[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new er(".morphTargetInfluence["+_+"]",g,p))}c=d.length*o}else{const d=".bones["+e[u].name+"]";n(ir,d+".position",f,"pos",i),n(nr,d+".quaternion",f,"rot",i),n(ir,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return ir;case"color":return _m;case"quaternion":return nr;case"bool":case"boolean":return or;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bb(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=yb(s.type);if(s.times===void 0){const e=[],n=[];gm(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Ui={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Sb{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],m=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}}const Tb=new Sb;class cr{constructor(t){this.manager=t!==void 0?t:Tb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}cr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class Eb extends Error{constructor(t,e){super(t),this.response=e}}class xm extends cr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ui.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ri[t]!==void 0){ri[t].push({onLoad:e,onProgress:n,onError:i});return}ri[t]=[],ri[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ri[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){M();function M(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,R=h.length;w<R;w++){const L=h[w];L.onProgress&&L.onProgress(I)}p.enqueue(x),M()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Eb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Ui.add(t,l);const h=ri[t];delete ri[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=ri[t];if(h===void 0)throw this.manager.itemError(t),l;delete ri[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ab extends cr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ui.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Gr("img");function c(){h(),Ui.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class wb extends cr{constructor(t){super(t)}load(t,e,n,i){const r=new Pe,o=new Ab(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ua extends ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Rb extends Ua{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Tc=new Gt,Df=new P,Nf=new P;class Uh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Df.setFromMatrixPosition(t.matrixWorld),e.position.copy(Df),Nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nf),e.updateMatrixWorld(),Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cb extends Uh{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Js*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Pb extends Ua{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Cb}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ff=new Gt,xr=new P,Ec=new P;class Lb extends Uh{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),Ec.copy(n.position),Ec.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ec),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),Ff.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ff)}}class Ib extends Ua{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Db extends Uh{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ye.DEFAULT_UP),this.updateMatrix(),this.target=new ye,this.shadow=new Db}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Fr{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Nb extends cr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ui.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ui.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Ui.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Ui.add(t,c),r.manager.itemStart(t)}}const Oh="\\[\\]\\.:\\/",Fb=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",Ub="[^"+Oh.replace("\\.","")+"]",Ob=/((?:WC+[\/:])*)/.source.replace("WC",Bh),Bb=/(WCOD+)?/.source.replace("WCOD",Ub),kb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),Hb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),zb=new RegExp("^"+Ob+Bb+kb+Hb+"$"),Vb=["material","materials","bones","map"];class Gb{constructor(t,e,n){const i=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class de{constructor(t,e,n){this.path=e,this.parsedPath=n||de.parseTrackName(e),this.node=de.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new de.Composite(t,e,n):new de(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fb,"")}static parseTrackName(t){const e=zb.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Vb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=de.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}de.Composite=Gb;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Uf=new Gt;class Wb{constructor(t,e,n=0,i=1/0){this.ray=new Zr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(t,e=!0,n=[]){return th(t,this,n,e),n.sort(Of),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)th(t[i],this,n,e);return n.sort(Of),n}}function Of(s,t){return s.distance-t.distance}function th(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)th(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);const kt=(s,t,e)=>s<t?t:s>e?e:s,nn=(s,t,e)=>s+(t-s)*e;function Ii(s){const t=Math.PI*2;let e=(s+Math.PI)%t;return e<0&&(e+=t),e-=Math.PI,e===-Math.PI?Math.PI:e}const vn=(s,t,e,n)=>nn(s,t,1-Math.exp(-e*n)),B=(s,t,e)=>{const n=kt((e-s)/(t-s),0,1);return n*n*(3-2*n)};function Xn(s,t){let e=(Math.imul(s|0,668265261)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>15,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function Ue(s,t){const e=Math.floor(s),n=s-e,i=Xn(e,t),r=Xn(e+1,t),o=n*n*(3-2*n);return i+(r-i)*o}const Mm=.75;class Xb{constructor(t){v(this,"camera");v(this,"dist",13);v(this,"baseY",.7);v(this,"lookAhead",4.5);v(this,"aimDrop",1.5);v(this,"followRate",4.5);v(this,"heightRate",2.5);v(this,"dirRate",1.2);v(this,"s",0);v(this,"A",2);v(this,"y",1);v(this,"u",2);v(this,"dir",1);v(this,"initialised",!1);v(this,"tube",0);v(this,"tubeTarget",0);v(this,"tubeBack",.9);v(this,"tubeUp",.3);v(this,"target",new P);this.camera=new Ye(36,t,.1,1500),this.setAspect(t)}setAspect(t){!(t>0)||!Number.isFinite(t)||(this.camera.aspect=t,this.camera.fov=t<1.4?48:36,this.camera.updateProjectionMatrix())}snap(t,e,n=e*.4,i=2,r=1){this.s=t,this.A=e,this.y=Number.isFinite(n)?n:e*.4,this.u=Number.isFinite(i)?i:2,this.dir=r>=0?1:-1,this.initialised=!0,this.apply()}update(t,e,n,i=e*.4,r=2,o=1){if(!(!Number.isFinite(t)||!Number.isFinite(e))){if((!(n>=0)||!Number.isFinite(n))&&(n=0),!this.initialised){this.snap(t,e,i,r,o);return}this.s=vn(this.s,t,this.followRate,n),this.A=vn(this.A,e,this.heightRate,n),Number.isFinite(i)&&(this.y=vn(this.y,i,this.heightRate,n)),Number.isFinite(r)&&(this.u=vn(this.u,r,this.heightRate,n)),Number.isFinite(o)&&(this.dir=vn(this.dir,Math.max(-1,Math.min(1,o)),this.dirRate,n)),this.tube=vn(this.tube,this.tubeTarget,1.5,n),this.apply()}}setTube(t){this.tubeTarget=t?1:0}get focusS(){return this.s}apply(){const t=this.lookAhead*this.dir;this.camera.position.set(-(this.s-t*.35),this.baseY+.4*this.A+.25*this.y+this.tubeUp*this.tube,this.u+this.dist+this.tubeBack*this.tube),this.target.set(-(this.s+t),this.y*.75+.15*this.A-this.aimDrop,this.u-.5);const e=Mm,n=-this.s,i=this.y+.9*e,r=this.u,o=this.camera.position;o.set(n+(o.x-n)*e,i+(o.y-i)*e,r+(o.z-r)*e),this.target.set(n+(this.target.x-n)*e,i+(this.target.y-i)*e,r+(this.target.z-r)*e),this.camera.lookAt(this.target)}}const qb=9.81;class ym{constructor(t=900,e=Math.random){v(this,"points");v(this,"capacity");v(this,"pos");v(this,"col");v(this,"vel");v(this,"life");v(this,"maxLife");v(this,"geo");v(this,"next",0);v(this,"alive",0);v(this,"carry",0);v(this,"rnd");this.capacity=t,this.rnd=e,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t);for(let i=0;i<t;i++)this.pos[i*3+1]=-1e3;this.geo=new Se,this.geo.setAttribute("position",new jt(this.pos,3).setUsage(Te)),this.geo.setAttribute("color",new jt(this.col,4).setUsage(Te));const n=new Qr({size:.16,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1});this.points=new Ia(this.geo,n),this.points.frustumCulled=!1}get count(){return this.alive}emit(t,e,n,i,r,o,a,c,l=1.2){if(!(a>0)||!(c>0)||!Number.isFinite(a*c))return;this.carry+=a*c;let h=Math.floor(this.carry);this.carry-=h,h>this.capacity&&(h=this.capacity);for(let u=0;u<h;u++)this.spawn(t,e,n,i,r,o,l)}burst(t,e,n,i,r,o,a,c=1.8){const l=Math.min(this.capacity,Math.max(0,Math.floor(a)));for(let h=0;h<l;h++)this.spawn(t,e,n,i,r,o,c)}spawn(t,e,n,i,r,o,a){const c=this.next;this.next=(this.next+1)%this.capacity;const l=this.rnd,h=c*3;this.pos[h]=t+(l()-.5)*.3,this.pos[h+1]=e+l()*.1,this.pos[h+2]=n+(l()-.5)*.3;const u=.6+l()*.8;this.vel[h]=i*u+(l()-.5)*a,this.vel[h+1]=r*u+l()*a,this.vel[h+2]=o*u+(l()-.5)*a;const f=.5+l()*.6;this.maxLife[c]=f,this.life[c]=f}update(t){if(!(t>0)||!Number.isFinite(t))return;let e=0;const n=Math.exp(-1.2*t);for(let i=0;i<this.capacity;i++){const r=i*3,o=i*4;if(this.life[i]<=0){this.col[o+3]=0;continue}if(this.life[i]-=t,this.life[i]<=0){this.life[i]=0,this.col[o+3]=0,this.pos[r+1]=-1e3;continue}e++,this.vel[r]*=n,this.vel[r+2]*=n,this.vel[r+1]-=qb*t,this.pos[r]+=this.vel[r]*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=this.vel[r+2]*t;const a=this.life[i]/this.maxLife[i];this.col[o]=.92,this.col[o+1]=.97,this.col[o+2]=1,this.col[o+3]=Math.min(1,a*1.6)*.85}this.alive=e,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}clear(){this.life.fill(0),this.alive=0;for(let t=0;t<this.capacity;t++)this.pos[t*3+1]=-1e3,this.col[t*4+3]=0}}const Kb={A0:2,length:240,liftMax:2.4,arrivalTime:2.5,startS:0},Os={base:6.4,hollowGain:.5,barrelPace:7.1},un={waveP:.66,knee:.42,span:.07,coinKey:77777,calmShare:.45,calmBelow:.49,preCloseCut:.5,preCloseIn:22,preCloseFull:12},Ei={lenMin:31,lenSpan:17,aMin:34,aSpan:56,upLen:40,upFrom:.22,curtLen:16,curtFrom:.56,riseLen:10,fallLen:8,outLen:10,endHol:.3,blend:6,tailK:.6,powerFrom:.45,paceFrom:.56,paceFull:.6,deepP:.5,medLo:.72,medHi:.83,deepLo:.87,deepHi:.96},Me={hol0:.56,hol1:.6,cover:.9,closeLen:2.4,aheadMin:2.4,aheadFull:2.8,ahead:4.2},oi={grow:.22,hol0:.5,hol1:.6,closeLen:9},pn={out0:6,out1:80,backMin:6.5,stretch:.2,rise0:-8,rise1:3,fall0:1,fall1:15,nearLen:5},Bf=5,kf=35,Yb=.85,jb=.5,$b=1/120,Hf=.001,Ac=new DataView(new ArrayBuffer(8));function Zb(s){Ac.setFloat64(0,s);let t=Math.imul(Ac.getUint32(0)^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t^Ac.getUint32(4),3266489909),t^=t>>>16,t=Math.imul(t,668265261),t^=t>>>15,t|0}const Cn=class Cn{constructor(t=1,e={}){v(this,"p");v(this,"seed",1);v(this,"seedHash",0);v(this,"hollowWave",!1);v(this,"hollowShift",0);v(this,"secA",0);v(this,"secB",-1);v(this,"secPeak",0);v(this,"breakS",0);v(this,"arrival",0);v(this,"peeling",!1);v(this,"peelBlend",0);v(this,"time",0);v(this,"tab",[]);v(this,"bS",NaN);v(this,"bPB",NaN);v(this,"bK",0);v(this,"bG",0);v(this,"bX",0);v(this,"bPow",0);v(this,"bTop",0);this.p={...Kb,...e},this.reset(t)}get A0(){return this.p.A0}get length(){return this.p.length}reset(t){this.seed=t,this.seedHash=Zb(t),this.hollowWave=Xn(un.coinKey,this.seedHash)<un.waveP,this.hollowShift=0;const e=this.p.length-45,n=[];for(let l=0;l<e;l+=1)n.push(Ue(l/28,this.seedHash));n.sort((l,h)=>l-h);const i=n[Math.floor(un.calmShare*n.length)]??0;i>un.calmBelow&&(this.hollowShift=i-un.calmBelow);const r=Ei,o=r.lenMin+r.lenSpan*Xn(91001,this.seedHash);this.secA=r.aMin+r.aSpan*Xn(91002,this.seedHash),this.secB=this.hollowWave?this.secA+o:-1;const a=Xn(91003,this.seedHash)<r.deepP,c=Xn(91004,this.seedHash);this.secPeak=a?nn(r.deepLo,r.deepHi,c):nn(r.medLo,r.medHi,c),this.tab=[],this.bS=NaN,this.breakS=this.p.startS,this.arrival=0,this.peeling=!1,this.peelBlend=0,this.time=0}update(t){if(!(t>0)||!Number.isFinite(t))return;this.time+=t;let e=t;if(!this.peeling){const n=(1-this.arrival)*this.p.arrivalTime;if(e<n){this.arrival=Math.min(1,this.arrival+e/this.p.arrivalTime);return}this.arrival=1,this.peeling=!0,this.peelBlend=0,e-=n}for(;e>1e-12;){const n=Math.min(e,$b);this.peelBlend=Math.min(1,this.peelBlend+n/jb),this.breakS+=this.peelSpeed(this.breakS)*n,e-=n}}d(t){const e=t-this.breakS;return this.peeling?e:Math.abs(e)}breakBlend(t){return B(-2,1,t-this.breakS)}closeout(t){const e=this.p.length-kf;return B(e-Bf,e,t)}power(t){return this.cached(1,t)}powerImpl(t){let e=0;const n=Ei;if(this.secB>this.secA&&t>this.secA-n.upLen&&t<this.secB+n.outLen){const i=this.sectionWeight(t),r=this.sectionHollow(t);e=i*r*B(Ei.powerFrom,.6,r)}return Math.max(Ue(t/28,this.seedHash),e,.8*this.closeout(t))}sectionWeight(t){const e=Ei,n=this.secA-e.upLen,i=this.secB+e.outLen;return!(this.secB>this.secA)||t<=n-e.blend||t>=i+e.blend?0:t>=n&&t<=i?1:B(n-e.blend,n,t)*(1-B(i,i+e.blend,t))}sectionEnding(t){return this.secB>this.secA?B(this.secA,this.secA+Ei.riseLen,t):1}sectionHollow(t){const e=Ei,n=this.secA,i=this.secB;if(t<=n){const r=n-t;if(r<=e.curtLen)return .6-(.6-e.curtFrom)*(r/e.curtLen);const o=r>=e.upLen?0:1-(r-e.curtLen)/(e.upLen-e.curtLen);return e.upFrom+(e.curtFrom-e.upFrom)*o*o}if(t<=i){const r=B(n,n+e.riseLen,t),o=1-(1-e.tailK)*B(n+e.riseLen,i-e.fallLen,t),a=B(i-e.fallLen,i,t);return .6+(this.secPeak-.6)*r*o*(1-a)}return .6-(.6-e.endHol)*B(i,i+e.outLen,t)}hollow(t){return this.cached(0,t)}cached(t,e){const n=(e-Cn.T0)/Cn.DX;let i=this.tab[t];if(i||(i=this.tab[t]=new Float64Array(Math.ceil((this.p.length+90)/Cn.DX)+2).fill(NaN)),!(n>=0)||n>=i.length-1)return this.compute(t,e);const r=n|0;let o=i[r];o!==o&&(o=i[r]=this.compute(t,Cn.T0+r*Cn.DX));let a=i[r+1];return a!==a&&(a=i[r+1]=this.compute(t,Cn.T0+(r+1)*Cn.DX)),o+(a-o)*(n-r)}compute(t,e){return t===0?this.hollowImpl(e):t===1?this.powerImpl(e):this.paceImpl(e)}hollowImpl(t){let e=Ue(t/28,this.seedHash)-this.hollowShift;e<0&&(e=0),e>un.knee&&(e=un.knee+un.span*(1-Math.exp(-(e-un.knee)/un.span)));const n=this.sectionWeight(t);n>0&&(e=nn(e,this.sectionHollow(t),n));const i=this.p.length-kf-Bf;return e*=1-un.preCloseCut*B(i-un.preCloseIn,i-un.preCloseFull,t),Math.max(e,.8*this.closeout(t))}peelSpeed(t){const e=this.power(t),n=Os.base+Os.hollowGain*e*e,i=this.cached(2,t);return(i>0&&n<Os.barrelPace?n+(Os.barrelPace-n)*i:n)+10*this.closeout(t)}paceImpl(t){const e=this.sectionWeight(t);return e>0?e*B(Ei.paceFrom,Ei.paceFull,this.sectionHollow(t)):0}faceAmp(t,e){return this.p.A0*(.45+.55*Math.exp(-t/35))*(1+.2*e)}whiteAmp(t,e){return this.p.A0*(.4+.6*Math.exp(t/2.5))*(1+.2*e)}amp(t){return this.ampImpl(t,!0)}swellAmp(t){return this.ampImpl(t,!1)}ampImpl(t,e){const n=t-this.breakS,i=e?this.barrelAmpWeight(t):0,r=i>0&&n>0?nn(this.power(t),this.bPow,i):this.power(t);let o;if(!this.peeling)o=this.faceAmp(Math.abs(n),r)*(.3+.7*this.arrival);else{const a=B(-2,1,n),c=nn(this.whiteAmp(Math.min(n,0),r),this.faceAmp(Math.max(n,0),r),a);o=this.peelBlend>=1?c:nn(this.faceAmp(Math.abs(n),r),c,this.peelBlend)}return i>0&&(o+=i*((n>0?this.bTop:this.faceAmp(0,r)*(1+oi.grow))-o)),t>this.p.length&&(o*=Math.exp(-(t-this.p.length)/10)),o>Hf?o:Hf}breakTunnel(){this.bS=this.breakS,this.bPB=this.peelBlend;const t=this.hollow(this.breakS),e=this.breakS;this.bX=this.secB>this.secA&&e>=this.secB-5?1-B(this.secB+pn.fall0,this.secB+pn.fall1,e):0,this.bK=Math.max(B(oi.hol0,oi.hol1,t),this.bX)*this.peelBlend;const n=this.breakS;this.bG=this.secB>this.secA?B(this.secA+pn.rise0,this.secA+pn.rise1,n)*(1-B(this.secB+pn.fall0,this.secB+pn.fall1,n))*this.peelBlend:0,this.bPow=this.power(this.breakS),this.bTop=this.faceAmp(0,this.bPow)*(1+oi.grow)}barrelAmpWeight(t){if(!this.peeling||!this.hollowWave)return 0;const e=t-this.breakS;if(e>=0){if(e>=pn.out1)return 0;(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const o=this.bK,a=this.bG;if(o<=0&&a<=0)return 0;const c=a>0?a*(1-B(pn.out0,pn.out1,e)):0,l=3+(pn.nearLen-3)*a;if(e>=l)return c;const h=B(0,l,e);return o+(c-o)*h}const n=this.hollow(t);(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const i=Math.max(n>oi.hol0?B(oi.hol0,oi.hol1,n):0,this.bX);if(i<=0)return 0;const r=Math.max(1.5+5*n,pn.backMin);return e<=-r-oi.closeLen?0:i*B(-r-oi.closeLen,-r,e)*this.peelBlend}faceWidth(t,e=this.amp(t)){const n=this.power(t),i=t-this.breakS,r=(a,c)=>{const l=Math.exp(-a/12),h=1.7-.85*n*l,u=1+1.4*(1-Math.exp(-a/45));return h*u*c};let o;if(!this.peeling)o=r(Math.abs(i),1);else{const a=this.barrelAmpWeight(t);if(a>0){const c=i>0?nn(n,this.bPow,a):n,l=1+pn.stretch*a,h=(f,d)=>{const m=f/l;return(1.7-.85*c*Math.exp(-m/12))*(1+1.4*(1-Math.exp(-m/45)))*d},u=h(Math.max(i,0),nn(nn(1.6,1,B(-2,1,i)),1,a));o=this.peelBlend>=1?u:nn(h(Math.abs(i),1),u,this.peelBlend)}else{const c=r(Math.max(i,0),nn(1.6,1,B(-2,1,i)));o=this.peelBlend>=1?c:nn(r(Math.abs(i),1),c,this.peelBlend)}}return Math.max(.6,e*o)}heightAt(t,e){const n=this.amp(t);if(e<0){const o=e/(2.4*n);return n*Math.exp(-o*o)}const i=this.faceWidth(t,n);if(e>=i)return 0;const r=1-e/i;return n*r*r}facePoint(t,e,n){const i=this.amp(t),r=this.faceWidth(t,i),o=e<0?0:e,a=o<1?1-o:0,c=i*a*a,l=2*i*a,h=Math.sqrt(r*r+l*l),u=n??{};return u.u=o*r,u.y=c,u.A=i,u.W=r,u.m=h,u.sinA=l/h,u}lipReach(t){if(!this.peeling)return 0;const e=t-this.breakS;if(e<=-3)return 0;const n=kt(1+e/3,0,1),i=Math.exp(-Math.max(e,0)/5),r=nn(n,i,B(-2,1,e)),o=this.closeout(t),a=o>0?1-Yb*B(.1,.5,o):1;return this.amp(t)*.95*this.hollow(t)*r*this.peelBlend*a}barrelReach(t){const e=this.lipReach(t),n=this.barrelShape(t);if(n<=0)return e;const i=Me.cover*this.faceWidth(t)*n;return i>e?i:e}barrelShape(t){if(!this.peeling||!this.hollowWave)return 0;const e=this.hollow(t),n=B(Me.hol0,Me.hol1,e);if(n<=0)return 0;const i=t-this.breakS,r=1.5+5*e;if(i<=-r-Me.closeLen||i>=Me.ahead)return 0;const o=this.closeout(t);if(o>=.45)return 0;const a=B(Me.hol0,Me.hol1,this.hollow(this.breakS)),c=Me.aheadFull*a,l=Me.aheadMin+(Me.ahead-Me.aheadMin)*a;return n*B(-r-Me.closeLen,-r,i)*(1-B(c,l,i))*this.peelBlend*(1-B(.3,.45,o))}lift(t,e){const n=e<0?0:e;let i=1.2*B(1,1.1,n);return n<1&&(i+=this.p.liftMax*Math.pow(1-n,.75)*(this.swellAmp(t)/this.p.A0)),i}get finished(){return this.peeling&&this.breakS>this.p.length+10}};v(Cn,"T0",-30),v(Cn,"DX",.1);let eh=Cn;const oe=14,nh=12,Jb=.55,zf=2*Math.PI/nh;function bm(s,t){const e=s-t;return e<=-nh/2||e>=nh/2?s:s-Jb*Math.sin(zf*e)/zf}const Sm=.7,Ma={arch:.75,c1u:.5,c1y:1.3,c1uA:1,c1yA:-.2,throwD0:1.2,throwD1:3.2,c2u:1.3,c2y:.95,tipK:0,land:1.18};function Oa(s,t){return bm(t,s.breakS)}function Ba(s,t,e=s.barrelReach(t),n=s.lipReach(t)){let i=s.hollowWave&&s.peeling?B(Me.hol0,Me.hol1,s.hollow(t))*s.peelBlend:0;return i>0&&(i*=1-B(.1,.5,s.closeout(t))),Math.max(e>1e-6?(e-n)/e:0,s.barrelShape(t),i)}function Tm(s,t,e,n,i,r){const o=s.barrelReach(t),a=s.lipReach(t),c=Ba(s,t,o,a),l=.12+(Sm-.12)*c,h=Math.min(o*1.1,e*.85),u=Ma,f=u.arch*e,d=s.peeling?B(u.throwD0,u.throwD1,t-s.breakS):0,m=u.c1u+(u.c1uA-u.c1u)*d,_=u.c1y+(u.c1yA-u.c1y)*d;for(let g=0;g<oe;g++){const p=g/(oe-1);let M,y;if(o<=.02)M=-.02,y=e-.01;else{const x=p*Math.PI*.8;if(M=o*Math.sin(x),y=e-h+h*Math.cos(x)+o*l*Math.sin(x),c>0){const w=1-p,R=w*w*w,L=3*w*w*p,T=3*w*p*p,b=p*p*p,D=(L*m+T*u.c2u+b*u.land)*o,z=R*e+L*(e+_*f)+T*(e+u.c2y*f)+b*u.tipK*e;M+=(D-M)*c,y+=(z-y)*c}let I=0;if(M<0){const w=M/(2.4*e);I=e*Math.exp(-w*w)}else if(M<n){const w=1-M/n;I=e*w*w}y<I+.04&&(y=I+.04)}i[g]=M,r[g]=y}return o>.02}const la={c1u:.6,c1y:.12,c1uA:.8,c1yA:-.25,c2u:1.3,c2y:.85,land:1.18,kA:1.1,cap:.035,capK:.06},Kr={c2uH:1,grow:.22,dome1:.25,dome2:.25,capUp:.15,fadeD0:-1.9,fadeD1:1.2};function Em(s,t){if(!(s.hollowWave&&s.peeling))return 0;let e=B(Me.hol0,Me.hol1,s.hollow(t))*s.peelBlend;return e>0&&(e*=(1-B(.1,.5,s.closeout(t)))*s.barrelShape(t)*B(Kr.fadeD1,Kr.fadeD0,t-s.breakS)),e}const li={reachR:12,shape0:1.2,shape1:2.4,q1u:.55,q2y:.45,capR:1.48,capK:2.5,capL:.45};function Am(s,t,e,n){if(!(s.hollowWave&&s.peeling))return n;const i=t-s.breakS,r=B(Me.hol0,Me.hol1,s.hollow(s.breakS)),o=Me.aheadFull*r;if(r<=0||i<=o||i>=o+li.reachR)return n;const a=B(Me.hol0,Me.hol1,s.hollow(t));if(a<=0)return n;const c=s.closeout(t);if(c>=.45)return n;let l=Me.cover*e*a*r*(1-B(o,o+li.reachR,i))*s.peelBlend*(1-B(.3,.45,c));const h=li.capR+li.capK*Math.max(0,s.lipReach(t)-li.capL);return l>h&&(l=h),l>n?l:n}function wm(s,t,e){const n=Math.min(la.land*Am(s,t,s.faceWidth(t,e),s.barrelReach(t)),la.kA*e),i=Em(s,t);return i>0?n+(la.kA*e*(1+Kr.grow)-n)*i:n}function kh(s,t,e,n,i,r){const o=Am(s,t,n,s.barrelReach(t)),a=s.lipReach(t),c=Ba(s,t,o,a),l=.12+(Sm-.12)*c,h=Math.min(o*1.1,e*.85),u=la,f=s.peeling?B(Ma.throwD0,Ma.throwD1,t-s.breakS):0;let d=u.c1u+(u.c1uA-u.c1u)*f,m=u.c1y+(u.c1yA-u.c1y)*f,_=u.c2y;const g=s.hollowWave?Kr.c2uH:u.c2u;let p=Math.min(u.land*o,u.kA*e),M=Math.min(1,p/Math.max(.001,e)),y=e*(1+u.cap);const x=c>0?Em(s,t):0;if(x>0){const w=Kr;p+=(u.kA*e*(1+w.grow)-p)*x,M=Math.min(1,p/Math.max(.001,e)),m+=w.dome1*x,_+=w.dome2*x,y=e*(1+u.cap+w.capUp*x)}if(s.hollowWave&&f>0){const w=f*(1-B(li.shape0,li.shape1,p));w>0&&(d+=(li.q1u-d)*w,m-=m*w,_+=(1-li.q2y-_)*w)}const I=e*u.capK;for(let w=0;w<oe;w++){const R=w/(oe-1);let L,T;if(o<=.02)L=-.02,T=e-.01;else{const b=R*Math.PI*.8;if(L=o*Math.sin(b),T=e-h+h*Math.cos(b)+o*l*Math.sin(b),c>0){const z=1-R,F=3*z*z*R,W=3*z*R*R,K=R*R*R,Y=(F*d+W*g+K)*p,Z=e+e*(F*m+W*(_-1)*M-K*M);L+=(Y-L)*c,T+=(Z-T)*c}T>y-I&&(T=y-I+I*Math.tanh((T-(y-I))/I));let D=0;if(L<0){const z=L/(2.4*e);D=e*Math.exp(-z*z)}else if(L<n){const z=1-L/n;D=e*z*z}T<D+.04&&(T=D+.04)}i[w]=L,r[w]=T}return o>.02}function Rm(s,t,e){let n=1/0;for(let i=0;i+1<oe;i++){const r=s[i],o=s[i+1];if((r-e)*(o-e)<=0&&r!==o){const a=(e-r)/(o-r),c=t[i]+a*(t[i+1]-t[i]);c<n&&(n=c)}}return Number.isFinite(n)?n:NaN}const Vf=new Float32Array(oe),Gf=new Float32Array(oe);function ih(s,t,e){const n=Oa(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return Tm(s,n,i,r,Vf,Gf)?Rm(Vf,Gf,e)-s.heightAt(t,e):NaN}const Ur=new Float32Array(oe),Or=new Float32Array(oe);function Wf(s,t,e){const n=Oa(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);return kh(s,n,i,r,Ur,Or)?Rm(Ur,Or,e)-s.heightAt(t,e):NaN}const Xf=[.1,.35,.6,.85,1.1],Qb=10.4;function tS(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-9)return!1;const d=i-s,m=r-t,_=(d*u-m*h)/f,g=(d*l-m*c)/f;return _>=0&&_<=1&&g>=0&&g<=1}function eS(s,t,e){const n=Oa(s,t),i=Math.max(s.amp(n),.001),r=s.faceWidth(n,i);if(!kh(s,n,i,r,Ur,Or))return 0;const o=s.heightAt(t,e),a=e+Qb,c=1+.4*i;let l=0;for(const h of Xf)for(let u=0;u+1<oe;u++)if(tS(e,o+h,a,c,Ur[u],Or[u],Ur[u+1],Or[u+1])){l++;break}return l/Xf.length}const wc=1,qf=.25,Rc=16;function Kf(s,t,e){return ih(s,t,Math.max(0,e)*s.faceWidth(t))}function nS(s,t,e,n={dist:0,size:0}){let i=0;for(;i<=Rc&&Kf(s,t+i,e)>=wc;)i+=qf;if(i>0&&i<=Rc){let a=i-qf,c=i;for(let l=0;l<4;l++){const h=.5*(a+c);Kf(s,t+h,e)>=wc?a=h:c=h}i=.5*(a+c)}const r=Math.min(i,Rc),o=Math.max(wc,s.amp(t+r));return n.dist=r,n.size=2*Math.atan(o/2/(r+1)),n}const ya=9.81,Cc=16,iS=3,Cs=.02,sS=1.2,rS=.6,Uo=-1.5,Pc=1.25,oS="load",sh={dragLin:.05,dragQuad:.0375,dragHi:3.5,vHi:11.5,liftScale:3.2,liftShoulder:.15,liftPocketL:4,liftHollow:.3,lipZeroT:.03,lipTaperT:.15,dropCut:1,dropSin0:.45,dropSin1:.7,dropT0:.3,dropT1:.5,dropV0:6,dropV1:8,liftAlongM:1,handsOffTrim:.25,handsOffK:2,handsOffT:.3,handsOffMin:-.2,handsOffMax:.7,beta:1,wMin:.6,wMax:1.4,lRef:.5,loadMaxTurn:2*Math.PI,loadMinSwing:.3,loadMaxSkid:.6,rollTau:.12,boardRate:16,carveR:1.2,carveLat:40,skidK:3.2,skidFree:.1,skidWipeLip:1.95,skidWipeMid:1.7,skidWipeLow:1.3,skidWipeSlow:1,slowV1:4.5,slowV2:6.5,skidLipMidT0:.15,skidLipMidT1:.35,skidMidLowT0:.64,skidMidLowT1:.86,skidSlowT0:.15,skidSlowT1:.5,skidSlide:.4,slideHbRate0:6,slideHbRate1:10,slideHvRate0:3,slideHvRate1:6,slideV0:4,slideV1:5.5,slideT0:.5,slideT1:.8,slideJerk0:55,slideJerk1:62,slideJerkTau:.02,skidSlideMax:2.2,slideVDecay:2,lipUpSin:.3,lipUpTime:.6,lipCapTime:1.5,lipMinV:2.5,lipClimbG:0,foamK:.035,hollowLip:.6,lipLandMaxT:1,fellBehindD:-25,foamD:-4.5,foamMaxTime:7,foamStuckTime:2.5,foamSteerTime:5,foamHardV:6.5,foamHeadOn:38*Math.PI/180,foamReboundRate:.8,trimV:7.6,trimK:3,trimSin0:.22,trimSin1:.32,trimT0:.12,trimT1:.2,trimStall0:.08,trimStall1:.2,trimTurn0:.6,trimTurn1:1.2,carryK:.8,carryD0:.5,carryD1:-1.5,carryTauIn:.25,carryTauOut:.6,carryMaxD:12,carryFadeD:16,carryV0:3.3,carryV1:4.3,carryOutK:2,carryOutD0:2,carryOutD:8,carryOutMaxV:11.5,carryOutSpinTau:4,carryOutSpin0:2,carryOutSpin1:3,carryOutTurn0:4,carryOutTurn1:5,carryOutSin0:.66,carryOutSin1:.8,lipGrace:.25,stuckD:5,carryMinV:3.8,foamPassiveK:.6,headOnMinV:4.4,headOnTime:.3,stuckTime:1.2,stallK:.9,driveDragCut:.15,driveAccel:1.5,boostDv:1.8,boostTime:.45,boostVMax:10,boostVFade:8,boostGap:1,boostD0:-3,boostD1:14,boostTopT:.22,boostSin:.4,boostSinIn:.6,boostReWin:1,boostReMaxT:.5,boostReV:5,boostLowT:.55,boostBotWin:1.2,boostBotMinT:.35,boostBotMaxT:.92,boostBotV:6.5,boostTurn:1.1,boostDrop:.3,boostBotSinIn:.8,boostCutTurn:2.4,boostCutV:6,tubeStayTMin:0,tubeMouthD:.5,tubeStayTMax:1.1,tubeSlowV:3,tubeUpSin:.5,tubeStayHol:.56,tubeShapeIn:.5,tubeReleaseHol:.72,tubeMinMade:1,tubeAheadNeed:8,tubeBackOffF:.85,missAheadD:1.5,missAheadTime:3,curtainLiftCut:.5,nbCut:.6,nbCutD0:4,nbCutD1:9,nbSin0:-.15,nbSin1:-.02,nbSin2:.3,nbSin3:.45,nbT0:.08,nbT1:.14,nbTurn0:3,nbTurn1:5,nbHol0:.52,nbHol1:.58,lipLandGrace:1.05,tubeTK:3,tubeNudge:.15,tubeLineMin:.1,tubeLineMax:.88,tubeRelTau:.25,tubeWorkTau:.05,tubeRiseTau:.8,tubeRelAccel:2.5,tubeNeutral0:.15,tubeCoastK:.2,tubeCoastReset:6,tubeStallRel:4,tubeWorkRel:5,tubeDriveRel:1.2,tubeRelMin:-2.5,tubeDeepF0:.7,tubeDeepF1:.85,tubeDeepSuck:2,tubeVMax:12.5,tubeCosMin:.85,tubeBoardVMax:13,tubeVTau:.1,tubeVAccel:15,spitHol:.8,spitExitHol:.585,spitMinTime:.5,spitMouthD:1,spitRel:.8,tubeHeadroom:1.27,tubeOutShape:.15,tubeEnterHold:.04,tubeRoofMin:1,tubeFreeRoom:.75,tubeFreeK:1,tubeFreePumpCut:0,tubeFreeIn:.75,tubeFreeOut:.75,tubeFreeShapeIn:.15,tubeFreeOutDrawn:.3,tubeFreeAhead:2,tubeFreeVMin:6.5,tubePumpF0:.15,tubePumpF1:.35,tubePumpTau:.06,tubePumpRail0:.35,tubePumpGap:.6,tubePumpSeg:.9,tubePumpSwing:.3,entrySuck:0,pumpDv:2.9,rhythmMax:2.5,pumpClimb:.08},aS={...sh,dragQuad:.011,dragHi:.3,vHi:10,liftScale:.35,nbCut:0,liftShoulder:.5,liftPocketL:6,liftHollow:0,lipTaperT:.15,liftAlongM:0,dropCut:0,carveR:1.6,carveLat:40},cS=.25,lS=.45,hS=.15,uS=.3,fS=.3,Oo=Math.PI-.05,dS=1.5,pS=.08,mS=.08,Zt={minV:5.5,minSin:.55,lipDwell:.1,kVy:.7,g:ya,catchTau:.015,spinMax:13,tol:.6,foamD:-4.5,carryPeel:1,snapGate:.8,airSteerRate:8,lineT:.45,settleT:.18,settleTau:.05,settleMax:1.1,landCarryT:2.5,landCarryDv:6,flatSin0:.8,flatSin1:.92,qErr:.9,qFlat:.5,qMin:.05,flatLoss:.12,slowDepth:.45,slowHw:.2,slowHwK:.25,revertRate:5,revertEase:.8,revertDrag:.35,liftWin:.35,liftLipWin:.15,liftFwdCos:.1},Yf=["Straight Air","Air Reverse","360"],ba=1/60;function Lc(s,t){return 1-Math.pow(1+ba/t,-s/ba)}const gS={grip:!1,targetHeading:null,stall:0,drive:0},jf=50*Math.PI/180;class Sa{constructor(t){v(this,"s",0);v(this,"t",.25);v(this,"v",0);v(this,"hb",0);v(this,"hv",0);v(this,"skid",0);v(this,"stall",0);v(this,"drive",0);v(this,"state","idle");v(this,"pumpModel",oS);v(this,"turnRate",0);v(this,"d",0);v(this,"face",{u:0,y:0,A:0,W:0,m:0,sinA:0});v(this,"accel",0);v(this,"pumpAccel",0);v(this,"pumpLeft",0);v(this,"skidDecel",0);v(this,"roll",0);v(this,"railRate",0);v(this,"railRate1",0);v(this,"load",0);v(this,"pumpF",0);v(this,"railSide",0);v(this,"railSideAt",-1e9);v(this,"railFlipAt",-1e9);v(this,"railFlipSeg",1e9);v(this,"railSideHv",0);v(this,"railSegMax",0);v(this,"tubeRel",0);v(this,"tubeLine",.5);v(this,"tubeHRef",0);v(this,"tubeCoast",0);v(this,"zoneFor",0);v(this,"behindLip",!1);v(this,"behindFor",0);v(this,"frontSeen",!1);v(this,"weight",1);v(this,"inTube",!1);v(this,"tubeMode","lock");v(this,"tubeWhy","");v(this,"tubeTime",0);v(this,"spat",!1);v(this,"spitRide",!1);v(this,"tubeHeight",0);v(this,"tubeHolMax",0);v(this,"missArmed",!0);v(this,"aheadFor",0);v(this,"rideTime",0);v(this,"lipUpTime",0);v(this,"lipTime",0);v(this,"carveRate",0);v(this,"foamTime",0);v(this,"foamRun",0);v(this,"spinNet",0);v(this,"headOnFor",0);v(this,"stuckFor",0);v(this,"carry",0);v(this,"notOutFor",1e9);v(this,"turnAccum",0);v(this,"prevSwing",0);v(this,"turnRateF",0);v(this,"boardRateF",0);v(this,"slideAllow",0);v(this,"vTurn",0);v(this,"targetRateF",0);v(this,"jerkMem",0);v(this,"lastTarget",NaN);v(this,"turningDown",!1);v(this,"boostMode","off");v(this,"boostCount",0);v(this,"boostKind","");v(this,"boostAt",-1e9);v(this,"boostLeft",0);v(this,"boostTopAt",-1e9);v(this,"boostLowAt",-1e9);v(this,"boostHiT",0);v(this,"boostCutArmed",!0);v(this,"airMode","off");v(this,"airborne",!1);v(this,"airT",0);v(this,"airHeight",0);v(this,"airYaw",0);v(this,"airSpin",0);v(this,"airDur",0);v(this,"airPeak",0);v(this,"airFlip",0);v(this,"timeScale",1);v(this,"landAge",1/0);v(this,"airCaught",!1);v(this,"airLaunch","auto");v(this,"liftAge",1/0);v(this,"prevGrip",!1);v(this,"holdTarget",NaN);v(this,"lipV",0);v(this,"lipSin",0);v(this,"lipHv",0);v(this,"lipLift",!1);v(this,"lineDir",1);v(this,"airSettleFrom",-1);v(this,"landFlat",0);v(this,"landQuality",0);v(this,"revertLeft",0);v(this,"airHb0",0);v(this,"airHv0",0);v(this,"airVy",0);v(this,"lastPumpAt",-1e9);v(this,"prevSin",0);v(this,"peakSinUp",0);v(this,"maxTSince",0);v(this,"events",[]);this.wave=t}setWave(t){this.wave=t}get riding(){return this.state==="riding"}static skidLimit(t,e){const n=sh,i=n.skidWipeLip+(n.skidWipeMid-n.skidWipeLip)*B(n.skidLipMidT0,n.skidLipMidT1,t)+(n.skidWipeLow-n.skidWipeMid)*B(n.skidMidLowT0,n.skidMidLowT1,t),r=kt((t-n.skidSlowT0)/(n.skidSlowT1-n.skidSlowT0),0,1),o=Math.min(i,n.skidWipeLip+(n.skidWipeSlow-n.skidWipeLip)*r);return o+(i-o)*B(n.slowV1,n.slowV2,e)}spawn(t,e,n,i){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(i)?!1:(this.s=t,this.t=kt(e,Cs,Pc),this.v=kt(n,0,Cc),this.hb=i,this.hv=i,this.lineDir=Math.cos(i)<0?-1:1,this.skid=0,this.skidDecel=0,this.accel=0,this.pumpAccel=0,this.pumpLeft=0,this.stall=0,this.drive=0,this.roll=0,this.railRate=0,this.railRate1=0,this.load=0,this.pumpF=0,this.railSide=0,this.railSideAt=-1e9,this.railFlipAt=-1e9,this.railFlipSeg=1e9,this.tubeRel=0,this.tubeCoast=0,this.zoneFor=0,this.behindLip=!1,this.behindFor=0,this.frontSeen=!1,this.weight=1,this.missArmed=!0,this.aheadFor=0,this.state="riding",this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.slideAllow=0,this.vTurn=n,this.targetRateF=0,this.jerkMem=0,this.lastTarget=NaN,this.turningDown=!1,this.boostCount=0,this.boostKind="",this.boostAt=-1e9,this.boostLeft=0,this.boostTopAt=-1e9,this.boostLowAt=-1e9,this.boostHiT=this.t,this.boostCutArmed=!0,this.turnAccum=0,this.prevSwing=0,this.foamTime=0,this.foamRun=0,this.spinNet=0,this.headOnFor=0,this.stuckFor=0,this.carry=0,this.notOutFor=1e9,this.inTube=!1,this.spitRide=!1,this.tubeTime=0,this.tubeHeight=0,this.rideTime=0,this.lipUpTime=0,this.lipTime=0,this.lastPumpAt=-1e9,this.prevSin=Math.sin(i),this.peakSinUp=Math.max(0,this.prevSin),this.maxTSince=this.t,this.airborne=!1,this.airT=0,this.airHeight=0,this.airYaw=0,this.airSpin=0,this.airDur=0,this.airPeak=0,this.airFlip=0,this.timeScale=1,this.landAge=1/0,this.landFlat=0,this.landQuality=0,this.revertLeft=0,this.prevGrip=!1,this.liftAge=1/0,this.holdTarget=NaN,this.lipLift=!1,this.lipV=0,this.lipSin=0,this.lipHv=0,this.airCaught=!1,this.airSettleFrom=-1,this.events.length=0,this.d=this.wave.d(t),this.wave.facePoint(this.s,this.t,this.face),!0)}drain(){if(this.events.length===0)return _S;const t=this.events;return this.events=[],t}tryLaunch(t){return!1}get airTravel(){return Math.cos(this.airHv0)>=0?1:-1}setAirSpin(t){!this.airborne||!Number.isFinite(t)||(this.airSpin=kt(t,-13,Zt.spinMax))}get lean(){return this.roll}step(t,e=gS){if(this.state!=="riding"||!(t>0)||!Number.isFinite(t))return;if(this.airLaunch==="lift"&&this.trackLift(t,e),this.airborne)return this.airStep(t,e);const n=this.wave,i=this.pumpModel==="impulse"?aS:sh;this.rideTime+=t,this.airMode==="on"&&(this.landAge+=t);const r=Number.isFinite(e.stall)?kt(e.stall,0,1):0,o=e.drive!==void 0&&Number.isFinite(e.drive)?kt(e.drive,0,1):0;this.stall=r,this.drive=o;let a,c;if(e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading))a=e.targetHeading,c=i.boardRate;else if(this.airLaunch==="lift"&&this.liftAge<=Zt.liftWin&&Number.isFinite(this.holdTarget))a=this.holdTarget,c=i.boardRate;else{const C=Math.round(this.hb/Math.PI),ot=kt(i.handsOffTrim+i.handsOffK*(i.handsOffT-this.t),i.handsOffMin,i.handsOffMax);a=C*Math.PI+((C&1)===0?-ot:ot),c=iS}const l=e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading)?e.targetHeading:NaN,h=Number.isFinite(l)&&Number.isFinite(this.lastTarget)?Math.abs(l-this.lastTarget)/t:0;this.lastTarget=l,this.targetRateF+=(h-this.targetRateF)*(1-Math.exp(-t/i.slideJerkTau));let u;const f=this.revertLeft!==0;if(f){const C=this.revertLeft,ot=Math.min(Math.abs(C),Zt.revertRate*Math.min(1,.3+Math.abs(C)/Zt.revertEase)*t);u=C>0?ot:-ot,this.revertLeft=Math.abs(C-u)<1e-9?0:C-u}else{let C=a-this.hb;C>Oo?C=Oo:C<-Oo&&(C=-Oo);const ot=c*t;u=C>ot?ot:C<-ot?-ot:C}this.hb+=u;const d=i.carveR*(1+.5*r),m=Ii(this.hb-this.hv),_=Math.max(this.v,1.5),g=Math.min(_/d,i.carveLat/_)*(1+dS*Math.abs(Math.sin(m)));this.carveRate=g;const p=f?0:g*t,M=m>p?p:m<-p?-p:m;this.hv+=M,this.turnRate=M/t,this.skid=Ii(this.hb-this.hv);const y=1-Math.exp(-t/mS);this.turnRateF+=(this.turnRate-this.turnRateF)*y,this.boardRateF+=(u/t-this.boardRateF)*y;const x=1-Math.exp(-t/i.rollTau);this.railRate1+=(this.turnRate-this.railRate1)*x,this.railRate+=(this.railRate1-this.railRate)*x,this.roll=xS(this.v,this.railRate),this.turnAccum*this.railRate<0&&(this.prevSwing=Math.abs(this.turnAccum),this.turnAccum=0),this.turnAccum+=M;const I=n.facePoint(this.s,this.t,this.face),w=this.d,R=n.d(this.s);this.d=R;const L=Math.sin(this.hv);this.t>Zt.lineT&&Math.abs(Math.cos(this.hv))>.3&&(this.lineDir=Math.cos(this.hv)<0?-1:1);const T=Math.cos(this.hv),b=this.v,D=Math.abs(Math.sin(this.skid))-i.skidFree;this.skidDecel=D>0?i.skidK*D*D*b:0,f&&(this.skidDecel*=Zt.revertDrag);const z=this.t<=Cs&&L>0?i.lipClimbG*L:L;let F=1;if(this.pumpModel==="load"){const C=this.v*this.railRate/ya;let ot=Math.min(1,(Math.sqrt(1+C*C)-1)/i.lRef);Math.abs(this.turnAccum)>i.loadMaxTurn||this.prevSwing<i.loadMinSwing?ot=0:ot*=1-B(.5*i.loadMaxSkid,i.loadMaxSkid,Math.abs(this.skid)),this.load=ot;const et=z<0?1:z>0?-1:0;F=kt(1+i.beta*et*ot,i.wMin,i.wMax)}else this.load=0;this.weight=F;const W=this.railRate1>i.tubePumpRail0?1:this.railRate1<-i.tubePumpRail0?-1:0,K=Math.abs(this.hv-this.railSideHv);if(K>this.railSegMax&&(this.railSegMax=K),W!==0&&W!==this.railSide){if(this.railSide!==0){const C=this.railSegMax>=i.tubePumpSwing;this.railFlipSeg=C?this.rideTime-this.railSideAt:1e9,this.railFlipAt=this.rideTime}this.railSide=W,this.railSideAt=this.rideTime,this.railSideHv=this.hv,this.railSegMax=0}const Y=this.rideTime-this.railFlipAt<i.tubePumpGap&&this.railFlipSeg<i.tubePumpSeg?1:0;this.pumpF+=(Y-this.pumpF)*Lc(t,i.tubePumpTau);const Z=(i.dragLin*b+i.dragQuad*b*b+(b>i.vHi?i.dragHi*(b-i.vHi)*(b-i.vHi):0))*(1-i.driveDragCut*o),H=this.inTube;let st=-ya*I.sinA*z*F-Z-this.skidDecel-i.stallK*r*b+i.driveAccel*o;if(H||(st-=i.foamK*b*B(0,-3,R)),!H&&R<0&&T>0&&!(e.grip&&r<.5&&b>=i.carryMinV)&&(st-=i.foamPassiveK*b*B(0,-1,R)*(1-B(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))),e.grip&&T>0&&b<i.trimV&&i.trimK>0&&this.t<i.trimT1&&L<.1&&-L<i.trimSin1&&R>-1&&r<1&&Math.abs(this.turnRateF)<i.trimTurn1){const C=B(-.1,.05,-L)*(1-B(i.trimSin0,i.trimSin1,-L))*B(-1,.5,R)*(1-B(i.trimT0,i.trimT1,this.t))*(1-B(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF)))*(1-r)*(1-B(i.trimStall0,i.trimStall1,r));st+=i.trimK*(i.trimV-b)*C}let ht=0;if(H){const C=B(i.tubePumpF0,i.tubePumpF1,this.pumpF),ot=e.grip?Math.max(o,C):0,et=C>=o?i.tubeWorkRel:i.tubeDriveRel,ft=Math.max(0,this.tubeCoast+t*(1-C)*(1-B(.1,.3,r))-i.tubeCoastReset*(e.grip?C:0)*t);this.tubeCoast=ft;const lt=-i.tubeNeutral0-i.tubeCoastK*ft*ft,Ct=B(i.tubeDeepF0,i.tubeDeepF1,-R/(1.5+5*n.hollow(this.s))),_t=e.grip?Math.max(i.tubeRelMin,(1-ot)*(lt-i.tubeStallRel*r*(2-r))+ot*et*(1-Ct)-i.tubeDeepSuck*Ct):i.tubeRelMin,E=i.tubeRelTau+(i.tubeWorkTau-i.tubeRelTau)*ot;if(_t>this.tubeRel){const S=ba/Math.log(1+ba/i.tubeRiseTau),k=_t-this.tubeRel,G=i.tubeRelAccel*S,Q=k>G?(k-G)/i.tubeRelAccel:0;this.tubeRel+=t<=Q?i.tubeRelAccel*t:k-Math.min(k,G)*Math.exp(-(t-Q)/S)}else this.tubeRel+=(_t-this.tubeRel)*Lc(t,E);ht=kt(n.peelSpeed(n.breakS)+this.tubeRel,0,i.tubeVMax),st=kt((Math.min(i.tubeBoardVMax,ht/Math.max(i.tubeCosMin,T))-b)*Lc(t,i.tubeVTau)/t,-i.tubeVAccel,i.tubeVAccel)}this.boostMode==="on"&&(st+=this.boost(t,e,L,T,R,b,H,i)),this.accel=st;let dt=b+st*t;if(dt>0||(dt=0),this.pumpAccel=0,this.pumpModel==="impulse"&&(dt=this.impulsePump(dt,L,T,t,i)),this.v=dt>Cc?Cc:dt,this.spinNet+=this.boardRateF*t-this.spinNet*t/i.carryOutSpinTau,R<i.carryD0||this.carry!==0){let C=0;if(R<i.carryD0&&e.grip&&!this.inTube&&T>0){const et=Os.base*T*(1-n.closeout(this.s))*B(i.carryD0,i.carryD1,R)*B(-i.carryFadeD,-i.carryMaxD,R)*B(i.carryV0,i.carryV1,b)*(1-r),ft=i.carryK*et*(1-B(i.trimTurn0,i.trimTurn1,Math.abs(this.turnRateF))),lt=i.carryOutK*et*B(-i.carryOutD0,-i.carryOutD,R)*(1-B(i.carryOutSin0,i.carryOutSin1,-L))*(1-B(i.carryOutTurn0,i.carryOutTurn1,Math.abs(this.turnRateF)))*(1-B(i.carryOutSpin0,i.carryOutSpin1,Math.abs(this.spinNet)));C=ft+Math.min(lt,Math.max(0,i.carryOutMaxV-b*T-ft))}const ot=C>this.carry?i.carryTauIn:i.carryTauOut;this.carry+=(C-this.carry)*t/(ot+t),this.carry<.001&&C===0&&(this.carry=0)}let At=0;if(this.airMode==="on"&&!H&&this.landAge<Zt.landCarryT&&this.d<0){const C=n.peelSpeed(this.s)+Zt.landCarryDv;At=Math.max(0,C-(b*T+this.carry))*(1-this.landAge/Zt.landCarryT)}this.s+=(H?ht:b*T+this.carry+At)*t;let Pt;if(H&&this.tubeMode==="free"){const C=B(i.tubePumpF0,i.tubePumpF1,this.pumpF);Pt=this.t+-i.tubeFreeK*(1-i.tubeFreePumpCut*C)*Math.max(this.v,i.tubeFreeVMin)*L/I.m*t}else if(H)this.tubeLine=kt(this.tubeLine-i.tubeNudge*(L-Math.sin(this.tubeHRef))*t,i.tubeLineMin,i.tubeLineMax),Pt=this.t+(this.tubeLine-this.t)*(1-Math.exp(-i.tubeTK*t));else{const C=R>0?R:0,ot=R>0?i.nbCut*(1-B(i.nbCutD0,i.nbCutD1,R))*B(i.nbSin0,i.nbSin1,L)*(1-B(i.nbSin2,i.nbSin3,L))*B(i.nbT0,i.nbT1,this.t)*(1-B(i.nbTurn0,i.nbTurn1,Math.abs(this.turnRateF)))*(1-B(i.nbHol0,i.nbHol1,n.hollow(this.s))):0,et=(i.liftShoulder+(1-i.liftShoulder)*(1-ot)*Math.exp(-C/i.liftPocketL))*(1+i.liftHollow*n.power(this.s)),ft=1.2*B(1,1.1,this.t),lt=1-i.dropCut*B(i.dropSin0,i.dropSin1,-L)*(1-B(i.dropT0,i.dropT1,this.t))*(1-B(i.dropV0,i.dropV1,b)),Ct=(1-i.curtainLiftCut*B(.5,.9,n.barrelShape(this.s)))*i.liftScale*et*(n.lift(this.s,this.t)-ft)*lt*B(i.lipZeroT,i.lipTaperT,this.t)+ft,_t=-b*L/I.m-Ct/(i.liftAlongM?I.m:I.W);Pt=this.t+_t*t}Pt>Pc&&(Pt=Pc);const V=Math.sin(this.hb)<L-pS||T*this.turnRateF<-.5;if(this.turningDown=V,Pt<=Cs?(Pt=Cs,this.lipTime+=t,L>i.lipUpSin?V||(this.lipUpTime+=t):this.lipUpTime=0):(this.lipTime=0,this.lipUpTime=0),this.t=Pt,n.facePoint(this.s,this.t,this.face),this.d=n.d(this.s),this.t<=Cs){if(this.inTube&&this.tubeMode==="free")return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("the lip took you");const C=-Math.cos(this.hb)*this.boardRateF;if(this.airLaunch==="lift"){if(this.airMode==="on"&&this.liftLaunchOk(t,e,L))return this.launch()}else if(this.airMode==="on"&&!this.inTube&&this.v>=Zt.minV&&L>=Zt.minSin&&this.lipTime>=Zt.lipDwell-1e-9&&C<Zt.snapGate&&Math.cos(this.hv)*this.lineDir>-.3)return this.launch();if(this.v<i.lipMinV&&!V)return this.kickout("too slow at the lip");if(this.lipUpTime>i.lipUpTime)return this.kickout("over the back");if(this.lipTime>i.lipCapTime&&!V)return this.kickout("over the back")}const J=n.hollow(this.s),St=1.5+5*J,it=this.d;if(!this.inTube){const C=n.barrelShape(this.s);it>=Uo&&(this.frontSeen=!0),it<Uo&&C>=i.tubeShapeIn?this.behindLip=!0:this.behindLip&&(C<.05||it>0&&C<i.tubeShapeIn)&&(this.behindLip=!1)}const Lt=!this.inTube&&!this.behindLip&&e.grip&&this.v>=i.tubeSlowV&&L<=i.tubeUpSin&&this.t>Cs&&this.t<.9&&it>-St&&n.closeout(this.s)<.5&&n.barrelShape(this.s)>=(this.tubeMode==="free"?i.tubeFreeShapeIn:i.tubeShapeIn)&&n.hollow(this.s+i.tubeAheadNeed)>=i.hollowLip&&ih(n,this.s,this.face.u)>=(this.tubeMode==="free"?i.tubeFreeIn:i.tubeHeadroom);if(this.zoneFor=Lt?this.zoneFor+t:0,!this.inTube)Lt&&this.zoneFor>=i.tubeEnterHold-1e-9?(this.inTube=!0,this.foamRun=0,this.tubeTime=0,this.spat=!1,this.tubeHolMax=J,this.missArmed=!1,this.tubeRel=this.v*Math.cos(this.hv)+this.carry-n.peelSpeed(n.breakS),this.carry=0,this.tubeLine=kt(this.t,i.tubeLineMin,i.tubeLineMax),this.tubeHRef=this.hb,this.tubeCoast=0,this.pumpF=0,this.railSide=0,this.railFlipAt=-1e9,this.events.push({type:"tubeEnter"})):n.hollow(n.breakS)<.5?(this.missArmed=!0,this.aheadFor=0):this.missArmed&&it>i.missAheadD&&n.barrelShape(n.breakS)>=i.tubeShapeIn&&(this.aheadFor=r>.1?0:this.aheadFor+t,this.aheadFor>i.missAheadTime&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"ran ahead"})));else{if(this.tubeTime+=t,J>this.tubeHolMax&&(this.tubeHolMax=J),it<=-St)return this.inTube=!1,this.tubeWhy="closed",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("barrel closed");!this.spat&&!this.spitRide&&it>-i.spitMouthD&&this.tubeHolMax>=i.spitHol&&J>=i.spitExitHol&&n.sectionEnding(n.breakS)*(1-B(i.hollowLip,i.tubeReleaseHol,n.hollow(n.breakS)))>=.5&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&this.tubeRel>i.spitRel&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));const C=ih(n,this.s,this.face.u),ot=this.tubeMode==="free",et=ot?Wf(n,this.s,this.face.u):C,ft=!(et>=(ot?i.tubeFreeOut:i.tubeRoofMin)),lt=it>=i.tubeMouthD&&n.barrelShape(this.s)<=i.tubeOutShape;if(ot&&ft&&!lt&&Wf(n,this.s,Math.max(0,this.tubeLine)*n.faceWidth(this.s))>=i.tubeFreeRoom)return this.inTube=!1,this.tubeWhy="edge",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe(this.t<this.tubeLine?"the lip took you":"fell out of the tube");let Ct=ot&&!(et>=i.tubeFreeOutDrawn);for(let E=0;Ct&&E<=4;E++)eS(n,this.s+E*i.tubeFreeAhead/4,this.face.u)>0&&(Ct=!1);const _t=lt&&(!ot||ft&&Ct);if(_t||ft&&it>=Me.aheadFull&&(!ot||Ct))this.inTube=!1,this.tubeWhy=_t?"mouth":"roof",this.events.push({type:"tubeExit",duration:this.tubeTime,made:this.tubeTime>=i.tubeMinMade}),!this.spat&&!this.spitRide&&(_t||!ft)&&this.tubeHolMax>=i.spitHol&&J>=i.spitExitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));else if(J<i.tubeStayHol&&(!ot||ft&&Ct)){this.inTube=!1,this.tubeWhy="backoff";const E=-it/St<i.tubeBackOffF;return this.events.push({type:"tubeExit",duration:this.tubeTime,made:E&&this.tubeTime>=i.tubeMinMade}),E&&!this.spat&&!this.spitRide&&this.tubeHolMax>=i.spitHol&&this.tubeTime>=Math.max(i.spitMinTime,i.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"})),this.spat||E?void 0:this.wipe("barrel closed")}else if(!(this.t>i.tubeStayTMin&&this.t<i.tubeStayTMax)&&(this.inTube=!1,this.tubeWhy=ot?"edge":"band",this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),ot))return this.wipe(this.t<=i.tubeStayTMin?"the lip took you":"fell out of the tube")}this.tubeHeight=this.inTube?n.amp(this.s):0;const Ht=Math.abs(this.skid);this.vTurn=Math.max(this.v,this.vTurn-i.slideVDecay*t);const It=this.boardRateF,Xt=this.turnRateF;this.jerkMem=Math.abs(It)>=i.slideHbRate0?Math.max(this.jerkMem,this.targetRateF):this.targetRateF;const tt=Sa.skidLimit(this.t,this.v),ut=It*Xt>0?B(i.slideHbRate0,i.slideHbRate1,Math.abs(It))*B(i.slideHvRate0,i.slideHvRate1,Math.abs(Xt))*B(i.slideV0,i.slideV1,this.vTurn)*(1-B(i.slideT0,i.slideT1,this.t))*(1-B(i.slideJerk0,i.slideJerk1,this.jerkMem)):0;if(this.slideAllow=Math.min(ut*(Sa.skidLimit(this.t,Math.max(this.vTurn,i.slowV2))-tt+i.skidSlide),Math.max(0,i.skidSlideMax-tt)),!f){if(Ht>tt+this.slideAllow)return this.wipe("caught a rail");if(this.v<sS&&Ht>rS)return this.wipe("bogged down")}if(!this.inTube){if(w>=0&&it<0){const Ct=Math.abs(Ii(this.hb-Math.PI)),_t=Math.abs(this.turnRateF)>i.foamReboundRate;if(this.v>=i.foamHardV&&Ct<=i.foamHeadOn&&!_t)return this.wipe("too hard into the foam")}const C=Math.abs(this.turnRateF)>i.foamReboundRate,ot=e.grip&&r<.5&&this.v>=i.carryMinV&&Math.cos(this.hb)>0;this.notOutFor=ot?0:this.notOutFor+t;const et=this.notOutFor<i.lipGrace;if(it<0){const Ct=Math.abs(Ii(this.hb-Math.PI));if(this.headOnFor=Ct<=i.foamHeadOn&&!C&&this.v>=i.headOnMinV?this.headOnFor+t:0,this.stuckFor=this.v<i.carryMinV||it<-i.stuckD&&!ot?this.stuckFor+t:0,this.headOnFor>i.headOnTime)return this.wipe("too hard into the foam");if(this.stuckFor>i.stuckTime)return this.wipe(this.v<i.carryMinV?"fell behind the wave":"stuck in the whitewater")}else this.headOnFor=0,this.stuckFor=0;if(this.foamRun=it<0?this.foamRun+t:0,this.foamRun>(ot?i.foamSteerTime:i.foamStuckTime))return this.wipe("stuck in the whitewater");const ft=n.barrelShape(this.s);if(this.behindFor=this.behindLip&&ft>=i.tubeShapeIn?this.behindFor+t:0,(this.frontSeen&&it<Uo&&ft>=i.tubeShapeIn||this.behindFor>i.lipLandGrace)&&this.t<i.lipLandMaxT)return this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you");if(J>=i.hollowLip&&this.t<i.lipLandMaxT)return it<Uo&&!(et&&it>=-i.carryMaxD)?(this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you")):void 0;if(this.foamTime=it<i.foamD?this.foamTime+t:0,it<i.fellBehindD||this.foamTime>i.foamMaxTime)return this.wipe("fell behind the wave")}}trackLift(t,e){e.grip?(this.liftAge=1/0,e.targetHeading!==null&&Number.isFinite(e.targetHeading)&&(this.holdTarget=e.targetHeading)):this.prevGrip?this.liftAge=0:this.liftAge+=t,this.prevGrip=e.grip,this.airborne&&(this.liftAge=1/0,this.holdTarget=NaN)}liftLaunchOk(t,e,n){if(this.lipTime<=t+1e-9&&(this.lipV=this.v,this.lipSin=n,this.lipHv=this.hv,this.lipLift=!1),!e.grip&&this.liftAge<=Zt.liftWin&&this.lipTime<=Zt.liftLipWin+1e-9&&(this.lipLift=!0),e.grip&&(this.lipLift=!1),!this.lipLift||this.inTube||this.lipTime<Zt.lipDwell-1e-9||!(this.lipV>=Zt.minV&&this.lipSin>=Zt.minSin))return!1;let i=this.lipHv;if(Math.cos(i)*this.lineDir<Zt.liftFwdCos){const r=Zt.liftFwdCos;i+=Ii(Math.atan2(Math.sqrt(1-r*r),this.lineDir*r)-i)}return this.hv=i,!0}launch(){const t=Math.sin(this.hv);this.airborne=!0,this.airT=0,this.airHeight=0,this.airYaw=0,this.airSpin=0,this.airCaught=!1,this.airSettleFrom=-1,this.airHb0=this.hb,this.airHv0=this.hv,this.airVy=Zt.kVy*this.v*t,this.airDur=2*this.airVy/Zt.g,this.airPeak=this.airVy*this.airVy/(2*Zt.g),this.airFlip=Ii(-2*this.hv),this.timeScale=1,this.revertLeft=0,this.lipTime=0,this.lipUpTime=0,this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.lastTarget=NaN,this.events.push({type:"launch",v:this.v,vy:this.airVy})}airStep(t,e){const n=this.wave;this.rideTime+=t,this.airT+=t,e.grip&&(this.airCaught=!0,this.airSpin*=Math.exp(-t/Zt.catchTau),Math.abs(this.airSpin)<.001&&(this.airSpin=0)),this.airYaw+=this.airSpin*t;const i=e.grip&&this.airLaunch!=="lift"?e.targetHeading:null;if(i!=null&&Number.isFinite(i)){const u=i-this.airHb0,f=Zt.airSteerRate*t;this.airYaw+=kt(u-this.airYaw,-f,f)}const r=this.airLaunch==="lift"&&this.airSettleFrom>=0;if((!e.grip||r)&&this.airDur-this.airT<Zt.settleT){const u=Math.round(this.airYaw/Math.PI)*Math.PI;Math.abs(this.airYaw-u)<=Zt.settleMax&&(this.airSettleFrom<0&&(this.airSettleFrom=Math.abs(this.airYaw-u)),this.airSpin=0,this.airYaw+=(u-this.airYaw)*(1-Math.exp(-t/Zt.settleTau)))}this.hb=this.airHb0+this.airYaw,this.skid=0;const o=this.v*Math.cos(this.airHv0);this.s+=(o>0?Math.max(o,Zt.carryPeel*n.peelSpeed(this.s)):o)*t,this.d=n.d(this.s),n.facePoint(this.s,this.t,this.face);const a=this.airT;if(a>=this.airDur)return this.land();this.airHeight=Math.max(0,this.airVy*a-.5*Zt.g*a*a);const c=Math.min(Zt.slowHw,Zt.slowHwK*this.airDur),l=(a-.5*this.airDur)/c,h=Math.abs(l)<1?(1-l*l)*(1-l*l):0;this.timeScale=1-Zt.slowDepth*h}land(){const t=this.airYaw,e=Math.round(Math.abs(t)/Math.PI),n=Math.abs(Math.abs(t)-e*Math.PI),i=B(Zt.flatSin0,Zt.flatSin1,Math.sin(this.airHv0)),r=this.d<Zt.foamD,o=n<=Zt.tol&&!r,a=Math.max(n,.5*this.airSettleFrom),c=o?kt(1-Zt.qErr*a-Zt.qFlat*i,Zt.qMin,1):.1*(1-i),l=kt(.25+.55*i+.2*Math.min(1,this.airPeak/2.5),0,1),h=this.airFlip;if(this.hv=this.airHv0+h,this.hb+=h,this.skid=Ii(this.hb-this.hv),this.airborne=!1,this.airT=0,this.airHeight=0,this.airSpin=0,this.timeScale=1,this.landAge=0,this.foamRun=0,this.stuckFor=0,this.headOnFor=0,this.notOutFor=0,this.landFlat=i,this.landQuality=c,this.lastTarget=NaN,this.prevSin=Math.sin(this.hv),this.v*=1-Zt.flatLoss*i,this.vTurn=this.v,this.events.push({type:"land",made:o,quality:c,flat:i,yaw:t,camHit:l}),this.airYaw=0,!o)return this.wipe(r?"too hard into the foam":"caught a rail");const u=Math.cos(this.airHv0)>=0?1:-1,f=e>0&&Math.sign(t)*u>0,d=e<Yf.length?Yf[e]:`${e*180}`;if(this.events.push({type:"trick",name:f?`Alley-Oop ${d}`:d,alleyOop:f,halfTurns:e,haptic:Math.min(1,.3+.3*e)}),e%2===1){const m=this.hb-this.hv,_=2*Math.PI,g=(-m%_+_)%_;this.revertLeft=t>=0?g:g-_}}boost(t,e,n,i,r,o,a,c){const l=this.rideTime;if(this.t<=c.boostTopT&&n>=c.boostSinIn&&(this.boostTopAt=l),n>.1?this.boostHiT=this.t:this.t<this.boostHiT&&(this.boostHiT=this.t),this.t>=c.boostLowT&&this.t<=c.boostBotMaxT&&n<=-c.boostBotSinIn&&this.t-this.boostHiT>=c.boostDrop&&(this.boostLowAt=l),Math.abs(this.turnAccum)<.5*c.boostCutTurn&&(this.boostCutArmed=!0),a)return this.boostLeft=0,this.boostTopAt=this.boostLowAt=-1e9,0;const h=e.grip&&r>=c.boostD0&&r<=c.boostD1&&l-this.boostAt>=c.boostGap;let u="";if(h&&(n<=-c.boostSin&&l-this.boostTopAt<=c.boostReWin&&this.t<=c.boostReMaxT&&o>=c.boostReV&&Math.abs(this.turnAccum)>=c.boostTurn?u="reentry":n>=c.boostSin&&l-this.boostLowAt<=c.boostBotWin&&this.t>=c.boostBotMinT&&this.t<=c.boostBotMaxT&&o>=c.boostBotV&&Math.abs(this.turnAccum)>=c.boostTurn?u="bottom":this.boostCutArmed&&Math.abs(this.turnAccum)>=c.boostCutTurn&&i<0&&this.vTurn>=c.boostCutV&&(u="cutback")),u!==""&&(this.boostCount++,this.boostKind=u,this.boostAt=l,this.boostLeft=c.boostDv,this.boostTopAt=this.boostLowAt=-1e9,this.boostCutArmed=!1),this.boostLeft<=0)return 0;const f=Math.min(this.boostLeft,c.boostDv/c.boostTime*t);return this.boostLeft=Math.max(0,this.boostLeft-f),f/t*(1-B(c.boostVFade,c.boostVMax,o))}impulsePump(t,e,n,i,r){e>this.peakSinUp&&(this.peakSinUp=e),this.t>this.maxTSince&&(this.maxTSince=this.t);const o=this.rideTime-this.lastPumpAt;if(this.prevSin>0&&e<=0&&n*this.turnRate<-.3&&this.t<lS&&this.peakSinUp>=hS&&o>=uS&&this.maxTSince-this.t>=r.pumpClimb){const a=kt((.6-this.t)/.45,.2,1),c=o<=r.rhythmMax||this.lastPumpAt<-1e8?1:.5,l=r.pumpDv*a*c*Math.min(1,this.peakSinUp/fS);this.pumpLeft+=l,this.lastPumpAt=this.rideTime,this.peakSinUp=0,this.maxTSince=this.t,this.events.push({type:"pump",dv:l,t:this.t})}if(this.prevSin=e,this.pumpLeft>0){const a=Math.min(this.pumpLeft,r.pumpDv/cS*i);this.pumpLeft-=a,t+=a,this.pumpAccel=a/i}return t}wipe(t){this.state="wiped",this.events.push({type:"wipe",reason:t})}kickout(t){this.state="kickedOut",this.events.push({type:"kickout",reason:t})}}const _S=[];function xS(s,t){const e=Math.atan(s*t/ya);return Number.isFinite(e)?kt(e,-jf,jf):0}const Bo=32,mn=0,gn=3,ko=6,We=7,Pn=10,$f=19,vr=22,Mr=25,vS=28,yr=29,Ho=30,Ic=31,Dc=[Pn,Pn+3,Pn+6,Pn+9],rn=Math.PI/180,Zf=[0,0],Jf=27,MS=50,Qf=[0,.25],ha=[.15,.086,0],ua=[-.65,.086,0],td=(ha[0]+ua[0])/2+.02,yS=.4,bS=.45,Nc=7,SS=4.4,TS=12,ES=13.5,AS=.9,wS=1.35,RS=.6,ed=[.47,.57],CS=.1,PS=.15,LS=.5,zo=1.2,IS=28,DS=15,NS=6.5,FS=10,US=22,OS=16,BS=6,kS=3.2,HS=14,nd=37,id=52,zS=.7,sd=1.2,rd=[.22,.33],VS=.21,GS=[.3,.3,.25,.15],WS=[.15,.3,.3,.25],od=[0,.3,.35,.35],Vo=[.03,-.1,1],XS=[.33,-.3,1],qS=[.15,.15,1],KS=[.03,-.2,1],YS=.17,jS=-.02,$S=.2,ZS=.015,JS=.5,QS=15,t1=.5,e1=.08,n1=.08,ad=[.2,.55],i1=.035,cd=[.3,.6],s1=.86,r1=.03,o1=.15,a1=[.35,-.3,1],Hh=[.15,.15,1],ld=[.05,.4],c1=.06,hd=[.35,.22],ud=[3.5,5],fd=.12,Fc=.32,dd=.6,l1=.22,h1=.12,u1=.04,Go=[.24,.34,.4,.52],f1=.16,d1=.016,p1=.66,Cm=[.3,-.4,1],pd=[1.4,1.8],Pm={uaF:[.7,-.45,.55],faF:[.8,-.2,.55]},Lm={uaF:[-.25,-.4,-.88],faF:[-.4,-.3,-.87]},m1=[.9,-.56,.12],g1=[.75,-.65,.15],_1=[.9,-.45,.12],x1=[.85,-.45,.15],v1=.35,M1=.06,y1=[.3,-.9,.3],b1=[0,-.95,.35],Ds=s=>.8175-.25*kt(s,0,1),Nn=new P(0,1,0),md=new ue,Ai=new ue,gd=new P;function rh(s,t,e,n,i,r,o){return md.setFromUnitVectors(Nn,i),o.identity().slerp(md,GS[s]),Ai.setFromAxisAngle(i,r*WS[s]),o.premultiply(Ai),s===0?(Ai.setFromAxisAngle(Nn,t),o.premultiply(Ai)):(Ai.setFromAxisAngle(Nn,e*od[s]),o.premultiply(Ai),gd.set(Math.cos(t),0,-Math.sin(t)),Ai.setFromAxisAngle(gd,n*od[s]),o.premultiply(Ai))}const _d=new ue;function S1(s,t,e,n,i,r){return rh(0,s,t-s,e,n,i,_d),rh(3,s,t-s,e,n,i,r),r.multiply(_d)}class Ln{constructor(){v(this,"hipY",0);v(this,"shift",0);v(this,"pel",0);v(this,"chy",0);v(this,"curl",0);v(this,"chest",new Float64Array(3));v(this,"look",new Float64Array(3));v(this,"knF",new Float64Array(3));v(this,"knB",new Float64Array(3));v(this,"armC",new Float64Array(12));v(this,"armM",new Float64Array(12));v(this,"wM",0)}}function is(s,t){s.hipY=t.hipY,s.shift=t.shift,s.pel=t.pel,s.chy=t.chy,s.curl=t.curl,s.wM=t.wM,s.chest.set(t.chest),s.look.set(t.look),s.knF.set(t.knF),s.knB.set(t.knB),s.armC.set(t.armC),s.armM.set(t.armM)}function sn(s,t,e){for(let n=0;n<s.length;n++)s[n]+=(t[n]-s[n])*e}function en(s,t,e,n=e){if(e>0&&(s.hipY+=(t.hipY-s.hipY)*e,s.shift+=(t.shift-s.shift)*e,s.pel+=(t.pel-s.pel)*e,s.chy+=(t.chy-s.chy)*e,s.curl+=(t.curl-s.curl)*e,sn(s.chest,t.chest,e),sn(s.look,t.look,e),sn(s.knF,t.knF,e),sn(s.knB,t.knB,e)),n>0){const i=(1-s.wM)*(1-n),r=(1-t.wM)*n,o=s.wM*(1-n),a=t.wM*n,c=i+r,l=o+a;for(let h=0;h<12;h++)s.armC[h]=c>1e-9?(s.armC[h]*i+t.armC[h]*r)/c:t.armC[h],s.armM[h]=l>1e-9?(s.armM[h]*o+t.armM[h]*a)/l:t.armM[h];s.wM=l}}function Yt(s,t,e,n=!0){const i=n&&Math.hypot(e[0],e[1],e[2])||1;s[t]=e[0]/i,s[t+1]=e[1]/i,s[t+2]=e[2]/i}function us(s){const t=new Ln,e=s.drop??0;t.hipY=Ds(s.crouch)-e,t.shift=s.shift??0,t.pel=s.pelvis*rn,t.chy=s.chest*rn,t.curl=(s.curl??0)*rn;const n=s.lean*rn,i=new P(.5*Math.sin((s.side??0)*rn),Math.cos(n),Math.sin(n)).normalize();Yt(t.chest,0,[i.x,i.y,i.z]);const r=new ue().setFromUnitVectors(Nn,i),o=i.clone().applyAxisAngle(Nn,t.pel),a=new ue().setFromAxisAngle(o,t.chy-t.pel),c=new ue().setFromAxisAngle(Nn,t.pel).premultiply(a).multiply(r),l=s.head*rn,h=(s.pitch??0)*rn,u=new P(Math.sin(l)*Math.cos(h),Math.sin(h)-.15,Math.cos(l)*Math.cos(h)).normalize().applyQuaternion(c);u.y+=Math.sin(n)*.8,u.normalize(),Yt(t.look,0,[u.x,u.y,u.z]);const f=s.beach?t.armM:t.armC;Yt(f,0,s.uaF),Yt(f,3,s.faF),Yt(f,6,s.uaB),Yt(f,9,s.faB),t.wM=s.beach?1:0;const d=Math.min(1,s.crouch+e*3);return Yt(t.knF,0,[.12+.1*s.kneeF[0],.15,1],!1),Yt(t.knB,0,[.6,-.2-.5*d,.5+.2*s.kneeB[0]],!1),t}const zh={uaF:[.8,-.55,.25],faF:[.85,-.3,.45],uaB:[-.5,-.5,-.75],faB:[-.45,-.4,-.8]},Im={uaF:[.45,-.55,-.7],faF:[.4,-.45,-.8],uaB:[-.35,-.75,-.55],faB:[-.2,-.65,-.75]},T1=[{crouch:.85,drop:.08,pelvis:5,chest:0,lean:25,head:30,pitch:15,...zh,uaF:[.7,-.65,.3],faF:[.8,-.5,.35],kneeF:[.35,0,1],kneeB:[.35,0,1]},{crouch:1,drop:.13,shift:.06,pelvis:20,chest:40,lean:30,head:42,pitch:20,uaF:[.6,-.5,.6],faF:[.65,-.25,.7],uaB:[-.3,-.9,.25],faB:[-.35,-.85,.3],kneeF:[.7,0,1],kneeB:[.6,0,1]},{crouch:.5,pelvis:15,chest:50,lean:15,head:15,pitch:20,beach:!0,...Im,kneeF:[.4,0,1],kneeB:[.4,0,1]}],Vh=[{crouch:1,drop:.08,pelvis:0,chest:-10,lean:25,head:35,pitch:-15,...zh,uaB:[-.5,-.55,-.7],faB:[-.45,-.4,-.8],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.05,shift:-.05,pelvis:40,chest:80,lean:20,side:-5,head:20,pitch:-25,uaF:[.7,-.45,.55],faF:[.8,-.2,.55],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.3,0,1],kneeB:[.25,0,1]},{crouch:.7,pelvis:25,chest:40,lean:25,head:30,pitch:-10,beach:!0,...Im,kneeF:[.4,0,1],kneeB:[.4,0,1]}],E1=.675,Dm=[.12,-.15,1],A1=[.6,-.5,1],w1=.19,R1=18,Nm=[{crouch:.85,drop:.08,pelvis:0,chest:-10,lean:25,head:40,pitch:-5,...zh,uaF:[.7,-.35,.6],faF:[.75,-.1,.65],kneeF:[.4,0,1],kneeB:[.4,0,1]},{crouch:1,drop:.13,shift:-.06,pelvis:30,chest:85,lean:0,side:-10,head:30,pitch:-20,uaF:[.75,-.3,.55],faF:[.8,-.05,.55],uaB:[-.6,.6,-.35],faB:[-.45,.85,-.1],kneeF:[.25,0,1],kneeB:[.2,0,1]},{crouch:1,drop:.08,pelvis:15,chest:35,lean:25,head:25,pitch:5,beach:!0,uaF:[.7,-.8,-.3],faF:[.75,-.6,-.45],uaB:[-.3,-.85,-.4],faB:[-.15,-.8,-.5],kneeF:[.45,0,1],kneeB:[.45,0,1]}],Fm={uaB:[-.7,-.3,-.6],faB:[-.55,-.3,-.75]},C1={uaB:[-.55,-.5,-.6],faB:[-.4,-.45,-.75]},P1={crouch:1,drop:.235,pelvis:25,chest:55,lean:65,side:25,curl:50,head:30,pitch:10,beach:!0,uaF:[.85,-.45,.25],faF:[.95,-.1,.25],uaB:[.7,-.7,-.1],faB:[.95,-.3,-.15],kneeF:[.6,0,1],kneeB:[.6,0,1]},ss=T1.map(us),Uc=Vh.map(us),Br=Nm.map(us),L1=us({...Vh[1],...Fm}),I1=us({...Vh[1],...C1}),Um=us({...Nm[1],...Fm}),Om=us(P1),Gh=new Float64Array(6),Wh=new Float64Array(6);Yt(Gh,0,Pm.uaF);Yt(Gh,3,Pm.faF);Yt(Wh,0,Lm.uaF);Yt(Wh,3,Lm.faF);for(const s of[...Br,Um])Yt(s.knB,0,s===Br[0]?A1:Dm,!1),Yt(s.knF,0,Hh,!1);for(const s of[ss[0],ss[1]])Yt(s.knB,0,a1,!1);for(const s of ss)Yt(s.knF,0,Hh,!1);Yt(ss[2].knB,0,Cm,!1);Yt(Om.knB,0,[.6,0,.7],!1);const ka=(()=>{const s=new Ln;return s.pel=6*rn,s.chy=30*rn,Yt(s.chest,0,[0,1,.45]),Yt(s.look,0,[1,-.15,.35]),Yt(s.armM,0,[.1,-.98,.3]),Yt(s.armM,3,[.75,-.45,.35]),Yt(s.armM,6,[-.2,-.98,.02]),Yt(s.armM,9,[-.15,-.97,.06]),s.wM=1,s})(),xd=(()=>{const s=new Ln;return is(s,ka),Yt(s.armM,0,[.7,-.5,.5]),Yt(s.armM,3,[.8,-.45,.4]),Yt(s.armM,6,[-.7,-.5,.5]),Yt(s.armM,9,[-.8,-.45,.4]),s})(),vd=(()=>{const s=new Ln;return is(s,ka),Yt(s.armM,0,[.2,-.97,.2]),Yt(s.armM,3,[.35,-.92,.2]),Yt(s.armM,6,[-.2,-.97,.15]),Yt(s.armM,9,[-.05,-.97,.2]),s})(),D1=(()=>{const s=new Ln;return is(s,ka),Yt(s.armM,6,[-.3,-.9,.5]),Yt(s.armM,9,[-.2,-.9,.4]),s})(),N1=.07,F1=.1,U1=9,Md=[.6,.86],O1=.45,B1=.05,k1=.07,H1=.08,Oc=[.45,.95],z1=.24,V1=.06,G1=.04,W1=12;class X1{constructor(t){v(this,"root");v(this,"meshes");v(this,"b");v(this,"controlled");v(this,"restQ");v(this,"spine");v(this,"pelvisParentInv",new Gt);v(this,"thighOff",[]);v(this,"legLen",[]);v(this,"headTopLocal",new P);v(this,"jointBone");v(this,"x",new Float64Array(Bo));v(this,"v",new Float64Array(Bo));v(this,"tgt",new Float64Array(Bo));v(this,"fresh",!0);v(this,"cs",1);v(this,"active",!1);v(this,"manSign",0);v(this,"kB",0);v(this,"kS",0);v(this,"kC",0);v(this,"pkT",0);v(this,"held",0);v(this,"retT",9);v(this,"tubeLin",0);v(this,"upGate",0);v(this,"climb",0);v(this,"kicked",!1);v(this,"kickT",9);v(this,"kickEnv",0);v(this,"foldEnv",0);v(this,"landW",0);v(this,"cutW",0);v(this,"heel",0);v(this,"windW",0);v(this,"drvW",0);v(this,"kissAge",0);v(this,"ldW",0);v(this,"drvR",0);v(this,"handW",0);v(this,"handT",0);v(this,"tallW",1);v(this,"tallQ",1);v(this,"openW",0);v(this,"airW",0);v(this,"wideW",0);v(this,"midF");v(this,"midB");v(this,"qH",new ue);v(this,"hv",new P);v(this,"cur",new Ln);v(this,"phS",new Ln);v(this,"phP",new Ln);v(this,"phR",new Ln);v(this,"pkS",new Ln);v(this,"pkC",new Ln);v(this,"rootInv",new Gt);v(this,"qR",new ue);v(this,"qRi",new ue);v(this,"q1",new ue);v(this,"q2",new ue);v(this,"qw",new ue);v(this,"qp",new ue);v(this,"qC",new ue);v(this,"qCi",new ue);v(this,"s3",new P);v(this,"p3",new P);v(this,"va",new P);v(this,"vb",new P);v(this,"vc",new P);v(this,"vd",new P);v(this,"ve",new P);v(this,"vf",new P);v(this,"vg",new P);v(this,"H",new P);v(this,"K",new P);v(this,"E",new P);v(this,"T",new P);v(this,"aA",new P);v(this,"aB",new P);v(this,"qa",new ue);v(this,"side",new P);v(this,"footP",new P);v(this,"armPrev",[new P(1,0,0),new P(1,0,0),new P(-1,0,0),new P(-1,0,0)]);v(this,"armM",[new P,new P,new P,new P]);v(this,"armFresh",!0);v(this,"hbPrev",0);v(this,"hbFresh",!0);v(this,"liftG",0);v(this,"hiMem",0);v(this,"headPrev",[new P,new P]);v(this,"armTurnMax",Nc);v(this,"fwd",new P);v(this,"headFaceLocal",new P);v(this,"hingeLocal",[new P,new P]);v(this,"pelLatLocal",new P);v(this,"pelLat",new P);this.root=t.root,this.meshes=t.meshes;const e=["clavicle_l","pelvis","spine_01","spine_02","spine_03","neck_01","Head","upperarm_l","lowerarm_l","hand_l","upperarm_r","lowerarm_r","hand_r","thigh_l","calf_l","foot_l","ball_l","thigh_r","calf_r","foot_r","ball_r"];this.b={};for(const a of e)this.b[a]=t.bone(a);this.controlled=e.map(a=>this.b[a]),this.restQ=this.controlled.map(a=>a.quaternion.clone()),this.spine=[this.b.pelvis,this.b.spine_01,this.b.spine_02,this.b.spine_03],this.root.position.set(0,0,0),this.root.quaternion.identity(),this.root.scale.set(1,1,1),this.root.updateMatrixWorld(!0),this.pelvisParentInv.copy(this.b.pelvis.parent.matrixWorld).invert();const n=new P().setFromMatrixPosition(this.b.pelvis.matrixWorld);for(const a of["l","r"]){const c=new P().setFromMatrixPosition(this.b["thigh_"+a].matrixWorld),l=new P().setFromMatrixPosition(this.b["calf_"+a].matrixWorld),h=new P().setFromMatrixPosition(this.b["foot_"+a].matrixWorld);this.thighOff.push(c.clone().sub(n)),this.legLen.push(c.distanceTo(l)+l.distanceTo(h))}for(let a=0;a<2;a++){const c=new ue;this.b[a===0?"thigh_l":"thigh_r"].matrixWorld.decompose(new P,c,new P),this.hingeLocal[a].set(1,0,0).applyQuaternion(c.invert())}{const a=new ue;this.b.pelvis.matrixWorld.decompose(new P,a,new P),this.pelLatLocal.set(1,0,0).applyQuaternion(a.invert())}const i=this.b.Head,r=new ue;i.matrixWorld.decompose(new P,r,new P),this.headTopLocal.set(0,VS,0).applyQuaternion(r.invert()),this.headFaceLocal.set(0,0,1).applyQuaternion(r);const o=a=>{let c;return this.b["hand_"+a].traverse(l=>{l.name==="middle_03_"+a&&(c=l)}),c??this.b["hand_"+a]};this.midF=o("l"),this.midB=o("r"),this.jointBone={hip:this.b.pelvis,chest:this.b.spine_03,headTop:this.b.Head,shoulderF:this.b.upperarm_l,shoulderB:this.b.upperarm_r,handF:this.b.hand_l,handB:this.b.hand_r,kneeF:this.b.calf_l,kneeB:this.b.calf_r,ankleF:this.b.foot_l,ankleB:this.b.foot_r}}setStance(t){this.cs=t<0?-1:1,this.root.scale.z=this.cs}reset(){this.fresh=!0,this.armFresh=!0,this.hbFresh=!0,this.liftG=0,this.hiMem=0,this.active=!1,this.manSign=0,this.pkT=0,this.held=0,this.retT=9,this.tubeLin=0,this.climb=0,this.kicked=!1,this.kickT=9,this.kickEnv=0,this.foldEnv=0,this.landW=0,this.cutW=0,this.heel=0,this.windW=0,this.kissAge=0,this.handT=0,this.handW=0,this.tallW=1,this.airW=0,this.wideW=0,this.root.position.set(0,0,0),this.root.quaternion.identity()}joint(t,e){const n=this.jointBone[t];return t==="headTop"?e.copy(this.headTopLocal).applyMatrix4(n.matrixWorld):e.setFromMatrixPosition(n.matrixWorld)}phases(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.intent)?t.intent:0,r=Number.isFinite(t.hb)?t.hb:0,o=B(1,1.8,Math.abs(i)),a=B(1,1.8,Math.abs(n)),c=Math.sign(i),l=Math.sign(n),h=o>.5?c:a>.5?l:0;if(h!==0&&(h!==this.manSign||!this.active)){this.manSign=h,this.active=!0,this.pkT=0,this.held=0,this.retT=9;const p=Math.max(kt(-Math.cos(r)/.4,0,1),h<0?B(-.3,-.8,r):0);this.kC=p,this.kB=h>0?1-p:0,this.kS=h<0?1-p:0,this.upGate=p+(1-p)*B(.4,.28,Number.isFinite(t.t)?t.t:.5),this.climb=h<0?(1-p)*B(.15,.45,r):0,this.kicked=!1}if(!this.active)return{load:0,peak:0,ret:0,up:0};const u=c===this.manSign?o:0,f=l===this.manSign?1:0,d=u*(1-B(.3,1.2,Math.abs(n))),m=Math.max(u*B(.4,1.4,Math.abs(n)),a)*f;m>.5?(this.pkT+=e,this.held=Math.max(this.held,B(.1,.25,this.pkT)),this.retT=0):(m<.2&&(this.pkT=0),this.held>0&&(this.retT+=e));const _=this.held*B(sd,zS,this.retT);this.retT>sd&&(this.held=0),d<.01&&m<.01&&_<.01&&o<.5&&(this.active=!1);const g=1-B(rd[0],rd[1],this.pkT);return{load:d,peak:m,ret:_,up:g}}headLook(t,e){const n=Number.isFinite(t.turn)?t.turn:0,i=Number.isFinite(t.t)?t.t:.5,r=Number.isFinite(t.intent)?t.intent:0,o=Number.isFinite(t.hb)?t.hb:0,a=B(1,2,Math.abs(n)),c=(n>0?a:0)*(.45+.55*B(.3,.8,i)),l=(n<0?a:0)*(.45+.55*(1-B(.15,.55,i)));Rn(e,We,Bc[0],Bc[1],Bc[2]),c>0&&Wo(e,We,q1,c),l>0&&Wo(e,We,K1,l);const h=kt(-Math.cos(o)/.4,0,1)*B(1,1.8,Math.abs(r));h>0&&Wo(e,We,[-Math.cos(o),0,Math.sin(o)*this.cs],.8*h);const u=B(0,1,this.tubeLin);u>0&&Wo(e,We,Y1,u);const f=j1*kt(r/2.2,-1,1)*(1-u),d=Math.cos(f),m=Math.sin(f),_=e[We],g=e[We+2];e[We]=_*d+g*m,e[We+2]=-_*m+g*d}kinds(t,e,n,i){is(t,e);const r=this.kB+this.kS;this.kS>0&&r>0&&en(t,n,this.kS/r),this.kC>0&&en(t,i,this.kC)}drive(t,e,n){const i=this.tgt,r=this.cur,o=t.wipeT>=0;let a=0;if(this.drvW=0,this.ldW=0,this.kickEnv=0,o){this.handW=0,this.openW=0;const f=t.wipeT,d=B(.25,.45,f);r.pel=0,r.chy=0,r.curl=0,r.wM=1,Yt(r.armM,0,[1-.7*d,-.15-.85*d,.3]),Yt(r.armM,3,[1-.6*d,-.1-.9*d,.25]),Yt(r.armM,6,[1-1.2*d,-.1+.7*d,.45]),Yt(r.armM,9,[1-.7*d,-.05+.95*d,.3]),Yt(r.look,0,[1,-.2,.3]),Yt(r.knF,0,[.4,.3,1]),Yt(r.knB,0,[.2,.3,1]),Rn(i,mn,td,Ds(1)-.05,0),Rn(i,gn,-.3+.9*d,1,.4),i[ko]=.2}else{is(r,ka),r.hipY=Ds(t.crouch)+this.tallW*(YS+$S*(kt(t.crouch,0,1)-.3));const f=kt(t.crouch,0,1);Yt(r.knF,0,[.05,.15,1],!1),Yt(r.knB,0,[Vo[0],Vo[1]-.15*f,Vo[2]],!1),en(r,xd,0,B(.4,.7,kt(t.spread,0,1))),a=kt(t.stall,0,1),en(r,D1,0,.6*a),this.tubeLin=t.inTube?Math.min(1,this.tubeLin+n/yS):Math.max(0,this.tubeLin-n/bS);const d=B(0,1,this.tubeLin),m=1-d,_=this.phases(t,n);if(_.ret>0||_.load>0||_.peak>0){is(this.pkS,I1),en(this.pkS,L1,0,this.upGate),en(this.pkS,Uc[1],_.up*this.upGate),is(this.pkC,Um),en(this.pkC,Br[1],_.up),this.kinds(this.phR,ss[2],Uc[2],Br[2]),this.kinds(this.phS,ss[0],Uc[0],Br[0]),this.kinds(this.phP,ss[1],this.pkS,this.pkC);const At=this.kS*(1-this.climb);if(At>0)for(const V of[this.phR,this.phS,this.phP])sn(V.knB,Vo,At);const Pt=this.climb;if(Pt>0)for(let V=0;V<6;V++)this.phP.armC[V]+=(Gh[V]-this.phP.armC[V])*Pt,this.phR.armM[V]+=(Wh[V]-this.phR.armM[V])*Pt;en(r,this.phR,_.ret*m),en(r,this.phS,_.load*m),en(r,this.phP,_.peak*m)}const g=m*(1-Math.max(_.load,_.peak,_.ret))*(1-B(.4,.7,kt(t.spread,0,1)))*(1-this.airW);this.handT+=(g-this.handT)*(1-Math.exp(-n/(g>this.handT?v1:M1))),this.handW=Math.min(1,this.handT+d);const p=1-Math.max(_.load,_.peak,_.ret);this.tallQ=.4+.6*this.held,this.tallW+=(p-this.tallW)*(1-Math.exp(-n/(p>this.tallW?JS*this.tallQ:n1)));const M=Number.isFinite(t.hb)?t.hb:0,y=this.active||_.ret>0?this.kB*Math.max(_.load,_.peak,_.ret)*m:0,x=B(ad[0],ad[1],M);this.kissAge=y*(1-x)>.3?this.kissAge+n:0;const I=y*(1-x)*(1-B(cd[0],cd[1],this.kissAge)),w=y*x*B(ld[0],ld[1],Math.abs(Number.isFinite(t.turn)?t.turn:0));this.drvR=Math.min(w,this.drvR+n/r1);const R=this.drvR;this.drvW=R;const L=this.landW=this.kickT<9?B(fd,Fc,this.kickT)*(1-B(pd[0],pd[1],this.kickT))*m:0;if(this.ldW=y*(1-x)*(1-L),I>0&&(r.hipY-=i1*I,sn(r.knB,XS,I),sn(r.knF,qS,I)),L>0&&(r.hipY+=Math.max(0,p1-r.hipY)*L,sn(r.knB,Cm,L*B(Fc,dd,this.kickT))),R>0&&(r.hipY+=(s1-r.hipY)*R,sn(r.knB,KS,R)),this.active&&!this.kicked&&this.kS>.5&&this.manSign<0){const At=Number.isFinite(t.t)?t.t:.5,Pt=Number.isFinite(t.turn)?t.turn:0;this.climb*B(hd[0],hd[1],At)*B(ud[0],ud[1],-Pt)>.5&&(this.kicked=!0,this.kickT=0)}this.kickT<9&&(this.kickT+=n),this.kickEnv=B(0,fd,this.kickT)*(1-B(Fc,dd,this.kickT))*m,this.foldEnv=this.kickT<9?B(Go[0],Go[1],this.kickT)*(1-B(Go[2],Go[3],this.kickT))*m:0;const T=Math.max(kt(-Math.cos(M)/.4,0,1),B(-.95,-1.4,M)),b=this.active||_.ret>0?Math.min(1,Math.max(B(.75,.9,this.kC),B(.25,.45,this.kC)*B(-.45,-.65,M))+this.kS*(1-this.climb)*T)*Math.max(_.load,_.peak,_.ret)*m:0;this.cutW=b;const D=R1*rn*b*Math.max(_.peak,_.ret);this.heel+=(D-this.heel)*(1-Math.exp(-n/.25)),b>0&&(r.hipY+=(E1-r.hipY)*b,sn(r.knB,Dm,b),sn(r.knF,Hh,b)),d>0&&en(r,Om,d,B(.5,1,this.tubeLin));const z=a*m,F=m*(1-Math.max(_.load,_.peak,_.ret)),W=this.active&&this.kS>.5&&this.manSign<0&&!this.kicked?this.climb*_.peak*m:0;this.windW=W;const K=t.air===!0,Y=t.landAge!==void 0&&Number.isFinite(t.landAge)?t.landAge:1e9,Z=kt(Number.isFinite(t.landFlat)?t.landFlat:0,0,1);let H=0,st=0;if(K){const At=kt((t.airT??0)/Math.max(.3,t.airDur??1),0,1),Pt=B(Md[0],Md[1],At),V=kt(Math.abs(Number.isFinite(t.spin)?t.spin:0)/U1,0,1),J=Ds(1)-N1-F1*V;r.hipY=J+(Ds(O1)-J)*Pt,sn(r.knF,[.3,.35,1],1-Pt),sn(r.knB,[.35,.2,1],1-Pt),en(r,xd,0,.7),en(r,vd,0,Pt)}else Y<Oc[1]&&(st=B(0,H1,Y)*(1-B(Oc[0],Oc[1],Y)),r.hipY+=(Ds(1)-B1-k1*Z-r.hipY)*st,H=z1*st,sn(r.chest,[.45,1,.35],st),en(r,vd,0,st));this.airW=K?1:st;const ht=K?0:st>.05?1:0;this.wideW+=kt(ht-this.wideW,-n/.25,n/.15),Rn(i,mn,td+H+jS*F+o1*this.ldW+w1*this.cutW-.13*z*(1-.8*this.tallW)-c1*this.drvW,r.hipY,r.shift);const dt=(1-Math.max(_.load,_.peak,_.ret))*m;this.openW+=(dt-this.openW)*(1-Math.exp(-n/(dt>this.openW?t1:e1))),Rn(i,gn,r.chest[0]-.25*z,r.chest[1],r.chest[2]),i[ko]=0}Rn(i,We,r.look[0],r.look[1],r.look[2]),o||this.headLook(t,i),Rn(i,vr,r.knF[0],r.knF[1],r.knF[2]),Rn(i,Mr,r.knB[0],r.knB[1],r.knB[2]),i[vS]=0,i[yr]=r.pel,i[Ho]=r.chy,i[Ic]=r.curl;const c=this.fresh?i:this.x;this.vc.set(c[gn],c[gn+1],c[gn+2]).normalize(),S1(c[yr],c[Ho],c[Ic],this.vc,c[ko],this.qCi).invert();for(let f=0;f<4;f++){const d=3*f,m=this.vd.set(r.armM[d],r.armM[d+1],r.armM[d+2]).applyQuaternion(this.qCi),_=this.ve.set(r.armC[d],r.armC[d+1],r.armC[d+2]).multiplyScalar(1-r.wM).addScaledVector(m,r.wM);_.lengthSq()<1e-8&&_.copy(m),_.normalize(),Rn(i,Dc[f],_.x,_.y,_.z)}const l=this.root.parent;if(this.handW>0&&l){l.matrixWorld.decompose(this.p3,this.qH,this.s3);const f=kt(this.hv.set(1,0,0).applyQuaternion(this.qH).x/.3,-1,1);this.qH.invert();const d=B(0,1,this.tubeLin);for(let m=0;m<4;m++){if((m&1)===0&&d<=0)continue;const _=m===0?y1:m===1?m1:m===2?b1:g1,g=m===1?_1:m===3?x1:_,p=this.hv.set((_[0]+(g[0]-_[0])*d)*f,_[1]+(g[1]-_[1])*d,_[2]+(g[2]-_[2])*d).normalize().applyQuaternion(this.qH);p.z*=this.cs,p.applyQuaternion(this.qCi);const M=Dc[m],y=(m&1)===0?d:this.handW;this.ve.set(i[M]+(p.x-i[M])*y,i[M+1]+(p.y-i[M+1])*y,i[M+2]+(p.z-i[M+2])*y),this.ve.lengthSq()>1e-6&&(this.ve.normalize(),Rn(i,M,this.ve.x,this.ve.y,this.ve.z))}}o||(yd(i,Pn,Pn+3,nd+4),yd(i,Pn+6,Pn+9,id+4));const h=this.x,u=this.v;if(this.fresh)h.set(i),u.fill(0),this.fresh=!1;else{for(let g=0;g<Bo;g++){if(g>=Pn&&g<$f+3)continue;const p=o?9:g===mn+1&&this.tubeLin===0&&i[g]>h[g]&&this.drvW<.05&&this.tallW<.98&&this.landW===0?kS/this.tallQ:g===mn+1&&this.windW>.5&&i[g]<h[g]?HS:g>=We&&g<We+3?IS:g===Ho?DS:g===yr?NS:this.airW>.01&&(g<mn+3||g>=gn&&g<gn+3)?W1:(g===mn+1||g>=gn&&g<gn+3)&&this.tubeLin===0?BS:g>=vr&&g<Mr+3?US:g===mn&&this.ldW+this.cutW>.05?OS:FS,M=Math.exp(-p*n),y=h[g]-i[g],x=u[g]+y*p;h[g]=i[g]+(y+x*n)*M,u[g]=(u[g]-x*p*n)*M}const f=o?28:TS,d=o?1:AS,m=Math.max(1,Math.ceil(n/(1/120))),_=n/m;for(let g=0;g<m;g++)for(let p=Pn;p<$f+3;p++){const M=!o&&p<Pn+6?ES:f;u[p]+=(M*M*(i[p]-h[p])-2*d*M*u[p])*_,h[p]+=u[p]*_}}if(this.armTurnMax=o?25:Nc,o){const f=t.wipeT;t.wipeKind===2?this.root.position.set(-.5*f,e+.9*f-.6*f*f,-.9*f*this.cs):this.root.position.set(1.6*f,e+.5*f-.8*f*f,.35*f*this.cs),this.q1.setFromAxisAngle(this.vc.set(0,0,1),(t.wipeKind===2?1.2:-2.2)*Math.min(1,f)),this.root.quaternion.copy(this.q1)}else this.root.position.set(0,e,0),this.root.quaternion.identity();this.solve(o?Math.min(1,t.wipeT*3):0,t.wipeT,n),this.armFresh=!1}solve(t,e,n){const i=this.x,r=this.b;for(let M=0;M<this.controlled.length;M++)this.controlled[M].quaternion.copy(this.restQ[M]);const o=l1*this.kickEnv+h1*this.foldEnv;let a=i[mn+1]+f1*this.kickEnv-u1*this.foldEnv;const c=.95+ZS*Math.max(this.tallW,this.drvW),l=c+d1*this.kickEnv,h=this.va.set(ha[0]+V1*this.wideW,ha[1],ha[2]),u=this.vb.set(ua[0]-G1*this.wideW,ua[1],ua[2]);t>0&&(h.x+=.2*t*Math.sin(6*e),h.y+=.3*t*(.6+.4*Math.sin(8*e)),h.z+=.2*t*Math.sin(5*e),u.x-=.15*t*Math.cos(7*e),u.y+=.25*t*(.6+.4*Math.cos(9*e)),u.z-=.2*t*Math.sin(4*e+1));for(let M=0;M<2;M++){const y=M===0?h:u,x=this.thighOff[M],I=i[mn]+o+x.x-y.x,w=i[mn+2]+x.z-y.z,R=this.legLen[M]*(M===1?l:c),L=y.y+Math.sqrt(Math.max(.01,R*R-I*I-w*w))-x.y;a>L&&(a=L)}r.pelvis.position.set(i[mn]+o,a,i[mn+2]).applyMatrix4(this.pelvisParentInv),this.root.updateMatrixWorld(!0),this.rootInv.copy(this.root.matrixWorld).invert(),this.root.matrixWorld.decompose(this.p3,this.qR,this.s3),this.qRi.copy(this.qR).invert();const d=this.vc.set(i[gn],i[gn+1],i[gn+2]).normalize(),m=i[yr],_=i[Ho]-i[yr];for(let M=0;M<4;M++)rh(M,m,_,i[Ic],d,i[ko],this.q2),M===0&&this.qC.copy(this.q2),M===3&&this.qC.premultiply(this.q2),this.rotateModel(this.spine[M],this.q2,M===0||M===3);this.heel>1e-4&&t===0&&(this.q1.setFromAxisAngle(this.vf.set(1,0,0),-this.heel),this.rotateModel(this.spine[0],this.q1,!0),this.qC.premultiply(this.q1)),this.openW>.001&&t===0&&(this.q1.setFromAxisAngle(this.vf.copy(Nn).applyQuaternion(this.qC).add(Nn).normalize(),QS*rn*this.openW),this.rotateModel(r.spine_03,this.q1,!0)),r.Head.matrixWorld.decompose(this.p3,this.qw,this.s3),this.fwd.copy(this.headFaceLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi);const g=this.vd.set(i[We],i[We+1],i[We+2]).normalize();this.q1.setFromUnitVectors(this.fwd,g),this.q2.identity().slerp(this.q1,.5),this.rotateModel(r.neck_01,this.q2,!0),this.rotateModel(r.Head,this.q2,!0),r.pelvis.matrixWorld.decompose(this.p3,this.qw,this.s3),this.pelLat.copy(this.pelLatLocal).applyQuaternion(this.qw).applyQuaternion(this.qRi),this.q1.setFromAxisAngle(Nn,(Zf[0]+Qf[0]*this.cutW)*m),this.twoBone(r.thigh_l,r.calf_l,r.foot_l,h,this.ve.set(i[vr],i[vr+1],i[vr+2]).applyQuaternion(this.q1),this.hingeLocal[0]),this.q1.setFromAxisAngle(Nn,(Zf[1]+Qf[1]*this.cutW)*m),this.twoBone(r.thigh_r,r.calf_r,r.foot_r,u,this.ve.set(i[Mr],i[Mr+1],i[Mr+2]).applyQuaternion(this.q1),this.hingeLocal[1]),this.aim(r.foot_l,r.ball_l,this.ve.set(.3,-.5,1).normalize()),this.aim(r.foot_r,r.ball_r,this.ve.set(-.05,-.5,1).normalize());for(let M=0;M<4;M++)this.armM[M].copy(this.armDir(M,Dc[M],n)).applyQuaternion(this.qC);this.fwd.set(0,0,1).applyQuaternion(this.qC),t===0&&e<0&&(this.soften(this.armM[0],this.armM[1],nd),this.soften(this.armM[2],this.armM[3],id)),this.softHandDown(r,t===0&&e<0&&this.tubeLin===0,n),this.aim(r.upperarm_l,r.lowerarm_l,this.armM[0]),this.aim(r.lowerarm_l,r.hand_l,this.armM[1]),this.aim(r.upperarm_r,r.lowerarm_r,this.armM[2]),this.aim(r.lowerarm_r,r.hand_r,this.armM[3]);const p=this.handW;if(p>0)for(let M=0;M<2;M++){const y=M===0?r.hand_l:r.hand_r,x=M===0?this.midF:this.midB;if(x===y)continue;const I=this.mpos(y,this.aA),w=this.vd.setFromMatrixPosition(x.matrixWorld).applyMatrix4(this.rootInv).sub(I).normalize();w.lerp(this.armM[M===0?1:3],p).normalize(),this.aimTo(y,x,w)}}softHandDown(t,e,n){const i=this.armM[2],r=this.armM[3],o=this.vc.set(0,1,0).transformDirection(this.rootInv),a=this.mpos(t.upperarm_r,this.aA),c=a.distanceTo(this.mpos(t.lowerarm_r,this.aB)),l=this.aB.distanceTo(this.mpos(t.hand_r,this.vd)),h=a.sub(this.mpos(t.thigh_r,this.vd)).dot(o),u=Math.asin(kt(i.dot(o),-1,1)),f=Math.asin(kt(r.dot(o),-1,1)),d=p=>h+c*Math.sin(Math.min(u+p,zo))+l*Math.sin(Math.min(f+p,zo));let m=d(0);this.hiMem=Math.max(this.hbPrev,this.hiMem-CS*n);const _=B(ed[0],ed[1],this.hiMem);this.liftG=_>=this.liftG?_:this.liftG+(_-this.liftG)*(1-Math.exp(-n/PS));const g=m+(this.hbPrev-wS*n-m)*this.liftG;if(e&&!this.hbFresh&&m<g){let p=0,M=LS;for(let y=0;y<14;y++){const x=.5*(p+M);d(x)<g?p=x:M=x}this.tipUp(i,o,u,Math.max(u,Math.min(u+M,zo)),0),this.tipUp(r,o,f,Math.max(f,Math.min(f+M,zo)),1),m=d(M)}else this.tipUp(i,o,u,u,0),this.tipUp(r,o,f,f,1);this.hbPrev=m,this.hbFresh=!1}tipUp(t,e,n,i,r){const o=this.vf.copy(t).addScaledVector(e,-t.dot(e)),a=o.length(),c=this.headPrev[r].addScaledVector(e,-this.headPrev[r].dot(e));c.lengthSq()>1e-8&&o.normalize().lerp(c.normalize(),Math.max(1-B(.15,.5,a),RS*B(0,.3,i-n))),o.lengthSq()<1e-8&&o.set(-1,0,0).addScaledVector(e,-e.x),o.normalize(),this.headPrev[r].copy(o),!(i<=n)&&t.copy(o).multiplyScalar(Math.cos(i)).addScaledVector(e,Math.sin(i))}aimTo(t,e,n){const i=this.mpos(t,this.aA),r=this.aB.setFromMatrixPosition(e.matrixWorld).applyMatrix4(this.rootInv).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}soften(t,e,n){const i=kt(t.dot(e),-1,1),r=n*rn;if(Math.acos(i)>=r)return;const o=this.vd.copy(this.fwd).addScaledVector(t,-this.fwd.dot(t));o.lengthSq()<.05&&o.copy(Nn).addScaledVector(t,-t.y),o.normalize();const a=this.vf.copy(e).addScaledVector(t,-i),c=a.length();a.addScaledVector(o,.1*(1-B(.05,.25,c))),a.lengthSq()<1e-10&&a.copy(o),a.normalize(),e.copy(t).multiplyScalar(Math.cos(r)).addScaledVector(a,Math.sin(r))}armDir(t,e,n){const i=this.ve.set(this.x[e],this.x[e+1],this.x[e+2]);i.lengthSq()<1e-10&&i.copy(this.armPrev[t]),i.normalize();const r=this.armPrev[t];if(this.armFresh)return r.copy(i);const o=r.angleTo(i),a=(t<2&&this.armTurnMax===Nc?SS:this.armTurnMax)*n;return o>a&&(this.qa.setFromUnitVectors(r,i),this.q2.identity().slerp(this.qa,a/o),i.copy(r).applyQuaternion(this.q2)),r.copy(i)}mpos(t,e){return e.setFromMatrixPosition(t.matrixWorld).applyMatrix4(this.rootInv)}rotateModel(t,e,n){const i=t.parent;t.matrixWorld.decompose(this.p3,this.qw,this.s3),i.matrixWorld.decompose(this.p3,this.qp,this.s3),this.qw.premultiply(this.qRi).premultiply(e).premultiply(this.qR),t.quaternion.copy(this.qp.invert().multiply(this.qw)),n?t.updateMatrixWorld(!0):(t.updateMatrix(),t.matrixWorld.multiplyMatrices(i.matrixWorld,t.matrix))}aim(t,e,n){const i=this.mpos(t,this.aA),r=this.mpos(e,this.aB).sub(i).normalize();this.qa.setFromUnitVectors(r,n),this.rotateModel(t,this.qa,!0)}twoBone(t,e,n,i,r,o){const a=this.mpos(t,this.H),c=a.distanceTo(this.mpos(e,this.K)),l=this.K.distanceTo(this.mpos(n,this.E)),h=this.T.copy(i).sub(a),u=Math.max(.05,Math.min(h.length(),(c+l)*.999));h.normalize();const f=kt((c*c+u*u-l*l)/(2*c*u),-1,1),d=Math.sqrt(Math.max(0,1-f*f)),m=this.side.copy(r).addScaledVector(h,-r.dot(h));m.lengthSq()<1e-8&&m.set(0,0,1),m.normalize();for(let L=0;L<3;L++){const T=this.aA.copy(h).multiplyScalar(f).addScaledVector(m,d).normalize(),b=this.aB.copy(m).cross(h).normalize(),D=this.vf.copy(this.pelLat).addScaledVector(T,-this.pelLat.dot(T));b.addScaledVector(T,-b.dot(T));const z=Math.atan2(this.vg.copy(D).cross(b).dot(T),D.dot(b)),F=(Jf+(MS-Jf)*B(0,1,this.tubeLin))*rn;if(Math.abs(z)<=F)break;m.applyAxisAngle(h,kt(z,-F,F)-z).normalize()}const _=this.K.copy(a).addScaledVector(h,f*c).addScaledVector(m,d*c),g=this.footP.copy(a).addScaledVector(h,u),p=this.E.copy(_).sub(a).normalize();this.aim(t,e,p);const M=this.aA.copy(m).cross(h).normalize();t.matrixWorld.decompose(this.p3,this.qw,this.s3);const y=this.aB.copy(o).applyQuaternion(this.qw).applyQuaternion(this.qRi);if(y.addScaledVector(p,-y.dot(p)),y.lengthSq()>1e-8){y.normalize();const L=Math.atan2(this.vf.copy(y).cross(M).dot(p),y.dot(M));this.qa.setFromAxisAngle(p,L),this.rotateModel(t,this.qa,!0)}const x=this.mpos(e,this.H),I=this.mpos(n,this.vf).sub(x),w=g.sub(_);I.addScaledVector(M,-I.dot(M)),w.addScaledVector(M,-w.dot(M));const R=Math.atan2(this.T.copy(I).cross(w).dot(M),I.dot(w));this.qa.setFromAxisAngle(M,R),this.rotateModel(e,this.qa,!0)}}const Yi=new P,Ps=new P,br=new P;function yd(s,t,e,n){Yi.set(s[t],s[t+1],s[t+2]).normalize(),Ps.set(s[e],s[e+1],s[e+2]).normalize();const i=n*rn;br.set(0,0,1).addScaledVector(Yi,-Yi.z),br.lengthSq()<.05&&br.set(0,1,0).addScaledVector(Yi,-Yi.y),br.normalize(),!(Math.acos(kt(Ps.dot(Yi),-1,1))>=i)&&(Ps.copy(Yi).multiplyScalar(Math.cos(i)).addScaledVector(br,Math.sin(i)),Rn(s,e,Ps.x,Ps.y,Ps.z))}const Ha=(s,t,e)=>{const n=Math.hypot(s,t,e);return[s/n,t/n,e/n]},Bc=Ha(1,-.15,.14),q1=Ha(.94,.45,.33),K1=Ha(.2,.1,1),Y1=Ha(1,0,.1),j1=.35;function Wo(s,t,e,n){s[t]+=(e[0]-s[t])*n,s[t+1]+=(e[1]-s[t+1])*n,s[t+2]+=(e[2]-s[t+2])*n}function Rn(s,t,e,n,i){s[t]=e,s[t+1]=n,s[t+2]=i}function $1(){return{p:new P,es:new P,eu:new P,n:new P}}const Z1={u:0,y:0,A:0,W:0,m:0,sinA:0};function J1(s,t,e,n){const i=s.facePoint(t,e,Z1),r=e<0?0:e,o=2*i.A*(r<1?1-r:0),a=i.m;return n.p.set(-t,i.y,i.u),n.es.set(-1,0,0),n.eu.set(0,o/a,-i.W/a),n.n.set(0,i.W/a,o/a),n}function Q1(s,t,e,n,i){const r=Math.cos(t),o=Math.sin(t);e.set(s.es.x*r+s.eu.x*o,s.es.y*r+s.eu.y*o,s.es.z*r+s.eu.z*o),n.copy(s.n),i.crossVectors(e,n)}const fa=1.85,tT=.5,Vs=.065,bd=.45,eT=.45,Sd=.5,Td=.3,Ed=.3;function nT(){const s=fa,t=tT/2,e=new fm,n=s*.52,i=-s*.48;e.moveTo(i,-t*.62),e.bezierCurveTo(-s*.25,-t*1.02,s*.1,-t*1.05,s*.28,-t*.75),e.bezierCurveTo(s*.42,-t*.45,n-.04,-.03,n,0),e.bezierCurveTo(n-.04,.03,s*.42,t*.45,s*.28,t*.75),e.bezierCurveTo(s*.1,t*1.05,-s*.25,t*1.02,i,t*.62),e.lineTo(i,-t*.62);const r=new Fh(e,{depth:Vs*.5,bevelEnabled:!0,bevelThickness:Vs*.25,bevelSize:.02,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2),r.translate(0,Vs*.25,0);const o=r.attributes.position;for(let a=0;a<o.count;a++){const c=o.getX(a);c>s*.2&&o.setY(a,o.getY(a)+Math.pow((c-s*.2)/(s*.32),2)*.09),c<-s*.38&&o.setY(a,o.getY(a)+Math.pow((-c-s*.38)/(s*.1),2)*.02)}return r.computeVertexNormals(),r}function Sr(s,t,e){const n=new ae(new Dh(s,t,3,8),e);return n.castShadow=!0,n}const Ad=new P(0,1,0),Xo={base:.9,k:.25,refH:3.2,min:.74},kc={on:.3,off:.22,opacity:.7},iT=Vs*.75,sT=3;function rT(s){const t=s.lastTarget;return Number.isFinite(t)?sT*(t-s.hb):Number.isFinite(s.targetRateF)?s.targetRateF:0}class oT{constructor(t){v(this,"group",new Oe);v(this,"rideRoot",new Oe);v(this,"board");v(this,"body",new Oe);v(this,"thighs",[]);v(this,"shins",[]);v(this,"torso");v(this,"head");v(this,"uArms",[]);v(this,"fArms",[]);v(this,"stance","regular");v(this,"crouch",.4);v(this,"torsoTwist",0);v(this,"armSpread",0);v(this,"silhouette",new Oe);v(this,"silhouetteVisible",!1);v(this,"silParts",[]);v(this,"parts",[]);v(this,"roll",0);v(this,"wipeT",-1);v(this,"fb",$1());v(this,"bx",new P);v(this,"by",new P);v(this,"bz",new P);v(this,"mtx",new Gt);v(this,"qBase",new ue);v(this,"qRoll",new ue);v(this,"axisX",new P(1,0,0));v(this,"tumbleVel",new P);v(this,"tumbleAxis",new P);v(this,"qTmp",new ue);v(this,"a",new P);v(this,"b",new P);v(this,"c",new P);v(this,"hip",new P);v(this,"sh",new P);v(this,"dir",new P);v(this,"capJ",{});v(this,"glb",null);v(this,"intent",0);v(this,"drv",{crouch:.4,twist:0,spread:0,stall:0,turn:0,t:.5,inTube:!1,wipeT:-1,wipeKind:1,intent:0,hb:0});for(const d of["hip","chest","headTop","shoulderF","shoulderB","handF","handB","kneeF","kneeB","ankleF","ankleB"])this.capJ[d]=new P;const e=new je({color:16052194,roughness:.45}),n=new je({color:16738877,roughness:.5});this.board=new ae(nT(),e);const i=new ae(new ls(fa*.9,.004,.025),n);i.position.set(0,Vs*.77,0),this.board.add(i);const r=new ae(new ls(.12,.1,.012),n);r.position.set(-fa*.42,-.04,0),this.board.add(r);const o=new je({color:13208930,roughness:.7}),a=new je({color:1777447,roughness:.65}),c=new je({color:2308443,roughness:.6});for(let d=0;d<2;d++){const m=Sr(.075,bd-.15,a),_=Sr(.06,eT-.12,a);this.thighs.push(m),this.shins.push(_),this.body.add(m,_);const g=Sr(.05,Td-.1,c),p=Sr(.045,Ed-.09,o);this.uArms.push(g),this.fArms.push(p),this.body.add(g,p)}this.torso=Sr(.13,Sd-.26,c),this.head=new ae(new tr(.11,12,10),o);const l=new ae(new tr(.115,12,8,0,Math.PI*2,0,Math.PI*.55),a);this.head.add(l),this.head.castShadow=!0,l.castShadow=!0,this.board.castShadow=!0,this.body.add(this.torso,this.head),this.rideRoot.add(this.board,this.body);const h=new On({color:201756,transparent:!0,opacity:kc.opacity,depthWrite:!1,visible:!1}),u=[...this.thighs,...this.shins,...this.uArms,...this.fArms,this.torso,this.head];this.parts.push(...u,this.board);for(const d of u){const m=new ae(d.geometry,h);m.renderOrder=-1,this.silhouette.add(m),this.silParts.push([d,m])}const f=new ae(this.board.geometry,h);f.renderOrder=-1,this.silhouette.add(f),this.silhouette.visible=!1,this.rideRoot.add(this.silhouette),this.group.add(this.rideRoot),this.group.visible=!1,t!=null&&t.model&&this.setModel(t.model)}get bodyKind(){return this.glb?"glb":"capsule"}setModel(t){this.glb&&this.rideRoot.remove(this.glb.root),this.glb=new X1(t),this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.remove(this.body),this.rideRoot.add(this.glb.root),this.silhouette.clear(),this.silParts.length=0,this.parts.length=0,this.parts.push(...this.glb.meshes,this.board),this.glb.reset()}joint(t,e){return this.group.updateMatrixWorld(),this.glb?this.glb.joint(t,e):this.rideRoot.localToWorld(e.copy(this.capJ[t]))}reset(){var t;this.wipeT=-1,this.roll=0,this.crouch=.4,this.torsoTwist=0,this.armSpread=0,this.setSilhouette(!1),this.group.visible=!0,this.rideRoot.quaternion.identity(),this.rideRoot.position.set(0,0,0),(t=this.glb)==null||t.reset(),this.intent=0}update(t,e,n){if(t.state==="idle"){this.setSilhouette(!1),this.group.visible=!1;return}if((!(n>=0)||!Number.isFinite(n))&&(n=0),t.state!=="riding"){this.setSilhouette(!1),this.tumble(t,n);return}this.group.visible=!0;const i=J1(e,t.s,t.t,this.fb),r=t.airborne,o=r?t.hb+t.airFlip*B(.2,.9,t.airT/Math.max(.05,t.airDur)):t.hb;Q1(i,o,this.bx,this.by,this.bz),this.mtx.makeBasis(this.bx,this.by,this.bz),this.qBase.setFromRotationMatrix(this.mtx),this.group.position.copy(i.p),r&&(this.group.position.y+=t.airHeight),this.group.quaternion.copy(this.qBase),this.roll=vn(this.roll,r?0:t.lean,10,n),this.qRoll.setFromAxisAngle(this.axisX,this.roll),this.rideRoot.quaternion.copy(this.qRoll),this.rideRoot.position.set(0,0,0);const a=Math.min(1,Math.abs(t.turnRateF)/2);let c=kt(.3+.4*a+.15*Math.min(1,t.v/12)-.35*t.stall+.3*Math.min(1,Math.abs(t.skid)),0,1);this.torsoTwist=vn(this.torsoTwist,kt(.3*t.turnRateF+.4*t.skid,-1.2,1.2),8,n),this.armSpread=vn(this.armSpread,kt(.7*a+.8*Math.min(1,Math.abs(t.skid)),0,1),8,n),t.inTube&&(c=Math.max(c,kt(Xo.base+Xo.k*(Xo.refH-t.tubeHeight),Xo.min,1))),this.crouch=vn(this.crouch,c,6,n),this.glb?this.driveGlb(t,-1,n):this.pose(this.crouch,t.stall,this.torsoTwist,this.armSpread);let l=!1;t.inTube&&(l=-t.d/(1.5+5*e.hollow(t.s))>=(this.silhouetteVisible?kc.off:kc.on)),this.setSilhouette(l)}setSilhouette(t){if(this.silhouetteVisible=t,this.silhouette.visible=t,!!t)for(const[e,n]of this.silParts)n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale)}driveGlb(t,e,n){const i=this.drv;i.crouch=this.crouch,i.twist=this.torsoTwist,i.spread=this.armSpread,i.stall=t.stall,i.turn=t.airborne?0:t.turnRateF;const r=t.airborne;i.intent=this.intent=vn(this.intent,r?0:rT(t),25,n),i.air=r,i.airT=t.airT,i.airDur=t.airDur,i.spin=t.airSpin,i.landAge=t.landAge,i.landFlat=t.landFlat,i.hb=t.hb,i.t=t.t,i.inTube=t.inTube,i.wipeT=e,i.wipeKind=t.state==="kickedOut"?2:1,this.glb.setStance(this.stance==="regular"?1:-1),this.rideRoot.updateWorldMatrix(!0,!1),this.glb.drive(i,iT,n)}pose(t,e,n=0,i=0){const r=this.stance==="regular"?1:-1,o=Vs*.75,a=[.3,-.42],c=-.06-.12*e,l=o+.86*(1-.38*t);this.hip.set(c,l,.04*r*t);for(let u=0;u<2;u++)this.a.set(a[u],o+.02,0),this.b.set(this.hip.x+(u===0?.09:-.09),this.hip.y,this.hip.z),this.knee(this.a,this.b,r,this.c),(u===0?this.capJ.ankleF:this.capJ.ankleB).copy(this.a),(u===0?this.capJ.kneeF:this.capJ.kneeB).copy(this.c),this.place(this.shins[u],this.a,this.c),this.place(this.thighs[u],this.c,this.b);const h=.25+.6*t;this.dir.set(.12-.15*e+.35*Math.sin(n),Math.cos(h),Math.sin(h)*r*.75).normalize(),this.sh.copy(this.hip).addScaledVector(this.dir,Sd),this.place(this.torso,this.hip,this.sh),this.head.position.copy(this.sh).addScaledVector(this.dir,.2),this.capJ.hip.copy(this.hip),this.capJ.chest.copy(this.sh),this.capJ.headTop.copy(this.head.position).y+=.11;for(let u=0;u<2;u++){const f=u===0?1:-1;this.a.copy(this.sh).add(this.c.set(.17*f,-.04,0)),this.b.copy(this.a).add(this.c.set(.26*f,-.12+.3*i,(.08+.2*i)*r)).sub(this.a).setLength(Td).add(this.a),(u===0?this.capJ.shoulderF:this.capJ.shoulderB).copy(this.a),this.place(this.uArms[u],this.a,this.b),this.c.set(.2*f,-.2+.1*t,.1*r).setLength(Ed).add(this.b),(u===0?this.capJ.handF:this.capJ.handB).copy(this.c),this.place(this.fArms[u],this.b,this.c)}}knee(t,e,n,i){const r=e.x-t.x,o=e.y-t.y,a=e.z-t.z,c=Math.sqrt(r*r+o*o+a*a),l=bd,h=c<2*l?Math.sqrt(l*l-c*c/4):0;i.set((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2),i.z+=h*n}place(t,e,n){t.position.set((e.x+n.x)/2,(e.y+n.y)/2,(e.z+n.z)/2),this.dir.set(n.x-e.x,n.y-e.y,n.z-e.z);const i=this.dir.length();i>1e-6&&(this.dir.multiplyScalar(1/i),t.quaternion.setFromUnitVectors(Ad,this.dir))}tumble(t,e){if(this.wipeT<0){this.wipeT=0;const i=Math.cos(t.hv),r=Math.sin(t.hv);this.tumbleVel.set(-i*t.v*.6,1.5,-r*.6*t.v*.3),t.state==="kickedOut"&&this.tumbleVel.set(-i*t.v*.4,2.2,-2.5),this.tumbleAxis.copy(this.bx).cross(Ad).normalize(),this.tumbleAxis.lengthSq()<1e-6&&this.tumbleAxis.set(0,0,1)}this.wipeT+=e,this.tumbleVel.y-=9.81*e,this.group.position.y<-.6&&this.tumbleVel.multiplyScalar(Math.exp(-4*e)),this.group.position.addScaledVector(this.tumbleVel,e);const n=t.state==="kickedOut"?2.5:7;this.qTmp.setFromAxisAngle(this.tumbleAxis,n*e*Math.exp(-this.wipeT)),this.group.quaternion.premultiply(this.qTmp),this.crouch=vn(this.crouch,1,4,e),this.glb?this.driveGlb(t,this.wipeT,e):this.pose(this.crouch,0),this.wipeT>1.6&&(this.group.visible=!1)}tailWorld(t){return t.set(-fa*.4,.05,0),this.group.updateMatrixWorld(),this.rideRoot.localToWorld(t)}}function aT(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Se;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=wd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const m=wd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function wd(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new jt(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const _=h.getComponent(f,m);a.setComponent(f+u,m,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Rd(s,t){if(t===H0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Xl||t===zp){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Xl)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class cT extends cr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new dT(e)}),this.register(function(e){return new pT(e)}),this.register(function(e){return new ST(e)}),this.register(function(e){return new TT(e)}),this.register(function(e){return new ET(e)}),this.register(function(e){return new gT(e)}),this.register(function(e){return new _T(e)}),this.register(function(e){return new xT(e)}),this.register(function(e){return new vT(e)}),this.register(function(e){return new fT(e)}),this.register(function(e){return new MT(e)}),this.register(function(e){return new mT(e)}),this.register(function(e){return new bT(e)}),this.register(function(e){return new yT(e)}),this.register(function(e){return new hT(e)}),this.register(function(e){return new AT(e)}),this.register(function(e){return new wT(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Fr.extractUrlBase(t);o=Fr.resolveURL(l,this.path)}else o=Fr.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new xm(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Bm){try{o[ee.KHR_BINARY_GLTF]=new RT(t)}catch(u){i&&i(u);return}r=JSON.parse(o[ee.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new zT(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ee.KHR_MATERIALS_UNLIT:o[u]=new uT;break;case ee.KHR_DRACO_MESH_COMPRESSION:o[u]=new CT(r,this.dracoLoader);break;case ee.KHR_TEXTURE_TRANSFORM:o[u]=new PT;break;case ee.KHR_MESH_QUANTIZATION:o[u]=new LT;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function lT(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const ee={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class hT{constructor(t){this.parser=t,this.name=ee.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const h=new Dt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Je);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vm(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ib(h),l.distance=u;break;case"spot":l=new Pb(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ci(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class uT{constructor(){this.name=ee.KHR_MATERIALS_UNLIT}getMaterialType(){return On}extendParams(t,e,n){const i=[];t.color=new Dt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Je),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Fe))}return Promise.all(i)}}class fT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class dT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new gt(a,a)}return Promise.all(r)}}class pT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class mT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class gT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Je)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,Fe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class _T{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class xT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(a[0],a[1],a[2],Je),Promise.all(r)}}class vT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class MT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(a[0],a[1],a[2],Je),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,Fe)),Promise.all(r)}}class yT{constructor(t){this.parser=t,this.name=ee.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class bT{constructor(t){this.parser=t,this.name=ee.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class ST{constructor(t){this.parser=t,this.name=ee.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class TT{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class ET{constructor(t){this.parser=t,this.name=ee.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class AT{constructor(t){this.name=ee.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class wT{constructor(t){this.name=ee.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const m of u){const _=new Gt,g=new P,p=new ue,M=new P(1,1,1),y=new Iy(m.geometry,m.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&M.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(g,p,M));for(const x in c)if(x==="_COLOR_0"){const I=c[x];y.instanceColor=new Yl(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&m.geometry.setAttribute(x,c[x]);ye.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Bm="glTF",Tr=12,Cd={JSON:1313821514,BIN:5130562};class RT{constructor(t){this.name=ee.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Tr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Bm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Tr,r=new DataView(t,Tr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Cd.JSON){const l=new Uint8Array(t,Tr+o,a);this.content=n.decode(l)}else if(c===Cd.BIN){const l=Tr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CT{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ee.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=oh[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=oh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[t.attributes[h]],d=Gs[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const m in d.attributes){const _=d.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}u(d)},a,l,Je,f)})})}}class PT{constructor(){this.name=ee.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class LT{constructor(){this.name=ee.KHR_MESH_QUANTIZATION}}class km extends to{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=i-e,u=(n-e)/h,f=u*u,d=f*u,m=t*l,_=m-l,g=-2*d+3*f,p=d-f,M=1-g,y=p-f+u;for(let x=0;x!==a;x++){const I=o[_+x+a],w=o[_+x+c]*h,R=o[m+x+a],L=o[m+x]*h;r[x]=M*I+y*w+g*R+p*L}return r}}const IT=new ue;class DT extends km{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return IT.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Gs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Pd={9728:Ze,9729:on,9984:Lp,9985:na,9986:wr,9987:qn},Ld={33071:Fi,33648:ga,10497:os},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},oh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NT={CUBICSPLINE:void 0,LINEAR:Vr,STEP:zr},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function FT(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new je({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),s.DefaultMaterial}function ji(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ci(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function UT(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,h=t.length;l<h;l++){const u=t[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,h=t.length;l<h;l++){const u=t[l];if(n){const f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function OT(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BT(s){let t;const e=s.extensions&&s.extensions[ee.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Vc(e.attributes):t=s.indices+":"+Vc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Vc(s.targets[n]);return t}function Vc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function ah(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function kT(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const HT=new Gt;class zT{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new lT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new wb(this.options.manager):this.textureLoader=new Nb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xm(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ji(r,a,i),ci(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ee.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Fr.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Hc[i.type],a=Gs[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new jt(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Hc[i.type],l=Gs[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(d&&d!==u){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(M);y||(_=new l(a,p*d,i.count*d/h),y=new Ry(_,d/h),e.cache.add(M,y)),g=new Rh(y,c,f%d/h,m)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),g=new jt(_,c,m);if(i.sparse!==void 0){const p=Hc.SCALAR,M=Gs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,I=new M(o[1],y,i.sparse.count*p),w=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new jt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,L=I.length;R<L;R++){const T=I[R];if(g.setX(T,w[R*c]),c>=2&&g.setY(T,w[R*c+1]),c>=3&&g.setZ(T,w[R*c+2]),c>=4&&g.setW(T,w[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Pd[f.magFilter]||on,h.minFilter=Pd[f.minFilter]||qn,h.wrapS=Ld[f.wrapS]||os,h.wrapT=Ld[f.wrapT]||os,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ze&&h.minFilter!==on,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let m=f;e.isImageBitmapLoader===!0&&(m=function(_){const g=new Pe(_);g.needsUpdate=!0,f(g)}),e.load(Fr.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),ci(u,o),u.userData.mimeType=o.mimeType||kT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ee.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ee.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[ee.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Qr,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new am,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return je}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[ee.KHR_MATERIALS_UNLIT]){const u=i[ee.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Dt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Je),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",u.baseColorTexture,Fe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ve);const h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==On&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new gt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==On&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==On){const u=r.emissiveFactor;a.emissive=new Dt().setRGB(u[0],u[1],u[2],Je)}return r.emissiveTexture!==void 0&&o!==On&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Fe)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ci(u,r),e.associations.set(u,{materials:t}),r.extensions&&ji(i,u,r),u})}createUniqueName(t){const e=de.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ee.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return Id(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],h=BT(l),u=i[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[ee.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Id(new Se,l,e),i[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?FT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,m=h.length;d<m;d++){const _=h[d],g=o[d];let p;const M=l[d];if(g.mode===xn.TRIANGLES||g.mode===xn.TRIANGLE_STRIP||g.mode===xn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new sm(_,M):new ae(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===xn.TRIANGLE_STRIP?p.geometry=Rd(p.geometry,zp):g.mode===xn.TRIANGLE_FAN&&(p.geometry=Rd(p.geometry,Xl));else if(g.mode===xn.LINES)p=new Dy(_,M);else if(g.mode===xn.LINE_STRIP)p=new Ch(_,M);else if(g.mode===xn.LINE_LOOP)p=new Ny(_,M);else if(g.mode===xn.POINTS)p=new Ia(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&OT(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),ci(p,r),g.extensions&&ji(i,p,g),e.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&ji(i,u[0],r),u[0];const f=new Oe;r.extensions&&ji(i,f,r),e.associations.set(f,{meshes:t});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ye(dg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Eh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ci(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new Gt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new La(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let M=0,y=f.length;M<y;M++){const x=f[M],I=d[M],w=m[M],R=_[M],L=g[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=n._createAnimationTracks(x,I,w,R,L);if(T)for(let b=0;b<T.length;b++)p.push(T[b])}return new Mb(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,HT)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new rm:l.length>1?h=new Oe:l.length===1?h=l[0]:h=new ye,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ci(h,r),r.extensions&&ji(n,h,r),r.matrix!==void 0){const u=new Gt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Oe;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&ji(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Bn||f instanceof Pe)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];wi[r.path]===wi.weights?t.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(wi[r.path]){case wi.weights:l=er;break;case wi.rotation:l=nr;break;case wi.position:case wi.scale:l=ir;break;default:switch(n.itemSize){case 1:l=er;break;case 2:case 3:default:l=ir;break}break}const h=i.interpolation!==void 0?NT[i.interpolation]:Vr,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const m=new l(c[f]+"."+wi[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=ah(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof nr?DT:km;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VT(s,t,e){const n=t.attributes,i=new gi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const h=ah(Gs[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=e.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=ah(Gs[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new jn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Id(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=oh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return ne.workingColorSpace!==Je&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ne.workingColorSpace}" not supported.`),ci(s,t),VT(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?UT(s,t.targets,e):s})}const Dd={vest:new Dt(15905076),shorts:new Dt(1920607)},Nd=3810328;function GT(s){const t=s.clone();return t.onBeforeCompile=e=>{e.uniforms.uVest={value:Dd.vest},e.uniforms.uVestOn={value:0},e.uniforms.uShorts={value:Dd.shorts},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
void main() {`)},t.customProgramCacheKey=()=>"surfer-outfit",t}function Fd(s,t){const e=s.material.clone();e.color.set(t),s.material=e}async function WT(s,t){const e=new cT;typeof document>"u"&&e.register(()=>({name:"surfer-headless",loadTexture:()=>Promise.resolve(null)}));const[n,i]=await Promise.all([e.parseAsync(s,""),e.parseAsync(t,"")]),r=new Oe;r.name="surfer-model",r.add(n.scene);const o=[];let a=null;if(n.scene.traverse(d=>{const m=d;if(!m.isSkinnedMesh)return;const _=m.material.name;_==="MI_Hair_1"&&Fd(m,Nd),_==="MI_Superhero_Male"&&(m.material=GT(m.material),a=m),o.push(m)}),!a)throw new Error("surfer body mesh not found");const c=a;o.splice(o.indexOf(c),1),o.unshift(c);const l=c.skeleton,h=new Map(l.bones.map(d=>[d.name,d])),u=[];i.scene.traverse(d=>{d.isSkinnedMesh&&u.push(d)});for(const d of u){const m=d.skeleton.bones.map(_=>h.get(_.name)??_);d.bind(new La(m,d.skeleton.boneInverses),d.bindMatrix),Fd(d,Nd),r.add(d),o.push(d)}for(const d of o)d.castShadow=!0,d.frustumCulled=!1;const f=d=>{const m=h.get(d);if(!m)throw new Error("surfer bone "+d);return m};return r.updateMatrixWorld(!0),{root:r,meshes:o,skeleton:l,bone:f}}async function XT(s="./models/"){const t=async i=>{const r=await fetch(s+i);if(!r.ok)throw new Error(`${i}: HTTP ${r.status}`);return r.arrayBuffer()},[e,n]=await Promise.all([t("surfer-body.glb"),t("surfer-hair.glb")]);return WT(e,n)}function Hm(s){return{x:-Math.cos(s),y:-Math.sin(s)}}function qT(s,t,e){const n=Number.isFinite(e)?e:0,i=Hm(n),r=s.x*i.x+s.y*i.y;return t.x*i.x+t.y*i.y>=r?{back:s,front:t}:{back:t,front:s}}function Ud(s,t){return Math.atan2(-(t.y-s.y),-(t.x-s.x))}function KT(s,t){return Ii(t-s)}function YT(s,t){return!(t>1)||!Number.isFinite(s)?0:kt((s/t-1.1)/.4,0,1)}const jT=.6,$T=3.6,ZT=13;function Gc(s){return!Number.isFinite(s)||Math.abs(s)<jT?0:Math.sign(s)*kt(Math.abs(s)*$T,0,ZT)}const JT=350,QT=40,Wc=8;function tE(s,t){if(!s||!t||s.foot!=="front"||t.foot!=="back")return!1;const e=t.t-s.t;return e>=QT&&e<=JT}const zm=80;function eE(s,t,e,n){if(!(e>0)||s.length<2)return 0;let i=-1;for(let m=s.length-1;m>=0;m--)if(s[m].t<=t){i=m;break}if(i<1)return 0;const r=t-zm;let o=i;for(;o>0&&s[o-1].t>=r&&s[o-1].t<=s[o].t;)o--;const a=s.slice(o,i+1);if(o===i){const m=s[i-1],_=s[i],g=_.t-m.t;if(!(g>0))return 0;const p=kt((r-m.t)/g,0,1);a.unshift({t:m.t+g*p,x:m.x+(_.x-m.x)*p,y:m.y+(_.y-m.y)*p})}const c=a[0],l=a[a.length-1],h=l.t-c.t;if(!(h>=4))return 0;const u=Math.hypot(l.x-c.x,l.y-c.y)/e*(1e3/h);let f;if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)){let m=0;for(let _=0;_+1<a.length;_++){const g=a[_].x-n.x,p=a[_].y-n.y,M=a[_+1].x-a[_].x,y=a[_+1].y-a[_].y;m-=g*y-p*M}f=Math.sign(m)}else f=Math.sign(-(l.y-c.y));const d=f*u;return Number.isFinite(d)&&d!==0?d:0}const nE=1e3;function iE(s,t,e,n){if(!(e>0)||s.length<2||!Number.isFinite(n.x)||!Number.isFinite(n.y))return 0;let i=s.length-1;for(;i>=0&&s[i].t>t;)i--;if(i<1)return 0;const r=t-zm;let o=i;for(;o>0&&s[o-1].t>=r&&s[o-1].t<=s[o].t;)o--;o===i&&(o=i-1);const a=s[i].t-s[o].t;if(!(a>=4))return 0;let c=0,l=0;for(let u=o;u<i;u++){const f=s[u],d=s[u+1],m=d.x-f.x,_=d.y-f.y;c+=Math.hypot(m,_),l+=(f.x-n.x)*_-(f.y-n.y)*m}const h=Math.sign(l)*(c/e)*(1e3/a);return Number.isFinite(h)&&h!==0?h:0}const Vm=Math.PI/6,Gm=Math.PI/3,Xh=1.25,Ta=Math.PI/180,ch=[75*Ta,125*Ta],qh=1.86,sE=s=>(s[0]+s[1])/2,Wm=qh-Xh,Od=(qh*sE(ch)-Xh*(Vm+Gm)/2)/Wm,Bd=[Od-22.5*Ta,Od+22.5*Ta];function Xc(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function Kh(s,t){if(!Number.isFinite(s)||!Number.isFinite(t))return 0;const e=Math.abs(s),n=Xh*Xc(e,Vm,Gm)-qh*Xc(e,ch[0],ch[1])+Wm*Xc(e,Bd[0],Bd[1]);return Math.sign(s)*t*(e+n)}const qc=.02,rE=1/8;function Kc(s){if(!Number.isFinite(s))return 0;const t=Math.abs(s);return t<=qc?0:Math.sign(s)*kt((t-qc)/(rE-qc),0,1)}const oE=300,kd=20,aE=3.2,Hd=[0,1.2,2.4],cE=250,lE=.3,hE=3,uE=1.3,Yh=60,kr=3,jh=1.5,$h=5,fE=60*(Math.PI/180),dE=.1,Yc=Math.PI/2,pE=.1,qo=.03,mE=45*Math.PI/180,zd=25*Math.PI/180,gE=.1*Math.PI/180,_E=20*Math.PI/180,Ko=2*Yh,xE=10,vE=250,ME=.1,yE=2,bE=1e3/60,SE=50,Yo=48*(Math.PI/180),TE=68*(Math.PI/180),EE=5,Vd=[21*(Math.PI/180),35*(Math.PI/180)],Gd=[45*(Math.PI/180),70*(Math.PI/180)],AE=.1,Wd=4*Yh,jc=180*(Math.PI/180),Xd=25*(Math.PI/180),qd=.42;function wE(s){const t=Math.abs(s);if(t<=jc)return s;const e=t-jc;return Math.sign(s)*(jc+(1-qd)*Xd*Math.tanh(e/Xd)+qd*e)}function Kd(s,t,e){if(s<=t)return 0;const n=e-t;if(s>=e)return n/2+(s-e);const i=(s-t)/n;return n*(i*i*i-i*i*i*i/2)}function RE(s,t){if(!Number.isFinite(s)||!(t>0))return 0;const e=Math.abs(s);if(e===0)return 0;let n=0,i=e/t/.3+1e-6;for(let r=0;r<60;r++){const o=(n+i)/2;Kh(o,t)<e?n=o:i=o}return Math.sign(s)*(n+i)/2}function CE(s,t,e){if(!Number.isFinite(s)||!Number.isFinite(t))return NaN;const n=Math.abs(s),i=TE-Yo,r=Math.sign(s)*(n<=Yo?n:Yo+i*Math.tanh((n-Yo)/i)),o=Math.abs(t),a=Math.sign(t)*EE*(Kd(o,Vd[0],Vd[1])-(1-AE)*Kd(o,Gd[0],Gd[1])),c=Kh(r,e)+a,l=wE(c);return a===0&&l===c?r:RE(l,e)}const PE=.2,LE=1*(Math.PI/180),IE=3*(Math.PI/180),$c=.2,DE=50;class NE{constructor(t,e,n={}){v(this,"_mode","hand");v(this,"_thumbTurnCm",kr);v(this,"_gain",uE);v(this,"grip",!1);v(this,"stall",0);v(this,"drive",0);v(this,"keyFlick",Hd[0]);v(this,"keySign",1);v(this,"ptrs",new Map);v(this,"feet",null);v(this,"h0",0);v(this,"aPrev",0);v(this,"accum",0);v(this,"dist0",0);v(this,"slideAcc",0);v(this,"resB",0);v(this,"resF",0);v(this,"rotAct",0);v(this,"lastDist",0);v(this,"rotT",0);v(this,"latched",!1);v(this,"thumbGrip",!1);v(this,"tLatched",!1);v(this,"tTot",0);v(this,"tEff",0);v(this,"tAcc",0);v(this,"tSep0",0);v(this,"tVx",0);v(this,"tVy",0);v(this,"tSbar",0);v(this,"tThr",0);v(this,"tPendF",0);v(this,"tPendB",0);v(this,"tPendT",0);v(this,"tRotSum",0);v(this,"tRotT",0);v(this,"tEpSign",0);v(this,"tEpNet",0);v(this,"tEpCommit",!1);v(this,"tHeld",0);v(this,"lastLift",null);v(this,"liftPivot",null);v(this,"liftWatch",null);v(this,"gestureMax",0);v(this,"multi",!1);v(this,"threeSince",null);v(this,"debugFired",!1);v(this,"mouseDown",null);v(this,"keyGrip",!1);v(this,"keyUp",!1);v(this,"keyDown",!1);v(this,"keyShift",!1);v(this,"keyF",!1);v(this,"keyAccum",0);v(this,"pushAcc",0);v(this,"pushReadAt",-1/0);v(this,"queue",[]);v(this,"now");v(this,"screenH");v(this,"offs",[]);this.el=t,this.getBoardHeading=e,n.gain!==void 0&&(this.gain=n.gain),n.mode==="thumbs"&&(this._mode="thumbs"),n.thumbTurnCm!==void 0&&(this.thumbTurnCm=n.thumbTurnCm),this.now=n.now??(()=>performance.now()),this.screenH=n.screenHeight??(()=>typeof window<"u"?window.innerHeight:800);const i=n.keyTarget!==void 0?n.keyTarget:typeof window<"u"?window:null,r=n.docTarget!==void 0?n.docTarget:typeof document<"u"?document:null;this.on(t,"pointerdown",o=>this.onDown(o)),this.on(t,"pointermove",o=>this.onMove(o)),this.on(t,"pointerup",o=>this.onUp(o,!1)),this.on(t,"pointercancel",o=>this.onUp(o,!0)),i&&(this.on(i,"keydown",o=>this.onKey(o,!0)),this.on(i,"keyup",o=>this.onKey(o,!1)),this.on(i,"blur",()=>this.clearAll())),r&&this.on(r,"visibilitychange",()=>{(r.visibilityState===void 0||r.visibilityState!=="visible")&&this.clearAll()})}get mode(){return this._mode}set mode(t){t!=="hand"&&t!=="thumbs"||t===this._mode||(this._mode=t,this.ptrs.size>0&&(this.feet&&this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.multi=!0))}get thumbTurnCm(){return this._thumbTurnCm}set thumbTurnCm(t){Number.isFinite(t)&&(this._thumbTurnCm=Math.min($h,Math.max(jh,t)))}get gain(){return this._gain}set gain(t){Number.isFinite(t)&&(this._gain=Math.min(hE,Math.max(lE,t)))}on(t,e,n){t.addEventListener(e,n),this.offs.push(()=>t.removeEventListener(e,n))}dispose(){for(const t of this.offs)t();this.offs.length=0}get targetHeading(){return this.feet?this.h0+Kh(this.accum,this.gain):this.keyGrip?this.h0+this.keyAccum:null}get pairRotation(){return this.feet?this.accum:0}get pointers(){const t=[];for(const e of this.ptrs.values()){const n=this.feet?e.id===this.feet.back?"B":e.id===this.feet.front?"F":null:null;t.push({id:e.id,x:e.x,y:e.y,label:n})}return t}takePush(){const t=this.pushAcc;this.pushAcc=0;const e=this.now(),n=Number.isFinite(e)?e-this.pushReadAt:0;Number.isFinite(e)&&(this.pushReadAt=e);const i=n>0&&n<=SE?Math.max(1,Math.min(yE,n/bE)):1,r=ME*i;return Number.isFinite(t)?Math.max(-r,Math.min(r,t)):0}drain(){const t=this.queue;return this.queue=[],t}rebase(t){Number.isFinite(t)&&(this.h0=t,this.accum=0,this.keyAccum=0,this.feet&&(this.latchAngle(),this.thumbGrip&&this.latchThumbs()))}checkDebugHold(){this.threeSince===null||this.debugFired||this.now()-this.threeSince>=cE&&(this.debugFired=!0,this.multi=!0,this.queue.push({type:"debug"}))}update(t){if(this.checkDebugHold(),!(!(t>0)||!Number.isFinite(t))){if(this.keyGrip&&!this.feet){const e=(this.keyUp?1:0)-(this.keyDown?1:0);this.keyAccum+=e*aE*t,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0}if(this.thumbGrip&&this.feet&&this.tEpSign!==0&&!this.tEpCommit&&!(this.tRotSum*Math.exp(-Math.max(0,this.now()-this.tRotT)/1e3/qo)/qo*this.tEpSign>=zd)&&(this.tEpSign=this.tEpNet=0,this.tEpCommit=!1,this.tHeld!==0)){this.tHeld=0;const n=this.screenH(),i=Kc(this.tThr/(n>0?n:800));Number.isFinite(i)&&(this.stall=Math.max(0,-i),this.drive=Math.max(0,i))}}}onDown(t){var i,r,o;if((i=t.preventDefault)==null||i.call(t),t.pointerType==="mouse"){this.mouseDown={id:t.pointerId,x0:t.clientX,y0:t.clientY,maxMove:0};return}if(this.ptrs.has(t.pointerId))return;try{(o=(r=this.el).setPointerCapture)==null||o.call(r,t.pointerId)}catch{}const e=this.now();this.ptrs.set(t.pointerId,{id:t.pointerId,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:e,maxMove:0,hist:[{t:e,x:t.clientX,y:t.clientY}]});const n=this.ptrs.size;if(this.gestureMax=Math.max(this.gestureMax,n),n===3){this.threeSince===null&&(this.threeSince=e);return}n===2&&!this.feet&&!this.keyGrip&&this.startGrip()}startGrip(){const[t,e]=[...this.ptrs.values()],n=this.getBoardHeading();this.thumbGrip=this._mode==="thumbs";const{back:i,front:r}=this.thumbGrip?t.x<=e.x?{back:e,front:t}:{back:t,front:e}:qT(t,e,n);this.feet={back:i.id,front:r.id},this.h0=Number.isFinite(n)?n:0,this.slideAcc=0,this.resB=0,this.resF=0,this.rotAct=0,this.rotT=this.now(),this.accum=0,this.dist0=0,this.latched=!1,this.latchAngle(),this.tSep0=0,this.thumbGrip&&this.latchThumbs(),this.stall=0,this.drive=0,this.grip=!0,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.queue.push({type:"grip"})}latchAngle(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=Math.hypot(e.x-t.x,e.y-t.y);n>=Wc?(this.aPrev=Ud(t,e),this.latched=!0,this.dist0===0&&(this.dist0=n)):this.latched=!1}latchThumbs(){this.tTot=this.tAcc=this.tEff=0,this.tThr=0,this.tPendF=this.tPendB=0,this.tPendT=this.now(),this.tRotSum=0,this.tRotT=this.tPendT,this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1,this.tLatched=!1,this.latchThumbLine()}latchThumbLine(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=t.x-e.x,i=t.y-e.y,r=Math.hypot(n,i);if(!Number.isFinite(r)||r<Ko){this.tLatched=!1;return}this.tVx=n,this.tVy=i,this.tSbar=r,this.tLatched=!0,this.tSep0===0&&(this.tSep0=r)}updateThumbs(t,e,n){const i=this.ptrs.get(this.feet.back),r=this.ptrs.get(this.feet.front),o=t?{x:e,y:n}:i,a=t?r:{x:e,y:n},c=a.x-o.x,l=a.y-o.y,h=Math.hypot(c,l),u=this.now();this.tRotSum*=Math.exp(-Math.max(0,u-this.tRotT)/1e3/qo),this.tRotT=u;const f=r.x-i.x,d=r.y-i.y,m=Math.atan2(c*d-l*f,c*f+l*d);Number.isFinite(m)&&Math.abs(m)<=Yc&&h>=Ko&&Math.hypot(f,d)>=Ko&&(this.tRotSum+=m);const _=this.tRotSum/qo;this.tEpSign!==0&&!(_*this.tEpSign>=zd)&&(this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1),this.tEpSign===0&&Math.abs(_)>=mE&&(this.tEpSign=Math.sign(_));const g=this.tEpSign!==0&&m*this.tEpSign>=gE;g&&(this.tEpNet+=m);const p=this.tThr;if(Number.isFinite(h)&&h>=Wc){const F=this.now(),W=Math.exp(-Math.max(0,F-this.tPendT)/1e3/pE);this.tPendT=F,this.tPendF*=W,this.tPendB*=W;const K=t?i:r,Y=K.x-e,Z=K.y-n,H=(Y*c+Z*l)/h,st=Math.abs(Y*l-Z*c)/h,ht=Math.min(1,1.5*Math.tan(Math.min(Math.abs(this.tTot),Math.PI/4)));if(Number.isFinite(H)&&Number.isFinite(st)&&H!==0){const dt=t?-H:H;let At=Math.sign(dt)*Math.min(Math.abs(dt),st*ht);t||(this.tThr+=dt);const Pt=t?this.tPendF:this.tPendB;if(At!==0&&Math.sign(At)===Math.sign(Pt)){const V=Math.min(Math.abs(At),Math.abs(Pt));this.tThr-=Math.sign(At)*V,t?this.tPendF-=Math.sign(At)*V:this.tPendB-=Math.sign(At)*V,At-=Math.sign(At)*V}t?this.tPendB+=At:this.tPendF+=At}}g&&(this.tHeld+=this.tThr-p),this.tEpSign!==0&&!this.tEpCommit&&Math.abs(this.tEpNet)>=_E&&(this.tEpCommit=!0),this.tEpCommit&&(this.tThr-=this.tHeld,this.tHeld=0);const M=i.x-r.x,y=i.y-r.y,x=Math.hypot(M,y);if(!Number.isFinite(x)||x<Ko)this.tLatched=!1;else if(!this.tLatched)this.latchThumbLine();else{const F=this.tVx*y-this.tVy*M,W=this.tVx*M+this.tVy*y,K=Math.atan2(F,W);Math.abs(K)<=Yc&&this.tSep0>0&&(this.tTot+=K,this.tEff+=K*Math.min(1,this.tSbar*this.tSbar/(Wd*Wd)),this.tAcc+=K*this.tSbar*this.tSbar/this.tSep0),this.tVx=M,this.tVy=y,Math.abs(x-this.tSbar)>xE&&(this.tSbar=x)}const I=this.tAcc/Yh,w=dE,R=Math.abs(I),T=Math.sign(I)*(R>=2*w?R:2*Math.max(0,R-w))*fE/this._thumbTurnCm,b=CE(T,this.tEff,this._gain);Number.isFinite(b)&&(this.accum=b);const D=this.screenH(),z=Kc((this.tThr-this.tHeld)/(D>0?D:800));Number.isFinite(z)&&(this.stall=Math.max(0,-z),this.drive=Math.max(0,z))}onMove(t){var r,o;if(t.pointerType==="mouse"){const a=this.mouseDown;a&&a.id===t.pointerId&&(a.maxMove=Math.max(a.maxMove,Math.hypot(t.clientX-a.x0,t.clientY-a.y0)));return}const e=this.ptrs.get(t.pointerId);if(!e)return;(r=t.preventDefault)==null||r.call(t);const n=e.x,i=e.y;if(this.movePtr(e,t.clientX,t.clientY),this.ptrs.size===1&&!this.feet){const a=this.screenH();a>0&&(this.pushAcc+=(i-e.y)/a)}if(!this.feet&&!this.multi&&this.liftWatch===e.id&&((o=this.lastLift)==null?void 0:o.foot)==="front"&&this.liftPivot){const a=this.now();if(a-this.lastLift.t<=nE){const c=Gc(iE(e.hist,a,this.screenH(),this.liftPivot));c!==0&&this.queue.push({type:"spin",spin:c})}}if(this.feet&&(e.id===this.feet.back||e.id===this.feet.front))if(this.thumbGrip)this.updateThumbs(e.id===this.feet.back,n,i);else{const a=this.updatePair();this.addSlide(e.id===this.feet.back,e.x-n,e.y-i,a),this.refreshDriveStall()}this.checkDebugHold()}movePtr(t,e,n){if(!Number.isFinite(e)||!Number.isFinite(n))return;t.x=e,t.y=n,t.maxMove=Math.max(t.maxMove,Math.hypot(e-t.x0,n-t.y0));const i=this.now();for(t.hist.push({t:i,x:e,y:n});t.hist.length>2&&t.hist[0].t<i-vE;)t.hist.shift()}addSlide(t,e,n,i){const r=this.now(),o=Math.max(0,(r-this.rotT)/1e3);this.rotT=r,this.rotAct=this.rotAct*Math.exp(-o/PE)+i,i!==0&&(this.slideAcc*=Math.exp(-Math.abs(i)/$c),this.resB*=Math.exp(-Math.abs(i)/$c),this.resF*=Math.exp(-Math.abs(i)/$c));const a=1-B(LE,IE,Math.abs(this.rotAct)),c=this.getBoardHeading(),l=Hm(Number.isFinite(c)?c:this.h0),h=this.screenH(),u=a*(e*l.x+n*l.y)/(h>0?h:800);if(!Number.isFinite(u)||u===0)return;t?this.resB+=u:this.resF+=u;const f=Math.min(Math.abs(this.resB),Math.abs(this.resF));f>0&&Math.sign(this.resB)===Math.sign(this.resF)&&(this.slideAcc+=Math.sign(this.resB)*f),this.resB-=Math.sign(this.resB)*f,this.resF-=Math.sign(this.resF)*f}updatePair(){let t=0;const e=this.ptrs.get(this.feet.back),n=this.ptrs.get(this.feet.front),i=Math.hypot(n.x-e.x,n.y-e.y);if(i<Wc)this.latched=!1;else if(!this.latched)this.latchAngle();else{const r=Ud(e,n),o=KT(this.aPrev,r);Math.abs(o)<=Yc&&(this.accum+=o,t=o),this.aPrev=r}return this.lastDist=i,t}refreshDriveStall(){const t=Kc(this.slideAcc),e=this.dist0>0?YT(this.lastDist,Math.max(this.dist0,DE)):0;this.stall=Math.max(0,-t),this.drive=Math.max(e,t)}onUp(t,e){var o,a,c;if(t.pointerType==="mouse"){const l=this.mouseDown;this.mouseDown=null,!e&&l&&l.id===t.pointerId&&Math.max(l.maxMove,Math.hypot(t.clientX-l.x0,t.clientY-l.y0))<kd&&this.queue.push({type:"tap",x:t.clientX,y:t.clientY});return}const n=this.ptrs.get(t.pointerId);if(!n)return;this.checkDebugHold(),e||this.movePtr(n,t.clientX,t.clientY);const i=this.now();try{(a=(o=this.el).releasePointerCapture)==null||a.call(o,t.pointerId)}catch{}const r=this.feet?n.id===this.feet.front?"front":n.id===this.feet.back?"back":null:this.liftWatch===n.id?((c=this.lastLift)==null?void 0:c.foot)==="front"?"back":"front":null;if(e)r&&(this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null);else if(r&&this.feet){const l=r==="front"?this.feet.back:this.feet.front;this.endGrip(),this.lastLift={foot:r,t:i},this.liftWatch=l,this.liftPivot={x:n.x,y:n.y}}else if(r&&this.liftWatch===n.id){const l={foot:r,t:i};if(!this.multi&&tE(this.lastLift,l)){const h=eE(n.hist,i,this.screenH(),this.liftPivot??void 0);this.queue.some(u=>u.type==="spin")&&(this.queue=this.queue.filter(u=>u.type!=="spin")),this.queue.push({type:"ollie",flick:h,spin:Gc(h)})}this.lastLift=null,this.liftWatch=null,this.liftPivot=null}!e&&!this.multi&&this.ptrs.size===1&&this.gestureMax===1&&i-n.t0<oE&&n.maxMove<kd&&this.queue.push({type:"tap",x:n.x,y:n.y}),this.ptrs.delete(n.id),this.ptrs.size<3&&(this.threeSince=null,this.debugFired=!1),this.ptrs.size===0&&(this.gestureMax=0,this.multi=!1),this.ptrs.size===2&&!this.feet&&!this.keyGrip&&this.startGrip()}endGrip(){this.feet=null,this.grip=this.keyGrip,this.stall=0,this.drive=0,this.accum=0,this.latched=!1,this.slideAcc=this.resB=this.resF=0}clearAll(){this.pushAcc=0,this.ptrs.clear(),this.feet=null,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.gestureMax=0,this.multi=!1,this.threeSince=null,this.debugFired=!1,this.latched=!1,this.mouseDown=null,this.keyGrip=this.keyUp=this.keyDown=this.keyShift=this.keyF=!1,this.keyAccum=0,this.accum=0,this.grip=!1,this.stall=0,this.drive=0}onKey(t,e){var i,r,o;const n=t.key;if(n===" "||t.code==="Space"){if((i=t.preventDefault)==null||i.call(t),e){if(t.repeat||this.keyGrip||this.feet)return;this.keyGrip=!0,this.grip=!0;const a=this.getBoardHeading();this.h0=Number.isFinite(a)?a:0,this.keyAccum=0,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0,this.queue.push({type:"grip"})}else if(this.keyGrip)if(this.keyGrip=!1,this.grip=!!this.feet,this.stall=0,this.drive=0,this.keyAccum=0,this.ptrs.size===2&&!this.feet)this.startGrip();else{const a=this.keyFlick;this.queue.push({type:"ollie",flick:a,spin:Gc(a)})}return}n==="ArrowUp"?(this.keyUp=e,(r=t.preventDefault)==null||r.call(t)):n==="ArrowDown"?(this.keyDown=e,(o=t.preventDefault)==null||o.call(t)):n==="Shift"?(this.keyShift=e,this.keyGrip&&!this.feet&&(this.stall=e?1:0)):n==="f"||n==="F"?(this.keyF=e,this.keyGrip&&!this.feet&&(this.drive=e?1:0)):e&&(n==="0"||n==="1"||n==="2")?this.keyFlick=this.keySign*Hd[Number(n)]:e&&(n==="x"||n==="X")&&(this.keySign=-this.keySign,this.keyFlick=-this.keyFlick)}}const Yd=s=>({x:-Math.cos(s),y:-Math.sin(s)});class FE{constructor(t=document.body){v(this,"canvas");v(this,"ctx");v(this,"lines",[]);v(this,"visible",!0);v(this,"fps",0);v(this,"frames",0);v(this,"acc",0);v(this,"dpr",1);v(this,"shapes",null);this.canvas=document.createElement("canvas"),this.canvas.id="debug",t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr)}setLines(t){this.lines=t}setShapes(t){this.shapes=t}toggle(t){this.visible=t??!this.visible,this.canvas.style.display=this.visible?"block":"none"}frame(t){if(this.frames++,this.acc+=t,this.acc>=.5&&(this.fps=this.frames/this.acc,this.frames=0,this.acc=0),!this.visible)return;const e=this.ctx;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.canvas.width,this.canvas.height),this.shapes&&this.drawShapes(e,this.shapes);const n=[`${this.fps.toFixed(0)} fps`,...this.lines];e.font="12px ui-monospace, Menlo, monospace";let i=0;for(const r of n)i=Math.max(i,e.measureText(r).width);e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(6,6,i+12,n.length*15+8),e.fillStyle="#e8fff6",n.forEach((r,o)=>e.fillText(r,12,22+o*15))}drawShapes(t,e){const n=this.canvas.width/this.dpr,i=this.canvas.height/this.dpr;t.save(),t.lineCap="round",t.lineJoin="round";const r=n/2,o=i-100,a=Yd(e.board),c=46;t.strokeStyle="rgba(255,214,120,0.95)",t.lineWidth=10,t.beginPath(),t.moveTo(r-a.x*c,o-a.y*c),t.lineTo(r+a.x*c,o+a.y*c),t.stroke(),t.fillStyle="#ff7a59",t.beginPath(),t.arc(r+a.x*c,o+a.y*c,6,0,Math.PI*2),t.fill(),e.target!==null&&this.arrow(t,r,o,e.target,64,"rgba(120,255,200,0.95)");const l=e.fingers.find(u=>u.label==="B"),h=e.fingers.find(u=>u.label==="F");l&&h&&(t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=3,t.beginPath(),t.moveTo(l.x,l.y),t.lineTo(h.x,h.y),t.stroke(),e.target!==null&&this.arrow(t,(l.x+h.x)/2,(l.y+h.y)/2,e.target,70,"rgba(120,255,200,0.95)")),t.font="bold 18px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle";for(const u of e.fingers)t.fillStyle=u.label==="F"?"rgba(255,122,89,0.35)":u.label==="B"?"rgba(80,170,255,0.35)":"rgba(255,255,255,0.2)",t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(u.x,u.y,32,0,Math.PI*2),t.fill(),t.stroke(),u.label&&(t.fillStyle="#fff",t.fillText(u.label,u.x,u.y));t.restore()}arrow(t,e,n,i,r,o){const a=Yd(i),c=e+a.x*r,l=n+a.y*r;t.strokeStyle=o,t.fillStyle=o,t.lineWidth=3,t.beginPath(),t.moveTo(e,n),t.lineTo(c,l),t.stroke();const h=-a.y,u=a.x;t.beginPath(),t.moveTo(c+a.x*10,l+a.y*10),t.lineTo(c+h*7,l+u*7),t.lineTo(c-h*7,l-u*7),t.closePath(),t.fill()}}const Xm="surf.controlMode",qm="surf.thumbTurnCm",eo=()=>{try{return typeof localStorage<"u"?localStorage:null}catch{return null}};function UE(s=eo()){try{return(s==null?void 0:s.getItem(Xm))==="thumbs"?"thumbs":"hand"}catch{return"hand"}}function OE(s,t=eo()){try{t==null||t.setItem(Xm,s)}catch{}}const Zh=s=>Math.min($h,Math.max(jh,s));function BE(s=eo()){try{const t=s==null?void 0:s.getItem(qm);if(t==null||t.trim()==="")return kr;const e=Number(t);return Number.isFinite(e)?Zh(e):kr}catch{return kr}}function kE(s,t=eo()){if(Number.isFinite(s))try{t==null||t.setItem(qm,String(Zh(s)))}catch{}}const jd={hand:"1 hand",thumbs:"2 thumbs"},HE=["pointerdown","pointermove","pointerup","pointercancel","touchstart","touchmove","touchend"],Zc=s=>{for(const t of HE)s.addEventListener(t,e=>e.stopPropagation())};function zE(s,t){const e=()=>eo(),n={position:"fixed",top:"8px",zIndex:"20",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(10,30,45,0.45)",border:"1px solid rgba(255,255,255,0.45)",borderRadius:"8px",whiteSpace:"nowrap",touchAction:"manipulation"},i=document.createElement("button");i.textContent=jd[s.mode],Object.assign(i.style,{...n,right:"96px",padding:"8px 12px"}),Zc(i);const r=document.createElement("button");r.textContent="⚙",r.setAttribute("aria-label","thumb sensitivity"),Object.assign(r.style,{...n,padding:"8px 10px",lineHeight:"1"}),Zc(r);const o=document.createElement("div");Object.assign(o.style,{...n,top:"48px",right:"96px",padding:"8px 10px",display:"none",alignItems:"center",gap:"8px",font:"600 12px system-ui, sans-serif",background:"rgba(10,30,45,0.55)",touchAction:"none"}),Zc(o);const a=document.createElement("span");a.textContent="soft";const c=document.createElement("span");c.textContent="sharp";const l=document.createElement("input");l.type="range",l.setAttribute("aria-label","thumb sensitivity: soft to sharp"),l.min=String(-$h),l.max=String(-jh),l.step="0.1",Object.assign(l.style,{width:"140px",touchAction:"none",accentColor:"#7fd3ff"});const h=()=>l.value=String(-(s.thumbTurnCm??kr));l.addEventListener("input",()=>{const m=Zh(-Number(l.value));Number.isFinite(m)&&(s.thumbTurnCm=m,kE(s.thumbTurnCm??m,e()))}),o.append(a,l,c);const u=()=>o.style.display!=="none",f=m=>{m&&h(),o.style.display=m?"flex":"none"},d=()=>{const m=s.mode==="thumbs";i.textContent=jd[s.mode],r.style.display=m?"block":"none",r.style.right=`${96+i.offsetWidth+6}px`,m||f(!1)};return i.addEventListener("click",m=>{m.stopPropagation(),s.mode=s.mode==="hand"?"thumbs":"hand",OE(s.mode,e()),d(),i.blur()}),r.addEventListener("click",m=>{m.stopPropagation(),f(!u()),r.blur()}),l.addEventListener("change",()=>l.blur()),document.addEventListener("pointerdown",m=>{if(!u())return;const _=m.target;_&&(o.contains(_)||r.contains(_))||f(!1)},!0),document.body.append(i,r,o),d(),i}const Vn=6,_n=8,Ri=8,VE=2;function $d(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function Jc(s,t,e){const n=s/t;return Ue(s,e)*(1-n)+Ue(s-t,e)*n}function GE(){if(typeof document>"u")return null;const s=256,t=256,e=document.createElement("canvas");e.width=s,e.height=t;const n=e.getContext("2d");if(!n)return null;const i=n.createImageData(s,t);for(let o=0;o<s;o++){const a=o/10,c=s/10,l=.6+.4*B(.2,.7,Jc(a*.6,c*.6,41));for(let h=0;h<t;h++){const u=h/t,f=.65*Jc(a+Math.sin(u*2*Math.PI)*.4,c,43)+.35*Jc(a*2.3+u*3,c*2.3,47),d=.12+.88*l*B(.3,.68,f),m=(h*s+o)*4;i.data[m]=i.data[m+1]=i.data[m+2]=Math.round(d*255),i.data[m+3]=255}}n.putImageData(i,0,0);const r=new Da(e);return r.wrapS=r.wrapT=os,r.magFilter=on,r.minFilter=qn,r.anisotropy=4,r}function WE(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=64;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.7)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Da(s)}class XE{constructor(t){v(this,"group",new Oe);v(this,"band");v(this,"curtain");v(this,"spray");v(this,"ball");v(this,"bPos");v(this,"bNor");v(this,"bCol");v(this,"cPos");v(this,"cNor");v(this,"cCol");v(this,"cUv");v(this,"cHv");v(this,"sPos");v(this,"sCol");v(this,"any",!1);v(this,"au",new Float32Array(oe));v(this,"ay",new Float32Array(oe));v(this,"anu",new Float32Array(oe));v(this,"any_",new Float32Array(oe));v(this,"foam",[.93,.96,.98]);v(this,"lipC",[.35,.85,.8]);v(this,"face",[.07,.5,.55]);v(this,"ballOn",0);v(this,"lastR",0);const e=t*Vn;this.bPos=new Float32Array(e*3),this.bNor=new Float32Array(e*3),this.bCol=new Float32Array(e*4);const n=new Se;n.setAttribute("position",new jt(this.bPos,3).setUsage(Te)),n.setAttribute("normal",new jt(this.bNor,3).setUsage(Te)),n.setAttribute("color",new jt(this.bCol,4).setUsage(Te)),n.setIndex(new jt($d(t,Vn),1)),this.band=new ae(n,new je({vertexColors:!0,roughness:.25,metalness:.05,side:Ve,transparent:!0})),this.band.material.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * 0.45;`)},this.band.frustumCulled=!1,this.band.receiveShadow=!1;const i=t*_n;this.cPos=new Float32Array(i*3),this.cNor=new Float32Array(i*3),this.cCol=new Float32Array(i*4),this.cUv=new Float32Array(i*2);const r=new Se;r.setAttribute("position",new jt(this.cPos,3).setUsage(Te)),r.setAttribute("normal",new jt(this.cNor,3).setUsage(Te)),r.setAttribute("color",new jt(this.cCol,4).setUsage(Te)),r.setAttribute("uv",new jt(this.cUv,2).setUsage(Te)),this.cHv=new Float32Array(i),r.setAttribute("heavy",new jt(this.cHv,1).setUsage(Te)),r.setIndex(new jt($d(t,_n),1));const o=new je({vertexColors:!0,alphaMap:GE(),roughness:.85,emissive:new Dt(.47,.48,.49),side:Ve,transparent:!0,depthWrite:!1});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
attribute float heavy;
varying float vHeavy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeavy = heavy;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeavy;`).replace("#include <alphamap_fragment>",`#ifdef USE_ALPHAMAP
 diffuseColor.a *= mix(texture2D(alphaMap, vAlphaMapUv).g, 1.0, vHeavy);
#endif`)},this.curtain=new ae(r,o),this.curtain.frustumCulled=!1,this.curtain.renderOrder=2,this.sPos=new Float32Array(t*Ri*3),this.sCol=new Float32Array(t*Ri*4);const a=new Se;a.setAttribute("position",new jt(this.sPos,3).setUsage(Te)),a.setAttribute("color",new jt(this.sCol,4).setUsage(Te)),this.spray=new Ia(a,new Qr({vertexColors:!0,size:2.6,transparent:!0,depthWrite:!1,map:WE()})),this.spray.frustumCulled=!1,this.spray.renderOrder=3;const c=new Fa(1,VE),l=c.attributes.position;for(let h=0;h<l.count;h++){const u=l.getX(h),f=l.getY(h),d=l.getZ(h),m=.78+.4*Ue(u*3.3+f*2.1+d*4.7+5,53);l.setXYZ(h,u*m,f*m,d*m)}c.computeVertexNormals(),this.ball=new ae(c,new je({color:16777215,roughness:.9,flatShading:!0,emissive:new Dt(.2,.21,.22)})),this.ball.frustumCulled=!1,this.ball.visible=!1,this.group.add(this.band,this.curtain,this.spray,this.ball)}setTint(t,e,n){for(let i=0;i<3;i++)this.foam[i]=t[i],this.lipC[i]=e[i],this.face[i]=n[i];this.ball.material.color.setRGB(t[0],t[1],t[2]),this.ball.material.emissive.setRGB(t[0]*.22,t[1]*.22,t[2]*.22),this.curtain.material.emissive.setRGB(t[0]*.5,t[1]*.5,t[2]*.5),this.spray.material.color.setRGB(1,1,1)}begin(){this.any=!1}column(t,e,n,i,r,o,a,c,l,h,u=1,f=0){const d=oe,m=this.au,_=this.ay,g=this.anu,p=this.any_;let M=0,y=0;for(let b=0;b<d;b++){m[b]=i[b],_[b]=r[b];const D=b>0?b-1:b,z=b<d-1?b+1:b,F=i[z]-i[D],W=r[z]-r[D],K=Math.sqrt(F*F+W*W);g[b]=K>1e-9?-W/K:0,p[b]=K>1e-9?F/K:1,i[b]>i[M]&&(M=b),r[b]>r[y]&&(y=b)}const x=B(.15,.6,c);if(x>0)this.any=!0;else return this.hideColumn(t,e,i,r);M=Math.min(d-3,Math.max(2,y+1));const I=x*Math.min(.5,.06+.11*l),w=Ue(n*.7+h*.25,61);for(let b=0;b<Vn;b++){const D=b/(Vn-1),z=D*M,F=Math.min(d-2,Math.floor(z)),W=z-F,K=I*B(0,.45,D),Y=m[F]+(m[F+1]-m[F])*W,Z=_[F]+(_[F+1]-_[F])*W,H=g[F]+(g[F+1]-g[F])*W,st=p[F]+(p[F+1]-p[F])*W,ht=(t*Vn+b)*3;this.bPos[ht]=e,this.bPos[ht+1]=Z+st*K,this.bPos[ht+2]=Y+H*K,this.bNor[ht]=0,this.bNor[ht+1]=-st,this.bNor[ht+2]=-H;const dt=B(.2,.8,D),At=B(.85,1,D)*(.5+.3*w),Pt=(t*Vn+b)*4;for(let V=0;V<3;V++){let J=this.face[V]+(this.lipC[V]-this.face[V])*dt*.35;J+=(this.foam[V]-J)*At,J+=(this.foam[V]*.92-J)*f*.85,this.bCol[Pt+V]=Math.min(1,J)}this.bCol[Pt+3]=x*.92*o[a+Math.min(d-1,Math.round(z))]}const R=n*.11,L=.86+.08*w;for(let b=0;b<_n;b++){const D=b/(_n-1),z=M+D*(d-1-M),F=Math.min(d-2,Math.floor(z)),W=z-F,K=I+(.08-I)*B(0,.6,D),Y=m[F]+(m[F+1]-m[F])*W,Z=_[F]+(_[F+1]-_[F])*W,H=g[F]+(g[F+1]-g[F])*W,st=p[F]+(p[F+1]-p[F])*W,ht=(t*_n+b)*3,dt=Math.sin(n*1.7+D*2.3+h*2.1)*.12*D;this.cPos[ht]=e+dt,this.cPos[ht+1]=Z+st*K,this.cPos[ht+2]=Y+H*K,this.cNor[ht]=0,this.cNor[ht+1]=-st,this.cNor[ht+2]=-H;const At=(t*_n+b)*2;this.cUv[At]=R,this.cUv[At+1]=D*1.4+h*.55;const Pt=(t*_n+b)*4,V=L+.06*D;for(let Lt=0;Lt<3;Lt++)this.cCol[Pt+Lt]=Math.min(1,this.foam[Lt]*V);const J=1-.5*B(.1,.9,D),St=o[a+Math.min(d-1,Math.round(z))],it=Math.max(.5*u*J*(.55+.45*St)*(.85+.25*w),f);this.cCol[Pt+3]=Math.min(1,x*it),this.cHv[t*_n+b]=f}const T=Math.round(n);for(let b=0;b<Ri;b++){const D=(t*Ri+b)*3,z=(t*Ri+b)*4,F=Xn(T*7+b,73),W=(h*(.7+.5*F)+F*13.7)%1,K=Math.min(d-1,y+Math.round((M-y)*Xn(T*3+b,79))),Y=(Xn(T*11+b,83)-.5)*.9;this.sPos[D]=e+Y+.6*W*(F-.5),this.sPos[D+1]=x>0?r[y]+.15+(.5+.35*l)*Math.sqrt(W)*(.6+F):-50,this.sPos[D+2]=i[K]-(.4+.5*l)*W*(.5+F);for(let Z=0;Z<3;Z++)this.sCol[z+Z]=this.foam[Z];this.sCol[z+3]=x*.45*Math.sin(Math.PI*Math.min(1,W*1.3))*(1-W)}}hideColumn(t,e,n,i){const r=oe;for(let o=0;o<Vn;o++){const a=Math.round(o/(Vn-1)*(r-1)),c=(t*Vn+o)*3;this.bPos[c]=e,this.bPos[c+1]=i[a],this.bPos[c+2]=n[a],this.bCol[(t*Vn+o)*4+3]=0}for(let o=0;o<_n;o++){const a=Math.round(o/(_n-1)*(r-1)),c=(t*_n+o)*3;this.cPos[c]=e,this.cPos[c+1]=i[a],this.cPos[c+2]=n[a],this.cCol[(t*_n+o)*4+3]=0}for(let o=0;o<Ri;o++)this.sPos[(t*Ri+o)*3+1]=-50,this.sCol[(t*Ri+o)*4+3]=0}end(t,e,n,i,r,o){if(this.band.visible=this.curtain.visible=this.spray.visible=this.any,this.any){const h=this.band.geometry.attributes;h.position.needsUpdate=!0,h.normal.needsUpdate=!0,h.color.needsUpdate=!0;const u=this.curtain.geometry.attributes;u.position.needsUpdate=!0,u.normal.needsUpdate=!0,u.color.needsUpdate=!0,u.uv.needsUpdate=!0,u.heavy.needsUpdate=!0;const f=this.spray.geometry.attributes;f.position.needsUpdate=!0,f.color.needsUpdate=!0}const a=i>.05&&Number.isFinite(t+e+n)?1:0,c=1-Math.exp(-4*Math.max(0,Number.isFinite(o)?o:0));this.ballOn+=(a-this.ballOn)*c,a&&(this.ball.position.set(t,e,n),this.lastR=i);const l=this.lastR*this.ballOn;if(this.ball.visible=l>.05,this.ball.visible){const h=1+.06*Math.sin(r*5.3);this.ball.scale.set(l*1.25*h,l*(.9+.08*Math.sin(r*4.1+1)),l*h),this.ball.rotation.set(r*2.2,r*.7,0)}}}const Ci=4,qE=.6;class KE{constructor(t){v(this,"mesh");v(this,"pos");v(this,"col");v(this,"idx");v(this,"fed");v(this,"time",0);v(this,"riderS",NaN);v(this,"white",[.93,.96,.98]);this.cols=t;const e=t*Ci;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.idx=new Uint16Array((t-1)*(Ci-1)*6),this.fed=new Uint8Array(t);const n=new Se;n.setAttribute("position",new jt(this.pos,3).setUsage(Te)),n.setAttribute("color",new jt(this.col,4).setUsage(Te)),n.setIndex(new jt(this.idx,1).setUsage(Te)),this.mesh=new ae(n,new On({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ve})),this.mesh.name="crestSpray",this.mesh.frustumCulled=!1}setTint(t){for(let e=0;e<3;e++)this.white[e]=t[e]}begin(t,e){this.time=t,this.riderS=e,this.fed.fill(0)}column(t,e,n,i,r,o,a,c,l){if(!l||i<=-1||i>=30||o>=.6)return;const h=this.riderS,u=h===h?B(2,5,Math.abs(n-h)):1,f=B(-1,2,i)*(1-B(10,30,i))*(1-o/.6)*u;if(f<=0)return;const d=this.time,m=Math.max(r,c),_=c>r?a:0,g=.4+.6*Ue(n*.45-d*1.1,61)*Ue(n*1.3+d*.7,67),p=1.6+.9*Ue(n*.3+d*.5,71),M=.5+.4*Ue(n*.5-d*.6,73),y=this.white;for(let x=0;x<Ci;x++){const I=x/(Ci-1),w=t*Ci+x,R=w*3;this.pos[R]=e-.15*I,this.pos[R+1]=m+.04+M*Math.sin(I*2.2),this.pos[R+2]=_-.05-p*I;const L=w*4;this.col[L]=y[0],this.col[L+1]=y[1],this.col[L+2]=y[2],this.col[L+3]=qE*f*g*B(0,.25,I)*(1-I)*(1-I)*1.8}this.fed[t]=1}end(){let t=0;for(let n=0;n<this.cols-1;n++)if(!(!this.fed[n]||!this.fed[n+1]))for(let i=0;i<Ci-1;i++){const r=n*Ci+i,o=r+Ci;this.idx[t++]=r,this.idx[t++]=o,this.idx[t++]=r+1,this.idx[t++]=r+1,this.idx[t++]=o,this.idx[t++]=o+1}const e=this.mesh.geometry;e.setDrawRange(0,t),this.mesh.visible=t>0,e.index.needsUpdate=!0,e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}}const wn=180,Ls=1,Ws=14,lh=28,hh=14,ns=Ws+lh+hh,YE=35,jE=70,rs=[],no=[];for(let s=0;s<Ws;s++)rs.push(0),no.push(-14*Math.pow(1-s/Ws,1.6));for(let s=0;s<lh;s++)rs.push(1),no.push(Math.pow(s/(lh-1),1.25));for(let s=1;s<=hh;s++)rs.push(2),no.push(YE*Math.pow(s/hh,1.8));const Kn=[.015,.11,.24],da=[.03,.19,.33],$E=[.07,.5,.55],ZE=[.35,.85,.8],pa=[.04,.21,.34],JE=[.93,.96,.98],QE=[da[0]/Kn[0],da[1]/Kn[1],da[2]/Kn[2]],tA=[pa[0]/Kn[0],pa[1]/Kn[1],pa[2]/Kn[2]],eA=.85,Qc=1.3,nA=.6,Km=[],Ym=[];for(let s=0;s<ns;s++){const t=rs[s]===1?no[s]:1,e=B(.6,.04,t);Km.push(rs[s]===1?e*e:0),Ym.push(rs[s]===1?1-nA*B(.5,1,t):1)}const iA=.021,sA=2.5,rA=-4.5,oA=11,aA=.06,cA=3.5,lA=14,Zd=.25,hA=.25,uA=1.03;function fA(s,t,e){const n=sA*.5;return(e+s.barrelShape(t-n)+s.barrelShape(t+n)+s.barrelShape(t-2*n)+s.barrelShape(t+2*n))/5}const jm=[],$m=[],Zm=[];for(let s=0;s<ns;s++){const t=e=>{const n=Math.sin(s*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};jm.push((s%2?-1:1)*(.4+.6*t(1))),$m.push(.022+.045*t(2)),Zm.push(t(3))}const dA=-1.5,pA=-6;function Jd(s,t){const e=new Uint32Array((s-1)*(t-1)*6);let n=0;for(let i=0;i<s-1;i++)for(let r=0;r<t-1;r++){const o=i*t+r,a=(i+1)*t+r,c=i*t+r+1,l=(i+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=c,e[n++]=a,e[n++]=l,e[n++]=c}return e}function Qd(s,t,e,n,i=0,r=e-1){for(let o=Math.max(0,i);o<=Math.min(e-1,r);o++){const a=o>0?o-1:o,c=o<e-1?o+1:o;for(let l=0;l<n;l++){const h=l>0?l-1:l,u=l<n-1?l+1:l,f=(a*n+l)*3,d=(c*n+l)*3,m=(o*n+h)*3,_=(o*n+u)*3,g=s[d]-s[f],p=s[d+1]-s[f+1],M=s[d+2]-s[f+2],y=s[_]-s[m],x=s[_+1]-s[m+1],I=s[_+2]-s[m+2];let w=p*I-M*x,R=M*y-g*I,L=g*x-p*y;const T=Math.sqrt(w*w+R*R+L*L),b=(o*n+l)*3;T>1e-12?(w/=T,R/=T,L/=T):(w=0,R=1,L=0),t[b]=w,t[b+1]=R,t[b+2]=L}}}const tl=10,mA=s=>s[oe-1]<s[0]-.05;function gA(){if(typeof document>"u")return null;const s=document.createElement("canvas");s.width=s.height=32;const t=s.getContext("2d");if(!t)return null;const e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new Da(s)}const Pi={min:.38,s0:1.4,s1:4.5,u0:.1,u1:.5,deep0:.15,deep1:.42};class _A{constructor(t){v(this,"group",new Oe);v(this,"surface");v(this,"lip");v(this,"pos");v(this,"col");v(this,"lipPos");v(this,"lipCol");v(this,"nor");v(this,"lipNor");v(this,"geo");v(this,"lipGeo");v(this,"s0",0);v(this,"lipAlpha");v(this,"rider",null);v(this,"feather");v(this,"featherPos");v(this,"colU",new Float32Array(oe));v(this,"colY",new Float32Array(oe));v(this,"curtain",new XE(wn));v(this,"crestSpray",new KE(wn));v(this,"pDeep",Kn.slice());v(this,"pBack",da.slice());v(this,"pTeal",$E.slice());v(this,"pGlow",ZE.slice());v(this,"pFlat",pa.slice());v(this,"pWhite",JE.slice());this.wave=t;const e=wn*ns;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.geo=new Se,this.geo.setAttribute("position",new jt(this.pos,3).setUsage(Te)),this.geo.setAttribute("color",new jt(this.col,3).setUsage(Te)),this.nor=new Float32Array(e*3),this.geo.setAttribute("normal",new jt(this.nor,3).setUsage(Te)),this.geo.setIndex(new jt(Jd(wn,ns),1));const n=new je({vertexColors:!0,roughness:.32,metalness:.05,side:Ve});this.surface=new ae(this.geo,n),this.surface.frustumCulled=!1,this.surface.receiveShadow=!0;const i=wn*oe;this.lipPos=new Float32Array(i*3),this.lipCol=new Float32Array(i*4),this.lipAlpha=new Float32Array(i).fill(1),this.lipGeo=new Se,this.lipGeo.setAttribute("position",new jt(this.lipPos,3).setUsage(Te)),this.lipGeo.setAttribute("color",new jt(this.lipCol,4).setUsage(Te)),this.lipNor=new Float32Array(i*3),this.lipGeo.setAttribute("normal",new jt(this.lipNor,3).setUsage(Te)),this.lipGeo.setIndex(new jt(Jd(wn,oe),1));const r=new je({vertexColors:!0,roughness:.3,metalness:.05,side:Ve,transparent:!0});this.lip=new ae(this.lipGeo,r),this.lip.frustumCulled=!1,this.lip.receiveShadow=!0,this.featherPos=new Float32Array(wn*tl*3);const o=new Se;o.setAttribute("position",new jt(this.featherPos,3).setUsage(Te)),this.feather=new Ia(o,new Qr({color:15924223,size:.4,transparent:!0,opacity:.55,depthWrite:!1,map:gA()})),this.feather.frustumCulled=!1,this.group.add(this.surface,this.lip,this.feather,this.curtain.group,this.crestSpray.mesh)}setWaterTint(t){for(let e=0;e<3;e++)this.pDeep[e]=t.deep[e],this.pBack[e]=Math.min(1,t.deep[e]*QE[e]),this.pFlat[e]=Math.min(1,t.deep[e]*tA[e]),this.pTeal[e]=t.face[e],this.pGlow[e]=t.lip[e],this.pWhite[e]=t.foam[e];this.curtain.setTint(t.foam,t.lip,t.face),this.crestSpray.setTint(t.foam)}setRider(t){this.rider=t&&Number.isFinite(t.s)&&Number.isFinite(t.u)&&Number.isFinite(t.deep)?{s:t.s,u:t.u,deep:t.deep}:null}lipOpacity(t,e){const n=this.rider;if(!n||!(n.deep>Pi.deep0))return 1;const i=B(Pi.deep0,Pi.deep1,n.deep)*(1-B(Pi.s0,Pi.s1,Math.abs(t-n.s)))*B(n.u+Pi.u0,n.u+Pi.u1,e);return 1-(1-Pi.min)*i}update(t,e){if(!Number.isFinite(t))return;Number.isFinite(e)||(e=0);const n=this.wave;this.s0=Math.round(t/Ls)*Ls-jE*Ls;const i=this.pos,r=this.col;let o=!1,a=wn,c=-1;const l=this.pDeep,h=this.pBack,u=this.pTeal,f=this.pGlow,d=this.pFlat,m=this.pWhite;this.curtain.begin(),this.crestSpray.begin(e,this.rider&&this.rider.deep>0?this.rider.s:NaN);const _=n.breakS,g=n.peeling?Math.max(n.barrelShape(_-3),n.barrelShape(_-5)):0,p=g>0?Math.max(n.amp(_-3),n.amp(_-5))*g:0;for(let M=0;M<wn;M++){const y=bm(this.s0+M*Ls,_),x=Math.max(n.amp(y),.001),I=n.faceWidth(y,x),w=n.barrelShape(y),R=n.peeling?(1-n.breakBlend(y))*n.peelBlend*(g>0?1:1-w):0,L=g>0&&y<_-1?fA(n,y,w):w,T=L>0?(L===w?n.barrelReach(y):Me.cover*I)*Ma.land:0,b=L>.05?wm(n,y,x):-99,D=b,z=L===w?w:L*B(1,2.5,b),F=this.rider&&this.rider.deep>0?Math.abs(y-this.rider.s):99,W=.32*B(1.5,3.5,F),K=b,Y=n.hollow(y),Z=-y,H=y-_,st=g>0?kt((rA-H)/oA,0,1):1,ht=B(0,.12,st),dt=g>0?2:(cA+_-this.s0-M*Ls)/lA,At=dt>=1?3.5:3.5*(Zd+(1-Zd)*B(0,1,dt)),Pt=p>0&&H<-3?(1-w)*B(-3,-7.5,H)*(1-B(-11,-22,H)):0,V=p*(1-.25*B(-7,-55,H));let J=Pt>0&&V>x?x+(V-x)*Pt:x;w>=.05&&J>x&&(J=g>0?Math.min(J,x*uA):x);const St=J>x?n.faceWidth(y,J)*(1-.4*Pt):I,it=iA*(.94+.06*Ue(y*.06,91))*(1-R),Lt=n.peeling?B(-3,0,H)*(1-B(16,40,H))*(1-.7*w):0;for(let E=0;E<ns;E++){const S=rs[E],k=no[E];let G,Q,j,xt,ct;if(S===0){G=k;const N=G/(2.4*J);Q=J*Math.exp(-N*N);const mt=kt(Q/J,0,1)*.6||0;j=l[0]+(h[0]-l[0])*mt,xt=l[1]+(h[1]-l[1])*mt,ct=l[2]+(h[2]-l[2])*mt}else if(S===1){const N=k;G=N*St;const mt=1-N;Q=J*mt*mt;const $=2*J*mt,nt=$/Math.sqrt(St*St+$*$),Mt=B(.2,.9,nt)*Math.pow(mt,.6)*.9;j=l[0]+(u[0]-l[0])*Mt,xt=l[1]+(u[1]-l[1])*Mt,ct=l[2]+(u[2]-l[2])*Mt;const bt=Mt*Mt*Mt*(.4+.6*Y)*B(.05,0,Math.abs(N-.12)-.1);j+=(f[0]-j)*bt*.5,xt+=(f[1]-xt)*bt*.5,ct+=(f[2]-ct)*bt*.5;const Wt=eA*Km[E]*(.55+.45*Y);j+=(f[0]*Qc-j)*Wt,xt+=(f[1]*Qc-xt)*Wt,ct+=(f[2]*Qc-ct)*Wt;const ge=1-Ym[E];if(j+=(l[0]*.8-j)*ge,xt+=(l[1]*.8-xt)*ge,ct+=(l[2]*.8-ct)*ge,it>0){const De=.2126*j+.7152*xt+.0722*ct,se=y*$m[E]+Zm[E],Qe=se-Math.floor(se),bn=4*Qe*(1-Qe),fs=1+it*jm[E]*bn/Math.max(De,.06);j*=fs,xt*=fs,ct*=fs}}else{G=St+k,Q=0;const N=Math.exp(-k/10);j=l[0]+(d[0]-l[0])*N,xt=l[1]+(d[1]-l[1])*N,ct=l[2]+(d[2]-l[2])*N}const vt=G-St,Ot=R>0||vt*vt<9.7||D>0&&G-D>-1.2&&G-D<2.4?.55*Ue(y*.83+G*2.31+e*.6,7)+.45*Ue(y*2.13-G*1.71-e*1.4,13):.5,at=Math.exp(-(vt*vt)/.7)*(.2+.55*Ot)*Math.min(1,J/n.A0);let wt=0;if(R>0){const N=S===0?kt(1+G/3,0,1)*.7:S===1?1:Math.exp(-Math.max(0,vt)/At);if(wt=R*N*(.55+.45*Ot)*(st<1?ht*B(0,1,st+.45*(Ot-.5)):1),dt<1.25){const mt=kt(dt+.45*(Ue(y*.37+G*.9+e*.3,29)-.5),0,1);wt*=mt*(1+hA*(1-mt))}Q+=wt*(g>0?aA:.18)*(Ot-.3)}let Tt=0;if(D>0){const N=G-D;N>-1.2&&N<2.4&&(Tt=G<K+.5||N<0?z*Math.exp(-(N*N)/.25)*(.45+.35*Ot):z*Math.exp(-(N*N)/.7)*(.75+.25*Ot),Q+=Tt*W*(.6+.4*Ot))}const zt=Lt>0?Lt*(E===Ws?.97:E===Ws-1?.55:E===Ws+1?.3:0):0,Et=Tt>0&&G<Math.max(D,K+.5)?Tt:0,te=kt(Math.max(at,wt,zt,Et),0,1),qt=.85+.15*Ot;if(j+=(m[0]*qt-j)*te,xt+=(m[1]*qt-xt)*te,ct+=(m[2]*qt-ct)*te,T>0&&G>-.5){const N=1-.68*L*(1-B(.85*T,1.05*T,G));j*=N,xt*=N,ct*=N}if(Tt>0&&Et===0){const N=.9+.1*Ot;j+=(m[0]*N-j)*Tt,xt+=(m[1]*N-xt)*Tt,ct+=(m[2]*N-ct)*Tt}const ie=(M*ns+E)*3;i[ie]=Z,i[ie+1]=Q,i[ie+2]=G,r[ie]=j,r[ie+1]=xt,r[ie+2]=ct}const Ht=this.colU,It=this.colY;kh(n,y,x,I,Ht,It)&&(o=!0,M<a&&(a=M),c=M);const Xt=Ba(n,y),tt=this.s0+M*Ls,ut=w*B(dA,pA,y-_);let C=0;for(let E=1;E<oe;E++)It[E]>It[C]&&(C=E);const ot=w*Xt,et=y>_&&w<.97?Math.min(1,4*w*(1-w))*Xt:0,ft=ot*(1-et),lt=B(1,-6,H);for(let E=0;E<oe;E++){const S=E/(oe-1),k=M*oe+E,G=k*3;this.lipPos[G]=Z,this.lipPos[G+1]=It[E],this.lipPos[G+2]=Ht[E];const Q=this.lipOpacity(tt,Ht[E]);this.lipAlpha[k]=Q;const j=(.25+.7*S*S)*(1-Xt)+Xt*.9*B(.86,1,S),xt=Xt*(.45*(1-B(.1,.5,S))+.25*B(.55,.85,S)*(1-B(.88,1,S))),ct=(1-Q)*.35,vt=k*4;if(ot>0){const Ot=Math.sin(y*.9+S*5.5-e*2.2)+.6*Math.sin(y*2.3-S*3.1+e*1.3),at=ft*.1*Math.max(0,Ot)*(1-lt*.6),wt=.18*(1-S)*(1-S)+.8*et;for(let Tt=0;Tt<3;Tt++){let zt=u[Tt]+(m[Tt]-u[Tt])*j+(f[Tt]-u[Tt])*ct;zt*=1-xt;let Et=u[Tt]+((d[Tt]+l[Tt])*.5-u[Tt])*(.3+.7*lt)*ft;Et+=(f[Tt]-Et)*(wt+at),Et+=(m[Tt]-Et)*.5*et,this.lipCol[vt+Tt]=Math.min(1,zt+(Et-zt)*ot)}this.lipCol[vt+3]=Math.min(Q,1-ft*(.6-.42*lt));continue}for(let Ot=0;Ot<3;Ot++){const at=(u[Ot]+(m[Ot]-u[Ot])*j+(f[Ot]-u[Ot])*ct)*(1-xt);this.lipCol[vt+Ot]=Math.min(1,at)}this.lipCol[vt+3]=Q}const Ct=g>0?B(-3.5,-9,H):H<-4?(1-w)*B(-4,-7,H):0;if(Ct>0)for(let E=0;E<oe;E++){const S=(M*oe+E)*4,k=Math.min(1,Ct*(1+.45*Math.sin(y*2.1+E*1.7)));for(let G=0;G<3;G++)this.lipCol[S+G]+=(m[G]*.9-this.lipCol[S+G])*k}for(let E=0;E<tl;E++){const S=(M*tl+E)*3,k=Ue(y*1.9+E*7.3+e*2.7,21)-.5,G=Ue(y*2.3-E*3.1+e*3.3,23)-.5;this.featherPos[S]=Z+k*.6,this.featherPos[S+1]=Xt>.25&&mA(It)?It[C]+.12+.35*Math.abs(G):-50,this.featherPos[S+2]=Ht[C]-.15-.6*Math.abs(k)}this.crestSpray.column(M,Z,y,H,J,w,Ht[C],It[C],n.peeling);const _t=g>0?.9*B(-3.5,-8,H):0;this.curtain.column(M,Z,y,Ht,It,this.lipAlpha,M*oe,w*Xt,x,e,.75*ut,_t)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,Qd(i,this.nor,wn,ns),this.lip.visible=o,this.curtain.end(0,0,0,0,e,0),this.crestSpray.end(),this.curtain.band.visible=!1,this.feather.geometry.attributes.position.needsUpdate=!0,o&&(this.lipGeo.attributes.position.needsUpdate=!0,this.lipGeo.attributes.color.needsUpdate=!0,Qd(this.lipPos,this.lipNor,wn,oe,a-1,c+1),this.lipGeo.attributes.normal.needsUpdate=!0)}}function xA(){const s=new Oe,t=(e,n,i,r,o,a,c)=>{const l=new tr(1,28,14),h=l.attributes.position;for(let f=0;f<h.count;f++){const d=h.getX(f),m=h.getY(f),_=h.getZ(f),g=.82+.36*Ue(d*3.1+_*5.3+m*2.2+10,c);h.setXYZ(f,d*g,m*g,_*g)}l.computeVertexNormals();const u=new ae(l,new je({color:a,roughness:.95,flatShading:!0}));u.scale.set(e,n,i),u.position.set(r,-n*.15,o),s.add(u)};return t(80,26,50,120,-95,6974012,3),t(40,14,26,58,-50,7828031,5),t(20,6,14,30,-24,10517070,9),t(6,2.2,5,18,-12,9071178,11),s}function vA(s){const t=new je({color:new Dt(Kn[0],Kn[1],Kn[2]),roughness:.4}),e=new ae(new Jr(1600,1600,1,1),t);return e.rotation.x=-Math.PI/2,e.position.y=-.03,s.add(e),s.add(xA()),{update(n,i){e.position.x=n,i&&t.color.setRGB(i[0],i[1],i[2])}}}const MA=600;function Ea(s){const t=s-Math.floor(s);return t>=1?0:t}function tp(s,t){return typeof t=="number"&&Number.isFinite(t)?Ea(t):Ea(s/MA)}function yA(s){if(!s)return null;const t=/[?&]time=([^&#]*)/.exec(s.startsWith("?")||s.startsWith("&")?s:"?"+s);if(!t||t[1].trim()==="")return null;let e;try{e=decodeURIComponent(t[1])}catch{return null}const n=Number(e);return Number.isFinite(n)?Ea(n):null}function Vt(s){const t=e=>{const n=e/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return[t(s>>16&255),t(s>>8&255),t(s&255)]}const ep={el:7,sunColor:Vt(16763034),sunI:1.7,hemiSky:Vt(16173496),hemiGround:Vt(9072758),hemiI:1.5,skyTop:Vt(8363984),skyHorizon:Vt(16238246),fog:Vt(15780274),cloud:Vt(16765634),vig:.3,sea:[.05,.11,.2]},jo=[{p:0,az:30,...ep},{p:.25,az:45,el:36,sunColor:Vt(16770756),sunI:2.1,hemiSky:Vt(13624564),hemiGround:Vt(5003868),hemiI:1,skyTop:Vt(5214160),skyHorizon:Vt(12902382),fog:Vt(13820646),cloud:Vt(16775406),vig:.22,sea:[.02,.11,.235]},{p:.4,az:70,el:62,sunColor:Vt(16773596),sunI:2.3,hemiSky:Vt(13822198),hemiGround:Vt(4872792),hemiI:.95,skyTop:Vt(4163273),skyHorizon:Vt(12114672),fog:Vt(13624814),cloud:Vt(16777215),vig:.2,sea:[.015,.11,.24]},{p:.6,az:80,el:36,sunColor:Vt(16769200),sunI:2.15,hemiSky:Vt(14542054),hemiGround:Vt(8418398),hemiI:1.6,skyTop:Vt(4884676),skyHorizon:Vt(15131344),fog:Vt(14867659),cloud:Vt(16773852),vig:.24,sea:[.03,.11,.22]},{p:.69,az:105,el:20,sunColor:Vt(16763024),sunI:1.9,hemiSky:Vt(16175804),hemiGround:Vt(10518640),hemiI:2.3,skyTop:Vt(5932228),skyHorizon:Vt(15913134),fog:Vt(15519406),cloud:Vt(16768192),vig:.28,sea:[.05,.105,.2]},{p:.78,az:150,el:6,sunColor:Vt(16751194),sunI:1.6,hemiSky:Vt(16303272),hemiGround:Vt(10779244),hemiI:2.4,skyTop:Vt(6978752),skyHorizon:Vt(16363646),fog:Vt(15774862),cloud:Vt(16757900),vig:.34,sea:[.07,.1,.18]},{p:.9,az:75,el:9,sunColor:Vt(16756348),sunI:1.5,hemiSky:Vt(16303798),hemiGround:Vt(10517108),hemiI:2.3,skyTop:Vt(7636678),skyHorizon:Vt(16300696),fog:Vt(15776928),cloud:Vt(16761e3),vig:.33,sea:[.06,.1,.19]},{p:1,az:30,...ep}],bA=s=>s*s*(3-2*s),Ni=(s,t,e)=>s+(t-s)*e,Li=(s,t,e)=>[Ni(s[0],t[0],e),Ni(s[1],t[1],e),Ni(s[2],t[2],e)],np=Math.PI/180;function ip(s){const t=Ea(s);let e=0;for(;e<jo.length-2&&t>=jo[e+1].p;)e++;const n=jo[e],i=jo[e+1],r=bA(Math.min(1,Math.max(0,(t-n.p)/(i.p-n.p)))),o=Ni(n.az,i.az,r)*np,a=Ni(n.el,i.el,r)*np,c=Math.cos(a),l=[-Math.sin(o)*c,Math.sin(a),Math.cos(o)*c];return{phase:t,sunDir:l,sunColor:Li(n.sunColor,i.sunColor,r),sunIntensity:Ni(n.sunI,i.sunI,r),hemiSky:Li(n.hemiSky,i.hemiSky,r),hemiGround:Li(n.hemiGround,i.hemiGround,r),hemiIntensity:Ni(n.hemiI,i.hemiI,r),skyTop:Li(n.skyTop,i.skyTop,r),skyHorizon:Li(n.skyHorizon,i.skyHorizon,r),fogColor:Li(n.fog,i.fog,r),cloudColor:Li(n.cloud,i.cloud,r),vignette:Ni(n.vig,i.vig,r),seaColor:Li(n.sea,i.sea,r)}}const sp=1024,rp=9,op=5,$o=10,Zo=60,SA=1100,TA=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // always at the far plane
}`,EA=`
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
}`;function AA(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function wA(s){const t=[];for(let n=0;n<op;n++){const i=new Fa(1,1),r=n/(op-1)-.5,o=14+12*(1-Math.abs(r)*1.6)+s()*6,a=i.attributes.position;for(let c=0;c<a.count;c++){const l=a.getY(c);a.setY(c,Math.max(l,-.35))}i.scale(o*1.25,o*.8,o),i.translate(r*70+(s()-.5)*10,o*.25+s()*4,(s()-.5)*16),t.push(i)}const e=aT(t,!1);for(const n of t)n.dispose();return e.computeVertexNormals(),e}function RA(s,t,e={}){const n=e.fixedPhase!==void 0?e.fixedPhase:typeof location<"u"?yA(location.search):null;t.shadowMap.enabled=!0,t.shadowMap.type=wp;const i=new Rb(16777215,4473924,1);s.add(i);const r=new vm(16777215,2);r.castShadow=!0,r.shadow.mapSize.set(sp,sp);const o=r.shadow.camera;o.left=-$o,o.right=$o,o.top=$o,o.bottom=-$o,o.near=1,o.far=Zo+40,o.updateProjectionMatrix(),r.shadow.bias=-6e-4,r.shadow.normalBias=.03,s.add(r),s.add(r.target);const a=new mi({uniforms:{uTop:{value:new Dt},uHorizon:{value:new Dt},uSunDir:{value:new P(0,1,0)},uSunColor:{value:new Dt}},vertexShader:TA,fragmentShader:EA,side:$e,depthWrite:!1,fog:!1}),c=new ae(new tr(SA,24,12),a);c.frustumCulled=!1,c.renderOrder=-10,s.add(c),s.background=null;const l=new wh(16777215,80,650);s.fog=l;const h=new db({flatShading:!0,fog:!1}),u=new Oe,f=AA(1234),d=[],m=1300;for(let x=0;x<rp;x++){const I=new ae(wA(f),h);I.userData.lookCloud=!0;const w=x<6;I.position.set(-m/2+(x+f()*.6)*(m/rp),w?55+f()*45:70+f()*40,w?-620-f()*280:-380-f()*150),I.rotation.y=(f()-.5)*.6;const R=1.2+f()*.7;I.scale.set(R,R*(.8+f()*.3),R),u.add(I),d.push({m:I,speed:1.2+f()*1.6})}s.add(u);let _=null;typeof document<"u"&&document.body&&(_=document.createElement("div"),_.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(60,30,20,0.85) 100%);",(e.overlayParent??document.body).appendChild(_));let g=0,p=ip(tp(0,n));const M=new Dt;function y(x,I){r.color.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),r.intensity=x.sunIntensity,r.target.position.set(I.x,I.y,I.z),r.position.set(I.x+x.sunDir[0]*Zo,I.y+x.sunDir[1]*Zo,I.z+x.sunDir[2]*Zo),r.target.updateMatrixWorld(),i.color.setRGB(x.hemiSky[0],x.hemiSky[1],x.hemiSky[2]),i.groundColor.setRGB(x.hemiGround[0],x.hemiGround[1],x.hemiGround[2]),i.intensity=x.hemiIntensity,a.uniforms.uTop.value.setRGB(x.skyTop[0],x.skyTop[1],x.skyTop[2]),a.uniforms.uHorizon.value.setRGB(x.skyHorizon[0],x.skyHorizon[1],x.skyHorizon[2]),a.uniforms.uSunDir.value.set(x.sunDir[0],x.sunDir[1],x.sunDir[2]),a.uniforms.uSunColor.value.setRGB(x.sunColor[0],x.sunColor[1],x.sunColor[2]),c.position.set(I.x,0,I.z),l.color.setRGB(x.fogColor[0],x.fogColor[1],x.fogColor[2]),M.setRGB(x.cloudColor[0],x.cloudColor[1],x.cloudColor[2]),h.color.copy(M).multiplyScalar(.55),h.emissive.copy(M).multiplyScalar(.5),_&&(_.style.opacity=x.vignette.toFixed(3))}return y(p,{x:0,y:0,z:0}),{get state(){return p},update(x,I){const w=Number.isFinite(x)&&x>0?x:0;g+=w,p=ip(tp(g,n)),u.position.x=I.x;for(const R of d)R.m.position.x+=R.speed*w,R.m.position.x>m/2&&(R.m.position.x-=m);y(p,I)},dispose(){var x;s.remove(i,r,r.target,c,u),s.fog===l&&(s.fog=null),(x=r.shadow.map)==null||x.dispose(),c.geometry.dispose(),a.dispose();for(const I of d)I.m.geometry.dispose();h.dispose(),_==null||_.remove(),_=null}}}const ap={deep:[.05,.095,.17],face:[.42,.37,.27],lip:[.78,.64,.44],foam:[1,.91,.8]},Jo=[{p:0,...ap},{p:.25,deep:[.02,.11,.235],face:[.08,.48,.53],lip:[.38,.84,.78],foam:[.94,.96,.97]},{p:.4,deep:[.015,.11,.24],face:[.07,.5,.55],lip:[.35,.85,.8],foam:[.93,.96,.98]},{p:.6,deep:[.025,.11,.225],face:[.09,.48,.5],lip:[.42,.84,.76],foam:[.95,.95,.94]},{p:.69,deep:[.05,.105,.2],face:[.22,.43,.4],lip:[.62,.78,.6],foam:[.98,.93,.86]},{p:.78,deep:[.08,.095,.165],face:[.48,.37,.25],lip:[.86,.62,.4],foam:[1,.89,.77]},{p:.9,deep:[.07,.095,.175],face:[.43,.35,.3],lip:[.8,.62,.5],foam:[1,.9,.83]},{p:1,...ap}],CA=s=>s*s*(3-2*s);function PA(s){if(!Number.isFinite(s))return 0;const t=s-Math.floor(s);return t>=1?0:t}function Qo(s,t,e,n){return s[0]=t[0]+(e[0]-t[0])*n,s[1]=t[1]+(e[1]-t[1])*n,s[2]=t[2]+(e[2]-t[2])*n,s}function LA(s,t){const e=PA(s);let n=0;for(;n<Jo.length-2&&e>=Jo[n+1].p;)n++;const i=Jo[n],r=Jo[n+1],o=CA(Math.min(1,Math.max(0,(e-i.p)/(r.p-i.p))));return Qo(t.deep,i.deep,r.deep,o),Qo(t.face,i.face,r.face,o),Qo(t.lip,i.lip,r.lip,o),Qo(t.foam,i.foam,r.foam,o),t}const el=[.12,.62,.72],cp=.5,IA=.9,DA=1/.35,NA=1/.5,ta=s=>s>0?s<1?s:1:0;function FA(s,t,e){const n=ta(s),i=ta((ta(t)-cp)/(IA-cp)),r=i*i*(3-2*i),o=e>0?e:0;if(o===0)return n;const a=r-n,c=(a>0?DA:NA)*o,l=Math.abs(a)<=c?a:Math.sign(a)*c;return ta(n+l)}function lp(s,t){const e=Number.isFinite(s)?s:0,n=Number.isFinite(t)?t:0;return .06*Math.sin(2.1*e+.9*n)+.04*Math.sin(3.7*e-1.3*n+1.1)}const hp=[.1,.35,.6,.85,1.1],UA=.6,OA=.16,BA=.75,nl=.45,kA=12158819;function up(s,t){const e=s;if(!e.isSkinnedMesh)return new ae(s.geometry,t);const n=new sm(e.geometry,t);return n.bindMode=Cp,n.bind(e.skeleton,e.bindMatrix),n}function fp(s){return s.isSkinnedMesh?s.bindMatrix:s.matrixWorld}const il=new Float32Array(oe),sl=new Float32Array(oe);function HA(s,t,e,n,i,r,o,a){const c=e-s,l=n-t,h=o-i,u=a-r,f=c*u-l*h;if(Math.abs(f)<1e-12)return!1;const d=i-s,m=r-t,_=(d*u-m*h)/f,g=(d*l-m*c)/f;return _>=0&&_<=1&&g>=0&&g<=1}function zA(s,t,e,n){if(!t.riding||!t.inTube)return 0;const i=Oa(s,t.s),r=Math.max(s.amp(i),.001),o=s.faceWidth(i,r);if(!Tm(s,i,r,o,il,sl)||Ba(s,i)<.3)return 0;const a=e.group.position,c=e.by;let l=0;for(const h of hp){const u=a.z+c.z*h,f=a.y+c.y*h;for(let d=0;d+1<oe;d++)if(HA(u,f,n.z,n.y,il[d],sl[d],il[d+1],sl[d+1])){l++;break}}return l/hp.length}class Jm{constructor(t){v(this,"ghost",new Oe);v(this,"reflection",new Oe);v(this,"amount",0);v(this,"covered",0);v(this,"ghostMat");v(this,"ghosts",[]);v(this,"refls",[]);v(this,"reflMats",[]);v(this,"reflBase",[]);v(this,"mirror",new Gt);v(this,"camPos",new P);v(this,"reflOn",0);this.rig=t,this.ghostMat=new On({color:new Dt().setRGB(el[0],el[1],el[2]),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1});const e=new Map;for(const n of t.parts){const i=up(n,this.ghostMat);i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1,i.renderOrder=999,i.frustumCulled=!1,this.ghosts.push(i),this.ghost.add(i);const r=n.material;let o=e.get(r);o||(o=new On({color:r.map?new Dt(kA):r.color?r.color.clone():new Dt(.5,.5,.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Ve}),e.set(r,o),this.reflMats.push(o),this.reflBase.push(o.color.clone()));const a=up(n,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a.renderOrder=-5,a.frustumCulled=!1,a.visible=n!==t.board,this.refls.push(a),this.reflection.add(a)}this.ghost.visible=!1,this.reflection.visible=!1}setGhostWater(t,e,n){this.ghostMat.color.setRGB(Math.min(1,t[0]+(e[0]-t[0])*.55+(n[0]-t[0])*.18),Math.min(1,t[1]+(e[1]-t[1])*.55+(n[1]-t[1])*.18),Math.min(1,t[2]+(e[2]-t[2])*.55+(n[2]-t[2])*.18))}setWater(t){for(let e=0;e<this.reflMats.length;e++){const n=this.reflBase[e];this.reflMats[e].color.setRGB(n.r+(t[0]-n.r)*nl,n.g+(t[1]-n.g)*nl,n.b+(t[2]-n.b)*nl)}}update(t,e,n,i,r){const o=this.rig;n.getWorldPosition(this.camPos),this.covered=o.group.visible?zA(t,e,o,this.camPos):0,this.amount=FA(this.amount,this.covered,r);const a=e.riding&&o.group.visible,c=Math.min(1,Math.max(0,Number.isFinite(r)?r:0)*4);this.reflOn+=((a?1:0)-this.reflOn)*c;const l=this.amount>.005&&o.group.visible,h=this.reflOn>.01&&a;if(this.ghost.visible=l,this.reflection.visible=h,!l&&!h)return;o.group.updateMatrixWorld(!0);const u=o.parts;if(l){this.ghostMat.opacity=this.amount*UA;for(let f=0;f<u.length;f++)this.ghosts[f].matrixWorld.copy(fp(u[f]))}if(h){const f=o.group.position,d=f.y,m=BA*(1+.5*lp(i*1.3,f.x+5)),_=lp(i,f.x)/.9;this.mirror.set(1,_,0,-_*d,0,-m,0,d*(1+m),0,0,1,0,0,0,0,1);const g=OA*this.reflOn*(1-.6*this.amount);for(const p of this.reflMats)p.opacity=g;for(let p=0;p<u.length;p++)this.refls[p].matrixWorld.multiplyMatrices(this.mirror,fp(u[p]))}}}const VA=30;class GA{constructor(t,e){v(this,"recording",!1);v(this,"t0",0);v(this,"pointers",[]);v(this,"trace",[]);v(this,"events",[]);v(this,"seeds",[]);v(this,"lastTrace",-1);v(this,"btn");this.getSeed=e;const n=i=>{this.recording&&this.pointers.push({t:this.now(),type:i.type,id:i.pointerId,x:i.clientX,y:i.clientY})};for(const i of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(i,n,{capture:!0,passive:!0});this.btn=document.createElement("button"),this.btn.textContent="● REC",Object.assign(this.btn.style,{position:"fixed",top:"8px",right:"8px",zIndex:"20",padding:"8px 12px",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(200,30,40,0.75)",border:"1px solid rgba(255,255,255,0.5)",borderRadius:"8px",touchAction:"manipulation"}),this.btn.addEventListener("click",()=>this.recording?void this.stop():this.start()),document.body.appendChild(this.btn)}get active(){return this.recording}now(){return(performance.now()-this.t0)/1e3}start(){this.recording=!0,this.t0=performance.now(),this.pointers=[],this.trace=[],this.events=[],this.seeds=[this.getSeed()],this.lastTrace=-1,this.btn.textContent="■ STOP & SEND"}sample(t){if(!this.recording)return;const e=this.now();if(e-this.lastTrace<1/VA)return;this.lastTrace=e,this.trace.push({time:e,...t});const n=this.getSeed();this.seeds[this.seeds.length-1]!==n&&this.seeds.push(n)}event(t){this.recording&&this.events.push({t:this.now(),e:t})}async stop(){this.recording=!1,this.btn.textContent="● REC";const t=(window.prompt("What were you testing? (trim / wide swing / fast pump / hollow / other)")??"untitled").trim().replace(/[^\w-]+/g,"-").slice(0,40),e={label:t,recordedAt:new Date().toISOString(),screen:{w:window.innerWidth,h:window.innerHeight,dpr:window.devicePixelRatio},userAgent:navigator.userAgent,seeds:this.seeds,pointers:this.pointers,trace:this.trace,events:this.events},n=JSON.stringify(e);try{const i=await fetch("./__rec",{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!i.ok)throw new Error(String(i.status));this.flash(`saved ✓ (${this.pointers.length} touches)`)}catch{const i=document.createElement("a");i.href=URL.createObjectURL(new Blob([n],{type:"application/json"})),i.download=`surf-rec-${t}.json`,i.click(),this.flash("downloaded")}}flash(t){this.btn.textContent=t,setTimeout(()=>{this.recording||(this.btn.textContent="● REC")},2e3)}}const Xe={deepD:-1,wideD:16,missBreakS:40,popupTime:.35,spawnT:.25,vFar:4,vGain:3,hFar:-.45,hGain:.25,endAfterLength:5},WA={grip:!1,targetHeading:null,stall:0,drive:0};class XA{constructor(t,e){v(this,"state","lineup");v(this,"summary",null);v(this,"waveCount",1);v(this,"onPhysEvent",null);v(this,"seed");v(this,"popupLeft",0);v(this,"rideSeconds",0);this.wave=t,this.phys=e,this.seed=t.seed}takeoffWindow(){const t=this.wave;return this.state!=="lineup"||!t.peeling||t.peelBlend<1?null:{minS:t.breakS+Xe.deepD,maxS:t.breakS+Xe.wideD}}tap(t){if(this.state==="ended"){this.nextWave();return}if(!this.takeoffWindow()||t===null||!Number.isFinite(t))return;const e=t-this.wave.breakS;if(e<Xe.deepD)return this.end("Too deep",!1);if(e>Xe.wideD)return this.end("Too wide",!1);const n=1-(e-Xe.deepD)/(Xe.wideD-Xe.deepD),i=Xe.vFar+Xe.vGain*n,r=Xe.hFar-Xe.hGain*n;this.phys.spawn(t,Xe.spawnT,i,r)&&(this.state="popup",this.popupLeft=Xe.popupTime,this.rideSeconds=0)}step(t,e){var o;if(!(t>0)||!Number.isFinite(t))return;const n=this.wave;if(this.state==="lineup"){n.update(t),n.peeling&&n.breakS>Xe.missBreakS&&this.end("Missed it",!1);return}if(this.state==="ended"){n.finished||n.update(t);return}n.update(t),this.rideSeconds+=t;const i=this.state==="popup";this.phys.step(t,i?WA:e),i&&(this.popupLeft-=t,this.popupLeft<=1e-9&&this.phys.riding&&(this.state="riding"));let r=null;for(const a of this.phys.drain())(o=this.onPhysEvent)==null||o.call(this,a),(a.type==="wipe"||a.type==="kickout")&&(r=a.reason.charAt(0).toUpperCase()+a.reason.slice(1));r===null&&!this.phys.riding&&(r="Wiped out"),r===null&&(this.phys.s>n.length+Xe.endAfterLength||n.finished)&&(this.phys.state="kickedOut",r="Wave made"),r!==null&&this.end(r,!0)}end(t,e){this.state="ended",this.summary={seconds:e?this.rideSeconds:0,reason:t,rode:e}}nextWave(){this.seed=Math.imul(this.seed,1103515245)+12345&2147483647,this.wave.reset(this.seed),this.phys.state="idle",this.waveCount++,this.summary=null,this.state="lineup",this.popupLeft=0,this.rideSeconds=0}}let rl=null,dp=!1;function pp(){if(!dp)try{if(typeof document>"u"||!document.body)return;if(!rl){const s=document.createElement("label"),t=document.createElement("input");t.type="checkbox",t.setAttribute("switch",""),s.appendChild(t),s.setAttribute("aria-hidden","true"),s.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:1px;opacity:0;pointer-events:none;",document.body.appendChild(s),rl=s}rl.click()}catch{dp=!0}}function qA(s,t){try{if(!Number.isFinite(s)||s<=0)return!1;const e=Math.min(1,s),n=t&&typeof t.vibrate=="function"?t.vibrate:null;if(n){const r=Math.round(15+45*e);return n.call(t,e>.75?[r,40,r]:r),!0}if(t===void 0)return!1;const i=e>.75?3:e>.45?2:1;pp();for(let r=1;r<i&&typeof setTimeout=="function";r++)setTimeout(pp,70*r);return!1}catch{return!1}}const Er={gain:26,deadV:.15,brakeGain:1.5,cap:8};function KA(s,t,e,n){const i=n<0?1:-1,r=Er.cap;let o=Number.isFinite(s)?s*i:0;if(o=Math.max(-r,Math.min(r,o)),!Number.isFinite(t)||t===0)return o*i;const a=Number.isFinite(e)&&e>0?e:0;let c=Math.max(0,Math.abs(t)-Er.deadV*a);if(c<=0)return o*i;const l=t>0?1:-1;if(o*l<0){const h=Er.gain*Er.brakeGain,u=Math.abs(o)/h;if(c<=u)return(o+l*h*c)*i;c-=u,o=0}return o=Math.max(-r,Math.min(r,o+l*Er.gain*c)),o*i}const Qm=900,t0=3,YA=Qm*.96*(1+t0);function jA(s,t){return!Number.isFinite(s)||!Number.isFinite(t)?0:B(.05,1,Math.abs(s))*kt((t-1)/6,0,1)}function $A(s,t,e){return!Number.isFinite(s)||!Number.isFinite(t)||!(t>0)?0:Qm*Math.max(0,Math.abs(Math.sin(s))-.04)*Math.min(1,t/8)*(1+t0*kt(Number.isFinite(e)?e:0,0,1))}function ZA(s){return Math.round(230*Math.sqrt(kt(Number.isFinite(s)?s:0,0,1)))}const ol=1/120,mp=.1,gp=24,JA=document.getElementById("app")??document.body,an=new Ay({antialias:!0,powerPreference:"high-performance"});an.setPixelRatio(Math.min(window.devicePixelRatio||1,2));an.setSize(window.innerWidth,window.innerHeight,!1);an.outputColorSpace=Fe;an.toneMapping=Rp;an.toneMappingExposure=1;JA.appendChild(an.domElement);const Yn=new wy,QA=vA(Yn),_p=RA(Yn,an),$i={x:0,y:0,z:0},tw=new URLSearchParams(location.search),xp=NaN,ew=Number.isFinite(xp)?xp:Date.now()&65535|1,me=new eh(ew),Oi=new _A(me);Yn.add(Oi.group);const Ke=new Xb(window.innerWidth/window.innerHeight),Hi=new FE(document.body);Hi.toggle(new URLSearchParams(location.search).has("debug"));function Yr(){return me.breakS+8}function za(){const s=window.innerWidth,t=window.innerHeight;!(s>0)||!(t>0)||(an.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),an.setSize(s,t,!1),Ke.setAspect(s/t),Hi.resize())}window.addEventListener("resize",za);var Ep;(Ep=window.visualViewport)==null||Ep.addEventListener("resize",za);window.addEventListener("orientationchange",()=>[100,300,700].forEach(s=>setTimeout(za,s)));za();window.addEventListener("keydown",s=>{(s.key==="d"||s.key==="D")&&Hi.toggle()});const rt=new Sa(me);rt.tubeMode=new URLSearchParams(location.search).get("tube")==="lock"?"lock":"free";rt.boostMode=new URLSearchParams(location.search).get("boost")==="0"?"off":"on";rt.airMode=new URLSearchParams(location.search).get("air")==="0"?"off":"on";rt.airLaunch="lift";new URLSearchParams(location.search).get("pump")==="impulse"&&(rt.pumpModel="impulse",Object.assign(Os,{base:5,hollowGain:4}));const Xs=document.createElement("div");Xs.style.cssText="position:fixed;left:0;right:0;top:38%;text-align:center;pointer-events:none;z-index:5;font:800 clamp(28px,7vw,64px)/1.1 system-ui,-apple-system,sans-serif;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.55);letter-spacing:.02em;padding:0 16px;display:none;";document.body.appendChild(Xs);function nw(s,t="#fff"){Xs.textContent=s,Xs.style.color=t,Xs.style.display="block"}function iw(){Xs.style.display="none"}const Ee=document.createElement("div");Ee.style.cssText="position:fixed;left:0;right:0;top:14%;text-align:center;pointer-events:none;z-index:5;font:700 clamp(18px,4.2vw,34px)/1.1 system-ui,-apple-system,sans-serif;color:#e8fbff;text-shadow:0 2px 10px rgba(0,0,0,.6);display:none;";document.body.appendChild(Ee);let qs=0;const sw={dist:0,size:0};let e0=0;const rw={"ran ahead":"Ran ahead of the barrel","lip landed":"The lip landed on you"};let Ns=9,n0=0;function ow(s,t,e,n){Be(`land ${s?"MADE":"fell"} q ${n.toFixed(2)} flat ${t.toFixed(2)}`),Ns=0,n0=e}function aw(s,t){Be(`trick ${s}`),Ee.textContent=`${s}!`,Ee.style.color="#ffe27d",Ee.style.display="block",Ee.style.transition="none",Ee.style.transform="scale(1.35)",Ee.offsetWidth,Ee.style.transition="transform 0.25s ease-out",Ee.style.transform="scale(1)",qs=1.6,qA(t,navigator)}function cw(s){if(Ns>1)return 0;Ns+=s;const t=Ns<.05?Ns/.05:Math.exp(-(Ns-.05)/.15);return-.35*n0*t}function lw(s){if(rt.riding&&rt.inTube){const t=nS(me,rt.s,rt.t,sw);Ee.textContent=`TUBE ${rt.tubeTime.toFixed(1)} s`,e0=t.dist,Ee.style.color="#e8fbff",Ee.style.display="block"}else qs>0?(qs-=s,qs<=0&&(Ee.style.display="none")):Ee.style.display="none"}const Re=new oT;Re.group.scale.setScalar(Mm);Yn.add(Re.group);let Fn=new Jm(Re);Yn.add(Fn.reflection,Fn.ghost);tw.get("rig")!=="capsule"&&XT().then(s=>{Re.setModel(s),Yn.remove(Fn.reflection,Fn.ghost),Fn=new Jm(Re),Yn.add(Fn.reflection,Fn.ghost)}).catch(s=>console.warn("surfer model not loaded, keeping the capsule rig:",s));const Zi={deep:[0,0,0],face:[0,0,0],lip:[0,0,0],foam:[0,0,0]},ui=new ym(Math.ceil(YA*1.1)+460);Yn.add(ui.points);const Aa=new ym(2200);{const s=Aa.points.material;s.size=.2;const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");if(e){const n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.5,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,32),s.map=new Da(t)}}Yn.add(Aa.points);function hw(s){if(me.peeling&&me.barrelShape(me.breakS-4)>.5){const t=me.breakS;for(let e=-8;e<=3.5;e+=.35){const n=t+e,i=me.barrelShape(n),r=me.amp(n),o=i>.05?wm(me,n,Math.max(r,.001)):me.faceWidth(n),a=e>1.5?.5:0,c=Math.max(i,a);c<=.05||rt.inTube&&Math.abs(n-rt.s)<2.2||Aa.emit(-n,.2,o,0,.9+.15*r,.6,22*c,s,.5)}}Aa.update(s)}const ze=new NE(an.domElement,()=>rt.hb,{mode:UE(),thumbTurnCm:BE()});zE(ze);const Bs={grip:!1,targetHeading:null,stall:0,drive:0},ma=[],i0=new GA(an.domElement,()=>me.seed);function Be(s){i0.event(s),ma.unshift(`${wa.toFixed(1)} ${s}`),ma.length>4&&(ma.length=4)}const vp=.6;let al=!1;function uw(s){rt.airborne||(al=!1),ze.update(s);for(const e of ze.drain())e.type==="debug"?Hi.toggle():e.type==="tap"?(Be(`tap ${e.x.toFixed(0)},${e.y.toFixed(0)}`),pw(e.x,e.y)):e.type==="grip"?Be("grip"):e.type==="spin"?rt.riding&&rt.airborne&&rt.airLaunch!=="lift"&&(rt.setAirSpin(e.spin*vp),al=!0):e.type==="ollie"&&rt.riding&&rt.airborne&&!al&&rt.airLaunch!=="lift"&&(rt.setAirSpin(e.spin*vp),Be(`spin ${e.spin.toFixed(1)}`));const t=ze.takePush();rt.riding&&rt.airborne&&rt.airLaunch==="lift"&&t!==0&&rt.setAirSpin(KA(rt.airSpin,t,s,rt.airTravel)),Bs.grip=ze.grip,Bs.targetHeading=ze.targetHeading,Bs.stall=ze.stall,Bs.drive=ze.drive}let ea=0,uh=performance.now(),wa=0;const kn=new XA(me,rt),fw=.6;let Mp=kn.state,Jh=0;const yp=new Wb,bp=new gt;function dw(s,t){const e=an.domElement.getBoundingClientRect();if(!(e.width>0)||!(e.height>0))return null;bp.set((s-e.left)/e.width*2-1,-((t-e.top)/e.height*2-1)),yp.setFromCamera(bp,Ke.camera),Oi.surface.geometry.computeBoundingSphere();const n=yp.intersectObject(Oi.surface,!1)[0];return n?-n.point.x:null}function pw(s,t){if(kn.state==="ended"){Jh>=fw&&kn.tap(null);return}const e=dw(s,t);Be(`tap s ${e===null?"miss":e.toFixed(1)}`),kn.tap(e)}const jr=document.createElement("div");jr.style.cssText="position:fixed;inset:0;z-index:6;display:none;align-items:flex-end;justify-content:center;background:rgba(8,20,30,.25);font-family:system-ui,-apple-system,sans-serif;color:#fff;text-align:center;pointer-events:none;padding:12px 12px 6vh;";const Qh=document.createElement("div");Qh.style.cssText="background:rgba(10,30,45,.82);border-radius:18px;padding:clamp(10px,3vh,24px) clamp(20px,6vw,56px);text-shadow:0 2px 10px rgba(0,0,0,.4);";const tu=document.createElement("div");tu.style.cssText="font-weight:800;font-size:clamp(24px,6vw,52px);line-height:1.15;";const eu=document.createElement("div");eu.style.cssText="font-weight:600;font-size:clamp(18px,4.5vw,36px);margin-top:6px;opacity:.95;";const nu=document.createElement("div");nu.style.cssText="font-weight:600;font-size:clamp(16px,3.6vw,28px);margin-top:14px;color:#bfe6ff;";nu.textContent="Tap for the next wave";Qh.append(tu,eu,nu);jr.appendChild(Qh);document.body.appendChild(jr);const Va=document.createElement("div");Va.style.cssText="position:fixed;left:0;right:0;bottom:12%;text-align:center;pointer-events:none;z-index:5;display:none;font:700 clamp(18px,4vw,32px)/1.2 system-ui,-apple-system,sans-serif;color:#fff;opacity:.9;text-shadow:0 2px 10px rgba(0,0,0,.55);padding:0 16px;";Va.textContent="Tap the wave to catch it";document.body.appendChild(Va);function mw(){const s=kn.state;if(s!==Mp){if(s==="popup")ze.rebase(rt.hb),Re.reset(),Be("spawn");else if(s==="ended"){const t=kn.summary;Jh=0,Be(`end: ${t.reason} ${t.seconds.toFixed(1)}s`),nw(t.reason,t.rode?t.reason==="Wave made"?"#bff7c8":"#ffd2c2":"#ffe9a8"),tu.textContent=t.rode?`You rode ${t.seconds.toFixed(1)} s`:"No ride",eu.textContent=`Ended: ${t.reason}`,jr.style.display="flex"}else s==="lineup"&&(jr.style.display="none",iw(),ui.clear(),Ke.snap(Yr(),me.amp(Yr())));Mp=s}}function gw(s){wa+=s,kn.step(s,Bs),kn.state==="ended"&&(Jh+=s),mw()}kn.onPhysEvent=s=>{s.type==="pump"?Be(`pump +${s.dv.toFixed(2)}`):s.type==="wipe"?Be(`WIPE: ${s.reason}`):s.type==="kickout"?Be(`kickout: ${s.reason}`):s.type==="tubeEnter"?Be("tube in"):s.type==="tubeMiss"?(Be(`tube miss: ${s.reason}`),Ee.textContent=rw[s.reason],Ee.style.color="#ffd27d",Ee.style.display="block",qs=1.8):s.type==="spit"?(Be("spit"),iu=!0):s.type==="launch"?Be(`AIR v ${s.v.toFixed(1)}`):s.type==="land"?(ze.rebase(rt.hb),ow(s.made,s.flat,s.camHit,s.quality)):s.type==="trick"?aw(s.name,s.haptic):(Be(`tube out ${s.duration.toFixed(1)}s ${s.made?"MADE":""}`),s.made&&(Ee.textContent=`MADE IT! ${s.duration.toFixed(1)} s`,Ee.style.color="#7dffb2",Ee.style.display="block",qs=1.8))};let iu=!1;const Is=new P;function _w(){iu=!1,rt.state!=="idle"&&(Is.copy(Re.group.position),Is.x-=.8,Is.y+=.8,ui.burst(Is.x,Is.y,Is.z,-14,2.5,2,220,3.5))}const Gn=new P;let Sp=!1,Tp=0;function xw(s){if(rt.riding&&!rt.airborne){const t=Math.abs(Math.sin(rt.skid)),e=jA(rt.skid,rt.v),n=$A(rt.skid,rt.v,e);Re.tailWorld(Gn);const i=rt.skid>0?-1:1,r=3+4*t+4*e,o=3.2+2.5*e,a=Re.by,c=Re.bz,l=-Math.cos(rt.hv)*rt.v*.25,h=c.x*i*r+a.x*o+l,u=c.y*i*r+a.y*o,f=c.z*i*r+a.z*o;ui.emit(Gn.x,Gn.y,Gn.z,h,u,f,n,s,1.2+1.3*e);const d=rt.t<.25&&Math.abs(rt.skid)>.4;rt.boostCount>Tp&&(ui.burst(Gn.x,Gn.y,Gn.z,h*.8,u*.8+1.2,f*.8,45,1.4),Be(`boost ${rt.boostKind}`)),Tp=rt.boostCount,d&&!Sp&&ui.burst(Gn.x,Gn.y,Gn.z,h*1.2,u*1.4+1.5,f*1.2,ZA(e),1.8+1.5*e),Sp=d}ui.update(s),hw(s)}const Ar=s=>(s*180/Math.PI).toFixed(0),s0=s=>requestAnimationFrame(s);function r0(s){let t=(s-uh)/1e3;uh=s,t>mp&&(t=mp),t<0&&(t=0),uw(t);const e=t*(rt.riding?rt.timeScale:1);ea+=e;let n=0;for(;ea>=ol&&n<gp;)gw(ol),ea-=ol,n++;if(n>=gp&&(ea=0),Re.update(rt,me,e),iu&&_w(),xw(e),lw(t),rt.state!=="idle"){const r=rt.riding?rt.face.y:Math.max(0,Re.group.position.y),o=rt.riding?rt.face.u:Re.group.position.z,a=rt.riding?rt.s:-Re.group.position.x;Ke.setTube(rt.riding&&rt.inTube),Ke.update(a,me.amp(a),e,r,o,Math.cos(rt.hv)>=0?1:-1),Ke.camera.position.y+=cw(t)}else{const r=Yr();Ke.update(r,me.amp(r),t)}rt.riding&&rt.inTube?Oi.setRider({s:rt.s,u:rt.face.u,deep:-rt.d/(1.5+5*me.hollow(rt.s))}):Oi.setRider(null),LA(_p.state.phase,Zi),Oi.setWaterTint(Zi),Fn.setWater(Zi.face),Fn.setGhostWater(Zi.face,Zi.lip,Zi.foam),Oi.update(Ke.focusS,wa),Fn.update(me,rt,Ke.camera,wa,t),Re.group.visible?($i.x=Re.group.position.x,$i.y=Re.group.position.y,$i.z=Re.group.position.z):($i.x=Ke.camera.position.x,$i.y=0,$i.z=Ke.camera.position.z-20),_p.update(t,$i),QA.update(Ke.camera.position.x,Zi.deep),an.render(Yn,Ke.camera),i0.sample({state:rt.state,s:rt.s,t:rt.t,v:rt.v,hb:rt.hb,hv:rt.hv,d:rt.d,skid:rt.skid});const i=rt.state==="idle"?"waiting for the peel":rt.state;Va.style.display=kn.takeoffWindow()?"block":"none",Hi.setLines([`wave #${kn.waveCount} seed ${me.seed}  ${me.peeling?`breakS ${me.breakS.toFixed(1)} peel ${me.peelSpeed(me.breakS).toFixed(1)} m/s`:`lineup ${me.arrival.toFixed(2)}`}`,`${i}  v ${rt.v.toFixed(1)} m/s  t ${rt.t.toFixed(2)}  d ${rt.d.toFixed(1)} m  sinA ${rt.face.sinA.toFixed(2)}${rt.inTube?`  TUBE mouth ${e0.toFixed(1)} m`:""}`,`hb ${Ar(rt.hb)}°  hv ${Ar(rt.hv)}°  skid ${rt.skid.toFixed(2)}  turn ${rt.turnRate.toFixed(1)}/${rt.carveRate.toFixed(1)}  stall ${rt.stall.toFixed(2)}  drive ${rt.drive.toFixed(2)}  lean ${Ar(rt.lean)}°  load ${rt.load.toFixed(2)} w ${rt.weight.toFixed(2)}  [${rt.pumpModel}]`,`air ${rt.airMode}${rt.airborne?`  AIRBORNE t ${rt.airT.toFixed(2)}/${rt.airDur.toFixed(2)} h ${rt.airHeight.toFixed(2)} yaw ${Ar(rt.airYaw)}° spin ${rt.airSpin.toFixed(1)} ts ${rt.timeScale.toFixed(2)}`:""}  last land q ${rt.landQuality.toFixed(2)} flat ${rt.landFlat.toFixed(2)}`,`grip ${ze.grip?"Y":"n"}  target ${ze.targetHeading===null?"- (trim)":Ar(ze.targetHeading)+"°"}  spray ${ui.count}`,`events: ${ma.join(" | ")}`,"keys: Space grip  Up/Down rotate  Shift stall  F drive  D debug   (fingers: slide both forward = drive, back = stall)"]),Hi.setShapes({fingers:ze.pointers,target:ze.targetHeading,board:rt.hb}),Hi.frame(t),s0(r0)}Ke.snap(Yr(),me.amp(Yr()));s0(s=>{uh=s,r0(s)});window.__surf={wave:me,cam:Ke,debug:Hi,renderer:an,input:ze,phys:rt,rig:Re,spray:ui,ctl:Bs,waveMesh:Oi,get riderLook(){return Fn}};
