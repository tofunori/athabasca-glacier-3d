(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ca="172",gi={ROTATE:0,DOLLY:1,PAN:2},pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vl=0,ya=1,xl=2,Uo=1,Io=2,fn=3,Dn=0,It=1,Ut=2,Rn=0,_i=1,Mr=2,Ea=3,ba=4,Ml=5,Wn=100,Sl=101,yl=102,El=103,bl=104,wl=200,Tl=201,Al=202,Cl=203,Sr=204,yr=205,Rl=206,Pl=207,Dl=208,Ll=209,Ul=210,Il=211,Nl=212,Fl=213,Ol=214,Er=0,br=1,wr=2,Mi=3,Tr=4,Ar=5,Cr=6,Rr=7,No=0,Bl=1,zl=2,Pn=0,kl=1,Hl=2,Gl=3,Fo=4,Vl=5,Wl=6,Xl=7,Oo=300,Si=301,yi=302,Pr=303,Dr=304,Ls=306,Lr=1e3,Gt=1001,Ur=1002,Vt=1003,Yl=1004,Yi=1005,$t=1006,zs=1007,Yn=1008,sn=1009,Bo=1010,zo=1011,Bi=1012,ua=1013,qn=1014,gn=1015,ki=1016,ha=1017,da=1018,Ei=1020,ko=35902,Ho=1021,Go=1022,jt=1023,Vo=1024,Wo=1025,vi=1026,bi=1027,Xo=1028,fa=1029,Yo=1030,pa=1031,ma=1033,Ms=33776,Ss=33777,ys=33778,Es=33779,Ir=35840,Nr=35841,Fr=35842,Or=35843,Br=36196,zr=37492,kr=37496,Hr=37808,Gr=37809,Vr=37810,Wr=37811,Xr=37812,Yr=37813,qr=37814,Zr=37815,$r=37816,jr=37817,Kr=37818,Jr=37819,Qr=37820,ea=37821,bs=36492,ta=36494,na=36495,qo=36283,ia=36284,sa=36285,ra=36286,ql=3200,Zl=3201,Zo=0,$l=1,pn="",Lt="srgb",wi="srgb-linear",As="linear",nt="srgb",Qn=7680,wa=519,jl=512,Kl=513,Jl=514,$o=515,Ql=516,ec=517,tc=518,nc=519,Ta=35044,Aa="300 es",_n=2e3,Cs=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,aa=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function ic(i,e){return(i%e+e)%e}function ks(i,e,t){return(1-t)*i+t*e}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sc={DEG2RAD:ws};class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,s,r,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],v=s[0],p=s[3],h=s[6],w=s[1],b=s[4],M=s[7],P=s[2],T=s[5],A=s[8];return r[0]=a*v+o*w+l*P,r[3]=a*p+o*b+l*T,r[6]=a*h+o*M+l*A,r[1]=c*v+u*w+d*P,r[4]=c*p+u*b+d*T,r[7]=c*h+u*M+d*A,r[2]=f*v+m*w+g*P,r[5]=f*p+m*b+g*T,r[8]=f*h+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*r,m=c*r-a*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new He;function jo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rc(){const i=zi("canvas");return i.style.display="block",i}const Ca={};function fi(i){i in Ca||(Ca[i]=!0,console.warn(i))}function ac(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function oc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ra=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pa=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cc(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===nt&&(s.r=vn(s.r),s.g=vn(s.g),s.b=vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pn?As:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:As,toXYZ:Ra,fromXYZ:Pa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:nt,toXYZ:Ra,fromXYZ:Pa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const et=cc();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ei;class uc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=zi("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=vn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hc=0;class Ko{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gs(s[a].image)):r.push(Gs(s[a]))}else r=Gs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Gs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dc=0;class wt extends jn{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Gt,s=Gt,r=$t,a=Yn,o=jt,l=sn,c=wt.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=Hi(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Oo;wt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,M=(m+1)/2,P=(h+1)/2,T=(u+f)/4,A=(d+v)/4,O=(g+p)/4;return b>M&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=A/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=O/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=O/r),this.set(n,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fc extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jo extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pc extends wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==m||u!==g){let p=1-o;const h=l*f+c*m+u*g+d*v,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const P=Math.sqrt(b),T=Math.atan2(P,h*w);p=Math.sin(p*T)/P,o=Math.sin(o*T)/P}const M=o*w;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,d=d*p+v*M,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-o*m,e[t+2]=c*g+u*m+o*f-l*d,e[t+3]=u*g-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Da.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Da.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new N,Da=new $n;class Gi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qi.copy(n.boundingBox)),qi.applyMatrix4(e.matrixWorld),this.union(qi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),Zi.subVectors(this.max,Li),ti.subVectors(e.a,Li),ni.subVectors(e.b,Li),ii.subVectors(e.c,Li),Sn.subVectors(ni,ti),yn.subVectors(ii,ni),Fn.subVectors(ti,ii);let t=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!Ws(t,ti,ni,ii,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,ti,ni,ii,Zi))?!1:($i.crossVectors(Sn,yn),t=[$i.x,$i.y,$i.z],Ws(t,ti,ni,ii,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new N,new N,new N,new N,new N,new N,new N,new N],Kt=new N,qi=new Gi,ti=new N,ni=new N,ii=new N,Sn=new N,yn=new N,Fn=new N,Li=new N,Zi=new N,$i=new N,On=new N;function Ws(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){On.fromArray(i,r);const o=s.x*Math.abs(On.x)+s.y*Math.abs(On.y)+s.z*Math.abs(On.z),l=e.dot(On),c=t.dot(On),u=n.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mc=new Gi,Ui=new N,Xs=new N;class Vi{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(Xs)),this.expandByPoint(Ui.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new N,Ys=new N,ji=new N,En=new N,qs=new N,Ki=new N,Zs=new N;class Us{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ys.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),En.copy(this.origin).sub(Ys);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ji),o=En.dot(this.direction),l=-En.dot(ji),c=En.lengthSq(),u=Math.abs(1-a*a);let d,f,m,g;if(u>0)if(d=a*l-o,f=a*o-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ys).addScaledVector(ji,f),m}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),s=cn.dot(cn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,s,r){qs.subVectors(t,e),Ki.subVectors(n,e),Zs.crossVectors(qs,Ki);let a=this.direction.dot(Zs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(Ki.crossVectors(En,Ki));if(l<0)return null;const c=o*this.direction.dot(qs.cross(En));if(c<0||l+c>a)return null;const u=-o*En.dot(Zs);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,s,r,a,o,l,c,u,d,f,m,g,v,p){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,v,p)}set(e,t,n,s,r,a,o,l,c,u,d,f,m,g,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=a*u,m=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,v=c*d;t[0]=f+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=g*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gc,e,_c)}lookAt(e,t,n){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),bn.crossVectors(n,kt),bn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),bn.crossVectors(n,kt)),bn.normalize(),Ji.crossVectors(kt,bn),s[0]=bn.x,s[4]=Ji.x,s[8]=kt.x,s[1]=bn.y,s[5]=Ji.y,s[9]=kt.y,s[2]=bn.z,s[6]=Ji.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],v=n[6],p=n[10],h=n[14],w=n[3],b=n[7],M=n[11],P=n[15],T=s[0],A=s[4],O=s[8],y=s[12],S=s[1],D=s[5],X=s[9],H=s[13],G=s[2],j=s[6],Y=s[10],J=s[14],V=s[3],se=s[7],de=s[11],fe=s[15];return r[0]=a*T+o*S+l*G+c*V,r[4]=a*A+o*D+l*j+c*se,r[8]=a*O+o*X+l*Y+c*de,r[12]=a*y+o*H+l*J+c*fe,r[1]=u*T+d*S+f*G+m*V,r[5]=u*A+d*D+f*j+m*se,r[9]=u*O+d*X+f*Y+m*de,r[13]=u*y+d*H+f*J+m*fe,r[2]=g*T+v*S+p*G+h*V,r[6]=g*A+v*D+p*j+h*se,r[10]=g*O+v*X+p*Y+h*de,r[14]=g*y+v*H+p*J+h*fe,r[3]=w*T+b*S+M*G+P*V,r[7]=w*A+b*D+M*j+P*se,r[11]=w*O+b*X+M*Y+P*de,r[15]=w*y+b*H+M*J+P*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],v=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*m-n*l*m)+v*(+t*l*m-t*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*f+s*a*d-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],v=e[13],p=e[14],h=e[15],w=d*p*c-v*f*c+v*l*m-o*p*m-d*l*h+o*f*h,b=g*f*c-u*p*c-g*l*m+a*p*m+u*l*h-a*f*h,M=u*v*c-g*d*c+g*o*m-a*v*m-u*o*h+a*d*h,P=g*d*l-u*v*l-g*o*f+a*v*f+u*o*p-a*d*p,T=t*w+n*b+s*M+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=w*A,e[1]=(v*f*r-d*p*r-v*s*m+n*p*m+d*s*h-n*f*h)*A,e[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*h+n*l*h)*A,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*m-n*l*m)*A,e[4]=b*A,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*A,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*h-t*l*h)*A,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*m+t*l*m)*A,e[8]=M*A,e[9]=(g*d*r-u*v*r-g*n*m+t*v*m+u*n*h-t*d*h)*A,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*h+t*o*h)*A,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*A,e[12]=P*A,e[13]=(u*v*s-g*d*s+g*n*f-t*v*f-u*n*p+t*d*p)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*p-t*o*p)*A,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,f=r*c,m=r*u,g=r*d,v=a*u,p=a*d,h=o*d,w=l*c,b=l*u,M=l*d,P=n.x,T=n.y,A=n.z;return s[0]=(1-(v+h))*P,s[1]=(m+M)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(m-M)*T,s[5]=(1-(f+h))*T,s[6]=(p+w)*T,s[7]=0,s[8]=(g+b)*A,s[9]=(p-w)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=si.set(s[0],s[1],s[2]).length();const a=si.set(s[4],s[5],s[6]).length(),o=si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const c=1/r,u=1/a,d=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_n){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(o===_n)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Cs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),f=(t+e)*c,m=(n+s)*u;let g,v;if(o===_n)g=(a+r)*d,v=-2*d;else if(o===Cs)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new N,Jt=new ct,gc=new N(0,0,0),_c=new N(1,1,1),bn=new N,Ji=new N,kt=new N,La=new ct,Ua=new $n;class rn{constructor(e=0,t=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return La.makeRotationFromQuaternion(e),this.setFromRotationMatrix(La,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ua.setFromEuler(this),this.setFromQuaternion(Ua,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vc=0;const Ia=new N,ri=new $n,un=new ct,Qi=new N,Ii=new N,xc=new N,Mc=new $n,Na=new N(1,0,0),Fa=new N(0,1,0),Oa=new N(0,0,1),Ba={type:"added"},Sc={type:"removed"},ai={type:"childadded",child:null},$s={type:"childremoved",child:null};class vt extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new N,t=new rn,n=new $n,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new He}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(Na,e)}rotateY(e){return this.rotateOnAxis(Fa,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Ia.copy(e).applyQuaternion(this.quaternion),this.position.add(Ia.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Na,e)}translateY(e){return this.translateOnAxis(Fa,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Qi.copy(e):Qi.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ii,Qi,this.up):un.lookAt(Qi,Ii,this.up),this.quaternion.setFromRotationMatrix(un),s&&(un.extractRotation(s.matrixWorld),ri.setFromRotationMatrix(un),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ba),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc),$s.child=e,this.dispatchEvent($s),$s.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ba),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Mc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new N(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new N,hn=new N,js=new N,dn=new N,oi=new N,li=new N,za=new N,Ks=new N,Js=new N,Qs=new N,er=new dt,tr=new dt,nr=new dt;class en{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qt.subVectors(s,t),hn.subVectors(n,t),js.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(hn),l=Qt.dot(js),c=hn.dot(hn),u=hn.dot(js),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,dn.x),l.addScaledVector(a,dn.y),l.addScaledVector(o,dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return er.setScalar(0),tr.setScalar(0),nr.setScalar(0),er.fromBufferAttribute(e,t),tr.fromBufferAttribute(e,n),nr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(er,r.x),a.addScaledVector(tr,r.y),a.addScaledVector(nr,r.z),a}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),hn.subVectors(e,t),Qt.cross(hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;oi.subVectors(s,n),li.subVectors(r,n),Ks.subVectors(e,n);const l=oi.dot(Ks),c=li.dot(Ks);if(l<=0&&c<=0)return t.copy(n);Js.subVectors(e,s);const u=oi.dot(Js),d=li.dot(Js);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(oi,a);Qs.subVectors(e,r);const m=oi.dot(Qs),g=li.dot(Qs);if(g>=0&&m<=g)return t.copy(r);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(li,o);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return za.subVectors(r,s),o=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(za,o);const h=1/(p+v+f);return a=v*h,o=f*h,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},es={h:0,s:0,l:0};function ir(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=ic(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ir(a,r,e+1/3),this.g=ir(a,r,e),this.b=ir(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=el[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return et.fromWorkingColorSpace(Ct.copy(this),e),Math.round($e(Ct.r*255,0,255))*65536+Math.round($e(Ct.g*255,0,255))*256+Math.round($e(Ct.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,s=Ct.g,r=Ct.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Lt){et.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,s=Ct.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(es);const n=ks(wn.h,es.h,t),s=ks(wn.s,es.s,t),r=ks(wn.l,es.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ae;Ae.NAMES=el;let yc=0;class Kn extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=_i,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sr,this.blendDst=yr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sr&&(n.blendSrc=this.blendSrc),this.blendDst!==yr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class tl extends Kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new N,ts=new Ce;class lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}}class nl extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class il extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ec=0;const qt=new ct,sr=new vt,ci=new N,Ht=new Gi,Ni=new Gi,Et=new N;class bt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jo(e)?il:nl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return sr.lookAt(e),sr.updateMatrix(),this.applyMatrix4(sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ht.min,Ni.min),Ht.expandByPoint(Et),Et.addVectors(Ht.max,Ni.max),Ht.expandByPoint(Et)):(Ht.expandByPoint(Ni.min),Ht.expandByPoint(Ni.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),Et.add(ci)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new N,l[O]=new N;const c=new N,u=new N,d=new N,f=new Ce,m=new Ce,g=new Ce,v=new N,p=new N;function h(O,y,S){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,O),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),o[O].add(v),o[y].add(v),o[S].add(v),l[O].add(p),l[y].add(p),l[S].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,y=w.length;O<y;++O){const S=w[O],D=S.start,X=S.count;for(let H=D,G=D+X;H<G;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new N,M=new N,P=new N,T=new N;function A(O){P.fromBufferAttribute(s,O),T.copy(P);const y=o[O];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),M.crossVectors(T,y);const D=M.dot(l[O])<0?-1:1;a.setXYZW(O,b.x,b.y,b.z,D)}for(let O=0,y=w.length;O<y;++O){const S=w[O],D=S.start,X=S.count;for(let H=D,G=D+X;H<G;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new lt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ka=new ct,Bn=new Us,ns=new Vi,Ha=new N,is=new N,ss=new N,rs=new N,rr=new N,as=new N,Ga=new N,os=new N;class _t extends vt{constructor(e=new bt,t=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(rr.fromBufferAttribute(d,e),a?as.addScaledVector(rr,u):as.addScaledVector(rr.sub(t),u))}t.add(as)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(r),Bn.copy(e.ray).recast(e.near),!(ns.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ns,Ha)===null||Bn.origin.distanceToSquared(Ha)>(e.far-e.near)**2))&&(ka.copy(r).invert(),Bn.copy(e.ray).applyMatrix4(ka),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=a[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,P=b;M<P;M+=3){const T=o.getX(M),A=o.getX(M+1),O=o.getX(M+2);s=ls(this,h,e,n,c,u,d,T,A,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const w=o.getX(p),b=o.getX(p+1),M=o.getX(p+2);s=ls(this,a,e,n,c,u,d,w,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],h=a[p.materialIndex],w=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=w,P=b;M<P;M+=3){const T=M,A=M+1,O=M+2;s=ls(this,h,e,n,c,u,d,T,A,O),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,h=v;p<h;p+=3){const w=p,b=p+1,M=p+2;s=ls(this,a,e,n,c,u,d,w,b,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function bc(i,e,t,n,s,r,a,o){let l;if(e.side===It?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Dn,o),l===null)return null;os.copy(o),os.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(os);return c<t.near||c>t.far?null:{distance:c,point:os.clone(),object:i}}function ls(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,is),i.getVertexPosition(l,ss),i.getVertexPosition(c,rs);const u=bc(i,e,t,n,is,ss,rs,Ga);if(u){const d=new N;en.getBarycoord(Ga,is,ss,rs,d),s&&(u.uv=en.getInterpolatedAttribute(s,o,l,c,d,new Ce)),r&&(u.uv1=en.getInterpolatedAttribute(r,o,l,c,d,new Ce)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};en.getNormal(is,ss,rs,f.normal),u.face=f,u.barycoord=d}return u}class Wi extends bt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(d,2));function g(v,p,h,w,b,M,P,T,A,O,y){const S=M/A,D=P/O,X=M/2,H=P/2,G=T/2,j=A+1,Y=O+1;let J=0,V=0;const se=new N;for(let de=0;de<Y;de++){const fe=de*D-H;for(let Fe=0;Fe<j;Fe++){const Ze=Fe*S-X;se[v]=Ze*w,se[p]=fe*b,se[h]=G,c.push(se.x,se.y,se.z),se[v]=0,se[p]=0,se[h]=T>0?1:-1,u.push(se.x,se.y,se.z),d.push(Fe/A),d.push(1-de/O),J+=1}}for(let de=0;de<O;de++)for(let fe=0;fe<A;fe++){const Fe=f+fe+j*de,Ze=f+fe+j*(de+1),q=f+(fe+1)+j*(de+1),ie=f+(fe+1)+j*de;l.push(Fe,Ze,ie),l.push(Ze,q,ie),V+=6}o.addGroup(m,V,y),m+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Ti(i[t]);for(const s in n)e[s]=n[s]}return e}function wc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Tc={clone:Ti,merge:Dt};var Ac=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ac,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=wc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rl extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new N,Va=new Ce,Wa=new Ce;class Zt extends rl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-e/Tn.z)}getViewSize(e,t){return this.getViewBounds(e,Va,Wa),t.subVectors(Wa,Va)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,hi=1;class Rc extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Zt(ui,hi,e,t);s.layers=this.layers,this.add(s);const r=new Zt(ui,hi,e,t);r.layers=this.layers,this.add(r);const a=new Zt(ui,hi,e,t);a.layers=this.layers,this.add(a);const o=new Zt(ui,hi,e,t);o.layers=this.layers,this.add(o);const l=new Zt(ui,hi,e,t);l.layers=this.layers,this.add(l);const c=new Zt(ui,hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class al extends wt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Si,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pc extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new al(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wi(5,5,5),r=new Rt({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Rn});r.uniforms.tEquirect.value=t;const a=new _t(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=$t),new Rc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class ga{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(e),this.density=t}clone(){return new ga(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dc extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lc extends wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Vt,u=Vt,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn extends lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ar=new N,Uc=new N,Ic=new He;class An{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ar.subVectors(n,t).cross(Uc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ar),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ic.getNormalMatrix(e),s=this.coplanarPoint(ar).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Vi,cs=new N;class _a{constructor(e=new An,t=new An,n=new An,s=new An,r=new An,a=new An){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],h=s[12],w=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,p-m,M-h).normalize(),n[1].setComponents(l+r,f+c,p+m,M+h).normalize(),n[2].setComponents(l+a,f+u,p+g,M+w).normalize(),n[3].setComponents(l-a,f-u,p-g,M-w).normalize(),n[4].setComponents(l-o,f-d,p-v,M-b).normalize(),t===_n)n[5].setComponents(l+o,f+d,p+v,M+b).normalize();else if(t===Cs)n[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(cs.x=s.normal.x>0?e.max.x:e.min.x,cs.y=s.normal.y>0?e.max.y:e.min.y,cs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ol extends Kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rs=new N,Ps=new N,Xa=new ct,Fi=new Us,us=new Vi,or=new N,Ya=new N;class Nc extends vt{constructor(e=new bt,t=new ol){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Rs.fromBufferAttribute(t,s-1),Ps.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Rs.distanceTo(Ps);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(s),us.radius+=r,e.ray.intersectsSphere(us)===!1)return;Xa.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(Xa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const h=u.getX(v),w=u.getX(v+1),b=hs(this,e,Fi,l,h,w);b&&t.push(b)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(m),h=hs(this,e,Fi,l,v,p);h&&t.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=m,p=g-1;v<p;v+=c){const h=hs(this,e,Fi,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=hs(this,e,Fi,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function hs(i,e,t,n,s,r){const a=i.geometry.attributes.position;if(Rs.fromBufferAttribute(a,s),Ps.fromBufferAttribute(a,r),t.distanceSqToSegment(Rs,Ps,or,Ya)>n)return;or.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(or);if(!(l<e.near||l>e.far))return{distance:l,point:Ya.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Fc extends Kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qa=new ct,oa=new Us,ds=new Vi,fs=new N;class Oc extends vt{constructor(e=new bt,t=new Fc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(s),ds.radius+=r,e.ray.intersectsSphere(ds)===!1)return;qa.copy(s).invert(),oa.copy(e.ray).applyMatrix4(qa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let g=f,v=m;g<v;g++){const p=c.getX(g);fs.fromBufferAttribute(d,p),Za(fs,p,l,s,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,v=m;g<v;g++)fs.fromBufferAttribute(d,g),Za(fs,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Za(i,e,t,n,s,r,a){const o=oa.distanceSqToPoint(i);if(o<t){const l=new N;oa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Cn extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Bc extends wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends wt{constructor(e,t,n,s,r,a,o,l,c,u=vi){if(u!==vi&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vi&&(n=qn),n===void 0&&u===bi&&(n=Ei),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mn extends bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,f=t/l,m=[],g=[],v=[],p=[];for(let h=0;h<u;h++){const w=h*f-a;for(let b=0;b<c;b++){const M=b*d-r;g.push(M,-w,0),v.push(0,0,1),p.push(b/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){const b=w+c*h,M=w+c*(h+1),P=w+1+c*(h+1),T=w+1+c*h;m.push(b,M,T),m.push(M,P,T)}this.setIndex(m),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.width,e.height,e.widthSegments,e.heightSegments)}}class va extends bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new N,f=new N,m=[],g=[],v=[],p=[];for(let h=0;h<=n;h++){const w=[],b=h/n;let M=0;h===0&&a===0?M=.5/t:h===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){const T=P/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+b*o),d.y=e*Math.cos(a+b*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+b*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(T+M,1-b),w.push(c++)}u.push(w)}for(let h=0;h<n;h++)for(let w=0;w<t;w++){const b=u[h][w+1],M=u[h][w],P=u[h+1][w],T=u[h+1][w+1];(h!==0||a>0)&&m.push(b,M,T),(h!==n-1||l<Math.PI)&&m.push(M,P,T)}this.setIndex(m),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(v,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lr extends Kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zc extends Kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kc extends Kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Hc extends ol{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const $a={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Gc{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Vc=new Gc;class xa{constructor(e){this.manager=e!==void 0?e:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Wc extends xa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=$a.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=zi("img");function l(){u(),$a.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Xc extends xa{constructor(e){super(e)}load(e,t,n,s){const r=new wt,a=new Wc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class cl extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Yc extends cl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const cr=new ct,ja=new N,Ka=new N;class qc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(ja),Ka.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ka),t.updateMatrixWorld(),cr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(cr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ul extends rl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zc extends qc{constructor(){super(new ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ja extends cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ur extends bt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class $c extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qa{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class jc extends jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function eo(i,e,t,n){const s=Kc(n);switch(t){case Ho:return i*e;case Vo:return i*e;case Wo:return i*e*2;case Xo:return i*e/s.components*s.byteLength;case fa:return i*e/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case pa:return i*e*2/s.components*s.byteLength;case Go:return i*e*3/s.components*s.byteLength;case jt:return i*e*4/s.components*s.byteLength;case ma:return i*e*4/s.components*s.byteLength;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ys:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nr:case Or:return Math.max(i,16)*Math.max(e,8)/4;case Ir:case Fr:return Math.max(i,8)*Math.max(e,8)/2;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Wr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Qr:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ea:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bs:case ta:case na:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qo:case ia:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kc(i){switch(i){case sn:case Bo:return{byteLength:1,components:1};case Bi:case zo:case ki:return{byteLength:2,components:1};case ha:case da:return{byteLength:2,components:4};case qn:case ua:case gn:return{byteLength:4,components:1};case ko:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ca}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ca);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jc(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eu=`#ifdef USE_ALPHAHASH
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
#endif`,tu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,su=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
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
#endif`,au=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ou=`#ifdef USE_BATCHING
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
#endif`,lu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,du=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yu=`#define PI 3.141592653589793
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
} // validated`,Eu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bu=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ku=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wu=`uniform bool receiveShadow;
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
#endif`,Xu=`#ifdef USE_ENVMAP
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
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
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
#endif`,Ku=`struct PhysicalMaterial {
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
}`,Ju=`
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
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,eh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,th=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ih=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ah=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lh=`#if defined( USE_POINTS_UV )
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
#endif`,ch=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ph=`#ifdef USE_MORPHTARGETS
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
#endif`,mh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
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
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Th=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ah=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Oh=`float getShadowMask() {
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
}`,Bh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zh=`#ifdef USE_SKINNING
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
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hh=`#ifdef USE_SKINNING
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
#endif`,Gh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yh=`#ifdef USE_TRANSMISSION
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
#endif`,qh=`#ifdef USE_TRANSMISSION
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
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qh=`uniform sampler2D t2D;
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,id=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
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
}`,rd=`#if DEPTH_PACKING == 3200
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
}`,ad=`#define DISTANCE
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
}`,od=`#define DISTANCE
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
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`uniform float scale;
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
}`,hd=`uniform vec3 diffuse;
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
}`,dd=`#include <common>
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
}`,fd=`uniform vec3 diffuse;
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
}`,pd=`#define LAMBERT
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
}`,md=`#define LAMBERT
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
}`,gd=`#define MATCAP
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
}`,_d=`#define MATCAP
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
}`,vd=`#define NORMAL
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
}`,xd=`#define NORMAL
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
}`,Md=`#define PHONG
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
}`,Sd=`#define PHONG
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
}`,yd=`#define STANDARD
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
}`,Ed=`#define STANDARD
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
}`,bd=`#define TOON
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
}`,wd=`#define TOON
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
}`,Td=`uniform float size;
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
}`,Ad=`uniform vec3 diffuse;
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
}`,Cd=`#include <common>
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
}`,Rd=`uniform vec3 color;
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
}`,Pd=`uniform float rotation;
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
}`,Dd=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Qc,alphahash_pars_fragment:eu,alphamap_fragment:tu,alphamap_pars_fragment:nu,alphatest_fragment:iu,alphatest_pars_fragment:su,aomap_fragment:ru,aomap_pars_fragment:au,batching_pars_vertex:ou,batching_vertex:lu,begin_vertex:cu,beginnormal_vertex:uu,bsdfs:hu,iridescence_fragment:du,bumpmap_pars_fragment:fu,clipping_planes_fragment:pu,clipping_planes_pars_fragment:mu,clipping_planes_pars_vertex:gu,clipping_planes_vertex:_u,color_fragment:vu,color_pars_fragment:xu,color_pars_vertex:Mu,color_vertex:Su,common:yu,cube_uv_reflection_fragment:Eu,defaultnormal_vertex:bu,displacementmap_pars_vertex:wu,displacementmap_vertex:Tu,emissivemap_fragment:Au,emissivemap_pars_fragment:Cu,colorspace_fragment:Ru,colorspace_pars_fragment:Pu,envmap_fragment:Du,envmap_common_pars_fragment:Lu,envmap_pars_fragment:Uu,envmap_pars_vertex:Iu,envmap_physical_pars_fragment:Xu,envmap_vertex:Nu,fog_vertex:Fu,fog_pars_vertex:Ou,fog_fragment:Bu,fog_pars_fragment:zu,gradientmap_pars_fragment:ku,lightmap_pars_fragment:Hu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Vu,lights_pars_begin:Wu,lights_toon_fragment:Yu,lights_toon_pars_fragment:qu,lights_phong_fragment:Zu,lights_phong_pars_fragment:$u,lights_physical_fragment:ju,lights_physical_pars_fragment:Ku,lights_fragment_begin:Ju,lights_fragment_maps:Qu,lights_fragment_end:eh,logdepthbuf_fragment:th,logdepthbuf_pars_fragment:nh,logdepthbuf_pars_vertex:ih,logdepthbuf_vertex:sh,map_fragment:rh,map_pars_fragment:ah,map_particle_fragment:oh,map_particle_pars_fragment:lh,metalnessmap_fragment:ch,metalnessmap_pars_fragment:uh,morphinstance_vertex:hh,morphcolor_vertex:dh,morphnormal_vertex:fh,morphtarget_pars_vertex:ph,morphtarget_vertex:mh,normal_fragment_begin:gh,normal_fragment_maps:_h,normal_pars_fragment:vh,normal_pars_vertex:xh,normal_vertex:Mh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:bh,iridescence_pars_fragment:wh,opaque_fragment:Th,packing:Ah,premultiplied_alpha_fragment:Ch,project_vertex:Rh,dithering_fragment:Ph,dithering_pars_fragment:Dh,roughnessmap_fragment:Lh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Ih,shadowmap_pars_vertex:Nh,shadowmap_vertex:Fh,shadowmask_pars_fragment:Oh,skinbase_vertex:Bh,skinning_pars_vertex:zh,skinning_vertex:kh,skinnormal_vertex:Hh,specularmap_fragment:Gh,specularmap_pars_fragment:Vh,tonemapping_fragment:Wh,tonemapping_pars_fragment:Xh,transmission_fragment:Yh,transmission_pars_fragment:qh,uv_pars_fragment:Zh,uv_pars_vertex:$h,uv_vertex:jh,worldpos_vertex:Kh,background_vert:Jh,background_frag:Qh,backgroundCube_vert:ed,backgroundCube_frag:td,cube_vert:nd,cube_frag:id,depth_vert:sd,depth_frag:rd,distanceRGBA_vert:ad,distanceRGBA_frag:od,equirect_vert:ld,equirect_frag:cd,linedashed_vert:ud,linedashed_frag:hd,meshbasic_vert:dd,meshbasic_frag:fd,meshlambert_vert:pd,meshlambert_frag:md,meshmatcap_vert:gd,meshmatcap_frag:_d,meshnormal_vert:vd,meshnormal_frag:xd,meshphong_vert:Md,meshphong_frag:Sd,meshphysical_vert:yd,meshphysical_frag:Ed,meshtoon_vert:bd,meshtoon_frag:wd,points_vert:Td,points_frag:Ad,shadow_vert:Cd,shadow_frag:Rd,sprite_vert:Pd,sprite_frag:Dd},oe={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},nn={basic:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Dt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Dt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Dt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Dt([oe.points,oe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Dt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Dt([oe.common,oe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Dt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Dt([oe.sprite,oe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Dt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Dt([oe.lights,oe.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};nn.physical={uniforms:Dt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ps={r:0,b:0,g:0},Hn=new rn,Ld=new ct;function Ud(i,e,t,n,s,r,a){const o=new Ae(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const P=g(b);P===null?h(o,l):P&&P.isColor&&(h(P,1),M=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,M){const P=g(M);P&&(P.isCubeTexture||P.mapping===Ls)?(u===void 0&&(u=new _t(new Wi(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:Ti(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hn.copy(M.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ld.makeRotationFromEuler(Hn)),u.material.toneMapped=et.getTransfer(P.colorSpace)!==nt,(d!==P||f!==P.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=P,f=P.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new _t(new mn(2,2),new Rt({name:"BackgroundMaterial",uniforms:Ti(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=et.getTransfer(P.colorSpace)!==nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||f!==P.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,f=P.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,M){b.getRGB(ps,sl(i)),n.buffers.color.setClear(ps.r,ps.g,ps.b,M,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:v,addToRenderList:p,dispose:w}}function Id(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,D,X,H,G){let j=!1;const Y=d(H,X,D);r!==Y&&(r=Y,c(r.object)),j=m(S,H,X,G),j&&g(S,H,X,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(S,D,X,H),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function d(S,D,X){const H=X.wireframe===!0;let G=n[S.id];G===void 0&&(G={},n[S.id]=G);let j=G[D.id];j===void 0&&(j={},G[D.id]=j);let Y=j[H];return Y===void 0&&(Y=f(l()),j[H]=Y),Y}function f(S){const D=[],X=[],H=[];for(let G=0;G<t;G++)D[G]=0,X[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:H,object:S,attributes:{},index:null}}function m(S,D,X,H){const G=r.attributes,j=D.attributes;let Y=0;const J=X.getAttributes();for(const V in J)if(J[V].location>=0){const de=G[V];let fe=j[V];if(fe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),de===void 0||de.attribute!==fe||fe&&de.data!==fe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(S,D,X,H){const G={},j=D.attributes;let Y=0;const J=X.getAttributes();for(const V in J)if(J[V].location>=0){let de=j[V];de===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const fe={};fe.attribute=de,de&&de.data&&(fe.data=de.data),G[V]=fe,Y++}r.attributes=G,r.attributesNum=Y,r.index=H}function v(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function p(S){h(S,0)}function h(S,D){const X=r.newAttributes,H=r.enabledAttributes,G=r.attributeDivisors;X[S]=1,H[S]===0&&(i.enableVertexAttribArray(S),H[S]=1),G[S]!==D&&(i.vertexAttribDivisor(S,D),G[S]=D)}function w(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,H=D.length;X<H;X++)D[X]!==S[X]&&(i.disableVertexAttribArray(X),D[X]=0)}function b(S,D,X,H,G,j,Y){Y===!0?i.vertexAttribIPointer(S,D,X,G,j):i.vertexAttribPointer(S,D,X,H,G,j)}function M(S,D,X,H){v();const G=H.attributes,j=X.getAttributes(),Y=D.defaultAttributeValues;for(const J in j){const V=j[J];if(V.location>=0){let se=G[J];if(se===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),se!==void 0){const de=se.normalized,fe=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const Ze=Fe.buffer,q=Fe.type,ie=Fe.bytesPerElement,Se=q===i.INT||q===i.UNSIGNED_INT||se.gpuType===ua;if(se.isInterleavedBufferAttribute){const le=se.data,Pe=le.stride,Le=se.offset;if(le.isInstancedInterleavedBuffer){for(let me=0;me<V.locationSize;me++)h(V.location+me,le.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<V.locationSize;me++)p(V.location+me);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let me=0;me<V.locationSize;me++)b(V.location+me,fe/V.locationSize,q,de,Pe*ie,(Le+fe/V.locationSize*me)*ie,Se)}else{if(se.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)h(V.location+le,se.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let le=0;le<V.locationSize;le++)p(V.location+le);i.bindBuffer(i.ARRAY_BUFFER,Ze);for(let le=0;le<V.locationSize;le++)b(V.location+le,fe/V.locationSize,q,de,fe*ie,fe/V.locationSize*le*ie,Se)}}else if(Y!==void 0){const de=Y[J];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(V.location,de);break;case 3:i.vertexAttrib3fv(V.location,de);break;case 4:i.vertexAttrib4fv(V.location,de);break;default:i.vertexAttrib1fv(V.location,de)}}}}w()}function P(){O();for(const S in n){const D=n[S];for(const X in D){const H=D[X];for(const G in H)u(H[G].object),delete H[G];delete D[X]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const X in D){const H=D[X];for(const G in H)u(H[G].object),delete H[G];delete D[X]}delete n[S.id]}function A(S){for(const D in n){const X=n[D];if(X[S.id]===void 0)continue;const H=X[S.id];for(const G in H)u(H[G].object),delete H[G];delete X[S.id]}}function O(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:w}}function Nd(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fd(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==jt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const O=A===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==gn&&!O)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:T}}function Od(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new An,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const w=r?0:n,b=w*4;let M=h.clippingState||null;l.value=M,M=u(g,f,b,m);for(let P=0;P!==b;++P)M[P]=t[P];h.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const h=m+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,M=m;b!==v;++b,M+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function Bd(i){let e=new WeakMap;function t(a,o){return o===Pr?a.mapping=Si:o===Dr&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Pr||o===Dr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const mi=4,to=[.125,.215,.35,.446,.526,.582],Xn=20,hr=new ul,no=new Ae;let dr=null,fr=0,pr=0,mr=!1;const Vn=(1+Math.sqrt(5))/2,di=1/Vn,io=[new N(-Vn,di,0),new N(Vn,di,0),new N(-di,0,Vn),new N(di,0,Vn),new N(0,Vn,-di),new N(0,Vn,di),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class so{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ao(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dr,fr,pr),this._renderer.xr.enabled=mr,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Si||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget(),fr=this._renderer.getActiveCubeFace(),pr=this._renderer.getActiveMipmapLevel(),mr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:ki,format:jt,colorSpace:wi,depthBuffer:!1},s=ro(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ro(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zd(r)),this._blurMaterial=kd(r,e,t)}return s}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,s){const o=new Zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(no),u.toneMapping=Pn,u.autoClear=!1;const m=new tl({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new _t(new Wi,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(no),v=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):w===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const b=this._cubeSize;ms(s,w*b,h>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Si||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ao());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;ms(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=io[(s-r-1)%io.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _t(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Xn-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Xn;p>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const h=[];let w=0;for(let A=0;A<Xn;++A){const O=A/v,y=Math.exp(-O*O/2);h.push(y),A===0?w+=y:A<p&&(w+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[s],P=3*M*(s>b-mi?s-b+mi:0),T=4*(this._cubeSize-M);ms(t,P,T,3*M,2*M),l.setRenderTarget(t),l.render(d,hr)}}function zd(i){const e=[],t=[],n=[];let s=i;const r=i-mi+1+to.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-mi?l=to[a-i+mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,v=3,p=2,h=1,w=new Float32Array(v*g*m),b=new Float32Array(p*g*m),M=new Float32Array(h*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,O=T>2?0:-1,y=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];w.set(y,v*g*T),b.set(f,p*g*T);const S=[T,T,T,T,T,T];M.set(S,h*g*T)}const P=new bt;P.setAttribute("position",new lt(w,v)),P.setAttribute("uv",new lt(b,p)),P.setAttribute("faceIndex",new lt(M,h)),e.push(P),s>mi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ro(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kd(i,e,t){const n=new Float32Array(Xn),s=new N(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ao(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function oo(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ma(){return`

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
	`}function Hd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Pr||l===Dr,u=l===Si||l===yi;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new so(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new so(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Vd(i,e,t,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let b=0,M=w.length;b<M;b+=3){const P=w[b+0],T=w[b+1],A=w[b+2];f.push(P,T,T,A,A,P)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,M=w.length/3-1;b<M;b+=3){const P=b+0,T=b+1,A=b+2;f.push(P,T,T,A,A,P)}}else return;const p=new(jo(f)?il:nl)(f,1);p.version=v;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Wd(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*a,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],v[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,g);let h=0;for(let w=0;w<g;w++)h+=m[w]*v[w];t.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Xd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yd(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let S=function(){O.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],w=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),p===!0&&(M=3);let P=o.attributes.position.count*M,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*T*4*d),O=new Jo(A,P,T,d);O.type=gn,O.needsUpdate=!0;const y=M*4;for(let D=0;D<d;D++){const X=h[D],H=w[D],G=b[D],j=P*T*4*D;for(let Y=0;Y<X.count;Y++){const J=Y*y;g===!0&&(s.fromBufferAttribute(X,Y),A[j+J+0]=s.x,A[j+J+1]=s.y,A[j+J+2]=s.z,A[j+J+3]=0),v===!0&&(s.fromBufferAttribute(H,Y),A[j+J+4]=s.x,A[j+J+5]=s.y,A[j+J+6]=s.z,A[j+J+7]=0),p===!0&&(s.fromBufferAttribute(G,Y),A[j+J+8]=s.x,A[j+J+9]=s.y,A[j+J+10]=s.z,A[j+J+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:O,size:new Ce(P,T)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function qd(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const dl=new wt,lo=new ll(1,1),fl=new Jo,pl=new pc,ml=new al,co=[],uo=[],ho=new Float32Array(16),fo=new Float32Array(9),po=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=co[s];if(r===void 0&&(r=new Float32Array(s),co[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Is(i,e){let t=uo[e];t===void 0&&(t=new Int32Array(e),uo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;po.set(n),i.uniformMatrix2fv(this.addr,!1,po),Mt(t,n)}}function Qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;fo.set(n),i.uniformMatrix3fv(this.addr,!1,fo),Mt(t,n)}}function ef(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;ho.set(n),i.uniformMatrix4fv(this.addr,!1,ho),Mt(t,n)}}function tf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function af(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function uf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lo.compareFunction=$o,r=lo):r=dl,t.setTexture2D(e||r,s)}function hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||pl,s)}function df(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ml,s)}function ff(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fl,s)}function pf(i){switch(i){case 5126:return Zd;case 35664:return $d;case 35665:return jd;case 35666:return Kd;case 35674:return Jd;case 35675:return Qd;case 35676:return ef;case 5124:case 35670:return tf;case 35667:case 35671:return nf;case 35668:case 35672:return sf;case 35669:case 35673:return rf;case 5125:return af;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}function mf(i,e){i.uniform1fv(this.addr,e)}function gf(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function _f(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function vf(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function xf(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mf(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sf(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function yf(i,e){i.uniform1iv(this.addr,e)}function Ef(i,e){i.uniform2iv(this.addr,e)}function bf(i,e){i.uniform3iv(this.addr,e)}function wf(i,e){i.uniform4iv(this.addr,e)}function Tf(i,e){i.uniform1uiv(this.addr,e)}function Af(i,e){i.uniform2uiv(this.addr,e)}function Cf(i,e){i.uniform3uiv(this.addr,e)}function Rf(i,e){i.uniform4uiv(this.addr,e)}function Pf(i,e,t){const n=this.cache,s=e.length,r=Is(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||dl,r[a])}function Df(i,e,t){const n=this.cache,s=e.length,r=Is(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||pl,r[a])}function Lf(i,e,t){const n=this.cache,s=e.length,r=Is(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ml,r[a])}function Uf(i,e,t){const n=this.cache,s=e.length,r=Is(t,s);xt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||fl,r[a])}function If(i){switch(i){case 5126:return mf;case 35664:return gf;case 35665:return _f;case 35666:return vf;case 35674:return xf;case 35675:return Mf;case 35676:return Sf;case 5124:case 35670:return yf;case 35667:case 35671:return Ef;case 35668:case 35672:return bf;case 35669:case 35673:return wf;case 5125:return Tf;case 36294:return Af;case 36295:return Cf;case 36296:return Rf;case 35678:case 36198:case 36298:case 36306:case 35682:return Pf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Lf;case 36289:case 36303:case 36311:case 36292:return Uf}}class Nf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pf(t.type)}}class Ff{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=If(t.type)}}class Of{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function mo(i,e){i.seq.push(e),i.map[e.id]=e}function Bf(i,e,t){const n=i.name,s=n.length;for(gr.lastIndex=0;;){const r=gr.exec(n),a=gr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mo(t,c===void 0?new Nf(o,i,e):new Ff(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Of(o),mo(t,d)),t=d}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Bf(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function go(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zf=37297;let kf=0;function Hf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _o=new He;function Gf(i){et._getMatrix(_o,et.workingColorSpace,i);const e=`mat3( ${_o.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case As:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hf(i.getShaderSource(e),a)}else return s}function Vf(i,e){const t=Gf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wf(i,e){let t;switch(e){case kl:t="Linear";break;case Hl:t="Reinhard";break;case Gl:t="Cineon";break;case Fo:t="ACESFilmic";break;case Wl:t="AgX";break;case Xl:t="Neutral";break;case Vl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gs=new N;function Xf(){et.getLuminanceCoefficients(gs);const i=gs.x.toFixed(4),e=gs.y.toFixed(4),t=gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function qf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Zf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Oi(i){return i!==""}function xo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(i){return i.replace($f,Kf)}const jf=new Map;function Kf(i,e){let t=We[e];if(t===void 0){const n=jf.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const Jf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function So(i){return i.replace(Jf,Qf)}function Qf(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yo(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ep(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Io?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function tp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case yi:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function np(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function ip(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case No:e="ENVMAP_BLENDING_MULTIPLY";break;case Bl:e="ENVMAP_BLENDING_MIX";break;case zl:e="ENVMAP_BLENDING_ADD";break}return e}function sp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function rp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ep(t),c=tp(t),u=np(t),d=ip(t),f=sp(t),m=Yf(t),g=qf(r),v=s.createProgram();let p,h,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oi).join(`
`),h.length>0&&(h+=`
`)):(p=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),h=[yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?We.tonemapping_pars_fragment:"",t.toneMapping!==Pn?Wf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Vf("linearToOutputTexel",t.outputColorSpace),Xf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),a=la(a),a=xo(a,t),a=Mo(a,t),o=la(o),o=xo(o,t),o=Mo(o,t),a=So(a),o=So(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Aa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Aa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=w+p+a,M=w+h+o,P=go(s,s.VERTEX_SHADER,b),T=go(s,s.FRAGMENT_SHADER,M);s.attachShader(v,P),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(P).trim(),G=s.getShaderInfoLog(T).trim();let j=!0,Y=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,P,T);else{const J=vo(s,P,"vertex"),V=vo(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+J+`
`+V)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(H===""||G==="")&&(Y=!1);Y&&(D.diagnostics={runnable:j,programLog:X,vertexShader:{log:H,prefix:p},fragmentShader:{log:G,prefix:h}})}s.deleteShader(P),s.deleteShader(T),O=new Ts(s,v),y=Zf(s,v)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,zf)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let ap=0;class op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lp(e),t.set(e,n)),n}}class lp{constructor(e){this.id=ap++,this.code=e,this.usedTimes=0}}function cp(i,e,t,n,s,r,a){const o=new Qo,l=new op,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,D,X,H){const G=X.fog,j=H.geometry,Y=y.isMeshStandardMaterial?X.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),V=J&&J.mapping===Ls?J.image.height:null,se=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fe=de!==void 0?de.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let Ze,q,ie,Se;if(se){const Je=nn[se];Ze=Je.vertexShader,q=Je.fragmentShader}else Ze=y.vertexShader,q=y.fragmentShader,l.update(y),ie=l.getVertexShaderID(y),Se=l.getFragmentShaderID(y);const le=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,me=H.isBatchedMesh===!0,st=!!y.map,je=!!y.matcap,ut=!!J,C=!!y.aoMap,Nt=!!y.lightMap,Ge=!!y.bumpMap,Be=!!y.normalMap,be=!!y.displacementMap,tt=!!y.emissiveMap,ye=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,B=y.clearcoat>0,K=y.dispersion>0,Q=y.iridescence>0,Z=y.sheen>0,Me=y.transmission>0,ae=_&&!!y.anisotropyMap,pe=B&&!!y.clearcoatMap,qe=B&&!!y.clearcoatNormalMap,ne=B&&!!y.clearcoatRoughnessMap,xe=Q&&!!y.iridescenceMap,Te=Q&&!!y.iridescenceThicknessMap,De=Z&&!!y.sheenColorMap,_e=Z&&!!y.sheenRoughnessMap,ze=!!y.specularMap,Ne=!!y.specularColorMap,Ke=!!y.specularIntensityMap,L=Me&&!!y.transmissionMap,re=Me&&!!y.thicknessMap,W=!!y.gradientMap,$=!!y.alphaMap,he=y.alphaTest>0,ce=!!y.alphaHash,Oe=!!y.extensions;let rt=Pn;y.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(rt=i.toneMapping);const pt={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:q,defines:y.defines,customVertexShaderID:ie,customFragmentShaderID:Se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:me,batchingColor:me&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:wi,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:je,envMap:ut,envMapMode:ut&&J.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Nt,bumpMap:Ge,normalMap:Be,displacementMap:f&&be,emissiveMap:tt,normalMapObjectSpace:Be&&y.normalMapType===$l,normalMapTangentSpace:Be&&y.normalMapType===Zo,metalnessMap:ye,roughnessMap:E,anisotropy:_,anisotropyMap:ae,clearcoat:B,clearcoatMap:pe,clearcoatNormalMap:qe,clearcoatRoughnessMap:ne,dispersion:K,iridescence:Q,iridescenceMap:xe,iridescenceThicknessMap:Te,sheen:Z,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:ze,specularColorMap:Ne,specularIntensityMap:Ke,transmission:Me,transmissionMap:L,thicknessMap:re,gradientMap:W,opaque:y.transparent===!1&&y.blending===_i&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:he,alphaHash:ce,combine:y.combine,mapUv:st&&v(y.map.channel),aoMapUv:C&&v(y.aoMap.channel),lightMapUv:Nt&&v(y.lightMap.channel),bumpMapUv:Ge&&v(y.bumpMap.channel),normalMapUv:Be&&v(y.normalMap.channel),displacementMapUv:be&&v(y.displacementMap.channel),emissiveMapUv:tt&&v(y.emissiveMap.channel),metalnessMapUv:ye&&v(y.metalnessMap.channel),roughnessMapUv:E&&v(y.roughnessMap.channel),anisotropyMapUv:ae&&v(y.anisotropyMap.channel),clearcoatMapUv:pe&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:qe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(y.sheenRoughnessMap.channel),specularMapUv:ze&&v(y.specularMap.channel),specularColorMapUv:Ne&&v(y.specularColorMap.channel),specularIntensityMapUv:Ke&&v(y.specularIntensityMap.channel),transmissionMapUv:L&&v(y.transmissionMap.channel),thicknessMapUv:re&&v(y.thicknessMap.channel),alphaMapUv:$&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Be||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(st||$),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pe,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:tt&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===It,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function h(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)S.push(D),S.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(w(S,y),b(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function w(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let D;if(S){const X=nn[S];D=Tc.clone(X.uniforms)}else D=y.uniforms;return D}function P(y,S){let D;for(let X=0,H=u.length;X<H;X++){const G=u[X];if(G.cacheKey===S){D=G,++D.usedTimes;break}}return D===void 0&&(D=new rp(i,S,y,r),u.push(D)),D}function T(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:M,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:O}}function up(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Eo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,m,g,v,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=p),e++,h}function o(d,f,m,g,v,p){const h=a(d,f,m,g,v,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,v,p){const h=a(d,f,m,g,v,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||hp),n.length>1&&n.sort(f||Eo),s.length>1&&s.sort(f||Eo)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function dp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new bo,i.set(n,[a])):s>=r.length?(a=new bo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ae};break;case"SpotLight":t={position:new N,direction:new N,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function pp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let mp=0;function gp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function _p(i){const e=new fp,t=pp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ct,a=new ct;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,v=0,p=0,h=0,w=0,b=0,M=0,P=0,T=0,A=0;c.sort(gp);for(let y=0,S=c.length;y<S;y++){const D=c[y],X=D.color,H=D.intensity,G=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=X.r*H,d+=X.g*H,f+=X.b*H;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],H);A++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,V=t.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=D.shadow.matrix,w++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(X).multiplyScalar(H),Y.distance=G,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[v]=Y;const J=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,J.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[v]=J.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=j,M++}v++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(X).multiplyScalar(H),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const J=D.shadow,V=t.get(D);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(H),Y.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==p||O.hemiLength!==h||O.numDirectionalShadows!==w||O.numPointShadows!==b||O.numSpotShadows!==M||O.numSpotMaps!==P||O.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,O.directionalLength=m,O.pointLength=g,O.spotLength=v,O.rectAreaLength=p,O.hemiLength=h,O.numDirectionalShadows=w,O.numPointShadows=b,O.numSpotShadows=M,O.numSpotMaps=P,O.numLightProbes=A,n.version=mp++)}function l(c,u){let d=0,f=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const b=c[h];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(b.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function wo(i){const e=new _p(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new wo(i),e.set(s,[o])):r>=a.length?(o=new wo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const xp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mp=`uniform sampler2D shadow_pass;
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
}`;function Sp(i,e,t){let n=new _a;const s=new Ce,r=new Ce,a=new dt,o=new zc({depthPacking:Zl}),l=new kc,c={},u=t.maxTextureSize,d={[Dn]:It,[It]:Dn,[Ut]:Ut},f=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:xp,fragmentShader:Mp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uo;let h=this.type;this.render=function(T,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Rn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const H=h!==fn&&this.type===fn,G=h===fn&&this.type!==fn;for(let j=0,Y=T.length;j<Y;j++){const J=T[j],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const se=V.getFrameExtents();if(s.multiply(se),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,V.mapSize.y=r.y)),V.map===null||H===!0||G===!0){const fe=this.type!==fn?{minFilter:Vt,magFilter:Vt}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(s.x,s.y,fe),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const de=V.getViewportCount();for(let fe=0;fe<de;fe++){const Fe=V.getViewport(fe);a.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),X.viewport(a),V.updateMatrices(J,fe),n=V.getFrustum(),M(A,O,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===fn&&w(V,O),V.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(y,S,D)};function w(T,A){const O=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,O,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,O,m,v,null)}function b(T,A,O,y){let S=null;const D=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)S=D;else if(S=O.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=S.uuid,H=A.uuid;let G=c[X];G===void 0&&(G={},c[X]=G);let j=G[H];j===void 0&&(j=S.clone(),G[H]=j,A.addEventListener("dispose",P)),S=j}if(S.visible=A.visible,S.wireframe=A.wireframe,y===fn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:d[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=O}return S}function M(T,A,O,y,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const H=e.update(T),G=T.material;if(Array.isArray(G)){const j=H.groups;for(let Y=0,J=j.length;Y<J;Y++){const V=j[Y],se=G[V.materialIndex];if(se&&se.visible){const de=b(T,se,y,S);T.onBeforeShadow(i,T,A,O,H,de,V),i.renderBufferDirect(O,null,H,de,T,V),T.onAfterShadow(i,T,A,O,H,de,V)}}}else if(G.visible){const j=b(T,G,y,S);T.onBeforeShadow(i,T,A,O,H,j,null),i.renderBufferDirect(O,null,H,j,T,null),T.onAfterShadow(i,T,A,O,H,j,null)}}const X=T.children;for(let H=0,G=X.length;H<G;H++)M(X[H],A,O,y,S)}function P(T){T.target.removeEventListener("dispose",P);for(const O in c){const y=c[O],S=T.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const yp={[Er]:br,[wr]:Cr,[Tr]:Rr,[Mi]:Ar,[br]:Er,[Cr]:wr,[Rr]:Tr,[Ar]:Mi};function Ep(i,e){function t(){let L=!1;const re=new dt;let W=null;const $=new dt(0,0,0,0);return{setMask:function(he){W!==he&&!L&&(i.colorMask(he,he,he,he),W=he)},setLocked:function(he){L=he},setClear:function(he,ce,Oe,rt,pt){pt===!0&&(he*=rt,ce*=rt,Oe*=rt),re.set(he,ce,Oe,rt),$.equals(re)===!1&&(i.clearColor(he,ce,Oe,rt),$.copy(re))},reset:function(){L=!1,W=null,$.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,W=null,$=null,he=null;return{setReversed:function(ce){if(re!==ce){const Oe=e.get("EXT_clip_control");re?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const rt=he;he=null,this.setClear(rt)}re=ce},getReversed:function(){return re},setTest:function(ce){ce?le(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ce){W!==ce&&!L&&(i.depthMask(ce),W=ce)},setFunc:function(ce){if(re&&(ce=yp[ce]),$!==ce){switch(ce){case Er:i.depthFunc(i.NEVER);break;case br:i.depthFunc(i.ALWAYS);break;case wr:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Tr:i.depthFunc(i.EQUAL);break;case Ar:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ce}},setLocked:function(ce){L=ce},setClear:function(ce){he!==ce&&(re&&(ce=1-ce),i.clearDepth(ce),he=ce)},reset:function(){L=!1,W=null,$=null,he=null,re=!1}}}function s(){let L=!1,re=null,W=null,$=null,he=null,ce=null,Oe=null,rt=null,pt=null;return{setTest:function(Je){L||(Je?le(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Je){re!==Je&&!L&&(i.stencilMask(Je),re=Je)},setFunc:function(Je,Ft,Xt){(W!==Je||$!==Ft||he!==Xt)&&(i.stencilFunc(Je,Ft,Xt),W=Je,$=Ft,he=Xt)},setOp:function(Je,Ft,Xt){(ce!==Je||Oe!==Ft||rt!==Xt)&&(i.stencilOp(Je,Ft,Xt),ce=Je,Oe=Ft,rt=Xt)},setLocked:function(Je){L=Je},setClear:function(Je){pt!==Je&&(i.clearStencil(Je),pt=Je)},reset:function(){L=!1,re=null,W=null,$=null,he=null,ce=null,Oe=null,rt=null,pt=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,w=null,b=null,M=null,P=null,T=null,A=new Ae(0,0,0),O=0,y=!1,S=null,D=null,X=null,H=null,G=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=J>=2);let se=null,de={};const fe=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ze=new dt().fromArray(fe),q=new dt().fromArray(Fe);function ie(L,re,W,$){const he=new Uint8Array(4),ce=i.createTexture();i.bindTexture(L,ce),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(re+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ce}const Se={};Se[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Mi),Ge(!1),Be(ya),le(i.CULL_FACE),C(Rn);function le(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Pe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Le(L,re){return d[L]!==re?(i.bindFramebuffer(L,re),d[L]=re,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function me(L,re){let W=m,$=!1;if(L){W=f.get(re),W===void 0&&(W=[],f.set(re,W));const he=L.textures;if(W.length!==he.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,Oe=he.length;ce<Oe;ce++)W[ce]=i.COLOR_ATTACHMENT0+ce;W.length=he.length,$=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,$=!0);$&&i.drawBuffers(W)}function st(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const je={[Wn]:i.FUNC_ADD,[Sl]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};je[El]=i.MIN,je[bl]=i.MAX;const ut={[wl]:i.ZERO,[Tl]:i.ONE,[Al]:i.SRC_COLOR,[Sr]:i.SRC_ALPHA,[Ul]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[Cl]:i.ONE_MINUS_SRC_COLOR,[yr]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function C(L,re,W,$,he,ce,Oe,rt,pt,Je){if(L===Rn){v===!0&&(Pe(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),L!==Ml){if(L!==p||Je!==y){if((h!==Wn||M!==Wn)&&(i.blendEquation(i.FUNC_ADD),h=Wn,M=Wn),Je)switch(L){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.ONE,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ea:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,b=null,P=null,T=null,A.set(0,0,0),O=0,p=L,y=Je}return}he=he||re,ce=ce||W,Oe=Oe||$,(re!==h||he!==M)&&(i.blendEquationSeparate(je[re],je[he]),h=re,M=he),(W!==w||$!==b||ce!==P||Oe!==T)&&(i.blendFuncSeparate(ut[W],ut[$],ut[ce],ut[Oe]),w=W,b=$,P=ce,T=Oe),(rt.equals(A)===!1||pt!==O)&&(i.blendColor(rt.r,rt.g,rt.b,pt),A.copy(rt),O=pt),p=L,y=!1}function Nt(L,re){L.side===Ut?Pe(i.CULL_FACE):le(i.CULL_FACE);let W=L.side===It;re&&(W=!W),Ge(W),L.blending===_i&&L.transparent===!1?C(Rn):C(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),tt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(L){S!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),S=L)}function Be(L){L!==vl?(le(i.CULL_FACE),L!==D&&(L===ya?i.cullFace(i.BACK):L===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),D=L}function be(L){L!==X&&(Y&&i.lineWidth(L),X=L)}function tt(L,re,W){L?(le(i.POLYGON_OFFSET_FILL),(H!==re||G!==W)&&(i.polygonOffset(re,W),H=re,G=W)):Pe(i.POLYGON_OFFSET_FILL)}function ye(L){L?le(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+j-1),se!==L&&(i.activeTexture(L),se=L)}function _(L,re,W){W===void 0&&(se===null?W=i.TEXTURE0+j-1:W=se);let $=de[W];$===void 0&&($={type:void 0,texture:void 0},de[W]=$),($.type!==L||$.texture!==re)&&(se!==W&&(i.activeTexture(W),se=W),i.bindTexture(L,re||Se[L]),$.type=L,$.texture=re)}function B(){const L=de[se];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(L){Ze.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ze.copy(L))}function _e(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function ze(L,re){let W=c.get(re);W===void 0&&(W=new WeakMap,c.set(re,W));let $=W.get(L);$===void 0&&($=i.getUniformBlockIndex(re,L.name),W.set(L,$))}function Ne(L,re){const $=c.get(re).get(L);l.get(re)!==$&&(i.uniformBlockBinding(re,$,L.__bindingPointIndex),l.set(re,$))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,de={},d={},f=new WeakMap,m=[],g=null,v=!1,p=null,h=null,w=null,b=null,M=null,P=null,T=null,A=new Ae(0,0,0),O=0,y=!1,S=null,D=null,X=null,H=null,G=null,Ze.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Pe,bindFramebuffer:Le,drawBuffers:me,useProgram:st,setBlending:C,setMaterial:Nt,setFlipSided:Ge,setCullFace:Be,setLineWidth:be,setPolygonOffset:tt,setScissorTest:ye,activeTexture:E,bindTexture:_,unbindTexture:B,compressedTexImage2D:K,compressedTexImage3D:Q,texImage2D:xe,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Ne,texStorage2D:qe,texStorage3D:ne,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:pe,scissor:De,viewport:_e,reset:Ke}}function bp(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return m?new OffscreenCanvas(E,_):zi("canvas")}function v(E,_,B){let K=1;const Q=ye(E);if((Q.width>B||Q.height>B)&&(K=B/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(K*Q.width),Me=Math.floor(K*Q.height);d===void 0&&(d=g(Z,Me));const ae=_?g(Z,Me):d;return ae.width=Z,ae.height=Me,ae.getContext("2d").drawImage(E,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+Me+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,_,B,K,Q=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=_;if(_===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),_===i.RGBA){const Me=Q?As:et.getTransfer(K);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Me===nt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(E,_){let B;return E?_===null||_===qn||_===Ei?B=i.DEPTH24_STENCIL8:_===gn?B=i.DEPTH32F_STENCIL8:_===Bi&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qn||_===Ei?B=i.DEPTH_COMPONENT24:_===gn?B=i.DEPTH_COMPONENT32F:_===Bi&&(B=i.DEPTH_COMPONENT16),B}function P(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==$t?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){const _=E.target;_.removeEventListener("dispose",T),O(_),_.isVideoTexture&&u.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),S(_)}function O(E){const _=n.get(E);if(_.__webglInit===void 0)return;const B=E.source,K=f.get(B);if(K){const Q=K[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(E),Object.keys(K).length===0&&f.delete(B)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const B=E.source,K=f.get(B);delete K[_.__cacheKey],a.memory.textures--}function S(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let Q=0;Q<_.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const B=E.textures;for(let K=0,Q=B.length;K<Q;K++){const Z=n.get(B[K]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[K])}n.remove(E)}let D=0;function X(){D=0}function H(){const E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function G(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const B=n.get(E);if(E.isVideoTexture&&be(E),E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,E,_);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function Y(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function J(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){q(B,E,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function V(E,_){const B=n.get(E);if(E.version>0&&B.__version!==E.version){ie(B,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}const se={[Lr]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},de={[Vt]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[zs]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},fe={[jl]:i.NEVER,[nc]:i.ALWAYS,[Kl]:i.LESS,[$o]:i.LEQUAL,[Jl]:i.EQUAL,[tc]:i.GEQUAL,[Ql]:i.GREATER,[ec]:i.NOTEQUAL};function Fe(E,_){if(_.type===gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===$t||_.magFilter===zs||_.magFilter===Yi||_.magFilter===Yn||_.minFilter===$t||_.minFilter===zs||_.minFilter===Yi||_.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,se[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,de[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,fe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==Yi&&_.minFilter!==Yn||_.type===gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ze(E,_){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));const K=_.source;let Q=f.get(K);Q===void 0&&(Q={},f.set(K,Q));const Z=G(_);if(Z!==E.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[Z].usedTimes++;const Me=Q[E.__cacheKey];Me!==void 0&&(Q[E.__cacheKey].usedTimes--,Me.usedTimes===0&&y(_)),E.__cacheKey=Z,E.__webglTexture=Q[Z].texture}return B}function q(E,_,B){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const Q=Ze(E,_),Z=_.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+B);const Me=n.get(Z);if(Z.version!==Me.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const ae=et.getPrimaries(et.workingColorSpace),pe=_.colorSpace===pn?null:et.getPrimaries(_.colorSpace),qe=_.colorSpace===pn||ae===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ne=v(_.image,!1,s.maxTextureSize);ne=tt(_,ne);const xe=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let De=b(_.internalFormat,xe,Te,_.colorSpace,_.isVideoTexture);Fe(K,_);let _e;const ze=_.mipmaps,Ne=_.isVideoTexture!==!0,Ke=Me.__version===void 0||Q===!0,L=Z.dataReady,re=P(_,ne);if(_.isDepthTexture)De=M(_.format===bi,_.type),Ke&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,De,ne.width,ne.height,0,xe,Te,null));else if(_.isDataTexture)if(ze.length>0){Ne&&Ke&&t.texStorage2D(i.TEXTURE_2D,re,De,ze[0].width,ze[0].height);for(let W=0,$=ze.length;W<$;W++)_e=ze[W],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,xe,Te,_e.data):t.texImage2D(i.TEXTURE_2D,W,De,_e.width,_e.height,0,xe,Te,_e.data);_.generateMipmaps=!1}else Ne?(Ke&&t.texStorage2D(i.TEXTURE_2D,re,De,ne.width,ne.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,xe,Te,ne.data)):t.texImage2D(i.TEXTURE_2D,0,De,ne.width,ne.height,0,xe,Te,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,De,ze[0].width,ze[0].height,ne.depth);for(let W=0,$=ze.length;W<$;W++)if(_e=ze[W],_.format!==jt)if(xe!==null)if(Ne){if(L)if(_.layerUpdates.size>0){const he=eo(_e.width,_e.height,_.format,_.type);for(const ce of _.layerUpdates){const Oe=_e.data.subarray(ce*he/_e.data.BYTES_PER_ELEMENT,(ce+1)*he/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,ce,_e.width,_e.height,1,xe,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ne.depth,xe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,De,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ne.depth,xe,Te,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,De,_e.width,_e.height,ne.depth,0,xe,Te,_e.data)}else{Ne&&Ke&&t.texStorage2D(i.TEXTURE_2D,re,De,ze[0].width,ze[0].height);for(let W=0,$=ze.length;W<$;W++)_e=ze[W],_.format!==jt?xe!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,xe,Te,_e.data):t.texImage2D(i.TEXTURE_2D,W,De,_e.width,_e.height,0,xe,Te,_e.data)}else if(_.isDataArrayTexture)if(Ne){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,De,ne.width,ne.height,ne.depth),L)if(_.layerUpdates.size>0){const W=eo(ne.width,ne.height,_.format,_.type);for(const $ of _.layerUpdates){const he=ne.data.subarray($*W/ne.data.BYTES_PER_ELEMENT,($+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,xe,Te,he)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,Te,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,xe,Te,ne.data);else if(_.isData3DTexture)Ne?(Ke&&t.texStorage3D(i.TEXTURE_3D,re,De,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,Te,ne.data)):t.texImage3D(i.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,xe,Te,ne.data);else if(_.isFramebufferTexture){if(Ke)if(Ne)t.texStorage2D(i.TEXTURE_2D,re,De,ne.width,ne.height);else{let W=ne.width,$=ne.height;for(let he=0;he<re;he++)t.texImage2D(i.TEXTURE_2D,he,De,W,$,0,xe,Te,null),W>>=1,$>>=1}}else if(ze.length>0){if(Ne&&Ke){const W=ye(ze[0]);t.texStorage2D(i.TEXTURE_2D,re,De,W.width,W.height)}for(let W=0,$=ze.length;W<$;W++)_e=ze[W],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,xe,Te,_e):t.texImage2D(i.TEXTURE_2D,W,De,xe,Te,_e);_.generateMipmaps=!1}else if(Ne){if(Ke){const W=ye(ne);t.texStorage2D(i.TEXTURE_2D,re,De,W.width,W.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Te,ne)}else t.texImage2D(i.TEXTURE_2D,0,De,xe,Te,ne);p(_)&&h(K),Me.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,B){if(_.image.length!==6)return;const K=Ze(E,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);const Z=n.get(Q);if(Q.version!==Z.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const Me=et.getPrimaries(et.workingColorSpace),ae=_.colorSpace===pn?null:et.getPrimaries(_.colorSpace),pe=_.colorSpace===pn||Me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const qe=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let $=0;$<6;$++)!qe&&!ne?xe[$]=v(_.image[$],!0,s.maxCubemapSize):xe[$]=ne?_.image[$].image:_.image[$],xe[$]=tt(_,xe[$]);const Te=xe[0],De=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),ze=b(_.internalFormat,De,_e,_.colorSpace),Ne=_.isVideoTexture!==!0,Ke=Z.__version===void 0||K===!0,L=Q.dataReady;let re=P(_,Te);Fe(i.TEXTURE_CUBE_MAP,_);let W;if(qe){Ne&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,ze,Te.width,Te.height);for(let $=0;$<6;$++){W=xe[$].mipmaps;for(let he=0;he<W.length;he++){const ce=W[he];_.format!==jt?De!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,ce.width,ce.height,De,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,ze,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,0,0,ce.width,ce.height,De,_e,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he,ze,ce.width,ce.height,0,De,_e,ce.data)}}}else{if(W=_.mipmaps,Ne&&Ke){W.length>0&&re++;const $=ye(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,ze,$.width,$.height)}for(let $=0;$<6;$++)if(ne){Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xe[$].width,xe[$].height,De,_e,xe[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,xe[$].width,xe[$].height,0,De,_e,xe[$].data);for(let he=0;he<W.length;he++){const Oe=W[he].image[$].image;Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,Oe.width,Oe.height,De,_e,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,ze,Oe.width,Oe.height,0,De,_e,Oe.data)}}else{Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,De,_e,xe[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ze,De,_e,xe[$]);for(let he=0;he<W.length;he++){const ce=W[he];Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,0,0,De,_e,ce.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,he+1,ze,De,_e,ce.image[$])}}}p(_)&&h(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Se(E,_,B,K,Q,Z){const Me=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),pe=b(B.internalFormat,Me,ae,B.colorSpace),qe=n.get(_),ne=n.get(B);if(ne.__renderTarget=_,!qe.__hasExternalTextures){const xe=Math.max(1,_.width>>Z),Te=Math.max(1,_.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,pe,xe,Te,_.depth,0,Me,ae,null):t.texImage2D(Q,Z,pe,xe,Te,0,Me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,ne.__webglTexture,0,Ge(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,ne.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(E,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const K=_.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Z=M(_.stencilBuffer,Q),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Ge(_);Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Z,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,E)}else{const K=_.textures;for(let Q=0;Q<K.length;Q++){const Z=K[Q],Me=r.convert(Z.format,Z.colorSpace),ae=r.convert(Z.type),pe=b(Z.internalFormat,Me,ae,Z.colorSpace),qe=Ge(_);B&&Be(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,pe,_.width,_.height):Be(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const Q=K.__webglTexture,Z=Ge(_);if(_.depthTexture.format===vi)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(_.depthTexture.format===bi)Be(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Le(E){const _=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=K}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Pe(_.__webglFramebuffer,E)}else if(B){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),le(_.__webglDepthbuffer[K],E,!1);else{const Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),le(_.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(E,_,B){const K=n.get(E);_!==void 0&&Se(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Le(E)}function st(E){const _=E.texture,B=n.get(E),K=n.get(_);E.addEventListener("dispose",A);const Q=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let pe=0;pe<_.mipmaps.length;pe++)B.__webglFramebuffer[ae][pe]=i.createFramebuffer()}else B.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)B.__webglFramebuffer[ae]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ae=0,pe=Q.length;ae<pe;ae++){const qe=n.get(Q[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Be(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<Q.length;ae++){const pe=Q[ae];B.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const qe=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),xe=b(pe.internalFormat,qe,ne,pe.colorSpace,E.isXRRenderTarget===!0),Te=Ge(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,xe,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),le(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)Se(B.__webglFramebuffer[ae][pe],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,pe);else Se(B.__webglFramebuffer[ae],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,pe=Q.length;ae<pe;ae++){const qe=Q[ae],ne=n.get(qe);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Fe(i.TEXTURE_2D,qe),Se(B.__webglFramebuffer,E,qe,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),p(qe)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),Fe(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)Se(B.__webglFramebuffer[pe],E,_,i.COLOR_ATTACHMENT0,ae,pe);else Se(B.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ae,0);p(_)&&h(ae),t.unbindTexture()}E.depthBuffer&&Le(E)}function je(E){const _=E.textures;for(let B=0,K=_.length;B<K;B++){const Q=_[B];if(p(Q)){const Z=w(E),Me=n.get(Q).__webglTexture;t.bindTexture(Z,Me),h(Z),t.unbindTexture()}}}const ut=[],C=[];function Nt(E){if(E.samples>0){if(Be(E)===!1){const _=E.textures,B=E.width,K=E.height;let Q=i.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(E),ae=_.length>1;if(ae)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const qe=n.get(_[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,Q,i.NEAREST),l===!0&&(ut.length=0,C.length=0,ut.push(i.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);const qe=n.get(_[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Ge(E){return Math.min(s.maxSamples,E.samples)}function Be(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function be(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function tt(E,_){const B=E.colorSpace,K=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==wi&&B!==pn&&(et.getTransfer(B)===nt?(K!==jt||Q!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=X,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=me,this.setupRenderTarget=st,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Be}function wp(i,e){function t(n,s=pn){let r;const a=et.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===da)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ko)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bo)return i.BYTE;if(n===zo)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===ua)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===gn)return i.FLOAT;if(n===ki)return i.HALF_FLOAT;if(n===Ho)return i.ALPHA;if(n===Go)return i.RGB;if(n===jt)return i.RGBA;if(n===Vo)return i.LUMINANCE;if(n===Wo)return i.LUMINANCE_ALPHA;if(n===vi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===fa)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===pa)return i.RG_INTEGER;if(n===ma)return i.RGBA_INTEGER;if(n===Ms||n===Ss||n===ys||n===Es)if(a===nt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ir||n===Nr||n===Fr||n===Or)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ir)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===zr||n===kr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Br||n===zr)return a===nt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hr||n===Gr||n===Vr||n===Wr||n===Xr||n===Yr||n===qr||n===Zr||n===$r||n===jr||n===Kr||n===Jr||n===Qr||n===ea)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Hr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Jr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qr)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ea)return a===nt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bs||n===ta||n===na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bs)return a===nt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===ia||n===sa||n===ra)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Tp={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ap=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
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

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:Ap,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pp extends jn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const v=new Rp,p=t.getContextAttributes();let h=null,w=null;const b=[],M=[],P=new Ce;let T=null;const A=new Zt;A.viewport=new dt;const O=new Zt;O.viewport=new dt;const y=[A,O],S=new $c;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=b[q];return ie===void 0&&(ie=new _r,b[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=b[q];return ie===void 0&&(ie=new _r,b[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=b[q];return ie===void 0&&(ie=new _r,b[q]=ie),ie.getHandSpace()};function H(q){const ie=M.indexOf(q.inputSource);if(ie===-1)return;const Se=b[ie];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||a),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",j);for(let q=0;q<b.length;q++){const ie=M[q];ie!==null&&(M[q]=null,b[q].disconnect(ie))}D=null,X=null,v.reset(),e.setRenderTarget(h),m=null,f=null,d=null,s=null,w=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let Se=null,le=null,Pe=null;p.depth&&(Pe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=p.stencil?bi:vi,le=p.stencil?Ei:qn);const Le={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new Zn(f.textureWidth,f.textureHeight,{format:jt,type:sn,depthTexture:new ll(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Zn(m.framebufferWidth,m.framebufferHeight,{format:jt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function j(q){for(let ie=0;ie<q.removed.length;ie++){const Se=q.removed[ie],le=M.indexOf(Se);le>=0&&(M[le]=null,b[le].disconnect(Se))}for(let ie=0;ie<q.added.length;ie++){const Se=q.added[ie];let le=M.indexOf(Se);if(le===-1){for(let Le=0;Le<b.length;Le++)if(Le>=M.length){M.push(Se),le=Le;break}else if(M[Le]===null){M[Le]=Se,le=Le;break}if(le===-1)break}const Pe=b[le];Pe&&Pe.connect(Se)}}const Y=new N,J=new N;function V(q,ie,Se){Y.setFromMatrixPosition(ie.matrixWorld),J.setFromMatrixPosition(Se.matrixWorld);const le=Y.distanceTo(J),Pe=ie.projectionMatrix.elements,Le=Se.projectionMatrix.elements,me=Pe[14]/(Pe[10]-1),st=Pe[14]/(Pe[10]+1),je=(Pe[9]+1)/Pe[5],ut=(Pe[9]-1)/Pe[5],C=(Pe[8]-1)/Pe[0],Nt=(Le[8]+1)/Le[0],Ge=me*C,Be=me*Nt,be=le/(-C+Nt),tt=be*-C;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(tt),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ye=me+be,E=st+be,_=Ge-tt,B=Be+(le-tt),K=je*st/E*ye,Q=ut*st/E*ye;q.projectionMatrix.makePerspective(_,B,K,Q,ye,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ie=q.near,Se=q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),S.near=O.near=A.near=ie,S.far=O.far=A.far=Se,(D!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far),A.layers.mask=q.layers.mask|2,O.layers.mask=q.layers.mask|4,S.layers.mask=A.layers.mask|O.layers.mask;const le=q.parent,Pe=S.cameras;se(S,le);for(let Le=0;Le<Pe.length;Le++)se(Pe[Le],le);Pe.length===2?V(S,A,O):S.projectionMatrix.copy(A.projectionMatrix),de(q,S,le)};function de(q,ie,Se){Se===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=aa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let fe=null;function Fe(q,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){const Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let le=!1;Se.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let Le=0;Le<Se.length;Le++){const me=Se[Le];let st=null;if(m!==null)st=m.getViewport(me);else{const ut=d.getViewSubImage(f,me);st=ut.viewport,Le===0&&(e.setRenderTargetTextures(w,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),e.setRenderTarget(w))}let je=y[Le];je===void 0&&(je=new Zt,je.layers.enable(Le),je.viewport=new dt,y[Le]=je),je.matrix.fromArray(me.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(me.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(st.x,st.y,st.width,st.height),Le===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(je)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=d.getDepthInformation(Se[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,s.renderState)}}for(let Se=0;Se<b.length;Se++){const le=M[Se],Pe=b[Se];le!==null&&Pe!==void 0&&Pe.update(le,ie,c||a)}fe&&fe(q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ze=new hl;Ze.setAnimationLoop(Fe),this.setAnimationLoop=function(q){fe=q},this.dispose=function(){}}}const Gn=new rn,Dp=new ct;function Lp(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,sl(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,w,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,M)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,w,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===It&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===It&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const w=e.get(h),b=w.envMap,M=w.envMapRotation;b&&(p.envMap.value=b,Gn.copy(M),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),p.envMapRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(Gn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,w,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const w=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Up(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",p));const P=b.program;n.updateUBOMapping(w,P);const T=e.render.frame;r[w.id]!==T&&(f(w),r[w.id]=T)}function u(w){const b=d();w.__bindingPointIndex=b;const M=i.createBuffer(),P=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const b=s[w.id],M=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,A=M.length;T<A;T++){const O=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,S=O.length;y<S;y++){const D=O[y];if(m(D,T,y,P)===!0){const X=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let j=0;j<H.length;j++){const Y=H[j],J=v(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,X+G,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,b,M,P){const T=w.value,A=b+"_"+M;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const O=P[A];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return P[A]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(w){const b=w.uniforms;let M=0;const P=16;for(let A=0,O=b.length;A<O;A++){const y=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,D=y.length;S<D;S++){const X=y[S],H=Array.isArray(X.value)?X.value:[X.value];for(let G=0,j=H.length;G<j;G++){const Y=H[G],J=v(Y),V=M%P,se=V%J.boundary,de=V+se;M+=se,de!==0&&P-de<J.storage&&(M+=P-de),X.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=J.storage}}}const T=M%P;return T>0&&(M+=P-T),w.__size=M,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function p(w){const b=w.target;b.removeEventListener("dispose",p);const M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Ip{constructor(e={}){const{canvas:t=rc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),v=new Int32Array(4);let p=null,h=null;const w=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Pn,this.toneMappingExposure=1;const M=this;let P=!1,T=0,A=0,O=null,y=-1,S=null;const D=new dt,X=new dt;let H=null;const G=new Ae(0);let j=0,Y=t.width,J=t.height,V=1,se=null,de=null;const fe=new dt(0,0,Y,J),Fe=new dt(0,0,Y,J);let Ze=!1;const q=new _a;let ie=!1,Se=!1;this.transmissionResolutionScale=1;const le=new ct,Pe=new ct,Le=new N,me=new dt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function ut(){return O===null?V:1}let C=n;function Nt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ca}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ce,!1),C===null){const U="webgl2";if(C=Nt(U,x),C===null)throw Nt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Ge,Be,be,tt,ye,E,_,B,K,Q,Z,Me,ae,pe,qe,ne,xe,Te,De,_e,ze,Ne,Ke,L;function re(){Ge=new Gd(C),Ge.init(),Ne=new wp(C,Ge),Be=new Fd(C,Ge,e,Ne),be=new Ep(C,Ge),Be.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),tt=new Xd(C),ye=new up,E=new bp(C,Ge,be,ye,Be,Ne,tt),_=new Bd(M),B=new Hd(M),K=new Jc(C),Ke=new Id(C,K),Q=new Vd(C,K,tt,Ke),Z=new qd(C,Q,K,tt),De=new Yd(C,Be,E),ne=new Od(ye),Me=new cp(M,_,B,Ge,Be,Ke,ne),ae=new Lp(M,ye),pe=new dp,qe=new vp(Ge),Te=new Ud(M,_,B,be,Z,m,l),xe=new Sp(M,Z,Be),L=new Up(C,tt,Be,be),_e=new Nd(C,Ge,tt),ze=new Wd(C,Ge,tt),tt.programs=Me.programs,M.capabilities=Be,M.extensions=Ge,M.properties=ye,M.renderLists=pe,M.shadowMap=xe,M.state=be,M.info=tt}re();const W=new Pp(M,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const x=Ge.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ge.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(Y,J,!1))},this.getSize=function(x){return x.set(Y,J)},this.setSize=function(x,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,J=U,t.width=Math.floor(x*V),t.height=Math.floor(U*V),z===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Y*V,J*V).floor()},this.setDrawingBufferSize=function(x,U,z){Y=x,J=U,V=z,t.width=Math.floor(x*z),t.height=Math.floor(U*z),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(fe)},this.setViewport=function(x,U,z,k){x.isVector4?fe.set(x.x,x.y,x.z,x.w):fe.set(x,U,z,k),be.viewport(D.copy(fe).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,U,z,k){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,U,z,k),be.scissor(X.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(x){be.setScissorTest(Ze=x)},this.setOpaqueSort=function(x){se=x},this.setTransparentSort=function(x){de=x},this.getClearColor=function(x){return x.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(x=!0,U=!0,z=!0){let k=0;if(x){let F=!1;if(O!==null){const ee=O.texture.format;F=ee===ma||ee===pa||ee===fa}if(F){const ee=O.texture.type,ue=ee===sn||ee===qn||ee===Bi||ee===Ei||ee===ha||ee===da,ge=Te.getClearColor(),ve=Te.getClearAlpha(),Ue=ge.r,Ie=ge.g,we=ge.b;ue?(g[0]=Ue,g[1]=Ie,g[2]=we,g[3]=ve,C.clearBufferuiv(C.COLOR,0,g)):(v[0]=Ue,v[1]=Ie,v[2]=we,v[3]=ve,C.clearBufferiv(C.COLOR,0,v))}else k|=C.COLOR_BUFFER_BIT}U&&(k|=C.DEPTH_BUFFER_BIT),z&&(k|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Te.dispose(),pe.dispose(),qe.dispose(),ye.dispose(),_.dispose(),B.dispose(),Z.dispose(),Ke.dispose(),L.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Ci),W.removeEventListener("sessionend",Ri),tn.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const x=tt.autoReset,U=xe.enabled,z=xe.autoUpdate,k=xe.needsUpdate,F=xe.type;re(),tt.autoReset=x,xe.enabled=U,xe.autoUpdate=z,xe.needsUpdate=k,xe.type=F}function ce(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Oe(x){const U=x.target;U.removeEventListener("dispose",Oe),rt(U)}function rt(x){pt(x),ye.remove(x)}function pt(x){const U=ye.get(x).programs;U!==void 0&&(U.forEach(function(z){Me.releaseProgram(z)}),x.isShaderMaterial&&Me.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,z,k,F,ee){U===null&&(U=st);const ue=F.isMesh&&F.matrixWorld.determinant()<0,ge=St(x,U,z,k,F);be.setMaterial(k,ue);let ve=z.index,Ue=1;if(k.wireframe===!0){if(ve=Q.getWireframeAttribute(z),ve===void 0)return;Ue=2}const Ie=z.drawRange,we=z.attributes.position;let Xe=Ie.start*Ue,Qe=(Ie.start+Ie.count)*Ue;ee!==null&&(Xe=Math.max(Xe,ee.start*Ue),Qe=Math.min(Qe,(ee.start+ee.count)*Ue)),ve!==null?(Xe=Math.max(Xe,0),Qe=Math.min(Qe,ve.count)):we!=null&&(Xe=Math.max(Xe,0),Qe=Math.min(Qe,we.count));const ot=Qe-Xe;if(ot<0||ot===1/0)return;Ke.setup(F,k,ge,z,ve);let R,te=_e;if(ve!==null&&(R=K.get(ve),te=ze,te.setIndex(R)),F.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*ut()),te.setMode(C.LINES)):te.setMode(C.TRIANGLES);else if(F.isLine){let I=k.linewidth;I===void 0&&(I=1),be.setLineWidth(I*ut()),F.isLineSegments?te.setMode(C.LINES):F.isLineLoop?te.setMode(C.LINE_LOOP):te.setMode(C.LINE_STRIP)}else F.isPoints?te.setMode(C.POINTS):F.isSprite&&te.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)te.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))te.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const I=F._multiDrawStarts,ke=F._multiDrawCounts,Ee=F._multiDrawCount,Ve=ve?K.get(ve).bytesPerElement:1,at=ye.get(k).currentProgram.getUniforms();for(let Ye=0;Ye<Ee;Ye++)at.setValue(C,"_gl_DrawID",Ye),te.render(I[Ye]/Ve,ke[Ye])}else if(F.isInstancedMesh)te.renderInstances(Xe,ot,F.count);else if(z.isInstancedBufferGeometry){const I=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ke=Math.min(z.instanceCount,I);te.renderInstances(Xe,ot,ke)}else te.render(Xe,ot)};function Je(x,U,z){x.transparent===!0&&x.side===Ut&&x.forceSinglePass===!1?(x.side=It,x.needsUpdate=!0,on(x,U,z),x.side=Dn,x.needsUpdate=!0,on(x,U,z),x.side=Ut):on(x,U,z)}this.compile=function(x,U,z=null){z===null&&(z=x),h=qe.get(z),h.init(U),b.push(h),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),x!==z&&x.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const k=new Set;return x.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ee=F.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){const ge=ee[ue];Je(ge,z,F),k.add(ge)}else Je(ee,z,F),k.add(ee)}),b.pop(),h=null,k},this.compileAsync=function(x,U,z=null){const k=this.compile(x,U,z);return new Promise(F=>{function ee(){if(k.forEach(function(ue){ye.get(ue).currentProgram.isReady()&&k.delete(ue)}),k.size===0){F(x);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ft=null;function Xt(x){Ft&&Ft(x)}function Ci(){tn.stop()}function Ri(){tn.start()}const tn=new hl;tn.setAnimationLoop(Xt),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(x){Ft=x,W.setAnimationLoop(x),x===null?tn.stop():tn.start()},W.addEventListener("sessionstart",Ci),W.addEventListener("sessionend",Ri),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,U,O),h=qe.get(x,b.length),h.init(U),b.push(h),Pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Pe),Se=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,Se),p=pe.get(x,w.length),p.init(),w.push(p),W.enabled===!0&&W.isPresenting===!0){const ee=M.xr.getDepthSensingMesh();ee!==null&&Jn(ee,U,-1/0,M.sortObjects)}Jn(x,U,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(se,de),je=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,je&&Te.addToRenderList(p,x),this.info.render.frame++,ie===!0&&ne.beginShadows();const z=h.state.shadowsArray;xe.render(z,x,U),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,F=p.transmissive;if(h.setupLights(),U.isArrayCamera){const ee=U.cameras;if(F.length>0)for(let ue=0,ge=ee.length;ue<ge;ue++){const ve=ee[ue];Ln(k,F,x,ve)}je&&Te.render(x);for(let ue=0,ge=ee.length;ue<ge;ue++){const ve=ee[ue];xn(p,x,ve,ve.viewport)}}else F.length>0&&Ln(k,F,x,U),je&&Te.render(x),xn(p,x,U);O!==null&&A===0&&(E.updateMultisampleRenderTarget(O),E.updateRenderTargetMipmap(O)),x.isScene===!0&&x.onAfterRender(M,x,U),Ke.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(h=b[b.length-1],ie===!0&&ne.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Jn(x,U,z,k){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)h.pushLight(x),x.castShadow&&h.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){k&&me.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Pe);const ue=Z.update(x),ge=x.material;ge.visible&&p.push(x,ue,ge,z,me.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const ue=Z.update(x),ge=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),me.copy(x.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),me.copy(ue.boundingSphere.center)),me.applyMatrix4(x.matrixWorld).applyMatrix4(Pe)),Array.isArray(ge)){const ve=ue.groups;for(let Ue=0,Ie=ve.length;Ue<Ie;Ue++){const we=ve[Ue],Xe=ge[we.materialIndex];Xe&&Xe.visible&&p.push(x,ue,Xe,z,me.z,we)}}else ge.visible&&p.push(x,ue,ge,z,me.z,null)}}const ee=x.children;for(let ue=0,ge=ee.length;ue<ge;ue++)Jn(ee[ue],U,z,k)}function xn(x,U,z,k){const F=x.opaque,ee=x.transmissive,ue=x.transparent;h.setupLightsView(z),ie===!0&&ne.setGlobalState(M.clippingPlanes,z),k&&be.viewport(D.copy(k)),F.length>0&&an(F,U,z),ee.length>0&&an(ee,U,z),ue.length>0&&an(ue,U,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Ln(x,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ki:sn,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ee=h.state.transmissionRenderTarget[k.id],ue=k.viewport||D;ee.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const ge=M.getRenderTarget();M.setRenderTarget(ee),M.getClearColor(G),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),je&&Te.render(z);const ve=M.toneMapping;M.toneMapping=Pn;const Ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),ie===!0&&ne.setGlobalState(M.clippingPlanes,k),an(x,z,k),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let we=0,Xe=U.length;we<Xe;we++){const Qe=U[we],ot=Qe.object,R=Qe.geometry,te=Qe.material,I=Qe.group;if(te.side===Ut&&ot.layers.test(k.layers)){const ke=te.side;te.side=It,te.needsUpdate=!0,Mn(ot,z,k,R,te,I),te.side=ke,te.needsUpdate=!0,Ie=!0}}Ie===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}M.setRenderTarget(ge),M.setClearColor(G,j),Ue!==void 0&&(k.viewport=Ue),M.toneMapping=ve}function an(x,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ee=x.length;F<ee;F++){const ue=x[F],ge=ue.object,ve=ue.geometry,Ue=k===null?ue.material:k,Ie=ue.group;ge.layers.test(z.layers)&&Mn(ge,U,z,ve,Ue,Ie)}}function Mn(x,U,z,k,F,ee){x.onBeforeRender(M,U,z,k,F,ee),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),F.onBeforeRender(M,U,z,k,x,ee),F.transparent===!0&&F.side===Ut&&F.forceSinglePass===!1?(F.side=It,F.needsUpdate=!0,M.renderBufferDirect(z,U,k,F,x,ee),F.side=Dn,F.needsUpdate=!0,M.renderBufferDirect(z,U,k,F,x,ee),F.side=Ut):M.renderBufferDirect(z,U,k,F,x,ee),x.onAfterRender(M,U,z,k,F,ee)}function on(x,U,z){U.isScene!==!0&&(U=st);const k=ye.get(x),F=h.state.lights,ee=h.state.shadowsArray,ue=F.state.version,ge=Me.getParameters(x,F.state,ee,U,z),ve=Me.getProgramCacheKey(ge);let Ue=k.programs;k.environment=x.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(x.isMeshStandardMaterial?B:_).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ue===void 0&&(x.addEventListener("dispose",Oe),Ue=new Map,k.programs=Ue);let Ie=Ue.get(ve);if(Ie!==void 0){if(k.currentProgram===Ie&&k.lightsStateVersion===ue)return Pi(x,ge),Ie}else ge.uniforms=Me.getUniforms(x),x.onBeforeCompile(ge,M),Ie=Me.acquireProgram(ge,ve),Ue.set(ve,Ie),k.uniforms=ge.uniforms;const we=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=ne.uniform),Pi(x,ge),k.needsLights=Fs(x),k.lightsStateVersion=ue,k.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Ie,k.uniformsList=null,Ie}function Un(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ts.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Pi(x,U){const z=ye.get(x);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function St(x,U,z,k,F){U.isScene!==!0&&(U=st),E.resetTextureUnits();const ee=U.fog,ue=k.isMeshStandardMaterial?U.environment:null,ge=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:wi,ve=(k.isMeshStandardMaterial?B:_).get(k.envMap||ue),Ue=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ie=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,Qe=!!z.morphAttributes.color;let ot=Pn;k.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ot=M.toneMapping);const R=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=R!==void 0?R.length:0,I=ye.get(k),ke=h.state.lights;if(ie===!0&&(Se===!0||x!==S)){const Pt=x===S&&k.id===y;ne.setState(k,x,Pt)}let Ee=!1;k.version===I.__version?(I.needsLights&&I.lightsStateVersion!==ke.state.version||I.outputColorSpace!==ge||F.isBatchedMesh&&I.batching===!1||!F.isBatchedMesh&&I.batching===!0||F.isBatchedMesh&&I.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&I.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&I.instancing===!1||!F.isInstancedMesh&&I.instancing===!0||F.isSkinnedMesh&&I.skinning===!1||!F.isSkinnedMesh&&I.skinning===!0||F.isInstancedMesh&&I.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&I.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&I.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&I.instancingMorph===!1&&F.morphTexture!==null||I.envMap!==ve||k.fog===!0&&I.fog!==ee||I.numClippingPlanes!==void 0&&(I.numClippingPlanes!==ne.numPlanes||I.numIntersection!==ne.numIntersection)||I.vertexAlphas!==Ue||I.vertexTangents!==Ie||I.morphTargets!==we||I.morphNormals!==Xe||I.morphColors!==Qe||I.toneMapping!==ot||I.morphTargetsCount!==te)&&(Ee=!0):(Ee=!0,I.__version=k.version);let Ve=I.currentProgram;Ee===!0&&(Ve=on(k,U,F));let at=!1,Ye=!1,Tt=!1;const Re=Ve.getUniforms(),yt=I.uniforms;if(be.useProgram(Ve.program)&&(at=!0,Ye=!0,Tt=!0),k.id!==y&&(y=k.id,Ye=!0),at||S!==x){be.buffers.depth.getReversed()?(le.copy(x.projectionMatrix),oc(le),lc(le),Re.setValue(C,"projectionMatrix",le)):Re.setValue(C,"projectionMatrix",x.projectionMatrix),Re.setValue(C,"viewMatrix",x.matrixWorldInverse);const Ot=Re.map.cameraPosition;Ot!==void 0&&Ot.setValue(C,Le.setFromMatrixPosition(x.matrixWorld)),Be.logarithmicDepthBuffer&&Re.setValue(C,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Re.setValue(C,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Ye=!0,Tt=!0)}if(F.isSkinnedMesh){Re.setOptional(C,F,"bindMatrix"),Re.setOptional(C,F,"bindMatrixInverse");const Pt=F.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),Re.setValue(C,"boneTexture",Pt.boneTexture,E))}F.isBatchedMesh&&(Re.setOptional(C,F,"batchingTexture"),Re.setValue(C,"batchingTexture",F._matricesTexture,E),Re.setOptional(C,F,"batchingIdTexture"),Re.setValue(C,"batchingIdTexture",F._indirectTexture,E),Re.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Re.setValue(C,"batchingColorTexture",F._colorsTexture,E));const Yt=z.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&De.update(F,z,Ve),(Ye||I.receiveShadow!==F.receiveShadow)&&(I.receiveShadow=F.receiveShadow,Re.setValue(C,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(yt.envMap.value=ve,yt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(yt.envMapIntensity.value=U.environmentIntensity),Ye&&(Re.setValue(C,"toneMappingExposure",M.toneMappingExposure),I.needsLights&&Ns(yt,Tt),ee&&k.fog===!0&&ae.refreshFogUniforms(yt,ee),ae.refreshMaterialUniforms(yt,k,V,J,h.state.transmissionRenderTarget[x.id]),Ts.upload(C,Un(I),yt,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ts.upload(C,Un(I),yt,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Re.setValue(C,"center",F.center),Re.setValue(C,"modelViewMatrix",F.modelViewMatrix),Re.setValue(C,"normalMatrix",F.normalMatrix),Re.setValue(C,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Pt=k.uniformsGroups;for(let Ot=0,Bs=Pt.length;Ot<Bs;Ot++){const Nn=Pt[Ot];L.update(Nn,Ve),L.bind(Nn,Ve)}}return Ve}function Ns(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function Fs(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(x,U,z){ye.get(x.texture).__webglTexture=U,ye.get(x.depthTexture).__webglTexture=z;const k=ye.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){const z=ye.get(x);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Os=C.createFramebuffer();this.setRenderTarget=function(x,U=0,z=0){O=x,T=U,A=z;let k=!0,F=null,ee=!1,ue=!1;if(x){const ve=ye.get(x);if(ve.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(C.FRAMEBUFFER,null),k=!1;else if(ve.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(ve.__hasExternalTextures)E.rebindTextures(x,ye.get(x.texture).__webglTexture,ye.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const we=x.depthTexture;if(ve.__boundDepthTexture!==we){if(we!==null&&ye.has(we)&&(x.width!==we.image.width||x.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Ue=x.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ue=!0);const Ie=ye.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?F=Ie[U][z]:F=Ie[U],ee=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?F=ye.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[z]:F=Ie,D.copy(x.viewport),X.copy(x.scissor),H=x.scissorTest}else D.copy(fe).multiplyScalar(V).floor(),X.copy(Fe).multiplyScalar(V).floor(),H=Ze;if(z!==0&&(F=Os),be.bindFramebuffer(C.FRAMEBUFFER,F)&&k&&be.drawBuffers(x,F),be.viewport(D),be.scissor(X),be.setScissorTest(H),ee){const ve=ye.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,ve.__webglTexture,z)}else if(ue){const ve=ye.get(x.texture),Ue=U;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ve.__webglTexture,z,Ue)}else if(x!==null&&z!==0){const ve=ye.get(x.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ve.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(x,U,z,k,F,ee,ue){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){be.bindFramebuffer(C.FRAMEBUFFER,ge);try{const ve=x.texture,Ue=ve.format,Ie=ve.type;if(!Be.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-k&&z>=0&&z<=x.height-F&&C.readPixels(U,z,k,F,Ne.convert(Ue),Ne.convert(Ie),ee)}finally{const ve=O!==null?ye.get(O).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(x,U,z,k,F,ee,ue){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ue!==void 0&&(ge=ge[ue]),ge){const ve=x.texture,Ue=ve.format,Ie=ve.type;if(!Be.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-k&&z>=0&&z<=x.height-F){be.bindFramebuffer(C.FRAMEBUFFER,ge);const we=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.bufferData(C.PIXEL_PACK_BUFFER,ee.byteLength,C.STREAM_READ),C.readPixels(U,z,k,F,Ne.convert(Ue),Ne.convert(Ie),0);const Xe=O!==null?ye.get(O).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,Xe);const Qe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await ac(C,Qe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ee),C.deleteBuffer(we),C.deleteSync(Qe),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,z=0){x.isTexture!==!0&&(fi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(x.image.width*k),ee=Math.floor(x.image.height*k),ue=U!==null?U.x:0,ge=U!==null?U.y:0;E.setTexture2D(x,0),C.copyTexSubImage2D(C.TEXTURE_2D,z,0,0,ue,ge,F,ee),be.unbindTexture()};const In=C.createFramebuffer(),Xi=C.createFramebuffer();this.copyTextureToTexture=function(x,U,z=null,k=null,F=0,ee=null){x.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],U=arguments[2],ee=arguments[3]||0,z=null),ee===null&&(F!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let ue,ge,ve,Ue,Ie,we,Xe,Qe,ot;const R=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(z!==null)ue=z.max.x-z.min.x,ge=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,Ie=z.min.y,we=z.isBox3?z.min.z:0;else{const Yt=Math.pow(2,-F);ue=Math.floor(R.width*Yt),ge=Math.floor(R.height*Yt),x.isDataArrayTexture?ve=R.depth:x.isData3DTexture?ve=Math.floor(R.depth*Yt):ve=1,Ue=0,Ie=0,we=0}k!==null?(Xe=k.x,Qe=k.y,ot=k.z):(Xe=0,Qe=0,ot=0);const te=Ne.convert(U.format),I=Ne.convert(U.type);let ke;U.isData3DTexture?(E.setTexture3D(U,0),ke=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),ke=C.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),ke=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ee=C.getParameter(C.UNPACK_ROW_LENGTH),Ve=C.getParameter(C.UNPACK_IMAGE_HEIGHT),at=C.getParameter(C.UNPACK_SKIP_PIXELS),Ye=C.getParameter(C.UNPACK_SKIP_ROWS),Tt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,R.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,R.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ie),C.pixelStorei(C.UNPACK_SKIP_IMAGES,we);const Re=x.isDataArrayTexture||x.isData3DTexture,yt=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Yt=ye.get(x),Pt=ye.get(U),Ot=ye.get(Yt.__renderTarget),Bs=ye.get(Pt.__renderTarget);be.bindFramebuffer(C.READ_FRAMEBUFFER,Ot.__webglFramebuffer),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let Nn=0;Nn<ve;Nn++)Re&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(x).__webglTexture,F,we+Nn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,ee,ot+Nn)),C.blitFramebuffer(Ue,Ie,ue,ge,Xe,Qe,ue,ge,C.DEPTH_BUFFER_BIT,C.NEAREST);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(F!==0||x.isRenderTargetTexture||ye.has(x)){const Yt=ye.get(x),Pt=ye.get(U);be.bindFramebuffer(C.READ_FRAMEBUFFER,In),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,Xi);for(let Ot=0;Ot<ve;Ot++)Re?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Yt.__webglTexture,F,we+Ot):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Yt.__webglTexture,F),yt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,ee,ot+Ot):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,ee),F!==0?C.blitFramebuffer(Ue,Ie,ue,ge,Xe,Qe,ue,ge,C.COLOR_BUFFER_BIT,C.NEAREST):yt?C.copyTexSubImage3D(ke,ee,Xe,Qe,ot+Ot,Ue,Ie,ue,ge):C.copyTexSubImage2D(ke,ee,Xe,Qe,Ue,Ie,ue,ge);be.bindFramebuffer(C.READ_FRAMEBUFFER,null),be.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else yt?x.isDataTexture||x.isData3DTexture?C.texSubImage3D(ke,ee,Xe,Qe,ot,ue,ge,ve,te,I,R.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(ke,ee,Xe,Qe,ot,ue,ge,ve,te,R.data):C.texSubImage3D(ke,ee,Xe,Qe,ot,ue,ge,ve,te,I,R):x.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ee,Xe,Qe,ue,ge,te,I,R.data):x.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ee,Xe,Qe,R.width,R.height,te,R.data):C.texSubImage2D(C.TEXTURE_2D,ee,Xe,Qe,ue,ge,te,I,R);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ee),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ve),C.pixelStorei(C.UNPACK_SKIP_PIXELS,at),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ye),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Tt),ee===0&&U.generateMipmaps&&C.generateMipmap(ke),be.unbindTexture()},this.copyTextureToTexture3D=function(x,U,z=null,k=null,F=0){return x.isTexture!==!0&&(fi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,x=arguments[2],U=arguments[3],F=arguments[4]||0),fi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,z,k,F)},this.initRenderTarget=function(x){ye.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),be.unbindTexture()},this.resetState=function(){T=0,A=0,O=null,be.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const To={type:"change"},Sa={type:"start"},gl={type:"end"},_s=new Us,Ao=new An,Np=Math.cos(70*sc.DEG2RAD),gt=new N,zt=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vr=1e-6;class Fp extends jc{constructor(e,t=null){super(e,t),this.state=it.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:pi.ROTATE,TWO:pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new $n,this._lastTargetPosition=new N,this._quat=new $n().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qa,this._sphericalDelta=new Qa,this._scale=1,this._panOffset=new N,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new N,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bp.bind(this),this._onPointerDown=Op.bind(this),this._onPointerUp=zp.bind(this),this._onContextMenu=Yp.bind(this),this._onMouseWheel=Gp.bind(this),this._onKeyDown=Vp.bind(this),this._onTouchStart=Wp.bind(this),this._onTouchMove=Xp.bind(this),this._onMouseDown=kp.bind(this),this._onMouseMove=Hp.bind(this),this._interceptControlDown=qp.bind(this),this._interceptControlUp=Zp.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(To),this.update(),this.state=it.NONE}update(e=null){const t=this.object.position;gt.copy(t).sub(this.target),gt.applyQuaternion(this._quat),this._spherical.setFromVector3(gt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=zt:n>Math.PI&&(n-=zt),s<-Math.PI?s+=zt:s>Math.PI&&(s-=zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(gt.setFromSpherical(this._spherical),gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=gt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_s.origin.copy(this.object.position),_s.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_s.direction))<Np?this.object.lookAt(this.target):(Ao.setFromNormalAndCoplanarPoint(this.object.up,this.target),_s.intersectPlane(Ao,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vr||this._lastTargetPosition.distanceToSquared(this.target)>vr?(this.dispatchEvent(To),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?zt/60*this.autoRotateSpeed*e:zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gt.setFromMatrixColumn(t,0),gt.multiplyScalar(-e),this._panOffset.add(gt)}_panUp(e,t){this.screenSpacePanning===!0?gt.setFromMatrixColumn(t,1):(gt.setFromMatrixColumn(t,0),gt.crossVectors(this.object.up,gt)),gt.multiplyScalar(e),this._panOffset.add(gt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;gt.copy(s).sub(this.target);let r=gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Op(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Bp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gl),this.state=it.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kp(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=it.DOLLY;break;case gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}break;case gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Sa)}function Hp(i){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gp(i){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(i.preventDefault(),this.dispatchEvent(Sa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(gl))}function Vp(i){this.enabled!==!1&&this._handleKeyDown(i)}function Wp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=it.TOUCH_ROTATE;break;case pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=it.TOUCH_DOLLY_PAN;break;case pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(Sa)}function Xp(i){switch(this._trackPointer(i),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=it.NONE}}function Yp(i){this.enabled!==!1&&i.preventDefault()}function qp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class $p{constructor(e,t,n,s,r){this.canvas=e,this.meta=t,this.G=t.grid,this.sizeX=t.sizeX,this.sizeY=t.sizeY,this.zRangeKm=(t.zMaxM-t.zMinM)/1e3,this.skirtDepth=.78,this.demZ=new Float32Array(this.G*this.G);const a=new Uint8Array(this.G*this.G*4);for(let o=0;o<this.demZ.length;o++){const l=n[o]/65535;this.demZ[o]=l*this.zRangeKm;const c=Math.max(0,Math.min(255,Math.round(l*255)));a[o*4+0]=c,a[o*4+1]=c,a[o*4+2]=c,a[o*4+3]=255}this.demTex=new Lc(a,this.G,this.G,jt,sn),this.demTex.minFilter=$t,this.demTex.magFilter=$t,this.demTex.wrapS=Gt,this.demTex.wrapT=Gt,this.demTex.flipY=!1,this.demTex.needsUpdate=!0,this.state={exag:1.3,mode:0,contours:!1,showSmoke:!0,showClouds:!0,showPrecip:!0,showIsotherm:!0,showSunArc:!0,shadows:!0,spin:!1,boost:1.4,compareClean:!1,hour:13,depProgress:0,plumeDensity:.4,cloudCover:.4,cloudLow:.3,cloudMid:.3,cloudHigh:.25,sunTrans:.85,precipMmH:0,rainSnowM:2600,snowLineM:3480,snowPackMm:0,windSpeed:5,windBearingDeg:245,swIn:350,lwIn:315,wetFrac:0,totalDepMgM2:36.8},this._sunDir=new N(.3,.7,.6).normalize(),this._initRenderer(),this._initSkyDomeAndLighting(),this._buildSolarOrbAndArc(),this._buildTerrain(s,r),this._buildVolumetricSmoke(),this._buildCloudDeck(),this._buildPrecipVolume(),this._buildValleyMistAndSpindrift(),this._buildRealisticNearRain(),this._buildRealisticSnow(),this._initCameraPresets(),this.resize()}_sampleDemNormalized(e,t){const n=Math.max(0,Math.min(this.G-1,Math.round(e*(this.G-1)))),s=Math.max(0,Math.min(this.G-1,Math.round(t*(this.G-1))));return this.demZ[s*this.G+n]}_sampleDemXZ(e,t){const n=Math.max(0,Math.min(1,e/this.sizeX+.5)),s=Math.max(0,Math.min(1,t/this.sizeY+.5));return this._sampleDemNormalized(n,s)}_initRenderer(){this.renderer=new Ip({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Io,this.renderer.toneMapping=Fo,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Lt,this.scene=new Dc,this.scene.fog=new ga(1055788,.012),this.camera=new Zt(38,16/9,.04,260),this.camera.position.set(9.4,8.5,-10.3),this.controls=new Fp(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.minDistance=.45,this.controls.maxDistance=30,this.controls.maxPolarAngle=Math.PI*.495,this.controls.target.set(0,.55,.15),this.controls.update(),this._camAnim=null}_initSkyDomeAndLighting(){this.skyUniforms={uSunDir:{value:this._sunDir.clone()},uTime:{value:0},uWindDir:{value:new Ce(.85,-.52)},uDaylight:{value:.8},uTwilight:{value:0},uSmoke:{value:.3},uCloud:{value:.3},uCloudMid:{value:.3},uCloudHigh:{value:.25},uShowClouds:{value:1},uSwNorm:{value:.6}};const e=new va(145,48,32),t=new Rt({side:It,depthWrite:!1,fog:!1,uniforms:this.skyUniforms,vertexShader:`
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
      `});this.skyDome=new _t(e,t),this.scene.add(this.skyDome),this.hemiLight=new Yc(8963327,2760987,.72),this.scene.add(this.hemiLight),this.sunLight=new Ja(16773596,2.3),this.sunLight.position.set(8,12,10),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=45;const n=9.5;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.bias=-6e-4,this.sunLight.shadow.normalBias=.035,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.rimLight=new Ja(7055078,.35),this.rimLight.position.set(-10,6,-12),this.scene.add(this.rimLight);const s=new mn(this.sizeX*1.04,this.sizeY*1.04);s.rotateX(-Math.PI/2);const r=new lr({color:725532,roughness:.96,metalness:0,transparent:!0,opacity:.55});this.floorMesh=new _t(s,r),this.floorMesh.position.y=-this.skirtDepth-.02,this.floorMesh.receiveShadow=!0,this.scene.add(this.floorMesh)}_buildSolarOrbAndArc(){this.sunGroup=new Cn;const e=7.4,t=[];for(let a=6.2;a<=20.8;a+=.2){const o=Math.max(-1,Math.min(1,(a-13.5)/7.1)),l=(180+o*110)*Math.PI/180,c=Math.max(1.5,Math.cos(o*Math.PI*.5)*38)*Math.PI/180;t.push(new N(e*Math.cos(c)*Math.sin(l),.55+e*Math.sin(c)*.62,-e*Math.cos(c)*Math.cos(l)))}const n=new bt().setFromPoints(t);this.sunArcMat=new Hc({color:16638023,transparent:!0,opacity:.26,dashSize:.22,gapSize:.2,depthWrite:!1}),this.sunArcLine=new Nc(n,this.sunArcMat),this.sunArcLine.computeLineDistances(),this.sunGroup.add(this.sunArcLine),this.sunOrbUniforms={uSunTrans:{value:.9},uSmoke:{value:.2},uCloud:{value:.2},uDaylight:{value:1},uTwilight:{value:0},uArcVis:{value:1}};const s=new mn(2.1,2.1),r=new Rt({transparent:!0,depthWrite:!1,blending:Mr,uniforms:this.sunOrbUniforms,vertexShader:`
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
      `});this.sunOrb=new _t(s,r),this.sunGroup.add(this.sunOrb),this.scene.add(this.sunGroup)}_buildTerrain(e,t){const n=this.G,s=this.sizeX,r=this.sizeY;e.colorSpace=Lt,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),e.wrapS=Gt,e.wrapT=Gt,t.colorSpace=pn,t.wrapS=Gt,t.wrapT=Gt;const a=n*n,o=new Float32Array(a*3),l=new Float32Array(a*2),c=new Float32Array(a);for(let g=0;g<n;g++){const v=g/(n-1),p=(v-.5)*r,h=1-v;for(let w=0;w<n;w++){const b=w/(n-1),M=(b-.5)*s,P=g*n+w,T=this.demZ[P];c[P]=T,o[P*3+0]=M,o[P*3+1]=T*this.state.exag,o[P*3+2]=p,l[P*2+0]=b,l[P*2+1]=h}}const u=new Uint32Array((n-1)*(n-1)*6);let d=0;for(let g=0;g<n-1;g++)for(let v=0;v<n-1;v++){const p=g*n+v,h=p+1,w=p+n,b=w+1;u[d++]=p,u[d++]=w,u[d++]=b,u[d++]=p,u[d++]=b,u[d++]=h}const f=new bt;f.setAttribute("position",new lt(o,3)),f.setAttribute("uv",new lt(l,2)),f.setAttribute("aBaseElev",new lt(c,1)),f.setIndex(new lt(u,1)),f.computeVertexNormals(),this.terrainGeo=f,this.terrainUniforms={uMaskTex:{value:t},uMode:{value:0},uContours:{value:0},uShowIsotherm:{value:1},uDepCumFrac:{value:0},uDepBoost:{value:this.state.boost},uRainSnowM:{value:this.state.rainSnowM},uSnowLineM:{value:this.state.snowLineM},uSnowPackMm:{value:0},uRainIntensity:{value:0},uSmokeHaze:{value:0},uDaylight:{value:.9},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uWindDir:{value:new Ce(.85,-.52)}};const m=new lr({map:e,roughness:.78,metalness:.02});m.onBeforeCompile=g=>{Object.assign(g.uniforms,this.terrainUniforms),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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

            // Physical Koschmieder aerial-perspective wildfire smoke haze through the valley smoke slab!
            // Computes true ray path length INSIDE the smoke layer (works identically in Bloc 3D & Vue Webcam!):
            // close foreground stays sharp while glacier tongue & distant peaks smoothly fade into luminous milky-amber smoke!
            if (uSmokeHaze > 0.02) {
              float rayLen = length(vObjPos - cameraPosition);
              float smokeTopY = 2.55;
              float camAbove = max(0.0, cameraPosition.y - smokeTopY);
              float sinEl = max(0.20, abs(cameraPosition.y - vObjPos.y) / max(rayLen, 0.01));
              float inSmokeKm = max(0.0, rayLen - camAbove / sinEl);
              float valleyPool = 1.25 - 0.45 * elevT;
              float extCoeff = 0.06 + 0.34 * pow(uSmokeHaze, 0.85);
              float optDepth = inSmokeKm * extCoeff * valleyPool;
              float hazeAmt = clamp((1.0 - exp(-optDepth)) * smoothstep(0.02, 0.22, uSmokeHaze), 0.0, 0.82);
              vec3 hazeDay = mix(vec3(0.68, 0.65, 0.60), vec3(0.78, 0.58, 0.38), clamp(uSmokeHaze * 0.85, 0.0, 1.0));
              vec3 hazeNight = vec3(0.06, 0.05, 0.06);
              diffuseColor.rgb = mix(diffuseColor.rgb, mix(hazeNight, hazeDay, uDaylight), hazeAmt);
            }
          } else if (uMode < 1.5) {
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 hm = depHeatmap(clamp(localDepNorm * 0.95, 0.0, 1.0));
            vec3 rockBase = diffuseColor.rgb * 0.35;
            diffuseColor.rgb = mix(rockBase, hm * (0.65 + 0.55 * sqrt(max(luma, 0.01))), mix(0.28, 0.94, isCryo));
          } else if (uMode < 2.5) {
            vec3 rockCol = mix(vec3(0.030, 0.036, 0.040), vec3(0.160, 0.125, 0.095), clamp(visAlb * 3.0, 0.0, 1.0));
            vec3 iceCol = mix(vec3(0.028, 0.165, 0.440), vec3(0.145, 0.440, 0.760), clamp(visAlb * 1.7, 0.0, 1.0));
            vec3 snowCol = vec3(0.60, 0.67, 0.76) * microShade;
            vec3 col = mix(rockCol, mix(iceCol, snowCol, smoothstep(0.38, 0.58, visAlb)), isCryo);
            col = mix(col, vec3(0.015, 0.38, 0.42), smoothstep(0.25, 0.65, water));
            diffuseColor.rgb = col;
          } else {
            diffuseColor.rgb = mix(vec3(0.26, 0.29, 0.34), vec3(0.58, 0.63, 0.70), elevT) * microShade;
          }

          if (uContours > 0.5) {
            float c100 = abs(fract(elevM / 100.0 + 0.5) - 0.5);
            float c500 = abs(fract(elevM / 500.0 + 0.5) - 0.5);
            float fw100 = fwidth(elevM / 100.0) * 1.2;
            float fw500 = fwidth(elevM / 500.0) * 1.7;
            float l100 = 1.0 - smoothstep(0.0, max(fw100, 0.014), c100);
            float l500 = 1.0 - smoothstep(0.0, max(fw500, 0.010), c500);
            vec3 lc = uMode > 2.5 ? vec3(0.14, 0.20, 0.28) : vec3(0.05, 0.09, 0.14);
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
          roughnessFactor = rVal;`)},this.terrainMesh=new _t(f,m),this.terrainMesh.castShadow=!0,this.terrainMesh.receiveShadow=!0,this.scene.add(this.terrainMesh),this._buildCutawaySkirt()}_buildCutawaySkirt(){const e=this.G,t=this.sizeX,n=this.sizeY,s=-this.skirtDepth,r=[],a=[],o=[],l=[];let c=0;const u=(p,h,w,b)=>{const M=c;for(let P=0;P<e;P++){const T=p(P);r.push(T.x,T.y0*this.state.exag,T.z),a.push(h,w,b),o.push(T.y0),r.push(T.x,s,T.z),a.push(h,w,b),o.push(-1),c+=2}for(let P=0;P<e-1;P++){const T=M+P*2,A=T+1,O=T+2,y=T+3;l.push(T,A,y,T,y,O)}};u(p=>({x:(p/(e-1)-.5)*t,z:-n*.5,y0:this.demZ[p]}),0,0,-1),u(p=>({x:t*.5,z:(p/(e-1)-.5)*n,y0:this.demZ[p*e+(e-1)]}),1,0,0),u(p=>{const h=e-1-p;return{x:(h/(e-1)-.5)*t,z:n*.5,y0:this.demZ[(e-1)*e+h]}},0,0,1),u(p=>{const h=e-1-p;return{x:-t*.5,z:(h/(e-1)-.5)*n,y0:this.demZ[h*e]}},-1,0,0);const d=c,f=t*.5,m=n*.5;r.push(-f,s,-m,f,s,-m,f,s,m,-f,s,m);for(let p=0;p<4;p++)a.push(0,-1,0),o.push(-1);l.push(d,d+1,d+2,d,d+2,d+3);const g=new bt;g.setAttribute("position",new Wt(r,3)),g.setAttribute("normal",new Wt(a,3)),g.setIndex(l),this.skirtGeo=g,this.skirtBaseRim=new Float32Array(o);const v=new lr({color:1186084,roughness:.88,metalness:.08,side:Ut});this.skirtMesh=new _t(g,v),this.skirtMesh.castShadow=!0,this.skirtMesh.receiveShadow=!0,this.scene.add(this.skirtMesh)}_buildVolumetricSmoke(){this.smokeGroup=new Cn,this.smokeSharedUniforms={uTime:{value:0},uDensity:{value:.45},uWindDir:{value:new Ce(.85,-.52)},uSunDir:{value:this._sunDir.clone()},uSunPower:{value:.6},uWetFrac:{value:0},uExag:{value:this.state.exag}};const e=72,t=new Float32Array(e*e*3),n=new Float32Array(e*e),s=new Float32Array(e*e*2);for(let l=0;l<e;l++){const c=l/(e-1),u=(c-.5)*this.sizeY*1.12;for(let d=0;d<e;d++){const f=d/(e-1),m=(f-.5)*this.sizeX*1.12,g=l*e+d;t[g*3+0]=m,t[g*3+1]=0,t[g*3+2]=u,n[g]=this._sampleDemXZ(m,u),s[g*2+0]=f,s[g*2+1]=c}}const r=[];for(let l=0;l<e-1;l++)for(let c=0;c<e-1;c++){const u=l*e+c,d=u+1,f=u+e,m=f+1;r.push(u,f,m,u,m,d)}const a=new bt;a.setAttribute("position",new lt(t,3)),a.setAttribute("aDemY0",new lt(n,1)),a.setAttribute("uv",new lt(s,2)),a.setIndex(r),[{heightAbove:.14,follow:.9,alpha:.31,scale:2.7,speed:.72,seed:1.3},{heightAbove:.34,follow:.78,alpha:.3,scale:2.3,speed:.9,seed:4.1},{heightAbove:.58,follow:.62,alpha:.27,scale:2,speed:1.08,seed:7.9},{heightAbove:.86,follow:.42,alpha:.22,scale:1.7,speed:1.24,seed:11.4},{heightAbove:1.18,follow:.22,alpha:.18,scale:1.5,speed:1.42,seed:15.8}].forEach(l=>{const c=new Rt({transparent:!0,depthWrite:!1,side:Ut,uniforms:{...this.smokeSharedUniforms,uHeightAbove:{value:l.heightAbove},uFollow:{value:l.follow},uLayerAlpha:{value:l.alpha},uNoiseScale:{value:l.scale},uSpeedMul:{value:l.speed},uSeed:{value:l.seed}},vertexShader:`
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
        `});this.smokeGroup.add(new _t(a,c))}),this.scene.add(this.smokeGroup)}_buildCloudDeck(){this.cloudGroup=new Cn,this.cloudUniforms={uTime:{value:0},uCloudCover:{value:.4},uCloudLow:{value:.3},uCloudMid:{value:.3},uStormIntensity:{value:0},uWindDir:{value:new Ce(.85,-.52)},uWindSpeed:{value:5},uSunDir:{value:this._sunDir.clone()},uSunPower:{value:.5},uDaylight:{value:.8},uTwilight:{value:0},uSmoke:{value:.2},uExag:{value:this.state.exag},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new Ce(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex}};const e=64,t=new mn(1,1,1,1),n=new ur;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(e*3),r=new Float32Array(e*4),a=new Float32Array(e*2);for(let l=0;l<e;l++){const c=l>=34?1:0,u=c>.5?l-34:l,d=c>.5?e-34:34,f=Math.sqrt((u+.45)/d),m=u*2.3999632+(Math.random()-.5)*.45,g=c>.5?.68:.54;s[l*3+0]=Math.cos(m)*f*this.sizeX*g,s[l*3+1]=c>.5?3.45+Math.random()*.85:.55+Math.random()*.95,s[l*3+2]=Math.sin(m)*f*this.sizeY*g,r[l*4+0]=c>.5?4.6+Math.random()*3.8:3+Math.random()*2.8,r[l*4+1]=c>.5?1.6+Math.random()*1.1:1.35+Math.random()*1.05,r[l*4+2]=(u+.5)/d,r[l*4+3]=c,a[l*2+0]=Math.random()*47,a[l*2+1]=.72+Math.random()*.55}n.setAttribute("aOrigin",new zn(s,3)),n.setAttribute("aCloudAttr",new zn(r,4)),n.setAttribute("aSeed",new zn(a,2)),n.instanceCount=e;const o=new Rt({transparent:!0,depthWrite:!1,side:Ut,uniforms:this.cloudUniforms,vertexShader:`
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
      `});this.cloudPuffs=new _t(n,o),this.cloudPuffs.frustumCulled=!1,this.cloudGroup.add(this.cloudPuffs),this.scene.add(this.cloudGroup)}_buildPrecipVolume(){const t=new mn(1,1,1,1),n=new ur;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(96),r=new Float32Array(128);for(let o=0;o<32;o++){const l=Math.sqrt((o+.5)/32),c=o*2.3999632+(Math.random()-.5)*.35;s[o*3+0]=Math.cos(c)*l*this.sizeX*.44,s[o*3+1]=0,s[o*3+2]=Math.sin(c)*l*this.sizeY*.44,r[o*4+0]=2.6+Math.random()*2.2,r[o*4+1]=Math.random()*19.3,r[o*4+2]=.75+Math.random()*.55,r[o*4+3]=Math.random()}n.setAttribute("aOffset",new zn(s,3)),n.setAttribute("aParam",new zn(r,4)),n.instanceCount=32,this.virgaUniforms={uTime:{value:0},uIntensity:{value:0},uSunPower:{value:.5},uWindDir:{value:new Ce(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uExag:{value:this.state.exag},uSizeXZ:{value:new Ce(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCloudTopY:{value:3.4}};const a=new Rt({transparent:!0,depthWrite:!1,side:Ut,uniforms:this.virgaUniforms,vertexShader:`
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
      `});this.virgaMesh=new _t(n,a),this.virgaMesh.frustumCulled=!1,this.scene.add(this.virgaMesh)}_buildValleyMistAndSpindrift(){this.mistGroup=new Cn,this.mistUniforms={uTime:{value:0},uIntensity:{value:0},uSunPower:{value:.5},uWindDir:{value:new Ce(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uExag:{value:this.state.exag}};const e=64,t=new Float32Array(e*e*3),n=new Float32Array(e*e),s=new Float32Array(e*e*2);for(let l=0;l<e;l++){const c=l/(e-1),u=(c-.5)*this.sizeY*.98;for(let d=0;d<e;d++){const f=d/(e-1),m=(f-.5)*this.sizeX*.98,g=l*e+d;t[g*3+0]=m,t[g*3+1]=0,t[g*3+2]=u,n[g]=this._sampleDemXZ(m,u),s[g*2+0]=f,s[g*2+1]=c}}const r=[];for(let l=0;l<e-1;l++)for(let c=0;c<e-1;c++){const u=l*e+c,d=u+1,f=u+e,m=f+1;r.push(u,f,m,u,m,d)}const a=new bt;a.setAttribute("position",new lt(t,3)),a.setAttribute("aDemY0",new lt(n,1)),a.setAttribute("uv",new lt(s,2)),a.setIndex(r),[{heightAbove:.08,alpha:.24,scale:3.6,speed:.28,seed:2.1},{heightAbove:.22,alpha:.2,scale:2.8,speed:.36,seed:6.4},{heightAbove:.42,alpha:.16,scale:2.2,speed:.44,seed:11.7}].forEach(l=>{const c=new Rt({transparent:!0,depthWrite:!1,side:Ut,uniforms:{...this.mistUniforms,uHeightAbove:{value:l.heightAbove},uLayerAlpha:{value:l.alpha},uScale:{value:l.scale},uSpeed:{value:l.speed},uSeed:{value:l.seed}},vertexShader:`
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
        `});this.mistGroup.add(new _t(a,c))}),this.scene.add(this.mistGroup)}_buildRealisticNearRain(){const t=new mn(1,1,1,1),n=new ur;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(6e3*3),r=new Float32Array(6e3*4);for(let o=0;o<6e3;o++)s[o*3+0]=(Math.random()-.5)*3.4,s[o*3+1]=Math.random(),s[o*3+2]=(Math.random()-.5)*3.4,r[o*4+0]=Math.random(),r[o*4+1]=.78+Math.random()*.62,r[o*4+2]=.65+Math.random()*.9,r[o*4+3]=.65+Math.random()*.75;n.setAttribute("aBoxPos",new zn(s,3)),n.setAttribute("aSeed",new zn(r,4)),n.instanceCount=6e3,this.rainUniforms={uTime:{value:0},uIntensity:{value:0},uImmersion:{value:0},uExag:{value:this.state.exag},uWindDir:{value:new Ce(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new Ce(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCamFocus:{value:new N(0,1,0)},uSunPower:{value:.5}};const a=new Rt({transparent:!0,depthWrite:!1,side:Ut,uniforms:this.rainUniforms,vertexShader:`
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
      `});this.rainLines=new _t(n,a),this.rainLines.frustumCulled=!1,this.scene.add(this.rainLines)}_makeSnowflakeAtlas(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=(r,a,o)=>{t.save(),t.translate(r+32,a+32),o(),t.restore()};n(0,0,()=>{[[0,0,14,.85],[-6,-4,11,.55],[7,-2,10,.52],[-2,7,10,.5],[5,6,9,.45]].forEach(([a,o,l,c])=>{const u=t.createRadialGradient(a,o,.5,a,o,l);u.addColorStop(0,`rgba(255,255,255,${c})`),u.addColorStop(.55,`rgba(232,242,255,${c*.45})`),u.addColorStop(1,"rgba(220,236,255,0)"),t.fillStyle=u,t.beginPath(),t.arc(a,o,l,0,Math.PI*2),t.fill()})}),n(64,0,()=>{const r=t.createRadialGradient(0,0,.5,0,0,14);r.addColorStop(0,"rgba(255,255,255,0.95)"),r.addColorStop(.35,"rgba(240,248,255,0.65)"),r.addColorStop(.75,"rgba(220,235,250,0.14)"),r.addColorStop(1,"rgba(210,230,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,14,0,Math.PI*2),t.fill()}),n(0,64,()=>{const r=t.createRadialGradient(0,0,1,0,0,22);r.addColorStop(0,"rgba(255,255,255,0.85)"),r.addColorStop(.45,"rgba(235,244,255,0.36)"),r.addColorStop(1,"rgba(220,235,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,255,255,0.42)",t.lineWidth=2,t.lineCap="round";for(let a=0;a<3;a++)t.beginPath(),t.moveTo(-14,0),t.lineTo(14,0),t.stroke(),t.rotate(Math.PI/3)}),n(64,64,()=>{const r=t.createRadialGradient(0,0,2,0,0,26);r.addColorStop(0,"rgba(250,253,255,0.48)"),r.addColorStop(.5,"rgba(235,244,255,0.28)"),r.addColorStop(.82,"rgba(225,238,252,0.08)"),r.addColorStop(1,"rgba(220,236,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,26,0,Math.PI*2),t.fill()});const s=new Bc(e);return s.colorSpace=Lt,s}_buildRealisticSnow(){const s=new Float32Array(31500),r=new Float32Array(10500*4),a=new Float32Array(10500);for(let u=0;u<10500;u++){const d=u<7e3?1:0;s[u*3+0]=d?(Math.random()-.5)*4:(Math.random()-.5)*this.sizeX*.9,s[u*3+1]=Math.random(),s[u*3+2]=d?(Math.random()-.5)*4:(Math.random()-.5)*this.sizeY*.9,r[u*4+0]=Math.random(),r[u*4+1]=.45+Math.random()*.85,r[u*4+2]=.45+Math.pow(Math.random(),2.2)*1.45,r[u*4+3]=d,a[u]=Math.floor(Math.random()*4)+Math.random()*.99}const o=new bt;o.setAttribute("position",new lt(s,3)),o.setAttribute("aSeed",new lt(r,4)),o.setAttribute("aVariant",new lt(a,1));const l=this._makeSnowflakeAtlas();this.snowUniforms={uTime:{value:0},uIntensity:{value:0},uImmersion:{value:0},uMidVisible:{value:0},uExag:{value:this.state.exag},uWindDir:{value:new Ce(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new Ce(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCamFocus:{value:new N(0,1.2,0)},uSunPower:{value:.5},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uFlakeTex:{value:l}};const c=new Rt({transparent:!0,depthWrite:!1,uniforms:this.snowUniforms,vertexShader:`
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
      `});this.snowPoints=new Oc(o,c),this.snowPoints.frustumCulled=!1,this.scene.add(this.snowPoints)}_initCameraPresets(){const e=this._sampleDemXZ(1.15,-1.45),t=this._sampleDemXZ(2.55,-3.14);this.presets={block:{pos:new N(9.4,8.5,-10.3),target:new N(0,.55,.15),fov:38},webcam:{pos:new N(2.55,t*1.3+.14,-3.14),target:new N(2.35,t*1.3+.72,1.25),fov:52},onglacier:{pos:new N(1.15,e*1.3+.22,-1.45),target:new N(-1.35,e*1.3+.72,1.25),fov:50},flyover:{pos:new N(3.6,2.35,-5.2),target:new N(-.6,1.05,.8),fov:44},plateau:{pos:new N(-8.2,7.6,8.8),target:new N(-.6,1.05,.2),fov:38},top:{pos:new N(.05,17.5,-.8),target:new N(0,.4,0),fov:38}}}setExaggeration(e){this.state.exag=e;const t=this.terrainGeo.attributes.position,n=this.terrainGeo.attributes.aBaseElev;for(let o=0;o<t.count;o++)t.setY(o,n.getX(o)*e);t.needsUpdate=!0,this.terrainGeo.computeVertexNormals();const s=this.skirtGeo.attributes.position;for(let o=0;o<s.count;o++){const l=this.skirtBaseRim[o];l>=0&&s.setY(o,l*e)}s.needsUpdate=!0,this.smokeSharedUniforms.uExag.value=e,this.cloudUniforms.uExag.value=e,this.virgaUniforms.uExag.value=e,this.mistUniforms.uExag.value=e,this.rainUniforms.uExag.value=e,this.snowUniforms.uExag.value=e,this._syncCloudCeiling();const r=this._sampleDemXZ(1.15,-1.45);this.presets.onglacier.pos.y=r*e+.22,this.presets.onglacier.target.y=r*e+.72;const a=this._sampleDemXZ(2.55,-3.14);this.presets.webcam.pos.y=a*e+.14,this.presets.webcam.target.y=a*e+.68}_syncCloudCeiling(){const e=Math.min(1,this.state.precipMmH/2.2),t=Math.max(0,(this.state.exag-1.3)*1.35);this.cloudUniforms.uStormIntensity.value=e,this.virgaUniforms.uCloudTopY.value=3.55-e*.72+t}setMode(e){this.state.mode=e,this.terrainUniforms.uMode.value=e}setContours(e){this.state.contours=e,this.terrainUniforms.uContours.value=e?1:0}setShowSmoke(e){this.state.showSmoke=e,this.smokeGroup.visible=e}setShowClouds(e){this.state.showClouds=e,this.cloudGroup.visible=e,this.skyUniforms.uShowClouds.value=e?1:0}setShowSunArc(e){this.state.showSunArc=e,this.sunGroup.visible=e}setShowPrecip(e){this.state.showPrecip=e,this.virgaMesh.visible=e,this.mistGroup.visible=e,this.rainLines.visible=e,this.snowPoints.visible=e}setShowIsotherm(e){this.state.showIsotherm=e,this.terrainUniforms.uShowIsotherm.value=e?1:0}setShadows(e){this.state.shadows=e,this.sunLight.castShadow=e,this.renderer.shadowMap.enabled=e}setBoost(e){this.state.boost=e,this.terrainUniforms.uDepBoost.value=e}setCompareClean(e){this.state.compareClean=e,this._syncSurfaceUniforms()}setMeteorology({hour:e,depCumFrac:t,plumeDensity:n,cloudCover:s,cloudLow:r,cloudMid:a,cloudHigh:o,sunTrans:l,precipMmH:c,rainSnowM:u,snowLineM:d,snowPackMm:f,windSpeed:m,windBearingDeg:g,swIn:v,lwIn:p,wetFrac:h,totalDepMgM2:w}){this.state.hour=e,this.state.depProgress=t,this.state.plumeDensity=n,this.state.cloudCover=s,this.state.cloudLow=r??s,this.state.cloudMid=a??s*.85,this.state.cloudHigh=o??s*.6,this.state.sunTrans=l??.85,this.state.precipMmH=c,this.state.rainSnowM=u,this.state.snowLineM=d??u,this.state.snowPackMm=f,this.state.windSpeed=m,this.state.windBearingDeg=g,this.state.swIn=v,this.state.lwIn=p,this.state.wetFrac=h,this.state.totalDepMgM2=w;const b=(g+180)*Math.PI/180,M=Math.sin(b),P=-Math.cos(b);this.terrainUniforms.uWindDir.value.set(M,P),this.skyUniforms.uWindDir.value.set(M,P),this.smokeSharedUniforms.uWindDir.value.set(M,P),this.cloudUniforms.uWindDir.value.set(M,P),this.virgaUniforms.uWindDir.value.set(M,P),this.mistUniforms.uWindDir.value.set(M,P),this.rainUniforms.uWindDir.value.set(M,P),this.snowUniforms.uWindDir.value.set(M,P),this.smokeSharedUniforms.uDensity.value=n,this.smokeSharedUniforms.uWetFrac.value=h,this.cloudUniforms.uCloudCover.value=s,this.cloudUniforms.uCloudLow.value=this.state.cloudLow,this.cloudUniforms.uCloudMid.value=this.state.cloudMid,this.cloudUniforms.uWindSpeed.value=m;const T=Math.min(1.5,c/2);this.virgaUniforms.uIntensity.value=T,this.virgaUniforms.uWindSpeed.value=m,this.virgaUniforms.uRainSnowM.value=u,this.mistUniforms.uIntensity.value=T,this.mistUniforms.uWindSpeed.value=m,this.mistUniforms.uRainSnowM.value=u,this.rainUniforms.uIntensity.value=T,this.rainUniforms.uWindSpeed.value=m,this.rainUniforms.uRainSnowM.value=u,this.snowUniforms.uIntensity.value=T,this.snowUniforms.uWindSpeed.value=m,this.snowUniforms.uRainSnowM.value=u,this._syncCloudCeiling(),this._syncSurfaceUniforms(),this._updateSolarAndAtmosphere()}_syncSurfaceUniforms(){this.terrainUniforms.uDepCumFrac.value=this.state.compareClean?0:this.state.depProgress,this.terrainUniforms.uRainSnowM.value=this.state.rainSnowM,this.terrainUniforms.uSnowLineM.value=this.state.compareClean?3600:this.state.snowLineM,this.terrainUniforms.uSnowPackMm.value=this.state.compareClean?0:this.state.snowPackMm,this.terrainUniforms.uRainIntensity.value=Math.min(1.5,this.state.precipMmH/2)}_updateSolarAndAtmosphere(){const e=this.state.hour,t=Math.max(-1.15,Math.min(1.15,(e-13.5)/7.1)),n=180+t*110,s=Math.cos(Math.max(-1,Math.min(1,t))*Math.PI*.5)*47-(Math.abs(t)>1?8:0),r=Math.max(9,s),a=n*Math.PI/180,o=Math.max(-6,s)*Math.PI/180,l=r*Math.PI/180;this._sunDir.set(Math.cos(o)*Math.sin(a),Math.sin(o),-Math.cos(o)*Math.cos(a)).normalize();const c=22;this.sunLight.position.set(c*Math.cos(l)*Math.sin(a),c*Math.sin(l),-c*Math.cos(l)*Math.cos(a)),this.smokeSharedUniforms.uSunDir.value.copy(this._sunDir),this.cloudUniforms.uSunDir.value.copy(this._sunDir),this.skyUniforms.uSunDir.value.copy(this._sunDir);const u=Math.max(0,Math.min(1,this.state.swIn/760)),d=Math.max(.05,Math.min(1,this.state.sunTrans??u)),f=Math.max(0,Math.min(1,(s+5)/14)),m=Math.max(0,1-Math.abs(s-3)/10)*f,g=this.state.showSmoke?this.state.plumeDensity:0,v=this.state.showClouds?this.state.cloudCover:0;this.skyUniforms.uDaylight.value=f,this.skyUniforms.uTwilight.value=m,this.skyUniforms.uSmoke.value=g,this.skyUniforms.uCloud.value=v,this.skyUniforms.uCloudMid.value=this.state.showClouds?this.state.cloudMid:0,this.skyUniforms.uCloudHigh.value=this.state.showClouds?this.state.cloudHigh:0,this.skyUniforms.uSwNorm.value=d,this.cloudUniforms.uDaylight.value=f,this.cloudUniforms.uTwilight.value=m,this.cloudUniforms.uSmoke.value=g;const p=7.4,h=Math.max(1,s*.82)*Math.PI/180;this.sunOrb.position.set(p*Math.cos(h)*Math.sin(a),.55+p*Math.sin(h)*.62,-p*Math.cos(h)*Math.cos(a)),this.sunOrbUniforms.uSunTrans.value=d,this.sunOrbUniforms.uSmoke.value=g,this.sunOrbUniforms.uCloud.value=v,this.sunOrbUniforms.uDaylight.value=f,this.sunOrbUniforms.uTwilight.value=m,this.sunArcMat.opacity=.08+.18*f*d,this.terrainUniforms.uSmokeHaze.value=this.state.compareClean?0:g,this.terrainUniforms.uDaylight.value=f;const w=new Ae(16769162),b=new Ae(16749624),M=new Ae(16747566),P=new Ae(15129800),T=new Ae(5406404),A=w.clone().lerp(P,v*.48).lerp(b,m*.72).lerp(M,g*.58).lerp(T,1-f);this.sunLight.color.copy(A);const O=1.45+2.15*Math.pow(Math.max(u,f*.24),.65);this.sunLight.intensity=.34+(O-.34)*f;const y=new Ae(10934527),S=new Ae(13161698),D=new Ae(14263916),X=new Ae(1979742),H=y.clone().lerp(S,v*.58).lerp(D,g*.48);this.hemiLight.color.copy(X.clone().lerp(H,f));const G=new Ae(7034946).lerp(new Ae(4936542),v*.5),j=new Ae(725536);this.hemiLight.groundColor.copy(j.clone().lerp(G,f)),this.hemiLight.intensity=.16+(.68+.36*Math.sqrt(Math.max(u,.15))+.16*v)*f,this.renderer.toneMappingExposure=.84+.32*f,this.floorMesh.material.color.copy(new Ae(396052).lerp(new Ae(2569802),f));const Y=f*(.38+.62*u);this.smokeSharedUniforms.uSunPower.value=Math.max(.08,Y),this.cloudUniforms.uSunPower.value=Math.max(.08,Y),this.virgaUniforms.uSunPower.value=Math.max(.12,Y),this.mistUniforms.uSunPower.value=Math.max(.12,Y),this.rainUniforms.uSunPower.value=Math.max(.14,Y),this.snowUniforms.uSunPower.value=Math.max(.18,Y);const J=new Ae(330260),V=new Ae(7773380),se=new Ae(8161946),de=new Ae(11048058),fe=V.clone().lerp(se,v*.7).lerp(de,Math.min(1,g*.85));this.scene.fog.color.copy(J.clone().lerp(fe,f));const Fe=Math.min(.018,this.state.precipMmH*.0045);this.scene.fog.density=.0045+Math.pow(g,.85)*.022+v*.0032+Fe}flyTo(e){const t=this.presets[e];t&&(this._camAnim={t:0,dur:.85,fromPos:this.camera.position.clone(),toPos:t.pos.clone(),fromTarget:this.controls.target.clone(),toTarget:t.target.clone(),fromFov:this.camera.fov,toFov:t.fov||38})}getNorthAngleDeg(){const e=new N;return this.camera.getWorldDirection(e),Math.atan2(e.x,-e.z)*180/Math.PI}projectLandmark(e){const t=new N(e.x,e.y0*this.state.exag+.05,e.z);return t.project(this.camera),t.z>1||t.z<-1||t.x<-1.08||t.x>1.08||t.y<-1.08||t.y>1.08?null:{x:(t.x*.5+.5)*this.width,y:(-t.y*.5+.5)*this.height,depth:t.z}}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/Math.max(this.height,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!1),this.snowUniforms.uPixelRatio.value=Math.min(window.devicePixelRatio||1,2)}capturePNG(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}update(e){if(this._camAnim){this._camAnim.t+=e/this._camAnim.dur;const d=Math.min(1,this._camAnim.t),f=1-Math.pow(1-d,3);this.camera.position.lerpVectors(this._camAnim.fromPos,this._camAnim.toPos,f),this.controls.target.lerpVectors(this._camAnim.fromTarget,this._camAnim.toTarget,f),this.camera.fov=this._camAnim.fromFov+(this._camAnim.toFov-this._camAnim.fromFov)*f,this.camera.updateProjectionMatrix(),d>=1&&(this._camAnim=null)}else if(this.state.spin){const d=this.camera.position.clone().sub(this.controls.target);d.applyAxisAngle(new N(0,1,0),e*.15),this.camera.position.copy(this.controls.target).add(d)}this.controls.update(),this.skyDome.position.copy(this.camera.position);const t=new N;this.camera.getWorldDirection(t);const n=this._sampleDemXZ(this.camera.position.x,this.camera.position.z)*this.state.exag,s=Math.max(0,this.camera.position.y-n),r=this.camera.position.distanceTo(this.controls.target),a=(d,f,m)=>{const g=Math.max(0,Math.min(1,(m-d)/(f-d)));return g*g*(3-2*g)},o=a(5.4,1.8,s)*a(8.2,3.6,r),l=a(10.5,5.2,r);this.rainUniforms.uImmersion.value=o,this.snowUniforms.uImmersion.value=o,this.snowUniforms.uMidVisible.value=l,this.sunOrbUniforms.uArcVis.value=1-a(.35,.85,o),this.sunArcLine.visible=this.state.showSunArc&&o<.72;const c=this.camera.position.clone().addScaledVector(t,Math.min(1.45,r*.45));this.rainUniforms.uCamFocus.value.copy(c),this.snowUniforms.uCamFocus.value.copy(c);const u=.55+.16*this.state.windSpeed;this.skyUniforms.uTime.value+=e*u,this.smokeSharedUniforms.uTime.value+=e*u,this.cloudUniforms.uTime.value+=e*(.45+.12*this.state.windSpeed),this.virgaUniforms.uTime.value+=e,this.mistUniforms.uTime.value+=e,this.rainUniforms.uTime.value+=e,this.snowUniforms.uTime.value+=e,this.renderer.render(this.scene,this.camera)}}const vs="v9_webcam_sun_clouds_20261125",jp=document.getElementById("loader"),Ds=document.getElementById("loaderSub"),Co=document.getElementById("sceneCanvas"),Ro=document.getElementById("labelsLayer"),Kp=document.getElementById("compassSvg"),Po=document.getElementById("compassN"),xs=document.getElementById("legendBody");async function Jp(){Ds.textContent="Chargement du MNE Copernicus GLO-30 (320 × 320) et des séquences horaires…";const[i,e]=await Promise.all([fetch(`./data/meta.json?v=${vs}`,{cache:"no-store"}),fetch(`./data/dem_320.bin?v=${vs}`)]);if(!i.ok||!e.ok)throw new Error("Impossible de charger les données du glacier.");const t=await i.json(),n=new Uint16Array(await e.arrayBuffer());Ds.textContent="Chargement de l'imagerie Sentinel-2 L2A (10 m)…";const s=new Xc,[r,a]=await Promise.all([s.loadAsync(`./data/s2_rgb_1536.jpg?v=${vs}`),s.loadAsync(`./data/s2_mask_768.png?v=${vs}`)]);return{meta:t,demU16:n,rgbTex:r,maskTex:a}}function ht(i,e,t){return i+(e-i)*t}function Qp(i,e,t){let n=(e-i+540)%360-180;return(i+n*t+360)%360}function _l(i,e,t=2180,n=6.5){const r=2.6-.019*Math.max(20,Math.min(100,e));return t+(i-r)/n*1e3}function em(i,e,t){const n=i+273.15,r=6.1094*Math.exp(17.625*i/(i+243.04))*(e/100),a=1.24*Math.pow(Math.max(r,.5)/n,1/7);return Math.min(.99,a*(1+.22*t*t))*5670374e-14*Math.pow(n,4)}function tm(i,e="2023-08-18"){const t=Number((e||"2023-08-18").slice(5,7))||8,n={1:230,2:340,3:520,4:690,5:840,6:900,7:870,8:800,9:640,10:450,11:280,12:205},s={1:4.1,2:5,3:6,4:7,5:7.9,6:8.3,7:8,8:7.2,9:6.2,10:5.2,11:4.3,12:3.9},r=t>=4&&t<=10?13.8:12.8,a=s[t]||7.2,o=(i-r)/a;return Math.abs(o)>=1?0:(n[t]||800)*Math.pow(Math.cos(o*Math.PI*.5),1.25)}const nm={1:"janv.",2:"févr.",3:"mars",4:"avr.",5:"mai",6:"juin",7:"juil.",8:"août",9:"sept.",10:"oct.",11:"nov.",12:"déc."};function im(i){return i===0?"Ciel dégagé":i===1?"Peu nuageux":i===2?"Partiellement nuageux":i===3?"Ciel couvert":i===45||i===48?"Brouillard / nuages bas":i>=51&&i<=57?"Bruine fine":i>=61&&i<=67?"Pluie en vallée":i>=71&&i<=77?"Chutes de neige":i>=80&&i<=82?"Averses de pluie":i===85||i===86?"Averses de neige":i>=95?"Orage alpin":""}async function sm(){var w;const e=await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.1955&longitude=-117.2555&elevation=2180&past_days=1&forecast_days=2&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall,shortwave_radiation,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&timezone=America%2FEdmonton",{cache:"no-store"});if(!e.ok)throw new Error(`API Open-Meteo (${e.status})`);const n=(await e.json()).hourly,s=n.time,r=[...new Set(s.map(b=>b.slice(0,10)))],a=r.map(b=>`${Number(b.slice(8,10))} ${nm[Number(b.slice(5,7))]||b.slice(5,7)}`),o=new Intl.DateTimeFormat("sv-SE",{timeZone:"America/Edmonton",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",hour12:!1}).formatToParts(new Date),l=Object.fromEntries(o.map(b=>[b.type,b.value])),c=`${l.year}-${l.month}-${l.day}T${l.hour}:00`;let u=s.indexOf(c);u<0&&(u=Math.min(s.length-1,24));const d=Number(s[0].slice(5,7))||8,f=n.temperature_2m.reduce((b,M)=>b+Number(M??0),0)/Math.max(1,n.temperature_2m.length),m=(d>=11||d<=4)&&f<0;let g=m?14:0,v=m?1840:3480,p=0;const h=s.map((b,M)=>{const P=b.slice(0,10),T=r.indexOf(P),A=Number(b.slice(11,13)),O=Number(n.temperature_2m[M]??0),y=Number(n.relative_humidity_2m[M]??70),S=Number(n.wind_speed_10m[M]??3),D=Math.round(Number(n.wind_direction_10m[M]??245))%360,X=Number(n.shortwave_radiation[M]??0),H=Math.max(0,Math.min(1,Number(n.cloud_cover[M]??30)/100)),G=Math.max(0,Math.min(1,Number(n.cloud_cover_low[M]??0)/100)),j=Math.max(0,Math.min(1,Number(n.cloud_cover_mid[M]??0)/100)),Y=Math.max(0,Math.min(1,Number(n.cloud_cover_high[M]??0)/100)),J=Number(n.weather_code[M]??0),V=Number(n.precipitation[M]??0),se=Number(n.snowfall[M]??0),de=em(O,y,H),fe=_l(O,y,2180,6.5),Fe=Math.max(0,Math.min(1,(3456-fe)/1491)),Ze=Math.max(V*Fe,se*1.4);p+=Math.max(0,V-Ze);const q=Math.max(0,(O-1)*.14+Math.max(0,X-220)*.0018);if(g=Math.max(0,Math.min(30,g+Ze-q)),Ze>=.08){const ie=Math.max(1840,Math.min(3450,fe-60));v=g>=.35?Math.min(v,ie):.55*v+.45*ie}else g<=.05?v=3480:q>.05&&(v=Math.min(3480,v+q*75));return{t:M,dayIdx:T,date:P,dayLabel:a[T],h:A,ta:Number(O.toFixed(1)),rh:Number(y.toFixed(0)),u:Number(S.toFixed(1)),wdir:D,sw:Math.round(X),lw:Math.round(de),cloud:Number(H.toFixed(2)),clLow:Number(G.toFixed(2)),clMid:Number(j.toFixed(2)),clHigh:Number(Y.toFixed(2)),wmo:J,plume:0,pm25:0,daod:0,precip:Number(V.toFixed(2)),snMm:Number((se*1.4).toFixed(2)),rainSnowM:Math.round(fe),snowLineM:Math.round(v),snowFrac:Number(Fe.toFixed(2)),snowPackMm:Number(g.toFixed(1)),rainCumMm:Number(p.toFixed(1)),dryRate:0,wetRate:0,depRate:0,depCum:0,wetFrac:0,deltaAlpha:0}});return{nowIdx:u,episode:{id:"live-now",label:"En direct · Athabasca",tag:"Météo réelle",isLive:!0,exactNas:!1,nDays:r.length,dayLabels:a,subtitle:"Météo réelle en direct (Open-Meteo, 2 180 m, heure locale d'Alberta) : nuages bas/moyens/hauts, pluie/neige, vent et solaire.",windBearingDeg:((w=h[u])==null?void 0:w.wdir)??245,totalDepMgM2:0,provenance:"Météo horaire en temps réel Open-Meteo pour le glacier Athabasca (52,1955° N, 117,2555° O, 2 180 m, America/Edmonton) : nuages 3 niveaux (bas, moyens, hauts), précipitations pluie/neige, rayonnement solaire SW↓, vent et code météo WMO (hier → demain).",hours:h}}}function xr(i,e){const t=i.hours.length-1,n=Math.max(0,Math.min(t,e)),s=Math.floor(n),r=Math.min(t,s+1),a=n-s,o=i.hours[s],l=i.hours[r],c=o.h+a,u=ht(o.depCum??0,l.depCum??0,a),d=i.totalDepMgM2||i.dailyDepMgM2||0,f=d>.05?Math.log1p(u/16)/Math.log1p(Math.max(d,45)/16):0;return{t:n,dayIdx:o.dayIdx??0,dayLabel:o.dayLabel||o.date||"",date:o.date||"",hour:c>=24?c-24:c,depCum:u,depRate:ht(o.depRate??0,l.depRate??0,a),dryRate:ht(o.dryRate??0,l.dryRate??0,a),wetRate:ht(o.wetRate??0,l.wetRate??0,a),depCumFrac:f,deltaAlpha:ht(o.deltaAlpha??0,l.deltaAlpha??0,a),pm25:o.pm25==null||l.pm25==null?null:ht(o.pm25,l.pm25,a),daod:o.daod==null||l.daod==null?null:ht(o.daod,l.daod,a),sw:ht(o.sw??0,l.sw??0,a),lw:ht(o.lw??300,l.lw??300,a),cloud:ht(o.cloud??.2,l.cloud??.2,a),clLow:ht(o.clLow??o.cloud??.2,l.clLow??l.cloud??.2,a),clMid:ht(o.clMid??(o.cloud??.2)*.85,l.clMid??(l.cloud??.2)*.85,a),clHigh:ht(o.clHigh??(o.cloud??.2)*.6,l.clHigh??(l.cloud??.2)*.6,a),wmo:o.wmo??0,ta:ht(o.ta??4,l.ta??4,a),rh:ht(o.rh??70,l.rh??70,a),u:ht(o.u??4,l.u??4,a),wdir:Qp(o.wdir??i.windBearingDeg??250,l.wdir??i.windBearingDeg??250,a),plume:ht(o.plume??.3,l.plume??.3,a),precip:ht(o.precip??0,l.precip??0,a),rainSnowM:ht(o.rainSnowM??2600,l.rainSnowM??2600,a),snowLineM:ht(o.snowLineM??o.rainSnowM??2600,l.snowLineM??l.rainSnowM??2600,a),snowPackMm:ht(o.snowPackMm??o.snowCumMm??0,l.snowPackMm??l.snowCumMm??0,a),wetFrac:ht(o.wetFrac??0,l.wetFrac??0,a)}}function rm(i,e,t){if(t)return"Laboratoire météo manuel";const n=im(e.wmo);if(i==="live-now"){const s=Math.round(e.cloud*100);return`${n||"Météo en direct"} · Nuages ${s} %`}return e.hour<6||e.hour>=21.5?e.wetRate>=2?"Lessivage nocturne intense de la fumée":e.precip>=.4?e.rainSnowM<2350?"Neige nocturne sur le glacier":"Pluie nocturne · neige en altitude":e.pm25!==null&&e.pm25>=50?`Fumée nocturne dense (${Math.round(e.pm25)} µg m⁻³)`:e.cloud>.65?"Nuit alpine couverte":"Nuit alpine · ciel étoilé":e.precip>=.45?e.wetRate>=1.5?"Lessivage humide (EC+OM) sous précipitations":e.rainSnowM<=2280?"Chute de neige jusqu'au bas du glacier":`Pluie en vallée · Neige > ${Math.round(e.rainSnowM)} m`:i==="2024-07-22_29"&&e.plume>.72?"Panache illustratif du mégafeu de Jasper":e.pm25!==null&&e.pm25<2&&(e.daod??0)<.02?e.snowPackMm>=2.5?`${n||"Air alpin pur"} · neige fraîche`:`${n||"Air alpin limpide"} (0 dépôt)`:e.pm25!==null&&e.pm25>=80?`Panache extrême · PM2,5 = ${Math.round(e.pm25)} µg m⁻³`:e.plume>.55?"Fumée dense · dépôt sec actif":e.pm25!==null&&e.pm25>=8?`Brume de feux · ${n||"dépôt sec"}`:e.snowPackMm>=3&&e.ta>4?"Fonte progressive de la neige fraîche":n?`${n} · nuages ${Math.round(e.cloud*100)} %`:"Évolution météorologique en vallée"}function Do(i){const e=Math.floor(i)%24,t=Math.floor((i-Math.floor(i))*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function ft(i,e=1){return i.toFixed(e).replace(".",",")}const Lo={"2023-08-17_24":36.5,"2023-06-11_18":33,"2023-08-26_0902":132,"2021-08-12_19":59.5,"2024-07-22_29":80.5,"2018-08-21_28":83.5};async function am(){try{let qe=function(R,te="small"){if(!R)return"";const I=R.lastIndexOf("/");return I<0?"":`${K}/${R.slice(0,I)}/${te}/${R.slice(I+1)}`},ne=function(R){return R?`https://www.skaping.com/columbiaicefield?archives=${btoa(String(R)).replace(/=+$/,"")}`:"https://www.skaping.com/columbiaicefield"},xe=function(R){if(!R||pe.has(R))return;if(pe.size>48){const I=pe.keys().next().value;pe.delete(I)}const te=new Image;te.src=R,pe.set(R,te)},Te=function(R,te){if(!Q)return;const I=Math.max(0,Math.min(R.hours.length-1,Math.round(te))),ke=`${R.id}:${I}`;if(ke===Z)return;Z=ke;const Ee=R.hours[I];if(R.isLive){be.textContent="En direct",Ge.classList.add("dimmed"),Be.textContent="Caméra Columbia Icefield en hibernation hivernale (archives 2019–2024 disponibles sur les autres séquences).",Be.classList.remove("hidden"),tt.href="https://www.skaping.com/columbiaicefield",Me="";return}if(!R.hasWebcam){be.textContent=Ee.dayLabel,Ge.removeAttribute("src"),Be.textContent="Archives Skaping disponibles à partir du 18 juin 2019 (août 2018 antérieur à la caméra).",Be.classList.remove("hidden"),tt.href="https://www.skaping.com/columbiaicefield",Me="";return}if(Ee.cam){const Ve=qe(Ee.cam,"small");Me=qe(Ee.cam,"large"),ae=ne(Ee.camTs),be.textContent=`${Ee.dayLabel} · ${String(Ee.h).padStart(2,"0")}:00`,tt.href=ae,Ge.classList.remove("dimmed"),Be.classList.add("hidden");const Ye=new Image;Ye.onload=()=>{Z===ke&&(Ge.src=Ve)},Ye.src=Ve;for(let Tt=1;Tt<=2;Tt++){const Re=R.hours[I+Tt];Re&&Re.cam&&xe(qe(Re.cam,"small"))}}else be.textContent=`${Ee.dayLabel} · ${String(Ee.h).padStart(2,"0")}:00 (Nuit)`,Ge.classList.add("dimmed"),Be.textContent="Nuit en montagne · prochaine image dès 05:00 MDT",Be.classList.remove("hidden")},De=function(R){Q=R,me.classList.toggle("hidden",!R),st.classList.toggle("active-cam",R),st.setAttribute("aria-pressed",R?"true":"false"),R&&(Z="",Te(p.episodes[T],A))},_e=function(){Me&&(E.src=Me,_.textContent=`Webcam Columbia Icefield — ${be.textContent} MDT`,B.href=ae,ye.classList.remove("hidden"))},re=function(){if(!me.style.left&&!me.style.top)return;const R=me.getBoundingClientRect(),te=Math.max(8,window.innerWidth-R.width-8),I=Math.max(8,window.innerHeight-R.height-8),ke=parseFloat(me.style.left)||R.left,Ee=parseFloat(me.style.top)||R.top;me.style.left=`${Math.max(8,Math.min(te,ke))}px`,me.style.top=`${Math.max(8,Math.min(I,Ee))}px`},on=function(){const R=p.episodes[T];j.max=String(R.hours.length-1),J.innerHTML="";const te=R.dayLabels||[];te.length>1?(J.style.display="grid",J.style.gridTemplateColumns=`repeat(${te.length}, 1fr)`,an=te.map((Ve,at)=>{const Ye=document.createElement("button");return Ye.className="day-pill",Ye.textContent=Ve,Ye.addEventListener("click",()=>{A=Math.min(R.hours.length-1,at*24+12),St()}),J.appendChild(Ye),Ye})):(J.style.display="none",an=[]),Mn=R.hours.length>96?2:1;const I=Math.ceil(R.hours.length/Mn),ke=[];for(let Ve=0;Ve<I;Ve++){let at=0,Ye=0;for(let Tt=0;Tt<Mn;Tt++){const Re=Ve*Mn+Tt;if(Re<R.hours.length){const yt=R.hours[Re];X==="ta"?at+=Math.max(0,(yt.ta??0)+4):X==="pm25"?at+=yt.pm25!=null?yt.pm25:(yt.plume||0)*100:at+=yt[X]||0,Ye++}}ke.push(at/Math.max(Ye,1))}const Ee=Math.max(...ke,.1);Y.innerHTML="",Ln=ke.map(Ve=>{const at=document.createElement("div");at.className=`hist-bar ${X}`;let Ye;return X==="depRate"?Ye=Ve<=.005?0:Math.log1p(Ve*4)/Math.log1p(Ee*4):X==="pm25"?Ye=Ve<=.5?0:Math.log1p(Ve*.25)/Math.log1p(Ee*.25):X==="precip"?Ye=Ve<=.02?0:Math.sqrt(Ve/Ee):Ye=Ve/Ee,at.style.height=`${Math.max(6,Math.round(Ye*100))}%`,Y.appendChild(at),at}),Pe.textContent=R.provenance||""},Un=function(){const R=M.state.mode,te=p.episodes[T],I=te.totalDepMgM2||te.dailyDepMgM2||30;R===0?xs.innerHTML=`
          <div class="legend-title">Atmosphère &amp; manteau neigeux</div>
          <div><span style="color:#f59e0b">■ Fumée</span> (ambre bas en vallée) · <span style="color:#e2e8f0">■ Nuages</span> (blanc/gris en altitude) · <span style="color:#5cc8ff">— Pluie/neige</span></div>
        `:R===1?xs.innerHTML=`
          <div class="legend-title">Dépôt cumulé EC + OM (mg m⁻²)</div>
          <div class="legend-bar" style="background:linear-gradient(90deg,#14243d,#423d70,#bf4d2e,#f5a324,#fceb99)"></div>
          <div class="legend-scale"><span>0</span><span>${ft(I*.5,0)}</span><span>${ft(I,1)} mg m⁻²</span></div>
        `:R===2?xs.innerHTML=`
          <div class="legend-title">Surface glaciaire (NDSI + albédo)</div>
          <div class="legend-grid">
            <span class="legend-chip"><i style="background:#d6e3f2"></i>Neige / névé</span>
            <span class="legend-chip"><i style="background:#4f9ad8"></i>Glace vive</span>
            <span class="legend-chip"><i style="background:#1fadad"></i>Lac proglaciaire</span>
            <span class="legend-chip"><i style="background:#665c50"></i>Roche / moraine</span>
          </div>
        `:xs.innerHTML=`
          <div class="legend-title">Maquette géomorphologique</div>
          <div>Relief pur Copernicus GLO-30 (1 867 – 3 494 m) avec cycle solaire réel sur 8 jours.</div>
        `},Pi=function(R){he.value=String(Math.round(R.plume*100)),Ft.textContent=`${Math.round(R.plume*100)} %`,ce.value=String(Math.round(R.sw)),Xt.textContent=`${Math.round(R.sw)} W m⁻²`,Oe.value=String(Math.round(R.cloud*100)),Ci.textContent=`${Math.round(R.cloud*100)} %`,rt.value=R.precip.toFixed(1),Ri.textContent=`${ft(R.precip,1)} mm/h`,pt.value=Math.max(-4,Math.min(16,R.ta)).toFixed(1),tn.textContent=`${ft(R.ta,1)} °C`,Je.value=Math.max(.5,Math.min(16,R.u)).toFixed(1),Jn.textContent=`${ft(R.u,1)} m/s`},St=function(){const R=p.episodes[T],te=xr(R,A),I={...te};if(H){if(I.plume=G.smoke,I.sw=G.sw,I.cloud=G.cloud,I.clLow=G.cloud,I.clMid=G.cloud*.9,I.clHigh=G.cloud*.65,I.precip=G.precip,I.ta=G.ta,I.u=G.wind,I.rh=I.precip>.2?Math.max(90,te.rh):te.rh,I.rainSnowM=_l(I.ta,I.rh,p.awsElevM||2180,p.lapseCPerKm||6.5),I.precip>.15&&(I.cloud=Math.max(I.cloud,.72),I.clLow=Math.max(I.clLow,.72),I.clMid=Math.max(I.clMid,.78)),I.lw=275+I.cloud*55,I.wetFrac=I.precip>.2?.78:0,I.precip>.1){const Re=Math.max(0,Math.min(1,(3456-I.rainSnowM)/1491));I.snowPackMm=Math.max(te.snowPackMm,I.precip*5.5*Re),I.snowLineM=Math.max(1840,Math.min(I.snowLineM,I.rainSnowM-50))}}else Pi(I);const ke=tm(I.hour,I.date),Ee=ke>=35,Ve=Ee?Math.max(.05,Math.min(1,I.sw/ke)):.05,at=Ee?Math.max(0,Math.min(99,Math.round((1-Ve)*100))):100;M.setMeteorology({hour:I.hour,depCumFrac:I.depCumFrac,plumeDensity:I.plume,cloudCover:I.cloud,cloudLow:I.clLow,cloudMid:I.clMid,cloudHigh:I.clHigh,sunTrans:Ve,precipMmH:I.precip,rainSnowM:I.rainSnowM,snowLineM:I.snowLineM,snowPackMm:I.snowPackMm,windSpeed:I.u,windBearingDeg:I.wdir,swIn:I.sw,lwIn:I.lw,wetFrac:I.wetFrac,totalDepMgM2:R.totalDepMgM2||R.dailyDepMgM2||30}),j.value=I.t.toFixed(2),V.textContent=I.dayLabel,se.textContent=Do(I.hour),de.textContent=rm(T,I,H);const Ye=M.state.compareClean;if(!Ee)Fe.textContent=`Nuit · LW ${Math.round(I.lw)}`,fe.style.backgroundColor="#475569",fe.style.boxShadow="none",fe.style.opacity="0.65";else{const Re=at<=10?"Clair":`−${at} %`;Fe.textContent=`${Math.round(I.sw)} W/m² · ${Re}`,I.plume>.45&&I.cloud<.65?(fe.style.backgroundColor="#f97316",fe.style.boxShadow=`0 0 ${Math.round(4+6*Ve)}px rgba(249,115,22,0.85)`):at>=45?(fe.style.backgroundColor="#94a3b8",fe.style.boxShadow="0 0 4px rgba(148,163,184,0.45)"):(fe.style.backgroundColor="#fde047",fe.style.boxShadow=`0 0 ${Math.round(5+7*Ve)}px rgba(253,224,71,0.9)`),fe.style.opacity=String(Math.max(.35,.35+.65*Ve))}if(H)Ze.textContent=`Manuel · ${Math.round(I.plume*100)} %`;else if(R.isLive)Ze.textContent=`Nuages ${Math.round(I.cloud*100)} %`;else if(I.pm25===null)Ze.textContent=`Illust. · ${Math.round(I.plume*100)} %`;else if(I.pm25<1.5&&(I.daod??0)<.02)Ze.textContent=`Air pur · ${ft(I.pm25,1)}`;else{const Re=I.daod&&I.daod>=.03?` · ${ft(I.daod,2)}`:"";Ze.textContent=`${ft(I.pm25,I.pm25>=10?0:1)} µg/m³${Re}`}if(q.textContent=`${ft(I.ta,1)} °C · ${Math.round(I.rainSnowM)} m`,I.precip<.05?ie.textContent="Sec · 0,0 mm/h":I.rainSnowM<=2120?ie.textContent=`Neige · ${ft(I.precip,1)} mm/h`:I.rainSnowM>=3460?ie.textContent=`Pluie · ${ft(I.precip,1)} mm/h`:ie.textContent=`Mixte · ${ft(I.precip,1)} mm/h`,Se.textContent=Ye?"0,0 mm":`${ft(I.snowPackMm,1)} mm éq.`,Ye||R.isLive)le.textContent=R.isLive?"Météo live (0 feu)":"0,0 mg m⁻²";else{const Re=I.depRate<.02?"0/h":`+${ft(I.depRate,I.depRate>=10?0:1)} ${I.wetFrac>=.5?"hum":"sec"}`;le.textContent=`${ft(I.depCum,I.depCum>=100?0:1)} mg (${Re})`}const Tt=Math.floor(I.t/Mn);for(let Re=0;Re<Ln.length;Re++)Ln[Re].classList.toggle("past",Re<Tt),Ln[Re].classList.toggle("current",Re===Tt);for(let Re=0;Re<an.length;Re++)an[Re].classList.toggle("active",Re===I.dayIdx);Te(R,A)},In=function(R){O=R,Fs.style.display=O?"none":"block",Os.style.display=O?"block":"none"},x=function(R,te=null){T=R,H=!1,xn.classList.add("hidden"),document.querySelectorAll(".ep-btn").forEach(I=>{const ke=I.dataset.episode===T;I.classList.toggle("active",ke),I.setAttribute("aria-selected",ke?"true":"false")}),A=te??Lo[T]??12,on(),Un(),St(),In(R!=="live-now")},U=function(){if(!H){const R=xr(p.episodes[T],A);G.smoke=R.plume,G.sw=R.sw,G.cloud=R.cloud,G.precip=R.precip,G.ta=R.ta,G.wind=R.u,H=!0,xn.classList.remove("hidden")}},ot=function(R){requestAnimationFrame(ot);const te=Math.min((R-Qe)/1e3,.05);if(Qe=R,O){const Ee=p.episodes[T];A+=te*1.5*y[S],A>Ee.hours.length-1&&(A=0),St()}M.update(te);const I=M.getNorthAngleDeg();Kp.style.transform=`rotate(${I.toFixed(1)}deg)`;const ke=I*Math.PI/180;if(Po.style.left=`${(19+13*Math.sin(ke)-4).toFixed(1)}px`,Po.style.top=`${(19-13*Math.cos(ke)-6).toFixed(1)}px`,D)for(let Ee=0;Ee<P.length;Ee++){const{el:Ve,lm:at}=P[Ee],Ye=M.projectLandmark(at);Ye?(Ve.style.opacity="1",Ve.style.left=`${Ye.x.toFixed(1)}px`,Ve.style.top=`${Ye.y.toFixed(1)}px`,Ve.style.zIndex=String(Math.floor((1-Ye.depth)*1e3))):Ve.style.opacity="0"}};var i=qe,e=ne,t=xe,n=Te,s=De,r=_e,a=re,o=on,l=Un,c=Pi,u=St,d=In,f=x,m=U,g=ot;const v=await Jp(),{meta:p,demU16:h,rgbTex:w,maskTex:b}=v;Ds.textContent="Initialisation de la scène 3D…";const M=new $p(Co,p,h,w,b),P=p.landmarks.map(R=>{const te=document.createElement("div");return te.className="pin-label",te.innerHTML=`
        <div class="pin-card">
          <span class="pin-name">${R.name}</span>
          <span class="pin-elev">${R.elevM.toLocaleString("fr-CA")} m</span>
        </div>
        <div class="pin-stem"></div>
        <div class="pin-dot ${R.kind}"></div>
      `,Ro.appendChild(te),{el:te,lm:R}});let T="2023-08-17_24";p.episodes[T]||(T=Object.keys(p.episodes)[0]);let A=Lo[T]??12,O=!0;const y=[.5,1,2,4];let S=0,D=!0,X="precip",H=!1;const G={smoke:.5,sw:350,cloud:.4,precip:0,ta:3.5,wind:5},j=document.getElementById("timeSlider"),Y=document.getElementById("histBars"),J=document.getElementById("dayPills"),V=document.getElementById("clockDate"),se=document.getElementById("clockTime"),de=document.getElementById("clockPhase"),fe=document.getElementById("sunDot"),Fe=document.getElementById("kpiSwLw"),Ze=document.getElementById("kpiSmoke"),q=document.getElementById("kpiTempIso"),ie=document.getElementById("kpiPrecip"),Se=document.getElementById("kpiSnowPack"),le=document.getElementById("kpiDep"),Pe=document.getElementById("modalProvenance"),Le=document.getElementById("liveTag"),me=document.getElementById("webcamCard"),st=document.getElementById("btnWebcamToggle"),je=document.getElementById("btnWebcamClose"),ut=document.getElementById("btnWebcamZoom"),C=document.getElementById("btnMatchCam"),Nt=document.getElementById("webcamMedia"),Ge=document.getElementById("webcamImg"),Be=document.getElementById("webcamOverlay"),be=document.getElementById("webcamStamp"),tt=document.getElementById("webcamLink"),ye=document.getElementById("webcamModal"),E=document.getElementById("webcamModalImg"),_=document.getElementById("webcamModalTitle"),B=document.getElementById("webcamModalLink"),K=p.skapingBase||"https://skaping.s3.gra.io.cloud.ovh.net/pursuit/columbia_icefield";let Q=!0,Z="",Me="",ae="https://www.skaping.com/columbiaicefield";const pe=new Map;st.addEventListener("click",()=>De(!Q)),je.addEventListener("click",()=>De(!1)),C.addEventListener("click",()=>{document.querySelectorAll(".preset-group .pill-btn").forEach(R=>R.classList.toggle("active",R.dataset.preset==="webcam")),M.flyTo("webcam")}),ut.addEventListener("click",_e),Nt.addEventListener("click",_e),document.getElementById("btnCloseWebcamModal").addEventListener("click",()=>ye.classList.add("hidden")),ye.addEventListener("click",R=>{R.target===ye&&ye.classList.add("hidden")});const ze=document.getElementById("webcamDragHandle"),Ne=document.getElementById("webcamResizeHandle");let Ke=null,L=null;ze.addEventListener("pointerdown",R=>{if(R.target.closest("button, a"))return;R.preventDefault(),R.stopPropagation();const te=me.getBoundingClientRect();me.style.left=`${te.left}px`,me.style.top=`${te.top}px`,me.style.right="auto",me.style.bottom="auto",me.classList.add("dragging"),Ke={id:R.pointerId,dx:R.clientX-te.left,dy:R.clientY-te.top},ze.setPointerCapture(R.pointerId)}),ze.addEventListener("pointermove",R=>{if(!Ke||R.pointerId!==Ke.id)return;const te=me.getBoundingClientRect(),I=Math.max(8,Math.min(window.innerWidth-te.width-8,R.clientX-Ke.dx)),ke=Math.max(8,Math.min(window.innerHeight-te.height-8,R.clientY-Ke.dy));me.style.left=`${I}px`,me.style.top=`${ke}px`});const W=R=>{if(!(!Ke||R.pointerId!==Ke.id)){Ke=null,me.classList.remove("dragging");try{ze.releasePointerCapture(R.pointerId)}catch{}}};ze.addEventListener("pointerup",W),ze.addEventListener("pointercancel",W),ze.addEventListener("dblclick",R=>{R.target.closest("button, a")||(me.style.left="",me.style.top="",me.style.right="",me.style.bottom="",me.style.width="")}),Ne.addEventListener("pointerdown",R=>{R.preventDefault(),R.stopPropagation();const te=me.getBoundingClientRect();me.style.left=`${te.left}px`,me.style.top=`${te.top}px`,me.style.right="auto",me.style.bottom="auto",L={id:R.pointerId,startX:R.clientX,startW:te.width},Ne.setPointerCapture(R.pointerId)}),Ne.addEventListener("pointermove",R=>{if(!L||R.pointerId!==L.id)return;const te=Math.min(720,window.innerWidth-(parseFloat(me.style.left)||16)-12),I=Math.max(240,Math.min(te,L.startW+(R.clientX-L.startX)));me.style.width=`${Math.round(I)}px`,re()});const $=R=>{if(!(!L||R.pointerId!==L.id)){L=null;try{Ne.releasePointerCapture(R.pointerId)}catch{}}};Ne.addEventListener("pointerup",$),Ne.addEventListener("pointercancel",$),window.addEventListener("resize",re);const he=document.getElementById("slLabSmoke"),ce=document.getElementById("slLabSw"),Oe=document.getElementById("slLabCloud"),rt=document.getElementById("slLabPrecip"),pt=document.getElementById("slLabTemp"),Je=document.getElementById("slLabWind"),Ft=document.getElementById("valLabSmoke"),Xt=document.getElementById("valLabSw"),Ci=document.getElementById("valLabCloud"),Ri=document.getElementById("valLabPrecip"),tn=document.getElementById("valLabTemp"),Jn=document.getElementById("valLabWind"),xn=document.getElementById("btnSyncAws");let Ln=[],an=[],Mn=1;const Ns=document.getElementById("btnPlay"),Fs=document.getElementById("iconPlay"),Os=document.getElementById("iconPause");Ns.addEventListener("click",()=>In(!O)),In(!0);const Xi=document.getElementById("btnSpeed");Xi.addEventListener("click",()=>{S=(S+1)%y.length,Xi.textContent=`${String(y[S]).replace(".",",")}×`}),j.addEventListener("input",()=>{A=parseFloat(j.value),St()}),document.querySelectorAll(".ctab").forEach(R=>{R.addEventListener("click",()=>{X=R.dataset.metric,document.querySelectorAll(".ctab").forEach(te=>te.classList.toggle("active",te===R)),on(),St()})}),document.querySelectorAll(".ep-btn").forEach(R=>{R.addEventListener("click",async()=>{const te=R.dataset.episode;if(te==="live-now"){Le.textContent="Chargement…";try{const{nowIdx:I,episode:ke}=await sm();p.episodes["live-now"]=ke;const Ee=ke.hours[I];Le.textContent=`${ft(Ee.ta,0)} °C · ${Math.round(Ee.cloud*100)} %`,x("live-now",I)}catch(I){console.error("Live weather fetch failed:",I),Le.textContent="Indisponible"}return}p.episodes[te]&&x(te)})}),he.addEventListener("input",()=>{U(),G.smoke=parseFloat(he.value)/100,Ft.textContent=`${Math.round(G.smoke*100)} %`,St()}),ce.addEventListener("input",()=>{U(),G.sw=parseFloat(ce.value),Xt.textContent=`${Math.round(G.sw)} W m⁻²`,St()}),Oe.addEventListener("input",()=>{U(),G.cloud=parseFloat(Oe.value)/100,Ci.textContent=`${Math.round(G.cloud*100)} %`,St()}),rt.addEventListener("input",()=>{U(),G.precip=parseFloat(rt.value),Ri.textContent=`${ft(G.precip,1)} mm/h`,St()}),pt.addEventListener("input",()=>{U(),G.ta=parseFloat(pt.value),tn.textContent=`${ft(G.ta,1)} °C`,St()}),Je.addEventListener("input",()=>{U(),G.wind=parseFloat(Je.value),Jn.textContent=`${ft(G.wind,1)} m/s`,St()}),xn.addEventListener("click",()=>{H=!1,xn.classList.add("hidden"),St()});const z=document.getElementById("btnCompare"),k=R=>{M.setCompareClean(R),z.classList.toggle("active",R),St()};z.addEventListener("pointerdown",()=>k(!0)),window.addEventListener("pointerup",()=>{M.state.compareClean&&k(!1)}),z.addEventListener("pointerleave",()=>{M.state.compareClean&&k(!1)}),window.addEventListener("keydown",R=>{R.target.tagName!=="INPUT"&&(R.code==="Space"&&(R.preventDefault(),In(!O)),(R.key==="b"||R.key==="B")&&k(!0))}),window.addEventListener("keyup",R=>{(R.key==="b"||R.key==="B")&&k(!1)});const F=document.querySelectorAll(".preset-group .pill-btn");F.forEach(R=>{R.addEventListener("click",()=>{F.forEach(te=>te.classList.remove("active")),R.classList.add("active"),M.flyTo(R.dataset.preset)})}),document.getElementById("compassWrap").addEventListener("click",()=>M.flyTo("block")),Co.addEventListener("dblclick",()=>M.flyTo("block"));const ee=document.getElementById("btnSettings"),ue=document.getElementById("settingsDrawer");ee.addEventListener("click",()=>{const R=ue.classList.toggle("hidden");ee.setAttribute("aria-expanded",R?"false":"true")});const ge=document.querySelectorAll(".mode-btn");ge.forEach(R=>{R.addEventListener("click",()=>{ge.forEach(te=>te.classList.remove("active")),R.classList.add("active"),M.setMode(Number(R.dataset.mode)),Un()})});const ve=document.getElementById("slExag"),Ue=document.getElementById("valExag");ve.addEventListener("input",()=>{const R=parseFloat(ve.value);Ue.textContent=`${ft(R,2)}×`,M.setExaggeration(R)});const Ie=document.getElementById("slBoost"),we=document.getElementById("valBoost");Ie.addEventListener("input",()=>{const R=parseFloat(Ie.value);we.textContent=`${ft(R,1)}×`,M.setBoost(R)}),document.getElementById("chkClouds").addEventListener("change",R=>M.setShowClouds(R.target.checked)),document.getElementById("chkSmoke").addEventListener("change",R=>M.setShowSmoke(R.target.checked)),document.getElementById("chkPrecip").addEventListener("change",R=>M.setShowPrecip(R.target.checked)),document.getElementById("chkSunArc").addEventListener("change",R=>M.setShowSunArc(R.target.checked)),document.getElementById("chkIsotherm").addEventListener("change",R=>M.setShowIsotherm(R.target.checked)),document.getElementById("chkShadows").addEventListener("change",R=>M.setShadows(R.target.checked)),document.getElementById("chkContours").addEventListener("change",R=>M.setContours(R.target.checked)),document.getElementById("chkLabels").addEventListener("change",R=>{D=R.target.checked,Ro.style.display=D?"block":"none"}),document.getElementById("chkSpin").addEventListener("change",R=>{M.state.spin=R.target.checked}),document.getElementById("btnReset").addEventListener("click",()=>{H=!1,xn.classList.add("hidden"),M.flyTo("block"),ve.value="1.30",Ue.textContent="1,30×",M.setExaggeration(1.3),Ie.value="1.4",we.textContent="1,4×",M.setBoost(1.4),M.state.spin=!1,document.getElementById("chkSpin").checked=!1,St()}),document.getElementById("btnSnap").addEventListener("click",()=>{const R=p.episodes[T],te=xr(R,A),I=document.createElement("a");I.download=`athabasca_3d_${te.date}_${Do(te.hour).replace(":","h")}.png`,I.href=M.capturePNG(),I.click()});const Xe=document.getElementById("infoModal");document.getElementById("btnInfo").addEventListener("click",()=>Xe.classList.remove("hidden")),document.getElementById("btnCloseInfo").addEventListener("click",()=>Xe.classList.add("hidden")),Xe.addEventListener("click",R=>{R.target===Xe&&Xe.classList.add("hidden")}),window.addEventListener("resize",()=>M.resize()),on(),Un(),St(),jp.classList.add("done");let Qe=performance.now();requestAnimationFrame(ot)}catch(v){console.error("Athabasca 3D boot error:",v),Ds.textContent="Erreur d'initialisation : "+((v==null?void 0:v.message)||String(v))}}am();
