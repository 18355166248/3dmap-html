import{C as Fe,V as K,ab as Pt,G as Me,M as ue,D as bt,ac as St,b as re,ad as Lt,c as Ke,B as Qe,q as wt,r as Qt,a0 as N,Z as qe,ae as Bt,P as Nt,A as Wt,af as Yt,t as je,$ as yt,ag as Ht,ah as Xe,ai as Kt,a9 as et,aj as Pe,ak as oe,al as qt,am as Tt,an as xt,ao as Be,ap as jt,aq as ye,ar as Je,a1 as Xt,as as Vt,s as Zt,L as _t,at as $t}from"./szxs_logo-0ab5ca1e.js";class en{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const A=i[o],c=e+A,s=Math.abs(e)<Math.abs(A)?e-(c-A):A-(c-e);s&&(i[n++]=s),e=c}return i[n]=e,this._n=n+1,this}valueOf(){const e=this._partials;let i=this._n,n,o,A,c=0;if(i>0){for(c=e[--i];i>0&&(n=c,o=e[--i],c=n+o,A=o-(c-n),!A););i>0&&(A<0&&e[i-1]<0||A>0&&e[i-1]>0)&&(o=A*2,n=c+o,o==n-c&&(c=n))}return c}}function*tn(t){for(const e of t)yield*e}function kt(t){return Array.from(tn(t))}var M=1e-6,nn=1e-12,T=Math.PI,H=T/2,tt=T/4,X=T*2,q=180/T,O=T/180,D=Math.abs,Ut=Math.atan,fe=Math.atan2,R=Math.cos,on=Math.exp,rn=Math.log,G=Math.sin,An=Math.sign||function(t){return t>0?1:t<0?-1:0},De=Math.sqrt,an=Math.tan;function sn(t){return t>1?0:t<-1?T:Math.acos(t)}function pe(t){return t>1?H:t<-1?-H:Math.asin(t)}function le(){}function xe(t,e){t&&it.hasOwnProperty(t.type)&&it[t.type](t,e)}var nt={Feature:function(t,e){xe(t.geometry,e)},FeatureCollection:function(t,e){for(var i=t.features,n=-1,o=i.length;++n<o;)xe(i[n].geometry,e)}},it={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var i=t.coordinates,n=-1,o=i.length;++n<o;)t=i[n],e.point(t[0],t[1],t[2])},LineString:function(t,e){be(t.coordinates,e,0)},MultiLineString:function(t,e){for(var i=t.coordinates,n=-1,o=i.length;++n<o;)be(i[n],e,0)},Polygon:function(t,e){ot(t.coordinates,e)},MultiPolygon:function(t,e){for(var i=t.coordinates,n=-1,o=i.length;++n<o;)ot(i[n],e)},GeometryCollection:function(t,e){for(var i=t.geometries,n=-1,o=i.length;++n<o;)xe(i[n],e)}};function be(t,e,i){var n=-1,o=t.length-i,A;for(e.lineStart();++n<o;)A=t[n],e.point(A[0],A[1],A[2]);e.lineEnd()}function ot(t,e){var i=-1,n=t.length;for(e.polygonStart();++i<n;)be(t[i],e,1);e.polygonEnd()}function ln(t,e){t&&nt.hasOwnProperty(t.type)?nt[t.type](t,e):xe(t,e)}function Le(t){return[fe(t[1],t[0]),pe(t[2])]}function Ae(t){var e=t[0],i=t[1],n=R(i);return[n*R(e),n*G(e),G(i)]}function he(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ke(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function ze(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function me(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function Ne(t){var e=De(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=e,t[1]/=e,t[2]/=e}function We(t,e){function i(n,o){return n=t(n,o),e(n[0],n[1])}return t.invert&&e.invert&&(i.invert=function(n,o){return n=e.invert(n,o),n&&t.invert(n[0],n[1])}),i}function Ye(t,e){return D(t)>T&&(t-=Math.round(t/X)*X),[t,e]}Ye.invert=Ye;function It(t,e,i){return(t%=X)?e||i?We(At(t),at(e,i)):At(t):e||i?at(e,i):Ye}function rt(t){return function(e,i){return e+=t,D(e)>T&&(e-=Math.round(e/X)*X),[e,i]}}function At(t){var e=rt(t);return e.invert=rt(-t),e}function at(t,e){var i=R(t),n=G(t),o=R(e),A=G(e);function c(s,p){var u=R(p),r=R(s)*u,a=G(s)*u,l=G(p),f=l*i+r*n;return[fe(a*o-f*A,r*i-l*n),pe(f*o+a*A)]}return c.invert=function(s,p){var u=R(p),r=R(s)*u,a=G(s)*u,l=G(p),f=l*o-a*A;return[fe(a*o+l*A,r*i+f*n),pe(f*i-r*n)]},c}function cn(t){t=It(t[0]*O,t[1]*O,t.length>2?t[2]*O:0);function e(i){return i=t(i[0]*O,i[1]*O),i[0]*=q,i[1]*=q,i}return e.invert=function(i){return i=t.invert(i[0]*O,i[1]*O),i[0]*=q,i[1]*=q,i},e}function un(t,e,i,n,o,A){if(i){var c=R(e),s=G(e),p=n*i;o==null?(o=e+n*X,A=e-p/2):(o=st(c,o),A=st(c,A),(n>0?o<A:o>A)&&(o+=n*X));for(var u,r=o;n>0?r>A:r<A;r-=p)u=Le([c,-s*R(r),-s*G(r)]),t.point(u[0],u[1])}}function st(t,e){e=Ae(e),e[0]-=t,Ne(e);var i=sn(-e[1]);return((-e[2]<0?-i:i)+X-M)%X}function Mt(){var t=[],e;return{point:function(i,n,o){e.push([i,n,o])},lineStart:function(){t.push(e=[])},lineEnd:le,rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))},result:function(){var i=t;return t=[],e=null,i}}}function Te(t,e){return D(t[0]-e[0])<M&&D(t[1]-e[1])<M}function ve(t,e,i,n){this.x=t,this.z=e,this.o=i,this.e=n,this.v=!1,this.n=this.p=null}function Jt(t,e,i,n,o){var A=[],c=[],s,p;if(t.forEach(function(d){if(!((v=d.length-1)<=0)){var v,h=d[0],S=d[v],E;if(Te(h,S)){if(!h[2]&&!S[2]){for(o.lineStart(),s=0;s<v;++s)o.point((h=d[s])[0],h[1]);o.lineEnd();return}S[0]+=2*M}A.push(E=new ve(h,d,null,!0)),c.push(E.o=new ve(h,null,E,!1)),A.push(E=new ve(S,d,null,!1)),c.push(E.o=new ve(S,null,E,!0))}}),!!A.length){for(c.sort(e),lt(A),lt(c),s=0,p=c.length;s<p;++s)c[s].e=i=!i;for(var u=A[0],r,a;;){for(var l=u,f=!0;l.v;)if((l=l.n)===u)return;r=l.z,o.lineStart();do{if(l.v=l.o.v=!0,l.e){if(f)for(s=0,p=r.length;s<p;++s)o.point((a=r[s])[0],a[1]);else n(l.x,l.n.x,1,o);l=l.n}else{if(f)for(r=l.p.z,s=r.length-1;s>=0;--s)o.point((a=r[s])[0],a[1]);else n(l.x,l.p.x,-1,o);l=l.p}l=l.o,r=l.z,f=!f}while(!l.v);o.lineEnd()}}}function lt(t){if(e=t.length){for(var e,i=0,n=t[0],o;++i<e;)n.n=o=t[i],o.p=n,n=o;n.n=o=t[0],o.p=n}}function Re(t){return D(t[0])<=T?t[0]:An(t[0])*((D(t[0])+T)%X-T)}function fn(t,e){var i=Re(e),n=e[1],o=G(n),A=[G(i),-R(i),0],c=0,s=0,p=new en;o===1?n=H+M:o===-1&&(n=-H-M);for(var u=0,r=t.length;u<r;++u)if(l=(a=t[u]).length)for(var a,l,f=a[l-1],d=Re(f),v=f[1]/2+tt,h=G(v),S=R(v),E=0;E<l;++E,d=m,h=B,S=U,f=C){var C=a[E],m=Re(C),Q=C[1]/2+tt,B=G(Q),U=R(Q),x=m-d,k=x>=0?1:-1,J=k*x,w=J>T,W=h*B;if(p.add(fe(W*k*G(J),S*U+W*R(J))),c+=w?x+k*X:x,w^d>=i^m>=i){var z=ke(Ae(f),Ae(C));Ne(z);var I=ke(A,z);Ne(I);var g=(w^x>=0?-1:1)*pe(I[2]);(n>g||n===g&&(z[0]||z[1]))&&(s+=w^x>=0?1:-1)}}return(c<-M||c<M&&p<-nn)^s&1}function Dt(t,e,i,n){return function(o){var A=e(o),c=Mt(),s=e(c),p=!1,u,r,a,l={point:f,lineStart:v,lineEnd:h,polygonStart:function(){l.point=S,l.lineStart=E,l.lineEnd=C,r=[],u=[]},polygonEnd:function(){l.point=f,l.lineStart=v,l.lineEnd=h,r=kt(r);var m=fn(u,n);r.length?(p||(o.polygonStart(),p=!0),Jt(r,dn,m,i,o)):m&&(p||(o.polygonStart(),p=!0),o.lineStart(),i(null,null,1,o),o.lineEnd()),p&&(o.polygonEnd(),p=!1),r=u=null},sphere:function(){o.polygonStart(),o.lineStart(),i(null,null,1,o),o.lineEnd(),o.polygonEnd()}};function f(m,Q){t(m,Q)&&o.point(m,Q)}function d(m,Q){A.point(m,Q)}function v(){l.point=d,A.lineStart()}function h(){l.point=f,A.lineEnd()}function S(m,Q){a.push([m,Q]),s.point(m,Q)}function E(){s.lineStart(),a=[]}function C(){S(a[0][0],a[0][1]),s.lineEnd();var m=s.clean(),Q=c.result(),B,U=Q.length,x,k,J;if(a.pop(),u.push(a),a=null,!!U){if(m&1){if(k=Q[0],(x=k.length-1)>0){for(p||(o.polygonStart(),p=!0),o.lineStart(),B=0;B<x;++B)o.point((J=k[B])[0],J[1]);o.lineEnd()}return}U>1&&m&2&&Q.push(Q.pop().concat(Q.shift())),r.push(Q.filter(pn))}}return l}}function pn(t){return t.length>1}function dn(t,e){return((t=t.x)[0]<0?t[1]-H-M:H-t[1])-((e=e.x)[0]<0?e[1]-H-M:H-e[1])}const ct=Dt(function(){return!0},gn,mn,[-T,-H]);function gn(t){var e=NaN,i=NaN,n=NaN,o;return{lineStart:function(){t.lineStart(),o=1},point:function(A,c){var s=A>0?T:-T,p=D(A-e);D(p-T)<M?(t.point(e,i=(i+c)/2>0?H:-H),t.point(n,i),t.lineEnd(),t.lineStart(),t.point(s,i),t.point(A,i),o=0):n!==s&&p>=T&&(D(e-n)<M&&(e-=n*M),D(A-s)<M&&(A-=s*M),i=hn(e,i,A,c),t.point(n,i),t.lineEnd(),t.lineStart(),t.point(s,i),o=0),t.point(e=A,i=c),n=s},lineEnd:function(){t.lineEnd(),e=i=NaN},clean:function(){return 2-o}}}function hn(t,e,i,n){var o,A,c=G(t-i);return D(c)>M?Ut((G(e)*(A=R(n))*G(i)-G(n)*(o=R(e))*G(t))/(o*A*c)):(e+n)/2}function mn(t,e,i,n){var o;if(t==null)o=i*H,n.point(-T,o),n.point(0,o),n.point(T,o),n.point(T,0),n.point(T,-o),n.point(0,-o),n.point(-T,-o),n.point(-T,0),n.point(-T,o);else if(D(t[0]-e[0])>M){var A=t[0]<e[0]?T:-T;o=i*A/2,n.point(-A,o),n.point(0,o),n.point(A,o)}else n.point(e[0],e[1])}function vn(t){var e=R(t),i=6*O,n=e>0,o=D(e)>M;function A(r,a,l,f){un(f,t,i,l,r,a)}function c(r,a){return R(r)*R(a)>e}function s(r){var a,l,f,d,v;return{lineStart:function(){d=f=!1,v=1},point:function(h,S){var E=[h,S],C,m=c(h,S),Q=n?m?0:u(h,S):m?u(h+(h<0?T:-T),S):0;if(!a&&(d=f=m)&&r.lineStart(),m!==f&&(C=p(a,E),(!C||Te(a,C)||Te(E,C))&&(E[2]=1)),m!==f)v=0,m?(r.lineStart(),C=p(E,a),r.point(C[0],C[1])):(C=p(a,E),r.point(C[0],C[1],2),r.lineEnd()),a=C;else if(o&&a&&n^m){var B;!(Q&l)&&(B=p(E,a,!0))&&(v=0,n?(r.lineStart(),r.point(B[0][0],B[0][1]),r.point(B[1][0],B[1][1]),r.lineEnd()):(r.point(B[1][0],B[1][1]),r.lineEnd(),r.lineStart(),r.point(B[0][0],B[0][1],3)))}m&&(!a||!Te(a,E))&&r.point(E[0],E[1]),a=E,f=m,l=Q},lineEnd:function(){f&&r.lineEnd(),a=null},clean:function(){return v|(d&&f)<<1}}}function p(r,a,l){var f=Ae(r),d=Ae(a),v=[1,0,0],h=ke(f,d),S=he(h,h),E=h[0],C=S-E*E;if(!C)return!l&&r;var m=e*S/C,Q=-e*E/C,B=ke(v,h),U=me(v,m),x=me(h,Q);ze(U,x);var k=B,J=he(U,k),w=he(k,k),W=J*J-w*(he(U,U)-1);if(!(W<0)){var z=De(W),I=me(k,(-J-z)/w);if(ze(I,U),I=Le(I),!l)return I;var g=r[0],y=a[0],F=r[1],Y=a[1],j;y<g&&(j=g,g=y,y=j);var se=y-g,$=D(se-T)<M,te=$||se<M;if(!$&&Y<F&&(j=F,F=Y,Y=j),te?$?F+Y>0^I[1]<(D(I[0]-g)<M?F:Y):F<=I[1]&&I[1]<=Y:se>T^(g<=I[0]&&I[0]<=y)){var ee=me(k,(-J+z)/w);return ze(ee,U),[I,Le(ee)]}}}function u(r,a){var l=n?t:T-t,f=0;return r<-l?f|=1:r>l&&(f|=2),a<-l?f|=4:a>l&&(f|=8),f}return Dt(c,s,A,n?[0,-t]:[-T,t-T])}function En(t,e,i,n,o,A){var c=t[0],s=t[1],p=e[0],u=e[1],r=0,a=1,l=p-c,f=u-s,d;if(d=i-c,!(!l&&d>0)){if(d/=l,l<0){if(d<r)return;d<a&&(a=d)}else if(l>0){if(d>a)return;d>r&&(r=d)}if(d=o-c,!(!l&&d<0)){if(d/=l,l<0){if(d>a)return;d>r&&(r=d)}else if(l>0){if(d<r)return;d<a&&(a=d)}if(d=n-s,!(!f&&d>0)){if(d/=f,f<0){if(d<r)return;d<a&&(a=d)}else if(f>0){if(d>a)return;d>r&&(r=d)}if(d=A-s,!(!f&&d<0)){if(d/=f,f<0){if(d>a)return;d>r&&(r=d)}else if(f>0){if(d<r)return;d<a&&(a=d)}return r>0&&(t[0]=c+r*l,t[1]=s+r*f),a<1&&(e[0]=c+a*l,e[1]=s+a*f),!0}}}}}var ce=1e9,Ee=-ce;function Cn(t,e,i,n){function o(u,r){return t<=u&&u<=i&&e<=r&&r<=n}function A(u,r,a,l){var f=0,d=0;if(u==null||(f=c(u,a))!==(d=c(r,a))||p(u,r)<0^a>0)do l.point(f===0||f===3?t:i,f>1?n:e);while((f=(f+a+4)%4)!==d);else l.point(r[0],r[1])}function c(u,r){return D(u[0]-t)<M?r>0?0:3:D(u[0]-i)<M?r>0?2:1:D(u[1]-e)<M?r>0?1:0:r>0?3:2}function s(u,r){return p(u.x,r.x)}function p(u,r){var a=c(u,1),l=c(r,1);return a!==l?a-l:a===0?r[1]-u[1]:a===1?u[0]-r[0]:a===2?u[1]-r[1]:r[0]-u[0]}return function(u){var r=u,a=Mt(),l,f,d,v,h,S,E,C,m,Q,B,U={point:x,lineStart:W,lineEnd:z,polygonStart:J,polygonEnd:w};function x(g,y){o(g,y)&&r.point(g,y)}function k(){for(var g=0,y=0,F=f.length;y<F;++y)for(var Y=f[y],j=1,se=Y.length,$=Y[0],te,ee,ge=$[0],ie=$[1];j<se;++j)te=ge,ee=ie,$=Y[j],ge=$[0],ie=$[1],ee<=n?ie>n&&(ge-te)*(n-ee)>(ie-ee)*(t-te)&&++g:ie<=n&&(ge-te)*(n-ee)<(ie-ee)*(t-te)&&--g;return g}function J(){r=a,l=[],f=[],B=!0}function w(){var g=k(),y=B&&g,F=(l=kt(l)).length;(y||F)&&(u.polygonStart(),y&&(u.lineStart(),A(null,null,1,u),u.lineEnd()),F&&Jt(l,s,g,A,u),u.polygonEnd()),r=u,l=f=d=null}function W(){U.point=I,f&&f.push(d=[]),Q=!0,m=!1,E=C=NaN}function z(){l&&(I(v,h),S&&m&&a.rejoin(),l.push(a.result())),U.point=x,m&&r.lineEnd()}function I(g,y){var F=o(g,y);if(f&&d.push([g,y]),Q)v=g,h=y,S=F,Q=!1,F&&(r.lineStart(),r.point(g,y));else if(F&&m)r.point(g,y);else{var Y=[E=Math.max(Ee,Math.min(ce,E)),C=Math.max(Ee,Math.min(ce,C))],j=[g=Math.max(Ee,Math.min(ce,g)),y=Math.max(Ee,Math.min(ce,y))];En(Y,j,t,e,i,n)?(m||(r.lineStart(),r.point(Y[0],Y[1])),r.point(j[0],j[1]),F||r.lineEnd(),B=!1):F&&(r.lineStart(),r.point(g,y),B=!1)}E=g,C=y,m=F}return U}}const ut=t=>t;var ae=1/0,Ue=ae,de=-ae,Ie=de,Sn={point:wn,lineStart:le,lineEnd:le,polygonStart:le,polygonEnd:le,result:function(){var t=[[ae,Ue],[de,Ie]];return de=Ie=-(Ue=ae=1/0),t}};function wn(t,e){t<ae&&(ae=t),t>de&&(de=t),e<Ue&&(Ue=e),e>Ie&&(Ie=e)}const ft=Sn;function Ve(t){return function(e){var i=new He;for(var n in t)i[n]=t[n];return i.stream=e,i}}function He(){}He.prototype={constructor:He,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function Ze(t,e,i){var n=t.clipExtent&&t.clipExtent();return t.scale(150).translate([0,0]),n!=null&&t.clipExtent(null),ln(i,t.stream(ft)),e(ft.result()),n!=null&&t.clipExtent(n),t}function zt(t,e,i){return Ze(t,function(n){var o=e[1][0]-e[0][0],A=e[1][1]-e[0][1],c=Math.min(o/(n[1][0]-n[0][0]),A/(n[1][1]-n[0][1])),s=+e[0][0]+(o-c*(n[1][0]+n[0][0]))/2,p=+e[0][1]+(A-c*(n[1][1]+n[0][1]))/2;t.scale(150*c).translate([s,p])},i)}function Qn(t,e,i){return zt(t,[[0,0],e],i)}function Bn(t,e,i){return Ze(t,function(n){var o=+e,A=o/(n[1][0]-n[0][0]),c=(o-A*(n[1][0]+n[0][0]))/2,s=-A*n[0][1];t.scale(150*A).translate([c,s])},i)}function yn(t,e,i){return Ze(t,function(n){var o=+e,A=o/(n[1][1]-n[0][1]),c=-A*n[0][0],s=(o-A*(n[1][1]+n[0][1]))/2;t.scale(150*A).translate([c,s])},i)}var pt=16,Tn=R(30*O);function dt(t,e){return+e?kn(t,e):xn(t)}function xn(t){return Ve({point:function(e,i){e=t(e,i),this.stream.point(e[0],e[1])}})}function kn(t,e){function i(n,o,A,c,s,p,u,r,a,l,f,d,v,h){var S=u-n,E=r-o,C=S*S+E*E;if(C>4*e&&v--){var m=c+l,Q=s+f,B=p+d,U=De(m*m+Q*Q+B*B),x=pe(B/=U),k=D(D(B)-1)<M||D(A-a)<M?(A+a)/2:fe(Q,m),J=t(k,x),w=J[0],W=J[1],z=w-n,I=W-o,g=E*z-S*I;(g*g/C>e||D((S*z+E*I)/C-.5)>.3||c*l+s*f+p*d<Tn)&&(i(n,o,A,c,s,p,w,W,k,m/=U,Q/=U,B,v,h),h.point(w,W),i(w,W,k,m,Q,B,u,r,a,l,f,d,v,h))}}return function(n){var o,A,c,s,p,u,r,a,l,f,d,v,h={point:S,lineStart:E,lineEnd:m,polygonStart:function(){n.polygonStart(),h.lineStart=Q},polygonEnd:function(){n.polygonEnd(),h.lineStart=E}};function S(x,k){x=t(x,k),n.point(x[0],x[1])}function E(){a=NaN,h.point=C,n.lineStart()}function C(x,k){var J=Ae([x,k]),w=t(x,k);i(a,l,r,f,d,v,a=w[0],l=w[1],r=x,f=J[0],d=J[1],v=J[2],pt,n),n.point(a,l)}function m(){h.point=S,n.lineEnd()}function Q(){E(),h.point=B,h.lineEnd=U}function B(x,k){C(o=x,k),A=a,c=l,s=f,p=d,u=v,h.point=C}function U(){i(a,l,r,f,d,v,A,c,o,s,p,u,pt,n),h.lineEnd=m,m()}return h}}var Un=Ve({point:function(t,e){this.stream.point(t*O,e*O)}});function In(t){return Ve({point:function(e,i){var n=t(e,i);return this.stream.point(n[0],n[1])}})}function Mn(t,e,i,n,o){function A(c,s){return c*=n,s*=o,[e+t*c,i-t*s]}return A.invert=function(c,s){return[(c-e)/t*n,(i-s)/t*o]},A}function gt(t,e,i,n,o,A){if(!A)return Mn(t,e,i,n,o);var c=R(A),s=G(A),p=c*t,u=s*t,r=c/t,a=s/t,l=(s*i-c*e)/t,f=(s*e+c*i)/t;function d(v,h){return v*=n,h*=o,[p*v-u*h+e,i-u*v-p*h]}return d.invert=function(v,h){return[n*(r*v-a*h+l),o*(f-a*v-r*h)]},d}function Jn(t){return Dn(function(){return t})()}function Dn(t){var e,i=150,n=480,o=250,A=0,c=0,s=0,p=0,u=0,r,a=0,l=1,f=1,d=null,v=ct,h=null,S,E,C,m=ut,Q=.5,B,U,x,k,J;function w(g){return x(g[0]*O,g[1]*O)}function W(g){return g=x.invert(g[0],g[1]),g&&[g[0]*q,g[1]*q]}w.stream=function(g){return k&&J===g?k:k=Un(In(r)(v(B(m(J=g)))))},w.preclip=function(g){return arguments.length?(v=g,d=void 0,I()):v},w.postclip=function(g){return arguments.length?(m=g,h=S=E=C=null,I()):m},w.clipAngle=function(g){return arguments.length?(v=+g?vn(d=g*O):(d=null,ct),I()):d*q},w.clipExtent=function(g){return arguments.length?(m=g==null?(h=S=E=C=null,ut):Cn(h=+g[0][0],S=+g[0][1],E=+g[1][0],C=+g[1][1]),I()):h==null?null:[[h,S],[E,C]]},w.scale=function(g){return arguments.length?(i=+g,z()):i},w.translate=function(g){return arguments.length?(n=+g[0],o=+g[1],z()):[n,o]},w.center=function(g){return arguments.length?(A=g[0]%360*O,c=g[1]%360*O,z()):[A*q,c*q]},w.rotate=function(g){return arguments.length?(s=g[0]%360*O,p=g[1]%360*O,u=g.length>2?g[2]%360*O:0,z()):[s*q,p*q,u*q]},w.angle=function(g){return arguments.length?(a=g%360*O,z()):a*q},w.reflectX=function(g){return arguments.length?(l=g?-1:1,z()):l<0},w.reflectY=function(g){return arguments.length?(f=g?-1:1,z()):f<0},w.precision=function(g){return arguments.length?(B=dt(U,Q=g*g),I()):De(Q)},w.fitExtent=function(g,y){return zt(w,g,y)},w.fitSize=function(g,y){return Qn(w,g,y)},w.fitWidth=function(g,y){return Bn(w,g,y)},w.fitHeight=function(g,y){return yn(w,g,y)};function z(){var g=gt(i,0,0,l,f,a).apply(null,e(A,c)),y=gt(i,n-g[0],o-g[1],l,f,a);return r=It(s,p,u),U=We(e,y),x=We(r,U),B=dt(U,Q),I()}function I(){return k=J=null,w}return function(){return e=t.apply(this,arguments),w.invert=e.invert&&W,z()}}function _e(t,e){return[t,rn(an((H+e)/2))]}_e.invert=function(t,e){return[t,2*Ut(on(e))-H]};function $e(){return zn(_e).scale(961/X)}function zn(t){var e=Jn(t),i=e.center,n=e.scale,o=e.translate,A=e.clipExtent,c=null,s,p,u;e.scale=function(a){return arguments.length?(n(a),r()):n()},e.translate=function(a){return arguments.length?(o(a),r()):o()},e.center=function(a){return arguments.length?(i(a),r()):i()},e.clipExtent=function(a){return arguments.length?(a==null?c=s=p=u=null:(c=+a[0][0],s=+a[0][1],p=+a[1][0],u=+a[1][1]),r()):c==null?null:[[c,s],[p,u]]};function r(){var a=T*n(),l=e(cn(e.rotate()).invert([0,0]));return A(c==null?[[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]]:t===_e?[[Math.max(l[0]-a,c),s],[Math.min(l[0]+a,p),u]]:[[c,Math.max(l[1]-a,s)],[p,Math.min(l[1]+a,u)]])}return r()}class Rn{constructor({material:e,time:i,size:n,diffuseColor:o,diffuseSpeed:A,diffuseWidth:c,diffuseDir:s}){this.time=i;let p={size:100,diffuseSpeed:15,diffuseColor:9345950,diffuseWidth:10,diffuseDir:1};this.options=Object.assign({},p,{material:e,size:n,diffuseColor:o,diffuseSpeed:A,diffuseWidth:c,diffuseDir:s}),this.init()}init(){let e=null,{material:i,size:n,diffuseColor:o,diffuseSpeed:A,diffuseWidth:c,diffuseDir:s}=this.options,p=n/A;i.onBeforeCompile=u=>{e=u,u.uniforms={...u.uniforms,uTime:{value:0},uSpeed:{value:A},uWidth:{value:c},uColor:{value:new Fe(o)},uDir:{value:s}},u.vertexShader=u.vertexShader.replace("void main() {",`
            varying vec3 vPosition;
            void main(){
              vPosition = position;
          `),u.fragmentShader=u.fragmentShader.replace("void main() {",`
            uniform float uTime;
            uniform float uSpeed;
            uniform float uWidth;
            uniform vec3 uColor;
            uniform float uDir;
            varying vec3 vPosition;
            
            void main(){
          `),u.fragmentShader=u.fragmentShader.replace("#include <opaque_fragment>",`
            #ifdef OPAQUE
            diffuseColor.a = 1.0;
            #endif
            
            #ifdef USE_TRANSMISSION
            diffuseColor.a *= material.transmissionAlpha;
            #endif
            
            float r = uTime * uSpeed;
            //光环宽度
            float w = 0.0; 
            if(w>uWidth){
              w = uWidth;
            }else{
              w = uTime * 5.0;
            }
            //几何中心点
            vec2 center = vec2(0.0, 0.0); 
            // 距离圆心的距离

            float rDistance = distance(vPosition.xz, center);
            if(uDir==2.0){
              rDistance = distance(vPosition.xy, center);
            }
            if(rDistance > r && rDistance < r + 2.0 * w) {
              float per = 0.0;
              if(rDistance < r + w) {
                per = (rDistance - r) / w;
                outgoingLight = mix(outgoingLight, uColor, per);
              } else {
                per = (rDistance - r - w) / w;
                outgoingLight = mix(uColor, outgoingLight, per);
              }
              gl_FragColor = vec4(outgoingLight, diffuseColor.a);
            } else {
              gl_FragColor = vec4(outgoingLight, 0.0);
            }
          `)},this.time.on("tick",u=>{e&&(e.uniforms.uTime.value+=u,e.uniforms.uTime.value>p&&(e.uniforms.uTime.value=0))})}}class Ln{constructor({scene:e,time:i},n){this.scene=e,this.time=i,this.instance=null;let o={position:new K(0,0,0),gridSize:100,gridDivision:20,gridColor:2635578,shapeSize:1,shapeColor:9345950,pointSize:.2,pointColor:2635578,pointLayout:{row:200,col:200},pointBlending:Pt,diffuse:!1,diffuseSpeed:15,diffuseColor:9345950,diffuseWidth:10};this.options=Object.assign({},o,n),this.init()}init(){let e=new Me;e.name="Grid";let i=this.createGridHelp(),n=this.createShapes(),o=this.createPoint();e.add(i,n,o),e.position.copy(this.options.position),this.instance=e,this.scene.add(e)}createShapes(){let{gridSize:e,gridDivision:i,shapeSize:n,shapeColor:o}=this.options,A=e/i,c=e/2,s=new ue({color:o,side:bt}),p=[];for(let a=0;a<i+1;a++)for(let l=0;l<i+1;l++){let f=this.createPlus(n);f.translate(-c+a*A,-c+l*A,0),p.push(f)}let u=St(p),r=new re(u,s);return r.renderOrder=-1,r.rotateX(-Math.PI/2),r.position.y+=.01,r}createGridHelp(){let{gridSize:e,gridDivision:i,gridColor:n}=this.options;return new Lt(e,i,n,n)}createPoint(){let{gridSize:e,pointSize:i,pointColor:n,pointBlending:o,pointLayout:A,diffuse:c}=this.options;const s=A.row,p=A.col,u=new Float32Array(s*p*3);for(let f=0;f<s;f++)for(let d=0;d<p;d++){let v=f/(s-1)*e-e/2,h=0,S=d/(p-1)*e-e/2,E=(f*p+d)*3;u[E]=v,u[E+1]=h,u[E+2]=S}var r=new Ke;r.setAttribute("position",new Qe(u,3));let a=new wt({size:i,sizeAttenuation:!0,color:n,blending:o});const l=new Qt(r,a);return c&&this.diffuseShader(a),l}setPointMode(){}diffuseShader(e){let{gridSize:i,diffuseColor:n,diffuseSpeed:o,diffuseWidth:A}=this.options;return new Rn({material:e,time:this.time,size:i,diffuseColor:n,diffuseSpeed:o,diffuseWidth:A}),!1}createPlus(e=50){let i=e/6/3,n=e/3,o=[new N(-n,-i),new N(-i,-i),new N(-i,-n),new N(i,-n),new N(i,-n),new N(i,-i),new N(n,-i),new N(n,i),new N(i,i),new N(i,n),new N(-i,n),new N(-i,i),new N(-n,i)],A=new qe(o);return new Bt(A,24)}}class Nn{constructor({time:e},i){this.time=e,this.options=Object.assign({},{width:10,scale:1,position:new K(0,0,0),needRotate:!1,rotateSpeed:.001,material:new ue({transparent:!0,opacity:1,depthTest:!0})},i);let n=new Nt(this.options.width,this.options.width),o=new re(n,this.options.material);o.position.copy(this.options.position),o.scale.set(this.options.scale,this.options.scale,this.options.scale),this.instance=o}setParent(e){e.add(this.instance),this.time.on("tick",()=>{this.update()})}update(){this.options.needRotate&&(this.instance.rotation.z+=this.options.rotateSpeed)}}class Rt{constructor({time:e},i={}){this.instance=null,this.time=e,this.enable=!0,this.config=Object.assign({num:100,range:500,speed:.01,renderOrder:99,dir:"up",material:new wt({map:Rt.createTexture(),size:20,color:16777215,transparent:!0,opacity:1,depthTest:!1,vertexColors:!0,blending:Wt,sizeAttenuation:!0})},i),this.create()}create(){const{range:e,speed:i,dir:n,material:o,num:A,renderOrder:c}=this.config,s=[],p=[],u=[];for(let a=0;a<A;a++){s.push(Math.random()*e-e/2,Math.random()*e-e/2,Math.random()*e-e/2);let l=n==="up"?1:-1;u.push(Math.random()*l,(.1+Math.random())*l,.1+Math.random()*l);const f=o.color.clone();let d={};f.getHSL(d),f.setHSL(d.h,d.s,d.l*Math.random()),p.push(f.r,f.g,f.b)}const r=new Ke;r.setAttribute("position",new Qe(new Float32Array(s),3)),r.setAttribute("velocities",new Qe(new Float32Array(u),3)),r.setAttribute("color",new Qe(new Float32Array(p),3)),this.instance=new Qt(r,o),this.instance.renderOrder=c}static createTexture(){let e=document.createElement("canvas");e.width=1024,e.height=1024;let i=e.getContext("2d"),n=i.createRadialGradient(512,512,0,512,512,512);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,1024,1024),new Yt(e)}update(e,i){if(!this.instance)return!1;const{range:n,speed:o,dir:A}=this.config;let c=A==="up"?1:-1,s=this.instance.geometry.getAttribute("position"),p=this.instance.geometry.getAttribute("velocities");const u=s.count;for(let r=0;r<u;r++){let a=s.getX(r);s.getY(r);let l=s.getZ(r),f=p.getX(r),d=p.getY(r);p.getZ(r),a+=Math.sin(f*i)*e,l+=o*c,l>n/2&&c===1&&(l=-n/2),l<-n/2&&c==-1&&(l=n/2),s.setX(r,a),s.setZ(r,l),p.setX(r,f),p.setY(r,d)}s.needsUpdate=!0,p.needsUpdate=!0}setParent(e){e.add(this.instance),this.time.on("tick",(i,n)=>{this.enable&&this.update(i,n)})}}class Wn{constructor({},e={}){this.mapGroup=new Me,this.coordinates=[],this.config=Object.assign({position:new K(0,0,0),geoProjectionCenter:new N(0,0),geoProjectionScale:120,data:"",renderOrder:1,merge:!1,material:new ue({color:1582651,transparent:!0,opacity:1})},e),this.mapGroup.position.copy(this.config.position);let i=je(this.config.data);this.create(i)}geoProjection(e){return $e().center(this.config.geoProjectionCenter).scale(this.config.geoProjectionScale).translate([0,0])(e)}create(e){let{merge:i}=this.config,n=[];if(e.features.forEach(o=>{const A=new yt;let{name:c,center:s=[],centroid:p=[]}=o.properties;this.coordinates.push({name:c,center:s,centroid:p}),A.userData.name=c,o.geometry.coordinates.forEach(u=>{u.forEach(r=>{const a=new qe;for(let f=0;f<r.length;f++){if(!r[f][0]||!r[f][1])return!1;const[d,v]=this.geoProjection(r[f]);f===0&&a.moveTo(d,-v),a.lineTo(d,-v)}const l=new Bt(a);if(i)n.push(l);else{const f=new re(l,this.config.material);f.renderOrder=this.config.renderOrder,f.userData.name=c,A.add(f)}})}),i||this.mapGroup.add(A)}),i){let o=St(n);const A=new re(o,this.config.material);A.renderOrder=this.config.renderOrder,this.mapGroup.add(A)}}getCoordinates(){return this.coordinates}setParent(e){e.add(this.mapGroup)}}class Yn{constructor({assets:e,time:i},n={}){this.mapGroup=new Me,this.assets=e,this.time=i,this.coordinates=[],this.config=Object.assign({position:new K(0,0,0),geoProjectionCenter:new N(0,0),geoProjectionScale:120,data:"",renderOrder:1,topFaceMaterial:new ue({color:1582651,transparent:!0,opacity:1}),sideMaterial:new ue({color:464171,transparent:!0,opacity:1}),depth:.1},n),this.mapGroup.position.copy(this.config.position);let o=je(this.config.data);this.create(o)}geoProjection(e){return $e().center(this.config.geoProjectionCenter).scale(this.config.geoProjectionScale).translate([0,0])(e)}create(e){e.features.forEach(i=>{const n=new yt;let{name:o,center:A=[],centroid:c=[]}=i.properties;this.coordinates.push({name:o,center:A,centroid:c});const s={depth:this.config.depth,bevelEnabled:!0,bevelSegments:1,bevelThickness:.1};let p=[this.config.topFaceMaterial,this.config.sideMaterial];i.geometry.coordinates.forEach(u=>{u.forEach((r,a)=>{const l=new qe;for(let v=0;v<r.length;v++){if(!r[v][0]||!r[v][1])return!1;const[h,S]=this.geoProjection(r[v]);v===0&&l.moveTo(h,-S),l.lineTo(h,-S)}const f=new Ht(l,s),d=new re(f,p);n.add(d)})}),this.mapGroup.add(n)})}getCoordinates(){return this.coordinates}setParent(e){e.add(this.mapGroup)}}const ht=new Xe,Ce=new K;class Gt extends Kt{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],i=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new et(e,3)),this.setAttribute("uv",new et(i,2))}applyMatrix4(e){const i=this.attributes.instanceStart,n=this.attributes.instanceEnd;return i!==void 0&&(i.applyMatrix4(e),n.applyMatrix4(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new Pe(i,6,1);return this.setAttribute("instanceStart",new oe(n,3,0)),this.setAttribute("instanceEnd",new oe(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));const n=new Pe(i,6,1);return this.setAttribute("instanceColorStart",new oe(n,3,0)),this.setAttribute("instanceColorEnd",new oe(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new qt(e.geometry)),this}fromLineSegments(e){const i=e.geometry;return this.setPositions(i.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xe);const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;e!==void 0&&i!==void 0&&(this.boundingBox.setFromBufferAttribute(e),ht.setFromBufferAttribute(i),this.boundingBox.union(ht))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tt),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,i=this.attributes.instanceEnd;if(e!==void 0&&i!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let o=0;for(let A=0,c=e.count;A<c;A++)Ce.fromBufferAttribute(e,A),o=Math.max(o,n.distanceToSquared(Ce)),Ce.fromBufferAttribute(i,A),o=Math.max(o,n.distanceToSquared(Ce));this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}Be.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new N(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ye.line={uniforms:xt.merge([Be.common,Be.fog,Be.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Ot extends jt{constructor(e){super({type:"LineMaterial",uniforms:xt.clone(ye.line.uniforms),vertexShader:ye.line.vertexShader,fragmentShader:ye.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}}const mt=new K,vt=new K,P=new Je,b=new Je,V=new Je,Ge=new K,Oe=new Xt,L=new Vt,Et=new K,Se=new Xe,we=new Tt,Z=new Je;let _,ne;function Ct(t,e,i){return Z.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),Z.multiplyScalar(1/Z.w),Z.x=ne/i.width,Z.y=ne/i.height,Z.applyMatrix4(t.projectionMatrixInverse),Z.multiplyScalar(1/Z.w),Math.abs(Math.max(Z.x,Z.y))}function Gn(t,e){const i=t.matrixWorld,n=t.geometry,o=n.attributes.instanceStart,A=n.attributes.instanceEnd,c=Math.min(n.instanceCount,o.count);for(let s=0,p=c;s<p;s++){L.start.fromBufferAttribute(o,s),L.end.fromBufferAttribute(A,s),L.applyMatrix4(i);const u=new K,r=new K;_.distanceSqToSegment(L.start,L.end,r,u),r.distanceTo(u)<ne*.5&&e.push({point:r,pointOnLine:u,distance:_.origin.distanceTo(r),object:t,face:null,faceIndex:s,uv:null,uv1:null})}}function On(t,e,i){const n=e.projectionMatrix,A=t.material.resolution,c=t.matrixWorld,s=t.geometry,p=s.attributes.instanceStart,u=s.attributes.instanceEnd,r=Math.min(s.instanceCount,p.count),a=-e.near;_.at(1,V),V.w=1,V.applyMatrix4(e.matrixWorldInverse),V.applyMatrix4(n),V.multiplyScalar(1/V.w),V.x*=A.x/2,V.y*=A.y/2,V.z=0,Ge.copy(V),Oe.multiplyMatrices(e.matrixWorldInverse,c);for(let l=0,f=r;l<f;l++){if(P.fromBufferAttribute(p,l),b.fromBufferAttribute(u,l),P.w=1,b.w=1,P.applyMatrix4(Oe),b.applyMatrix4(Oe),P.z>a&&b.z>a)continue;if(P.z>a){const C=P.z-b.z,m=(P.z-a)/C;P.lerp(b,m)}else if(b.z>a){const C=b.z-P.z,m=(b.z-a)/C;b.lerp(P,m)}P.applyMatrix4(n),b.applyMatrix4(n),P.multiplyScalar(1/P.w),b.multiplyScalar(1/b.w),P.x*=A.x/2,P.y*=A.y/2,b.x*=A.x/2,b.y*=A.y/2,L.start.copy(P),L.start.z=0,L.end.copy(b),L.end.z=0;const v=L.closestPointToPointParameter(Ge,!0);L.at(v,Et);const h=Zt.lerp(P.z,b.z,v),S=h>=-1&&h<=1,E=Ge.distanceTo(Et)<ne*.5;if(S&&E){L.start.fromBufferAttribute(p,l),L.end.fromBufferAttribute(u,l),L.start.applyMatrix4(c),L.end.applyMatrix4(c);const C=new K,m=new K;_.distanceSqToSegment(L.start,L.end,m,C),i.push({point:m,pointOnLine:C,distance:_.origin.distanceTo(m),object:t,face:null,faceIndex:l,uv:null,uv1:null})}}}class Fn extends re{constructor(e=new Gt,i=new Ot({color:Math.random()*16777215})){super(e,i),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,i=e.attributes.instanceStart,n=e.attributes.instanceEnd,o=new Float32Array(2*i.count);for(let c=0,s=0,p=i.count;c<p;c++,s+=2)mt.fromBufferAttribute(i,c),vt.fromBufferAttribute(n,c),o[s]=s===0?0:o[s-1],o[s+1]=o[s]+mt.distanceTo(vt);const A=new Pe(o,2,1);return e.setAttribute("instanceDistanceStart",new oe(A,1,0)),e.setAttribute("instanceDistanceEnd",new oe(A,1,1)),this}raycast(e,i){const n=this.material.worldUnits,o=e.camera;o===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const A=e.params.Line2!==void 0&&e.params.Line2.threshold||0;_=e.ray;const c=this.matrixWorld,s=this.geometry,p=this.material;ne=p.linewidth+A,s.boundingSphere===null&&s.computeBoundingSphere(),we.copy(s.boundingSphere).applyMatrix4(c);let u;if(n)u=ne*.5;else{const a=Math.max(o.near,we.distanceToPoint(_.origin));u=Ct(o,a,p.resolution)}if(we.radius+=u,_.intersectsSphere(we)===!1)return;s.boundingBox===null&&s.computeBoundingBox(),Se.copy(s.boundingBox).applyMatrix4(c);let r;if(n)r=ne*.5;else{const a=Math.max(o.near,Se.distanceToPoint(_.origin));r=Ct(o,a,p.resolution)}Se.expandByScalar(r),_.intersectsBox(Se)!==!1&&(n?Gn(this,i):On(this,o,i))}}class Ft extends Gt{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const i=e.length-3,n=new Float32Array(2*i);for(let o=0;o<i;o+=3)n[2*o]=e[o],n[2*o+1]=e[o+1],n[2*o+2]=e[o+2],n[2*o+3]=e[o+3],n[2*o+4]=e[o+4],n[2*o+5]=e[o+5];return super.setPositions(n),this}setColors(e){const i=e.length-3,n=new Float32Array(2*i);for(let o=0;o<i;o+=3)n[2*o]=e[o],n[2*o+1]=e[o+1],n[2*o+2]=e[o+2],n[2*o+3]=e[o+3],n[2*o+4]=e[o+4],n[2*o+5]=e[o+5];return super.setColors(n),this}fromLine(e){const i=e.geometry;return this.setPositions(i.attributes.position.array),this}}class Pn extends Fn{constructor(e=new Ft,i=new Ot({color:Math.random()*16777215})){super(e,i),this.isLine2=!0,this.type="Line2"}}class Hn{constructor({},e={}){this.config=Object.assign({visibelProvince:"",geoProjectionCenter:[0,0],geoProjectionScale:120,data:"",material:new _t({color:16777215}),type:"LineLoop",renderOrder:1},e);let i=je(this.config.data),n=this.create(i);this.lineGroup=n}geoProjection(e){return $e().center(this.config.geoProjectionCenter).scale(this.config.geoProjectionScale).translate([0,0])(e)}create(e){const{type:i,visibelProvince:n}=this.config;let o=e.features,A=new Me;for(let c=0;c<o.length;c++){const s=o[c];s.properties.name!==n&&s.geometry.coordinates.forEach(p=>{const u=[];let r=null;i==="Line2"?(p[0].forEach(a=>{const[l,f]=this.geoProjection(a);u.push(l,-f,0)}),r=this.createLine2(u)):p[0].forEach(a=>{const[l,f]=this.geoProjection(a);u.push(new K(l,-f,0)),r=this.createLine(u)}),A.add(r)})}return A}createLine2(e){const{material:i,renderOrder:n}=this.config,o=new Ft;o.setPositions(e);let A=new Pn(o,i);return A.name="mapLine2",A.renderOrder=n,A.computeLineDistances(),A}createLine(e){const{material:i,renderOrder:n,type:o}=this.config,A=new Ke;A.setFromPoints(e);let c=new $t(A,i);return c.renderOrder=n,c.name="mapLine",c}setParent(e){e.add(this.lineGroup)}}class Kn{constructor(e,i){this.shader=null,this.config=Object.assign({uColor1:3192205,uColor2:795160,size:15,dir:"x"},i),this.init(e)}init(e){let{uColor1:i,uColor2:n,dir:o,size:A}=this.config,c={x:1,y:2,z:3};e.onBeforeCompile=s=>{this.shader=s,s.uniforms={...s.uniforms,uColor1:{value:new Fe(i)},uColor2:{value:new Fe(n)},uDir:{value:c[o]},uSize:{value:A}},s.vertexShader=s.vertexShader.replace("void main() {",`
                attribute float alpha;
                varying vec3 vPosition;
                varying float vAlpha;
                void main() {
                  vAlpha = alpha;
                  vPosition = position;
              `),s.fragmentShader=s.fragmentShader.replace("void main() {",`
                varying vec3 vPosition;
                varying float vAlpha;
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                uniform float uDir;
                uniform float uSize;
              
                void main() {
              `),s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`
              #ifdef OPAQUE
              diffuseColor.a = 1.0;
              #endif
              
              // https://github.com/mrdoob/three.js/pull/22425
              #ifdef USE_TRANSMISSION
              diffuseColor.a *= transmissionAlpha + 0.1;
              #endif
              // vec3 gradient = mix(uColor1, uColor2, vPosition.x / 15.0); 
              vec3 gradient = vec3(0.0,0.0,0.0);
              if(uDir==1.0){
                gradient = mix(uColor1, uColor2, vPosition.x/ uSize); 
              }else if(uDir==2.0){
                gradient = mix(uColor1, uColor2, vPosition.z/ uSize); 
              }else if(uDir==3.0){
                gradient = mix(uColor1, uColor2, vPosition.y/ uSize); 
              }
              outgoingLight = outgoingLight * gradient;
              
              
              gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
              `)}}}const qn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK+SURBVHgB7dzNbdswGIdxSugCRtGBuklWSO17nXs/J0hHywA11AEMu3wDsLFT5WCJ5PtI/D8nQ5cA/FmxJJLqtofhHBSmPihUAoElEFgCgfVu7ODX95suqOKNXVDpDIElEFgCgSUQWAKBJRBYAoE1G2Q3DJ/j9fRjUGE7DI+f4niEGc0CMYzzKezjx7vWUQwjnMJdF8djDsq8M+QYLu/om0VJGP8OXI/LTc0C+fJhs4/fiIeLQ82hvMaI/zEevsVxCROb/RvSMkpuDCvLVVaLKCUwrGyXvS2hlMKwst6HtIBSEsPKfmO4ZpTSGFaRO/U1otTAsIo9OlkTSi0Mq+izrDWg1MSwij9cXDJKbQyrytPeJaJ4YFjVHr8vCcULw6o6H7IEFE8Mq/oEFRnFG8NymTEkohAwLLcpXBIKBcNynVMnoJAwLPdFDp4oNAwLserEA4WIYXVjK7C9Vr+fY8Gh7e8/Lhha/f5GhDMjJRBYAoElEFgCgSUQWAKBJRBYAoElEFgCgSUQWAKBJRBYAoElEFgCgSUQWAKBJRBYAoElEFgCgSUQWAKBJZDwvIIQs2kIA/K81tYvzKYhBMh/75vyCYHiDgLBSLmjuIK8xrBV6J1HoO11biCk/Rmk7XUuIMTNMhSU6iDUnUsWAaUqCBkj5Y1SDWQJGClPlCogS8JIeaEUB1kiRsoDpSjIkjFStVGKgawBI1UTpQjImjBStVCyg6wRI1UDJSvImjFSpVGygbSAkSqJkgWkJYxUKZTZIC1ipEqgzAJpGSOVG2UyiDBeyokyCWR3OOyFcd0Yyu4wfA83Ngnk2Pe/ziE82WdhvHSJYuNz7MPPcGOTQH5sNk+nPnyMf/xeGNcZSvyS3tv42DiFG0O94q+19Iq/BSQQWAKBJRBYAoElEFgCgSUQWKM3hsovnSGwBAJLILAEAusvLK6Na4P/Au0AAAAASUVORK5CYII=",jn="/globe-map-demos/assets/animate-87658e9b.mov",Xn="/globe-map-demos/assets/animate2-35ed0ba0.mov",Vn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMxSURBVHgB7dZBDcJQFADBB/kCuHAgAQckHAA3Tf27aIXsjIjNXv7bfgyQdB0gSwAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgTAAgbN2erwGaHACECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCECQCErfv7M0CTA4AwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYAwAYCw9fj+BmhyABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABAmABB2Amb1BS2MWc5zAAAAAElFTkSuQmCC",Zn="/globe-map-demos/assets/ocean-bg-f790e7fa.png",_n="/globe-map-demos/assets/rotationBorder1-2ce8e0ef.png",$n="/globe-map-demos/assets/rotationBorder2-7496b968.png",ei="/globe-map-demos/assets/chinaBlurLine-1a2cbc0f.png",ti="data:image/png;base64,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",ni="data:image/png;base64,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",ii="/globe-map-demos/assets/huiguang-3c5dfda5.png",oi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFPSURBVHgB7ddhbcMwEAXglyEoBEPoGARCIYTBymBhMAgrhDFoIZTBIATC21lxtGhdYieOW7u6T7L6x5HvfPXJBpRSSj0jko2MGqWTJL7tQMkkgSN/tSiRBG5cNQadjB1KI0GfeOsDJXHVmFKjFBLseSaRM0rg2q3PAbn7c8Cn2Dn5HnwJ7p3hWuSI/QHvFiRi5xrkhv+3W59P5ITz7danRi4YdsCn5NGOGdZufRo8kgSwi6zGIPoe9oI4bzIM4tkkjngExh3wqaoYrBRTkRbbslW5bzuWnTswnRorVFiB/dPVII1rVVWvWGjxX4t9qzRIZy9rpD34vH2+zrnIaN03dtj3+zXw27TPYvrvUxcXsMH8ZjRu7pw0z2JOt9sh+MU7GJCUwdZG1ejcwg03LP8oqa9RItvew9i325P7Tf6yY3/1GdbcQymllFJKKaUy9gO4eI9ILG1riwAAAABJRU5ErkJggg==",ri="data:image/png;base64,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",Ai="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAEACAYAAADFkM5nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQpSURBVHgB7dZBEYQwFECxv+u1plqxYIATJ2ZeoiK/vfc1wCtrreG7zjkDPPsPAJAjAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAECQAABAkAAAQJAAAEHQDPSsHzYG+LBMAAAAASUVORK5CYII=";export{Wn as B,Yn as E,Kn as G,Hn as L,Nn as P,jn as _,Ln as a,Rt as b,Xn as c,$n as d,ni as e,ti as f,$e as g,ii as h,ei as i,oi as j,qn as l,Ai as m,Zn as o,ri as p,_n as r,Vn as s};
