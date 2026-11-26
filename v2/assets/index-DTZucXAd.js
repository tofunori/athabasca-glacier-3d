(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="172",Pi={ROTATE:0,DOLLY:1,PAN:2},Ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ql=0,Ja=1,Zl=2,ll=1,cl=2,An=3,Xn=0,Vt=1,Gt=2,Vn=0,Di=1,Vr=2,Qa=3,eo=4,$l=5,ni=100,jl=101,Kl=102,Jl=103,Ql=104,ec=200,tc=201,nc=202,ic=203,Wr=204,Xr=205,sc=206,rc=207,ac=208,oc=209,lc=210,cc=211,uc=212,hc=213,dc=214,Yr=0,qr=1,Zr=2,Ii=3,$r=4,jr=5,Kr=6,Jr=7,ul=0,fc=1,pc=2,Wn=0,mc=1,gc=2,vc=3,hl=4,_c=5,xc=6,Mc=7,dl=300,Ni=301,Fi=302,Qr=303,ea=304,er=306,ta=1e3,Kt=1001,na=1002,Jt=1003,Sc=1004,fs=1005,sn=1006,cr=1007,si=1008,Mn=1009,fl=1010,pl=1011,is=1012,Ua=1013,ri=1014,Pn=1015,rs=1016,Ia=1017,Na=1018,Oi=1020,ml=35902,gl=1021,vl=1022,rn=1023,_l=1024,xl=1025,Li=1026,Bi=1027,Ml=1028,Fa=1029,Sl=1030,Oa=1031,Ba=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ua=37808,ha=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,va=37815,_a=37816,xa=37817,Ma=37818,Sa=37819,ya=37820,Ea=37821,Ys=36492,ba=36494,wa=36495,yl=36283,Ta=36284,Aa=36285,Ca=36286,yc=3200,Ec=3201,El=0,bc=1,Cn="",Ht="srgb",ki="srgb-linear",$s="linear",nt="srgb",fi=7680,to=519,wc=512,Tc=513,Ac=514,bl=515,Cc=516,Rc=517,Pc=518,Dc=519,no=35044,io="300 es",Dn=2e3,js=2001;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Ra=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function Lc(i,e){return(i%e+e)%e}function ur(i,e,t){return(1-t)*i+t*e}function Zi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Uc={DEG2RAD:qs};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],h=s[6],w=s[1],b=s[4],S=s[7],T=s[2],A=s[5],C=s[8];return r[0]=o*_+a*w+l*T,r[3]=o*p+a*b+l*A,r[6]=o*h+a*S+l*C,r[1]=c*_+u*w+d*T,r[4]=c*p+u*b+d*A,r[7]=c*h+u*S+d*C,r[2]=f*_+m*w+g*T,r[5]=f*p+m*b+g*A,r[8]=f*h+m*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hr.makeScale(e,t)),this}rotate(e){return this.premultiply(hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new Be;function wl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ic(){const i=ss("canvas");return i.style.display="block",i}const so={};function Ai(i){i in so||(so[i]=!0,console.warn(i))}function Nc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Oc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ro=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bc(){const i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===nt&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?$s:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:ro,fromXYZ:ao,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:ro,fromXYZ:ao,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}const Je=Bc();function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let pi;class kc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=ss("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ln(t[n]/255)*255):t[n]=Ln(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zc=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dr(s[o].image)):r.push(dr(s[o]))}else r=dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hc=0;class Nt extends li{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Kt,s=Kt,r=sn,o=si,a=rn,l=Mn,c=Nt.DEFAULT_ANISOTROPY,u=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=as(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case Kt:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case Kt:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=dl;Nt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,T=(h+1)/2,A=(u+f)/4,C=(d+_)/4,F=(g+p)/4;return b>S&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=F/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=C/r,s=F/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gc extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Nt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Al extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends Nt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class oi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*_,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const T=Math.sqrt(b),A=Math.atan2(T,h*w);p=Math.sin(p*A)/T,a=Math.sin(a*A)/T}const S=a*w;if(l=l*p+f*S,c=c*p+m*S,u=u*p+g*S,d=d*p+_*S,p===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fr.copy(this).projectOnVector(e),this.sub(fr)}reflect(e){return this.sub(fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new I,oo=new oi;class os{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,un):un.fromBufferAttribute(r,o),un.applyMatrix4(e.matrixWorld),this.expandByPoint(un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ps.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(e.matrixWorld),this.union(ps)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),ms.subVectors(this.max,$i),mi.subVectors(e.a,$i),gi.subVectors(e.b,$i),vi.subVectors(e.c,$i),Nn.subVectors(gi,mi),Fn.subVectors(vi,gi),Zn.subVectors(mi,vi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Zn.z,Zn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Zn.z,0,-Zn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Zn.y,Zn.x,0];return!pr(t,mi,gi,vi,ms)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,mi,gi,vi,ms))?!1:(gs.crossVectors(Nn,Fn),t=[gs.x,gs.y,gs.z],pr(t,mi,gi,vi,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new I,new I,new I,new I,new I,new I,new I,new I],un=new I,ps=new os,mi=new I,gi=new I,vi=new I,Nn=new I,Fn=new I,Zn=new I,$i=new I,ms=new I,gs=new I,$n=new I;function pr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$n.fromArray(i,r);const a=s.x*Math.abs($n.x)+s.y*Math.abs($n.y)+s.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wc=new os,ji=new I,mr=new I;class ls{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(mr)),this.expandByPoint(ji.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,gr=new I,vs=new I,On=new I,vr=new I,_s=new I,_r=new I;class tr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gr.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),On.copy(this.origin).sub(gr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vs),a=On.dot(this.direction),l=-On.dot(vs),c=On.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gr).addScaledVector(vs,f),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){vr.subVectors(t,e),_s.subVectors(n,e),_r.crossVectors(vr,_s);let o=this.direction.dot(_r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const l=a*this.direction.dot(_s.crossVectors(On,_s));if(l<0)return null;const c=a*this.direction.dot(vr.cross(On));if(c<0||l+c>o)return null;const u=-a*On.dot(_r);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,s,r,o,a,l,c,u,d,f,m,g,_,p){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,u,d,f,m,g,_,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xc,e,Yc)}lookAt(e,t,n){const s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Bn.crossVectors(n,$t),Bn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Bn.crossVectors(n,$t)),Bn.normalize(),xs.crossVectors($t,Bn),s[0]=Bn.x,s[4]=xs.x,s[8]=$t.x,s[1]=Bn.y,s[5]=xs.y,s[9]=$t.y,s[2]=Bn.z,s[6]=xs.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],w=n[3],b=n[7],S=n[11],T=n[15],A=s[0],C=s[4],F=s[8],M=s[12],y=s[1],R=s[5],V=s[9],z=s[13],X=s[2],j=s[6],Y=s[10],q=s[14],H=s[3],se=s[7],ee=s[11],pe=s[15];return r[0]=o*A+a*y+l*X+c*H,r[4]=o*C+a*R+l*j+c*se,r[8]=o*F+a*V+l*Y+c*ee,r[12]=o*M+a*z+l*q+c*pe,r[1]=u*A+d*y+f*X+m*H,r[5]=u*C+d*R+f*j+m*se,r[9]=u*F+d*V+f*Y+m*ee,r[13]=u*M+d*z+f*q+m*pe,r[2]=g*A+_*y+p*X+h*H,r[6]=g*C+_*R+p*j+h*se,r[10]=g*F+_*V+p*Y+h*ee,r[14]=g*M+_*z+p*q+h*pe,r[3]=w*A+b*y+S*X+T*H,r[7]=w*C+b*R+S*j+T*se,r[11]=w*F+b*V+S*Y+T*ee,r[15]=w*M+b*z+S*q+T*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],h=e[15],w=d*p*c-_*f*c+_*l*m-a*p*m-d*l*h+a*f*h,b=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,S=u*_*c-g*d*c+g*a*m-o*_*m-u*a*h+o*d*h,T=g*d*l-u*_*l-g*a*f+o*_*f+u*a*p-o*d*p,A=t*w+n*b+s*S+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(_*f*r-d*p*r-_*s*m+n*p*m+d*s*h-n*f*h)*C,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*h+n*l*h)*C,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*C,e[4]=b*C,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*C,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*C,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*C,e[8]=S*C,e[9]=(g*d*r-u*_*r-g*n*m+t*_*m+u*n*h-t*d*h)*C,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*h+t*a*h)*C,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*m-t*a*m)*C,e[12]=T*C,e[13]=(u*_*s-g*d*s+g*n*f-t*_*f-u*n*p+t*d*p)*C,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*C,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,g=r*d,_=o*u,p=o*d,h=a*d,w=l*c,b=l*u,S=l*d,T=n.x,A=n.y,C=n.z;return s[0]=(1-(_+h))*T,s[1]=(m+S)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(f+h))*A,s[6]=(p+w)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(p-w)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=_i.set(s[0],s[1],s[2]).length();const o=_i.set(s[4],s[5],s[6]).length(),a=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);const c=1/r,u=1/o,d=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Dn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(a===Dn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Dn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),f=(t+e)*c,m=(n+s)*u;let g,_;if(a===Dn)g=(o+r)*d,_=-2*d;else if(a===js)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _i=new I,hn=new mt,Xc=new I(0,0,0),Yc=new I(1,1,1),Bn=new I,xs=new I,$t=new I,lo=new mt,co=new oi;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return co.setFromEuler(this),this.setFromQuaternion(co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qc=0;const uo=new I,xi=new oi,bn=new mt,Ms=new I,Ki=new I,Zc=new I,$c=new oi,ho=new I(1,0,0),fo=new I(0,1,0),po=new I(0,0,1),mo={type:"added"},jc={type:"removed"},Mi={type:"childadded",child:null},xr={type:"childremoved",child:null};class Tt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new I,t=new Sn,n=new oi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Be}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(ho,e)}rotateY(e){return this.rotateOnAxis(fo,e)}rotateZ(e){return this.rotateOnAxis(po,e)}translateOnAxis(e,t){return uo.copy(e).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ho,e)}translateY(e){return this.translateOnAxis(fo,e)}translateZ(e){return this.translateOnAxis(po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Ki,Ms,this.up):bn.lookAt(Ms,Ki,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(bn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jc),xr.child=e,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mo),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,Zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,$c,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new I(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new I,wn=new I,Mr=new I,Tn=new I,Si=new I,yi=new I,go=new I,Sr=new I,yr=new I,Er=new I,br=new St,wr=new St,Tr=new St;class fn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),wn.subVectors(n,t),Mr.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(wn),l=dn.dot(Mr),c=wn.dot(wn),u=wn.dot(Mr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(o,Tn.y),l.addScaledVector(a,Tn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return br.setScalar(0),wr.setScalar(0),Tr.setScalar(0),br.fromBufferAttribute(e,t),wr.fromBufferAttribute(e,n),Tr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(br,r.x),o.addScaledVector(wr,r.y),o.addScaledVector(Tr,r.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),wn.subVectors(e,t),dn.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),dn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Si.subVectors(s,n),yi.subVectors(r,n),Sr.subVectors(e,n);const l=Si.dot(Sr),c=yi.dot(Sr);if(l<=0&&c<=0)return t.copy(n);yr.subVectors(e,s);const u=Si.dot(yr),d=yi.dot(yr);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Si,o);Er.subVectors(e,r);const m=Si.dot(Er),g=yi.dot(Er);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(yi,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return go.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(go,a);const h=1/(p+_+f);return o=_*h,a=f*h,t.copy(n).addScaledVector(Si,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function Ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Lc(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ar(o,r,e+1/3),this.g=Ar(o,r,e),this.b=Ar(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return Je.fromWorkingColorSpace(kt.copy(this),e),Math.round(Ge(kt.r*255,0,255))*65536+Math.round(Ge(kt.g*255,0,255))*256+Math.round(Ge(kt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(kt.copy(this),t);const n=kt.r,s=kt.g,r=kt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ht){Je.fromWorkingColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,s=kt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Ss);const n=ur(kn.h,Ss.h,t),s=ur(kn.s,Ss.s,t),r=ur(kn.l,Ss.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ae;Ae.NAMES=Rl;let Kc=0;class ci extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Di,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pl extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new I,ys=new we;class ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=no,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),n=Yt(n,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==no&&(e.usage=this.usage),e}}class Dl extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jc=0;const tn=new mt,Cr=new Tt,Ei=new I,jt=new os,Ji=new os,Pt=new I;class Dt extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wl(e)?Ll:Dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(jt.min,Ji.min),jt.expandByPoint(Pt),Pt.addVectors(jt.max,Ji.max),jt.expandByPoint(Pt)):(jt.expandByPoint(Ji.min),jt.expandByPoint(Ji.max))}jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(Ei.fromBufferAttribute(e,c),Pt.add(Ei)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ct(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new I,l[F]=new I;const c=new I,u=new I,d=new I,f=new we,m=new we,g=new we,_=new I,p=new I;function h(F,M,y){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const R=1/(m.x*g.y-g.x*m.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(R),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(R),a[F].add(_),a[M].add(_),a[y].add(_),l[F].add(p),l[M].add(p),l[y].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let F=0,M=w.length;F<M;++F){const y=w[F],R=y.start,V=y.count;for(let z=R,X=R+V;z<X;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const b=new I,S=new I,T=new I,A=new I;function C(F){T.fromBufferAttribute(s,F),A.copy(T);const M=a[F];b.copy(M),b.sub(T.multiplyScalar(T.dot(M))).normalize(),S.crossVectors(A,M);const R=S.dot(l[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,R)}for(let F=0,M=w.length;F<M;++F){const y=w[F],R=y.start,V=y.count;for(let z=R,X=R+V;z<X;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new ct(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new mt,jn=new tr,Es=new ls,_o=new I,bs=new I,ws=new I,Ts=new I,Rr=new I,As=new I,xo=new I,Cs=new I;class bt extends Tt{constructor(e=new Dt,t=new Pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Rr.fromBufferAttribute(d,e),o?As.addScaledVector(Rr,u):As.addScaledVector(Rr.sub(t),u))}t.add(As)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),jn.copy(e.ray).recast(e.near),!(Es.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Es,_o)===null||jn.origin.distanceToSquared(_o)>(e.far-e.near)**2))&&(vo.copy(r).invert(),jn.copy(e.ray).applyMatrix4(vo),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,T=b;S<T;S+=3){const A=a.getX(S),C=a.getX(S+1),F=a.getX(S+2);s=Rs(this,h,e,n,c,u,d,A,C,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const w=a.getX(p),b=a.getX(p+1),S=a.getX(p+2);s=Rs(this,o,e,n,c,u,d,w,b,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],h=o[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,T=b;S<T;S+=3){const A=S,C=S+1,F=S+2;s=Rs(this,h,e,n,c,u,d,A,C,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,h=_;p<h;p+=3){const w=p,b=p+1,S=p+2;s=Rs(this,o,e,n,c,u,d,w,b,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Qc(i,e,t,n,s,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Xn,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cs);return c<t.near||c>t.far?null:{distance:c,point:Cs.clone(),object:i}}function Rs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,bs),i.getVertexPosition(l,ws),i.getVertexPosition(c,Ts);const u=Qc(i,e,t,n,bs,ws,Ts,xo);if(u){const d=new I;fn.getBarycoord(xo,bs,ws,Ts,d),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new we)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,d,new we)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};fn.getNormal(bs,ws,Ts,f.normal),u.face=f,u.barycoord=d}return u}class cs extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function g(_,p,h,w,b,S,T,A,C,F,M){const y=S/C,R=T/F,V=S/2,z=T/2,X=A/2,j=C+1,Y=F+1;let q=0,H=0;const se=new I;for(let ee=0;ee<Y;ee++){const pe=ee*R-z;for(let Ce=0;Ce<j;Ce++){const Oe=Ce*y-V;se[_]=Oe*w,se[p]=pe*b,se[h]=X,c.push(se.x,se.y,se.z),se[_]=0,se[p]=0,se[h]=A>0?1:-1,u.push(se.x,se.y,se.z),d.push(Ce/C),d.push(1-ee/F),q+=1}}for(let ee=0;ee<F;ee++)for(let pe=0;pe<C;pe++){const Ce=f+pe+j*ee,Oe=f+pe+j*(ee+1),Z=f+(pe+1)+j*(ee+1),re=f+(pe+1)+j*ee;l.push(Ce,Oe,re),l.push(Oe,Z,re),H+=6}a.addGroup(m,H,M),m+=H,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){const e={};for(let t=0;t<i.length;t++){const n=zi(i[t]);for(const s in n)e[s]=n[s]}return e}function eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const tu={clone:zi,merge:zt};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class It extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Il extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zn=new I,Mo=new we,So=new we;class nn extends Il{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Mo,So),t.subVectors(So,Mo)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,wi=1;class su extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(bi,wi,e,t);s.layers=this.layers,this.add(s);const r=new nn(bi,wi,e,t);r.layers=this.layers,this.add(r);const o=new nn(bi,wi,e,t);o.layers=this.layers,this.add(o);const a=new nn(bi,wi,e,t);a.layers=this.layers,this.add(a);const l=new nn(bi,wi,e,t);l.layers=this.layers,this.add(l);const c=new nn(bi,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends Nt{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new It({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===si&&(t.minFilter=sn),new su(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class ka{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new ka(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class au extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ou extends Nt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Jt,u=Jt,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn extends ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new I,lu=new I,cu=new Be;class Hn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pr.subVectors(n,t).cross(lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cu.getNormalMatrix(e),s=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new ls,Ps=new I;class za{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],h=s[12],w=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,p-m,S-h).normalize(),n[1].setComponents(l+r,f+c,p+m,S+h).normalize(),n[2].setComponents(l+o,f+u,p+g,S+w).normalize(),n[3].setComponents(l-o,f-u,p-g,S-w).normalize(),n[4].setComponents(l-a,f-d,p-_,S-b).normalize(),t===Dn)n[5].setComponents(l+a,f+d,p+_,S+b).normalize();else if(t===js)n[5].setComponents(a,d,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ps.x=s.normal.x>0?e.max.x:e.min.x,Ps.y=s.normal.y>0?e.max.y:e.min.y,Ps.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ps)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new I,Js=new I,yo=new mt,Qi=new tr,Ds=new ls,Dr=new I,Eo=new I;class uu extends Tt{constructor(e=new Dt,t=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ks.fromBufferAttribute(t,s-1),Js.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ks.distanceTo(Js);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;yo.copy(s).invert(),Qi.copy(e.ray).applyMatrix4(yo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const h=u.getX(_),w=u.getX(_+1),b=Ls(this,e,Qi,l,h,w);b&&t.push(b)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(m),h=Ls(this,e,Qi,l,_,p);h&&t.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const h=Ls(this,e,Qi,l,_,_+1);h&&t.push(h)}if(this.isLineLoop){const _=Ls(this,e,Qi,l,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ls(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ks.fromBufferAttribute(o,s),Js.fromBufferAttribute(o,r),t.distanceSqToSegment(Ks,Js,Dr,Eo)>n)return;Dr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Dr);if(!(l<e.near||l>e.far))return{distance:l,point:Eo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class hu extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bo=new mt,Pa=new tr,Us=new ls,Is=new I;class du extends Tt{constructor(e=new Dt,t=new hu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(s),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;bo.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(bo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);Is.fromBufferAttribute(d,p),wo(Is,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,_=m;g<_;g++)Is.fromBufferAttribute(d,g),wo(Is,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function wo(i,e,t,n,s,r,o){const a=Pa.distanceSqToPoint(i);if(a<t){const l=new I;Pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gn extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class fu extends Nt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends Nt{constructor(e,t,n,s,r,o,a,l,c,u=Li){if(u!==Li&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Li&&(n=ri),n===void 0&&u===Bi&&(n=Oi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rn extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const w=h*f-o;for(let b=0;b<c;b++){const S=b*d-r;g.push(S,-w,0),_.push(0,0,1),p.push(b/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const b=w+c*h,S=w+c*(h+1),T=w+1+c*(h+1),A=w+1+c*h;m.push(b,S,A),m.push(S,T,A)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ha extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let h=0;h<=n;h++){const w=[],b=h/n;let S=0;h===0&&o===0?S=.5/t:h===n&&l===Math.PI&&(S=-.5/t);for(let T=0;T<=t;T++){const A=T/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+S,1-b),w.push(c++)}u.push(w)}for(let h=0;h<n;h++)for(let w=0;w<t;w++){const b=u[h][w+1],S=u[h][w],T=u[h+1][w],A=u[h+1][w+1];(h!==0||o>0)&&m.push(b,S,A),(h!==n-1||l<Math.PI)&&m.push(S,T,A)}this.setIndex(m),this.setAttribute("position",new Qt(g,3)),this.setAttribute("normal",new Qt(_,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pu extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mu extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gu extends Fl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const To={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vu{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const _u=new vu;class Ga{constructor(e){this.manager=e!==void 0?e:_u,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";class xu extends Ga{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=To.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ss("img");function l(){u(),To.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Mu extends Ga{constructor(e){super(e)}load(e,t,n,s){const r=new Nt,o=new xu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Bl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Su extends Bl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ur=new mt,Ao=new I,Co=new I;class yu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ao),Co.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Co),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kl extends Il{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Eu extends yu{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ro extends Bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ir extends Dt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class bu extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Po{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ge(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class wu extends li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Do(i,e,t,n){const s=Tu(n);switch(t){case gl:return i*e;case _l:return i*e;case xl:return i*e*2;case Ml:return i*e/s.components*s.byteLength;case Fa:return i*e/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case vl:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case Ba:return i*e*4/s.components*s.byteLength;case Gs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ys:case ba:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yl:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Tu(i){switch(i){case Mn:case fl:return{byteLength:1,components:1};case is:case pl:case rs:return{byteLength:2,components:1};case Ia:case Na:return{byteLength:2,components:4};case ri:case Ua:case Pn:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Au(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],_=d[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const _=d[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fu=`#ifdef USE_BATCHING
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,Gu=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ju=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ku=`#define PI 3.141592653589793
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
} // validated`,Ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ah=`#ifdef USE_ENVMAP
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
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
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
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uh=`#ifdef USE_ENVMAP
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
#endif`,hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
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
}`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xh=`uniform bool receiveShadow;
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
#endif`,Mh=`#ifdef USE_ENVMAP
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
#endif`,Sh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wh=`PhysicalMaterial material;
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
#endif`,Th=`struct PhysicalMaterial {
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
}`,Ah=`
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ih=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Oh=`#if defined( USE_POINTS_UV )
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
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vh=`#ifdef USE_MORPHTARGETS
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
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$h=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jh=`#ifdef USE_NORMALMAP
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
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dd=`float getShadowMask() {
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
}`,fd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pd=`#ifdef USE_SKINNING
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
#endif`,md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Md=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#ifdef USE_TRANSMISSION
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cd=`uniform sampler2D t2D;
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
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
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
}`,Id=`#if DEPTH_PACKING == 3200
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
}`,Nd=`#define DISTANCE
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
}`,Fd=`#define DISTANCE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,zd=`uniform vec3 diffuse;
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
}`,Hd=`#include <common>
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
}`,Gd=`uniform vec3 diffuse;
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
}`,Vd=`#define LAMBERT
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
}`,Wd=`#define LAMBERT
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
}`,Xd=`#define MATCAP
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
}`,Yd=`#define MATCAP
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
}`,qd=`#define NORMAL
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
}`,Zd=`#define NORMAL
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
}`,$d=`#define PHONG
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
}`,jd=`#define PHONG
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
}`,Kd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Qd=`#define TOON
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
}`,ef=`#define TOON
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
}`,tf=`uniform float size;
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
}`,nf=`uniform vec3 diffuse;
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
}`,sf=`#include <common>
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
}`,rf=`uniform vec3 color;
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
}`,af=`uniform float rotation;
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
}`,of=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:Cu,alphahash_pars_fragment:Ru,alphamap_fragment:Pu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Uu,aomap_fragment:Iu,aomap_pars_fragment:Nu,batching_pars_vertex:Fu,batching_vertex:Ou,begin_vertex:Bu,beginnormal_vertex:ku,bsdfs:zu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:Yu,color_fragment:qu,color_pars_fragment:Zu,color_pars_vertex:$u,color_vertex:ju,common:Ku,cube_uv_reflection_fragment:Ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:eh,displacementmap_vertex:th,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,colorspace_fragment:sh,colorspace_pars_fragment:rh,envmap_fragment:ah,envmap_common_pars_fragment:oh,envmap_pars_fragment:lh,envmap_pars_vertex:ch,envmap_physical_pars_fragment:Mh,envmap_vertex:uh,fog_vertex:hh,fog_pars_vertex:dh,fog_fragment:fh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:vh,lights_lambert_pars_fragment:_h,lights_pars_begin:xh,lights_toon_fragment:Sh,lights_toon_pars_fragment:yh,lights_phong_fragment:Eh,lights_phong_pars_fragment:bh,lights_physical_fragment:wh,lights_physical_pars_fragment:Th,lights_fragment_begin:Ah,lights_fragment_maps:Ch,lights_fragment_end:Rh,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Dh,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Uh,map_fragment:Ih,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:kh,morphinstance_vertex:zh,morphcolor_vertex:Hh,morphnormal_vertex:Gh,morphtarget_pars_vertex:Vh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:Yh,normal_pars_fragment:qh,normal_pars_vertex:Zh,normal_vertex:$h,normalmap_pars_fragment:jh,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Jh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:ed,opaque_fragment:td,packing:nd,premultiplied_alpha_fragment:id,project_vertex:sd,dithering_fragment:rd,dithering_pars_fragment:ad,roughnessmap_fragment:od,roughnessmap_pars_fragment:ld,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ud,shadowmap_vertex:hd,shadowmask_pars_fragment:dd,skinbase_vertex:fd,skinning_pars_vertex:pd,skinning_vertex:md,skinnormal_vertex:gd,specularmap_fragment:vd,specularmap_pars_fragment:_d,tonemapping_fragment:xd,tonemapping_pars_fragment:Md,transmission_fragment:Sd,transmission_pars_fragment:yd,uv_pars_fragment:Ed,uv_pars_vertex:bd,uv_vertex:wd,worldpos_vertex:Td,background_vert:Ad,background_frag:Cd,backgroundCube_vert:Rd,backgroundCube_frag:Pd,cube_vert:Dd,cube_frag:Ld,depth_vert:Ud,depth_frag:Id,distanceRGBA_vert:Nd,distanceRGBA_frag:Fd,equirect_vert:Od,equirect_frag:Bd,linedashed_vert:kd,linedashed_frag:zd,meshbasic_vert:Hd,meshbasic_frag:Gd,meshlambert_vert:Vd,meshlambert_frag:Wd,meshmatcap_vert:Xd,meshmatcap_frag:Yd,meshnormal_vert:qd,meshnormal_frag:Zd,meshphong_vert:$d,meshphong_frag:jd,meshphysical_vert:Kd,meshphysical_frag:Jd,meshtoon_vert:Qd,meshtoon_frag:ef,points_vert:tf,points_frag:nf,shadow_vert:sf,shadow_frag:rf,sprite_vert:af,sprite_frag:of},le={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},xn={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};xn.physical={uniforms:zt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ns={r:0,b:0,g:0},Qn=new Sn,lf=new mt;function cf(i,e,t,n,s,r,o){const a=new Ae(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const T=g(b);T===null?h(a,l):T&&T.isColor&&(h(T,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,S){const T=g(S);T&&(T.isCubeTexture||T.mapping===er)?(u===void 0&&(u=new bt(new cs(1,1,1),new It({name:"BackgroundCubeMaterial",uniforms:zi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qn.copy(S.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lf.makeRotationFromEuler(Qn)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==nt,(d!==T||f!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new bt(new Rn(2,2),new It({name:"BackgroundMaterial",uniforms:zi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Je.getTransfer(T.colorSpace)!==nt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,S){b.getRGB(Ns,Ul(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,S,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:_,addToRenderList:p,dispose:w}}function uf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(y,R,V,z,X){let j=!1;const Y=d(z,V,R);r!==Y&&(r=Y,c(r.object)),j=m(y,z,V,X),j&&g(y,z,V,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(y,R,V,z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,R,V){const z=V.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let j=X[R.id];j===void 0&&(j={},X[R.id]=j);let Y=j[z];return Y===void 0&&(Y=f(l()),j[z]=Y),Y}function f(y){const R=[],V=[],z=[];for(let X=0;X<t;X++)R[X]=0,V[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:V,attributeDivisors:z,object:y,attributes:{},index:null}}function m(y,R,V,z){const X=r.attributes,j=R.attributes;let Y=0;const q=V.getAttributes();for(const H in q)if(q[H].location>=0){const ee=X[H];let pe=j[H];if(pe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(y,R,V,z){const X={},j=R.attributes;let Y=0;const q=V.getAttributes();for(const H in q)if(q[H].location>=0){let ee=j[H];ee===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),X[H]=pe,Y++}r.attributes=X,r.attributesNum=Y,r.index=z}function _(){const y=r.newAttributes;for(let R=0,V=y.length;R<V;R++)y[R]=0}function p(y){h(y,0)}function h(y,R){const V=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;V[y]=1,z[y]===0&&(i.enableVertexAttribArray(y),z[y]=1),X[y]!==R&&(i.vertexAttribDivisor(y,R),X[y]=R)}function w(){const y=r.newAttributes,R=r.enabledAttributes;for(let V=0,z=R.length;V<z;V++)R[V]!==y[V]&&(i.disableVertexAttribArray(V),R[V]=0)}function b(y,R,V,z,X,j,Y){Y===!0?i.vertexAttribIPointer(y,R,V,X,j):i.vertexAttribPointer(y,R,V,z,X,j)}function S(y,R,V,z){_();const X=z.attributes,j=V.getAttributes(),Y=R.defaultAttributeValues;for(const q in j){const H=j[q];if(H.location>=0){let se=X[q];if(se===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),se!==void 0){const ee=se.normalized,pe=se.itemSize,Ce=e.get(se);if(Ce===void 0)continue;const Oe=Ce.buffer,Z=Ce.type,re=Ce.bytesPerElement,xe=Z===i.INT||Z===i.UNSIGNED_INT||se.gpuType===Ua;if(se.isInterleavedBufferAttribute){const ce=se.data,Re=ce.stride,Ie=se.offset;if(ce.isInstancedInterleavedBuffer){for(let De=0;De<H.locationSize;De++)h(H.location+De,ce.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let De=0;De<H.locationSize;De++)p(H.location+De);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let De=0;De<H.locationSize;De++)b(H.location+De,pe/H.locationSize,Z,ee,Re*re,(Ie+pe/H.locationSize*De)*re,xe)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)h(H.location+ce,se.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ce=0;ce<H.locationSize;ce++)b(H.location+ce,pe/H.locationSize,Z,ee,pe*re,pe/H.locationSize*ce*re,xe)}}else if(Y!==void 0){const ee=Y[q];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(H.location,ee);break;case 3:i.vertexAttrib3fv(H.location,ee);break;case 4:i.vertexAttrib4fv(H.location,ee);break;default:i.vertexAttrib1fv(H.location,ee)}}}}w()}function T(){F();for(const y in n){const R=n[y];for(const V in R){const z=R[V];for(const X in z)u(z[X].object),delete z[X];delete R[V]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const V in R){const z=R[V];for(const X in z)u(z[X].object),delete z[X];delete R[V]}delete n[y.id]}function C(y){for(const R in n){const V=n[R];if(V[y.id]===void 0)continue;const z=V[y.id];for(const X in z)u(z[X].object),delete z[X];delete V[y.id]}}function F(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function hf(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function df(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const F=C===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Pn&&!F)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:T,maxSamples:A}}function ff(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Hn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const w=r?0:n,b=w*4;let S=h.clippingState||null;l.value=S,S=u(g,f,b,m);for(let T=0;T!==b;++T)S[T]=t[T];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const h=m+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,S=m;b!==_;++b,S+=4)o.copy(d[b]).applyMatrix4(w,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function pf(i){let e=new WeakMap;function t(o,a){return a===Qr?o.mapping=Ni:a===ea&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qr||a===ea)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ru(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ri=4,Lo=[.125,.215,.35,.446,.526,.582],ii=20,Nr=new kl,Uo=new Ae;let Fr=null,Or=0,Br=0,kr=!1;const ti=(1+Math.sqrt(5))/2,Ti=1/ti,Io=[new I(-ti,Ti,0),new I(ti,Ti,0),new I(-Ti,0,ti),new I(Ti,0,ti),new I(0,ti,-Ti),new I(0,ti,Ti),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class No{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=kr,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:rs,format:rn,colorSpace:ki,depthBuffer:!1},s=Fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(r)),this._blurMaterial=gf(r,e,t)}return s}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s){const a=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Uo),u.toneMapping=Wn,u.autoClear=!1;const m=new Pl({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new bt(new cs,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Uo),_=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;Fs(s,w*b,h>2?b:0,b,b),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ni||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Io[(s-r-1)%Io.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new bt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ii-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ii;p>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const h=[];let w=0;for(let C=0;C<ii;++C){const F=C/_,M=Math.exp(-F*F/2);h.push(M),C===0?w+=M:C<p&&(w+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[s],T=3*S*(s>b-Ri?s-b+Ri:0),A=4*(this._cubeSize-S);Fs(t,T,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Nr)}}function mf(i){const e=[],t=[],n=[];let s=i;const r=i-Ri+1+Lo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ri?l=Lo[o-i+Ri-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,_=3,p=2,h=1,w=new Float32Array(_*g*m),b=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,F=A>2?0:-1,M=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];w.set(M,_*g*A),b.set(f,p*g*A);const y=[A,A,A,A,A,A];S.set(y,h*g*A)}const T=new Dt;T.setAttribute("position",new ct(w,_)),T.setAttribute("uv",new ct(b,p)),T.setAttribute("faceIndex",new ct(S,h)),e.push(T),s>Ri&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fo(i,e,t){const n=new ai(i,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function gf(i,e,t){const n=new Float32Array(ii),s=new I(0,1,0);return new It({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Oo(){return new It({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bo(){return new It({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Va(){return`

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
	`}function vf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===ea,u=l===Ni||l===Fi;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new No(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new No(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _f(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xf(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let b=0,S=w.length;b<S;b+=3){const T=w[b+0],A=w[b+1],C=w[b+2];f.push(T,A,A,C,C,T)}}else if(g!==void 0){const w=g.array;_=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const T=b+0,A=b+1,C=b+2;f.push(T,A,A,C,C,T)}}else return;const p=new(wl(f)?Ll:Dl)(f,1);p.version=_;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Mf(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*_[w];t.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Sf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yf(i,e,t){const n=new WeakMap,s=new St;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let y=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let T=a.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const C=new Float32Array(T*A*4*d),F=new Al(C,T,A,d);F.type=Pn,F.needsUpdate=!0;const M=S*4;for(let R=0;R<d;R++){const V=h[R],z=w[R],X=b[R],j=T*A*4*R;for(let Y=0;Y<V.count;Y++){const q=Y*M;g===!0&&(s.fromBufferAttribute(V,Y),C[j+q+0]=s.x,C[j+q+1]=s.y,C[j+q+2]=s.z,C[j+q+3]=0),_===!0&&(s.fromBufferAttribute(z,Y),C[j+q+4]=s.x,C[j+q+5]=s.y,C[j+q+6]=s.z,C[j+q+7]=0),p===!0&&(s.fromBufferAttribute(X,Y),C[j+q+8]=s.x,C[j+q+9]=s.y,C[j+q+10]=s.z,C[j+q+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new we(T,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ef(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Hl=new Nt,ko=new Ol(1,1),Gl=new Al,Vl=new Vc,Wl=new Nl,zo=[],Ho=[],Go=new Float32Array(16),Vo=new Float32Array(9),Wo=new Float32Array(4);function Hi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zo[s];if(r===void 0&&(r=new Float32Array(s),zo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nr(i,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Wo.set(n),i.uniformMatrix2fv(this.addr,!1,Wo),Ct(t,n)}}function Rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Vo.set(n),i.uniformMatrix3fv(this.addr,!1,Vo),Ct(t,n)}}function Pf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Go.set(n),i.uniformMatrix4fv(this.addr,!1,Go),Ct(t,n)}}function Df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ko.compareFunction=bl,r=ko):r=Hl,t.setTexture2D(e||r,s)}function zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vl,s)}function Hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wl,s)}function Gf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gl,s)}function Vf(i){switch(i){case 5126:return bf;case 35664:return wf;case 35665:return Tf;case 35666:return Af;case 35674:return Cf;case 35675:return Rf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return Lf;case 35668:case 35672:return Uf;case 35669:case 35673:return If;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Gf}}function Wf(i,e){i.uniform1fv(this.addr,e)}function Xf(i,e){const t=Hi(e,this.size,2);i.uniform2fv(this.addr,t)}function Yf(i,e){const t=Hi(e,this.size,3);i.uniform3fv(this.addr,t)}function qf(i,e){const t=Hi(e,this.size,4);i.uniform4fv(this.addr,t)}function Zf(i,e){const t=Hi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function $f(i,e){const t=Hi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jf(i,e){const t=Hi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kf(i,e){i.uniform1iv(this.addr,e)}function Jf(i,e){i.uniform2iv(this.addr,e)}function Qf(i,e){i.uniform3iv(this.addr,e)}function ep(i,e){i.uniform4iv(this.addr,e)}function tp(i,e){i.uniform1uiv(this.addr,e)}function np(i,e){i.uniform2uiv(this.addr,e)}function ip(i,e){i.uniform3uiv(this.addr,e)}function sp(i,e){i.uniform4uiv(this.addr,e)}function rp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hl,r[o])}function ap(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vl,r[o])}function op(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wl,r[o])}function lp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gl,r[o])}function cp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return Yf;case 35666:return qf;case 35674:return Zf;case 35675:return $f;case 35676:return jf;case 5124:case 35670:return Kf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return lp}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vf(t.type)}}class hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cp(t.type)}}class dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const zr=/(\w+)(\])?(\[|\.)?/g;function Xo(i,e){i.seq.push(e),i.map[e.id]=e}function fp(i,e,t){const n=i.name,s=n.length;for(zr.lastIndex=0;;){const r=zr.exec(n),o=zr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xo(t,c===void 0?new up(a,i,e):new hp(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new dp(a),Xo(t,d)),t=d}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);fp(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Yo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const qo=new Be;function vp(i){Je._getMatrix(qo,Je.workingColorSpace,i);const e=`mat3( ${qo.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+gp(i.getShaderSource(e),o)}else return s}function _p(i,e){const t=vp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xp(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case vc:t="Cineon";break;case hl:t="ACESFilmic";break;case xc:t="AgX";break;case Mc:t="Neutral";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new I;function Mp(){Je.getLuminanceCoefficients(Os);const i=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Sp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function yp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ep(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function $o(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(bp,Tp)}const wp=new Map;function Tp(i,e){let t=ke[e];if(t===void 0){const n=wp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const Ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(i){return i.replace(Ap,Cp)}function Cp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jo(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function Pp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case fc:e="ENVMAP_BLENDING_MIX";break;case pc:e="ENVMAP_BLENDING_ADD";break}return e}function Up(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ip(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Rp(t),c=Pp(t),u=Dp(t),d=Lp(t),f=Up(t),m=Sp(t),g=yp(r),_=s.createProgram();let p,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),h.length>0&&(h+=`
`)):(p=[Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),h=[Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Wn?xp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,_p("linearToOutputTexel",t.outputColorSpace),Mp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=Da(o),o=$o(o,t),o=jo(o,t),a=Da(a),a=$o(a,t),a=jo(a,t),o=Ko(o),a=Ko(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=w+p+o,S=w+h+a,T=Yo(s,s.VERTEX_SHADER,b),A=Yo(s,s.FRAGMENT_SHADER,S);s.attachShader(_,T),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(T).trim(),X=s.getShaderInfoLog(A).trim();let j=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,A);else{const q=Zo(s,T,"vertex"),H=Zo(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+V+`
`+q+`
`+H)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||X==="")&&(Y=!1);Y&&(R.diagnostics={runnable:j,programLog:V,vertexShader:{log:z,prefix:p},fragmentShader:{log:X,prefix:h}})}s.deleteShader(T),s.deleteShader(A),F=new Zs(s,_),M=Ep(s,_)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,pp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let Np=0;class Fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Op(e),t.set(e,n)),n}}class Op{constructor(e){this.id=Np++,this.code=e,this.usedTimes=0}}function Bp(i,e,t,n,s,r,o){const a=new Cl,l=new Fp,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,R,V,z){const X=V.fog,j=z.geometry,Y=M.isMeshStandardMaterial?V.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),H=q&&q.mapping===er?q.image.height:null,se=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const ee=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=ee!==void 0?ee.length:0;let Ce=0;j.morphAttributes.position!==void 0&&(Ce=1),j.morphAttributes.normal!==void 0&&(Ce=2),j.morphAttributes.color!==void 0&&(Ce=3);let Oe,Z,re,xe;if(se){const qe=xn[se];Oe=qe.vertexShader,Z=qe.fragmentShader}else Oe=M.vertexShader,Z=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),xe=l.getFragmentShaderID(M);const ce=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ie=z.isInstancedMesh===!0,De=z.isBatchedMesh===!0,at=!!M.map,ze=!!M.matcap,gt=!!q,P=!!M.aoMap,Wt=!!M.lightMap,He=!!M.bumpMap,Ve=!!M.normalMap,ye=!!M.displacementMap,st=!!M.emissiveMap,Se=!!M.metalnessMap,E=!!M.roughnessMap,v=M.anisotropy>0,O=M.clearcoat>0,J=M.dispersion>0,Q=M.iridescence>0,$=M.sheen>0,Me=M.transmission>0,ue=v&&!!M.anisotropyMap,ve=O&&!!M.clearcoatMap,Ye=O&&!!M.clearcoatNormalMap,ie=O&&!!M.clearcoatRoughnessMap,ne=Q&&!!M.iridescenceMap,Te=Q&&!!M.iridescenceThicknessMap,Ue=$&&!!M.sheenColorMap,_e=$&&!!M.sheenRoughnessMap,We=!!M.specularMap,Fe=!!M.specularColorMap,Ke=!!M.specularIntensityMap,L=Me&&!!M.transmissionMap,ae=Me&&!!M.thicknessMap,W=!!M.gradientMap,K=!!M.alphaMap,de=M.alphaTest>0,he=!!M.alphaHash,Ne=!!M.extensions;let dt=Wn;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(dt=i.toneMapping);const yt={shaderID:se,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:Z,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:De,batchingColor:De&&z._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&z.instanceColor!==null,instancingMorph:Ie&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:ze,envMap:gt,envMapMode:gt&&q.mapping,envMapCubeUVHeight:H,aoMap:P,lightMap:Wt,bumpMap:He,normalMap:Ve,displacementMap:f&&ye,emissiveMap:st,normalMapObjectSpace:Ve&&M.normalMapType===bc,normalMapTangentSpace:Ve&&M.normalMapType===El,metalnessMap:Se,roughnessMap:E,anisotropy:v,anisotropyMap:ue,clearcoat:O,clearcoatMap:ve,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ie,dispersion:J,iridescence:Q,iridescenceMap:ne,iridescenceThicknessMap:Te,sheen:$,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:We,specularColorMap:Fe,specularIntensityMap:Ke,transmission:Me,transmissionMap:L,thicknessMap:ae,gradientMap:W,opaque:M.transparent===!1&&M.blending===Di&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:he,combine:M.combine,mapUv:at&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:Wt&&_(M.lightMap.channel),bumpMapUv:He&&_(M.bumpMap.channel),normalMapUv:Ve&&_(M.normalMap.channel),displacementMapUv:ye&&_(M.displacementMap.channel),emissiveMapUv:st&&_(M.emissiveMap.channel),metalnessMapUv:Se&&_(M.metalnessMap.channel),roughnessMapUv:E&&_(M.roughnessMap.channel),anisotropyMapUv:ue&&_(M.anisotropyMap.channel),clearcoatMapUv:ve&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(M.sheenRoughnessMap.channel),specularMapUv:We&&_(M.specularMap.channel),specularColorMapUv:Fe&&_(M.specularColorMap.channel),specularIntensityMapUv:Ke&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ae&&_(M.thicknessMap.channel),alphaMapUv:K&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ve||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(at||K),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===nt,decodeVideoTextureEmissive:st&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gt,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&M.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(w(y,M),b(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function b(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const y=g[M.type];let R;if(y){const V=xn[y];R=tu.clone(V.uniforms)}else R=M.uniforms;return R}function T(M,y){let R;for(let V=0,z=u.length;V<z;V++){const X=u[V];if(X.cacheKey===y){R=X,++R.usedTimes;break}}return R===void 0&&(R=new Ip(i,y,M,r),u.push(R)),R}function A(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:T,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:F}}function kp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Qo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function el(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,_,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=p),e++,h}function a(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,_,p){const h=o(d,f,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||zp),n.length>1&&n.sort(f||Qo),s.length>1&&s.sort(f||Qo)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Hp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new el,i.set(n,[o])):s>=r.length?(o=new el,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Vp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Wp=0;function Xp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yp(i){const e=new Gp,t=Vp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new mt,o=new mt;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,_=0,p=0,h=0,w=0,b=0,S=0,T=0,A=0,C=0;c.sort(Xp);for(let M=0,y=c.length;M<y;M++){const R=c[M],V=R.color,z=R.intensity,X=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=V.r*z,d+=V.g*z,f+=V.b*z;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(R.sh.coefficients[Y],z);C++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const q=R.shadow,H=t.get(R);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=R.shadow.matrix,w++}n.directional[m]=Y,m++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(V).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,n.spot[_]=Y;const q=R.shadow;if(R.map&&(n.spotLightMap[T]=R.map,T++,q.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,S++}_++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(V).multiplyScalar(z),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=Y,p++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const q=R.shadow,H=t.get(R);H.shadowIntensity=q.intensity,H.shadowBias=q.bias,H.shadowNormalBias=q.normalBias,H.shadowRadius=q.radius,H.shadowMapSize=q.mapSize,H.shadowCameraNear=q.camera.near,H.shadowCameraFar=q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,b++}n.point[g]=Y,g++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(z),Y.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==w||F.numPointShadows!==b||F.numSpotShadows!==S||F.numSpotMaps!==T||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,F.directionalLength=m,F.pointLength=g,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=w,F.numPointShadows=b,F.numSpotShadows=S,F.numSpotMaps=T,F.numLightProbes=C,n.version=Wp++)}function l(c,u){let d=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const b=c[h];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(b.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function tl(i){const e=new Yp(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function qp(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new tl(i),e.set(s,[a])):r>=o.length?(a=new tl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Zp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$p=`uniform sampler2D shadow_pass;
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
}`;function jp(i,e,t){let n=new za;const s=new we,r=new we,o=new St,a=new pu({depthPacking:Ec}),l=new mu,c={},u=t.maxTextureSize,d={[Xn]:Vt,[Vt]:Xn,[Gt]:Gt},f=new It({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Zp,fragmentShader:$p}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Dt;g.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let h=this.type;this.render=function(A,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Vn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const z=h!==An&&this.type===An,X=h===An&&this.type!==An;for(let j=0,Y=A.length;j<Y;j++){const q=A[j],H=q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const se=H.getFrameExtents();if(s.multiply(se),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,H.mapSize.y=r.y)),H.map===null||z===!0||X===!0){const pe=this.type!==An?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new ai(s.x,s.y,pe),H.map.texture.name=q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ee=H.getViewportCount();for(let pe=0;pe<ee;pe++){const Ce=H.getViewport(pe);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),V.viewport(o),H.updateMatrices(q,pe),n=H.getFrustum(),S(C,F,H.camera,q,this.type)}H.isPointLightShadow!==!0&&this.type===An&&w(H,F),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,R)};function w(A,C){const F=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,F,m,_,null)}function b(A,C,F,M){let y=null;const R=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=F.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=y.uuid,z=C.uuid;let X=c[V];X===void 0&&(X={},c[V]=X);let j=X[z];j===void 0&&(j=y.clone(),X[z]=j,C.addEventListener("dispose",T)),y=j}if(y.visible=C.visible,y.wireframe=C.wireframe,M===An?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=i.properties.get(y);V.light=F}return y}function S(A,C,F,M,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===An)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const z=e.update(A),X=A.material;if(Array.isArray(X)){const j=z.groups;for(let Y=0,q=j.length;Y<q;Y++){const H=j[Y],se=X[H.materialIndex];if(se&&se.visible){const ee=b(A,se,M,y);A.onBeforeShadow(i,A,C,F,z,ee,H),i.renderBufferDirect(F,null,z,ee,A,H),A.onAfterShadow(i,A,C,F,z,ee,H)}}}else if(X.visible){const j=b(A,X,M,y);A.onBeforeShadow(i,A,C,F,z,j,null),i.renderBufferDirect(F,null,z,j,A,null),A.onAfterShadow(i,A,C,F,z,j,null)}}const V=A.children;for(let z=0,X=V.length;z<X;z++)S(V[z],C,F,M,y)}function T(A){A.target.removeEventListener("dispose",T);for(const F in c){const M=c[F],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Kp={[Yr]:qr,[Zr]:Kr,[$r]:Jr,[Ii]:jr,[qr]:Yr,[Kr]:Zr,[Jr]:$r,[jr]:Ii};function Jp(i,e){function t(){let L=!1;const ae=new St;let W=null;const K=new St(0,0,0,0);return{setMask:function(de){W!==de&&!L&&(i.colorMask(de,de,de,de),W=de)},setLocked:function(de){L=de},setClear:function(de,he,Ne,dt,yt){yt===!0&&(de*=dt,he*=dt,Ne*=dt),ae.set(de,he,Ne,dt),K.equals(ae)===!1&&(i.clearColor(de,he,Ne,dt),K.copy(ae))},reset:function(){L=!1,W=null,K.set(-1,0,0,0)}}}function n(){let L=!1,ae=!1,W=null,K=null,de=null;return{setReversed:function(he){if(ae!==he){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const dt=de;de=null,this.setClear(dt)}ae=he},getReversed:function(){return ae},setTest:function(he){he?ce(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(he){W!==he&&!L&&(i.depthMask(he),W=he)},setFunc:function(he){if(ae&&(he=Kp[he]),K!==he){switch(he){case Yr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case Jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=he}},setLocked:function(he){L=he},setClear:function(he){de!==he&&(ae&&(he=1-he),i.clearDepth(he),de=he)},reset:function(){L=!1,W=null,K=null,de=null,ae=!1}}}function s(){let L=!1,ae=null,W=null,K=null,de=null,he=null,Ne=null,dt=null,yt=null;return{setTest:function(qe){L||(qe?ce(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(qe){ae!==qe&&!L&&(i.stencilMask(qe),ae=qe)},setFunc:function(qe,Lt,Zt){(W!==qe||K!==Lt||de!==Zt)&&(i.stencilFunc(qe,Lt,Zt),W=qe,K=Lt,de=Zt)},setOp:function(qe,Lt,Zt){(he!==qe||Ne!==Lt||dt!==Zt)&&(i.stencilOp(qe,Lt,Zt),he=qe,Ne=Lt,dt=Zt)},setLocked:function(qe){L=qe},setClear:function(qe){yt!==qe&&(i.clearStencil(qe),yt=qe)},reset:function(){L=!1,ae=null,W=null,K=null,de=null,he=null,Ne=null,dt=null,yt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,b=null,S=null,T=null,A=null,C=new Ae(0,0,0),F=0,M=!1,y=null,R=null,V=null,z=null,X=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=q>=2);let se=null,ee={};const pe=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),Oe=new St().fromArray(pe),Z=new St().fromArray(Ce);function re(L,ae,W,K){const de=new Uint8Array(4),he=i.createTexture();i.bindTexture(L,he),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ne=0;Ne<W;Ne++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ae+Ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return he}const xe={};xe[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Ii),He(!1),Ve(Ja),ce(i.CULL_FACE),P(Vn);function ce(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ie(L,ae){return d[L]!==ae?(i.bindFramebuffer(L,ae),d[L]=ae,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function De(L,ae){let W=m,K=!1;if(L){W=f.get(ae),W===void 0&&(W=[],f.set(ae,W));const de=L.textures;if(W.length!==de.length||W[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ne=de.length;he<Ne;he++)W[he]=i.COLOR_ATTACHMENT0+he;W.length=de.length,K=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,K=!0);K&&i.drawBuffers(W)}function at(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const ze={[ni]:i.FUNC_ADD,[jl]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};ze[Jl]=i.MIN,ze[Ql]=i.MAX;const gt={[ec]:i.ZERO,[tc]:i.ONE,[nc]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[ac]:i.DST_COLOR,[sc]:i.DST_ALPHA,[ic]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[oc]:i.ONE_MINUS_DST_COLOR,[rc]:i.ONE_MINUS_DST_ALPHA,[cc]:i.CONSTANT_COLOR,[uc]:i.ONE_MINUS_CONSTANT_COLOR,[hc]:i.CONSTANT_ALPHA,[dc]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,ae,W,K,de,he,Ne,dt,yt,qe){if(L===Vn){_===!0&&(Re(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),L!==$l){if(L!==p||qe!==M){if((h!==ni||S!==ni)&&(i.blendEquation(i.FUNC_ADD),h=ni,S=ni),qe)switch(L){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.ONE,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,T=null,A=null,C.set(0,0,0),F=0,p=L,M=qe}return}de=de||ae,he=he||W,Ne=Ne||K,(ae!==h||de!==S)&&(i.blendEquationSeparate(ze[ae],ze[de]),h=ae,S=de),(W!==w||K!==b||he!==T||Ne!==A)&&(i.blendFuncSeparate(gt[W],gt[K],gt[he],gt[Ne]),w=W,b=K,T=he,A=Ne),(dt.equals(C)===!1||yt!==F)&&(i.blendColor(dt.r,dt.g,dt.b,yt),C.copy(dt),F=yt),p=L,M=!1}function Wt(L,ae){L.side===Gt?Re(i.CULL_FACE):ce(i.CULL_FACE);let W=L.side===Vt;ae&&(W=!W),He(W),L.blending===Di&&L.transparent===!1?P(Vn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),st(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function Ve(L){L!==ql?(ce(i.CULL_FACE),L!==R&&(L===Ja?i.cullFace(i.BACK):L===Zl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),R=L}function ye(L){L!==V&&(Y&&i.lineWidth(L),V=L)}function st(L,ae,W){L?(ce(i.POLYGON_OFFSET_FILL),(z!==ae||X!==W)&&(i.polygonOffset(ae,W),z=ae,X=W)):Re(i.POLYGON_OFFSET_FILL)}function Se(L){L?ce(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+j-1),se!==L&&(i.activeTexture(L),se=L)}function v(L,ae,W){W===void 0&&(se===null?W=i.TEXTURE0+j-1:W=se);let K=ee[W];K===void 0&&(K={type:void 0,texture:void 0},ee[W]=K),(K.type!==L||K.texture!==ae)&&(se!==W&&(i.activeTexture(W),se=W),i.bindTexture(L,ae||xe[L]),K.type=L,K.texture=ae)}function O(){const L=ee[se];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){Oe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Oe.copy(L))}function _e(L){Z.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Z.copy(L))}function We(L,ae){let W=c.get(ae);W===void 0&&(W=new WeakMap,c.set(ae,W));let K=W.get(L);K===void 0&&(K=i.getUniformBlockIndex(ae,L.name),W.set(L,K))}function Fe(L,ae){const K=c.get(ae).get(L);l.get(ae)!==K&&(i.uniformBlockBinding(ae,K,L.__bindingPointIndex),l.set(ae,K))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,ee={},d={},f=new WeakMap,m=[],g=null,_=!1,p=null,h=null,w=null,b=null,S=null,T=null,A=null,C=new Ae(0,0,0),F=0,M=!1,y=null,R=null,V=null,z=null,X=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Re,bindFramebuffer:Ie,drawBuffers:De,useProgram:at,setBlending:P,setMaterial:Wt,setFlipSided:He,setCullFace:Ve,setLineWidth:ye,setPolygonOffset:st,setScissorTest:Se,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:ne,texImage3D:Te,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:Ye,texStorage3D:ie,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:ve,scissor:Ue,viewport:_e,reset:Ke}}function Qp(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):ss("canvas")}function _(E,v,O){let J=1;const Q=Se(E);if((Q.width>O||Q.height>O)&&(J=O/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(J*Q.width),Me=Math.floor(J*Q.height);d===void 0&&(d=g($,Me));const ue=v?g($,Me):d;return ue.width=$,ue.height=Me,ue.getContext("2d").drawImage(E,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Me+")."),ue}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,O,J,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),v===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),v===i.RGBA){const Me=Q?$s:Je.getTransfer(J);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Me===nt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(E,v){let O;return E?v===null||v===ri||v===Oi?O=i.DEPTH24_STENCIL8:v===Pn?O=i.DEPTH32F_STENCIL8:v===is&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===Oi?O=i.DEPTH_COMPONENT24:v===Pn?O=i.DEPTH_COMPONENT32F:v===is&&(O=i.DEPTH_COMPONENT16),O}function T(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==sn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),F(v),v.isVideoTexture&&u.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),y(v)}function F(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,J=f.get(O);if(J){const Q=J[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(E),Object.keys(J).length===0&&f.delete(O)}n.remove(E)}function M(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const O=E.source,J=f.get(O);delete J[v.__cacheKey],o.memory.textures--}function y(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let Q=0;Q<v.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(v.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let J=0,Q=O.length;J<Q;J++){const $=n.get(O[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(E)}let R=0;function V(){R=0}function z(){const E=R;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),R+=1,E}function X(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function j(E,v){const O=n.get(E);if(E.isVideoTexture&&ye(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(O,E,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function q(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Z(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function H(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){re(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const se={[ta]:i.REPEAT,[Kt]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ee={[Jt]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[cr]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},pe={[wc]:i.NEVER,[Dc]:i.ALWAYS,[Tc]:i.LESS,[bl]:i.LEQUAL,[Ac]:i.EQUAL,[Pc]:i.GEQUAL,[Cc]:i.GREATER,[Rc]:i.NOTEQUAL};function Ce(E,v){if(v.type===Pn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===sn||v.magFilter===cr||v.magFilter===fs||v.magFilter===si||v.minFilter===sn||v.minFilter===cr||v.minFilter===fs||v.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,se[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ee[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ee[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Jt||v.minFilter!==fs&&v.minFilter!==si||v.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const J=v.source;let Q=f.get(J);Q===void 0&&(Q={},f.set(J,Q));const $=X(v);if($!==E.__cacheKey){Q[$]===void 0&&(Q[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[$].usedTimes++;const Me=Q[E.__cacheKey];Me!==void 0&&(Q[E.__cacheKey].usedTimes--,Me.usedTimes===0&&M(v)),E.__cacheKey=$,E.__webglTexture=Q[$].texture}return O}function Z(E,v,O){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);const Q=Oe(E,v),$=v.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+O);const Me=n.get($);if($.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);const ue=Je.getPrimaries(Je.workingColorSpace),ve=v.colorSpace===Cn?null:Je.getPrimaries(v.colorSpace),Ye=v.colorSpace===Cn||ue===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ie=_(v.image,!1,s.maxTextureSize);ie=st(v,ie);const ne=r.convert(v.format,v.colorSpace),Te=r.convert(v.type);let Ue=b(v.internalFormat,ne,Te,v.colorSpace,v.isVideoTexture);Ce(J,v);let _e;const We=v.mipmaps,Fe=v.isVideoTexture!==!0,Ke=Me.__version===void 0||Q===!0,L=$.dataReady,ae=T(v,ie);if(v.isDepthTexture)Ue=S(v.format===Bi,v.type),Ke&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Ue,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ie.width,ie.height,0,ne,Te,null));else if(v.isDataTexture)if(We.length>0){Fe&&Ke&&t.texStorage2D(i.TEXTURE_2D,ae,Ue,We[0].width,We[0].height);for(let W=0,K=We.length;W<K;W++)_e=We[W],Fe?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ne,Te,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ue,_e.width,_e.height,0,ne,Te,_e.data);v.generateMipmaps=!1}else Fe?(Ke&&t.texStorage2D(i.TEXTURE_2D,ae,Ue,ie.width,ie.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ne,Te,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,ie.width,ie.height,0,ne,Te,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Fe&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ue,We[0].width,We[0].height,ie.depth);for(let W=0,K=We.length;W<K;W++)if(_e=We[W],v.format!==rn)if(ne!==null)if(Fe){if(L)if(v.layerUpdates.size>0){const de=Do(_e.width,_e.height,v.format,v.type);for(const he of v.layerUpdates){const Ne=_e.data.subarray(he*de/_e.data.BYTES_PER_ELEMENT,(he+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,he,_e.width,_e.height,1,ne,Ne)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ie.depth,ne,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ue,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ie.depth,ne,Te,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Ue,_e.width,_e.height,ie.depth,0,ne,Te,_e.data)}else{Fe&&Ke&&t.texStorage2D(i.TEXTURE_2D,ae,Ue,We[0].width,We[0].height);for(let W=0,K=We.length;W<K;W++)_e=We[W],v.format!==rn?ne!==null?Fe?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ne,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ne,Te,_e.data):t.texImage2D(i.TEXTURE_2D,W,Ue,_e.width,_e.height,0,ne,Te,_e.data)}else if(v.isDataArrayTexture)if(Fe){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Ue,ie.width,ie.height,ie.depth),L)if(v.layerUpdates.size>0){const W=Do(ie.width,ie.height,v.format,v.type);for(const K of v.layerUpdates){const de=ie.data.subarray(K*W/ie.data.BYTES_PER_ELEMENT,(K+1)*W/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,ne,Te,de)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ne,Te,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ie.width,ie.height,ie.depth,0,ne,Te,ie.data);else if(v.isData3DTexture)Fe?(Ke&&t.texStorage3D(i.TEXTURE_3D,ae,Ue,ie.width,ie.height,ie.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ne,Te,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ie.width,ie.height,ie.depth,0,ne,Te,ie.data);else if(v.isFramebufferTexture){if(Ke)if(Fe)t.texStorage2D(i.TEXTURE_2D,ae,Ue,ie.width,ie.height);else{let W=ie.width,K=ie.height;for(let de=0;de<ae;de++)t.texImage2D(i.TEXTURE_2D,de,Ue,W,K,0,ne,Te,null),W>>=1,K>>=1}}else if(We.length>0){if(Fe&&Ke){const W=Se(We[0]);t.texStorage2D(i.TEXTURE_2D,ae,Ue,W.width,W.height)}for(let W=0,K=We.length;W<K;W++)_e=We[W],Fe?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ne,Te,_e):t.texImage2D(i.TEXTURE_2D,W,Ue,ne,Te,_e);v.generateMipmaps=!1}else if(Fe){if(Ke){const W=Se(ie);t.texStorage2D(i.TEXTURE_2D,ae,Ue,W.width,W.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Te,ie)}else t.texImage2D(i.TEXTURE_2D,0,Ue,ne,Te,ie);p(v)&&h(J),Me.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function re(E,v,O){if(v.image.length!==6)return;const J=Oe(E,v),Q=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const $=n.get(Q);if(Q.version!==$.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const Me=Je.getPrimaries(Je.workingColorSpace),ue=v.colorSpace===Cn?null:Je.getPrimaries(v.colorSpace),ve=v.colorSpace===Cn||Me===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let K=0;K<6;K++)!Ye&&!ie?ne[K]=_(v.image[K],!0,s.maxCubemapSize):ne[K]=ie?v.image[K].image:v.image[K],ne[K]=st(v,ne[K]);const Te=ne[0],Ue=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),We=b(v.internalFormat,Ue,_e,v.colorSpace),Fe=v.isVideoTexture!==!0,Ke=$.__version===void 0||J===!0,L=Q.dataReady;let ae=T(v,Te);Ce(i.TEXTURE_CUBE_MAP,v);let W;if(Ye){Fe&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,We,Te.width,Te.height);for(let K=0;K<6;K++){W=ne[K].mipmaps;for(let de=0;de<W.length;de++){const he=W[de];v.format!==rn?Ue!==null?Fe?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,he.width,he.height,Ue,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,We,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,he.width,he.height,Ue,_e,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,We,he.width,he.height,0,Ue,_e,he.data)}}}else{if(W=v.mipmaps,Fe&&Ke){W.length>0&&ae++;const K=Se(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,We,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Fe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ne[K].width,ne[K].height,Ue,_e,ne[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ne[K].width,ne[K].height,0,Ue,_e,ne[K].data);for(let de=0;de<W.length;de++){const Ne=W[de].image[K].image;Fe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Ne.width,Ne.height,Ue,_e,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,We,Ne.width,Ne.height,0,Ue,_e,Ne.data)}}else{Fe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ue,_e,ne[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Ue,_e,ne[K]);for(let de=0;de<W.length;de++){const he=W[de];Fe?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Ue,_e,he.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,We,Ue,_e,he.image[K])}}}p(v)&&h(i.TEXTURE_CUBE_MAP),$.__version=Q.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xe(E,v,O,J,Q,$){const Me=r.convert(O.format,O.colorSpace),ue=r.convert(O.type),ve=b(O.internalFormat,Me,ue,O.colorSpace),Ye=n.get(v),ie=n.get(O);if(ie.__renderTarget=v,!Ye.__hasExternalTextures){const ne=Math.max(1,v.width>>$),Te=Math.max(1,v.height>>$);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,ve,ne,Te,v.depth,0,Me,ue,null):t.texImage2D(Q,$,ve,ne,Te,0,Me,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,ie.__webglTexture,0,He(v)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,ie.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const J=v.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=S(v.stencilBuffer,Q),Me=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=He(v);Ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,$,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,$,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,$,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{const J=v.textures;for(let Q=0;Q<J.length;Q++){const $=J[Q],Me=r.convert($.format,$.colorSpace),ue=r.convert($.type),ve=b($.internalFormat,Me,ue,$.colorSpace),Ye=He(v);O&&Ve(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,ve,v.width,v.height):Ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,ve,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ve,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Q=J.__webglTexture,$=He(v);if(v.depthTexture.format===Li)Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(v.depthTexture.format===Bi)Ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=J}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),ce(v.__webglDepthbuffer[J],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ce(v.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,v,O){const J=n.get(E);v!==void 0&&xe(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ie(E)}function at(E){const v=E.texture,O=n.get(E),J=n.get(v);E.addEventListener("dispose",C);const Q=E.textures,$=E.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ue]=[];for(let ve=0;ve<v.mipmaps.length;ve++)O.__webglFramebuffer[ue][ve]=i.createFramebuffer()}else O.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)O.__webglFramebuffer[ue]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ue=0,ve=Q.length;ue<ve;ue++){const Ye=n.get(Q[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&Ve(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<Q.length;ue++){const ve=Q[ue];O.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const Ye=r.convert(ve.format,ve.colorSpace),ie=r.convert(ve.type),ne=b(ve.internalFormat,Ye,ie,ve.colorSpace,E.isXRRenderTarget===!0),Te=He(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)xe(O.__webglFramebuffer[ue][ve],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else xe(O.__webglFramebuffer[ue],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,ve=Q.length;ue<ve;ue++){const Ye=Q[ue],ie=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ce(i.TEXTURE_2D,Ye),xe(O.__webglFramebuffer,E,Ye,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),p(Ye)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ue=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,J.__webglTexture),Ce(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let ve=0;ve<v.mipmaps.length;ve++)xe(O.__webglFramebuffer[ve],E,v,i.COLOR_ATTACHMENT0,ue,ve);else xe(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,ue,0);p(v)&&h(ue),t.unbindTexture()}E.depthBuffer&&Ie(E)}function ze(E){const v=E.textures;for(let O=0,J=v.length;O<J;O++){const Q=v[O];if(p(Q)){const $=w(E),Me=n.get(Q).__webglTexture;t.bindTexture($,Me),h($),t.unbindTexture()}}}const gt=[],P=[];function Wt(E){if(E.samples>0){if(Ve(E)===!1){const v=E.textures,O=E.width,J=E.height;let Q=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),ue=v.length>1;if(ue)for(let ve=0;ve<v.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<v.length;ve++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Ye=n.get(v[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,Q,i.NEAREST),l===!0&&(gt.length=0,P.length=0,gt.push(i.COLOR_ATTACHMENT0+ve),E.depthBuffer&&E.resolveDepthBuffer===!1&&(gt.push($),P.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<v.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Ye=n.get(v[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function He(E){return Math.min(s.maxSamples,E.samples)}function Ve(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function st(E,v){const O=E.colorSpace,J=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ki&&O!==Cn&&(Je.getTransfer(O)===nt?(J!==rn||Q!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=H,this.rebindTextures=De,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ve}function em(i,e){function t(n,s=Cn){let r;const o=Je.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===vl)return i.RGB;if(n===rn)return i.RGBA;if(n===_l)return i.LUMINANCE;if(n===xl)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(o===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return o===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===Ma||n===Sa||n===ya||n===Ea)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===ba||n===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ys)return o===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Ta||n===Aa||n===Ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const tm={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),h=this._getHandJoint(c,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,im=`
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

}`;class sm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Nt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new It({vertexShader:nm,fragmentShader:im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rm extends li{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const _=new sm,p=t.getContextAttributes();let h=null,w=null;const b=[],S=[],T=new we;let A=null;const C=new nn;C.viewport=new St;const F=new nn;F.viewport=new St;const M=[C,F],y=new bu;let R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=b[Z];return re===void 0&&(re=new Hr,b[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=b[Z];return re===void 0&&(re=new Hr,b[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=b[Z];return re===void 0&&(re=new Hr,b[Z]=re),re.getHandSpace()};function z(Z){const re=S.indexOf(Z.inputSource);if(re===-1)return;const xe=b[re];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||o),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",j);for(let Z=0;Z<b.length;Z++){const re=S[Z];re!==null&&(S[Z]=null,b[Z].disconnect(re))}R=null,V=null,_.reset(),e.setRenderTarget(h),m=null,f=null,d=null,s=null,w=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let xe=null,ce=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=p.stencil?Bi:Li,ce=p.stencil?Oi:ri);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new ai(f.textureWidth,f.textureHeight,{format:rn,type:Mn,depthTexture:new Ol(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const xe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new ai(m.framebufferWidth,m.framebufferHeight,{format:rn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Z){for(let re=0;re<Z.removed.length;re++){const xe=Z.removed[re],ce=S.indexOf(xe);ce>=0&&(S[ce]=null,b[ce].disconnect(xe))}for(let re=0;re<Z.added.length;re++){const xe=Z.added[re];let ce=S.indexOf(xe);if(ce===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=S.length){S.push(xe),ce=Ie;break}else if(S[Ie]===null){S[Ie]=xe,ce=Ie;break}if(ce===-1)break}const Re=b[ce];Re&&Re.connect(xe)}}const Y=new I,q=new I;function H(Z,re,xe){Y.setFromMatrixPosition(re.matrixWorld),q.setFromMatrixPosition(xe.matrixWorld);const ce=Y.distanceTo(q),Re=re.projectionMatrix.elements,Ie=xe.projectionMatrix.elements,De=Re[14]/(Re[10]-1),at=Re[14]/(Re[10]+1),ze=(Re[9]+1)/Re[5],gt=(Re[9]-1)/Re[5],P=(Re[8]-1)/Re[0],Wt=(Ie[8]+1)/Ie[0],He=De*P,Ve=De*Wt,ye=ce/(-P+Wt),st=ye*-P;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(st),Z.translateZ(ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Se=De+ye,E=at+ye,v=He-st,O=Ve+(ce-st),J=ze*at/E*Se,Q=gt*at/E*Se;Z.projectionMatrix.makePerspective(v,O,J,Q,Se,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function se(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let re=Z.near,xe=Z.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(xe=_.depthFar)),y.near=F.near=C.near=re,y.far=F.far=C.far=xe,(R!==y.near||V!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,V=y.far),C.layers.mask=Z.layers.mask|2,F.layers.mask=Z.layers.mask|4,y.layers.mask=C.layers.mask|F.layers.mask;const ce=Z.parent,Re=y.cameras;se(y,ce);for(let Ie=0;Ie<Re.length;Ie++)se(Re[Ie],ce);Re.length===2?H(y,C,F):y.projectionMatrix.copy(C.projectionMatrix),ee(Z,y,ce)};function ee(Z,re,xe){xe===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ra*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let pe=null;function Ce(Z,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ce=!1;xe.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ie=0;Ie<xe.length;Ie++){const De=xe[Ie];let at=null;if(m!==null)at=m.getViewport(De);else{const gt=d.getViewSubImage(f,De);at=gt.viewport,Ie===0&&(e.setRenderTargetTextures(w,gt.colorTexture,f.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(w))}let ze=M[Ie];ze===void 0&&(ze=new nn,ze.layers.enable(Ie),ze.viewport=new St,M[Ie]=ze),ze.matrix.fromArray(De.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(De.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(at.x,at.y,at.width,at.height),Ie===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push(ze)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ie=d.getDepthInformation(xe[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,s.renderState)}}for(let xe=0;xe<b.length;xe++){const ce=S[xe],Re=b[xe];ce!==null&&Re!==void 0&&Re.update(ce,re,c||o)}pe&&pe(Z,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}const Oe=new zl;Oe.setAnimationLoop(Ce),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}}const ei=new Sn,am=new mt;function om(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ul(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,w,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,w,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Vt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Vt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const w=e.get(h),b=w.envMap,S=w.envMapRotation;b&&(p.envMap.value=b,ei.copy(S),ei.x*=-1,ei.y*=-1,ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),p.envMapRotation.value.setFromMatrix4(am.makeRotationFromEuler(ei)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,w,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const w=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lm(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;n.uniformBlockBinding(w,S)}function c(w,b){let S=s[w.id];S===void 0&&(g(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",p));const T=b.program;n.updateUBOMapping(w,T);const A=e.render.frame;r[w.id]!==A&&(f(w),r[w.id]=A)}function u(w){const b=d();w.__bindingPointIndex=b;const S=i.createBuffer(),T=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=s[w.id],S=w.uniforms,T=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=S.length;A<C;A++){const F=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=F.length;M<y;M++){const R=F[M];if(m(R,A,M,T)===!0){const V=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let j=0;j<z.length;j++){const Y=z[j],q=_(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,V+X,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,X),X+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,b,S,T){const A=w.value,C=b+"_"+S;if(T[C]===void 0)return typeof A=="number"||typeof A=="boolean"?T[C]=A:T[C]=A.clone(),!0;{const F=T[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return T[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(w){const b=w.uniforms;let S=0;const T=16;for(let C=0,F=b.length;C<F;C++){const M=Array.isArray(b[C])?b[C]:[b[C]];for(let y=0,R=M.length;y<R;y++){const V=M[y],z=Array.isArray(V.value)?V.value:[V.value];for(let X=0,j=z.length;X<j;X++){const Y=z[X],q=_(Y),H=S%T,se=H%q.boundary,ee=H+se;S+=se,ee!==0&&T-ee<q.storage&&(S+=T-ee),V.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=q.storage}}}const A=S%T;return A>0&&(S+=T-A),w.__size=S,w.__cache={},this}function _(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class cm{constructor(e={}){const{canvas:t=Ic(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ht,this.toneMapping=Wn,this.toneMappingExposure=1;const S=this;let T=!1,A=0,C=0,F=null,M=-1,y=null;const R=new St,V=new St;let z=null;const X=new Ae(0);let j=0,Y=t.width,q=t.height,H=1,se=null,ee=null;const pe=new St(0,0,Y,q),Ce=new St(0,0,Y,q);let Oe=!1;const Z=new za;let re=!1,xe=!1;this.transmissionResolutionScale=1;const ce=new mt,Re=new mt,Ie=new I,De=new St,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function gt(){return F===null?H:1}let P=n;function Wt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),P===null){const U="webgl2";if(P=Wt(U,x),P===null)throw Wt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let He,Ve,ye,st,Se,E,v,O,J,Q,$,Me,ue,ve,Ye,ie,ne,Te,Ue,_e,We,Fe,Ke,L;function ae(){He=new _f(P),He.init(),Fe=new em(P,He),Ve=new df(P,He,e,Fe),ye=new Jp(P,He),Ve.reverseDepthBuffer&&f&&ye.buffers.depth.setReversed(!0),st=new Sf(P),Se=new kp,E=new Qp(P,He,ye,Se,Ve,Fe,st),v=new pf(S),O=new vf(S),J=new Au(P),Ke=new uf(P,J),Q=new xf(P,J,st,Ke),$=new Ef(P,Q,J,st),Ue=new yf(P,Ve,E),ie=new ff(Se),Me=new Bp(S,v,O,He,Ve,Ke,ie),ue=new om(S,Se),ve=new Hp,Ye=new qp(He),Te=new cf(S,v,O,ye,$,m,l),ne=new jp(S,$,Ve),L=new lm(P,st,Ve,ye),_e=new hf(P,He,st),We=new Mf(P,He,st),st.programs=Me.programs,S.capabilities=Ve,S.extensions=He,S.properties=Se,S.renderLists=ve,S.shadowMap=ne,S.state=ye,S.info=st}ae();const W=new rm(S,P);this.xr=W,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const x=He.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=He.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(Y,q,!1))},this.getSize=function(x){return x.set(Y,q)},this.setSize=function(x,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,q=U,t.width=Math.floor(x*H),t.height=Math.floor(U*H),B===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Y*H,q*H).floor()},this.setDrawingBufferSize=function(x,U,B){Y=x,q=U,H=B,t.width=Math.floor(x*B),t.height=Math.floor(U*B),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(pe)},this.setViewport=function(x,U,B,k){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,U,B,k),ye.viewport(R.copy(pe).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Ce)},this.setScissor=function(x,U,B,k){x.isVector4?Ce.set(x.x,x.y,x.z,x.w):Ce.set(x,U,B,k),ye.scissor(V.copy(Ce).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(x){ye.setScissorTest(Oe=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){ee=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(x=!0,U=!0,B=!0){let k=0;if(x){let N=!1;if(F!==null){const te=F.texture.format;N=te===Ba||te===Oa||te===Fa}if(N){const te=F.texture.type,oe=te===Mn||te===ri||te===is||te===Oi||te===Ia||te===Na,fe=Te.getClearColor(),me=Te.getClearAlpha(),Pe=fe.r,Le=fe.g,Ee=fe.b;oe?(g[0]=Pe,g[1]=Le,g[2]=Ee,g[3]=me,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Pe,_[1]=Le,_[2]=Ee,_[3]=me,P.clearBufferiv(P.COLOR,0,_))}else k|=P.COLOR_BUFFER_BIT}U&&(k|=P.DEPTH_BUFFER_BIT),B&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Te.dispose(),ve.dispose(),Ye.dispose(),Se.dispose(),v.dispose(),O.dispose(),$.dispose(),Ke.dispose(),L.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Un),W.removeEventListener("sessionend",Yn),pn.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const x=st.autoReset,U=ne.enabled,B=ne.autoUpdate,k=ne.needsUpdate,N=ne.type;ae(),st.autoReset=x,ne.enabled=U,ne.autoUpdate=B,ne.needsUpdate=k,ne.type=N}function he(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ne(x){const U=x.target;U.removeEventListener("dispose",Ne),dt(U)}function dt(x){yt(x),Se.remove(x)}function yt(x){const U=Se.get(x).programs;U!==void 0&&(U.forEach(function(B){Me.releaseProgram(B)}),x.isShaderMaterial&&Me.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,B,k,N,te){U===null&&(U=at);const oe=N.isMesh&&N.matrixWorld.determinant()<0,fe=Gi(x,U,B,k,N);ye.setMaterial(k,oe);let me=B.index,Pe=1;if(k.wireframe===!0){if(me=Q.getWireframeAttribute(B),me===void 0)return;Pe=2}const Le=B.drawRange,Ee=B.attributes.position;let Xe=Le.start*Pe,je=(Le.start+Le.count)*Pe;te!==null&&(Xe=Math.max(Xe,te.start*Pe),je=Math.min(je,(te.start+te.count)*Pe)),me!==null?(Xe=Math.max(Xe,0),je=Math.min(je,me.count)):Ee!=null&&(Xe=Math.max(Xe,0),je=Math.min(je,Ee.count));const vt=je-Xe;if(vt<0||vt===1/0)return;Ke.setup(N,k,fe,B,me);let ut,Ze=_e;if(me!==null&&(ut=J.get(me),Ze=We,Ze.setIndex(ut)),N.isMesh)k.wireframe===!0?(ye.setLineWidth(k.wireframeLinewidth*gt()),Ze.setMode(P.LINES)):Ze.setMode(P.TRIANGLES);else if(N.isLine){let be=k.linewidth;be===void 0&&(be=1),ye.setLineWidth(be*gt()),N.isLineSegments?Ze.setMode(P.LINES):N.isLineLoop?Ze.setMode(P.LINE_LOOP):Ze.setMode(P.LINE_STRIP)}else N.isPoints?Ze.setMode(P.POINTS):N.isSprite&&Ze.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,_t=N._multiDrawCounts,$e=N._multiDrawCount,Ft=me?J.get(me).bytesPerElement:1,en=Se.get(k).currentProgram.getUniforms();for(let Rt=0;Rt<$e;Rt++)en.setValue(P,"_gl_DrawID",Rt),Ze.render(be[Rt]/Ft,_t[Rt])}else if(N.isInstancedMesh)Ze.renderInstances(Xe,vt,N.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_t=Math.min(B.instanceCount,be);Ze.renderInstances(Xe,vt,_t)}else Ze.render(Xe,vt)};function qe(x,U,B){x.transparent===!0&&x.side===Gt&&x.forceSinglePass===!1?(x.side=Vt,x.needsUpdate=!0,an(x,U,B),x.side=Xn,x.needsUpdate=!0,an(x,U,B),x.side=Gt):an(x,U,B)}this.compile=function(x,U,B=null){B===null&&(B=x),h=Ye.get(B),h.init(U),b.push(h),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),x!==B&&x.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();const k=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let oe=0;oe<te.length;oe++){const fe=te[oe];qe(fe,B,N),k.add(fe)}else qe(te,B,N),k.add(te)}),b.pop(),h=null,k},this.compileAsync=function(x,U,B=null){const k=this.compile(x,U,B);return new Promise(N=>{function te(){if(k.forEach(function(oe){Se.get(oe).currentProgram.isReady()&&k.delete(oe)}),k.size===0){N(x);return}setTimeout(te,10)}He.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Lt=null;function Zt(x){Lt&&Lt(x)}function Un(){pn.stop()}function Yn(){pn.start()}const pn=new zl;pn.setAnimationLoop(Zt),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(x){Lt=x,W.setAnimationLoop(x),x===null?pn.stop():pn.start()},W.addEventListener("sessionstart",Un),W.addEventListener("sessionend",Yn),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,U,F),h=Ye.get(x,b.length),h.init(U),b.push(h),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Re),xe=this.localClippingEnabled,re=ie.init(this.clippingPlanes,xe),p=ve.get(x,w.length),p.init(),w.push(p),W.enabled===!0&&W.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&ui(te,U,-1/0,S.sortObjects)}ui(x,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(se,ee),ze=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ze&&Te.addToRenderList(p,x),this.info.render.frame++,re===!0&&ie.beginShadows();const B=h.state.shadowsArray;ne.render(B,x,U),re===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,N=p.transmissive;if(h.setupLights(),U.isArrayCamera){const te=U.cameras;if(N.length>0)for(let oe=0,fe=te.length;oe<fe;oe++){const me=te[oe];di(k,N,x,me)}ze&&Te.render(x);for(let oe=0,fe=te.length;oe<fe;oe++){const me=te[oe];hi(p,x,me,me.viewport)}}else N.length>0&&di(k,N,x,U),ze&&Te.render(x),hi(p,x,U);F!==null&&C===0&&(E.updateMultisampleRenderTarget(F),E.updateRenderTargetMipmap(F)),x.isScene===!0&&x.onAfterRender(S,x,U),Ke.resetDefaultState(),M=-1,y=null,b.pop(),b.length>0?(h=b[b.length-1],re===!0&&ie.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function ui(x,U,B,k){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Z.intersectsSprite(x)){k&&De.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);const oe=$.update(x),fe=x.material;fe.visible&&p.push(x,oe,fe,B,De.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Z.intersectsObject(x))){const oe=$.update(x),fe=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),De.copy(x.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),De.copy(oe.boundingSphere.center)),De.applyMatrix4(x.matrixWorld).applyMatrix4(Re)),Array.isArray(fe)){const me=oe.groups;for(let Pe=0,Le=me.length;Pe<Le;Pe++){const Ee=me[Pe],Xe=fe[Ee.materialIndex];Xe&&Xe.visible&&p.push(x,oe,Xe,B,De.z,Ee)}}else fe.visible&&p.push(x,oe,fe,B,De.z,null)}}const te=x.children;for(let oe=0,fe=te.length;oe<fe;oe++)ui(te[oe],U,B,k)}function hi(x,U,B,k){const N=x.opaque,te=x.transmissive,oe=x.transparent;h.setupLightsView(B),re===!0&&ie.setGlobalState(S.clippingPlanes,B),k&&ye.viewport(R.copy(k)),N.length>0&&In(N,U,B),te.length>0&&In(te,U,B),oe.length>0&&In(oe,U,B),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function di(x,U,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new ai(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?rs:Mn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const te=h.state.transmissionRenderTarget[k.id],oe=k.viewport||R;te.setSize(oe.z*S.transmissionResolutionScale,oe.w*S.transmissionResolutionScale);const fe=S.getRenderTarget();S.setRenderTarget(te),S.getClearColor(X),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),ze&&Te.render(B);const me=S.toneMapping;S.toneMapping=Wn;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),re===!0&&ie.setGlobalState(S.clippingPlanes,k),In(x,B,k),E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ee=0,Xe=U.length;Ee<Xe;Ee++){const je=U[Ee],vt=je.object,ut=je.geometry,Ze=je.material,be=je.group;if(Ze.side===Gt&&vt.layers.test(k.layers)){const _t=Ze.side;Ze.side=Vt,Ze.needsUpdate=!0,mn(vt,B,k,ut,Ze,be),Ze.side=_t,Ze.needsUpdate=!0,Le=!0}}Le===!0&&(E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te))}S.setRenderTarget(fe),S.setClearColor(X,j),Pe!==void 0&&(k.viewport=Pe),S.toneMapping=me}function In(x,U,B){const k=U.isScene===!0?U.overrideMaterial:null;for(let N=0,te=x.length;N<te;N++){const oe=x[N],fe=oe.object,me=oe.geometry,Pe=k===null?oe.material:k,Le=oe.group;fe.layers.test(B.layers)&&mn(fe,U,B,me,Pe,Le)}}function mn(x,U,B,k,N,te){x.onBeforeRender(S,U,B,k,N,te),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,U,B,k,x,te),N.transparent===!0&&N.side===Gt&&N.forceSinglePass===!1?(N.side=Vt,N.needsUpdate=!0,S.renderBufferDirect(B,U,k,N,x,te),N.side=Xn,N.needsUpdate=!0,S.renderBufferDirect(B,U,k,N,x,te),N.side=Gt):S.renderBufferDirect(B,U,k,N,x,te),x.onAfterRender(S,U,B,k,N,te)}function an(x,U,B){U.isScene!==!0&&(U=at);const k=Se.get(x),N=h.state.lights,te=h.state.shadowsArray,oe=N.state.version,fe=Me.getParameters(x,N.state,te,U,B),me=Me.getProgramCacheKey(fe);let Pe=k.programs;k.environment=x.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(x.isMeshStandardMaterial?O:v).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",Ne),Pe=new Map,k.programs=Pe);let Le=Pe.get(me);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===oe)return ln(x,fe),Le}else fe.uniforms=Me.getUniforms(x),x.onBeforeCompile(fe,S),Le=Me.acquireProgram(fe,me),Pe.set(me,Le),k.uniforms=fe.uniforms;const Ee=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),ln(x,fe),k.needsLights=hs(x),k.lightsStateVersion=oe,k.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function on(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Zs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function ln(x,U){const B=Se.get(x);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Gi(x,U,B,k,N){U.isScene!==!0&&(U=at),E.resetTextureUnits();const te=U.fog,oe=k.isMeshStandardMaterial?U.environment:null,fe=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ki,me=(k.isMeshStandardMaterial?O:v).get(k.envMap||oe),Pe=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Le=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ee=!!B.morphAttributes.position,Xe=!!B.morphAttributes.normal,je=!!B.morphAttributes.color;let vt=Wn;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=S.toneMapping);const ut=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ze=ut!==void 0?ut.length:0,be=Se.get(k),_t=h.state.lights;if(re===!0&&(xe===!0||x!==y)){const Ut=x===y&&k.id===M;ie.setState(k,x,Ut)}let $e=!1;k.version===be.__version?(be.needsLights&&be.lightsStateVersion!==_t.state.version||be.outputColorSpace!==fe||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==me||k.fog===!0&&be.fog!==te||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==Pe||be.vertexTangents!==Le||be.morphTargets!==Ee||be.morphNormals!==Xe||be.morphColors!==je||be.toneMapping!==vt||be.morphTargetsCount!==Ze)&&($e=!0):($e=!0,be.__version=k.version);let Ft=be.currentProgram;$e===!0&&(Ft=an(k,U,N));let en=!1,Rt=!1,gn=!1;const rt=Ft.getUniforms(),et=be.uniforms;if(ye.useProgram(Ft.program)&&(en=!0,Rt=!0,gn=!0),k.id!==M&&(M=k.id,Rt=!0),en||y!==x){ye.buffers.depth.getReversed()?(ce.copy(x.projectionMatrix),Fc(ce),Oc(ce),rt.setValue(P,"projectionMatrix",ce)):rt.setValue(P,"projectionMatrix",x.projectionMatrix),rt.setValue(P,"viewMatrix",x.matrixWorldInverse);const Ot=rt.map.cameraPosition;Ot!==void 0&&Ot.setValue(P,Ie.setFromMatrixPosition(x.matrixWorld)),Ve.logarithmicDepthBuffer&&rt.setValue(P,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&rt.setValue(P,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Rt=!0,gn=!0)}if(N.isSkinnedMesh){rt.setOptional(P,N,"bindMatrix"),rt.setOptional(P,N,"bindMatrixInverse");const Ut=N.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),rt.setValue(P,"boneTexture",Ut.boneTexture,E))}N.isBatchedMesh&&(rt.setOptional(P,N,"batchingTexture"),rt.setValue(P,"batchingTexture",N._matricesTexture,E),rt.setOptional(P,N,"batchingIdTexture"),rt.setValue(P,"batchingIdTexture",N._indirectTexture,E),rt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&rt.setValue(P,"batchingColorTexture",N._colorsTexture,E));const Xt=B.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&Ue.update(N,B,Ft),(Rt||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,rt.setValue(P,"receiveShadow",N.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(et.envMap.value=me,et.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(et.envMapIntensity.value=U.environmentIntensity),Rt&&(rt.setValue(P,"toneMappingExposure",S.toneMappingExposure),be.needsLights&&us(et,gn),te&&k.fog===!0&&ue.refreshFogUniforms(et,te),ue.refreshMaterialUniforms(et,k,H,q,h.state.transmissionRenderTarget[x.id]),Zs.upload(P,on(be),et,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Zs.upload(P,on(be),et,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&rt.setValue(P,"center",N.center),rt.setValue(P,"modelViewMatrix",N.modelViewMatrix),rt.setValue(P,"normalMatrix",N.normalMatrix),rt.setValue(P,"modelMatrix",N.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ut=k.uniformsGroups;for(let Ot=0,vn=Ut.length;Ot<vn;Ot++){const _n=Ut[Ot];L.update(_n,Ft),L.bind(_n,Ft)}}return Ft}function us(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function hs(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,U,B){Se.get(x.texture).__webglTexture=U,Se.get(x.depthTexture).__webglTexture=B;const k=Se.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||He.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){const B=Se.get(x);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0};const Vi=P.createFramebuffer();this.setRenderTarget=function(x,U=0,B=0){F=x,A=U,C=B;let k=!0,N=null,te=!1,oe=!1;if(x){const me=Se.get(x);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),k=!1;else if(me.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(me.__hasExternalTextures)E.rebindTextures(x,Se.get(x.texture).__webglTexture,Se.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ee=x.depthTexture;if(me.__boundDepthTexture!==Ee){if(Ee!==null&&Se.has(Ee)&&(x.width!==Ee.image.width||x.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(oe=!0);const Le=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?N=Le[U][B]:N=Le[U],te=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?N=Se.get(x).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[B]:N=Le,R.copy(x.viewport),V.copy(x.scissor),z=x.scissorTest}else R.copy(pe).multiplyScalar(H).floor(),V.copy(Ce).multiplyScalar(H).floor(),z=Oe;if(B!==0&&(N=Vi),ye.bindFramebuffer(P.FRAMEBUFFER,N)&&k&&ye.drawBuffers(x,N),ye.viewport(R),ye.scissor(V),ye.setScissorTest(z),te){const me=Se.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,B)}else if(oe){const me=Se.get(x.texture),Pe=U;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.__webglTexture,B,Pe)}else if(x!==null&&B!==0){const me=Se.get(x.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,me.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(x,U,B,k,N,te,oe){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){ye.bindFramebuffer(P.FRAMEBUFFER,fe);try{const me=x.texture,Pe=me.format,Le=me.type;if(!Ve.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-k&&B>=0&&B<=x.height-N&&P.readPixels(U,B,k,N,Fe.convert(Pe),Fe.convert(Le),te)}finally{const me=F!==null?Se.get(F).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(x,U,B,k,N,te,oe){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&oe!==void 0&&(fe=fe[oe]),fe){const me=x.texture,Pe=me.format,Le=me.type;if(!Ve.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-k&&B>=0&&B<=x.height-N){ye.bindFramebuffer(P.FRAMEBUFFER,fe);const Ee=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),P.readPixels(U,B,k,N,Fe.convert(Pe),Fe.convert(Le),0);const Xe=F!==null?Se.get(F).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Xe);const je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Nc(P,je,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ee),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(Ee),P.deleteSync(je),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,B=0){x.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-B),N=Math.floor(x.image.width*k),te=Math.floor(x.image.height*k),oe=U!==null?U.x:0,fe=U!==null?U.y:0;E.setTexture2D(x,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,oe,fe,N,te),ye.unbindTexture()};const Wi=P.createFramebuffer(),cn=P.createFramebuffer();this.copyTextureToTexture=function(x,U,B=null,k=null,N=0,te=null){x.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],U=arguments[2],te=arguments[3]||0,B=null),te===null&&(N!==0?(Ai("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let oe,fe,me,Pe,Le,Ee,Xe,je,vt;const ut=x.isCompressedTexture?x.mipmaps[te]:x.image;if(B!==null)oe=B.max.x-B.min.x,fe=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,Pe=B.min.x,Le=B.min.y,Ee=B.isBox3?B.min.z:0;else{const Xt=Math.pow(2,-N);oe=Math.floor(ut.width*Xt),fe=Math.floor(ut.height*Xt),x.isDataArrayTexture?me=ut.depth:x.isData3DTexture?me=Math.floor(ut.depth*Xt):me=1,Pe=0,Le=0,Ee=0}k!==null?(Xe=k.x,je=k.y,vt=k.z):(Xe=0,je=0,vt=0);const Ze=Fe.convert(U.format),be=Fe.convert(U.type);let _t;U.isData3DTexture?(E.setTexture3D(U,0),_t=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),_t=P.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),_t=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const $e=P.getParameter(P.UNPACK_ROW_LENGTH),Ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),en=P.getParameter(P.UNPACK_SKIP_PIXELS),Rt=P.getParameter(P.UNPACK_SKIP_ROWS),gn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee);const rt=x.isDataArrayTexture||x.isData3DTexture,et=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Xt=Se.get(x),Ut=Se.get(U),Ot=Se.get(Xt.__renderTarget),vn=Se.get(Ut.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Ot.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,vn.__webglFramebuffer);for(let _n=0;_n<me;_n++)rt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(x).__webglTexture,N,Ee+_n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Se.get(U).__webglTexture,te,vt+_n)),P.blitFramebuffer(Pe,Le,oe,fe,Xe,je,oe,fe,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||Se.has(x)){const Xt=Se.get(x),Ut=Se.get(U);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Wi),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,cn);for(let Ot=0;Ot<me;Ot++)rt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xt.__webglTexture,N,Ee+Ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,N),et?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,te,vt+Ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,te),N!==0?P.blitFramebuffer(Pe,Le,oe,fe,Xe,je,oe,fe,P.COLOR_BUFFER_BIT,P.NEAREST):et?P.copyTexSubImage3D(_t,te,Xe,je,vt+Ot,Pe,Le,oe,fe):P.copyTexSubImage2D(_t,te,Xe,je,Pe,Le,oe,fe);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else et?x.isDataTexture||x.isData3DTexture?P.texSubImage3D(_t,te,Xe,je,vt,oe,fe,me,Ze,be,ut.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(_t,te,Xe,je,vt,oe,fe,me,Ze,ut.data):P.texSubImage3D(_t,te,Xe,je,vt,oe,fe,me,Ze,be,ut):x.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,Xe,je,oe,fe,Ze,be,ut.data):x.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,Xe,je,ut.width,ut.height,Ze,ut.data):P.texSubImage2D(P.TEXTURE_2D,te,Xe,je,oe,fe,Ze,be,ut);P.pixelStorei(P.UNPACK_ROW_LENGTH,$e),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,en),P.pixelStorei(P.UNPACK_SKIP_ROWS,Rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gn),te===0&&U.generateMipmaps&&P.generateMipmap(_t),ye.unbindTexture()},this.copyTextureToTexture3D=function(x,U,B=null,k=null,N=0){return x.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,k=arguments[1]||null,x=arguments[2],U=arguments[3],N=arguments[4]||0),Ai('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,B,k,N)},this.initRenderTarget=function(x){Se.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){A=0,C=0,F=null,ye.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const nl={type:"change"},Wa={type:"start"},Xl={type:"end"},Bs=new tr,il=new Hn,um=Math.cos(70*Uc.DEG2RAD),wt=new I,qt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gr=1e-6;class hm extends wu{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Ci.ROTATE,TWO:Ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new oi,this._lastTargetPosition=new I,this._quat=new oi().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Po,this._sphericalDelta=new Po,this._scale=1,this._panOffset=new I,this._rotateStart=new we,this._rotateEnd=new we,this._rotateDelta=new we,this._panStart=new we,this._panEnd=new we,this._panDelta=new we,this._dollyStart=new we,this._dollyEnd=new we,this._dollyDelta=new we,this._dollyDirection=new I,this._mouse=new we,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fm.bind(this),this._onPointerDown=dm.bind(this),this._onPointerUp=pm.bind(this),this._onContextMenu=Sm.bind(this),this._onMouseWheel=vm.bind(this),this._onKeyDown=_m.bind(this),this._onTouchStart=xm.bind(this),this._onTouchMove=Mm.bind(this),this._onMouseDown=mm.bind(this),this._onMouseMove=gm.bind(this),this._interceptControlDown=ym.bind(this),this._interceptControlUp=Em.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nl),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;wt.copy(t).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qt:n>Math.PI&&(n-=qt),s<-Math.PI?s+=qt:s>Math.PI&&(s-=qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bs.origin.copy(this.object.position),Bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bs.direction))<um?this.object.lookAt(this.target):(il.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bs.intersectPlane(il,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gr||this._lastTargetPosition.distanceToSquared(this.target)>Gr?(this.dispatchEvent(nl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wt.setFromMatrixColumn(t,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,t){this.screenSpacePanning===!0?wt.setFromMatrixColumn(t,1):(wt.setFromMatrixColumn(t,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;wt.copy(s).sub(this.target);let r=wt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new we,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function fm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xl),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case Pi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case Pi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Wa)}function gm(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vm(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(Wa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xl))}function _m(i){this.enabled!==!1&&this._handleKeyDown(i)}function xm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case Ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case Ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case Ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Wa)}function Mm(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function Sm(i){this.enabled!==!1&&i.preventDefault()}function ym(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Em(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bm{constructor(e,t,n,s,r,o=null){this.canvas=e,this.meta=t,this.G=t.grid,this.sizeX=t.sizeX,this.sizeY=t.sizeY,this.zRangeKm=(t.zMaxM-t.zMinM)/1e3,this.skirtDepth=.78,this.demZ=new Float32Array(this.G*this.G);const a=new Uint8Array(this.G*this.G*4);for(let l=0;l<this.demZ.length;l++){const c=n[l]/65535;this.demZ[l]=c*this.zRangeKm;const u=Math.max(0,Math.min(255,Math.round(c*255)));a[l*4+0]=u,a[l*4+1]=u,a[l*4+2]=u,a[l*4+3]=255}this.demTex=new ou(a,this.G,this.G,rn,Mn),this.demTex.minFilter=sn,this.demTex.magFilter=sn,this.demTex.wrapS=Kt,this.demTex.wrapT=Kt,this.demTex.flipY=!1,this.demTex.needsUpdate=!0,this.state={exag:1.3,mode:0,contours:!1,showSmoke:!0,showClouds:!0,showPrecip:!0,showIsotherm:!0,showSunArc:!0,showHorizon:!1,shadows:!0,spin:!1,boost:1.4,compareClean:!1,hour:13,depProgress:0,rfWm2:0,plumeDensity:.4,cloudCover:.4,cloudLow:.3,cloudMid:.3,cloudHigh:.25,sunTrans:.85,precipMmH:0,rainSnowM:2600,snowLineM:3480,snowPackMm:0,windSpeed:5,windBearingDeg:245,swIn:350,lwIn:315,wetFrac:0,totalDepMgM2:36.8},this._sunDir=new I(.3,.7,.6).normalize(),this._initRenderer(),this._initSkyDomeAndLighting(),this._buildSolarOrbAndArc(),this._buildTerrain(s,r),this._buildSurroundingRockies(o),this._buildVolumetricSmoke(),this._buildCloudDeck(),this._buildPrecipVolume(),this._buildValleyMistAndSpindrift(),this._buildRealisticNearRain(),this._buildRealisticSnow(),this._initCameraPresets(),this.resize()}_sampleDemNormalized(e,t){const n=Math.max(0,Math.min(this.G-1,Math.round(e*(this.G-1)))),s=Math.max(0,Math.min(this.G-1,Math.round(t*(this.G-1))));return this.demZ[s*this.G+n]}_sampleDemXZ(e,t){const n=Math.max(0,Math.min(1,e/this.sizeX+.5)),s=Math.max(0,Math.min(1,t/this.sizeY+.5));return this._sampleDemNormalized(n,s)}_initRenderer(){this.renderer=new cm({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cl,this.renderer.toneMapping=hl,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Ht,this.scene=new au,this.scene.fog=new ka(1055788,.012),this.camera=new nn(38,16/9,.04,260),this.camera.position.set(9.4,8.5,-10.3),this.controls=new hm(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.minDistance=.45,this.controls.maxDistance=30,this.controls.maxPolarAngle=Math.PI*.495,this.controls.target.set(0,.55,.15),this.controls.update(),this._camAnim=null}_initSkyDomeAndLighting(){this.skyUniforms={uSunDir:{value:this._sunDir.clone()},uTime:{value:0},uWindDir:{value:new we(.85,-.52)},uDaylight:{value:.8},uTwilight:{value:0},uSmoke:{value:.3},uCloud:{value:.3},uCloudMid:{value:.3},uCloudHigh:{value:.25},uShowClouds:{value:1},uSwNorm:{value:.6}};const e=new Ha(145,48,32),t=new It({side:Vt,depthWrite:!1,fog:!1,uniforms:this.skyUniforms,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSmoke;
        uniform float uCloud;
        uniform float uCloudMid;
        uniform float uCloudHigh;
        uniform float uShowClouds;
        uniform float uSwNorm;
        varying vec3 vDir;

        float hash31(vec3 p) {
          p = fract(p * vec3(443.897, 441.423, 437.195));
          p += dot(p, p.yzx + 19.19);
          return fract((p.x + p.y) * p.z);
        }
        float hash21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float snoise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float sfbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * snoise(p); p = p * 2.04 + vec2(5.2, 1.3); a *= 0.5; }
          return v;
        }

        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y, -0.25, 1.0);
          float horiz = pow(1.0 - max(h, 0.0), 3.2);

          // Night alpine sky (truly dark, unmistakable starry midnight!)
          vec3 nightZen = vec3(0.008, 0.015, 0.036);
          vec3 nightHor = vec3(0.024, 0.042, 0.082);
          vec3 skyNight = mix(nightZen, nightHor, horiz);

          // Bright unmistakable high-altitude Rocky Mountain daytime sky
          vec3 clearZen = vec3(0.140, 0.380, 0.740);
          vec3 clearHor = vec3(0.620, 0.785, 0.945);
          vec3 skyClear = mix(clearZen, clearHor, horiz);

          // Bright daylight overcast storm sky (unmistakably daytime, never dark night!)
          vec3 stormZen = vec3(0.320, 0.390, 0.480);
          vec3 stormHor = vec3(0.560, 0.620, 0.700);
          vec3 skyStorm = mix(stormZen, stormHor, horiz);

          // Wildfire smoky warm golden-amber daylight sky
          vec3 smokeZen = vec3(0.340, 0.255, 0.170);
          vec3 smokeHor = vec3(0.680, 0.460, 0.250);
          vec3 skySmoke = mix(smokeZen, smokeHor, horiz);

          vec3 daySky = mix(skyClear, skyStorm, clamp(uCloud * 0.76, 0.0, 1.0));
          daySky = mix(daySky, skySmoke, clamp(uSmoke * 0.72, 0.0, 1.0));

          // Golden / rose alpine sunrise & sunset glow along the sun horizon
          float sunDot = max(dot(d, normalize(uSunDir)), 0.0);
          vec3 twilightBand = mix(vec3(0.95, 0.46, 0.16), vec3(1.00, 0.80, 0.34), pow(sunDot, 2.0));
          daySky = mix(daySky, twilightBand, uTwilight * horiz * (0.50 + 0.50 * pow(sunDot, 1.5)) * (1.0 - uCloud * 0.45));

          vec3 col = mix(skyNight, daySky, uDaylight);

          // Real projected hemispherical HIGH CIRRUS (uCloudHigh) & upper ALTOSTRATUS (uCloudMid) across the sky dome!
          if (uShowClouds > 0.5 && h > 0.025 && (uCloudHigh > 0.05 || uCloudMid > 0.05)) {
            vec2 skyPlane = d.xz / (h + 0.14);
            float horizonFade = smoothstep(0.025, 0.22, h);
            vec2 wPerp = vec2(-uWindDir.y, uWindDir.x);

            // Feathery wind-streaked alpine cirrus (>8 km)
            if (uCloudHigh > 0.05) {
              vec2 cUv = vec2(dot(skyPlane, uWindDir) * 0.38 - uTime * 0.012, dot(skyPlane, wPerp) * 1.15);
              float w1 = sfbm(cUv * 1.4 + vec2(2.3, 7.1));
              float cirrus = smoothstep(0.68 - uCloudHigh * 0.36, 0.88, sfbm(cUv + 0.65 * w1));
              float cAlpha = cirrus * horizonFade * clamp(uCloudHigh * 0.78, 0.0, 0.68);
              vec3 cDay = mix(vec3(0.86, 0.90, 0.96), vec3(1.0, 0.68, 0.44), uTwilight * 0.75);
              cDay = mix(cDay, vec3(0.80, 0.60, 0.44), uSmoke * 0.55);
              vec3 cNight = vec3(0.10, 0.14, 0.22);
              vec3 cCol = mix(cNight, cDay, uDaylight) + vec3(0.28, 0.22, 0.14) * pow(sunDot, 8.0) * uDaylight;
              col = mix(col, cCol, cAlpha);
            }

            // Distant mid-level stratocumulus / altostratus (3-8 km) filling out real overcast & partly cloudy skies
            if (uCloudMid > 0.06) {
              vec2 mUv = skyPlane * 0.48 - uWindDir * uTime * 0.018 + vec2(4.7, 9.2);
              float warp = sfbm(mUv * 1.2 + vec2(1.4, 3.8));
              float midN = sfbm(mUv + 0.55 * warp);
              float midMask = smoothstep(0.66 - uCloudMid * 0.44, 0.86, midN);
              float mAlpha = midMask * horizonFade * clamp(uCloudMid * 0.85, 0.0, 0.82);
              vec3 mDark = mix(vec3(0.20, 0.25, 0.32), vec3(0.13, 0.16, 0.22), uCloud * 0.6);
              vec3 mLit = mix(vec3(0.82, 0.87, 0.93), vec3(0.96, 0.64, 0.38), uTwilight * 0.65);
              vec3 mDay = mix(mDark, mLit, clamp(0.25 + 0.55 * (1.0 - midMask) + 0.35 * pow(sunDot, 3.0), 0.0, 1.0));
              mDay = mix(mDay, vec3(0.55, 0.42, 0.30), uSmoke * 0.45);
              vec3 mCol = mix(vec3(0.06, 0.09, 0.15), mDay, uDaylight);
              col = mix(col, mCol, mAlpha);
            }
          }

          // Subtle below-horizon ground reflection for orbital block view (bright slate in daytime, deep midnight at night)
          if (h < 0.0) {
            vec3 belowCol = mix(vec3(0.02, 0.03, 0.06), vec3(0.24, 0.33, 0.44), uDaylight);
            col = mix(col, belowCol, clamp(-h * 4.5, 0.0, 0.85));
          }

          // Visible golden-yellow solar disc & warm Mie scattering corona — clearly reflects live cloud & smoke masking!
          if (uDaylight > 0.04 && uSunDir.y > -0.02) {
            float maskKeep = clamp(uSwNorm, 0.04, 1.0);
            float disc = smoothstep(0.9972, 0.9992, sunDot);
            float innerHalo = pow(sunDot, 42.0) * 1.05;
            float wideHalo = pow(sunDot, 8.0) * 0.40;
            vec3 clearCol = vec3(1.00, 0.86, 0.26);
            vec3 smokeOrb = vec3(1.00, 0.34, 0.06);
            vec3 cloudVeil = vec3(0.92, 0.88, 0.72);
            vec3 sunTint = mix(clearCol, cloudVeil, clamp(uCloud * 0.72, 0.0, 1.0));
            sunTint = mix(sunTint, smokeOrb, clamp(uSmoke * 0.88 + uTwilight * 0.40, 0.0, 1.0));
            float discPower = disc * (2.9 * pow(maskKeep, 0.82) * (1.0 - uCloud * 0.68) + 0.45 * uSmoke * (1.0 - uCloud * 0.62));
            float haloPower = (innerHalo * (0.28 + 0.95 * maskKeep) + wideHalo * (0.35 + 0.65 * maskKeep));
            col += sunTint * (discPower + haloPower) * uDaylight;
          }

          // Crisp alpine stars at night (when clear sky & dark)
          float nightClear = (1.0 - uDaylight) * (1.0 - uCloud * 0.85) * (1.0 - uSmoke * 0.7) * smoothstep(0.08, 0.35, h);
          if (nightClear > 0.05) {
            vec3 cell = floor(d * 240.0);
            float rnd = hash31(cell);
            float star = smoothstep(0.9965, 0.9998, rnd);
            col += vec3(0.85, 0.92, 1.0) * star * nightClear * 0.9;
          }

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.skyDome=new bt(e,t),this.scene.add(this.skyDome),this.hemiLight=new Su(8963327,2760987,.72),this.scene.add(this.hemiLight),this.sunLight=new Ro(16773596,2.3),this.sunLight.position.set(8,12,10),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=45;const n=9.5;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-6e-4,this.sunLight.shadow.normalBias=.035,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.rimLight=new Ro(7055078,.35),this.rimLight.position.set(-10,6,-12),this.scene.add(this.rimLight);const s=new Rn(this.sizeX*1.04,this.sizeY*1.04);s.rotateX(-Math.PI/2);const r=new Lr({color:725532,roughness:.96,metalness:0,transparent:!0,opacity:.55});this.floorMesh=new bt(s,r),this.floorMesh.position.y=-this.skirtDepth-.02,this.floorMesh.receiveShadow=!0,this.scene.add(this.floorMesh)}_buildSolarOrbAndArc(){this.sunGroup=new Gn;const e=7.4,t=[];for(let o=6.2;o<=20.8;o+=.2){const a=Math.max(-1,Math.min(1,(o-13.5)/7.1)),l=(180+a*110)*Math.PI/180,c=Math.max(1.5,Math.cos(a*Math.PI*.5)*38)*Math.PI/180;t.push(new I(e*Math.cos(c)*Math.sin(l),.55+e*Math.sin(c)*.62,-e*Math.cos(c)*Math.cos(l)))}const n=new Dt().setFromPoints(t);this.sunArcMat=new gu({color:16638023,transparent:!0,opacity:.26,dashSize:.22,gapSize:.2,depthWrite:!1}),this.sunArcLine=new uu(n,this.sunArcMat),this.sunArcLine.computeLineDistances(),this.sunGroup.add(this.sunArcLine),this.sunOrbUniforms={uSunTrans:{value:.9},uSmoke:{value:.2},uCloud:{value:.2},uDaylight:{value:1},uTwilight:{value:0},uArcVis:{value:1}};const s=new Rn(2.1,2.1),r=new It({transparent:!0,depthWrite:!1,blending:Vr,uniforms:this.sunOrbUniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          // Camera-facing billboard for the 3D sun orb
          vec4 mvCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          mvCenter.xy += position.xy;
          gl_Position = projectionMatrix * mvCenter;
        }
      `,fragmentShader:`
        precision mediump float;
        uniform float uSunTrans;
        uniform float uSmoke;
        uniform float uCloud;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uArcVis;
        varying vec2 vUv;
        void main() {
          if (uDaylight < 0.03 || uArcVis < 0.02) discard;
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          if (r > 1.0) discard;

          float trans = clamp(uSunTrans, 0.05, 1.0);
          // Crisp bright solar core shrinks/softens as clouds mask it; turns glowing ember red-orange in wildfire smoke!
          float coreSharp = mix(0.26, 0.14, uCloud * 0.8);
          float core = (1.0 - smoothstep(coreSharp * 0.35, coreSharp + 0.10, r)) * (0.28 + 0.95 * trans);
          float corona = exp(-r * mix(3.4, 5.2, uCloud)) * (0.20 + 0.75 * trans);
          float veilRing = (1.0 - smoothstep(0.18, 0.55, abs(r - 0.24))) * (uCloud * 0.25 + uSmoke * 0.22);

          vec3 clearSun = vec3(1.00, 0.84, 0.16);
          vec3 clearCore = vec3(1.00, 0.94, 0.48);
          vec3 smokeSun = vec3(1.00, 0.34, 0.06);
          vec3 cloudSun = vec3(0.90, 0.84, 0.62);
          vec3 baseCol = mix(clearSun, clearCore, clamp(core, 0.0, 1.0));
          vec3 col = mix(baseCol, cloudSun, clamp(uCloud * 0.72, 0.0, 1.0));
          col = mix(col, smokeSun, clamp(uSmoke * 0.88 + uTwilight * 0.40, 0.0, 1.0));

          float alpha = clamp((core + corona + veilRing) * uDaylight * uArcVis, 0.0, 1.0);
          if (alpha < 0.005) discard;
          gl_FragColor = vec4(col * (0.65 + 0.95 * trans), alpha);
        }
      `});this.sunOrb=new bt(s,r),this.sunGroup.add(this.sunOrb),this.scene.add(this.sunGroup)}_buildTerrain(e,t){const n=this.G,s=this.sizeX,r=this.sizeY;e.colorSpace=Ht,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),e.wrapS=Kt,e.wrapT=Kt,t.colorSpace=Cn,t.wrapS=Kt,t.wrapT=Kt;const o=n*n,a=new Float32Array(o*3),l=new Float32Array(o*2),c=new Float32Array(o);for(let g=0;g<n;g++){const _=g/(n-1),p=(_-.5)*r,h=1-_;for(let w=0;w<n;w++){const b=w/(n-1),S=(b-.5)*s,T=g*n+w,A=this.demZ[T];c[T]=A,a[T*3+0]=S,a[T*3+1]=A*this.state.exag,a[T*3+2]=p,l[T*2+0]=b,l[T*2+1]=h}}const u=new Uint32Array((n-1)*(n-1)*6);let d=0;for(let g=0;g<n-1;g++)for(let _=0;_<n-1;_++){const p=g*n+_,h=p+1,w=p+n,b=w+1;u[d++]=p,u[d++]=w,u[d++]=b,u[d++]=p,u[d++]=b,u[d++]=h}const f=new Dt;f.setAttribute("position",new ct(a,3)),f.setAttribute("uv",new ct(l,2)),f.setAttribute("aBaseElev",new ct(c,1)),f.setIndex(new ct(u,1)),f.computeVertexNormals(),this.terrainGeo=f,this.terrainUniforms={uMaskTex:{value:t},uMode:{value:0},uContours:{value:0},uShowIsotherm:{value:1},uDepCumFrac:{value:0},uDepBoost:{value:this.state.boost},uRainSnowM:{value:this.state.rainSnowM},uSnowLineM:{value:this.state.snowLineM},uSnowPackMm:{value:0},uRainIntensity:{value:0},uSmokeHaze:{value:0},uDaylight:{value:.9},uTime:{value:0},uSunDir:{value:this._sunDir.clone()},uCloudShadowAmt:{value:.3},uExag:{value:this.state.exag},uRfNorm:{value:0},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uWindDir:{value:new we(.85,-.52)}};const m=new Lr({map:e,roughness:.78,metalness:.02});m.onBeforeCompile=g=>{Object.assign(g.uniforms,this.terrainUniforms),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
          attribute float aBaseElev;
          varying float vBaseElev;
          varying vec3 vObjPos;
          varying vec2 vTerrainUv;
          varying float vSlopeUp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          vBaseElev = aBaseElev;
          vObjPos = position;
          vTerrainUv = uv;
          vSlopeUp = clamp(normal.y, 0.0, 1.0);`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
          uniform sampler2D uMaskTex;
          uniform float uMode;
          uniform float uContours;
          uniform float uShowIsotherm;
          uniform float uDepCumFrac;
          uniform float uDepBoost;
          uniform float uRainSnowM;
          uniform float uSnowLineM;
          uniform float uSnowPackMm;
          uniform float uRainIntensity;
          uniform float uSmokeHaze;
          uniform float uDaylight;
          uniform float uTime;
          uniform vec3 uSunDir;
          uniform float uCloudShadowAmt;
          uniform float uExag;
          uniform float uRfNorm;
          uniform float uZMinM;
          uniform float uZRangeKm;
          uniform vec2 uWindDir;
          varying float vBaseElev;
          varying vec3 vObjPos;
          varying vec2 vTerrainUv;
          varying float vSlopeUp;

          float hash21(vec2 p) {
            p = fract(p * vec2(123.34, 456.21));
            p += dot(p, p + 45.32);
            return fract(p.x * p.y);
          }
          float vnoise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            return mix(
              mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
              mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x),
              f.y
            );
          }
          float fbm(vec2 p) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 4; i++) {
              v += a * vnoise(p);
              p = p * 2.07 + vec2(13.1, 7.7);
              a *= 0.5;
            }
            return v;
          }
          vec3 depHeatmap(float t) {
            vec3 c0 = vec3(0.012, 0.022, 0.055);
            vec3 c1 = vec3(0.070, 0.045, 0.190);
            vec3 c2 = vec3(0.480, 0.085, 0.030);
            vec3 c3 = vec3(0.880, 0.360, 0.020);
            vec3 c4 = vec3(0.980, 0.800, 0.260);
            if (t < 0.25) return mix(c0, c1, t / 0.25);
            if (t < 0.55) return mix(c1, c2, (t - 0.25) / 0.30);
            if (t < 0.82) return mix(c2, c3, (t - 0.55) / 0.27);
            return mix(c3, c4, clamp((t - 0.82) / 0.18, 0.0, 1.0));
          }
          vec3 rfHeatmap(float t) {
            // Magma/Inferno perceptual scientific ramp for instantaneous radiative forcing RF = -dAlpha * SW (0..55 W m-2)
            vec3 c0 = vec3(0.025, 0.022, 0.085);
            vec3 c1 = vec3(0.260, 0.035, 0.340);
            vec3 c2 = vec3(0.760, 0.145, 0.180);
            vec3 c3 = vec3(0.960, 0.490, 0.055);
            vec3 c4 = vec3(0.990, 0.940, 0.520);
            if (t < 0.25) return mix(c0, c1, t / 0.25);
            if (t < 0.55) return mix(c1, c2, (t - 0.25) / 0.30);
            if (t < 0.82) return mix(c2, c3, (t - 0.55) / 0.27);
            return mix(c3, c4, clamp((t - 0.82) / 0.18, 0.0, 1.0));
          }`).replace("#include <map_fragment>",`#include <map_fragment>
          vec3 msk = texture2D(uMaskTex, vTerrainUv).rgb;
          float visAlb = msk.r;
          float ndsi = msk.g * 2.0 - 1.0;
          float water = msk.b;
          float elevT = clamp(vBaseElev / max(uZRangeKm, 0.001), 0.0, 1.0);
          float elevM = uZMinM + vBaseElev * 1000.0;

          float isCryo = smoothstep(0.30, 0.46, ndsi);
          float isSnow = isCryo * smoothstep(0.38, 0.58, visAlb);
          float isIce = isCryo * (1.0 - smoothstep(0.38, 0.58, visAlb));

          vec2 windAligned = vec2(
            dot(vObjPos.xz, uWindDir),
            dot(vObjPos.xz, vec2(-uWindDir.y, uWindDir.x))
          );
          float sastrugi = fbm(vec2(windAligned.x * 4.5, windAligned.y * 12.0));
          float grain = fbm(vObjPos.xz * 18.0);
          float microShade = mix(1.0, 0.84 + 0.24 * sastrugi, isSnow) * (0.90 + 0.16 * grain);

          float plumePattern = 0.68 + 0.46 * fbm(vObjPos.xz * 0.55 + uWindDir * 1.4) + 0.22 * (1.0 - elevT);
          float localDepNorm = clamp(uDepCumFrac * plumePattern, 0.0, 1.35);

          // Realistic full-massif snow accumulation & meltback (moraines, valley slopes, rock ridges AND glacier!)
          // Exponential optical cover: even 1-3 mm SWE (~1-3 cm powder) visibly whitens dark rock & moraines, 8+ mm = full winter blanket!
          float activeSnow = clamp(uRainIntensity * 0.55, 0.0, 0.65) * smoothstep(uRainSnowM - 100.0, uRainSnowM + 100.0, elevM);
          float packCover = 1.0 - exp(-max(uSnowPackMm, 0.0) / 2.6);
          float snowDepthNorm = clamp(max(packCover, activeSnow * 0.80), 0.0, 1.0);

          // Live landscape snowline tracks actual snowfall elevation down to valley floor (1,840 m) & retreats upward during melt
          float snowLineEff = min(uSnowLineM, mix(3520.0, uRainSnowM - 60.0, smoothstep(0.04, 0.25, activeSnow)));
          float patchNoise = fbm(vObjPos.xz * 2.4 + vec2(3.1, 7.4));
          float elevMask = smoothstep(snowLineEff - 120.0, snowLineEff + 150.0, elevM + (patchNoise - 0.5) * 140.0);

          // Realistic Rockies slope retention: valley floors, moraines, talus & mountain ledges turn white; sheer >65 deg cliff bands stay dark!
          float ledgeTex = fbm(vObjPos.xz * 9.5);
          float slopeHold = smoothstep(0.28, 0.72, vSlopeUp + 0.20 * ledgeTex + 0.14 * snowDepthNorm);
          // Keep proglacial lake dark unless deeply blanketed
          float notLake = 1.0 - smoothstep(0.22, 0.62, water);
          // Natural patchy snow-cover progression on dark rock/moraine crevices before turning solid white
          float rockCrevice = smoothstep(0.55 - 0.65 * snowDepthNorm, 0.88 - 0.45 * snowDepthNorm, patchNoise * 0.65 + ledgeTex * 0.35 + snowDepthNorm * 0.55);
          float terrainHold = mix(rockCrevice, 1.0, isCryo * 0.55 + snowDepthNorm * 0.45);

          float freshSnow = snowDepthNorm * elevMask * slopeHold * terrainHold * notLake;
          freshSnow = clamp(freshSnow * 1.12, 0.0, 0.96);

          // Active rain wets lower bare ice & dark rock below live rain-snow line
          float belowRainLine = 1.0 - smoothstep(uRainSnowM - 90.0, uRainSnowM + 110.0, elevM);
          float wetSurface = clamp(uRainIntensity * 0.62, 0.0, 0.78) * belowRainLine * (1.0 - freshSnow * 0.85);

          // Projected moving 3D cloud shadows gliding across the glacier & cliffs along the true sun vector!
          float cloudShadow = 1.0;
          if (uCloudShadowAmt > 0.08 && uDaylight > 0.08) {
            vec2 shP = vObjPos.xz + uSunDir.xz * ((3.3 - vObjPos.y) / max(uSunDir.y, 0.24));
            float cn = fbm(shP * 0.26 - uWindDir * uTime * 0.065);
            float cMask = smoothstep(0.66 - uCloudShadowAmt * 0.42, 0.84, cn);
            cloudShadow = 1.0 - cMask * uCloudShadowAmt * 0.48 * uDaylight;
          }

          if (uMode < 0.5) {
            diffuseColor.rgb *= microShade;
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.84, 0.89, 0.95), isSnow * 0.45);

            float depVis = pow(clamp(localDepNorm, 0.0, 1.25), 0.78);
            // Physically realistic glacier impurity darkening (subtle charcoal-gray / dusty-ice tint matching real webcam, not chocolate mud!)
            float sootCover = clamp(depVis * 0.22 * uDepBoost * (0.20 + 0.80 * isCryo), 0.0, 0.72);
            float impurityEnrich = mix(0.85, 1.35, isIce) * (0.80 + 0.40 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.74);
            // Fresh snow buries wildfire soot and resets surface albedo!
            sootCover *= (1.0 - freshSnow * 0.90);

            vec3 sootTint = mix(vec3(0.20, 0.19, 0.17), vec3(0.08, 0.08, 0.08), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.46 + sootTint * 0.54, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.08 * (1.0 - isCryo));

            // Rain wets rock & moraines darker
            diffuseColor.rgb *= (1.0 - wetSurface * 0.28 * (1.0 - isSnow));

            // Crisp fresh alpine snow blanket across the ENTIRE massif (moraines, valley slopes, rock ridges & glacier!)
            vec3 freshSnowCol = vec3(0.80, 0.86, 0.93) * (0.88 + 0.16 * sastrugi + 0.08 * grain);
            diffuseColor.rgb = mix(diffuseColor.rgb, freshSnowCol, freshSnow * 0.94);

            // Animated proglacial Lac Sunwapta: wind micro-ripples, glacial turquoise depth, Fresnel sky reflection & sun glint!
            float isLake = smoothstep(0.22, 0.62, water);
            if (isLake > 0.01) {
              vec2 wUv1 = vObjPos.xz * 26.0 - uWindDir * uTime * 0.9;
              vec2 wUv2 = vObjPos.xz * 44.0 + vec2(uWindDir.y, -uWindDir.x) * uTime * 0.65;
              float rip = (vnoise(wUv1) - 0.5) * 0.6 + (vnoise(wUv2) - 0.5) * 0.4;
              vec3 viewW = normalize(cameraPosition - vObjPos);
              vec3 nW = normalize(vec3(rip * 0.24, 1.0, rip * 0.24));
              float fres = pow(1.0 - max(dot(viewW, nW), 0.0), 3.2);
              vec3 deepLake = mix(vec3(0.020, 0.055, 0.095), vec3(0.045, 0.240, 0.265), uDaylight);
              vec3 skyRefl = mix(vec3(0.04, 0.07, 0.14), mix(vec3(0.45, 0.62, 0.82), vec3(0.68, 0.62, 0.54), uSmokeHaze * 0.65), uDaylight);
              vec3 hVec = normalize(viewW + normalize(uSunDir));
              float glint = pow(max(dot(nW, hVec), 0.0), 90.0) * uDaylight * (1.0 - uCloudShadowAmt * 0.6) * 0.95;
              vec3 lakeCol = mix(deepLake, skyRefl, clamp(0.18 + 0.72 * fres, 0.0, 0.88)) + vec3(1.0, 0.92, 0.68) * glint;
              diffuseColor.rgb = mix(diffuseColor.rgb, lakeCol, isLake);
            }

            // Apply moving cloud shadows across terrain
            diffuseColor.rgb *= cloudShadow;
          } else if (uMode < 1.5) {
            // Scientific Mode 1: Instantaneous Surface Radiative Forcing RF = -dAlpha * SWdown (W m-2)
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            float rfLocal = clamp(uRfNorm * (0.62 + 0.58 * localDepNorm) * mix(0.85, 1.32, isIce) * (1.0 - freshSnow * 0.92) * cloudShadow, 0.0, 1.0);
            vec3 hm = rfHeatmap(rfLocal);
            vec3 rockBase = diffuseColor.rgb * 0.28 * cloudShadow;
            diffuseColor.rgb = mix(rockBase, hm * (0.68 + 0.48 * sqrt(max(luma, 0.01))), mix(0.10, 0.95, isCryo));
          } else if (uMode < 2.5) {
            // Mode 2: Cumulative FireWork carbon deposition (EC+POM+SOM, mg m-2)
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 hm = depHeatmap(clamp(localDepNorm * 0.95, 0.0, 1.0));
            vec3 rockBase = diffuseColor.rgb * 0.35;
            diffuseColor.rgb = mix(rockBase, hm * (0.65 + 0.55 * sqrt(max(luma, 0.01))), mix(0.28, 0.94, isCryo));
          } else if (uMode < 3.5) {
            vec3 rockCol = mix(vec3(0.030, 0.036, 0.040), vec3(0.160, 0.125, 0.095), clamp(visAlb * 3.0, 0.0, 1.0));
            vec3 iceCol = mix(vec3(0.028, 0.165, 0.440), vec3(0.145, 0.440, 0.760), clamp(visAlb * 1.7, 0.0, 1.0));
            vec3 snowCol = vec3(0.60, 0.67, 0.76) * microShade;
            vec3 col = mix(rockCol, mix(iceCol, snowCol, smoothstep(0.38, 0.58, visAlb)), isCryo);
            col = mix(col, vec3(0.015, 0.38, 0.42), smoothstep(0.25, 0.65, water));
            diffuseColor.rgb = col;
          } else {
            diffuseColor.rgb = mix(vec3(0.26, 0.29, 0.34), vec3(0.58, 0.63, 0.70), elevT) * microShade * cloudShadow;
          }

          if (uContours > 0.5) {
            float c100 = abs(fract(elevM / 100.0 + 0.5) - 0.5);
            float c500 = abs(fract(elevM / 500.0 + 0.5) - 0.5);
            float fw100 = fwidth(elevM / 100.0) * 1.2;
            float fw500 = fwidth(elevM / 500.0) * 1.7;
            float l100 = 1.0 - smoothstep(0.0, max(fw100, 0.014), c100);
            float l500 = 1.0 - smoothstep(0.0, max(fw500, 0.010), c500);
            vec3 lc = uMode > 3.5 ? vec3(0.14, 0.20, 0.28) : vec3(0.05, 0.09, 0.14);
            diffuseColor.rgb = mix(diffuseColor.rgb, lc, clamp(l100 * 0.34 + l500 * 0.50, 0.0, 0.75));
          }

          if (uShowIsotherm > 0.5 && uRainSnowM > 1880.0 && uRainSnowM < 3480.0) {
            float dIso = abs(elevM - uRainSnowM);
            float isoW = max(fwidth(elevM) * 2.2, 16.0);
            float isoLine = 1.0 - smoothstep(0.0, isoW, dIso);
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.15, 0.75, 1.0), isoLine * 0.85);
          }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          vec3 mskR = texture2D(uMaskTex, vTerrainUv).rgb;
          float ndsiR = mskR.g * 2.0 - 1.0;
          float isCryoR = smoothstep(0.30, 0.46, ndsiR);
          float isSnowR = isCryoR * smoothstep(0.38, 0.58, mskR.r);
          float isIceR = isCryoR * (1.0 - smoothstep(0.38, 0.58, mskR.r));
          float elevMR = uZMinM + vBaseElev * 1000.0;
          float belowR = 1.0 - smoothstep(uRainSnowM - 80.0, uRainSnowM + 100.0, elevMR);
          float rVal = 0.90;
          rVal = mix(rVal, 0.68, isSnowR);
          rVal = mix(rVal, 0.34, isIceR);
          rVal = mix(rVal, 0.10, smoothstep(0.25, 0.65, mskR.b));
          rVal = mix(rVal, 0.85, clamp(uDepCumFrac * 0.32 * isCryoR, 0.0, 0.5));
          rVal = mix(rVal, 0.15, clamp(uRainIntensity * 0.38, 0.0, 0.62) * belowR);
          roughnessFactor = rVal;`).replace("#include <tonemapping_fragment>",`// Post-lighting Exact Closed-Form Beer-Lambert Exponential Height-Fog + Henyey-Greenstein Mie Wildfire Smoke!
          // Applied in linear radiance space BEFORE ACESFilmic tone mapping & sRGB conversion so shadowed cliffs lift into luminous milky-amber smoke (true Koschmieder airlight, exact parity with 35 km Rockies ring!).
          if (uMode < 0.5 && uSmokeHaze > 0.015) {
            vec3 rayVec = vObjPos - cameraPosition;
            float rayLen = length(rayVec);
            vec3 rayDir = rayVec / max(rayLen, 0.001);
            float H = 1.05 * uExag;
            float yTop = 2.65 * uExag;
            float y0 = max(0.0, cameraPosition.y);
            float y1 = max(0.0, vObjPos.y);
            float effLen = rayLen;
            float ya = y0;
            if (y0 > yTop && y0 > y1 + 0.001) {
              float tEnter = clamp((y0 - yTop) / (y0 - y1), 0.0, 1.0);
              effLen = rayLen * (1.0 - tEnter);
              ya = yTop;
            } else if (y0 > yTop && y1 >= yTop) {
              effLen = 0.0;
            }
            float dya = y1 - ya;
            float avgExp = abs(dya) < 0.025
              ? exp(-ya / H)
              : (exp(-ya / H) - exp(-y1 / H)) / (dya / H);
            float ext = 0.068 + 0.54 * pow(uSmokeHaze, 0.88);
            float optDepth = max(0.0, effLen * avgExp * ext);
            float hazeAmt = clamp((1.0 - exp(-optDepth)) * smoothstep(0.015, 0.16, uSmokeHaze), 0.0, 0.88);

            float cosT = dot(rayDir, normalize(uSunDir));
            float g = 0.58;
            float hg = (1.0 - g * g) / pow(max(0.25, 1.0 + g * g - 2.0 * g * cosT), 1.5);
            float sunGlow = clamp((hg - 0.35) * 0.24, 0.0, 0.68);

            // Linear-space airlight colors (calibrated for ACESFilmicToneMapping -> silky milky warm-amber alpine smoke!)
            vec3 smokeCool = vec3(0.38, 0.37, 0.35);
            vec3 smokeWarm = vec3(0.68, 0.45, 0.22);
            vec3 smokeDense = vec3(0.64, 0.30, 0.10);
            vec3 hazeDay = mix(smokeCool, smokeWarm, clamp(0.26 + 0.55 * sunGlow + 0.36 * uSmokeHaze, 0.0, 1.0));
            hazeDay = mix(hazeDay, smokeDense, clamp((uSmokeHaze - 0.52) * 0.85, 0.0, 0.55));
            hazeDay *= (1.0 - uCloudShadowAmt * 0.22);
            vec3 hazeNight = vec3(0.010, 0.011, 0.016);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, mix(hazeNight, hazeDay, uDaylight), hazeAmt);
          }
          #include <tonemapping_fragment>`)},this.terrainMesh=new bt(f,m),this.terrainMesh.castShadow=!0,this.terrainMesh.receiveShadow=!0,this.scene.add(this.terrainMesh),this._buildCutawaySkirt()}_buildCutawaySkirt(){const e=this.G,t=this.sizeX,n=this.sizeY,s=-this.skirtDepth,r=[],o=[],a=[],l=[];let c=0;const u=(p,h,w,b)=>{const S=c;for(let T=0;T<e;T++){const A=p(T);r.push(A.x,A.y0*this.state.exag,A.z),o.push(h,w,b),a.push(A.y0),r.push(A.x,s,A.z),o.push(h,w,b),a.push(-1),c+=2}for(let T=0;T<e-1;T++){const A=S+T*2,C=A+1,F=A+2,M=A+3;l.push(A,C,M,A,M,F)}};u(p=>({x:(p/(e-1)-.5)*t,z:-n*.5,y0:this.demZ[p]}),0,0,-1),u(p=>({x:t*.5,z:(p/(e-1)-.5)*n,y0:this.demZ[p*e+(e-1)]}),1,0,0),u(p=>{const h=e-1-p;return{x:(h/(e-1)-.5)*t,z:n*.5,y0:this.demZ[(e-1)*e+h]}},0,0,1),u(p=>{const h=e-1-p;return{x:-t*.5,z:(h/(e-1)-.5)*n,y0:this.demZ[h*e]}},-1,0,0);const d=c,f=t*.5,m=n*.5;r.push(-f,s,-m,f,s,-m,f,s,m,-f,s,m);for(let p=0;p<4;p++)o.push(0,-1,0),a.push(-1);l.push(d,d+1,d+2,d,d+2,d+3);const g=new Dt;g.setAttribute("position",new Qt(r,3)),g.setAttribute("normal",new Qt(o,3)),g.setIndex(l),this.skirtGeo=g,this.skirtBaseRim=new Float32Array(a);const _=new Lr({color:1186084,roughness:.88,metalness:.08,side:Gt});this.skirtMesh=new bt(g,_),this.skirtMesh.castShadow=!0,this.skirtMesh.receiveShadow=!0,this.scene.add(this.skirtMesh)}_buildSurroundingRockies(e){if(this.ringMesh=null,this.ringGeo=null,!e||!this.meta.ring)return;const t=this.meta.ring.grid,n=this.meta.ring.sizeKm,s=this.meta.ring.zMinM,r=this.meta.ring.zMaxM,o=Math.max(r-s,1),a=this.meta.zMinM,l=t*t,c=new Float32Array(l*3),u=new Float32Array(l);for(let _=0;_<t;_++){const h=(_/(t-1)-.5)*n;for(let w=0;w<t;w++){const S=(w/(t-1)-.5)*n,T=_*t+w,C=(s+e[T]/65535*o-a)/1e3;u[T]=C,c[T*3+0]=S,c[T*3+1]=C*this.state.exag,c[T*3+2]=h}}const d=this.sizeX*.5-.08,f=[];for(let _=0;_<t-1;_++){const p=(_/(t-1)-.5)*n,h=((_+1)/(t-1)-.5)*n;for(let w=0;w<t-1;w++){const b=(w/(t-1)-.5)*n,S=((w+1)/(t-1)-.5)*n;if(Math.abs(b)<d&&Math.abs(S)<d&&Math.abs(p)<d&&Math.abs(h)<d)continue;const T=_*t+w,A=T+1,C=T+t,F=C+1;f.push(T,C,F,T,F,A)}}const m=new Dt;m.setAttribute("position",new ct(c,3)),m.setAttribute("aBaseElev",new ct(u,1)),m.setIndex(f),m.computeVertexNormals(),this.ringGeo=m,this.ringUniforms={uSunDir:{value:this._sunDir.clone()},uTime:{value:0},uWindDir:{value:new we(.85,-.52)},uCloudShadowAmt:{value:.3},uSmokeHaze:{value:0},uDaylight:{value:.9},uSnowPackMm:{value:0},uSnowLineM:{value:3480},uZMinM:{value:this.meta.zMinM},uExag:{value:this.state.exag},uHalfInner:{value:this.sizeX*.5-.03},uHalfOuter:{value:n*.5},uRingAlpha:{value:0}};const g=new It({transparent:!0,depthWrite:!0,uniforms:this.ringUniforms,vertexShader:`
        attribute float aBaseElev;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying float vElevM;
        uniform float uZMinM;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vNormal = normalize(normal);
          vElevM = uZMinM + aBaseElev * 1000.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uCloudShadowAmt;
        uniform float uSmokeHaze;
        uniform float uDaylight;
        uniform float uSnowPackMm;
        uniform float uSnowLineM;
        uniform float uExag;
        uniform float uHalfInner;
        uniform float uHalfOuter;
        uniform float uRingAlpha;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying float vElevM;

        float hash21(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        float vnoise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * vnoise(p); p = p * 2.05 + vec2(7.3, 11.1); a *= 0.5; }
          return v;
        }

        void main() {
          if (uRingAlpha < 0.02) discard;
          // Exact cutout inside the 11x11 km Sentinel-2 high-res block
          float inBox = max(abs(vWorldPos.x), abs(vWorldPos.z));
          if (inBox < uHalfInner) discard;
          // Smooth radial fade into sky at the outer 35 km rim
          float outerFade = 1.0 - smoothstep(uHalfOuter * 0.72, uHalfOuter * 0.99, length(vWorldPos.xz));
          if (outerFade < 0.01) discard;

          vec3 N = normalize(vNormal);
          float slopeUp = clamp(N.y, 0.0, 1.0);
          float n = fbm(vWorldPos.xz * 0.85);

          // Linear-space Canadian Rockies elevation bands matching Sentinel-2 block reflectance (conifer -> limestone scree -> alpine snow/glaciers)
          vec3 forest = vec3(0.022, 0.044, 0.024);
          vec3 rock = mix(vec3(0.065, 0.056, 0.048), vec3(0.165, 0.145, 0.125), n);
          vec3 alpineSnow = vec3(0.56, 0.64, 0.74);

          float treeLine = smoothstep(1920.0, 2180.0, vElevM + (n - 0.5) * 180.0);
          vec3 baseCol = mix(forest, rock, treeLine);
          float permSnow = smoothstep(2620.0, 2950.0, vElevM + (n - 0.5) * 240.0) * smoothstep(0.38, 0.74, slopeUp);
          baseCol = mix(baseCol, alpineSnow, permSnow * 0.86);

          // Live fresh snow whitening synchronized with the main massif!
          float packCover = 1.0 - exp(-max(uSnowPackMm, 0.0) / 2.6);
          float freshMask = packCover * smoothstep(uSnowLineM - 120.0, uSnowLineM + 160.0, vElevM + (n - 0.5) * 140.0) * smoothstep(0.30, 0.70, slopeUp + 0.16 * n);
          baseCol = mix(baseCol, vec3(0.64, 0.72, 0.82), clamp(freshMask * 0.92, 0.0, 0.92));

          // Direct sun + sky hemisphere + moving cloud shadows (calibrated to MeshStandardMaterial Lambertian BRDF)
          vec3 sDir = normalize(uSunDir);
          float ndl = max(dot(N, sDir), 0.0);
          float cloudSh = 1.0;
          if (uCloudShadowAmt > 0.08 && uDaylight > 0.08) {
            vec2 shP = vWorldPos.xz + sDir.xz * ((3.3 - vWorldPos.y) / max(sDir.y, 0.24));
            float cn = fbm(shP * 0.26 - uWindDir * uTime * 0.065);
            cloudSh = 1.0 - smoothstep(0.66 - uCloudShadowAmt * 0.42, 0.84, cn) * uCloudShadowAmt * 0.45 * uDaylight;
          }
          vec3 sunTint = mix(vec3(0.14, 0.24, 0.48), vec3(1.05, 0.88, 0.54), uDaylight);
          vec3 ambCol = mix(vec3(0.015, 0.028, 0.065), vec3(0.28, 0.38, 0.52), uDaylight);
          vec3 col = baseCol * (ambCol + sunTint * ndl * (0.20 + 0.92 * uDaylight) * cloudSh);

          // Distance atmospheric perspective + identical analytical Beer-Lambert + Henyey-Greenstein wildfire smoke!
          vec3 rayVec = vWorldPos - cameraPosition;
          float rayLen = length(rayVec);
          vec3 rayDir = rayVec / max(rayLen, 0.001);
          float airMist = 1.0 - exp(-rayLen * 0.032);
          vec3 airCol = mix(vec3(0.010, 0.018, 0.042), vec3(0.34, 0.48, 0.68), uDaylight);
          col = mix(col, airCol, clamp(airMist * 0.62, 0.0, 0.68));

          if (uSmokeHaze > 0.015) {
            float H = 1.05 * uExag;
            float yTop = 2.65 * uExag;
            float y0 = max(0.0, cameraPosition.y);
            float y1 = max(0.0, vWorldPos.y);
            float effLen = rayLen;
            float ya = y0;
            if (y0 > yTop && y0 > y1 + 0.001) {
              effLen = rayLen * (1.0 - clamp((y0 - yTop) / (y0 - y1), 0.0, 1.0));
              ya = yTop;
            } else if (y0 > yTop && y1 >= yTop) {
              effLen = 0.0;
            }
            float dya = y1 - ya;
            float avgExp = abs(dya) < 0.025 ? exp(-ya / H) : (exp(-ya / H) - exp(-y1 / H)) / (dya / H);
            float optDepth = max(0.0, effLen * avgExp * (0.068 + 0.54 * pow(uSmokeHaze, 0.88)));
            float hazeAmt = clamp((1.0 - exp(-optDepth)) * smoothstep(0.015, 0.16, uSmokeHaze), 0.0, 0.92);

            float cosT = dot(rayDir, sDir);
            float g = 0.58;
            float hg = (1.0 - g * g) / pow(max(0.25, 1.0 + g * g - 2.0 * g * cosT), 1.5);
            float sunGlow = clamp((hg - 0.35) * 0.24, 0.0, 0.68);

            vec3 smokeCool = vec3(0.38, 0.37, 0.35);
            vec3 smokeWarm = vec3(0.68, 0.45, 0.22);
            vec3 smokeDense = vec3(0.64, 0.30, 0.10);
            vec3 hazeDay = mix(smokeCool, smokeWarm, clamp(0.26 + 0.55 * sunGlow + 0.36 * uSmokeHaze, 0.0, 1.0));
            hazeDay = mix(hazeDay, smokeDense, clamp((uSmokeHaze - 0.52) * 0.85, 0.0, 0.55));
            hazeDay *= (1.0 - uCloudShadowAmt * 0.22);
            vec3 hazeNight = vec3(0.010, 0.011, 0.016);
            col = mix(col, mix(hazeNight, hazeDay, uDaylight), hazeAmt);
          }

          gl_FragColor = vec4(col, outerFade * uRingAlpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.ringMesh=new bt(m,g),this.ringMesh.frustumCulled=!1,this.ringMesh.visible=!1,this.scene.add(this.ringMesh)}_buildVolumetricSmoke(){this.smokeGroup=new Gn,this.smokeSharedUniforms={uTime:{value:0},uDensity:{value:.45},uWindDir:{value:new we(.85,-.52)},uSunDir:{value:this._sunDir.clone()},uSunPower:{value:.6},uWetFrac:{value:0},uExag:{value:this.state.exag}};const e=72,t=new Float32Array(e*e*3),n=new Float32Array(e*e),s=new Float32Array(e*e*2);for(let l=0;l<e;l++){const c=l/(e-1),u=(c-.5)*this.sizeY*1.12;for(let d=0;d<e;d++){const f=d/(e-1),m=(f-.5)*this.sizeX*1.12,g=l*e+d;t[g*3+0]=m,t[g*3+1]=0,t[g*3+2]=u,n[g]=this._sampleDemXZ(m,u),s[g*2+0]=f,s[g*2+1]=c}}const r=[];for(let l=0;l<e-1;l++)for(let c=0;c<e-1;c++){const u=l*e+c,d=u+1,f=u+e,m=f+1;r.push(u,f,m,u,m,d)}const o=new Dt;o.setAttribute("position",new ct(t,3)),o.setAttribute("aDemY0",new ct(n,1)),o.setAttribute("uv",new ct(s,2)),o.setIndex(r),[{heightAbove:.22,follow:.85,alpha:.11,scale:1.6,speed:.58,seed:1.3},{heightAbove:.58,follow:.62,alpha:.09,scale:1.2,speed:.78,seed:7.9}].forEach(l=>{const c=new It({transparent:!0,depthWrite:!1,side:Gt,uniforms:{...this.smokeSharedUniforms,uHeightAbove:{value:l.heightAbove},uFollow:{value:l.follow},uLayerAlpha:{value:l.alpha},uNoiseScale:{value:l.scale},uSpeedMul:{value:l.speed},uSeed:{value:l.seed}},vertexShader:`
          attribute float aDemY0;
          uniform float uTime;
          uniform vec2 uWindDir;
          uniform float uExag;
          uniform float uHeightAbove;
          uniform float uFollow;
          uniform float uSpeedMul;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevNorm;
          void main() {
            vUv = uv;
            float baseY = mix(0.75 * uExag, aDemY0 * uExag, uFollow) + uHeightAbove;
            float phase = dot(position.xz, uWindDir) * 0.65 - uTime * 0.45 * uSpeedMul + uSeed;
            float billow = sin(phase) * 0.08 + cos(position.x * 0.55 - position.z * 0.45 + uTime * 0.3) * 0.06;
            vec3 pos = vec3(position.x, baseY + billow, position.z);
            vec4 wp = modelMatrix * vec4(pos, 1.0);
            vWorldPos = wp.xyz;
            vElevNorm = clamp(aDemY0 / 1.65, 0.0, 1.0);
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          precision highp float;
          uniform float uTime;
          uniform float uDensity;
          uniform vec2 uWindDir;
          uniform vec3 uSunDir;
          uniform float uSunPower;
          uniform float uWetFrac;
          uniform float uLayerAlpha;
          uniform float uNoiseScale;
          uniform float uSpeedMul;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevNorm;

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float noise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
          }
          float fbm(vec2 p) {
            float v=0.0, a=0.5;
            for (int i=0; i<5; i++) { v += a*noise(p); p = p*2.04+vec2(7.3,11.9); a*=0.5; }
            return v;
          }
          void main() {
            if (uDensity < 0.02) discard;
            // Fade smoke very close to camera so first-person glacier view stays breathable!
            float camDist = length(vWorldPos - cameraPosition);
            float nearFade = smoothstep(0.35, 1.6, camDist);

            vec2 c = vUv * 2.0 - 1.0;
            float edge = 1.0 - smoothstep(0.42, 0.96, max(abs(c.x), abs(c.y)) * 0.55 + length(c) * 0.55);
            vec2 drift = uWindDir * uTime * 0.16 * uSpeedMul;
            vec2 q = vUv * uNoiseScale - drift + vec2(uSeed);
            vec2 warp = vec2(fbm(q + vec2(1.7, 9.2)), fbm(q + vec2(8.3, 2.8)));
            float n = fbm(q + 0.65 * warp - drift * 0.35);

            float valleyPool = 1.25 - 0.42 * vElevNorm;
            float cloud = smoothstep(0.18, 0.76, n * valleyPool);
            // Smooth luminous Mie-backlit wildfire smoke haze (matches real webcam milky warm-amber valley smoke, not dark muddy smudges!)
            float smokeBoost = pow(clamp(uDensity, 0.0, 1.0), 0.72);
            float alpha = (0.28 + 0.72 * cloud) * edge * nearFade * smokeBoost * uLayerAlpha * 1.42;
            if (alpha < 0.004) discard;

            vec3 viewDir = normalize(vWorldPos - cameraPosition);
            float fwd = pow(max(dot(viewDir, normalize(uSunDir)), 0.0), 3.0) * uSunPower;
            vec3 baseDark = vec3(0.56, 0.46, 0.36);
            vec3 baseLit  = vec3(0.88, 0.72, 0.50);
            vec3 heavyTint = vec3(0.86, 0.54, 0.24);
            vec3 col = mix(baseDark, baseLit, clamp(0.32 + 0.58 * uSunPower + 0.20 * cloud, 0.0, 1.0));
            col = mix(col, heavyTint, clamp((uDensity - 0.45) * 0.95, 0.0, 0.65));
            col += vec3(0.45, 0.28, 0.10) * fwd;
            gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.72));
          }
        `});this.smokeGroup.add(new bt(o,c))}),this.scene.add(this.smokeGroup)}_buildCloudDeck(){this.cloudGroup=new Gn,this.cloudUniforms={uTime:{value:0},uCloudCover:{value:.4},uCloudLow:{value:.3},uCloudMid:{value:.3},uStormIntensity:{value:0},uWindDir:{value:new we(.85,-.52)},uWindSpeed:{value:5},uSunDir:{value:this._sunDir.clone()},uSunPower:{value:.5},uDaylight:{value:.8},uTwilight:{value:0},uSmoke:{value:.2},uExag:{value:this.state.exag},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new we(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex}};const e=64,t=new Rn(1,1,1,1),n=new Ir;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(e*3),r=new Float32Array(e*4),o=new Float32Array(e*2);for(let l=0;l<e;l++){const c=l>=34?1:0,u=c>.5?l-34:l,d=c>.5?e-34:34,f=Math.sqrt((u+.45)/d),m=u*2.3999632+(Math.random()-.5)*.45,g=c>.5?.68:.54;s[l*3+0]=Math.cos(m)*f*this.sizeX*g,s[l*3+1]=c>.5?3.45+Math.random()*.85:.55+Math.random()*.95,s[l*3+2]=Math.sin(m)*f*this.sizeY*g,r[l*4+0]=c>.5?4.6+Math.random()*3.8:3+Math.random()*2.8,r[l*4+1]=c>.5?1.6+Math.random()*1.1:1.35+Math.random()*1.05,r[l*4+2]=(u+.5)/d,r[l*4+3]=c,o[l*2+0]=Math.random()*47,o[l*2+1]=.72+Math.random()*.55}n.setAttribute("aOrigin",new Kn(s,3)),n.setAttribute("aCloudAttr",new Kn(r,4)),n.setAttribute("aSeed",new Kn(o,2)),n.instanceCount=e;const a=new It({transparent:!0,depthWrite:!1,side:Gt,uniforms:this.cloudUniforms,vertexShader:`
        attribute vec3 aOrigin;
        attribute vec4 aCloudAttr;
        attribute vec2 aSeed;
        uniform float uTime;
        uniform float uCloudLow;
        uniform float uCloudMid;
        uniform float uStormIntensity;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uExag;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vCenter;
        varying float vOpacity;
        varying float vSeed;
        varying float vIsMid;

        void main() {
          vUv = uv;
          vSeed = aSeed.x;
          float isMid = aCloudAttr.w;
          vIsMid = isMid;
          float cover = isMid > 0.5 ? max(uCloudMid, uStormIntensity * 0.82) : max(uCloudLow, uStormIntensity * 0.78);
          float rank = aCloudAttr.z;
          // Smoothly bring cloud clusters into existence as real ERA5 cover increases!
          float vis = smoothstep(rank - 0.18, rank + 0.14, cover * 1.12);
          if (vis < 0.01) {
            vOpacity = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          float domain = isMid > 0.5 ? 16.0 : 13.0;
          vec2 drift = uWindDir * uTime * (0.09 + 0.03 * uWindSpeed) * aSeed.y * (isMid > 0.5 ? 1.25 : 0.85);
          vec2 cxz = mod(aOrigin.xz + drift + domain * 0.5, domain) - domain * 0.5;

          vec2 demUv = clamp(cxz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;

          float exagOff = max(0.0, (uExag - 1.3) * 1.35);
          float cy = isMid > 0.5
            ? (aOrigin.y + 0.35 - uStormIntensity * 0.65 + exagOff)
            : max(groundY + 1.15, groundY + aOrigin.y + 0.65 - uStormIntensity * 0.22);

          vec3 center = vec3(cxz.x, cy, cxz.y);
          vCenter = center;

          // Soft spherical/cylindrical camera billboard so 3D puffs look voluminous from EVERY angle (Bloc 3D & Sur le glacier!)
          vec3 viewDir = normalize(cameraPosition - center);
          vec3 worldUp = vec3(0.0, 1.0, 0.0);
          vec3 right = normalize(cross(worldUp, viewDir));
          vec3 up = normalize(mix(worldUp, cross(viewDir, right), 0.55));

          float puffGrow = 0.82 + 0.36 * cover + 0.22 * uStormIntensity;
          vec3 wp = center + right * (position.x * aCloudAttr.x * puffGrow) + up * (position.y * aCloudAttr.y * puffGrow);
          vWorldPos = wp;

          // Keep puffs from popping harshly right inside the viewer lens
          float camDist = length(center - cameraPosition);
          float nearFade = smoothstep(0.65, 2.1, camDist);
          float edgeDom = 1.0 - smoothstep(domain * 0.34, domain * 0.52, max(abs(cxz.x), abs(cxz.y)));
          vOpacity = vis * nearFade * edgeDom * (0.44 + 0.34 * cover);
          gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uTime;
        uniform float uStormIntensity;
        uniform vec3 uSunDir;
        uniform float uSunPower;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSmoke;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying vec3 vCenter;
        varying float vOpacity;
        varying float vSeed;
        varying float vIsMid;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.05 + vec2(3.1, 6.7); a *= 0.5; }
          return v;
        }

        void main() {
          if (vOpacity < 0.008) discard;
          // Sculpted cumulus silhouette: flatter condensation base at bottom, billowy cauliflower crown at top!
          vec2 p = vUv * 2.0 - 1.0;
          float baseFlat = p.y < 0.0 ? p.y * 1.48 : p.y * 0.92;
          float radial = length(vec2(p.x * 0.95, baseFlat));
          if (radial > 1.05) discard;

          vec2 q = vUv * 3.1 + vec2(vSeed, vSeed * 0.37) + vec2(uTime * 0.025, 0.0);
          float n = fbm(q + 0.45 * vec2(fbm(q + 2.1), fbm(q + 6.4)));
          float shape = (1.0 - smoothstep(0.18, 0.98, radial)) * smoothstep(0.24, 0.78, n + (1.0 - radial) * 0.42);
          float alpha = shape * vOpacity;
          if (alpha < 0.005) discard;

          // Analytical 3D directional lighting (bright sunlit crowns, cool blue-slate shaded cloud bases, Mie silver lining!)
          float heightShade = clamp(vUv.y * 1.15 - 0.10 + (n - 0.5) * 0.35, 0.0, 1.0);
          vec3 rayDir = normalize(vWorldPos - cameraPosition);
          float fwdMie = pow(max(dot(rayDir, normalize(uSunDir)), 0.0), 5.0) * (1.0 - shape * 0.55) * uDaylight;

          // Keep water clouds crisp white / cool silver-blue-gray — NEVER brown — so clouds & amber wildfire smoke stay 100% distinct!
          vec3 fairTop = mix(vec3(0.95, 0.97, 1.00), vec3(1.00, 0.84, 0.66), uTwilight * 0.45);
          vec3 fairBot = vec3(0.48, 0.56, 0.68);
          vec3 stormTop = vec3(0.72, 0.77, 0.84);
          vec3 stormBot = vec3(0.24, 0.30, 0.39);

          vec3 topCol = mix(fairTop, stormTop, clamp(uStormIntensity * 0.80, 0.0, 1.0));
          vec3 botCol = mix(fairBot, stormBot, clamp(uStormIntensity * 0.85, 0.0, 1.0));
          vec3 dayCol = mix(botCol, topCol, heightShade * (0.42 + 0.58 * uSunPower));
          dayCol += vec3(0.44, 0.50, 0.58) * fwdMie * 0.72;

          vec3 nightCol = mix(vec3(0.05, 0.08, 0.14), vec3(0.14, 0.19, 0.28), heightShade);
          vec3 col = mix(nightCol, dayCol, uDaylight);

          gl_FragColor = vec4(col, alpha);
        }
      `});this.cloudPuffs=new bt(n,a),this.cloudPuffs.frustumCulled=!1,this.cloudGroup.add(this.cloudPuffs),this.scene.add(this.cloudGroup)}_buildPrecipVolume(){const t=new Rn(1,1,1,1),n=new Ir;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(96),r=new Float32Array(128);for(let a=0;a<32;a++){const l=Math.sqrt((a+.5)/32),c=a*2.3999632+(Math.random()-.5)*.35;s[a*3+0]=Math.cos(c)*l*this.sizeX*.44,s[a*3+1]=0,s[a*3+2]=Math.sin(c)*l*this.sizeY*.44,r[a*4+0]=2.6+Math.random()*2.2,r[a*4+1]=Math.random()*19.3,r[a*4+2]=.75+Math.random()*.55,r[a*4+3]=Math.random()}n.setAttribute("aOffset",new Kn(s,3)),n.setAttribute("aParam",new Kn(r,4)),n.instanceCount=32,this.virgaUniforms={uTime:{value:0},uIntensity:{value:0},uSunPower:{value:.5},uWindDir:{value:new we(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uExag:{value:this.state.exag},uSizeXZ:{value:new we(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCloudTopY:{value:3.4}};const o=new It({transparent:!0,depthWrite:!1,side:Gt,uniforms:this.virgaUniforms,vertexShader:`
        attribute vec3 aOffset;
        attribute vec4 aParam;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uExag;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        uniform float uCloudTopY;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vGroundY;
        varying float vSeed;
        varying float vWindScreenX;

        void main() {
          vUv = uv;
          vSeed = aParam.y;
          // Drift each storm shaft slowly with the wind inside the 11x11 km domain
          vec2 drift = uWindDir * uTime * (0.08 + 0.025 * uWindSpeed) * aParam.z;
          vec2 cxz = mod(aOffset.xz + drift + uSizeXZ * 0.5, uSizeXZ) - uSizeXZ * 0.5;

          vec2 demUv = clamp(cxz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;
          float topY = max(groundY + 0.55, uCloudTopY);
          float h = topY - groundY;
          float centerY = groundY + h * 0.5;

          // Cylindrical billboard around Y axis so shafts NEVER show a flat edge when orbiting
          vec3 toCam = vec3(cameraPosition.x - cxz.x, 0.0, cameraPosition.z - cxz.y);
          vec3 fwd = length(toCam) > 0.001 ? normalize(toCam) : vec3(0.0, 0.0, 1.0);
          vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), fwd));

          // Project horizontal wind onto billboard right axis so streaks visibly slant downwind!
          vWindScreenX = dot(vec3(uWindDir.x, 0.0, uWindDir.y), right) * clamp(uWindSpeed / 8.0, 0.15, 1.4);

          vec3 worldPos = vec3(cxz.x, centerY, cxz.y)
            + right * (position.x * aParam.x)
            + vec3(0.0, position.y * h, 0.0);

          // Sample exact terrain under this vertex for clean ground contact
          vec2 vDemUv = clamp(worldPos.xz / uSizeXZ + 0.5, 0.002, 0.998);
          vGroundY = texture2D(uDemTex, vDemUv).r * uZRangeKm * uExag;
          vWorldPos = worldPos;
          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uSunPower;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uExag;
        varying vec2 vUv;
        varying vec3 vWorldPos;
        varying float vGroundY;
        varying float vSeed;
        varying float vWindScreenX;

        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
        }
        float fbm(vec2 p) {
          float v = 0.0, a = 0.5;
          for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.05 + vec2(3.7, 9.1); a *= 0.5; }
          return v;
        }

        void main() {
          if (uIntensity < 0.03) discard;
          // Stop cleanly right at the glacier / mountain terrain surface
          float aboveGround = vWorldPos.y - vGroundY;
          if (aboveGround < -0.02) discard;
          float groundSoft = smoothstep(-0.02, 0.14, aboveGround);

          // Fade close to camera so first-person immersion uses crisp near-field streaks & flakes
          float camDist = length(vWorldPos - cameraPosition);
          float nearFade = smoothstep(0.95, 2.8, camDist);

          // Soft radial horizontal and vertical envelope (zero rectangular edges)
          float envX = pow(sin(clamp(vUv.x, 0.0, 1.0) * 3.14159265), 1.75);
          float envY = smoothstep(0.0, 0.12, vUv.y) * (1.0 - smoothstep(0.72, 1.0, vUv.y));

          float worldElevM = uZMinM + (vWorldPos.y / max(uExag, 0.1)) * 1000.0;
          float isSnowZone = smoothstep(uRainSnowM - 120.0, uRainSnowM + 140.0, worldElevM);

          // Fine slanted rain virga filaments (fast downward motion)
          float slant = vWindScreenX * 0.34;
          vec2 rainP = vec2((vUv.x - vUv.y * slant) * 16.0 + vSeed, vUv.y * 2.0 + uTime * 2.4);
          float rainFilaments = fbm(rainP) * 0.65 + noise(rainP * vec2(2.6, 1.3) + vec2(4.2, uTime * 3.8)) * 0.35;
          float rainMask = smoothstep(0.30, 0.80, rainFilaments);

          // Soft turbulent billowing snow squall curtain above Jennings snowline (slower, cloudier, airy)
          vec2 snowP = vec2((vUv.x - vUv.y * slant * 1.4) * 5.5 + vSeed * 1.3 - uTime * vWindScreenX * 0.35, vUv.y * 3.2 + uTime * 0.65);
          float snowVeil = fbm(snowP + 0.45 * vec2(noise(snowP * 1.7), noise(snowP * 1.7 + 5.2)));
          float snowMask = smoothstep(0.24, 0.78, snowVeil);

          float pattern = mix(rainMask, snowMask, isSnowZone);
          float baseOp = mix(0.16, 0.26, isSnowZone) * clamp(uIntensity * 0.85, 0.0, 1.0);
          float alpha = pattern * envX * envY * groundSoft * nearFade * baseOp;
          if (alpha < 0.003) discard;

          // Rain virga = cool translucent slate-blue veil; snow squall = bright frosty alpine whiteout
          vec3 rainCol = mix(vec3(0.32, 0.40, 0.50), vec3(0.62, 0.70, 0.79), 0.25 + 0.55 * uSunPower);
          vec3 snowCol = mix(vec3(0.58, 0.65, 0.74), vec3(0.90, 0.94, 0.98), 0.30 + 0.65 * uSunPower);
          vec3 col = mix(rainCol, snowCol, isSnowZone);
          gl_FragColor = vec4(col, alpha);
        }
      `});this.virgaMesh=new bt(n,o),this.virgaMesh.frustumCulled=!1,this.scene.add(this.virgaMesh)}_buildValleyMistAndSpindrift(){this.mistGroup=new Gn,this.mistUniforms={uTime:{value:0},uIntensity:{value:0},uSunPower:{value:.5},uWindDir:{value:new we(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uExag:{value:this.state.exag}};const e=64,t=new Float32Array(e*e*3),n=new Float32Array(e*e),s=new Float32Array(e*e*2);for(let l=0;l<e;l++){const c=l/(e-1),u=(c-.5)*this.sizeY*.98;for(let d=0;d<e;d++){const f=d/(e-1),m=(f-.5)*this.sizeX*.98,g=l*e+d;t[g*3+0]=m,t[g*3+1]=0,t[g*3+2]=u,n[g]=this._sampleDemXZ(m,u),s[g*2+0]=f,s[g*2+1]=c}}const r=[];for(let l=0;l<e-1;l++)for(let c=0;c<e-1;c++){const u=l*e+c,d=u+1,f=u+e,m=f+1;r.push(u,f,m,u,m,d)}const o=new Dt;o.setAttribute("position",new ct(t,3)),o.setAttribute("aDemY0",new ct(n,1)),o.setAttribute("uv",new ct(s,2)),o.setIndex(r),[{heightAbove:.08,alpha:.24,scale:3.6,speed:.28,seed:2.1},{heightAbove:.22,alpha:.2,scale:2.8,speed:.36,seed:6.4},{heightAbove:.42,alpha:.16,scale:2.2,speed:.44,seed:11.7}].forEach(l=>{const c=new It({transparent:!0,depthWrite:!1,side:Gt,uniforms:{...this.mistUniforms,uHeightAbove:{value:l.heightAbove},uLayerAlpha:{value:l.alpha},uScale:{value:l.scale},uSpeed:{value:l.speed},uSeed:{value:l.seed}},vertexShader:`
          attribute float aDemY0;
          uniform float uExag;
          uniform float uHeightAbove;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevM;
          uniform float uZMinM;
          void main() {
            vUv = uv;
            vec3 pos = position;
            pos.y = aDemY0 * uExag + uHeightAbove;
            vElevM = uZMinM + aDemY0 * 1000.0;
            vec4 wp = modelMatrix * vec4(pos, 1.0);
            vWorldPos = wp.xyz;
            gl_Position = projectionMatrix * viewMatrix * wp;
          }
        `,fragmentShader:`
          precision highp float;
          uniform float uTime;
          uniform float uIntensity;
          uniform float uSunPower;
          uniform vec2 uWindDir;
          uniform float uWindSpeed;
          uniform float uRainSnowM;
          uniform float uLayerAlpha;
          uniform float uScale;
          uniform float uSpeed;
          uniform float uSeed;
          varying vec2 vUv;
          varying vec3 vWorldPos;
          varying float vElevM;

          float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float noise(vec2 p) {
            vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
          }
          float fbm(vec2 p) {
            float v = 0.0, a = 0.5;
            for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.03 + vec2(7.1, 3.9); a *= 0.5; }
            return v;
          }
          void main() {
            if (uIntensity < 0.03) discard;
            float camDist = length(vWorldPos - cameraPosition);
            float nearFade = smoothstep(0.35, 1.45, camDist);
            vec2 c = vUv * 2.0 - 1.0;
            float edge = 1.0 - smoothstep(0.45, 0.96, max(abs(c.x), abs(c.y)) * 0.55 + length(c) * 0.55);

            float isSnowZone = smoothstep(uRainSnowM - 100.0, uRainSnowM + 140.0, vElevM);
            // Stretch snow spindrift along wind direction; keep rain mist softly pooled in valley
            vec2 wPerp = vec2(-uWindDir.y, uWindDir.x);
            vec2 uvWind = vec2(dot(vUv, uWindDir), dot(vUv, wPerp));
            vec2 drift = vec2(uTime * uSpeed * (0.55 + 0.16 * uWindSpeed), 0.0);

            vec2 qRain = vUv * uScale - uWindDir * uTime * uSpeed * 0.45 + vec2(uSeed);
            float rainMist = smoothstep(0.36, 0.80, fbm(qRain));

            vec2 qSpin = vec2(uvWind.x * uScale * 0.85 - drift.x * 1.4, uvWind.y * uScale * 2.4) + vec2(uSeed);
            float spindrift = smoothstep(0.34, 0.78, fbm(qSpin));

            float n = mix(rainMist * 0.78, spindrift * 1.15, isSnowZone);
            float alpha = n * edge * nearFade * clamp(uIntensity * 0.85, 0.0, 1.0) * uLayerAlpha;
            if (alpha < 0.004) discard;

            vec3 mistCol = mix(vec3(0.40, 0.48, 0.57), vec3(0.72, 0.79, 0.86), 0.25 + 0.55 * uSunPower);
            vec3 spinCol = mix(vec3(0.68, 0.74, 0.82), vec3(0.94, 0.97, 1.00), 0.35 + 0.60 * uSunPower);
            gl_FragColor = vec4(mix(mistCol, spinCol, isSnowZone), alpha);
          }
        `});this.mistGroup.add(new bt(o,c))}),this.scene.add(this.mistGroup)}_buildRealisticNearRain(){const t=new Rn(1,1,1,1),n=new Ir;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(6e3*3),r=new Float32Array(6e3*4);for(let a=0;a<6e3;a++)s[a*3+0]=(Math.random()-.5)*3.4,s[a*3+1]=Math.random(),s[a*3+2]=(Math.random()-.5)*3.4,r[a*4+0]=Math.random(),r[a*4+1]=.78+Math.random()*.62,r[a*4+2]=.65+Math.random()*.9,r[a*4+3]=.65+Math.random()*.75;n.setAttribute("aBoxPos",new Kn(s,3)),n.setAttribute("aSeed",new Kn(r,4)),n.instanceCount=6e3,this.rainUniforms={uTime:{value:0},uIntensity:{value:0},uImmersion:{value:0},uExag:{value:this.state.exag},uWindDir:{value:new we(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new we(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCamFocus:{value:new I(0,1,0)},uSunPower:{value:.5}};const o=new It({transparent:!0,depthWrite:!1,side:Gt,uniforms:this.rainUniforms,vertexShader:`
        attribute vec3 aBoxPos;
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uImmersion;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        uniform vec3 uCamFocus;
        varying vec2 vUv;
        varying float vAlpha;

        void main() {
          vUv = uv;
          float active = step(aSeed.x, clamp(uIntensity * 0.95, 0.0, 1.0));
          if (active < 0.5 || uImmersion < 0.01 || uIntensity < 0.02) {
            vAlpha = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          // Swift realistic terminal velocity of alpine rain streaks!
          float boxW = 3.4;
          float boxH = 2.0;
          float t = fract(aBoxPos.y + uTime * (2.9 + 1.5 * aSeed.y));
          vec2 drift = uWindDir * uTime * (0.55 + 0.18 * uWindSpeed);
          float wx = mod(aBoxPos.x + drift.x - uCamFocus.x + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.x;
          float wz = mod(aBoxPos.z + drift.y - uCamFocus.z + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.z;
          float wy = uCamFocus.y + (0.62 - t) * boxH;
          vec3 center = vec3(wx, wy, wz);

          // Sample exact terrain height -> rain stops strictly at the glacier surface!
          vec2 demUv = clamp(center.xz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;
          float aboveGround = smoothstep(0.0, 0.06, center.y - groundY);

          // Rain strictly below Jennings rain-snow elevation
          float ptElevM = uZMinM + (center.y / max(uExag, 0.1)) * 1000.0;
          float rainZone = 1.0 - smoothstep(uRainSnowM - 70.0, uRainSnowM + 110.0, ptElevM);

          float camDist = length(center - cameraPosition);
          float distFade = smoothstep(0.14, 0.42, camDist) * (1.0 - smoothstep(1.9, 3.0, camDist));
          float fadeV = smoothstep(0.0, 0.08, t) * (1.0 - smoothstep(0.92, 1.0, t));

          // Velocity-aligned rain streak billboarded smoothly toward camera
          vec3 velDir = normalize(vec3(uWindDir.x * (0.045 * uWindSpeed), -1.0, uWindDir.y * (0.045 * uWindSpeed)));
          vec3 viewVec = normalize(cameraPosition - center);
          vec3 side = normalize(cross(velDir, viewVec));

          float streakLen = (0.055 + 0.055 * aSeed.z) * (0.85 + 0.25 * clamp(uIntensity, 0.0, 1.2));
          float streakW = (0.0022 + 0.0018 * aSeed.w) * (0.7 + 0.4 * camDist);

          vec3 worldPos = center + side * (position.x * streakW) - velDir * (position.y * streakLen);

          // Grazing backlight shimmer
          vAlpha = active * aboveGround * rainZone * distFade * fadeV * uImmersion * clamp(uIntensity * 0.48, 0.0, 0.44);
          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,fragmentShader:`
        precision mediump float;
        uniform float uSunPower;
        varying vec2 vUv;
        varying float vAlpha;
        void main() {
          if (vAlpha < 0.005) discard;
          // Smooth Gaussian cross-section across streak width + crisp droplet head tapering softly up the tail!
          float across = exp(-pow((vUv.x - 0.5) * 3.4, 2.0));
          float along = smoothstep(0.0, 0.18, vUv.y) * (1.0 - smoothstep(0.08, 1.0, vUv.y));
          float headGlint = (1.0 - smoothstep(0.06, 0.35, vUv.y)) * 0.45;
          float a = across * (along + headGlint) * vAlpha;
          if (a < 0.004) discard;
          vec3 col = mix(vec3(0.64, 0.76, 0.88), vec3(0.92, 0.96, 1.0), 0.30 + 0.65 * uSunPower);
          gl_FragColor = vec4(col, a);
        }
      `});this.rainLines=new bt(n,o),this.rainLines.frustumCulled=!1,this.scene.add(this.rainLines)}_makeSnowflakeAtlas(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=(r,o,a)=>{t.save(),t.translate(r+32,o+32),a(),t.restore()};n(0,0,()=>{[[0,0,14,.85],[-6,-4,11,.55],[7,-2,10,.52],[-2,7,10,.5],[5,6,9,.45]].forEach(([o,a,l,c])=>{const u=t.createRadialGradient(o,a,.5,o,a,l);u.addColorStop(0,`rgba(255,255,255,${c})`),u.addColorStop(.55,`rgba(232,242,255,${c*.45})`),u.addColorStop(1,"rgba(220,236,255,0)"),t.fillStyle=u,t.beginPath(),t.arc(o,a,l,0,Math.PI*2),t.fill()})}),n(64,0,()=>{const r=t.createRadialGradient(0,0,.5,0,0,14);r.addColorStop(0,"rgba(255,255,255,0.95)"),r.addColorStop(.35,"rgba(240,248,255,0.65)"),r.addColorStop(.75,"rgba(220,235,250,0.14)"),r.addColorStop(1,"rgba(210,230,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,14,0,Math.PI*2),t.fill()}),n(0,64,()=>{const r=t.createRadialGradient(0,0,1,0,0,22);r.addColorStop(0,"rgba(255,255,255,0.85)"),r.addColorStop(.45,"rgba(235,244,255,0.36)"),r.addColorStop(1,"rgba(220,235,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,255,255,0.42)",t.lineWidth=2,t.lineCap="round";for(let o=0;o<3;o++)t.beginPath(),t.moveTo(-14,0),t.lineTo(14,0),t.stroke(),t.rotate(Math.PI/3)}),n(64,64,()=>{const r=t.createRadialGradient(0,0,2,0,0,26);r.addColorStop(0,"rgba(250,253,255,0.48)"),r.addColorStop(.5,"rgba(235,244,255,0.28)"),r.addColorStop(.82,"rgba(225,238,252,0.08)"),r.addColorStop(1,"rgba(220,236,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,26,0,Math.PI*2),t.fill()});const s=new fu(e);return s.colorSpace=Ht,s}_buildRealisticSnow(){const s=new Float32Array(31500),r=new Float32Array(10500*4),o=new Float32Array(10500);for(let u=0;u<10500;u++){const d=u<7e3?1:0;s[u*3+0]=d?(Math.random()-.5)*4:(Math.random()-.5)*this.sizeX*.9,s[u*3+1]=Math.random(),s[u*3+2]=d?(Math.random()-.5)*4:(Math.random()-.5)*this.sizeY*.9,r[u*4+0]=Math.random(),r[u*4+1]=.45+Math.random()*.85,r[u*4+2]=.45+Math.pow(Math.random(),2.2)*1.45,r[u*4+3]=d,o[u]=Math.floor(Math.random()*4)+Math.random()*.99}const a=new Dt;a.setAttribute("position",new ct(s,3)),a.setAttribute("aSeed",new ct(r,4)),a.setAttribute("aVariant",new ct(o,1));const l=this._makeSnowflakeAtlas();this.snowUniforms={uTime:{value:0},uIntensity:{value:0},uImmersion:{value:0},uMidVisible:{value:0},uExag:{value:this.state.exag},uWindDir:{value:new we(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new we(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCamFocus:{value:new I(0,1.2,0)},uSunPower:{value:.5},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uFlakeTex:{value:l}};const c=new It({transparent:!0,depthWrite:!1,uniforms:this.snowUniforms,vertexShader:`
        attribute vec4 aSeed;
        attribute float aVariant;
        uniform float uTime;
        uniform float uIntensity;
        uniform float uImmersion;
        uniform float uMidVisible;
        uniform float uExag;
        uniform vec2 uWindDir;
        uniform float uWindSpeed;
        uniform float uRainSnowM;
        uniform float uZMinM;
        uniform float uZRangeKm;
        uniform vec2 uSizeXZ;
        uniform sampler2D uDemTex;
        uniform vec3 uCamFocus;
        uniform float uPixelRatio;
        varying float vAlpha;
        varying float vVariant;
        varying float vRot;

        void main() {
          float active = step(aSeed.x, clamp(uIntensity * 0.96, 0.0, 1.0));
          float isNear = aSeed.w;
          float scaleGate = isNear > 0.5 ? uImmersion : uMidVisible;
          if (active < 0.5 || scaleGate < 0.01 || uIntensity < 0.02) {
            vAlpha = 0.0;
            gl_PointSize = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          float t = fract(position.y + uTime * (isNear > 0.5 ? 0.22 : 0.14) * aSeed.y);

          // Multi-frequency turbulent 3D curl flutter (organic swirling snow!)
          float ph1 = aSeed.x * 61.7;
          float ph2 = aSeed.y * 37.3;
          vec2 flutter = vec2(
            sin(uTime * 1.65 + ph1 + t * 7.2) + 0.55 * cos(uTime * 2.9 + ph2),
            cos(uTime * 1.45 + ph2 + t * 6.8) + 0.55 * sin(uTime * 2.6 + ph1)
          ) * (isNear > 0.5 ? 0.095 : 0.18);

          vec3 p;
          if (isNear > 0.5) {
            float boxW = 4.0;
            float boxH = 2.4;
            vec2 drift = uWindDir * uTime * (0.20 + 0.08 * uWindSpeed);
            float wx = mod(position.x + drift.x - uCamFocus.x + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.x + flutter.x;
            float wz = mod(position.z + drift.y - uCamFocus.z + boxW * 0.5, boxW) - boxW * 0.5 + uCamFocus.z + flutter.y;
            float wy = uCamFocus.y + (0.58 - t) * boxH;
            p = vec3(wx, wy, wz);
          } else {
            float topY = 3.25 + max(0.0, (uExag - 1.3) * 1.3);
            float wy = mix(topY, 0.35, t);
            vec2 drift = uWindDir * t * (0.55 + 0.16 * uWindSpeed);
            float wx = mod(position.x + drift.x + flutter.x + 5.5, 11.0) - 5.5;
            float wz = mod(position.z + drift.y + flutter.y + 5.5, 11.0) - 5.5;
            p = vec3(wx, wy, wz);
          }

          // Stop snowflakes cleanly at the glacier / mountain terrain surface!
          vec2 demUv = clamp(p.xz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;
          float aboveGround = smoothstep(0.0, 0.07, p.y - groundY);

          // Snow ONLY exists above the live Jennings rain-snow elevation!
          float ptElevM = uZMinM + (p.y / max(uExag, 0.1)) * 1000.0;
          float snowZone = smoothstep(uRainSnowM - 95.0, uRainSnowM + 100.0, ptElevM);
          float inBlock = step(abs(p.x), 5.6) * step(abs(p.z), 5.6);

          float camDist = length(p - cameraPosition);
          float distFade = isNear > 0.5
            ? smoothstep(0.16, 0.55, camDist) * (1.0 - smoothstep(2.2, 3.4, camDist))
            : smoothstep(1.4, 3.2, camDist) * (1.0 - smoothstep(8.5, 12.0, camDist));

          float fadeV = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.88, 1.0, t));
          float opacity = isNear > 0.5 ? 0.78 : 0.42;
          vAlpha = active * scaleGate * aboveGround * inBlock * snowZone * distFade * fadeV * clamp(uIntensity * 0.95, 0.0, 1.0) * opacity;
          vVariant = floor(aVariant);
          vRot = uTime * (0.7 + fract(aVariant) * 1.4) + ph1;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;

          // Strictly realistic physical scaling — NO giant 22px floating balls from afar!
          float rawSz = isNear > 0.5
            ? (3.2 * aSeed.z * uPixelRatio) * (2.2 / max(-mv.z, 0.45))
            : (2.2 * aSeed.z * uPixelRatio) * (5.5 / max(-mv.z, 1.8));
          float maxPx = isNear > 0.5 ? (10.5 * uPixelRatio) : (3.6 * uPixelRatio);
          gl_PointSize = clamp(rawSz, 1.3 * uPixelRatio, maxPx) * step(0.008, vAlpha);
        }
      `,fragmentShader:`
        precision mediump float;
        uniform sampler2D uFlakeTex;
        uniform float uSunPower;
        varying float vAlpha;
        varying float vVariant;
        varying float vRot;
        void main() {
          if (vAlpha < 0.008) discard;
          // Rotate sprite gently for organic fluttering look
          vec2 p = gl_PointCoord - 0.5;
          float c = cos(vRot), s = sin(vRot);
          vec2 rp = vec2(p.x * c - p.y * s, p.x * s + p.y * c) + 0.5;
          if (rp.x < 0.0 || rp.x > 1.0 || rp.y < 0.0 || rp.y > 1.0) discard;

          float colIdx = mod(vVariant, 2.0);
          float rowIdx = floor(vVariant * 0.5);
          vec2 atlasUv = (rp + vec2(colIdx, rowIdx)) * 0.5;
          vec4 tex = texture2D(uFlakeTex, atlasUv);
          if (tex.a < 0.02) discard;

          vec3 col = mix(vec3(0.68, 0.76, 0.86), vec3(0.95, 0.97, 1.0), 0.30 + 0.65 * uSunPower);
          gl_FragColor = vec4(col, tex.a * vAlpha);
        }
      `});this.snowPoints=new du(a,c),this.snowPoints.frustumCulled=!1,this.scene.add(this.snowPoints)}_initCameraPresets(){const e=this._sampleDemXZ(1.15,-1.45),t=this._sampleDemXZ(2.55,-3.14);this.presets={block:{pos:new I(9.4,8.5,-10.3),target:new I(0,.55,.15),fov:38},webcam:{pos:new I(2.55,t*1.3+.14,-3.14),target:new I(2.35,t*1.3+.72,1.25),fov:52},onglacier:{pos:new I(1.15,e*1.3+.22,-1.45),target:new I(-1.35,e*1.3+.72,1.25),fov:50},flyover:{pos:new I(3.6,2.35,-5.2),target:new I(-.6,1.05,.8),fov:44},plateau:{pos:new I(-8.2,7.6,8.8),target:new I(-.6,1.05,.2),fov:38},top:{pos:new I(.05,17.5,-.8),target:new I(0,.4,0),fov:38}}}setExaggeration(e){this.state.exag=e;const t=this.terrainGeo.attributes.position,n=this.terrainGeo.attributes.aBaseElev;for(let a=0;a<t.count;a++)t.setY(a,n.getX(a)*e);t.needsUpdate=!0,this.terrainGeo.computeVertexNormals();const s=this.skirtGeo.attributes.position;for(let a=0;a<s.count;a++){const l=this.skirtBaseRim[a];l>=0&&s.setY(a,l*e)}if(s.needsUpdate=!0,this.smokeSharedUniforms.uExag.value=e,this.terrainUniforms.uExag.value=e,this.cloudUniforms.uExag.value=e,this.virgaUniforms.uExag.value=e,this.mistUniforms.uExag.value=e,this.rainUniforms.uExag.value=e,this.snowUniforms.uExag.value=e,this.ringGeo){const a=this.ringGeo.attributes.position,l=this.ringGeo.attributes.aBaseElev;for(let c=0;c<a.count;c++)a.setY(c,l.getX(c)*e);a.needsUpdate=!0,this.ringGeo.computeVertexNormals(),this.ringUniforms.uExag.value=e}this._syncCloudCeiling();const r=this._sampleDemXZ(1.15,-1.45);this.presets.onglacier.pos.y=r*e+.22,this.presets.onglacier.target.y=r*e+.72;const o=this._sampleDemXZ(2.55,-3.14);this.presets.webcam.pos.y=o*e+.14,this.presets.webcam.target.y=o*e+.68}_syncCloudCeiling(){const e=Math.min(1,this.state.precipMmH/2.2),t=Math.max(0,(this.state.exag-1.3)*1.35);this.cloudUniforms.uStormIntensity.value=e,this.virgaUniforms.uCloudTopY.value=3.55-e*.72+t}setMode(e){this.state.mode=e,this.terrainUniforms.uMode.value=e}setContours(e){this.state.contours=e,this.terrainUniforms.uContours.value=e?1:0}setShowSmoke(e){this.state.showSmoke=e,this.smokeGroup.visible=e,this._updateSolarAndAtmosphere()}setShowClouds(e){this.state.showClouds=e,this.cloudGroup.visible=e,this.skyUniforms.uShowClouds.value=e?1:0,this._updateSolarAndAtmosphere()}setShowSunArc(e){this.state.showSunArc=e,this.sunGroup.visible=e}setShowHorizon(e){this.state.showHorizon=e}setShowPrecip(e){this.state.showPrecip=e,this.virgaMesh.visible=e,this.mistGroup.visible=e,this.rainLines.visible=e,this.snowPoints.visible=e}setShowIsotherm(e){this.state.showIsotherm=e,this.terrainUniforms.uShowIsotherm.value=e?1:0}setShadows(e){this.state.shadows=e,this.sunLight.castShadow=e,this.renderer.shadowMap.enabled=e}setBoost(e){this.state.boost=e,this.terrainUniforms.uDepBoost.value=e}setCompareClean(e){this.state.compareClean=e,this._syncSurfaceUniforms(),this._updateSolarAndAtmosphere()}setMeteorology({hour:e,depCumFrac:t,rfWm2:n,plumeDensity:s,cloudCover:r,cloudLow:o,cloudMid:a,cloudHigh:l,sunTrans:c,precipMmH:u,rainSnowM:d,snowLineM:f,snowPackMm:m,windSpeed:g,windBearingDeg:_,swIn:p,lwIn:h,wetFrac:w,totalDepMgM2:b}){this.state.hour=e,this.state.depProgress=t,this.state.rfWm2=n??0,this.state.plumeDensity=s,this.state.cloudCover=r,this.state.cloudLow=o??r,this.state.cloudMid=a??r*.85,this.state.cloudHigh=l??r*.6,this.state.sunTrans=c??.85,this.state.precipMmH=u,this.state.rainSnowM=d,this.state.snowLineM=f??d,this.state.snowPackMm=m,this.state.windSpeed=g,this.state.windBearingDeg=_,this.state.swIn=p,this.state.lwIn=h,this.state.wetFrac=w,this.state.totalDepMgM2=b;const S=(_+180)*Math.PI/180,T=Math.sin(S),A=-Math.cos(S);this.terrainUniforms.uWindDir.value.set(T,A),this.skyUniforms.uWindDir.value.set(T,A),this.smokeSharedUniforms.uWindDir.value.set(T,A),this.cloudUniforms.uWindDir.value.set(T,A),this.virgaUniforms.uWindDir.value.set(T,A),this.mistUniforms.uWindDir.value.set(T,A),this.rainUniforms.uWindDir.value.set(T,A),this.snowUniforms.uWindDir.value.set(T,A),this.smokeSharedUniforms.uDensity.value=s,this.smokeSharedUniforms.uWetFrac.value=w,this.cloudUniforms.uCloudCover.value=r,this.cloudUniforms.uCloudLow.value=this.state.cloudLow,this.cloudUniforms.uCloudMid.value=this.state.cloudMid,this.cloudUniforms.uWindSpeed.value=g;const C=Math.min(1.5,u/2);this.virgaUniforms.uIntensity.value=C,this.virgaUniforms.uWindSpeed.value=g,this.virgaUniforms.uRainSnowM.value=d,this.mistUniforms.uIntensity.value=C,this.mistUniforms.uWindSpeed.value=g,this.mistUniforms.uRainSnowM.value=d,this.rainUniforms.uIntensity.value=C,this.rainUniforms.uWindSpeed.value=g,this.rainUniforms.uRainSnowM.value=d,this.snowUniforms.uIntensity.value=C,this.snowUniforms.uWindSpeed.value=g,this.snowUniforms.uRainSnowM.value=d,this._syncCloudCeiling(),this._syncSurfaceUniforms(),this._updateSolarAndAtmosphere()}_syncSurfaceUniforms(){this.terrainUniforms.uDepCumFrac.value=this.state.compareClean?0:this.state.depProgress,this.terrainUniforms.uRfNorm.value=this.state.compareClean?0:Math.min(1,Math.max(0,this.state.rfWm2/52)),this.terrainUniforms.uRainSnowM.value=this.state.rainSnowM,this.terrainUniforms.uSnowLineM.value=this.state.compareClean?3600:this.state.snowLineM,this.terrainUniforms.uSnowPackMm.value=this.state.compareClean?0:this.state.snowPackMm,this.terrainUniforms.uRainIntensity.value=Math.min(1.5,this.state.precipMmH/2),this.ringUniforms&&(this.ringUniforms.uSnowLineM.value=this.terrainUniforms.uSnowLineM.value,this.ringUniforms.uSnowPackMm.value=this.terrainUniforms.uSnowPackMm.value)}_updateSolarAndAtmosphere(){const e=this.state.hour,t=Math.max(-1.15,Math.min(1.15,(e-13.5)/7.1)),n=180+t*110,s=Math.cos(Math.max(-1,Math.min(1,t))*Math.PI*.5)*47-(Math.abs(t)>1?8:0),r=Math.max(9,s),o=n*Math.PI/180,a=Math.max(-6,s)*Math.PI/180,l=r*Math.PI/180;this._sunDir.set(Math.cos(a)*Math.sin(o),Math.sin(a),-Math.cos(a)*Math.cos(o)).normalize();const c=22;this.sunLight.position.set(c*Math.cos(l)*Math.sin(o),c*Math.sin(l),-c*Math.cos(l)*Math.cos(o)),this.smokeSharedUniforms.uSunDir.value.copy(this._sunDir),this.cloudUniforms.uSunDir.value.copy(this._sunDir),this.skyUniforms.uSunDir.value.copy(this._sunDir);const u=Math.max(0,Math.min(1,this.state.swIn/760)),d=Math.max(.05,Math.min(1,this.state.sunTrans??u)),f=Math.max(0,Math.min(1,(s+5)/14)),m=Math.max(0,1-Math.abs(s-3)/10)*f,g=this.state.showSmoke?this.state.plumeDensity:0,_=this.state.showClouds?this.state.cloudCover:0;this.skyUniforms.uDaylight.value=f,this.skyUniforms.uTwilight.value=m,this.skyUniforms.uSmoke.value=g,this.skyUniforms.uCloud.value=_,this.skyUniforms.uCloudMid.value=this.state.showClouds?this.state.cloudMid:0,this.skyUniforms.uCloudHigh.value=this.state.showClouds?this.state.cloudHigh:0,this.skyUniforms.uSwNorm.value=d,this.cloudUniforms.uDaylight.value=f,this.cloudUniforms.uTwilight.value=m,this.cloudUniforms.uSmoke.value=g;const p=7.4,h=Math.max(1,s*.82)*Math.PI/180;this.sunOrb.position.set(p*Math.cos(h)*Math.sin(o),.55+p*Math.sin(h)*.62,-p*Math.cos(h)*Math.cos(o)),this.sunOrbUniforms.uSunTrans.value=d,this.sunOrbUniforms.uSmoke.value=g,this.sunOrbUniforms.uCloud.value=_,this.sunOrbUniforms.uDaylight.value=f,this.sunOrbUniforms.uTwilight.value=m,this.sunArcMat.opacity=.08+.18*f*d;const w=this.state.showClouds?Math.max(this.state.cloudLow,this.state.cloudMid):0;this.terrainUniforms.uSmokeHaze.value=this.state.compareClean?0:g,this.terrainUniforms.uDaylight.value=f,this.terrainUniforms.uSunDir.value.copy(this._sunDir),this.terrainUniforms.uCloudShadowAmt.value=w,this.ringUniforms&&(this.ringUniforms.uSmokeHaze.value=this.terrainUniforms.uSmokeHaze.value,this.ringUniforms.uDaylight.value=f,this.ringUniforms.uSunDir.value.copy(this._sunDir),this.ringUniforms.uCloudShadowAmt.value=w,this.ringUniforms.uWindDir.value.copy(this.terrainUniforms.uWindDir.value));const b=new Ae(16769162),S=new Ae(16749624),T=new Ae(16747566),A=new Ae(15129800),C=new Ae(5406404),F=b.clone().lerp(A,_*.48).lerp(S,m*.72).lerp(T,g*.58).lerp(C,1-f);this.sunLight.color.copy(F);const M=1.45+2.15*Math.pow(Math.max(u,f*.24),.65);this.sunLight.intensity=.34+(M-.34)*f;const y=new Ae(10934527),R=new Ae(13161698),V=new Ae(14263916),z=new Ae(1979742),X=y.clone().lerp(R,_*.58).lerp(V,g*.48);this.hemiLight.color.copy(z.clone().lerp(X,f));const j=new Ae(7034946).lerp(new Ae(4936542),_*.5),Y=new Ae(725536);this.hemiLight.groundColor.copy(Y.clone().lerp(j,f)),this.hemiLight.intensity=.16+(.68+.36*Math.sqrt(Math.max(u,.15))+.16*_)*f,this.renderer.toneMappingExposure=.84+.32*f,this.floorMesh.material.color.copy(new Ae(396052).lerp(new Ae(2569802),f));const q=f*(.38+.62*u);this.smokeSharedUniforms.uSunPower.value=Math.max(.08,q),this.cloudUniforms.uSunPower.value=Math.max(.08,q),this.virgaUniforms.uSunPower.value=Math.max(.12,q),this.mistUniforms.uSunPower.value=Math.max(.12,q),this.rainUniforms.uSunPower.value=Math.max(.14,q),this.snowUniforms.uSunPower.value=Math.max(.18,q);const H=new Ae(330260),se=new Ae(7773380),ee=new Ae(8161946),pe=new Ae(11048058),Ce=se.clone().lerp(ee,_*.7).lerp(pe,Math.min(1,g*.85));this.scene.fog.color.copy(H.clone().lerp(Ce,f));const Oe=Math.min(.018,this.state.precipMmH*.0045);this.scene.fog.density=.0045+Math.pow(g,.85)*.022+_*.0032+Oe}flyTo(e){const t=this.presets[e];t&&(this._camAnim={t:0,dur:.85,fromPos:this.camera.position.clone(),toPos:t.pos.clone(),fromTarget:this.controls.target.clone(),toTarget:t.target.clone(),fromFov:this.camera.fov,toFov:t.fov||38})}getNorthAngleDeg(){const e=new I;return this.camera.getWorldDirection(e),Math.atan2(e.x,-e.z)*180/Math.PI}projectLandmark(e){const t=new I(e.x,e.y0*this.state.exag+.05,e.z);return t.project(this.camera),t.z>1||t.z<-1||t.x<-1.08||t.x>1.08||t.y<-1.08||t.y>1.08?null:{x:(t.x*.5+.5)*this.width,y:(-t.y*.5+.5)*this.height,depth:t.z}}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/Math.max(this.height,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!1),this.snowUniforms.uPixelRatio.value=Math.min(window.devicePixelRatio||1,2)}capturePNG(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}update(e){if(this._camAnim){this._camAnim.t+=e/this._camAnim.dur;const d=Math.min(1,this._camAnim.t),f=1-Math.pow(1-d,3);this.camera.position.lerpVectors(this._camAnim.fromPos,this._camAnim.toPos,f),this.controls.target.lerpVectors(this._camAnim.fromTarget,this._camAnim.toTarget,f),this.camera.fov=this._camAnim.fromFov+(this._camAnim.toFov-this._camAnim.fromFov)*f,this.camera.updateProjectionMatrix(),d>=1&&(this._camAnim=null)}else if(this.state.spin){const d=this.camera.position.clone().sub(this.controls.target);d.applyAxisAngle(new I(0,1,0),e*.15),this.camera.position.copy(this.controls.target).add(d)}this.controls.update(),this.skyDome.position.copy(this.camera.position);const t=new I;this.camera.getWorldDirection(t);const n=this._sampleDemXZ(this.camera.position.x,this.camera.position.z)*this.state.exag,s=Math.max(0,this.camera.position.y-n),r=this.camera.position.distanceTo(this.controls.target),o=(d,f,m)=>{const g=Math.max(0,Math.min(1,(m-d)/(f-d)));return g*g*(3-2*g)},a=o(5.4,1.8,s)*o(8.2,3.6,r),l=o(10.5,5.2,r);this.rainUniforms.uImmersion.value=a,this.snowUniforms.uImmersion.value=a,this.snowUniforms.uMidVisible.value=l,this.sunOrbUniforms.uArcVis.value=1-o(.35,.85,a),this.sunArcLine.visible=this.state.showSunArc&&a<.72;const c=this.camera.position.clone().addScaledVector(t,Math.min(1.45,r*.45));if(this.rainUniforms.uCamFocus.value.copy(c),this.snowUniforms.uCamFocus.value.copy(c),this.ringMesh){const d=o(10.2,6.8,r),f=this.state.showHorizon?1:d;this.ringUniforms.uRingAlpha.value=f,this.ringMesh.visible=f>.02,this.skirtMesh.visible=f<.72,this.floorMesh.visible=f<.55}const u=.55+.16*this.state.windSpeed;this.skyUniforms.uTime.value+=e*u,this.terrainUniforms.uTime.value+=e*u,this.ringUniforms&&(this.ringUniforms.uTime.value+=e*u),this.smokeSharedUniforms.uTime.value+=e*u,this.cloudUniforms.uTime.value+=e*(.45+.12*this.state.windSpeed),this.virgaUniforms.uTime.value+=e,this.mistUniforms.uTime.value+=e,this.rainUniforms.uTime.value+=e,this.snowUniforms.uTime.value+=e,this.renderer.render(this.scene,this.camera)}}const es="v2_obs_20261125",wm=334e3,Tm=document.getElementById("loader"),Qs=document.getElementById("loaderSub"),ks=document.getElementById("sceneCanvas"),sl=document.getElementById("labelsLayer"),Am=document.getElementById("compassSvg"),rl=document.getElementById("compassN"),ts=document.getElementById("legendBody");async function Cm(){Qs.textContent="Chargement du MNE Athabasca + couronne Rocheuses 35 km (GLO-30)…";const[i,e,t]=await Promise.all([fetch(`./data/meta.json?v=${es}`,{cache:"no-store"}),fetch(`./data/dem_320.bin?v=${es}`),fetch(`./data/dem_ring_256.bin?v=${es}`).catch(()=>null)]);if(!i.ok||!e.ok)throw new Error("Impossible de charger les données du glacier.");const n=await i.json(),s=new Uint16Array(await e.arrayBuffer()),r=t&&t.ok?new Uint16Array(await t.arrayBuffer()):null;Qs.textContent="Chargement de l'imagerie Sentinel-2 L2A (10 m)…";const o=new Mu,[a,l]=await Promise.all([o.loadAsync(`./data/s2_rgb_1536.jpg?v=${es}`),o.loadAsync(`./data/s2_mask_768.png?v=${es}`)]);return{meta:n,demU16:s,ringU16:r,rgbTex:a,maskTex:l}}function pt(i,e,t){return i+(e-i)*t}function Rm(i,e,t){let n=(e-i+540)%360-180;return(i+n*t+360)%360}function Yl(i,e,t=2180,n=6.5){const r=2.6-.019*Math.max(20,Math.min(100,e));return t+(i-r)/n*1e3}function Pm(i,e,t){const n=i+273.15,r=6.1094*Math.exp(17.625*i/(i+243.04))*(e/100),o=1.24*Math.pow(Math.max(r,.5)/n,1/7);return Math.min(.99,o*(1+.22*t*t))*5670374e-14*Math.pow(n,4)}function Dm(i,e="2023-08-18"){const t=Number((e||"2023-08-18").slice(5,7))||8,n={1:230,2:340,3:520,4:690,5:840,6:900,7:870,8:800,9:640,10:450,11:280,12:205},s={1:4.1,2:5,3:6,4:7,5:7.9,6:8.3,7:8,8:7.2,9:6.2,10:5.2,11:4.3,12:3.9},r=t>=4&&t<=10?13.8:12.8,o=s[t]||7.2,a=(i-r)/o;return Math.abs(a)>=1?0:(n[t]||800)*Math.pow(Math.cos(a*Math.PI*.5),1.25)}const Lm={1:"janv.",2:"févr.",3:"mars",4:"avr.",5:"mai",6:"juin",7:"juil.",8:"août",9:"sept.",10:"oct.",11:"nov.",12:"déc."};function Um(i){return i===0?"Ciel dégagé":i===1?"Peu nuageux":i===2?"Partiellement nuageux":i===3?"Ciel couvert":i===45||i===48?"Brouillard / nuages bas":i>=51&&i<=57?"Bruine fine":i>=61&&i<=67?"Pluie en vallée":i>=71&&i<=77?"Chutes de neige":i>=80&&i<=82?"Averses de pluie":i===85||i===86?"Averses de neige":i>=95?"Orage alpin":""}function Im(i){let e=0;for(let t=0;t<i.hours.length;t++){const n=i.hours[t],s=n.deltaAlpha??0,r=n.sw??0,o=Math.max(0,-s*r);n.rf=Number(o.toFixed(1));const a=(n.ta??0)>-2?o*3600/wm:0;e+=a,n.extraMeltMm=Number(e.toFixed(2))}}async function Nm(){var b;const e=await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.1955&longitude=-117.2555&elevation=2180&past_days=1&forecast_days=2&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall,shortwave_radiation,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&timezone=America%2FEdmonton",{cache:"no-store"});if(!e.ok)throw new Error(`API Open-Meteo (${e.status})`);const n=(await e.json()).hourly,s=n.time,r=[...new Set(s.map(S=>S.slice(0,10)))],o=r.map(S=>`${Number(S.slice(8,10))} ${Lm[Number(S.slice(5,7))]||S.slice(5,7)}`),a=new Intl.DateTimeFormat("sv-SE",{timeZone:"America/Edmonton",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",hour12:!1}).formatToParts(new Date),l=Object.fromEntries(a.map(S=>[S.type,S.value])),c=`${l.year}-${l.month}-${l.day}T${l.hour}:00`;let u=s.indexOf(c);u<0&&(u=Math.min(s.length-1,24));const d=Number(s[0].slice(5,7))||8,f=n.temperature_2m.reduce((S,T)=>S+Number(T??0),0)/Math.max(1,n.temperature_2m.length),m=(d>=11||d<=4)&&f<0;let g=m?14:0,_=m?1840:3480,p=0;const h=s.map((S,T)=>{const A=S.slice(0,10),C=r.indexOf(A),F=Number(S.slice(11,13)),M=Number(n.temperature_2m[T]??0),y=Number(n.relative_humidity_2m[T]??70),R=Number(n.wind_speed_10m[T]??3),V=Math.round(Number(n.wind_direction_10m[T]??245))%360,z=Number(n.shortwave_radiation[T]??0),X=Math.max(0,Math.min(1,Number(n.cloud_cover[T]??30)/100)),j=Math.max(0,Math.min(1,Number(n.cloud_cover_low[T]??0)/100)),Y=Math.max(0,Math.min(1,Number(n.cloud_cover_mid[T]??0)/100)),q=Math.max(0,Math.min(1,Number(n.cloud_cover_high[T]??0)/100)),H=Number(n.weather_code[T]??0),se=Number(n.precipitation[T]??0),ee=Number(n.snowfall[T]??0),pe=Pm(M,y,X),Ce=Yl(M,y,2180,6.5),Oe=Math.max(0,Math.min(1,(3456-Ce)/1491)),Z=Math.max(se*Oe,ee*1.4);p+=Math.max(0,se-Z);const re=Math.max(0,(M-1)*.14+Math.max(0,z-220)*.0018);if(g=Math.max(0,Math.min(30,g+Z-re)),Z>=.08){const xe=Math.max(1840,Math.min(3450,Ce-60));_=g>=.35?Math.min(_,xe):.55*_+.45*xe}else g<=.05?_=3480:re>.05&&(_=Math.min(3480,_+re*75));return{t:T,dayIdx:C,date:A,dayLabel:o[C],h:F,ta:Number(M.toFixed(1)),rh:Number(y.toFixed(0)),u:Number(R.toFixed(1)),wdir:V,sw:Math.round(z),lw:Math.round(pe),cloud:Number(X.toFixed(2)),clLow:Number(j.toFixed(2)),clMid:Number(Y.toFixed(2)),clHigh:Number(q.toFixed(2)),wmo:H,plume:0,pm25:0,daod:0,precip:Number(se.toFixed(2)),snMm:Number((ee*1.4).toFixed(2)),rainSnowM:Math.round(Ce),snowLineM:Math.round(_),snowFrac:Number(Oe.toFixed(2)),snowPackMm:Number(g.toFixed(1)),rainCumMm:Number(p.toFixed(1)),dryRate:0,wetRate:0,depRate:0,depCum:0,wetFrac:0,deltaAlpha:0,rf:0,extraMeltMm:0}}),w={id:"live-now",label:"En direct · Athabasca",tag:"Météo réelle",isLive:!0,exactNas:!1,nDays:r.length,dayLabels:o,subtitle:"Météo réelle en direct (Open-Meteo, 2 180 m, heure locale d'Alberta) : nuages bas/moyens/hauts, pluie/neige, vent et solaire.",windBearingDeg:((b=h[u])==null?void 0:b.wdir)??245,totalDepMgM2:0,provenance:"Météo horaire en temps réel Open-Meteo pour le glacier Athabasca (52,1955° N, 117,2555° O, 2 180 m, America/Edmonton).",hours:h};return{nowIdx:u,episode:w}}function zs(i,e){const t=i.hours.length-1,n=Math.max(0,Math.min(t,e)),s=Math.floor(n),r=Math.min(t,s+1),o=n-s,a=i.hours[s],l=i.hours[r],c=a.h+o,u=pt(a.depCum??0,l.depCum??0,o),d=i.totalDepMgM2||i.dailyDepMgM2||0,f=d>.05?Math.log1p(u/16)/Math.log1p(Math.max(d,45)/16):0;return{t:n,dayIdx:a.dayIdx??0,dayLabel:a.dayLabel||a.date||"",date:a.date||"",hour:c>=24?c-24:c,depCum:u,depRate:pt(a.depRate??0,l.depRate??0,o),dryRate:pt(a.dryRate??0,l.dryRate??0,o),wetRate:pt(a.wetRate??0,l.wetRate??0,o),depCumFrac:f,deltaAlpha:pt(a.deltaAlpha??0,l.deltaAlpha??0,o),rf:pt(a.rf??0,l.rf??0,o),extraMeltMm:pt(a.extraMeltMm??0,l.extraMeltMm??0,o),pm25:a.pm25==null||l.pm25==null?null:pt(a.pm25,l.pm25,o),daod:a.daod==null||l.daod==null?null:pt(a.daod,l.daod,o),sw:pt(a.sw??0,l.sw??0,o),lw:pt(a.lw??300,l.lw??300,o),cloud:pt(a.cloud??.2,l.cloud??.2,o),clLow:pt(a.clLow??a.cloud??.2,l.clLow??l.cloud??.2,o),clMid:pt(a.clMid??(a.cloud??.2)*.85,l.clMid??(l.cloud??.2)*.85,o),clHigh:pt(a.clHigh??(a.cloud??.2)*.6,l.clHigh??(l.cloud??.2)*.6,o),wmo:a.wmo??0,ta:pt(a.ta??4,l.ta??4,o),rh:pt(a.rh??70,l.rh??70,o),u:pt(a.u??4,l.u??4,o),wdir:Rm(a.wdir??i.windBearingDeg??250,l.wdir??i.windBearingDeg??250,o),plume:pt(a.plume??.3,l.plume??.3,o),precip:pt(a.precip??0,l.precip??0,o),rainSnowM:pt(a.rainSnowM??2600,l.rainSnowM??2600,o),snowLineM:pt(a.snowLineM??a.rainSnowM??2600,l.snowLineM??l.rainSnowM??2600,o),snowPackMm:pt(a.snowPackMm??a.snowCumMm??0,l.snowPackMm??l.snowCumMm??0,o),wetFrac:pt(a.wetFrac??0,l.wetFrac??0,o)}}function Fm(i,e,t){if(t)return"Laboratoire météo manuel";const n=Um(e.wmo);return i==="live-now"?`${n||"Météo en direct"} · Nuages ${Math.round(e.cloud*100)} %`:e.hour<6||e.hour>=21.5?e.wetRate>=2?"Lessivage nocturne intense":e.precip>=.4?e.rainSnowM<2350?"Neige nocturne":"Pluie nocturne · neige en altitude":e.pm25!==null&&e.pm25>=50?`Fumée nocturne (${Math.round(e.pm25)} µg/m³)`:e.cloud>.65?"Nuit alpine couverte":"Nuit alpine étoilée":e.precip>=.45?e.wetRate>=1.5?"Lessivage humide (EC+OM)":e.rainSnowM<=2280?"Neige jusqu'au bas du glacier":`Pluie · Neige > ${Math.round(e.rainSnowM)} m`:i==="2024-07-22_29"&&e.plume>.72?"Panache illustratif Jasper":e.pm25!==null&&e.pm25<2&&(e.daod??0)<.02?e.snowPackMm>=2.5?`${n||"Air pur"} · neige fraîche`:`${n||"Air alpin limpide"}`:e.pm25!==null&&e.pm25>=80?`Panache extrême · ${Math.round(e.pm25)} µg/m³`:e.plume>.55?"Fumée dense · dépôt sec":e.pm25!==null&&e.pm25>=8?`Brume de feux · ${n||"dépôt sec"}`:e.snowPackMm>=3&&e.ta>4?"Fonte de la neige fraîche":n||"Évolution météo"}function Hs(i){const e=Math.floor(i)%24,t=Math.floor((i-Math.floor(i))*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function lt(i,e=1){return i.toFixed(e).replace(".",",")}const al={"2023-08-17_24":36.5,"2023-06-11_18":33,"2023-08-26_0902":132,"2021-08-12_19":59.5,"2024-07-22_29":80.5,"2018-08-21_28":83.5},ol={"2023-08-17_24":{dot:"amber",title:"Août 2023 · 17–24",sub:"198,6 mg m⁻² · NAS + Webcam"},"2023-06-11_18":{dot:"hot",title:"Juin 2023 · 11–18",sub:"PM2,5 375 + Blizzard · NAS"},"2023-08-26_0902":{dot:"amber",title:"Fin août 2023 · 26–2",sub:"85,4 mg m⁻² · NAS + Webcam"},"2021-08-12_19":{dot:"amber",title:"Août 2021 · 12–19",sub:"Record sec · ΔAOD 1,33"},"2024-07-22_29":{dot:"hot",title:"Juil. 2024 · Jasper",sub:"ERA5 réel + 144 webcams"},"2018-08-21_28":{dot:"",title:"Août 2018 · 21–28",sub:"AWS réelle + NAS (143,9 mg)"},"live-now":{dot:"live",title:"En direct · Athabasca",sub:"Open-Meteo temps réel"}};function Om(i,e,t,n,s,r=2180,o=6.5){i.clearRect(0,0,e,t);const a=38,l=44,c=10,u=20,d=e-a-l,f=t-c-u,m=1850,g=3520,_=-12,p=20,h=X=>c+(1-(X-m)/(g-m))*f,w=X=>a+(X-_)/(p-_)*d,b=Math.max(c,Math.min(c+f,h(n.rainSnowM)));i.fillStyle="rgba(125, 211, 252, 0.10)",i.fillRect(a,c,d,Math.max(0,b-c)),i.fillStyle="rgba(59, 130, 246, 0.08)",i.fillRect(a,b,d,Math.max(0,c+f-b)),i.strokeStyle="rgba(186, 218, 255, 0.11)",i.lineWidth=1,i.fillStyle="#8ea3bc",i.font="500 9.5px Inter, sans-serif",i.textAlign="right",i.textBaseline="middle",[2e3,2500,3e3,3500].forEach(X=>{const j=h(X);i.beginPath(),i.moveTo(a,j),i.lineTo(a+d,j),i.stroke(),i.fillText(`${X}`,a-4,j)});const S=w(0);i.save(),i.setLineDash([3,3]),i.strokeStyle="rgba(226, 240, 255, 0.25)",i.beginPath(),i.moveTo(S,c),i.lineTo(S,c+f),i.stroke(),i.restore(),i.textAlign="center",i.textBaseline="top",[-10,0,10,20].forEach(X=>{i.fillStyle=X===0?"#cbd5e1":"#7c91ab",i.fillText(`${X}°`,w(X),c+f+4)});const T=a+d+6,A=l-10,C=10,F=s?3600:n.snowLineM,M=s?0:1-Math.exp(-Math.max(0,n.snowPackMm)/2.6);for(let X=0;X<C;X++){const j=1965+X/C*1491,Y=1965+(X+1)/C*1491,q=.5*(j+Y),H=q<2550?1.25:.85,se=q>F?M*.88:0,ee=s?0:Math.max(0,n.rf*H*(1-se)),pe=Math.min(1,ee/52),Ce=h(Y),Oe=Math.max(1,h(j)-Ce-1.5);i.fillStyle="rgba(255, 255, 255, 0.05)",i.fillRect(T,Ce,A,Oe),pe>.01&&(i.fillStyle=pe>.6?"#fb923c":pe>.25?"#f97316":"#c2410c",i.fillRect(T,Ce,Math.max(2,pe*A),Oe))}i.fillStyle="#fdba74",i.textAlign="center",i.textBaseline="top",i.fillText("RF",T+A*.5,c+f+4),n.rainSnowM>=m&&n.rainSnowM<=g&&(i.save(),i.setLineDash([4,3]),i.strokeStyle="#38bdf8",i.lineWidth=1.6,i.beginPath(),i.moveTo(a,b),i.lineTo(a+d,b),i.stroke(),i.restore(),i.fillStyle="#7dd3fc",i.textAlign="left",i.textBaseline=b>c+14?"bottom":"top",i.fillText(`Neige > ${Math.round(n.rainSnowM)} m`,a+4,b+(b>c+14?-3:3)));const y=n.ta-o*((m-r)/1e3),R=n.ta-o*((g-r)/1e3);i.strokeStyle="#fbbf24",i.lineWidth=2,i.beginPath(),i.moveTo(Math.max(a,Math.min(a+d,w(y))),h(m)),i.lineTo(Math.max(a,Math.min(a+d,w(R))),h(g)),i.stroke();const V=Math.max(a,Math.min(a+d,w(n.ta))),z=h(r);i.fillStyle="#fde047",i.beginPath(),i.arc(V,z,3.2,0,Math.PI*2),i.fill(),i.strokeStyle="#070b11",i.lineWidth=1.2,i.stroke()}async function Bm(){try{let Yn=function(D,ge="small"){if(!D)return"";const G=D.lastIndexOf("/");return G<0?"":`${dt}/${D.slice(0,G)}/${ge}/${D.slice(G+1)}`},pn=function(D){return D?`https://www.skaping.com/columbiaicefield?archives=${btoa(String(D)).replace(/=+$/,"")}`:"https://www.skaping.com/columbiaicefield"},ui=function(D){if(!D||Un.has(D))return;Un.size>48&&Un.delete(Un.keys().next().value);const ge=new Image;ge.src=D,Un.set(D,ge)},hi=function(D,ge){if(!yt)return;const G=Math.max(0,Math.min(D.hours.length-1,Math.round(ge))),ht=`${D.id}:${G}`;if(ht===qe)return;qe=ht;const Qe=D.hours[G];if(D.isLive){ae.textContent="En direct",Ke.classList.add("dimmed"),L.textContent="Caméra Columbia Icefield en hibernation hivernale (archives 2019–2024 disponibles sur les autres séquences).",L.classList.remove("hidden"),W.href="https://www.skaping.com/columbiaicefield",Lt="";return}if(!D.hasWebcam){ae.textContent=Qe.dayLabel,Ke.removeAttribute("src"),L.textContent="Archives Skaping disponibles dès juin 2019 (août 2018 antérieur).",L.classList.remove("hidden"),W.href="https://www.skaping.com/columbiaicefield",Lt="";return}if(Qe.cam){const Mt=Yn(Qe.cam,"small");Lt=Yn(Qe.cam,"large"),Zt=pn(Qe.camTs),ae.textContent=`${Qe.dayLabel} · ${String(Qe.h).padStart(2,"0")}:00`,W.href=Zt,Ke.classList.remove("dimmed"),L.classList.add("hidden");const ot=new Image;ot.onload=()=>{qe===ht&&(Ke.src=Mt)},ot.src=Mt;for(let tt=1;tt<=2;tt++){const ft=D.hours[G+tt];ft&&ft.cam&&ui(Yn(ft.cam,"small"))}}else ae.textContent=`${Qe.dayLabel} · ${String(Qe.h).padStart(2,"0")}:00 (Nuit)`,Ke.classList.add("dimmed"),L.textContent="Nuit en montagne · prochaine image dès 05:00 MDT",L.classList.remove("hidden")},di=function(D){yt=D,ne.classList.toggle("hidden",!D),Te.classList.toggle("active-cam",D),Te.setAttribute("aria-pressed",D?"true":"false"),D&&(qe="",hi(S.episodes[R],V))},In=function(){Lt&&(de.src=Lt,he.textContent=`Webcam Columbia Icefield — ${ae.textContent} MDT`,Ne.href=Zt,K.classList.remove("hidden"))},Gi=function(){if(!ne.style.left&&!ne.style.top)return;const D=ne.getBoundingClientRect(),ge=Math.max(8,window.innerWidth-D.width-8),G=Math.max(8,window.innerHeight-D.height-8);ne.style.left=`${Math.max(8,Math.min(ge,parseFloat(ne.style.left)||D.left))}px`,ne.style.top=`${Math.max(8,Math.min(G,parseFloat(ne.style.top)||D.top))}px`},k=function(){cn&&cn.state!=="inactive"&&cn.stop(),U&&(clearInterval(U),U=null),Vi.classList.remove("recording"),Wi.textContent="Clip"},N=function(){if(cn&&cn.state==="recording"){k();return}if(!ks.captureStream||typeof MediaRecorder>"u"){alert("L'enregistrement vidéo direct n'est pas pris en charge par ce navigateur.");return}const ge=["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(ht=>MediaRecorder.isTypeSupported(ht))||"",G=ks.captureStream(30);x=[],cn=new MediaRecorder(G,ge?{mimeType:ge,videoBitsPerSecond:6e6}:{videoBitsPerSecond:6e6}),cn.ondataavailable=ht=>{ht.data&&ht.data.size>0&&x.push(ht.data)},cn.onstop=()=>{const ht=ge.includes("mp4")?"mp4":"webm",Qe=new Blob(x,{type:ge||"video/webm"}),Mt=URL.createObjectURL(Qe),ot=document.createElement("a"),tt=S.episodes[R],ft=zs(tt,V);ot.download=`athabasca_3d_v2_${ft.date}_${Hs(ft.hour).replace(":","h")}.${ht}`,ot.href=Mt,ot.click(),setTimeout(()=>URL.revokeObjectURL(Mt),5e3)},cn.start(),z||vn(!0),B=0,Vi.classList.add("recording"),Wi.textContent="0s",U=setInterval(()=>{B++,Wi.textContent=`${B}s`,B>=20&&k()},1e3)},te=function(D){H=D,document.body.classList.toggle("present-mode",D),ce.classList.toggle("hidden",!D),D&&(E.classList.add("hidden"),Ya.classList.add("hidden"))},Rt=function(){const D=S.episodes[R];pe.max=String(D.hours.length-1);const ge=ol[R]||{dot:"amber",title:D.label,sub:D.tag||""};v.className=`ep-dot ${ge.dot}`,O.textContent=ge.title,J.textContent=ge.sub,Oe.innerHTML="";const G=D.dayLabels||[];G.length>1?(Oe.style.display="grid",Oe.style.gridTemplateColumns=`repeat(${G.length}, 1fr)`,Ft=G.map((ot,tt)=>{const ft=document.createElement("button");return ft.className="day-pill",ft.textContent=ot,ft.addEventListener("click",()=>{V=Math.min(D.hours.length-1,tt*24+12),et()}),Oe.appendChild(ft),ft})):(Oe.style.display="none",Ft=[]),en=D.hours.length>96?2:1;const ht=Math.ceil(D.hours.length/en),Qe=[];for(let ot=0;ot<ht;ot++){let tt=0,ft=0;for(let xt=0;xt<en;xt++){const Ka=ot*en+xt;if(Ka<D.hours.length){const qi=D.hours[Ka];q==="ta"?tt+=Math.max(0,(qi.ta??0)+6):q==="pm25"?tt+=qi.pm25!=null?qi.pm25:(qi.plume||0)*100:tt+=qi[q]||0,ft++}}Qe.push(tt/Math.max(ft,1))}const Mt=Math.max(...Qe,.1);Ce.innerHTML="",$e=Qe.map(ot=>{const tt=document.createElement("div");tt.className=`hist-bar ${q}`;let ft;return q==="depRate"?ft=ot<=.005?0:Math.log1p(ot*4)/Math.log1p(Mt*4):q==="pm25"?ft=ot<=.5?0:Math.log1p(ot*.25)/Math.log1p(Mt*.25):q==="precip"?ft=ot<=.02?0:Math.sqrt(ot/Mt):ft=ot/Mt,tt.style.height=`${Math.max(6,Math.round(ft*100))}%`,Ce.appendChild(tt),tt}),Ve.textContent=D.provenance||""},gn=function(){const D=M.state.mode,ge=S.episodes[R],G=ge.totalDepMgM2||ge.dailyDepMgM2||30;D===0?ts.innerHTML=`
          <div class="legend-title">Atmosphère &amp; manteau neigeux</div>
          <div><span style="color:#eab308">■ Fumée</span> (voile vallée) · <span style="color:#e2e8f0">■ Nuages</span> (altitude + ombres) · <span style="color:#5cc8ff">— Pluie/neige</span></div>
        `:D===1?ts.innerHTML=`
          <div class="legend-title">Forçage radiatif instantané RF (W m⁻²)</div>
          <div class="legend-bar" style="background:linear-gradient(90deg,#120d31,#5f156e,#cc3e3b,#f78c1e,#fcf080)"></div>
          <div class="legend-scale"><span>0</span><span>25</span><span>52+ W m⁻²</span></div>
        `:D===2?ts.innerHTML=`
          <div class="legend-title">Dépôt cumulé EC + OM (mg m⁻²)</div>
          <div class="legend-bar" style="background:linear-gradient(90deg,#14243d,#423d70,#bf4d2e,#f5a324,#fceb99)"></div>
          <div class="legend-scale"><span>0</span><span>${lt(G*.5,0)}</span><span>${lt(G,1)} mg m⁻²</span></div>
        `:D===3?ts.innerHTML=`
          <div class="legend-title">Surface glaciaire (NDSI + albédo)</div>
          <div class="legend-grid">
            <span class="legend-chip"><i style="background:#d6e3f2"></i>Neige / névé</span>
            <span class="legend-chip"><i style="background:#4f9ad8"></i>Glace vive</span>
            <span class="legend-chip"><i style="background:#1fadad"></i>Lac Sunwapta</span>
            <span class="legend-chip"><i style="background:#665c50"></i>Roche / moraine</span>
          </div>
        `:ts.innerHTML=`
          <div class="legend-title">Maquette géomorphologique</div>
          <div>Relief Copernicus GLO-30 (1 867 – 3 494 m) + couronne Rocheuses 35 km.</div>
        `},rt=function(D){oe.value=String(Math.round(D.plume*100)),Xe.textContent=`${Math.round(D.plume*100)} %`,fe.value=String(Math.round(D.sw)),je.textContent=`${Math.round(D.sw)} W m⁻²`,me.value=String(Math.round(D.cloud*100)),vt.textContent=`${Math.round(D.cloud*100)} %`,Pe.value=D.precip.toFixed(1),ut.textContent=`${lt(D.precip,1)} mm/h`,Le.value=Math.max(-6,Math.min(18,D.ta)).toFixed(1),Ze.textContent=`${lt(D.ta,1)} °C`,Ee.value=Math.max(.5,Math.min(16,D.u)).toFixed(1),be.textContent=`${lt(D.u,1)} m/s`},et=function(){const D=S.episodes[R],ge=zs(D,V),G={...ge};if(se){if(G.plume=ee.smoke,G.sw=ee.sw,G.cloud=ee.cloud,G.clLow=ee.cloud,G.clMid=ee.cloud*.9,G.clHigh=ee.cloud*.65,G.precip=ee.precip,G.ta=ee.ta,G.u=ee.wind,G.rh=G.precip>.2?Math.max(90,ge.rh):ge.rh,G.rainSnowM=Yl(G.ta,G.rh,S.awsElevM||2180,S.lapseCPerKm||6.5),G.precip>.15&&(G.cloud=Math.max(G.cloud,.72),G.clLow=Math.max(G.clLow,.72),G.clMid=Math.max(G.clMid,.78)),G.lw=275+G.cloud*55,G.wetFrac=G.precip>.2?.78:0,G.precip>.1){const xt=Math.max(0,Math.min(1,(3456-G.rainSnowM)/1491));G.snowPackMm=Math.max(ge.snowPackMm,G.precip*5.5*xt),G.snowLineM=Math.max(1840,Math.min(G.snowLineM,G.rainSnowM-50))}G.rf=Math.max(0,-G.deltaAlpha*G.sw)}else rt(G);const ht=Dm(G.hour,G.date),Qe=ht>=35,Mt=Qe?Math.max(.05,Math.min(1,G.sw/ht)):.05,ot=Qe?Math.max(0,Math.min(99,Math.round((1-Mt)*100))):100;M.setMeteorology({hour:G.hour,depCumFrac:G.depCumFrac,rfWm2:G.rf,plumeDensity:G.plume,cloudCover:G.cloud,cloudLow:G.clLow,cloudMid:G.clMid,cloudHigh:G.clHigh,sunTrans:Mt,precipMmH:G.precip,rainSnowM:G.rainSnowM,snowLineM:G.snowLineM,snowPackMm:G.snowPackMm,windSpeed:G.u,windBearingDeg:G.wdir,swIn:G.sw,lwIn:G.lw,wetFrac:G.wetFrac,totalDepMgM2:D.totalDepMgM2||D.dailyDepMgM2||30});const tt=M.state.compareClean;if(pe.value=G.t.toFixed(2),Z.textContent=G.dayLabel,re.textContent=Hs(G.hour),xe.textContent=Fm(R,G,se),Re.textContent=`${G.dayLabel} · ${Hs(G.hour)} MDT`,Ie.textContent=tt?"Référence propre":`RF +${lt(G.rf,1)} W m⁻² · ${lt(G.ta,1)} °C`,!Qe)at.textContent=`Nuit · LW ${Math.round(G.lw)}`,De.style.backgroundColor="#475569",De.style.boxShadow="none",De.style.opacity="0.65";else{const xt=ot<=10?"Clair":`−${ot} %`;at.textContent=`${Math.round(G.sw)} W/m² · ${xt}`,G.plume>.45&&G.cloud<.65?(De.style.backgroundColor="#f97316",De.style.boxShadow=`0 0 ${Math.round(4+6*Mt)}px rgba(249,115,22,0.85)`):ot>=45?(De.style.backgroundColor="#94a3b8",De.style.boxShadow="0 0 4px rgba(148,163,184,0.45)"):(De.style.backgroundColor="#fde047",De.style.boxShadow=`0 0 ${Math.round(5+7*Mt)}px rgba(253,224,71,0.9)`),De.style.opacity=String(Math.max(.35,.35+.65*Mt))}if(se)ze.textContent=`Manuel · ${Math.round(G.plume*100)} %`;else if(D.isLive)ze.textContent=`Nuages ${Math.round(G.cloud*100)} %`;else if(G.pm25===null)ze.textContent=`Illust. · ${Math.round(G.plume*100)} %`;else if(G.pm25<1.5&&(G.daod??0)<.02)ze.textContent=`Air pur · ${lt(G.pm25,1)}`;else{const xt=G.daod&&G.daod>=.03?` · ${lt(G.daod,2)}`:"";ze.textContent=`${lt(G.pm25,G.pm25>=10?0:1)} µg/m³${xt}`}if(gt.textContent=`${lt(G.ta,1)} °C · ${Math.round(G.rainSnowM)} m`,G.precip<.05?P.textContent="Sec · 0,0 mm/h":G.rainSnowM<=2120?P.textContent=`Neige · ${lt(G.precip,1)} mm/h`:G.rainSnowM>=3460?P.textContent=`Pluie · ${lt(G.precip,1)} mm/h`:P.textContent=`Mixte · ${lt(G.precip,1)} mm/h`,Wt.textContent=tt?"0,0 mm":`${lt(G.snowPackMm,1)} mm éq.`,tt||D.isLive)He.textContent=D.isLive?"Météo live (0 feu)":"0,0 mg m⁻²";else{const xt=G.depRate<.02?"0/h":`+${lt(G.depRate,G.depRate>=10?0:1)} ${G.wetFrac>=.5?"hum":"sec"}`;He.textContent=`${lt(G.depCum,G.depCum>=100?0:1)} mg (${xt})`}ve.textContent=tt?"+0,0 W m⁻²":`+${lt(G.rf,1)} W m⁻²`,Ye.textContent=tt?"+0,0 mm éq.":`+${lt(G.extraMeltMm,1)} mm éq.`,ie&&Om(ue,Me.width,Me.height,G,tt,S.awsElevM||2180,S.lapseCPerKm||6.5);const ft=Math.floor(G.t/en);for(let xt=0;xt<$e.length;xt++)$e[xt].classList.toggle("past",xt<ft),$e[xt].classList.toggle("current",xt===ft);for(let xt=0;xt<Ft.length;xt++)Ft[xt].classList.toggle("active",xt===G.dayIdx);hi(D,V)},vn=function(D){z=D,Ut.style.display=z?"none":"block",Ot.style.display=z?"block":"none"},ir=function(D,ge=null){R=D,se=!1,_t.classList.add("hidden"),E.classList.add("hidden"),Se.setAttribute("aria-expanded","false"),document.querySelectorAll(".ep-item").forEach(G=>{const ht=G.dataset.episode===R;G.classList.toggle("active",ht),G.setAttribute("aria-selected",ht?"true":"false")}),V=ge??al[R]??12,qe="",Rt(),gn(),et(),vn(D!=="live-now")},qn=function(){if(!se){const D=zs(S.episodes[R],V);ee.smoke=D.plume,ee.sw=D.sw,ee.cloud=D.cloud,ee.precip=D.precip,ee.ta=D.ta,ee.wind=D.u,se=!0,_t.classList.remove("hidden")}},ds=function(D){qa.forEach(ge=>ge.classList.toggle("active",Number(ge.dataset.mode)===D)),M.setMode(D),gn()},lr=function(D){requestAnimationFrame(lr);const ge=Math.min((D-ja)/1e3,.05);if(ja=D,z){const Qe=S.episodes[R];V+=ge*1.5*X[j],V>Qe.hours.length-1&&(V=0),et()}M.update(ge);const G=M.getNorthAngleDeg();Am.style.transform=`rotate(${G.toFixed(1)}deg)`;const ht=G*Math.PI/180;if(rl.style.left=`${(18+12*Math.sin(ht)-4).toFixed(1)}px`,rl.style.top=`${(18-12*Math.cos(ht)-6).toFixed(1)}px`,Y&&!H)for(let Qe=0;Qe<y.length;Qe++){const{el:Mt,lm:ot}=y[Qe],tt=M.projectLandmark(ot);tt?(Mt.style.opacity="1",Mt.style.left=`${tt.x.toFixed(1)}px`,Mt.style.top=`${tt.y.toFixed(1)}px`,Mt.style.zIndex=String(Math.floor((1-tt.depth)*1e3))):Mt.style.opacity="0"}};var i=Yn,e=pn,t=ui,n=hi,s=di,r=In,o=Gi,a=k,l=N,c=te,u=Rt,d=gn,f=rt,m=et,g=vn,_=ir,p=qn,h=ds,w=lr;const b=await Cm(),{meta:S,demU16:T,ringU16:A,rgbTex:C,maskTex:F}=b;Object.values(S.episodes).forEach(Im),Qs.textContent="Initialisation de la scène 3D v2…";const M=new bm(ks,S,T,C,F,A),y=S.landmarks.map(D=>{const ge=document.createElement("div");return ge.className="pin-label hud-el",ge.innerHTML=`
        <div class="pin-card">
          <span class="pin-name">${D.name}</span>
          <span class="pin-elev">${D.elevM.toLocaleString("fr-CA")} m</span>
        </div>
        <div class="pin-stem"></div>
        <div class="pin-dot ${D.kind}"></div>
      `,sl.appendChild(ge),{el:ge,lm:D}});let R="2023-08-17_24";S.episodes[R]||(R=Object.keys(S.episodes)[0]);let V=al[R]??12,z=!0;const X=[.5,1,2,4];let j=0,Y=!0,q="precip",H=!1,se=!1;const ee={smoke:.35,sw:350,cloud:.4,precip:0,ta:3.5,wind:5},pe=document.getElementById("timeSlider"),Ce=document.getElementById("histBars"),Oe=document.getElementById("dayPills"),Z=document.getElementById("clockDate"),re=document.getElementById("clockTime"),xe=document.getElementById("clockPhase"),ce=document.getElementById("presentBar"),Re=document.getElementById("presentClock"),Ie=document.getElementById("presentMeta"),De=document.getElementById("sunDot"),at=document.getElementById("kpiSwLw"),ze=document.getElementById("kpiSmoke"),gt=document.getElementById("kpiTempIso"),P=document.getElementById("kpiPrecip"),Wt=document.getElementById("kpiSnowPack"),He=document.getElementById("kpiDep"),Ve=document.getElementById("modalProvenance"),ye=document.getElementById("liveTag"),st=document.getElementById("epDropdown"),Se=document.getElementById("epTrigger"),E=document.getElementById("epMenu"),v=document.getElementById("epTriggerDot"),O=document.getElementById("epTriggerTitle"),J=document.getElementById("epTriggerSub");Se.addEventListener("click",D=>{D.stopPropagation();const ge=E.classList.toggle("hidden");Se.setAttribute("aria-expanded",ge?"false":"true")}),window.addEventListener("click",D=>{st.contains(D.target)||(E.classList.add("hidden"),Se.setAttribute("aria-expanded","false"))});const Q=document.getElementById("profileCard"),$=document.getElementById("btnProfileToggle"),Me=document.getElementById("profileCanvas"),ue=Me.getContext("2d"),ve=document.getElementById("valRfNow"),Ye=document.getElementById("valExtraMelt");let ie=!0;$.addEventListener("click",()=>{ie=!ie,Q.classList.toggle("hidden",!ie),$.classList.toggle("active-cam",ie),$.setAttribute("aria-pressed",ie?"true":"false")});const ne=document.getElementById("webcamCard"),Te=document.getElementById("btnWebcamToggle"),Ue=document.getElementById("btnWebcamClose"),_e=document.getElementById("btnWebcamZoom"),We=document.getElementById("btnMatchCam"),Fe=document.getElementById("webcamMedia"),Ke=document.getElementById("webcamImg"),L=document.getElementById("webcamOverlay"),ae=document.getElementById("webcamStamp"),W=document.getElementById("webcamLink"),K=document.getElementById("webcamModal"),de=document.getElementById("webcamModalImg"),he=document.getElementById("webcamModalTitle"),Ne=document.getElementById("webcamModalLink"),dt=S.skapingBase||"https://skaping.s3.gra.io.cloud.ovh.net/pursuit/columbia_icefield";let yt=!0,qe="",Lt="",Zt="https://www.skaping.com/columbiaicefield";const Un=new Map;Te.addEventListener("click",()=>di(!yt)),Ue.addEventListener("click",()=>di(!1)),We.addEventListener("click",()=>{document.querySelectorAll(".preset-group .pill-btn").forEach(D=>D.classList.toggle("active",D.dataset.preset==="webcam")),M.flyTo("webcam")}),_e.addEventListener("click",In),Fe.addEventListener("click",In),document.getElementById("btnCloseWebcamModal").addEventListener("click",()=>K.classList.add("hidden")),K.addEventListener("click",D=>{D.target===K&&K.classList.add("hidden")});const mn=document.getElementById("webcamDragHandle"),an=document.getElementById("webcamResizeHandle");let on=null,ln=null;mn.addEventListener("pointerdown",D=>{if(D.target.closest("button, a"))return;D.preventDefault(),D.stopPropagation();const ge=ne.getBoundingClientRect();ne.style.left=`${ge.left}px`,ne.style.top=`${ge.top}px`,ne.style.right="auto",ne.style.bottom="auto",ne.classList.add("dragging"),on={id:D.pointerId,dx:D.clientX-ge.left,dy:D.clientY-ge.top},mn.setPointerCapture(D.pointerId)}),mn.addEventListener("pointermove",D=>{if(!on||D.pointerId!==on.id)return;const ge=ne.getBoundingClientRect();ne.style.left=`${Math.max(8,Math.min(window.innerWidth-ge.width-8,D.clientX-on.dx))}px`,ne.style.top=`${Math.max(8,Math.min(window.innerHeight-ge.height-8,D.clientY-on.dy))}px`});const us=D=>{if(!(!on||D.pointerId!==on.id)){on=null,ne.classList.remove("dragging");try{mn.releasePointerCapture(D.pointerId)}catch{}}};mn.addEventListener("pointerup",us),mn.addEventListener("pointercancel",us),mn.addEventListener("dblclick",D=>{D.target.closest("button, a")||(ne.style.left="",ne.style.top="",ne.style.right="",ne.style.bottom="",ne.style.width="")}),an.addEventListener("pointerdown",D=>{D.preventDefault(),D.stopPropagation();const ge=ne.getBoundingClientRect();ne.style.left=`${ge.left}px`,ne.style.top=`${ge.top}px`,ne.style.right="auto",ne.style.bottom="auto",ln={id:D.pointerId,startX:D.clientX,startW:ge.width},an.setPointerCapture(D.pointerId)}),an.addEventListener("pointermove",D=>{if(!ln||D.pointerId!==ln.id)return;const ge=Math.min(720,window.innerWidth-(parseFloat(ne.style.left)||16)-12);ne.style.width=`${Math.round(Math.max(240,Math.min(ge,ln.startW+(D.clientX-ln.startX))))}px`,Gi()});const hs=D=>{if(!(!ln||D.pointerId!==ln.id)){ln=null;try{an.releasePointerCapture(D.pointerId)}catch{}}};an.addEventListener("pointerup",hs),an.addEventListener("pointercancel",hs),window.addEventListener("resize",Gi);const Vi=document.getElementById("btnRecTop"),Wi=document.getElementById("recLabel");let cn=null,x=[],U=null,B=0;Vi.addEventListener("click",N),document.getElementById("btnPresent").addEventListener("click",()=>te(!H)),document.getElementById("btnExitPresent").addEventListener("click",()=>te(!1));const oe=document.getElementById("slLabSmoke"),fe=document.getElementById("slLabSw"),me=document.getElementById("slLabCloud"),Pe=document.getElementById("slLabPrecip"),Le=document.getElementById("slLabTemp"),Ee=document.getElementById("slLabWind"),Xe=document.getElementById("valLabSmoke"),je=document.getElementById("valLabSw"),vt=document.getElementById("valLabCloud"),ut=document.getElementById("valLabPrecip"),Ze=document.getElementById("valLabTemp"),be=document.getElementById("valLabWind"),_t=document.getElementById("btnSyncAws");let $e=[],Ft=[],en=1;const Xt=document.getElementById("btnPlay"),Ut=document.getElementById("iconPlay"),Ot=document.getElementById("iconPause");Xt.addEventListener("click",()=>vn(!z)),vn(!0);const _n=document.getElementById("btnSpeed");_n.addEventListener("click",()=>{j=(j+1)%X.length,_n.textContent=`${String(X[j]).replace(".",",")}×`}),pe.addEventListener("input",()=>{V=parseFloat(pe.value),et()}),document.querySelectorAll(".ctab").forEach(D=>{D.addEventListener("click",()=>{q=D.dataset.metric,document.querySelectorAll(".ctab").forEach(ge=>ge.classList.toggle("active",ge===D)),Rt(),et()})}),document.querySelectorAll(".ep-item").forEach(D=>{D.addEventListener("click",async()=>{const ge=D.dataset.episode;if(ge==="live-now"){ye.textContent="Chargement…";try{const{nowIdx:G,episode:ht}=await Nm();S.episodes["live-now"]=ht;const Qe=ht.hours[G];ye.textContent=`${lt(Qe.ta,0)} °C · ${Math.round(Qe.cloud*100)} %`,ol["live-now"].sub=`${lt(Qe.ta,0)} °C · nuages ${Math.round(Qe.cloud*100)} %`,ir("live-now",G)}catch(G){console.error("Live weather fetch failed:",G),ye.textContent="Indisponible"}return}S.episodes[ge]&&ir(ge)})}),oe.addEventListener("input",()=>{qn(),ee.smoke=parseFloat(oe.value)/100,Xe.textContent=`${Math.round(ee.smoke*100)} %`,et()}),fe.addEventListener("input",()=>{qn(),ee.sw=parseFloat(fe.value),je.textContent=`${Math.round(ee.sw)} W m⁻²`,et()}),me.addEventListener("input",()=>{qn(),ee.cloud=parseFloat(me.value)/100,vt.textContent=`${Math.round(ee.cloud*100)} %`,et()}),Pe.addEventListener("input",()=>{qn(),ee.precip=parseFloat(Pe.value),ut.textContent=`${lt(ee.precip,1)} mm/h`,et()}),Le.addEventListener("input",()=>{qn(),ee.ta=parseFloat(Le.value),Ze.textContent=`${lt(ee.ta,1)} °C`,et()}),Ee.addEventListener("input",()=>{qn(),ee.wind=parseFloat(Ee.value),be.textContent=`${lt(ee.wind,1)} m/s`,et()}),_t.addEventListener("click",()=>{se=!1,_t.classList.add("hidden"),et()});const sr=document.getElementById("btnCompare"),Xi=D=>{M.setCompareClean(D),sr.classList.toggle("active",D),et()};sr.addEventListener("pointerdown",()=>Xi(!0)),window.addEventListener("pointerup",()=>{M.state.compareClean&&Xi(!1)}),sr.addEventListener("pointerleave",()=>{M.state.compareClean&&Xi(!1)}),window.addEventListener("keydown",D=>{D.target.tagName!=="INPUT"&&(D.code==="Space"&&(D.preventDefault(),vn(!z)),(D.key==="b"||D.key==="B")&&Xi(!0),(D.key==="h"||D.key==="H")&&te(!H))}),window.addEventListener("keyup",D=>{(D.key==="b"||D.key==="B")&&Xi(!1)});const rr=document.querySelectorAll(".preset-group .pill-btn");rr.forEach(D=>{D.addEventListener("click",()=>{rr.forEach(ge=>ge.classList.remove("active")),D.classList.add("active"),M.flyTo(D.dataset.preset)})}),document.getElementById("compassWrap").addEventListener("click",()=>M.flyTo("block")),ks.addEventListener("dblclick",()=>M.flyTo("block"));const Xa=document.getElementById("btnSettings"),Ya=document.getElementById("settingsDrawer");Xa.addEventListener("click",()=>{const D=Ya.classList.toggle("hidden");Xa.setAttribute("aria-expanded",D?"false":"true")});const qa=document.querySelectorAll(".mode-btn");qa.forEach(D=>D.addEventListener("click",()=>ds(Number(D.dataset.mode)))),document.getElementById("btnQuickRfMode").addEventListener("click",()=>{ds(M.state.mode===1?0:1)});const ar=document.getElementById("slExag"),Za=document.getElementById("valExag");ar.addEventListener("input",()=>{const D=parseFloat(ar.value);Za.textContent=`${lt(D,2)}×`,M.setExaggeration(D)});const or=document.getElementById("slBoost"),$a=document.getElementById("valBoost");or.addEventListener("input",()=>{const D=parseFloat(or.value);$a.textContent=`${lt(D,1)}×`,M.setBoost(D)}),document.getElementById("chkHorizon").addEventListener("change",D=>M.setShowHorizon(D.target.checked)),document.getElementById("chkClouds").addEventListener("change",D=>M.setShowClouds(D.target.checked)),document.getElementById("chkSmoke").addEventListener("change",D=>M.setShowSmoke(D.target.checked)),document.getElementById("chkPrecip").addEventListener("change",D=>M.setShowPrecip(D.target.checked)),document.getElementById("chkSunArc").addEventListener("change",D=>M.setShowSunArc(D.target.checked)),document.getElementById("chkIsotherm").addEventListener("change",D=>M.setShowIsotherm(D.target.checked)),document.getElementById("chkShadows").addEventListener("change",D=>M.setShadows(D.target.checked)),document.getElementById("chkContours").addEventListener("change",D=>M.setContours(D.target.checked)),document.getElementById("chkLabels").addEventListener("change",D=>{Y=D.target.checked,sl.style.display=Y?"block":"none"}),document.getElementById("chkSpin").addEventListener("change",D=>{M.state.spin=D.target.checked}),document.getElementById("btnReset").addEventListener("click",()=>{se=!1,_t.classList.add("hidden"),M.flyTo("block"),rr.forEach(D=>D.classList.toggle("active",D.dataset.preset==="block")),ar.value="1.30",Za.textContent="1,30×",M.setExaggeration(1.3),or.value="1.4",$a.textContent="1,4×",M.setBoost(1.4),M.state.spin=!1,document.getElementById("chkSpin").checked=!1,ds(0),et()}),document.getElementById("btnSnap").addEventListener("click",()=>{const D=S.episodes[R],ge=zs(D,V),G=document.createElement("a");G.download=`athabasca_3d_v2_${ge.date}_${Hs(ge.hour).replace(":","h")}.png`,G.href=M.capturePNG(),G.click()});const Yi=document.getElementById("infoModal");document.getElementById("btnInfo").addEventListener("click",()=>Yi.classList.remove("hidden")),document.getElementById("btnCloseInfo").addEventListener("click",()=>Yi.classList.add("hidden")),Yi.addEventListener("click",D=>{D.target===Yi&&Yi.classList.add("hidden")}),window.addEventListener("resize",()=>M.resize()),Rt(),gn(),et(),Tm.classList.add("done");let ja=performance.now();requestAnimationFrame(lr)}catch(b){console.error("Athabasca 3D v2 boot error:",b),Qs.textContent="Erreur d'initialisation : "+((b==null?void 0:b.message)||String(b))}}Bm();
