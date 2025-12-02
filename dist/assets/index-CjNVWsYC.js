(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const Wa="181",Gi={ROTATE:0,DOLLY:1,PAN:2},Vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ic=0,bo=1,Nc=2,El=1,Fc=2,Nn=3,ii=0,tn=1,Fn=2,zn=0,Hi=1,Qs=2,yo=3,Eo=4,Oc=5,di=100,Bc=101,zc=102,Vc=103,Gc=104,Hc=200,kc=201,Wc=202,Xc=203,ta=204,ea=205,jc=206,Yc=207,qc=208,Kc=209,Zc=210,$c=211,Jc=212,Qc=213,tu=214,na=0,ia=1,ra=2,Wi=3,sa=4,aa=5,oa=6,la=7,Tl=0,eu=1,nu=2,ni=0,iu=1,ru=2,su=3,au=4,ou=5,lu=6,cu=7,Al=300,Xi=301,ji=302,ca=303,ua=304,ls=306,ha=1e3,On=1001,fa=1002,ln=1003,uu=1004,wr=1005,mn=1006,Ss=1007,mi=1008,Gn=1009,wl=1010,Rl=1011,ur=1012,Xa=1013,_i=1014,Bn=1015,Ki=1016,ja=1017,Ya=1018,hr=1020,Cl=35902,Pl=35899,Dl=1021,Ll=1022,Sn=1023,fr=1026,dr=1027,Ul=1028,qa=1029,Ka=1030,Za=1031,$a=1033,$r=33776,Jr=33777,Qr=33778,ts=33779,da=35840,pa=35841,ma=35842,xa=35843,_a=36196,ga=37492,va=37496,Ma=37808,Sa=37809,ba=37810,ya=37811,Ea=37812,Ta=37813,Aa=37814,wa=37815,Ra=37816,Ca=37817,Pa=37818,Da=37819,La=37820,Ua=37821,Ia=36492,Na=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,Va=36286,hu=3200,fu=3201,du=0,pu=1,ti="",dn="srgb",Yi="srgb-linear",is="linear",ve="srgb",Ai=7680,To=519,mu=512,xu=513,_u=514,Il=515,gu=516,vu=517,Mu=518,Su=519,Ao=35044,wo="300 es",Tn=2e3,rs=2001;function Nl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bu(){const i=ss("canvas");return i.style.display="block",i}const Ro={};function Co(...i){const t="THREE."+i.shift();console.log(t,...i)}function Kt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function Ce(...i){const t="THREE."+i.shift();console.error(t,...i)}function pr(...i){const t=i.join(" ");t in Ro||(Ro[t]=!0,Kt(...i))}function yu(i,t,e){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],es=Math.PI/180,Ga=180/Math.PI;function xr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function Eu(i,t){return(i%t+t)%t}function bs(i,t,e){return(1-e)*i+e*t}function ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Je(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tu={DEG2RAD:es};class re{constructor(t=0,e=0){re.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*r+t.x,this.y=a*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,a,o,l){let h=n[r+0],u=n[r+1],d=n[r+2],m=n[r+3],x=a[o+0],M=a[o+1],y=a[o+2],T=a[o+3];if(l<=0){t[e+0]=h,t[e+1]=u,t[e+2]=d,t[e+3]=m;return}if(l>=1){t[e+0]=x,t[e+1]=M,t[e+2]=y,t[e+3]=T;return}if(m!==T||h!==x||u!==M||d!==y){let g=h*x+u*M+d*y+m*T;g<0&&(x=-x,M=-M,y=-y,T=-T,g=-g);let p=1-l;if(g<.9995){const I=Math.acos(g),D=Math.sin(I);p=Math.sin(p*I)/D,l=Math.sin(l*I)/D,h=h*p+x*l,u=u*p+M*l,d=d*p+y*l,m=m*p+T*l}else{h=h*p+x*l,u=u*p+M*l,d=d*p+y*l,m=m*p+T*l;const I=1/Math.sqrt(h*h+u*u+d*d+m*m);h*=I,u*=I,d*=I,m*=I}}t[e]=h,t[e+1]=u,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,a,o){const l=n[r],h=n[r+1],u=n[r+2],d=n[r+3],m=a[o],x=a[o+1],M=a[o+2],y=a[o+3];return t[e]=l*y+d*m+h*M-u*x,t[e+1]=h*y+d*x+u*m-l*M,t[e+2]=u*y+d*M+l*x-h*m,t[e+3]=d*y-l*m-h*x-u*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,a=t._z,o=t._order,l=Math.cos,h=Math.sin,u=l(n/2),d=l(r/2),m=l(a/2),x=h(n/2),M=h(r/2),y=h(a/2);switch(o){case"XYZ":this._x=x*d*m+u*M*y,this._y=u*M*m-x*d*y,this._z=u*d*y+x*M*m,this._w=u*d*m-x*M*y;break;case"YXZ":this._x=x*d*m+u*M*y,this._y=u*M*m-x*d*y,this._z=u*d*y-x*M*m,this._w=u*d*m+x*M*y;break;case"ZXY":this._x=x*d*m-u*M*y,this._y=u*M*m+x*d*y,this._z=u*d*y+x*M*m,this._w=u*d*m-x*M*y;break;case"ZYX":this._x=x*d*m-u*M*y,this._y=u*M*m+x*d*y,this._z=u*d*y-x*M*m,this._w=u*d*m+x*M*y;break;case"YZX":this._x=x*d*m+u*M*y,this._y=u*M*m+x*d*y,this._z=u*d*y-x*M*m,this._w=u*d*m-x*M*y;break;case"XZY":this._x=x*d*m-u*M*y,this._y=u*M*m-x*d*y,this._z=u*d*y+x*M*m,this._w=u*d*m+x*M*y;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],a=e[8],o=e[1],l=e[5],h=e[9],u=e[2],d=e[6],m=e[10],x=n+l+m;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(d-h)*M,this._y=(a-u)*M,this._z=(o-r)*M}else if(n>l&&n>m){const M=2*Math.sqrt(1+n-l-m);this._w=(d-h)/M,this._x=.25*M,this._y=(r+o)/M,this._z=(a+u)/M}else if(l>m){const M=2*Math.sqrt(1+l-n-m);this._w=(a-u)/M,this._x=(r+o)/M,this._y=.25*M,this._z=(h+d)/M}else{const M=2*Math.sqrt(1+m-n-l);this._w=(o-r)/M,this._x=(a+u)/M,this._y=(h+d)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,a=t._z,o=t._w,l=e._x,h=e._y,u=e._z,d=e._w;return this._x=n*d+o*l+r*u-a*h,this._y=r*d+o*h+a*l-n*u,this._z=a*d+o*u+n*h-r*l,this._w=o*d-n*l-r*h-a*u,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,r=t._y,a=t._z,o=t._w,l=this.dot(t);l<0&&(n=-n,r=-r,a=-a,o=-o,l=-l);let h=1-e;if(l<.9995){const u=Math.acos(l),d=Math.sin(u);h=Math.sin(h*u)/d,e=Math.sin(e*u)/d,this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+a*e,this._w=this._w*h+o*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+r*e,this._z=this._z*h+a*e,this._w=this._w*h+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Po.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Po.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*r,this.y=a[1]*e+a[4]*n+a[7]*r,this.z=a[2]*e+a[5]*n+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,a=t.x,o=t.y,l=t.z,h=t.w,u=2*(o*r-l*n),d=2*(l*e-a*r),m=2*(a*n-o*e);return this.x=e+h*u+o*m-l*d,this.y=n+h*d+l*u-a*m,this.z=r+h*m+a*d-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r,this.y=a[1]*e+a[5]*n+a[9]*r,this.z=a[2]*e+a[6]*n+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,a=t.z,o=e.x,l=e.y,h=e.z;return this.x=r*h-a*l,this.y=a*o-n*h,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ys.copy(this).projectOnVector(t),this.sub(ys)}reflect(t){return this.sub(ys.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ys=new J,Po=new gi;class $t{constructor(t,e,n,r,a,o,l,h,u){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,o,l,h,u)}set(t,e,n,r,a,o,l,h,u){const d=this.elements;return d[0]=t,d[1]=r,d[2]=l,d[3]=e,d[4]=a,d[5]=h,d[6]=n,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,o=n[0],l=n[3],h=n[6],u=n[1],d=n[4],m=n[7],x=n[2],M=n[5],y=n[8],T=r[0],g=r[3],p=r[6],I=r[1],D=r[4],U=r[7],G=r[2],L=r[5],B=r[8];return a[0]=o*T+l*I+h*G,a[3]=o*g+l*D+h*L,a[6]=o*p+l*U+h*B,a[1]=u*T+d*I+m*G,a[4]=u*g+d*D+m*L,a[7]=u*p+d*U+m*B,a[2]=x*T+M*I+y*G,a[5]=x*g+M*D+y*L,a[8]=x*p+M*U+y*B,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],d=t[8];return e*o*d-e*l*u-n*a*d+n*l*h+r*a*u-r*o*h}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],d=t[8],m=d*o-l*u,x=l*h-d*a,M=u*a-o*h,y=e*m+n*x+r*M;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return t[0]=m*T,t[1]=(r*u-d*n)*T,t[2]=(l*n-r*o)*T,t[3]=x*T,t[4]=(d*e-r*h)*T,t[5]=(r*a-l*e)*T,t[6]=M*T,t[7]=(n*h-u*e)*T,t[8]=(o*e-n*a)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,a,o,l){const h=Math.cos(a),u=Math.sin(a);return this.set(n*h,n*u,-n*(h*o+u*l)+o+t,-r*u,r*h,-r*(-u*o+h*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Es.makeScale(t,e)),this}rotate(t){return this.premultiply(Es.makeRotation(-t)),this}translate(t,e){return this.premultiply(Es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new $t,Do=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lo=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Au(){const i={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===ve&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yi]:{primaries:t,whitePoint:n,transfer:is,toXYZ:Do,fromXYZ:Lo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Do,fromXYZ:Lo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const de=Au();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let wi;class wu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wi===void 0&&(wi=ss("canvas")),wi.width=t.width,wi.height=t.height;const r=wi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=wi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ss("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Vn(a[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ru=0;class Ja{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(Ts(r[o].image)):a.push(Ts(r[o]))}else a=Ts(r);n.url=a}return e||(t.images[this.uuid]=n),n}}function Ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}let Cu=0;const As=new J;class Ke extends Mi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=On,r=On,a=mn,o=mi,l=Sn,h=Gn,u=Ke.DEFAULT_ANISOTROPY,d=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=xr(),this.name="",this.source=new Ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=h,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(As).x}get height(){return this.source.getSize(As).y}get depth(){return this.source.getSize(As).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ha:t.x=t.x-Math.floor(t.x);break;case On:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ha:t.y=t.y-Math.floor(t.y);break;case On:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Al;Ke.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,r=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,a;const h=t.elements,u=h[0],d=h[4],m=h[8],x=h[1],M=h[5],y=h[9],T=h[2],g=h[6],p=h[10];if(Math.abs(d-x)<.01&&Math.abs(m-T)<.01&&Math.abs(y-g)<.01){if(Math.abs(d+x)<.1&&Math.abs(m+T)<.1&&Math.abs(y+g)<.1&&Math.abs(u+M+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(u+1)/2,U=(M+1)/2,G=(p+1)/2,L=(d+x)/4,B=(m+T)/4,Y=(y+g)/4;return D>U&&D>G?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=L/n,a=B/n):U>G?U<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(U),n=L/r,a=Y/r):G<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(G),n=B/a,r=Y/a),this.set(n,r,a,e),this}let I=Math.sqrt((g-y)*(g-y)+(m-T)*(m-T)+(x-d)*(x-d));return Math.abs(I)<.001&&(I=1),this.x=(g-y)/I,this.y=(m-T)/I,this.z=(x-d)/I,this.w=Math.acos((u+M+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pu extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const r={width:t,height:e,depth:n.depth},a=new Ke(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Ja(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Fl extends Ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Du extends Ke{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _r{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(a,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const r=t.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Cr.subVectors(this.max,rr),Ri.subVectors(t.a,rr),Ci.subVectors(t.b,rr),Pi.subVectors(t.c,rr),Yn.subVectors(Ci,Ri),qn.subVectors(Pi,Ci),oi.subVectors(Ri,Pi);let e=[0,-Yn.z,Yn.y,0,-qn.z,qn.y,0,-oi.z,oi.y,Yn.z,0,-Yn.x,qn.z,0,-qn.x,oi.z,0,-oi.x,-Yn.y,Yn.x,0,-qn.y,qn.x,0,-oi.y,oi.x,0];return!ws(e,Ri,Ci,Pi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!ws(e,Ri,Ci,Pi,Cr))?!1:(Pr.crossVectors(Yn,qn),e=[Pr.x,Pr.y,Pr.z],ws(e,Ri,Ci,Pi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cn=[new J,new J,new J,new J,new J,new J,new J,new J],_n=new J,Rr=new _r,Ri=new J,Ci=new J,Pi=new J,Yn=new J,qn=new J,oi=new J,rr=new J,Cr=new J,Pr=new J,li=new J;function ws(i,t,e,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){li.fromArray(i,a);const l=r.x*Math.abs(li.x)+r.y*Math.abs(li.y)+r.z*Math.abs(li.z),h=t.dot(li),u=e.dot(li),d=n.dot(li);if(Math.max(-Math.max(h,u,d),Math.min(h,u,d))>l)return!1}return!0}const Lu=new _r,sr=new J,Rs=new J;class cs{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Lu.setFromPoints(t).getCenter(n);let r=0;for(let a=0,o=t.length;a<o;a++)r=Math.max(r,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);const e=sr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(sr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Rs)),this.expandByPoint(sr.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Pn=new J,Cs=new J,Dr=new J,Kn=new J,Ps=new J,Lr=new J,Ds=new J;class Qa{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Cs.copy(t).add(e).multiplyScalar(.5),Dr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Cs);const a=t.distanceTo(e)*.5,o=-this.direction.dot(Dr),l=Kn.dot(this.direction),h=-Kn.dot(Dr),u=Kn.lengthSq(),d=Math.abs(1-o*o);let m,x,M,y;if(d>0)if(m=o*h-l,x=o*l-h,y=a*d,m>=0)if(x>=-y)if(x<=y){const T=1/d;m*=T,x*=T,M=m*(m+o*x+2*l)+x*(o*m+x+2*h)+u}else x=a,m=Math.max(0,-(o*x+l)),M=-m*m+x*(x+2*h)+u;else x=-a,m=Math.max(0,-(o*x+l)),M=-m*m+x*(x+2*h)+u;else x<=-y?(m=Math.max(0,-(-o*a+l)),x=m>0?-a:Math.min(Math.max(-a,-h),a),M=-m*m+x*(x+2*h)+u):x<=y?(m=0,x=Math.min(Math.max(-a,-h),a),M=x*(x+2*h)+u):(m=Math.max(0,-(o*a+l)),x=m>0?a:Math.min(Math.max(-a,-h),a),M=-m*m+x*(x+2*h)+u);else x=o>0?-a:a,m=Math.max(0,-(o*x+l)),M=-m*m+x*(x+2*h)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Cs).addScaledVector(Dr,x),M}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,a=t.radius*t.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=n-o,h=n+o;return h<0?null:l<0?this.at(h,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,a,o,l,h;const u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,x=this.origin;return u>=0?(n=(t.min.x-x.x)*u,r=(t.max.x-x.x)*u):(n=(t.max.x-x.x)*u,r=(t.min.x-x.x)*u),d>=0?(a=(t.min.y-x.y)*d,o=(t.max.y-x.y)*d):(a=(t.max.y-x.y)*d,o=(t.min.y-x.y)*d),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),m>=0?(l=(t.min.z-x.z)*m,h=(t.max.z-x.z)*m):(l=(t.max.z-x.z)*m,h=(t.min.z-x.z)*m),n>h||l>r)||((l>n||n!==n)&&(n=l),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,r,a){Ps.subVectors(e,t),Lr.subVectors(n,t),Ds.crossVectors(Ps,Lr);let o=this.direction.dot(Ds),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const h=l*this.direction.dot(Lr.crossVectors(Kn,Lr));if(h<0)return null;const u=l*this.direction.dot(Ps.cross(Kn));if(u<0||h+u>o)return null;const d=-l*Kn.dot(Ds);return d<0?null:this.at(d/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,n,r,a,o,l,h,u,d,m,x,M,y,T,g){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,a,o,l,h,u,d,m,x,M,y,T,g)}set(t,e,n,r,a,o,l,h,u,d,m,x,M,y,T,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=a,p[5]=o,p[9]=l,p[13]=h,p[2]=u,p[6]=d,p[10]=m,p[14]=x,p[3]=M,p[7]=y,p[11]=T,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Di.setFromMatrixColumn(t,0).length(),a=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,a=t.z,o=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r),d=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const x=o*d,M=o*m,y=l*d,T=l*m;e[0]=h*d,e[4]=-h*m,e[8]=u,e[1]=M+y*u,e[5]=x-T*u,e[9]=-l*h,e[2]=T-x*u,e[6]=y+M*u,e[10]=o*h}else if(t.order==="YXZ"){const x=h*d,M=h*m,y=u*d,T=u*m;e[0]=x+T*l,e[4]=y*l-M,e[8]=o*u,e[1]=o*m,e[5]=o*d,e[9]=-l,e[2]=M*l-y,e[6]=T+x*l,e[10]=o*h}else if(t.order==="ZXY"){const x=h*d,M=h*m,y=u*d,T=u*m;e[0]=x-T*l,e[4]=-o*m,e[8]=y+M*l,e[1]=M+y*l,e[5]=o*d,e[9]=T-x*l,e[2]=-o*u,e[6]=l,e[10]=o*h}else if(t.order==="ZYX"){const x=o*d,M=o*m,y=l*d,T=l*m;e[0]=h*d,e[4]=y*u-M,e[8]=x*u+T,e[1]=h*m,e[5]=T*u+x,e[9]=M*u-y,e[2]=-u,e[6]=l*h,e[10]=o*h}else if(t.order==="YZX"){const x=o*h,M=o*u,y=l*h,T=l*u;e[0]=h*d,e[4]=T-x*m,e[8]=y*m+M,e[1]=m,e[5]=o*d,e[9]=-l*d,e[2]=-u*d,e[6]=M*m+y,e[10]=x-T*m}else if(t.order==="XZY"){const x=o*h,M=o*u,y=l*h,T=l*u;e[0]=h*d,e[4]=-m,e[8]=u*d,e[1]=x*m+T,e[5]=o*d,e[9]=M*m-y,e[2]=y*m-M,e[6]=l*d,e[10]=T*m+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Iu)}lookAt(t,e,n){const r=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Zn.crossVectors(n,an),Zn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Zn.crossVectors(n,an)),Zn.normalize(),Ur.crossVectors(an,Zn),r[0]=Zn.x,r[4]=Ur.x,r[8]=an.x,r[1]=Zn.y,r[5]=Ur.y,r[9]=an.y,r[2]=Zn.z,r[6]=Ur.z,r[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,a=this.elements,o=n[0],l=n[4],h=n[8],u=n[12],d=n[1],m=n[5],x=n[9],M=n[13],y=n[2],T=n[6],g=n[10],p=n[14],I=n[3],D=n[7],U=n[11],G=n[15],L=r[0],B=r[4],Y=r[8],A=r[12],_=r[1],E=r[5],V=r[9],k=r[13],Q=r[2],tt=r[6],z=r[10],$=r[14],j=r[3],st=r[7],ht=r[11],Dt=r[15];return a[0]=o*L+l*_+h*Q+u*j,a[4]=o*B+l*E+h*tt+u*st,a[8]=o*Y+l*V+h*z+u*ht,a[12]=o*A+l*k+h*$+u*Dt,a[1]=d*L+m*_+x*Q+M*j,a[5]=d*B+m*E+x*tt+M*st,a[9]=d*Y+m*V+x*z+M*ht,a[13]=d*A+m*k+x*$+M*Dt,a[2]=y*L+T*_+g*Q+p*j,a[6]=y*B+T*E+g*tt+p*st,a[10]=y*Y+T*V+g*z+p*ht,a[14]=y*A+T*k+g*$+p*Dt,a[3]=I*L+D*_+U*Q+G*j,a[7]=I*B+D*E+U*tt+G*st,a[11]=I*Y+D*V+U*z+G*ht,a[15]=I*A+D*k+U*$+G*Dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],a=t[12],o=t[1],l=t[5],h=t[9],u=t[13],d=t[2],m=t[6],x=t[10],M=t[14],y=t[3],T=t[7],g=t[11],p=t[15];return y*(+a*h*m-r*u*m-a*l*x+n*u*x+r*l*M-n*h*M)+T*(+e*h*M-e*u*x+a*o*x-r*o*M+r*u*d-a*h*d)+g*(+e*u*m-e*l*M-a*o*m+n*o*M+a*l*d-n*u*d)+p*(-r*l*d-e*h*m+e*l*x+r*o*m-n*o*x+n*h*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],a=t[3],o=t[4],l=t[5],h=t[6],u=t[7],d=t[8],m=t[9],x=t[10],M=t[11],y=t[12],T=t[13],g=t[14],p=t[15],I=m*g*u-T*x*u+T*h*M-l*g*M-m*h*p+l*x*p,D=y*x*u-d*g*u-y*h*M+o*g*M+d*h*p-o*x*p,U=d*T*u-y*m*u+y*l*M-o*T*M-d*l*p+o*m*p,G=y*m*h-d*T*h-y*l*x+o*T*x+d*l*g-o*m*g,L=e*I+n*D+r*U+a*G;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return t[0]=I*B,t[1]=(T*x*a-m*g*a-T*r*M+n*g*M+m*r*p-n*x*p)*B,t[2]=(l*g*a-T*h*a+T*r*u-n*g*u-l*r*p+n*h*p)*B,t[3]=(m*h*a-l*x*a-m*r*u+n*x*u+l*r*M-n*h*M)*B,t[4]=D*B,t[5]=(d*g*a-y*x*a+y*r*M-e*g*M-d*r*p+e*x*p)*B,t[6]=(y*h*a-o*g*a-y*r*u+e*g*u+o*r*p-e*h*p)*B,t[7]=(o*x*a-d*h*a+d*r*u-e*x*u-o*r*M+e*h*M)*B,t[8]=U*B,t[9]=(y*m*a-d*T*a-y*n*M+e*T*M+d*n*p-e*m*p)*B,t[10]=(o*T*a-y*l*a+y*n*u-e*T*u-o*n*p+e*l*p)*B,t[11]=(d*l*a-o*m*a-d*n*u+e*m*u+o*n*M-e*l*M)*B,t[12]=G*B,t[13]=(d*T*r-y*m*r+y*n*x-e*T*x-d*n*g+e*m*g)*B,t[14]=(y*l*r-o*T*r-y*n*h+e*T*h+o*n*g-e*l*g)*B,t[15]=(o*m*r-d*l*r+d*n*h-e*m*h-o*n*x+e*l*x)*B,this}scale(t){const e=this.elements,n=t.x,r=t.y,a=t.z;return e[0]*=n,e[4]*=r,e[8]*=a,e[1]*=n,e[5]*=r,e[9]*=a,e[2]*=n,e[6]*=r,e[10]*=a,e[3]*=n,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),a=1-n,o=t.x,l=t.y,h=t.z,u=a*o,d=a*l;return this.set(u*o+n,u*l-r*h,u*h+r*l,0,u*l+r*h,d*l+n,d*h-r*o,0,u*h-r*l,d*h+r*o,a*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,a,o){return this.set(1,n,a,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,a=e._x,o=e._y,l=e._z,h=e._w,u=a+a,d=o+o,m=l+l,x=a*u,M=a*d,y=a*m,T=o*d,g=o*m,p=l*m,I=h*u,D=h*d,U=h*m,G=n.x,L=n.y,B=n.z;return r[0]=(1-(T+p))*G,r[1]=(M+U)*G,r[2]=(y-D)*G,r[3]=0,r[4]=(M-U)*L,r[5]=(1-(x+p))*L,r[6]=(g+I)*L,r[7]=0,r[8]=(y+D)*B,r[9]=(g-I)*B,r[10]=(1-(x+T))*B,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let a=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),l=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),t.x=r[12],t.y=r[13],t.z=r[14],gn.copy(this);const u=1/a,d=1/o,m=1/l;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=d,gn.elements[5]*=d,gn.elements[6]*=d,gn.elements[8]*=m,gn.elements[9]*=m,gn.elements[10]*=m,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,a,o,l=Tn,h=!1){const u=this.elements,d=2*a/(e-t),m=2*a/(n-r),x=(e+t)/(e-t),M=(n+r)/(n-r);let y,T;if(h)y=a/(o-a),T=o*a/(o-a);else if(l===Tn)y=-(o+a)/(o-a),T=-2*o*a/(o-a);else if(l===rs)y=-o/(o-a),T=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=x,u[12]=0,u[1]=0,u[5]=m,u[9]=M,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(t,e,n,r,a,o,l=Tn,h=!1){const u=this.elements,d=2/(e-t),m=2/(n-r),x=-(e+t)/(e-t),M=-(n+r)/(n-r);let y,T;if(h)y=1/(o-a),T=o/(o-a);else if(l===Tn)y=-2/(o-a),T=-(o+a)/(o-a);else if(l===rs)y=-1/(o-a),T=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=x,u[1]=0,u[5]=m,u[9]=0,u[13]=M,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new J,gn=new Le,Uu=new J(0,0,0),Iu=new J(1,1,1),Zn=new J,Ur=new J,an=new J,Uo=new Le,Io=new gi;class Hn{constructor(t=0,e=0,n=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,a=r[0],o=r[4],l=r[8],h=r[1],u=r[5],d=r[9],m=r[2],x=r[6],M=r[10];switch(e){case"XYZ":this._y=Math.asin(ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,M),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(x,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,M),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,M));break;case"XZY":this._z=Math.asin(-ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(x,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-d,M),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Ol{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nu=0;const No=new J,Li=new gi,Dn=new Le,Ir=new J,ar=new J,Fu=new J,Ou=new gi,Fo=new J(1,0,0),Oo=new J(0,1,0),Bo=new J(0,0,1),zo={type:"added"},Bu={type:"removed"},Ui={type:"childadded",child:null},Ls={type:"childremoved",child:null};class en extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new J,e=new Hn,n=new gi,r=new J(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Le},normalMatrix:{value:new $t}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ol,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(Bo,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(Bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(ar,Ir,this.up):Dn.lookAt(Ir,ar,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(Dn),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zo),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zo),Ui.child=t,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,Fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let u=0,d=h.length;u<d;u++){const m=h[u];a(t.shapes,m)}else a(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,u=this.material.length;h<u;h++)l.push(a(t.materials,this.material[h]));r.material=l}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];r.animations.push(a(t.animations,h))}}if(e){const l=o(t.geometries),h=o(t.materials),u=o(t.textures),d=o(t.images),m=o(t.shapes),x=o(t.skeletons),M=o(t.animations),y=o(t.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),M.length>0&&(n.animations=M),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(l){const h=[];for(const u in l){const d=l[u];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}en.DEFAULT_UP=new J(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new J,Ln=new J,Us=new J,Un=new J,Ii=new J,Ni=new J,Vo=new J,Is=new J,Ns=new J,Fs=new J,Os=new Pe,Bs=new Pe,zs=new Pe;class Mn{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),vn.subVectors(t,e),r.cross(vn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,n,r,a){vn.subVectors(r,e),Ln.subVectors(n,e),Us.subVectors(t,e);const o=vn.dot(vn),l=vn.dot(Ln),h=vn.dot(Us),u=Ln.dot(Ln),d=Ln.dot(Us),m=o*u-l*l;if(m===0)return a.set(0,0,0),null;const x=1/m,M=(u*h-l*d)*x,y=(o*d-l*h)*x;return a.set(1-M-y,y,M)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,r,a,o,l,h){return this.getBarycoord(t,e,n,r,Un)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Un.x),h.addScaledVector(o,Un.y),h.addScaledVector(l,Un.z),h)}static getInterpolatedAttribute(t,e,n,r,a,o){return Os.setScalar(0),Bs.setScalar(0),zs.setScalar(0),Os.fromBufferAttribute(t,e),Bs.fromBufferAttribute(t,n),zs.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Os,a.x),o.addScaledVector(Bs,a.y),o.addScaledVector(zs,a.z),o}static isFrontFacing(t,e,n,r){return vn.subVectors(n,e),Ln.subVectors(t,e),vn.cross(Ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),vn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Mn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,a){return Mn.getInterpolation(t,this.a,this.b,this.c,e,n,r,a)}containsPoint(t){return Mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,a=this.c;let o,l;Ii.subVectors(r,n),Ni.subVectors(a,n),Is.subVectors(t,n);const h=Ii.dot(Is),u=Ni.dot(Is);if(h<=0&&u<=0)return e.copy(n);Ns.subVectors(t,r);const d=Ii.dot(Ns),m=Ni.dot(Ns);if(d>=0&&m<=d)return e.copy(r);const x=h*m-d*u;if(x<=0&&h>=0&&d<=0)return o=h/(h-d),e.copy(n).addScaledVector(Ii,o);Fs.subVectors(t,a);const M=Ii.dot(Fs),y=Ni.dot(Fs);if(y>=0&&M<=y)return e.copy(a);const T=M*u-h*y;if(T<=0&&u>=0&&y<=0)return l=u/(u-y),e.copy(n).addScaledVector(Ni,l);const g=d*y-M*m;if(g<=0&&m-d>=0&&M-y>=0)return Vo.subVectors(a,r),l=(m-d)/(m-d+(M-y)),e.copy(r).addScaledVector(Vo,l);const p=1/(g+T+x);return o=T*p,l=x*p,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ni,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Vs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class me{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=de.workingColorSpace){if(t=Eu(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Vs(o,a,t+1/3),this.g=Vs(o,a,t),this.b=Vs(o,a,t-1/3)}return de.colorSpaceToWorking(this,r),this}setStyle(t,e=dn){function n(a){a!==void 0&&parseFloat(a)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=Bl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return de.workingToColorSpace(Xe.copy(this),t),Math.round(ae(Xe.r*255,0,255))*65536+Math.round(ae(Xe.g*255,0,255))*256+Math.round(ae(Xe.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Xe.copy(this),e);const n=Xe.r,r=Xe.g,a=Xe.b,o=Math.max(n,r,a),l=Math.min(n,r,a);let h,u;const d=(l+o)/2;if(l===o)h=0,u=0;else{const m=o-l;switch(u=d<=.5?m/(o+l):m/(2-o-l),o){case n:h=(r-a)/m+(r<a?6:0);break;case r:h=(a-n)/m+2;break;case a:h=(n-r)/m+4;break}h/=6}return t.h=h,t.s=u,t.l=d,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=dn){de.workingToColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,r=Xe.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Nr);const n=bs($n.h,Nr.h,e),r=bs($n.s,Nr.s,e),a=bs($n.l,Nr.l,e);return this.setHSL(n,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*r,this.g=a[1]*e+a[4]*n+a[7]*r,this.b=a[2]*e+a[5]*n+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new me;me.NAMES=Bl;let zu=0;class gr extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=Hi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=ea,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new me(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const l in a){const h=a[l];delete h.metadata,o.push(h)}return o}if(e){const a=r(t.textures),o=r(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zl extends gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new J,Fr=new re;let Vu=0;class bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ao,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Je(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),r=Je(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,a){return t*=this.itemSize,this.normalized&&(e=Je(e,this.array),n=Je(n,this.array),r=Je(r,this.array),a=Je(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ao&&(t.usage=this.usage),t}}class Vl extends bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gl extends bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xi extends bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Gu=0;const fn=new Le,Gs=new en,Fi=new J,on=new _r,or=new _r,Oe=new J;class An extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nl(t)?Gl:Vl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new $t().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Gs.lookAt(t),Gs.updateMatrix(),this.applyMatrix4(Gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,a=t.length;r<a;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xi(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const a=t[r];e.setXYZ(r,a.x,a.y,a.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const a=e[n];on.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const l=e[a];or.setFromBufferAttribute(l),this.morphTargetsRelative?(Oe.addVectors(on.min,or.min),on.expandByPoint(Oe),Oe.addVectors(on.max,or.max),on.expandByPoint(Oe)):(on.expandByPoint(or.min),on.expandByPoint(or.max))}on.getCenter(n);let r=0;for(let a=0,o=t.count;a<o;a++)Oe.fromBufferAttribute(t,a),r=Math.max(r,n.distanceToSquared(Oe));if(e)for(let a=0,o=e.length;a<o;a++){const l=e[a],h=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Oe.fromBufferAttribute(l,u),h&&(Fi.fromBufferAttribute(t,u),Oe.add(Fi)),r=Math.max(r,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],h=[];for(let Y=0;Y<n.count;Y++)l[Y]=new J,h[Y]=new J;const u=new J,d=new J,m=new J,x=new re,M=new re,y=new re,T=new J,g=new J;function p(Y,A,_){u.fromBufferAttribute(n,Y),d.fromBufferAttribute(n,A),m.fromBufferAttribute(n,_),x.fromBufferAttribute(a,Y),M.fromBufferAttribute(a,A),y.fromBufferAttribute(a,_),d.sub(u),m.sub(u),M.sub(x),y.sub(x);const E=1/(M.x*y.y-y.x*M.y);isFinite(E)&&(T.copy(d).multiplyScalar(y.y).addScaledVector(m,-M.y).multiplyScalar(E),g.copy(m).multiplyScalar(M.x).addScaledVector(d,-y.x).multiplyScalar(E),l[Y].add(T),l[A].add(T),l[_].add(T),h[Y].add(g),h[A].add(g),h[_].add(g))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let Y=0,A=I.length;Y<A;++Y){const _=I[Y],E=_.start,V=_.count;for(let k=E,Q=E+V;k<Q;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const D=new J,U=new J,G=new J,L=new J;function B(Y){G.fromBufferAttribute(r,Y),L.copy(G);const A=l[Y];D.copy(A),D.sub(G.multiplyScalar(G.dot(A))).normalize(),U.crossVectors(L,A);const E=U.dot(h[Y])<0?-1:1;o.setXYZW(Y,D.x,D.y,D.z,E)}for(let Y=0,A=I.length;Y<A;++Y){const _=I[Y],E=_.start,V=_.count;for(let k=E,Q=E+V;k<Q;k+=3)B(t.getX(k+0)),B(t.getX(k+1)),B(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let x=0,M=n.count;x<M;x++)n.setXYZ(x,0,0,0);const r=new J,a=new J,o=new J,l=new J,h=new J,u=new J,d=new J,m=new J;if(t)for(let x=0,M=t.count;x<M;x+=3){const y=t.getX(x+0),T=t.getX(x+1),g=t.getX(x+2);r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,T),o.fromBufferAttribute(e,g),d.subVectors(o,a),m.subVectors(r,a),d.cross(m),l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,g),l.add(d),h.add(d),u.add(d),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(g,u.x,u.y,u.z)}else for(let x=0,M=e.count;x<M;x+=3)r.fromBufferAttribute(e,x+0),a.fromBufferAttribute(e,x+1),o.fromBufferAttribute(e,x+2),d.subVectors(o,a),m.subVectors(r,a),d.cross(m),n.setXYZ(x+0,d.x,d.y,d.z),n.setXYZ(x+1,d.x,d.y,d.z),n.setXYZ(x+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(l,h){const u=l.array,d=l.itemSize,m=l.normalized,x=new u.constructor(h.length*d);let M=0,y=0;for(let T=0,g=h.length;T<g;T++){l.isInterleavedBufferAttribute?M=h[T]*l.data.stride+l.offset:M=h[T]*d;for(let p=0;p<d;p++)x[y++]=u[M++]}return new bn(x,d,m)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new An,n=this.index.array,r=this.attributes;for(const l in r){const h=r[l],u=t(h,n);e.setAttribute(l,u)}const a=this.morphAttributes;for(const l in a){const h=[],u=a[l];for(let d=0,m=u.length;d<m;d++){const x=u[d],M=t(x,n);h.push(M)}e.morphAttributes[l]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(t[u]=h[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const u=n[h];t.data.attributes[h]=u.toJSON(t.data)}const r={};let a=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],d=[];for(let m=0,x=u.length;m<x;m++){const M=u[m];d.push(M.toJSON(t.data))}d.length>0&&(r[h]=d,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(e))}const a=t.morphAttributes;for(const u in a){const d=[],m=a[u];for(let x=0,M=m.length;x<M;x++)d.push(m[x].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,d=o.length;u<d;u++){const m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Go=new Le,ci=new Qa,Or=new cs,Ho=new J,Br=new J,zr=new J,Vr=new J,Hs=new J,Gr=new J,ko=new J,Hr=new J;class ri extends en{constructor(t=new An,e=new zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(a&&l){Gr.set(0,0,0);for(let h=0,u=a.length;h<u;h++){const d=l[h],m=a[h];d!==0&&(Hs.fromBufferAttribute(m,t),o?Gr.addScaledVector(Hs,d):Gr.addScaledVector(Hs.sub(e),d))}e.add(Gr)}return e}raycast(t,e){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(a),ci.copy(t.ray).recast(t.near),!(Or.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Or,Ho)===null||ci.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Go.copy(a).invert(),ci.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let r;const a=this.geometry,o=this.material,l=a.index,h=a.attributes.position,u=a.attributes.uv,d=a.attributes.uv1,m=a.attributes.normal,x=a.groups,M=a.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,T=x.length;y<T;y++){const g=x[y],p=o[g.materialIndex],I=Math.max(g.start,M.start),D=Math.min(l.count,Math.min(g.start+g.count,M.start+M.count));for(let U=I,G=D;U<G;U+=3){const L=l.getX(U),B=l.getX(U+1),Y=l.getX(U+2);r=kr(this,p,t,n,u,d,m,L,B,Y),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const y=Math.max(0,M.start),T=Math.min(l.count,M.start+M.count);for(let g=y,p=T;g<p;g+=3){const I=l.getX(g),D=l.getX(g+1),U=l.getX(g+2);r=kr(this,o,t,n,u,d,m,I,D,U),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let y=0,T=x.length;y<T;y++){const g=x[y],p=o[g.materialIndex],I=Math.max(g.start,M.start),D=Math.min(h.count,Math.min(g.start+g.count,M.start+M.count));for(let U=I,G=D;U<G;U+=3){const L=U,B=U+1,Y=U+2;r=kr(this,p,t,n,u,d,m,L,B,Y),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{const y=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let g=y,p=T;g<p;g+=3){const I=g,D=g+1,U=g+2;r=kr(this,o,t,n,u,d,m,I,D,U),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}}function Hu(i,t,e,n,r,a,o,l){let h;if(t.side===tn?h=n.intersectTriangle(o,a,r,!0,l):h=n.intersectTriangle(r,a,o,t.side===ii,l),h===null)return null;Hr.copy(l),Hr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Hr);return u<e.near||u>e.far?null:{distance:u,point:Hr.clone(),object:i}}function kr(i,t,e,n,r,a,o,l,h,u){i.getVertexPosition(l,Br),i.getVertexPosition(h,zr),i.getVertexPosition(u,Vr);const d=Hu(i,t,e,n,Br,zr,Vr,ko);if(d){const m=new J;Mn.getBarycoord(ko,Br,zr,Vr,m),r&&(d.uv=Mn.getInterpolatedAttribute(r,l,h,u,m,new re)),a&&(d.uv1=Mn.getInterpolatedAttribute(a,l,h,u,m,new re)),o&&(d.normal=Mn.getInterpolatedAttribute(o,l,h,u,m,new J),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const x={a:l,b:h,c:u,normal:new J,materialIndex:0};Mn.getNormal(Br,zr,Vr,x.normal),d.face=x,d.barycoord=m}return d}class vr extends An{constructor(t=1,e=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const h=[],u=[],d=[],m=[];let x=0,M=0;y("z","y","x",-1,-1,n,e,t,o,a,0),y("z","y","x",1,-1,n,e,-t,o,a,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,a,4),y("x","y","z",-1,-1,t,e,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new xi(u,3)),this.setAttribute("normal",new xi(d,3)),this.setAttribute("uv",new xi(m,2));function y(T,g,p,I,D,U,G,L,B,Y,A){const _=U/B,E=G/Y,V=U/2,k=G/2,Q=L/2,tt=B+1,z=Y+1;let $=0,j=0;const st=new J;for(let ht=0;ht<z;ht++){const Dt=ht*E-k;for(let jt=0;jt<tt;jt++){const Jt=jt*_-V;st[T]=Jt*I,st[g]=Dt*D,st[p]=Q,u.push(st.x,st.y,st.z),st[T]=0,st[g]=0,st[p]=L>0?1:-1,d.push(st.x,st.y,st.z),m.push(jt/B),m.push(1-ht/Y),$+=1}}for(let ht=0;ht<Y;ht++)for(let Dt=0;Dt<B;Dt++){const jt=x+Dt+tt*ht,Jt=x+Dt+tt*(ht+1),le=x+(Dt+1)+tt*(ht+1),ce=x+(Dt+1)+tt*ht;h.push(jt,Jt,ce),h.push(Jt,le,ce),j+=6}l.addGroup(M,j,A),M+=j,x+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function qe(i){const t={};for(let e=0;e<i.length;e++){const n=qi(i[e]);for(const r in n)t[r]=n[r]}return t}function ku(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Wu={clone:qi,merge:qe};var Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kl extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Jn=new J,Wo=new re,Xo=new re;class pn extends kl{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,Wo,Xo),e.subVectors(Xo,Wo)}setViewOffset(t,e,n,r,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/h,e-=o.offsetY*n/u,r*=o.width/h,n*=o.height/u}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class Yu extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const a=new pn(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new pn(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const l=new pn(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const h=new pn(Oi,Bi,t,e);h.layers=this.layers,this.add(h);const u=new pn(Oi,Bi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,a,o,l,h]=e;for(const u of e)this.remove(u);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,h,u,d]=this.children,m=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,a),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,l),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(m,x,M),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Wl extends Ke{constructor(t=[],e=Xi,n,r,a,o,l,h,u,d){super(t,e,n,r,a,o,l,h,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qu extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Wl(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vr(5,5,5),a=new kn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:zn});a.uniforms.tEquirect.value=e;const o=new ri(r,a),l=e.minFilter;return e.minFilter===mi&&(e.minFilter=mn),new Yu(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(a)}}class Wr extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ku={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,a=null,o=null;const l=this._targetRay,h=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const T of t.hand.values()){const g=e.getJointPose(T,n),p=this._getHandJoint(u,T);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],x=d.position.distanceTo(m.position),M=.02,y=.005;u.inputState.pinching&&x>M+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&x<=M-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ku)))}return l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Wr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zu extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $u extends Ke{constructor(t=null,e=1,n=1,r,a,o,l,h,u=ln,d=ln,m,x){super(null,o,l,h,u,d,r,a,m,x),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ws=new J,Ju=new J,Qu=new $t;class Qn{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ws.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ws),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qu.getNormalMatrix(t),r=this.coplanarPoint(Ws).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new cs,th=new re(.5,.5),Xr=new J;class Xl{constructor(t=new Qn,e=new Qn,n=new Qn,r=new Qn,a=new Qn,o=new Qn){this.planes=[t,e,n,r,a,o]}set(t,e,n,r,a,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn,n=!1){const r=this.planes,a=t.elements,o=a[0],l=a[1],h=a[2],u=a[3],d=a[4],m=a[5],x=a[6],M=a[7],y=a[8],T=a[9],g=a[10],p=a[11],I=a[12],D=a[13],U=a[14],G=a[15];if(r[0].setComponents(u-o,M-d,p-y,G-I).normalize(),r[1].setComponents(u+o,M+d,p+y,G+I).normalize(),r[2].setComponents(u+l,M+m,p+T,G+D).normalize(),r[3].setComponents(u-l,M-m,p-T,G-D).normalize(),n)r[4].setComponents(h,x,g,U).normalize(),r[5].setComponents(u-h,M-x,p-g,G-U).normalize();else if(r[4].setComponents(u-h,M-x,p-g,G-U).normalize(),e===Tn)r[5].setComponents(u+h,M+x,p+g,G+U).normalize();else if(e===rs)r[5].setComponents(h,x,g,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=th.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Xr.x=r.normal.x>0?t.max.x:t.min.x,Xr.y=r.normal.y>0?t.max.y:t.min.y,Xr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jl extends gr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const jo=new Le,Ha=new Qa,jr=new cs,Yr=new J;class eh extends en{constructor(t=new An,e=new jl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(r),jr.radius+=a,t.ray.intersectsSphere(jr)===!1)return;jo.copy(r).invert(),Ha.copy(t.ray).applyMatrix4(jo);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,u=n.index,m=n.attributes.position;if(u!==null){const x=Math.max(0,o.start),M=Math.min(u.count,o.start+o.count);for(let y=x,T=M;y<T;y++){const g=u.getX(y);Yr.fromBufferAttribute(m,g),Yo(Yr,g,h,r,t,e,this)}}else{const x=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let y=x,T=M;y<T;y++)Yr.fromBufferAttribute(m,y),Yo(Yr,y,h,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Yo(i,t,e,n,r,a,o){const l=Ha.distanceSqToPoint(i);if(l<e){const h=new J;Ha.closestPointToPoint(i,h),h.applyMatrix4(n);const u=r.ray.origin.distanceTo(h);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(l),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Yl extends Ke{constructor(t,e,n=_i,r,a,o,l=ln,h=ln,u,d=fr,m=1){if(d!==fr&&d!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:e,depth:m};super(x,r,a,o,l,h,d,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ja(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ql extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class us extends An{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const a=t/2,o=e/2,l=Math.floor(n),h=Math.floor(r),u=l+1,d=h+1,m=t/l,x=e/h,M=[],y=[],T=[],g=[];for(let p=0;p<d;p++){const I=p*x-o;for(let D=0;D<u;D++){const U=D*m-a;y.push(U,-I,0),T.push(0,0,1),g.push(D/l),g.push(1-p/h)}}for(let p=0;p<h;p++)for(let I=0;I<l;I++){const D=I+u*p,U=I+u*(p+1),G=I+1+u*(p+1),L=I+1+u*p;M.push(D,U,L),M.push(U,G,L)}this.setIndex(M),this.setAttribute("position",new xi(y,3)),this.setAttribute("normal",new xi(T,3)),this.setAttribute("uv",new xi(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}class nh extends gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ih extends gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rh extends kl{constructor(t=-1,e=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-t,o=n+t,l=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,l-=d*this.view.offsetY,h=l-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sh extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class qo{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ah extends Mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Kt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ko(i,t,e,n){const r=oh(n);switch(e){case Dl:return i*t;case Ul:return i*t/r.components*r.byteLength;case qa:return i*t/r.components*r.byteLength;case Ka:return i*t*2/r.components*r.byteLength;case Za:return i*t*2/r.components*r.byteLength;case Ll:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case $a:return i*t*4/r.components*r.byteLength;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pa:case xa:return Math.max(i,16)*Math.max(t,8)/4;case da:case ma:return Math.max(i,8)*Math.max(t,8)/2;case _a:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ia:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function oh(i){switch(i){case Gn:case wl:return{byteLength:1,components:1};case ur:case Rl:case Ki:return{byteLength:2,components:1};case ja:case Ya:return{byteLength:2,components:4};case _i:case Xa:case Bn:return{byteLength:4,components:1};case Cl:case Pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);function Kl(){let i=null,t=!1,e=null,n=null;function r(a,o){e(a,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function lh(i){const t=new WeakMap;function e(l,h){const u=l.array,d=l.usage,m=u.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,u,d),l.onUploadCallback();let M;if(u instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)M=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)M=i.SHORT;else if(u instanceof Uint32Array)M=i.UNSIGNED_INT;else if(u instanceof Int32Array)M=i.INT;else if(u instanceof Int8Array)M=i.BYTE;else if(u instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:M,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,h,u){const d=h.array,m=h.updateRanges;if(i.bindBuffer(u,l),m.length===0)i.bufferSubData(u,0,d);else{m.sort((M,y)=>M.start-y.start);let x=0;for(let M=1;M<m.length;M++){const y=m[x],T=m[M];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++x,m[x]=T)}m.length=x+1;for(let M=0,y=m.length;M<y;M++){const T=m[M];i.bufferSubData(u,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=t.get(l);h&&(i.deleteBuffer(h.buffer),t.delete(l))}function o(l,h){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=t.get(l);if(u===void 0)t.set(l,e(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,h),u.version=l.version}}return{get:r,remove:a,update:o}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uh=`#ifdef USE_ALPHAHASH
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
#endif`,hh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
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
#endif`,xh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_h=`#ifdef USE_BATCHING
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
#endif`,gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bh=`#ifdef USE_IRIDESCENCE
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
#endif`,yh=`#ifdef USE_BUMPMAP
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
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lh=`#define PI 3.141592653589793
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
} // validated`,Uh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ih=`vec3 transformedNormal = objectNormal;
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
#endif`,Nh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
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
}`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tf=`uniform bool receiveShadow;
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
#endif`,ef=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,nf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,of=`PhysicalMaterial material;
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
#endif`,lf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,cf=`
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
#endif`,uf=`#if defined( RE_IndirectDiffuse )
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
#endif`,hf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,df=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_f=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vf=`#if defined( USE_POINTS_UV )
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
#endif`,Mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tf=`#ifdef USE_MORPHTARGETS
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
#endif`,Af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lf=`#ifdef USE_NORMALMAP
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
#endif`,Uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Of=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,Kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,td=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,id=`#ifdef USE_TRANSMISSION
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
#endif`,rd=`#ifdef USE_TRANSMISSION
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
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ud=`uniform sampler2D t2D;
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`#include <common>
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
}`,xd=`#if DEPTH_PACKING == 3200
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
}`,_d=`#define DISTANCE
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
}`,gd=`#define DISTANCE
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
}`,vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sd=`uniform float scale;
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
}`,bd=`uniform vec3 diffuse;
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
}`,yd=`#include <common>
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Td=`#define LAMBERT
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
}`,Ad=`#define LAMBERT
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
}`,wd=`#define MATCAP
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
}`,Rd=`#define MATCAP
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
}`,Cd=`#define NORMAL
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
}`,Pd=`#define NORMAL
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
}`,Dd=`#define PHONG
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
}`,Ld=`#define PHONG
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
}`,Ud=`#define STANDARD
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
}`,Id=`#define STANDARD
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
}`,Nd=`#define TOON
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
}`,Fd=`#define TOON
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
}`,Od=`uniform float size;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,zd=`#include <common>
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
}`,Vd=`uniform vec3 color;
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
}`,Gd=`uniform float rotation;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:ch,alphahash_pars_fragment:uh,alphamap_fragment:hh,alphamap_pars_fragment:fh,alphatest_fragment:dh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:xh,batching_pars_vertex:_h,batching_vertex:gh,begin_vertex:vh,beginnormal_vertex:Mh,bsdfs:Sh,iridescence_fragment:bh,bumpmap_pars_fragment:yh,clipping_planes_fragment:Eh,clipping_planes_pars_fragment:Th,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:wh,color_fragment:Rh,color_pars_fragment:Ch,color_pars_vertex:Ph,color_vertex:Dh,common:Lh,cube_uv_reflection_fragment:Uh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Nh,displacementmap_vertex:Fh,emissivemap_fragment:Oh,emissivemap_pars_fragment:Bh,colorspace_fragment:zh,colorspace_pars_fragment:Vh,envmap_fragment:Gh,envmap_common_pars_fragment:Hh,envmap_pars_fragment:kh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:ef,envmap_vertex:Xh,fog_vertex:jh,fog_pars_vertex:Yh,fog_fragment:qh,fog_pars_fragment:Kh,gradientmap_pars_fragment:Zh,lightmap_pars_fragment:$h,lights_lambert_fragment:Jh,lights_lambert_pars_fragment:Qh,lights_pars_begin:tf,lights_toon_fragment:nf,lights_toon_pars_fragment:rf,lights_phong_fragment:sf,lights_phong_pars_fragment:af,lights_physical_fragment:of,lights_physical_pars_fragment:lf,lights_fragment_begin:cf,lights_fragment_maps:uf,lights_fragment_end:hf,logdepthbuf_fragment:ff,logdepthbuf_pars_fragment:df,logdepthbuf_pars_vertex:pf,logdepthbuf_vertex:mf,map_fragment:xf,map_pars_fragment:_f,map_particle_fragment:gf,map_particle_pars_fragment:vf,metalnessmap_fragment:Mf,metalnessmap_pars_fragment:Sf,morphinstance_vertex:bf,morphcolor_vertex:yf,morphnormal_vertex:Ef,morphtarget_pars_vertex:Tf,morphtarget_vertex:Af,normal_fragment_begin:wf,normal_fragment_maps:Rf,normal_pars_fragment:Cf,normal_pars_vertex:Pf,normal_vertex:Df,normalmap_pars_fragment:Lf,clearcoat_normal_fragment_begin:Uf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Ff,opaque_fragment:Of,packing:Bf,premultiplied_alpha_fragment:zf,project_vertex:Vf,dithering_fragment:Gf,dithering_pars_fragment:Hf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Wf,shadowmap_pars_fragment:Xf,shadowmap_pars_vertex:jf,shadowmap_vertex:Yf,shadowmask_pars_fragment:qf,skinbase_vertex:Kf,skinning_pars_vertex:Zf,skinning_vertex:$f,skinnormal_vertex:Jf,specularmap_fragment:Qf,specularmap_pars_fragment:td,tonemapping_fragment:ed,tonemapping_pars_fragment:nd,transmission_fragment:id,transmission_pars_fragment:rd,uv_pars_fragment:sd,uv_pars_vertex:ad,uv_vertex:od,worldpos_vertex:ld,background_vert:cd,background_frag:ud,backgroundCube_vert:hd,backgroundCube_frag:fd,cube_vert:dd,cube_frag:pd,depth_vert:md,depth_frag:xd,distanceRGBA_vert:_d,distanceRGBA_frag:gd,equirect_vert:vd,equirect_frag:Md,linedashed_vert:Sd,linedashed_frag:bd,meshbasic_vert:yd,meshbasic_frag:Ed,meshlambert_vert:Td,meshlambert_frag:Ad,meshmatcap_vert:wd,meshmatcap_frag:Rd,meshnormal_vert:Cd,meshnormal_frag:Pd,meshphong_vert:Dd,meshphong_frag:Ld,meshphysical_vert:Ud,meshphysical_frag:Id,meshtoon_vert:Nd,meshtoon_frag:Fd,points_vert:Od,points_frag:Bd,shadow_vert:zd,shadow_frag:Vd,sprite_vert:Gd,sprite_frag:Hd},Mt={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},En={basic:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new me(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:qe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:qe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:qe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new me(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:qe([Mt.points,Mt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:qe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:qe([Mt.common,Mt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:qe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:qe([Mt.sprite,Mt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:qe([Mt.common,Mt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:qe([Mt.lights,Mt.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};En.physical={uniforms:qe([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const qr={r:0,b:0,g:0},hi=new Hn,kd=new Le;function Wd(i,t,e,n,r,a,o){const l=new me(0);let h=a===!0?0:1,u,d,m=null,x=0,M=null;function y(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?e:t).get(U)),U}function T(D){let U=!1;const G=y(D);G===null?p(l,h):G&&G.isColor&&(p(G,1),U=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(D,U){const G=y(U);G&&(G.isCubeTexture||G.mapping===ls)?(d===void 0&&(d=new ri(new vr(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:qi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,B,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),hi.copy(U.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),d.material.uniforms.envMap.value=G,d.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(kd.makeRotationFromEuler(hi)),d.material.toneMapped=de.getTransfer(G.colorSpace)!==ve,(m!==G||x!==G.version||M!==i.toneMapping)&&(d.material.needsUpdate=!0,m=G,x=G.version,M=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null)):G&&G.isTexture&&(u===void 0&&(u=new ri(new us(2,2),new kn({name:"BackgroundMaterial",uniforms:qi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=G,u.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,u.material.toneMapped=de.getTransfer(G.colorSpace)!==ve,G.matrixAutoUpdate===!0&&G.updateMatrix(),u.material.uniforms.uvTransform.value.copy(G.matrix),(m!==G||x!==G.version||M!==i.toneMapping)&&(u.material.needsUpdate=!0,m=G,x=G.version,M=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function p(D,U){D.getRGB(qr,Hl(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,U,o)}function I(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(D,U=1){l.set(D),h=U,p(l,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,p(l,h)},render:T,addToRenderList:g,dispose:I}}function Xd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let a=r,o=!1;function l(_,E,V,k,Q){let tt=!1;const z=m(k,V,E);a!==z&&(a=z,u(a.object)),tt=M(_,k,V,Q),tt&&y(_,k,V,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,U(_,E,V,k),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function h(){return i.createVertexArray()}function u(_){return i.bindVertexArray(_)}function d(_){return i.deleteVertexArray(_)}function m(_,E,V){const k=V.wireframe===!0;let Q=n[_.id];Q===void 0&&(Q={},n[_.id]=Q);let tt=Q[E.id];tt===void 0&&(tt={},Q[E.id]=tt);let z=tt[k];return z===void 0&&(z=x(h()),tt[k]=z),z}function x(_){const E=[],V=[],k=[];for(let Q=0;Q<e;Q++)E[Q]=0,V[Q]=0,k[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:V,attributeDivisors:k,object:_,attributes:{},index:null}}function M(_,E,V,k){const Q=a.attributes,tt=E.attributes;let z=0;const $=V.getAttributes();for(const j in $)if($[j].location>=0){const ht=Q[j];let Dt=tt[j];if(Dt===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(Dt=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(Dt=_.instanceColor)),ht===void 0||ht.attribute!==Dt||Dt&&ht.data!==Dt.data)return!0;z++}return a.attributesNum!==z||a.index!==k}function y(_,E,V,k){const Q={},tt=E.attributes;let z=0;const $=V.getAttributes();for(const j in $)if($[j].location>=0){let ht=tt[j];ht===void 0&&(j==="instanceMatrix"&&_.instanceMatrix&&(ht=_.instanceMatrix),j==="instanceColor"&&_.instanceColor&&(ht=_.instanceColor));const Dt={};Dt.attribute=ht,ht&&ht.data&&(Dt.data=ht.data),Q[j]=Dt,z++}a.attributes=Q,a.attributesNum=z,a.index=k}function T(){const _=a.newAttributes;for(let E=0,V=_.length;E<V;E++)_[E]=0}function g(_){p(_,0)}function p(_,E){const V=a.newAttributes,k=a.enabledAttributes,Q=a.attributeDivisors;V[_]=1,k[_]===0&&(i.enableVertexAttribArray(_),k[_]=1),Q[_]!==E&&(i.vertexAttribDivisor(_,E),Q[_]=E)}function I(){const _=a.newAttributes,E=a.enabledAttributes;for(let V=0,k=E.length;V<k;V++)E[V]!==_[V]&&(i.disableVertexAttribArray(V),E[V]=0)}function D(_,E,V,k,Q,tt,z){z===!0?i.vertexAttribIPointer(_,E,V,Q,tt):i.vertexAttribPointer(_,E,V,k,Q,tt)}function U(_,E,V,k){T();const Q=k.attributes,tt=V.getAttributes(),z=E.defaultAttributeValues;for(const $ in tt){const j=tt[$];if(j.location>=0){let st=Q[$];if(st===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(st=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(st=_.instanceColor)),st!==void 0){const ht=st.normalized,Dt=st.itemSize,jt=t.get(st);if(jt===void 0)continue;const Jt=jt.buffer,le=jt.type,ce=jt.bytesPerElement,it=le===i.INT||le===i.UNSIGNED_INT||st.gpuType===Xa;if(st.isInterleavedBufferAttribute){const lt=st.data,Tt=lt.stride,qt=st.offset;if(lt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<j.locationSize;Lt++)p(j.location+Lt,lt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Lt=0;Lt<j.locationSize;Lt++)g(j.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Lt=0;Lt<j.locationSize;Lt++)D(j.location+Lt,Dt/j.locationSize,le,ht,Tt*ce,(qt+Dt/j.locationSize*Lt)*ce,it)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<j.locationSize;lt++)p(j.location+lt,st.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<j.locationSize;lt++)g(j.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let lt=0;lt<j.locationSize;lt++)D(j.location+lt,Dt/j.locationSize,le,ht,Dt*ce,Dt/j.locationSize*lt*ce,it)}}else if(z!==void 0){const ht=z[$];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(j.location,ht);break;case 3:i.vertexAttrib3fv(j.location,ht);break;case 4:i.vertexAttrib4fv(j.location,ht);break;default:i.vertexAttrib1fv(j.location,ht)}}}}I()}function G(){Y();for(const _ in n){const E=n[_];for(const V in E){const k=E[V];for(const Q in k)d(k[Q].object),delete k[Q];delete E[V]}delete n[_]}}function L(_){if(n[_.id]===void 0)return;const E=n[_.id];for(const V in E){const k=E[V];for(const Q in k)d(k[Q].object),delete k[Q];delete E[V]}delete n[_.id]}function B(_){for(const E in n){const V=n[E];if(V[_.id]===void 0)continue;const k=V[_.id];for(const Q in k)d(k[Q].object),delete k[Q];delete V[_.id]}}function Y(){A(),o=!0,a!==r&&(a=r,u(a.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:Y,resetDefaultState:A,dispose:G,releaseStatesOfGeometry:L,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:g,disableUnusedAttributes:I}}function jd(i,t,e){let n;function r(u){n=u}function a(u,d){i.drawArrays(n,u,d),e.update(d,n,1)}function o(u,d,m){m!==0&&(i.drawArraysInstanced(n,u,d,m),e.update(d,n,m))}function l(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,d,0,m);let M=0;for(let y=0;y<m;y++)M+=d[y];e.update(M,n,1)}function h(u,d,m,x){if(m===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<u.length;y++)o(u[y],d[y],x[y]);else{M.multiDrawArraysInstancedWEBGL(n,u,0,d,0,x,0,m);let y=0;for(let T=0;T<m;T++)y+=d[T]*x[T];e.update(y,n,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=h}function Yd(i,t,e,n){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(B){return!(B!==Sn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(B){const Y=B===Ki&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Gn&&n.convert(B)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Bn&&!Y)}function h(B){if(B==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=h(u);d!==u&&(Kt("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const m=e.logarithmicDepthBuffer===!0,x=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=y>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:G,maxSamples:L}}function qd(i){const t=this;let e=null,n=0,r=!1,a=!1;const o=new Qn,l=new $t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const M=m.length!==0||x||n!==0||r;return r=x,n=m.length,M},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,x){e=d(m,x,0)},this.setState=function(m,x,M){const y=m.clippingPlanes,T=m.clipIntersection,g=m.clipShadows,p=i.get(m);if(!r||y===null||y.length===0||a&&!g)a?d(null):u();else{const I=a?0:n,D=I*4;let U=p.clippingState||null;h.value=U,U=d(y,x,D,M);for(let G=0;G!==D;++G)U[G]=e[G];p.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function u(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,x,M,y){const T=m!==null?m.length:0;let g=null;if(T!==0){if(g=h.value,y!==!0||g===null){const p=M+T*4,I=x.matrixWorldInverse;l.getNormalMatrix(I),(g===null||g.length<p)&&(g=new Float32Array(p));for(let D=0,U=M;D!==T;++D,U+=4)o.copy(m[D]).applyMatrix4(I,l),o.normal.toArray(g,U),g[U+3]=o.constant}h.value=g,h.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,g}}function Kd(i){let t=new WeakMap;function e(o,l){return l===ca?o.mapping=Xi:l===ua&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===ca||l===ua)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const u=new qu(h.height);return u.fromEquirectangularTexture(i,o),t.set(o,u),o.addEventListener("dispose",r),e(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}const ei=4,Zo=[.125,.215,.35,.446,.526,.582],pi=20,Zd=256,lr=new rh,$o=new me;let Xs=null,js=0,Ys=0,qs=!1;const $d=new J;class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,a={}){const{size:o=256,position:l=$d}=a;Xs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,l),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xs,js,Ys),this._renderer.xr.enabled=qs,t.scissorTest=!1,zi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ki,format:Sn,colorSpace:Yi,depthBuffer:!1},r=Qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jd(a)),this._blurMaterial=tp(a,t,e),this._ggxMaterial=Qd(a,t,e)}return r}_compileMaterial(t){const e=new ri(new An,t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,n,r,a){const h=new pn(90,1,e,n),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,M=m.toneMapping;m.getClearColor($o),m.toneMapping=ni,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new vr,new zl({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,g=T.material;let p=!1;const I=t.background;I?I.isColor&&(g.color.copy(I),t.background=null,p=!0):(g.color.copy($o),p=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(h.up.set(0,u[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+d[D],a.y,a.z)):U===1?(h.up.set(0,0,u[D]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+d[D],a.z)):(h.up.set(0,u[D],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+d[D]));const G=this._cubeSize;zi(r,U*G,D>2?G:0,G,G),m.setRenderTarget(r),p&&m.render(T,h),m.render(t,h)}m.toneMapping=M,m.autoClear=x,t.background=I}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Xi||t.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tl());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const l=a.uniforms;l.envMap.value=t;const h=this._cubeSize;zi(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,lr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;const h=o.uniforms,u=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),m=Math.sqrt(u*u-d*d),x=.05+u*.95,M=m*x,{_lodMax:y}=this,T=this._sizeLods[n],g=3*T*(n>y-ei?n-y+ei:0),p=4*(this._cubeSize-T);h.envMap.value=t.texture,h.roughness.value=M,h.mipInt.value=y-e,zi(a,g,p,3*T,2*T),r.setRenderTarget(a),r.render(l,lr),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=y-n,zi(t,g,p,3*T,2*T),r.setRenderTarget(t),r.render(l,lr)}_blur(t,e,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",a),this._halfBlur(o,t,n,n,r,"longitudinal",a)}_halfBlur(t,e,n,r,a,o,l){const h=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const d=3,m=this._lodMeshes[r];m.material=u;const x=u.uniforms,M=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*pi-1),T=a/y,g=isFinite(a)?1+Math.floor(d*T):pi;g>pi&&Kt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);const p=[];let I=0;for(let B=0;B<pi;++B){const Y=B/T,A=Math.exp(-Y*Y/2);p.push(A),B===0?I+=A:B<g&&(I+=2*A)}for(let B=0;B<p.length;B++)p[B]=p[B]/I;x.envMap.value=t.texture,x.samples.value=g,x.weights.value=p,x.latitudinal.value=o==="latitudinal",l&&(x.poleAxis.value=l);const{_lodMax:D}=this;x.dTheta.value=y,x.mipInt.value=D-n;const U=this._sizeLods[r],G=3*U*(r>D-ei?r-D+ei:0),L=4*(this._cubeSize-U);zi(e,G,L,3*U,2*U),h.setRenderTarget(e),h.render(m,lr)}}function Jd(i){const t=[],e=[],n=[];let r=i;const a=i-ei+1+Zo.length;for(let o=0;o<a;o++){const l=Math.pow(2,r);t.push(l);let h=1/l;o>i-ei?h=Zo[o-i+ei-1]:o===0&&(h=0),e.push(h);const u=1/(l-2),d=-u,m=1+u,x=[d,d,m,d,m,m,d,d,m,m,d,m],M=6,y=6,T=3,g=2,p=1,I=new Float32Array(T*y*M),D=new Float32Array(g*y*M),U=new Float32Array(p*y*M);for(let L=0;L<M;L++){const B=L%3*2/3-1,Y=L>2?0:-1,A=[B,Y,0,B+2/3,Y,0,B+2/3,Y+1,0,B,Y,0,B+2/3,Y+1,0,B,Y+1,0];I.set(A,T*y*L),D.set(x,g*y*L);const _=[L,L,L,L,L,L];U.set(_,p*y*L)}const G=new An;G.setAttribute("position",new bn(I,T)),G.setAttribute("uv",new bn(D,g)),G.setAttribute("faceIndex",new bn(U,p)),n.push(new ri(G,null)),r>ei&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Qo(i,t,e){const n=new vi(i,t,e);return n.texture.mapping=ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Qd(i,t,e){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zd,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hs(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tp(i,t,e){const n=new Float32Array(pi),r=new J(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hs(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function tl(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hs(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function el(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function hs(){return`

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
	`}function ep(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const h=l.mapping,u=h===ca||h===ua,d=h===Xi||h===ji;if(u||d){let m=t.get(l);const x=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return e===null&&(e=new Jo(i)),m=u?e.fromEquirectangular(l,m):e.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,t.set(l,m),m.texture;if(m!==void 0)return m.texture;{const M=l.image;return u&&M&&M.height>0||d&&M&&r(M)?(e===null&&(e=new Jo(i)),m=u?e.fromEquirectangular(l):e.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,t.set(l,m),l.addEventListener("dispose",a),m.texture):null}}}return l}function r(l){let h=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&h++;return h===u}function a(l){const h=l.target;h.removeEventListener("dispose",a);const u=t.get(h);u!==void 0&&(t.delete(h),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function np(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&pr("WebGLRenderer: "+n+" extension not supported."),r}}}function ip(i,t,e,n){const r={},a=new WeakMap;function o(m){const x=m.target;x.index!==null&&t.remove(x.index);for(const y in x.attributes)t.remove(x.attributes[y]);x.removeEventListener("dispose",o),delete r[x.id];const M=a.get(x);M&&(t.remove(M),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(m,x){return r[x.id]===!0||(x.addEventListener("dispose",o),r[x.id]=!0,e.memory.geometries++),x}function h(m){const x=m.attributes;for(const M in x)t.update(x[M],i.ARRAY_BUFFER)}function u(m){const x=[],M=m.index,y=m.attributes.position;let T=0;if(M!==null){const I=M.array;T=M.version;for(let D=0,U=I.length;D<U;D+=3){const G=I[D+0],L=I[D+1],B=I[D+2];x.push(G,L,L,B,B,G)}}else if(y!==void 0){const I=y.array;T=y.version;for(let D=0,U=I.length/3-1;D<U;D+=3){const G=D+0,L=D+1,B=D+2;x.push(G,L,L,B,B,G)}}else return;const g=new(Nl(x)?Gl:Vl)(x,1);g.version=T;const p=a.get(m);p&&t.remove(p),a.set(m,g)}function d(m){const x=a.get(m);if(x){const M=m.index;M!==null&&x.version<M.version&&u(m)}else u(m);return a.get(m)}return{get:l,update:h,getWireframeAttribute:d}}function rp(i,t,e){let n;function r(x){n=x}let a,o;function l(x){a=x.type,o=x.bytesPerElement}function h(x,M){i.drawElements(n,M,a,x*o),e.update(M,n,1)}function u(x,M,y){y!==0&&(i.drawElementsInstanced(n,M,a,x*o,y),e.update(M,n,y))}function d(x,M,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,M,0,a,x,0,y);let g=0;for(let p=0;p<y;p++)g+=M[p];e.update(g,n,1)}function m(x,M,y,T){if(y===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<x.length;p++)u(x[p]/o,M[p],T[p]);else{g.multiDrawElementsInstancedWEBGL(n,M,0,a,x,0,T,0,y);let p=0;for(let I=0;I<y;I++)p+=M[I]*T[I];e.update(p,n,1)}}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function sp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(a/3);break;case i.LINES:e.lines+=l*(a/2);break;case i.LINE_STRIP:e.lines+=l*(a-1);break;case i.LINE_LOOP:e.lines+=l*a;break;case i.POINTS:e.points+=l*a;break;default:Ce("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ap(i,t,e){const n=new WeakMap,r=new Pe;function a(o,l,h){const u=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=d!==void 0?d.length:0;let x=n.get(l);if(x===void 0||x.count!==m){let _=function(){Y.dispose(),n.delete(l),l.removeEventListener("dispose",_)};var M=_;x!==void 0&&x.texture.dispose();const y=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],I=l.morphAttributes.normal||[],D=l.morphAttributes.color||[];let U=0;y===!0&&(U=1),T===!0&&(U=2),g===!0&&(U=3);let G=l.attributes.position.count*U,L=1;G>t.maxTextureSize&&(L=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const B=new Float32Array(G*L*4*m),Y=new Fl(B,G,L,m);Y.type=Bn,Y.needsUpdate=!0;const A=U*4;for(let E=0;E<m;E++){const V=p[E],k=I[E],Q=D[E],tt=G*L*4*E;for(let z=0;z<V.count;z++){const $=z*A;y===!0&&(r.fromBufferAttribute(V,z),B[tt+$+0]=r.x,B[tt+$+1]=r.y,B[tt+$+2]=r.z,B[tt+$+3]=0),T===!0&&(r.fromBufferAttribute(k,z),B[tt+$+4]=r.x,B[tt+$+5]=r.y,B[tt+$+6]=r.z,B[tt+$+7]=0),g===!0&&(r.fromBufferAttribute(Q,z),B[tt+$+8]=r.x,B[tt+$+9]=r.y,B[tt+$+10]=r.z,B[tt+$+11]=Q.itemSize===4?r.w:1)}}x={count:m,texture:Y,size:new re(G,L)},n.set(l,x),l.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let y=0;for(let g=0;g<u.length;g++)y+=u[g];const T=l.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",T),h.getUniforms().setValue(i,"morphTargetInfluences",u)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function op(i,t,e,n){let r=new WeakMap;function a(h){const u=n.render.frame,d=h.geometry,m=t.get(h,d);if(r.get(m)!==u&&(t.update(m),r.set(m,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==u&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){const x=h.skeleton;r.get(x)!==u&&(x.update(),r.set(x,u))}return m}function o(){r=new WeakMap}function l(h){const u=h.target;u.removeEventListener("dispose",l),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const Zl=new Ke,nl=new Yl(1,1),$l=new Fl,Jl=new Du,Ql=new Wl,il=[],rl=[],sl=new Float32Array(16),al=new Float32Array(9),ol=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let a=il[r];if(a===void 0&&(a=new Float32Array(r),il[r]=a),t!==0){n.toArray(a,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(a,l)}return a}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fs(i,t){let e=rl[t];e===void 0&&(e=new Int32Array(t),rl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function fp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;ol.set(n),i.uniformMatrix2fv(this.addr,!1,ol),Fe(e,n)}}function dp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;al.set(n),i.uniformMatrix3fv(this.addr,!1,al),Fe(e,n)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),Fe(e,n)}}function mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function vp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function yp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(nl.compareFunction=Il,a=nl):a=Zl,e.setTexture2D(t||a,r)}function Ep(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Jl,r)}function Tp(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ql,r)}function Ap(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||$l,r)}function wp(i){switch(i){case 5126:return lp;case 35664:return cp;case 35665:return up;case 35666:return hp;case 35674:return fp;case 35675:return dp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return xp;case 35668:case 35672:return _p;case 35669:case 35673:return gp;case 5125:return vp;case 36294:return Mp;case 36295:return Sp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return Ap}}function Rp(i,t){i.uniform1fv(this.addr,t)}function Cp(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Pp(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Dp(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Lp(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Up(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ip(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Np(i,t){i.uniform1iv(this.addr,t)}function Fp(i,t){i.uniform2iv(this.addr,t)}function Op(i,t){i.uniform3iv(this.addr,t)}function Bp(i,t){i.uniform4iv(this.addr,t)}function zp(i,t){i.uniform1uiv(this.addr,t)}function Vp(i,t){i.uniform2uiv(this.addr,t)}function Gp(i,t){i.uniform3uiv(this.addr,t)}function Hp(i,t){i.uniform4uiv(this.addr,t)}function kp(i,t,e){const n=this.cache,r=t.length,a=fs(e,r);Ne(n,a)||(i.uniform1iv(this.addr,a),Fe(n,a));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Zl,a[o])}function Wp(i,t,e){const n=this.cache,r=t.length,a=fs(e,r);Ne(n,a)||(i.uniform1iv(this.addr,a),Fe(n,a));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Jl,a[o])}function Xp(i,t,e){const n=this.cache,r=t.length,a=fs(e,r);Ne(n,a)||(i.uniform1iv(this.addr,a),Fe(n,a));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ql,a[o])}function jp(i,t,e){const n=this.cache,r=t.length,a=fs(e,r);Ne(n,a)||(i.uniform1iv(this.addr,a),Fe(n,a));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||$l,a[o])}function Yp(i){switch(i){case 5126:return Rp;case 35664:return Cp;case 35665:return Pp;case 35666:return Dp;case 35674:return Lp;case 35675:return Up;case 35676:return Ip;case 5124:case 35670:return Np;case 35667:case 35671:return Fp;case 35668:case 35672:return Op;case 35669:case 35673:return Bp;case 5125:return zp;case 36294:return Vp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return kp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return jp}}class qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wp(e.type)}}class Kp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yp(e.type)}}class Zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(t,e[l.id],n)}}}const Ks=/(\w+)(\])?(\[|\.)?/g;function ll(i,t){i.seq.push(t),i.map[t.id]=t}function $p(i,t,e){const n=i.name,r=n.length;for(Ks.lastIndex=0;;){const a=Ks.exec(n),o=Ks.lastIndex;let l=a[1];const h=a[2]==="]",u=a[3];if(h&&(l=l|0),u===void 0||u==="["&&o+2===r){ll(e,u===void 0?new qp(l,i,t):new Kp(l,i,t));break}else{let m=e.map[l];m===void 0&&(m=new Zp(l),ll(e,m)),e=m}}}class ns{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);$p(a,o,this)}}setValue(t,e,n,r){const a=this.map[e];a!==void 0&&a.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let a=0,o=e.length;a!==o;++a){const l=e[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(t,h.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,a=t.length;r!==a;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function cl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jp=37297;let Qp=0;function tm(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=r;o<a;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const ul=new $t;function em(i){de._getMatrix(ul,de.workingColorSpace,i);const t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case is:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+a+`

`+tm(i.getShaderSource(t),l)}else return a}function nm(i,t){const e=em(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function im(i,t){let e;switch(t){case iu:e="Linear";break;case ru:e="Reinhard";break;case su:e="Cineon";break;case au:e="ACESFilmic";break;case lu:e="AgX";break;case cu:e="Neutral";break;case ou:e="Custom";break;default:Kt("WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Kr=new J;function rm(){de.getLuminanceCoefficients(Kr);const i=Kr.x.toFixed(4),t=Kr.y.toFixed(4),e=Kr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function am(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function om(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(t,r),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function cr(i){return i!==""}function fl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(i){return i.replace(lm,um)}const cm=new Map;function um(i,t){let e=te[t];if(e===void 0){const n=cm.get(t);if(n!==void 0)e=te[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ka(e)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(i){return i.replace(hm,fm)}function fm(i,t,e,n){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function ml(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===El?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function pm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case ji:t="ENVMAP_TYPE_CUBE";break;case ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function xm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tl:t="ENVMAP_BLENDING_MULTIPLY";break;case eu:t="ENVMAP_BLENDING_MIX";break;case nu:t="ENVMAP_BLENDING_ADD";break}return t}function _m(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function gm(i,t,e,n){const r=i.getContext(),a=e.defines;let o=e.vertexShader,l=e.fragmentShader;const h=dm(e),u=pm(e),d=mm(e),m=xm(e),x=_m(e),M=sm(e),y=am(a),T=r.createProgram();let g,p,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(cr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(cr).join(`
`),p.length>0&&(p+=`
`)):(g=[ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),p=[ml(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?te.tonemapping_pars_fragment:"",e.toneMapping!==ni?im("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,nm("linearToOutputTexel",e.outputColorSpace),rm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=ka(o),o=fl(o,e),o=dl(o,e),l=ka(l),l=fl(l,e),l=dl(l,e),o=pl(o),l=pl(l),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,g=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=I+g+o,U=I+p+l,G=cl(r,r.VERTEX_SHADER,D),L=cl(r,r.FRAGMENT_SHADER,U);r.attachShader(T,G),r.attachShader(T,L),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function B(E){if(i.debug.checkShaderErrors){const V=r.getProgramInfoLog(T)||"",k=r.getShaderInfoLog(G)||"",Q=r.getShaderInfoLog(L)||"",tt=V.trim(),z=k.trim(),$=Q.trim();let j=!0,st=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,G,L);else{const ht=hl(r,G,"vertex"),Dt=hl(r,L,"fragment");Ce("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+tt+`
`+ht+`
`+Dt)}else tt!==""?Kt("WebGLProgram: Program Info Log:",tt):(z===""||$==="")&&(st=!1);st&&(E.diagnostics={runnable:j,programLog:tt,vertexShader:{log:z,prefix:g},fragmentShader:{log:$,prefix:p}})}r.deleteShader(G),r.deleteShader(L),Y=new ns(r,T),A=om(r,T)}let Y;this.getUniforms=function(){return Y===void 0&&B(this),Y};let A;this.getAttributes=function(){return A===void 0&&B(this),A};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(T,Jp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qp++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=G,this.fragmentShader=L,this}let vm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sm(t),e.set(t,n)),n}}class Sm{constructor(t){this.id=vm++,this.code=t,this.usedTimes=0}}function bm(i,t,e,n,r,a,o){const l=new Ol,h=new Mm,u=new Set,d=[],m=r.logarithmicDepthBuffer,x=r.vertexTextures;let M=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return u.add(A),A===0?"uv":`uv${A}`}function g(A,_,E,V,k){const Q=V.fog,tt=k.geometry,z=A.isMeshStandardMaterial?V.environment:null,$=(A.isMeshStandardMaterial?e:t).get(A.envMap||z),j=$&&$.mapping===ls?$.image.height:null,st=y[A.type];A.precision!==null&&(M=r.getMaxPrecision(A.precision),M!==A.precision&&Kt("WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const ht=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Dt=ht!==void 0?ht.length:0;let jt=0;tt.morphAttributes.position!==void 0&&(jt=1),tt.morphAttributes.normal!==void 0&&(jt=2),tt.morphAttributes.color!==void 0&&(jt=3);let Jt,le,ce,it;if(st){const ue=En[st];Jt=ue.vertexShader,le=ue.fragmentShader}else Jt=A.vertexShader,le=A.fragmentShader,h.update(A),ce=h.getVertexShaderID(A),it=h.getFragmentShaderID(A);const lt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),qt=k.isInstancedMesh===!0,Lt=k.isBatchedMesh===!0,Zt=!!A.map,Ue=!!A.matcap,Ut=!!$,Qt=!!A.aoMap,N=!!A.lightMap,se=!!A.bumpMap,ee=!!A.normalMap,xe=!!A.displacementMap,wt=!!A.emissiveMap,Se=!!A.metalnessMap,Nt=!!A.roughnessMap,Yt=A.anisotropy>0,R=A.clearcoat>0,S=A.dispersion>0,X=A.iridescence>0,nt=A.sheen>0,at=A.transmission>0,et=Yt&&!!A.anisotropyMap,Pt=R&&!!A.clearcoatMap,vt=R&&!!A.clearcoatNormalMap,Ot=R&&!!A.clearcoatRoughnessMap,Rt=X&&!!A.iridescenceMap,ot=X&&!!A.iridescenceThicknessMap,dt=nt&&!!A.sheenColorMap,Gt=nt&&!!A.sheenRoughnessMap,zt=!!A.specularMap,bt=!!A.specularColorMap,Ht=!!A.specularIntensityMap,F=at&&!!A.transmissionMap,_t=at&&!!A.thicknessMap,pt=!!A.gradientMap,mt=!!A.alphaMap,ut=A.alphaTest>0,rt=!!A.alphaHash,Et=!!A.extensions;let kt=ni;A.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(kt=i.toneMapping);const _e={shaderID:st,shaderType:A.type,shaderName:A.name,vertexShader:Jt,fragmentShader:le,defines:A.defines,customVertexShaderID:ce,customFragmentShaderID:it,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Lt,batchingColor:Lt&&k._colorsTexture!==null,instancing:qt,instancingColor:qt&&k.instanceColor!==null,instancingMorph:qt&&k.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Yi,alphaToCoverage:!!A.alphaToCoverage,map:Zt,matcap:Ue,envMap:Ut,envMapMode:Ut&&$.mapping,envMapCubeUVHeight:j,aoMap:Qt,lightMap:N,bumpMap:se,normalMap:ee,displacementMap:x&&xe,emissiveMap:wt,normalMapObjectSpace:ee&&A.normalMapType===pu,normalMapTangentSpace:ee&&A.normalMapType===du,metalnessMap:Se,roughnessMap:Nt,anisotropy:Yt,anisotropyMap:et,clearcoat:R,clearcoatMap:Pt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Ot,dispersion:S,iridescence:X,iridescenceMap:Rt,iridescenceThicknessMap:ot,sheen:nt,sheenColorMap:dt,sheenRoughnessMap:Gt,specularMap:zt,specularColorMap:bt,specularIntensityMap:Ht,transmission:at,transmissionMap:F,thicknessMap:_t,gradientMap:pt,opaque:A.transparent===!1&&A.blending===Hi&&A.alphaToCoverage===!1,alphaMap:mt,alphaTest:ut,alphaHash:rt,combine:A.combine,mapUv:Zt&&T(A.map.channel),aoMapUv:Qt&&T(A.aoMap.channel),lightMapUv:N&&T(A.lightMap.channel),bumpMapUv:se&&T(A.bumpMap.channel),normalMapUv:ee&&T(A.normalMap.channel),displacementMapUv:xe&&T(A.displacementMap.channel),emissiveMapUv:wt&&T(A.emissiveMap.channel),metalnessMapUv:Se&&T(A.metalnessMap.channel),roughnessMapUv:Nt&&T(A.roughnessMap.channel),anisotropyMapUv:et&&T(A.anisotropyMap.channel),clearcoatMapUv:Pt&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:vt&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&T(A.sheenRoughnessMap.channel),specularMapUv:zt&&T(A.specularMap.channel),specularColorMapUv:bt&&T(A.specularColorMap.channel),specularIntensityMapUv:Ht&&T(A.specularIntensityMap.channel),transmissionMapUv:F&&T(A.transmissionMap.channel),thicknessMapUv:_t&&T(A.thicknessMap.channel),alphaMapUv:mt&&T(A.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(ee||Yt),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!tt.attributes.uv&&(Zt||mt),fog:!!Q,useFog:A.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Tt,skinning:k.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:jt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Zt&&A.map.isVideoTexture===!0&&de.getTransfer(A.map.colorSpace)===ve,decodeVideoTextureEmissive:wt&&A.emissiveMap.isVideoTexture===!0&&de.getTransfer(A.emissiveMap.colorSpace)===ve,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fn,flipSided:A.side===tn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Et&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&A.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return _e.vertexUv1s=u.has(1),_e.vertexUv2s=u.has(2),_e.vertexUv3s=u.has(3),u.clear(),_e}function p(A){const _=[];if(A.shaderID?_.push(A.shaderID):(_.push(A.customVertexShaderID),_.push(A.customFragmentShaderID)),A.defines!==void 0)for(const E in A.defines)_.push(E),_.push(A.defines[E]);return A.isRawShaderMaterial===!1&&(I(_,A),D(_,A),_.push(i.outputColorSpace)),_.push(A.customProgramCacheKey),_.join()}function I(A,_){A.push(_.precision),A.push(_.outputColorSpace),A.push(_.envMapMode),A.push(_.envMapCubeUVHeight),A.push(_.mapUv),A.push(_.alphaMapUv),A.push(_.lightMapUv),A.push(_.aoMapUv),A.push(_.bumpMapUv),A.push(_.normalMapUv),A.push(_.displacementMapUv),A.push(_.emissiveMapUv),A.push(_.metalnessMapUv),A.push(_.roughnessMapUv),A.push(_.anisotropyMapUv),A.push(_.clearcoatMapUv),A.push(_.clearcoatNormalMapUv),A.push(_.clearcoatRoughnessMapUv),A.push(_.iridescenceMapUv),A.push(_.iridescenceThicknessMapUv),A.push(_.sheenColorMapUv),A.push(_.sheenRoughnessMapUv),A.push(_.specularMapUv),A.push(_.specularColorMapUv),A.push(_.specularIntensityMapUv),A.push(_.transmissionMapUv),A.push(_.thicknessMapUv),A.push(_.combine),A.push(_.fogExp2),A.push(_.sizeAttenuation),A.push(_.morphTargetsCount),A.push(_.morphAttributeCount),A.push(_.numDirLights),A.push(_.numPointLights),A.push(_.numSpotLights),A.push(_.numSpotLightMaps),A.push(_.numHemiLights),A.push(_.numRectAreaLights),A.push(_.numDirLightShadows),A.push(_.numPointLightShadows),A.push(_.numSpotLightShadows),A.push(_.numSpotLightShadowsWithMaps),A.push(_.numLightProbes),A.push(_.shadowMapType),A.push(_.toneMapping),A.push(_.numClippingPlanes),A.push(_.numClipIntersection),A.push(_.depthPacking)}function D(A,_){l.disableAll(),_.supportsVertexTextures&&l.enable(0),_.instancing&&l.enable(1),_.instancingColor&&l.enable(2),_.instancingMorph&&l.enable(3),_.matcap&&l.enable(4),_.envMap&&l.enable(5),_.normalMapObjectSpace&&l.enable(6),_.normalMapTangentSpace&&l.enable(7),_.clearcoat&&l.enable(8),_.iridescence&&l.enable(9),_.alphaTest&&l.enable(10),_.vertexColors&&l.enable(11),_.vertexAlphas&&l.enable(12),_.vertexUv1s&&l.enable(13),_.vertexUv2s&&l.enable(14),_.vertexUv3s&&l.enable(15),_.vertexTangents&&l.enable(16),_.anisotropy&&l.enable(17),_.alphaHash&&l.enable(18),_.batching&&l.enable(19),_.dispersion&&l.enable(20),_.batchingColor&&l.enable(21),_.gradientMap&&l.enable(22),A.push(l.mask),l.disableAll(),_.fog&&l.enable(0),_.useFog&&l.enable(1),_.flatShading&&l.enable(2),_.logarithmicDepthBuffer&&l.enable(3),_.reversedDepthBuffer&&l.enable(4),_.skinning&&l.enable(5),_.morphTargets&&l.enable(6),_.morphNormals&&l.enable(7),_.morphColors&&l.enable(8),_.premultipliedAlpha&&l.enable(9),_.shadowMapEnabled&&l.enable(10),_.doubleSided&&l.enable(11),_.flipSided&&l.enable(12),_.useDepthPacking&&l.enable(13),_.dithering&&l.enable(14),_.transmission&&l.enable(15),_.sheen&&l.enable(16),_.opaque&&l.enable(17),_.pointsUvs&&l.enable(18),_.decodeVideoTexture&&l.enable(19),_.decodeVideoTextureEmissive&&l.enable(20),_.alphaToCoverage&&l.enable(21),A.push(l.mask)}function U(A){const _=y[A.type];let E;if(_){const V=En[_];E=Wu.clone(V.uniforms)}else E=A.uniforms;return E}function G(A,_){let E;for(let V=0,k=d.length;V<k;V++){const Q=d[V];if(Q.cacheKey===_){E=Q,++E.usedTimes;break}}return E===void 0&&(E=new gm(i,_,A,a),d.push(E)),E}function L(A){if(--A.usedTimes===0){const _=d.indexOf(A);d[_]=d[d.length-1],d.pop(),A.destroy()}}function B(A){h.remove(A)}function Y(){h.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:U,acquireProgram:G,releaseProgram:L,releaseShaderCache:B,programs:d,dispose:Y}}function ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,h){i.get(o)[l]=h}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:a}}function Em(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _l(){const i=[];let t=0;const e=[],n=[],r=[];function a(){t=0,e.length=0,n.length=0,r.length=0}function o(m,x,M,y,T,g){let p=i[t];return p===void 0?(p={id:m.id,object:m,geometry:x,material:M,groupOrder:y,renderOrder:m.renderOrder,z:T,group:g},i[t]=p):(p.id=m.id,p.object=m,p.geometry=x,p.material=M,p.groupOrder=y,p.renderOrder=m.renderOrder,p.z=T,p.group=g),t++,p}function l(m,x,M,y,T,g){const p=o(m,x,M,y,T,g);M.transmission>0?n.push(p):M.transparent===!0?r.push(p):e.push(p)}function h(m,x,M,y,T,g){const p=o(m,x,M,y,T,g);M.transmission>0?n.unshift(p):M.transparent===!0?r.unshift(p):e.unshift(p)}function u(m,x){e.length>1&&e.sort(m||Em),n.length>1&&n.sort(x||xl),r.length>1&&r.sort(x||xl)}function d(){for(let m=t,x=i.length;m<x;m++){const M=i[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:n,transparent:r,init:a,push:l,unshift:h,finish:d,sort:u}}function Tm(){let i=new WeakMap;function t(n,r){const a=i.get(n);let o;return a===void 0?(o=new _l,i.set(n,[o])):r>=a.length?(o=new _l,a.push(o)):o=a[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new me};break;case"SpotLight":e={position:new J,direction:new J,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new me,groundColor:new me};break;case"RectAreaLight":e={color:new me,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function wm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rm=0;function Cm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pm(i){const t=new Am,e=wm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new J);const r=new J,a=new Le,o=new Le;function l(u){let d=0,m=0,x=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let M=0,y=0,T=0,g=0,p=0,I=0,D=0,U=0,G=0,L=0,B=0;u.sort(Cm);for(let A=0,_=u.length;A<_;A++){const E=u[A],V=E.color,k=E.intensity,Q=E.distance,tt=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=V.r*k,m+=V.g*k,x+=V.b*k;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],k);B++}else if(E.isDirectionalLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const $=E.shadow,j=e.get(E);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.directionalShadow[M]=j,n.directionalShadowMap[M]=tt,n.directionalShadowMatrix[M]=E.shadow.matrix,I++}n.directional[M]=z,M++}else if(E.isSpotLight){const z=t.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(V).multiplyScalar(k),z.distance=Q,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[T]=z;const $=E.shadow;if(E.map&&(n.spotLightMap[G]=E.map,G++,$.updateMatrices(E),E.castShadow&&L++),n.spotLightMatrix[T]=$.matrix,E.castShadow){const j=e.get(E);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=tt,U++}T++}else if(E.isRectAreaLight){const z=t.get(E);z.color.copy(V).multiplyScalar(k),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[g]=z,g++}else if(E.isPointLight){const z=t.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const $=E.shadow,j=e.get(E);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,n.pointShadow[y]=j,n.pointShadowMap[y]=tt,n.pointShadowMatrix[y]=E.shadow.matrix,D++}n.point[y]=z,y++}else if(E.isHemisphereLight){const z=t.get(E);z.skyColor.copy(E.color).multiplyScalar(k),z.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[p]=z,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=x;const Y=n.hash;(Y.directionalLength!==M||Y.pointLength!==y||Y.spotLength!==T||Y.rectAreaLength!==g||Y.hemiLength!==p||Y.numDirectionalShadows!==I||Y.numPointShadows!==D||Y.numSpotShadows!==U||Y.numSpotMaps!==G||Y.numLightProbes!==B)&&(n.directional.length=M,n.spot.length=T,n.rectArea.length=g,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=U+G-L,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=B,Y.directionalLength=M,Y.pointLength=y,Y.spotLength=T,Y.rectAreaLength=g,Y.hemiLength=p,Y.numDirectionalShadows=I,Y.numPointShadows=D,Y.numSpotShadows=U,Y.numSpotMaps=G,Y.numLightProbes=B,n.version=Rm++)}function h(u,d){let m=0,x=0,M=0,y=0,T=0;const g=d.matrixWorldInverse;for(let p=0,I=u.length;p<I;p++){const D=u[p];if(D.isDirectionalLight){const U=n.directional[m];U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(g),m++}else if(D.isSpotLight){const U=n.spot[M];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(g),U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(g),M++}else if(D.isRectAreaLight){const U=n.rectArea[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(g),o.identity(),a.copy(D.matrixWorld),a.premultiply(g),o.extractRotation(a),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),y++}else if(D.isPointLight){const U=n.point[x];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(g),x++}else if(D.isHemisphereLight){const U=n.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(g),T++}}}return{setup:l,setupView:h,state:n}}function gl(i){const t=new Pm(i),e=[],n=[];function r(d){u.camera=d,e.length=0,n.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function l(){t.setup(e)}function h(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function Dm(i){let t=new WeakMap;function e(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new gl(i),t.set(r,[l])):a>=o.length?(l=new gl(i),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const Lm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Im(i,t,e){let n=new Xl;const r=new re,a=new re,o=new Pe,l=new nh({depthPacking:fu}),h=new ih,u={},d=e.maxTextureSize,m={[ii]:tn,[tn]:ii,[Fn]:Fn},x=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Lm,fragmentShader:Um}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const y=new An;y.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ri(y,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let p=this.type;this.render=function(L,B,Y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const A=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),V=i.state;V.setBlending(zn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const k=p!==Nn&&this.type===Nn,Q=p===Nn&&this.type!==Nn;for(let tt=0,z=L.length;tt<z;tt++){const $=L[tt],j=$.shadow;if(j===void 0){Kt("WebGLShadowMap:",$,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const st=j.getFrameExtents();if(r.multiply(st),a.copy(j.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/st.x),r.x=a.x*st.x,j.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/st.y),r.y=a.y*st.y,j.mapSize.y=a.y)),j.map===null||k===!0||Q===!0){const Dt=this.type!==Nn?{minFilter:ln,magFilter:ln}:{};j.map!==null&&j.map.dispose(),j.map=new vi(r.x,r.y,Dt),j.map.texture.name=$.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ht=j.getViewportCount();for(let Dt=0;Dt<ht;Dt++){const jt=j.getViewport(Dt);o.set(a.x*jt.x,a.y*jt.y,a.x*jt.z,a.y*jt.w),V.viewport(o),j.updateMatrices($,Dt),n=j.getFrustum(),U(B,Y,j.camera,$,this.type)}j.isPointLightShadow!==!0&&this.type===Nn&&I(j,Y),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(A,_,E)};function I(L,B){const Y=t.update(T);x.defines.VSM_SAMPLES!==L.blurSamples&&(x.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new vi(r.x,r.y)),x.uniforms.shadow_pass.value=L.map.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(B,null,Y,x,T,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(B,null,Y,M,T,null)}function D(L,B,Y,A){let _=null;const E=Y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(E!==void 0)_=E;else if(_=Y.isPointLight===!0?h:l,i.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const V=_.uuid,k=B.uuid;let Q=u[V];Q===void 0&&(Q={},u[V]=Q);let tt=Q[k];tt===void 0&&(tt=_.clone(),Q[k]=tt,B.addEventListener("dispose",G)),_=tt}if(_.visible=B.visible,_.wireframe=B.wireframe,A===Nn?_.side=B.shadowSide!==null?B.shadowSide:B.side:_.side=B.shadowSide!==null?B.shadowSide:m[B.side],_.alphaMap=B.alphaMap,_.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,_.map=B.map,_.clipShadows=B.clipShadows,_.clippingPlanes=B.clippingPlanes,_.clipIntersection=B.clipIntersection,_.displacementMap=B.displacementMap,_.displacementScale=B.displacementScale,_.displacementBias=B.displacementBias,_.wireframeLinewidth=B.wireframeLinewidth,_.linewidth=B.linewidth,Y.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=Y}return _}function U(L,B,Y,A,_){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===Nn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld);const k=t.update(L),Q=L.material;if(Array.isArray(Q)){const tt=k.groups;for(let z=0,$=tt.length;z<$;z++){const j=tt[z],st=Q[j.materialIndex];if(st&&st.visible){const ht=D(L,st,A,_);L.onBeforeShadow(i,L,B,Y,k,ht,j),i.renderBufferDirect(Y,null,k,ht,L,j),L.onAfterShadow(i,L,B,Y,k,ht,j)}}}else if(Q.visible){const tt=D(L,Q,A,_);L.onBeforeShadow(i,L,B,Y,k,tt,null),i.renderBufferDirect(Y,null,k,tt,L,null),L.onAfterShadow(i,L,B,Y,k,tt,null)}}const V=L.children;for(let k=0,Q=V.length;k<Q;k++)U(V[k],B,Y,A,_)}function G(L){L.target.removeEventListener("dispose",G);for(const Y in u){const A=u[Y],_=L.target.uuid;_ in A&&(A[_].dispose(),delete A[_])}}}const Nm={[na]:ia,[ra]:oa,[sa]:la,[Wi]:aa,[ia]:na,[oa]:ra,[la]:sa,[aa]:Wi};function Fm(i,t){function e(){let F=!1;const _t=new Pe;let pt=null;const mt=new Pe(0,0,0,0);return{setMask:function(ut){pt!==ut&&!F&&(i.colorMask(ut,ut,ut,ut),pt=ut)},setLocked:function(ut){F=ut},setClear:function(ut,rt,Et,kt,_e){_e===!0&&(ut*=kt,rt*=kt,Et*=kt),_t.set(ut,rt,Et,kt),mt.equals(_t)===!1&&(i.clearColor(ut,rt,Et,kt),mt.copy(_t))},reset:function(){F=!1,pt=null,mt.set(-1,0,0,0)}}}function n(){let F=!1,_t=!1,pt=null,mt=null,ut=null;return{setReversed:function(rt){if(_t!==rt){const Et=t.get("EXT_clip_control");rt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),_t=rt;const kt=ut;ut=null,this.setClear(kt)}},getReversed:function(){return _t},setTest:function(rt){rt?lt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(rt){pt!==rt&&!F&&(i.depthMask(rt),pt=rt)},setFunc:function(rt){if(_t&&(rt=Nm[rt]),mt!==rt){switch(rt){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case aa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}mt=rt}},setLocked:function(rt){F=rt},setClear:function(rt){ut!==rt&&(_t&&(rt=1-rt),i.clearDepth(rt),ut=rt)},reset:function(){F=!1,pt=null,mt=null,ut=null,_t=!1}}}function r(){let F=!1,_t=null,pt=null,mt=null,ut=null,rt=null,Et=null,kt=null,_e=null;return{setTest:function(ue){F||(ue?lt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(ue){_t!==ue&&!F&&(i.stencilMask(ue),_t=ue)},setFunc:function(ue,je,nn){(pt!==ue||mt!==je||ut!==nn)&&(i.stencilFunc(ue,je,nn),pt=ue,mt=je,ut=nn)},setOp:function(ue,je,nn){(rt!==ue||Et!==je||kt!==nn)&&(i.stencilOp(ue,je,nn),rt=ue,Et=je,kt=nn)},setLocked:function(ue){F=ue},setClear:function(ue){_e!==ue&&(i.clearStencil(ue),_e=ue)},reset:function(){F=!1,_t=null,pt=null,mt=null,ut=null,rt=null,Et=null,kt=null,_e=null}}}const a=new e,o=new n,l=new r,h=new WeakMap,u=new WeakMap;let d={},m={},x=new WeakMap,M=[],y=null,T=!1,g=null,p=null,I=null,D=null,U=null,G=null,L=null,B=new me(0,0,0),Y=0,A=!1,_=null,E=null,V=null,k=null,Q=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,$=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=$>=2);let st=null,ht={};const Dt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),Jt=new Pe().fromArray(Dt),le=new Pe().fromArray(jt);function ce(F,_t,pt,mt){const ut=new Uint8Array(4),rt=i.createTexture();i.bindTexture(F,rt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<pt;Et++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,mt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(_t+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return rt}const it={};it[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Wi),se(!1),ee(bo),lt(i.CULL_FACE),Qt(zn);function lt(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function Tt(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function qt(F,_t){return m[F]!==_t?(i.bindFramebuffer(F,_t),m[F]=_t,F===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=_t),F===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Lt(F,_t){let pt=M,mt=!1;if(F){pt=x.get(_t),pt===void 0&&(pt=[],x.set(_t,pt));const ut=F.textures;if(pt.length!==ut.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Et=ut.length;rt<Et;rt++)pt[rt]=i.COLOR_ATTACHMENT0+rt;pt.length=ut.length,mt=!0}}else pt[0]!==i.BACK&&(pt[0]=i.BACK,mt=!0);mt&&i.drawBuffers(pt)}function Zt(F){return y!==F?(i.useProgram(F),y=F,!0):!1}const Ue={[di]:i.FUNC_ADD,[Bc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};Ue[Vc]=i.MIN,Ue[Gc]=i.MAX;const Ut={[Hc]:i.ZERO,[kc]:i.ONE,[Wc]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[Zc]:i.SRC_ALPHA_SATURATE,[qc]:i.DST_COLOR,[jc]:i.DST_ALPHA,[Xc]:i.ONE_MINUS_SRC_COLOR,[ea]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Yc]:i.ONE_MINUS_DST_ALPHA,[$c]:i.CONSTANT_COLOR,[Jc]:i.ONE_MINUS_CONSTANT_COLOR,[Qc]:i.CONSTANT_ALPHA,[tu]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(F,_t,pt,mt,ut,rt,Et,kt,_e,ue){if(F===zn){T===!0&&(Tt(i.BLEND),T=!1);return}if(T===!1&&(lt(i.BLEND),T=!0),F!==Oc){if(F!==g||ue!==A){if((p!==di||U!==di)&&(i.blendEquation(i.FUNC_ADD),p=di,U=di),ue)switch(F){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFunc(i.ONE,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",F);break}else switch(F){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yo:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eo:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",F);break}I=null,D=null,G=null,L=null,B.set(0,0,0),Y=0,g=F,A=ue}return}ut=ut||_t,rt=rt||pt,Et=Et||mt,(_t!==p||ut!==U)&&(i.blendEquationSeparate(Ue[_t],Ue[ut]),p=_t,U=ut),(pt!==I||mt!==D||rt!==G||Et!==L)&&(i.blendFuncSeparate(Ut[pt],Ut[mt],Ut[rt],Ut[Et]),I=pt,D=mt,G=rt,L=Et),(kt.equals(B)===!1||_e!==Y)&&(i.blendColor(kt.r,kt.g,kt.b,_e),B.copy(kt),Y=_e),g=F,A=!1}function N(F,_t){F.side===Fn?Tt(i.CULL_FACE):lt(i.CULL_FACE);let pt=F.side===tn;_t&&(pt=!pt),se(pt),F.blending===Hi&&F.transparent===!1?Qt(zn):Qt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),a.setMask(F.colorWrite);const mt=F.stencilWrite;l.setTest(mt),mt&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),wt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){_!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),_=F)}function ee(F){F!==Ic?(lt(i.CULL_FACE),F!==E&&(F===bo?i.cullFace(i.BACK):F===Nc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),E=F}function xe(F){F!==V&&(z&&i.lineWidth(F),V=F)}function wt(F,_t,pt){F?(lt(i.POLYGON_OFFSET_FILL),(k!==_t||Q!==pt)&&(i.polygonOffset(_t,pt),k=_t,Q=pt)):Tt(i.POLYGON_OFFSET_FILL)}function Se(F){F?lt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function Nt(F){F===void 0&&(F=i.TEXTURE0+tt-1),st!==F&&(i.activeTexture(F),st=F)}function Yt(F,_t,pt){pt===void 0&&(st===null?pt=i.TEXTURE0+tt-1:pt=st);let mt=ht[pt];mt===void 0&&(mt={type:void 0,texture:void 0},ht[pt]=mt),(mt.type!==F||mt.texture!==_t)&&(st!==pt&&(i.activeTexture(pt),st=pt),i.bindTexture(F,_t||it[F]),mt.type=F,mt.texture=_t)}function R(){const F=ht[st];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function nt(){try{i.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function at(){try{i.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function et(){try{i.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Pt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function vt(){try{i.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Ot(){try{i.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Rt(){try{i.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ot(){try{i.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function dt(F){Jt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Jt.copy(F))}function Gt(F){le.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function zt(F,_t){let pt=u.get(_t);pt===void 0&&(pt=new WeakMap,u.set(_t,pt));let mt=pt.get(F);mt===void 0&&(mt=i.getUniformBlockIndex(_t,F.name),pt.set(F,mt))}function bt(F,_t){const mt=u.get(_t).get(F);h.get(_t)!==mt&&(i.uniformBlockBinding(_t,mt,F.__bindingPointIndex),h.set(_t,mt))}function Ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},st=null,ht={},m={},x=new WeakMap,M=[],y=null,T=!1,g=null,p=null,I=null,D=null,U=null,G=null,L=null,B=new me(0,0,0),Y=0,A=!1,_=null,E=null,V=null,k=null,Q=null,Jt.set(0,0,i.canvas.width,i.canvas.height),le.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:lt,disable:Tt,bindFramebuffer:qt,drawBuffers:Lt,useProgram:Zt,setBlending:Qt,setMaterial:N,setFlipSided:se,setCullFace:ee,setLineWidth:xe,setPolygonOffset:wt,setScissorTest:Se,activeTexture:Nt,bindTexture:Yt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:X,texImage2D:Rt,texImage3D:ot,updateUBOMapping:zt,uniformBlockBinding:bt,texStorage2D:vt,texStorage3D:Ot,texSubImage2D:nt,texSubImage3D:at,compressedTexSubImage2D:et,compressedTexSubImage3D:Pt,scissor:dt,viewport:Gt,reset:Ht}}function Om(i,t,e,n,r,a,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new re,d=new WeakMap;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,S){return M?new OffscreenCanvas(R,S):ss("canvas")}function T(R,S,X){let nt=1;const at=Yt(R);if((at.width>X||at.height>X)&&(nt=X/Math.max(at.width,at.height)),nt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const et=Math.floor(nt*at.width),Pt=Math.floor(nt*at.height);m===void 0&&(m=y(et,Pt));const vt=S?y(et,Pt):m;return vt.width=et,vt.height=Pt,vt.getContext("2d").drawImage(R,0,0,et,Pt),Kt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Pt+")."),vt}else return"data"in R&&Kt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(R,S,X,nt,at=!1){if(R!==null){if(i[R]!==void 0)return i[R];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let et=S;if(S===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),S===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),S===i.RGBA){const Pt=at?is:de.getTransfer(nt);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=Pt===ve?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function U(R,S){let X;return R?S===null||S===_i||S===hr?X=i.DEPTH24_STENCIL8:S===Bn?X=i.DEPTH32F_STENCIL8:S===ur&&(X=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===_i||S===hr?X=i.DEPTH_COMPONENT24:S===Bn?X=i.DEPTH_COMPONENT32F:S===ur&&(X=i.DEPTH_COMPONENT16),X}function G(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==mn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),Y(S),S.isVideoTexture&&d.delete(S)}function B(R){const S=R.target;S.removeEventListener("dispose",B),_(S)}function Y(R){const S=n.get(R);if(S.__webglInit===void 0)return;const X=R.source,nt=x.get(X);if(nt){const at=nt[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&A(R),Object.keys(nt).length===0&&x.delete(X)}n.remove(R)}function A(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const X=R.source,nt=x.get(X);delete nt[S.__cacheKey],o.memory.textures--}function _(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(S.__webglFramebuffer[nt]))for(let at=0;at<S.__webglFramebuffer[nt].length;at++)i.deleteFramebuffer(S.__webglFramebuffer[nt][at]);else i.deleteFramebuffer(S.__webglFramebuffer[nt]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[nt])}else{if(Array.isArray(S.__webglFramebuffer))for(let nt=0;nt<S.__webglFramebuffer.length;nt++)i.deleteFramebuffer(S.__webglFramebuffer[nt]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let nt=0;nt<S.__webglColorRenderbuffer.length;nt++)S.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[nt]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const X=R.textures;for(let nt=0,at=X.length;nt<at;nt++){const et=n.get(X[nt]);et.__webglTexture&&(i.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(X[nt])}n.remove(R)}let E=0;function V(){E=0}function k(){const R=E;return R>=r.maxTextures&&Kt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function Q(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function tt(R,S){const X=n.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const nt=R.image;if(nt===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{it(X,R,S);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function z(R,S){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){it(X,R,S);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function $(R,S){const X=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){it(X,R,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function j(R,S){const X=n.get(R);if(R.version>0&&X.__version!==R.version){lt(X,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const st={[ha]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},ht={[ln]:i.NEAREST,[uu]:i.NEAREST_MIPMAP_NEAREST,[wr]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[Ss]:i.LINEAR_MIPMAP_NEAREST,[mi]:i.LINEAR_MIPMAP_LINEAR},Dt={[mu]:i.NEVER,[Su]:i.ALWAYS,[xu]:i.LESS,[Il]:i.LEQUAL,[_u]:i.EQUAL,[Mu]:i.GEQUAL,[gu]:i.GREATER,[vu]:i.NOTEQUAL};function jt(R,S){if(S.type===Bn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===mn||S.magFilter===Ss||S.magFilter===wr||S.magFilter===mi||S.minFilter===mn||S.minFilter===Ss||S.minFilter===wr||S.minFilter===mi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,st[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,st[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,st[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ht[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ht[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ln||S.minFilter!==wr&&S.minFilter!==mi||S.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Jt(R,S){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const nt=S.source;let at=x.get(nt);at===void 0&&(at={},x.set(nt,at));const et=Q(S);if(et!==R.__cacheKey){at[et]===void 0&&(at[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[et].usedTimes++;const Pt=at[R.__cacheKey];Pt!==void 0&&(at[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&A(S)),R.__cacheKey=et,R.__webglTexture=at[et].texture}return X}function le(R,S,X){return Math.floor(Math.floor(R/X)/S)}function ce(R,S,X,nt){const et=R.updateRanges;if(et.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,nt,S.data);else{et.sort((ot,dt)=>ot.start-dt.start);let Pt=0;for(let ot=1;ot<et.length;ot++){const dt=et[Pt],Gt=et[ot],zt=dt.start+dt.count,bt=le(Gt.start,S.width,4),Ht=le(dt.start,S.width,4);Gt.start<=zt+1&&bt===Ht&&le(Gt.start+Gt.count-1,S.width,4)===bt?dt.count=Math.max(dt.count,Gt.start+Gt.count-dt.start):(++Pt,et[Pt]=Gt)}et.length=Pt+1;const vt=i.getParameter(i.UNPACK_ROW_LENGTH),Ot=i.getParameter(i.UNPACK_SKIP_PIXELS),Rt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ot=0,dt=et.length;ot<dt;ot++){const Gt=et[ot],zt=Math.floor(Gt.start/4),bt=Math.ceil(Gt.count/4),Ht=zt%S.width,F=Math.floor(zt/S.width),_t=bt,pt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ht),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Ht,F,_t,pt,X,nt,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),i.pixelStorei(i.UNPACK_SKIP_ROWS,Rt)}}function it(R,S,X){let nt=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=i.TEXTURE_3D);const at=Jt(R,S),et=S.source;e.bindTexture(nt,R.__webglTexture,i.TEXTURE0+X);const Pt=n.get(et);if(et.version!==Pt.__version||at===!0){e.activeTexture(i.TEXTURE0+X);const vt=de.getPrimaries(de.workingColorSpace),Ot=S.colorSpace===ti?null:de.getPrimaries(S.colorSpace),Rt=S.colorSpace===ti||vt===Ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ot=T(S.image,!1,r.maxTextureSize);ot=Nt(S,ot);const dt=a.convert(S.format,S.colorSpace),Gt=a.convert(S.type);let zt=D(S.internalFormat,dt,Gt,S.colorSpace,S.isVideoTexture);jt(nt,S);let bt;const Ht=S.mipmaps,F=S.isVideoTexture!==!0,_t=Pt.__version===void 0||at===!0,pt=et.dataReady,mt=G(S,ot);if(S.isDepthTexture)zt=U(S.format===dr,S.type),_t&&(F?e.texStorage2D(i.TEXTURE_2D,1,zt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,zt,ot.width,ot.height,0,dt,Gt,null));else if(S.isDataTexture)if(Ht.length>0){F&&_t&&e.texStorage2D(i.TEXTURE_2D,mt,zt,Ht[0].width,Ht[0].height);for(let ut=0,rt=Ht.length;ut<rt;ut++)bt=Ht[ut],F?pt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,dt,Gt,bt.data):e.texImage2D(i.TEXTURE_2D,ut,zt,bt.width,bt.height,0,dt,Gt,bt.data);S.generateMipmaps=!1}else F?(_t&&e.texStorage2D(i.TEXTURE_2D,mt,zt,ot.width,ot.height),pt&&ce(S,ot,dt,Gt)):e.texImage2D(i.TEXTURE_2D,0,zt,ot.width,ot.height,0,dt,Gt,ot.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,Ht[0].width,Ht[0].height,ot.depth);for(let ut=0,rt=Ht.length;ut<rt;ut++)if(bt=Ht[ut],S.format!==Sn)if(dt!==null)if(F){if(pt)if(S.layerUpdates.size>0){const Et=Ko(bt.width,bt.height,S.format,S.type);for(const kt of S.layerUpdates){const _e=bt.data.subarray(kt*Et/bt.data.BYTES_PER_ELEMENT,(kt+1)*Et/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,kt,bt.width,bt.height,1,dt,_e)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ot.depth,dt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,zt,bt.width,bt.height,ot.depth,0,bt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,bt.width,bt.height,ot.depth,dt,Gt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,zt,bt.width,bt.height,ot.depth,0,dt,Gt,bt.data)}else{F&&_t&&e.texStorage2D(i.TEXTURE_2D,mt,zt,Ht[0].width,Ht[0].height);for(let ut=0,rt=Ht.length;ut<rt;ut++)bt=Ht[ut],S.format!==Sn?dt!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,dt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,zt,bt.width,bt.height,0,bt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?pt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,bt.width,bt.height,dt,Gt,bt.data):e.texImage2D(i.TEXTURE_2D,ut,zt,bt.width,bt.height,0,dt,Gt,bt.data)}else if(S.isDataArrayTexture)if(F){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,zt,ot.width,ot.height,ot.depth),pt)if(S.layerUpdates.size>0){const ut=Ko(ot.width,ot.height,S.format,S.type);for(const rt of S.layerUpdates){const Et=ot.data.subarray(rt*ut/ot.data.BYTES_PER_ELEMENT,(rt+1)*ut/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,ot.width,ot.height,1,dt,Gt,Et)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,dt,Gt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ot.width,ot.height,ot.depth,0,dt,Gt,ot.data);else if(S.isData3DTexture)F?(_t&&e.texStorage3D(i.TEXTURE_3D,mt,zt,ot.width,ot.height,ot.depth),pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,dt,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ot.width,ot.height,ot.depth,0,dt,Gt,ot.data);else if(S.isFramebufferTexture){if(_t)if(F)e.texStorage2D(i.TEXTURE_2D,mt,zt,ot.width,ot.height);else{let ut=ot.width,rt=ot.height;for(let Et=0;Et<mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,zt,ut,rt,0,dt,Gt,null),ut>>=1,rt>>=1}}else if(Ht.length>0){if(F&&_t){const ut=Yt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,mt,zt,ut.width,ut.height)}for(let ut=0,rt=Ht.length;ut<rt;ut++)bt=Ht[ut],F?pt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,dt,Gt,bt):e.texImage2D(i.TEXTURE_2D,ut,zt,dt,Gt,bt);S.generateMipmaps=!1}else if(F){if(_t){const ut=Yt(ot);e.texStorage2D(i.TEXTURE_2D,mt,zt,ut.width,ut.height)}pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Gt,ot)}else e.texImage2D(i.TEXTURE_2D,0,zt,dt,Gt,ot);g(S)&&p(nt),Pt.__version=et.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function lt(R,S,X){if(S.image.length!==6)return;const nt=Jt(R,S),at=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const et=n.get(at);if(at.version!==et.__version||nt===!0){e.activeTexture(i.TEXTURE0+X);const Pt=de.getPrimaries(de.workingColorSpace),vt=S.colorSpace===ti?null:de.getPrimaries(S.colorSpace),Ot=S.colorSpace===ti||Pt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Rt=S.isCompressedTexture||S.image[0].isCompressedTexture,ot=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let rt=0;rt<6;rt++)!Rt&&!ot?dt[rt]=T(S.image[rt],!0,r.maxCubemapSize):dt[rt]=ot?S.image[rt].image:S.image[rt],dt[rt]=Nt(S,dt[rt]);const Gt=dt[0],zt=a.convert(S.format,S.colorSpace),bt=a.convert(S.type),Ht=D(S.internalFormat,zt,bt,S.colorSpace),F=S.isVideoTexture!==!0,_t=et.__version===void 0||nt===!0,pt=at.dataReady;let mt=G(S,Gt);jt(i.TEXTURE_CUBE_MAP,S);let ut;if(Rt){F&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Ht,Gt.width,Gt.height);for(let rt=0;rt<6;rt++){ut=dt[rt].mipmaps;for(let Et=0;Et<ut.length;Et++){const kt=ut[Et];S.format!==Sn?zt!==null?F?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,kt.width,kt.height,zt,kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Ht,kt.width,kt.height,0,kt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,0,0,kt.width,kt.height,zt,bt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et,Ht,kt.width,kt.height,0,zt,bt,kt.data)}}}else{if(ut=S.mipmaps,F&&_t){ut.length>0&&mt++;const rt=Yt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,mt,Ht,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ot){F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,dt[rt].width,dt[rt].height,zt,bt,dt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ht,dt[rt].width,dt[rt].height,0,zt,bt,dt[rt].data);for(let Et=0;Et<ut.length;Et++){const _e=ut[Et].image[rt].image;F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,_e.width,_e.height,zt,bt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Ht,_e.width,_e.height,0,zt,bt,_e.data)}}else{F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,bt,dt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Ht,zt,bt,dt[rt]);for(let Et=0;Et<ut.length;Et++){const kt=ut[Et];F?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,0,0,zt,bt,kt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Et+1,Ht,zt,bt,kt.image[rt])}}}g(S)&&p(i.TEXTURE_CUBE_MAP),et.__version=at.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Tt(R,S,X,nt,at,et){const Pt=a.convert(X.format,X.colorSpace),vt=a.convert(X.type),Ot=D(X.internalFormat,Pt,vt,X.colorSpace),Rt=n.get(S),ot=n.get(X);if(ot.__renderTarget=S,!Rt.__hasExternalTextures){const dt=Math.max(1,S.width>>et),Gt=Math.max(1,S.height>>et);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,et,Ot,dt,Gt,S.depth,0,Pt,vt,null):e.texImage2D(at,et,Ot,dt,Gt,0,Pt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),wt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,at,ot.__webglTexture,0,xe(S)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,at,ot.__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const nt=S.depthTexture,at=nt&&nt.isDepthTexture?nt.type:null,et=U(S.stencilBuffer,at),Pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=xe(S);wt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,et,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,et,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,et,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,R)}else{const nt=S.textures;for(let at=0;at<nt.length;at++){const et=nt[at],Pt=a.convert(et.format,et.colorSpace),vt=a.convert(et.type),Ot=D(et.internalFormat,Pt,vt,et.colorSpace),Rt=xe(S);X&&wt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Ot,S.width,S.height):wt(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Rt,Ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ot,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(S.depthTexture);nt.__renderTarget=S,(!nt.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),tt(S.depthTexture,0);const at=nt.__webglTexture,et=xe(S);if(S.depthTexture.format===fr)wt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(S.depthTexture.format===dr)wt(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Zt(R){const S=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const nt=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),nt){const at=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,nt.removeEventListener("dispose",at)};nt.addEventListener("dispose",at),S.__depthDisposeCallback=at}S.__boundDepthTexture=nt}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const nt=R.texture.mipmaps;nt&&nt.length>0?Lt(S.__webglFramebuffer[0],R):Lt(S.__webglFramebuffer,R)}else if(X){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]===void 0)S.__webglDepthbuffer[nt]=i.createRenderbuffer(),qt(S.__webglDepthbuffer[nt],R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,et)}}else{const nt=R.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),qt(S.__webglDepthbuffer,R,!1);else{const at=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,et)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(R,S,X){const nt=n.get(R);S!==void 0&&Tt(nt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Zt(R)}function Ut(R){const S=R.texture,X=n.get(R),nt=n.get(S);R.addEventListener("dispose",B);const at=R.textures,et=R.isWebGLCubeRenderTarget===!0,Pt=at.length>1;if(Pt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=S.version,o.memory.textures++),et){X.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer[vt]=[];for(let Ot=0;Ot<S.mipmaps.length;Ot++)X.__webglFramebuffer[vt][Ot]=i.createFramebuffer()}else X.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){X.__webglFramebuffer=[];for(let vt=0;vt<S.mipmaps.length;vt++)X.__webglFramebuffer[vt]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let vt=0,Ot=at.length;vt<Ot;vt++){const Rt=n.get(at[vt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&wt(R)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let vt=0;vt<at.length;vt++){const Ot=at[vt];X.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[vt]);const Rt=a.convert(Ot.format,Ot.colorSpace),ot=a.convert(Ot.type),dt=D(Ot.internalFormat,Rt,ot,Ot.colorSpace,R.isXRRenderTarget===!0),Gt=xe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,X.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(X.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),jt(i.TEXTURE_CUBE_MAP,S);for(let vt=0;vt<6;vt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)Tt(X.__webglFramebuffer[vt][Ot],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ot);else Tt(X.__webglFramebuffer[vt],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let vt=0,Ot=at.length;vt<Ot;vt++){const Rt=at[vt],ot=n.get(Rt);let dt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,ot.__webglTexture),jt(dt,Rt),Tt(X.__webglFramebuffer,R,Rt,i.COLOR_ATTACHMENT0+vt,dt,0),g(Rt)&&p(dt)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(vt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,nt.__webglTexture),jt(vt,S),S.mipmaps&&S.mipmaps.length>0)for(let Ot=0;Ot<S.mipmaps.length;Ot++)Tt(X.__webglFramebuffer[Ot],R,S,i.COLOR_ATTACHMENT0,vt,Ot);else Tt(X.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,vt,0);g(S)&&p(vt),e.unbindTexture()}R.depthBuffer&&Zt(R)}function Qt(R){const S=R.textures;for(let X=0,nt=S.length;X<nt;X++){const at=S[X];if(g(at)){const et=I(R),Pt=n.get(at).__webglTexture;e.bindTexture(et,Pt),p(et),e.unbindTexture()}}}const N=[],se=[];function ee(R){if(R.samples>0){if(wt(R)===!1){const S=R.textures,X=R.width,nt=R.height;let at=i.COLOR_BUFFER_BIT;const et=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(R),vt=S.length>1;if(vt)for(let Rt=0;Rt<S.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Ot=R.texture.mipmaps;Ot&&Ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Rt=0;Rt<S.length;Rt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const ot=n.get(S[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,X,nt,0,0,X,nt,at,i.NEAREST),h===!0&&(N.length=0,se.length=0,N.push(i.COLOR_ATTACHMENT0+Rt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(N.push(et),se.push(et),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,N))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Rt=0;Rt<S.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Rt]);const ot=n.get(S[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function xe(R){return Math.min(r.maxSamples,R.samples)}function wt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Se(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Nt(R,S){const X=R.colorSpace,nt=R.format,at=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Yi&&X!==ti&&(de.getTransfer(X)===ve?(nt!==Sn||at!==Gn)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",X)),S}function Yt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.setTexture2D=tt,this.setTexture2DArray=z,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=wt}function Bm(i,t){function e(n,r=ti){let a;const o=de.getTransfer(r);if(n===Gn)return i.UNSIGNED_BYTE;if(n===ja)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===Ki)return i.HALF_FLOAT;if(n===Dl)return i.ALPHA;if(n===Ll)return i.RGB;if(n===Sn)return i.RGBA;if(n===fr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Ka)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===$r||n===Jr||n===Qr||n===ts)if(o===ve)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===$r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===$r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===pa||n===ma||n===xa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===ga||n===va)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===_a||n===ga)return o===ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===va)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ma||n===Sa||n===ba||n===ya||n===Ea||n===Ta||n===Aa||n===wa||n===Ra||n===Ca||n===Pa||n===Da||n===La||n===Ua)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ma)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ea)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Da)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===La)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Na||n===Fa)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Ia)return o===ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===Va)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Oa)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
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

}`;class Gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ql(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new kn({vertexShader:zm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ri(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hm extends Mi{constructor(t,e){super();const n=this;let r=null,a=1,o=null,l="local-floor",h=1,u=null,d=null,m=null,x=null,M=null,y=null;const T=typeof XRWebGLBinding<"u",g=new Gm,p={},I=e.getContextAttributes();let D=null,U=null;const G=[],L=[],B=new re;let Y=null;const A=new pn;A.viewport=new Pe;const _=new pn;_.viewport=new Pe;const E=[A,_],V=new sh;let k=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let lt=G[it];return lt===void 0&&(lt=new ks,G[it]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(it){let lt=G[it];return lt===void 0&&(lt=new ks,G[it]=lt),lt.getGripSpace()},this.getHand=function(it){let lt=G[it];return lt===void 0&&(lt=new ks,G[it]=lt),lt.getHandSpace()};function tt(it){const lt=L.indexOf(it.inputSource);if(lt===-1)return;const Tt=G[lt];Tt!==void 0&&(Tt.update(it.inputSource,it.frame,u||o),Tt.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){r.removeEventListener("select",tt),r.removeEventListener("selectstart",tt),r.removeEventListener("selectend",tt),r.removeEventListener("squeeze",tt),r.removeEventListener("squeezestart",tt),r.removeEventListener("squeezeend",tt),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",$);for(let it=0;it<G.length;it++){const lt=L[it];lt!==null&&(L[it]=null,G[it].disconnect(lt))}k=null,Q=null,g.reset();for(const it in p)delete p[it];t.setRenderTarget(D),M=null,x=null,m=null,r=null,U=null,ce.stop(),n.isPresenting=!1,t.setPixelRatio(Y),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){a=it,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){l=it,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(it){u=it},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(r,e)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(it){if(r=it,r!==null){if(D=t.getRenderTarget(),r.addEventListener("select",tt),r.addEventListener("selectstart",tt),r.addEventListener("selectend",tt),r.addEventListener("squeeze",tt),r.addEventListener("squeezestart",tt),r.addEventListener("squeezeend",tt),r.addEventListener("end",z),r.addEventListener("inputsourceschange",$),I.xrCompatible!==!0&&await e.makeXRCompatible(),Y=t.getPixelRatio(),t.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,qt=null,Lt=null;I.depth&&(Lt=I.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=I.stencil?dr:fr,qt=I.stencil?hr:_i);const Zt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:a};m=this.getBinding(),x=m.createProjectionLayer(Zt),r.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new vi(x.textureWidth,x.textureHeight,{format:Sn,type:Gn,depthTexture:new Yl(x.textureWidth,x.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Tt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(r,e,Tt),r.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new vi(M.framebufferWidth,M.framebufferHeight,{format:Sn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),u=null,o=await r.requestReferenceSpace(l),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(it){for(let lt=0;lt<it.removed.length;lt++){const Tt=it.removed[lt],qt=L.indexOf(Tt);qt>=0&&(L[qt]=null,G[qt].disconnect(Tt))}for(let lt=0;lt<it.added.length;lt++){const Tt=it.added[lt];let qt=L.indexOf(Tt);if(qt===-1){for(let Zt=0;Zt<G.length;Zt++)if(Zt>=L.length){L.push(Tt),qt=Zt;break}else if(L[Zt]===null){L[Zt]=Tt,qt=Zt;break}if(qt===-1)break}const Lt=G[qt];Lt&&Lt.connect(Tt)}}const j=new J,st=new J;function ht(it,lt,Tt){j.setFromMatrixPosition(lt.matrixWorld),st.setFromMatrixPosition(Tt.matrixWorld);const qt=j.distanceTo(st),Lt=lt.projectionMatrix.elements,Zt=Tt.projectionMatrix.elements,Ue=Lt[14]/(Lt[10]-1),Ut=Lt[14]/(Lt[10]+1),Qt=(Lt[9]+1)/Lt[5],N=(Lt[9]-1)/Lt[5],se=(Lt[8]-1)/Lt[0],ee=(Zt[8]+1)/Zt[0],xe=Ue*se,wt=Ue*ee,Se=qt/(-se+ee),Nt=Se*-se;if(lt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Nt),it.translateZ(Se),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Lt[10]===-1)it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Yt=Ue+Se,R=Ut+Se,S=xe-Nt,X=wt+(qt-Nt),nt=Qt*Ut/R*Yt,at=N*Ut/R*Yt;it.projectionMatrix.makePerspective(S,X,nt,at,Yt,R),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Dt(it,lt){lt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(lt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(r===null)return;let lt=it.near,Tt=it.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(Tt=g.depthFar)),V.near=_.near=A.near=lt,V.far=_.far=A.far=Tt,(k!==V.near||Q!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,Q=V.far),V.layers.mask=it.layers.mask|6,A.layers.mask=V.layers.mask&3,_.layers.mask=V.layers.mask&5;const qt=it.parent,Lt=V.cameras;Dt(V,qt);for(let Zt=0;Zt<Lt.length;Zt++)Dt(Lt[Zt],qt);Lt.length===2?ht(V,A,_):V.projectionMatrix.copy(A.projectionMatrix),jt(it,V,qt)};function jt(it,lt,Tt){Tt===null?it.matrix.copy(lt.matrixWorld):(it.matrix.copy(Tt.matrixWorld),it.matrix.invert(),it.matrix.multiply(lt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ga*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(x===null&&M===null))return h},this.setFoveation=function(it){h=it,x!==null&&(x.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(it){return p[it]};let Jt=null;function le(it,lt){if(d=lt.getViewerPose(u||o),y=lt,d!==null){const Tt=d.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let qt=!1;Tt.length!==V.cameras.length&&(V.cameras.length=0,qt=!0);for(let Ut=0;Ut<Tt.length;Ut++){const Qt=Tt[Ut];let N=null;if(M!==null)N=M.getViewport(Qt);else{const ee=m.getViewSubImage(x,Qt);N=ee.viewport,Ut===0&&(t.setRenderTargetTextures(U,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(U))}let se=E[Ut];se===void 0&&(se=new pn,se.layers.enable(Ut),se.viewport=new Pe,E[Ut]=se),se.matrix.fromArray(Qt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Qt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(N.x,N.y,N.width,N.height),Ut===0&&(V.matrix.copy(se.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),qt===!0&&V.cameras.push(se)}const Lt=r.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){m=n.getBinding();const Ut=m.getDepthInformation(Tt[0]);Ut&&Ut.isValid&&Ut.texture&&g.init(Ut,r.renderState)}if(Lt&&Lt.includes("camera-access")&&T){t.state.unbindTexture(),m=n.getBinding();for(let Ut=0;Ut<Tt.length;Ut++){const Qt=Tt[Ut].camera;if(Qt){let N=p[Qt];N||(N=new ql,p[Qt]=N);const se=m.getCameraImage(Qt);N.sourceTexture=se}}}}for(let Tt=0;Tt<G.length;Tt++){const qt=L[Tt],Lt=G[Tt];qt!==null&&Lt!==void 0&&Lt.update(qt,lt,u||o)}Jt&&Jt(it,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),y=null}const ce=new Kl;ce.setAnimationLoop(le),this.setAnimationLoop=function(it){Jt=it},this.dispose=function(){}}}const fi=new Hn,km=new Le;function Wm(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Hl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,I,D,U){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(g,p):p.isMeshToonMaterial?(a(g,p),m(g,p)):p.isMeshPhongMaterial?(a(g,p),d(g,p)):p.isMeshStandardMaterial?(a(g,p),x(g,p),p.isMeshPhysicalMaterial&&M(g,p,U)):p.isMeshMatcapMaterial?(a(g,p),y(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),T(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?h(g,p,I,D):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const I=t.get(p),D=I.envMap,U=I.envMapRotation;D&&(g.envMap.value=D,fi.copy(U),fi.x*=-1,fi.y*=-1,fi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),g.envMapRotation.value.setFromMatrix4(km.makeRotationFromEuler(fi)),g.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function h(g,p,I,D){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*I,g.scale.value=D*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function m(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function x(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function M(g,p,I){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=I.texture,g.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,p){p.matcap&&(g.matcap.value=p.matcap)}function T(g,p){const I=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(I.matrixWorld),g.nearDistance.value=I.shadow.camera.near,g.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xm(i,t,e,n){let r={},a={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,D){const U=D.program;n.uniformBlockBinding(I,U)}function u(I,D){let U=r[I.id];U===void 0&&(y(I),U=d(I),r[I.id]=U,I.addEventListener("dispose",g));const G=D.program;n.updateUBOMapping(I,G);const L=t.render.frame;a[I.id]!==L&&(x(I),a[I.id]=L)}function d(I){const D=m();I.__bindingPointIndex=D;const U=i.createBuffer(),G=I.__size,L=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,G,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,U),U}function m(){for(let I=0;I<l;I++)if(o.indexOf(I)===-1)return o.push(I),I;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=r[I.id],U=I.uniforms,G=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let L=0,B=U.length;L<B;L++){const Y=Array.isArray(U[L])?U[L]:[U[L]];for(let A=0,_=Y.length;A<_;A++){const E=Y[A];if(M(E,L,A,G)===!0){const V=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let Q=0;for(let tt=0;tt<k.length;tt++){const z=k[tt],$=T(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,Q),Q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(I,D,U,G){const L=I.value,B=D+"_"+U;if(G[B]===void 0)return typeof L=="number"||typeof L=="boolean"?G[B]=L:G[B]=L.clone(),!0;{const Y=G[B];if(typeof L=="number"||typeof L=="boolean"){if(Y!==L)return G[B]=L,!0}else if(Y.equals(L)===!1)return Y.copy(L),!0}return!1}function y(I){const D=I.uniforms;let U=0;const G=16;for(let B=0,Y=D.length;B<Y;B++){const A=Array.isArray(D[B])?D[B]:[D[B]];for(let _=0,E=A.length;_<E;_++){const V=A[_],k=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,tt=k.length;Q<tt;Q++){const z=k[Q],$=T(z),j=U%G,st=j%$.boundary,ht=j+st;U+=st,ht!==0&&G-ht<$.storage&&(U+=G-ht),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=U,U+=$.storage}}}const L=U%G;return L>0&&(U+=G-L),I.__size=U,I.__cache={},this}function T(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Kt("WebGLRenderer: Unsupported uniform value type.",I),D}function g(I){const D=I.target;D.removeEventListener("dispose",g);const U=o.indexOf(D.__bindingPointIndex);o.splice(U,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function p(){for(const I in r)i.deleteBuffer(r[I]);o=[],r={},a={}}return{bind:h,update:u,dispose:p}}const jm=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let In=null;function Ym(){return In===null&&(In=new $u(jm,32,32,Ka,Ki),In.minFilter=mn,In.magFilter=mn,In.wrapS=On,In.wrapT=On,In.generateMipmaps=!1,In.needsUpdate=!0),In}class qm{constructor(t={}){const{canvas:e=bu(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=n.getContextAttributes().alpha}else M=o;const y=new Set([$a,Za,qa]),T=new Set([Gn,_i,ur,hr,ja,Ya]),g=new Uint32Array(4),p=new Int32Array(4);let I=null,D=null;const U=[],G=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let B=!1;this._outputColorSpace=dn;let Y=0,A=0,_=null,E=-1,V=null;const k=new Pe,Q=new Pe;let tt=null;const z=new me(0);let $=0,j=e.width,st=e.height,ht=1,Dt=null,jt=null;const Jt=new Pe(0,0,j,st),le=new Pe(0,0,j,st);let ce=!1;const it=new Xl;let lt=!1,Tt=!1;const qt=new Le,Lt=new J,Zt=new Pe,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Qt(){return _===null?ht:1}let N=n;function se(b,H){return e.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),N===null){const H="webgl2";if(N=se(H,b),N===null)throw se(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let ee,xe,wt,Se,Nt,Yt,R,S,X,nt,at,et,Pt,vt,Ot,Rt,ot,dt,Gt,zt,bt,Ht,F,_t;function pt(){ee=new np(N),ee.init(),Ht=new Bm(N,ee),xe=new Yd(N,ee,t,Ht),wt=new Fm(N,ee),xe.reversedDepthBuffer&&x&&wt.buffers.depth.setReversed(!0),Se=new sp(N),Nt=new ym,Yt=new Om(N,ee,wt,Nt,xe,Ht,Se),R=new Kd(L),S=new ep(L),X=new lh(N),F=new Xd(N,X),nt=new ip(N,X,Se,F),at=new op(N,nt,X,Se),Gt=new ap(N,xe,Yt),Rt=new qd(Nt),et=new bm(L,R,S,ee,xe,F,Rt),Pt=new Wm(L,Nt),vt=new Tm,Ot=new Dm(ee),dt=new Wd(L,R,S,wt,at,M,h),ot=new Im(L,at,xe),_t=new Xm(N,Se,xe,wt),zt=new jd(N,ee,Se),bt=new rp(N,ee,Se),Se.programs=et.programs,L.capabilities=xe,L.extensions=ee,L.properties=Nt,L.renderLists=vt,L.shadowMap=ot,L.state=wt,L.info=Se}pt();const mt=new Hm(L,N);this.xr=mt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=ee.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ee.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(b){b!==void 0&&(ht=b,this.setSize(j,st,!1))},this.getSize=function(b){return b.set(j,st)},this.setSize=function(b,H,K=!0){if(mt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,st=H,e.width=Math.floor(b*ht),e.height=Math.floor(H*ht),K===!0&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(j*ht,st*ht).floor()},this.setDrawingBufferSize=function(b,H,K){j=b,st=H,ht=K,e.width=Math.floor(b*K),e.height=Math.floor(H*K),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(Jt)},this.setViewport=function(b,H,K,Z){b.isVector4?Jt.set(b.x,b.y,b.z,b.w):Jt.set(b,H,K,Z),wt.viewport(k.copy(Jt).multiplyScalar(ht).round())},this.getScissor=function(b){return b.copy(le)},this.setScissor=function(b,H,K,Z){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,H,K,Z),wt.scissor(Q.copy(le).multiplyScalar(ht).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){wt.setScissorTest(ce=b)},this.setOpaqueSort=function(b){Dt=b},this.setTransparentSort=function(b){jt=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,K=!0){let Z=0;if(b){let W=!1;if(_!==null){const ft=_.texture.format;W=y.has(ft)}if(W){const ft=_.texture.type,xt=T.has(ft),At=dt.getClearColor(),yt=dt.getClearAlpha(),Ct=At.r,Vt=At.g,Ft=At.b;xt?(g[0]=Ct,g[1]=Vt,g[2]=Ft,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(p[0]=Ct,p[1]=Vt,p[2]=Ft,p[3]=yt,N.clearBufferiv(N.COLOR,0,p))}else Z|=N.COLOR_BUFFER_BIT}H&&(Z|=N.DEPTH_BUFFER_BIT),K&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),dt.dispose(),vt.dispose(),Ot.dispose(),Nt.dispose(),R.dispose(),S.dispose(),at.dispose(),F.dispose(),_t.dispose(),et.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Mr),mt.removeEventListener("sessionend",cn),Ye.stop()};function ut(b){b.preventDefault(),Co("WebGLRenderer: Context Lost."),B=!0}function rt(){Co("WebGLRenderer: Context Restored."),B=!1;const b=Se.autoReset,H=ot.enabled,K=ot.autoUpdate,Z=ot.needsUpdate,W=ot.type;pt(),Se.autoReset=b,ot.enabled=H,ot.autoUpdate=K,ot.needsUpdate=Z,ot.type=W}function Et(b){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){const H=b.target;H.removeEventListener("dispose",kt),_e(H)}function _e(b){ue(b),Nt.remove(b)}function ue(b){const H=Nt.get(b).programs;H!==void 0&&(H.forEach(function(K){et.releaseProgram(K)}),b.isShaderMaterial&&et.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,K,Z,W,ft){H===null&&(H=Ue);const xt=W.isMesh&&W.matrixWorld.determinant()<0,At=ai(b,H,K,Z,W);wt.setMaterial(Z,xt);let yt=K.index,Ct=1;if(Z.wireframe===!0){if(yt=nt.getWireframeAttribute(K),yt===void 0)return;Ct=2}const Vt=K.drawRange,Ft=K.attributes.position;let ne=Vt.start*Ct,he=(Vt.start+Vt.count)*Ct;ft!==null&&(ne=Math.max(ne,ft.start*Ct),he=Math.min(he,(ft.start+ft.count)*Ct)),yt!==null?(ne=Math.max(ne,0),he=Math.min(he,yt.count)):Ft!=null&&(ne=Math.max(ne,0),he=Math.min(he,Ft.count));const we=he-ne;if(we<0||we===1/0)return;F.setup(W,Z,At,K,yt);let Re,pe=zt;if(yt!==null&&(Re=X.get(yt),pe=bt,pe.setIndex(Re)),W.isMesh)Z.wireframe===!0?(wt.setLineWidth(Z.wireframeLinewidth*Qt()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(W.isLine){let Bt=Z.linewidth;Bt===void 0&&(Bt=1),wt.setLineWidth(Bt*Qt()),W.isLineSegments?pe.setMode(N.LINES):W.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else W.isPoints?pe.setMode(N.POINTS):W.isSprite&&pe.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))pe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Bt=W._multiDrawStarts,be=W._multiDrawCounts,oe=W._multiDrawCount,ge=yt?X.get(yt).bytesPerElement:1,Rn=Nt.get(Z).currentProgram.getUniforms();for(let ke=0;ke<oe;ke++)Rn.setValue(N,"_gl_DrawID",ke),pe.render(Bt[ke]/ge,be[ke])}else if(W.isInstancedMesh)pe.renderInstances(ne,we,W.count);else if(K.isInstancedBufferGeometry){const Bt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,be=Math.min(K.instanceCount,Bt);pe.renderInstances(ne,we,be)}else pe.render(ne,we)};function je(b,H,K){b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,wn(b,H,K),b.side=ii,b.needsUpdate=!0,wn(b,H,K),b.side=Fn):wn(b,H,K)}this.compile=function(b,H,K=null){K===null&&(K=b),D=Ot.get(K),D.init(H),G.push(D),K.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(D.pushLight(W),W.castShadow&&D.pushShadow(W))}),b!==K&&b.traverseVisible(function(W){W.isLight&&W.layers.test(H.layers)&&(D.pushLight(W),W.castShadow&&D.pushShadow(W))}),D.setupLights();const Z=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ft=W.material;if(ft)if(Array.isArray(ft))for(let xt=0;xt<ft.length;xt++){const At=ft[xt];je(At,K,W),Z.add(At)}else je(ft,K,W),Z.add(ft)}),D=G.pop(),Z},this.compileAsync=function(b,H,K=null){const Z=this.compile(b,H,K);return new Promise(W=>{function ft(){if(Z.forEach(function(xt){Nt.get(xt).currentProgram.isReady()&&Z.delete(xt)}),Z.size===0){W(b);return}setTimeout(ft,10)}ee.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let nn=null;function Wn(b){nn&&nn(b)}function Mr(){Ye.stop()}function cn(){Ye.start()}const Ye=new Kl;Ye.setAnimationLoop(Wn),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(b){nn=b,mt.setAnimationLoop(b),b===null?Ye.stop():Ye.start()},mt.addEventListener("sessionstart",Mr),mt.addEventListener("sessionend",cn),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(H),H=mt.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,H,_),D=Ot.get(b,G.length),D.init(H),G.push(D),qt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),it.setFromProjectionMatrix(qt,Tn,H.reversedDepth),Tt=this.localClippingEnabled,lt=Rt.init(this.clippingPlanes,Tt),I=vt.get(b,U.length),I.init(),U.push(I),mt.enabled===!0&&mt.isPresenting===!0){const ft=L.xr.getDepthSensingMesh();ft!==null&&Si(ft,H,-1/0,L.sortObjects)}Si(b,H,0,L.sortObjects),I.finish(),L.sortObjects===!0&&I.sort(Dt,jt),Ut=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Ut&&dt.addToRenderList(I,b),this.info.render.frame++,lt===!0&&Rt.beginShadows();const K=D.state.shadowsArray;ot.render(K,b,H),lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=I.opaque,W=I.transmissive;if(D.setupLights(),H.isArrayCamera){const ft=H.cameras;if(W.length>0)for(let xt=0,At=ft.length;xt<At;xt++){const yt=ft[xt];rn(Z,W,b,yt)}Ut&&dt.render(b);for(let xt=0,At=ft.length;xt<At;xt++){const yt=ft[xt];Ae(I,b,yt,yt.viewport)}}else W.length>0&&rn(Z,W,b,H),Ut&&dt.render(b),Ae(I,b,H);_!==null&&A===0&&(Yt.updateMultisampleRenderTarget(_),Yt.updateRenderTargetMipmap(_)),b.isScene===!0&&b.onAfterRender(L,b,H),F.resetDefaultState(),E=-1,V=null,G.pop(),G.length>0?(D=G[G.length-1],lt===!0&&Rt.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?I=U[U.length-1]:I=null};function Si(b,H,K,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||it.intersectsSprite(b)){Z&&Zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(qt);const xt=at.update(b),At=b.material;At.visible&&I.push(b,xt,At,K,Zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||it.intersectsObject(b))){const xt=at.update(b),At=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Zt.copy(b.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Zt.copy(xt.boundingSphere.center)),Zt.applyMatrix4(b.matrixWorld).applyMatrix4(qt)),Array.isArray(At)){const yt=xt.groups;for(let Ct=0,Vt=yt.length;Ct<Vt;Ct++){const Ft=yt[Ct],ne=At[Ft.materialIndex];ne&&ne.visible&&I.push(b,xt,ne,K,Zt.z,Ft)}}else At.visible&&I.push(b,xt,At,K,Zt.z,null)}}const ft=b.children;for(let xt=0,At=ft.length;xt<At;xt++)Si(ft[xt],H,K,Z)}function Ae(b,H,K,Z){const{opaque:W,transmissive:ft,transparent:xt}=b;D.setupLightsView(K),lt===!0&&Rt.setGlobalState(L.clippingPlanes,K),Z&&wt.viewport(k.copy(Z)),W.length>0&&Xn(W,H,K),ft.length>0&&Xn(ft,H,K),xt.length>0&&Xn(xt,H,K),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function rn(b,H,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[Z.id]===void 0&&(D.state.transmissionRenderTarget[Z.id]=new vi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Ki:Gn,minFilter:mi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));const ft=D.state.transmissionRenderTarget[Z.id],xt=Z.viewport||k;ft.setSize(xt.z*L.transmissionResolutionScale,xt.w*L.transmissionResolutionScale);const At=L.getRenderTarget(),yt=L.getActiveCubeFace(),Ct=L.getActiveMipmapLevel();L.setRenderTarget(ft),L.getClearColor(z),$=L.getClearAlpha(),$<1&&L.setClearColor(16777215,.5),L.clear(),Ut&&dt.render(K);const Vt=L.toneMapping;L.toneMapping=ni;const Ft=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),D.setupLightsView(Z),lt===!0&&Rt.setGlobalState(L.clippingPlanes,Z),Xn(b,K,Z),Yt.updateMultisampleRenderTarget(ft),Yt.updateRenderTargetMipmap(ft),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let he=0,we=H.length;he<we;he++){const Re=H[he],{object:pe,geometry:Bt,material:be,group:oe}=Re;if(be.side===Fn&&pe.layers.test(Z.layers)){const ge=be.side;be.side=tn,be.needsUpdate=!0,Sr(pe,K,Z,Bt,be,oe),be.side=ge,be.needsUpdate=!0,ne=!0}}ne===!0&&(Yt.updateMultisampleRenderTarget(ft),Yt.updateRenderTargetMipmap(ft))}L.setRenderTarget(At,yt,Ct),L.setClearColor(z,$),Ft!==void 0&&(Z.viewport=Ft),L.toneMapping=Vt}function Xn(b,H,K){const Z=H.isScene===!0?H.overrideMaterial:null;for(let W=0,ft=b.length;W<ft;W++){const xt=b[W],{object:At,geometry:yt,group:Ct}=xt;let Vt=xt.material;Vt.allowOverride===!0&&Z!==null&&(Vt=Z),At.layers.test(K.layers)&&Sr(At,H,K,yt,Vt,Ct)}}function Sr(b,H,K,Z,W,ft){b.onBeforeRender(L,H,K,Z,W,ft),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(L,H,K,Z,b,ft),W.transparent===!0&&W.side===Fn&&W.forceSinglePass===!1?(W.side=tn,W.needsUpdate=!0,L.renderBufferDirect(K,H,Z,W,b,ft),W.side=ii,W.needsUpdate=!0,L.renderBufferDirect(K,H,Z,W,b,ft),W.side=Fn):L.renderBufferDirect(K,H,Z,W,b,ft),b.onAfterRender(L,H,K,Z,W,ft)}function wn(b,H,K){H.isScene!==!0&&(H=Ue);const Z=Nt.get(b),W=D.state.lights,ft=D.state.shadowsArray,xt=W.state.version,At=et.getParameters(b,W.state,ft,H,K),yt=et.getProgramCacheKey(At);let Ct=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?S:R).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",kt),Ct=new Map,Z.programs=Ct);let Vt=Ct.get(yt);if(Vt!==void 0){if(Z.currentProgram===Vt&&Z.lightsStateVersion===xt)return si(b,At),Vt}else At.uniforms=et.getUniforms(b),b.onBeforeCompile(At,L),Vt=et.acquireProgram(At,yt),Ct.set(yt,Vt),Z.uniforms=At.uniforms;const Ft=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=Rt.uniform),si(b,At),Z.needsLights=Ji(b),Z.lightsStateVersion=xt,Z.needsLights&&(Ft.ambientLightColor.value=W.state.ambient,Ft.lightProbe.value=W.state.probe,Ft.directionalLights.value=W.state.directional,Ft.directionalLightShadows.value=W.state.directionalShadow,Ft.spotLights.value=W.state.spot,Ft.spotLightShadows.value=W.state.spotShadow,Ft.rectAreaLights.value=W.state.rectArea,Ft.ltc_1.value=W.state.rectAreaLTC1,Ft.ltc_2.value=W.state.rectAreaLTC2,Ft.pointLights.value=W.state.point,Ft.pointLightShadows.value=W.state.pointShadow,Ft.hemisphereLights.value=W.state.hemi,Ft.directionalShadowMap.value=W.state.directionalShadowMap,Ft.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ft.spotShadowMap.value=W.state.spotShadowMap,Ft.spotLightMatrix.value=W.state.spotLightMatrix,Ft.spotLightMap.value=W.state.spotLightMap,Ft.pointShadowMap.value=W.state.pointShadowMap,Ft.pointShadowMatrix.value=W.state.pointShadowMatrix),Z.currentProgram=Vt,Z.uniformsList=null,Vt}function bi(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=ns.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function si(b,H){const K=Nt.get(b);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function ai(b,H,K,Z,W){H.isScene!==!0&&(H=Ue),Yt.resetTextureUnits();const ft=H.fog,xt=Z.isMeshStandardMaterial?H.environment:null,At=_===null?L.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Yi,yt=(Z.isMeshStandardMaterial?S:R).get(Z.envMap||xt),Ct=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Vt=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ft=!!K.morphAttributes.position,ne=!!K.morphAttributes.normal,he=!!K.morphAttributes.color;let we=ni;Z.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(we=L.toneMapping);const Re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pe=Re!==void 0?Re.length:0,Bt=Nt.get(Z),be=D.state.lights;if(lt===!0&&(Tt===!0||b!==V)){const ze=b===V&&Z.id===E;Rt.setState(Z,b,ze)}let oe=!1;Z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==be.state.version||Bt.outputColorSpace!==At||W.isBatchedMesh&&Bt.batching===!1||!W.isBatchedMesh&&Bt.batching===!0||W.isBatchedMesh&&Bt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Bt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Bt.instancing===!1||!W.isInstancedMesh&&Bt.instancing===!0||W.isSkinnedMesh&&Bt.skinning===!1||!W.isSkinnedMesh&&Bt.skinning===!0||W.isInstancedMesh&&Bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Bt.instancingMorph===!1&&W.morphTexture!==null||Bt.envMap!==yt||Z.fog===!0&&Bt.fog!==ft||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Rt.numPlanes||Bt.numIntersection!==Rt.numIntersection)||Bt.vertexAlphas!==Ct||Bt.vertexTangents!==Vt||Bt.morphTargets!==Ft||Bt.morphNormals!==ne||Bt.morphColors!==he||Bt.toneMapping!==we||Bt.morphTargetsCount!==pe)&&(oe=!0):(oe=!0,Bt.__version=Z.version);let ge=Bt.currentProgram;oe===!0&&(ge=wn(Z,H,W));let Rn=!1,ke=!1,yn=!1;const ye=ge.getUniforms(),Be=Bt.uniforms;if(wt.useProgram(ge.program)&&(Rn=!0,ke=!0,yn=!0),Z.id!==E&&(E=Z.id,ke=!0),Rn||V!==b){wt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ye.setValue(N,"projectionMatrix",b.projectionMatrix),ye.setValue(N,"viewMatrix",b.matrixWorldInverse);const Ve=ye.map.cameraPosition;Ve!==void 0&&Ve.setValue(N,Lt.setFromMatrixPosition(b.matrixWorld)),xe.logarithmicDepthBuffer&&ye.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ye.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,ke=!0,yn=!0)}if(W.isSkinnedMesh){ye.setOptional(N,W,"bindMatrix"),ye.setOptional(N,W,"bindMatrixInverse");const ze=W.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),ye.setValue(N,"boneTexture",ze.boneTexture,Yt))}W.isBatchedMesh&&(ye.setOptional(N,W,"batchingTexture"),ye.setValue(N,"batchingTexture",W._matricesTexture,Yt),ye.setOptional(N,W,"batchingIdTexture"),ye.setValue(N,"batchingIdTexture",W._indirectTexture,Yt),ye.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&ye.setValue(N,"batchingColorTexture",W._colorsTexture,Yt));const Ze=K.morphAttributes;if((Ze.position!==void 0||Ze.normal!==void 0||Ze.color!==void 0)&&Gt.update(W,K,ge),(ke||Bt.receiveShadow!==W.receiveShadow)&&(Bt.receiveShadow=W.receiveShadow,ye.setValue(N,"receiveShadow",W.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Be.envMap.value=yt,Be.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Be.envMapIntensity.value=H.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Ym()),ke&&(ye.setValue(N,"toneMappingExposure",L.toneMappingExposure),Bt.needsLights&&br(Be,yn),ft&&Z.fog===!0&&Pt.refreshFogUniforms(Be,ft),Pt.refreshMaterialUniforms(Be,Z,ht,st,D.state.transmissionRenderTarget[b.id]),ns.upload(N,bi(Bt),Be,Yt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ns.upload(N,bi(Bt),Be,Yt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ye.setValue(N,"center",W.center),ye.setValue(N,"modelViewMatrix",W.modelViewMatrix),ye.setValue(N,"normalMatrix",W.normalMatrix),ye.setValue(N,"modelMatrix",W.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const ze=Z.uniformsGroups;for(let Ve=0,yi=ze.length;Ve<yi;Ve++){const un=ze[Ve];_t.update(un,ge),_t.bind(un,ge)}}return ge}function br(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Ji(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(b,H,K){const Z=Nt.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Nt.get(b.texture).__webglTexture=H,Nt.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:K,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const K=Nt.get(b);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};const Qi=N.createFramebuffer();this.setRenderTarget=function(b,H=0,K=0){_=b,Y=H,A=K;let Z=!0,W=null,ft=!1,xt=!1;if(b){const yt=Nt.get(b);if(yt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(yt.__webglFramebuffer===void 0)Yt.setupRenderTarget(b);else if(yt.__hasExternalTextures)Yt.rebindTextures(b,Nt.get(b.texture).__webglTexture,Nt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ft=b.depthTexture;if(yt.__boundDepthTexture!==Ft){if(Ft!==null&&Nt.has(Ft)&&(b.width!==Ft.image.width||b.height!==Ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(xt=!0);const Vt=Nt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?W=Vt[H][K]:W=Vt[H],ft=!0):b.samples>0&&Yt.useMultisampledRTT(b)===!1?W=Nt.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?W=Vt[K]:W=Vt,k.copy(b.viewport),Q.copy(b.scissor),tt=b.scissorTest}else k.copy(Jt).multiplyScalar(ht).floor(),Q.copy(le).multiplyScalar(ht).floor(),tt=ce;if(K!==0&&(W=Qi),wt.bindFramebuffer(N.FRAMEBUFFER,W)&&Z&&wt.drawBuffers(b,W),wt.viewport(k),wt.scissor(Q),wt.setScissorTest(tt),ft){const yt=Nt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,yt.__webglTexture,K)}else if(xt){const yt=H;for(let Ct=0;Ct<b.textures.length;Ct++){const Vt=Nt.get(b.textures[Ct]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ct,Vt.__webglTexture,K,yt)}}else if(b!==null&&K!==0){const yt=Nt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,K)}E=-1},this.readRenderTargetPixels=function(b,H,K,Z,W,ft,xt,At=0){if(!(b&&b.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt){wt.bindFramebuffer(N.FRAMEBUFFER,yt);try{const Ct=b.textures[At],Vt=Ct.format,Ft=Ct.type;if(!xe.textureFormatReadable(Vt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Ft)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&K>=0&&K<=b.height-W&&(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+At),N.readPixels(H,K,Z,W,Ht.convert(Vt),Ht.convert(Ft),ft))}finally{const Ct=_!==null?Nt.get(_).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,H,K,Z,W,ft,xt,At=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=Nt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xt!==void 0&&(yt=yt[xt]),yt)if(H>=0&&H<=b.width-Z&&K>=0&&K<=b.height-W){wt.bindFramebuffer(N.FRAMEBUFFER,yt);const Ct=b.textures[At],Vt=Ct.format,Ft=Ct.type;if(!xe.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.bufferData(N.PIXEL_PACK_BUFFER,ft.byteLength,N.STREAM_READ),b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+At),N.readPixels(H,K,Z,W,Ht.convert(Vt),Ht.convert(Ft),0);const he=_!==null?Nt.get(_).__webglFramebuffer:null;wt.bindFramebuffer(N.FRAMEBUFFER,he);const we=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await yu(N,we,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ft),N.deleteBuffer(ne),N.deleteSync(we),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,K=0){const Z=Math.pow(2,-K),W=Math.floor(b.image.width*Z),ft=Math.floor(b.image.height*Z),xt=H!==null?H.x:0,At=H!==null?H.y:0;Yt.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,xt,At,W,ft),wt.unbindTexture()};const yr=N.createFramebuffer(),sn=N.createFramebuffer();this.copyTextureToTexture=function(b,H,K=null,Z=null,W=0,ft=null){ft===null&&(W!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ft=W,W=0):ft=0);let xt,At,yt,Ct,Vt,Ft,ne,he,we;const Re=b.isCompressedTexture?b.mipmaps[ft]:b.image;if(K!==null)xt=K.max.x-K.min.x,At=K.max.y-K.min.y,yt=K.isBox3?K.max.z-K.min.z:1,Ct=K.min.x,Vt=K.min.y,Ft=K.isBox3?K.min.z:0;else{const Ze=Math.pow(2,-W);xt=Math.floor(Re.width*Ze),At=Math.floor(Re.height*Ze),b.isDataArrayTexture?yt=Re.depth:b.isData3DTexture?yt=Math.floor(Re.depth*Ze):yt=1,Ct=0,Vt=0,Ft=0}Z!==null?(ne=Z.x,he=Z.y,we=Z.z):(ne=0,he=0,we=0);const pe=Ht.convert(H.format),Bt=Ht.convert(H.type);let be;H.isData3DTexture?(Yt.setTexture3D(H,0),be=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Yt.setTexture2DArray(H,0),be=N.TEXTURE_2D_ARRAY):(Yt.setTexture2D(H,0),be=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const oe=N.getParameter(N.UNPACK_ROW_LENGTH),ge=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Rn=N.getParameter(N.UNPACK_SKIP_PIXELS),ke=N.getParameter(N.UNPACK_SKIP_ROWS),yn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Re.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Re.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ft);const ye=b.isDataArrayTexture||b.isData3DTexture,Be=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Ze=Nt.get(b),ze=Nt.get(H),Ve=Nt.get(Ze.__renderTarget),yi=Nt.get(ze.__renderTarget);wt.bindFramebuffer(N.READ_FRAMEBUFFER,Ve.__webglFramebuffer),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let un=0;un<yt;un++)ye&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.get(b).__webglTexture,W,Ft+un),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.get(H).__webglTexture,ft,we+un)),N.blitFramebuffer(Ct,Vt,xt,At,ne,he,xt,At,N.DEPTH_BUFFER_BIT,N.NEAREST);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Nt.has(b)){const Ze=Nt.get(b),ze=Nt.get(H);wt.bindFramebuffer(N.READ_FRAMEBUFFER,yr),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,sn);for(let Ve=0;Ve<yt;Ve++)ye?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ze.__webglTexture,W,Ft+Ve):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ze.__webglTexture,W),Be?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ze.__webglTexture,ft,we+Ve):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ze.__webglTexture,ft),W!==0?N.blitFramebuffer(Ct,Vt,xt,At,ne,he,xt,At,N.COLOR_BUFFER_BIT,N.NEAREST):Be?N.copyTexSubImage3D(be,ft,ne,he,we+Ve,Ct,Vt,xt,At):N.copyTexSubImage2D(be,ft,ne,he,Ct,Vt,xt,At);wt.bindFramebuffer(N.READ_FRAMEBUFFER,null),wt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Be?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(be,ft,ne,he,we,xt,At,yt,pe,Bt,Re.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(be,ft,ne,he,we,xt,At,yt,pe,Re.data):N.texSubImage3D(be,ft,ne,he,we,xt,At,yt,pe,Bt,Re):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ft,ne,he,xt,At,pe,Bt,Re.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ft,ne,he,Re.width,Re.height,pe,Re.data):N.texSubImage2D(N.TEXTURE_2D,ft,ne,he,xt,At,pe,Bt,Re);N.pixelStorei(N.UNPACK_ROW_LENGTH,oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,yn),ft===0&&H.generateMipmaps&&N.generateMipmap(be),wt.unbindTexture()},this.initRenderTarget=function(b){Nt.get(b).__webglFramebuffer===void 0&&Yt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Yt.setTextureCube(b,0):b.isData3DTexture?Yt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Yt.setTexture2DArray(b,0):Yt.setTexture2D(b,0),wt.unbindTexture()},this.resetState=function(){Y=0,A=0,_=null,wt.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const vl={type:"change"},to={type:"start"},tc={type:"end"},Zr=new Qa,Ml=new Qn,Km=Math.cos(70*Tu.DEG2RAD),Ie=new J,Qe=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zs=1e-6;class Zm extends ah{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Vi.ROTATE,TWO:Vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new gi,this._lastTargetPosition=new J,this._quat=new gi().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qo,this._sphericalDelta=new qo,this._scale=1,this._panOffset=new J,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new J,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jm.bind(this),this._onPointerDown=$m.bind(this),this._onPointerUp=Qm.bind(this),this._onContextMenu=a0.bind(this),this._onMouseWheel=n0.bind(this),this._onKeyDown=i0.bind(this),this._onTouchStart=r0.bind(this),this._onTouchMove=s0.bind(this),this._onMouseDown=t0.bind(this),this._onMouseMove=e0.bind(this),this._interceptControlDown=o0.bind(this),this._interceptControlUp=l0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vl),this.update(),this.state=Me.NONE}update(t=null){const e=this.object.position;Ie.copy(e).sub(this.target),Ie.applyQuaternion(this._quat),this._spherical.setFromVector3(Ie),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Qe:n>Math.PI&&(n-=Qe),r<-Math.PI?r+=Qe:r>Math.PI&&(r-=Qe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(Ie.setFromSpherical(this._spherical),Ie.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ie),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=Ie.length();o=this._clampDistance(l*this._scale);const h=l-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const l=new J(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const u=new J(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(l),this.object.updateMatrixWorld(),o=Ie.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zr.origin.copy(this.object.position),Zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zr.direction))<Km?this.object.lookAt(this.target):(Ml.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zr.intersectPlane(Ml,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Zs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zs||this._lastTargetPosition.distanceToSquared(this.target)>Zs?(this.dispatchEvent(vl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Qe/60*this.autoRotateSpeed*t:Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ie.setFromMatrixColumn(e,0),Ie.multiplyScalar(-t),this._panOffset.add(Ie)}_panUp(t,e){this.screenSpacePanning===!0?Ie.setFromMatrixColumn(e,1):(Ie.setFromMatrixColumn(e,0),Ie.crossVectors(this.object.up,Ie)),Ie.multiplyScalar(t),this._panOffset.add(Ie)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ie.copy(r).sub(this.target);let a=Ie.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/n.clientHeight,this.object.matrix),this._panUp(2*e*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,a=e-n.top,o=n.width,l=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(a/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),a=.5*(t.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new re,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $m(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Jm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Qm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tc),this.state=Me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function t0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Me.DOLLY;break;case Gi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}break;case Gi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(to)}function e0(i){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function n0(i){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(i.preventDefault(),this.dispatchEvent(to),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(tc))}function i0(i){this.enabled!==!1&&this._handleKeyDown(i)}function r0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Me.TOUCH_ROTATE;break;case Vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case Vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Me.TOUCH_DOLLY_PAN;break;case Vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(to)}function s0(i){switch(this._trackPointer(i),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Me.NONE}}function a0(i){this.enabled!==!1&&i.preventDefault()}function o0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function l0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class c0{constructor(t,e=8e3){this.scene=t,this.count=e,this.color=new me("#ff0055"),this.geometry=new An,this.positions=new Float32Array(this.count*3),this.targetPositions=new Float32Array(this.count*3);for(let n=0;n<this.count*3;n++)this.positions[n]=(Math.random()-.5)*10,this.targetPositions[n]=this.positions[n];this.geometry.setAttribute("position",new bn(this.positions,3)),this.material=new jl({color:this.color,size:.05,sizeAttenuation:!0,transparent:!0,opacity:.8,blending:Qs,depthWrite:!1}),this.points=new eh(this.geometry,this.material),this.scene.add(this.points),this.currentShape="heart",this.baseScale=1,this.handScale=1,this.setShape("heart")}setColor(t){this.color.set(t),this.material.color=this.color}setHandScale(t){let o=(t-.15)/.25;o=Math.max(0,Math.min(1,o)),this.handScale=.5+o*(2.5-.5)}setShape(t){this.currentShape=t;const e=this.generateShape(t);for(let n=0;n<this.count*3;n++)this.targetPositions[n]=e[n]}generateShape(t){const e=new Float32Array(this.count*3);for(let n=0;n<this.count;n++){let r,a,o;const l=n*3;if(t==="heart"){const h=Math.random()*Math.PI*2,u=Math.sqrt(Math.random());r=u*16*Math.pow(Math.sin(h),3),a=u*(13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h)),o=(Math.random()-.5)*5,r*=.1,a*=.1,o*=.1,a*=-1}else if(t==="flower"){const u=Math.random()*Math.PI*2,d=Math.cos(4*u),m=Math.random()*Math.abs(d);r=m*Math.cos(u)*3,a=m*Math.sin(u)*3,o=(Math.random()-.5)*1}else if(t==="saturn")if(Math.random()>.4){const h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),d=1.2;r=d*Math.sin(u)*Math.cos(h),a=d*Math.sin(u)*Math.sin(h),o=d*Math.cos(u)}else{const h=Math.random()*Math.PI*2,u=1.8+Math.random()*.8;r=u*Math.cos(h),o=u*Math.sin(h),a=(Math.random()-.5)*.1;const d=.4,m=a*Math.cos(d)-o*Math.sin(d),x=a*Math.sin(d)+o*Math.cos(d);a=m,o=x}else if(t==="fireworks"){const h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),d=3*Math.cbrt(Math.random());r=d*Math.sin(u)*Math.cos(h),a=d*Math.sin(u)*Math.sin(h),o=d*Math.cos(u)}else if(t==="spiral"){const h=Math.random()*20,u=.5+h*.1;r=u*Math.cos(h*2),o=u*Math.sin(h*2),a=h*.3-3}else{const h=Math.random()*Math.PI*2,u=Math.acos(2*Math.random()-1),d=2;r=d*Math.sin(u)*Math.cos(h),a=d*Math.sin(u)*Math.sin(h),o=d*Math.cos(u)}e[l]=r,e[l+1]=a,e[l+2]=o}return e}update(){const t=this.geometry.attributes.position.array,e=.08;for(let n=0;n<this.count;n++){const r=n*3,a=this.targetPositions[r]*this.handScale,o=this.targetPositions[r+1]*this.handScale,l=this.targetPositions[r+2]*this.handScale;t[r]+=(a-t[r])*e,t[r+1]+=(o-t[r+1])*e,t[r+2]+=(l-t[r+2])*e,this.currentShape==="fireworks"&&(t[r]+=(Math.random()-.5)*.05,t[r+1]+=(Math.random()-.5)*.05,t[r+2]+=(Math.random()-.5)*.05)}this.geometry.attributes.position.needsUpdate=!0,this.points.rotation.y+=.002}}var as=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$s={},Sl;function u0(){return Sl||(Sl=1,(function(){var i;function t(s){var c=0;return function(){return c<s.length?{done:!1,value:s[c++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,f){return s==Array.prototype||s==Object.prototype||(s[c]=f.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof as=="object"&&as];for(var c=0;c<s.length;++c){var f=s[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function a(s,c){if(c)t:{var f=r;s=s.split(".");for(var v=0;v<s.length-1;v++){var w=s[v];if(!(w in f))break t;f=f[w]}s=s[s.length-1],v=f[s],c=c(v),c!=v&&c!=null&&e(f,s,{configurable:!0,writable:!0,value:c})}}a("Symbol",function(s){function c(P){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new f(v+(P||"")+"_"+w++,P)}function f(P,C){this.h=P,e(this,"description",{configurable:!0,writable:!0,value:C})}if(s)return s;f.prototype.toString=function(){return this.h};var v="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",w=0;return c}),a("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),f=0;f<c.length;f++){var v=r[c[f]];typeof v=="function"&&typeof v.prototype[s]!="function"&&e(v.prototype,s,{configurable:!0,writable:!0,value:function(){return o(t(this))}})}return s});function o(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function l(s){var c=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return c?c.call(s):{next:t(s)}}function h(s){if(!(s instanceof Array)){s=l(s);for(var c,f=[];!(c=s.next()).done;)f.push(c.value);s=f}return s}var u=typeof Object.assign=="function"?Object.assign:function(s,c){for(var f=1;f<arguments.length;f++){var v=arguments[f];if(v)for(var w in v)Object.prototype.hasOwnProperty.call(v,w)&&(s[w]=v[w])}return s};a("Object.assign",function(s){return s||u});var d=typeof Object.create=="function"?Object.create:function(s){function c(){}return c.prototype=s,new c},m;if(typeof Object.setPrototypeOf=="function")m=Object.setPrototypeOf;else{var x;t:{var M={a:!0},y={};try{y.__proto__=M,x=y.a;break t}catch{}x=!1}m=x?function(s,c){if(s.__proto__=c,s.__proto__!==c)throw new TypeError(s+" is not extensible");return s}:null}var T=m;function g(s,c){if(s.prototype=d(c.prototype),s.prototype.constructor=s,T)T(s,c);else for(var f in c)if(f!="prototype")if(Object.defineProperties){var v=Object.getOwnPropertyDescriptor(c,f);v&&Object.defineProperty(s,f,v)}else s[f]=c[f];s.ya=c.prototype}function p(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function I(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}p.prototype.u=function(s){this.i=s};function D(s,c){s.l={ma:c,na:!0},s.h=s.s||s.v}p.prototype.return=function(s){this.l={return:s},this.h=this.v};function U(s,c,f){return s.h=f,{value:c}}function G(s){this.h=new p,this.i=s}function L(s,c){I(s.h);var f=s.h.j;return f?B(s,"return"in f?f.return:function(v){return{value:v,done:!0}},c,s.h.return):(s.h.return(c),Y(s))}function B(s,c,f,v){try{var w=c.call(s.h.j,f);if(!(w instanceof Object))throw new TypeError("Iterator result "+w+" is not an object");if(!w.done)return s.h.m=!1,w;var P=w.value}catch(C){return s.h.j=null,D(s.h,C),Y(s)}return s.h.j=null,v.call(s.h,P),Y(s)}function Y(s){for(;s.h.h;)try{var c=s.i(s.h);if(c)return s.h.m=!1,{value:c.value,done:!1}}catch(f){s.h.i=void 0,D(s.h,f)}if(s.h.m=!1,s.h.l){if(c=s.h.l,s.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function A(s){this.next=function(c){return I(s.h),s.h.j?c=B(s,s.h.j.next,c,s.h.u):(s.h.u(c),c=Y(s)),c},this.throw=function(c){return I(s.h),s.h.j?c=B(s,s.h.j.throw,c,s.h.u):(D(s.h,c),c=Y(s)),c},this.return=function(c){return L(s,c)},this[Symbol.iterator]=function(){return this}}function _(s){function c(v){return s.next(v)}function f(v){return s.throw(v)}return new Promise(function(v,w){function P(C){C.done?v(C.value):Promise.resolve(C.value).then(c,f).then(P,w)}P(s.next())})}function E(s){return _(new A(new G(s)))}a("Promise",function(s){function c(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var O=this.l();try{C(O.resolve,O.reject)}catch(q){O.reject(q)}}function f(){this.h=null}function v(C){return C instanceof c?C:new c(function(O){O(C)})}if(s)return s;f.prototype.i=function(C){if(this.h==null){this.h=[];var O=this;this.j(function(){O.m()})}this.h.push(C)};var w=r.setTimeout;f.prototype.j=function(C){w(C,0)},f.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var O=0;O<C.length;++O){var q=C[O];C[O]=null;try{q()}catch(ct){this.l(ct)}}}this.h=null},f.prototype.l=function(C){this.j(function(){throw C})},c.prototype.l=function(){function C(ct){return function(gt){q||(q=!0,ct.call(O,gt))}}var O=this,q=!1;return{resolve:C(this.I),reject:C(this.m)}},c.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof c)this.L(C);else{t:switch(typeof C){case"object":var O=C!=null;break t;case"function":O=!0;break t;default:O=!1}O?this.F(C):this.s(C)}},c.prototype.F=function(C){var O=void 0;try{O=C.then}catch(q){this.m(q);return}typeof O=="function"?this.M(O,C):this.s(C)},c.prototype.m=function(C){this.v(2,C)},c.prototype.s=function(C){this.v(1,C)},c.prototype.v=function(C,O){if(this.i!=0)throw Error("Cannot settle("+C+", "+O+"): Promise already settled in state"+this.i);this.i=C,this.j=O,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var C=this;w(function(){if(C.D()){var O=r.console;typeof O<"u"&&O.error(C.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,O=r.Event,q=r.dispatchEvent;return typeof q>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof O=="function"?C=new O("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,q(C))},c.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)P.i(this.h[C]);this.h=null}};var P=new f;return c.prototype.L=function(C){var O=this.l();C.T(O.resolve,O.reject)},c.prototype.M=function(C,O){var q=this.l();try{C.call(O,q.resolve,q.reject)}catch(ct){q.reject(ct)}},c.prototype.then=function(C,O){function q(It,St){return typeof It=="function"?function(Xt){try{ct(It(Xt))}catch(ie){gt(ie)}}:St}var ct,gt,Wt=new c(function(It,St){ct=It,gt=St});return this.T(q(C,ct),q(O,gt)),Wt},c.prototype.catch=function(C){return this.then(void 0,C)},c.prototype.T=function(C,O){function q(){switch(ct.i){case 1:C(ct.j);break;case 2:O(ct.j);break;default:throw Error("Unexpected state: "+ct.i)}}var ct=this;this.h==null?P.i(q):this.h.push(q),this.u=!0},c.resolve=v,c.reject=function(C){return new c(function(O,q){q(C)})},c.race=function(C){return new c(function(O,q){for(var ct=l(C),gt=ct.next();!gt.done;gt=ct.next())v(gt.value).T(O,q)})},c.all=function(C){var O=l(C),q=O.next();return q.done?v([]):new c(function(ct,gt){function Wt(Xt){return function(ie){It[Xt]=ie,St--,St==0&&ct(It)}}var It=[],St=0;do It.push(void 0),St++,v(q.value).T(Wt(It.length-1),gt),q=O.next();while(!q.done)})},c});function V(s,c){s instanceof String&&(s+="");var f=0,v=!1,w={next:function(){if(!v&&f<s.length){var P=f++;return{value:c(P,s[P]),done:!1}}return v=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}a("Array.prototype.keys",function(s){return s||function(){return V(this,function(c){return c})}}),a("Array.prototype.fill",function(s){return s||function(c,f,v){var w=this.length||0;for(0>f&&(f=Math.max(0,w+f)),(v==null||v>w)&&(v=w),v=Number(v),0>v&&(v=Math.max(0,w+v)),f=Number(f||0);f<v;f++)this[f]=c;return this}});function k(s){return s||Array.prototype.fill}a("Int8Array.prototype.fill",k),a("Uint8Array.prototype.fill",k),a("Uint8ClampedArray.prototype.fill",k),a("Int16Array.prototype.fill",k),a("Uint16Array.prototype.fill",k),a("Int32Array.prototype.fill",k),a("Uint32Array.prototype.fill",k),a("Float32Array.prototype.fill",k),a("Float64Array.prototype.fill",k),a("Object.is",function(s){return s||function(c,f){return c===f?c!==0||1/c===1/f:c!==c&&f!==f}}),a("Array.prototype.includes",function(s){return s||function(c,f){var v=this;v instanceof String&&(v=String(v));var w=v.length;for(f=f||0,0>f&&(f=Math.max(f+w,0));f<w;f++){var P=v[f];if(P===c||Object.is(P,c))return!0}return!1}}),a("String.prototype.includes",function(s){return s||function(c,f){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,f||0)!==-1}});var Q=this||self;function tt(s,c){s=s.split(".");var f=Q;s[0]in f||typeof f.execScript>"u"||f.execScript("var "+s[0]);for(var v;s.length&&(v=s.shift());)s.length||c===void 0?f[v]&&f[v]!==Object.prototype[v]?f=f[v]:f=f[v]={}:f[v]=c}function z(s){var c;t:{if((c=Q.navigator)&&(c=c.userAgent))break t;c=""}return c.indexOf(s)!=-1}var $=Array.prototype.map?function(s,c){return Array.prototype.map.call(s,c,void 0)}:function(s,c){for(var f=s.length,v=Array(f),w=typeof s=="string"?s.split(""):s,P=0;P<f;P++)P in w&&(v[P]=c.call(void 0,w[P],P,s));return v},j={},st=null;function ht(s){var c=s.length,f=3*c/4;f%3?f=Math.floor(f):"=.".indexOf(s[c-1])!=-1&&(f="=.".indexOf(s[c-2])!=-1?f-2:f-1);var v=new Uint8Array(f),w=0;return Dt(s,function(P){v[w++]=P}),w!==f?v.subarray(0,w):v}function Dt(s,c){function f(q){for(;v<s.length;){var ct=s.charAt(v++),gt=st[ct];if(gt!=null)return gt;if(!/^[\s\xa0]*$/.test(ct))throw Error("Unknown base64 encoding at char: "+ct)}return q}jt();for(var v=0;;){var w=f(-1),P=f(0),C=f(64),O=f(64);if(O===64&&w===-1)break;c(w<<2|P>>4),C!=64&&(c(P<<4&240|C>>2),O!=64&&c(C<<6&192|O))}}function jt(){if(!st){st={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var v=s.concat(c[f].split(""));j[f]=v;for(var w=0;w<v.length;w++){var P=v[w];st[P]===void 0&&(st[P]=w)}}}}var Jt=typeof Uint8Array<"u",le=!(z("Trident")||z("MSIE"))&&typeof Q.btoa=="function";function ce(s){if(!le){var c;c===void 0&&(c=0),jt(),c=j[c];for(var f=Array(Math.floor(s.length/3)),v=c[64]||"",w=0,P=0;w<s.length-2;w+=3){var C=s[w],O=s[w+1],q=s[w+2],ct=c[C>>2];C=c[(C&3)<<4|O>>4],O=c[(O&15)<<2|q>>6],q=c[q&63],f[P++]=ct+C+O+q}switch(ct=0,q=v,s.length-w){case 2:ct=s[w+1],q=c[(ct&15)<<2]||v;case 1:s=s[w],f[P]=c[s>>2]+c[(s&3)<<4|ct>>4]+q+v}return f.join("")}for(c="";10240<s.length;)c+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return c+=String.fromCharCode.apply(null,s),btoa(c)}var it=RegExp("[-_.]","g");function lt(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function Tt(s){if(!le)return ht(s);it.test(s)&&(s=s.replace(it,lt)),s=atob(s);for(var c=new Uint8Array(s.length),f=0;f<s.length;f++)c[f]=s.charCodeAt(f);return c}var qt;function Lt(){return qt||(qt=new Uint8Array(0))}var Zt={},Ue=typeof Uint8Array.prototype.slice=="function",Ut=0,Qt=0;function N(s){var c=0>s;s=Math.abs(s);var f=s>>>0;s=Math.floor((s-f)/4294967296),c&&(f=l(ee(f,s)),c=f.next().value,s=f.next().value,f=c),Ut=f>>>0,Qt=s>>>0}var se=typeof BigInt=="function";function ee(s,c){return c=~c,s?s=~s+1:c+=1,[s,c]}function xe(s,c){this.i=s>>>0,this.h=c>>>0}function wt(s){if(!s)return Se||(Se=new xe(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)N(Number(s));else if(se)s=BigInt(s),Ut=Number(s&BigInt(4294967295))>>>0,Qt=Number(s>>BigInt(32)&BigInt(4294967295));else{var c=+(s[0]==="-");Qt=Ut=0;for(var f=s.length,v=c,w=(f-c)%6+c;w<=f;v=w,w+=6)v=Number(s.slice(v,w)),Qt*=1e6,Ut=1e6*Ut+v,4294967296<=Ut&&(Qt+=Ut/4294967296|0,Ut%=4294967296);c&&(c=l(ee(Ut,Qt)),s=c.next().value,c=c.next().value,Ut=s,Qt=c)}return new xe(Ut,Qt)}var Se;function Nt(s,c){return Error("Invalid wire type: "+s+" (at position "+c+")")}function Yt(){return Error("Failed to read varint, encoding is invalid.")}function R(s,c){return Error("Tried to read past the end of the data "+c+" > "+s)}function S(){throw Error("Invalid UTF8")}function X(s,c){return c=String.fromCharCode.apply(null,c),s==null?c:s+c}var nt=void 0,at,et=typeof TextDecoder<"u",Pt,vt=typeof TextEncoder<"u",Ot;function Rt(s){if(s!==Zt)throw Error("illegal external caller")}function ot(s,c){if(Rt(c),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function dt(){return Ot||(Ot=new ot(null,Zt))}function Gt(s){Rt(Zt);var c=s.V;return c=c==null||Jt&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?Tt(c):null,c==null?c:s.V=c}function zt(s){if(typeof s=="string")return{buffer:Tt(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===ot)return{buffer:Gt(s)||Lt(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function bt(s,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ht(this,s,c)}function Ht(s,c,f){f=f===void 0?{}:f,s.S=f.S===void 0?!1:f.S,c&&(c=zt(c),s.i=c.buffer,s.m=c.C,s.l=0,s.j=s.i.length,s.h=s.l)}bt.prototype.reset=function(){this.h=this.l};function F(s,c){if(s.h=c,c>s.j)throw R(s.j,c)}function _t(s){var c=s.i,f=s.h,v=c[f++],w=v&127;if(v&128&&(v=c[f++],w|=(v&127)<<7,v&128&&(v=c[f++],w|=(v&127)<<14,v&128&&(v=c[f++],w|=(v&127)<<21,v&128&&(v=c[f++],w|=v<<28,v&128&&c[f++]&128&&c[f++]&128&&c[f++]&128&&c[f++]&128&&c[f++]&128)))))throw Yt();return F(s,f),w}function pt(s,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var f=s.h,v=f+c;if(v>s.j)throw R(c,s.j-f);return s.h=v,f}var mt=[];function ut(){this.h=[]}ut.prototype.length=function(){return this.h.length},ut.prototype.end=function(){var s=this.h;return this.h=[],s};function rt(s,c,f){for(;0<f||127<c;)s.h.push(c&127|128),c=(c>>>7|f<<25)>>>0,f>>>=7;s.h.push(c)}function Et(s,c){for(;127<c;)s.h.push(c&127|128),c>>>=7;s.h.push(c)}function kt(s,c){if(mt.length){var f=mt.pop();Ht(f,s,c),s=f}else s=new bt(s,c);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}kt.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},kt.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function _e(s){var c=s.h;if(c.h==c.j)return!1;s.j=s.h.h;var f=_t(s.h)>>>0;if(c=f>>>3,f&=7,!(0<=f&&5>=f))throw Nt(f,s.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+s.j+")");return s.l=c,s.i=f,!0}function ue(s){switch(s.i){case 0:if(s.i!=0)ue(s);else t:{s=s.h;for(var c=s.h,f=c+10,v=s.i;c<f;)if((v[c++]&128)===0){F(s,c);break t}throw Yt()}break;case 1:s=s.h,F(s,s.h+8);break;case 2:s.i!=2?ue(s):(c=_t(s.h)>>>0,s=s.h,F(s,s.h+c));break;case 5:s=s.h,F(s,s.h+4);break;case 3:c=s.l;do{if(!_e(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=c)throw Error("Unmatched end-group tag");break}ue(s)}while(!0);break;default:throw Nt(s.i,s.j)}}var je=[];function nn(){this.j=[],this.i=0,this.h=new ut}function Wn(s,c){c.length!==0&&(s.j.push(c),s.i+=c.length)}function Mr(s,c){if(c=c.R){Wn(s,s.h.end());for(var f=0;f<c.length;f++)Wn(s,Gt(c[f])||Lt())}}var cn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function Ye(s,c){return cn?s[cn]|=c:s.A!==void 0?s.A|=c:(Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function Si(s,c){cn?s[cn]&&(s[cn]&=~c):s.A!==void 0&&(s.A&=~c)}function Ae(s){var c;return cn?c=s[cn]:c=s.A,c??0}function rn(s,c){cn?s[cn]=c:s.A!==void 0?s.A=c:Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function Xn(s){return Ye(s,1),s}function Sr(s,c){rn(c,(s|0)&-51)}function wn(s,c){rn(c,(s|18)&-41)}var bi={};function si(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var ai,br=[];rn(br,23),ai=Object.freeze(br);function Ji(s){if(Ae(s.o)&2)throw Error("Cannot mutate an immutable Message")}function Qi(s){var c=s.length;(c=c?s[c-1]:void 0)&&si(c)?c.g=1:(c={},s.push((c.g=1,c)))}function yr(s){var c=s.i+s.G;return s.B||(s.B=s.o[c]={})}function sn(s,c){return c===-1?null:c>=s.i?s.B?s.B[c]:void 0:s.o[c+s.G]}function b(s,c,f,v){Ji(s),H(s,c,f,v)}function H(s,c,f,v){s.j&&(s.j=void 0),c>=s.i||v?yr(s)[c]=f:(s.o[c+s.G]=f,(s=s.B)&&c in s&&delete s[c])}function K(s,c,f,v){var w=sn(s,c);Array.isArray(w)||(w=ai);var P=Ae(w);if(P&1||Xn(w),v)P&2||Ye(w,2),f&1||Object.freeze(w);else{v=!(f&2);var C=P&2;f&1||!C?v&&P&16&&!C&&Si(w,16):(w=Xn(Array.prototype.slice.call(w)),H(s,c,w))}return w}function Z(s,c){var f=sn(s,c),v=f==null?f:typeof f=="number"||f==="NaN"||f==="Infinity"||f==="-Infinity"?Number(f):void 0;return v!=null&&v!==f&&H(s,c,v),v}function W(s,c,f,v,w){s.h||(s.h={});var P=s.h[f],C=K(s,f,3,w);if(!P){var O=C;P=[];var q=!!(Ae(s.o)&16);C=!!(Ae(O)&2);var ct=O;!w&&C&&(O=Array.prototype.slice.call(O));for(var gt=C,Wt=0;Wt<O.length;Wt++){var It=O[Wt],St=c,Xt=!1;if(Xt=Xt===void 0?!1:Xt,It=Array.isArray(It)?new St(It):Xt?new St:void 0,It!==void 0){St=It.o;var ie=Xt=Ae(St);C&&(ie|=2),q&&(ie|=16),ie!=Xt&&rn(St,ie),St=ie,gt=gt||!!(2&St),P.push(It)}}return s.h[f]=P,q=Ae(O),c=q|33,c=gt?c&-9:c|8,q!=c&&(gt=O,Object.isFrozen(gt)&&(gt=Array.prototype.slice.call(gt)),rn(gt,c),O=gt),ct!==O&&H(s,f,O),(w||v&&C)&&Ye(P,2),v&&Object.freeze(P),P}return w||(w=Object.isFrozen(P),v&&!w?Object.freeze(P):!v&&w&&(P=Array.prototype.slice.call(P),s.h[f]=P)),P}function ft(s,c,f){var v=!!(Ae(s.o)&2);if(c=W(s,c,f,v,v),s=K(s,f,3,v),!(v||Ae(s)&8)){for(v=0;v<c.length;v++){if(f=c[v],Ae(f.o)&2){var w=oe(f,!1);w.j=f}else w=f;f!==w&&(c[v]=w,s[v]=w.o)}Ye(s,8)}return c}function xt(s,c,f){if(f!=null&&typeof f!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof f+": "+f);b(s,c,f)}function At(s,c,f,v,w){Ji(s);var P=W(s,f,c,!1,!1);return f=v??new f,s=K(s,c,2,!1),w!=null?(P.splice(w,0,f),s.splice(w,0,f.o)):(P.push(f),s.push(f.o)),f.C()&&Si(s,8),f}function yt(s,c){return s??c}function Ct(s,c,f){return f=f===void 0?0:f,yt(Z(s,c),f)}var Vt;function Ft(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if((Ae(s)&128)!==0)return s=Array.prototype.slice.call(s),Qi(s),s}else{if(Jt&&s!=null&&s instanceof Uint8Array)return ce(s);if(s instanceof ot){var c=s.V;return c==null?"":typeof c=="string"?c:s.V=ce(c)}}}return s}function ne(s,c,f,v){if(s!=null){if(Array.isArray(s))s=he(s,c,f,v!==void 0);else if(si(s)){var w={},P;for(P in s)w[P]=ne(s[P],c,f,v);s=w}else s=c(s,v);return s}}function he(s,c,f,v){var w=Ae(s);v=v?!!(w&16):void 0,s=Array.prototype.slice.call(s);for(var P=0;P<s.length;P++)s[P]=ne(s[P],c,f,v);return f(w,s),s}function we(s){return s.ja===bi?s.toJSON():Ft(s)}function Re(s,c){s&128&&Qi(c)}function pe(s,c,f){if(f=f===void 0?wn:f,s!=null){if(Jt&&s instanceof Uint8Array)return s.length?new ot(new Uint8Array(s),Zt):dt();if(Array.isArray(s)){var v=Ae(s);return v&2?s:c&&!(v&32)&&(v&16||v===0)?(rn(s,v|2),s):(s=he(s,pe,v&4?wn:f,!0),c=Ae(s),c&4&&c&2&&Object.freeze(s),s)}return s.ja===bi?be(s):s}}function Bt(s,c,f,v,w,P,C){if(s=s.h&&s.h[f]){if(v=Ae(s),v&2?v=s:(P=$(s,be),wn(v,P),Object.freeze(P),v=P),Ji(c),C=v==null?ai:Xn([]),v!=null){for(P=!!v.length,s=0;s<v.length;s++){var O=v[s];P=P&&!(Ae(O.o)&2),C[s]=O.o}P=(P?8:0)|1,s=Ae(C),(s&P)!==P&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),rn(C,s|P)),c.h||(c.h={}),c.h[f]=v}else c.h&&(c.h[f]=void 0);H(c,f,C,w)}else b(c,f,pe(v,P,C),w)}function be(s){return Ae(s.o)&2||(s=oe(s,!0),Ye(s.o,2)),s}function oe(s,c){var f=s.o,v=[];Ye(v,16);var w=s.constructor.h;if(w&&v.push(w),w=s.B,w){v.length=f.length,v.fill(void 0,v.length,f.length);var P={};v[v.length-1]=P}(Ae(f)&128)!==0&&Qi(v),c=c||s.C()?wn:Sr,P=s.constructor,Vt=v,v=new P(v),Vt=void 0,s.R&&(v.R=s.R.slice()),P=!!(Ae(f)&16);for(var C=w?f.length-1:f.length,O=0;O<C;O++)Bt(s,v,O-s.G,f[O],!1,P,c);if(w)for(var q in w)Bt(s,v,+q,w[q],!0,P,c);return v}function ge(s,c,f){s==null&&(s=Vt),Vt=void 0;var v=this.constructor.i||0,w=0<v,P=this.constructor.h,C=!1;if(s==null){s=P?[P]:[];var O=48,q=!0;w&&(v=0,O|=128),rn(s,O)}else{if(!Array.isArray(s)||P&&P!==s[0])throw Error();var ct=O=Ye(s,0);if((q=(16&ct)!==0)&&((C=(32&ct)!==0)||(ct|=32)),w){if(128&ct)v=0;else if(0<s.length){var gt=s[s.length-1];if(si(gt)&&"g"in gt){v=0,ct|=128,delete gt.g;var Wt=!0,It;for(It in gt){Wt=!1;break}Wt&&s.pop()}}}else if(128&ct)throw Error();O!==ct&&rn(s,ct)}this.G=(P?0:-1)-v,this.h=void 0,this.o=s;t:{if(P=this.o.length,v=P-1,P&&(P=this.o[v],si(P))){this.B=P,this.i=v-this.G;break t}c!==void 0&&-1<c?(this.i=Math.max(c,v+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!w&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(f){c=q&&!C&&!0,w=this.i;var St;for(q=0;q<f.length;q++)C=f[q],C<w?(C+=this.G,(v=s[C])?Rn(v,c):s[C]=ai):(St||(St=yr(this)),(v=St[C])?Rn(v,c):St[C]=ai)}}ge.prototype.toJSON=function(){return he(this.o,we,Re)},ge.prototype.C=function(){return!!(Ae(this.o)&2)};function Rn(s,c){if(Array.isArray(s)){var f=Ae(s),v=1;!c||f&2||(v|=16),(f&v)!==v&&rn(s,f|v)}}ge.prototype.ja=bi,ge.prototype.toString=function(){return this.o.toString()};function ke(s,c,f){if(f){var v={},w;for(w in f){var P=f[w],C=P.qa;C||(v.J=P.wa||P.oa.W,P.ia?(v.aa=eo(P.ia),C=(function(O){return function(q,ct,gt){return O.J(q,ct,gt,O.aa)}})(v)):P.ka?(v.Z=no(P.da.P,P.ka),C=(function(O){return function(q,ct,gt){return O.J(q,ct,gt,O.Z)}})(v)):C=v.J,P.qa=C),C(c,s,P.da),v={J:v.J,aa:v.aa,Z:v.Z}}}Mr(c,s)}var yn=Symbol();function ye(s,c,f){return s[yn]||(s[yn]=function(v,w){return c(v,w,f)})}function Be(s){var c=s[yn];if(!c){var f=ms(s);c=function(v,w){return io(v,w,f)},s[yn]=c}return c}function Ze(s){var c=s.ia;if(c)return Be(c);if(c=s.va)return ye(s.da.P,c,s.ka)}function ze(s){var c=Ze(s),f=s.da,v=s.oa.U;return c?function(w,P){return v(w,P,f,c)}:function(w,P){return v(w,P,f)}}function Ve(s,c){var f=s[c];return typeof f=="function"&&f.length===0&&(f=f(),s[c]=f),Array.isArray(f)&&(er in f||tr in f||0<f.length&&typeof f[0]=="function")?f:void 0}function yi(s,c,f,v,w,P){c.P=s[0];var C=1;if(s.length>C&&typeof s[C]!="number"){var O=s[C++];f(c,O)}for(;C<s.length;){f=s[C++];for(var q=C+1;q<s.length&&typeof s[q]!="number";)q++;switch(O=s[C++],q-=C,q){case 0:v(c,f,O);break;case 1:(q=Ve(s,C))?(C++,w(c,f,O,q)):v(c,f,O,s[C++]);break;case 2:q=C++,q=Ve(s,q),w(c,f,O,q,s[C++]);break;case 3:P(c,f,O,s[C++],s[C++],s[C++]);break;case 4:P(c,f,O,s[C++],s[C++],s[C++],s[C++]);break;default:throw Error("unexpected number of binary field arguments: "+q)}}return c}var un=Symbol();function eo(s){var c=s[un];if(!c){var f=ps(s);c=function(v,w){return ro(v,w,f)},s[un]=c}return c}function no(s,c){var f=s[un];return f||(f=function(v,w){return ke(v,w,c)},s[un]=f),f}var tr=Symbol();function rc(s,c){s.push(c)}function sc(s,c,f){s.push(c,f.W)}function ac(s,c,f,v){var w=eo(v),P=ps(v).P,C=f.W;s.push(c,function(O,q,ct){return C(O,q,ct,P,w)})}function oc(s,c,f,v,w,P){var C=no(v,P),O=f.W;s.push(c,function(q,ct,gt){return O(q,ct,gt,v,C)})}function ps(s){var c=s[tr];return c||(c=yi(s,s[tr]=[],rc,sc,ac,oc),er in s&&tr in s&&(s.length=0),c)}var er=Symbol();function lc(s,c){s[0]=c}function cc(s,c,f,v){var w=f.U;s[c]=v?function(P,C,O){return w(P,C,O,v)}:w}function uc(s,c,f,v,w){var P=f.U,C=Be(v),O=ms(v).P;s[c]=function(q,ct,gt){return P(q,ct,gt,O,C,w)}}function hc(s,c,f,v,w,P,C){var O=f.U,q=ye(v,w,P);s[c]=function(ct,gt,Wt){return O(ct,gt,Wt,v,q,C)}}function ms(s){var c=s[er];return c||(c=yi(s,s[er]={},lc,cc,uc,hc),er in s&&tr in s&&(s.length=0),c)}function io(s,c,f){for(;_e(c)&&c.i!=4;){var v=c.l,w=f[v];if(!w){var P=f[0];P&&(P=P[v])&&(w=f[v]=ze(P))}if(!w||!w(c,s,v)){w=c,v=s,P=w.j,ue(w);var C=w;if(!C.ca){if(w=C.h.h-P,C.h.h=P,C=C.h,w==0)w=dt();else{if(P=pt(C,w),C.S&&C.m)w=C.i.subarray(P,P+w);else{C=C.i;var O=P;w=P+w,w=O===w?Lt():Ue?C.slice(O,w):new Uint8Array(C.subarray(O,w))}w=w.length==0?dt():new ot(w,Zt)}(P=v.R)?P.push(w):v.R=[w]}}}return s}function ro(s,c,f){for(var v=f.length,w=v%2==1,P=w?1:0;P<v;P+=2)(0,f[P+1])(c,s,f[P]);ke(s,c,w?f[0]:void 0)}function nr(s,c){return{U:s,W:c}}var xn=nr(function(s,c,f){if(s.i!==5)return!1;s=s.h;var v=s.i,w=s.h,P=v[w],C=v[w+1],O=v[w+2];return v=v[w+3],F(s,s.h+4),C=(P<<0|C<<8|O<<16|v<<24)>>>0,s=2*(C>>31)+1,P=C>>>23&255,C&=8388607,b(c,f,P==255?C?NaN:1/0*s:P==0?s*Math.pow(2,-149)*C:s*Math.pow(2,P-150)*(C+Math.pow(2,23))),!0},function(s,c,f){if(c=Z(c,f),c!=null){Et(s.h,8*f+5),s=s.h;var v=+c;v===0?0<1/v?Ut=Qt=0:(Qt=0,Ut=2147483648):isNaN(v)?(Qt=0,Ut=2147483647):(v=(f=0>v?-2147483648:0)?-v:v,34028234663852886e22<v?(Qt=0,Ut=(f|2139095040)>>>0):11754943508222875e-54>v?(v=Math.round(v/Math.pow(2,-149)),Qt=0,Ut=(f|v)>>>0):(c=Math.floor(Math.log(v)/Math.LN2),v*=Math.pow(2,-c),v=Math.round(8388608*v),16777216<=v&&++c,Qt=0,Ut=(f|c+127<<23|v&8388607)>>>0)),f=Ut,s.h.push(f>>>0&255),s.h.push(f>>>8&255),s.h.push(f>>>16&255),s.h.push(f>>>24&255)}}),fc=nr(function(s,c,f){if(s.i!==0)return!1;var v=s.h,w=0,P=s=0,C=v.i,O=v.h;do{var q=C[O++];w|=(q&127)<<P,P+=7}while(32>P&&q&128);for(32<P&&(s|=(q&127)>>4),P=3;32>P&&q&128;P+=7)q=C[O++],s|=(q&127)<<P;if(F(v,O),128>q)v=w>>>0,q=s>>>0,(s=q&2147483648)&&(v=~v+1>>>0,q=~q>>>0,v==0&&(q=q+1>>>0)),v=4294967296*q+(v>>>0);else throw Yt();return b(c,f,s?-v:v),!0},function(s,c,f){c=sn(c,f),c!=null&&(typeof c=="string"&&wt(c),c!=null&&(Et(s.h,8*f),typeof c=="number"?(s=s.h,N(c),rt(s,Ut,Qt)):(f=wt(c),rt(s.h,f.i,f.h))))}),dc=nr(function(s,c,f){return s.i!==0?!1:(b(c,f,_t(s.h)),!0)},function(s,c,f){if(c=sn(c,f),c!=null&&c!=null)if(Et(s.h,8*f),s=s.h,f=c,0<=f)Et(s,f);else{for(c=0;9>c;c++)s.h.push(f&127|128),f>>=7;s.h.push(1)}}),so=nr(function(s,c,f){if(s.i!==2)return!1;var v=_t(s.h)>>>0;s=s.h;var w=pt(s,v);if(s=s.i,et){var P=s,C;(C=at)||(C=at=new TextDecoder("utf-8",{fatal:!0})),s=w+v,P=w===0&&s===P.length?P:P.subarray(w,s);try{var O=C.decode(P)}catch(Wt){if(nt===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),nt=!0}catch{nt=!1}}throw!nt&&(at=void 0),Wt}}else{O=w,v=O+v,w=[];for(var q=null,ct,gt;O<v;)ct=s[O++],128>ct?w.push(ct):224>ct?O>=v?S():(gt=s[O++],194>ct||(gt&192)!==128?(O--,S()):w.push((ct&31)<<6|gt&63)):240>ct?O>=v-1?S():(gt=s[O++],(gt&192)!==128||ct===224&&160>gt||ct===237&&160<=gt||((P=s[O++])&192)!==128?(O--,S()):w.push((ct&15)<<12|(gt&63)<<6|P&63)):244>=ct?O>=v-2?S():(gt=s[O++],(gt&192)!==128||(ct<<28)+(gt-144)>>30!==0||((P=s[O++])&192)!==128||((C=s[O++])&192)!==128?(O--,S()):(ct=(ct&7)<<18|(gt&63)<<12|(P&63)<<6|C&63,ct-=65536,w.push((ct>>10&1023)+55296,(ct&1023)+56320))):S(),8192<=w.length&&(q=X(q,w),w.length=0);O=X(q,w)}return b(c,f,O),!0},function(s,c,f){if(c=sn(c,f),c!=null){var v=!1;if(v=v===void 0?!1:v,vt){if(v&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(Pt||(Pt=new TextEncoder)).encode(c)}else{for(var w=0,P=new Uint8Array(3*c.length),C=0;C<c.length;C++){var O=c.charCodeAt(C);if(128>O)P[w++]=O;else{if(2048>O)P[w++]=O>>6|192;else{if(55296<=O&&57343>=O){if(56319>=O&&C<c.length){var q=c.charCodeAt(++C);if(56320<=q&&57343>=q){O=1024*(O-55296)+q-56320+65536,P[w++]=O>>18|240,P[w++]=O>>12&63|128,P[w++]=O>>6&63|128,P[w++]=O&63|128;continue}else C--}if(v)throw Error("Found an unpaired surrogate");O=65533}P[w++]=O>>12|224,P[w++]=O>>6&63|128}P[w++]=O&63|128}}c=w===P.length?P:P.subarray(0,w)}Et(s.h,8*f+2),Et(s.h,c.length),Wn(s,s.h.end()),Wn(s,c)}}),ao=nr(function(s,c,f,v,w){if(s.i!==2)return!1;c=At(c,f,v),f=s.h.j,v=_t(s.h)>>>0;var P=s.h.h+v,C=P-f;if(0>=C&&(s.h.j=P,w(c,s,void 0,void 0,void 0),C=P-s.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(v+" bytes, instead read "+(v-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=P,s.h.j=f,!0},function(s,c,f,v,w){if(c=ft(c,v,f),c!=null)for(v=0;v<c.length;v++){var P=s;Et(P.h,8*f+2);var C=P.h.end();Wn(P,C),C.push(P.i),P=C,w(c[v],s),C=s;var O=P.pop();for(O=C.i+C.h.length()-O;127<O;)P.push(O&127|128),O>>>=7,C.i++;P.push(O),C.i++}});function xs(s){return function(c,f){t:{if(je.length){var v=je.pop();v.setOptions(f),Ht(v.h,c,f),c=v}else c=new kt(c,f);try{var w=ms(s),P=io(new w.P,c,w);break t}finally{w=c.h,w.i=null,w.m=!1,w.l=0,w.j=0,w.h=0,w.S=!1,c.l=-1,c.i=-1,100>je.length&&je.push(c)}P=void 0}return P}}function _s(s){return function(){var c=new nn;ro(this,c,ps(s)),Wn(c,c.h.end());for(var f=new Uint8Array(c.i),v=c.j,w=v.length,P=0,C=0;C<w;C++){var O=v[C];f.set(O,P),P+=O.length}return c.j=[f],f}}function Ei(s){ge.call(this,s)}g(Ei,ge);var oo=[Ei,1,dc,2,xn,3,so,4,so];Ei.prototype.l=_s(oo);function gs(s){ge.call(this,s,-1,pc)}g(gs,ge),gs.prototype.addClassification=function(s,c){return At(this,1,Ei,s,c),this};var pc=[1],lo=xs([gs,1,ao,oo]);function Ti(s){ge.call(this,s)}g(Ti,ge);var co=[Ti,1,xn,2,xn,3,xn,4,xn,5,xn];Ti.prototype.l=_s(co);function uo(s){ge.call(this,s,-1,mc)}g(uo,ge);var mc=[1],ho=xs([uo,1,ao,co]);function Er(s){ge.call(this,s)}g(Er,ge);var fo=[Er,1,xn,2,xn,3,xn,4,xn,5,xn,6,fc],xc=xs(fo);Er.prototype.l=_s(fo);function po(s,c,f){if(f=s.createShader(f===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(f,c),s.compileShader(f),!s.getShaderParameter(f,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(f));return f}function mo(s){return ft(s,Ei,1).map(function(c){var f=sn(c,1);return{index:f??0,score:Ct(c,2),label:sn(c,3)!=null?yt(sn(c,3),""):void 0,displayName:sn(c,4)!=null?yt(sn(c,4),""):void 0}})}function xo(s){return{x:Ct(s,1),y:Ct(s,2),z:Ct(s,3),visibility:Z(s,4)!=null?Ct(s,4):void 0}}function _o(s){return s.map(function(c){return ft(ho(c),Ti,1).map(xo)})}function vs(s,c){this.i=s,this.h=c,this.m=0}function go(s,c,f){return _c(s,c),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):f?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(v){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),v(s.j)}))}function _c(s,c){var f=s.h;if(s.s===void 0){var v=po(f,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),w=po(f,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=f.createProgram();if(f.attachShader(P,v),f.attachShader(P,w),f.linkProgram(P),!f.getProgramParameter(P,f.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+f.getProgramInfoLog(P));v=s.s=P,f.useProgram(v),w=f.getUniformLocation(v,"sampler0"),s.l={O:f.getAttribLocation(v,"aVertex"),N:f.getAttribLocation(v,"aTex"),xa:w},s.v=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,s.v),f.enableVertexAttribArray(s.l.O),f.vertexAttribPointer(s.l.O,2,f.FLOAT,!1,0,0),f.bufferData(f.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),f.STATIC_DRAW),f.bindBuffer(f.ARRAY_BUFFER,null),s.u=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,s.u),f.enableVertexAttribArray(s.l.N),f.vertexAttribPointer(s.l.N,2,f.FLOAT,!1,0,0),f.bufferData(f.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),f.STATIC_DRAW),f.bindBuffer(f.ARRAY_BUFFER,null),f.uniform1i(w,0)}v=s.l,f.useProgram(s.s),f.canvas.width=c.width,f.canvas.height=c.height,f.viewport(0,0,c.width,c.height),f.activeTexture(f.TEXTURE0),s.i.bindTexture2d(c.glName),f.enableVertexAttribArray(v.O),f.bindBuffer(f.ARRAY_BUFFER,s.v),f.vertexAttribPointer(v.O,2,f.FLOAT,!1,0,0),f.enableVertexAttribArray(v.N),f.bindBuffer(f.ARRAY_BUFFER,s.u),f.vertexAttribPointer(v.N,2,f.FLOAT,!1,0,0),f.bindFramebuffer(f.DRAW_FRAMEBUFFER?f.DRAW_FRAMEBUFFER:f.FRAMEBUFFER,null),f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT),f.colorMask(!0,!0,!0,!0),f.drawArrays(f.TRIANGLE_FAN,0,4),f.disableVertexAttribArray(v.O),f.disableVertexAttribArray(v.N),f.bindBuffer(f.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function gc(s){this.h=s}var vc=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Mc(s,c){return c+s}function vo(s,c){window[s]=c}function Sc(s){var c=document.createElement("script");return c.setAttribute("src",s),c.setAttribute("crossorigin","anonymous"),new Promise(function(f){c.addEventListener("load",function(){f()},!1),c.addEventListener("error",function(){f()},!1),document.body.appendChild(c)})}function bc(){return E(function(s){switch(s.h){case 1:return s.s=2,U(s,WebAssembly.instantiate(vc),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function Ms(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||Mc,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,s.options){c=l(Object.keys(s.options));for(var f=c.next();!f.done;f=c.next()){f=f.value;var v=s.options[f].default;v!==void 0&&(this.l[f]=typeof v=="function"?v():v)}}}i=Ms.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function yc(s){var c,f,v,w,P,C,O,q,ct,gt,Wt;return E(function(It){switch(It.h){case 1:return s.ga?(c=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,U(It,bc(),2)):It.return();case 2:if(f=It.i,typeof window=="object")return vo("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),vo("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),C=c.filter(function(St){return St.data!==void 0}),O=c.filter(function(St){return St.data===void 0}),q=Promise.all(C.map(function(St){var Xt=Tr(s,St.url);if(St.path!==void 0){var ie=St.path;Xt=Xt.then(function(Te){return s.overrideFile(ie,Te),Promise.resolve(Te)})}return Xt})),ct=Promise.all(O.map(function(St){return St.simd===void 0||St.simd&&f||!St.simd&&!f?Sc(s.locateFile(St.url,s.ha)):Promise.resolve()})).then(function(){var St,Xt,ie;return E(function(Te){if(Te.h==1)return St=window.createMediapipeSolutionsWasm,Xt=window.createMediapipeSolutionsPackedAssets,ie=s,U(Te,St(Xt),2);ie.i=Te.i,Te.h=0})}),gt=(function(){return E(function(St){return s.h.graph&&s.h.graph.url?St=U(St,Tr(s,s.h.graph.url),0):(St.h=0,St=void 0),St})})(),U(It,Promise.all([ct,q,gt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return v=c.filter(function(St){return St.simd===void 0||St.simd&&f||!St.simd&&!f}).map(function(St){return s.locateFile(St.url,s.ha)}),importScripts.apply(null,h(v)),w=s,U(It,createMediapipeSolutionsWasm(Module),6);case 6:w.i=It.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,P=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(P),It.h=4;break;case 7:if(s.m=document.createElement("canvas"),Wt=s.m.getContext("webgl2",{}),!Wt&&(Wt=s.m.getContext("webgl",{}),!Wt))return alert("Failed to create WebGL canvas context when passing video frame."),It.return();s.K=Wt,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,It.h=0}})}function Ec(s){var c,f,v,w,P,C,O,q;return E(function(ct){if(ct.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return ct.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){ct.h=2;return}return s.fa=s.h.graph.url,U(ct,Tr(s,s.h.graph.url),3)}for(ct.h!=2&&(c=ct.i,s.j.loadGraph(c)),f=l(Object.keys(s.D)),v=f.next();!v.done;v=f.next())w=v.value,s.j.overrideFile(w,s.D[w]);if(s.D={},s.h.listeners)for(P=l(s.h.listeners),C=P.next();!C.done;C=P.next())O=C.value,Rc(s,O);q=s.l,s.l={},s.setOptions(q),ct.h=0})}i.reset=function(){var s=this;return E(function(c){s.j&&(s.j.reset(),s.s={},s.v={}),c.h=0})},i.setOptions=function(s,c){var f=this;if(c=c||this.h.options){for(var v=[],w=[],P={},C=l(Object.keys(s)),O=C.next();!O.done;P={X:P.X,Y:P.Y},O=C.next())if(O=O.value,!(O in this.l&&this.l[O]===s[O])){this.l[O]=s[O];var q=c[O];q!==void 0&&(q.onChange&&(P.X=q.onChange,P.Y=s[O],v.push((function(ct){return function(){var gt;return E(function(Wt){if(Wt.h==1)return U(Wt,ct.X(ct.Y),2);gt=Wt.i,gt===!0&&(f.u=!0),Wt.h=0})}})(P))),q.graphOptionXref&&(O=Object.assign({},{calculatorName:"",calculatorIndex:0},q.graphOptionXref,{valueNumber:q.type===1?s[O]:0,valueBoolean:q.type===0?s[O]:!1,valueString:q.type===2?s[O]:""}),w.push(O)))}(v.length!==0||w.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(w),this.F=(this.F===void 0?[]:this.F).concat(v))}};function Tc(s){var c,f,v,w,P,C,O;return E(function(q){switch(q.h){case 1:if(!s.u)return q.return();if(!s.F){q.h=2;break}c=l(s.F),f=c.next();case 3:if(f.done){q.h=5;break}return v=f.value,U(q,v(),4);case 4:f=c.next(),q.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(w=new s.i.GraphOptionChangeRequestList,P=l(s.H),C=P.next();!C.done;C=P.next())O=C.value,w.push_back(O);s.j.changeOptions(w),w.delete(),s.H=void 0}s.u=!1,q.h=0}})}i.initialize=function(){var s=this;return E(function(c){return c.h==1?U(c,yc(s),2):c.h!=3?U(c,Ec(s),3):U(c,Tc(s),0)})};function Tr(s,c){var f,v;return E(function(w){return c in s.L?w.return(s.L[c]):(f=s.locateFile(c,""),v=fetch(f).then(function(P){return P.arrayBuffer()}),s.L[c]=v,w.return(v))})}i.overrideFile=function(s,c){this.j?this.j.overrideFile(s,c):this.D[s]=c},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,c){var f=this,v,w,P,C,O,q,ct,gt,Wt;return E(function(It){switch(It.h){case 1:return f.h.inputs?(v=1e3*(c??performance.now()),U(It,f.I,2)):It.return();case 2:return U(It,f.initialize(),3);case 3:for(w=new f.i.PacketDataList,P=l(Object.keys(s)),C=P.next();!C.done;C=P.next())if(O=C.value,q=f.h.inputs[O]){t:{var St=s[O];switch(q.type){case"video":var Xt=f.s[q.stream];if(Xt||(Xt=new vs(f.i,f.K),f.s[q.stream]=Xt),Xt.m===0&&(Xt.m=Xt.i.createTexture()),typeof HTMLVideoElement<"u"&&St instanceof HTMLVideoElement)var ie=St.videoWidth,Te=St.videoHeight;else typeof HTMLImageElement<"u"&&St instanceof HTMLImageElement?(ie=St.naturalWidth,Te=St.naturalHeight):(ie=St.width,Te=St.height);Te={glName:Xt.m,width:ie,height:Te},ie=Xt.h,ie.canvas.width=Te.width,ie.canvas.height=Te.height,ie.activeTexture(ie.TEXTURE0),Xt.i.bindTexture2d(Xt.m),ie.texImage2D(ie.TEXTURE_2D,0,ie.RGBA,ie.RGBA,ie.UNSIGNED_BYTE,St),Xt.i.bindTexture2d(0),Xt=Te;break t;case"detections":for(Xt=f.s[q.stream],Xt||(Xt=new gc(f.i),f.s[q.stream]=Xt),Xt.data||(Xt.data=new Xt.h.DetectionListData),Xt.data.reset(St.length),Te=0;Te<St.length;++Te){ie=St[Te];var Ee=Xt.data,Ge=Ee.setBoundingBox,hn=Te,$e=ie.la,fe=new Er;if(xt(fe,1,$e.ra),xt(fe,2,$e.sa),xt(fe,3,$e.height),xt(fe,4,$e.width),xt(fe,5,$e.rotation),b(fe,6,$e.pa),$e=fe.l(),Ge.call(Ee,hn,$e),ie.ea)for(Ee=0;Ee<ie.ea.length;++Ee){fe=ie.ea[Ee],Ge=Xt.data,hn=Ge.addNormalizedLandmark,$e=Te,fe=Object.assign({},fe,{visibility:fe.visibility?fe.visibility:0});var He=new Ti;xt(He,1,fe.x),xt(He,2,fe.y),xt(He,3,fe.z),fe.visibility&&xt(He,4,fe.visibility),fe=He.l(),hn.call(Ge,$e,fe)}if(ie.ba)for(Ee=0;Ee<ie.ba.length;++Ee)Ge=Xt.data,hn=Ge.addClassification,$e=Te,fe=ie.ba[Ee],He=new Ei,xt(He,2,fe.score),fe.index&&b(He,1,fe.index),fe.label&&b(He,3,fe.label),fe.displayName&&b(He,4,fe.displayName),fe=He.l(),hn.call(Ge,$e,fe)}Xt=Xt.data;break t;default:Xt={}}}switch(ct=Xt,gt=q.stream,q.type){case"video":w.pushTexture2d(Object.assign({},ct,{stream:gt,timestamp:v}));break;case"detections":Wt=ct,Wt.stream=gt,Wt.timestamp=v,w.pushDetectionList(Wt);break;default:throw Error("Unknown input config type: '"+q.type+"'")}}return f.j.send(w),U(It,f.I,4);case 4:w.delete(),It.h=0}})};function Ac(s,c,f){var v,w,P,C,O,q,ct,gt,Wt,It,St,Xt,ie,Te;return E(function(Ee){switch(Ee.h){case 1:if(!f)return Ee.return(c);for(v={},w=0,P=l(Object.keys(f)),C=P.next();!C.done;C=P.next())O=C.value,q=f[O],typeof q!="string"&&q.type==="texture"&&c[q.stream]!==void 0&&++w;1<w&&(s.M=!1),ct=l(Object.keys(f)),C=ct.next();case 2:if(C.done){Ee.h=4;break}if(gt=C.value,Wt=f[gt],typeof Wt=="string")return ie=v,Te=gt,U(Ee,wc(s,gt,c[Wt]),14);if(It=c[Wt.stream],Wt.type==="detection_list"){if(It){for(var Ge=It.getRectList(),hn=It.getLandmarksList(),$e=It.getClassificationsList(),fe=[],He=0;He<Ge.size();++He){var jn=xc(Ge.get(He)),Cc=Ct(jn,1),Pc=Ct(jn,2),Dc=Ct(jn,3),Lc=Ct(jn,4),Uc=Ct(jn,5,0),Ar=void 0;Ar=Ar===void 0?0:Ar,jn={la:{ra:Cc,sa:Pc,height:Dc,width:Lc,rotation:Uc,pa:yt(sn(jn,6),Ar)},ea:ft(ho(hn.get(He)),Ti,1).map(xo),ba:mo(lo($e.get(He)))},fe.push(jn)}Ge=fe}else Ge=[];v[gt]=Ge,Ee.h=7;break}if(Wt.type==="proto_list"){if(It){for(Ge=Array(It.size()),hn=0;hn<It.size();hn++)Ge[hn]=It.get(hn);It.delete()}else Ge=[];v[gt]=Ge,Ee.h=7;break}if(It===void 0){Ee.h=3;break}if(Wt.type==="float_list"){v[gt]=It,Ee.h=7;break}if(Wt.type==="proto"){v[gt]=It,Ee.h=7;break}if(Wt.type!=="texture")throw Error("Unknown output config type: '"+Wt.type+"'");return St=s.v[gt],St||(St=new vs(s.i,s.K),s.v[gt]=St),U(Ee,go(St,It,s.M),13);case 13:Xt=Ee.i,v[gt]=Xt;case 7:Wt.transform&&v[gt]&&(v[gt]=Wt.transform(v[gt])),Ee.h=3;break;case 14:ie[Te]=Ee.i;case 3:C=ct.next(),Ee.h=2;break;case 4:return Ee.return(v)}})}function wc(s,c,f){var v;return E(function(w){return typeof f=="number"||f instanceof Uint8Array||f instanceof s.i.Uint8BlobList?w.return(f):f instanceof s.i.Texture2dDataOut?(v=s.v[c],v||(v=new vs(s.i,s.K),s.v[c]=v),w.return(go(v,f,s.M))):w.return(void 0)})}function Rc(s,c){for(var f=c.name||"$",v=[].concat(h(c.wants)),w=new s.i.StringList,P=l(c.wants),C=P.next();!C.done;C=P.next())w.push_back(C.value);P=s.i.PacketListener.implement({onResults:function(O){for(var q={},ct=0;ct<c.wants.length;++ct)q[v[ct]]=O.get(ct);var gt=s.listeners[f];gt&&(s.I=Ac(s,q,c.outs).then(function(Wt){Wt=gt(Wt);for(var It=0;It<c.wants.length;++It){var St=q[v[It]];typeof St=="object"&&St.hasOwnProperty&&St.hasOwnProperty("delete")&&St.delete()}Wt&&(s.I=Wt)}))}}),s.j.attachMultiListener(w,P),w.delete()}i.onResults=function(s,c){this.listeners[c||"$"]=s},tt("Solution",Ms),tt("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Mo(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function So(s){var c=this;s=s||{},this.h=new Ms({locateFile:s.locateFile,files:function(f){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Mo(f.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:_o},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:_o},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(f){return f.map(function(v){return mo(lo(v))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(f){var v,w,P;return E(function(C){return C.h==1?(v=Mo(f),w="third_party/mediapipe/modules/hand_landmark/"+v,U(C,Tr(c.h,v),2)):(P=C.i,c.h.overrideFile(w,P),C.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=So.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return E(function(c){return U(c,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var c=this;return E(function(f){return U(f,c.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},tt("Hands",So),tt("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),tt("VERSION","0.4.1675469240")}).call($s)),$s}var h0=u0(),Js={},bl;function f0(){return bl||(bl=1,(function(){function i(_){var E=0;return function(){return E<_.length?{done:!1,value:_[E++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(_,E,V){return _==Array.prototype||_==Object.prototype||(_[E]=V.value),_};function e(_){_=[typeof globalThis=="object"&&globalThis,_,typeof window=="object"&&window,typeof self=="object"&&self,typeof as=="object"&&as];for(var E=0;E<_.length;++E){var V=_[E];if(V&&V.Math==Math)return V}throw Error("Cannot find global object")}var n=e(this);function r(_,E){if(E)t:{var V=n;_=_.split(".");for(var k=0;k<_.length-1;k++){var Q=_[k];if(!(Q in V))break t;V=V[Q]}_=_[_.length-1],k=V[_],E=E(k),E!=k&&E!=null&&t(V,_,{configurable:!0,writable:!0,value:E})}}r("Symbol",function(_){function E(tt){if(this instanceof E)throw new TypeError("Symbol is not a constructor");return new V(k+(tt||"")+"_"+Q++,tt)}function V(tt,z){this.g=tt,t(this,"description",{configurable:!0,writable:!0,value:z})}if(_)return _;V.prototype.toString=function(){return this.g};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",Q=0;return E}),r("Symbol.iterator",function(_){if(_)return _;_=Symbol("Symbol.iterator");for(var E="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),V=0;V<E.length;V++){var k=n[E[V]];typeof k=="function"&&typeof k.prototype[_]!="function"&&t(k.prototype,_,{configurable:!0,writable:!0,value:function(){return a(i(this))}})}return _});function a(_){return _={next:_},_[Symbol.iterator]=function(){return this},_}function o(_){var E=typeof Symbol<"u"&&Symbol.iterator&&_[Symbol.iterator];return E?E.call(_):{next:i(_)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function h(_){if(_.i)throw new TypeError("Generator is already running");_.i=!0}l.prototype.l=function(_){this.o=_};function u(_,E){_.h={F:E,G:!0},_.j=_.m}l.prototype.return=function(_){this.h={return:_},this.j=this.m};function d(_){this.g=new l,this.h=_}function m(_,E){h(_.g);var V=_.g.g;return V?x(_,"return"in V?V.return:function(k){return{value:k,done:!0}},E,_.g.return):(_.g.return(E),M(_))}function x(_,E,V,k){try{var Q=E.call(_.g.g,V);if(!(Q instanceof Object))throw new TypeError("Iterator result "+Q+" is not an object");if(!Q.done)return _.g.i=!1,Q;var tt=Q.value}catch(z){return _.g.g=null,u(_.g,z),M(_)}return _.g.g=null,k.call(_.g,tt),M(_)}function M(_){for(;_.g.j;)try{var E=_.h(_.g);if(E)return _.g.i=!1,{value:E.value,done:!1}}catch(V){_.g.o=void 0,u(_.g,V)}if(_.g.i=!1,_.g.h){if(E=_.g.h,_.g.h=null,E.G)throw E.F;return{value:E.return,done:!0}}return{value:void 0,done:!0}}function y(_){this.next=function(E){return h(_.g),_.g.g?E=x(_,_.g.g.next,E,_.g.l):(_.g.l(E),E=M(_)),E},this.throw=function(E){return h(_.g),_.g.g?E=x(_,_.g.g.throw,E,_.g.l):(u(_.g,E),E=M(_)),E},this.return=function(E){return m(_,E)},this[Symbol.iterator]=function(){return this}}function T(_){function E(k){return _.next(k)}function V(k){return _.throw(k)}return new Promise(function(k,Q){function tt(z){z.done?k(z.value):Promise.resolve(z.value).then(E,V).then(tt,Q)}tt(_.next())})}r("Promise",function(_){function E(z){this.h=0,this.i=void 0,this.g=[],this.o=!1;var $=this.j();try{z($.resolve,$.reject)}catch(j){$.reject(j)}}function V(){this.g=null}function k(z){return z instanceof E?z:new E(function($){$(z)})}if(_)return _;V.prototype.h=function(z){if(this.g==null){this.g=[];var $=this;this.i(function(){$.l()})}this.g.push(z)};var Q=n.setTimeout;V.prototype.i=function(z){Q(z,0)},V.prototype.l=function(){for(;this.g&&this.g.length;){var z=this.g;this.g=[];for(var $=0;$<z.length;++$){var j=z[$];z[$]=null;try{j()}catch(st){this.j(st)}}}this.g=null},V.prototype.j=function(z){this.i(function(){throw z})},E.prototype.j=function(){function z(st){return function(ht){j||(j=!0,st.call($,ht))}}var $=this,j=!1;return{resolve:z(this.A),reject:z(this.l)}},E.prototype.A=function(z){if(z===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(z instanceof E)this.C(z);else{t:switch(typeof z){case"object":var $=z!=null;break t;case"function":$=!0;break t;default:$=!1}$?this.v(z):this.m(z)}},E.prototype.v=function(z){var $=void 0;try{$=z.then}catch(j){this.l(j);return}typeof $=="function"?this.D($,z):this.m(z)},E.prototype.l=function(z){this.u(2,z)},E.prototype.m=function(z){this.u(1,z)},E.prototype.u=function(z,$){if(this.h!=0)throw Error("Cannot settle("+z+", "+$+"): Promise already settled in state"+this.h);this.h=z,this.i=$,this.h===2&&this.B(),this.H()},E.prototype.B=function(){var z=this;Q(function(){if(z.I()){var $=n.console;typeof $<"u"&&$.error(z.i)}},1)},E.prototype.I=function(){if(this.o)return!1;var z=n.CustomEvent,$=n.Event,j=n.dispatchEvent;return typeof j>"u"?!0:(typeof z=="function"?z=new z("unhandledrejection",{cancelable:!0}):typeof $=="function"?z=new $("unhandledrejection",{cancelable:!0}):(z=n.document.createEvent("CustomEvent"),z.initCustomEvent("unhandledrejection",!1,!0,z)),z.promise=this,z.reason=this.i,j(z))},E.prototype.H=function(){if(this.g!=null){for(var z=0;z<this.g.length;++z)tt.h(this.g[z]);this.g=null}};var tt=new V;return E.prototype.C=function(z){var $=this.j();z.s($.resolve,$.reject)},E.prototype.D=function(z,$){var j=this.j();try{z.call($,j.resolve,j.reject)}catch(st){j.reject(st)}},E.prototype.then=function(z,$){function j(jt,Jt){return typeof jt=="function"?function(le){try{st(jt(le))}catch(ce){ht(ce)}}:Jt}var st,ht,Dt=new E(function(jt,Jt){st=jt,ht=Jt});return this.s(j(z,st),j($,ht)),Dt},E.prototype.catch=function(z){return this.then(void 0,z)},E.prototype.s=function(z,$){function j(){switch(st.h){case 1:z(st.i);break;case 2:$(st.i);break;default:throw Error("Unexpected state: "+st.h)}}var st=this;this.g==null?tt.h(j):this.g.push(j),this.o=!0},E.resolve=k,E.reject=function(z){return new E(function($,j){j(z)})},E.race=function(z){return new E(function($,j){for(var st=o(z),ht=st.next();!ht.done;ht=st.next())k(ht.value).s($,j)})},E.all=function(z){var $=o(z),j=$.next();return j.done?k([]):new E(function(st,ht){function Dt(le){return function(ce){jt[le]=ce,Jt--,Jt==0&&st(jt)}}var jt=[],Jt=0;do jt.push(void 0),Jt++,k(j.value).s(Dt(jt.length-1),ht),j=$.next();while(!j.done)})},E});var g=typeof Object.assign=="function"?Object.assign:function(_,E){for(var V=1;V<arguments.length;V++){var k=arguments[V];if(k)for(var Q in k)Object.prototype.hasOwnProperty.call(k,Q)&&(_[Q]=k[Q])}return _};r("Object.assign",function(_){return _||g});var p=this||self,I={facingMode:"user",width:640,height:480};function D(_,E){this.video=_,this.i=0,this.h=Object.assign(Object.assign({},I),E)}D.prototype.stop=function(){var _=this,E,V,k,Q;return T(new y(new d(function(tt){if(_.g){for(E=_.g.getTracks(),V=o(E),k=V.next();!k.done;k=V.next())Q=k.value,Q.stop();_.g=void 0}tt.j=0})))},D.prototype.start=function(){var _=this,E;return T(new y(new d(function(V){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),E=_.h,V.return(navigator.mediaDevices.getUserMedia({video:{facingMode:E.facingMode,width:E.width,height:E.height}}).then(function(k){G(_,k)}).catch(function(k){var Q="Failed to acquire camera feed: "+k;throw console.error(Q),alert(Q),k}))})))};function U(_){window.requestAnimationFrame(function(){L(_)})}function G(_,E){_.g=E,_.video.srcObject=E,_.video.onloadedmetadata=function(){_.video.play(),U(_)}}function L(_){var E=null;_.video.paused||_.video.currentTime===_.i||(_.i=_.video.currentTime,E=_.h.onFrame()),E?E.then(function(){U(_)}):U(_)}var B=["Camera"],Y=p;B[0]in Y||typeof Y.execScript>"u"||Y.execScript("var "+B[0]);for(var A;B.length&&(A=B.shift());)B.length||D===void 0?Y[A]&&Y[A]!==Object.prototype[A]?Y=Y[A]:Y=Y[A]={}:Y[A]=D}).call(Js)),Js}var d0=f0();class p0{constructor(t,e){this.videoElement=t,this.onResultsCallback=e,this.hands=new h0.Hands({locateFile:n=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${n}`}),this.hands.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.hands.onResults(this.onResults.bind(this)),this.camera=new d0.Camera(this.videoElement,{onFrame:async()=>{await this.hands.send({image:this.videoElement})},width:640,height:480})}start(){return this.camera.start()}onResults(t){let e=0,n=0;if(t.multiHandLandmarks&&t.multiHandLandmarks.length>0){for(const r of t.multiHandLandmarks){const a=r[0],o=[4,8,12,16,20];let l=0;for(const u of o){const d=r[u],m=Math.sqrt(Math.pow(d.x-a.x,2)+Math.pow(d.y-a.y,2)+Math.pow(d.z-a.z,2));l+=m}const h=l/5;e+=h,n++}n>0&&(e/=n)}this.onResultsCallback&&this.onResultsCallback({expansion:e,handsDetected:n})}}const ec=new Zu,mr=new pn(75,window.innerWidth/window.innerHeight,.1,1e3);mr.position.z=5;const $i=new qm({alpha:!0,antialias:!0});$i.setSize(window.innerWidth,window.innerHeight);$i.setPixelRatio(Math.min(window.devicePixelRatio,2));document.getElementById("canvas-container").appendChild($i.domElement);const nc=new Zm(mr,$i.domElement);nc.enableDamping=!0;const ds=new c0(ec),m0=document.getElementById("input-video"),os=document.getElementById("status"),x0=i=>{i.handsDetected>0?(os.innerText=`Hands detected: ${i.handsDetected} | Expansion: ${i.expansion.toFixed(2)}`,ds.setHandScale(i.expansion)):os.innerText="No hands detected"},_0=new p0(m0,x0);_0.start().then(()=>{os.innerText="Camera started. Show hands!"}).catch(i=>{console.error(i),os.innerText="Error starting camera: "+i.message});document.getElementById("color-picker").addEventListener("input",i=>{ds.setColor(i.target.value)});const yl=document.querySelectorAll("#shape-buttons button");yl.forEach(i=>{i.addEventListener("click",()=>{yl.forEach(e=>e.classList.remove("active")),i.classList.add("active");const t=i.getAttribute("data-shape");ds.setShape(t)})});window.addEventListener("resize",()=>{mr.aspect=window.innerWidth/window.innerHeight,mr.updateProjectionMatrix(),$i.setSize(window.innerWidth,window.innerHeight)});function ic(){requestAnimationFrame(ic),nc.update(),ds.update(),$i.render(ec,mr)}ic();
