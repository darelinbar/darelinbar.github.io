var wf=Object.defineProperty;var Rf=(i,t,e)=>t in i?wf(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var T=(i,t,e)=>Rf(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gl="170",Cf=0,sc=1,Pf=2,uu=1,fu=2,Pn=3,ri=0,Ie=1,Ue=2,ti=0,Zi=1,rc=2,oc=3,ac=4,Lf=5,xi=100,Df=101,Uf=102,If=103,Nf=104,Ff=200,Of=201,Bf=202,kf=203,ma=204,ga=205,zf=206,Hf=207,Gf=208,Vf=209,Wf=210,Xf=211,qf=212,Yf=213,Kf=214,_a=0,va=1,xa=2,ns=3,Ma=4,Sa=5,ya=6,ba=7,_l=0,$f=1,Zf=2,ei=0,Jf=1,jf=2,Qf=3,du=4,td=5,ed=6,nd=7,pu=300,is=301,ss=302,Ea=303,Ta=304,Qr=306,Vr=1e3,yi=1001,Aa=1002,dn=1003,id=1004,qs=1005,un=1006,uo=1007,jn=1008,Nn=1009,mu=1010,gu=1011,Ds=1012,vl=1013,Ei=1014,Dn=1015,ks=1016,xl=1017,Ml=1018,rs=1020,_u=35902,vu=1021,xu=1022,fn=1023,Mu=1024,Su=1025,Ji=1026,os=1027,yu=1028,Sl=1029,bu=1030,yl=1031,bl=1033,Dr=33776,Ur=33777,Ir=33778,Nr=33779,wa=35840,Ra=35841,Ca=35842,Pa=35843,La=36196,Da=37492,Ua=37496,Ia=37808,Na=37809,Fa=37810,Oa=37811,Ba=37812,ka=37813,za=37814,Ha=37815,Ga=37816,Va=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,Fr=36492,Ka=36494,$a=36495,Eu=36283,Za=36284,Ja=36285,ja=36286,sd=3200,rd=3201,El=0,od=1,Zn="",Ye="srgb",hs="srgb-linear",to="linear",oe="srgb",Pi=7680,lc=519,ad=512,ld=513,cd=514,Tu=515,hd=516,ud=517,fd=518,dd=519,cc=35044,me=35048,hc="300 es",Un=2e3,Wr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,Qa=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function pd(i,t){return(i%t+t)%t}function po(i,t,e){return(1-e)*i+e*t}function gs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class mt{constructor(t=0,e=0){mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=s[0],m=s[3],p=s[6],y=s[1],S=s[4],_=s[7],D=s[2],w=s[5],P=s[8];return r[0]=o*v+a*y+l*D,r[3]=o*m+a*S+l*w,r[6]=o*p+a*_+l*P,r[1]=c*v+h*y+u*D,r[4]=c*m+h*S+u*w,r[7]=c*p+h*_+u*P,r[2]=f*v+d*y+g*D,r[5]=f*m+d*S+g*w,r[8]=f*p+d*_+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mo.makeScale(t,e)),this}rotate(t){return this.premultiply(mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mo=new Yt;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function md(){const i=Xr("canvas");return i.style.display="block",i}const uc={};function bs(i){i in uc||(uc[i]=!0,console.warn(i))}function gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function _d(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===oe&&(i.r=In(i.r),i.g=In(i.g),i.b=In(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===oe&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zn?to:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const fc=[.64,.33,.3,.6,.15,.06],dc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[hs]:{primaries:fc,whitePoint:pc,transfer:to,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:dc,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:fc,whitePoint:pc,transfer:oe,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:dc,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});let Li;class xd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Xr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(In(e[n]/255)*255):e[n]=In(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Md=0;class wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(go(s[o].image)):r.push(go(s[o]))}else r=go(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sd=0;class Ne extends us{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=yi,s=yi,r=un,o=jn,a=fn,l=Nn,c=Ne.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=fs(),this.name="",this.source=new wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case Aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case Aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=pu;Ne.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(d+1)/2,D=(p+1)/2,w=(h+f)/4,P=(u+v)/4,L=(g+m)/4;return S>_&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=P/n):_>D?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=L/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=P/r,s=L/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends us{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends yd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ru extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends Ne{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*v,y=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),w=Math.atan2(D,p*y);m=Math.sin(m*w)/D,a=Math.sin(a*w)/D}const _=a*y;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+v*_,m===1-a){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new U,_c=new ni;class zs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Ks.subVectors(this.max,_s),Di.subVectors(t.a,_s),Ui.subVectors(t.b,_s),Ii.subVectors(t.c,_s),kn.subVectors(Ui,Di),zn.subVectors(Ii,Ui),li.subVectors(Di,Ii);let e=[0,-kn.z,kn.y,0,-zn.z,zn.y,0,-li.z,li.y,kn.z,0,-kn.x,zn.z,0,-zn.x,li.z,0,-li.x,-kn.y,kn.x,0,-zn.y,zn.x,0,-li.y,li.x,0];return!vo(e,Di,Ui,Ii,Ks)||(e=[1,0,0,0,1,0,0,0,1],!vo(e,Di,Ui,Ii,Ks))?!1:($s.crossVectors(kn,zn),e=[$s.x,$s.y,$s.z],vo(e,Di,Ui,Ii,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new U,new U,new U,new U,new U,new U,new U,new U],sn=new U,Ys=new zs,Di=new U,Ui=new U,Ii=new U,kn=new U,zn=new U,li=new U,_s=new U,Ks=new U,$s=new U,ci=new U;function vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=t.dot(ci),c=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ed=new zs,vs=new U,xo=new U;class eo{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ed.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(xo)),this.expandByPoint(vs.copy(t.center).sub(xo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new U,Mo=new U,Zs=new U,Hn=new U,So=new U,Js=new U,yo=new U;class Tl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Mo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Mo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),a=Hn.dot(this.direction),l=-Hn.dot(Zs),c=Hn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mo).addScaledVector(Zs,f),d}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){So.subVectors(e,t),Js.subVectors(n,t),yo.crossVectors(So,Js);let o=this.direction.dot(yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);const l=a*this.direction.dot(Js.crossVectors(Hn,Js));if(l<0)return null;const c=a*this.direction.dot(So.cross(Hn));if(c<0||l+c>o)return null;const h=-a*Hn.dot(yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Ad)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Gn.crossVectors(n,We),Gn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Gn.crossVectors(n,We)),Gn.normalize(),js.crossVectors(We,Gn),s[0]=Gn.x,s[4]=js.x,s[8]=We.x,s[1]=Gn.y,s[5]=js.y,s[9]=We.y,s[2]=Gn.z,s[6]=js.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],S=n[7],_=n[11],D=n[15],w=s[0],P=s[4],L=s[8],b=s[12],x=s[1],C=s[5],k=s[9],I=s[13],H=s[2],q=s[6],K=s[10],j=s[14],z=s[3],ot=s[7],ct=s[11],gt=s[15];return r[0]=o*w+a*x+l*H+c*z,r[4]=o*P+a*C+l*q+c*ot,r[8]=o*L+a*k+l*K+c*ct,r[12]=o*b+a*I+l*j+c*gt,r[1]=h*w+u*x+f*H+d*z,r[5]=h*P+u*C+f*q+d*ot,r[9]=h*L+u*k+f*K+d*ct,r[13]=h*b+u*I+f*j+d*gt,r[2]=g*w+v*x+m*H+p*z,r[6]=g*P+v*C+m*q+p*ot,r[10]=g*L+v*k+m*K+p*ct,r[14]=g*b+v*I+m*j+p*gt,r[3]=y*w+S*x+_*H+D*z,r[7]=y*P+S*C+_*q+D*ot,r[11]=y*L+S*k+_*K+D*ct,r[15]=y*b+S*I+_*j+D*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+v*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],y=u*m*c-v*f*c+v*l*d-a*m*d-u*l*p+a*f*p,S=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,_=h*v*c-g*u*c+g*a*d-o*v*d-h*a*p+o*u*p,D=g*u*l-h*v*l-g*a*f+o*v*f+h*a*m-o*u*m,w=e*y+n*S+s*_+r*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/w;return t[0]=y*P,t[1]=(v*f*r-u*m*r-v*s*d+n*m*d+u*s*p-n*f*p)*P,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*P,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*P,t[4]=S*P,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*P,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*P,t[8]=_*P,t[9]=(g*u*r-h*v*r-g*n*d+e*v*d+h*n*p-e*u*p)*P,t[10]=(o*v*r-g*a*r+g*n*c-e*v*c-o*n*p+e*a*p)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*P,t[12]=D*P,t[13]=(h*v*s-g*u*s+g*n*f-e*v*f-h*n*m+e*u*m)*P,t[14]=(g*a*s-o*v*s-g*n*l+e*v*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,y=l*c,S=l*h,_=l*u,D=n.x,w=n.y,P=n.z;return s[0]=(1-(v+p))*D,s[1]=(d+_)*D,s[2]=(g-S)*D,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+p))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(g+S)*P,s[9]=(m-y)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,h=1/o,u=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Un){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Un)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Wr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let g,v;if(a===Un)g=(o+r)*u,v=-2*u;else if(a===Wr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new U,rn=new le,Td=new U(0,0,0),Ad=new U(1,1,1),Gn=new U,js=new U,We=new U,vc=new le,xc=new ni;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xc.setFromEuler(this),this.setFromQuaternion(xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Al{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let wd=0;const Mc=new U,Fi=new ni,An=new le,Qs=new U,xs=new U,Rd=new U,Cd=new ni,Sc=new U(1,0,0),yc=new U(0,1,0),bc=new U(0,0,1),Ec={type:"added"},Pd={type:"removed"},Oi={type:"childadded",child:null},bo={type:"childremoved",child:null};class be extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=be.DEFAULT_UP.clone();const t=new U,e=new mn,n=new ni,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Yt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(bc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(xs,Qs,this.up):An.lookAt(Qs,xs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(An),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pd),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Rd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Cd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}be.DEFAULT_UP=new U(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new U,wn=new U,Eo=new U,Rn=new U,Bi=new U,ki=new U,Tc=new U,To=new U,Ao=new U,wo=new U,Ro=new ge,Co=new ge,Po=new ge;class hn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),wn.subVectors(n,e),Eo.subVectors(t,e);const o=on.dot(on),a=on.dot(wn),l=on.dot(Eo),c=wn.dot(wn),h=wn.dot(Eo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,n),Po.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ro,r.x),o.addScaledVector(Co,r.y),o.addScaledVector(Po,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),wn.subVectors(t,e),on.cross(wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),on.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,n),ki.subVectors(r,n),To.subVectors(t,n);const l=Bi.dot(To),c=ki.dot(To);if(l<=0&&c<=0)return e.copy(n);Ao.subVectors(t,s);const h=Bi.dot(Ao),u=ki.dot(Ao);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Bi,o);wo.subVectors(t,r);const d=Bi.dot(wo),g=ki.dot(wo);if(g>=0&&d<=g)return e.copy(r);const v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ki,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Tc.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Tc,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Bi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Lo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=pd(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Lo(o,r,t+1/3),this.g=Lo(o,r,t),this.b=Lo(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=In(t.r),this.g=In(t.g),this.b=In(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return jt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ae(Ce.r*255,0,255))*65536+Math.round(Ae(Ce.g*255,0,255))*256+Math.round(Ae(Ce.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,s=Ce.g,r=Ce.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ye){jt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,s=Ce.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(tr);const n=po(Vn.h,tr.h,e),s=po(Vn.s,tr.s,e),r=po(Vn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Ht;Ht.NAMES=Cu;let Ld=0;class Ri extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=fs(),this.name="",this.blending=Zi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class as extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new U,er=new mt;class Zt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cc&&(t.usage=this.usage),t}}class Pu extends Zt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lu extends Zt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ee extends Zt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dd=0;const Je=new le,Do=new be,zi=new U,Xe=new zs,Ms=new zs,ye=new U;class _e extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?Lu:Pu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Xe.min,Ms.min),Xe.expandByPoint(ye),ye.addVectors(Xe.max,Ms.max),Xe.expandByPoint(ye)):(Xe.expandByPoint(Ms.min),Xe.expandByPoint(Ms.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(zi.fromBufferAttribute(t,c),ye.add(zi)),s=Math.max(s,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new U,l[L]=new U;const c=new U,h=new U,u=new U,f=new mt,d=new mt,g=new mt,v=new U,m=new U;function p(L,b,x){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[L].add(v),a[b].add(v),a[x].add(v),l[L].add(m),l[b].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,b=y.length;L<b;++L){const x=y[L],C=x.start,k=x.count;for(let I=C,H=C+k;I<H;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const S=new U,_=new U,D=new U,w=new U;function P(L){D.fromBufferAttribute(s,L),w.copy(D);const b=a[L];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),_.crossVectors(w,b);const C=_.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,C)}for(let L=0,b=y.length;L<b;++L){const x=y[L],C=x.start,k=x.count;for(let I=C,H=C+k;I<H;I+=3)P(t.getX(I+0)),P(t.getX(I+1)),P(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Zt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new le,hi=new Tl,nr=new eo,wc=new U,ir=new U,sr=new U,rr=new U,Uo=new U,or=new U,Rc=new U,ar=new U;class re extends be{constructor(t=new _e,e=new as){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Uo.fromBufferAttribute(u,t),o?or.addScaledVector(Uo,h):or.addScaledVector(Uo.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(nr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(nr,wc)===null||hi.origin.distanceToSquared(wc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,D=S;_<D;_+=3){const w=a.getX(_),P=a.getX(_+1),L=a.getX(_+2);s=lr(this,p,t,n,c,h,u,w,P,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=a.getX(m),S=a.getX(m+1),_=a.getX(m+2);s=lr(this,o,t,n,c,h,u,y,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],y=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,D=S;_<D;_+=3){const w=_,P=_+1,L=_+2;s=lr(this,p,t,n,c,h,u,w,P,L),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,S=m+1,_=m+2;s=lr(this,o,t,n,c,h,u,y,S,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ud(i,t,e,n,s,r,o,a){let l;if(t.side===Ie?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ri,a),l===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ar);return c<e.near||c>e.far?null:{distance:c,point:ar.clone(),object:i}}function lr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ir),i.getVertexPosition(l,sr),i.getVertexPosition(c,rr);const h=Ud(i,t,e,n,ir,sr,rr,Rc);if(h){const u=new U;hn.getBarycoord(Rc,ir,sr,rr,u),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new mt)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};hn.getNormal(ir,sr,rr,f.normal),h.face=f,h.barycoord=u}return h}class Ai extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2));function g(v,m,p,y,S,_,D,w,P,L,b){const x=_/P,C=D/L,k=_/2,I=D/2,H=w/2,q=P+1,K=L+1;let j=0,z=0;const ot=new U;for(let ct=0;ct<K;ct++){const gt=ct*C-I;for(let Ct=0;Ct<q;Ct++){const Lt=Ct*x-k;ot[v]=Lt*y,ot[m]=gt*S,ot[p]=H,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[m]=0,ot[p]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ct/P),u.push(1-ct/L),j+=1}}for(let ct=0;ct<L;ct++)for(let gt=0;gt<P;gt++){const Ct=f+gt+q*ct,Lt=f+gt+q*(ct+1),X=f+(gt+1)+q*(ct+1),st=f+(gt+1)+q*ct;l.push(Ct,Lt,st),l.push(Lt,X,st),z+=6}a.addGroup(d,z,b),d+=z,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Id(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Du(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Nd={clone:ls,merge:De};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Od=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Od,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uu extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new U,Cc=new mt,Pc=new mt;class tn extends Uu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Bd extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new tn(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new tn(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new tn(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const l=new tn(Hi,Gi,t,e);l.layers=this.layers,this.add(l);const c=new tn(Hi,Gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Iu extends Ne{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kd extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Iu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:ti});r.uniforms.tEquirect.value=e;const o=new re(s,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=un),new Bd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Io=new U,zd=new U,Hd=new Yt;class _i{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Io.subVectors(n,e).cross(zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Io),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hd.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new eo,cr=new U;class wl{constructor(t=new _i,e=new _i,n=new _i,s=new _i,r=new _i,o=new _i){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],v=s[10],m=s[11],p=s[12],y=s[13],S=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+o,f+h,m+g,_+y).normalize(),n[3].setComponents(l-o,f-h,m-g,_-y).normalize(),n[4].setComponents(l-a,f-u,m-v,_-S).normalize(),e===Un)n[5].setComponents(l+a,f+u,m+v,_+S).normalize();else if(e===Wr)n[5].setComponents(a,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Gd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],v=u[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const v=u[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Hs extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let S=0;S<c;S++){const _=S*u-r;g.push(_,-y,0),v.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+c*p,_=y+c*(p+1),D=y+1+c*(p+1),w=y+1+c*p;d.push(S,_,w),d.push(_,D,w)}this.setIndex(d),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
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
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
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
#endif`,Zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jd=`#ifdef USE_BATCHING
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
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fp=`#define PI 3.141592653589793
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
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pp=`vec3 transformedNormal = objectNormal;
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
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pp=`#ifdef USE_GRADIENTMAP
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
}`,Lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
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
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
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
#endif`,Hp=`struct PhysicalMaterial {
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
}`,Gp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wm=`float getShadowMask() {
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
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,$m=`#if DEPTH_PACKING == 3200
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,o0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,f0=`#define STANDARD
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
}`,d0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:Vd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:Kd,aomap_fragment:$d,aomap_pars_fragment:Zd,batching_pars_vertex:Jd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:fp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:_p,emissivemap_pars_fragment:vp,colorspace_fragment:xp,colorspace_pars_fragment:Mp,envmap_fragment:Sp,envmap_common_pars_fragment:yp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Np,envmap_vertex:Tp,fog_vertex:Ap,fog_pars_vertex:wp,fog_fragment:Rp,fog_pars_fragment:Cp,gradientmap_pars_fragment:Pp,lightmap_pars_fragment:Lp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Up,lights_pars_begin:Ip,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:kp,lights_physical_fragment:zp,lights_physical_pars_fragment:Hp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:Kp,map_fragment:$p,map_pars_fragment:Zp,map_particle_fragment:Jp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:om,normal_fragment_maps:am,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:_m,premultiplied_alpha_fragment:vm,project_vertex:xm,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:ym,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:wm,skinbase_vertex:Rm,skinning_pars_vertex:Cm,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Um,tonemapping_fragment:Im,tonemapping_pars_fragment:Nm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Hm,background_vert:Gm,background_frag:Vm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:Km,depth_frag:$m,distanceRGBA_vert:Zm,distanceRGBA_frag:Jm,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:o0,meshmatcap_frag:a0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:f0,meshphysical_frag:d0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:_0,shadow_vert:v0,shadow_frag:x0,sprite_vert:M0,sprite_frag:S0},_t={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},vn={basic:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:De([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:De([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:De([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:De([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:De([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:De([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:De([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:De([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:De([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:De([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:De([_t.lights,_t.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};vn.physical={uniforms:De([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const hr={r:0,b:0,g:0},fi=new mn,y0=new le;function b0(i,t,e,n,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function v(y){let S=!1;const _=g(y);_===null?p(a,l):_&&_.isColor&&(p(_,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===Qr)?(h===void 0&&(h=new re(new Ai(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ls(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fi.copy(S.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(y0.makeRotationFromEuler(fi)),h.material.toneMapped=jt.getTransfer(_.colorSpace)!==oe,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new re(new Hs(2,2),new Fn({name:"BackgroundMaterial",uniforms:ls(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=jt.getTransfer(_.colorSpace)!==oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,S){y.getRGB(hr,Du(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:v,addToRenderList:m}}function E0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,C,k,I,H){let q=!1;const K=u(I,k,C);r!==K&&(r=K,c(r.object)),q=d(x,I,k,H),q&&g(x,I,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(x,C,k,I),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,k){const I=k.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let q=H[C.id];q===void 0&&(q={},H[C.id]=q);let K=q[I];return K===void 0&&(K=f(l()),q[I]=K),K}function f(x){const C=[],k=[],I=[];for(let H=0;H<e;H++)C[H]=0,k[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:I,object:x,attributes:{},index:null}}function d(x,C,k,I){const H=r.attributes,q=C.attributes;let K=0;const j=k.getAttributes();for(const z in j)if(j[z].location>=0){const ct=H[z];let gt=q[z];if(gt===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),ct===void 0||ct.attribute!==gt||gt&&ct.data!==gt.data)return!0;K++}return r.attributesNum!==K||r.index!==I}function g(x,C,k,I){const H={},q=C.attributes;let K=0;const j=k.getAttributes();for(const z in j)if(j[z].location>=0){let ct=q[z];ct===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor));const gt={};gt.attribute=ct,ct&&ct.data&&(gt.data=ct.data),H[z]=gt,K++}r.attributes=H,r.attributesNum=K,r.index=I}function v(){const x=r.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const k=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;k[x]=1,I[x]===0&&(i.enableVertexAttribArray(x),I[x]=1),H[x]!==C&&(i.vertexAttribDivisor(x,C),H[x]=C)}function y(){const x=r.newAttributes,C=r.enabledAttributes;for(let k=0,I=C.length;k<I;k++)C[k]!==x[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function S(x,C,k,I,H,q,K){K===!0?i.vertexAttribIPointer(x,C,k,H,q):i.vertexAttribPointer(x,C,k,I,H,q)}function _(x,C,k,I){v();const H=I.attributes,q=k.getAttributes(),K=C.defaultAttributeValues;for(const j in q){const z=q[j];if(z.location>=0){let ot=H[j];if(ot===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(ot=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(ot=x.instanceColor)),ot!==void 0){const ct=ot.normalized,gt=ot.itemSize,Ct=t.get(ot);if(Ct===void 0)continue;const Lt=Ct.buffer,X=Ct.type,st=Ct.bytesPerElement,Tt=X===i.INT||X===i.UNSIGNED_INT||ot.gpuType===vl;if(ot.isInterleavedBufferAttribute){const et=ot.data,At=et.stride,Ot=ot.offset;if(et.isInstancedInterleavedBuffer){for(let Bt=0;Bt<z.locationSize;Bt++)p(z.location+Bt,et.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Bt=0;Bt<z.locationSize;Bt++)m(z.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Bt=0;Bt<z.locationSize;Bt++)S(z.location+Bt,gt/z.locationSize,X,ct,At*st,(Ot+gt/z.locationSize*Bt)*st,Tt)}else{if(ot.isInstancedBufferAttribute){for(let et=0;et<z.locationSize;et++)p(z.location+et,ot.meshPerAttribute);x.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let et=0;et<z.locationSize;et++)m(z.location+et);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let et=0;et<z.locationSize;et++)S(z.location+et,gt/z.locationSize,X,ct,gt*st,gt/z.locationSize*et*st,Tt)}}else if(K!==void 0){const ct=K[j];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(z.location,ct);break;case 3:i.vertexAttrib3fv(z.location,ct);break;case 4:i.vertexAttrib4fv(z.location,ct);break;default:i.vertexAttrib1fv(z.location,ct)}}}}y()}function D(){L();for(const x in n){const C=n[x];for(const k in C){const I=C[k];for(const H in I)h(I[H].object),delete I[H];delete C[k]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const I=C[k];for(const H in I)h(I[H].object),delete I[H];delete C[k]}delete n[x.id]}function P(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const I=k[x.id];for(const H in I)h(I[H].object),delete I[H];delete k[x.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function T0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*f[v];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function A0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==fn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const L=P===ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Nn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Dn&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:D,maxSamples:w}}function w0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new _i,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,S=y*4;let _=p.clippingState||null;l.value=_,_=h(g,f,S,d);for(let D=0;D!==S;++D)_[D]=e[D];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,_=d;S!==v;++S,_+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function R0(i){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=is:a===Ta&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===Ta)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new kd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fu extends Uu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,Lc=[.125,.215,.35,.446,.526,.582],Mi=20,No=new Fu,Dc=new Ht;let Fo=null,Oo=0,Bo=0,ko=!1;const vi=(1+Math.sqrt(5))/2,Vi=1/vi,Uc=[new U(-vi,Vi,0),new U(vi,Vi,0),new U(-Vi,0,vi),new U(Vi,0,vi),new U(0,vi,-Vi),new U(0,vi,Vi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Ic{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fo,Oo,Bo),this._renderer.xr.enabled=ko,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fo=this._renderer.getRenderTarget(),Oo=this._renderer.getActiveCubeFace(),Bo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ks,format:fn,colorSpace:hs,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=P0(r,t,e)}return s}_compileMaterial(t){const e=new re(this._lodPlanes[0],t);this._renderer.compile(e,No)}_sceneToCubeUV(t,e,n,s){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Dc),h.toneMapping=ei,h.autoClear=!1;const d=new as({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new re(new Ai,d);let v=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,v=!0):(d.color.copy(Dc),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;ur(s,y*S,p>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,No)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new re(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Mi;m>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let y=0;for(let P=0;P<Mi;++P){const L=P/v,b=Math.exp(-L*L/2);p.push(b),P===0?y+=b:P<m&&(y+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const _=this._sizeLods[s],D=3*_*(s>S-qi?s-S+qi:0),w=4*(this._cubeSize-_);ur(e,D,w,3*_,2*_),l.setRenderTarget(e),l.render(u,No)}}function C0(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-qi?l=Lc[o-i+qi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),S=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){const P=w%3*2/3-1,L=w>2?0:-1,b=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];y.set(b,v*g*w),S.set(f,m*g*w);const x=[w,w,w,w,w,w];_.set(x,p*g*w)}const D=new _e;D.setAttribute("position",new Zt(y,v)),D.setAttribute("uv",new Zt(S,m)),D.setAttribute("faceIndex",new Zt(_,p)),t.push(D),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new Ti(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function P0(i,t,e){const n=new Float32Array(Mi),s=new U(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function L0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===Ta,h=l===is||l===ss;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Ic(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Ic(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function D0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function U0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let S=0,_=y.length;S<_;S+=3){const D=y[S+0],w=y[S+1],P=y[S+2];f.push(D,w,w,P,P,D)}}else if(g!==void 0){const y=g.array;v=g.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const D=S+0,w=S+1,P=S+2;f.push(D,w,w,P,P,D)}}else return;const m=new(Au(f)?Lu:Pu)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function I0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*v[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function F0(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let D=a.attributes.position.count*_,w=1;D>t.maxTextureSize&&(w=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const P=new Float32Array(D*w*4*u),L=new Ru(P,D,w,u);L.type=Dn,L.needsUpdate=!0;const b=_*4;for(let C=0;C<u;C++){const k=p[C],I=y[C],H=S[C],q=D*w*4*C;for(let K=0;K<k.count;K++){const j=K*b;g===!0&&(s.fromBufferAttribute(k,K),P[q+j+0]=s.x,P[q+j+1]=s.y,P[q+j+2]=s.z,P[q+j+3]=0),v===!0&&(s.fromBufferAttribute(I,K),P[q+j+4]=s.x,P[q+j+5]=s.y,P[q+j+6]=s.z,P[q+j+7]=0),m===!0&&(s.fromBufferAttribute(H,K),P[q+j+8]=s.x,P[q+j+9]=s.y,P[q+j+10]=s.z,P[q+j+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new mt(D,w)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function O0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ou extends Ne{constructor(t,e,n,s,r,o,a,l,c,h=Ji){if(h!==Ji&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Ei),n===void 0&&h===os&&(n=rs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Bu=new Ne,Bc=new Ou(1,1),ku=new Ru,zu=new bd,Hu=new Iu,kc=[],zc=[],Hc=new Float32Array(16),Gc=new Float32Array(9),Vc=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function no(i,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Se(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Se(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Se(e,t)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Vc.set(n),i.uniformMatrix2fv(this.addr,!1,Vc),Se(e,n)}}function V0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Gc.set(n),i.uniformMatrix3fv(this.addr,!1,Gc),Se(e,n)}}function W0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(Me(e,n))return;Hc.set(n),i.uniformMatrix4fv(this.addr,!1,Hc),Se(e,n)}}function X0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Se(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Se(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Se(e,t)}}function $0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Se(e,t)}}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Se(e,t)}}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Se(e,t)}}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bc.compareFunction=Tu,r=Bc):r=Bu,e.setTexture2D(t||r,s)}function tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zu,s)}function eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Hu,s)}function ng(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ku,s)}function ig(i){switch(i){case 5126:return B0;case 35664:return k0;case 35665:return z0;case 35666:return H0;case 35674:return G0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return K0;case 5125:return $0;case 36294:return Z0;case 36295:return J0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,t){i.uniform1fv(this.addr,t)}function rg(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function og(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function ag(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function lg(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cg(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hg(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ug(i,t){i.uniform1iv(this.addr,t)}function fg(i,t){i.uniform2iv(this.addr,t)}function dg(i,t){i.uniform3iv(this.addr,t)}function pg(i,t){i.uniform4iv(this.addr,t)}function mg(i,t){i.uniform1uiv(this.addr,t)}function gg(i,t){i.uniform2uiv(this.addr,t)}function _g(i,t){i.uniform3uiv(this.addr,t)}function vg(i,t){i.uniform4uiv(this.addr,t)}function xg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Bu,r[o])}function Mg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zu,r[o])}function Sg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hu,r[o])}function yg(i,t,e){const n=this.cache,s=t.length,r=no(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Se(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ku,r[o])}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return vg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return yg}}class Eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}}class Tg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bg(e.type)}}class Ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const zo=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function wg(i,t,e){const n=i.name,s=n.length;for(zo.lastIndex=0;;){const r=zo.exec(n),o=zo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wc(e,c===void 0?new Eg(a,i,t):new Tg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Ag(a),Wc(e,u)),e=u}}}class Or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);wg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Rg=37297;let Cg=0;function Pg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qc=new Yt;function Lg(i){jt._getMatrix(qc,jt.workingColorSpace,i);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case to:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Pg(i.getShaderSource(t),o)}else return s}function Dg(i,t){const e=Lg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ug(i,t){let e;switch(t){case Jf:e="Linear";break;case jf:e="Reinhard";break;case Qf:e="Cineon";break;case du:e="ACESFilmic";break;case ed:e="AgX";break;case nd:e="Neutral";break;case td:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fr=new U;function Ig(){jt.getLuminanceCoefficients(fr);const i=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ng(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function Fg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Og(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Es(i){return i!==""}function Kc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Bg,zg)}const kg=new Map;function zg(i,t){let e=Kt[t];if(e===void 0){const n=kg.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}const Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(Hg,Gg)}function Gg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function qg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _l:t="ENVMAP_BLENDING_MULTIPLY";break;case $f:t="ENVMAP_BLENDING_MIX";break;case Zf:t="ENVMAP_BLENDING_ADD";break}return t}function Yg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Kg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vg(e),c=Wg(e),h=Xg(e),u=qg(e),f=Yg(e),d=Ng(e),g=Fg(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Ig(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),o=tl(o),o=Kc(o,e),o=$c(o,e),a=tl(a),a=Kc(a,e),a=$c(a,e),o=Zc(o),a=Zc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+m+o,_=y+p+a,D=Xc(s,s.VERTEX_SHADER,S),w=Xc(s,s.FRAGMENT_SHADER,_);s.attachShader(v,D),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(w).trim();let q=!0,K=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,D,w);else{const j=Yc(s,D,"vertex"),z=Yc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+j+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(I===""||H==="")&&(K=!1);K&&(C.diagnostics={runnable:q,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(D),s.deleteShader(w),L=new Or(s,v),b=Og(s,v)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Rg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=w,this}let $g=0;class Zg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jg(t),e.set(t,n)),n}}class Jg{constructor(t){this.id=$g++,this.code=t,this.usedTimes=0}}function jg(i,t,e,n,s,r,o){const a=new Al,l=new Zg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,C,k,I){const H=k.fog,q=I.geometry,K=b.isMeshStandardMaterial?k.environment:null,j=(b.isMeshStandardMaterial?e:t).get(b.envMap||K),z=j&&j.mapping===Qr?j.image.height:null,ot=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,gt=ct!==void 0?ct.length:0;let Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let Lt,X,st,Tt;if(ot){const te=vn[ot];Lt=te.vertexShader,X=te.fragmentShader}else Lt=b.vertexShader,X=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),Tt=l.getFragmentShaderID(b);const et=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Ot=I.isInstancedMesh===!0,Bt=I.isBatchedMesh===!0,$t=!!b.map,Q=!!b.matcap,ht=!!j,R=!!b.aoMap,pt=!!b.lightMap,nt=!!b.bumpMap,ft=!!b.normalMap,ut=!!b.displacementMap,at=!!b.emissiveMap,rt=!!b.metalnessMap,A=!!b.roughnessMap,M=b.anisotropy>0,B=b.clearcoat>0,V=b.dispersion>0,Z=b.iridescence>0,Y=b.sheen>0,bt=b.transmission>0,lt=M&&!!b.anisotropyMap,St=B&&!!b.clearcoatMap,Wt=B&&!!b.clearcoatNormalMap,tt=B&&!!b.clearcoatRoughnessMap,wt=Z&&!!b.iridescenceMap,Nt=Z&&!!b.iridescenceThicknessMap,kt=Y&&!!b.sheenColorMap,Pt=Y&&!!b.sheenRoughnessMap,Xt=!!b.specularMap,Rt=!!b.specularColorMap,Jt=!!b.specularIntensityMap,N=bt&&!!b.transmissionMap,vt=bt&&!!b.thicknessMap,$=!!b.gradientMap,it=!!b.alphaMap,Mt=b.alphaTest>0,xt=!!b.alphaHash,Vt=!!b.extensions;let he=ei;b.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(he=i.toneMapping);const xe={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:Lt,fragmentShader:X,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&I._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&I.instanceColor!==null,instancingMorph:Ot&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:hs,alphaToCoverage:!!b.alphaToCoverage,map:$t,matcap:Q,envMap:ht,envMapMode:ht&&j.mapping,envMapCubeUVHeight:z,aoMap:R,lightMap:pt,bumpMap:nt,normalMap:ft,displacementMap:f&&ut,emissiveMap:at,normalMapObjectSpace:ft&&b.normalMapType===od,normalMapTangentSpace:ft&&b.normalMapType===El,metalnessMap:rt,roughnessMap:A,anisotropy:M,anisotropyMap:lt,clearcoat:B,clearcoatMap:St,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:V,iridescence:Z,iridescenceMap:wt,iridescenceThicknessMap:Nt,sheen:Y,sheenColorMap:kt,sheenRoughnessMap:Pt,specularMap:Xt,specularColorMap:Rt,specularIntensityMap:Jt,transmission:bt,transmissionMap:N,thicknessMap:vt,gradientMap:$,opaque:b.transparent===!1&&b.blending===Zi&&b.alphaToCoverage===!1,alphaMap:it,alphaTest:Mt,alphaHash:xt,combine:b.combine,mapUv:$t&&v(b.map.channel),aoMapUv:R&&v(b.aoMap.channel),lightMapUv:pt&&v(b.lightMap.channel),bumpMapUv:nt&&v(b.bumpMap.channel),normalMapUv:ft&&v(b.normalMap.channel),displacementMapUv:ut&&v(b.displacementMap.channel),emissiveMapUv:at&&v(b.emissiveMap.channel),metalnessMapUv:rt&&v(b.metalnessMap.channel),roughnessMapUv:A&&v(b.roughnessMap.channel),anisotropyMapUv:lt&&v(b.anisotropyMap.channel),clearcoatMapUv:St&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&v(b.sheenRoughnessMap.channel),specularMapUv:Xt&&v(b.specularMap.channel),specularColorMapUv:Rt&&v(b.specularColorMap.channel),specularIntensityMapUv:Jt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:vt&&v(b.thicknessMap.channel),alphaMapUv:it&&v(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ft||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&($t||it),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ct,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:he,decodeVideoTexture:$t&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===oe,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===oe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ue,flipSided:b.side===Ie,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Vt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&b.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xe.vertexUv1s=c.has(1),xe.vertexUv2s=c.has(2),xe.vertexUv3s=c.has(3),c.clear(),xe}function p(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)x.push(C),x.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(y(x,b),S(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function y(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function S(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const x=g[b.type];let C;if(x){const k=vn[x];C=Nd.clone(k.uniforms)}else C=b.uniforms;return C}function D(b,x){let C;for(let k=0,I=h.length;k<I;k++){const H=h[k];if(H.cacheKey===x){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Kg(i,x,b,r),h.push(C)),C}function w(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function P(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:D,releaseProgram:w,releaseShaderCache:P,programs:h,dispose:L}}function Qg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function t_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||t_),n.length>1&&n.sort(f||jc),s.length>1&&s.sort(f||jc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function e_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qc,i.set(n,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function n_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function i_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let s_=0;function r_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function o_(i){const t=new n_,e=i_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new le,o=new le;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,y=0,S=0,_=0,D=0,w=0,P=0;c.sort(r_);for(let b=0,x=c.length;b<x;b++){const C=c[b],k=C.color,I=C.intensity,H=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*I,u+=k.g*I,f+=k.b*I;else if(C.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(C.sh.coefficients[K],I);P++}else if(C.isDirectionalLight){const K=t.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=C.shadow.matrix,y++}n.directional[d]=K,d++}else if(C.isSpotLight){const K=t.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(k).multiplyScalar(I),K.distance=H,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,n.spot[v]=K;const j=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,j.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[v]=j.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=q,_++}v++}else if(C.isRectAreaLight){const K=t.get(C);K.color.copy(k).multiplyScalar(I),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=K,m++}else if(C.isPointLight){const K=t.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),K.distance=C.distance,K.decay=C.decay,C.castShadow){const j=C.shadow,z=e.get(C);z.shadowIntensity=j.intensity,z.shadowBias=j.bias,z.shadowNormalBias=j.normalBias,z.shadowRadius=j.radius,z.shadowMapSize=j.mapSize,z.shadowCameraNear=j.camera.near,z.shadowCameraFar=j.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=K,g++}else if(C.isHemisphereLight){const K=t.get(C);K.skyColor.copy(C.color).multiplyScalar(I),K.groundColor.copy(C.groundColor).multiplyScalar(I),n.hemi[p]=K,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==S||L.numSpotShadows!==_||L.numSpotMaps!==D||L.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+D-w,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,L.directionalLength=d,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=S,L.numSpotShadows=_,L.numSpotMaps=D,L.numLightProbes=P,n.version=s_++)}function l(c,h){let u=0,f=0,d=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const S=c[p];if(S.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(S.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function th(i){const t=new o_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function a_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new th(i),t.set(s,[a])):r>=o.length?(a=new th(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class l_ extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class c_ extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const h_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u_=`uniform sampler2D shadow_pass;
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
}`;function f_(i,t,e){let n=new wl;const s=new mt,r=new mt,o=new ge,a=new l_({depthPacking:rd}),l=new c_,c={},h=e.maxTextureSize,u={[ri]:Ie,[Ie]:ri,[Ue]:Ue},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:h_,fragmentShader:u_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let p=this.type;this.render=function(w,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const I=p!==Pn&&this.type===Pn,H=p===Pn&&this.type!==Pn;for(let q=0,K=w.length;q<K;q++){const j=w[q],z=j.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ot=z.getFrameExtents();if(s.multiply(ot),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,z.mapSize.y=r.y)),z.map===null||I===!0||H===!0){const gt=this.type!==Pn?{minFilter:dn,magFilter:dn}:{};z.map!==null&&z.map.dispose(),z.map=new Ti(s.x,s.y,gt),z.map.texture.name=j.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ct=z.getViewportCount();for(let gt=0;gt<ct;gt++){const Ct=z.getViewport(gt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),k.viewport(o),z.updateMatrices(j,gt),n=z.getFrustum(),_(P,L,z.camera,j,this.type)}z.isPointLightShadow!==!0&&this.type===Pn&&y(z,L),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,x,C)};function y(w,P){const L=t.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,L,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,L,d,v,null)}function S(w,P,L,b){let x=null;const C=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const k=x.uuid,I=P.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let q=H[I];q===void 0&&(q=x.clone(),H[I]=q,P.addEventListener("dispose",D)),x=q}if(x.visible=P.visible,x.wireframe=P.wireframe,b===Pn?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=L}return x}function _(w,P,L,b,x){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Pn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const I=t.update(w),H=w.material;if(Array.isArray(H)){const q=I.groups;for(let K=0,j=q.length;K<j;K++){const z=q[K],ot=H[z.materialIndex];if(ot&&ot.visible){const ct=S(w,ot,b,x);w.onBeforeShadow(i,w,P,L,I,ct,z),i.renderBufferDirect(L,null,I,ct,w,z),w.onAfterShadow(i,w,P,L,I,ct,z)}}}else if(H.visible){const q=S(w,H,b,x);w.onBeforeShadow(i,w,P,L,I,q,null),i.renderBufferDirect(L,null,I,q,w,null),w.onAfterShadow(i,w,P,L,I,q,null)}}const k=w.children;for(let I=0,H=k.length;I<H;I++)_(k[I],P,L,b,x)}function D(w){w.target.removeEventListener("dispose",D);for(const L in c){const b=c[L],x=w.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}const d_={[_a]:va,[xa]:ya,[Ma]:ba,[ns]:Sa,[va]:_a,[ya]:xa,[ba]:Ma,[Sa]:ns};function p_(i,t){function e(){let N=!1;const vt=new ge;let $=null;const it=new ge(0,0,0,0);return{setMask:function(Mt){$!==Mt&&!N&&(i.colorMask(Mt,Mt,Mt,Mt),$=Mt)},setLocked:function(Mt){N=Mt},setClear:function(Mt,xt,Vt,he,xe){xe===!0&&(Mt*=he,xt*=he,Vt*=he),vt.set(Mt,xt,Vt,he),it.equals(vt)===!1&&(i.clearColor(Mt,xt,Vt,he),it.copy(vt))},reset:function(){N=!1,$=null,it.set(-1,0,0,0)}}}function n(){let N=!1,vt=!1,$=null,it=null,Mt=null;return{setReversed:function(xt){if(vt!==xt){const Vt=t.get("EXT_clip_control");vt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const he=Mt;Mt=null,this.setClear(he)}vt=xt},getReversed:function(){return vt},setTest:function(xt){xt?et(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(xt){$!==xt&&!N&&(i.depthMask(xt),$=xt)},setFunc:function(xt){if(vt&&(xt=d_[xt]),it!==xt){switch(xt){case _a:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Ma:i.depthFunc(i.EQUAL);break;case Sa:i.depthFunc(i.GEQUAL);break;case ya:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=xt}},setLocked:function(xt){N=xt},setClear:function(xt){Mt!==xt&&(vt&&(xt=1-xt),i.clearDepth(xt),Mt=xt)},reset:function(){N=!1,$=null,it=null,Mt=null,vt=!1}}}function s(){let N=!1,vt=null,$=null,it=null,Mt=null,xt=null,Vt=null,he=null,xe=null;return{setTest:function(te){N||(te?et(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(te){vt!==te&&!N&&(i.stencilMask(te),vt=te)},setFunc:function(te,Pe,yn){($!==te||it!==Pe||Mt!==yn)&&(i.stencilFunc(te,Pe,yn),$=te,it=Pe,Mt=yn)},setOp:function(te,Pe,yn){(xt!==te||Vt!==Pe||he!==yn)&&(i.stencilOp(te,Pe,yn),xt=te,Vt=Pe,he=yn)},setLocked:function(te){N=te},setClear:function(te){xe!==te&&(i.clearStencil(te),xe=te)},reset:function(){N=!1,vt=null,$=null,it=null,Mt=null,xt=null,Vt=null,he=null,xe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,S=null,_=null,D=null,w=null,P=new Ht(0,0,0),L=0,b=!1,x=null,C=null,k=null,I=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=j>=1):z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=j>=2);let ot=null,ct={};const gt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Lt=new ge().fromArray(gt),X=new ge().fromArray(Ct);function st(N,vt,$,it){const Mt=new Uint8Array(4),xt=i.createTexture();i.bindTexture(N,xt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<$;Vt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(vt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return xt}const Tt={};Tt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(i.DEPTH_TEST),o.setFunc(ns),nt(!1),ft(sc),et(i.CULL_FACE),R(ti);function et(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function At(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ot(N,vt){return u[N]!==vt?(i.bindFramebuffer(N,vt),u[N]=vt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Bt(N,vt){let $=d,it=!1;if(N){$=f.get(vt),$===void 0&&($=[],f.set(vt,$));const Mt=N.textures;if($.length!==Mt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let xt=0,Vt=Mt.length;xt<Vt;xt++)$[xt]=i.COLOR_ATTACHMENT0+xt;$.length=Mt.length,it=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,it=!0);it&&i.drawBuffers($)}function $t(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Q={[xi]:i.FUNC_ADD,[Df]:i.FUNC_SUBTRACT,[Uf]:i.FUNC_REVERSE_SUBTRACT};Q[If]=i.MIN,Q[Nf]=i.MAX;const ht={[Ff]:i.ZERO,[Of]:i.ONE,[Bf]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Wf]:i.SRC_ALPHA_SATURATE,[Gf]:i.DST_COLOR,[zf]:i.DST_ALPHA,[kf]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Vf]:i.ONE_MINUS_DST_COLOR,[Hf]:i.ONE_MINUS_DST_ALPHA,[Xf]:i.CONSTANT_COLOR,[qf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[Kf]:i.ONE_MINUS_CONSTANT_ALPHA};function R(N,vt,$,it,Mt,xt,Vt,he,xe,te){if(N===ti){v===!0&&(At(i.BLEND),v=!1);return}if(v===!1&&(et(i.BLEND),v=!0),N!==Lf){if(N!==m||te!==b){if((p!==xi||_!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,_=xi),te)switch(N){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,S=null,D=null,w=null,P.set(0,0,0),L=0,m=N,b=te}return}Mt=Mt||vt,xt=xt||$,Vt=Vt||it,(vt!==p||Mt!==_)&&(i.blendEquationSeparate(Q[vt],Q[Mt]),p=vt,_=Mt),($!==y||it!==S||xt!==D||Vt!==w)&&(i.blendFuncSeparate(ht[$],ht[it],ht[xt],ht[Vt]),y=$,S=it,D=xt,w=Vt),(he.equals(P)===!1||xe!==L)&&(i.blendColor(he.r,he.g,he.b,xe),P.copy(he),L=xe),m=N,b=!1}function pt(N,vt){N.side===Ue?At(i.CULL_FACE):et(i.CULL_FACE);let $=N.side===Ie;vt&&($=!$),nt($),N.blending===Zi&&N.transparent===!1?R(ti):R(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function nt(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function ft(N){N!==Cf?(et(i.CULL_FACE),N!==C&&(N===sc?i.cullFace(i.BACK):N===Pf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),C=N}function ut(N){N!==k&&(K&&i.lineWidth(N),k=N)}function at(N,vt,$){N?(et(i.POLYGON_OFFSET_FILL),(I!==vt||H!==$)&&(i.polygonOffset(vt,$),I=vt,H=$)):At(i.POLYGON_OFFSET_FILL)}function rt(N){N?et(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+q-1),ot!==N&&(i.activeTexture(N),ot=N)}function M(N,vt,$){$===void 0&&(ot===null?$=i.TEXTURE0+q-1:$=ot);let it=ct[$];it===void 0&&(it={type:void 0,texture:void 0},ct[$]=it),(it.type!==N||it.texture!==vt)&&(ot!==$&&(i.activeTexture($),ot=$),i.bindTexture(N,vt||Tt[N]),it.type=N,it.texture=vt)}function B(){const N=ct[ot];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(N){Lt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Lt.copy(N))}function Pt(N){X.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),X.copy(N))}function Xt(N,vt){let $=c.get(vt);$===void 0&&($=new WeakMap,c.set(vt,$));let it=$.get(N);it===void 0&&(it=i.getUniformBlockIndex(vt,N.name),$.set(N,it))}function Rt(N,vt){const it=c.get(vt).get(N);l.get(vt)!==it&&(i.uniformBlockBinding(vt,it,N.__bindingPointIndex),l.set(vt,it))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,ct={},u={},f=new WeakMap,d=[],g=null,v=!1,m=null,p=null,y=null,S=null,_=null,D=null,w=null,P=new Ht(0,0,0),L=0,b=!1,x=null,C=null,k=null,I=null,H=null,Lt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:At,bindFramebuffer:Ot,drawBuffers:Bt,useProgram:$t,setBlending:R,setMaterial:pt,setFlipSided:nt,setCullFace:ft,setLineWidth:ut,setPolygonOffset:at,setScissorTest:rt,activeTexture:A,bindTexture:M,unbindTexture:B,compressedTexImage2D:V,compressedTexImage3D:Z,texImage2D:wt,texImage3D:Nt,updateUBOMapping:Xt,uniformBlockBinding:Rt,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:St,scissor:kt,viewport:Pt,reset:Jt}}function eh(i,t,e,n){const s=m_(n);switch(e){case vu:return i*t;case Mu:return i*t;case Su:return i*t*2;case yu:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case bu:return i*t*2/s.components*s.byteLength;case yl:return i*t*2/s.components*s.byteLength;case xu:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case Dr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case La:case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Fr:case Ka:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Eu:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ja:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function m_(i){switch(i){case Nn:case mu:return{byteLength:1,components:1};case Ds:case gu:case ks:return{byteLength:2,components:1};case xl:case Ml:return{byteLength:2,components:4};case Ei:case vl:case Dn:return{byteLength:4,components:1};case _u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function g_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return d?new OffscreenCanvas(A,M):Xr("canvas")}function v(A,M,B){let V=1;const Z=rt(A);if((Z.width>B||Z.height>B)&&(V=B/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(V*Z.width),bt=Math.floor(V*Z.height);u===void 0&&(u=g(Y,bt));const lt=M?g(Y,bt):u;return lt.width=Y,lt.height=bt,lt.getContext("2d").drawImage(A,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+bt+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,M,B,V,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=M;if(M===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),M===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const bt=Z?to:jt.getTransfer(V);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=bt===oe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function _(A,M){let B;return A?M===null||M===Ei||M===rs?B=i.DEPTH24_STENCIL8:M===Dn?B=i.DEPTH32F_STENCIL8:M===Ds&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===rs?B=i.DEPTH_COMPONENT24:M===Dn?B=i.DEPTH_COMPONENT32F:M===Ds&&(B=i.DEPTH_COMPONENT16),B}function D(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){const M=A.target;M.removeEventListener("dispose",w),L(M),M.isVideoTexture&&h.delete(M)}function P(A){const M=A.target;M.removeEventListener("dispose",P),x(M)}function L(A){const M=n.get(A);if(M.__webglInit===void 0)return;const B=A.source,V=f.get(B);if(V){const Z=V[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(A),Object.keys(V).length===0&&f.delete(B)}n.remove(A)}function b(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const B=A.source,V=f.get(B);delete V[M.__cacheKey],o.memory.textures--}function x(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let Z=0;Z<M.__webglFramebuffer[V].length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[V][Z]);else i.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)i.deleteFramebuffer(M.__webglFramebuffer[V]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=A.textures;for(let V=0,Z=B.length;V<Z;V++){const Y=n.get(B[V]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(B[V])}n.remove(A)}let C=0;function k(){C=0}function I(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function H(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function q(A,M){const B=n.get(A);if(A.isVideoTexture&&ut(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const V=A.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(B,A,M);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function K(A,M){const B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function j(A,M){const B=n.get(A);if(A.version>0&&B.__version!==A.version){X(B,A,M);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function z(A,M){const B=n.get(A);if(A.version>0&&B.__version!==A.version){st(B,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const ot={[Vr]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Aa]:i.MIRRORED_REPEAT},ct={[dn]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},gt={[ad]:i.NEVER,[dd]:i.ALWAYS,[ld]:i.LESS,[Tu]:i.LEQUAL,[cd]:i.EQUAL,[fd]:i.GEQUAL,[hd]:i.GREATER,[ud]:i.NOTEQUAL};function Ct(A,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===uo||M.magFilter===qs||M.magFilter===jn||M.minFilter===un||M.minFilter===uo||M.minFilter===qs||M.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ot[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ct[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ct[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,gt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===dn||M.minFilter!==qs&&M.minFilter!==jn||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Lt(A,M){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",w));const V=M.source;let Z=f.get(V);Z===void 0&&(Z={},f.set(V,Z));const Y=H(M);if(Y!==A.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Z[Y].usedTimes++;const bt=Z[A.__cacheKey];bt!==void 0&&(Z[A.__cacheKey].usedTimes--,bt.usedTimes===0&&b(M)),A.__cacheKey=Y,A.__webglTexture=Z[Y].texture}return B}function X(A,M,B){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);const Z=Lt(A,M),Y=M.source;e.bindTexture(V,A.__webglTexture,i.TEXTURE0+B);const bt=n.get(Y);if(Y.version!==bt.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const lt=jt.getPrimaries(jt.workingColorSpace),St=M.colorSpace===Zn?null:jt.getPrimaries(M.colorSpace),Wt=M.colorSpace===Zn||lt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=v(M.image,!1,s.maxTextureSize);tt=at(M,tt);const wt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type);let kt=S(M.internalFormat,wt,Nt,M.colorSpace,M.isVideoTexture);Ct(V,M);let Pt;const Xt=M.mipmaps,Rt=M.isVideoTexture!==!0,Jt=bt.__version===void 0||Z===!0,N=Y.dataReady,vt=D(M,tt);if(M.isDepthTexture)kt=_(M.format===os,M.type),Jt&&(Rt?e.texStorage2D(i.TEXTURE_2D,1,kt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,kt,tt.width,tt.height,0,wt,Nt,null));else if(M.isDataTexture)if(Xt.length>0){Rt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,kt,Xt[0].width,Xt[0].height);for(let $=0,it=Xt.length;$<it;$++)Pt=Xt[$],Rt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Nt,Pt.data):e.texImage2D(i.TEXTURE_2D,$,kt,Pt.width,Pt.height,0,wt,Nt,Pt.data);M.generateMipmaps=!1}else Rt?(Jt&&e.texStorage2D(i.TEXTURE_2D,vt,kt,tt.width,tt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,wt,Nt,tt.data)):e.texImage2D(i.TEXTURE_2D,0,kt,tt.width,tt.height,0,wt,Nt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Rt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,kt,Xt[0].width,Xt[0].height,tt.depth);for(let $=0,it=Xt.length;$<it;$++)if(Pt=Xt[$],M.format!==fn)if(wt!==null)if(Rt){if(N)if(M.layerUpdates.size>0){const Mt=eh(Pt.width,Pt.height,M.format,M.type);for(const xt of M.layerUpdates){const Vt=Pt.data.subarray(xt*Mt/Pt.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,xt,Pt.width,Pt.height,1,wt,Vt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Pt.width,Pt.height,tt.depth,wt,Pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,kt,Pt.width,Pt.height,tt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Pt.width,Pt.height,tt.depth,wt,Nt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,kt,Pt.width,Pt.height,tt.depth,0,wt,Nt,Pt.data)}else{Rt&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,kt,Xt[0].width,Xt[0].height);for(let $=0,it=Xt.length;$<it;$++)Pt=Xt[$],M.format!==fn?wt!==null?Rt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Pt.width,Pt.height,wt,Nt,Pt.data):e.texImage2D(i.TEXTURE_2D,$,kt,Pt.width,Pt.height,0,wt,Nt,Pt.data)}else if(M.isDataArrayTexture)if(Rt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,kt,tt.width,tt.height,tt.depth),N)if(M.layerUpdates.size>0){const $=eh(tt.width,tt.height,M.format,M.type);for(const it of M.layerUpdates){const Mt=tt.data.subarray(it*$/tt.data.BYTES_PER_ELEMENT,(it+1)*$/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,tt.width,tt.height,1,wt,Nt,Mt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,wt,Nt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,tt.width,tt.height,tt.depth,0,wt,Nt,tt.data);else if(M.isData3DTexture)Rt?(Jt&&e.texStorage3D(i.TEXTURE_3D,vt,kt,tt.width,tt.height,tt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,wt,Nt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,kt,tt.width,tt.height,tt.depth,0,wt,Nt,tt.data);else if(M.isFramebufferTexture){if(Jt)if(Rt)e.texStorage2D(i.TEXTURE_2D,vt,kt,tt.width,tt.height);else{let $=tt.width,it=tt.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,kt,$,it,0,wt,Nt,null),$>>=1,it>>=1}}else if(Xt.length>0){if(Rt&&Jt){const $=rt(Xt[0]);e.texStorage2D(i.TEXTURE_2D,vt,kt,$.width,$.height)}for(let $=0,it=Xt.length;$<it;$++)Pt=Xt[$],Rt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,wt,Nt,Pt):e.texImage2D(i.TEXTURE_2D,$,kt,wt,Nt,Pt);M.generateMipmaps=!1}else if(Rt){if(Jt){const $=rt(tt);e.texStorage2D(i.TEXTURE_2D,vt,kt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Nt,tt)}else e.texImage2D(i.TEXTURE_2D,0,kt,wt,Nt,tt);m(M)&&p(V),bt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function st(A,M,B){if(M.image.length!==6)return;const V=Lt(A,M),Z=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const Y=n.get(Z);if(Z.version!==Y.__version||V===!0){e.activeTexture(i.TEXTURE0+B);const bt=jt.getPrimaries(jt.workingColorSpace),lt=M.colorSpace===Zn?null:jt.getPrimaries(M.colorSpace),St=M.colorSpace===Zn||bt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,wt=[];for(let it=0;it<6;it++)!Wt&&!tt?wt[it]=v(M.image[it],!0,s.maxCubemapSize):wt[it]=tt?M.image[it].image:M.image[it],wt[it]=at(M,wt[it]);const Nt=wt[0],kt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),Xt=S(M.internalFormat,kt,Pt,M.colorSpace),Rt=M.isVideoTexture!==!0,Jt=Y.__version===void 0||V===!0,N=Z.dataReady;let vt=D(M,Nt);Ct(i.TEXTURE_CUBE_MAP,M);let $;if(Wt){Rt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Xt,Nt.width,Nt.height);for(let it=0;it<6;it++){$=wt[it].mipmaps;for(let Mt=0;Mt<$.length;Mt++){const xt=$[Mt];M.format!==fn?kt!==null?Rt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,xt.width,xt.height,kt,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,Xt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,0,0,xt.width,xt.height,kt,Pt,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt,Xt,xt.width,xt.height,0,kt,Pt,xt.data)}}}else{if($=M.mipmaps,Rt&&Jt){$.length>0&&vt++;const it=rt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Xt,it.width,it.height)}for(let it=0;it<6;it++)if(tt){Rt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,wt[it].width,wt[it].height,kt,Pt,wt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Xt,wt[it].width,wt[it].height,0,kt,Pt,wt[it].data);for(let Mt=0;Mt<$.length;Mt++){const Vt=$[Mt].image[it].image;Rt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,Vt.width,Vt.height,kt,Pt,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,Xt,Vt.width,Vt.height,0,kt,Pt,Vt.data)}}else{Rt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,kt,Pt,wt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Xt,kt,Pt,wt[it]);for(let Mt=0;Mt<$.length;Mt++){const xt=$[Mt];Rt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,0,0,kt,Pt,xt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Mt+1,Xt,kt,Pt,xt.image[it])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Tt(A,M,B,V,Z,Y){const bt=r.convert(B.format,B.colorSpace),lt=r.convert(B.type),St=S(B.internalFormat,bt,lt,B.colorSpace),Wt=n.get(M),tt=n.get(B);if(tt.__renderTarget=M,!Wt.__hasExternalTextures){const wt=Math.max(1,M.width>>Y),Nt=Math.max(1,M.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,St,wt,Nt,M.depth,0,bt,lt,null):e.texImage2D(Z,Y,St,wt,Nt,0,bt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,Z,tt.__webglTexture,0,nt(M)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,Z,tt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(A,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const V=M.depthTexture,Z=V&&V.isDepthTexture?V.type:null,Y=_(M.stencilBuffer,Z),bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=nt(M);ft(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Y,M.width,M.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,A)}else{const V=M.textures;for(let Z=0;Z<V.length;Z++){const Y=V[Z],bt=r.convert(Y.format,Y.colorSpace),lt=r.convert(Y.type),St=S(Y.internalFormat,bt,lt,Y.colorSpace),Wt=nt(M);B&&ft(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,St,M.width,M.height):ft(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,St,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,St,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(M.depthTexture);V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const Z=V.__webglTexture,Y=nt(M);if(M.depthTexture.format===Ji)ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(M.depthTexture.format===os)ft(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const M=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const Z=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),M.__depthDisposeCallback=Z}M.__boundDepthTexture=V}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(M.__webglFramebuffer,A)}else if(B){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),et(M.__webglDepthbuffer[V],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),et(M.__webglDepthbuffer,A,!1);else{const V=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(A,M,B){const V=n.get(A);M!==void 0&&Tt(V.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ot(A)}function $t(A){const M=A.texture,B=n.get(A),V=n.get(M);A.addEventListener("dispose",P);const Z=A.textures,Y=A.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,o.memory.textures++),Y){B.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[lt]=[];for(let St=0;St<M.mipmaps.length;St++)B.__webglFramebuffer[lt][St]=i.createFramebuffer()}else B.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let lt=0;lt<M.mipmaps.length;lt++)B.__webglFramebuffer[lt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(bt)for(let lt=0,St=Z.length;lt<St;lt++){const Wt=n.get(Z[lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ft(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let lt=0;lt<Z.length;lt++){const St=Z[lt];B.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[lt]);const Wt=r.convert(St.format,St.colorSpace),tt=r.convert(St.type),wt=S(St.internalFormat,Wt,tt,St.colorSpace,A.isXRRenderTarget===!0),Nt=nt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,wt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,B.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),et(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,M);for(let lt=0;lt<6;lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)Tt(B.__webglFramebuffer[lt][St],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,St);else Tt(B.__webglFramebuffer[lt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,St=Z.length;lt<St;lt++){const Wt=Z[lt],tt=n.get(Wt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Ct(i.TEXTURE_2D,Wt),Tt(B.__webglFramebuffer,A,Wt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,V.__webglTexture),Ct(lt,M),M.mipmaps&&M.mipmaps.length>0)for(let St=0;St<M.mipmaps.length;St++)Tt(B.__webglFramebuffer[St],A,M,i.COLOR_ATTACHMENT0,lt,St);else Tt(B.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,lt,0);m(M)&&p(lt),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Q(A){const M=A.textures;for(let B=0,V=M.length;B<V;B++){const Z=M[B];if(m(Z)){const Y=y(A),bt=n.get(Z).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}const ht=[],R=[];function pt(A){if(A.samples>0){if(ft(A)===!1){const M=A.textures,B=A.width,V=A.height;let Z=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(A),lt=M.length>1;if(lt)for(let St=0;St<M.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let St=0;St<M.length;St++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[St]);const Wt=n.get(M[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,B,V,0,0,B,V,Z,i.NEAREST),l===!0&&(ht.length=0,R.length=0,ht.push(i.COLOR_ATTACHMENT0+St),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ht.push(Y),R.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let St=0;St<M.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,bt.__webglColorRenderbuffer[St]);const Wt=n.get(M[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function ft(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ut(A){const M=o.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function at(A,M){const B=A.colorSpace,V=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==hs&&B!==Zn&&(jt.getTransfer(B)===oe?(V!==fn||Z!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=k,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=z,this.rebindTextures=Bt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=ft}function __(i,t){function e(n,s=Zn){let r;const o=jt.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.BYTE;if(n===gu)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===ks)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===xu)return i.RGB;if(n===fn)return i.RGBA;if(n===Mu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===yu)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===bu)return i.RG;if(n===yl)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===Dr||n===Ur||n===Ir||n===Nr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Da)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ua)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ia||n===Na||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ia)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fr||n===Ka||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Fr)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Za||n===Ja||n===ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class v_ extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class He extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x_={type:"move"};class Ho{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(x_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`;class y_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ne,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fn({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class b_ extends us{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const v=new y_,m=e.getContextAttributes();let p=null,y=null;const S=[],_=[],D=new mt;let w=null;const P=new tn;P.viewport=new ge;const L=new tn;L.viewport=new ge;const b=[P,L],x=new v_;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=S[X];return st===void 0&&(st=new Ho,S[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=S[X];return st===void 0&&(st=new Ho,S[X]=st),st.getGripSpace()},this.getHand=function(X){let st=S[X];return st===void 0&&(st=new Ho,S[X]=st),st.getHandSpace()};function I(X){const st=_.indexOf(X.inputSource);if(st===-1)return;const Tt=S[st];Tt!==void 0&&(Tt.update(X.inputSource,X.frame,c||o),Tt.dispatchEvent({type:X.type,data:X.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",q);for(let X=0;X<S.length;X++){const st=_[X];st!==null&&(_[X]=null,S[X].disconnect(st))}C=null,k=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,y=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ti(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Tt=null,et=null;m.depth&&(et=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?os:Ji,Tt=m.stencil?rs:Ei);const At={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Ti(f.textureWidth,f.textureHeight,{format:fn,type:Nn,depthTexture:new Ou(f.textureWidth,f.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(X){for(let st=0;st<X.removed.length;st++){const Tt=X.removed[st],et=_.indexOf(Tt);et>=0&&(_[et]=null,S[et].disconnect(Tt))}for(let st=0;st<X.added.length;st++){const Tt=X.added[st];let et=_.indexOf(Tt);if(et===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=_.length){_.push(Tt),et=Ot;break}else if(_[Ot]===null){_[Ot]=Tt,et=Ot;break}if(et===-1)break}const At=S[et];At&&At.connect(Tt)}}const K=new U,j=new U;function z(X,st,Tt){K.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(Tt.matrixWorld);const et=K.distanceTo(j),At=st.projectionMatrix.elements,Ot=Tt.projectionMatrix.elements,Bt=At[14]/(At[10]-1),$t=At[14]/(At[10]+1),Q=(At[9]+1)/At[5],ht=(At[9]-1)/At[5],R=(At[8]-1)/At[0],pt=(Ot[8]+1)/Ot[0],nt=Bt*R,ft=Bt*pt,ut=et/(-R+pt),at=ut*-R;if(st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(at),X.translateZ(ut),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),At[10]===-1)X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const rt=Bt+ut,A=$t+ut,M=nt-at,B=ft+(et-at),V=Q*$t/A*rt,Z=ht*$t/A*rt;X.projectionMatrix.makePerspective(M,B,V,Z,rt,A),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let st=X.near,Tt=X.far;v.texture!==null&&(v.depthNear>0&&(st=v.depthNear),v.depthFar>0&&(Tt=v.depthFar)),x.near=L.near=P.near=st,x.far=L.far=P.far=Tt,(C!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,k=x.far),P.layers.mask=X.layers.mask|2,L.layers.mask=X.layers.mask|4,x.layers.mask=P.layers.mask|L.layers.mask;const et=X.parent,At=x.cameras;ot(x,et);for(let Ot=0;Ot<At.length;Ot++)ot(At[Ot],et);At.length===2?z(x,P,L):x.projectionMatrix.copy(P.projectionMatrix),ct(X,x,et)};function ct(X,st,Tt){Tt===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(Tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Qa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let gt=null;function Ct(X,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const Tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let et=!1;Tt.length!==x.cameras.length&&(x.cameras.length=0,et=!0);for(let Ot=0;Ot<Tt.length;Ot++){const Bt=Tt[Ot];let $t=null;if(d!==null)$t=d.getViewport(Bt);else{const ht=u.getViewSubImage(f,Bt);$t=ht.viewport,Ot===0&&(t.setRenderTargetTextures(y,ht.colorTexture,f.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(y))}let Q=b[Ot];Q===void 0&&(Q=new tn,Q.layers.enable(Ot),Q.viewport=new ge,b[Ot]=Q),Q.matrix.fromArray(Bt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Bt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set($t.x,$t.y,$t.width,$t.height),Ot===0&&(x.matrix.copy(Q.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),et===!0&&x.cameras.push(Q)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Ot=u.getDepthInformation(Tt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let Tt=0;Tt<S.length;Tt++){const et=_[Tt],At=S[Tt];et!==null&&At!==void 0&&At.update(et,st,c||o)}gt&&gt(X,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Lt=new Nu;Lt.setAnimationLoop(Ct),this.setAnimationLoop=function(X){gt=X},this.dispose=function(){}}}const di=new mn,E_=new le;function T_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Du(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ie&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ie&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),S=y.envMap,_=y.envMapRotation;S&&(m.envMap.value=S,di.copy(_),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(E_.makeRotationFromEuler(di)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function A_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const _=S.program;n.uniformBlockBinding(y,_)}function c(y,S){let _=s[y.id];_===void 0&&(g(y),_=h(y),s[y.id]=_,y.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(y,D);const w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){const S=u();y.__bindingPointIndex=S;const _=i.createBuffer(),D=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,D,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,_),_}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],_=y.uniforms,D=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,P=_.length;w<P;w++){const L=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,x=L.length;b<x;b++){const C=L[b];if(d(C,w,b,D)===!0){const k=C.__offset,I=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let q=0;q<I.length;q++){const K=I[q],j=v(K);typeof K=="number"||typeof K=="boolean"?(C.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,k+H,C.__data)):K.isMatrix3?(C.__data[0]=K.elements[0],C.__data[1]=K.elements[1],C.__data[2]=K.elements[2],C.__data[3]=0,C.__data[4]=K.elements[3],C.__data[5]=K.elements[4],C.__data[6]=K.elements[5],C.__data[7]=0,C.__data[8]=K.elements[6],C.__data[9]=K.elements[7],C.__data[10]=K.elements[8],C.__data[11]=0):(K.toArray(C.__data,H),H+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,S,_,D){const w=y.value,P=S+"_"+_;if(D[P]===void 0)return typeof w=="number"||typeof w=="boolean"?D[P]=w:D[P]=w.clone(),!0;{const L=D[P];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return D[P]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(y){const S=y.uniforms;let _=0;const D=16;for(let P=0,L=S.length;P<L;P++){const b=Array.isArray(S[P])?S[P]:[S[P]];for(let x=0,C=b.length;x<C;x++){const k=b[x],I=Array.isArray(k.value)?k.value:[k.value];for(let H=0,q=I.length;H<q;H++){const K=I[H],j=v(K),z=_%D,ot=z%j.boundary,ct=z+ot;_+=ot,ct!==0&&D-ct<j.storage&&(_+=D-ct),k.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=_,_+=j.storage}}}const w=_%D;return w>0&&(_+=D-w),y.__size=_,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function m(y){const S=y.target;S.removeEventListener("dispose",m);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class w_{constructor(t={}){const{canvas:e=md(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=ei,this.toneMappingExposure=1;const _=this;let D=!1,w=0,P=0,L=null,b=-1,x=null;const C=new ge,k=new ge;let I=null;const H=new Ht(0);let q=0,K=e.width,j=e.height,z=1,ot=null,ct=null;const gt=new ge(0,0,K,j),Ct=new ge(0,0,K,j);let Lt=!1;const X=new wl;let st=!1,Tt=!1;const et=new le,At=new le,Ot=new U,Bt=new ge,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ht(){return L===null?z:1}let R=n;function pt(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),R===null){const F="webgl2";if(R=pt(F,E),R===null)throw pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let nt,ft,ut,at,rt,A,M,B,V,Z,Y,bt,lt,St,Wt,tt,wt,Nt,kt,Pt,Xt,Rt,Jt,N;function vt(){nt=new D0(R),nt.init(),Rt=new __(R,nt),ft=new A0(R,nt,t,Rt),ut=new p_(R,nt),ft.reverseDepthBuffer&&f&&ut.buffers.depth.setReversed(!0),at=new N0(R),rt=new Qg,A=new g_(R,nt,ut,rt,ft,Rt,at),M=new R0(_),B=new L0(_),V=new Gd(R),Jt=new E0(R,V),Z=new U0(R,V,at,Jt),Y=new O0(R,Z,V,at),kt=new F0(R,ft,A),tt=new w0(rt),bt=new jg(_,M,B,nt,ft,Jt,tt),lt=new T_(_,rt),St=new e_,Wt=new a_(nt),Nt=new b0(_,M,B,ut,Y,d,l),wt=new f_(_,Y,ft),N=new A_(R,at,ft,ut),Pt=new T0(R,nt,at),Xt=new I0(R,nt,at),at.programs=bt.programs,_.capabilities=ft,_.extensions=nt,_.properties=rt,_.renderLists=St,_.shadowMap=wt,_.state=ut,_.info=at}vt();const $=new b_(_,R);this.xr=$,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=nt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=nt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(K,j,!1))},this.getSize=function(E){return E.set(K,j)},this.setSize=function(E,F,G=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,j=F,e.width=Math.floor(E*z),e.height=Math.floor(F*z),G===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(K*z,j*z).floor()},this.setDrawingBufferSize=function(E,F,G){K=E,j=F,z=G,e.width=Math.floor(E*G),e.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,F,G,W){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,F,G,W),ut.viewport(C.copy(gt).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Ct)},this.setScissor=function(E,F,G,W){E.isVector4?Ct.set(E.x,E.y,E.z,E.w):Ct.set(E,F,G,W),ut.scissor(k.copy(Ct).multiplyScalar(z).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(E){ut.setScissorTest(Lt=E)},this.setOpaqueSort=function(E){ot=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,F=!0,G=!0){let W=0;if(E){let O=!1;if(L!==null){const dt=L.texture.format;O=dt===bl||dt===yl||dt===Sl}if(O){const dt=L.texture.type,Et=dt===Nn||dt===Ei||dt===Ds||dt===rs||dt===xl||dt===Ml,Dt=Nt.getClearColor(),Ut=Nt.getClearAlpha(),Gt=Dt.r,qt=Dt.g,It=Dt.b;Et?(g[0]=Gt,g[1]=qt,g[2]=It,g[3]=Ut,R.clearBufferuiv(R.COLOR,0,g)):(v[0]=Gt,v[1]=qt,v[2]=It,v[3]=Ut,R.clearBufferiv(R.COLOR,0,v))}else W|=R.COLOR_BUFFER_BIT}F&&(W|=R.DEPTH_BUFFER_BIT),G&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),St.dispose(),Wt.dispose(),rt.dispose(),M.dispose(),B.dispose(),Y.dispose(),Jt.dispose(),N.dispose(),bt.dispose(),$.dispose(),$.removeEventListener("sessionstart",Zl),$.removeEventListener("sessionend",Jl),ai.stop()};function it(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=at.autoReset,F=wt.enabled,G=wt.autoUpdate,W=wt.needsUpdate,O=wt.type;vt(),at.autoReset=E,wt.enabled=F,wt.autoUpdate=G,wt.needsUpdate=W,wt.type=O}function xt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Vt(E){const F=E.target;F.removeEventListener("dispose",Vt),he(F)}function he(E){xe(E),rt.remove(E)}function xe(E){const F=rt.get(E).programs;F!==void 0&&(F.forEach(function(G){bt.releaseProgram(G)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,W,O,dt){F===null&&(F=$t);const Et=O.isMesh&&O.matrixWorld.determinant()<0,Dt=Ef(E,F,G,W,O);ut.setMaterial(W,Et);let Ut=G.index,Gt=1;if(W.wireframe===!0){if(Ut=Z.getWireframeAttribute(G),Ut===void 0)return;Gt=2}const qt=G.drawRange,It=G.attributes.position;let Qt=qt.start*Gt,ce=(qt.start+qt.count)*Gt;dt!==null&&(Qt=Math.max(Qt,dt.start*Gt),ce=Math.min(ce,(dt.start+dt.count)*Gt)),Ut!==null?(Qt=Math.max(Qt,0),ce=Math.min(ce,Ut.count)):It!=null&&(Qt=Math.max(Qt,0),ce=Math.min(ce,It.count));const ue=ce-Qt;if(ue<0||ue===1/0)return;Jt.setup(O,W,Dt,G,Ut);let Fe,ee=Pt;if(Ut!==null&&(Fe=V.get(Ut),ee=Xt,ee.setIndex(Fe)),O.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*ht()),ee.setMode(R.LINES)):ee.setMode(R.TRIANGLES);else if(O.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),ut.setLineWidth(Ft*ht()),O.isLineSegments?ee.setMode(R.LINES):O.isLineLoop?ee.setMode(R.LINE_LOOP):ee.setMode(R.LINE_STRIP)}else O.isPoints?ee.setMode(R.POINTS):O.isSprite&&ee.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ee.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ee.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ft=O._multiDrawStarts,bn=O._multiDrawCounts,ne=O._multiDrawCount,nn=Ut?V.get(Ut).bytesPerElement:1,Ci=rt.get(W).currentProgram.getUniforms();for(let Ve=0;Ve<ne;Ve++)Ci.setValue(R,"_gl_DrawID",Ve),ee.render(Ft[Ve]/nn,bn[Ve])}else if(O.isInstancedMesh)ee.renderInstances(Qt,ue,O.count);else if(G.isInstancedBufferGeometry){const Ft=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,bn=Math.min(G.instanceCount,Ft);ee.renderInstances(Qt,ue,bn)}else ee.render(Qt,ue)};function te(E,F,G){E.transparent===!0&&E.side===Ue&&E.forceSinglePass===!1?(E.side=Ie,E.needsUpdate=!0,Xs(E,F,G),E.side=ri,E.needsUpdate=!0,Xs(E,F,G),E.side=Ue):Xs(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),p=Wt.get(G),p.init(F),S.push(p),G.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const dt=O.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){const Dt=dt[Et];te(Dt,G,O),W.add(Dt)}else te(dt,G,O),W.add(dt)}),S.pop(),p=null,W},this.compileAsync=function(E,F,G=null){const W=this.compile(E,F,G);return new Promise(O=>{function dt(){if(W.forEach(function(Et){rt.get(Et).currentProgram.isReady()&&W.delete(Et)}),W.size===0){O(E);return}setTimeout(dt,10)}nt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Pe=null;function yn(E){Pe&&Pe(E)}function Zl(){ai.stop()}function Jl(){ai.start()}const ai=new Nu;ai.setAnimationLoop(yn),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(E){Pe=E,$.setAnimationLoop(E),E===null?ai.stop():ai.start()},$.addEventListener("sessionstart",Zl),$.addEventListener("sessionend",Jl),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,L),p=Wt.get(E,S.length),p.init(F),S.push(p),At.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(At),Tt=this.localClippingEnabled,st=tt.init(this.clippingPlanes,Tt),m=St.get(E,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const dt=_.xr.getDepthSensingMesh();dt!==null&&ho(dt,F,-1/0,_.sortObjects)}ho(E,F,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ot,ct),Q=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Q&&Nt.addToRenderList(m,E),this.info.render.frame++,st===!0&&tt.beginShadows();const G=p.state.shadowsArray;wt.render(G,E,F),st===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,O=m.transmissive;if(p.setupLights(),F.isArrayCamera){const dt=F.cameras;if(O.length>0)for(let Et=0,Dt=dt.length;Et<Dt;Et++){const Ut=dt[Et];Ql(W,O,E,Ut)}Q&&Nt.render(E);for(let Et=0,Dt=dt.length;Et<Dt;Et++){const Ut=dt[Et];jl(m,E,Ut,Ut.viewport)}}else O.length>0&&Ql(W,O,E,F),Q&&Nt.render(E),jl(m,E,F);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(_,E,F),Jt.resetDefaultState(),b=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],st===!0&&tt.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ho(E,F,G,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){W&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);const Et=Y.update(E),Dt=E.material;Dt.visible&&m.push(E,Et,Dt,G,Bt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Et=Y.update(E),Dt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Bt.copy(Et.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(Dt)){const Ut=Et.groups;for(let Gt=0,qt=Ut.length;Gt<qt;Gt++){const It=Ut[Gt],Qt=Dt[It.materialIndex];Qt&&Qt.visible&&m.push(E,Et,Qt,G,Bt.z,It)}}else Dt.visible&&m.push(E,Et,Dt,G,Bt.z,null)}}const dt=E.children;for(let Et=0,Dt=dt.length;Et<Dt;Et++)ho(dt[Et],F,G,W)}function jl(E,F,G,W){const O=E.opaque,dt=E.transmissive,Et=E.transparent;p.setupLightsView(G),st===!0&&tt.setGlobalState(_.clippingPlanes,G),W&&ut.viewport(C.copy(W)),O.length>0&&Ws(O,F,G),dt.length>0&&Ws(dt,F,G),Et.length>0&&Ws(Et,F,G),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ql(E,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new Ti(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?ks:Nn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const dt=p.state.transmissionRenderTarget[W.id],Et=W.viewport||C;dt.setSize(Et.z,Et.w);const Dt=_.getRenderTarget();_.setRenderTarget(dt),_.getClearColor(H),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Q&&Nt.render(G);const Ut=_.toneMapping;_.toneMapping=ei;const Gt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),st===!0&&tt.setGlobalState(_.clippingPlanes,W),Ws(E,G,W),A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt),nt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let It=0,Qt=F.length;It<Qt;It++){const ce=F[It],ue=ce.object,Fe=ce.geometry,ee=ce.material,Ft=ce.group;if(ee.side===Ue&&ue.layers.test(W.layers)){const bn=ee.side;ee.side=Ie,ee.needsUpdate=!0,tc(ue,G,W,Fe,ee,Ft),ee.side=bn,ee.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt))}_.setRenderTarget(Dt),_.setClearColor(H,q),Gt!==void 0&&(W.viewport=Gt),_.toneMapping=Ut}function Ws(E,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,dt=E.length;O<dt;O++){const Et=E[O],Dt=Et.object,Ut=Et.geometry,Gt=W===null?Et.material:W,qt=Et.group;Dt.layers.test(G.layers)&&tc(Dt,F,G,Ut,Gt,qt)}}function tc(E,F,G,W,O,dt){E.onBeforeRender(_,F,G,W,O,dt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(_,F,G,W,E,dt),O.transparent===!0&&O.side===Ue&&O.forceSinglePass===!1?(O.side=Ie,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,E,dt),O.side=ri,O.needsUpdate=!0,_.renderBufferDirect(G,F,W,O,E,dt),O.side=Ue):_.renderBufferDirect(G,F,W,O,E,dt),E.onAfterRender(_,F,G,W,O,dt)}function Xs(E,F,G){F.isScene!==!0&&(F=$t);const W=rt.get(E),O=p.state.lights,dt=p.state.shadowsArray,Et=O.state.version,Dt=bt.getParameters(E,O.state,dt,F,G),Ut=bt.getProgramCacheKey(Dt);let Gt=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?B:M).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Vt),Gt=new Map,W.programs=Gt);let qt=Gt.get(Ut);if(qt!==void 0){if(W.currentProgram===qt&&W.lightsStateVersion===Et)return nc(E,Dt),qt}else Dt.uniforms=bt.getUniforms(E),E.onBeforeCompile(Dt,_),qt=bt.acquireProgram(Dt,Ut),Gt.set(Ut,qt),W.uniforms=Dt.uniforms;const It=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=tt.uniform),nc(E,Dt),W.needsLights=Af(E),W.lightsStateVersion=Et,W.needsLights&&(It.ambientLightColor.value=O.state.ambient,It.lightProbe.value=O.state.probe,It.directionalLights.value=O.state.directional,It.directionalLightShadows.value=O.state.directionalShadow,It.spotLights.value=O.state.spot,It.spotLightShadows.value=O.state.spotShadow,It.rectAreaLights.value=O.state.rectArea,It.ltc_1.value=O.state.rectAreaLTC1,It.ltc_2.value=O.state.rectAreaLTC2,It.pointLights.value=O.state.point,It.pointLightShadows.value=O.state.pointShadow,It.hemisphereLights.value=O.state.hemi,It.directionalShadowMap.value=O.state.directionalShadowMap,It.directionalShadowMatrix.value=O.state.directionalShadowMatrix,It.spotShadowMap.value=O.state.spotShadowMap,It.spotLightMatrix.value=O.state.spotLightMatrix,It.spotLightMap.value=O.state.spotLightMap,It.pointShadowMap.value=O.state.pointShadowMap,It.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=qt,W.uniformsList=null,qt}function ec(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Or.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function nc(E,F){const G=rt.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ef(E,F,G,W,O){F.isScene!==!0&&(F=$t),A.resetTextureUnits();const dt=F.fog,Et=W.isMeshStandardMaterial?F.environment:null,Dt=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:hs,Ut=(W.isMeshStandardMaterial?B:M).get(W.envMap||Et),Gt=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),It=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,ce=!!G.morphAttributes.color;let ue=ei;W.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ue=_.toneMapping);const Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ee=Fe!==void 0?Fe.length:0,Ft=rt.get(W),bn=p.state.lights;if(st===!0&&(Tt===!0||E!==x)){const Ze=E===x&&W.id===b;tt.setState(W,E,Ze)}let ne=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==bn.state.version||Ft.outputColorSpace!==Dt||O.isBatchedMesh&&Ft.batching===!1||!O.isBatchedMesh&&Ft.batching===!0||O.isBatchedMesh&&Ft.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ft.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ft.instancing===!1||!O.isInstancedMesh&&Ft.instancing===!0||O.isSkinnedMesh&&Ft.skinning===!1||!O.isSkinnedMesh&&Ft.skinning===!0||O.isInstancedMesh&&Ft.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ft.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ft.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ft.instancingMorph===!1&&O.morphTexture!==null||Ft.envMap!==Ut||W.fog===!0&&Ft.fog!==dt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==tt.numPlanes||Ft.numIntersection!==tt.numIntersection)||Ft.vertexAlphas!==Gt||Ft.vertexTangents!==qt||Ft.morphTargets!==It||Ft.morphNormals!==Qt||Ft.morphColors!==ce||Ft.toneMapping!==ue||Ft.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Ft.__version=W.version);let nn=Ft.currentProgram;ne===!0&&(nn=Xs(W,F,O));let Ci=!1,Ve=!1,ps=!1;const fe=nn.getUniforms(),gn=Ft.uniforms;if(ut.useProgram(nn.program)&&(Ci=!0,Ve=!0,ps=!0),W.id!==b&&(b=W.id,Ve=!0),Ci||x!==E){ut.buffers.depth.getReversed()?(et.copy(E.projectionMatrix),_d(et),vd(et),fe.setValue(R,"projectionMatrix",et)):fe.setValue(R,"projectionMatrix",E.projectionMatrix),fe.setValue(R,"viewMatrix",E.matrixWorldInverse);const On=fe.map.cameraPosition;On!==void 0&&On.setValue(R,Ot.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&fe.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&fe.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ve=!0,ps=!0)}if(O.isSkinnedMesh){fe.setOptional(R,O,"bindMatrix"),fe.setOptional(R,O,"bindMatrixInverse");const Ze=O.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),fe.setValue(R,"boneTexture",Ze.boneTexture,A))}O.isBatchedMesh&&(fe.setOptional(R,O,"batchingTexture"),fe.setValue(R,"batchingTexture",O._matricesTexture,A),fe.setOptional(R,O,"batchingIdTexture"),fe.setValue(R,"batchingIdTexture",O._indirectTexture,A),fe.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&fe.setValue(R,"batchingColorTexture",O._colorsTexture,A));const ms=G.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0)&&kt.update(O,G,nn),(Ve||Ft.receiveShadow!==O.receiveShadow)&&(Ft.receiveShadow=O.receiveShadow,fe.setValue(R,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(gn.envMap.value=Ut,gn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),Ve&&(fe.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ft.needsLights&&Tf(gn,ps),dt&&W.fog===!0&&lt.refreshFogUniforms(gn,dt),lt.refreshMaterialUniforms(gn,W,z,j,p.state.transmissionRenderTarget[E.id]),Or.upload(R,ec(Ft),gn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Or.upload(R,ec(Ft),gn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&fe.setValue(R,"center",O.center),fe.setValue(R,"modelViewMatrix",O.modelViewMatrix),fe.setValue(R,"normalMatrix",O.normalMatrix),fe.setValue(R,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ze=W.uniformsGroups;for(let On=0,Bn=Ze.length;On<Bn;On++){const ic=Ze[On];N.update(ic,nn),N.bind(ic,nn)}}return nn}function Tf(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Af(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,F,G){rt.get(E.texture).__webglTexture=F,rt.get(E.depthTexture).__webglTexture=G;const W=rt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const G=rt.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){L=E,w=F,P=G;let W=!0,O=null,dt=!1,Et=!1;if(E){const Ut=rt.get(E);if(Ut.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(Ut.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Ut.__hasExternalTextures)A.rebindTextures(E,rt.get(E.texture).__webglTexture,rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const It=E.depthTexture;if(Ut.__boundDepthTexture!==It){if(It!==null&&rt.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Et=!0);const qt=rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?O=qt[F][G]:O=qt[F],dt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=rt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?O=qt[G]:O=qt,C.copy(E.viewport),k.copy(E.scissor),I=E.scissorTest}else C.copy(gt).multiplyScalar(z).floor(),k.copy(Ct).multiplyScalar(z).floor(),I=Lt;if(ut.bindFramebuffer(R.FRAMEBUFFER,O)&&W&&ut.drawBuffers(E,O),ut.viewport(C),ut.scissor(k),ut.setScissorTest(I),dt){const Ut=rt.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,G)}else if(Et){const Ut=rt.get(E.texture),Gt=F||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,G||0,Gt)}b=-1},this.readRenderTargetPixels=function(E,F,G,W,O,dt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){ut.bindFramebuffer(R.FRAMEBUFFER,Dt);try{const Ut=E.texture,Gt=Ut.format,qt=Ut.type;if(!ft.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&G>=0&&G<=E.height-O&&R.readPixels(F,G,W,O,Rt.convert(Gt),Rt.convert(qt),dt)}finally{const Ut=L!==null?rt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,W,O,dt,Et){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Dt=Dt[Et]),Dt){const Ut=E.texture,Gt=Ut.format,qt=Ut.type;if(!ft.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&G>=0&&G<=E.height-O){ut.bindFramebuffer(R.FRAMEBUFFER,Dt);const It=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.bufferData(R.PIXEL_PACK_BUFFER,dt.byteLength,R.STREAM_READ),R.readPixels(F,G,W,O,Rt.convert(Gt),Rt.convert(qt),0);const Qt=L!==null?rt.get(L).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Qt);const ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await gd(R,ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,It),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,dt),R.deleteBuffer(It),R.deleteSync(ce),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(E.image.width*W),dt=Math.floor(E.image.height*W),Et=F!==null?F.x:0,Dt=F!==null?F.y:0;A.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,Et,Dt,O,dt),ut.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,W=null,O=0){E.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,G=null);let dt,Et,Dt,Ut,Gt,qt,It,Qt,ce;const ue=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(dt=G.max.x-G.min.x,Et=G.max.y-G.min.y,Dt=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Gt=G.min.y,qt=G.isBox3?G.min.z:0):(dt=ue.width,Et=ue.height,Dt=ue.depth||1,Ut=0,Gt=0,qt=0),W!==null?(It=W.x,Qt=W.y,ce=W.z):(It=0,Qt=0,ce=0);const Fe=Rt.convert(F.format),ee=Rt.convert(F.type);let Ft;F.isData3DTexture?(A.setTexture3D(F,0),Ft=R.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Ft=R.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Ft=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,F.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,F.unpackAlignment);const bn=R.getParameter(R.UNPACK_ROW_LENGTH),ne=R.getParameter(R.UNPACK_IMAGE_HEIGHT),nn=R.getParameter(R.UNPACK_SKIP_PIXELS),Ci=R.getParameter(R.UNPACK_SKIP_ROWS),Ve=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ue.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ue.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ut),R.pixelStorei(R.UNPACK_SKIP_ROWS,Gt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qt);const ps=E.isDataArrayTexture||E.isData3DTexture,fe=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const gn=rt.get(E),ms=rt.get(F),Ze=rt.get(gn.__renderTarget),On=rt.get(ms.__renderTarget);ut.bindFramebuffer(R.READ_FRAMEBUFFER,Ze.__webglFramebuffer),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,On.__webglFramebuffer);for(let Bn=0;Bn<Dt;Bn++)ps&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,rt.get(E).__webglTexture,O,qt+Bn),E.isDepthTexture?(fe&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,rt.get(F).__webglTexture,O,ce+Bn),R.blitFramebuffer(Ut,Gt,dt,Et,It,Qt,dt,Et,R.DEPTH_BUFFER_BIT,R.NEAREST)):fe?R.copyTexSubImage3D(Ft,O,It,Qt,ce+Bn,Ut,Gt,dt,Et):R.copyTexSubImage2D(Ft,O,It,Qt,ce+Bn,Ut,Gt,dt,Et);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(Ft,O,It,Qt,ce,dt,Et,Dt,Fe,ee,ue.data):F.isCompressedArrayTexture?R.compressedTexSubImage3D(Ft,O,It,Qt,ce,dt,Et,Dt,Fe,ue.data):R.texSubImage3D(Ft,O,It,Qt,ce,dt,Et,Dt,Fe,ee,ue):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,O,It,Qt,dt,Et,Fe,ee,ue.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,O,It,Qt,ue.width,ue.height,Fe,ue.data):R.texSubImage2D(R.TEXTURE_2D,O,It,Qt,dt,Et,Fe,ee,ue);R.pixelStorei(R.UNPACK_ROW_LENGTH,bn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ne),R.pixelStorei(R.UNPACK_SKIP_PIXELS,nn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ci),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ve),O===0&&F.generateMipmaps&&R.generateMipmap(Ft),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,W=null,O=0){return E.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,G,W,O)},this.initRenderTarget=function(E){rt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){w=0,P=0,L=null,ut.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class Cl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new Cl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R_ extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class io extends Ri{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nh=new le,el=new Tl,dr=new eo,pr=new U;class Pl extends be{constructor(t=new _e,e=new io){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;nh.copy(s).invert(),el.copy(t.ray).applyMatrix4(nh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=c.getX(g);pr.fromBufferAttribute(u,m),ih(pr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,v=d;g<v;g++)pr.fromBufferAttribute(u,g),ih(pr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ih(i,t,e,n,s,r,o){const a=el.distanceSqToPoint(i);if(a<e){const l=new U;el.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class so extends Ne{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,s=[],r=[],o=[],a=new U,l=new le;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ae(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ll extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class C_ extends Ll{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const mr=new U,Go=new Dl,Vo=new Dl,Wo=new Dl;class P_ extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(mr.subVectors(s[0],s[1]).add(s[0]),c=mr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=mr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Go.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,v,m),Vo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,v,m),Wo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Vo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Wo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Go.calc(l),Vo.calc(l),Wo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function sh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function L_(i,t){const e=1-i;return e*e*t}function D_(i,t){return 2*(1-i)*i*t}function U_(i,t){return i*i*t}function As(i,t,e,n){return L_(i,t)+D_(i,e)+U_(i,n)}function I_(i,t){const e=1-i;return e*e*e*t}function N_(i,t){const e=1-i;return 3*e*e*i*t}function F_(i,t){return 3*(1-i)*i*i*t}function O_(i,t){return i*i*i*t}function ws(i,t,e,n,s){return I_(i,t)+N_(i,e)+F_(i,n)+O_(i,s)}class Gu extends Sn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(t,s.x,r.x,o.x,a.x),ws(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class B_ extends Sn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ws(t,s.x,r.x,o.x,a.x),ws(t,s.y,r.y,o.y,a.y),ws(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vu extends Sn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class k_ extends Sn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wu extends Sn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z_ extends Sn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xu extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sh(a,l.x,c.x,h.x,u.x),sh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new mt().fromArray(s))}return this}}var nl=Object.freeze({__proto__:null,ArcCurve:C_,CatmullRomCurve3:P_,CubicBezierCurve:Gu,CubicBezierCurve3:B_,EllipseCurve:Ll,LineCurve:Vu,LineCurve3:k_,QuadraticBezierCurve:Wu,QuadraticBezierCurve3:z_,SplineCurve:Xu});class H_ extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new nl[s.type]().fromJSON(s))}return this}}class il extends H_{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vu(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Wu(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Gu(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ll(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ul extends _e{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new U,f=new mt,d=new U,g=new U,v=new U;let m=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let y=0;y<=e;y++){const S=n+y*h*s,_=Math.sin(S),D=Math.cos(S);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*_,u.y=t[w].y,u.z=t[w].x*D,o.push(u.x,u.y,u.z),f.x=y/e,f.y=w/(t.length-1),a.push(f.x,f.y);const P=l[3*w+0]*_,L=l[3*w+1],b=l[3*w+0]*D;c.push(P,L,b)}}for(let y=0;y<e;y++)for(let S=0;S<t.length-1;S++){const _=S+y*t.length,D=_,w=_+t.length,P=_+t.length+1,L=_+1;r.push(D,w,L),r.push(P,L,w)}this.setIndex(r),this.setAttribute("position",new Ee(o,3)),this.setAttribute("uv",new Ee(a,2)),this.setAttribute("normal",new Ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.points,t.segments,t.phiStart,t.phiLength)}}class Il extends Ul{constructor(t=1,e=1,n=4,s=8){const r=new il;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Il(t.radius,t.length,t.capSegments,t.radialSegments)}}class Nl extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const S=new U,_=new U,D=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],S),d(e[w+1],_),d(e[w+2],D),l(S,_,D,y)}function l(y,S,_,D){const w=D+1,P=[];for(let L=0;L<=w;L++){P[L]=[];const b=y.clone().lerp(_,L/w),x=S.clone().lerp(_,L/w),C=w-L;for(let k=0;k<=C;k++)k===0&&L===w?P[L][k]=b:P[L][k]=b.clone().lerp(x,k/C)}for(let L=0;L<w;L++)for(let b=0;b<2*(w-L)-1;b++){const x=Math.floor(b/2);b%2===0?(f(P[L][x+1]),f(P[L+1][x]),f(P[L][x])):(f(P[L][x+1]),f(P[L+1][x+1]),f(P[L+1][x]))}}function c(y){const S=new U;for(let _=0;_<r.length;_+=3)S.x=r[_+0],S.y=r[_+1],S.z=r[_+2],S.normalize().multiplyScalar(y),r[_+0]=S.x,r[_+1]=S.y,r[_+2]=S.z}function h(){const y=new U;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];const _=m(y)/2/Math.PI+.5,D=p(y)/Math.PI+.5;o.push(_,1-D)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const S=o[y+0],_=o[y+2],D=o[y+4],w=Math.max(S,_,D),P=Math.min(S,_,D);w>.9&&P<.1&&(S<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),D<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,S){const _=y*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){const y=new U,S=new U,_=new U,D=new U,w=new mt,P=new mt,L=new mt;for(let b=0,x=0;b<r.length;b+=9,x+=6){y.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),w.set(o[x+0],o[x+1]),P.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),D.copy(y).add(S).add(_).divideScalar(3);const C=m(D);v(w,x+0,y,C),v(P,x+2,S,C),v(L,x+4,_,C)}}function v(y,S,_,D){D<0&&y.x===1&&(o[S]=y.x-1),_.x===0&&_.z===0&&(o[S]=D/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.vertices,t.indices,t.radius,t.details)}}class qu extends il{constructor(t){super(t),this.uuid=fs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new il().fromJSON(s))}return this}}const G_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Yu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Y_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Us(r,o,e,a,l,d,0),o}};function Yu(i,t,e,n,s){let r,o;if(s===sv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=rh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=rh(r,i[r],i[r+1],o);return o&&ro(o,o.next)&&(Ns(o),o=o.next),o}function wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ro(e,e.next)||pe(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&j_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?W_(i,n,s,r):V_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ns(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=X_(wi(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&q_(i,t,e,n,s,r):Us(wi(i),t,e,n,s,r,1);break}}}function V_(i){const t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Yi(s,a,r,l,o,c,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function W_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,v=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=sl(d,g,t,e,n),y=sl(v,m,t,e,n);let S=i.prevZ,_=i.nextZ;for(;S&&S.z>=p&&_&&_.z<=y;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Yi(a,h,l,u,c,f,S.x,S.y)&&pe(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Yi(a,h,l,u,c,f,_.x,_.y)&&pe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&Yi(a,h,l,u,c,f,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Yi(a,h,l,u,c,f,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function X_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ro(s,r)&&Ku(s,n,n.next,r)&&Is(s,r)&&Is(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ns(n),Ns(n.next),n=i=r),n=n.next}while(n!==i);return wi(n)}function q_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ev(o,a)){let l=$u(o,a);o=wi(o,o.next),l=wi(l,l.next),Us(o,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Y_(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Yu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(tv(c));for(s.sort(K_),r=0;r<s.length;r++)e=$_(s[r],e);return e}function K_(i,t){return i.x-t.x}function $_(i,t){const e=Z_(i,t);if(!e)return t;const n=$u(e,i);return wi(n,n.next),wi(e,e.next)}function Z_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Yi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Is(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&J_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function J_(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function j_(i,t,e,n){let s=i;do s.z===0&&(s.z=sl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Q_(s)}function Q_(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function sl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ev(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nv(i,t)&&(Is(i,t)&&Is(t,i)&&iv(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||ro(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ro(i,t){return i.x===t.x&&i.y===t.y}function Ku(i,t,e,n){const s=_r(pe(i,t,e)),r=_r(pe(i,t,n)),o=_r(pe(e,n,i)),a=_r(pe(e,n,t));return!!(s!==r&&o!==a||s===0&&gr(i,e,t)||r===0&&gr(i,n,t)||o===0&&gr(e,i,n)||a===0&&gr(e,t,n))}function gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function _r(i){return i>0?1:i<0?-1:0}function nv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ku(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function iv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $u(i,t){const e=new rl(i.i,i.x,i.y),n=new rl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rh(i,t,e,n){const s=new rl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ns(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function sv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Rs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];oh(t),ah(n,t);let o=t.length;e.forEach(oh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,ah(n,e[l]);const a=G_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function oh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ah(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fl extends _e{constructor(t=new qu([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Ee(s,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:rv;let S,_=!1,D,w,P,L;p&&(S=p.getSpacedPoints(h),_=!0,f=!1,D=p.computeFrenetFrames(h,!1),w=new U,P=new U,L=new U),f||(m=0,d=0,g=0,v=0);const b=a.extractPoints(c);let x=b.shape;const C=b.holes;if(!Rs.isClockWise(x)){x=x.reverse();for(let Q=0,ht=C.length;Q<ht;Q++){const R=C[Q];Rs.isClockWise(R)&&(C[Q]=R.reverse())}}const I=Rs.triangulateShape(x,C),H=x;for(let Q=0,ht=C.length;Q<ht;Q++){const R=C[Q];x=x.concat(R)}function q(Q,ht,R){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ht,R)}const K=x.length,j=I.length;function z(Q,ht,R){let pt,nt,ft;const ut=Q.x-ht.x,at=Q.y-ht.y,rt=R.x-Q.x,A=R.y-Q.y,M=ut*ut+at*at,B=ut*A-at*rt;if(Math.abs(B)>Number.EPSILON){const V=Math.sqrt(M),Z=Math.sqrt(rt*rt+A*A),Y=ht.x-at/V,bt=ht.y+ut/V,lt=R.x-A/Z,St=R.y+rt/Z,Wt=((lt-Y)*A-(St-bt)*rt)/(ut*A-at*rt);pt=Y+ut*Wt-Q.x,nt=bt+at*Wt-Q.y;const tt=pt*pt+nt*nt;if(tt<=2)return new mt(pt,nt);ft=Math.sqrt(tt/2)}else{let V=!1;ut>Number.EPSILON?rt>Number.EPSILON&&(V=!0):ut<-Number.EPSILON?rt<-Number.EPSILON&&(V=!0):Math.sign(at)===Math.sign(A)&&(V=!0),V?(pt=-at,nt=ut,ft=Math.sqrt(M)):(pt=ut,nt=at,ft=Math.sqrt(M/2))}return new mt(pt/ft,nt/ft)}const ot=[];for(let Q=0,ht=H.length,R=ht-1,pt=Q+1;Q<ht;Q++,R++,pt++)R===ht&&(R=0),pt===ht&&(pt=0),ot[Q]=z(H[Q],H[R],H[pt]);const ct=[];let gt,Ct=ot.concat();for(let Q=0,ht=C.length;Q<ht;Q++){const R=C[Q];gt=[];for(let pt=0,nt=R.length,ft=nt-1,ut=pt+1;pt<nt;pt++,ft++,ut++)ft===nt&&(ft=0),ut===nt&&(ut=0),gt[pt]=z(R[pt],R[ft],R[ut]);ct.push(gt),Ct=Ct.concat(gt)}for(let Q=0;Q<m;Q++){const ht=Q/m,R=d*Math.cos(ht*Math.PI/2),pt=g*Math.sin(ht*Math.PI/2)+v;for(let nt=0,ft=H.length;nt<ft;nt++){const ut=q(H[nt],ot[nt],pt);et(ut.x,ut.y,-R)}for(let nt=0,ft=C.length;nt<ft;nt++){const ut=C[nt];gt=ct[nt];for(let at=0,rt=ut.length;at<rt;at++){const A=q(ut[at],gt[at],pt);et(A.x,A.y,-R)}}}const Lt=g+v;for(let Q=0;Q<K;Q++){const ht=f?q(x[Q],Ct[Q],Lt):x[Q];_?(P.copy(D.normals[0]).multiplyScalar(ht.x),w.copy(D.binormals[0]).multiplyScalar(ht.y),L.copy(S[0]).add(P).add(w),et(L.x,L.y,L.z)):et(ht.x,ht.y,0)}for(let Q=1;Q<=h;Q++)for(let ht=0;ht<K;ht++){const R=f?q(x[ht],Ct[ht],Lt):x[ht];_?(P.copy(D.normals[Q]).multiplyScalar(R.x),w.copy(D.binormals[Q]).multiplyScalar(R.y),L.copy(S[Q]).add(P).add(w),et(L.x,L.y,L.z)):et(R.x,R.y,u/h*Q)}for(let Q=m-1;Q>=0;Q--){const ht=Q/m,R=d*Math.cos(ht*Math.PI/2),pt=g*Math.sin(ht*Math.PI/2)+v;for(let nt=0,ft=H.length;nt<ft;nt++){const ut=q(H[nt],ot[nt],pt);et(ut.x,ut.y,u+R)}for(let nt=0,ft=C.length;nt<ft;nt++){const ut=C[nt];gt=ct[nt];for(let at=0,rt=ut.length;at<rt;at++){const A=q(ut[at],gt[at],pt);_?et(A.x,A.y+S[h-1].y,S[h-1].x+R):et(A.x,A.y,u+R)}}}X(),st();function X(){const Q=s.length/3;if(f){let ht=0,R=K*ht;for(let pt=0;pt<j;pt++){const nt=I[pt];At(nt[2]+R,nt[1]+R,nt[0]+R)}ht=h+m*2,R=K*ht;for(let pt=0;pt<j;pt++){const nt=I[pt];At(nt[0]+R,nt[1]+R,nt[2]+R)}}else{for(let ht=0;ht<j;ht++){const R=I[ht];At(R[2],R[1],R[0])}for(let ht=0;ht<j;ht++){const R=I[ht];At(R[0]+K*h,R[1]+K*h,R[2]+K*h)}}n.addGroup(Q,s.length/3-Q,0)}function st(){const Q=s.length/3;let ht=0;Tt(H,ht),ht+=H.length;for(let R=0,pt=C.length;R<pt;R++){const nt=C[R];Tt(nt,ht),ht+=nt.length}n.addGroup(Q,s.length/3-Q,1)}function Tt(Q,ht){let R=Q.length;for(;--R>=0;){const pt=R;let nt=R-1;nt<0&&(nt=Q.length-1);for(let ft=0,ut=h+m*2;ft<ut;ft++){const at=K*ft,rt=K*(ft+1),A=ht+pt+at,M=ht+nt+at,B=ht+nt+rt,V=ht+pt+rt;Ot(A,M,B,V)}}}function et(Q,ht,R){l.push(Q),l.push(ht),l.push(R)}function At(Q,ht,R){Bt(Q),Bt(ht),Bt(R);const pt=s.length/3,nt=y.generateTopUV(n,s,pt-3,pt-2,pt-1);$t(nt[0]),$t(nt[1]),$t(nt[2])}function Ot(Q,ht,R,pt){Bt(Q),Bt(ht),Bt(pt),Bt(ht),Bt(R),Bt(pt);const nt=s.length/3,ft=y.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);$t(ft[0]),$t(ft[1]),$t(ft[3]),$t(ft[1]),$t(ft[2]),$t(ft[3])}function Bt(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function $t(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ov(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new nl[s.type]().fromJSON(s)),new Fl(n,t.options)}}const rv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(f,1-g),new mt(v,1-p)]:[new mt(a,1-l),new mt(h,1-u),new mt(d,1-g),new mt(m,1-p)]}};function ov(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class oo extends Nl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oo(t.radius,t.detail)}}class cs extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new U,f=new U,d=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],S=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let D=0;D<=e;D++){const w=D/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(w+_,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const S=h[p][y+1],_=h[p][y],D=h[p+1][y],w=h[p+1][y+1];(p!==0||o>0)&&d.push(S,_,w),(p!==n-1||l<Math.PI)&&d.push(_,D,w)}this.setIndex(d),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(v,3)),this.setAttribute("uv",new Ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class en extends Ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class av extends Ri{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zu extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class lv extends Zu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xo=new le,lh=new U,ch=new U;class cv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hv extends cv{constructor(){super(new Fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uv extends Zu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new hv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const hh=new le;class fv{constructor(t,e,n=0,s=1/0){this.ray=new Tl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Al,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return hh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hh),this}intersectObject(t,e=!0,n=[]){return ol(t,this,n,e),n.sort(uh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ol(t[s],this,n,e);return n.sort(uh),n}}function uh(i,t){return i.distance-t.distance}function ol(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ol(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);const ie=(i,t,e)=>i<t?t:i>e?e:i,Be=(i,t,e)=>i+(t-i)*e;function Ts(i){const t=Math.PI*2;let e=(i+Math.PI)%t;return e<0&&(e+=t),e-=Math.PI,e===-Math.PI?Math.PI:e}const cn=(i,t,e,n)=>Be(i,t,1-Math.exp(-e*n)),J=(i,t,e)=>{const n=ie((e-i)/(t-i),0,1);return n*n*(3-2*n)};function xn(i,t){let e=(Math.imul(i|0,668265261)^Math.imul(t|0,374761393))>>>0;return e=Math.imul(e^e>>>15,2246822507)>>>0,e=Math.imul(e^e>>>13,3266489909)>>>0,e=(e^e>>>16)>>>0,e/4294967296}function we(i,t){const e=Math.floor(i),n=i-e,s=xn(e,t),r=xn(e+1,t),o=n*n*(3-2*n);return s+(r-s)*o}const Ju=.75;class dv{constructor(t){T(this,"camera");T(this,"dist",13);T(this,"baseY",.7);T(this,"lookAhead",4.5);T(this,"aimDrop",1.5);T(this,"followRate",4.5);T(this,"heightRate",2.5);T(this,"dirRate",1.2);T(this,"s",0);T(this,"A",2);T(this,"y",1);T(this,"u",2);T(this,"dir",1);T(this,"initialised",!1);T(this,"tube",0);T(this,"tubeTarget",0);T(this,"tubeBack",.9);T(this,"tubeUp",.3);T(this,"target",new U);this.camera=new tn(36,t,.1,1500),this.setAspect(t)}setAspect(t){!(t>0)||!Number.isFinite(t)||(this.camera.aspect=t,this.camera.fov=t<1.4?48:36,this.camera.updateProjectionMatrix())}snap(t,e,n=e*.4,s=2,r=1){this.s=t,this.A=e,this.y=Number.isFinite(n)?n:e*.4,this.u=Number.isFinite(s)?s:2,this.dir=r>=0?1:-1,this.initialised=!0,this.apply()}update(t,e,n,s=e*.4,r=2,o=1){if(!(!Number.isFinite(t)||!Number.isFinite(e))){if((!(n>=0)||!Number.isFinite(n))&&(n=0),!this.initialised){this.snap(t,e,s,r,o);return}this.s=cn(this.s,t,this.followRate,n),this.A=cn(this.A,e,this.heightRate,n),Number.isFinite(s)&&(this.y=cn(this.y,s,this.heightRate,n)),Number.isFinite(r)&&(this.u=cn(this.u,r,this.heightRate,n)),Number.isFinite(o)&&(this.dir=cn(this.dir,Math.max(-1,Math.min(1,o)),this.dirRate,n)),this.tube=cn(this.tube,this.tubeTarget,1.5,n),this.apply()}}setTube(t){this.tubeTarget=t?1:0}get focusS(){return this.s}apply(){const t=this.lookAhead*this.dir;this.camera.position.set(-(this.s-t*.35),this.baseY+.4*this.A+.25*this.y+this.tubeUp*this.tube,this.u+this.dist+this.tubeBack*this.tube),this.target.set(-(this.s+t),this.y*.75+.15*this.A-this.aimDrop,this.u-.5);const e=Ju,n=-this.s,s=this.y+.9*e,r=this.u,o=this.camera.position;o.set(n+(o.x-n)*e,s+(o.y-s)*e,r+(o.z-r)*e),this.target.set(n+(this.target.x-n)*e,s+(this.target.y-s)*e,r+(this.target.z-r)*e),this.camera.lookAt(this.target)}}const pv=9.81;class ju{constructor(t=900,e=Math.random){T(this,"points");T(this,"capacity");T(this,"pos");T(this,"col");T(this,"vel");T(this,"life");T(this,"maxLife");T(this,"geo");T(this,"next",0);T(this,"alive",0);T(this,"carry",0);T(this,"rnd");this.capacity=t,this.rnd=e,this.pos=new Float32Array(t*3),this.col=new Float32Array(t*4),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t);for(let s=0;s<t;s++)this.pos[s*3+1]=-1e3;this.geo=new _e,this.geo.setAttribute("position",new Zt(this.pos,3).setUsage(me)),this.geo.setAttribute("color",new Zt(this.col,4).setUsage(me));const n=new io({size:.16,sizeAttenuation:!0,vertexColors:!0,transparent:!0,depthWrite:!1});this.points=new Pl(this.geo,n),this.points.frustumCulled=!1}get count(){return this.alive}emit(t,e,n,s,r,o,a,l,c=1.2){if(!(a>0)||!(l>0)||!Number.isFinite(a*l))return;this.carry+=a*l;let h=Math.floor(this.carry);this.carry-=h,h>this.capacity&&(h=this.capacity);for(let u=0;u<h;u++)this.spawn(t,e,n,s,r,o,c)}burst(t,e,n,s,r,o,a,l=1.8){const c=Math.min(this.capacity,Math.max(0,Math.floor(a)));for(let h=0;h<c;h++)this.spawn(t,e,n,s,r,o,l)}spawn(t,e,n,s,r,o,a){const l=this.next;this.next=(this.next+1)%this.capacity;const c=this.rnd,h=l*3;this.pos[h]=t+(c()-.5)*.3,this.pos[h+1]=e+c()*.1,this.pos[h+2]=n+(c()-.5)*.3;const u=.6+c()*.8;this.vel[h]=s*u+(c()-.5)*a,this.vel[h+1]=r*u+c()*a,this.vel[h+2]=o*u+(c()-.5)*a;const f=.5+c()*.6;this.maxLife[l]=f,this.life[l]=f}update(t){if(!(t>0)||!Number.isFinite(t))return;let e=0;const n=Math.exp(-1.2*t);for(let s=0;s<this.capacity;s++){const r=s*3,o=s*4;if(this.life[s]<=0){this.col[o+3]=0;continue}if(this.life[s]-=t,this.life[s]<=0){this.life[s]=0,this.col[o+3]=0,this.pos[r+1]=-1e3;continue}e++,this.vel[r]*=n,this.vel[r+2]*=n,this.vel[r+1]-=pv*t,this.pos[r]+=this.vel[r]*t,this.pos[r+1]+=this.vel[r+1]*t,this.pos[r+2]+=this.vel[r+2]*t;const a=this.life[s]/this.maxLife[s];this.col[o]=.92,this.col[o+1]=.97,this.col[o+2]=1,this.col[o+3]=Math.min(1,a*1.6)*.85}this.alive=e,this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}clear(){this.life.fill(0),this.alive=0;for(let t=0;t<this.capacity;t++)this.pos[t*3+1]=-1e3,this.col[t*4+3]=0}}const mv={A0:2,length:240,liftMax:2.4,arrivalTime:2.5,startS:0},Ki={base:6.4,hollowGain:.5,barrelPace:7.1},qe={waveP:.66,knee:.42,span:.07,coinKey:77777,calmShare:.45,calmBelow:.49,preCloseCut:.5,preCloseIn:22,preCloseFull:12},Xn={lenMin:31,lenSpan:17,aMin:34,aSpan:56,upLen:40,upFrom:.22,curtLen:16,curtFrom:.56,riseLen:10,fallLen:8,outLen:10,endHol:.3,blend:6,tailK:.6,powerFrom:.45,paceFrom:.56,paceFull:.6,deepP:.5,medLo:.72,medHi:.83,deepLo:.87,deepHi:.96},de={hol0:.56,hol1:.6,cover:.9,closeLen:2.4,aheadMin:2.4,aheadFull:2.8,ahead:4.2},Cn={grow:.22,hol0:.5,hol1:.6,closeLen:9},je={out0:6,out1:80,backMin:6.5,stretch:.2,rise0:-8,rise1:3,fall0:1,fall1:15,nearLen:5},fh=5,dh=35,gv=.85,_v=.5,vv=1/120,ph=.001,qo=new DataView(new ArrayBuffer(8));function xv(i){qo.setFloat64(0,i);let t=Math.imul(qo.getUint32(0)^2654435769,2246822507);return t^=t>>>13,t=Math.imul(t^qo.getUint32(4),3266489909),t^=t>>>16,t=Math.imul(t,668265261),t^=t>>>15,t|0}const ln=class ln{constructor(t=1,e={}){T(this,"p");T(this,"seed",1);T(this,"seedHash",0);T(this,"hollowWave",!1);T(this,"hollowShift",0);T(this,"secA",0);T(this,"secB",-1);T(this,"secPeak",0);T(this,"breakS",0);T(this,"arrival",0);T(this,"peeling",!1);T(this,"peelBlend",0);T(this,"time",0);T(this,"tab",[]);T(this,"bS",NaN);T(this,"bPB",NaN);T(this,"bK",0);T(this,"bG",0);T(this,"bX",0);T(this,"bPow",0);T(this,"bTop",0);this.p={...mv,...e},this.reset(t)}get A0(){return this.p.A0}get length(){return this.p.length}reset(t){this.seed=t,this.seedHash=xv(t),this.hollowWave=xn(qe.coinKey,this.seedHash)<qe.waveP,this.hollowShift=0;const e=this.p.length-45,n=[];for(let c=0;c<e;c+=1)n.push(we(c/28,this.seedHash));n.sort((c,h)=>c-h);const s=n[Math.floor(qe.calmShare*n.length)]??0;s>qe.calmBelow&&(this.hollowShift=s-qe.calmBelow);const r=Xn,o=r.lenMin+r.lenSpan*xn(91001,this.seedHash);this.secA=r.aMin+r.aSpan*xn(91002,this.seedHash),this.secB=this.hollowWave?this.secA+o:-1;const a=xn(91003,this.seedHash)<r.deepP,l=xn(91004,this.seedHash);this.secPeak=a?Be(r.deepLo,r.deepHi,l):Be(r.medLo,r.medHi,l),this.tab=[],this.bS=NaN,this.breakS=this.p.startS,this.arrival=0,this.peeling=!1,this.peelBlend=0,this.time=0}update(t){if(!(t>0)||!Number.isFinite(t))return;this.time+=t;let e=t;if(!this.peeling){const n=(1-this.arrival)*this.p.arrivalTime;if(e<n){this.arrival=Math.min(1,this.arrival+e/this.p.arrivalTime);return}this.arrival=1,this.peeling=!0,this.peelBlend=0,e-=n}for(;e>1e-12;){const n=Math.min(e,vv);this.peelBlend=Math.min(1,this.peelBlend+n/_v),this.breakS+=this.peelSpeed(this.breakS)*n,e-=n}}d(t){const e=t-this.breakS;return this.peeling?e:Math.abs(e)}breakBlend(t){return J(-2,1,t-this.breakS)}closeout(t){const e=this.p.length-dh;return J(e-fh,e,t)}power(t){return this.cached(1,t)}powerImpl(t){let e=0;const n=Xn;if(this.secB>this.secA&&t>this.secA-n.upLen&&t<this.secB+n.outLen){const s=this.sectionWeight(t),r=this.sectionHollow(t);e=s*r*J(Xn.powerFrom,.6,r)}return Math.max(we(t/28,this.seedHash),e,.8*this.closeout(t))}sectionWeight(t){const e=Xn,n=this.secA-e.upLen,s=this.secB+e.outLen;return!(this.secB>this.secA)||t<=n-e.blend||t>=s+e.blend?0:t>=n&&t<=s?1:J(n-e.blend,n,t)*(1-J(s,s+e.blend,t))}sectionEnding(t){return this.secB>this.secA?J(this.secA,this.secA+Xn.riseLen,t):1}sectionHollow(t){const e=Xn,n=this.secA,s=this.secB;if(t<=n){const r=n-t;if(r<=e.curtLen)return .6-(.6-e.curtFrom)*(r/e.curtLen);const o=r>=e.upLen?0:1-(r-e.curtLen)/(e.upLen-e.curtLen);return e.upFrom+(e.curtFrom-e.upFrom)*o*o}if(t<=s){const r=J(n,n+e.riseLen,t),o=1-(1-e.tailK)*J(n+e.riseLen,s-e.fallLen,t),a=J(s-e.fallLen,s,t);return .6+(this.secPeak-.6)*r*o*(1-a)}return .6-(.6-e.endHol)*J(s,s+e.outLen,t)}hollow(t){return this.cached(0,t)}cached(t,e){const n=(e-ln.T0)/ln.DX;let s=this.tab[t];if(s||(s=this.tab[t]=new Float64Array(Math.ceil((this.p.length+90)/ln.DX)+2).fill(NaN)),!(n>=0)||n>=s.length-1)return this.compute(t,e);const r=n|0;let o=s[r];o!==o&&(o=s[r]=this.compute(t,ln.T0+r*ln.DX));let a=s[r+1];return a!==a&&(a=s[r+1]=this.compute(t,ln.T0+(r+1)*ln.DX)),o+(a-o)*(n-r)}compute(t,e){return t===0?this.hollowImpl(e):t===1?this.powerImpl(e):this.paceImpl(e)}hollowImpl(t){let e=we(t/28,this.seedHash)-this.hollowShift;e<0&&(e=0),e>qe.knee&&(e=qe.knee+qe.span*(1-Math.exp(-(e-qe.knee)/qe.span)));const n=this.sectionWeight(t);n>0&&(e=Be(e,this.sectionHollow(t),n));const s=this.p.length-dh-fh;return e*=1-qe.preCloseCut*J(s-qe.preCloseIn,s-qe.preCloseFull,t),Math.max(e,.8*this.closeout(t))}peelSpeed(t){const e=this.power(t),n=Ki.base+Ki.hollowGain*e*e,s=this.cached(2,t);return(s>0&&n<Ki.barrelPace?n+(Ki.barrelPace-n)*s:n)+10*this.closeout(t)}paceImpl(t){const e=this.sectionWeight(t);return e>0?e*J(Xn.paceFrom,Xn.paceFull,this.sectionHollow(t)):0}faceAmp(t,e){return this.p.A0*(.45+.55*Math.exp(-t/35))*(1+.2*e)}whiteAmp(t,e){return this.p.A0*(.4+.6*Math.exp(t/2.5))*(1+.2*e)}amp(t){return this.ampImpl(t,!0)}swellAmp(t){return this.ampImpl(t,!1)}ampImpl(t,e){const n=t-this.breakS,s=e?this.barrelAmpWeight(t):0,r=s>0&&n>0?Be(this.power(t),this.bPow,s):this.power(t);let o;if(!this.peeling)o=this.faceAmp(Math.abs(n),r)*(.3+.7*this.arrival);else{const a=J(-2,1,n),l=Be(this.whiteAmp(Math.min(n,0),r),this.faceAmp(Math.max(n,0),r),a);o=this.peelBlend>=1?l:Be(this.faceAmp(Math.abs(n),r),l,this.peelBlend)}return s>0&&(o+=s*((n>0?this.bTop:this.faceAmp(0,r)*(1+Cn.grow))-o)),t>this.p.length&&(o*=Math.exp(-(t-this.p.length)/10)),o>ph?o:ph}breakTunnel(){this.bS=this.breakS,this.bPB=this.peelBlend;const t=this.hollow(this.breakS),e=this.breakS;this.bX=this.secB>this.secA&&e>=this.secB-5?1-J(this.secB+je.fall0,this.secB+je.fall1,e):0,this.bK=Math.max(J(Cn.hol0,Cn.hol1,t),this.bX)*this.peelBlend;const n=this.breakS;this.bG=this.secB>this.secA?J(this.secA+je.rise0,this.secA+je.rise1,n)*(1-J(this.secB+je.fall0,this.secB+je.fall1,n))*this.peelBlend:0,this.bPow=this.power(this.breakS),this.bTop=this.faceAmp(0,this.bPow)*(1+Cn.grow)}barrelAmpWeight(t){if(!this.peeling||!this.hollowWave)return 0;const e=t-this.breakS;if(e>=0){if(e>=je.out1)return 0;(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const o=this.bK,a=this.bG;if(o<=0&&a<=0)return 0;const l=a>0?a*(1-J(je.out0,je.out1,e)):0,c=3+(je.nearLen-3)*a;if(e>=c)return l;const h=J(0,c,e);return o+(l-o)*h}const n=this.hollow(t);(this.breakS!==this.bS||this.peelBlend!==this.bPB)&&this.breakTunnel();const s=Math.max(n>Cn.hol0?J(Cn.hol0,Cn.hol1,n):0,this.bX);if(s<=0)return 0;const r=Math.max(1.5+5*n,je.backMin);return e<=-r-Cn.closeLen?0:s*J(-r-Cn.closeLen,-r,e)*this.peelBlend}faceWidth(t,e=this.amp(t)){const n=this.power(t),s=t-this.breakS,r=(a,l)=>{const c=Math.exp(-a/12),h=1.7-.85*n*c,u=1+1.4*(1-Math.exp(-a/45));return h*u*l};let o;if(!this.peeling)o=r(Math.abs(s),1);else{const a=this.barrelAmpWeight(t);if(a>0){const l=s>0?Be(n,this.bPow,a):n,c=1+je.stretch*a,h=(f,d)=>{const g=f/c;return(1.7-.85*l*Math.exp(-g/12))*(1+1.4*(1-Math.exp(-g/45)))*d},u=h(Math.max(s,0),Be(Be(1.6,1,J(-2,1,s)),1,a));o=this.peelBlend>=1?u:Be(h(Math.abs(s),1),u,this.peelBlend)}else{const l=r(Math.max(s,0),Be(1.6,1,J(-2,1,s)));o=this.peelBlend>=1?l:Be(r(Math.abs(s),1),l,this.peelBlend)}}return Math.max(.6,e*o)}heightAt(t,e){const n=this.amp(t);if(e<0){const o=e/(2.4*n);return n*Math.exp(-o*o)}const s=this.faceWidth(t,n);if(e>=s)return 0;const r=1-e/s;return n*r*r}facePoint(t,e,n){const s=this.amp(t),r=this.faceWidth(t,s),o=e<0?0:e,a=o<1?1-o:0,l=s*a*a,c=2*s*a,h=Math.sqrt(r*r+c*c),u=n??{};return u.u=o*r,u.y=l,u.A=s,u.W=r,u.m=h,u.sinA=c/h,u}lipReach(t){if(!this.peeling)return 0;const e=t-this.breakS;if(e<=-3)return 0;const n=ie(1+e/3,0,1),s=Math.exp(-Math.max(e,0)/5),r=Be(n,s,J(-2,1,e)),o=this.closeout(t),a=o>0?1-gv*J(.1,.5,o):1;return this.amp(t)*.95*this.hollow(t)*r*this.peelBlend*a}barrelReach(t){const e=this.lipReach(t),n=this.barrelShape(t);if(n<=0)return e;const s=de.cover*this.faceWidth(t)*n;return s>e?s:e}barrelShape(t){if(!this.peeling||!this.hollowWave)return 0;const e=this.hollow(t),n=J(de.hol0,de.hol1,e);if(n<=0)return 0;const s=t-this.breakS,r=1.5+5*e;if(s<=-r-de.closeLen||s>=de.ahead)return 0;const o=this.closeout(t);if(o>=.45)return 0;const a=J(de.hol0,de.hol1,this.hollow(this.breakS)),l=de.aheadFull*a,c=de.aheadMin+(de.ahead-de.aheadMin)*a;return n*J(-r-de.closeLen,-r,s)*(1-J(l,c,s))*this.peelBlend*(1-J(.3,.45,o))}lift(t,e){const n=e<0?0:e;let s=1.2*J(1,1.1,n);return n<1&&(s+=this.p.liftMax*Math.pow(1-n,.75)*(this.swellAmp(t)/this.p.A0)),s}get finished(){return this.peeling&&this.breakS>this.p.length+10}};T(ln,"T0",-30),T(ln,"DX",.1);let al=ln;const se=14,ll=12,Mv=.55,mh=2*Math.PI/ll;function Qu(i,t){const e=i-t;return e<=-ll/2||e>=ll/2?i:i-Mv*Math.sin(mh*e)/mh}const tf=.7,qr={arch:.75,c1u:.5,c1y:1.3,c1uA:1,c1yA:-.2,throwD0:1.2,throwD1:3.2,c2u:1.3,c2y:.95,tipK:0,land:1.18};function ef(i,t){return Qu(t,i.breakS)}function ao(i,t,e=i.barrelReach(t),n=i.lipReach(t)){let s=i.hollowWave&&i.peeling?J(de.hol0,de.hol1,i.hollow(t))*i.peelBlend:0;return s>0&&(s*=1-J(.1,.5,i.closeout(t))),Math.max(e>1e-6?(e-n)/e:0,i.barrelShape(t),s)}function nf(i,t,e,n,s,r){const o=i.barrelReach(t),a=i.lipReach(t),l=ao(i,t,o,a),c=.12+(tf-.12)*l,h=Math.min(o*1.1,e*.85),u=qr,f=u.arch*e,d=i.peeling?J(u.throwD0,u.throwD1,t-i.breakS):0,g=u.c1u+(u.c1uA-u.c1u)*d,v=u.c1y+(u.c1yA-u.c1y)*d;for(let m=0;m<se;m++){const p=m/(se-1);let y,S;if(o<=.02)y=-.02,S=e-.01;else{const _=p*Math.PI*.8;if(y=o*Math.sin(_),S=e-h+h*Math.cos(_)+o*c*Math.sin(_),l>0){const w=1-p,P=w*w*w,L=3*w*w*p,b=3*w*p*p,x=p*p*p,C=(L*g+b*u.c2u+x*u.land)*o,k=P*e+L*(e+v*f)+b*(e+u.c2y*f)+x*u.tipK*e;y+=(C-y)*l,S+=(k-S)*l}let D=0;if(y<0){const w=y/(2.4*e);D=e*Math.exp(-w*w)}else if(y<n){const w=1-y/n;D=e*w*w}S<D+.04&&(S=D+.04)}s[m]=y,r[m]=S}return o>.02}const Br={c1u:.6,c1y:.12,c1uA:.8,c1yA:-.25,c2u:1.3,c2y:.85,land:1.18,kA:1.1,cap:.035,capK:.06},Fs={c2uH:1,grow:.22,dome1:.25,dome2:.25,capUp:.15,fadeD0:-1.9,fadeD1:1.2};function sf(i,t){if(!(i.hollowWave&&i.peeling))return 0;let e=J(de.hol0,de.hol1,i.hollow(t))*i.peelBlend;return e>0&&(e*=(1-J(.1,.5,i.closeout(t)))*i.barrelShape(t)*J(Fs.fadeD1,Fs.fadeD0,t-i.breakS)),e}const Ln={reachR:12,shape0:1.2,shape1:2.4,q1u:.55,q2y:.45,capR:1.48,capK:2.5,capL:.45};function rf(i,t,e,n){if(!(i.hollowWave&&i.peeling))return n;const s=t-i.breakS,r=J(de.hol0,de.hol1,i.hollow(i.breakS)),o=de.aheadFull*r;if(r<=0||s<=o||s>=o+Ln.reachR)return n;const a=J(de.hol0,de.hol1,i.hollow(t));if(a<=0)return n;const l=i.closeout(t);if(l>=.45)return n;let c=de.cover*e*a*r*(1-J(o,o+Ln.reachR,s))*i.peelBlend*(1-J(.3,.45,l));const h=Ln.capR+Ln.capK*Math.max(0,i.lipReach(t)-Ln.capL);return c>h&&(c=h),c>n?c:n}function of(i,t,e){const n=Math.min(Br.land*rf(i,t,i.faceWidth(t,e),i.barrelReach(t)),Br.kA*e),s=sf(i,t);return s>0?n+(Br.kA*e*(1+Fs.grow)-n)*s:n}function Sv(i,t,e,n,s,r){const o=rf(i,t,n,i.barrelReach(t)),a=i.lipReach(t),l=ao(i,t,o,a),c=.12+(tf-.12)*l,h=Math.min(o*1.1,e*.85),u=Br,f=i.peeling?J(qr.throwD0,qr.throwD1,t-i.breakS):0;let d=u.c1u+(u.c1uA-u.c1u)*f,g=u.c1y+(u.c1yA-u.c1y)*f,v=u.c2y;const m=i.hollowWave?Fs.c2uH:u.c2u;let p=Math.min(u.land*o,u.kA*e),y=Math.min(1,p/Math.max(.001,e)),S=e*(1+u.cap);const _=l>0?sf(i,t):0;if(_>0){const w=Fs;p+=(u.kA*e*(1+w.grow)-p)*_,y=Math.min(1,p/Math.max(.001,e)),g+=w.dome1*_,v+=w.dome2*_,S=e*(1+u.cap+w.capUp*_)}if(i.hollowWave&&f>0){const w=f*(1-J(Ln.shape0,Ln.shape1,p));w>0&&(d+=(Ln.q1u-d)*w,g-=g*w,v+=(1-Ln.q2y-v)*w)}const D=e*u.capK;for(let w=0;w<se;w++){const P=w/(se-1);let L,b;if(o<=.02)L=-.02,b=e-.01;else{const x=P*Math.PI*.8;if(L=o*Math.sin(x),b=e-h+h*Math.cos(x)+o*c*Math.sin(x),l>0){const k=1-P,I=3*k*k*P,H=3*k*P*P,q=P*P*P,K=(I*d+H*m+q)*p,j=e+e*(I*g+H*(v-1)*y-q*y);L+=(K-L)*l,b+=(j-b)*l}b>S-D&&(b=S-D+D*Math.tanh((b-(S-D))/D));let C=0;if(L<0){const k=L/(2.4*e);C=e*Math.exp(-k*k)}else if(L<n){const k=1-L/n;C=e*k*k}b<C+.04&&(b=C+.04)}s[w]=L,r[w]=b}return o>.02}function yv(i,t,e){let n=1/0;for(let s=0;s+1<se;s++){const r=i[s],o=i[s+1];if((r-e)*(o-e)<=0&&r!==o){const a=(e-r)/(o-r),l=t[s]+a*(t[s+1]-t[s]);l<n&&(n=l)}}return Number.isFinite(n)?n:NaN}const gh=new Float32Array(se),_h=new Float32Array(se);function cl(i,t,e){const n=ef(i,t),s=Math.max(i.amp(n),.001),r=i.faceWidth(n,s);return nf(i,n,s,r,gh,_h)?yv(gh,_h,e)-i.heightAt(t,e):NaN}const Yo=1,vh=.25,Ko=16;function xh(i,t,e){return cl(i,t,Math.max(0,e)*i.faceWidth(t))}function bv(i,t,e,n={dist:0,size:0}){let s=0;for(;s<=Ko&&xh(i,t+s,e)>=Yo;)s+=vh;if(s>0&&s<=Ko){let a=s-vh,l=s;for(let c=0;c<4;c++){const h=.5*(a+l);xh(i,t+h,e)>=Yo?a=h:l=h}s=.5*(a+l)}const r=Math.min(s,Ko),o=Math.max(Yo,i.amp(t+r));return n.dist=r,n.size=2*Math.atan(o/2/(r+1)),n}const hl=9.81,$o=16,Ev=3,Wi=.02,Tv=1.2,Av=.6,vr=-1.5,Zo=1.25,wv="load",ul={dragLin:.05,dragQuad:.0375,dragHi:3.5,vHi:11.5,liftScale:3.2,liftShoulder:.15,liftPocketL:4,liftHollow:.3,lipZeroT:.03,lipTaperT:.15,dropCut:1,dropSin0:.45,dropSin1:.7,dropT0:.3,dropT1:.5,dropV0:6,dropV1:8,liftAlongM:1,handsOffTrim:.25,handsOffK:2,handsOffT:.3,handsOffMin:-.2,handsOffMax:.7,beta:1,wMin:.6,wMax:1.4,lRef:.5,loadMaxTurn:2*Math.PI,loadMinSwing:.3,loadMaxSkid:.6,rollTau:.12,boardRate:16,carveR:1.2,carveLat:40,skidK:3.2,skidFree:.1,skidWipeLip:1.95,skidWipeMid:1.7,skidWipeLow:1.3,skidWipeSlow:1,slowV1:4.5,slowV2:6.5,skidLipMidT0:.15,skidLipMidT1:.35,skidMidLowT0:.64,skidMidLowT1:.86,skidSlowT0:.15,skidSlowT1:.5,skidSlide:.4,slideHbRate0:6,slideHbRate1:10,slideHvRate0:3,slideHvRate1:6,slideV0:4,slideV1:5.5,slideT0:.5,slideT1:.8,slideJerk0:55,slideJerk1:62,slideJerkTau:.02,skidSlideMax:2.2,slideVDecay:2,lipUpSin:.3,lipUpTime:.6,lipCapTime:1.5,lipMinV:2.5,lipClimbG:0,foamK:.035,hollowLip:.6,lipLandMaxT:1,fellBehindD:-25,foamD:-3,foamMaxTime:7,foamStuckTime:2.5,foamSteerTime:5,foamHardV:6.5,foamHeadOn:38*Math.PI/180,foamReboundRate:.8,trimV:7.6,trimK:3,trimSin0:.22,trimSin1:.32,trimT0:.12,trimT1:.2,trimStall0:.08,trimStall1:.2,trimTurn0:.6,trimTurn1:1.2,carryK:.8,carryD0:.5,carryD1:-1.5,carryTauIn:.25,carryTauOut:.6,carryMaxD:12,carryFadeD:16,carryV0:3.3,carryV1:4.3,carryOutK:2,carryOutD0:2,carryOutD:8,carryOutMaxV:11.5,carryOutSpinTau:4,carryOutSpin0:2,carryOutSpin1:3,carryOutTurn0:4,carryOutTurn1:5,carryOutSin0:.66,carryOutSin1:.8,lipGrace:.25,stuckD:5,carryMinV:3.8,foamPassiveK:.6,headOnMinV:4.4,headOnTime:.3,stuckTime:1.2,stallK:.9,driveDragCut:.15,driveAccel:1.5,tubeStayTMin:0,tubeMouthD:.5,tubeStayTMax:1.1,tubeSlowV:3,tubeUpSin:.5,tubeStayHol:.56,tubeShapeIn:.5,tubeReleaseHol:.72,tubeMinMade:1,tubeAheadNeed:8,tubeBackOffF:.85,missAheadD:1.5,missAheadTime:3,curtainLiftCut:.5,nbCut:.6,nbCutD0:4,nbCutD1:9,nbSin0:-.15,nbSin1:-.02,nbSin2:.3,nbSin3:.45,nbT0:.08,nbT1:.14,nbTurn0:3,nbTurn1:5,nbHol0:.52,nbHol1:.58,lipLandGrace:1.05,tubeTK:3,tubeNudge:.15,tubeLineMin:.1,tubeLineMax:.88,tubeRelTau:.25,tubeWorkTau:.05,tubeRiseTau:.8,tubeRelAccel:2.5,tubeNeutral0:.15,tubeCoastK:.2,tubeCoastReset:6,tubeStallRel:4,tubeWorkRel:5,tubeDriveRel:1.2,tubeRelMin:-2.5,tubeDeepF0:.7,tubeDeepF1:.85,tubeDeepSuck:2,tubeVMax:12.5,tubeCosMin:.85,tubeBoardVMax:13,tubeVTau:.1,tubeVAccel:15,spitHol:.8,spitExitHol:.585,spitMinTime:.5,spitMouthD:1,spitRel:.8,tubeHeadroom:1.27,tubeOutShape:.15,tubeEnterHold:.04,tubeRoofMin:1,tubePumpF0:.15,tubePumpF1:.35,tubePumpTau:.06,tubePumpRail0:.35,tubePumpGap:.6,tubePumpSeg:.9,tubePumpSwing:.3,entrySuck:0,pumpDv:2.9,rhythmMax:2.5,pumpClimb:.08},Rv={...ul,dragQuad:.011,dragHi:.3,vHi:10,liftScale:.35,nbCut:0,liftShoulder:.5,liftPocketL:6,liftHollow:0,lipTaperT:.15,liftAlongM:0,dropCut:0,carveR:1.6,carveLat:40},Cv=.25,Pv=.45,Lv=.15,Dv=.3,Uv=.3,xr=Math.PI-.05,Iv=1.5,Nv=.08,Fv=.08,Yr=1/60;function Jo(i,t){return 1-Math.pow(1+Yr/t,-i/Yr)}const Ov={grip:!1,targetHeading:null,stall:0,drive:0},Mh=50*Math.PI/180;class Kr{constructor(t){T(this,"s",0);T(this,"t",.25);T(this,"v",0);T(this,"hb",0);T(this,"hv",0);T(this,"skid",0);T(this,"stall",0);T(this,"drive",0);T(this,"state","idle");T(this,"pumpModel",wv);T(this,"turnRate",0);T(this,"d",0);T(this,"face",{u:0,y:0,A:0,W:0,m:0,sinA:0});T(this,"accel",0);T(this,"pumpAccel",0);T(this,"pumpLeft",0);T(this,"skidDecel",0);T(this,"roll",0);T(this,"railRate",0);T(this,"railRate1",0);T(this,"load",0);T(this,"pumpF",0);T(this,"railSide",0);T(this,"railSideAt",-1e9);T(this,"railFlipAt",-1e9);T(this,"railFlipSeg",1e9);T(this,"railSideHv",0);T(this,"railSegMax",0);T(this,"tubeRel",0);T(this,"tubeLine",.5);T(this,"tubeHRef",0);T(this,"tubeCoast",0);T(this,"zoneFor",0);T(this,"behindLip",!1);T(this,"behindFor",0);T(this,"frontSeen",!1);T(this,"weight",1);T(this,"inTube",!1);T(this,"tubeTime",0);T(this,"spat",!1);T(this,"spitRide",!1);T(this,"tubeHeight",0);T(this,"tubeHolMax",0);T(this,"missArmed",!0);T(this,"aheadFor",0);T(this,"rideTime",0);T(this,"lipUpTime",0);T(this,"lipTime",0);T(this,"carveRate",0);T(this,"foamTime",0);T(this,"foamRun",0);T(this,"spinNet",0);T(this,"headOnFor",0);T(this,"stuckFor",0);T(this,"carry",0);T(this,"notOutFor",1e9);T(this,"turnAccum",0);T(this,"prevSwing",0);T(this,"turnRateF",0);T(this,"boardRateF",0);T(this,"slideAllow",0);T(this,"vTurn",0);T(this,"targetRateF",0);T(this,"jerkMem",0);T(this,"lastTarget",NaN);T(this,"turningDown",!1);T(this,"lastPumpAt",-1e9);T(this,"prevSin",0);T(this,"peakSinUp",0);T(this,"maxTSince",0);T(this,"events",[]);this.wave=t}setWave(t){this.wave=t}get riding(){return this.state==="riding"}static skidLimit(t,e){const n=ul,s=n.skidWipeLip+(n.skidWipeMid-n.skidWipeLip)*J(n.skidLipMidT0,n.skidLipMidT1,t)+(n.skidWipeLow-n.skidWipeMid)*J(n.skidMidLowT0,n.skidMidLowT1,t),r=ie((t-n.skidSlowT0)/(n.skidSlowT1-n.skidSlowT0),0,1),o=Math.min(s,n.skidWipeLip+(n.skidWipeSlow-n.skidWipeLip)*r);return o+(s-o)*J(n.slowV1,n.slowV2,e)}spawn(t,e,n,s){return!Number.isFinite(t)||!Number.isFinite(e)||!Number.isFinite(n)||!Number.isFinite(s)?!1:(this.s=t,this.t=ie(e,Wi,Zo),this.v=ie(n,0,$o),this.hb=s,this.hv=s,this.skid=0,this.skidDecel=0,this.accel=0,this.pumpAccel=0,this.pumpLeft=0,this.stall=0,this.drive=0,this.roll=0,this.railRate=0,this.railRate1=0,this.load=0,this.pumpF=0,this.railSide=0,this.railSideAt=-1e9,this.railFlipAt=-1e9,this.railFlipSeg=1e9,this.tubeRel=0,this.tubeCoast=0,this.zoneFor=0,this.behindLip=!1,this.behindFor=0,this.frontSeen=!1,this.weight=1,this.missArmed=!0,this.aheadFor=0,this.state="riding",this.turnRate=0,this.turnRateF=0,this.boardRateF=0,this.slideAllow=0,this.vTurn=n,this.targetRateF=0,this.jerkMem=0,this.lastTarget=NaN,this.turningDown=!1,this.turnAccum=0,this.prevSwing=0,this.foamTime=0,this.foamRun=0,this.spinNet=0,this.headOnFor=0,this.stuckFor=0,this.carry=0,this.notOutFor=1e9,this.inTube=!1,this.spitRide=!1,this.tubeTime=0,this.tubeHeight=0,this.rideTime=0,this.lipUpTime=0,this.lipTime=0,this.lastPumpAt=-1e9,this.prevSin=Math.sin(s),this.peakSinUp=Math.max(0,this.prevSin),this.maxTSince=this.t,this.events.length=0,this.d=this.wave.d(t),this.wave.facePoint(this.s,this.t,this.face),!0)}drain(){if(this.events.length===0)return Bv;const t=this.events;return this.events=[],t}tryLaunch(t){return!1}get lean(){return this.roll}step(t,e=Ov){if(this.state!=="riding"||!(t>0)||!Number.isFinite(t))return;const n=this.wave,s=this.pumpModel==="impulse"?Rv:ul;this.rideTime+=t;const r=Number.isFinite(e.stall)?ie(e.stall,0,1):0,o=e.drive!==void 0&&Number.isFinite(e.drive)?ie(e.drive,0,1):0;this.stall=r,this.drive=o;let a,l;if(e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading))a=e.targetHeading,l=s.boardRate;else{const R=Math.round(this.hb/Math.PI),pt=ie(s.handsOffTrim+s.handsOffK*(s.handsOffT-this.t),s.handsOffMin,s.handsOffMax);a=R*Math.PI+((R&1)===0?-pt:pt),l=Ev}const c=e.grip&&e.targetHeading!==null&&Number.isFinite(e.targetHeading)?e.targetHeading:NaN,h=Number.isFinite(c)&&Number.isFinite(this.lastTarget)?Math.abs(c-this.lastTarget)/t:0;this.lastTarget=c,this.targetRateF+=(h-this.targetRateF)*(1-Math.exp(-t/s.slideJerkTau));let u=a-this.hb;u>xr?u=xr:u<-xr&&(u=-xr);const f=l*t,d=u>f?f:u<-f?-f:u;this.hb+=d;const g=s.carveR*(1+.5*r),v=Ts(this.hb-this.hv),m=Math.max(this.v,1.5),p=Math.min(m/g,s.carveLat/m)*(1+Iv*Math.abs(Math.sin(v)));this.carveRate=p;const y=p*t,S=v>y?y:v<-y?-y:v;this.hv+=S,this.turnRate=S/t,this.skid=Ts(this.hb-this.hv);const _=1-Math.exp(-t/Fv);this.turnRateF+=(this.turnRate-this.turnRateF)*_,this.boardRateF+=(d/t-this.boardRateF)*_;const D=1-Math.exp(-t/s.rollTau);this.railRate1+=(this.turnRate-this.railRate1)*D,this.railRate+=(this.railRate1-this.railRate)*D,this.roll=kv(this.v,this.railRate),this.turnAccum*this.railRate<0&&(this.prevSwing=Math.abs(this.turnAccum),this.turnAccum=0),this.turnAccum+=S;const w=n.facePoint(this.s,this.t,this.face),P=this.d,L=n.d(this.s);this.d=L;const b=Math.sin(this.hv),x=Math.cos(this.hv),C=this.v,k=Math.abs(Math.sin(this.skid))-s.skidFree;this.skidDecel=k>0?s.skidK*k*k*C:0;const I=this.t<=Wi&&b>0?s.lipClimbG*b:b;let H=1;if(this.pumpModel==="load"){const R=this.v*this.railRate/hl;let pt=Math.min(1,(Math.sqrt(1+R*R)-1)/s.lRef);Math.abs(this.turnAccum)>s.loadMaxTurn||this.prevSwing<s.loadMinSwing?pt=0:pt*=1-J(.5*s.loadMaxSkid,s.loadMaxSkid,Math.abs(this.skid)),this.load=pt;const nt=I<0?1:I>0?-1:0;H=ie(1+s.beta*nt*pt,s.wMin,s.wMax)}else this.load=0;this.weight=H;const q=this.railRate1>s.tubePumpRail0?1:this.railRate1<-s.tubePumpRail0?-1:0,K=Math.abs(this.hv-this.railSideHv);if(K>this.railSegMax&&(this.railSegMax=K),q!==0&&q!==this.railSide){if(this.railSide!==0){const R=this.railSegMax>=s.tubePumpSwing;this.railFlipSeg=R?this.rideTime-this.railSideAt:1e9,this.railFlipAt=this.rideTime}this.railSide=q,this.railSideAt=this.rideTime,this.railSideHv=this.hv,this.railSegMax=0}const j=this.rideTime-this.railFlipAt<s.tubePumpGap&&this.railFlipSeg<s.tubePumpSeg?1:0;this.pumpF+=(j-this.pumpF)*Jo(t,s.tubePumpTau);const z=(s.dragLin*C+s.dragQuad*C*C+(C>s.vHi?s.dragHi*(C-s.vHi)*(C-s.vHi):0))*(1-s.driveDragCut*o),ot=this.inTube;let ct=-hl*w.sinA*I*H-z-this.skidDecel-s.stallK*r*C+s.driveAccel*o;if(ot||(ct-=s.foamK*C*J(0,-3,L)),!ot&&L<0&&x>0&&!(e.grip&&r<.5&&C>=s.carryMinV)&&(ct-=s.foamPassiveK*C*J(0,-1,L)*(1-J(s.trimTurn0,s.trimTurn1,Math.abs(this.turnRateF)))),e.grip&&x>0&&C<s.trimV&&s.trimK>0&&this.t<s.trimT1&&b<.1&&-b<s.trimSin1&&L>-1&&r<1&&Math.abs(this.turnRateF)<s.trimTurn1){const R=J(-.1,.05,-b)*(1-J(s.trimSin0,s.trimSin1,-b))*J(-1,.5,L)*(1-J(s.trimT0,s.trimT1,this.t))*(1-J(s.trimTurn0,s.trimTurn1,Math.abs(this.turnRateF)))*(1-r)*(1-J(s.trimStall0,s.trimStall1,r));ct+=s.trimK*(s.trimV-C)*R}let gt=0;if(ot){const R=J(s.tubePumpF0,s.tubePumpF1,this.pumpF),pt=e.grip?Math.max(o,R):0,nt=R>=o?s.tubeWorkRel:s.tubeDriveRel,ft=Math.max(0,this.tubeCoast+t*(1-R)*(1-J(.1,.3,r))-s.tubeCoastReset*(e.grip?R:0)*t);this.tubeCoast=ft;const ut=-s.tubeNeutral0-s.tubeCoastK*ft*ft,at=J(s.tubeDeepF0,s.tubeDeepF1,-L/(1.5+5*n.hollow(this.s))),rt=e.grip?Math.max(s.tubeRelMin,(1-pt)*(ut-s.tubeStallRel*r*(2-r))+pt*nt*(1-at)-s.tubeDeepSuck*at):s.tubeRelMin,A=s.tubeRelTau+(s.tubeWorkTau-s.tubeRelTau)*pt;if(rt>this.tubeRel){const M=Yr/Math.log(1+Yr/s.tubeRiseTau),B=rt-this.tubeRel,V=s.tubeRelAccel*M,Z=B>V?(B-V)/s.tubeRelAccel:0;this.tubeRel+=t<=Z?s.tubeRelAccel*t:B-Math.min(B,V)*Math.exp(-(t-Z)/M)}else this.tubeRel+=(rt-this.tubeRel)*Jo(t,A);gt=ie(n.peelSpeed(n.breakS)+this.tubeRel,0,s.tubeVMax),ct=ie((Math.min(s.tubeBoardVMax,gt/Math.max(s.tubeCosMin,x))-C)*Jo(t,s.tubeVTau)/t,-s.tubeVAccel,s.tubeVAccel)}this.accel=ct;let Ct=C+ct*t;if(Ct>0||(Ct=0),this.pumpAccel=0,this.pumpModel==="impulse"&&(Ct=this.impulsePump(Ct,b,x,t,s)),this.v=Ct>$o?$o:Ct,this.spinNet+=this.boardRateF*t-this.spinNet*t/s.carryOutSpinTau,L<s.carryD0||this.carry!==0){let R=0;if(L<s.carryD0&&e.grip&&!this.inTube&&x>0){const nt=Ki.base*x*(1-n.closeout(this.s))*J(s.carryD0,s.carryD1,L)*J(-s.carryFadeD,-s.carryMaxD,L)*J(s.carryV0,s.carryV1,C)*(1-r),ft=s.carryK*nt*(1-J(s.trimTurn0,s.trimTurn1,Math.abs(this.turnRateF))),ut=s.carryOutK*nt*J(-s.carryOutD0,-s.carryOutD,L)*(1-J(s.carryOutSin0,s.carryOutSin1,-b))*(1-J(s.carryOutTurn0,s.carryOutTurn1,Math.abs(this.turnRateF)))*(1-J(s.carryOutSpin0,s.carryOutSpin1,Math.abs(this.spinNet)));R=ft+Math.min(ut,Math.max(0,s.carryOutMaxV-C*x-ft))}const pt=R>this.carry?s.carryTauIn:s.carryTauOut;this.carry+=(R-this.carry)*t/(pt+t),this.carry<.001&&R===0&&(this.carry=0)}this.s+=(ot?gt:C*x+this.carry)*t;let Lt;if(ot)this.tubeLine=ie(this.tubeLine-s.tubeNudge*(b-Math.sin(this.tubeHRef))*t,s.tubeLineMin,s.tubeLineMax),Lt=this.t+(this.tubeLine-this.t)*(1-Math.exp(-s.tubeTK*t));else{const R=L>0?L:0,pt=L>0?s.nbCut*(1-J(s.nbCutD0,s.nbCutD1,L))*J(s.nbSin0,s.nbSin1,b)*(1-J(s.nbSin2,s.nbSin3,b))*J(s.nbT0,s.nbT1,this.t)*(1-J(s.nbTurn0,s.nbTurn1,Math.abs(this.turnRateF)))*(1-J(s.nbHol0,s.nbHol1,n.hollow(this.s))):0,nt=(s.liftShoulder+(1-s.liftShoulder)*(1-pt)*Math.exp(-R/s.liftPocketL))*(1+s.liftHollow*n.power(this.s)),ft=1.2*J(1,1.1,this.t),ut=1-s.dropCut*J(s.dropSin0,s.dropSin1,-b)*(1-J(s.dropT0,s.dropT1,this.t))*(1-J(s.dropV0,s.dropV1,C)),at=(1-s.curtainLiftCut*J(.5,.9,n.barrelShape(this.s)))*s.liftScale*nt*(n.lift(this.s,this.t)-ft)*ut*J(s.lipZeroT,s.lipTaperT,this.t)+ft,rt=-C*b/w.m-at/(s.liftAlongM?w.m:w.W);Lt=this.t+rt*t}Lt>Zo&&(Lt=Zo);const X=Math.sin(this.hb)<b-Nv||x*this.turnRateF<-.5;if(this.turningDown=X,Lt<=Wi?(Lt=Wi,this.lipTime+=t,b>s.lipUpSin?X||(this.lipUpTime+=t):this.lipUpTime=0):(this.lipTime=0,this.lipUpTime=0),this.t=Lt,n.facePoint(this.s,this.t,this.face),this.d=n.d(this.s),this.t<=Wi){if(this.v<s.lipMinV&&!X)return this.kickout("too slow at the lip");if(this.lipUpTime>s.lipUpTime)return this.kickout("over the back");if(this.lipTime>s.lipCapTime&&!X)return this.kickout("over the back")}const st=n.hollow(this.s),Tt=1.5+5*st,et=this.d;if(!this.inTube){const R=n.barrelShape(this.s);et>=vr&&(this.frontSeen=!0),et<vr&&R>=s.tubeShapeIn?this.behindLip=!0:this.behindLip&&(R<.05||et>0&&R<s.tubeShapeIn)&&(this.behindLip=!1)}const At=!this.inTube&&!this.behindLip&&e.grip&&this.v>=s.tubeSlowV&&b<=s.tubeUpSin&&this.t>Wi&&this.t<.9&&et>-Tt&&n.closeout(this.s)<.5&&n.barrelShape(this.s)>=s.tubeShapeIn&&n.hollow(this.s+s.tubeAheadNeed)>=s.hollowLip&&cl(n,this.s,this.face.u)>=s.tubeHeadroom;if(this.zoneFor=At?this.zoneFor+t:0,!this.inTube)At&&this.zoneFor>=s.tubeEnterHold-1e-9?(this.inTube=!0,this.foamRun=0,this.tubeTime=0,this.spat=!1,this.tubeHolMax=st,this.missArmed=!1,this.tubeRel=this.v*Math.cos(this.hv)+this.carry-n.peelSpeed(n.breakS),this.carry=0,this.tubeLine=ie(this.t,s.tubeLineMin,s.tubeLineMax),this.tubeHRef=this.hb,this.tubeCoast=0,this.pumpF=0,this.railSide=0,this.railFlipAt=-1e9,this.events.push({type:"tubeEnter"})):n.hollow(n.breakS)<.5?(this.missArmed=!0,this.aheadFor=0):this.missArmed&&et>s.missAheadD&&n.barrelShape(n.breakS)>=s.tubeShapeIn&&(this.aheadFor=r>.1?0:this.aheadFor+t,this.aheadFor>s.missAheadTime&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"ran ahead"})));else{if(this.tubeTime+=t,st>this.tubeHolMax&&(this.tubeHolMax=st),et<=-Tt)return this.inTube=!1,this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}),this.wipe("barrel closed");!this.spat&&!this.spitRide&&et>-s.spitMouthD&&this.tubeHolMax>=s.spitHol&&st>=s.spitExitHol&&n.sectionEnding(n.breakS)*(1-J(s.hollowLip,s.tubeReleaseHol,n.hollow(n.breakS)))>=.5&&this.tubeTime>=Math.max(s.spitMinTime,s.tubeMinMade)&&this.tubeRel>s.spitRel&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));const pt=!(cl(n,this.s,this.face.u)>=s.tubeRoofMin),nt=et>=s.tubeMouthD&&n.barrelShape(this.s)<=s.tubeOutShape;if(nt||pt&&et>=de.aheadFull)this.inTube=!1,this.events.push({type:"tubeExit",duration:this.tubeTime,made:this.tubeTime>=s.tubeMinMade}),!this.spat&&!this.spitRide&&(nt||!pt)&&this.tubeHolMax>=s.spitHol&&st>=s.spitExitHol&&this.tubeTime>=Math.max(s.spitMinTime,s.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"}));else if(st<s.tubeStayHol){this.inTube=!1;const ft=-et/Tt<s.tubeBackOffF;return this.events.push({type:"tubeExit",duration:this.tubeTime,made:ft&&this.tubeTime>=s.tubeMinMade}),ft&&!this.spat&&!this.spitRide&&this.tubeHolMax>=s.spitHol&&this.tubeTime>=Math.max(s.spitMinTime,s.tubeMinMade)&&(this.spat=!0,this.spitRide=!0,this.events.push({type:"spit"})),this.spat||ft?void 0:this.wipe("barrel closed")}else this.t>s.tubeStayTMin&&this.t<s.tubeStayTMax||(this.inTube=!1,this.events.push({type:"tubeExit",duration:this.tubeTime,made:!1}))}this.tubeHeight=this.inTube?n.amp(this.s):0;const Ot=Math.abs(this.skid);this.vTurn=Math.max(this.v,this.vTurn-s.slideVDecay*t);const Bt=this.boardRateF,$t=this.turnRateF;this.jerkMem=Math.abs(Bt)>=s.slideHbRate0?Math.max(this.jerkMem,this.targetRateF):this.targetRateF;const Q=Kr.skidLimit(this.t,this.v),ht=Bt*$t>0?J(s.slideHbRate0,s.slideHbRate1,Math.abs(Bt))*J(s.slideHvRate0,s.slideHvRate1,Math.abs($t))*J(s.slideV0,s.slideV1,this.vTurn)*(1-J(s.slideT0,s.slideT1,this.t))*(1-J(s.slideJerk0,s.slideJerk1,this.jerkMem)):0;if(this.slideAllow=Math.min(ht*(Kr.skidLimit(this.t,Math.max(this.vTurn,s.slowV2))-Q+s.skidSlide),Math.max(0,s.skidSlideMax-Q)),Ot>Q+this.slideAllow)return this.wipe("caught a rail");if(this.v<Tv&&Ot>Av)return this.wipe("bogged down");if(!this.inTube){if(P>=0&&et<0){const at=Math.abs(Ts(this.hb-Math.PI)),rt=Math.abs(this.turnRateF)>s.foamReboundRate;if(this.v>=s.foamHardV&&at<=s.foamHeadOn&&!rt)return this.wipe("too hard into the foam")}const R=Math.abs(this.turnRateF)>s.foamReboundRate,pt=e.grip&&r<.5&&this.v>=s.carryMinV&&Math.cos(this.hb)>0;this.notOutFor=pt?0:this.notOutFor+t;const nt=this.notOutFor<s.lipGrace;if(et<0){const at=Math.abs(Ts(this.hb-Math.PI));if(this.headOnFor=at<=s.foamHeadOn&&!R&&this.v>=s.headOnMinV?this.headOnFor+t:0,this.stuckFor=this.v<s.carryMinV||et<-s.stuckD&&!pt?this.stuckFor+t:0,this.headOnFor>s.headOnTime)return this.wipe("too hard into the foam");if(this.stuckFor>s.stuckTime)return this.wipe(this.v<s.carryMinV?"fell behind the wave":"stuck in the whitewater")}else this.headOnFor=0,this.stuckFor=0;if(this.foamRun=et<0?this.foamRun+t:0,this.foamRun>(pt?s.foamSteerTime:s.foamStuckTime))return this.wipe("stuck in the whitewater");const ft=n.barrelShape(this.s);if(this.behindFor=this.behindLip&&ft>=s.tubeShapeIn?this.behindFor+t:0,(this.frontSeen&&et<vr&&ft>=s.tubeShapeIn||this.behindFor>s.lipLandGrace)&&this.t<s.lipLandMaxT)return this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you");if(st>=s.hollowLip&&this.t<s.lipLandMaxT)return et<vr&&!(nt&&et>=-s.carryMaxD)?(this.missArmed&&(this.missArmed=!1,this.events.push({type:"tubeMiss",reason:"lip landed"})),this.wipe("the lip landed on you")):void 0;if(this.foamTime=et<s.foamD?this.foamTime+t:0,et<s.fellBehindD||this.foamTime>s.foamMaxTime)return this.wipe("fell behind the wave")}}impulsePump(t,e,n,s,r){e>this.peakSinUp&&(this.peakSinUp=e),this.t>this.maxTSince&&(this.maxTSince=this.t);const o=this.rideTime-this.lastPumpAt;if(this.prevSin>0&&e<=0&&n*this.turnRate<-.3&&this.t<Pv&&this.peakSinUp>=Lv&&o>=Dv&&this.maxTSince-this.t>=r.pumpClimb){const a=ie((.6-this.t)/.45,.2,1),l=o<=r.rhythmMax||this.lastPumpAt<-1e8?1:.5,c=r.pumpDv*a*l*Math.min(1,this.peakSinUp/Uv);this.pumpLeft+=c,this.lastPumpAt=this.rideTime,this.peakSinUp=0,this.maxTSince=this.t,this.events.push({type:"pump",dv:c,t:this.t})}if(this.prevSin=e,this.pumpLeft>0){const a=Math.min(this.pumpLeft,r.pumpDv/Cv*s);this.pumpLeft-=a,t+=a,this.pumpAccel=a/s}return t}wipe(t){this.state="wiped",this.events.push({type:"wipe",reason:t})}kickout(t){this.state="kickedOut",this.events.push({type:"kickout",reason:t})}}const Bv=[];function kv(i,t){const e=Math.atan(i*t/hl);return Number.isFinite(e)?ie(e,-Mh,Mh):0}function zv(){return{p:new U,es:new U,eu:new U,n:new U}}const Hv={u:0,y:0,A:0,W:0,m:0,sinA:0};function Gv(i,t,e,n){const s=i.facePoint(t,e,Hv),r=e<0?0:e,o=2*s.A*(r<1?1-r:0),a=s.m;return n.p.set(-t,s.y,s.u),n.es.set(-1,0,0),n.eu.set(0,o/a,-s.W/a),n.n.set(0,s.W/a,o/a),n}function Vv(i,t,e,n,s){const r=Math.cos(t),o=Math.sin(t);e.set(i.es.x*r+i.eu.x*o,i.es.y*r+i.eu.y*o,i.es.z*r+i.eu.z*o),n.copy(i.n),s.crossVectors(e,n)}const kr=1.85,Wv=.5,Cs=.065,Sh=.45,Xv=.45,yh=.5,bh=.3,Eh=.3;function qv(){const i=kr,t=Wv/2,e=new qu,n=i*.52,s=-i*.48;e.moveTo(s,-t*.62),e.bezierCurveTo(-i*.25,-t*1.02,i*.1,-t*1.05,i*.28,-t*.75),e.bezierCurveTo(i*.42,-t*.45,n-.04,-.03,n,0),e.bezierCurveTo(n-.04,.03,i*.42,t*.45,i*.28,t*.75),e.bezierCurveTo(i*.1,t*1.05,-i*.25,t*1.02,s,t*.62),e.lineTo(s,-t*.62);const r=new Fl(e,{depth:Cs*.5,bevelEnabled:!0,bevelThickness:Cs*.25,bevelSize:.02,bevelSegments:2,curveSegments:10});r.rotateX(-Math.PI/2),r.translate(0,Cs*.25,0);const o=r.attributes.position;for(let a=0;a<o.count;a++){const l=o.getX(a);l>i*.2&&o.setY(a,o.getY(a)+Math.pow((l-i*.2)/(i*.32),2)*.09),l<-i*.38&&o.setY(a,o.getY(a)+Math.pow((-l-i*.38)/(i*.1),2)*.02)}return r.computeVertexNormals(),r}function Ss(i,t,e){const n=new re(new Il(i,t,3,8),e);return n.castShadow=!0,n}const Th=new U(0,1,0),Mr={base:.9,k:.25,refH:3.2,min:.74},jo={on:.3,off:.22,opacity:.7};class Yv{constructor(){T(this,"group",new He);T(this,"rideRoot",new He);T(this,"board");T(this,"body",new He);T(this,"thighs",[]);T(this,"shins",[]);T(this,"torso");T(this,"head");T(this,"uArms",[]);T(this,"fArms",[]);T(this,"stance","regular");T(this,"crouch",.4);T(this,"torsoTwist",0);T(this,"armSpread",0);T(this,"silhouette",new He);T(this,"silhouetteVisible",!1);T(this,"silParts",[]);T(this,"parts",[]);T(this,"roll",0);T(this,"wipeT",-1);T(this,"fb",zv());T(this,"bx",new U);T(this,"by",new U);T(this,"bz",new U);T(this,"mtx",new le);T(this,"qBase",new ni);T(this,"qRoll",new ni);T(this,"axisX",new U(1,0,0));T(this,"tumbleVel",new U);T(this,"tumbleAxis",new U);T(this,"qTmp",new ni);T(this,"a",new U);T(this,"b",new U);T(this,"c",new U);T(this,"hip",new U);T(this,"sh",new U);T(this,"dir",new U);const t=new en({color:16052194,roughness:.45}),e=new en({color:16738877,roughness:.5});this.board=new re(qv(),t);const n=new re(new Ai(kr*.9,.004,.025),e);n.position.set(0,Cs*.77,0),this.board.add(n);const s=new re(new Ai(.12,.1,.012),e);s.position.set(-kr*.42,-.04,0),this.board.add(s);const r=new en({color:13208930,roughness:.7}),o=new en({color:1777447,roughness:.65}),a=new en({color:2308443,roughness:.6});for(let f=0;f<2;f++){const d=Ss(.075,Sh-.15,o),g=Ss(.06,Xv-.12,o);this.thighs.push(d),this.shins.push(g),this.body.add(d,g);const v=Ss(.05,bh-.1,a),m=Ss(.045,Eh-.09,r);this.uArms.push(v),this.fArms.push(m),this.body.add(v,m)}this.torso=Ss(.13,yh-.26,a),this.head=new re(new cs(.11,12,10),r);const l=new re(new cs(.115,12,8,0,Math.PI*2,0,Math.PI*.55),o);this.head.add(l),this.head.castShadow=!0,l.castShadow=!0,this.board.castShadow=!0,this.body.add(this.torso,this.head),this.rideRoot.add(this.board,this.body);const c=new as({color:201756,transparent:!0,opacity:jo.opacity,depthWrite:!1,visible:!1}),h=[...this.thighs,...this.shins,...this.uArms,...this.fArms,this.torso,this.head];this.parts.push(...h,this.board);for(const f of h){const d=new re(f.geometry,c);d.renderOrder=-1,this.silhouette.add(d),this.silParts.push([f,d])}const u=new re(this.board.geometry,c);u.renderOrder=-1,this.silhouette.add(u),this.silhouette.visible=!1,this.rideRoot.add(this.silhouette),this.group.add(this.rideRoot),this.group.visible=!1}reset(){this.wipeT=-1,this.roll=0,this.crouch=.4,this.torsoTwist=0,this.armSpread=0,this.setSilhouette(!1),this.group.visible=!0,this.rideRoot.quaternion.identity(),this.rideRoot.position.set(0,0,0)}update(t,e,n){if(t.state==="idle"){this.setSilhouette(!1),this.group.visible=!1;return}if((!(n>=0)||!Number.isFinite(n))&&(n=0),t.state!=="riding"){this.setSilhouette(!1),this.tumble(t,n);return}this.group.visible=!0;const s=Gv(e,t.s,t.t,this.fb);Vv(s,t.hb,this.bx,this.by,this.bz),this.mtx.makeBasis(this.bx,this.by,this.bz),this.qBase.setFromRotationMatrix(this.mtx),this.group.position.copy(s.p),this.group.quaternion.copy(this.qBase),this.roll=cn(this.roll,t.lean,10,n),this.qRoll.setFromAxisAngle(this.axisX,this.roll),this.rideRoot.quaternion.copy(this.qRoll),this.rideRoot.position.set(0,0,0);const r=Math.min(1,Math.abs(t.turnRateF)/2);let o=ie(.3+.4*r+.15*Math.min(1,t.v/12)-.35*t.stall+.3*Math.min(1,Math.abs(t.skid)),0,1);this.torsoTwist=cn(this.torsoTwist,ie(.3*t.turnRateF+.4*t.skid,-1.2,1.2),8,n),this.armSpread=cn(this.armSpread,ie(.7*r+.8*Math.min(1,Math.abs(t.skid)),0,1),8,n),t.inTube&&(o=Math.max(o,ie(Mr.base+Mr.k*(Mr.refH-t.tubeHeight),Mr.min,1))),this.crouch=cn(this.crouch,o,6,n),this.pose(this.crouch,t.stall,this.torsoTwist,this.armSpread);let a=!1;t.inTube&&(a=-t.d/(1.5+5*e.hollow(t.s))>=(this.silhouetteVisible?jo.off:jo.on)),this.setSilhouette(a)}setSilhouette(t){if(this.silhouetteVisible=t,this.silhouette.visible=t,!!t)for(const[e,n]of this.silParts)n.position.copy(e.position),n.quaternion.copy(e.quaternion),n.scale.copy(e.scale)}pose(t,e,n=0,s=0){const r=this.stance==="regular"?1:-1,o=Cs*.75,a=[.3,-.42],l=-.06-.12*e,c=o+.86*(1-.38*t);this.hip.set(l,c,.04*r*t);for(let u=0;u<2;u++)this.a.set(a[u],o+.02,0),this.b.set(this.hip.x+(u===0?.09:-.09),this.hip.y,this.hip.z),this.knee(this.a,this.b,r,this.c),this.place(this.shins[u],this.a,this.c),this.place(this.thighs[u],this.c,this.b);const h=.25+.6*t;this.dir.set(.12-.15*e+.35*Math.sin(n),Math.cos(h),Math.sin(h)*r*.75).normalize(),this.sh.copy(this.hip).addScaledVector(this.dir,yh),this.place(this.torso,this.hip,this.sh),this.head.position.copy(this.sh).addScaledVector(this.dir,.2);for(let u=0;u<2;u++){const f=u===0?1:-1;this.a.copy(this.sh).add(this.c.set(.17*f,-.04,0)),this.b.copy(this.a).add(this.c.set(.26*f,-.12+.3*s,(.08+.2*s)*r)).sub(this.a).setLength(bh).add(this.a),this.place(this.uArms[u],this.a,this.b),this.c.set(.2*f,-.2+.1*t,.1*r).setLength(Eh).add(this.b),this.place(this.fArms[u],this.b,this.c)}}knee(t,e,n,s){const r=e.x-t.x,o=e.y-t.y,a=e.z-t.z,l=Math.sqrt(r*r+o*o+a*a),c=Sh,h=l<2*c?Math.sqrt(c*c-l*l/4):0;s.set((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2),s.z+=h*n}place(t,e,n){t.position.set((e.x+n.x)/2,(e.y+n.y)/2,(e.z+n.z)/2),this.dir.set(n.x-e.x,n.y-e.y,n.z-e.z);const s=this.dir.length();s>1e-6&&(this.dir.multiplyScalar(1/s),t.quaternion.setFromUnitVectors(Th,this.dir))}tumble(t,e){if(this.wipeT<0){this.wipeT=0;const s=Math.cos(t.hv),r=Math.sin(t.hv);this.tumbleVel.set(-s*t.v*.6,1.5,-r*.6*t.v*.3),t.state==="kickedOut"&&this.tumbleVel.set(-s*t.v*.4,2.2,-2.5),this.tumbleAxis.copy(this.bx).cross(Th).normalize(),this.tumbleAxis.lengthSq()<1e-6&&this.tumbleAxis.set(0,0,1)}this.wipeT+=e,this.tumbleVel.y-=9.81*e,this.group.position.y<-.6&&this.tumbleVel.multiplyScalar(Math.exp(-4*e)),this.group.position.addScaledVector(this.tumbleVel,e);const n=t.state==="kickedOut"?2.5:7;this.qTmp.setFromAxisAngle(this.tumbleAxis,n*e*Math.exp(-this.wipeT)),this.group.quaternion.premultiply(this.qTmp),this.crouch=cn(this.crouch,1,4,e),this.pose(this.crouch,0),this.wipeT>1.6&&(this.group.visible=!1)}tailWorld(t){return t.set(-kr*.4,.05,0),this.group.updateMatrixWorld(),this.rideRoot.localToWorld(t)}}function af(i){return{x:-Math.cos(i),y:-Math.sin(i)}}function Kv(i,t,e){const n=Number.isFinite(e)?e:0,s=af(n),r=i.x*s.x+i.y*s.y;return t.x*s.x+t.y*s.y>=r?{back:i,front:t}:{back:t,front:i}}function Ah(i,t){return Math.atan2(-(t.y-i.y),-(t.x-i.x))}function $v(i,t){return Ts(t-i)}function Zv(i,t){return!(t>1)||!Number.isFinite(i)?0:ie((i/t-1.1)/.4,0,1)}const Jv=.6,jv=3.6,Qv=13;function wh(i){return!Number.isFinite(i)||Math.abs(i)<Jv?0:Math.sign(i)*ie(Math.abs(i)*jv,0,Qv)}const tx=350,ex=40,Qo=8;function nx(i,t){if(!i||!t||i.foot!=="front"||t.foot!=="back")return!1;const e=t.t-i.t;return e>=ex&&e<=tx}const ix=80;function sx(i,t,e,n){if(!(e>0)||i.length<2)return 0;let s=-1;for(let g=i.length-1;g>=0;g--)if(i[g].t<=t){s=g;break}if(s<1)return 0;const r=t-ix;let o=s;for(;o>0&&i[o-1].t>=r&&i[o-1].t<=i[o].t;)o--;const a=i.slice(o,s+1);if(o===s){const g=i[s-1],v=i[s],m=v.t-g.t;if(!(m>0))return 0;const p=ie((r-g.t)/m,0,1);a.unshift({t:g.t+m*p,x:g.x+(v.x-g.x)*p,y:g.y+(v.y-g.y)*p})}const l=a[0],c=a[a.length-1],h=c.t-l.t;if(!(h>=4))return 0;const u=Math.hypot(c.x-l.x,c.y-l.y)/e*(1e3/h);let f;if(n&&Number.isFinite(n.x)&&Number.isFinite(n.y)){let g=0;for(let v=0;v+1<a.length;v++){const m=a[v].x-n.x,p=a[v].y-n.y,y=a[v+1].x-a[v].x,S=a[v+1].y-a[v].y;g-=m*S-p*y}f=Math.sign(g)}else f=Math.sign(-(c.y-l.y));const d=f*u;return Number.isFinite(d)&&d!==0?d:0}const lf=Math.PI/6,cf=Math.PI/3,Ol=1.25,$r=Math.PI/180,fl=[75*$r,125*$r],Bl=1.86,rx=i=>(i[0]+i[1])/2,hf=Bl-Ol,Rh=(Bl*rx(fl)-Ol*(lf+cf)/2)/hf,Ch=[Rh-22.5*$r,Rh+22.5*$r];function ta(i,t,e){if(i<=t)return 0;const n=e-t;if(i>=e)return n/2+(i-e);const s=(i-t)/n;return n*(s*s*s-s*s*s*s/2)}function kl(i,t){if(!Number.isFinite(i)||!Number.isFinite(t))return 0;const e=Math.abs(i),n=Ol*ta(e,lf,cf)-Bl*ta(e,fl[0],fl[1])+hf*ta(e,Ch[0],Ch[1]);return Math.sign(i)*t*(e+n)}const ea=.02,ox=1/8;function na(i){if(!Number.isFinite(i))return 0;const t=Math.abs(i);return t<=ea?0:Math.sign(i)*ie((t-ea)/(ox-ea),0,1)}const ax=300,Ph=20,lx=3.2,Lh=[0,1.2,2.4],cx=250,hx=.3,ux=3,fx=1.3,zl=60,Ps=3,Hl=1.5,Gl=5,dx=60*(Math.PI/180),px=.1,ia=Math.PI/2,mx=.1,Sr=.03,gx=45*Math.PI/180,Dh=25*Math.PI/180,_x=.1*Math.PI/180,vx=20*Math.PI/180,yr=2*zl,xx=10,Mx=250,br=48*(Math.PI/180),Sx=68*(Math.PI/180),yx=5,Uh=[21*(Math.PI/180),35*(Math.PI/180)],Ih=[45*(Math.PI/180),70*(Math.PI/180)],bx=.1,Nh=4*zl,sa=180*(Math.PI/180),Fh=25*(Math.PI/180),Oh=.42;function Ex(i){const t=Math.abs(i);if(t<=sa)return i;const e=t-sa;return Math.sign(i)*(sa+(1-Oh)*Fh*Math.tanh(e/Fh)+Oh*e)}function Bh(i,t,e){if(i<=t)return 0;const n=e-t;if(i>=e)return n/2+(i-e);const s=(i-t)/n;return n*(s*s*s-s*s*s*s/2)}function Tx(i,t){if(!Number.isFinite(i)||!(t>0))return 0;const e=Math.abs(i);if(e===0)return 0;let n=0,s=e/t/.3+1e-6;for(let r=0;r<60;r++){const o=(n+s)/2;kl(o,t)<e?n=o:s=o}return Math.sign(i)*(n+s)/2}function Ax(i,t,e){if(!Number.isFinite(i)||!Number.isFinite(t))return NaN;const n=Math.abs(i),s=Sx-br,r=Math.sign(i)*(n<=br?n:br+s*Math.tanh((n-br)/s)),o=Math.abs(t),a=Math.sign(t)*yx*(Bh(o,Uh[0],Uh[1])-(1-bx)*Bh(o,Ih[0],Ih[1])),l=kl(r,e)+a,c=Ex(l);return a===0&&c===l?r:Tx(c,e)}const wx=.2,Rx=1*(Math.PI/180),Cx=3*(Math.PI/180),ra=.2,Px=50;class Lx{constructor(t,e,n={}){T(this,"_mode","hand");T(this,"_thumbTurnCm",Ps);T(this,"_gain",fx);T(this,"grip",!1);T(this,"stall",0);T(this,"drive",0);T(this,"keyFlick",Lh[0]);T(this,"keySign",1);T(this,"ptrs",new Map);T(this,"feet",null);T(this,"h0",0);T(this,"aPrev",0);T(this,"accum",0);T(this,"dist0",0);T(this,"slideAcc",0);T(this,"resB",0);T(this,"resF",0);T(this,"rotAct",0);T(this,"lastDist",0);T(this,"rotT",0);T(this,"latched",!1);T(this,"thumbGrip",!1);T(this,"tLatched",!1);T(this,"tTot",0);T(this,"tEff",0);T(this,"tAcc",0);T(this,"tSep0",0);T(this,"tVx",0);T(this,"tVy",0);T(this,"tSbar",0);T(this,"tThr",0);T(this,"tPendF",0);T(this,"tPendB",0);T(this,"tPendT",0);T(this,"tRotSum",0);T(this,"tRotT",0);T(this,"tEpSign",0);T(this,"tEpNet",0);T(this,"tEpCommit",!1);T(this,"tHeld",0);T(this,"lastLift",null);T(this,"liftPivot",null);T(this,"liftWatch",null);T(this,"gestureMax",0);T(this,"multi",!1);T(this,"threeSince",null);T(this,"debugFired",!1);T(this,"mouseDown",null);T(this,"keyGrip",!1);T(this,"keyUp",!1);T(this,"keyDown",!1);T(this,"keyShift",!1);T(this,"keyF",!1);T(this,"keyAccum",0);T(this,"queue",[]);T(this,"now");T(this,"screenH");T(this,"offs",[]);this.el=t,this.getBoardHeading=e,n.gain!==void 0&&(this.gain=n.gain),n.mode==="thumbs"&&(this._mode="thumbs"),n.thumbTurnCm!==void 0&&(this.thumbTurnCm=n.thumbTurnCm),this.now=n.now??(()=>performance.now()),this.screenH=n.screenHeight??(()=>typeof window<"u"?window.innerHeight:800);const s=n.keyTarget!==void 0?n.keyTarget:typeof window<"u"?window:null,r=n.docTarget!==void 0?n.docTarget:typeof document<"u"?document:null;this.on(t,"pointerdown",o=>this.onDown(o)),this.on(t,"pointermove",o=>this.onMove(o)),this.on(t,"pointerup",o=>this.onUp(o,!1)),this.on(t,"pointercancel",o=>this.onUp(o,!0)),s&&(this.on(s,"keydown",o=>this.onKey(o,!0)),this.on(s,"keyup",o=>this.onKey(o,!1)),this.on(s,"blur",()=>this.clearAll())),r&&this.on(r,"visibilitychange",()=>{(r.visibilityState===void 0||r.visibilityState!=="visible")&&this.clearAll()})}get mode(){return this._mode}set mode(t){t!=="hand"&&t!=="thumbs"||t===this._mode||(this._mode=t,this.ptrs.size>0&&(this.feet&&this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.multi=!0))}get thumbTurnCm(){return this._thumbTurnCm}set thumbTurnCm(t){Number.isFinite(t)&&(this._thumbTurnCm=Math.min(Gl,Math.max(Hl,t)))}get gain(){return this._gain}set gain(t){Number.isFinite(t)&&(this._gain=Math.min(ux,Math.max(hx,t)))}on(t,e,n){t.addEventListener(e,n),this.offs.push(()=>t.removeEventListener(e,n))}dispose(){for(const t of this.offs)t();this.offs.length=0}get targetHeading(){return this.feet?this.h0+kl(this.accum,this.gain):this.keyGrip?this.h0+this.keyAccum:null}get pairRotation(){return this.feet?this.accum:0}get pointers(){const t=[];for(const e of this.ptrs.values()){const n=this.feet?e.id===this.feet.back?"B":e.id===this.feet.front?"F":null:null;t.push({id:e.id,x:e.x,y:e.y,label:n})}return t}drain(){const t=this.queue;return this.queue=[],t}rebase(t){Number.isFinite(t)&&(this.h0=t,this.accum=0,this.keyAccum=0,this.feet&&(this.latchAngle(),this.thumbGrip&&this.latchThumbs()))}checkDebugHold(){this.threeSince===null||this.debugFired||this.now()-this.threeSince>=cx&&(this.debugFired=!0,this.multi=!0,this.queue.push({type:"debug"}))}update(t){if(this.checkDebugHold(),!(!(t>0)||!Number.isFinite(t))){if(this.keyGrip&&!this.feet){const e=(this.keyUp?1:0)-(this.keyDown?1:0);this.keyAccum+=e*lx*t,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0}if(this.thumbGrip&&this.feet&&this.tEpSign!==0&&!this.tEpCommit&&!(this.tRotSum*Math.exp(-Math.max(0,this.now()-this.tRotT)/1e3/Sr)/Sr*this.tEpSign>=Dh)&&(this.tEpSign=this.tEpNet=0,this.tEpCommit=!1,this.tHeld!==0)){this.tHeld=0;const n=this.screenH(),s=na(this.tThr/(n>0?n:800));Number.isFinite(s)&&(this.stall=Math.max(0,-s),this.drive=Math.max(0,s))}}}onDown(t){var s,r,o;if((s=t.preventDefault)==null||s.call(t),t.pointerType==="mouse"){this.mouseDown={id:t.pointerId,x0:t.clientX,y0:t.clientY,maxMove:0};return}if(this.ptrs.has(t.pointerId))return;try{(o=(r=this.el).setPointerCapture)==null||o.call(r,t.pointerId)}catch{}const e=this.now();this.ptrs.set(t.pointerId,{id:t.pointerId,x:t.clientX,y:t.clientY,x0:t.clientX,y0:t.clientY,t0:e,maxMove:0,hist:[{t:e,x:t.clientX,y:t.clientY}]});const n=this.ptrs.size;if(this.gestureMax=Math.max(this.gestureMax,n),n===3){this.threeSince===null&&(this.threeSince=e);return}n===2&&!this.feet&&!this.keyGrip&&this.startGrip()}startGrip(){const[t,e]=[...this.ptrs.values()],n=this.getBoardHeading();this.thumbGrip=this._mode==="thumbs";const{back:s,front:r}=this.thumbGrip?t.x<=e.x?{back:e,front:t}:{back:t,front:e}:Kv(t,e,n);this.feet={back:s.id,front:r.id},this.h0=Number.isFinite(n)?n:0,this.slideAcc=0,this.resB=0,this.resF=0,this.rotAct=0,this.rotT=this.now(),this.accum=0,this.dist0=0,this.latched=!1,this.latchAngle(),this.tSep0=0,this.thumbGrip&&this.latchThumbs(),this.stall=0,this.drive=0,this.grip=!0,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.queue.push({type:"grip"})}latchAngle(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=Math.hypot(e.x-t.x,e.y-t.y);n>=Qo?(this.aPrev=Ah(t,e),this.latched=!0,this.dist0===0&&(this.dist0=n)):this.latched=!1}latchThumbs(){this.tTot=this.tAcc=this.tEff=0,this.tThr=0,this.tPendF=this.tPendB=0,this.tPendT=this.now(),this.tRotSum=0,this.tRotT=this.tPendT,this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1,this.tLatched=!1,this.latchThumbLine()}latchThumbLine(){const t=this.ptrs.get(this.feet.back),e=this.ptrs.get(this.feet.front);if(!t||!e)return;const n=t.x-e.x,s=t.y-e.y,r=Math.hypot(n,s);if(!Number.isFinite(r)||r<yr){this.tLatched=!1;return}this.tVx=n,this.tVy=s,this.tSbar=r,this.tLatched=!0,this.tSep0===0&&(this.tSep0=r)}updateThumbs(t,e,n){const s=this.ptrs.get(this.feet.back),r=this.ptrs.get(this.feet.front),o=t?{x:e,y:n}:s,a=t?r:{x:e,y:n},l=a.x-o.x,c=a.y-o.y,h=Math.hypot(l,c),u=this.now();this.tRotSum*=Math.exp(-Math.max(0,u-this.tRotT)/1e3/Sr),this.tRotT=u;const f=r.x-s.x,d=r.y-s.y,g=Math.atan2(l*d-c*f,l*f+c*d);Number.isFinite(g)&&Math.abs(g)<=ia&&h>=yr&&Math.hypot(f,d)>=yr&&(this.tRotSum+=g);const v=this.tRotSum/Sr;this.tEpSign!==0&&!(v*this.tEpSign>=Dh)&&(this.tEpSign=this.tEpNet=this.tHeld=0,this.tEpCommit=!1),this.tEpSign===0&&Math.abs(v)>=gx&&(this.tEpSign=Math.sign(v));const m=this.tEpSign!==0&&g*this.tEpSign>=_x;m&&(this.tEpNet+=g);const p=this.tThr;if(Number.isFinite(h)&&h>=Qo){const I=this.now(),H=Math.exp(-Math.max(0,I-this.tPendT)/1e3/mx);this.tPendT=I,this.tPendF*=H,this.tPendB*=H;const q=t?s:r,K=q.x-e,j=q.y-n,z=(K*l+j*c)/h,ot=Math.abs(K*c-j*l)/h,ct=Math.min(1,1.5*Math.tan(Math.min(Math.abs(this.tTot),Math.PI/4)));if(Number.isFinite(z)&&Number.isFinite(ot)&&z!==0){const gt=t?-z:z;let Ct=Math.sign(gt)*Math.min(Math.abs(gt),ot*ct);t||(this.tThr+=gt);const Lt=t?this.tPendF:this.tPendB;if(Ct!==0&&Math.sign(Ct)===Math.sign(Lt)){const X=Math.min(Math.abs(Ct),Math.abs(Lt));this.tThr-=Math.sign(Ct)*X,t?this.tPendF-=Math.sign(Ct)*X:this.tPendB-=Math.sign(Ct)*X,Ct-=Math.sign(Ct)*X}t?this.tPendB+=Ct:this.tPendF+=Ct}}m&&(this.tHeld+=this.tThr-p),this.tEpSign!==0&&!this.tEpCommit&&Math.abs(this.tEpNet)>=vx&&(this.tEpCommit=!0),this.tEpCommit&&(this.tThr-=this.tHeld,this.tHeld=0);const y=s.x-r.x,S=s.y-r.y,_=Math.hypot(y,S);if(!Number.isFinite(_)||_<yr)this.tLatched=!1;else if(!this.tLatched)this.latchThumbLine();else{const I=this.tVx*S-this.tVy*y,H=this.tVx*y+this.tVy*S,q=Math.atan2(I,H);Math.abs(q)<=ia&&this.tSep0>0&&(this.tTot+=q,this.tEff+=q*Math.min(1,this.tSbar*this.tSbar/(Nh*Nh)),this.tAcc+=q*this.tSbar*this.tSbar/this.tSep0),this.tVx=y,this.tVy=S,Math.abs(_-this.tSbar)>xx&&(this.tSbar=_)}const D=this.tAcc/zl,w=px,P=Math.abs(D),b=Math.sign(D)*(P>=2*w?P:2*Math.max(0,P-w))*dx/this._thumbTurnCm,x=Ax(b,this.tEff,this._gain);Number.isFinite(x)&&(this.accum=x);const C=this.screenH(),k=na((this.tThr-this.tHeld)/(C>0?C:800));Number.isFinite(k)&&(this.stall=Math.max(0,-k),this.drive=Math.max(0,k))}onMove(t){var r;if(t.pointerType==="mouse"){const o=this.mouseDown;o&&o.id===t.pointerId&&(o.maxMove=Math.max(o.maxMove,Math.hypot(t.clientX-o.x0,t.clientY-o.y0)));return}const e=this.ptrs.get(t.pointerId);if(!e)return;(r=t.preventDefault)==null||r.call(t);const n=e.x,s=e.y;if(this.movePtr(e,t.clientX,t.clientY),this.feet&&(e.id===this.feet.back||e.id===this.feet.front))if(this.thumbGrip)this.updateThumbs(e.id===this.feet.back,n,s);else{const o=this.updatePair();this.addSlide(e.id===this.feet.back,e.x-n,e.y-s,o),this.refreshDriveStall()}this.checkDebugHold()}movePtr(t,e,n){if(!Number.isFinite(e)||!Number.isFinite(n))return;t.x=e,t.y=n,t.maxMove=Math.max(t.maxMove,Math.hypot(e-t.x0,n-t.y0));const s=this.now();for(t.hist.push({t:s,x:e,y:n});t.hist.length>2&&t.hist[0].t<s-Mx;)t.hist.shift()}addSlide(t,e,n,s){const r=this.now(),o=Math.max(0,(r-this.rotT)/1e3);this.rotT=r,this.rotAct=this.rotAct*Math.exp(-o/wx)+s,s!==0&&(this.slideAcc*=Math.exp(-Math.abs(s)/ra),this.resB*=Math.exp(-Math.abs(s)/ra),this.resF*=Math.exp(-Math.abs(s)/ra));const a=1-J(Rx,Cx,Math.abs(this.rotAct)),l=this.getBoardHeading(),c=af(Number.isFinite(l)?l:this.h0),h=this.screenH(),u=a*(e*c.x+n*c.y)/(h>0?h:800);if(!Number.isFinite(u)||u===0)return;t?this.resB+=u:this.resF+=u;const f=Math.min(Math.abs(this.resB),Math.abs(this.resF));f>0&&Math.sign(this.resB)===Math.sign(this.resF)&&(this.slideAcc+=Math.sign(this.resB)*f),this.resB-=Math.sign(this.resB)*f,this.resF-=Math.sign(this.resF)*f}updatePair(){let t=0;const e=this.ptrs.get(this.feet.back),n=this.ptrs.get(this.feet.front),s=Math.hypot(n.x-e.x,n.y-e.y);if(s<Qo)this.latched=!1;else if(!this.latched)this.latchAngle();else{const r=Ah(e,n),o=$v(this.aPrev,r);Math.abs(o)<=ia&&(this.accum+=o,t=o),this.aPrev=r}return this.lastDist=s,t}refreshDriveStall(){const t=na(this.slideAcc),e=this.dist0>0?Zv(this.lastDist,Math.max(this.dist0,Px)):0;this.stall=Math.max(0,-t),this.drive=Math.max(e,t)}onUp(t,e){var o,a,l;if(t.pointerType==="mouse"){const c=this.mouseDown;this.mouseDown=null,!e&&c&&c.id===t.pointerId&&Math.max(c.maxMove,Math.hypot(t.clientX-c.x0,t.clientY-c.y0))<Ph&&this.queue.push({type:"tap",x:t.clientX,y:t.clientY});return}const n=this.ptrs.get(t.pointerId);if(!n)return;this.checkDebugHold(),e||this.movePtr(n,t.clientX,t.clientY);const s=this.now();try{(a=(o=this.el).releasePointerCapture)==null||a.call(o,t.pointerId)}catch{}const r=this.feet?n.id===this.feet.front?"front":n.id===this.feet.back?"back":null:this.liftWatch===n.id?((l=this.lastLift)==null?void 0:l.foot)==="front"?"back":"front":null;if(e)r&&(this.endGrip(),this.lastLift=null,this.liftWatch=null,this.liftPivot=null);else if(r&&this.feet){const c=r==="front"?this.feet.back:this.feet.front;this.endGrip(),this.lastLift={foot:r,t:s},this.liftWatch=c,this.liftPivot={x:n.x,y:n.y}}else if(r&&this.liftWatch===n.id){const c={foot:r,t:s};if(!this.multi&&nx(this.lastLift,c)){const h=sx(n.hist,s,this.screenH(),this.liftPivot??void 0);this.queue.push({type:"ollie",flick:h,spin:wh(h)})}this.lastLift=null,this.liftWatch=null,this.liftPivot=null}!e&&!this.multi&&this.ptrs.size===1&&this.gestureMax===1&&s-n.t0<ax&&n.maxMove<Ph&&this.queue.push({type:"tap",x:n.x,y:n.y}),this.ptrs.delete(n.id),this.ptrs.size<3&&(this.threeSince=null,this.debugFired=!1),this.ptrs.size===0&&(this.gestureMax=0,this.multi=!1),this.ptrs.size===2&&!this.feet&&!this.keyGrip&&this.startGrip()}endGrip(){this.feet=null,this.grip=this.keyGrip,this.stall=0,this.drive=0,this.accum=0,this.latched=!1,this.slideAcc=this.resB=this.resF=0}clearAll(){this.ptrs.clear(),this.feet=null,this.lastLift=null,this.liftWatch=null,this.liftPivot=null,this.gestureMax=0,this.multi=!1,this.threeSince=null,this.debugFired=!1,this.latched=!1,this.mouseDown=null,this.keyGrip=this.keyUp=this.keyDown=this.keyShift=this.keyF=!1,this.keyAccum=0,this.accum=0,this.grip=!1,this.stall=0,this.drive=0}onKey(t,e){var s,r,o;const n=t.key;if(n===" "||t.code==="Space"){if((s=t.preventDefault)==null||s.call(t),e){if(t.repeat||this.keyGrip||this.feet)return;this.keyGrip=!0,this.grip=!0;const a=this.getBoardHeading();this.h0=Number.isFinite(a)?a:0,this.keyAccum=0,this.stall=this.keyShift?1:0,this.drive=this.keyF?1:0,this.queue.push({type:"grip"})}else if(this.keyGrip)if(this.keyGrip=!1,this.grip=!!this.feet,this.stall=0,this.drive=0,this.keyAccum=0,this.ptrs.size===2&&!this.feet)this.startGrip();else{const a=this.keyFlick;this.queue.push({type:"ollie",flick:a,spin:wh(a)})}return}n==="ArrowUp"?(this.keyUp=e,(r=t.preventDefault)==null||r.call(t)):n==="ArrowDown"?(this.keyDown=e,(o=t.preventDefault)==null||o.call(t)):n==="Shift"?(this.keyShift=e,this.keyGrip&&!this.feet&&(this.stall=e?1:0)):n==="f"||n==="F"?(this.keyF=e,this.keyGrip&&!this.feet&&(this.drive=e?1:0)):e&&(n==="0"||n==="1"||n==="2")?this.keyFlick=this.keySign*Lh[Number(n)]:e&&(n==="x"||n==="X")&&(this.keySign=-this.keySign,this.keyFlick=-this.keyFlick)}}const kh=i=>({x:-Math.cos(i),y:-Math.sin(i)});class Dx{constructor(t=document.body){T(this,"canvas");T(this,"ctx");T(this,"lines",[]);T(this,"visible",!0);T(this,"fps",0);T(this,"frames",0);T(this,"acc",0);T(this,"dpr",1);T(this,"shapes",null);this.canvas=document.createElement("canvas"),this.canvas.id="debug",t.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize()}resize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.canvas.width=Math.round(window.innerWidth*this.dpr),this.canvas.height=Math.round(window.innerHeight*this.dpr)}setLines(t){this.lines=t}setShapes(t){this.shapes=t}toggle(t){this.visible=t??!this.visible,this.canvas.style.display=this.visible?"block":"none"}frame(t){if(this.frames++,this.acc+=t,this.acc>=.5&&(this.fps=this.frames/this.acc,this.frames=0,this.acc=0),!this.visible)return;const e=this.ctx;e.setTransform(this.dpr,0,0,this.dpr,0,0),e.clearRect(0,0,this.canvas.width,this.canvas.height),this.shapes&&this.drawShapes(e,this.shapes);const n=[`${this.fps.toFixed(0)} fps`,...this.lines];e.font="12px ui-monospace, Menlo, monospace";let s=0;for(const r of n)s=Math.max(s,e.measureText(r).width);e.fillStyle="rgba(0,0,0,0.45)",e.fillRect(6,6,s+12,n.length*15+8),e.fillStyle="#e8fff6",n.forEach((r,o)=>e.fillText(r,12,22+o*15))}drawShapes(t,e){const n=this.canvas.width/this.dpr,s=this.canvas.height/this.dpr;t.save(),t.lineCap="round",t.lineJoin="round";const r=n/2,o=s-100,a=kh(e.board),l=46;t.strokeStyle="rgba(255,214,120,0.95)",t.lineWidth=10,t.beginPath(),t.moveTo(r-a.x*l,o-a.y*l),t.lineTo(r+a.x*l,o+a.y*l),t.stroke(),t.fillStyle="#ff7a59",t.beginPath(),t.arc(r+a.x*l,o+a.y*l,6,0,Math.PI*2),t.fill(),e.target!==null&&this.arrow(t,r,o,e.target,64,"rgba(120,255,200,0.95)");const c=e.fingers.find(u=>u.label==="B"),h=e.fingers.find(u=>u.label==="F");c&&h&&(t.strokeStyle="rgba(255,255,255,0.8)",t.lineWidth=3,t.beginPath(),t.moveTo(c.x,c.y),t.lineTo(h.x,h.y),t.stroke(),e.target!==null&&this.arrow(t,(c.x+h.x)/2,(c.y+h.y)/2,e.target,70,"rgba(120,255,200,0.95)")),t.font="bold 18px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle";for(const u of e.fingers)t.fillStyle=u.label==="F"?"rgba(255,122,89,0.35)":u.label==="B"?"rgba(80,170,255,0.35)":"rgba(255,255,255,0.2)",t.strokeStyle="rgba(255,255,255,0.9)",t.lineWidth=2,t.beginPath(),t.arc(u.x,u.y,32,0,Math.PI*2),t.fill(),t.stroke(),u.label&&(t.fillStyle="#fff",t.fillText(u.label,u.x,u.y));t.restore()}arrow(t,e,n,s,r,o){const a=kh(s),l=e+a.x*r,c=n+a.y*r;t.strokeStyle=o,t.fillStyle=o,t.lineWidth=3,t.beginPath(),t.moveTo(e,n),t.lineTo(l,c),t.stroke();const h=-a.y,u=a.x;t.beginPath(),t.moveTo(l+a.x*10,c+a.y*10),t.lineTo(l+h*7,c+u*7),t.lineTo(l-h*7,c-u*7),t.closePath(),t.fill()}}const uf="surf.controlMode",ff="surf.thumbTurnCm",Gs=()=>{try{return typeof localStorage<"u"?localStorage:null}catch{return null}};function Ux(i=Gs()){try{return(i==null?void 0:i.getItem(uf))==="thumbs"?"thumbs":"hand"}catch{return"hand"}}function Ix(i,t=Gs()){try{t==null||t.setItem(uf,i)}catch{}}const Vl=i=>Math.min(Gl,Math.max(Hl,i));function Nx(i=Gs()){try{const t=i==null?void 0:i.getItem(ff);if(t==null||t.trim()==="")return Ps;const e=Number(t);return Number.isFinite(e)?Vl(e):Ps}catch{return Ps}}function Fx(i,t=Gs()){if(Number.isFinite(i))try{t==null||t.setItem(ff,String(Vl(i)))}catch{}}const zh={hand:"1 hand",thumbs:"2 thumbs"},Ox=["pointerdown","pointermove","pointerup","pointercancel","touchstart","touchmove","touchend"],oa=i=>{for(const t of Ox)i.addEventListener(t,e=>e.stopPropagation())};function Bx(i,t){const e=()=>Gs(),n={position:"fixed",top:"8px",zIndex:"20",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(10,30,45,0.45)",border:"1px solid rgba(255,255,255,0.45)",borderRadius:"8px",whiteSpace:"nowrap",touchAction:"manipulation"},s=document.createElement("button");s.textContent=zh[i.mode],Object.assign(s.style,{...n,right:"96px",padding:"8px 12px"}),oa(s);const r=document.createElement("button");r.textContent="⚙",r.setAttribute("aria-label","thumb sensitivity"),Object.assign(r.style,{...n,padding:"8px 10px",lineHeight:"1"}),oa(r);const o=document.createElement("div");Object.assign(o.style,{...n,top:"48px",right:"96px",padding:"8px 10px",display:"none",alignItems:"center",gap:"8px",font:"600 12px system-ui, sans-serif",background:"rgba(10,30,45,0.55)",touchAction:"none"}),oa(o);const a=document.createElement("span");a.textContent="soft";const l=document.createElement("span");l.textContent="sharp";const c=document.createElement("input");c.type="range",c.setAttribute("aria-label","thumb sensitivity: soft to sharp"),c.min=String(-Gl),c.max=String(-Hl),c.step="0.1",Object.assign(c.style,{width:"140px",touchAction:"none",accentColor:"#7fd3ff"});const h=()=>c.value=String(-(i.thumbTurnCm??Ps));c.addEventListener("input",()=>{const g=Vl(-Number(c.value));Number.isFinite(g)&&(i.thumbTurnCm=g,Fx(i.thumbTurnCm??g,e()))}),o.append(a,c,l);const u=()=>o.style.display!=="none",f=g=>{g&&h(),o.style.display=g?"flex":"none"},d=()=>{const g=i.mode==="thumbs";s.textContent=zh[i.mode],r.style.display=g?"block":"none",r.style.right=`${96+s.offsetWidth+6}px`,g||f(!1)};return s.addEventListener("click",g=>{g.stopPropagation(),i.mode=i.mode==="hand"?"thumbs":"hand",Ix(i.mode,e()),d(),s.blur()}),r.addEventListener("click",g=>{g.stopPropagation(),f(!u()),r.blur()}),c.addEventListener("change",()=>c.blur()),document.addEventListener("pointerdown",g=>{if(!u())return;const v=g.target;v&&(o.contains(v)||r.contains(v))||f(!1)},!0),document.body.append(s,r,o),d(),s}const _n=6,Qe=8,qn=8,kx=2;function Hh(i,t){const e=new Uint32Array((i-1)*(t-1)*6);let n=0;for(let s=0;s<i-1;s++)for(let r=0;r<t-1;r++){const o=s*t+r,a=(s+1)*t+r,l=s*t+r+1,c=(s+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=l,e[n++]=a,e[n++]=c,e[n++]=l}return e}function aa(i,t,e){const n=i/t;return we(i,e)*(1-n)+we(i-t,e)*n}function zx(){if(typeof document>"u")return null;const i=256,t=256,e=document.createElement("canvas");e.width=i,e.height=t;const n=e.getContext("2d");if(!n)return null;const s=n.createImageData(i,t);for(let o=0;o<i;o++){const a=o/10,l=i/10,c=.6+.4*J(.2,.7,aa(a*.6,l*.6,41));for(let h=0;h<t;h++){const u=h/t,f=.65*aa(a+Math.sin(u*2*Math.PI)*.4,l,43)+.35*aa(a*2.3+u*3,l*2.3,47),d=.12+.88*c*J(.3,.68,f),g=(h*i+o)*4;s.data[g]=s.data[g+1]=s.data[g+2]=Math.round(d*255),s.data[g+3]=255}}n.putImageData(s,0,0);const r=new so(e);return r.wrapS=r.wrapT=Vr,r.magFilter=un,r.minFilter=jn,r.anisotropy=4,r}function Hx(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");if(!t)return null;const e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,0.7)"),e.addColorStop(.4,"rgba(255,255,255,0.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new so(i)}class Gx{constructor(t){T(this,"group",new He);T(this,"band");T(this,"curtain");T(this,"spray");T(this,"ball");T(this,"bPos");T(this,"bNor");T(this,"bCol");T(this,"cPos");T(this,"cNor");T(this,"cCol");T(this,"cUv");T(this,"cHv");T(this,"sPos");T(this,"sCol");T(this,"any",!1);T(this,"au",new Float32Array(se));T(this,"ay",new Float32Array(se));T(this,"anu",new Float32Array(se));T(this,"any_",new Float32Array(se));T(this,"foam",[.93,.96,.98]);T(this,"lipC",[.35,.85,.8]);T(this,"face",[.07,.5,.55]);T(this,"ballOn",0);T(this,"lastR",0);const e=t*_n;this.bPos=new Float32Array(e*3),this.bNor=new Float32Array(e*3),this.bCol=new Float32Array(e*4);const n=new _e;n.setAttribute("position",new Zt(this.bPos,3).setUsage(me)),n.setAttribute("normal",new Zt(this.bNor,3).setUsage(me)),n.setAttribute("color",new Zt(this.bCol,4).setUsage(me)),n.setIndex(new Zt(Hh(t,_n),1)),this.band=new re(n,new en({vertexColors:!0,roughness:.25,metalness:.05,side:Ue,transparent:!0})),this.band.material.onBeforeCompile=h=>{h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += diffuseColor.rgb * 0.45;`)},this.band.frustumCulled=!1,this.band.receiveShadow=!1;const s=t*Qe;this.cPos=new Float32Array(s*3),this.cNor=new Float32Array(s*3),this.cCol=new Float32Array(s*4),this.cUv=new Float32Array(s*2);const r=new _e;r.setAttribute("position",new Zt(this.cPos,3).setUsage(me)),r.setAttribute("normal",new Zt(this.cNor,3).setUsage(me)),r.setAttribute("color",new Zt(this.cCol,4).setUsage(me)),r.setAttribute("uv",new Zt(this.cUv,2).setUsage(me)),this.cHv=new Float32Array(s),r.setAttribute("heavy",new Zt(this.cHv,1).setUsage(me)),r.setIndex(new Zt(Hh(t,Qe),1));const o=new en({vertexColors:!0,alphaMap:zx(),roughness:.85,emissive:new Ht(.47,.48,.49),side:Ue,transparent:!0,depthWrite:!1});o.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
attribute float heavy;
varying float vHeavy;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHeavy = heavy;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying float vHeavy;`).replace("#include <alphamap_fragment>",`#ifdef USE_ALPHAMAP
 diffuseColor.a *= mix(texture2D(alphaMap, vAlphaMapUv).g, 1.0, vHeavy);
#endif`)},this.curtain=new re(r,o),this.curtain.frustumCulled=!1,this.curtain.renderOrder=2,this.sPos=new Float32Array(t*qn*3),this.sCol=new Float32Array(t*qn*4);const a=new _e;a.setAttribute("position",new Zt(this.sPos,3).setUsage(me)),a.setAttribute("color",new Zt(this.sCol,4).setUsage(me)),this.spray=new Pl(a,new io({vertexColors:!0,size:2.6,transparent:!0,depthWrite:!1,map:Hx()})),this.spray.frustumCulled=!1,this.spray.renderOrder=3;const l=new oo(1,kx),c=l.attributes.position;for(let h=0;h<c.count;h++){const u=c.getX(h),f=c.getY(h),d=c.getZ(h),g=.78+.4*we(u*3.3+f*2.1+d*4.7+5,53);c.setXYZ(h,u*g,f*g,d*g)}l.computeVertexNormals(),this.ball=new re(l,new en({color:16777215,roughness:.9,flatShading:!0,emissive:new Ht(.2,.21,.22)})),this.ball.frustumCulled=!1,this.ball.visible=!1,this.group.add(this.band,this.curtain,this.spray,this.ball)}setTint(t,e,n){for(let s=0;s<3;s++)this.foam[s]=t[s],this.lipC[s]=e[s],this.face[s]=n[s];this.ball.material.color.setRGB(t[0],t[1],t[2]),this.ball.material.emissive.setRGB(t[0]*.22,t[1]*.22,t[2]*.22),this.curtain.material.emissive.setRGB(t[0]*.5,t[1]*.5,t[2]*.5),this.spray.material.color.setRGB(1,1,1)}begin(){this.any=!1}column(t,e,n,s,r,o,a,l,c,h,u=1,f=0){const d=se,g=this.au,v=this.ay,m=this.anu,p=this.any_;let y=0,S=0;for(let x=0;x<d;x++){g[x]=s[x],v[x]=r[x];const C=x>0?x-1:x,k=x<d-1?x+1:x,I=s[k]-s[C],H=r[k]-r[C],q=Math.sqrt(I*I+H*H);m[x]=q>1e-9?-H/q:0,p[x]=q>1e-9?I/q:1,s[x]>s[y]&&(y=x),r[x]>r[S]&&(S=x)}const _=J(.15,.6,l);if(_>0)this.any=!0;else return this.hideColumn(t,e,s,r);y=Math.min(d-3,Math.max(2,S+1));const D=_*Math.min(.5,.06+.11*c),w=we(n*.7+h*.25,61);for(let x=0;x<_n;x++){const C=x/(_n-1),k=C*y,I=Math.min(d-2,Math.floor(k)),H=k-I,q=D*J(0,.45,C),K=g[I]+(g[I+1]-g[I])*H,j=v[I]+(v[I+1]-v[I])*H,z=m[I]+(m[I+1]-m[I])*H,ot=p[I]+(p[I+1]-p[I])*H,ct=(t*_n+x)*3;this.bPos[ct]=e,this.bPos[ct+1]=j+ot*q,this.bPos[ct+2]=K+z*q,this.bNor[ct]=0,this.bNor[ct+1]=-ot,this.bNor[ct+2]=-z;const gt=J(.2,.8,C),Ct=J(.85,1,C)*(.5+.3*w),Lt=(t*_n+x)*4;for(let X=0;X<3;X++){let st=this.face[X]+(this.lipC[X]-this.face[X])*gt*.35;st+=(this.foam[X]-st)*Ct,st+=(this.foam[X]*.92-st)*f*.85,this.bCol[Lt+X]=Math.min(1,st)}this.bCol[Lt+3]=_*.92*o[a+Math.min(d-1,Math.round(k))]}const P=n*.11,L=.86+.08*w;for(let x=0;x<Qe;x++){const C=x/(Qe-1),k=y+C*(d-1-y),I=Math.min(d-2,Math.floor(k)),H=k-I,q=D+(.08-D)*J(0,.6,C),K=g[I]+(g[I+1]-g[I])*H,j=v[I]+(v[I+1]-v[I])*H,z=m[I]+(m[I+1]-m[I])*H,ot=p[I]+(p[I+1]-p[I])*H,ct=(t*Qe+x)*3,gt=Math.sin(n*1.7+C*2.3+h*2.1)*.12*C;this.cPos[ct]=e+gt,this.cPos[ct+1]=j+ot*q,this.cPos[ct+2]=K+z*q,this.cNor[ct]=0,this.cNor[ct+1]=-ot,this.cNor[ct+2]=-z;const Ct=(t*Qe+x)*2;this.cUv[Ct]=P,this.cUv[Ct+1]=C*1.4+h*.55;const Lt=(t*Qe+x)*4,X=L+.06*C;for(let At=0;At<3;At++)this.cCol[Lt+At]=Math.min(1,this.foam[At]*X);const st=1-.5*J(.1,.9,C),Tt=o[a+Math.min(d-1,Math.round(k))],et=Math.max(.5*u*st*(.55+.45*Tt)*(.85+.25*w),f);this.cCol[Lt+3]=Math.min(1,_*et),this.cHv[t*Qe+x]=f}const b=Math.round(n);for(let x=0;x<qn;x++){const C=(t*qn+x)*3,k=(t*qn+x)*4,I=xn(b*7+x,73),H=(h*(.7+.5*I)+I*13.7)%1,q=Math.min(d-1,S+Math.round((y-S)*xn(b*3+x,79))),K=(xn(b*11+x,83)-.5)*.9;this.sPos[C]=e+K+.6*H*(I-.5),this.sPos[C+1]=_>0?r[S]+.15+(.5+.35*c)*Math.sqrt(H)*(.6+I):-50,this.sPos[C+2]=s[q]-(.4+.5*c)*H*(.5+I);for(let j=0;j<3;j++)this.sCol[k+j]=this.foam[j];this.sCol[k+3]=_*.45*Math.sin(Math.PI*Math.min(1,H*1.3))*(1-H)}}hideColumn(t,e,n,s){const r=se;for(let o=0;o<_n;o++){const a=Math.round(o/(_n-1)*(r-1)),l=(t*_n+o)*3;this.bPos[l]=e,this.bPos[l+1]=s[a],this.bPos[l+2]=n[a],this.bCol[(t*_n+o)*4+3]=0}for(let o=0;o<Qe;o++){const a=Math.round(o/(Qe-1)*(r-1)),l=(t*Qe+o)*3;this.cPos[l]=e,this.cPos[l+1]=s[a],this.cPos[l+2]=n[a],this.cCol[(t*Qe+o)*4+3]=0}for(let o=0;o<qn;o++)this.sPos[(t*qn+o)*3+1]=-50,this.sCol[(t*qn+o)*4+3]=0}end(t,e,n,s,r,o){if(this.band.visible=this.curtain.visible=this.spray.visible=this.any,this.any){const h=this.band.geometry.attributes;h.position.needsUpdate=!0,h.normal.needsUpdate=!0,h.color.needsUpdate=!0;const u=this.curtain.geometry.attributes;u.position.needsUpdate=!0,u.normal.needsUpdate=!0,u.color.needsUpdate=!0,u.uv.needsUpdate=!0,u.heavy.needsUpdate=!0;const f=this.spray.geometry.attributes;f.position.needsUpdate=!0,f.color.needsUpdate=!0}const a=s>.05&&Number.isFinite(t+e+n)?1:0,l=1-Math.exp(-4*Math.max(0,Number.isFinite(o)?o:0));this.ballOn+=(a-this.ballOn)*l,a&&(this.ball.position.set(t,e,n),this.lastR=s);const c=this.lastR*this.ballOn;if(this.ball.visible=c>.05,this.ball.visible){const h=1+.06*Math.sin(r*5.3);this.ball.scale.set(c*1.25*h,c*(.9+.08*Math.sin(r*4.1+1)),c*h),this.ball.rotation.set(r*2.2,r*.7,0)}}}const Yn=4,Vx=.6;class Wx{constructor(t){T(this,"mesh");T(this,"pos");T(this,"col");T(this,"idx");T(this,"fed");T(this,"time",0);T(this,"riderS",NaN);T(this,"white",[.93,.96,.98]);this.cols=t;const e=t*Yn;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.idx=new Uint16Array((t-1)*(Yn-1)*6),this.fed=new Uint8Array(t);const n=new _e;n.setAttribute("position",new Zt(this.pos,3).setUsage(me)),n.setAttribute("color",new Zt(this.col,4).setUsage(me)),n.setIndex(new Zt(this.idx,1).setUsage(me)),this.mesh=new re(n,new as({vertexColors:!0,transparent:!0,depthWrite:!1,side:Ue})),this.mesh.name="crestSpray",this.mesh.frustumCulled=!1}setTint(t){for(let e=0;e<3;e++)this.white[e]=t[e]}begin(t,e){this.time=t,this.riderS=e,this.fed.fill(0)}column(t,e,n,s,r,o,a,l,c){if(!c||s<=-1||s>=30||o>=.6)return;const h=this.riderS,u=h===h?J(2,5,Math.abs(n-h)):1,f=J(-1,2,s)*(1-J(10,30,s))*(1-o/.6)*u;if(f<=0)return;const d=this.time,g=Math.max(r,l),v=l>r?a:0,m=.4+.6*we(n*.45-d*1.1,61)*we(n*1.3+d*.7,67),p=1.6+.9*we(n*.3+d*.5,71),y=.5+.4*we(n*.5-d*.6,73),S=this.white;for(let _=0;_<Yn;_++){const D=_/(Yn-1),w=t*Yn+_,P=w*3;this.pos[P]=e-.15*D,this.pos[P+1]=g+.04+y*Math.sin(D*2.2),this.pos[P+2]=v-.05-p*D;const L=w*4;this.col[L]=S[0],this.col[L+1]=S[1],this.col[L+2]=S[2],this.col[L+3]=Vx*f*m*J(0,.25,D)*(1-D)*(1-D)*1.8}this.fed[t]=1}end(){let t=0;for(let n=0;n<this.cols-1;n++)if(!(!this.fed[n]||!this.fed[n+1]))for(let s=0;s<Yn-1;s++){const r=n*Yn+s,o=r+Yn;this.idx[t++]=r,this.idx[t++]=o,this.idx[t++]=r+1,this.idx[t++]=r+1,this.idx[t++]=o,this.idx[t++]=o+1}const e=this.mesh.geometry;e.setDrawRange(0,t),this.mesh.visible=t>0,e.index.needsUpdate=!0,e.attributes.position.needsUpdate=!0,e.attributes.color.needsUpdate=!0}}const an=180,ys=1,Qi=14,dl=28,pl=14,Si=Qi+dl+pl,Xx=35,qx=70,bi=[],Vs=[];for(let i=0;i<Qi;i++)bi.push(0),Vs.push(-14*Math.pow(1-i/Qi,1.6));for(let i=0;i<dl;i++)bi.push(1),Vs.push(Math.pow(i/(dl-1),1.25));for(let i=1;i<=pl;i++)bi.push(2),Vs.push(Xx*Math.pow(i/pl,1.8));const Mn=[.015,.11,.24],zr=[.03,.19,.33],Yx=[.07,.5,.55],Kx=[.35,.85,.8],Hr=[.04,.21,.34],$x=[.93,.96,.98],Zx=[zr[0]/Mn[0],zr[1]/Mn[1],zr[2]/Mn[2]],Jx=[Hr[0]/Mn[0],Hr[1]/Mn[1],Hr[2]/Mn[2]],jx=.85,la=1.3,Qx=.6,df=[],pf=[];for(let i=0;i<Si;i++){const t=bi[i]===1?Vs[i]:1,e=J(.6,.04,t);df.push(bi[i]===1?e*e:0),pf.push(bi[i]===1?1-Qx*J(.5,1,t):1)}const tM=.021,eM=2.5,nM=-4.5,iM=11,sM=.06,rM=1.03;function oM(i,t,e){const n=eM*.5;return(e+i.barrelShape(t-n)+i.barrelShape(t+n)+i.barrelShape(t-2*n)+i.barrelShape(t+2*n))/5}const mf=[],gf=[],_f=[];for(let i=0;i<Si;i++){const t=e=>{const n=Math.sin(i*127.1+e*311.7)*43758.5453;return n-Math.floor(n)};mf.push((i%2?-1:1)*(.4+.6*t(1))),gf.push(.022+.045*t(2)),_f.push(t(3))}const aM=-1.5,lM=-6;function Gh(i,t){const e=new Uint32Array((i-1)*(t-1)*6);let n=0;for(let s=0;s<i-1;s++)for(let r=0;r<t-1;r++){const o=s*t+r,a=(s+1)*t+r,l=s*t+r+1,c=(s+1)*t+r+1;e[n++]=o,e[n++]=a,e[n++]=l,e[n++]=a,e[n++]=c,e[n++]=l}return e}function Vh(i,t,e,n,s=0,r=e-1){for(let o=Math.max(0,s);o<=Math.min(e-1,r);o++){const a=o>0?o-1:o,l=o<e-1?o+1:o;for(let c=0;c<n;c++){const h=c>0?c-1:c,u=c<n-1?c+1:c,f=(a*n+c)*3,d=(l*n+c)*3,g=(o*n+h)*3,v=(o*n+u)*3,m=i[d]-i[f],p=i[d+1]-i[f+1],y=i[d+2]-i[f+2],S=i[v]-i[g],_=i[v+1]-i[g+1],D=i[v+2]-i[g+2];let w=p*D-y*_,P=y*S-m*D,L=m*_-p*S;const b=Math.sqrt(w*w+P*P+L*L),x=(o*n+c)*3;b>1e-12?(w/=b,P/=b,L/=b):(w=0,P=1,L=0),t[x]=w,t[x+1]=P,t[x+2]=L}}}const ca=10,cM=i=>i[se-1]<i[0]-.05;function hM(){if(typeof document>"u")return null;const i=document.createElement("canvas");i.width=i.height=32;const t=i.getContext("2d");if(!t)return null;const e=t.createRadialGradient(16,16,0,16,16,16);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.5,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,32,32),new so(i)}const Kn={min:.38,s0:1.4,s1:4.5,u0:.1,u1:.5,deep0:.15,deep1:.42};class uM{constructor(t){T(this,"group",new He);T(this,"surface");T(this,"lip");T(this,"pos");T(this,"col");T(this,"lipPos");T(this,"lipCol");T(this,"nor");T(this,"lipNor");T(this,"geo");T(this,"lipGeo");T(this,"s0",0);T(this,"lipAlpha");T(this,"rider",null);T(this,"feather");T(this,"featherPos");T(this,"colU",new Float32Array(se));T(this,"colY",new Float32Array(se));T(this,"curtain",new Gx(an));T(this,"crestSpray",new Wx(an));T(this,"pDeep",Mn.slice());T(this,"pBack",zr.slice());T(this,"pTeal",Yx.slice());T(this,"pGlow",Kx.slice());T(this,"pFlat",Hr.slice());T(this,"pWhite",$x.slice());this.wave=t;const e=an*Si;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.geo=new _e,this.geo.setAttribute("position",new Zt(this.pos,3).setUsage(me)),this.geo.setAttribute("color",new Zt(this.col,3).setUsage(me)),this.nor=new Float32Array(e*3),this.geo.setAttribute("normal",new Zt(this.nor,3).setUsage(me)),this.geo.setIndex(new Zt(Gh(an,Si),1));const n=new en({vertexColors:!0,roughness:.32,metalness:.05,side:Ue});this.surface=new re(this.geo,n),this.surface.frustumCulled=!1,this.surface.receiveShadow=!0;const s=an*se;this.lipPos=new Float32Array(s*3),this.lipCol=new Float32Array(s*4),this.lipAlpha=new Float32Array(s).fill(1),this.lipGeo=new _e,this.lipGeo.setAttribute("position",new Zt(this.lipPos,3).setUsage(me)),this.lipGeo.setAttribute("color",new Zt(this.lipCol,4).setUsage(me)),this.lipNor=new Float32Array(s*3),this.lipGeo.setAttribute("normal",new Zt(this.lipNor,3).setUsage(me)),this.lipGeo.setIndex(new Zt(Gh(an,se),1));const r=new en({vertexColors:!0,roughness:.3,metalness:.05,side:Ue,transparent:!0});this.lip=new re(this.lipGeo,r),this.lip.frustumCulled=!1,this.lip.receiveShadow=!0,this.featherPos=new Float32Array(an*ca*3);const o=new _e;o.setAttribute("position",new Zt(this.featherPos,3).setUsage(me)),this.feather=new Pl(o,new io({color:15924223,size:.4,transparent:!0,opacity:.55,depthWrite:!1,map:hM()})),this.feather.frustumCulled=!1,this.group.add(this.surface,this.lip,this.feather,this.curtain.group,this.crestSpray.mesh)}setWaterTint(t){for(let e=0;e<3;e++)this.pDeep[e]=t.deep[e],this.pBack[e]=Math.min(1,t.deep[e]*Zx[e]),this.pFlat[e]=Math.min(1,t.deep[e]*Jx[e]),this.pTeal[e]=t.face[e],this.pGlow[e]=t.lip[e],this.pWhite[e]=t.foam[e];this.curtain.setTint(t.foam,t.lip,t.face),this.crestSpray.setTint(t.foam)}setRider(t){this.rider=t&&Number.isFinite(t.s)&&Number.isFinite(t.u)&&Number.isFinite(t.deep)?{s:t.s,u:t.u,deep:t.deep}:null}lipOpacity(t,e){const n=this.rider;if(!n||!(n.deep>Kn.deep0))return 1;const s=J(Kn.deep0,Kn.deep1,n.deep)*(1-J(Kn.s0,Kn.s1,Math.abs(t-n.s)))*J(n.u+Kn.u0,n.u+Kn.u1,e);return 1-(1-Kn.min)*s}update(t,e){if(!Number.isFinite(t))return;Number.isFinite(e)||(e=0);const n=this.wave;this.s0=Math.round(t/ys)*ys-qx*ys;const s=this.pos,r=this.col;let o=!1,a=an,l=-1;const c=this.pDeep,h=this.pBack,u=this.pTeal,f=this.pGlow,d=this.pFlat,g=this.pWhite;this.curtain.begin(),this.crestSpray.begin(e,this.rider&&this.rider.deep>0?this.rider.s:NaN);const v=n.breakS,m=n.peeling?Math.max(n.barrelShape(v-3),n.barrelShape(v-5)):0,p=m>0?Math.max(n.amp(v-3),n.amp(v-5))*m:0;for(let y=0;y<an;y++){const S=Qu(this.s0+y*ys,v),_=Math.max(n.amp(S),.001),D=n.faceWidth(S,_),w=n.barrelShape(S),P=n.peeling?(1-n.breakBlend(S))*n.peelBlend*(m>0?1:1-w):0,L=m>0&&S<v-1?oM(n,S,w):w,b=L>0?(L===w?n.barrelReach(S):de.cover*D)*qr.land:0,x=L>.05?of(n,S,_):-99,C=x,k=L===w?w:L*J(1,2.5,x),I=this.rider&&this.rider.deep>0?Math.abs(S-this.rider.s):99,H=.32*J(1.5,3.5,I),q=x,K=n.hollow(S),j=-S,z=S-v,ot=m>0?ie((nM-z)/iM,0,1):1,ct=J(0,.12,ot),gt=p>0&&z<-3?(1-w)*J(-3,-7.5,z)*(1-J(-11,-22,z)):0,Ct=p*(1-.25*J(-7,-55,z));let Lt=gt>0&&Ct>_?_+(Ct-_)*gt:_;w>=.05&&Lt>_&&(Lt=m>0?Math.min(Lt,_*rM):_);const X=Lt>_?n.faceWidth(S,Lt)*(1-.4*gt):D,st=tM*(.94+.06*we(S*.06,91))*(1-P),Tt=n.peeling?J(-3,0,z)*(1-J(16,40,z))*(1-.7*w):0;for(let at=0;at<Si;at++){const rt=bi[at],A=Vs[at];let M,B,V,Z,Y;if(rt===0){M=A;const Rt=M/(2.4*Lt);B=Lt*Math.exp(-Rt*Rt);const Jt=ie(B/Lt,0,1)*.6||0;V=c[0]+(h[0]-c[0])*Jt,Z=c[1]+(h[1]-c[1])*Jt,Y=c[2]+(h[2]-c[2])*Jt}else if(rt===1){const Rt=A;M=Rt*X;const Jt=1-Rt;B=Lt*Jt*Jt;const N=2*Lt*Jt,vt=N/Math.sqrt(X*X+N*N),$=J(.2,.9,vt)*Math.pow(Jt,.6)*.9;V=c[0]+(u[0]-c[0])*$,Z=c[1]+(u[1]-c[1])*$,Y=c[2]+(u[2]-c[2])*$;const it=$*$*$*(.4+.6*K)*J(.05,0,Math.abs(Rt-.12)-.1);V+=(f[0]-V)*it*.5,Z+=(f[1]-Z)*it*.5,Y+=(f[2]-Y)*it*.5;const Mt=jx*df[at]*(.55+.45*K);V+=(f[0]*la-V)*Mt,Z+=(f[1]*la-Z)*Mt,Y+=(f[2]*la-Y)*Mt;const xt=1-pf[at];if(V+=(c[0]*.8-V)*xt,Z+=(c[1]*.8-Z)*xt,Y+=(c[2]*.8-Y)*xt,st>0){const Vt=.2126*V+.7152*Z+.0722*Y,he=S*gf[at]+_f[at],xe=he-Math.floor(he),te=4*xe*(1-xe),Pe=1+st*mf[at]*te/Math.max(Vt,.06);V*=Pe,Z*=Pe,Y*=Pe}}else{M=X+A,B=0;const Rt=Math.exp(-A/10);V=c[0]+(d[0]-c[0])*Rt,Z=c[1]+(d[1]-c[1])*Rt,Y=c[2]+(d[2]-c[2])*Rt}const bt=M-X,lt=P>0||bt*bt<9.7||C>0&&M-C>-1.2&&M-C<2.4?.55*we(S*.83+M*2.31+e*.6,7)+.45*we(S*2.13-M*1.71-e*1.4,13):.5,St=Math.exp(-(bt*bt)/.7)*(.2+.55*lt)*Math.min(1,Lt/n.A0);let Wt=0;if(P>0){const Rt=rt===0?ie(1+M/3,0,1)*.7:rt===1?1:Math.exp(-Math.max(0,bt)/3.5);Wt=P*Rt*(.55+.45*lt)*(ot<1?ct*J(0,1,ot+.45*(lt-.5)):1),B+=Wt*(m>0?sM:.18)*(lt-.3)}let tt=0;if(C>0){const Rt=M-C;Rt>-1.2&&Rt<2.4&&(tt=M<q+.5||Rt<0?k*Math.exp(-(Rt*Rt)/.25)*(.45+.35*lt):k*Math.exp(-(Rt*Rt)/.7)*(.75+.25*lt),B+=tt*H*(.6+.4*lt))}const wt=Tt>0?Tt*(at===Qi?.97:at===Qi-1?.55:at===Qi+1?.3:0):0,Nt=tt>0&&M<Math.max(C,q+.5)?tt:0,kt=ie(Math.max(St,Wt,wt,Nt),0,1),Pt=.85+.15*lt;if(V+=(g[0]*Pt-V)*kt,Z+=(g[1]*Pt-Z)*kt,Y+=(g[2]*Pt-Y)*kt,b>0&&M>-.5){const Rt=1-.68*L*(1-J(.85*b,1.05*b,M));V*=Rt,Z*=Rt,Y*=Rt}if(tt>0&&Nt===0){const Rt=.9+.1*lt;V+=(g[0]*Rt-V)*tt,Z+=(g[1]*Rt-Z)*tt,Y+=(g[2]*Rt-Y)*tt}const Xt=(y*Si+at)*3;s[Xt]=j,s[Xt+1]=B,s[Xt+2]=M,r[Xt]=V,r[Xt+1]=Z,r[Xt+2]=Y}const et=this.colU,At=this.colY;Sv(n,S,_,D,et,At)&&(o=!0,y<a&&(a=y),l=y);const Ot=ao(n,S),Bt=this.s0+y*ys,$t=w*J(aM,lM,S-v);let Q=0;for(let at=1;at<se;at++)At[at]>At[Q]&&(Q=at);const ht=w*Ot,R=S>v&&w<.97?Math.min(1,4*w*(1-w))*Ot:0,pt=ht*(1-R),nt=J(1,-6,z);for(let at=0;at<se;at++){const rt=at/(se-1),A=y*se+at,M=A*3;this.lipPos[M]=j,this.lipPos[M+1]=At[at],this.lipPos[M+2]=et[at];const B=this.lipOpacity(Bt,et[at]);this.lipAlpha[A]=B;const V=(.25+.7*rt*rt)*(1-Ot)+Ot*.9*J(.86,1,rt),Z=Ot*(.45*(1-J(.1,.5,rt))+.25*J(.55,.85,rt)*(1-J(.88,1,rt))),Y=(1-B)*.35,bt=A*4;if(ht>0){const lt=Math.sin(S*.9+rt*5.5-e*2.2)+.6*Math.sin(S*2.3-rt*3.1+e*1.3),St=pt*.1*Math.max(0,lt)*(1-nt*.6),Wt=.18*(1-rt)*(1-rt)+.8*R;for(let tt=0;tt<3;tt++){let wt=u[tt]+(g[tt]-u[tt])*V+(f[tt]-u[tt])*Y;wt*=1-Z;let Nt=u[tt]+((d[tt]+c[tt])*.5-u[tt])*(.3+.7*nt)*pt;Nt+=(f[tt]-Nt)*(Wt+St),Nt+=(g[tt]-Nt)*.5*R,this.lipCol[bt+tt]=Math.min(1,wt+(Nt-wt)*ht)}this.lipCol[bt+3]=Math.min(B,1-pt*(.6-.42*nt));continue}for(let lt=0;lt<3;lt++){const St=(u[lt]+(g[lt]-u[lt])*V+(f[lt]-u[lt])*Y)*(1-Z);this.lipCol[bt+lt]=Math.min(1,St)}this.lipCol[bt+3]=B}const ft=m>0?J(-3.5,-9,z):z<-4?(1-w)*J(-4,-7,z):0;if(ft>0)for(let at=0;at<se;at++){const rt=(y*se+at)*4,A=Math.min(1,ft*(1+.45*Math.sin(S*2.1+at*1.7)));for(let M=0;M<3;M++)this.lipCol[rt+M]+=(g[M]*.9-this.lipCol[rt+M])*A}for(let at=0;at<ca;at++){const rt=(y*ca+at)*3,A=we(S*1.9+at*7.3+e*2.7,21)-.5,M=we(S*2.3-at*3.1+e*3.3,23)-.5;this.featherPos[rt]=j+A*.6,this.featherPos[rt+1]=Ot>.25&&cM(At)?At[Q]+.12+.35*Math.abs(M):-50,this.featherPos[rt+2]=et[Q]-.15-.6*Math.abs(A)}this.crestSpray.column(y,j,S,z,Lt,w,et[Q],At[Q],n.peeling);const ut=m>0?.9*J(-3.5,-8,z):0;this.curtain.column(y,j,S,et,At,this.lipAlpha,y*se,w*Ot,_,e,.75*$t,ut)}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0,Vh(s,this.nor,an,Si),this.lip.visible=o,this.curtain.end(0,0,0,0,e,0),this.crestSpray.end(),this.curtain.band.visible=!1,this.feather.geometry.attributes.position.needsUpdate=!0,o&&(this.lipGeo.attributes.position.needsUpdate=!0,this.lipGeo.attributes.color.needsUpdate=!0,Vh(this.lipPos,this.lipNor,an,se,a-1,l+1),this.lipGeo.attributes.normal.needsUpdate=!0)}}function fM(){const i=new He,t=(e,n,s,r,o,a,l)=>{const c=new cs(1,28,14),h=c.attributes.position;for(let f=0;f<h.count;f++){const d=h.getX(f),g=h.getY(f),v=h.getZ(f),m=.82+.36*we(d*3.1+v*5.3+g*2.2+10,l);h.setXYZ(f,d*m,g*m,v*m)}c.computeVertexNormals();const u=new re(c,new en({color:a,roughness:.95,flatShading:!0}));u.scale.set(e,n,s),u.position.set(r,-n*.15,o),i.add(u)};return t(80,26,50,120,-95,6974012,3),t(40,14,26,58,-50,7828031,5),t(20,6,14,30,-24,10517070,9),t(6,2.2,5,18,-12,9071178,11),i}function dM(i){const t=new en({color:new Ht(Mn[0],Mn[1],Mn[2]),roughness:.4}),e=new re(new Hs(1600,1600,1,1),t);return e.rotation.x=-Math.PI/2,e.position.y=-.03,i.add(e),i.add(fM()),{update(n,s){e.position.x=n,s&&t.color.setRGB(s[0],s[1],s[2])}}}function pM(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new _e;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Wh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);const g=Wh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Wh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Zt(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const v=h.getComponent(f,g);a.setComponent(f+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const mM=600;function Zr(i){const t=i-Math.floor(i);return t>=1?0:t}function Xh(i,t){return typeof t=="number"&&Number.isFinite(t)?Zr(t):Zr(i/mM)}function gM(i){if(!i)return null;const t=/[?&]time=([^&#]*)/.exec(i.startsWith("?")||i.startsWith("&")?i:"?"+i);if(!t||t[1].trim()==="")return null;let e;try{e=decodeURIComponent(t[1])}catch{return null}const n=Number(e);return Number.isFinite(n)?Zr(n):null}function zt(i){const t=e=>{const n=e/255;return n<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)};return[t(i>>16&255),t(i>>8&255),t(i&255)]}const qh={el:7,sunColor:zt(16763034),sunI:1.7,hemiSky:zt(16173496),hemiGround:zt(9072758),hemiI:1.5,skyTop:zt(8363984),skyHorizon:zt(16238246),fog:zt(15780274),cloud:zt(16765634),vig:.3,sea:[.05,.11,.2]},Er=[{p:0,az:30,...qh},{p:.25,az:45,el:36,sunColor:zt(16770756),sunI:2.1,hemiSky:zt(13624564),hemiGround:zt(5003868),hemiI:1,skyTop:zt(5214160),skyHorizon:zt(12902382),fog:zt(13820646),cloud:zt(16775406),vig:.22,sea:[.02,.11,.235]},{p:.4,az:70,el:62,sunColor:zt(16773596),sunI:2.3,hemiSky:zt(13822198),hemiGround:zt(4872792),hemiI:.95,skyTop:zt(4163273),skyHorizon:zt(12114672),fog:zt(13624814),cloud:zt(16777215),vig:.2,sea:[.015,.11,.24]},{p:.6,az:80,el:36,sunColor:zt(16769200),sunI:2.15,hemiSky:zt(14542054),hemiGround:zt(8418398),hemiI:1.6,skyTop:zt(4884676),skyHorizon:zt(15131344),fog:zt(14867659),cloud:zt(16773852),vig:.24,sea:[.03,.11,.22]},{p:.69,az:105,el:20,sunColor:zt(16763024),sunI:1.9,hemiSky:zt(16175804),hemiGround:zt(10518640),hemiI:2.3,skyTop:zt(5932228),skyHorizon:zt(15913134),fog:zt(15519406),cloud:zt(16768192),vig:.28,sea:[.05,.105,.2]},{p:.78,az:150,el:6,sunColor:zt(16751194),sunI:1.6,hemiSky:zt(16303272),hemiGround:zt(10779244),hemiI:2.4,skyTop:zt(6978752),skyHorizon:zt(16363646),fog:zt(15774862),cloud:zt(16757900),vig:.34,sea:[.07,.1,.18]},{p:.9,az:75,el:9,sunColor:zt(16756348),sunI:1.5,hemiSky:zt(16303798),hemiGround:zt(10517108),hemiI:2.3,skyTop:zt(7636678),skyHorizon:zt(16300696),fog:zt(15776928),cloud:zt(16761e3),vig:.33,sea:[.06,.1,.19]},{p:1,az:30,...qh}],_M=i=>i*i*(3-2*i),Jn=(i,t,e)=>i+(t-i)*e,$n=(i,t,e)=>[Jn(i[0],t[0],e),Jn(i[1],t[1],e),Jn(i[2],t[2],e)],Yh=Math.PI/180;function Kh(i){const t=Zr(i);let e=0;for(;e<Er.length-2&&t>=Er[e+1].p;)e++;const n=Er[e],s=Er[e+1],r=_M(Math.min(1,Math.max(0,(t-n.p)/(s.p-n.p)))),o=Jn(n.az,s.az,r)*Yh,a=Jn(n.el,s.el,r)*Yh,l=Math.cos(a),c=[-Math.sin(o)*l,Math.sin(a),Math.cos(o)*l];return{phase:t,sunDir:c,sunColor:$n(n.sunColor,s.sunColor,r),sunIntensity:Jn(n.sunI,s.sunI,r),hemiSky:$n(n.hemiSky,s.hemiSky,r),hemiGround:$n(n.hemiGround,s.hemiGround,r),hemiIntensity:Jn(n.hemiI,s.hemiI,r),skyTop:$n(n.skyTop,s.skyTop,r),skyHorizon:$n(n.skyHorizon,s.skyHorizon,r),fogColor:$n(n.fog,s.fog,r),cloudColor:$n(n.cloud,s.cloud,r),vignette:Jn(n.vig,s.vig,r),seaColor:$n(n.sea,s.sea,r)}}const $h=1024,Zh=9,Jh=5,Tr=10,Ar=60,vM=1100,xM=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww; // always at the far plane
}`,MM=`
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
}`;function SM(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function yM(i){const t=[];for(let n=0;n<Jh;n++){const s=new oo(1,1),r=n/(Jh-1)-.5,o=14+12*(1-Math.abs(r)*1.6)+i()*6,a=s.attributes.position;for(let l=0;l<a.count;l++){const c=a.getY(l);a.setY(l,Math.max(c,-.35))}s.scale(o*1.25,o*.8,o),s.translate(r*70+(i()-.5)*10,o*.25+i()*4,(i()-.5)*16),t.push(s)}const e=pM(t,!1);for(const n of t)n.dispose();return e.computeVertexNormals(),e}function bM(i,t,e={}){const n=e.fixedPhase!==void 0?e.fixedPhase:typeof location<"u"?gM(location.search):null;t.shadowMap.enabled=!0,t.shadowMap.type=fu;const s=new lv(16777215,4473924,1);i.add(s);const r=new uv(16777215,2);r.castShadow=!0,r.shadow.mapSize.set($h,$h);const o=r.shadow.camera;o.left=-Tr,o.right=Tr,o.top=Tr,o.bottom=-Tr,o.near=1,o.far=Ar+40,o.updateProjectionMatrix(),r.shadow.bias=-6e-4,r.shadow.normalBias=.03,i.add(r),i.add(r.target);const a=new Fn({uniforms:{uTop:{value:new Ht},uHorizon:{value:new Ht},uSunDir:{value:new U(0,1,0)},uSunColor:{value:new Ht}},vertexShader:xM,fragmentShader:MM,side:Ie,depthWrite:!1,fog:!1}),l=new re(new cs(vM,24,12),a);l.frustumCulled=!1,l.renderOrder=-10,i.add(l),i.background=null;const c=new Cl(16777215,80,650);i.fog=c;const h=new av({flatShading:!0,fog:!1}),u=new He,f=SM(1234),d=[],g=1300;for(let _=0;_<Zh;_++){const D=new re(yM(f),h);D.userData.lookCloud=!0;const w=_<6;D.position.set(-g/2+(_+f()*.6)*(g/Zh),w?55+f()*45:70+f()*40,w?-620-f()*280:-380-f()*150),D.rotation.y=(f()-.5)*.6;const P=1.2+f()*.7;D.scale.set(P,P*(.8+f()*.3),P),u.add(D),d.push({m:D,speed:1.2+f()*1.6})}i.add(u);let v=null;typeof document<"u"&&document.body&&(v=document.createElement("div"),v.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0) 55%, rgba(60,30,20,0.85) 100%);",(e.overlayParent??document.body).appendChild(v));let m=0,p=Kh(Xh(0,n));const y=new Ht;function S(_,D){r.color.setRGB(_.sunColor[0],_.sunColor[1],_.sunColor[2]),r.intensity=_.sunIntensity,r.target.position.set(D.x,D.y,D.z),r.position.set(D.x+_.sunDir[0]*Ar,D.y+_.sunDir[1]*Ar,D.z+_.sunDir[2]*Ar),r.target.updateMatrixWorld(),s.color.setRGB(_.hemiSky[0],_.hemiSky[1],_.hemiSky[2]),s.groundColor.setRGB(_.hemiGround[0],_.hemiGround[1],_.hemiGround[2]),s.intensity=_.hemiIntensity,a.uniforms.uTop.value.setRGB(_.skyTop[0],_.skyTop[1],_.skyTop[2]),a.uniforms.uHorizon.value.setRGB(_.skyHorizon[0],_.skyHorizon[1],_.skyHorizon[2]),a.uniforms.uSunDir.value.set(_.sunDir[0],_.sunDir[1],_.sunDir[2]),a.uniforms.uSunColor.value.setRGB(_.sunColor[0],_.sunColor[1],_.sunColor[2]),l.position.set(D.x,0,D.z),c.color.setRGB(_.fogColor[0],_.fogColor[1],_.fogColor[2]),y.setRGB(_.cloudColor[0],_.cloudColor[1],_.cloudColor[2]),h.color.copy(y).multiplyScalar(.55),h.emissive.copy(y).multiplyScalar(.5),v&&(v.style.opacity=_.vignette.toFixed(3))}return S(p,{x:0,y:0,z:0}),{get state(){return p},update(_,D){const w=Number.isFinite(_)&&_>0?_:0;m+=w,p=Kh(Xh(m,n)),u.position.x=D.x;for(const P of d)P.m.position.x+=P.speed*w,P.m.position.x>g/2&&(P.m.position.x-=g);S(p,D)},dispose(){var _;i.remove(s,r,r.target,l,u),i.fog===c&&(i.fog=null),(_=r.shadow.map)==null||_.dispose(),l.geometry.dispose(),a.dispose();for(const D of d)D.m.geometry.dispose();h.dispose(),v==null||v.remove(),v=null}}}const jh={deep:[.05,.095,.17],face:[.42,.37,.27],lip:[.78,.64,.44],foam:[1,.91,.8]},wr=[{p:0,...jh},{p:.25,deep:[.02,.11,.235],face:[.08,.48,.53],lip:[.38,.84,.78],foam:[.94,.96,.97]},{p:.4,deep:[.015,.11,.24],face:[.07,.5,.55],lip:[.35,.85,.8],foam:[.93,.96,.98]},{p:.6,deep:[.025,.11,.225],face:[.09,.48,.5],lip:[.42,.84,.76],foam:[.95,.95,.94]},{p:.69,deep:[.05,.105,.2],face:[.22,.43,.4],lip:[.62,.78,.6],foam:[.98,.93,.86]},{p:.78,deep:[.08,.095,.165],face:[.48,.37,.25],lip:[.86,.62,.4],foam:[1,.89,.77]},{p:.9,deep:[.07,.095,.175],face:[.43,.35,.3],lip:[.8,.62,.5],foam:[1,.9,.83]},{p:1,...jh}],EM=i=>i*i*(3-2*i);function TM(i){if(!Number.isFinite(i))return 0;const t=i-Math.floor(i);return t>=1?0:t}function Rr(i,t,e,n){return i[0]=t[0]+(e[0]-t[0])*n,i[1]=t[1]+(e[1]-t[1])*n,i[2]=t[2]+(e[2]-t[2])*n,i}function AM(i,t){const e=TM(i);let n=0;for(;n<wr.length-2&&e>=wr[n+1].p;)n++;const s=wr[n],r=wr[n+1],o=EM(Math.min(1,Math.max(0,(e-s.p)/(r.p-s.p))));return Rr(t.deep,s.deep,r.deep,o),Rr(t.face,s.face,r.face,o),Rr(t.lip,s.lip,r.lip,o),Rr(t.foam,s.foam,r.foam,o),t}const ha=[.12,.62,.72],Qh=.5,wM=.9,RM=1/.35,CM=1/.5,Cr=i=>i>0?i<1?i:1:0;function PM(i,t,e){const n=Cr(i),s=Cr((Cr(t)-Qh)/(wM-Qh)),r=s*s*(3-2*s),o=e>0?e:0;if(o===0)return n;const a=r-n,l=(a>0?RM:CM)*o,c=Math.abs(a)<=l?a:Math.sign(a)*l;return Cr(n+c)}function tu(i,t){const e=Number.isFinite(i)?i:0,n=Number.isFinite(t)?t:0;return .06*Math.sin(2.1*e+.9*n)+.04*Math.sin(3.7*e-1.3*n+1.1)}const eu=[.1,.35,.6,.85,1.1],LM=.6,DM=.16,UM=.75,ua=.45,fa=new Float32Array(se),da=new Float32Array(se);function IM(i,t,e,n,s,r,o,a){const l=e-i,c=n-t,h=o-s,u=a-r,f=l*u-c*h;if(Math.abs(f)<1e-12)return!1;const d=s-i,g=r-t,v=(d*u-g*h)/f,m=(d*c-g*l)/f;return v>=0&&v<=1&&m>=0&&m<=1}function NM(i,t,e,n){if(!t.riding||!t.inTube)return 0;const s=ef(i,t.s),r=Math.max(i.amp(s),.001),o=i.faceWidth(s,r);if(!nf(i,s,r,o,fa,da)||ao(i,s)<.3)return 0;const a=e.group.position,l=e.by;let c=0;for(const h of eu){const u=a.z+l.z*h,f=a.y+l.y*h;for(let d=0;d+1<se;d++)if(IM(u,f,n.z,n.y,fa[d],da[d],fa[d+1],da[d+1])){c++;break}}return c/eu.length}class FM{constructor(t){T(this,"ghost",new He);T(this,"reflection",new He);T(this,"amount",0);T(this,"covered",0);T(this,"ghostMat");T(this,"ghosts",[]);T(this,"refls",[]);T(this,"reflMats",[]);T(this,"reflBase",[]);T(this,"mirror",new le);T(this,"camPos",new U);T(this,"reflOn",0);this.rig=t,this.ghostMat=new as({color:new Ht().setRGB(ha[0],ha[1],ha[2]),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,fog:!1});const e=new Map;for(const n of t.parts){const s=new re(n.geometry,this.ghostMat);s.matrixAutoUpdate=!1,s.matrixWorldAutoUpdate=!1,s.renderOrder=999,s.frustumCulled=!1,this.ghosts.push(s),this.ghost.add(s);const r=n.material;let o=e.get(r);o||(o=new as({color:r.color?r.color.clone():new Ht(.5,.5,.5),transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Ue}),e.set(r,o),this.reflMats.push(o),this.reflBase.push(o.color.clone()));const a=new re(n.geometry,o);a.matrixAutoUpdate=!1,a.matrixWorldAutoUpdate=!1,a.renderOrder=-5,a.frustumCulled=!1,a.visible=n!==t.board,this.refls.push(a),this.reflection.add(a)}this.ghost.visible=!1,this.reflection.visible=!1}setGhostWater(t,e,n){this.ghostMat.color.setRGB(Math.min(1,t[0]+(e[0]-t[0])*.55+(n[0]-t[0])*.18),Math.min(1,t[1]+(e[1]-t[1])*.55+(n[1]-t[1])*.18),Math.min(1,t[2]+(e[2]-t[2])*.55+(n[2]-t[2])*.18))}setWater(t){for(let e=0;e<this.reflMats.length;e++){const n=this.reflBase[e];this.reflMats[e].color.setRGB(n.r+(t[0]-n.r)*ua,n.g+(t[1]-n.g)*ua,n.b+(t[2]-n.b)*ua)}}update(t,e,n,s,r){const o=this.rig;n.getWorldPosition(this.camPos),this.covered=o.group.visible?NM(t,e,o,this.camPos):0,this.amount=PM(this.amount,this.covered,r);const a=e.riding&&o.group.visible,l=Math.min(1,Math.max(0,Number.isFinite(r)?r:0)*4);this.reflOn+=((a?1:0)-this.reflOn)*l;const c=this.amount>.005&&o.group.visible,h=this.reflOn>.01&&a;if(this.ghost.visible=c,this.reflection.visible=h,!c&&!h)return;o.group.updateMatrixWorld(!0);const u=o.parts;if(c){this.ghostMat.opacity=this.amount*LM;for(let f=0;f<u.length;f++)this.ghosts[f].matrixWorld.copy(u[f].matrixWorld)}if(h){const f=o.group.position,d=f.y,g=UM*(1+.5*tu(s*1.3,f.x+5)),v=tu(s,f.x)/.9;this.mirror.set(1,v,0,-v*d,0,-g,0,d*(1+g),0,0,1,0,0,0,0,1);const m=DM*this.reflOn*(1-.6*this.amount);for(const p of this.reflMats)p.opacity=m;for(let p=0;p<u.length;p++)this.refls[p].matrixWorld.multiplyMatrices(this.mirror,u[p].matrixWorld)}}}const OM=30;class BM{constructor(t,e){T(this,"recording",!1);T(this,"t0",0);T(this,"pointers",[]);T(this,"trace",[]);T(this,"events",[]);T(this,"seeds",[]);T(this,"lastTrace",-1);T(this,"btn");this.getSeed=e;const n=s=>{this.recording&&this.pointers.push({t:this.now(),type:s.type,id:s.pointerId,x:s.clientX,y:s.clientY})};for(const s of["pointerdown","pointermove","pointerup","pointercancel"])t.addEventListener(s,n,{capture:!0,passive:!0});this.btn=document.createElement("button"),this.btn.textContent="● REC",Object.assign(this.btn.style,{position:"fixed",top:"8px",right:"8px",zIndex:"20",padding:"8px 12px",font:"600 14px system-ui, sans-serif",color:"#fff",background:"rgba(200,30,40,0.75)",border:"1px solid rgba(255,255,255,0.5)",borderRadius:"8px",touchAction:"manipulation"}),this.btn.addEventListener("click",()=>this.recording?void this.stop():this.start()),document.body.appendChild(this.btn)}get active(){return this.recording}now(){return(performance.now()-this.t0)/1e3}start(){this.recording=!0,this.t0=performance.now(),this.pointers=[],this.trace=[],this.events=[],this.seeds=[this.getSeed()],this.lastTrace=-1,this.btn.textContent="■ STOP & SEND"}sample(t){if(!this.recording)return;const e=this.now();if(e-this.lastTrace<1/OM)return;this.lastTrace=e,this.trace.push({time:e,...t});const n=this.getSeed();this.seeds[this.seeds.length-1]!==n&&this.seeds.push(n)}event(t){this.recording&&this.events.push({t:this.now(),e:t})}async stop(){this.recording=!1,this.btn.textContent="● REC";const t=(window.prompt("What were you testing? (trim / wide swing / fast pump / hollow / other)")??"untitled").trim().replace(/[^\w-]+/g,"-").slice(0,40),e={label:t,recordedAt:new Date().toISOString(),screen:{w:window.innerWidth,h:window.innerHeight,dpr:window.devicePixelRatio},userAgent:navigator.userAgent,seeds:this.seeds,pointers:this.pointers,trace:this.trace,events:this.events},n=JSON.stringify(e);try{const s=await fetch("./__rec",{method:"POST",headers:{"Content-Type":"application/json"},body:n});if(!s.ok)throw new Error(String(s.status));this.flash(`saved ✓ (${this.pointers.length} touches)`)}catch{const s=document.createElement("a");s.href=URL.createObjectURL(new Blob([n],{type:"application/json"})),s.download=`surf-rec-${t}.json`,s.click(),this.flash("downloaded")}}flash(t){this.btn.textContent=t,setTimeout(()=>{this.recording||(this.btn.textContent="● REC")},2e3)}}const Le={deepD:-1,wideD:16,missBreakS:40,popupTime:.35,spawnT:.25,vFar:4,vGain:3,hFar:-.45,hGain:.25,endAfterLength:5},kM={grip:!1,targetHeading:null,stall:0,drive:0};class zM{constructor(t,e){T(this,"state","lineup");T(this,"summary",null);T(this,"waveCount",1);T(this,"onPhysEvent",null);T(this,"seed");T(this,"popupLeft",0);T(this,"rideSeconds",0);this.wave=t,this.phys=e,this.seed=t.seed}takeoffWindow(){const t=this.wave;return this.state!=="lineup"||!t.peeling||t.peelBlend<1?null:{minS:t.breakS+Le.deepD,maxS:t.breakS+Le.wideD}}tap(t){if(this.state==="ended"){this.nextWave();return}if(!this.takeoffWindow()||t===null||!Number.isFinite(t))return;const e=t-this.wave.breakS;if(e<Le.deepD)return this.end("Too deep",!1);if(e>Le.wideD)return this.end("Too wide",!1);const n=1-(e-Le.deepD)/(Le.wideD-Le.deepD),s=Le.vFar+Le.vGain*n,r=Le.hFar-Le.hGain*n;this.phys.spawn(t,Le.spawnT,s,r)&&(this.state="popup",this.popupLeft=Le.popupTime,this.rideSeconds=0)}step(t,e){var o;if(!(t>0)||!Number.isFinite(t))return;const n=this.wave;if(this.state==="lineup"){n.update(t),n.peeling&&n.breakS>Le.missBreakS&&this.end("Missed it",!1);return}if(this.state==="ended"){n.finished||n.update(t);return}n.update(t),this.rideSeconds+=t;const s=this.state==="popup";this.phys.step(t,s?kM:e),s&&(this.popupLeft-=t,this.popupLeft<=1e-9&&this.phys.riding&&(this.state="riding"));let r=null;for(const a of this.phys.drain())(o=this.onPhysEvent)==null||o.call(this,a),(a.type==="wipe"||a.type==="kickout")&&(r=a.reason.charAt(0).toUpperCase()+a.reason.slice(1));r===null&&!this.phys.riding&&(r="Wiped out"),r===null&&(this.phys.s>n.length+Le.endAfterLength||n.finished)&&(this.phys.state="kickedOut",r="Wave made"),r!==null&&this.end(r,!0)}end(t,e){this.state="ended",this.summary={seconds:e?this.rideSeconds:0,reason:t,rode:e}}nextWave(){this.seed=Math.imul(this.seed,1103515245)+12345&2147483647,this.wave.reset(this.seed),this.phys.state="idle",this.waveCount++,this.summary=null,this.state="lineup",this.popupLeft=0,this.rideSeconds=0}}const vf=900,xf=3,HM=vf*.96*(1+xf);function GM(i,t){return!Number.isFinite(i)||!Number.isFinite(t)?0:J(.05,1,Math.abs(i))*ie((t-1)/6,0,1)}function VM(i,t,e){return!Number.isFinite(i)||!Number.isFinite(t)||!(t>0)?0:vf*Math.max(0,Math.abs(Math.sin(i))-.04)*Math.min(1,t/8)*(1+xf*ie(Number.isFinite(e)?e:0,0,1))}function WM(i){return Math.round(230*Math.sqrt(ie(Number.isFinite(i)?i:0,0,1)))}const pa=1/120,nu=.1,iu=24,XM=document.getElementById("app")??document.body,Ge=new w_({antialias:!0,powerPreference:"high-performance"});Ge.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Ge.setSize(window.innerWidth,window.innerHeight,!1);Ge.outputColorSpace=Ye;Ge.toneMapping=du;Ge.toneMappingExposure=1;XM.appendChild(Ge.domElement);const oi=new R_,qM=dM(oi),su=bM(oi,Ge),pi={x:0,y:0,z:0};new URLSearchParams(location.search);const ru=NaN,YM=Number.isFinite(ru)?ru:Date.now()&65535|1,ae=new al(YM),Qn=new uM(ae);oi.add(Qn.group);const ke=new dv(window.innerWidth/window.innerHeight),ii=new Dx(document.body);ii.toggle(new URLSearchParams(location.search).has("debug"));function Os(){return ae.breakS+8}function lo(){const i=window.innerWidth,t=window.innerHeight;!(i>0)||!(t>0)||(Ge.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ge.setSize(i,t,!1),ke.setAspect(i/t),ii.resize())}window.addEventListener("resize",lo);var hu;(hu=window.visualViewport)==null||hu.addEventListener("resize",lo);window.addEventListener("orientationchange",()=>[100,300,700].forEach(i=>setTimeout(lo,i)));lo();window.addEventListener("keydown",i=>{(i.key==="d"||i.key==="D")&&ii.toggle()});const yt=new Kr(ae);new URLSearchParams(location.search).get("pump")==="impulse"&&(yt.pumpModel="impulse",Object.assign(Ki,{base:5,hollowGain:4}));const ts=document.createElement("div");ts.style.cssText="position:fixed;left:0;right:0;top:38%;text-align:center;pointer-events:none;z-index:5;font:800 clamp(28px,7vw,64px)/1.1 system-ui,-apple-system,sans-serif;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.55);letter-spacing:.02em;padding:0 16px;display:none;";document.body.appendChild(ts);function KM(i,t="#fff"){ts.textContent=i,ts.style.color=t,ts.style.display="block"}function $M(){ts.style.display="none"}const $e=document.createElement("div");$e.style.cssText="position:fixed;left:0;right:0;top:14%;text-align:center;pointer-events:none;z-index:5;font:700 clamp(18px,4.2vw,34px)/1.1 system-ui,-apple-system,sans-serif;color:#e8fbff;text-shadow:0 2px 10px rgba(0,0,0,.6);display:none;";document.body.appendChild($e);let Ls=0;const ZM={dist:0,size:0};let Mf=0;const JM={"ran ahead":"Ran ahead of the barrel","lip landed":"The lip landed on you"};function jM(i){if(yt.riding&&yt.inTube){const t=bv(ae,yt.s,yt.t,ZM);$e.textContent=`TUBE ${yt.tubeTime.toFixed(1)} s`,Mf=t.dist,$e.style.color="#e8fbff",$e.style.display="block"}else Ls>0?(Ls-=i,Ls<=0&&($e.style.display="none")):$e.style.display="none"}const Te=new Yv;Te.group.scale.setScalar(Ju);oi.add(Te.group);const es=new FM(Te);oi.add(es.reflection,es.ghost);const mi={deep:[0,0,0],face:[0,0,0],lip:[0,0,0],foam:[0,0,0]},si=new ju(Math.ceil(HM*1.1)+460);oi.add(si.points);const Jr=new ju(2200);{const i=Jr.points.material;i.size=.2;const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");if(e){const n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.5,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,32),i.map=new so(t)}}oi.add(Jr.points);function QM(i){if(ae.peeling&&ae.barrelShape(ae.breakS-4)>.5){const t=ae.breakS;for(let e=-8;e<=3.5;e+=.35){const n=t+e,s=ae.barrelShape(n),r=ae.amp(n),o=s>.05?of(ae,n,Math.max(r,.001)):ae.faceWidth(n),a=e>1.5?.5:0,l=Math.max(s,a);l<=.05||yt.inTube&&Math.abs(n-yt.s)<2.2||Jr.emit(-n,.2,o,0,.9+.15*r,.6,22*l,i,.5)}}Jr.update(i)}const ze=new Lx(Ge.domElement,()=>yt.hb,{mode:Ux(),thumbTurnCm:Nx()});Bx(ze);const $i={grip:!1,targetHeading:null,stall:0,drive:0},Gr=[],Sf=new BM(Ge.domElement,()=>ae.seed);function Ke(i){Sf.event(i),Gr.unshift(`${jr.toFixed(1)} ${i}`),Gr.length>4&&(Gr.length=4)}function tS(i){ze.update(i);for(const t of ze.drain())if(t.type==="debug")ii.toggle();else if(t.type==="tap")Ke(`tap ${t.x.toFixed(0)},${t.y.toFixed(0)}`),iS(t.x,t.y);else if(t.type==="grip")Ke("grip");else if(t.type==="ollie"){const e=yt.riding&&yt.tryLaunch(t.spin);Ke(`ollie spin ${t.spin.toFixed(1)} ${e?"LAUNCH":"(no air yet)"}`)}$i.grip=ze.grip,$i.targetHeading=ze.targetHeading,$i.stall=ze.stall,$i.drive=ze.drive}let Pr=0,ml=performance.now(),jr=0;const pn=new zM(ae,yt),eS=.6;let ou=pn.state,Wl=0;const au=new fv,lu=new mt;function nS(i,t){const e=Ge.domElement.getBoundingClientRect();if(!(e.width>0)||!(e.height>0))return null;lu.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height*2-1)),au.setFromCamera(lu,ke.camera),Qn.surface.geometry.computeBoundingSphere();const n=au.intersectObject(Qn.surface,!1)[0];return n?-n.point.x:null}function iS(i,t){if(pn.state==="ended"){Wl>=eS&&pn.tap(null);return}const e=nS(i,t);Ke(`tap s ${e===null?"miss":e.toFixed(1)}`),pn.tap(e)}const Bs=document.createElement("div");Bs.style.cssText="position:fixed;inset:0;z-index:6;display:none;align-items:flex-end;justify-content:center;background:rgba(8,20,30,.25);font-family:system-ui,-apple-system,sans-serif;color:#fff;text-align:center;pointer-events:none;padding:12px 12px 6vh;";const Xl=document.createElement("div");Xl.style.cssText="background:rgba(10,30,45,.82);border-radius:18px;padding:clamp(10px,3vh,24px) clamp(20px,6vw,56px);text-shadow:0 2px 10px rgba(0,0,0,.4);";const ql=document.createElement("div");ql.style.cssText="font-weight:800;font-size:clamp(24px,6vw,52px);line-height:1.15;";const Yl=document.createElement("div");Yl.style.cssText="font-weight:600;font-size:clamp(18px,4.5vw,36px);margin-top:6px;opacity:.95;";const Kl=document.createElement("div");Kl.style.cssText="font-weight:600;font-size:clamp(16px,3.6vw,28px);margin-top:14px;color:#bfe6ff;";Kl.textContent="Tap for the next wave";Xl.append(ql,Yl,Kl);Bs.appendChild(Xl);document.body.appendChild(Bs);const co=document.createElement("div");co.style.cssText="position:fixed;left:0;right:0;bottom:12%;text-align:center;pointer-events:none;z-index:5;display:none;font:700 clamp(18px,4vw,32px)/1.2 system-ui,-apple-system,sans-serif;color:#fff;opacity:.9;text-shadow:0 2px 10px rgba(0,0,0,.55);padding:0 16px;";co.textContent="Tap the wave to catch it";document.body.appendChild(co);function sS(){const i=pn.state;if(i!==ou){if(i==="popup")ze.rebase(yt.hb),Te.reset(),Ke("spawn");else if(i==="ended"){const t=pn.summary;Wl=0,Ke(`end: ${t.reason} ${t.seconds.toFixed(1)}s`),KM(t.reason,t.rode?t.reason==="Wave made"?"#bff7c8":"#ffd2c2":"#ffe9a8"),ql.textContent=t.rode?`You rode ${t.seconds.toFixed(1)} s`:"No ride",Yl.textContent=`Ended: ${t.reason}`,Bs.style.display="flex"}else i==="lineup"&&(Bs.style.display="none",$M(),si.clear(),ke.snap(Os(),ae.amp(Os())));ou=i}}function rS(i){jr+=i,pn.step(i,$i),pn.state==="ended"&&(Wl+=i),sS()}pn.onPhysEvent=i=>{i.type==="pump"?Ke(`pump +${i.dv.toFixed(2)}`):i.type==="wipe"?Ke(`WIPE: ${i.reason}`):i.type==="kickout"?Ke(`kickout: ${i.reason}`):i.type==="tubeEnter"?Ke("tube in"):i.type==="tubeMiss"?(Ke(`tube miss: ${i.reason}`),$e.textContent=JM[i.reason],$e.style.color="#ffd27d",$e.style.display="block",Ls=1.8):i.type==="spit"?(Ke("spit"),$l=!0):(Ke(`tube out ${i.duration.toFixed(1)}s ${i.made?"MADE":""}`),i.made&&($e.textContent=`MADE IT! ${i.duration.toFixed(1)} s`,$e.style.color="#7dffb2",$e.style.display="block",Ls=1.8))};let $l=!1;const Xi=new U;function oS(){$l=!1,yt.state!=="idle"&&(Xi.copy(Te.group.position),Xi.x-=.8,Xi.y+=.8,si.burst(Xi.x,Xi.y,Xi.z,-14,2.5,2,220,3.5))}const gi=new U;let cu=!1;function aS(i){if(yt.riding){const t=Math.abs(Math.sin(yt.skid)),e=GM(yt.skid,yt.v),n=VM(yt.skid,yt.v,e);Te.tailWorld(gi);const s=yt.skid>0?-1:1,r=3+4*t+4*e,o=3.2+2.5*e,a=Te.by,l=Te.bz,c=-Math.cos(yt.hv)*yt.v*.25,h=l.x*s*r+a.x*o+c,u=l.y*s*r+a.y*o,f=l.z*s*r+a.z*o;si.emit(gi.x,gi.y,gi.z,h,u,f,n,i,1.2+1.3*e);const d=yt.t<.25&&Math.abs(yt.skid)>.4;d&&!cu&&si.burst(gi.x,gi.y,gi.z,h*1.2,u*1.4+1.5,f*1.2,WM(e),1.8+1.5*e),cu=d}si.update(i),QM(i)}const Lr=i=>(i*180/Math.PI).toFixed(0),yf=i=>requestAnimationFrame(i);function bf(i){let t=(i-ml)/1e3;ml=i,t>nu&&(t=nu),t<0&&(t=0),tS(t),Pr+=t;let e=0;for(;Pr>=pa&&e<iu;)rS(pa),Pr-=pa,e++;if(e>=iu&&(Pr=0),Te.update(yt,ae,t),$l&&oS(),aS(t),jM(t),yt.state!=="idle"){const s=yt.riding?yt.face.y:Math.max(0,Te.group.position.y),r=yt.riding?yt.face.u:Te.group.position.z,o=yt.riding?yt.s:-Te.group.position.x;ke.setTube(yt.riding&&yt.inTube),ke.update(o,ae.amp(o),t,s,r,Math.cos(yt.hv)>=0?1:-1)}else{const s=Os();ke.update(s,ae.amp(s),t)}yt.riding&&yt.inTube?Qn.setRider({s:yt.s,u:yt.face.u,deep:-yt.d/(1.5+5*ae.hollow(yt.s))}):Qn.setRider(null),AM(su.state.phase,mi),Qn.setWaterTint(mi),es.setWater(mi.face),es.setGhostWater(mi.face,mi.lip,mi.foam),Qn.update(ke.focusS,jr),es.update(ae,yt,ke.camera,jr,t),Te.group.visible?(pi.x=Te.group.position.x,pi.y=Te.group.position.y,pi.z=Te.group.position.z):(pi.x=ke.camera.position.x,pi.y=0,pi.z=ke.camera.position.z-20),su.update(t,pi),qM.update(ke.camera.position.x,mi.deep),Ge.render(oi,ke.camera),Sf.sample({state:yt.state,s:yt.s,t:yt.t,v:yt.v,hb:yt.hb,hv:yt.hv,d:yt.d,skid:yt.skid});const n=yt.state==="idle"?"waiting for the peel":yt.state;co.style.display=pn.takeoffWindow()?"block":"none",ii.setLines([`wave #${pn.waveCount} seed ${ae.seed}  ${ae.peeling?`breakS ${ae.breakS.toFixed(1)} peel ${ae.peelSpeed(ae.breakS).toFixed(1)} m/s`:`lineup ${ae.arrival.toFixed(2)}`}`,`${n}  v ${yt.v.toFixed(1)} m/s  t ${yt.t.toFixed(2)}  d ${yt.d.toFixed(1)} m  sinA ${yt.face.sinA.toFixed(2)}${yt.inTube?`  TUBE mouth ${Mf.toFixed(1)} m`:""}`,`hb ${Lr(yt.hb)}°  hv ${Lr(yt.hv)}°  skid ${yt.skid.toFixed(2)}  turn ${yt.turnRate.toFixed(1)}/${yt.carveRate.toFixed(1)}  stall ${yt.stall.toFixed(2)}  drive ${yt.drive.toFixed(2)}  lean ${Lr(yt.lean)}°  load ${yt.load.toFixed(2)} w ${yt.weight.toFixed(2)}  [${yt.pumpModel}]`,`grip ${ze.grip?"Y":"n"}  target ${ze.targetHeading===null?"- (trim)":Lr(ze.targetHeading)+"°"}  spray ${si.count}`,`events: ${Gr.join(" | ")}`,"keys: Space grip  Up/Down rotate  Shift stall  F drive  D debug   (fingers: slide both forward = drive, back = stall)"]),ii.setShapes({fingers:ze.pointers,target:ze.targetHeading,board:yt.hb}),ii.frame(t),yf(bf)}ke.snap(Os(),ae.amp(Os()));yf(i=>{ml=i,bf(i)});window.__surf={wave:ae,cam:ke,debug:ii,renderer:Ge,input:ze,phys:yt,rig:Te,spray:si,ctl:$i,waveMesh:Qn,riderLook:es};
