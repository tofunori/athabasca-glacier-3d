(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const La="172",Di={ROTATE:0,DOLLY:1,PAN:2},Ri={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ql=0,ja=1,Zl=2,ll=1,cl=2,Tn=3,Hn=0,Wt=1,$t=2,zn=0,Li=1,Vr=2,Ka=3,Ja=4,$l=5,ei=100,jl=101,Kl=102,Jl=103,Ql=104,ec=200,tc=201,nc=202,ic=203,Wr=204,Xr=205,sc=206,rc=207,ac=208,oc=209,lc=210,cc=211,uc=212,hc=213,dc=214,Yr=0,qr=1,Zr=2,Ni=3,$r=4,jr=5,Kr=6,Jr=7,ul=0,fc=1,pc=2,kn=0,mc=1,gc=2,vc=3,hl=4,_c=5,xc=6,Mc=7,dl=300,Fi=301,Oi=302,Qr=303,ea=304,er=306,ta=1e3,It=1001,na=1002,en=1003,Sc=1004,ds=1005,on=1006,cr=1007,ni=1008,_n=1009,fl=1010,pl=1011,is=1012,Ua=1013,si=1014,Cn=1015,rs=1016,Ia=1017,Na=1018,Bi=1020,ml=35902,gl=1021,vl=1022,Qt=1023,_l=1024,xl=1025,Ui=1026,zi=1027,Ml=1028,Fa=1029,Sl=1030,Oa=1031,Ba=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ua=37808,ha=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,va=37815,_a=37816,xa=37817,Ma=37818,Sa=37819,ya=37820,Ea=37821,Ys=36492,ba=36494,wa=36495,yl=36283,Ta=36284,Aa=36285,Ca=36286,yc=3200,Ec=3201,El=0,bc=1,an="",Vt="srgb",ki="srgb-linear",$s="linear",it="srgb",pi=7680,Qa=519,wc=512,Tc=513,Ac=514,bl=515,Cc=516,Rc=517,Pc=518,Dc=519,eo=35044,to="300 es",Rn=2e3,js=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Ra=180/Math.PI;function as(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Lc(i,e){return(i%e+e)%e}function ur(i,e,t){return(1-t)*i+t*e}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Uc={DEG2RAD:qs};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],h=s[6],T=s[1],b=s[4],S=s[7],w=s[2],A=s[5],C=s[8];return r[0]=o*x+a*T+l*w,r[3]=o*p+a*b+l*A,r[6]=o*h+a*S+l*C,r[1]=c*x+u*T+d*w,r[4]=c*p+u*b+d*A,r[7]=c*h+u*S+d*C,r[2]=f*x+m*T+g*w,r[5]=f*p+m*b+g*A,r[8]=f*h+m*S+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*d+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*c-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(hr.makeScale(e,t)),this}rotate(e){return this.premultiply(hr.makeRotation(-e)),this}translate(e,t){return this.premultiply(hr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new Be;function wl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ic(){const i=ss("canvas");return i.style.display="block",i}const no={};function Ci(i){i in no||(no[i]=!0,console.warn(i))}function Nc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Fc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Oc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const io=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),so=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bc(){const i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===an?$s:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:io,fromXYZ:so,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const et=Bc();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ii(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mi===void 0&&(mi=ss("canvas")),mi.width=e.width,mi.height=e.height;const n=mi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kc=0;class Tl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(dr(s[o].image)):r.push(dr(s[o]))}else r=dr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hc=0;class Ft extends oi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=It,s=It,r=on,o=ni,a=Qt,l=_n,c=Ft.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=as(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ta:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ta:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=dl;Ft.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,s=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,w=(h+1)/2,A=(u+f)/4,C=(d+x)/4,F=(g+p)/4;return b>S&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=C/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=F/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=F/r),this.set(n,s,r,t),this}let T=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(d-x)/T,this.z=(f-u)/T,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gc extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ft(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends Gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Al extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vc extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*x,T=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){const w=Math.sqrt(b),A=Math.atan2(w,h*T);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w}const S=a*T;if(l=l*p+f*S,c=c*p+m*S,u=u*p+g*S,d=d*p+x*S,p===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=w,c*=w,u*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fr.copy(this).projectOnVector(e),this.sub(fr)}reflect(e){return this.sub(fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new N,ro=new ai;class os{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),ps.subVectors(this.max,Ki),gi.subVectors(e.a,Ki),vi.subVectors(e.b,Ki),_i.subVectors(e.c,Ki),Ln.subVectors(vi,gi),Un.subVectors(_i,vi),Xn.subVectors(gi,_i);let t=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-Xn.z,Xn.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,Xn.z,0,-Xn.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-Xn.y,Xn.x,0];return!pr(t,gi,vi,_i,ps)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,gi,vi,_i,ps))?!1:(ms.crossVectors(Ln,Un),t=[ms.x,ms.y,ms.z],pr(t,gi,vi,_i,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new N,new N,new N,new N,new N,new N,new N,new N],dn=new N,fs=new os,gi=new N,vi=new N,_i=new N,Ln=new N,Un=new N,Xn=new N,Ki=new N,ps=new N,ms=new N,Yn=new N;function pr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);const a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),u=n.dot(Yn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wc=new os,Ji=new N,mr=new N;class ls{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(mr)),this.expandByPoint(Ji.copy(e.center).sub(mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new N,gr=new N,gs=new N,In=new N,vr=new N,vs=new N,_r=new N;class tr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gr.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),In.copy(this.origin).sub(gr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=In.dot(this.direction),l=-In.dot(gs),c=In.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gr).addScaledVector(gs,f),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,s,r){vr.subVectors(t,e),vs.subVectors(n,e),_r.crossVectors(vr,vs);let o=this.direction.dot(_r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,e);const l=a*this.direction.dot(vs.crossVectors(In,vs));if(l<0)return null;const c=a*this.direction.dot(vr.cross(In));if(c<0||l+c>o)return null;const u=-a*In.dot(_r);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,t,n,s,r,o,a,l,c,u,d,f,m,g,x,p){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,d,f,m,g,x,p)}set(e,t,n,s,r,o,a,l,c,u,d,f,m,g,x,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=x,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,x=c*d;t[0]=f+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,x=c*d;t[0]=f-x*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,x=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+x,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xc,e,Yc)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Nn.crossVectors(n,Kt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Nn.crossVectors(n,Kt)),Nn.normalize(),_s.crossVectors(Kt,Nn),s[0]=Nn.x,s[4]=_s.x,s[8]=Kt.x,s[1]=Nn.y,s[5]=_s.y,s[9]=Kt.y,s[2]=Nn.z,s[6]=_s.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],h=n[14],T=n[3],b=n[7],S=n[11],w=n[15],A=s[0],C=s[4],F=s[8],y=s[12],M=s[1],D=s[5],B=s[9],H=s[13],X=s[2],$=s[6],Y=s[10],Q=s[14],G=s[3],ie=s[7],se=s[11],xe=s[15];return r[0]=o*A+a*M+l*X+c*G,r[4]=o*C+a*D+l*$+c*ie,r[8]=o*F+a*B+l*Y+c*se,r[12]=o*y+a*H+l*Q+c*xe,r[1]=u*A+d*M+f*X+m*G,r[5]=u*C+d*D+f*$+m*ie,r[9]=u*F+d*B+f*Y+m*se,r[13]=u*y+d*H+f*Q+m*xe,r[2]=g*A+x*M+p*X+h*G,r[6]=g*C+x*D+p*$+h*ie,r[10]=g*F+x*B+p*Y+h*se,r[14]=g*y+x*H+p*Q+h*xe,r[3]=T*A+b*M+S*X+w*G,r[7]=T*C+b*D+S*$+w*ie,r[11]=T*F+b*B+S*Y+w*se,r[15]=T*y+b*H+S*Q+w*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*m-n*l*m)+x*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+n*o*m+r*a*u-n*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],h=e[15],T=d*p*c-x*f*c+x*l*m-a*p*m-d*l*h+a*f*h,b=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,S=u*x*c-g*d*c+g*a*m-o*x*m-u*a*h+o*d*h,w=g*d*l-u*x*l-g*a*f+o*x*f+u*a*p-o*d*p,A=t*T+n*b+s*S+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=T*C,e[1]=(x*f*r-d*p*r-x*s*m+n*p*m+d*s*h-n*f*h)*C,e[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*h+n*l*h)*C,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*m-n*l*m)*C,e[4]=b*C,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*C,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*C,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*C,e[8]=S*C,e[9]=(g*d*r-u*x*r-g*n*m+t*x*m+u*n*h-t*d*h)*C,e[10]=(o*x*r-g*a*r+g*n*c-t*x*c-o*n*h+t*a*h)*C,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*m-t*a*m)*C,e[12]=w*C,e[13]=(u*x*s-g*d*s+g*n*f-t*x*f-u*n*p+t*d*p)*C,e[14]=(g*a*s-o*x*s-g*n*l+t*x*l+o*n*p-t*a*p)*C,e[15]=(o*d*s-u*a*s+u*n*l-t*d*l-o*n*f+t*a*f)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,g=r*d,x=o*u,p=o*d,h=a*d,T=l*c,b=l*u,S=l*d,w=n.x,A=n.y,C=n.z;return s[0]=(1-(x+h))*w,s[1]=(m+S)*w,s[2]=(g-b)*w,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(f+h))*A,s[6]=(p+T)*A,s[7]=0,s[8]=(g+b)*C,s[9]=(p-T)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const c=1/r,u=1/o,d=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Rn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(a===Rn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Rn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(o-r),f=(t+e)*c,m=(n+s)*u;let g,x;if(a===Rn)g=(o+r)*d,x=-2*d;else if(a===js)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new N,fn=new ft,Xc=new N(0,0,0),Yc=new N(1,1,1),Nn=new N,_s=new N,Kt=new N,ao=new ft,oo=new ai;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ao.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ao,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return oo.setFromEuler(this),this.setFromQuaternion(oo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qc=0;const lo=new N,Mi=new ai,En=new ft,xs=new N,Qi=new N,Zc=new N,$c=new ai,co=new N(1,0,0),uo=new N(0,1,0),ho=new N(0,0,1),fo={type:"added"},jc={type:"removed"},Si={type:"childadded",child:null},xr={type:"childremoved",child:null};class Tt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new N,t=new xn,n=new ai,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(e,t){return Mi.setFromAxisAngle(e,t),this.quaternion.premultiply(Mi),this}rotateX(e){return this.rotateOnAxis(co,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return lo.copy(e).applyQuaternion(this.quaternion),this.position.add(lo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(co,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Qi,xs,this.up):En.lookAt(xs,Qi,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(En),this.quaternion.premultiply(Mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fo),Si.child=e,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jc),xr.child=e,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fo),Si.child=e,this.dispatchEvent(Si),Si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,Zc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,$c,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Tt.DEFAULT_UP=new N(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new N,bn=new N,Mr=new N,wn=new N,yi=new N,Ei=new N,po=new N,Sr=new N,yr=new N,Er=new N,br=new St,wr=new St,Tr=new St;class mn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),bn.subVectors(n,t),Mr.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(bn),l=pn.dot(Mr),c=bn.dot(bn),u=bn.dot(Mr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return br.setScalar(0),wr.setScalar(0),Tr.setScalar(0),br.fromBufferAttribute(e,t),wr.fromBufferAttribute(e,n),Tr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(br,r.x),o.addScaledVector(wr,r.y),o.addScaledVector(Tr,r.z),o}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),bn.subVectors(e,t),pn.cross(bn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),pn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;yi.subVectors(s,n),Ei.subVectors(r,n),Sr.subVectors(e,n);const l=yi.dot(Sr),c=Ei.dot(Sr);if(l<=0&&c<=0)return t.copy(n);yr.subVectors(e,s);const u=yi.dot(yr),d=Ei.dot(yr);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(yi,o);Er.subVectors(e,r);const m=yi.dot(Er),g=Ei.dot(Er);if(g>=0&&m<=g)return t.copy(r);const x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ei,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return po.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(po,a);const h=1/(p+x+f);return o=x*h,a=f*h,t.copy(n).addScaledVector(yi,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=Lc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ar(o,r,e+1/3),this.g=Ar(o,r,e),this.b=Ar(o,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return et.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Ve(Bt.r*255,0,255))*65536+Math.round(Ve(Bt.g*255,0,255))*256+Math.round(Ve(Bt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Vt){et.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ms);const n=ur(Fn.h,Ms.h,t),s=ur(Fn.s,Ms.s,t),r=ur(Fn.l,Ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Le;Le.NAMES=Rl;let Kc=0;class li extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Li,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pl extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new N,Ss=new Te;class dt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eo,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eo&&(e.usage=this.usage),e}}class Dl extends dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends dt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jc=0;const sn=new ft,Cr=new Tt,bi=new N,Jt=new os,es=new os,Dt=new N;class Nt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wl(e)?Ll:Dl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Jt.min,es.min),Jt.expandByPoint(Dt),Dt.addVectors(Jt.max,es.max),Jt.expandByPoint(Dt)):(Jt.expandByPoint(es.min),Jt.expandByPoint(es.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Dt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Dt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(e,c),Dt.add(bi)),s=Math.max(s,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new N,l[F]=new N;const c=new N,u=new N,d=new N,f=new Te,m=new Te,g=new Te,x=new N,p=new N;function h(F,y,M){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,M),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),u.sub(c),d.sub(c),m.sub(f),g.sub(f);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(D),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(D),a[F].add(x),a[y].add(x),a[M].add(x),l[F].add(p),l[y].add(p),l[M].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,y=T.length;F<y;++F){const M=T[F],D=M.start,B=M.count;for(let H=D,X=D+B;H<X;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new N,S=new N,w=new N,A=new N;function C(F){w.fromBufferAttribute(s,F),A.copy(w);const y=a[F];b.copy(y),b.sub(w.multiplyScalar(w.dot(y))).normalize(),S.crossVectors(A,y);const D=S.dot(l[F])<0?-1:1;o.setXYZW(F,b.x,b.y,b.z,D)}for(let F=0,y=T.length;F<y;++F){const M=T[F],D=M.start,B=M.count;for(let H=D,X=D+B;H<X;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new dt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mo=new ft,qn=new tr,ys=new ls,go=new N,Es=new N,bs=new N,ws=new N,Rr=new N,Ts=new N,vo=new N,As=new N;class wt extends Tt{constructor(e=new Nt,t=new Pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Rr.fromBufferAttribute(d,e),o?Ts.addScaledVector(Rr,u):Ts.addScaledVector(Rr.sub(t),u))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(ys.containsPoint(qn.origin)===!1&&(qn.intersectSphere(ys,go)===null||qn.origin.distanceToSquared(go)>(e.far-e.near)**2))&&(mo.copy(r).invert(),qn.copy(e.ray).applyMatrix4(mo),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=o[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,w=b;S<w;S+=3){const A=a.getX(S),C=a.getX(S+1),F=a.getX(S+2);s=Cs(this,h,e,n,c,u,d,A,C,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const T=a.getX(p),b=a.getX(p+1),S=a.getX(p+2);s=Cs(this,o,e,n,c,u,d,T,b,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],h=o[p.materialIndex],T=Math.max(p.start,m.start),b=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=T,w=b;S<w;S+=3){const A=S,C=S+1,F=S+2;s=Cs(this,h,e,n,c,u,d,A,C,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,h=x;p<h;p+=3){const T=p,b=p+1,S=p+2;s=Cs(this,o,e,n,c,u,d,T,b,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Qc(i,e,t,n,s,r,o,a){let l;if(e.side===Wt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:i}}function Cs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Es),i.getVertexPosition(l,bs),i.getVertexPosition(c,ws);const u=Qc(i,e,t,n,Es,bs,ws,vo);if(u){const d=new N;mn.getBarycoord(vo,Es,bs,ws,d),s&&(u.uv=mn.getInterpolatedAttribute(s,a,l,c,d,new Te)),r&&(u.uv1=mn.getInterpolatedAttribute(r,a,l,c,d,new Te)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,d,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};mn.getNormal(Es,bs,ws,f.normal),u.face=f,u.barycoord=d}return u}class cs extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(d,2));function g(x,p,h,T,b,S,w,A,C,F,y){const M=S/C,D=w/F,B=S/2,H=w/2,X=A/2,$=C+1,Y=F+1;let Q=0,G=0;const ie=new N;for(let se=0;se<Y;se++){const xe=se*D-H;for(let Ae=0;Ae<$;Ae++){const Me=Ae*M-B;ie[x]=Me*T,ie[p]=xe*b,ie[h]=X,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[p]=0,ie[h]=A>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Ae/C),d.push(1-se/F),Q+=1}}for(let se=0;se<F;se++)for(let xe=0;xe<C;xe++){const Ae=f+xe+$*se,Me=f+xe+$*(se+1),q=f+(xe+1)+$*(se+1),ne=f+(xe+1)+$*se;l.push(Ae,Me,ne),l.push(Me,q,ne),G+=6}a.addGroup(m,G,y),m+=G,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const s in n)e[s]=n[s]}return e}function eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ul(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const tu={clone:Hi,merge:Gt};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Il extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new N,_o=new Te,xo=new Te;class rn extends Il{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,_o,xo),t.subVectors(xo,_o)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ti=1;class su extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(wi,Ti,e,t);s.layers=this.layers,this.add(s);const r=new rn(wi,Ti,e,t);r.layers=this.layers,this.add(r);const o=new rn(wi,Ti,e,t);o.layers=this.layers,this.add(o);const a=new rn(wi,Ti,e,t);a.layers=this.layers,this.add(a);const l=new rn(wi,Ti,e,t);l.layers=this.layers,this.add(l);const c=new rn(wi,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nl extends Ft{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:zn});r.uniforms.tEquirect.value=t;const o=new wt(s,r),a=t.minFilter;return t.minFilter===ni&&(t.minFilter=on),new su(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class au extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Mo extends Ft{constructor(e=null,t=1,n=1,s,r,o,a,l,c=en,u=en,d,f){super(null,o,a,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zn extends dt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Pr=new N,ou=new N,lu=new Be;class Bn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pr.subVectors(n,t).cross(ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lu.getNormalMatrix(e),s=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new ls,Rs=new N;class za{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],h=s[12],T=s[13],b=s[14],S=s[15];if(n[0].setComponents(l-r,f-c,p-m,S-h).normalize(),n[1].setComponents(l+r,f+c,p+m,S+h).normalize(),n[2].setComponents(l+o,f+u,p+g,S+T).normalize(),n[3].setComponents(l-o,f-u,p-g,S-T).normalize(),n[4].setComponents(l-a,f-d,p-x,S-b).normalize(),t===Rn)n[5].setComponents(l+a,f+d,p+x,S+b).normalize();else if(t===js)n[5].setComponents(a,d,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(e){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(e.matrixWorld),this.intersectsSphere($n)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fl extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new N,Js=new N,So=new ft,ts=new tr,Ps=new ls,Dr=new N,yo=new N;class cu extends Tt{constructor(e=new Nt,t=new Fl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ks.fromBufferAttribute(t,s-1),Js.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ks.distanceTo(Js);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;So.copy(s).invert(),ts.copy(e.ray).applyMatrix4(So);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const h=u.getX(x),T=u.getX(x+1),b=Ds(this,e,ts,l,h,T);b&&t.push(b)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(m),h=Ds(this,e,ts,l,x,p);h&&t.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=c){const h=Ds(this,e,ts,l,x,x+1);h&&t.push(h)}if(this.isLineLoop){const x=Ds(this,e,ts,l,g-1,m);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ds(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ks.fromBufferAttribute(o,s),Js.fromBufferAttribute(o,r),t.distanceSqToSegment(Ks,Js,Dr,yo)>n)return;Dr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Dr);if(!(l<e.near||l>e.far))return{distance:l,point:yo.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class uu extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Eo=new ft,Pa=new tr,Ls=new ls,Us=new N;class hu extends Tt{constructor(e=new Nt,t=new uu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(s),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;Eo.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(Eo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,x=m;g<x;g++){const p=c.getX(g);Us.fromBufferAttribute(d,p),bo(Us,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,x=m;g<x;g++)Us.fromBufferAttribute(d,g),bo(Us,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bo(i,e,t,n,s,r,o){const a=Pa.distanceSqToPoint(i);if(a<t){const l=new N;Pa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ii extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class du extends Ft{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ol extends Ft{constructor(e,t,n,s,r,o,a,l,c,u=Ui){if(u!==Ui&&u!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ui&&(n=si),n===void 0&&u===zi&&(n=Bi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:en,this.minFilter=l!==void 0?l:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class An extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],x=[],p=[];for(let h=0;h<u;h++){const T=h*f-o;for(let b=0;b<c;b++){const S=b*d-r;g.push(S,-T,0),x.push(0,0,1),p.push(b/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const b=T+c*h,S=T+c*(h+1),w=T+1+c*(h+1),A=T+1+c*h;m.push(b,S,A),m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.widthSegments,e.heightSegments)}}class ka extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new N,f=new N,m=[],g=[],x=[],p=[];for(let h=0;h<=n;h++){const T=[],b=h/n;let S=0;h===0&&o===0?S=.5/t:h===n&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const A=w/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),p.push(A+S,1-b),T.push(c++)}u.push(T)}for(let h=0;h<n;h++)for(let T=0;T<t;T++){const b=u[h][T+1],S=u[h][T],w=u[h+1][T],A=u[h+1][T+1];(h!==0||o>0)&&m.push(b,S,A),(h!==n-1||l<Math.PI)&&m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new tn(g,3)),this.setAttribute("normal",new tn(x,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lr extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fu extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pu extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class mu extends Fl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const wo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gu{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const vu=new gu;class Ha{constructor(e){this.manager=e!==void 0?e:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";class _u extends Ha{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=wo.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ss("img");function l(){u(),wo.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class xu extends Ha{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,o=new _u(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Bl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mu extends Bl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ur=new ft,To=new N,Ao=new N;class Su{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new za,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;To.setFromMatrixPosition(e.matrixWorld),t.position.copy(To),Ao.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ao),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zl extends Il{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yu extends Su{constructor(){super(new zl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Co extends Bl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ir extends Nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Eu extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ro{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ve(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bu extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Po(i,e,t,n){const s=wu(n);switch(t){case gl:return i*e;case _l:return i*e;case xl:return i*e*2;case Ml:return i*e/s.components*s.byteLength;case Fa:return i*e/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case Oa:return i*e*2/s.components*s.byteLength;case vl:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case Ba:return i*e*4/s.components*s.byteLength;case Gs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(e,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(e,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ys:case ba:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case yl:case Ta:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Aa:case Ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wu(i){switch(i){case _n:case fl:return{byteLength:1,components:1};case is:case pl:case rs:return{byteLength:2,components:1};case Ia:case Na:return{byteLength:2,components:4};case si:case Ua:case Cn:return{byteLength:4,components:1};case ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:La}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=La);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tu(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],x=d[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const x=d[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Iu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
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
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Hu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ju=`#define PI 3.141592653589793
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
} // validated`,Ku=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",sh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rh=`#ifdef USE_ENVMAP
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
#endif`,ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oh=`#ifdef USE_ENVMAP
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
#endif`,lh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ph=`#ifdef USE_GRADIENTMAP
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
}`,mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_h=`uniform bool receiveShadow;
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
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bh=`PhysicalMaterial material;
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
#endif`,wh=`struct PhysicalMaterial {
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
}`,Th=`
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
#endif`,Ah=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fh=`#if defined( USE_POINTS_UV )
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
#endif`,Oh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
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
#endif`,Vh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
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
#endif`,jh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hd=`float getShadowMask() {
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
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
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
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Md=`#ifdef USE_TRANSMISSION
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
#endif`,Sd=`#ifdef USE_TRANSMISSION
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
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
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
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
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
}`,Ud=`#if DEPTH_PACKING == 3200
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
}`,Id=`#define DISTANCE
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
}`,Nd=`#define DISTANCE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
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
}`,kd=`#include <common>
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Gd=`#define LAMBERT
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
}`,Vd=`#define LAMBERT
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
}`,Wd=`#define MATCAP
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
}`,Xd=`#define MATCAP
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
}`,Yd=`#define NORMAL
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
}`,qd=`#define NORMAL
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
}`,Zd=`#define PHONG
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
}`,$d=`#define PHONG
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
}`,jd=`#define STANDARD
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
}`,Kd=`#define STANDARD
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
}`,Jd=`#define TOON
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
}`,Qd=`#define TOON
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
}`,ef=`uniform float size;
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
}`,tf=`uniform vec3 diffuse;
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
}`,nf=`#include <common>
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
}`,sf=`uniform vec3 color;
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
}`,rf=`uniform float rotation;
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
}`,af=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Au,alphahash_pars_fragment:Cu,alphamap_fragment:Ru,alphamap_pars_fragment:Pu,alphatest_fragment:Du,alphatest_pars_fragment:Lu,aomap_fragment:Uu,aomap_pars_fragment:Iu,batching_pars_vertex:Nu,batching_vertex:Fu,begin_vertex:Ou,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:ku,bumpmap_pars_fragment:Hu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Vu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:Yu,color_pars_fragment:qu,color_pars_vertex:Zu,color_vertex:$u,common:ju,cube_uv_reflection_fragment:Ku,defaultnormal_vertex:Ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:eh,emissivemap_fragment:th,emissivemap_pars_fragment:nh,colorspace_fragment:ih,colorspace_pars_fragment:sh,envmap_fragment:rh,envmap_common_pars_fragment:ah,envmap_pars_fragment:oh,envmap_pars_vertex:lh,envmap_physical_pars_fragment:xh,envmap_vertex:ch,fog_vertex:uh,fog_pars_vertex:hh,fog_fragment:dh,fog_pars_fragment:fh,gradientmap_pars_fragment:ph,lightmap_pars_fragment:mh,lights_lambert_fragment:gh,lights_lambert_pars_fragment:vh,lights_pars_begin:_h,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:yh,lights_phong_pars_fragment:Eh,lights_physical_fragment:bh,lights_physical_pars_fragment:wh,lights_fragment_begin:Th,lights_fragment_maps:Ah,lights_fragment_end:Ch,logdepthbuf_fragment:Rh,logdepthbuf_pars_fragment:Ph,logdepthbuf_pars_vertex:Dh,logdepthbuf_vertex:Lh,map_fragment:Uh,map_pars_fragment:Ih,map_particle_fragment:Nh,map_particle_pars_fragment:Fh,metalnessmap_fragment:Oh,metalnessmap_pars_fragment:Bh,morphinstance_vertex:zh,morphcolor_vertex:kh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Vh,normal_fragment_begin:Wh,normal_fragment_maps:Xh,normal_pars_fragment:Yh,normal_pars_vertex:qh,normal_vertex:Zh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:jh,clearcoat_normal_fragment_maps:Kh,clearcoat_pars_fragment:Jh,iridescence_pars_fragment:Qh,opaque_fragment:ed,packing:td,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:sd,dithering_pars_fragment:rd,roughnessmap_fragment:ad,roughnessmap_pars_fragment:od,shadowmap_pars_fragment:ld,shadowmap_pars_vertex:cd,shadowmap_vertex:ud,shadowmask_pars_fragment:hd,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:vd,tonemapping_fragment:_d,tonemapping_pars_fragment:xd,transmission_fragment:Md,transmission_pars_fragment:Sd,uv_pars_fragment:yd,uv_pars_vertex:Ed,uv_vertex:bd,worldpos_vertex:wd,background_vert:Td,background_frag:Ad,backgroundCube_vert:Cd,backgroundCube_frag:Rd,cube_vert:Pd,cube_frag:Dd,depth_vert:Ld,depth_frag:Ud,distanceRGBA_vert:Id,distanceRGBA_frag:Nd,equirect_vert:Fd,equirect_frag:Od,linedashed_vert:Bd,linedashed_frag:zd,meshbasic_vert:kd,meshbasic_frag:Hd,meshlambert_vert:Gd,meshlambert_frag:Vd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:Yd,meshnormal_frag:qd,meshphong_vert:Zd,meshphong_frag:$d,meshphysical_vert:jd,meshphysical_frag:Kd,meshtoon_vert:Jd,meshtoon_frag:Qd,points_vert:ef,points_frag:tf,shadow_vert:nf,shadow_frag:sf,sprite_vert:rf,sprite_frag:af},le={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},vn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};vn.physical={uniforms:Gt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Is={r:0,b:0,g:0},jn=new xn,of=new ft;function lf(i,e,t,n,s,r,o){const a=new Le(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function x(b){let S=!1;const w=g(b);w===null?h(a,l):w&&w.isColor&&(h(w,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(b,S){const w=g(S);w&&(w.isCubeTexture||w.mapping===er)?(u===void 0&&(u=new wt(new cs(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Hi(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),jn.copy(S.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(of.makeRotationFromEuler(jn)),u.material.toneMapped=et.getTransfer(w.colorSpace)!==it,(d!==w||f!==w.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,m=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new wt(new An(2,2),new zt({name:"BackgroundMaterial",uniforms:Hi(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(w.colorSpace)!==it,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,m=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,S){b.getRGB(Is,Ul(i)),n.buffers.color.setClear(Is.r,Is.g,Is.b,S,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:x,addToRenderList:p,dispose:T}}function cf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,D,B,H,X){let $=!1;const Y=d(H,B,D);r!==Y&&(r=Y,c(r.object)),$=m(M,H,B,X),$&&g(M,H,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(M,D,B,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function d(M,D,B){const H=B.wireframe===!0;let X=n[M.id];X===void 0&&(X={},n[M.id]=X);let $=X[D.id];$===void 0&&($={},X[D.id]=$);let Y=$[H];return Y===void 0&&(Y=f(l()),$[H]=Y),Y}function f(M){const D=[],B=[],H=[];for(let X=0;X<t;X++)D[X]=0,B[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,D,B,H){const X=r.attributes,$=D.attributes;let Y=0;const Q=B.getAttributes();for(const G in Q)if(Q[G].location>=0){const se=X[G];let xe=$[G];if(xe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),se===void 0||se.attribute!==xe||xe&&se.data!==xe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function g(M,D,B,H){const X={},$=D.attributes;let Y=0;const Q=B.getAttributes();for(const G in Q)if(Q[G].location>=0){let se=$[G];se===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const xe={};xe.attribute=se,se&&se.data&&(xe.data=se.data),X[G]=xe,Y++}r.attributes=X,r.attributesNum=Y,r.index=H}function x(){const M=r.newAttributes;for(let D=0,B=M.length;D<B;D++)M[D]=0}function p(M){h(M,0)}function h(M,D){const B=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;B[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),X[M]!==D&&(i.vertexAttribDivisor(M,D),X[M]=D)}function T(){const M=r.newAttributes,D=r.enabledAttributes;for(let B=0,H=D.length;B<H;B++)D[B]!==M[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function b(M,D,B,H,X,$,Y){Y===!0?i.vertexAttribIPointer(M,D,B,X,$):i.vertexAttribPointer(M,D,B,H,X,$)}function S(M,D,B,H){x();const X=H.attributes,$=B.getAttributes(),Y=D.defaultAttributeValues;for(const Q in $){const G=$[Q];if(G.location>=0){let ie=X[Q];if(ie===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const se=ie.normalized,xe=ie.itemSize,Ae=e.get(ie);if(Ae===void 0)continue;const Me=Ae.buffer,q=Ae.type,ne=Ae.bytesPerElement,fe=q===i.INT||q===i.UNSIGNED_INT||ie.gpuType===Ua;if(ie.isInterleavedBufferAttribute){const ce=ie.data,Re=ce.stride,Ie=ie.offset;if(ce.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)h(G.location+ke,ce.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ke=0;ke<G.locationSize;ke++)b(G.location+ke,xe/G.locationSize,q,se,Re*ne,(Ie+xe/G.locationSize*ke)*ne,fe)}else{if(ie.isInstancedBufferAttribute){for(let ce=0;ce<G.locationSize;ce++)h(G.location+ce,ie.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ce=0;ce<G.locationSize;ce++)b(G.location+ce,xe/G.locationSize,q,se,xe*ne,xe/G.locationSize*ce*ne,fe)}}else if(Y!==void 0){const se=Y[Q];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(G.location,se);break;case 3:i.vertexAttrib3fv(G.location,se);break;case 4:i.vertexAttrib4fv(G.location,se);break;default:i.vertexAttrib1fv(G.location,se)}}}}T()}function w(){F();for(const M in n){const D=n[M];for(const B in D){const H=D[B];for(const X in H)u(H[X].object),delete H[X];delete D[B]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const B in D){const H=D[B];for(const X in H)u(H[X].object),delete H[X];delete D[B]}delete n[M.id]}function C(M){for(const D in n){const B=n[D];if(B[M.id]===void 0)continue;const H=B[M.id];for(const X in H)u(H[X].object),delete H[X];delete B[M.id]}}function F(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:T}}function uf(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hf(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const F=C===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!F)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:w,maxSamples:A}}function df(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Bn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const T=r?0:n,b=T*4;let S=h.clippingState||null;l.value=S,S=u(g,f,b,m);for(let w=0;w!==b;++w)S[w]=t[w];h.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const h=m+x*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let b=0,S=m;b!==x;++b,S+=4)o.copy(d[b]).applyMatrix4(T,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function ff(i){let e=new WeakMap;function t(o,a){return a===Qr?o.mapping=Fi:a===ea&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qr||a===ea)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ru(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Pi=4,Do=[.125,.215,.35,.446,.526,.582],ti=20,Nr=new zl,Lo=new Le;let Fr=null,Or=0,Br=0,zr=!1;const Qn=(1+Math.sqrt(5))/2,Ai=1/Qn,Uo=[new N(-Qn,Ai,0),new N(Qn,Ai,0),new N(-Ai,0,Qn),new N(Ai,0,Qn),new N(0,Qn,-Ai),new N(0,Qn,Ai),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Io{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fr,Or,Br),this._renderer.xr.enabled=zr,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:rs,format:Qt,colorSpace:ki,depthBuffer:!1},s=No(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pf(r)),this._blurMaterial=mf(r,e,t)}return s}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s){const a=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lo),u.toneMapping=kn,u.autoClear=!1;const m=new Pl({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new wt(new cs,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Lo),x=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):T===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const b=this._cubeSize;Ns(s,T*b,h>2?b:0,b,b),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fo());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uo[(s-r-1)%Uo.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new wt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ti-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):ti;p>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const h=[];let T=0;for(let C=0;C<ti;++C){const F=C/x,y=Math.exp(-F*F/2);h.push(y),C===0?T+=y:C<p&&(T+=2*y)}for(let C=0;C<h.length;C++)h[C]=h[C]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const S=this._sizeLods[s],w=3*S*(s>b-Pi?s-b+Pi:0),A=4*(this._cubeSize-S);Ns(t,w,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Nr)}}function pf(i){const e=[],t=[],n=[];let s=i;const r=i-Pi+1+Do.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Pi?l=Do[o-i+Pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,x=3,p=2,h=1,T=new Float32Array(x*g*m),b=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let A=0;A<m;A++){const C=A%3*2/3-1,F=A>2?0:-1,y=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];T.set(y,x*g*A),b.set(f,p*g*A);const M=[A,A,A,A,A,A];S.set(M,h*g*A)}const w=new Nt;w.setAttribute("position",new dt(T,x)),w.setAttribute("uv",new dt(b,p)),w.setAttribute("faceIndex",new dt(S,h)),e.push(w),s>Pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function No(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ns(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mf(i,e,t){const n=new Float32Array(ti),s=new N(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Fo(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Oo(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}function gf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===ea,u=l===Fi||l===Oi;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Io(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new Io(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ci("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _f(i,e,t,n){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,g=d.attributes.position;let x=0;if(m!==null){const T=m.array;x=m.version;for(let b=0,S=T.length;b<S;b+=3){const w=T[b+0],A=T[b+1],C=T[b+2];f.push(w,A,A,C,C,w)}}else if(g!==void 0){const T=g.array;x=g.version;for(let b=0,S=T.length/3-1;b<S;b+=3){const w=b+0,A=b+1,C=b+2;f.push(w,A,A,C,C,w)}}else return;const p=new(wl(f)?Ll:Dl)(f,1);p.version=x;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function xf(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],x[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,g);let h=0;for(let T=0;T<g;T++)h+=m[T]*x[T];t.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Mf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Sf(i,e,t){const n=new WeakMap,s=new St;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let M=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let w=a.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*d),F=new Al(C,w,A,d);F.type=Cn,F.needsUpdate=!0;const y=S*4;for(let D=0;D<d;D++){const B=h[D],H=T[D],X=b[D],$=w*A*4*D;for(let Y=0;Y<B.count;Y++){const Q=Y*y;g===!0&&(s.fromBufferAttribute(B,Y),C[$+Q+0]=s.x,C[$+Q+1]=s.y,C[$+Q+2]=s.z,C[$+Q+3]=0),x===!0&&(s.fromBufferAttribute(H,Y),C[$+Q+4]=s.x,C[$+Q+5]=s.y,C[$+Q+6]=s.z,C[$+Q+7]=0),p===!0&&(s.fromBufferAttribute(X,Y),C[$+Q+8]=s.x,C[$+Q+9]=s.y,C[$+Q+10]=s.z,C[$+Q+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:F,size:new Te(w,A)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function yf(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Hl=new Ft,Bo=new Ol(1,1),Gl=new Al,Vl=new Vc,Wl=new Nl,zo=[],ko=[],Ho=new Float32Array(16),Go=new Float32Array(9),Vo=new Float32Array(4);function Gi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=zo[s];if(r===void 0&&(r=new Float32Array(s),zo[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nr(i,e){let t=ko[e];t===void 0&&(t=new Int32Array(e),ko[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Ct(t,e)}}function wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Ct(t,e)}}function Tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Ct(t,e)}}function Af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Vo.set(n),i.uniformMatrix2fv(this.addr,!1,Vo),Ct(t,n)}}function Cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Go.set(n),i.uniformMatrix3fv(this.addr,!1,Go),Ct(t,n)}}function Rf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Ho.set(n),i.uniformMatrix4fv(this.addr,!1,Ho),Ct(t,n)}}function Pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),Ct(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),Ct(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),Ct(t,e)}}function If(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),Ct(t,e)}}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),Ct(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),Ct(t,e)}}function Bf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bo.compareFunction=bl,r=Bo):r=Hl,t.setTexture2D(e||r,s)}function zf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vl,s)}function kf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wl,s)}function Hf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Gl,s)}function Gf(i){switch(i){case 5126:return Ef;case 35664:return bf;case 35665:return wf;case 35666:return Tf;case 35674:return Af;case 35675:return Cf;case 35676:return Rf;case 5124:case 35670:return Pf;case 35667:case 35671:return Df;case 35668:case 35672:return Lf;case 35669:case 35673:return Uf;case 5125:return If;case 36294:return Nf;case 36295:return Ff;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Vf(i,e){i.uniform1fv(this.addr,e)}function Wf(i,e){const t=Gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Xf(i,e){const t=Gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Yf(i,e){const t=Gi(e,this.size,4);i.uniform4fv(this.addr,t)}function qf(i,e){const t=Gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zf(i,e){const t=Gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $f(i,e){const t=Gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jf(i,e){i.uniform1iv(this.addr,e)}function Kf(i,e){i.uniform2iv(this.addr,e)}function Jf(i,e){i.uniform3iv(this.addr,e)}function Qf(i,e){i.uniform4iv(this.addr,e)}function ep(i,e){i.uniform1uiv(this.addr,e)}function tp(i,e){i.uniform2uiv(this.addr,e)}function np(i,e){i.uniform3uiv(this.addr,e)}function ip(i,e){i.uniform4uiv(this.addr,e)}function sp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Hl,r[o])}function rp(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Vl,r[o])}function ap(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Wl,r[o])}function op(i,e,t){const n=this.cache,s=e.length,r=nr(t,s);At(n,r)||(i.uniform1iv(this.addr,r),Ct(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Gl,r[o])}function lp(i){switch(i){case 5126:return Vf;case 35664:return Wf;case 35665:return Xf;case 35666:return Yf;case 35674:return qf;case 35675:return Zf;case 35676:return $f;case 5124:case 35670:return jf;case 35667:case 35671:return Kf;case 35668:case 35672:return Jf;case 35669:case 35673:return Qf;case 5125:return ep;case 36294:return tp;case 36295:return np;case 36296:return ip;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return rp;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return op}}class cp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gf(t.type)}}class up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lp(t.type)}}class hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Wo(i,e){i.seq.push(e),i.map[e.id]=e}function dp(i,e,t){const n=i.name,s=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),o=kr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wo(t,c===void 0?new cp(a,i,e):new up(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new hp(a),Wo(t,d)),t=d}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);dp(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Xo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const fp=37297;let pp=0;function mp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Yo=new Be;function gp(i){et._getMatrix(Yo,et.workingColorSpace,i);const e=`mat3( ${Yo.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+mp(i.getShaderSource(e),o)}else return s}function vp(i,e){const t=gp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _p(i,e){let t;switch(e){case mc:t="Linear";break;case gc:t="Reinhard";break;case vc:t="Cineon";break;case hl:t="ACESFilmic";break;case xc:t="AgX";break;case Mc:t="Neutral";break;case _c:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new N;function xp(){et.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Sp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function Zo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ep=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(Ep,wp)}const bp=new Map;function wp(i,e){let t=ze[e];if(t===void 0){const n=bp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Da(t)}const Tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(i){return i.replace(Tp,Ap)}function Ap(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ko(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Cp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Dp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case fc:e="ENVMAP_BLENDING_MIX";break;case pc:e="ENVMAP_BLENDING_ADD";break}return e}function Lp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Up(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Cp(t),c=Rp(t),u=Pp(t),d=Dp(t),f=Lp(t),m=Mp(t),g=Sp(r),x=s.createProgram();let p,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ns).join(`
`),h.length>0&&(h+=`
`)):(p=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),h=[Ko(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?ze.tonemapping_pars_fragment:"",t.toneMapping!==kn?_p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,vp("linearToOutputTexel",t.outputColorSpace),xp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=Da(o),o=Zo(o,t),o=$o(o,t),a=Da(a),a=Zo(a,t),a=$o(a,t),o=jo(o),a=jo(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===to?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===to?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const b=T+p+o,S=T+h+a,w=Xo(s,s.VERTEX_SHADER,b),A=Xo(s,s.FRAGMENT_SHADER,S);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(w).trim(),X=s.getShaderInfoLog(A).trim();let $=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const Q=qo(s,w,"vertex"),G=qo(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(H===""||X==="")&&(Y=!1);Y&&(D.diagnostics={runnable:$,programLog:B,vertexShader:{log:H,prefix:p},fragmentShader:{log:X,prefix:h}})}s.deleteShader(w),s.deleteShader(A),F=new Zs(s,x),y=yp(s,x)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,fp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let Ip=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Fp(e),t.set(e,n)),n}}class Fp{constructor(e){this.id=Ip++,this.code=e,this.usedTimes=0}}function Op(i,e,t,n,s,r,o){const a=new Cl,l=new Np,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,M,D,B,H){const X=B.fog,$=H.geometry,Y=y.isMeshStandardMaterial?B.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),G=Q&&Q.mapping===er?Q.image.height:null,ie=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const se=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xe=se!==void 0?se.length:0;let Ae=0;$.morphAttributes.position!==void 0&&(Ae=1),$.morphAttributes.normal!==void 0&&(Ae=2),$.morphAttributes.color!==void 0&&(Ae=3);let Me,q,ne,fe;if(ie){const Ze=vn[ie];Me=Ze.vertexShader,q=Ze.fragmentShader}else Me=y.vertexShader,q=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),fe=l.getFragmentShaderID(y);const ce=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,lt=!!y.map,qe=!!y.matcap,Qe=!!Q,R=!!y.aoMap,Rt=!!y.lightMap,We=!!y.bumpMap,He=!!y.normalMap,be=!!y.displacementMap,nt=!!y.emissiveMap,Ee=!!y.metalnessMap,E=!!y.roughnessMap,v=y.anisotropy>0,O=y.clearcoat>0,K=y.dispersion>0,ee=y.iridescence>0,j=y.sheen>0,Se=y.transmission>0,oe=v&&!!y.anisotropyMap,pe=O&&!!y.clearcoatMap,Ge=O&&!!y.clearcoatNormalMap,Z=O&&!!y.clearcoatRoughnessMap,me=ee&&!!y.iridescenceMap,Ce=ee&&!!y.iridescenceThicknessMap,Ue=j&&!!y.sheenColorMap,_e=j&&!!y.sheenRoughnessMap,Xe=!!y.specularMap,Ne=!!y.specularColorMap,Ke=!!y.specularIntensityMap,L=Se&&!!y.transmissionMap,re=Se&&!!y.thicknessMap,V=!!y.gradientMap,J=!!y.alphaMap,he=y.alphaTest>0,ue=!!y.alphaHash,Fe=!!y.extensions;let rt=kn;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(rt=i.toneMapping);const gt={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:q,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ki,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:qe,envMap:Qe,envMapMode:Qe&&Q.mapping,envMapCubeUVHeight:G,aoMap:R,lightMap:Rt,bumpMap:We,normalMap:He,displacementMap:f&&be,emissiveMap:nt,normalMapObjectSpace:He&&y.normalMapType===bc,normalMapTangentSpace:He&&y.normalMapType===El,metalnessMap:Ee,roughnessMap:E,anisotropy:v,anisotropyMap:oe,clearcoat:O,clearcoatMap:pe,clearcoatNormalMap:Ge,clearcoatRoughnessMap:Z,dispersion:K,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:Ue,sheenRoughnessMap:_e,specularMap:Xe,specularColorMap:Ne,specularIntensityMap:Ke,transmission:Se,transmissionMap:L,thicknessMap:re,gradientMap:V,opaque:y.transparent===!1&&y.blending===Li&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:he,alphaHash:ue,combine:y.combine,mapUv:lt&&x(y.map.channel),aoMapUv:R&&x(y.aoMap.channel),lightMapUv:Rt&&x(y.lightMap.channel),bumpMapUv:We&&x(y.bumpMap.channel),normalMapUv:He&&x(y.normalMap.channel),displacementMapUv:be&&x(y.displacementMap.channel),emissiveMapUv:nt&&x(y.emissiveMap.channel),metalnessMapUv:Ee&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:oe&&x(y.anisotropyMap.channel),clearcoatMapUv:pe&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Ge&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(y.sheenRoughnessMap.channel),specularMapUv:Xe&&x(y.specularMap.channel),specularColorMapUv:Ne&&x(y.specularColorMap.channel),specularIntensityMapUv:Ke&&x(y.specularIntensityMap.channel),transmissionMapUv:L&&x(y.transmissionMap.channel),thicknessMapUv:re&&x(y.thicknessMap.channel),alphaMapUv:J&&x(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(He||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(lt||J),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ae,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:nt&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$t,flipSided:y.side===Wt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function h(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)M.push(D),M.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(T(M,y),b(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=g[y.type];let D;if(M){const B=vn[M];D=tu.clone(B.uniforms)}else D=y.uniforms;return D}function w(y,M){let D;for(let B=0,H=u.length;B<H;B++){const X=u[B];if(X.cacheKey===M){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Up(i,M,y,r),u.push(D)),D}function A(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function C(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:F}}function Bp(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Jo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,m,g,x,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=p),e++,h}function a(d,f,m,g,x,p){const h=o(d,f,m,g,x,p);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,x,p){const h=o(d,f,m,g,x,p);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||zp),n.length>1&&n.sort(f||Jo),s.length>1&&s.sort(f||Jo)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function kp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qo,i.set(n,[o])):s>=r.length?(o=new Qo,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Le};break;case"SpotLight":t={position:new N,direction:new N,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Gp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vp=0;function Wp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Xp(i){const e=new Hp,t=Gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new ft,o=new ft;function a(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,x=0,p=0,h=0,T=0,b=0,S=0,w=0,A=0,C=0;c.sort(Wp);for(let y=0,M=c.length;y<M;y++){const D=c[y],B=D.color,H=D.intensity,X=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*H,d+=B.g*H,f+=B.b*H;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],H);C++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,G=t.get(D);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=D.shadow.matrix,T++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(H),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[x]=Y;const Q=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,Q.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[x]=Q.matrix,D.castShadow){const G=t.get(D);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=$,S++}x++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(B).multiplyScalar(H),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Y,p++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Q=D.shadow,G=t.get(D);G.shadowIntensity=Q.intensity,G.shadowBias=Q.bias,G.shadowNormalBias=Q.normalBias,G.shadowRadius=Q.radius,G.shadowMapSize=Q.mapSize,G.shadowCameraNear=Q.camera.near,G.shadowCameraFar=Q.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(H),Y.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==x||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==T||F.numPointShadows!==b||F.numSpotShadows!==S||F.numSpotMaps!==w||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=S+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,F.directionalLength=m,F.pointLength=g,F.spotLength=x,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=T,F.numPointShadows=b,F.numSpotShadows=S,F.numSpotMaps=w,F.numLightProbes=C,n.version=Vp++)}function l(c,u){let d=0,f=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const b=c[h];if(b.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),d++}else if(b.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(b.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function el(i){const e=new Xp(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yp(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new el(i),e.set(s,[a])):r>=o.length?(a=new el(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zp=`uniform sampler2D shadow_pass;
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
}`;function $p(i,e,t){let n=new za;const s=new Te,r=new Te,o=new St,a=new fu({depthPacking:Ec}),l=new pu,c={},u=t.maxTextureSize,d={[Hn]:Wt,[Wt]:Hn,[$t]:$t},f=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:qp,fragmentShader:Zp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let h=this.type;this.render=function(A,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(zn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=h!==Tn&&this.type===Tn,X=h===Tn&&this.type!==Tn;for(let $=0,Y=A.length;$<Y;$++){const Q=A[$],G=Q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ie=G.getFrameExtents();if(s.multiply(ie),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,G.mapSize.y=r.y)),G.map===null||H===!0||X===!0){const xe=this.type!==Tn?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new ri(s.x,s.y,xe),G.map.texture.name=Q.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const se=G.getViewportCount();for(let xe=0;xe<se;xe++){const Ae=G.getViewport(xe);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),B.viewport(o),G.updateMatrices(Q,xe),n=G.getFrustum(),S(C,F,G.camera,Q,this.type)}G.isPointLightShadow!==!0&&this.type===Tn&&T(G,F),G.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(y,M,D)};function T(A,C){const F=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ri(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,x,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,F,m,x,null)}function b(A,C,F,y){let M=null;const D=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,H=C.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let $=X[H];$===void 0&&($=M.clone(),X[H]=$,C.addEventListener("dispose",w)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,y===Tn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=F}return M}function S(A,C,F,y,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const H=e.update(A),X=A.material;if(Array.isArray(X)){const $=H.groups;for(let Y=0,Q=$.length;Y<Q;Y++){const G=$[Y],ie=X[G.materialIndex];if(ie&&ie.visible){const se=b(A,ie,y,M);A.onBeforeShadow(i,A,C,F,H,se,G),i.renderBufferDirect(F,null,H,se,A,G),A.onAfterShadow(i,A,C,F,H,se,G)}}}else if(X.visible){const $=b(A,X,y,M);A.onBeforeShadow(i,A,C,F,H,$,null),i.renderBufferDirect(F,null,H,$,A,null),A.onAfterShadow(i,A,C,F,H,$,null)}}const B=A.children;for(let H=0,X=B.length;H<X;H++)S(B[H],C,F,y,M)}function w(A){A.target.removeEventListener("dispose",w);for(const F in c){const y=c[F],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const jp={[Yr]:qr,[Zr]:Kr,[$r]:Jr,[Ni]:jr,[qr]:Yr,[Kr]:Zr,[Jr]:$r,[jr]:Ni};function Kp(i,e){function t(){let L=!1;const re=new St;let V=null;const J=new St(0,0,0,0);return{setMask:function(he){V!==he&&!L&&(i.colorMask(he,he,he,he),V=he)},setLocked:function(he){L=he},setClear:function(he,ue,Fe,rt,gt){gt===!0&&(he*=rt,ue*=rt,Fe*=rt),re.set(he,ue,Fe,rt),J.equals(re)===!1&&(i.clearColor(he,ue,Fe,rt),J.copy(re))},reset:function(){L=!1,V=null,J.set(-1,0,0,0)}}}function n(){let L=!1,re=!1,V=null,J=null,he=null;return{setReversed:function(ue){if(re!==ue){const Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT);const rt=he;he=null,this.setClear(rt)}re=ue},getReversed:function(){return re},setTest:function(ue){ue?ce(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ue){V!==ue&&!L&&(i.depthMask(ue),V=ue)},setFunc:function(ue){if(re&&(ue=jp[ue]),J!==ue){switch(ue){case Yr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case Jr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ue}},setLocked:function(ue){L=ue},setClear:function(ue){he!==ue&&(re&&(ue=1-ue),i.clearDepth(ue),he=ue)},reset:function(){L=!1,V=null,J=null,he=null,re=!1}}}function s(){let L=!1,re=null,V=null,J=null,he=null,ue=null,Fe=null,rt=null,gt=null;return{setTest:function(Ze){L||(Ze?ce(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Ze){re!==Ze&&!L&&(i.stencilMask(Ze),re=Ze)},setFunc:function(Ze,kt,Ht){(V!==Ze||J!==kt||he!==Ht)&&(i.stencilFunc(Ze,kt,Ht),V=Ze,J=kt,he=Ht)},setOp:function(Ze,kt,Ht){(ue!==Ze||Fe!==kt||rt!==Ht)&&(i.stencilOp(Ze,kt,Ht),ue=Ze,Fe=kt,rt=Ht)},setLocked:function(Ze){L=Ze},setClear:function(Ze){gt!==Ze&&(i.clearStencil(Ze),gt=Ze)},reset:function(){L=!1,re=null,V=null,J=null,he=null,ue=null,Fe=null,rt=null,gt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,h=null,T=null,b=null,S=null,w=null,A=null,C=new Le(0,0,0),F=0,y=!1,M=null,D=null,B=null,H=null,X=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(G)[1]),Y=Q>=1):G.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Y=Q>=2);let ie=null,se={};const xe=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),Me=new St().fromArray(xe),q=new St().fromArray(Ae);function ne(L,re,V,J){const he=new Uint8Array(4),ue=i.createTexture();i.bindTexture(L,ue),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<V;Fe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(re+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ue}const fe={};fe[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Ni),We(!1),He(ja),ce(i.CULL_FACE),R(zn);function ce(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function Re(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Ie(L,re){return d[L]!==re?(i.bindFramebuffer(L,re),d[L]=re,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=re),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=re),!0):!1}function ke(L,re){let V=m,J=!1;if(L){V=f.get(re),V===void 0&&(V=[],f.set(re,V));const he=L.textures;if(V.length!==he.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Fe=he.length;ue<Fe;ue++)V[ue]=i.COLOR_ATTACHMENT0+ue;V.length=he.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function lt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const qe={[ei]:i.FUNC_ADD,[jl]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};qe[Jl]=i.MIN,qe[Ql]=i.MAX;const Qe={[ec]:i.ZERO,[tc]:i.ONE,[nc]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[ac]:i.DST_COLOR,[sc]:i.DST_ALPHA,[ic]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[oc]:i.ONE_MINUS_DST_COLOR,[rc]:i.ONE_MINUS_DST_ALPHA,[cc]:i.CONSTANT_COLOR,[uc]:i.ONE_MINUS_CONSTANT_COLOR,[hc]:i.CONSTANT_ALPHA,[dc]:i.ONE_MINUS_CONSTANT_ALPHA};function R(L,re,V,J,he,ue,Fe,rt,gt,Ze){if(L===zn){x===!0&&(Re(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),L!==$l){if(L!==p||Ze!==y){if((h!==ei||S!==ei)&&(i.blendEquation(i.FUNC_ADD),h=ei,S=ei),Ze)switch(L){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.ONE,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,b=null,w=null,A=null,C.set(0,0,0),F=0,p=L,y=Ze}return}he=he||re,ue=ue||V,Fe=Fe||J,(re!==h||he!==S)&&(i.blendEquationSeparate(qe[re],qe[he]),h=re,S=he),(V!==T||J!==b||ue!==w||Fe!==A)&&(i.blendFuncSeparate(Qe[V],Qe[J],Qe[ue],Qe[Fe]),T=V,b=J,w=ue,A=Fe),(rt.equals(C)===!1||gt!==F)&&(i.blendColor(rt.r,rt.g,rt.b,gt),C.copy(rt),F=gt),p=L,y=!1}function Rt(L,re){L.side===$t?Re(i.CULL_FACE):ce(i.CULL_FACE);let V=L.side===Wt;re&&(V=!V),We(V),L.blending===Li&&L.transparent===!1?R(zn):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function He(L){L!==ql?(ce(i.CULL_FACE),L!==D&&(L===ja?i.cullFace(i.BACK):L===Zl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),D=L}function be(L){L!==B&&(Y&&i.lineWidth(L),B=L)}function nt(L,re,V){L?(ce(i.POLYGON_OFFSET_FILL),(H!==re||X!==V)&&(i.polygonOffset(re,V),H=re,X=V)):Re(i.POLYGON_OFFSET_FILL)}function Ee(L){L?ce(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function E(L){L===void 0&&(L=i.TEXTURE0+$-1),ie!==L&&(i.activeTexture(L),ie=L)}function v(L,re,V){V===void 0&&(ie===null?V=i.TEXTURE0+$-1:V=ie);let J=se[V];J===void 0&&(J={type:void 0,texture:void 0},se[V]=J),(J.type!==L||J.texture!==re)&&(ie!==V&&(i.activeTexture(V),ie=V),i.bindTexture(L,re||fe[L]),J.type=L,J.texture=re)}function O(){const L=se[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(L){Me.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Me.copy(L))}function _e(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Xe(L,re){let V=c.get(re);V===void 0&&(V=new WeakMap,c.set(re,V));let J=V.get(L);J===void 0&&(J=i.getUniformBlockIndex(re,L.name),V.set(L,J))}function Ne(L,re){const J=c.get(re).get(L);l.get(re)!==J&&(i.uniformBlockBinding(re,J,L.__bindingPointIndex),l.set(re,J))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,se={},d={},f=new WeakMap,m=[],g=null,x=!1,p=null,h=null,T=null,b=null,S=null,w=null,A=null,C=new Le(0,0,0),F=0,y=!1,M=null,D=null,B=null,H=null,X=null,Me.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Re,bindFramebuffer:Ie,drawBuffers:ke,useProgram:lt,setBlending:R,setMaterial:Rt,setFlipSided:We,setCullFace:He,setLineWidth:be,setPolygonOffset:nt,setScissorTest:Ee,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:ee,texImage2D:me,texImage3D:Ce,updateUBOMapping:Xe,uniformBlockBinding:Ne,texStorage2D:Ge,texStorage3D:Z,texSubImage2D:j,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:pe,scissor:Ue,viewport:_e,reset:Ke}}function Jp(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return m?new OffscreenCanvas(E,v):ss("canvas")}function x(E,v,O){let K=1;const ee=Ee(E);if((ee.width>O||ee.height>O)&&(K=O/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(K*ee.width),Se=Math.floor(K*ee.height);d===void 0&&(d=g(j,Se));const oe=v?g(j,Se):d;return oe.width=j,oe.height=Se,oe.getContext("2d").drawImage(E,0,0,j,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Se+")."),oe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(E,v,O,K,ee=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=v;if(v===i.RED&&(O===i.FLOAT&&(j=i.R32F),O===i.HALF_FLOAT&&(j=i.R16F),O===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.R8UI),O===i.UNSIGNED_SHORT&&(j=i.R16UI),O===i.UNSIGNED_INT&&(j=i.R32UI),O===i.BYTE&&(j=i.R8I),O===i.SHORT&&(j=i.R16I),O===i.INT&&(j=i.R32I)),v===i.RG&&(O===i.FLOAT&&(j=i.RG32F),O===i.HALF_FLOAT&&(j=i.RG16F),O===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RG8UI),O===i.UNSIGNED_SHORT&&(j=i.RG16UI),O===i.UNSIGNED_INT&&(j=i.RG32UI),O===i.BYTE&&(j=i.RG8I),O===i.SHORT&&(j=i.RG16I),O===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGB8UI),O===i.UNSIGNED_SHORT&&(j=i.RGB16UI),O===i.UNSIGNED_INT&&(j=i.RGB32UI),O===i.BYTE&&(j=i.RGB8I),O===i.SHORT&&(j=i.RGB16I),O===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),O===i.UNSIGNED_INT&&(j=i.RGBA32UI),O===i.BYTE&&(j=i.RGBA8I),O===i.SHORT&&(j=i.RGBA16I),O===i.INT&&(j=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),v===i.RGBA){const Se=ee?$s:et.getTransfer(K);O===i.FLOAT&&(j=i.RGBA32F),O===i.HALF_FLOAT&&(j=i.RGBA16F),O===i.UNSIGNED_BYTE&&(j=Se===it?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(E,v){let O;return E?v===null||v===si||v===Bi?O=i.DEPTH24_STENCIL8:v===Cn?O=i.DEPTH32F_STENCIL8:v===is&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===Bi?O=i.DEPTH_COMPONENT24:v===Cn?O=i.DEPTH_COMPONENT32F:v===is&&(O=i.DEPTH_COMPONENT16),O}function w(E,v){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==en&&E.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),F(v),v.isVideoTexture&&u.delete(v)}function C(E){const v=E.target;v.removeEventListener("dispose",C),M(v)}function F(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,K=f.get(O);if(K){const ee=K[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(E),Object.keys(K).length===0&&f.delete(O)}n.remove(E)}function y(E){const v=n.get(E);i.deleteTexture(v.__webglTexture);const O=E.source,K=f.get(O);delete K[v.__cacheKey],o.memory.textures--}function M(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ee=0;ee<v.__webglFramebuffer[K].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[K][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)i.deleteFramebuffer(v.__webglFramebuffer[K]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let K=0,ee=O.length;K<ee;K++){const j=n.get(O[K]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(E)}let D=0;function B(){D=0}function H(){const E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function X(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function $(E,v){const O=n.get(E);if(E.isVideoTexture&&be(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,E,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function Y(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Q(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){ne(O,E,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const ie={[ta]:i.REPEAT,[It]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},se={[en]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[cr]:i.LINEAR_MIPMAP_NEAREST,[ni]:i.LINEAR_MIPMAP_LINEAR},xe={[wc]:i.NEVER,[Dc]:i.ALWAYS,[Tc]:i.LESS,[bl]:i.LEQUAL,[Ac]:i.EQUAL,[Pc]:i.GEQUAL,[Cc]:i.GREATER,[Rc]:i.NOTEQUAL};function Ae(E,v){if(v.type===Cn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===cr||v.magFilter===ds||v.magFilter===ni||v.minFilter===on||v.minFilter===cr||v.minFilter===ds||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ie[v.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ie[v.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ie[v.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,se[v.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,se[v.minFilter]),v.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===en||v.minFilter!==ds&&v.minFilter!==ni||v.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Me(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const K=v.source;let ee=f.get(K);ee===void 0&&(ee={},f.set(K,ee));const j=X(v);if(j!==E.__cacheKey){ee[j]===void 0&&(ee[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ee[j].usedTimes++;const Se=ee[E.__cacheKey];Se!==void 0&&(ee[E.__cacheKey].usedTimes--,Se.usedTimes===0&&y(v)),E.__cacheKey=j,E.__webglTexture=ee[j].texture}return O}function q(E,v,O){let K=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=i.TEXTURE_3D);const ee=Me(E,v),j=v.source;t.bindTexture(K,E.__webglTexture,i.TEXTURE0+O);const Se=n.get(j);if(j.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);const oe=et.getPrimaries(et.workingColorSpace),pe=v.colorSpace===an?null:et.getPrimaries(v.colorSpace),Ge=v.colorSpace===an||oe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Z=x(v.image,!1,s.maxTextureSize);Z=nt(v,Z);const me=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let Ue=b(v.internalFormat,me,Ce,v.colorSpace,v.isVideoTexture);Ae(K,v);let _e;const Xe=v.mipmaps,Ne=v.isVideoTexture!==!0,Ke=Se.__version===void 0||ee===!0,L=j.dataReady,re=w(v,Z);if(v.isDepthTexture)Ue=S(v.format===zi,v.type),Ke&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Ue,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Ue,Z.width,Z.height,0,me,Ce,null));else if(v.isDataTexture)if(Xe.length>0){Ne&&Ke&&t.texStorage2D(i.TEXTURE_2D,re,Ue,Xe[0].width,Xe[0].height);for(let V=0,J=Xe.length;V<J;V++)_e=Xe[V],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,me,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,V,Ue,_e.width,_e.height,0,me,Ce,_e.data);v.generateMipmaps=!1}else Ne?(Ke&&t.texStorage2D(i.TEXTURE_2D,re,Ue,Z.width,Z.height),L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,me,Ce,Z.data)):t.texImage2D(i.TEXTURE_2D,0,Ue,Z.width,Z.height,0,me,Ce,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ne&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ue,Xe[0].width,Xe[0].height,Z.depth);for(let V=0,J=Xe.length;V<J;V++)if(_e=Xe[V],v.format!==Qt)if(me!==null)if(Ne){if(L)if(v.layerUpdates.size>0){const he=Po(_e.width,_e.height,v.format,v.type);for(const ue of v.layerUpdates){const Fe=_e.data.subarray(ue*he/_e.data.BYTES_PER_ELEMENT,(ue+1)*he/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ue,_e.width,_e.height,1,me,Fe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,Z.depth,me,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ue,_e.width,_e.height,Z.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,Z.depth,me,Ce,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ue,_e.width,_e.height,Z.depth,0,me,Ce,_e.data)}else{Ne&&Ke&&t.texStorage2D(i.TEXTURE_2D,re,Ue,Xe[0].width,Xe[0].height);for(let V=0,J=Xe.length;V<J;V++)_e=Xe[V],v.format!==Qt?me!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,me,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ue,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,_e.width,_e.height,me,Ce,_e.data):t.texImage2D(i.TEXTURE_2D,V,Ue,_e.width,_e.height,0,me,Ce,_e.data)}else if(v.isDataArrayTexture)if(Ne){if(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,Ue,Z.width,Z.height,Z.depth),L)if(v.layerUpdates.size>0){const V=Po(Z.width,Z.height,v.format,v.type);for(const J of v.layerUpdates){const he=Z.data.subarray(J*V/Z.data.BYTES_PER_ELEMENT,(J+1)*V/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,Z.width,Z.height,1,me,Ce,he)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,me,Ce,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,Z.width,Z.height,Z.depth,0,me,Ce,Z.data);else if(v.isData3DTexture)Ne?(Ke&&t.texStorage3D(i.TEXTURE_3D,re,Ue,Z.width,Z.height,Z.depth),L&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,me,Ce,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,Z.width,Z.height,Z.depth,0,me,Ce,Z.data);else if(v.isFramebufferTexture){if(Ke)if(Ne)t.texStorage2D(i.TEXTURE_2D,re,Ue,Z.width,Z.height);else{let V=Z.width,J=Z.height;for(let he=0;he<re;he++)t.texImage2D(i.TEXTURE_2D,he,Ue,V,J,0,me,Ce,null),V>>=1,J>>=1}}else if(Xe.length>0){if(Ne&&Ke){const V=Ee(Xe[0]);t.texStorage2D(i.TEXTURE_2D,re,Ue,V.width,V.height)}for(let V=0,J=Xe.length;V<J;V++)_e=Xe[V],Ne?L&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,me,Ce,_e):t.texImage2D(i.TEXTURE_2D,V,Ue,me,Ce,_e);v.generateMipmaps=!1}else if(Ne){if(Ke){const V=Ee(Z);t.texStorage2D(i.TEXTURE_2D,re,Ue,V.width,V.height)}L&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ce,Z)}else t.texImage2D(i.TEXTURE_2D,0,Ue,me,Ce,Z);p(v)&&h(K),Se.__version=j.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function ne(E,v,O){if(v.image.length!==6)return;const K=Me(E,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+O);const j=n.get(ee);if(ee.version!==j.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const Se=et.getPrimaries(et.workingColorSpace),oe=v.colorSpace===an?null:et.getPrimaries(v.colorSpace),pe=v.colorSpace===an||Se===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ge=v.isCompressedTexture||v.image[0].isCompressedTexture,Z=v.image[0]&&v.image[0].isDataTexture,me=[];for(let J=0;J<6;J++)!Ge&&!Z?me[J]=x(v.image[J],!0,s.maxCubemapSize):me[J]=Z?v.image[J].image:v.image[J],me[J]=nt(v,me[J]);const Ce=me[0],Ue=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),Xe=b(v.internalFormat,Ue,_e,v.colorSpace),Ne=v.isVideoTexture!==!0,Ke=j.__version===void 0||K===!0,L=ee.dataReady;let re=w(v,Ce);Ae(i.TEXTURE_CUBE_MAP,v);let V;if(Ge){Ne&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Xe,Ce.width,Ce.height);for(let J=0;J<6;J++){V=me[J].mipmaps;for(let he=0;he<V.length;he++){const ue=V[he];v.format!==Qt?Ue!==null?Ne?L&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ue.width,ue.height,Ue,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,0,0,ue.width,ue.height,Ue,_e,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he,Xe,ue.width,ue.height,0,Ue,_e,ue.data)}}}else{if(V=v.mipmaps,Ne&&Ke){V.length>0&&re++;const J=Ee(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,Xe,J.width,J.height)}for(let J=0;J<6;J++)if(Z){Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me[J].width,me[J].height,Ue,_e,me[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,me[J].width,me[J].height,0,Ue,_e,me[J].data);for(let he=0;he<V.length;he++){const Fe=V[he].image[J].image;Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Fe.width,Fe.height,Ue,_e,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Xe,Fe.width,Fe.height,0,Ue,_e,Fe.data)}}else{Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ue,_e,me[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Xe,Ue,_e,me[J]);for(let he=0;he<V.length;he++){const ue=V[he];Ne?L&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,0,0,Ue,_e,ue.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,he+1,Xe,Ue,_e,ue.image[J])}}}p(v)&&h(i.TEXTURE_CUBE_MAP),j.__version=ee.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function fe(E,v,O,K,ee,j){const Se=r.convert(O.format,O.colorSpace),oe=r.convert(O.type),pe=b(O.internalFormat,Se,oe,O.colorSpace),Ge=n.get(v),Z=n.get(O);if(Z.__renderTarget=v,!Ge.__hasExternalTextures){const me=Math.max(1,v.width>>j),Ce=Math.max(1,v.height>>j);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,pe,me,Ce,v.depth,0,Se,oe,null):t.texImage2D(ee,j,pe,me,Ce,0,Se,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),He(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ee,Z.__webglTexture,0,We(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ee,Z.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(E,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,E),v.depthBuffer){const K=v.depthTexture,ee=K&&K.isDepthTexture?K.type:null,j=S(v.stencilBuffer,ee),Se=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=We(v);He(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,j,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,E)}else{const K=v.textures;for(let ee=0;ee<K.length;ee++){const j=K[ee],Se=r.convert(j.format,j.colorSpace),oe=r.convert(j.type),pe=b(j.internalFormat,Se,oe,j.colorSpace),Ge=We(v);O&&He(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,pe,v.width,v.height):He(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,pe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,pe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const ee=K.__webglTexture,j=We(v);if(v.depthTexture.format===Ui)He(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===zi)He(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ie(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=K}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=i.createRenderbuffer(),ce(v.__webglDepthbuffer[K],E,!1);else{const ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ce(v.__webglDepthbuffer,E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(E,v,O){const K=n.get(E);v!==void 0&&fe(K.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ie(E)}function lt(E){const v=E.texture,O=n.get(E),K=n.get(v);E.addEventListener("dispose",C);const ee=E.textures,j=E.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=v.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[oe]=[];for(let pe=0;pe<v.mipmaps.length;pe++)O.__webglFramebuffer[oe][pe]=i.createFramebuffer()}else O.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)O.__webglFramebuffer[oe]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let oe=0,pe=ee.length;oe<pe;oe++){const Ge=n.get(ee[oe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&He(E)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const pe=ee[oe];O.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[oe]);const Ge=r.convert(pe.format,pe.colorSpace),Z=r.convert(pe.type),me=b(pe.internalFormat,Ge,Z,pe.colorSpace,E.isXRRenderTarget===!0),Ce=We(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,me,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,O.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)fe(O.__webglFramebuffer[oe][pe],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,pe);else fe(O.__webglFramebuffer[oe],E,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,pe=ee.length;oe<pe;oe++){const Ge=ee[oe],Z=n.get(Ge);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Ae(i.TEXTURE_2D,Ge),fe(O.__webglFramebuffer,E,Ge,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),p(Ge)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Ae(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)fe(O.__webglFramebuffer[pe],E,v,i.COLOR_ATTACHMENT0,oe,pe);else fe(O.__webglFramebuffer,E,v,i.COLOR_ATTACHMENT0,oe,0);p(v)&&h(oe),t.unbindTexture()}E.depthBuffer&&Ie(E)}function qe(E){const v=E.textures;for(let O=0,K=v.length;O<K;O++){const ee=v[O];if(p(ee)){const j=T(E),Se=n.get(ee).__webglTexture;t.bindTexture(j,Se),h(j),t.unbindTexture()}}}const Qe=[],R=[];function Rt(E){if(E.samples>0){if(He(E)===!1){const v=E.textures,O=E.width,K=E.height;let ee=i.COLOR_BUFFER_BIT;const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(E),oe=v.length>1;if(oe)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Ge=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,ee,i.NEAREST),l===!0&&(Qe.length=0,R.length=0,Qe.push(i.COLOR_ATTACHMENT0+pe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Qe.push(j),R.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const Ge=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function We(E){return Math.min(s.maxSamples,E.samples)}function He(E){const v=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(E){const v=o.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function nt(E,v){const O=E.colorSpace,K=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ki&&O!==an&&(et.getTransfer(O)===it?(K!==Qt||ee!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=He}function Qp(i,e){function t(n,s=an){let r;const o=et.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Na)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fl)return i.BYTE;if(n===pl)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===gl)return i.ALPHA;if(n===vl)return i.RGB;if(n===Qt)return i.RGBA;if(n===_l)return i.LUMINANCE;if(n===xl)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Ml)return i.RED;if(n===Fa)return i.RED_INTEGER;if(n===Sl)return i.RG;if(n===Oa)return i.RG_INTEGER;if(n===Ba)return i.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===va||n===_a||n===xa||n===Ma||n===Sa||n===ya||n===Ea)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ua)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ha)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_a)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===ba||n===wa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ys)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yl||n===Ta||n===Aa||n===Ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const em={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),h=this._getHandJoint(c,x);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(em)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
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

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ft,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:tm,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new An(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sm extends oi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const x=new im,p=t.getContextAttributes();let h=null,T=null;const b=[],S=[],w=new Te;let A=null;const C=new rn;C.viewport=new St;const F=new rn;F.viewport=new St;const y=[C,F],M=new Eu;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=b[q];return ne===void 0&&(ne=new Hr,b[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=b[q];return ne===void 0&&(ne=new Hr,b[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=b[q];return ne===void 0&&(ne=new Hr,b[q]=ne),ne.getHandSpace()};function H(q){const ne=S.indexOf(q.inputSource);if(ne===-1)return;const fe=b[ne];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",$);for(let q=0;q<b.length;q++){const ne=S[q];ne!==null&&(S[q]=null,b[q].disconnect(ne))}D=null,B=null,x.reset(),e.setRenderTarget(h),m=null,f=null,d=null,s=null,T=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",X),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let fe=null,ce=null,Re=null;p.depth&&(Re=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?zi:Ui,ce=p.stencil?Bi:si);const Ie={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ie),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new ri(f.textureWidth,f.textureHeight,{format:Qt,type:_n,depthTexture:new Ol(f.textureWidth,f.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ri(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let ne=0;ne<q.removed.length;ne++){const fe=q.removed[ne],ce=S.indexOf(fe);ce>=0&&(S[ce]=null,b[ce].disconnect(fe))}for(let ne=0;ne<q.added.length;ne++){const fe=q.added[ne];let ce=S.indexOf(fe);if(ce===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=S.length){S.push(fe),ce=Ie;break}else if(S[Ie]===null){S[Ie]=fe,ce=Ie;break}if(ce===-1)break}const Re=b[ce];Re&&Re.connect(fe)}}const Y=new N,Q=new N;function G(q,ne,fe){Y.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const ce=Y.distanceTo(Q),Re=ne.projectionMatrix.elements,Ie=fe.projectionMatrix.elements,ke=Re[14]/(Re[10]-1),lt=Re[14]/(Re[10]+1),qe=(Re[9]+1)/Re[5],Qe=(Re[9]-1)/Re[5],R=(Re[8]-1)/Re[0],Rt=(Ie[8]+1)/Ie[0],We=ke*R,He=ke*Rt,be=ce/(-R+Rt),nt=be*-R;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(nt),q.translateZ(be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ee=ke+be,E=lt+be,v=We-nt,O=He+(ce-nt),K=qe*lt/E*Ee,ee=Qe*lt/E*Ee;q.projectionMatrix.makePerspective(v,O,K,ee,Ee,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ne=q.near,fe=q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),M.near=F.near=C.near=ne,M.far=F.far=C.far=fe,(D!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,B=M.far),C.layers.mask=q.layers.mask|2,F.layers.mask=q.layers.mask|4,M.layers.mask=C.layers.mask|F.layers.mask;const ce=q.parent,Re=M.cameras;ie(M,ce);for(let Ie=0;Ie<Re.length;Ie++)ie(Re[Ie],ce);Re.length===2?G(M,C,F):M.projectionMatrix.copy(C.projectionMatrix),se(q,M,ce)};function se(q,ne,fe){fe===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ra*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let xe=null;function Ae(q,ne){if(u=ne.getViewerPose(c||o),g=ne,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ce=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ie=0;Ie<fe.length;Ie++){const ke=fe[Ie];let lt=null;if(m!==null)lt=m.getViewport(ke);else{const Qe=d.getViewSubImage(f,ke);lt=Qe.viewport,Ie===0&&(e.setRenderTargetTextures(T,Qe.colorTexture,f.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(T))}let qe=y[Ie];qe===void 0&&(qe=new rn,qe.layers.enable(Ie),qe.viewport=new St,y[Ie]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(M.matrix.copy(qe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(qe)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ie=d.getDepthInformation(fe[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,s.renderState)}}for(let fe=0;fe<b.length;fe++){const ce=S[fe],Re=b[fe];ce!==null&&Re!==void 0&&Re.update(ce,ne,c||o)}xe&&xe(q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Me=new kl;Me.setAnimationLoop(Ae),this.setAnimationLoop=function(q){xe=q},this.dispose=function(){}}}const Kn=new xn,rm=new ft;function am(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Ul(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,T,b,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),x(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,T,b):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Wt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Wt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=e.get(h),b=T.envMap,S=T.envMapRotation;b&&(p.envMap.value=b,Kn.copy(S),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),p.envMapRotation.value.setFromMatrix4(rm.makeRotationFromEuler(Kn)),p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,b){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=b*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Wt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function x(p,h){const T=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function om(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const S=b.program;n.uniformBlockBinding(T,S)}function c(T,b){let S=s[T.id];S===void 0&&(g(T),S=u(T),s[T.id]=S,T.addEventListener("dispose",p));const w=b.program;n.updateUBOMapping(T,w);const A=e.render.frame;r[T.id]!==A&&(f(T),r[T.id]=A)}function u(T){const b=d();T.__bindingPointIndex=b;const S=i.createBuffer(),w=T.__size,A=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const b=s[T.id],S=T.uniforms,w=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,C=S.length;A<C;A++){const F=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,M=F.length;y<M;y++){const D=F[y];if(m(D,A,y,w)===!0){const B=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let $=0;$<H.length;$++){const Y=H[$],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(T,b,S,w){const A=T.value,C=b+"_"+S;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const F=w[C];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return w[C]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(T){const b=T.uniforms;let S=0;const w=16;for(let C=0,F=b.length;C<F;C++){const y=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,D=y.length;M<D;M++){const B=y[M],H=Array.isArray(B.value)?B.value:[B.value];for(let X=0,$=H.length;X<$;X++){const Y=H[X],Q=x(Y),G=S%w,ie=G%Q.boundary,se=G+ie;S+=ie,se!==0&&w-se<Q.storage&&(S+=w-se),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=Q.storage}}}const A=S%w;return A>0&&(S+=w-A),T.__size=S,T.__cache={},this}function x(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function p(T){const b=T.target;b.removeEventListener("dispose",p);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(const T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class lm{constructor(e={}){const{canvas:t=Ic(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,h=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=kn,this.toneMappingExposure=1;const S=this;let w=!1,A=0,C=0,F=null,y=-1,M=null;const D=new St,B=new St;let H=null;const X=new Le(0);let $=0,Y=t.width,Q=t.height,G=1,ie=null,se=null;const xe=new St(0,0,Y,Q),Ae=new St(0,0,Y,Q);let Me=!1;const q=new za;let ne=!1,fe=!1;this.transmissionResolutionScale=1;const ce=new ft,Re=new ft,Ie=new N,ke=new St,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Qe(){return F===null?G:1}let R=n;function Rt(_,U){return t.getContext(_,U)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${La}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",ue,!1),R===null){const U="webgl2";if(R=Rt(U,_),R===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let We,He,be,nt,Ee,E,v,O,K,ee,j,Se,oe,pe,Ge,Z,me,Ce,Ue,_e,Xe,Ne,Ke,L;function re(){We=new vf(R),We.init(),Ne=new Qp(R,We),He=new hf(R,We,e,Ne),be=new Kp(R,We),He.reverseDepthBuffer&&f&&be.buffers.depth.setReversed(!0),nt=new Mf(R),Ee=new Bp,E=new Jp(R,We,be,Ee,He,Ne,nt),v=new ff(S),O=new gf(S),K=new Tu(R),Ke=new cf(R,K),ee=new _f(R,K,nt,Ke),j=new yf(R,ee,K,nt),Ue=new Sf(R,He,E),Z=new df(Ee),Se=new Op(S,v,O,We,He,Ke,Z),oe=new am(S,Ee),pe=new kp,Ge=new Yp(We),Ce=new lf(S,v,O,be,j,m,l),me=new $p(S,j,He),L=new om(R,nt,He,be),_e=new uf(R,We,nt),Xe=new xf(R,We,nt),nt.programs=Se.programs,S.capabilities=He,S.extensions=We,S.properties=Ee,S.renderLists=pe,S.shadowMap=me,S.state=be,S.info=nt}re();const V=new sm(S,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const _=We.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=We.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(_){_!==void 0&&(G=_,this.setSize(Y,Q,!1))},this.getSize=function(_){return _.set(Y,Q)},this.setSize=function(_,U,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=_,Q=U,t.width=Math.floor(_*G),t.height=Math.floor(U*G),z===!0&&(t.style.width=_+"px",t.style.height=U+"px"),this.setViewport(0,0,_,U)},this.getDrawingBufferSize=function(_){return _.set(Y*G,Q*G).floor()},this.setDrawingBufferSize=function(_,U,z){Y=_,Q=U,G=z,t.width=Math.floor(_*z),t.height=Math.floor(U*z),this.setViewport(0,0,_,U)},this.getCurrentViewport=function(_){return _.copy(D)},this.getViewport=function(_){return _.copy(xe)},this.setViewport=function(_,U,z,k){_.isVector4?xe.set(_.x,_.y,_.z,_.w):xe.set(_,U,z,k),be.viewport(D.copy(xe).multiplyScalar(G).round())},this.getScissor=function(_){return _.copy(Ae)},this.setScissor=function(_,U,z,k){_.isVector4?Ae.set(_.x,_.y,_.z,_.w):Ae.set(_,U,z,k),be.scissor(B.copy(Ae).multiplyScalar(G).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(_){be.setScissorTest(Me=_)},this.setOpaqueSort=function(_){ie=_},this.setTransparentSort=function(_){se=_},this.getClearColor=function(_){return _.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(_=!0,U=!0,z=!0){let k=0;if(_){let I=!1;if(F!==null){const te=F.texture.format;I=te===Ba||te===Oa||te===Fa}if(I){const te=F.texture.type,ae=te===_n||te===si||te===is||te===Bi||te===Ia||te===Na,de=Ce.getClearColor(),ge=Ce.getClearAlpha(),Pe=de.r,De=de.g,we=de.b;ae?(g[0]=Pe,g[1]=De,g[2]=we,g[3]=ge,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Pe,x[1]=De,x[2]=we,x[3]=ge,R.clearBufferiv(R.COLOR,0,x))}else k|=R.COLOR_BUFFER_BIT}U&&(k|=R.DEPTH_BUFFER_BIT),z&&(k|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ce.dispose(),pe.dispose(),Ge.dispose(),Ee.dispose(),v.dispose(),O.dispose(),j.dispose(),Ke.dispose(),L.dispose(),Se.dispose(),V.dispose(),V.removeEventListener("sessionstart",Gn),V.removeEventListener("sessionend",Vi),gn.stop()};function J(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const _=nt.autoReset,U=me.enabled,z=me.autoUpdate,k=me.needsUpdate,I=me.type;re(),nt.autoReset=_,me.enabled=U,me.autoUpdate=z,me.needsUpdate=k,me.type=I}function ue(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Fe(_){const U=_.target;U.removeEventListener("dispose",Fe),rt(U)}function rt(_){gt(_),Ee.remove(_)}function gt(_){const U=Ee.get(_).programs;U!==void 0&&(U.forEach(function(z){Se.releaseProgram(z)}),_.isShaderMaterial&&Se.releaseShaderCache(_))}this.renderBufferDirect=function(_,U,z,k,I,te){U===null&&(U=lt);const ae=I.isMesh&&I.matrixWorld.determinant()<0,de=us(_,U,z,k,I);be.setMaterial(k,ae);let ge=z.index,Pe=1;if(k.wireframe===!0){if(ge=ee.getWireframeAttribute(z),ge===void 0)return;Pe=2}const De=z.drawRange,we=z.attributes.position;let Ye=De.start*Pe,Je=(De.start+De.count)*Pe;te!==null&&(Ye=Math.max(Ye,te.start*Pe),Je=Math.min(Je,(te.start+te.count)*Pe)),ge!==null?(Ye=Math.max(Ye,0),Je=Math.min(Je,ge.count)):we!=null&&(Ye=Math.max(Ye,0),Je=Math.min(Je,we.count));const pt=Je-Ye;if(pt<0||pt===1/0)return;Ke.setup(I,k,de,z,ge);let ct,$e=_e;if(ge!==null&&(ct=K.get(ge),$e=Xe,$e.setIndex(ct)),I.isMesh)k.wireframe===!0?(be.setLineWidth(k.wireframeLinewidth*Qe()),$e.setMode(R.LINES)):$e.setMode(R.TRIANGLES);else if(I.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),be.setLineWidth(ye*Qe()),I.isLineSegments?$e.setMode(R.LINES):I.isLineLoop?$e.setMode(R.LINE_LOOP):$e.setMode(R.LINE_STRIP)}else I.isPoints?$e.setMode(R.POINTS):I.isSprite&&$e.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)$e.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))$e.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const ye=I._multiDrawStarts,vt=I._multiDrawCounts,je=I._multiDrawCount,Lt=ge?K.get(ge).bytesPerElement:1,un=Ee.get(k).currentProgram.getUniforms();for(let Pt=0;Pt<je;Pt++)un.setValue(R,"_gl_DrawID",Pt),$e.render(ye[Pt]/Lt,vt[Pt])}else if(I.isInstancedMesh)$e.renderInstances(Ye,pt,I.count);else if(z.isInstancedBufferGeometry){const ye=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,vt=Math.min(z.instanceCount,ye);$e.renderInstances(Ye,pt,vt)}else $e.render(Ye,pt)};function Ze(_,U,z){_.transparent===!0&&_.side===$t&&_.forceSinglePass===!1?(_.side=Wt,_.needsUpdate=!0,jt(_,U,z),_.side=Hn,_.needsUpdate=!0,jt(_,U,z),_.side=$t):jt(_,U,z)}this.compile=function(_,U,z=null){z===null&&(z=_),h=Ge.get(z),h.init(U),b.push(h),z.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),_!==z&&_.traverseVisible(function(I){I.isLight&&I.layers.test(U.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const k=new Set;return _.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const te=I.material;if(te)if(Array.isArray(te))for(let ae=0;ae<te.length;ae++){const de=te[ae];Ze(de,z,I),k.add(de)}else Ze(te,z,I),k.add(te)}),b.pop(),h=null,k},this.compileAsync=function(_,U,z=null){const k=this.compile(_,U,z);return new Promise(I=>{function te(){if(k.forEach(function(ae){Ee.get(ae).currentProgram.isReady()&&k.delete(ae)}),k.size===0){I(_);return}setTimeout(te,10)}We.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let kt=null;function Ht(_){kt&&kt(_)}function Gn(){gn.stop()}function Vi(){gn.start()}const gn=new kl;gn.setAnimationLoop(Ht),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(_){kt=_,V.setAnimationLoop(_),_===null?gn.stop():gn.start()},V.addEventListener("sessionstart",Gn),V.addEventListener("sessionend",Vi),this.render=function(_,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,U,F),h=Ge.get(_,b.length),h.init(U),b.push(h),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Re),fe=this.localClippingEnabled,ne=Z.init(this.clippingPlanes,fe),p=pe.get(_,T.length),p.init(),T.push(p),V.enabled===!0&&V.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&Vn(te,U,-1/0,S.sortObjects)}Vn(_,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(ie,se),qe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,qe&&Ce.addToRenderList(p,_),this.info.render.frame++,ne===!0&&Z.beginShadows();const z=h.state.shadowsArray;me.render(z,_,U),ne===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,I=p.transmissive;if(h.setupLights(),U.isArrayCamera){const te=U.cameras;if(I.length>0)for(let ae=0,de=te.length;ae<de;ae++){const ge=te[ae];ui(k,I,_,ge)}qe&&Ce.render(_);for(let ae=0,de=te.length;ae<de;ae++){const ge=te[ae];ci(p,_,ge,ge.viewport)}}else I.length>0&&ui(k,I,_,U),qe&&Ce.render(_),ci(p,_,U);F!==null&&C===0&&(E.updateMultisampleRenderTarget(F),E.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(S,_,U),Ke.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(h=b[b.length-1],ne===!0&&Z.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function Vn(_,U,z,k){if(_.visible===!1)return;if(_.layers.test(U.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(U);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||q.intersectsSprite(_)){k&&ke.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Re);const ae=j.update(_),de=_.material;de.visible&&p.push(_,ae,de,z,ke.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||q.intersectsObject(_))){const ae=j.update(_),de=_.material;if(k&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),ke.copy(_.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ke.copy(ae.boundingSphere.center)),ke.applyMatrix4(_.matrixWorld).applyMatrix4(Re)),Array.isArray(de)){const ge=ae.groups;for(let Pe=0,De=ge.length;Pe<De;Pe++){const we=ge[Pe],Ye=de[we.materialIndex];Ye&&Ye.visible&&p.push(_,ae,Ye,z,ke.z,we)}}else de.visible&&p.push(_,ae,de,z,ke.z,null)}}const te=_.children;for(let ae=0,de=te.length;ae<de;ae++)Vn(te[ae],U,z,k)}function ci(_,U,z,k){const I=_.opaque,te=_.transmissive,ae=_.transparent;h.setupLightsView(z),ne===!0&&Z.setGlobalState(S.clippingPlanes,z),k&&be.viewport(D.copy(k)),I.length>0&&nn(I,U,z),te.length>0&&nn(te,U,z),ae.length>0&&nn(ae,U,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ui(_,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new ri(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?rs:_n,minFilter:ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const te=h.state.transmissionRenderTarget[k.id],ae=k.viewport||D;te.setSize(ae.z*S.transmissionResolutionScale,ae.w*S.transmissionResolutionScale);const de=S.getRenderTarget();S.setRenderTarget(te),S.getClearColor(X),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),qe&&Ce.render(z);const ge=S.toneMapping;S.toneMapping=kn;const Pe=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),ne===!0&&Z.setGlobalState(S.clippingPlanes,k),nn(_,z,k),E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te),We.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let we=0,Ye=U.length;we<Ye;we++){const Je=U[we],pt=Je.object,ct=Je.geometry,$e=Je.material,ye=Je.group;if($e.side===$t&&pt.layers.test(k.layers)){const vt=$e.side;$e.side=Wt,$e.needsUpdate=!0,Mn(pt,z,k,ct,$e,ye),$e.side=vt,$e.needsUpdate=!0,De=!0}}De===!0&&(E.updateMultisampleRenderTarget(te),E.updateRenderTargetMipmap(te))}S.setRenderTarget(de),S.setClearColor(X,$),Pe!==void 0&&(k.viewport=Pe),S.toneMapping=ge}function nn(_,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let I=0,te=_.length;I<te;I++){const ae=_[I],de=ae.object,ge=ae.geometry,Pe=k===null?ae.material:k,De=ae.group;de.layers.test(z.layers)&&Mn(de,U,z,ge,Pe,De)}}function Mn(_,U,z,k,I,te){_.onBeforeRender(S,U,z,k,I,te),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),I.onBeforeRender(S,U,z,k,_,te),I.transparent===!0&&I.side===$t&&I.forceSinglePass===!1?(I.side=Wt,I.needsUpdate=!0,S.renderBufferDirect(z,U,k,I,_,te),I.side=Hn,I.needsUpdate=!0,S.renderBufferDirect(z,U,k,I,_,te),I.side=$t):S.renderBufferDirect(z,U,k,I,_,te),_.onAfterRender(S,U,z,k,I,te)}function jt(_,U,z){U.isScene!==!0&&(U=lt);const k=Ee.get(_),I=h.state.lights,te=h.state.shadowsArray,ae=I.state.version,de=Se.getParameters(_,I.state,te,U,z),ge=Se.getProgramCacheKey(de);let Pe=k.programs;k.environment=_.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(_.isMeshStandardMaterial?O:v).get(_.envMap||k.environment),k.envMapRotation=k.environment!==null&&_.envMap===null?U.environmentRotation:_.envMapRotation,Pe===void 0&&(_.addEventListener("dispose",Fe),Pe=new Map,k.programs=Pe);let De=Pe.get(ge);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===ae)return hi(_,de),De}else de.uniforms=Se.getUniforms(_),_.onBeforeCompile(de,S),De=Se.acquireProgram(de,ge),Pe.set(ge,De),k.uniforms=de.uniforms;const we=k.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(we.clippingPlanes=Z.uniform),hi(_,de),k.needsLights=Wi(_),k.lightsStateVersion=ae,k.needsLights&&(we.ambientLightColor.value=I.state.ambient,we.lightProbe.value=I.state.probe,we.directionalLights.value=I.state.directional,we.directionalLightShadows.value=I.state.directionalShadow,we.spotLights.value=I.state.spot,we.spotLightShadows.value=I.state.spotShadow,we.rectAreaLights.value=I.state.rectArea,we.ltc_1.value=I.state.rectAreaLTC1,we.ltc_2.value=I.state.rectAreaLTC2,we.pointLights.value=I.state.point,we.pointLightShadows.value=I.state.pointShadow,we.hemisphereLights.value=I.state.hemi,we.directionalShadowMap.value=I.state.directionalShadowMap,we.directionalShadowMatrix.value=I.state.directionalShadowMatrix,we.spotShadowMap.value=I.state.spotShadowMap,we.spotLightMatrix.value=I.state.spotLightMatrix,we.spotLightMap.value=I.state.spotLightMap,we.pointShadowMap.value=I.state.pointShadowMap,we.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function ln(_){if(_.uniformsList===null){const U=_.currentProgram.getUniforms();_.uniformsList=Zs.seqWithValue(U.seq,_.uniforms)}return _.uniformsList}function hi(_,U){const z=Ee.get(_);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function us(_,U,z,k,I){U.isScene!==!0&&(U=lt),E.resetTextureUnits();const te=U.fog,ae=k.isMeshStandardMaterial?U.environment:null,de=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ki,ge=(k.isMeshStandardMaterial?O:v).get(k.envMap||ae),Pe=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,De=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),we=!!z.morphAttributes.position,Ye=!!z.morphAttributes.normal,Je=!!z.morphAttributes.color;let pt=kn;k.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(pt=S.toneMapping);const ct=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,$e=ct!==void 0?ct.length:0,ye=Ee.get(k),vt=h.state.lights;if(ne===!0&&(fe===!0||_!==M)){const Ut=_===M&&k.id===y;Z.setState(k,_,Ut)}let je=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==vt.state.version||ye.outputColorSpace!==de||I.isBatchedMesh&&ye.batching===!1||!I.isBatchedMesh&&ye.batching===!0||I.isBatchedMesh&&ye.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&ye.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&ye.instancing===!1||!I.isInstancedMesh&&ye.instancing===!0||I.isSkinnedMesh&&ye.skinning===!1||!I.isSkinnedMesh&&ye.skinning===!0||I.isInstancedMesh&&ye.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ye.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&ye.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&ye.instancingMorph===!1&&I.morphTexture!==null||ye.envMap!==ge||k.fog===!0&&ye.fog!==te||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Z.numPlanes||ye.numIntersection!==Z.numIntersection)||ye.vertexAlphas!==Pe||ye.vertexTangents!==De||ye.morphTargets!==we||ye.morphNormals!==Ye||ye.morphColors!==Je||ye.toneMapping!==pt||ye.morphTargetsCount!==$e)&&(je=!0):(je=!0,ye.__version=k.version);let Lt=ye.currentProgram;je===!0&&(Lt=jt(k,U,I));let un=!1,Pt=!1,Dn=!1;const Oe=Lt.getUniforms(),Xt=ye.uniforms;if(be.useProgram(Lt.program)&&(un=!0,Pt=!0,Dn=!0),k.id!==y&&(y=k.id,Pt=!0),un||M!==_){be.buffers.depth.getReversed()?(ce.copy(_.projectionMatrix),Fc(ce),Oc(ce),Oe.setValue(R,"projectionMatrix",ce)):Oe.setValue(R,"projectionMatrix",_.projectionMatrix),Oe.setValue(R,"viewMatrix",_.matrixWorldInverse);const yt=Oe.map.cameraPosition;yt!==void 0&&yt.setValue(R,Ie.setFromMatrixPosition(_.matrixWorld)),He.logarithmicDepthBuffer&&Oe.setValue(R,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Oe.setValue(R,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Pt=!0,Dn=!0)}if(I.isSkinnedMesh){Oe.setOptional(R,I,"bindMatrix"),Oe.setOptional(R,I,"bindMatrixInverse");const Ut=I.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Oe.setValue(R,"boneTexture",Ut.boneTexture,E))}I.isBatchedMesh&&(Oe.setOptional(R,I,"batchingTexture"),Oe.setValue(R,"batchingTexture",I._matricesTexture,E),Oe.setOptional(R,I,"batchingIdTexture"),Oe.setValue(R,"batchingIdTexture",I._indirectTexture,E),Oe.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&Oe.setValue(R,"batchingColorTexture",I._colorsTexture,E));const Yt=z.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Ue.update(I,z,Lt),(Pt||ye.receiveShadow!==I.receiveShadow)&&(ye.receiveShadow=I.receiveShadow,Oe.setValue(R,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Xt.envMap.value=ge,Xt.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Pt&&(Oe.setValue(R,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&hs(Xt,Dn),te&&k.fog===!0&&oe.refreshFogUniforms(Xt,te),oe.refreshMaterialUniforms(Xt,k,G,Q,h.state.transmissionRenderTarget[_.id]),Zs.upload(R,ln(ye),Xt,E)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Zs.upload(R,ln(ye),Xt,E),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Oe.setValue(R,"center",I.center),Oe.setValue(R,"modelViewMatrix",I.modelViewMatrix),Oe.setValue(R,"normalMatrix",I.normalMatrix),Oe.setValue(R,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ut=k.uniformsGroups;for(let yt=0,di=Ut.length;yt<di;yt++){const hn=Ut[yt];L.update(hn,Lt),L.bind(hn,Lt)}}return Lt}function hs(_,U){_.ambientLightColor.needsUpdate=U,_.lightProbe.needsUpdate=U,_.directionalLights.needsUpdate=U,_.directionalLightShadows.needsUpdate=U,_.pointLights.needsUpdate=U,_.pointLightShadows.needsUpdate=U,_.spotLights.needsUpdate=U,_.spotLightShadows.needsUpdate=U,_.rectAreaLights.needsUpdate=U,_.hemisphereLights.needsUpdate=U}function Wi(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,U,z){Ee.get(_.texture).__webglTexture=U,Ee.get(_.depthTexture).__webglTexture=z;const k=Ee.get(_);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,U){const z=Ee.get(_);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Xi=R.createFramebuffer();this.setRenderTarget=function(_,U=0,z=0){F=_,A=U,C=z;let k=!0,I=null,te=!1,ae=!1;if(_){const ge=Ee.get(_);if(ge.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(R.FRAMEBUFFER,null),k=!1;else if(ge.__webglFramebuffer===void 0)E.setupRenderTarget(_);else if(ge.__hasExternalTextures)E.rebindTextures(_,Ee.get(_.texture).__webglTexture,Ee.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const we=_.depthTexture;if(ge.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(_.width!==we.image.width||_.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(_)}}const Pe=_.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ae=!0);const De=Ee.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(De[U])?I=De[U][z]:I=De[U],te=!0):_.samples>0&&E.useMultisampledRTT(_)===!1?I=Ee.get(_).__webglMultisampledFramebuffer:Array.isArray(De)?I=De[z]:I=De,D.copy(_.viewport),B.copy(_.scissor),H=_.scissorTest}else D.copy(xe).multiplyScalar(G).floor(),B.copy(Ae).multiplyScalar(G).floor(),H=Me;if(z!==0&&(I=Xi),be.bindFramebuffer(R.FRAMEBUFFER,I)&&k&&be.drawBuffers(_,I),be.viewport(D),be.scissor(B),be.setScissorTest(H),te){const ge=Ee.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,z)}else if(ae){const ge=Ee.get(_.texture),Pe=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,ge.__webglTexture,z,Pe)}else if(_!==null&&z!==0){const ge=Ee.get(_.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ge.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(_,U,z,k,I,te,ae){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ee.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){be.bindFramebuffer(R.FRAMEBUFFER,de);try{const ge=_.texture,Pe=ge.format,De=ge.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=_.width-k&&z>=0&&z<=_.height-I&&R.readPixels(U,z,k,I,Ne.convert(Pe),Ne.convert(De),te)}finally{const ge=F!==null?Ee.get(F).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(_,U,z,k,I,te,ae){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ee.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(de=de[ae]),de){const ge=_.texture,Pe=ge.format,De=ge.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=_.width-k&&z>=0&&z<=_.height-I){be.bindFramebuffer(R.FRAMEBUFFER,de);const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,te.byteLength,R.STREAM_READ),R.readPixels(U,z,k,I,Ne.convert(Pe),Ne.convert(De),0);const Ye=F!==null?Ee.get(F).__webglFramebuffer:null;be.bindFramebuffer(R.FRAMEBUFFER,Ye);const Je=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Nc(R,Je,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,te),R.deleteBuffer(we),R.deleteSync(Je),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(_,U=null,z=0){_.isTexture!==!0&&(Ci("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,_=arguments[1]);const k=Math.pow(2,-z),I=Math.floor(_.image.width*k),te=Math.floor(_.image.height*k),ae=U!==null?U.x:0,de=U!==null?U.y:0;E.setTexture2D(_,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,ae,de,I,te),be.unbindTexture()};const cn=R.createFramebuffer(),Yi=R.createFramebuffer();this.copyTextureToTexture=function(_,U,z=null,k=null,I=0,te=null){_.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,_=arguments[1],U=arguments[2],te=arguments[3]||0,z=null),te===null&&(I!==0?(Ci("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=I,I=0):te=0);let ae,de,ge,Pe,De,we,Ye,Je,pt;const ct=_.isCompressedTexture?_.mipmaps[te]:_.image;if(z!==null)ae=z.max.x-z.min.x,de=z.max.y-z.min.y,ge=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,De=z.min.y,we=z.isBox3?z.min.z:0;else{const Yt=Math.pow(2,-I);ae=Math.floor(ct.width*Yt),de=Math.floor(ct.height*Yt),_.isDataArrayTexture?ge=ct.depth:_.isData3DTexture?ge=Math.floor(ct.depth*Yt):ge=1,Pe=0,De=0,we=0}k!==null?(Ye=k.x,Je=k.y,pt=k.z):(Ye=0,Je=0,pt=0);const $e=Ne.convert(U.format),ye=Ne.convert(U.type);let vt;U.isData3DTexture?(E.setTexture3D(U,0),vt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),vt=R.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),vt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const je=R.getParameter(R.UNPACK_ROW_LENGTH),Lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),un=R.getParameter(R.UNPACK_SKIP_PIXELS),Pt=R.getParameter(R.UNPACK_SKIP_ROWS),Dn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Pe),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we);const Oe=_.isDataArrayTexture||_.isData3DTexture,Xt=U.isDataArrayTexture||U.isData3DTexture;if(_.isDepthTexture){const Yt=Ee.get(_),Ut=Ee.get(U),yt=Ee.get(Yt.__renderTarget),di=Ee.get(Ut.__renderTarget);be.bindFramebuffer(R.READ_FRAMEBUFFER,yt.__webglFramebuffer),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let hn=0;hn<ge;hn++)Oe&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(_).__webglTexture,I,we+hn),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(U).__webglTexture,te,pt+hn)),R.blitFramebuffer(Pe,De,ae,de,Ye,Je,ae,de,R.DEPTH_BUFFER_BIT,R.NEAREST);be.bindFramebuffer(R.READ_FRAMEBUFFER,null),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(I!==0||_.isRenderTargetTexture||Ee.has(_)){const Yt=Ee.get(_),Ut=Ee.get(U);be.bindFramebuffer(R.READ_FRAMEBUFFER,cn),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yi);for(let yt=0;yt<ge;yt++)Oe?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,I,we+yt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,I),Xt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,te,pt+yt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ut.__webglTexture,te),I!==0?R.blitFramebuffer(Pe,De,ae,de,Ye,Je,ae,de,R.COLOR_BUFFER_BIT,R.NEAREST):Xt?R.copyTexSubImage3D(vt,te,Ye,Je,pt+yt,Pe,De,ae,de):R.copyTexSubImage2D(vt,te,Ye,Je,Pe,De,ae,de);be.bindFramebuffer(R.READ_FRAMEBUFFER,null),be.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Xt?_.isDataTexture||_.isData3DTexture?R.texSubImage3D(vt,te,Ye,Je,pt,ae,de,ge,$e,ye,ct.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(vt,te,Ye,Je,pt,ae,de,ge,$e,ct.data):R.texSubImage3D(vt,te,Ye,Je,pt,ae,de,ge,$e,ye,ct):_.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,te,Ye,Je,ae,de,$e,ye,ct.data):_.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,te,Ye,Je,ct.width,ct.height,$e,ct.data):R.texSubImage2D(R.TEXTURE_2D,te,Ye,Je,ae,de,$e,ye,ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,je),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,un),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Dn),te===0&&U.generateMipmaps&&R.generateMipmap(vt),be.unbindTexture()},this.copyTextureToTexture3D=function(_,U,z=null,k=null,I=0){return _.isTexture!==!0&&(Ci("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,_=arguments[2],U=arguments[3],I=arguments[4]||0),Ci('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,U,z,k,I)},this.initRenderTarget=function(_){Ee.get(_).__webglFramebuffer===void 0&&E.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?E.setTextureCube(_,0):_.isData3DTexture?E.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?E.setTexture2DArray(_,0):E.setTexture2D(_,0),be.unbindTexture()},this.resetState=function(){A=0,C=0,F=null,be.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const tl={type:"change"},Va={type:"start"},Xl={type:"end"},Os=new tr,nl=new Bn,cm=Math.cos(70*Uc.DEG2RAD),bt=new N,Zt=2*Math.PI,st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gr=1e-6;class um extends bu{constructor(e,t=null){super(e,t),this.state=st.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ri.ROTATE,TWO:Ri.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new ai,this._lastTargetPosition=new N,this._quat=new ai().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ro,this._sphericalDelta=new Ro,this._scale=1,this._panOffset=new N,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new N,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=dm.bind(this),this._onPointerDown=hm.bind(this),this._onPointerUp=fm.bind(this),this._onContextMenu=Mm.bind(this),this._onMouseWheel=gm.bind(this),this._onKeyDown=vm.bind(this),this._onTouchStart=_m.bind(this),this._onTouchMove=xm.bind(this),this._onMouseDown=pm.bind(this),this._onMouseMove=mm.bind(this),this._interceptControlDown=Sm.bind(this),this._interceptControlUp=ym.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tl),this.update(),this.state=st.NONE}update(e=null){const t=this.object.position;bt.copy(t).sub(this.target),bt.applyQuaternion(this._quat),this._spherical.setFromVector3(bt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Zt:n>Math.PI&&(n-=Zt),s<-Math.PI?s+=Zt:s>Math.PI&&(s-=Zt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(bt.setFromSpherical(this._spherical),bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Os.origin.copy(this.object.position),Os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Os.direction))<cm?this.object.lookAt(this.target):(nl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Os.intersectPlane(nl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Gr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gr||this._lastTargetPosition.distanceToSquared(this.target)>Gr?(this.dispatchEvent(tl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){bt.setFromMatrixColumn(t,0),bt.multiplyScalar(-e),this._panOffset.add(bt)}_panUp(e,t){this.screenSpacePanning===!0?bt.setFromMatrixColumn(t,1):(bt.setFromMatrixColumn(t,0),bt.crossVectors(this.object.up,bt)),bt.multiplyScalar(e),this._panOffset.add(bt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;bt.copy(s).sub(this.target);let r=bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Zt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function hm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function dm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function fm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xl),this.state=st.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pm(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=st.DOLLY;break;case Di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}break;case Di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Va)}function mm(i){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function gm(i){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(i.preventDefault(),this.dispatchEvent(Va),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Xl))}function vm(i){this.enabled!==!1&&this._handleKeyDown(i)}function _m(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ri.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=st.TOUCH_ROTATE;break;case Ri.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case Ri.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=st.TOUCH_DOLLY_PAN;break;case Ri.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Va)}function xm(i){switch(this._trackPointer(i),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=st.NONE}}function Mm(i){this.enabled!==!1&&i.preventDefault()}function Sm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ym(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Em{constructor(e,t,n,s,r,o=null,a=null,l=null){this.canvas=e,this.meta=t,this.G=t.grid,this.sizeX=t.sizeX,this.sizeY=t.sizeY,this.zRangeKm=(t.zMaxM-t.zMinM)/1e3,this.skirtDepth=.78,this.demZ=new Float32Array(this.G*this.G);const c=new Uint8Array(this.G*this.G*4);for(let d=0;d<this.demZ.length;d++){const f=n[d]/65535;this.demZ[d]=f*this.zRangeKm;const m=Math.max(0,Math.min(255,Math.round(f*255)));c[d*4+0]=m,c[d*4+1]=m,c[d*4+2]=m,c[d*4+3]=255}this.demTex=new Mo(c,this.G,this.G,Qt,_n),this.demTex.minFilter=on,this.demTex.magFilter=on,this.demTex.wrapS=It,this.demTex.wrapT=It,this.demTex.flipY=!1,this.demTex.needsUpdate=!0;const u=()=>{const d=new Mo(new Uint8Array([235,128,128,255]),1,1,Qt);return d.colorSpace=an,d.needsUpdate=!0,d};this.aoTex=o||u(),this.aoTex.colorSpace=an,this.aoTex.wrapS=It,this.aoTex.wrapT=It,this.ringAoTex=l||u(),this.ringAoTex.colorSpace=an,this.ringAoTex.wrapS=It,this.ringAoTex.wrapT=It,this.state={exag:1.3,mode:0,contours:!1,showSmoke:!0,showClouds:!0,showPrecip:!0,showIsotherm:!0,showSunArc:!0,showHorizon:!1,shadows:!0,spin:!1,boost:1.4,compareClean:!1,hour:13,depProgress:0,plumeDensity:.4,cloudCover:.4,cloudLow:.3,cloudMid:.3,cloudHigh:.25,sunTrans:.85,precipMmH:0,rainSnowM:2600,snowLineM:3480,snowPackMm:0,windSpeed:5,windBearingDeg:245,swIn:350,lwIn:315,wetFrac:0,totalDepMgM2:36.8},this._sunDir=new N(.3,.7,.6).normalize(),this._initRenderer(),this._initSkyDomeAndLighting(),this._buildSolarOrbAndArc(),this._buildTerrain(s,r),this._buildSurroundingRockies(a),this._buildCloudDeck(),this._buildPrecipVolume(),this._buildValleyMistAndSpindrift(),this._buildRealisticNearRain(),this._buildRealisticSnow(),this._initCameraPresets(),this.resize()}_sampleDemNormalized(e,t){const n=Math.max(0,Math.min(this.G-1,Math.round(e*(this.G-1)))),s=Math.max(0,Math.min(this.G-1,Math.round(t*(this.G-1))));return this.demZ[s*this.G+n]}_sampleDemXZ(e,t){const n=Math.max(0,Math.min(1,e/this.sizeX+.5)),s=Math.max(0,Math.min(1,t/this.sizeY+.5));return this._sampleDemNormalized(n,s)}_initRenderer(){this.renderer=new lm({canvas:this.canvas,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=cl,this.renderer.toneMapping=hl,this.renderer.toneMappingExposure=1.05,this.renderer.outputColorSpace=Vt,this.scene=new au,this.scene.fog=null,this.camera=new rn(38,16/9,.04,260),this.camera.position.set(9.4,8.5,-10.3),this.controls=new um(this.camera,this.canvas),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.minDistance=.45,this.controls.maxDistance=30,this.controls.maxPolarAngle=Math.PI*.495,this.controls.target.set(0,.55,.15),this.controls.update(),this._camAnim=null}_initSkyDomeAndLighting(){this.skyUniforms={uSunDir:{value:this._sunDir.clone()},uTime:{value:0},uWindDir:{value:new Te(.85,-.52)},uDaylight:{value:.8},uTwilight:{value:0},uSmoke:{value:.3},uCloud:{value:.3},uCloudMid:{value:.3},uCloudHigh:{value:.25},uShowClouds:{value:1},uSwNorm:{value:.6}};const e=new ka(145,56,36),t=new zt({side:Wt,depthWrite:!1,fog:!1,uniforms:this.skyUniforms,vertexShader:`
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
          float horiz = pow(1.0 - max(h, 0.0), 3.4);
          float lowBand = pow(1.0 - max(h, 0.0), 7.5);
          vec3 sDir = normalize(uSunDir);
          float sunDot = max(dot(d, sDir), 0.0);

          // Linear-space alpine midnight sky (rich deep cobalt, never flat black)
          vec3 nightZen = vec3(0.0014, 0.0032, 0.0110);
          vec3 nightHor = vec3(0.0065, 0.0135, 0.0320);
          vec3 skyNight = mix(nightZen, nightHor, horiz);

          // Linear-space high-altitude Rocky Mountain Rayleigh sky (deep cobalt zenith -> crisp luminous azure horizon!)
          vec3 clearZen = vec3(0.022, 0.135, 0.500);
          vec3 clearHor = vec3(0.320, 0.530, 0.800);
          vec3 skyClear = mix(clearZen, clearHor, horiz);

          // Bright daylight overcast storm sky (linear space)
          vec3 stormZen = vec3(0.115, 0.155, 0.215);
          vec3 stormHor = vec3(0.300, 0.360, 0.440);
          vec3 skyStorm = mix(stormZen, stormHor, horiz);

          // Wildfire smoke linear sky + Henyey-Greenstein Mie forward sun-glow
          // Calibrated against real Columbia Icefield Skaping webcam: moderate smoke = luminous milky pearlescent silver-cream; heavy smoke (>0.55) = golden-amber copper!
          float g = 0.62;
          float hg = (1.0 - g * g) / pow(max(0.22, 1.0 + g * g - 2.0 * g * dot(d, sDir)), 1.5);
          float mieGlow = clamp((hg - 0.32) * 0.22, 0.0, 0.72);
          float heavyS = smoothstep(0.48, 0.92, uSmoke);
          vec3 smokeZen = mix(vec3(0.26, 0.29, 0.33), vec3(0.24, 0.16, 0.10), heavyS);
          vec3 smokeHorBase = mix(vec3(0.50, 0.51, 0.51), vec3(0.64, 0.55, 0.42), clamp(0.28 + 0.50 * mieGlow + 0.45 * uSmoke, 0.0, 1.0));
          vec3 smokeHor = mix(smokeHorBase, vec3(0.72, 0.40, 0.16), heavyS * 0.80);
          vec3 skySmoke = mix(smokeZen, smokeHor, pow(1.0 - max(h, 0.0), 1.9));

          vec3 daySky = mix(skyClear, skyStorm, clamp(uCloud * 0.78, 0.0, 1.0));
          daySky = mix(daySky, skySmoke, clamp(uSmoke * 0.82, 0.0, 1.0));
          // Dense trapped alpine horizon smoke veil matching the 35 km Rockies outer rim identically!
          vec3 veilCol = mix(vec3(0.48, 0.50, 0.51), vec3(0.60, 0.54, 0.44), clamp(0.24 + 0.52 * mieGlow + 0.40 * uSmoke, 0.0, 1.0));
          veilCol = mix(veilCol, vec3(0.66, 0.38, 0.16), heavyS * 0.75);
          daySky = mix(daySky, veilCol, lowBand * clamp(uSmoke * 0.92, 0.0, 0.90));

          // Golden / alpenglow rose sunrise & sunset horizon band
          vec3 twilightBand = mix(vec3(0.95, 0.22, 0.05), vec3(1.15, 0.62, 0.14), pow(sunDot, 2.0));
          daySky = mix(daySky, twilightBand, uTwilight * horiz * (0.48 + 0.52 * pow(sunDot, 1.5)) * (1.0 - uCloud * 0.42));

          vec3 col = mix(skyNight, daySky, uDaylight);

          // Real projected hemispherical HIGH CIRRUS (uCloudHigh) & mid ALTOSTRATUS (uCloudMid) across the sky dome!
          if (uShowClouds > 0.5 && h > 0.02 && (uCloudHigh > 0.05 || uCloudMid > 0.05)) {
            vec2 skyPlane = d.xz / (h + 0.13);
            float horizonFade = smoothstep(0.02, 0.22, h);
            vec2 wPerp = vec2(-uWindDir.y, uWindDir.x);

            if (uCloudHigh > 0.05) {
              vec2 cUv = vec2(dot(skyPlane, uWindDir) * 0.36 - uTime * 0.011, dot(skyPlane, wPerp) * 1.18);
              float w1 = sfbm(cUv * 1.45 + vec2(2.3, 7.1));
              float cirrus = smoothstep(0.68 - uCloudHigh * 0.36, 0.88, sfbm(cUv + 0.68 * w1));
              float cAlpha = cirrus * horizonFade * clamp(uCloudHigh * 0.78, 0.0, 0.68);
              vec3 cDay = mix(vec3(0.76, 0.83, 0.94), vec3(1.15, 0.48, 0.20), uTwilight * 0.78);
              cDay = mix(cDay, vec3(0.62, 0.44, 0.28), uSmoke * 0.42);
              vec3 cNight = vec3(0.012, 0.020, 0.042);
              vec3 cCol = mix(cNight, cDay, uDaylight) + vec3(0.42, 0.32, 0.18) * pow(sunDot, 10.0) * uDaylight;
              col = mix(col, cCol, cAlpha);
            }

            if (uCloudMid > 0.06) {
              vec2 mUv = skyPlane * 0.46 - uWindDir * uTime * 0.016 + vec2(4.7, 9.2);
              float warp = sfbm(mUv * 1.2 + vec2(1.4, 3.8));
              float midN = sfbm(mUv + 0.55 * warp);
              float midMask = smoothstep(0.66 - uCloudMid * 0.44, 0.86, midN);
              float mAlpha = midMask * horizonFade * clamp(uCloudMid * 0.84, 0.0, 0.80);
              vec3 mDark = mix(vec3(0.09, 0.12, 0.18), vec3(0.05, 0.07, 0.11), uCloud * 0.6);
              vec3 mLit = mix(vec3(0.70, 0.78, 0.88), vec3(1.05, 0.46, 0.16), uTwilight * 0.68);
              vec3 mDay = mix(mDark, mLit, clamp(0.22 + 0.56 * (1.0 - midMask) + 0.38 * pow(sunDot, 3.0), 0.0, 1.0));
              vec3 mCol = mix(vec3(0.008, 0.014, 0.028), mDay, uDaylight);
              col = mix(col, mCol, mAlpha);
            }
          }

          // Smooth below-horizon reflection (harmonizes with Bloc 3D diorama & 35 km rim)
          if (h < 0.0) {
            vec3 belowCol = mix(vec3(0.003, 0.006, 0.016), mix(vec3(0.09, 0.15, 0.24), vec3(0.24, 0.21, 0.17), uSmoke * 0.7), uDaylight);
            col = mix(col, belowCol, clamp(-h * 4.2, 0.0, 0.88));
          }

          // HDR Golden Solar Disc + Realistic Mie Aureole (ACESFilmic blooms incandescent core cleanly!)
          if (uDaylight > 0.04 && uSunDir.y > -0.02) {
            float maskKeep = clamp(uSwNorm, 0.04, 1.0);
            float disc = smoothstep(0.9978, 0.9994, sunDot);
            float innerHalo = pow(sunDot, 55.0) * 1.15;
            float wideHalo = pow(sunDot, 9.0) * 0.32;
            vec3 clearCol = vec3(1.65, 1.28, 0.32);
            vec3 smokeOrb = vec3(1.75, 0.32, 0.04);
            vec3 cloudVeil = vec3(1.05, 0.96, 0.72);
            vec3 sunTint = mix(clearCol, cloudVeil, clamp(uCloud * 0.70, 0.0, 1.0));
            sunTint = mix(sunTint, smokeOrb, clamp(uSmoke * 0.88 + uTwilight * 0.45, 0.0, 1.0));
            float discPower = disc * (3.6 * pow(maskKeep, 0.80) * (1.0 - uCloud * 0.68) + 0.55 * uSmoke * (1.0 - uCloud * 0.60));
            float haloPower = (innerHalo * (0.25 + 0.95 * maskKeep) + wideHalo * (0.30 + 0.65 * maskKeep));
            col += sunTint * (discPower + haloPower) * uDaylight;
          }

          // Crisp alpine starry night + subtle Milky Way glow
          float nightClear = (1.0 - uDaylight) * (1.0 - uCloud * 0.85) * (1.0 - uSmoke * 0.7) * smoothstep(0.06, 0.34, h);
          if (nightClear > 0.05) {
            vec3 cell = floor(d * 260.0);
            float rnd = hash31(cell);
            float star = smoothstep(0.9962, 0.9998, rnd);
            float twinkle = 0.75 + 0.25 * sin(uTime * 2.5 + rnd * 60.0);
            vec3 starTint = mix(vec3(0.75, 0.88, 1.0), vec3(1.0, 0.92, 0.76), fract(rnd * 37.0));
            col += starTint * star * twinkle * nightClear * 1.35;
            float mwBand = exp(-pow(dot(d, normalize(vec3(0.55, 0.42, -0.72))) * 3.8, 2.0));
            float mwCloud = sfbm(d.xz * 3.5 + vec2(1.4, 2.7));
            col += vec3(0.014, 0.022, 0.045) * mwBand * mwCloud * nightClear;
          }

          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.skyDome=new wt(e,t),this.scene.add(this.skyDome),this.hemiLight=new Mu(8963327,2760987,.72),this.scene.add(this.hemiLight);const s=(this.renderer.capabilities.maxTextureSize||2048)>=4096?4096:2048;this.sunLight=new Co(16773596,2.3),this.sunLight.position.set(8,12,10),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=s,this.sunLight.shadow.mapSize.height=s,this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=42;const r=7.6;this.sunLight.shadow.camera.left=-r,this.sunLight.shadow.camera.right=r,this.sunLight.shadow.camera.top=r,this.sunLight.shadow.camera.bottom=-r,this.sunLight.shadow.bias=-35e-5,this.sunLight.shadow.normalBias=.018,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.rimLight=new Co(7055078,.42),this.rimLight.position.set(-10,6,-12),this.scene.add(this.rimLight);const o=new An(this.sizeX*1.04,this.sizeY*1.04);o.rotateX(-Math.PI/2);const a=new Lr({color:725532,roughness:.96,metalness:0,transparent:!0,opacity:.55});this.floorMesh=new wt(o,a),this.floorMesh.position.y=-this.skirtDepth-.02,this.floorMesh.receiveShadow=!0,this.scene.add(this.floorMesh)}_buildSolarOrbAndArc(){this.sunGroup=new ii;const e=7.4,t=[];for(let o=6.2;o<=20.8;o+=.2){const a=Math.max(-1,Math.min(1,(o-13.5)/7.1)),l=(180+a*110)*Math.PI/180,c=Math.max(1.5,Math.cos(a*Math.PI*.5)*38)*Math.PI/180;t.push(new N(e*Math.cos(c)*Math.sin(l),.55+e*Math.sin(c)*.62,-e*Math.cos(c)*Math.cos(l)))}const n=new Nt().setFromPoints(t);this.sunArcMat=new mu({color:16638023,transparent:!0,opacity:.26,dashSize:.22,gapSize:.2,depthWrite:!1}),this.sunArcLine=new cu(n,this.sunArcMat),this.sunArcLine.computeLineDistances(),this.sunGroup.add(this.sunArcLine),this.sunOrbUniforms={uSunTrans:{value:.9},uSmoke:{value:.2},uCloud:{value:.2},uDaylight:{value:1},uTwilight:{value:0},uArcVis:{value:1}};const s=new An(2.1,2.1),r=new zt({transparent:!0,depthWrite:!1,blending:Vr,uniforms:this.sunOrbUniforms,vertexShader:`
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
      `});this.sunOrb=new wt(s,r),this.sunGroup.add(this.sunOrb),this.scene.add(this.sunGroup)}_buildTerrain(e,t){const n=this.G,s=this.sizeX,r=this.sizeY;e.colorSpace=Vt,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),e.wrapS=It,e.wrapT=It,t.colorSpace=an,t.wrapS=It,t.wrapT=It;const o=n*n,a=new Float32Array(o*3),l=new Float32Array(o*2),c=new Float32Array(o);for(let g=0;g<n;g++){const x=g/(n-1),p=(x-.5)*r,h=1-x;for(let T=0;T<n;T++){const b=T/(n-1),S=(b-.5)*s,w=g*n+T,A=this.demZ[w];c[w]=A,a[w*3+0]=S,a[w*3+1]=A*this.state.exag,a[w*3+2]=p,l[w*2+0]=b,l[w*2+1]=h}}const u=new Uint32Array((n-1)*(n-1)*6);let d=0;for(let g=0;g<n-1;g++)for(let x=0;x<n-1;x++){const p=g*n+x,h=p+1,T=p+n,b=T+1;u[d++]=p,u[d++]=T,u[d++]=b,u[d++]=p,u[d++]=b,u[d++]=h}const f=new Nt;f.setAttribute("position",new dt(a,3)),f.setAttribute("uv",new dt(l,2)),f.setAttribute("aBaseElev",new dt(c,1)),f.setIndex(new dt(u,1)),f.computeVertexNormals(),this.terrainGeo=f,this.terrainUniforms={uMaskTex:{value:t},uAoTex:{value:this.aoTex},uMode:{value:0},uContours:{value:0},uShowIsotherm:{value:1},uDepCumFrac:{value:0},uDepBoost:{value:this.state.boost},uRainSnowM:{value:this.state.rainSnowM},uSnowLineM:{value:this.state.snowLineM},uSnowPackMm:{value:0},uRainIntensity:{value:0},uSmokeHaze:{value:0},uDaylight:{value:.9},uTwilight:{value:0},uTime:{value:0},uSunDir:{value:this._sunDir.clone()},uCloudShadowAmt:{value:.3},uExag:{value:this.state.exag},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uWindDir:{value:new Te(.85,-.52)}};const m=new Lr({map:e,roughness:.78,metalness:.02});m.onBeforeCompile=g=>{Object.assign(g.uniforms,this.terrainUniforms),g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
          uniform sampler2D uAoTex;
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
          uniform float uTwilight;
          uniform float uTime;
          uniform vec3 uSunDir;
          uniform float uCloudShadowAmt;
          uniform float uExag;
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
          float fbm2(vec2 p) {
            return 0.65 * vnoise(p) + 0.35 * vnoise(p * 2.13 + vec2(5.7, 9.2));
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
          // High-definition procedural surface micro-height for analytical world-space bump normals (sharp limestone ledges, talus, glacier crevasses/ogives, wind sastrugi, lake waves)
          float terrainMicroHeight(vec2 xz, float elevM, float isCryo, float isSnow, float isIce, float freshSnow, float isLake) {
            vec2 wa = vec2(dot(xz, uWindDir), dot(xz, vec2(-uWindDir.y, uWindDir.x)));
            float strata = sin(elevM * 0.14 + fbm2(xz * 3.0) * 4.2) * 0.55;
            float crags = (fbm2(xz * 14.0) - 0.5) * 1.15 + (vnoise(xz * 48.0) - 0.5) * 0.55;
            float rockH = strata + crags;
            float crev = abs(sin(xz.x * 24.0 - xz.y * 28.0 + fbm2(xz * 7.5) * 3.4));
            float iceH = (crev - 0.5) * 0.85 + (vnoise(xz * 36.0) - 0.5) * 0.65;
            float snowDrift = (fbm2(vec2(wa.x * 6.5, wa.y * 19.0)) - 0.5) * 0.80 + (vnoise(xz * 44.0) - 0.5) * 0.25;
            float h = mix(rockH, mix(iceH, snowDrift * 0.55, isSnow), isCryo);
            h = mix(h, snowDrift * 0.48, freshSnow * 0.88);
            if (isLake > 0.05) {
              vec2 p1 = xz * 26.0 - uWindDir * uTime * 1.15;
              vec2 p2 = xz * 46.0 + vec2(uWindDir.y, -uWindDir.x) * uTime * 0.85;
              vec2 p3 = xz * 74.0 - uWindDir * uTime * 1.65;
              float wH = (vnoise(p1) - 0.5) * 0.50 + (vnoise(p2) - 0.5) * 0.32 + (vnoise(p3) - 0.5) * 0.18;
              h = mix(h, wH * 0.55, isLake);
            }
            return h;
          }`).replace("#include <map_fragment>",`#include <map_fragment>
          vec3 msk = texture2D(uMaskTex, vTerrainUv).rgb;
          vec3 aoMap = texture2D(uAoTex, vTerrainUv).rgb;
          float svfAo = aoMap.r;        // 16-azimuth Horizon Sky-View Factor [0.40..0.96]
          float topoCurv = aoMap.g;     // Multi-scale curvature: <0.5 gully/hollow, >0.5 ridge/arete
          float warmAspect = aoMap.b;   // Solar aspect: >0.5 sun-exposed South/SW, <0.5 shaded North

          float visAlb = msk.r;
          float ndsi = msk.g * 2.0 - 1.0;
          float water = msk.b;
          float elevT = clamp(vBaseElev / max(uZRangeKm, 0.001), 0.0, 1.0);
          float elevM = uZMinM + vBaseElev * 1000.0;

          float isCryo = smoothstep(0.30, 0.46, ndsi);
          float isSnow = isCryo * smoothstep(0.38, 0.58, visAlb);
          float isIce = isCryo * (1.0 - smoothstep(0.38, 0.58, visAlb));
          float isLake = smoothstep(0.22, 0.62, water);

          vec2 windAligned = vec2(
            dot(vObjPos.xz, uWindDir),
            dot(vObjPos.xz, vec2(-uWindDir.y, uWindDir.x))
          );
          float sastrugi = fbm(vec2(windAligned.x * 4.5, windAligned.y * 12.0));
          float grain = fbm(vObjPos.xz * 18.0);
          float microShade = mix(1.0, 0.85 + 0.22 * sastrugi, isSnow) * (0.91 + 0.15 * grain);

          float plumePattern = 0.68 + 0.46 * fbm(vObjPos.xz * 0.55 + uWindDir * 1.4) + 0.22 * (1.0 - elevT);
          float localDepNorm = clamp(uDepCumFrac * plumePattern, 0.0, 1.35);

          // Physically realistic aspect- & gully-aware snow accumulation & meltback across the ENTIRE Rockies massif!
          // Fresh snow holds longer in concave couloirs (topoCurv < 0.5) & cool north slopes (warmAspect < 0.5),
          // while melting off sun-exposed south rocky ridges first!
          float activeSnow = clamp(uRainIntensity * 0.55, 0.0, 0.65) * smoothstep(uRainSnowM - 100.0, uRainSnowM + 100.0, elevM);
          float packCover = 1.0 - exp(-max(uSnowPackMm, 0.0) / 2.6);
          float snowDepthNorm = clamp(max(packCover, activeSnow * 0.80), 0.0, 1.0);

          float aspectBiasM = (warmAspect - 0.5) * 185.0 * (1.0 - activeSnow * 0.6);
          float gullyBiasM = (topoCurv - 0.5) * 145.0;
          float snowLineEff = min(uSnowLineM, mix(3520.0, uRainSnowM - 60.0, smoothstep(0.04, 0.25, activeSnow)));
          float patchNoise = fbm(vObjPos.xz * 2.4 + vec2(3.1, 7.4));
          float elevMask = smoothstep(snowLineEff - 120.0, snowLineEff + 150.0, elevM - aspectBiasM - gullyBiasM + (patchNoise - 0.5) * 115.0);

          float ledgeTex = fbm(vObjPos.xz * 9.5);
          float slopeHold = smoothstep(0.26, 0.70, vSlopeUp + 0.22 * ledgeTex + 0.16 * (0.5 - topoCurv) + 0.14 * snowDepthNorm);
          float notLake = 1.0 - isLake;
          float rockCrevice = smoothstep(0.55 - 0.65 * snowDepthNorm, 0.88 - 0.45 * snowDepthNorm, patchNoise * 0.55 + ledgeTex * 0.28 + (0.65 - topoCurv) * 0.35 + snowDepthNorm * 0.52);
          float terrainHold = mix(rockCrevice, 1.0, isCryo * 0.55 + snowDepthNorm * 0.45);

          float freshSnow = clamp(snowDepthNorm * elevMask * slopeHold * terrainHold * notLake * 1.14, 0.0, 0.96);

          float belowRainLine = 1.0 - smoothstep(uRainSnowM - 90.0, uRainSnowM + 110.0, elevM);
          float wetSurface = clamp(uRainIntensity * 0.62, 0.0, 0.78) * belowRainLine * (1.0 - freshSnow * 0.85);

          // Projected moving 3D cloud shadows gliding across the glacier & cliffs along the true sun vector!
          float cloudShadow = 1.0;
          if (uCloudShadowAmt > 0.08 && uDaylight > 0.08) {
            vec2 shP = vObjPos.xz + uSunDir.xz * ((3.5 - vObjPos.y) / max(uSunDir.y, 0.24));
            float cn = fbm(shP * 0.25 - uWindDir * uTime * 0.062);
            float cMask = smoothstep(0.66 - uCloudShadowAmt * 0.42, 0.84, cn);
            cloudShadow = 1.0 - cMask * uCloudShadowAmt * 0.46 * uDaylight;
          }

          if (uMode < 0.5) {
            // Photorealistic Canadian Rockies detail synthesis:
            // - Crisp slate-charcoal sedimentary limestone strata, scree micro-contrast & fracture cracks on bare rock (eliminates smooth clay/brown satellite blur!)
            // - Transverse ogives & cyan-gray crevasse fissures on bare glacier ice
            float rockMask = (1.0 - isCryo) * notLake;
            float highRock = smoothstep(2020.0, 2320.0, elevM + (ledgeTex - 0.5) * 160.0);
            float screeDetail = fbm2(vObjPos.xz * 34.0);
            float fineSpeckle = vnoise(vObjPos.xz * 95.0);
            float strataBand = sin(elevM * 0.13 + fbm2(vObjPos.xz * 3.0) * 4.2);
            float rockDetailMod = 1.0 + (screeDetail - 0.5) * 0.30 + (fineSpeckle - 0.5) * 0.18 + strataBand * 0.14 * (1.0 - vSlopeUp);
            float rockLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            // Shift high alpine limestone rock away from muddy warm brown toward authentic cool Rockies slate-gray limestone!
            vec3 slateRock = vec3(rockLuma * 0.90, rockLuma * 0.95, rockLuma * 1.05);
            diffuseColor.rgb = mix(diffuseColor.rgb, slateRock, rockMask * highRock * 0.58);
            // Darken sharp rock gullies/fractures and brighten limestone ridges subtly
            float ridgeAccent = mix(0.84, 1.14, clamp(topoCurv, 0.0, 1.0));
            diffuseColor.rgb = max(vec3(0.008), diffuseColor.rgb * mix(microShade, rockDetailMod * ridgeAccent, rockMask));

            // Crisp glacial ice crevasses & ogive bands + snow texture balance
            float iceCrev = smoothstep(0.12, 0.36, abs(sin(vObjPos.x * 24.0 - vObjPos.z * 28.0 + fbm2(vObjPos.xz * 7.5) * 3.4)));
            diffuseColor.rgb *= mix(vec3(1.0), vec3(0.88, 0.93, 0.99), isSnow * 0.36);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * mix(vec3(0.68, 0.84, 0.98), vec3(0.96, 1.01, 1.06), iceCrev), isIce * 0.46);

            float depVis = pow(clamp(localDepNorm, 0.0, 1.25), 0.78);
            float sootCover = clamp(depVis * 0.22 * uDepBoost * (0.20 + 0.80 * isCryo), 0.0, 0.72);
            float impurityEnrich = mix(0.85, 1.35, isIce) * (0.80 + 0.40 * fbm(vObjPos.xz * 3.2));
            sootCover = clamp(sootCover * impurityEnrich, 0.0, 0.74);
            sootCover *= (1.0 - freshSnow * 0.90);

            vec3 sootTint = mix(vec3(0.18, 0.17, 0.16), vec3(0.07, 0.07, 0.08), isIce);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.46 + sootTint * 0.54, sootCover * isCryo);
            diffuseColor.rgb *= (1.0 - sootCover * 0.08 * (1.0 - isCryo));

            // Rain wets rock & moraines darker
            diffuseColor.rgb *= (1.0 - wetSurface * 0.30 * (1.0 - isSnow));

            // Crisp fresh alpine snow blanket across moraines, gullies, rock ledges & glacier
            vec3 freshSnowCol = vec3(0.82, 0.88, 0.95) * (0.88 + 0.15 * sastrugi + 0.07 * grain);
            diffuseColor.rgb = mix(diffuseColor.rgb, freshSnowCol, freshSnow * 0.94);

            // Proglacial Lac Sunwapta glacial rock-flour turquoise base + pale silt shoreline
            if (isLake > 0.01) {
              float shore = smoothstep(0.22, 0.42, water) * (1.0 - smoothstep(0.45, 0.70, water));
              vec3 flourBase = mix(vec3(0.014, 0.042, 0.072), vec3(0.032, 0.195, 0.215), uDaylight);
              flourBase = mix(flourBase, vec3(0.14, 0.26, 0.27), shore * 0.45 * uDaylight);
              diffuseColor.rgb = mix(diffuseColor.rgb, flourBase, isLake);
            }

            // Apply moving cloud shadows across terrain
            diffuseColor.rgb *= cloudShadow;
          } else if (uMode < 1.5) {
            // Mode 1: Cumulative FireWork carbon deposition (EC+POM+SOM, mg m-2)
            float luma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 hm = depHeatmap(clamp(localDepNorm * 0.95, 0.0, 1.0));
            vec3 rockBase = diffuseColor.rgb * 0.35;
            diffuseColor.rgb = mix(rockBase, hm * (0.65 + 0.55 * sqrt(max(luma, 0.01))), mix(0.28, 0.94, isCryo));
          } else if (uMode < 2.5) {
            // Mode 2: Glacier / Snow / Lake classification (NDSI + albedo)
            vec3 rockCol = mix(vec3(0.030, 0.036, 0.040), vec3(0.160, 0.125, 0.095), clamp(visAlb * 3.0, 0.0, 1.0));
            vec3 iceCol = mix(vec3(0.028, 0.165, 0.440), vec3(0.145, 0.440, 0.760), clamp(visAlb * 1.7, 0.0, 1.0));
            vec3 snowCol = vec3(0.60, 0.67, 0.76) * microShade;
            vec3 col = mix(rockCol, mix(iceCol, snowCol, smoothstep(0.38, 0.58, visAlb)), isCryo);
            col = mix(col, vec3(0.015, 0.38, 0.42), smoothstep(0.25, 0.65, water));
            diffuseColor.rgb = col;
          } else {
            // Mode 3: Sculpted geomorphological relief model
            diffuseColor.rgb = mix(vec3(0.26, 0.29, 0.34), vec3(0.58, 0.63, 0.70), elevT) * microShade * cloudShadow;
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
          float rVal = 0.88;
          rVal = mix(rVal, 0.62, isSnow);
          rVal = mix(rVal, 0.28, isIce);
          rVal = mix(rVal, 0.58, freshSnow * 0.75);
          rVal = mix(rVal, 0.06, isLake);
          rVal = mix(rVal, 0.85, clamp(uDepCumFrac * 0.32 * isCryo, 0.0, 0.5));
          rVal = mix(rVal, 0.16, wetSurface * 0.75);
          roughnessFactor = rVal;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          // Real-time analytical world-space micro-normal bump mapping (limestone ledges, glacier ogives, wind sastrugi & animated lake waves!)
          if (uMode < 0.5 || uMode > 2.5) {
            float camD = length(vObjPos - cameraPosition);
            float bumpDistFade = 1.0 - smoothstep(7.0, 24.0, camD);
            float eps = 0.015;
            float h0 = terrainMicroHeight(vObjPos.xz, elevM, isCryo, isSnow, isIce, freshSnow, isLake);
            float hX = terrainMicroHeight(vObjPos.xz + vec2(eps, 0.0), elevM, isCryo, isSnow, isIce, freshSnow, isLake);
            float hZ = terrainMicroHeight(vObjPos.xz + vec2(0.0, eps), elevM, isCryo, isSnow, isIce, freshSnow, isLake);
            float bumpStrength = mix(0.46, 0.24, isCryo) * (0.40 + 0.60 * bumpDistFade);
            bumpStrength = mix(bumpStrength, 0.32, isLake);
            vec3 gWorld = vec3((hX - h0) / eps, 0.0, (hZ - h0) / eps) * bumpStrength * 0.014;
            gWorld = clamp(gWorld, vec3(-0.65), vec3(0.65));
            vec3 gView = (viewMatrix * vec4(gWorld, 0.0)).xyz;
            normal = normalize(normal - gView);
          }`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
          // 16-Azimuth Horizon Sky-View Ambient Occlusion + crisp alpine blue indirect sky bounce in shadow!
          float aoWeight = mix(0.46, 1.08, pow(clamp(svfAo, 0.0, 1.0), 1.15));
          vec3 alpineShadowBounce = mix(vec3(0.76, 0.88, 1.12), vec3(1.0), clamp(svfAo, 0.0, 1.0));
          reflectedLight.indirectDiffuse *= aoWeight * mix(vec3(1.0), alpineShadowBounce, uDaylight * 0.65);
          reflectedLight.indirectSpecular *= aoWeight;

          if (uMode < 0.5) {
            vec3 viewW = normalize(cameraPosition - vObjPos);
            vec3 sDirW = normalize(uSunDir);
            // Translucent glacial-ice & snow-crest subsurface scattering (SSS)
            float wrapNdl = clamp(dot(vec3(0.0, 1.0, 0.0), sDirW) * 0.5 + 0.5, 0.0, 1.0);
            float backLit = pow(max(dot(-viewW, sDirW), 0.0), 3.0) * 0.55 + 0.45 * wrapNdl;
            float ridgeCrest = smoothstep(0.50, 0.82, topoCurv);
            vec3 iceSSS = vec3(0.05, 0.24, 0.36) * isIce * (1.0 - freshSnow * 0.8) * backLit * uDaylight * cloudShadow * 0.55;
            vec3 snowSSS = vec3(0.16, 0.26, 0.36) * max(isSnow, freshSnow) * ridgeCrest * backLit * uDaylight * cloudShadow * 0.30;
            reflectedLight.directDiffuse += (iceSSS + snowSSS);

            // Crisp micro-sparkle on sunlit fresh alpine snow crystals (close/mid camera view)
            if (freshSnow > 0.20 && uDaylight > 0.25) {
              float spCell = hash21(floor(vObjPos.xz * 260.0 + viewW.xz * 12.0));
              float sparkle = smoothstep(0.986, 0.999, spCell) * freshSnow * uDaylight * cloudShadow * (1.0 - smoothstep(2.5, 11.0, length(vObjPos - cameraPosition)));
              reflectedLight.directSpecular += vec3(1.4, 1.35, 1.25) * sparkle * 0.65;
            }

            // Live sky + smoke Fresnel mirror reflection & solar shimmer on proglacial Lac Sunwapta!
            if (isLake > 0.02) {
              vec2 w1 = vObjPos.xz * 24.0 - uWindDir * uTime * 1.1;
              vec2 w2 = vObjPos.xz * 44.0 + vec2(uWindDir.y, -uWindDir.x) * uTime * 0.8;
              float rx = (vnoise(w1) - 0.5) * 0.26 + (vnoise(w2) - 0.5) * 0.16;
              float rz = (vnoise(w1 + 9.1) - 0.5) * 0.26 + (vnoise(w2 + 4.3) - 0.5) * 0.16;
              vec3 nW = normalize(vec3(rx, 1.0, rz));
              float fres = pow(1.0 - max(dot(viewW, nW), 0.0), 3.6);
              vec3 reflSkyDay = mix(vec3(0.24, 0.44, 0.72), vec3(0.46, 0.39, 0.30), clamp(uSmokeHaze * 0.75, 0.0, 1.0));
              reflSkyDay = mix(reflSkyDay, vec3(0.90, 0.42, 0.16), uTwilight * 0.55);
              vec3 reflCol = mix(vec3(0.008, 0.016, 0.036), reflSkyDay, uDaylight);
              vec3 hVec = normalize(viewW + sDirW);
              float glint = pow(max(dot(nW, hVec), 0.0), 140.0) * uDaylight * cloudShadow * 2.2;
              vec3 sunGlintCol = mix(vec3(1.2, 1.02, 0.62), vec3(1.3, 0.52, 0.15), clamp(uSmokeHaze * 0.7 + uTwilight * 0.6, 0.0, 1.0));
              reflectedLight.indirectSpecular = mix(reflectedLight.indirectSpecular, reflCol * (0.22 + 0.78 * fres), isLake);
              reflectedLight.directSpecular += sunGlintCol * glint * isLake;
            }
          }`).replace("#include <tonemapping_fragment>",`// Unified Linear-Space Physical Rayleigh Aerial Perspective + 8-Step True 3D Volumetric Ray-Marched Wildfire Smoke!
          // ZERO flat sheets, ZERO popping — continuous 3D animated valley plumes wrapping around every cliff & glacier ridge!
          if (uMode < 0.5) {
            vec3 rayVec = vObjPos - cameraPosition;
            float rayLen = length(rayVec);
            vec3 rayDir = rayVec / max(rayLen, 0.001);
            vec3 sDir = normalize(uSunDir);

            // 1. Subtle crisp clear-air alpine Rayleigh aerial perspective (depth cue even on pure blue-sky days!)
            float rayleighT = clamp((1.0 - exp(-rayLen * 0.015)) * 0.48, 0.0, 0.48);
            vec3 rayleighDay = mix(vec3(0.26, 0.45, 0.74), vec3(0.28, 0.34, 0.42), uCloudShadowAmt * 0.70);
            rayleighDay = mix(rayleighDay, vec3(0.68, 0.36, 0.16), uTwilight * 0.42);
            vec3 rayleighCol = mix(vec3(0.006, 0.012, 0.028), rayleighDay, uDaylight);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, rayleighCol, rayleighT);

            // 2. True 8-Step 3D Volumetric Ray-Marched Wildfire Smoke (calibrated directly against real Columbia Icefield webcam!)
            // Moderate smoke = luminous milky pearlescent silver-cream veil; heavy plume (>0.55) = warm golden-amber copper!
            if (uSmokeHaze > 0.015) {
              float yTop = 2.95 * uExag;
              float y0 = cameraPosition.y;
              float y1 = vObjPos.y;
              float tEnter = 0.0;
              float tExit = rayLen;
              bool hitVol = true;
              if (y0 > yTop && y1 >= yTop) {
                hitVol = false;
              } else if (y0 > yTop && y1 < yTop) {
                tEnter = rayLen * clamp((y0 - yTop) / max(y0 - y1, 0.001), 0.0, 1.0);
              } else if (y0 < yTop && y1 > yTop) {
                tExit = rayLen * clamp((yTop - y0) / max(y1 - y0, 0.001), 0.0, 1.0);
              }

              if (hitVol && tExit > tEnter + 0.02) {
                float segLen = tExit - tEnter;
                float stepLen = segLen / 8.0;
                float H = 1.12 * uExag;
                float extBase = 0.080 + 0.62 * pow(uSmokeHaze, 0.86);
                float cosT = dot(rayDir, sDir);
                float g = 0.62;
                float hg = (1.0 - g * g) / pow(max(0.22, 1.0 + g * g - 2.0 * g * cosT), 1.5);
                float sunGlow = clamp((hg - 0.32) * 0.24, 0.0, 0.72);
                float heavyS = smoothstep(0.48, 0.92, uSmokeHaze);

                vec3 smokePearl = vec3(0.49, 0.51, 0.52);
                vec3 smokeCream = vec3(0.62, 0.55, 0.44);
                vec3 smokeAmber = vec3(0.68, 0.37, 0.14);
                vec3 baseInscatter = mix(smokePearl, smokeCream, clamp(0.22 + 0.52 * sunGlow + 0.42 * uSmokeHaze, 0.0, 1.0));
                baseInscatter = mix(baseInscatter, smokeAmber, heavyS * 0.78);
                baseInscatter *= (1.0 - uCloudShadowAmt * 0.18);
                vec3 nightInscatter = vec3(0.009, 0.011, 0.016);

                float trans = 1.0;
                vec3 accumLight = vec3(0.0);
                vec2 windDrift = uWindDir * uTime * 0.042;
                for (int i = 0; i < 8; i++) {
                  float t = tEnter + (float(i) + 0.5) * stepLen;
                  vec3 p = cameraPosition + rayDir * t;
                  float hAbove = max(0.0, p.y - 0.04 * uExag);
                  float strat = exp(-hAbove / H);
                  vec2 nUv = p.xz * 0.24 - windDrift + vec2(p.y * 0.34, -p.y * 0.26);
                  float wisp = 0.68 + 0.50 * fbm2(nUv);
                  float sigma = extBase * strat * wisp;
                  float stepT = exp(-sigma * stepLen);
                  float altLit = clamp(0.84 + 0.26 * (hAbove / max(yTop, 0.1)), 0.80, 1.12);
                  vec3 stepCol = mix(nightInscatter, baseInscatter * altLit, uDaylight);
                  accumLight += trans * (1.0 - stepT) * stepCol;
                  trans *= stepT;
                }
                float fadeIn = smoothstep(0.015, 0.15, uSmokeHaze);
                float blendTrans = mix(1.0, max(trans, 0.10), fadeIn);
                gl_FragColor.rgb = gl_FragColor.rgb * blendTrans + accumLight * fadeIn;
              }
            }
          }
          #include <tonemapping_fragment>`)},this.terrainMesh=new wt(f,m),this.terrainMesh.castShadow=!0,this.terrainMesh.receiveShadow=!0,this.scene.add(this.terrainMesh),this._buildCutawaySkirt()}_buildCutawaySkirt(){const e=this.G,t=this.sizeX,n=this.sizeY,s=-this.skirtDepth,r=[],o=[],a=[],l=[];let c=0;const u=(p,h,T,b)=>{const S=c;for(let w=0;w<e;w++){const A=p(w);r.push(A.x,A.y0*this.state.exag,A.z),o.push(h,T,b),a.push(A.y0),r.push(A.x,s,A.z),o.push(h,T,b),a.push(-1),c+=2}for(let w=0;w<e-1;w++){const A=S+w*2,C=A+1,F=A+2,y=A+3;l.push(A,C,y,A,y,F)}};u(p=>({x:(p/(e-1)-.5)*t,z:-n*.5,y0:this.demZ[p]}),0,0,-1),u(p=>({x:t*.5,z:(p/(e-1)-.5)*n,y0:this.demZ[p*e+(e-1)]}),1,0,0),u(p=>{const h=e-1-p;return{x:(h/(e-1)-.5)*t,z:n*.5,y0:this.demZ[(e-1)*e+h]}},0,0,1),u(p=>{const h=e-1-p;return{x:-t*.5,z:(h/(e-1)-.5)*n,y0:this.demZ[h*e]}},-1,0,0);const d=c,f=t*.5,m=n*.5;r.push(-f,s,-m,f,s,-m,f,s,m,-f,s,m);for(let p=0;p<4;p++)o.push(0,-1,0),a.push(-1);l.push(d,d+1,d+2,d,d+2,d+3);const g=new Nt;g.setAttribute("position",new tn(r,3)),g.setAttribute("normal",new tn(o,3)),g.setIndex(l),this.skirtGeo=g,this.skirtBaseRim=new Float32Array(a);const x=new Lr({color:1186084,roughness:.88,metalness:.08,side:$t});this.skirtMesh=new wt(g,x),this.skirtMesh.castShadow=!0,this.skirtMesh.receiveShadow=!0,this.scene.add(this.skirtMesh)}_buildSurroundingRockies(e){if(this.ringMesh=null,this.ringGeo=null,!e||!this.meta.ring)return;const t=this.meta.ring.grid,n=this.meta.ring.sizeKm,s=this.meta.ring.zMinM,r=this.meta.ring.zMaxM,o=Math.max(r-s,1),a=this.meta.zMinM,l=t*t,c=new Float32Array(l*3),u=new Float32Array(l*2),d=new Float32Array(l);for(let p=0;p<t;p++){const h=p/(t-1),T=(h-.5)*n,b=1-h;for(let S=0;S<t;S++){const w=S/(t-1),A=(w-.5)*n,C=p*t+S,y=(s+e[C]/65535*o-a)/1e3;d[C]=y,c[C*3+0]=A,c[C*3+1]=y*this.state.exag,c[C*3+2]=T,u[C*2+0]=w,u[C*2+1]=b}}const f=this.sizeX*.5-.08,m=[];for(let p=0;p<t-1;p++){const h=(p/(t-1)-.5)*n,T=((p+1)/(t-1)-.5)*n;for(let b=0;b<t-1;b++){const S=(b/(t-1)-.5)*n,w=((b+1)/(t-1)-.5)*n;if(Math.abs(S)<f&&Math.abs(w)<f&&Math.abs(h)<f&&Math.abs(T)<f)continue;const A=p*t+b,C=A+1,F=A+t,y=F+1;m.push(A,F,y,A,y,C)}}const g=new Nt;g.setAttribute("position",new dt(c,3)),g.setAttribute("uv",new dt(u,2)),g.setAttribute("aBaseElev",new dt(d,1)),g.setIndex(m),g.computeVertexNormals(),this.ringGeo=g,this.ringUniforms={uRingAoTex:{value:this.ringAoTex},uSunDir:{value:this._sunDir.clone()},uTime:{value:0},uWindDir:{value:new Te(.85,-.52)},uCloudShadowAmt:{value:.3},uSmokeHaze:{value:0},uDaylight:{value:.9},uTwilight:{value:0},uSnowPackMm:{value:0},uSnowLineM:{value:3480},uZMinM:{value:this.meta.zMinM},uExag:{value:this.state.exag},uHalfInner:{value:this.sizeX*.5-.025},uHalfOuter:{value:n*.5},uRingAlpha:{value:0}};const x=new zt({transparent:!0,depthWrite:!0,uniforms:this.ringUniforms,vertexShader:`
        attribute float aBaseElev;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec2 vRingUv;
        varying float vElevM;
        uniform float uZMinM;
        void main() {
          vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
          vNormal = normalize(normal);
          vRingUv = uv;
          vElevM = uZMinM + aBaseElev * 1000.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorldPos, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform sampler2D uRingAoTex;
        uniform vec3 uSunDir;
        uniform float uTime;
        uniform vec2 uWindDir;
        uniform float uCloudShadowAmt;
        uniform float uSmokeHaze;
        uniform float uDaylight;
        uniform float uTwilight;
        uniform float uSnowPackMm;
        uniform float uSnowLineM;
        uniform float uExag;
        uniform float uHalfInner;
        uniform float uHalfOuter;
        uniform float uRingAlpha;
        varying vec3 vWorldPos;
        varying vec3 vNormal;
        varying vec2 vRingUv;
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
        float fbm2(vec2 p) {
          return 0.65 * vnoise(p) + 0.35 * vnoise(p * 2.13 + vec2(5.7, 9.2));
        }

        void main() {
          if (uRingAlpha < 0.02) discard;
          float inBox = max(abs(vWorldPos.x), abs(vWorldPos.z));
          if (inBox < uHalfInner) discard;
          float outerFade = 1.0 - smoothstep(uHalfOuter * 0.70, uHalfOuter * 0.99, length(vWorldPos.xz));
          if (outerFade < 0.01) discard;

          vec3 aoMap = texture2D(uRingAoTex, vRingUv).rgb;
          float svfAo = aoMap.r;
          float topoCurv = aoMap.g;
          float warmAspect = aoMap.b;

          vec3 N = normalize(vNormal);
          float slopeUp = clamp(N.y, 0.0, 1.0);
          float n = fbm(vWorldPos.xz * 0.85);
          float strata = sin(vElevM * 0.09 + n * 4.2) * 0.14 * (1.0 - slopeUp);

          // Linear-space Rockies slate-limestone palette matching the central Sentinel-2 block identically
          vec3 forest = mix(vec3(0.016, 0.036, 0.020), vec3(0.032, 0.056, 0.030), n);
          float cragF = fbm2(vWorldPos.xz * 6.5);
          vec3 rock = mix(vec3(0.048, 0.052, 0.058), vec3(0.155, 0.160, 0.168), clamp(n * 0.65 + cragF * 0.35 + strata, 0.0, 1.0));
          vec3 alpineSnow = vec3(0.60, 0.68, 0.78);

          float treeLine = smoothstep(1920.0, 2220.0, vElevM + (n - 0.5) * 180.0 - (warmAspect - 0.5) * 120.0);
          vec3 baseCol = mix(forest, rock, treeLine);
          float aspectBias = (warmAspect - 0.5) * 180.0;
          float gullyBias = (topoCurv - 0.5) * 140.0;
          float permSnow = smoothstep(2580.0, 2920.0, vElevM - aspectBias - gullyBias + (n - 0.5) * 200.0) * smoothstep(0.34, 0.72, slopeUp + (0.5 - topoCurv) * 0.20);
          baseCol = mix(baseCol, alpineSnow, permSnow * 0.88);

          // Synchronized aspect-aware fresh snow whitening!
          float packCover = 1.0 - exp(-max(uSnowPackMm, 0.0) / 2.6);
          float freshMask = packCover * smoothstep(uSnowLineM - 120.0, uSnowLineM + 160.0, vElevM - aspectBias - gullyBias + (n - 0.5) * 130.0) * smoothstep(0.28, 0.68, slopeUp + 0.16 * n);
          baseCol = mix(baseCol, vec3(0.66, 0.74, 0.84), clamp(freshMask * 0.92, 0.0, 0.92));

          // Direct sun + 16-azimuth SVF AO + alpine blue shadow bounce + moving cloud shadows!
          vec3 sDir = normalize(uSunDir);
          float ndl = max(dot(N, sDir), 0.0);
          float cloudSh = 1.0;
          if (uCloudShadowAmt > 0.08 && uDaylight > 0.08) {
            vec2 shP = vWorldPos.xz + sDir.xz * ((3.5 - vWorldPos.y) / max(sDir.y, 0.24));
            float cn = fbm(shP * 0.25 - uWindDir * uTime * 0.062);
            cloudSh = 1.0 - smoothstep(0.66 - uCloudShadowAmt * 0.42, 0.84, cn) * uCloudShadowAmt * 0.45 * uDaylight;
          }
          float aoWeight = mix(0.45, 1.06, pow(clamp(svfAo, 0.0, 1.0), 1.15));
          vec3 sunTint = mix(vec3(0.14, 0.24, 0.48), mix(vec3(1.06, 0.96, 0.78), vec3(1.18, 0.54, 0.20), uTwilight * 0.65), uDaylight);
          vec3 ambCol = mix(vec3(0.015, 0.028, 0.065), vec3(0.26, 0.38, 0.54), uDaylight) * aoWeight;
          vec3 col = baseCol * (ambCol + sunTint * ndl * (0.20 + 0.94 * uDaylight) * cloudSh);

          // Exact same Rayleigh aerial perspective + 8-step 3D volumetric ray-marched smoke as terrainMesh!
          vec3 rayVec = vWorldPos - cameraPosition;
          float rayLen = length(rayVec);
          vec3 rayDir = rayVec / max(rayLen, 0.001);

          float rayleighT = clamp((1.0 - exp(-rayLen * 0.024)) * 0.68, 0.0, 0.72);
          vec3 rayleighDay = mix(vec3(0.28, 0.48, 0.76), vec3(0.29, 0.35, 0.43), uCloudShadowAmt * 0.72);
          rayleighDay = mix(rayleighDay, vec3(0.74, 0.38, 0.16), uTwilight * 0.45);
          col = mix(col, mix(vec3(0.006, 0.012, 0.028), rayleighDay, uDaylight), rayleighT);

          if (uSmokeHaze > 0.015) {
            float yTop = 2.95 * uExag;
            float y0 = cameraPosition.y;
            float y1 = vWorldPos.y;
            float tEnter = 0.0;
            float tExit = rayLen;
            bool hitVol = true;
            if (y0 > yTop && y1 >= yTop) {
              hitVol = false;
            } else if (y0 > yTop && y1 < yTop) {
              tEnter = rayLen * clamp((y0 - yTop) / max(y0 - y1, 0.001), 0.0, 1.0);
            } else if (y0 < yTop && y1 > yTop) {
              tExit = rayLen * clamp((yTop - y0) / max(y1 - y0, 0.001), 0.0, 1.0);
            }
            if (hitVol && tExit > tEnter + 0.02) {
              float segLen = min(tExit - tEnter, 24.0);
              float stepLen = segLen / 8.0;
              float H = 1.12 * uExag;
              float extBase = 0.080 + 0.62 * pow(uSmokeHaze, 0.86);
              float cosT = dot(rayDir, sDir);
              float g = 0.62;
              float hg = (1.0 - g * g) / pow(max(0.22, 1.0 + g * g - 2.0 * g * cosT), 1.5);
              float sunGlow = clamp((hg - 0.32) * 0.24, 0.0, 0.72);
              float heavyS = smoothstep(0.48, 0.92, uSmokeHaze);

              vec3 smokePearl = vec3(0.49, 0.51, 0.52);
              vec3 smokeCream = vec3(0.62, 0.55, 0.44);
              vec3 smokeAmber = vec3(0.68, 0.37, 0.14);
              vec3 baseInscatter = mix(smokePearl, smokeCream, clamp(0.22 + 0.52 * sunGlow + 0.42 * uSmokeHaze, 0.0, 1.0));
              baseInscatter = mix(baseInscatter, smokeAmber, heavyS * 0.78);
              baseInscatter *= (1.0 - uCloudShadowAmt * 0.18);
              vec3 nightInscatter = vec3(0.009, 0.011, 0.016);

              float trans = 1.0;
              vec3 accumLight = vec3(0.0);
              vec2 windDrift = uWindDir * uTime * 0.042;
              for (int i = 0; i < 8; i++) {
                float t = tEnter + (float(i) + 0.5) * stepLen;
                vec3 p = cameraPosition + rayDir * t;
                float hAbove = max(0.0, p.y - 0.04 * uExag);
                float strat = exp(-hAbove / H);
                vec2 nUv = p.xz * 0.24 - windDrift + vec2(p.y * 0.34, -p.y * 0.26);
                float wisp = 0.68 + 0.50 * fbm2(nUv);
                float sigma = extBase * strat * wisp;
                float stepT = exp(-sigma * stepLen);
                float altLit = clamp(0.84 + 0.26 * (hAbove / max(yTop, 0.1)), 0.80, 1.12);
                vec3 stepCol = mix(nightInscatter, baseInscatter * altLit, uDaylight);
                accumLight += trans * (1.0 - stepT) * stepCol;
                trans *= stepT;
              }
              float fadeIn = smoothstep(0.015, 0.15, uSmokeHaze);
              float blendTrans = mix(1.0, max(trans, 0.08), fadeIn);
              col = col * blendTrans + accumLight * fadeIn;
            }
          }

          gl_FragColor = vec4(col, outerFade * uRingAlpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.ringMesh=new wt(g,x),this.ringMesh.frustumCulled=!1,this.ringMesh.visible=!1,this.scene.add(this.ringMesh)}_buildCloudDeck(){this.cloudGroup=new ii,this.cloudUniforms={uTime:{value:0},uCloudCover:{value:.4},uCloudLow:{value:.3},uCloudMid:{value:.3},uStormIntensity:{value:0},uWindDir:{value:new Te(.85,-.52)},uWindSpeed:{value:5},uSunDir:{value:this._sunDir.clone()},uSunPower:{value:.5},uDaylight:{value:.8},uTwilight:{value:0},uSmoke:{value:.2},uExag:{value:this.state.exag},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new Te(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex}};const e=16,t=6,n=e*t,s=new An(1,1,1,1),r=new Ir;r.index=s.index,r.attributes.position=s.attributes.position,r.attributes.uv=s.attributes.uv;const o=new Float32Array(n*3),a=new Float32Array(n*4),l=new Float32Array(n*2);for(let u=0;u<e;u++){const d=u>=8?1:0,f=d>.5?u-8:u,m=8,g=Math.sqrt((f+.45)/m),x=f*2.3999632+d*1.1+(Math.random()-.5)*.4,p=d>.5?.68:.54,h=Math.cos(x)*g*this.sizeX*p,T=Math.sin(x)*g*this.sizeY*p,b=d>.5?3.55+Math.random()*.85:.6+Math.random()*.85,S=(f+.5)/m,w=.78+Math.random()*.42;for(let A=0;A<t;A++){const C=u*t+A,F=A===0,y=A/(t-1)*Math.PI*2+Math.random()*.6,M=F?0:(.75+Math.random()*1.15)*(d>.5?1.25:.92);o[C*3+0]=h+Math.cos(y)*M,o[C*3+1]=b+(F?.28:(Math.random()-.42)*.38),o[C*3+2]=T+Math.sin(y)*M;const D=d>.5?F?5.2:3.4+Math.random()*2.2:F?3.8:2.3+Math.random()*1.7,B=d>.5?F?2:1.3+Math.random()*.7:F?1.75:1.1+Math.random()*.65;a[C*4+0]=D,a[C*4+1]=B,a[C*4+2]=Math.max(.04,Math.min(.98,S+(A-2.5)*.025)),a[C*4+3]=d,l[C*2+0]=Math.random()*53,l[C*2+1]=w}}r.setAttribute("aOrigin",new Zn(o,3)),r.setAttribute("aCloudAttr",new Zn(a,4)),r.setAttribute("aSeed",new Zn(l,2)),r.instanceCount=n;const c=new zt({transparent:!0,depthWrite:!1,side:$t,uniforms:this.cloudUniforms,vertexShader:`
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
        varying float vGroundY;
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
          float vis = smoothstep(rank - 0.18, rank + 0.14, cover * 1.12);
          if (vis < 0.01) {
            vOpacity = 0.0;
            vGroundY = 0.0;
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            return;
          }

          float domain = isMid > 0.5 ? 18.0 : 14.5;
          vec2 drift = uWindDir * uTime * (0.09 + 0.03 * uWindSpeed) * aSeed.y * (isMid > 0.5 ? 1.25 : 0.85);
          vec2 cxz = mod(aOrigin.xz + drift + domain * 0.5, domain) - domain * 0.5;

          vec2 demUv = clamp(cxz / uSizeXZ + 0.5, 0.002, 0.998);
          float groundY = texture2D(uDemTex, demUv).r * uZRangeKm * uExag;

          float exagOff = max(0.0, (uExag - 1.3) * 1.35);
          float cy = isMid > 0.5
            ? (aOrigin.y + 0.35 - uStormIntensity * 0.65 + exagOff)
            : max(groundY + 0.95, groundY + aOrigin.y + 0.58 - uStormIntensity * 0.25);

          vec3 center = vec3(cxz.x, cy, cxz.y);
          vCenter = center;

          vec3 viewDir = normalize(cameraPosition - center);
          vec3 worldUp = vec3(0.0, 1.0, 0.0);
          vec3 right = normalize(cross(worldUp, viewDir));
          vec3 up = normalize(mix(worldUp, cross(viewDir, right), 0.55));

          float puffGrow = 0.84 + 0.34 * cover + 0.20 * uStormIntensity;
          vec3 wp = center + right * (position.x * aCloudAttr.x * puffGrow) + up * (position.y * aCloudAttr.y * puffGrow);
          vWorldPos = wp;

          vec2 vDemUv = clamp(wp.xz / uSizeXZ + 0.5, 0.002, 0.998);
          vGroundY = texture2D(uDemTex, vDemUv).r * uZRangeKm * uExag;

          float camDist = length(center - cameraPosition);
          float nearFade = smoothstep(0.65, 2.1, camDist);
          float edgeDom = 1.0 - smoothstep(domain * 0.34, domain * 0.52, max(abs(cxz.x), abs(cxz.y)));
          vOpacity = vis * nearFade * edgeDom * (0.34 + 0.30 * cover);
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
        varying float vGroundY;
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
          // Soft terrain-proximity fade so low orographic clouds wrap organically around mountain peaks without hard clipping!
          float peakSoft = smoothstep(-0.08, 0.52, vWorldPos.y - vGroundY);
          if (peakSoft < 0.01) discard;

          vec2 p = vUv * 2.0 - 1.0;
          float baseFlat = p.y < 0.0 ? p.y * 1.52 : p.y * 0.90;
          float radial = length(vec2(p.x * 0.94, baseFlat));
          if (radial > 1.05) discard;

          vec2 q = vUv * 3.2 + vec2(vSeed, vSeed * 0.37) + vec2(uTime * 0.022, 0.0);
          float n = fbm(q + 0.48 * vec2(fbm(q + 2.1), fbm(q + 6.4)));
          float shape = (1.0 - smoothstep(0.16, 0.98, radial)) * smoothstep(0.24, 0.78, n + (1.0 - radial) * 0.44);
          float alpha = shape * vOpacity * peakSoft;
          if (alpha < 0.005) discard;

          // Directional sunlighting across cloud lobe + powder-effect backlit silver lining!
          vec3 sDir = normalize(uSunDir);
          vec3 lobeDir = normalize(vWorldPos - vCenter + vec3(0.0, 0.25, 0.0));
          float sunSide = clamp(dot(lobeDir, sDir) * 0.5 + 0.5, 0.0, 1.0);
          float heightShade = clamp(vUv.y * 0.95 + sunSide * 0.32 - 0.15 + (n - 0.5) * 0.30, 0.0, 1.0);
          vec3 rayDir = normalize(vWorldPos - cameraPosition);
          float fwdMie = pow(max(dot(rayDir, sDir), 0.0), 6.0) * (1.0 - shape * 0.50) * uDaylight;

          // Keep water clouds crisp alpine white / silver-blue-slate (NEVER muddy brown) so they separate cleanly from valley wildfire smoke!
          vec3 fairTop = mix(vec3(0.96, 0.98, 1.00), vec3(1.00, 0.74, 0.48), uTwilight * 0.62);
          vec3 fairBot = mix(vec3(0.46, 0.55, 0.68), vec3(0.55, 0.42, 0.48), uTwilight * 0.40);
          vec3 stormTop = vec3(0.70, 0.76, 0.84);
          vec3 stormBot = vec3(0.22, 0.28, 0.38);

          vec3 topCol = mix(fairTop, stormTop, clamp(uStormIntensity * 0.80, 0.0, 1.0));
          vec3 botCol = mix(fairBot, stormBot, clamp(uStormIntensity * 0.85, 0.0, 1.0));
          vec3 dayCol = mix(botCol, topCol, heightShade * (0.40 + 0.60 * uSunPower));
          vec3 silverRim = mix(vec3(0.48, 0.54, 0.62), vec3(0.85, 0.52, 0.22), uTwilight * 0.75);
          dayCol += silverRim * fwdMie * 0.78;

          vec3 nightCol = mix(vec3(0.04, 0.07, 0.13), vec3(0.13, 0.18, 0.28), heightShade);
          vec3 col = mix(nightCol, dayCol, uDaylight);

          gl_FragColor = vec4(col, alpha);
        }
      `});this.cloudPuffs=new wt(r,c),this.cloudPuffs.frustumCulled=!1,this.cloudGroup.add(this.cloudPuffs),this.scene.add(this.cloudGroup)}_buildPrecipVolume(){const t=new An(1,1,1,1),n=new Ir;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(96),r=new Float32Array(128);for(let a=0;a<32;a++){const l=Math.sqrt((a+.5)/32),c=a*2.3999632+(Math.random()-.5)*.35;s[a*3+0]=Math.cos(c)*l*this.sizeX*.44,s[a*3+1]=0,s[a*3+2]=Math.sin(c)*l*this.sizeY*.44,r[a*4+0]=2.6+Math.random()*2.2,r[a*4+1]=Math.random()*19.3,r[a*4+2]=.75+Math.random()*.55,r[a*4+3]=Math.random()}n.setAttribute("aOffset",new Zn(s,3)),n.setAttribute("aParam",new Zn(r,4)),n.instanceCount=32,this.virgaUniforms={uTime:{value:0},uIntensity:{value:0},uSunPower:{value:.5},uWindDir:{value:new Te(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uExag:{value:this.state.exag},uSizeXZ:{value:new Te(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCloudTopY:{value:3.4}};const o=new zt({transparent:!0,depthWrite:!1,side:$t,uniforms:this.virgaUniforms,vertexShader:`
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
      `});this.virgaMesh=new wt(n,o),this.virgaMesh.frustumCulled=!1,this.scene.add(this.virgaMesh)}_buildValleyMistAndSpindrift(){this.mistGroup=new ii,this.mistUniforms={uTime:{value:0},uIntensity:{value:0},uSunPower:{value:.5},uWindDir:{value:new Te(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uExag:{value:this.state.exag}};const e=64,t=new Float32Array(e*e*3),n=new Float32Array(e*e),s=new Float32Array(e*e*2);for(let l=0;l<e;l++){const c=l/(e-1),u=(c-.5)*this.sizeY*.98;for(let d=0;d<e;d++){const f=d/(e-1),m=(f-.5)*this.sizeX*.98,g=l*e+d;t[g*3+0]=m,t[g*3+1]=0,t[g*3+2]=u,n[g]=this._sampleDemXZ(m,u),s[g*2+0]=f,s[g*2+1]=c}}const r=[];for(let l=0;l<e-1;l++)for(let c=0;c<e-1;c++){const u=l*e+c,d=u+1,f=u+e,m=f+1;r.push(u,f,m,u,m,d)}const o=new Nt;o.setAttribute("position",new dt(t,3)),o.setAttribute("aDemY0",new dt(n,1)),o.setAttribute("uv",new dt(s,2)),o.setIndex(r),[{heightAbove:.08,alpha:.24,scale:3.6,speed:.28,seed:2.1},{heightAbove:.22,alpha:.2,scale:2.8,speed:.36,seed:6.4},{heightAbove:.42,alpha:.16,scale:2.2,speed:.44,seed:11.7}].forEach(l=>{const c=new zt({transparent:!0,depthWrite:!1,side:$t,uniforms:{...this.mistUniforms,uHeightAbove:{value:l.heightAbove},uLayerAlpha:{value:l.alpha},uScale:{value:l.scale},uSpeed:{value:l.speed},uSeed:{value:l.seed}},vertexShader:`
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
        `});this.mistGroup.add(new wt(o,c))}),this.scene.add(this.mistGroup)}_buildRealisticNearRain(){const t=new An(1,1,1,1),n=new Ir;n.index=t.index,n.attributes.position=t.attributes.position,n.attributes.uv=t.attributes.uv;const s=new Float32Array(6e3*3),r=new Float32Array(6e3*4);for(let a=0;a<6e3;a++)s[a*3+0]=(Math.random()-.5)*3.4,s[a*3+1]=Math.random(),s[a*3+2]=(Math.random()-.5)*3.4,r[a*4+0]=Math.random(),r[a*4+1]=.78+Math.random()*.62,r[a*4+2]=.65+Math.random()*.9,r[a*4+3]=.65+Math.random()*.75;n.setAttribute("aBoxPos",new Zn(s,3)),n.setAttribute("aSeed",new Zn(r,4)),n.instanceCount=6e3,this.rainUniforms={uTime:{value:0},uIntensity:{value:0},uImmersion:{value:0},uExag:{value:this.state.exag},uWindDir:{value:new Te(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new Te(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCamFocus:{value:new N(0,1,0)},uSunPower:{value:.5}};const o=new zt({transparent:!0,depthWrite:!1,side:$t,uniforms:this.rainUniforms,vertexShader:`
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
          float isAct = step(aSeed.x, clamp(uIntensity * 0.95, 0.0, 1.0));
          if (isAct < 0.5 || uImmersion < 0.01 || uIntensity < 0.02) {
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
      `});this.rainLines=new wt(n,o),this.rainLines.frustumCulled=!1,this.scene.add(this.rainLines)}_makeSnowflakeAtlas(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=(r,o,a)=>{t.save(),t.translate(r+32,o+32),a(),t.restore()};n(0,0,()=>{[[0,0,14,.85],[-6,-4,11,.55],[7,-2,10,.52],[-2,7,10,.5],[5,6,9,.45]].forEach(([o,a,l,c])=>{const u=t.createRadialGradient(o,a,.5,o,a,l);u.addColorStop(0,`rgba(255,255,255,${c})`),u.addColorStop(.55,`rgba(232,242,255,${c*.45})`),u.addColorStop(1,"rgba(220,236,255,0)"),t.fillStyle=u,t.beginPath(),t.arc(o,a,l,0,Math.PI*2),t.fill()})}),n(64,0,()=>{const r=t.createRadialGradient(0,0,.5,0,0,14);r.addColorStop(0,"rgba(255,255,255,0.95)"),r.addColorStop(.35,"rgba(240,248,255,0.65)"),r.addColorStop(.75,"rgba(220,235,250,0.14)"),r.addColorStop(1,"rgba(210,230,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,14,0,Math.PI*2),t.fill()}),n(0,64,()=>{const r=t.createRadialGradient(0,0,1,0,0,22);r.addColorStop(0,"rgba(255,255,255,0.85)"),r.addColorStop(.45,"rgba(235,244,255,0.36)"),r.addColorStop(1,"rgba(220,235,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(255,255,255,0.42)",t.lineWidth=2,t.lineCap="round";for(let o=0;o<3;o++)t.beginPath(),t.moveTo(-14,0),t.lineTo(14,0),t.stroke(),t.rotate(Math.PI/3)}),n(64,64,()=>{const r=t.createRadialGradient(0,0,2,0,0,26);r.addColorStop(0,"rgba(250,253,255,0.48)"),r.addColorStop(.5,"rgba(235,244,255,0.28)"),r.addColorStop(.82,"rgba(225,238,252,0.08)"),r.addColorStop(1,"rgba(220,236,250,0)"),t.fillStyle=r,t.beginPath(),t.arc(0,0,26,0,Math.PI*2),t.fill()});const s=new du(e);return s.colorSpace=Vt,s}_buildRealisticSnow(){const s=new Float32Array(31500),r=new Float32Array(10500*4),o=new Float32Array(10500);for(let u=0;u<10500;u++){const d=u<7e3?1:0;s[u*3+0]=d?(Math.random()-.5)*4:(Math.random()-.5)*this.sizeX*.9,s[u*3+1]=Math.random(),s[u*3+2]=d?(Math.random()-.5)*4:(Math.random()-.5)*this.sizeY*.9,r[u*4+0]=Math.random(),r[u*4+1]=.45+Math.random()*.85,r[u*4+2]=.45+Math.pow(Math.random(),2.2)*1.45,r[u*4+3]=d,o[u]=Math.floor(Math.random()*4)+Math.random()*.99}const a=new Nt;a.setAttribute("position",new dt(s,3)),a.setAttribute("aSeed",new dt(r,4)),a.setAttribute("aVariant",new dt(o,1));const l=this._makeSnowflakeAtlas();this.snowUniforms={uTime:{value:0},uIntensity:{value:0},uImmersion:{value:0},uMidVisible:{value:0},uExag:{value:this.state.exag},uWindDir:{value:new Te(.85,-.52)},uWindSpeed:{value:5},uRainSnowM:{value:this.state.rainSnowM},uZMinM:{value:this.meta.zMinM},uZRangeKm:{value:this.zRangeKm},uSizeXZ:{value:new Te(this.sizeX,this.sizeY)},uDemTex:{value:this.demTex},uCamFocus:{value:new N(0,1.2,0)},uSunPower:{value:.5},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)},uFlakeTex:{value:l}};const c=new zt({transparent:!0,depthWrite:!1,uniforms:this.snowUniforms,vertexShader:`
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
          float isAct = step(aSeed.x, clamp(uIntensity * 0.96, 0.0, 1.0));
          float isNear = aSeed.w;
          float scaleGate = isNear > 0.5 ? uImmersion : uMidVisible;
          if (isAct < 0.5 || scaleGate < 0.01 || uIntensity < 0.02) {
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
      `});this.snowPoints=new hu(a,c),this.snowPoints.frustumCulled=!1,this.scene.add(this.snowPoints)}_initCameraPresets(){const e=this._sampleDemXZ(1.15,-1.45),t=this._sampleDemXZ(2.82,-3.45);this.presets={block:{pos:new N(9.4,8.5,-10.3),target:new N(0,.55,.15),fov:38},webcam:{pos:new N(2.82,t*1.3+.16,-3.45),target:new N(.85,t*1.3+.54,-.25),fov:54},onglacier:{pos:new N(1.15,e*1.3+.22,-1.45),target:new N(-1.35,e*1.3+.72,1.25),fov:50},flyover:{pos:new N(3.6,2.35,-5.2),target:new N(-.6,1.05,.8),fov:44},plateau:{pos:new N(-8.2,7.6,8.8),target:new N(-.6,1.05,.2),fov:38},top:{pos:new N(.05,17.5,-.8),target:new N(0,.4,0),fov:38}}}setExaggeration(e){this.state.exag=e;const t=this.terrainGeo.attributes.position,n=this.terrainGeo.attributes.aBaseElev;for(let a=0;a<t.count;a++)t.setY(a,n.getX(a)*e);t.needsUpdate=!0,this.terrainGeo.computeVertexNormals();const s=this.skirtGeo.attributes.position;for(let a=0;a<s.count;a++){const l=this.skirtBaseRim[a];l>=0&&s.setY(a,l*e)}if(s.needsUpdate=!0,this.terrainUniforms.uExag.value=e,this.cloudUniforms.uExag.value=e,this.virgaUniforms.uExag.value=e,this.mistUniforms.uExag.value=e,this.rainUniforms.uExag.value=e,this.snowUniforms.uExag.value=e,this.ringGeo){const a=this.ringGeo.attributes.position,l=this.ringGeo.attributes.aBaseElev;for(let c=0;c<a.count;c++)a.setY(c,l.getX(c)*e);a.needsUpdate=!0,this.ringGeo.computeVertexNormals(),this.ringUniforms.uExag.value=e}this._syncCloudCeiling();const r=this._sampleDemXZ(1.15,-1.45);this.presets.onglacier.pos.y=r*e+.22,this.presets.onglacier.target.y=r*e+.72;const o=this._sampleDemXZ(2.82,-3.45);this.presets.webcam.pos.y=o*e+.16,this.presets.webcam.target.y=o*e+.54}_syncCloudCeiling(){const e=Math.min(1,this.state.precipMmH/2.2),t=Math.max(0,(this.state.exag-1.3)*1.35);this.cloudUniforms.uStormIntensity.value=e,this.virgaUniforms.uCloudTopY.value=3.55-e*.72+t}setMode(e){this.state.mode=e,this.terrainUniforms.uMode.value=e}setContours(e){this.state.contours=e,this.terrainUniforms.uContours.value=e?1:0}setShowSmoke(e){this.state.showSmoke=e,this._updateSolarAndAtmosphere()}setShowClouds(e){this.state.showClouds=e,this.cloudGroup.visible=e,this.skyUniforms.uShowClouds.value=e?1:0,this._updateSolarAndAtmosphere()}setShowSunArc(e){this.state.showSunArc=e,this.sunGroup.visible=e}setShowHorizon(e){this.state.showHorizon=e}setShowPrecip(e){this.state.showPrecip=e,this.virgaMesh.visible=e,this.mistGroup.visible=e,this.rainLines.visible=e,this.snowPoints.visible=e}setShowIsotherm(e){this.state.showIsotherm=e,this.terrainUniforms.uShowIsotherm.value=e?1:0}setShadows(e){this.state.shadows=e,this.sunLight.castShadow=e,this.renderer.shadowMap.enabled=e}setBoost(e){this.state.boost=e,this.terrainUniforms.uDepBoost.value=e}setCompareClean(e){this.state.compareClean=e,this._syncSurfaceUniforms(),this._updateSolarAndAtmosphere()}setMeteorology({hour:e,depCumFrac:t,plumeDensity:n,cloudCover:s,cloudLow:r,cloudMid:o,cloudHigh:a,sunTrans:l,precipMmH:c,rainSnowM:u,snowLineM:d,snowPackMm:f,windSpeed:m,windBearingDeg:g,swIn:x,lwIn:p,wetFrac:h,totalDepMgM2:T}){this.state.hour=e,this.state.depProgress=t,this.state.plumeDensity=n,this.state.cloudCover=s,this.state.cloudLow=r??s,this.state.cloudMid=o??s*.85,this.state.cloudHigh=a??s*.6,this.state.sunTrans=l??.85,this.state.precipMmH=c,this.state.rainSnowM=u,this.state.snowLineM=d??u,this.state.snowPackMm=f,this.state.windSpeed=m,this.state.windBearingDeg=g,this.state.swIn=x,this.state.lwIn=p,this.state.wetFrac=h,this.state.totalDepMgM2=T;const b=(g+180)*Math.PI/180,S=Math.sin(b),w=-Math.cos(b);this.terrainUniforms.uWindDir.value.set(S,w),this.skyUniforms.uWindDir.value.set(S,w),this.cloudUniforms.uWindDir.value.set(S,w),this.virgaUniforms.uWindDir.value.set(S,w),this.mistUniforms.uWindDir.value.set(S,w),this.rainUniforms.uWindDir.value.set(S,w),this.snowUniforms.uWindDir.value.set(S,w),this.cloudUniforms.uCloudCover.value=s,this.cloudUniforms.uCloudLow.value=this.state.cloudLow,this.cloudUniforms.uCloudMid.value=this.state.cloudMid,this.cloudUniforms.uWindSpeed.value=m;const A=Math.min(1.5,c/2);this.virgaUniforms.uIntensity.value=A,this.virgaUniforms.uWindSpeed.value=m,this.virgaUniforms.uRainSnowM.value=u,this.mistUniforms.uIntensity.value=A,this.mistUniforms.uWindSpeed.value=m,this.mistUniforms.uRainSnowM.value=u,this.rainUniforms.uIntensity.value=A,this.rainUniforms.uWindSpeed.value=m,this.rainUniforms.uRainSnowM.value=u,this.snowUniforms.uIntensity.value=A,this.snowUniforms.uWindSpeed.value=m,this.snowUniforms.uRainSnowM.value=u,this._syncCloudCeiling(),this._syncSurfaceUniforms(),this._updateSolarAndAtmosphere()}_syncSurfaceUniforms(){this.terrainUniforms.uDepCumFrac.value=this.state.compareClean?0:this.state.depProgress,this.terrainUniforms.uRainSnowM.value=this.state.rainSnowM,this.terrainUniforms.uSnowLineM.value=this.state.compareClean?3600:this.state.snowLineM,this.terrainUniforms.uSnowPackMm.value=this.state.compareClean?0:this.state.snowPackMm,this.terrainUniforms.uRainIntensity.value=Math.min(1.5,this.state.precipMmH/2),this.ringUniforms&&(this.ringUniforms.uSnowLineM.value=this.terrainUniforms.uSnowLineM.value,this.ringUniforms.uSnowPackMm.value=this.terrainUniforms.uSnowPackMm.value)}_updateSolarAndAtmosphere(){const e=this.state.hour,t=Math.max(-1.15,Math.min(1.15,(e-13.5)/7.1)),n=180+t*110,s=Math.cos(Math.max(-1,Math.min(1,t))*Math.PI*.5)*47-(Math.abs(t)>1?8:0),r=Math.max(9,s),o=n*Math.PI/180,a=Math.max(-6,s)*Math.PI/180,l=r*Math.PI/180;this._sunDir.set(Math.cos(a)*Math.sin(o),Math.sin(a),-Math.cos(a)*Math.cos(o)).normalize();const c=22;this.sunLight.position.set(c*Math.cos(l)*Math.sin(o),c*Math.sin(l),-c*Math.cos(l)*Math.cos(o)),this.cloudUniforms.uSunDir.value.copy(this._sunDir),this.skyUniforms.uSunDir.value.copy(this._sunDir);const u=Math.max(0,Math.min(1,this.state.swIn/760)),d=Math.max(.05,Math.min(1,this.state.sunTrans??u)),f=Math.max(0,Math.min(1,(s+5)/14)),m=Math.max(0,1-Math.abs(s-3)/10)*f,g=this.state.showSmoke?this.state.plumeDensity:0,x=this.state.showClouds?this.state.cloudCover:0;this.skyUniforms.uDaylight.value=f,this.skyUniforms.uTwilight.value=m,this.skyUniforms.uSmoke.value=this.state.compareClean?0:g,this.skyUniforms.uCloud.value=x,this.skyUniforms.uCloudMid.value=this.state.showClouds?this.state.cloudMid:0,this.skyUniforms.uCloudHigh.value=this.state.showClouds?this.state.cloudHigh:0,this.skyUniforms.uSwNorm.value=d,this.cloudUniforms.uDaylight.value=f,this.cloudUniforms.uTwilight.value=m,this.cloudUniforms.uSmoke.value=g;const p=7.4,h=Math.max(1,s*.82)*Math.PI/180;this.sunOrb.position.set(p*Math.cos(h)*Math.sin(o),.55+p*Math.sin(h)*.62,-p*Math.cos(h)*Math.cos(o)),this.sunOrbUniforms.uSunTrans.value=d,this.sunOrbUniforms.uSmoke.value=g,this.sunOrbUniforms.uCloud.value=x,this.sunOrbUniforms.uDaylight.value=f,this.sunOrbUniforms.uTwilight.value=m,this.sunArcMat.opacity=.08+.18*f*d;const T=this.state.showClouds?Math.max(this.state.cloudLow,this.state.cloudMid):0,b=this.state.compareClean?0:g;this.terrainUniforms.uSmokeHaze.value=b,this.terrainUniforms.uDaylight.value=f,this.terrainUniforms.uTwilight.value=m,this.terrainUniforms.uSunDir.value.copy(this._sunDir),this.terrainUniforms.uCloudShadowAmt.value=T,this.ringUniforms&&(this.ringUniforms.uSmokeHaze.value=b,this.ringUniforms.uDaylight.value=f,this.ringUniforms.uTwilight.value=m,this.ringUniforms.uSunDir.value.copy(this._sunDir),this.ringUniforms.uCloudShadowAmt.value=T,this.ringUniforms.uWindDir.value.copy(this.terrainUniforms.uWindDir.value));const S=new Le(16774364),w=new Le(16748598),A=new Le(16754258),C=new Le(15133940),F=new Le(5406404),y=Math.max(0,Math.min(1,(b-.4)/.55)),M=S.clone().lerp(C,x*.52).lerp(w,m*.76).lerp(A,y*.62).lerp(F,1-f);this.sunLight.color.copy(M);const D=1.48+2.22*Math.pow(Math.max(u,f*.24),.65);this.sunLight.intensity=.32+(D-.32)*f;const B=new Le(10409215),H=new Le(13161698),X=new Le(14264432),$=new Le(1847898),Y=B.clone().lerp(H,x*.58).lerp(X,b*.46);this.hemiLight.color.copy($.clone().lerp(Y,f));const Q=new Le(7034946).lerp(new Le(4936542),x*.5),G=new Le(659742);this.hemiLight.groundColor.copy(G.clone().lerp(Q,f)),this.hemiLight.intensity=.16+(.68+.36*Math.sqrt(Math.max(u,.15))+.16*x)*f,this.rimLight.intensity=.1+.36*f*(1-x*.35),this.renderer.toneMappingExposure=.86+.3*f,this.floorMesh.material.color.copy(new Le(396052).lerp(new Le(2569802),f));const ie=f*(.38+.62*u);this.cloudUniforms.uSunPower.value=Math.max(.08,ie),this.virgaUniforms.uSunPower.value=Math.max(.12,ie),this.mistUniforms.uSunPower.value=Math.max(.12,ie),this.rainUniforms.uSunPower.value=Math.max(.14,ie),this.snowUniforms.uSunPower.value=Math.max(.18,ie)}flyTo(e){const t=this.presets[e];t&&(this._camAnim={t:0,dur:.85,fromPos:this.camera.position.clone(),toPos:t.pos.clone(),fromTarget:this.controls.target.clone(),toTarget:t.target.clone(),fromFov:this.camera.fov,toFov:t.fov||38})}getNorthAngleDeg(){const e=new N;return this.camera.getWorldDirection(e),Math.atan2(e.x,-e.z)*180/Math.PI}projectLandmark(e){const t=new N(e.x,e.y0*this.state.exag+.05,e.z);return t.project(this.camera),t.z>1||t.z<-1||t.x<-1.08||t.x>1.08||t.y<-1.08||t.y>1.08?null:{x:(t.x*.5+.5)*this.width,y:(-t.y*.5+.5)*this.height,depth:t.z}}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/Math.max(this.height,1),this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height,!1),this.snowUniforms.uPixelRatio.value=Math.min(window.devicePixelRatio||1,2)}capturePNG(){return this.renderer.render(this.scene,this.camera),this.canvas.toDataURL("image/png")}update(e){if(this._camAnim){this._camAnim.t+=e/this._camAnim.dur;const d=Math.min(1,this._camAnim.t),f=1-Math.pow(1-d,3);this.camera.position.lerpVectors(this._camAnim.fromPos,this._camAnim.toPos,f),this.controls.target.lerpVectors(this._camAnim.fromTarget,this._camAnim.toTarget,f),this.camera.fov=this._camAnim.fromFov+(this._camAnim.toFov-this._camAnim.fromFov)*f,this.camera.updateProjectionMatrix(),d>=1&&(this._camAnim=null)}else if(this.state.spin){const d=this.camera.position.clone().sub(this.controls.target);d.applyAxisAngle(new N(0,1,0),e*.15),this.camera.position.copy(this.controls.target).add(d)}this.controls.update(),this.skyDome.position.copy(this.camera.position);const t=new N;this.camera.getWorldDirection(t);const n=this._sampleDemXZ(this.camera.position.x,this.camera.position.z)*this.state.exag,s=Math.max(0,this.camera.position.y-n),r=this.camera.position.distanceTo(this.controls.target),o=(d,f,m)=>{const g=Math.max(0,Math.min(1,(m-d)/(f-d)));return g*g*(3-2*g)},a=o(5.4,1.8,s)*o(8.2,3.6,r),l=o(10.5,5.2,r);this.rainUniforms.uImmersion.value=a,this.snowUniforms.uImmersion.value=a,this.snowUniforms.uMidVisible.value=l,this.sunOrbUniforms.uArcVis.value=1-o(.35,.85,a),this.sunArcLine.visible=this.state.showSunArc&&a<.72;const c=this.camera.position.clone().addScaledVector(t,Math.min(1.45,r*.45));if(this.rainUniforms.uCamFocus.value.copy(c),this.snowUniforms.uCamFocus.value.copy(c),this.ringMesh){const d=o(10.2,6.8,r),f=this.state.showHorizon?1:d;this.ringUniforms.uRingAlpha.value=f,this.ringMesh.visible=f>.02,this.skirtMesh.visible=f<.72,this.floorMesh.visible=f<.55}const u=.55+.16*this.state.windSpeed;this.skyUniforms.uTime.value+=e*u,this.terrainUniforms.uTime.value+=e*u,this.ringUniforms&&(this.ringUniforms.uTime.value+=e*u),this.cloudUniforms.uTime.value+=e*(.45+.12*this.state.windSpeed),this.virgaUniforms.uTime.value+=e,this.mistUniforms.uTime.value+=e,this.rainUniforms.uTime.value+=e,this.snowUniforms.uTime.value+=e,this.renderer.render(this.scene,this.camera)}}const Jn="prod_hd_20261125",bm=document.getElementById("loader"),Qs=document.getElementById("loaderSub"),Bs=document.getElementById("sceneCanvas"),il=document.getElementById("labelsLayer"),wm=document.getElementById("compassSvg"),sl=document.getElementById("compassN"),zs=document.getElementById("legendBody");async function Tm(){var x,p;Qs.textContent="Chargement du MNT HD 448×448 + couronne Rocheuses 35 km (GLO-30)…";const i=await fetch(`./data/meta.json?v=${Jn}`,{cache:"no-store"});if(!i.ok)throw new Error("Impossible de charger les métadonnées du glacier.");const e=await i.json(),t=e.demFile||"dem_448.bin",n=((x=e.ring)==null?void 0:x.file)||"dem_ring_320.bin",s=e.aoFile||"terrain_ao_512.png",r=((p=e.ring)==null?void 0:p.aoFile)||"ring_ao_320.png",o=new xu;Qs.textContent="Chargement Sentinel-2 L2A (10 m) & cartes d'occlusion topographique…";const[a,l,c,u,d,f]=await Promise.all([fetch(`./data/${t}?v=${Jn}`),fetch(`./data/${n}?v=${Jn}`).catch(()=>null),o.loadAsync(`./data/s2_rgb_1536.jpg?v=${Jn}`),o.loadAsync(`./data/s2_mask_768.png?v=${Jn}`),o.loadAsync(`./data/${s}?v=${Jn}`).catch(()=>null),o.loadAsync(`./data/${r}?v=${Jn}`).catch(()=>null)]);if(!a.ok)throw new Error("Impossible de charger le relief du glacier.");const m=new Uint16Array(await a.arrayBuffer()),g=l&&l.ok?new Uint16Array(await l.arrayBuffer()):null;return{meta:e,demU16:m,ringU16:g,rgbTex:c,maskTex:u,aoTex:d,ringAoTex:f}}function Mt(i,e,t){return i+(e-i)*t}function Am(i,e,t){let n=(e-i+540)%360-180;return(i+n*t+360)%360}function Yl(i,e,t=2180,n=6.5){const r=2.6-.019*Math.max(20,Math.min(100,e));return t+(i-r)/n*1e3}function Cm(i,e,t){const n=i+273.15,r=6.1094*Math.exp(17.625*i/(i+243.04))*(e/100),o=1.24*Math.pow(Math.max(r,.5)/n,1/7);return Math.min(.99,o*(1+.22*t*t))*5670374e-14*Math.pow(n,4)}function Rm(i,e="2023-08-18"){const t=Number((e||"2023-08-18").slice(5,7))||8,n={1:230,2:340,3:520,4:690,5:840,6:900,7:870,8:800,9:640,10:450,11:280,12:205},s={1:4.1,2:5,3:6,4:7,5:7.9,6:8.3,7:8,8:7.2,9:6.2,10:5.2,11:4.3,12:3.9},r=t>=4&&t<=10?13.8:12.8,o=s[t]||7.2,a=(i-r)/o;return Math.abs(a)>=1?0:(n[t]||800)*Math.pow(Math.cos(a*Math.PI*.5),1.25)}const Pm={1:"janv.",2:"févr.",3:"mars",4:"avr.",5:"mai",6:"juin",7:"juil.",8:"août",9:"sept.",10:"oct.",11:"nov.",12:"déc."};function Dm(i){return i===0?"Ciel dégagé":i===1?"Peu nuageux":i===2?"Partiellement nuageux":i===3?"Ciel couvert":i===45||i===48?"Brouillard / nuages bas":i>=51&&i<=57?"Bruine fine":i>=61&&i<=67?"Pluie en vallée":i>=71&&i<=77?"Chutes de neige":i>=80&&i<=82?"Averses de pluie":i===85||i===86?"Averses de neige":i>=95?"Orage alpin":""}async function Lm(){var b;const e=await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.1955&longitude=-117.2555&elevation=2180&past_days=1&forecast_days=2&hourly=temperature_2m,relative_humidity_2m,precipitation,rain,snowfall,shortwave_radiation,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&timezone=America%2FEdmonton",{cache:"no-store"});if(!e.ok)throw new Error(`API Open-Meteo (${e.status})`);const n=(await e.json()).hourly,s=n.time,r=[...new Set(s.map(S=>S.slice(0,10)))],o=r.map(S=>`${Number(S.slice(8,10))} ${Pm[Number(S.slice(5,7))]||S.slice(5,7)}`),a=new Intl.DateTimeFormat("sv-SE",{timeZone:"America/Edmonton",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",hour12:!1}).formatToParts(new Date),l=Object.fromEntries(a.map(S=>[S.type,S.value])),c=`${l.year}-${l.month}-${l.day}T${l.hour}:00`;let u=s.indexOf(c);u<0&&(u=Math.min(s.length-1,24));const d=Number(s[0].slice(5,7))||8,f=n.temperature_2m.reduce((S,w)=>S+Number(w??0),0)/Math.max(1,n.temperature_2m.length),m=(d>=11||d<=4)&&f<0;let g=m?14:0,x=m?1840:3480,p=0;const h=s.map((S,w)=>{const A=S.slice(0,10),C=r.indexOf(A),F=Number(S.slice(11,13)),y=Number(n.temperature_2m[w]??0),M=Number(n.relative_humidity_2m[w]??70),D=Number(n.wind_speed_10m[w]??3),B=Math.round(Number(n.wind_direction_10m[w]??245))%360,H=Number(n.shortwave_radiation[w]??0),X=Math.max(0,Math.min(1,Number(n.cloud_cover[w]??30)/100)),$=Math.max(0,Math.min(1,Number(n.cloud_cover_low[w]??0)/100)),Y=Math.max(0,Math.min(1,Number(n.cloud_cover_mid[w]??0)/100)),Q=Math.max(0,Math.min(1,Number(n.cloud_cover_high[w]??0)/100)),G=Number(n.weather_code[w]??0),ie=Number(n.precipitation[w]??0),se=Number(n.snowfall[w]??0),xe=Cm(y,M,X),Ae=Yl(y,M,2180,6.5),Me=Math.max(0,Math.min(1,(3456-Ae)/1491)),q=Math.max(ie*Me,se*1.4);p+=Math.max(0,ie-q);const ne=Math.max(0,(y-1)*.14+Math.max(0,H-220)*.0018);if(g=Math.max(0,Math.min(30,g+q-ne)),q>=.08){const fe=Math.max(1840,Math.min(3450,Ae-60));x=g>=.35?Math.min(x,fe):.55*x+.45*fe}else g<=.05?x=3480:ne>.05&&(x=Math.min(3480,x+ne*75));return{t:w,dayIdx:C,date:A,dayLabel:o[C],h:F,ta:Number(y.toFixed(1)),rh:Number(M.toFixed(0)),u:Number(D.toFixed(1)),wdir:B,sw:Math.round(H),lw:Math.round(xe),cloud:Number(X.toFixed(2)),clLow:Number($.toFixed(2)),clMid:Number(Y.toFixed(2)),clHigh:Number(Q.toFixed(2)),wmo:G,plume:0,pm25:0,daod:0,precip:Number(ie.toFixed(2)),snMm:Number((se*1.4).toFixed(2)),rainSnowM:Math.round(Ae),snowLineM:Math.round(x),snowFrac:Number(Me.toFixed(2)),snowPackMm:Number(g.toFixed(1)),rainCumMm:Number(p.toFixed(1)),dryRate:0,wetRate:0,depRate:0,depCum:0,wetFrac:0,deltaAlpha:0}}),T={id:"live-now",label:"En direct · Athabasca",tag:"Météo réelle",isLive:!0,exactNas:!1,nDays:r.length,dayLabels:o,subtitle:"Météo réelle en direct (Open-Meteo, 2 180 m, heure locale d'Alberta) : nuages bas/moyens/hauts, pluie/neige, vent et solaire.",windBearingDeg:((b=h[u])==null?void 0:b.wdir)??245,totalDepMgM2:0,provenance:"Météo horaire en temps réel Open-Meteo pour le glacier Athabasca (52,1955° N, 117,2555° O, 2 180 m, America/Edmonton).",hours:h};return{nowIdx:u,episode:T}}function ks(i,e){const t=i.hours.length-1,n=Math.max(0,Math.min(t,e)),s=Math.floor(n),r=Math.min(t,s+1),o=n-s,a=i.hours[s],l=i.hours[r],c=a.h+o,u=Mt(a.depCum??0,l.depCum??0,o),d=i.totalDepMgM2||i.dailyDepMgM2||0,f=d>.05?Math.log1p(u/16)/Math.log1p(Math.max(d,45)/16):0;return{t:n,dayIdx:a.dayIdx??0,dayLabel:a.dayLabel||a.date||"",date:a.date||"",hour:c>=24?c-24:c,depCum:u,depRate:Mt(a.depRate??0,l.depRate??0,o),dryRate:Mt(a.dryRate??0,l.dryRate??0,o),wetRate:Mt(a.wetRate??0,l.wetRate??0,o),depCumFrac:f,deltaAlpha:Mt(a.deltaAlpha??0,l.deltaAlpha??0,o),pm25:a.pm25==null||l.pm25==null?null:Mt(a.pm25,l.pm25,o),daod:a.daod==null||l.daod==null?null:Mt(a.daod,l.daod,o),sw:Mt(a.sw??0,l.sw??0,o),lw:Mt(a.lw??300,l.lw??300,o),cloud:Mt(a.cloud??.2,l.cloud??.2,o),clLow:Mt(a.clLow??a.cloud??.2,l.clLow??l.cloud??.2,o),clMid:Mt(a.clMid??(a.cloud??.2)*.85,l.clMid??(l.cloud??.2)*.85,o),clHigh:Mt(a.clHigh??(a.cloud??.2)*.6,l.clHigh??(l.cloud??.2)*.6,o),wmo:a.wmo??0,ta:Mt(a.ta??4,l.ta??4,o),rh:Mt(a.rh??70,l.rh??70,o),u:Mt(a.u??4,l.u??4,o),wdir:Am(a.wdir??i.windBearingDeg??250,l.wdir??i.windBearingDeg??250,o),plume:Mt(a.plume??.3,l.plume??.3,o),precip:Mt(a.precip??0,l.precip??0,o),rainSnowM:Mt(a.rainSnowM??2600,l.rainSnowM??2600,o),snowLineM:Mt(a.snowLineM??a.rainSnowM??2600,l.snowLineM??l.rainSnowM??2600,o),snowPackMm:Mt(a.snowPackMm??a.snowCumMm??0,l.snowPackMm??l.snowCumMm??0,o),wetFrac:Mt(a.wetFrac??0,l.wetFrac??0,o)}}function rl(i,e,t){if(t)return"Laboratoire météo manuel";const n=Dm(e.wmo);return i==="live-now"?`${n||"Météo en direct"} · Nuages ${Math.round(e.cloud*100)} %`:e.hour<6||e.hour>=21.5?e.wetRate>=2?"Lessivage nocturne intense":e.precip>=.4?e.rainSnowM<2350?"Neige nocturne":"Pluie nocturne · neige en altitude":e.pm25!==null&&e.pm25>=50?`Fumée nocturne (${Math.round(e.pm25)} µg/m³)`:e.cloud>.65?"Nuit alpine couverte":"Nuit alpine étoilée":e.precip>=.45?e.wetRate>=1.5?"Lessivage humide (EC+OM)":e.rainSnowM<=2280?"Neige jusqu'au bas du glacier":`Pluie · Neige > ${Math.round(e.rainSnowM)} m`:i==="2024-07-22_29"&&e.plume>.72?"Panache illustratif Jasper":e.pm25!==null&&e.pm25<2&&(e.daod??0)<.02?e.snowPackMm>=2.5?`${n||"Air pur"} · neige fraîche`:`${n||"Air alpin limpide"}`:e.pm25!==null&&e.pm25>=80?`Panache extrême · ${Math.round(e.pm25)} µg/m³`:e.plume>.55?"Fumée dense · dépôt sec":e.pm25!==null&&e.pm25>=8?`Brume de feux · ${n||"dépôt sec"}`:e.snowPackMm>=3&&e.ta>4?"Fonte de la neige fraîche":n||"Évolution météo"}function Hs(i){const e=Math.floor(i)%24,t=Math.floor((i-Math.floor(i))*60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function ht(i,e=1){return i.toFixed(e).replace(".",",")}const al={"2023-08-17_24":36.5,"2023-06-11_18":33,"2023-08-26_0902":132,"2021-08-12_19":59.5,"2024-07-22_29":80.5,"2018-08-21_28":83.5},ol={"2023-08-17_24":{dot:"amber",title:"Août 2023 · 17–24",sub:"198,6 mg m⁻² · NAS + Webcam"},"2023-06-11_18":{dot:"hot",title:"Juin 2023 · 11–18",sub:"PM2,5 375 + Blizzard · NAS"},"2023-08-26_0902":{dot:"amber",title:"Fin août 2023 · 26–2",sub:"85,4 mg m⁻² · NAS + Webcam"},"2021-08-12_19":{dot:"amber",title:"Août 2021 · 12–19",sub:"Record sec · ΔAOD 1,33"},"2024-07-22_29":{dot:"hot",title:"Juil. 2024 · Jasper",sub:"ERA5 réel + 144 webcams"},"2018-08-21_28":{dot:"",title:"Août 2018 · 21–28",sub:"AWS réelle + NAS (143,9 mg)"},"live-now":{dot:"live",title:"En direct · Athabasca",sub:"Open-Meteo temps réel"}};async function Um(){try{let Ge=function(P){B.setShowHorizon(P),pe.checked=P,oe.classList.toggle("active-cam",P),oe.setAttribute("aria-pressed",P?"true":"false")},Gn=function(P,ve="small"){if(!P)return"";const W=P.lastIndexOf("/");return W<0?"":`${Fe}/${P.slice(0,W)}/${ve}/${P.slice(W+1)}`},Vi=function(P){return P?`https://www.skaping.com/columbiaicefield?archives=${btoa(String(P)).replace(/=+$/,"")}`:"https://www.skaping.com/columbiaicefield"},gn=function(P){if(!P||Ht.has(P))return;Ht.size>48&&Ht.delete(Ht.keys().next().value);const ve=new Image;ve.src=P,Ht.set(P,ve)},Vn=function(P,ve){if(!rt)return;const W=Math.max(0,Math.min(P.hours.length-1,Math.round(ve))),ut=`${P.id}:${W}`;if(ut===gt)return;gt=ut;const tt=P.hours[W];if(P.isLive){L.textContent="En direct",Ne.classList.add("dimmed"),Ke.textContent="Caméra Columbia Icefield en hibernation hivernale (archives 2019–2024 disponibles sur les autres séquences).",Ke.classList.remove("hidden"),re.href="https://www.skaping.com/columbiaicefield",Ze="";return}if(!P.hasWebcam){L.textContent=tt.dayLabel,Ne.removeAttribute("src"),Ke.textContent="Archives Skaping disponibles dès juin 2019 (août 2018 antérieur).",Ke.classList.remove("hidden"),re.href="https://www.skaping.com/columbiaicefield",Ze="";return}if(tt.cam){const _t=Gn(tt.cam,"small");Ze=Gn(tt.cam,"large"),kt=Vi(tt.camTs),L.textContent=`${tt.dayLabel} · ${String(tt.h).padStart(2,"0")}:00`,re.href=kt,Ne.classList.remove("dimmed"),Ke.classList.add("hidden");const at=new Image;at.onload=()=>{gt===ut&&(Ne.src=_t)},at.src=_t;for(let ot=1;ot<=2;ot++){const mt=P.hours[W+ot];mt&&mt.cam&&gn(Gn(mt.cam,"small"))}}else L.textContent=`${tt.dayLabel} · ${String(tt.h).padStart(2,"0")}:00 (Nuit)`,Ne.classList.add("dimmed"),Ke.textContent="Nuit en montagne · prochaine image dès 05:00 MDT",Ke.classList.remove("hidden")},ci=function(P){rt=P,Z.classList.toggle("hidden",!P),me.classList.toggle("active-cam",P),me.setAttribute("aria-pressed",P?"true":"false"),P&&(gt="",Vn(w.episodes[X],$))},ui=function(){Ze&&(J.src=Ze,he.textContent=`Webcam Columbia Icefield — ${L.textContent} MDT`,ue.href=kt,V.classList.remove("hidden"))},hi=function(){if(!Z.style.left&&!Z.style.top)return;const P=Z.getBoundingClientRect(),ve=Math.max(8,window.innerWidth-P.width-8),W=Math.max(8,window.innerHeight-P.height-8);Z.style.left=`${Math.max(8,Math.min(ve,parseFloat(Z.style.left)||P.left))}px`,Z.style.top=`${Math.max(8,Math.min(W,parseFloat(Z.style.top)||P.top))}px`},z=function(){cn&&cn.state!=="inactive"&&cn.stop(),_&&(clearInterval(_),_=null),Wi.classList.remove("recording"),Xi.textContent="Clip"},k=function(){if(cn&&cn.state==="recording"){z();return}if(!Bs.captureStream||typeof MediaRecorder>"u"){alert("L'enregistrement vidéo direct n'est pas pris en charge par ce navigateur.");return}const ve=["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm"].find(ut=>MediaRecorder.isTypeSupported(ut))||"",W=Bs.captureStream(30);Yi=[],cn=new MediaRecorder(W,ve?{mimeType:ve,videoBitsPerSecond:6e6}:{videoBitsPerSecond:6e6}),cn.ondataavailable=ut=>{ut.data&&ut.data.size>0&&Yi.push(ut.data)},cn.onstop=()=>{const ut=ve.includes("mp4")?"mp4":"webm",tt=new Blob(Yi,{type:ve||"video/webm"}),_t=URL.createObjectURL(tt),at=document.createElement("a"),ot=w.episodes[X],mt=ks(ot,$);at.download=`athabasca_3d_${mt.date}_${Hs(mt.hour).replace(":","h")}.${ut}`,at.href=_t,at.click(),setTimeout(()=>URL.revokeObjectURL(_t),5e3)},cn.start(),Y||yt(!0),U=0,Wi.classList.add("recording"),Xi.textContent="0s",_=setInterval(()=>{U++,Xi.textContent=`${U}s`,U>=20&&z()},1e3)},I=function(P){xe=P,document.body.classList.toggle("present-mode",P),ke.classList.toggle("hidden",!P),P&&(K.classList.add("hidden"),Xa.classList.add("hidden"))},un=function(){const P=w.episodes[X];q.max=String(P.hours.length-1);const ve=ol[X]||{dot:"amber",title:P.label,sub:P.tag||""};ee.className=`ep-dot ${ve.dot}`,j.textContent=ve.title,Se.textContent=ve.sub,fe.innerHTML="";const W=P.dayLabels||[];W.length>1?(fe.style.display="grid",fe.style.gridTemplateColumns=`repeat(${W.length}, 1fr)`,je=W.map((at,ot)=>{const mt=document.createElement("button");return mt.className="day-pill",mt.textContent=at,mt.addEventListener("click",()=>{$=Math.min(P.hours.length-1,ot*24+12),Oe()}),fe.appendChild(mt),mt})):(fe.style.display="none",je=[]),Lt=P.hours.length>96?2:1;const ut=Math.ceil(P.hours.length/Lt),tt=[];for(let at=0;at<ut;at++){let ot=0,mt=0;for(let fi=0;fi<Lt;fi++){const xt=at*Lt+fi;if(xt<P.hours.length){const $i=P.hours[xt];se==="ta"?ot+=Math.max(0,($i.ta??0)+6):se==="pm25"?ot+=$i.pm25!=null?$i.pm25:($i.plume||0)*100:ot+=$i[se]||0,mt++}}tt.push(ot/Math.max(mt,1))}const _t=Math.max(...tt,.1);ne.innerHTML="",vt=tt.map(at=>{const ot=document.createElement("div");ot.className=`hist-bar ${se}`;let mt;return se==="depRate"?mt=at<=.005?0:Math.log1p(at*4)/Math.log1p(_t*4):se==="pm25"?mt=at<=.5?0:Math.log1p(at*.25)/Math.log1p(_t*.25):se==="precip"?mt=at<=.02?0:Math.sqrt(at/_t):mt=at/_t,ot.style.height=`${Math.max(6,Math.round(mt*100))}%`,ne.appendChild(ot),ot}),Ee.textContent=P.provenance||""},Pt=function(){const P=B.state.mode,ve=w.episodes[X],W=ve.totalDepMgM2||ve.dailyDepMgM2||30;P===0?zs.innerHTML=`
          <div class="legend-title">Atmosphère &amp; manteau neigeux</div>
          <div><span style="color:#eab308">■ Fumée 3D</span> (volumétrique) · <span style="color:#e2e8f0">■ Nuages</span> (altitude + ombres) · <span style="color:#5cc8ff">— Pluie/neige</span></div>
        `:P===1?zs.innerHTML=`
          <div class="legend-title">Dépôt cumulé EC + OM (mg m⁻²)</div>
          <div class="legend-bar" style="background:linear-gradient(90deg,#14243d,#423d70,#bf4d2e,#f5a324,#fceb99)"></div>
          <div class="legend-scale"><span>0</span><span>${ht(W*.5,0)}</span><span>${ht(W,1)} mg m⁻²</span></div>
        `:P===2?zs.innerHTML=`
          <div class="legend-title">Surface glaciaire (NDSI + albédo)</div>
          <div class="legend-grid">
            <span class="legend-chip"><i style="background:#d6e3f2"></i>Neige / névé</span>
            <span class="legend-chip"><i style="background:#4f9ad8"></i>Glace vive</span>
            <span class="legend-chip"><i style="background:#1fadad"></i>Lac Sunwapta</span>
            <span class="legend-chip"><i style="background:#665c50"></i>Roche / moraine</span>
          </div>
        `:zs.innerHTML=`
          <div class="legend-title">Maquette géomorphologique</div>
          <div>Relief HD Copernicus GLO-30 (448×448, 1 867 – 3 494 m) + Rocheuses 35 km.</div>
        `},Dn=function(P){te.value=String(Math.round(P.plume*100)),we.textContent=`${Math.round(P.plume*100)} %`,ae.value=String(Math.round(P.sw)),Ye.textContent=`${Math.round(P.sw)} W m⁻²`,de.value=String(Math.round(P.cloud*100)),Je.textContent=`${Math.round(P.cloud*100)} %`,ge.value=P.precip.toFixed(1),pt.textContent=`${ht(P.precip,1)} mm/h`,Pe.value=Math.max(-6,Math.min(18,P.ta)).toFixed(1),ct.textContent=`${ht(P.ta,1)} °C`,De.value=Math.max(.5,Math.min(16,P.u)).toFixed(1),$e.textContent=`${ht(P.u,1)} m/s`},Oe=function(){const P=w.episodes[X],ve=ks(P,$),W={...ve};if(Ae){if(W.plume=Me.smoke,W.sw=Me.sw,W.cloud=Me.cloud,W.clLow=Me.cloud,W.clMid=Me.cloud*.9,W.clHigh=Me.cloud*.65,W.precip=Me.precip,W.ta=Me.ta,W.u=Me.wind,W.rh=W.precip>.2?Math.max(90,ve.rh):ve.rh,W.rainSnowM=Yl(W.ta,W.rh,w.awsElevM||2180,w.lapseCPerKm||6.5),W.precip>.15&&(W.cloud=Math.max(W.cloud,.72),W.clLow=Math.max(W.clLow,.72),W.clMid=Math.max(W.clMid,.78)),W.lw=275+W.cloud*55,W.wetFrac=W.precip>.2?.78:0,W.precip>.1){const xt=Math.max(0,Math.min(1,(3456-W.rainSnowM)/1491));W.snowPackMm=Math.max(ve.snowPackMm,W.precip*5.5*xt),W.snowLineM=Math.max(1840,Math.min(W.snowLineM,W.rainSnowM-50))}}else Dn(W);const ut=Rm(W.hour,W.date),tt=ut>=35,_t=tt?Math.max(.05,Math.min(1,W.sw/ut)):.05,at=tt?Math.max(0,Math.min(99,Math.round((1-_t)*100))):100;B.setMeteorology({hour:W.hour,depCumFrac:W.depCumFrac,plumeDensity:W.plume,cloudCover:W.cloud,cloudLow:W.clLow,cloudMid:W.clMid,cloudHigh:W.clHigh,sunTrans:_t,precipMmH:W.precip,rainSnowM:W.rainSnowM,snowLineM:W.snowLineM,snowPackMm:W.snowPackMm,windSpeed:W.u,windBearingDeg:W.wdir,swIn:W.sw,lwIn:W.lw,wetFrac:W.wetFrac,totalDepMgM2:P.totalDepMgM2||P.dailyDepMgM2||30});const ot=B.state.compareClean;q.value=W.t.toFixed(2),ce.textContent=W.dayLabel,Re.textContent=Hs(W.hour),Ie.textContent=rl(X,W,Ae),lt.textContent=`${W.dayLabel} · ${Hs(W.hour)} MDT`;const mt=W.pm25!=null?`PM2,5 ${ht(W.pm25,W.pm25>=10?0:1)} µg/m³`:rl(X,W,Ae);if(qe.textContent=ot?"Référence propre":`${mt} · ${ht(W.ta,1)} °C`,!tt)R.textContent=`Nuit · LW ${Math.round(W.lw)}`,Qe.style.backgroundColor="#475569",Qe.style.boxShadow="none",Qe.style.opacity="0.65";else{const xt=at<=10?"Clair":`−${at} %`;R.textContent=`${Math.round(W.sw)} W/m² · ${xt}`,W.plume>.45&&W.cloud<.65?(Qe.style.backgroundColor="#f97316",Qe.style.boxShadow=`0 0 ${Math.round(4+6*_t)}px rgba(249,115,22,0.85)`):at>=45?(Qe.style.backgroundColor="#94a3b8",Qe.style.boxShadow="0 0 4px rgba(148,163,184,0.45)"):(Qe.style.backgroundColor="#fde047",Qe.style.boxShadow=`0 0 ${Math.round(5+7*_t)}px rgba(253,224,71,0.9)`),Qe.style.opacity=String(Math.max(.35,.35+.65*_t))}if(Ae)Rt.textContent=`Manuel · ${Math.round(W.plume*100)} %`;else if(P.isLive)Rt.textContent=`Nuages ${Math.round(W.cloud*100)} %`;else if(W.pm25===null)Rt.textContent=`Illust. · ${Math.round(W.plume*100)} %`;else if(W.pm25<1.5&&(W.daod??0)<.02)Rt.textContent=`Air pur · ${ht(W.pm25,1)}`;else{const xt=W.daod&&W.daod>=.03?` · ${ht(W.daod,2)}`:"";Rt.textContent=`${ht(W.pm25,W.pm25>=10?0:1)} µg/m³${xt}`}if(We.textContent=`${ht(W.ta,1)} °C · ${Math.round(W.rainSnowM)} m`,W.precip<.05?He.textContent="Sec · 0,0 mm/h":W.rainSnowM<=2120?He.textContent=`Neige · ${ht(W.precip,1)} mm/h`:W.rainSnowM>=3460?He.textContent=`Pluie · ${ht(W.precip,1)} mm/h`:He.textContent=`Mixte · ${ht(W.precip,1)} mm/h`,be.textContent=ot?"0,0 mm":`${ht(W.snowPackMm,1)} mm éq.`,ot||P.isLive)nt.textContent=P.isLive?"Météo live (0 feu)":"0,0 mg m⁻²";else{const xt=W.depRate<.02?"0/h":`+${ht(W.depRate,W.depRate>=10?0:1)} ${W.wetFrac>=.5?"hum":"sec"}`;nt.textContent=`${ht(W.depCum,W.depCum>=100?0:1)} mg (${xt})`}const fi=Math.floor(W.t/Lt);for(let xt=0;xt<vt.length;xt++)vt[xt].classList.toggle("past",xt<fi),vt[xt].classList.toggle("current",xt===fi);for(let xt=0;xt<je.length;xt++)je[xt].classList.toggle("active",xt===W.dayIdx);Vn(P,$)},yt=function(P){Y=P,Yt.style.display=Y?"none":"block",Ut.style.display=Y?"block":"none"},hn=function(P,ve=null){X=P,Ae=!1,ye.classList.add("hidden"),K.classList.add("hidden"),O.setAttribute("aria-expanded","false"),document.querySelectorAll(".ep-item").forEach(W=>{const ut=W.dataset.episode===X;W.classList.toggle("active",ut),W.setAttribute("aria-selected",ut?"true":"false")}),$=ve??al[X]??12,gt="",un(),Pt(),Oe(),yt(P!=="live-now")},Wn=function(){if(!Ae){const P=ks(w.episodes[X],$);Me.smoke=P.plume,Me.sw=P.sw,Me.cloud=P.cloud,Me.precip=P.precip,Me.ta=P.ta,Me.wind=P.u,Ae=!0,ye.classList.remove("hidden")}},rr=function(P){Ya.forEach(ve=>ve.classList.toggle("active",Number(ve.dataset.mode)===P)),B.setMode(P),Pt()},lr=function(P){requestAnimationFrame(lr);const ve=Math.min((P-$a)/1e3,.05);if($a=P,Y){const tt=w.episodes[X];$+=ve*1.5*Q[G],$>tt.hours.length-1&&($=0),Oe()}B.update(ve);const W=B.getNorthAngleDeg();wm.style.transform=`rotate(${W.toFixed(1)}deg)`;const ut=W*Math.PI/180;if(sl.style.left=`${(18+12*Math.sin(ut)-4).toFixed(1)}px`,sl.style.top=`${(18-12*Math.cos(ut)-6).toFixed(1)}px`,ie&&!xe)for(let tt=0;tt<H.length;tt++){const{el:_t,lm:at}=H[tt],ot=B.projectLandmark(at);ot?(_t.style.opacity="1",_t.style.left=`${ot.x.toFixed(1)}px`,_t.style.top=`${ot.y.toFixed(1)}px`,_t.style.zIndex=String(Math.floor((1-ot.depth)*1e3))):_t.style.opacity="0"}};var i=Ge,e=Gn,t=Vi,n=gn,s=Vn,r=ci,o=ui,a=hi,l=z,c=k,u=I,d=un,f=Pt,m=Dn,g=Oe,x=yt,p=hn,h=Wn,T=rr,b=lr;const S=await Tm(),{meta:w,demU16:A,ringU16:C,rgbTex:F,maskTex:y,aoTex:M,ringAoTex:D}=S;Qs.textContent="Initialisation de la scène 3D HD…";const B=new Em(Bs,w,A,F,y,M,C,D),H=w.landmarks.map(P=>{const ve=document.createElement("div");return ve.className="pin-label hud-el",ve.innerHTML=`
        <div class="pin-card">
          <span class="pin-name">${P.name}</span>
          <span class="pin-elev">${P.elevM.toLocaleString("fr-CA")} m</span>
        </div>
        <div class="pin-stem"></div>
        <div class="pin-dot ${P.kind}"></div>
      `,il.appendChild(ve),{el:ve,lm:P}});let X="2023-08-17_24";w.episodes[X]||(X=Object.keys(w.episodes)[0]);let $=al[X]??12,Y=!0;const Q=[.5,1,2,4];let G=0,ie=!0,se="precip",xe=!1,Ae=!1;const Me={smoke:.35,sw:350,cloud:.4,precip:0,ta:3.5,wind:5},q=document.getElementById("timeSlider"),ne=document.getElementById("histBars"),fe=document.getElementById("dayPills"),ce=document.getElementById("clockDate"),Re=document.getElementById("clockTime"),Ie=document.getElementById("clockPhase"),ke=document.getElementById("presentBar"),lt=document.getElementById("presentClock"),qe=document.getElementById("presentMeta"),Qe=document.getElementById("sunDot"),R=document.getElementById("kpiSwLw"),Rt=document.getElementById("kpiSmoke"),We=document.getElementById("kpiTempIso"),He=document.getElementById("kpiPrecip"),be=document.getElementById("kpiSnowPack"),nt=document.getElementById("kpiDep"),Ee=document.getElementById("modalProvenance"),E=document.getElementById("liveTag"),v=document.getElementById("epDropdown"),O=document.getElementById("epTrigger"),K=document.getElementById("epMenu"),ee=document.getElementById("epTriggerDot"),j=document.getElementById("epTriggerTitle"),Se=document.getElementById("epTriggerSub");O.addEventListener("click",P=>{P.stopPropagation();const ve=K.classList.toggle("hidden");O.setAttribute("aria-expanded",ve?"false":"true")}),window.addEventListener("click",P=>{v.contains(P.target)||(K.classList.add("hidden"),O.setAttribute("aria-expanded","false"))});const oe=document.getElementById("btnHorizonToggle"),pe=document.getElementById("chkHorizon");oe.addEventListener("click",()=>Ge(!B.state.showHorizon)),pe.addEventListener("change",P=>Ge(P.target.checked));const Z=document.getElementById("webcamCard"),me=document.getElementById("btnWebcamToggle"),Ce=document.getElementById("btnWebcamClose"),Ue=document.getElementById("btnWebcamZoom"),_e=document.getElementById("btnMatchCam"),Xe=document.getElementById("webcamMedia"),Ne=document.getElementById("webcamImg"),Ke=document.getElementById("webcamOverlay"),L=document.getElementById("webcamStamp"),re=document.getElementById("webcamLink"),V=document.getElementById("webcamModal"),J=document.getElementById("webcamModalImg"),he=document.getElementById("webcamModalTitle"),ue=document.getElementById("webcamModalLink"),Fe=w.skapingBase||"https://skaping.s3.gra.io.cloud.ovh.net/pursuit/columbia_icefield";let rt=!0,gt="",Ze="",kt="https://www.skaping.com/columbiaicefield";const Ht=new Map;me.addEventListener("click",()=>ci(!rt)),Ce.addEventListener("click",()=>ci(!1)),_e.addEventListener("click",()=>{document.querySelectorAll(".preset-group .pill-btn").forEach(P=>P.classList.toggle("active",P.dataset.preset==="webcam")),B.flyTo("webcam")}),Ue.addEventListener("click",ui),Xe.addEventListener("click",ui),document.getElementById("btnCloseWebcamModal").addEventListener("click",()=>V.classList.add("hidden")),V.addEventListener("click",P=>{P.target===V&&V.classList.add("hidden")});const nn=document.getElementById("webcamDragHandle"),Mn=document.getElementById("webcamResizeHandle");let jt=null,ln=null;nn.addEventListener("pointerdown",P=>{if(P.target.closest("button, a"))return;P.preventDefault(),P.stopPropagation();const ve=Z.getBoundingClientRect();Z.style.left=`${ve.left}px`,Z.style.top=`${ve.top}px`,Z.style.right="auto",Z.style.bottom="auto",Z.classList.add("dragging"),jt={id:P.pointerId,dx:P.clientX-ve.left,dy:P.clientY-ve.top},nn.setPointerCapture(P.pointerId)}),nn.addEventListener("pointermove",P=>{if(!jt||P.pointerId!==jt.id)return;const ve=Z.getBoundingClientRect();Z.style.left=`${Math.max(8,Math.min(window.innerWidth-ve.width-8,P.clientX-jt.dx))}px`,Z.style.top=`${Math.max(8,Math.min(window.innerHeight-ve.height-8,P.clientY-jt.dy))}px`});const us=P=>{if(!(!jt||P.pointerId!==jt.id)){jt=null,Z.classList.remove("dragging");try{nn.releasePointerCapture(P.pointerId)}catch{}}};nn.addEventListener("pointerup",us),nn.addEventListener("pointercancel",us),nn.addEventListener("dblclick",P=>{P.target.closest("button, a")||(Z.style.left="",Z.style.top="",Z.style.right="",Z.style.bottom="",Z.style.width="")}),Mn.addEventListener("pointerdown",P=>{P.preventDefault(),P.stopPropagation();const ve=Z.getBoundingClientRect();Z.style.left=`${ve.left}px`,Z.style.top=`${ve.top}px`,Z.style.right="auto",Z.style.bottom="auto",ln={id:P.pointerId,startX:P.clientX,startW:ve.width},Mn.setPointerCapture(P.pointerId)}),Mn.addEventListener("pointermove",P=>{if(!ln||P.pointerId!==ln.id)return;const ve=Math.min(720,window.innerWidth-(parseFloat(Z.style.left)||16)-12);Z.style.width=`${Math.round(Math.max(240,Math.min(ve,ln.startW+(P.clientX-ln.startX))))}px`,hi()});const hs=P=>{if(!(!ln||P.pointerId!==ln.id)){ln=null;try{Mn.releasePointerCapture(P.pointerId)}catch{}}};Mn.addEventListener("pointerup",hs),Mn.addEventListener("pointercancel",hs),window.addEventListener("resize",hi);const Wi=document.getElementById("btnRecTop"),Xi=document.getElementById("recLabel");let cn=null,Yi=[],_=null,U=0;Wi.addEventListener("click",k),document.getElementById("btnPresent").addEventListener("click",()=>I(!xe)),document.getElementById("btnExitPresent").addEventListener("click",()=>I(!1));const te=document.getElementById("slLabSmoke"),ae=document.getElementById("slLabSw"),de=document.getElementById("slLabCloud"),ge=document.getElementById("slLabPrecip"),Pe=document.getElementById("slLabTemp"),De=document.getElementById("slLabWind"),we=document.getElementById("valLabSmoke"),Ye=document.getElementById("valLabSw"),Je=document.getElementById("valLabCloud"),pt=document.getElementById("valLabPrecip"),ct=document.getElementById("valLabTemp"),$e=document.getElementById("valLabWind"),ye=document.getElementById("btnSyncAws");let vt=[],je=[],Lt=1;const Xt=document.getElementById("btnPlay"),Yt=document.getElementById("iconPlay"),Ut=document.getElementById("iconPause");Xt.addEventListener("click",()=>yt(!Y)),yt(!0);const di=document.getElementById("btnSpeed");di.addEventListener("click",()=>{G=(G+1)%Q.length,di.textContent=`${String(Q[G]).replace(".",",")}×`}),q.addEventListener("input",()=>{$=parseFloat(q.value),Oe()}),document.querySelectorAll(".ctab").forEach(P=>{P.addEventListener("click",()=>{se=P.dataset.metric,document.querySelectorAll(".ctab").forEach(ve=>ve.classList.toggle("active",ve===P)),un(),Oe()})}),document.querySelectorAll(".ep-item").forEach(P=>{P.addEventListener("click",async()=>{const ve=P.dataset.episode;if(ve==="live-now"){E.textContent="Chargement…";try{const{nowIdx:W,episode:ut}=await Lm();w.episodes["live-now"]=ut;const tt=ut.hours[W];E.textContent=`${ht(tt.ta,0)} °C · ${Math.round(tt.cloud*100)} %`,ol["live-now"].sub=`${ht(tt.ta,0)} °C · nuages ${Math.round(tt.cloud*100)} %`,hn("live-now",W)}catch(W){console.error("Live weather fetch failed:",W),E.textContent="Indisponible"}return}w.episodes[ve]&&hn(ve)})}),te.addEventListener("input",()=>{Wn(),Me.smoke=parseFloat(te.value)/100,we.textContent=`${Math.round(Me.smoke*100)} %`,Oe()}),ae.addEventListener("input",()=>{Wn(),Me.sw=parseFloat(ae.value),Ye.textContent=`${Math.round(Me.sw)} W m⁻²`,Oe()}),de.addEventListener("input",()=>{Wn(),Me.cloud=parseFloat(de.value)/100,Je.textContent=`${Math.round(Me.cloud*100)} %`,Oe()}),ge.addEventListener("input",()=>{Wn(),Me.precip=parseFloat(ge.value),pt.textContent=`${ht(Me.precip,1)} mm/h`,Oe()}),Pe.addEventListener("input",()=>{Wn(),Me.ta=parseFloat(Pe.value),ct.textContent=`${ht(Me.ta,1)} °C`,Oe()}),De.addEventListener("input",()=>{Wn(),Me.wind=parseFloat(De.value),$e.textContent=`${ht(Me.wind,1)} m/s`,Oe()}),ye.addEventListener("click",()=>{Ae=!1,ye.classList.add("hidden"),Oe()});const ir=document.getElementById("btnCompare"),qi=P=>{B.setCompareClean(P),ir.classList.toggle("active",P),Oe()};ir.addEventListener("pointerdown",()=>qi(!0)),window.addEventListener("pointerup",()=>{B.state.compareClean&&qi(!1)}),ir.addEventListener("pointerleave",()=>{B.state.compareClean&&qi(!1)}),window.addEventListener("keydown",P=>{P.target.tagName!=="INPUT"&&(P.code==="Space"&&(P.preventDefault(),yt(!Y)),(P.key==="b"||P.key==="B")&&qi(!0),(P.key==="h"||P.key==="H")&&I(!xe))}),window.addEventListener("keyup",P=>{(P.key==="b"||P.key==="B")&&qi(!1)});const sr=document.querySelectorAll(".preset-group .pill-btn");sr.forEach(P=>{P.addEventListener("click",()=>{sr.forEach(ve=>ve.classList.remove("active")),P.classList.add("active"),B.flyTo(P.dataset.preset)})}),document.getElementById("compassWrap").addEventListener("click",()=>B.flyTo("block")),Bs.addEventListener("dblclick",()=>B.flyTo("block"));const Wa=document.getElementById("btnSettings"),Xa=document.getElementById("settingsDrawer");Wa.addEventListener("click",()=>{const P=Xa.classList.toggle("hidden");Wa.setAttribute("aria-expanded",P?"false":"true")});const Ya=document.querySelectorAll(".mode-btn");Ya.forEach(P=>P.addEventListener("click",()=>rr(Number(P.dataset.mode))));const ar=document.getElementById("slExag"),qa=document.getElementById("valExag");ar.addEventListener("input",()=>{const P=parseFloat(ar.value);qa.textContent=`${ht(P,2)}×`,B.setExaggeration(P)});const or=document.getElementById("slBoost"),Za=document.getElementById("valBoost");or.addEventListener("input",()=>{const P=parseFloat(or.value);Za.textContent=`${ht(P,1)}×`,B.setBoost(P)}),document.getElementById("chkClouds").addEventListener("change",P=>B.setShowClouds(P.target.checked)),document.getElementById("chkSmoke").addEventListener("change",P=>B.setShowSmoke(P.target.checked)),document.getElementById("chkPrecip").addEventListener("change",P=>B.setShowPrecip(P.target.checked)),document.getElementById("chkSunArc").addEventListener("change",P=>B.setShowSunArc(P.target.checked)),document.getElementById("chkIsotherm").addEventListener("change",P=>B.setShowIsotherm(P.target.checked)),document.getElementById("chkShadows").addEventListener("change",P=>B.setShadows(P.target.checked)),document.getElementById("chkContours").addEventListener("change",P=>B.setContours(P.target.checked)),document.getElementById("chkLabels").addEventListener("change",P=>{ie=P.target.checked,il.style.display=ie?"block":"none"}),document.getElementById("chkSpin").addEventListener("change",P=>{B.state.spin=P.target.checked}),document.getElementById("btnReset").addEventListener("click",()=>{Ae=!1,ye.classList.add("hidden"),B.flyTo("block"),sr.forEach(P=>P.classList.toggle("active",P.dataset.preset==="block")),ar.value="1.30",qa.textContent="1,30×",B.setExaggeration(1.3),or.value="1.4",Za.textContent="1,4×",B.setBoost(1.4),B.state.spin=!1,document.getElementById("chkSpin").checked=!1,rr(0),Oe()}),document.getElementById("btnSnap").addEventListener("click",()=>{const P=w.episodes[X],ve=ks(P,$),W=document.createElement("a");W.download=`athabasca_3d_${ve.date}_${Hs(ve.hour).replace(":","h")}.png`,W.href=B.capturePNG(),W.click()});const Zi=document.getElementById("infoModal");document.getElementById("btnInfo").addEventListener("click",()=>Zi.classList.remove("hidden")),document.getElementById("btnCloseInfo").addEventListener("click",()=>Zi.classList.add("hidden")),Zi.addEventListener("click",P=>{P.target===Zi&&Zi.classList.add("hidden")}),window.addEventListener("resize",()=>B.resize()),un(),Pt(),Oe(),bm.classList.add("done");let $a=performance.now();requestAnimationFrame(lr)}catch(S){console.error("Athabasca 3D v2 boot error:",S),Qs.textContent="Erreur d'initialisation : "+((S==null?void 0:S.message)||String(S))}}Um();
