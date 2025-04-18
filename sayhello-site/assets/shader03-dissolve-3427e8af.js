import {
  C as de,
  a as oe,
  W as we,
  H as Me,
  U as ze,
  z as me,
  V as ce,
  n as Ze,
  M as et,
  ar as tt,
  aS as rt,
  d as ve,
  A as nt,
  h as ot,
  i as it,
  $ as at,
  k as st,
  b as Se,
  a3 as lt,
  l as ut,
} from "./OrbitControls-9c9ee6bc.js";
import { a as be, M as ct, R as ft } from "./index-1453e2ee.js";
import { D as pt } from "./index-4ec0cc76.js";
import { s as dt } from "./stats.module-077ce25d.js";
import { f as gt } from "./flag-5ab43538.js";
import {
  P as mt,
  F as ht,
  C as vt,
  R as yt,
  E as bt,
} from "./RenderPass-5ccd0f1e.js";
import { g as _t } from "./index-4db78ffb.js";
import {
  k as xt,
  g as wt,
  h as Mt,
  o as St,
  c as Et,
} from "./index-d838a7bb.js";
import { _ as Tt } from "./_plugin-vue_export-helper-c27b6911.js";
import "./lil-gui.module.min-f00c3c61.js";
const It = {
  name: "LuminosityHighPassShader",
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new de(0) },
    defaultOpacity: { value: 0 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
};
class ue extends mt {
  constructor(r, u, l, i) {
    super(),
      (this.strength = u !== void 0 ? u : 1),
      (this.radius = l),
      (this.threshold = i),
      (this.resolution = r !== void 0 ? new oe(r.x, r.y) : new oe(256, 256)),
      (this.clearColor = new de(0, 0, 0)),
      (this.renderTargetsHorizontal = []),
      (this.renderTargetsVertical = []),
      (this.nMips = 5);
    let p = Math.round(this.resolution.x / 2),
      v = Math.round(this.resolution.y / 2);
    (this.renderTargetBright = new we(p, v, { type: Me })),
      (this.renderTargetBright.texture.name = "UnrealBloomPass.bright"),
      (this.renderTargetBright.texture.generateMipmaps = !1);
    for (let j = 0; j < this.nMips; j++) {
      const R = new we(p, v, { type: Me });
      (R.texture.name = "UnrealBloomPass.h" + j),
        (R.texture.generateMipmaps = !1),
        this.renderTargetsHorizontal.push(R);
      const O = new we(p, v, { type: Me });
      (O.texture.name = "UnrealBloomPass.v" + j),
        (O.texture.generateMipmaps = !1),
        this.renderTargetsVertical.push(O),
        (p = Math.round(p / 2)),
        (v = Math.round(v / 2));
    }
    const P = It;
    (this.highPassUniforms = ze.clone(P.uniforms)),
      (this.highPassUniforms.luminosityThreshold.value = i),
      (this.highPassUniforms.smoothWidth.value = 0.01),
      (this.materialHighPassFilter = new me({
        uniforms: this.highPassUniforms,
        vertexShader: P.vertexShader,
        fragmentShader: P.fragmentShader,
      })),
      (this.separableBlurMaterials = []);
    const E = [3, 5, 7, 9, 11];
    (p = Math.round(this.resolution.x / 2)),
      (v = Math.round(this.resolution.y / 2));
    for (let j = 0; j < this.nMips; j++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(E[j])),
        (this.separableBlurMaterials[j].uniforms.invSize.value = new oe(
          1 / p,
          1 / v
        )),
        (p = Math.round(p / 2)),
        (v = Math.round(v / 2));
    (this.compositeMaterial = this.getCompositeMaterial(this.nMips)),
      (this.compositeMaterial.uniforms.blurTexture1.value =
        this.renderTargetsVertical[0].texture),
      (this.compositeMaterial.uniforms.blurTexture2.value =
        this.renderTargetsVertical[1].texture),
      (this.compositeMaterial.uniforms.blurTexture3.value =
        this.renderTargetsVertical[2].texture),
      (this.compositeMaterial.uniforms.blurTexture4.value =
        this.renderTargetsVertical[3].texture),
      (this.compositeMaterial.uniforms.blurTexture5.value =
        this.renderTargetsVertical[4].texture),
      (this.compositeMaterial.uniforms.bloomStrength.value = u),
      (this.compositeMaterial.uniforms.bloomRadius.value = 0.1);
    const B = [1, 0.8, 0.6, 0.4, 0.2];
    (this.compositeMaterial.uniforms.bloomFactors.value = B),
      (this.bloomTintColors = [
        new ce(1, 1, 1),
        new ce(1, 1, 1),
        new ce(1, 1, 1),
        new ce(1, 1, 1),
        new ce(1, 1, 1),
      ]),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors);
    const M = vt;
    (this.copyUniforms = ze.clone(M.uniforms)),
      (this.blendMaterial = new me({
        uniforms: this.copyUniforms,
        vertexShader: M.vertexShader,
        fragmentShader: M.fragmentShader,
        blending: Ze,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
      })),
      (this.enabled = !0),
      (this.needsSwap = !1),
      (this._oldClearColor = new de()),
      (this.oldClearAlpha = 1),
      (this.basic = new et()),
      (this.fsQuad = new ht(null));
  }
  dispose() {
    for (let r = 0; r < this.renderTargetsHorizontal.length; r++)
      this.renderTargetsHorizontal[r].dispose();
    for (let r = 0; r < this.renderTargetsVertical.length; r++)
      this.renderTargetsVertical[r].dispose();
    this.renderTargetBright.dispose();
    for (let r = 0; r < this.separableBlurMaterials.length; r++)
      this.separableBlurMaterials[r].dispose();
    this.compositeMaterial.dispose(),
      this.blendMaterial.dispose(),
      this.basic.dispose(),
      this.fsQuad.dispose();
  }
  setSize(r, u) {
    let l = Math.round(r / 2),
      i = Math.round(u / 2);
    this.renderTargetBright.setSize(l, i);
    for (let p = 0; p < this.nMips; p++)
      this.renderTargetsHorizontal[p].setSize(l, i),
        this.renderTargetsVertical[p].setSize(l, i),
        (this.separableBlurMaterials[p].uniforms.invSize.value = new oe(
          1 / l,
          1 / i
        )),
        (l = Math.round(l / 2)),
        (i = Math.round(i / 2));
  }
  render(r, u, l, i, p) {
    r.getClearColor(this._oldClearColor),
      (this.oldClearAlpha = r.getClearAlpha());
    const v = r.autoClear;
    (r.autoClear = !1),
      r.setClearColor(this.clearColor, 0),
      p && r.state.buffers.stencil.setTest(!1),
      this.renderToScreen &&
        ((this.fsQuad.material = this.basic),
        (this.basic.map = l.texture),
        r.setRenderTarget(null),
        r.clear(),
        this.fsQuad.render(r)),
      (this.highPassUniforms.tDiffuse.value = l.texture),
      (this.highPassUniforms.luminosityThreshold.value = this.threshold),
      (this.fsQuad.material = this.materialHighPassFilter),
      r.setRenderTarget(this.renderTargetBright),
      r.clear(),
      this.fsQuad.render(r);
    let P = this.renderTargetBright;
    for (let E = 0; E < this.nMips; E++)
      (this.fsQuad.material = this.separableBlurMaterials[E]),
        (this.separableBlurMaterials[E].uniforms.colorTexture.value =
          P.texture),
        (this.separableBlurMaterials[E].uniforms.direction.value =
          ue.BlurDirectionX),
        r.setRenderTarget(this.renderTargetsHorizontal[E]),
        r.clear(),
        this.fsQuad.render(r),
        (this.separableBlurMaterials[E].uniforms.colorTexture.value =
          this.renderTargetsHorizontal[E].texture),
        (this.separableBlurMaterials[E].uniforms.direction.value =
          ue.BlurDirectionY),
        r.setRenderTarget(this.renderTargetsVertical[E]),
        r.clear(),
        this.fsQuad.render(r),
        (P = this.renderTargetsVertical[E]);
    (this.fsQuad.material = this.compositeMaterial),
      (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
      (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      r.setRenderTarget(this.renderTargetsHorizontal[0]),
      r.clear(),
      this.fsQuad.render(r),
      (this.fsQuad.material = this.blendMaterial),
      (this.copyUniforms.tDiffuse.value =
        this.renderTargetsHorizontal[0].texture),
      p && r.state.buffers.stencil.setTest(!0),
      this.renderToScreen
        ? (r.setRenderTarget(null), this.fsQuad.render(r))
        : (r.setRenderTarget(l), this.fsQuad.render(r)),
      r.setClearColor(this._oldClearColor, this.oldClearAlpha),
      (r.autoClear = v);
  }
  getSeperableBlurMaterial(r) {
    const u = [];
    for (let l = 0; l < r; l++)
      u.push((0.39894 * Math.exp((-0.5 * l * l) / (r * r))) / r);
    return new me({
      defines: { KERNEL_RADIUS: r },
      uniforms: {
        colorTexture: { value: null },
        invSize: { value: new oe(0.5, 0.5) },
        direction: { value: new oe(0.5, 0.5) },
        gaussianCoefficients: { value: u },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,
    });
  }
  getCompositeMaterial(r) {
    return new me({
      defines: { NUM_MIPS: r },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`,
    });
  }
}
ue.BlurDirectionX = new oe(1, 0);
ue.BlurDirectionY = new oe(0, 1);
var Ct = `#define GLSLIFY 1
vec2 _fade(vec2 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}vec3 _fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}/***Generates 2D Perlin Noise.**@name gln_perlin*@function*@param{vec2}p Point to sample Perlin Noise at.*@return{float}Value of Perlin Noise at point "p".**@example*float n=gln_perlin(position.xy);*/float gln_perlin(vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod(Pi,289.0);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=gln_rand4(gln_rand4(ix)+iy);vec4 gx=2.0*fract(i*0.0243902439)-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=1.79284291400159-0.85373472095314*vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=_fade(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}/***Generates 3D Perlin Noise.**@name gln_perlin*@function*@param{vec3}p Point to sample Perlin Noise at.*@return{float}Value of Perlin Noise at point "p".**@example*float n=gln_perlin(position.xyz);*/float gln_perlin(vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod(Pi0,289.0);Pi1=mod(Pi1,289.0);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=_permute(_permute(ix)+iy);vec4 ixy0=_permute(ixy+iz0);vec4 ixy1=_permute(ixy+iz1);vec4 gx0=ixy0/7.0;vec4 gy0=fract(floor(gx0)/7.0)-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1/7.0;vec4 gy1=fract(floor(gx1)/7.0)-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=_taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=_taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=_fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}/***Generates 2D Fractional Brownian motion(fBm)from Perlin Noise.**@name gln_pfbm*@function*@param{vec2}p Point to sample fBm at.*@param{gln_tFBMOpts}opts Options for generating Perlin Noise.*@return{float}Value of fBm at point "p".**@example*gln_tFBMOpts opts=*gln_tFBMOpts(uSeed,0.3,2.0,0.5,1.0,5,false,false);**float n=gln_pfbm(position.xy,opts);*/float gln_pfbm(vec2 p,gln_tFBMOpts opts){p+=(opts.seed*100.0);float persistance=opts.persistance;float lacunarity=opts.lacunarity;float redistribution=opts.redistribution;int octaves=opts.octaves;bool terbulance=opts.terbulance;bool ridge=opts.terbulance&&opts.ridge;float result=0.0;float amplitude=1.0;float frequency=1.0;float maximum=amplitude;for(int i=0;i<MAX_FBM_ITERATIONS;i++){if(i>=octaves)break;vec2 p=p*frequency*opts.scale;float noiseVal=gln_perlin(p);if(terbulance)noiseVal=abs(noiseVal);if(ridge)noiseVal=-1.0*noiseVal;result+=noiseVal*amplitude;frequency*=lacunarity;amplitude*=persistance;maximum+=amplitude;}float redistributed=pow(result,redistribution);return redistributed/maximum;}/***Generates 3D Fractional Brownian motion(fBm)from Perlin Noise.**@name gln_pfbm*@function*@param{vec3}p Point to sample fBm at.*@param{gln_tFBMOpts}opts Options for generating Perlin Noise.*@return{float}Value of fBm at point "p".**@example*gln_tFBMOpts opts=*gln_tFBMOpts(uSeed,0.3,2.0,0.5,1.0,5,false,false);**float n=gln_pfbm(position.xy,opts);*/float gln_pfbm(vec3 p,gln_tFBMOpts opts){p+=(opts.seed*100.0);float persistance=opts.persistance;float lacunarity=opts.lacunarity;float redistribution=opts.redistribution;int octaves=opts.octaves;bool terbulance=opts.terbulance;bool ridge=opts.terbulance&&opts.ridge;float result=0.0;float amplitude=1.0;float frequency=1.0;float maximum=amplitude;for(int i=0;i<MAX_FBM_ITERATIONS;i++){if(i>=octaves)break;vec3 p=p*frequency*opts.scale;float noiseVal=gln_perlin(p);if(terbulance)noiseVal=abs(noiseVal);if(ridge)noiseVal=-1.0*noiseVal;result+=noiseVal*amplitude;frequency*=lacunarity;amplitude*=persistance;maximum+=amplitude;}float redistributed=pow(result,redistribution);return redistributed/maximum;}`,
  Pt = `#define GLSLIFY 1
/***Generates 2D Simplex Noise.**@name gln_simplex*@function*@param{vec2}v Point to sample Simplex Noise at.*@return{float}Value of Simplex Noise at point "p".**@example*float n=gln_simplex(position.xy);*/float gln_simplex(vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod(i,289.0);vec3 p=gln_rand3(gln_rand3(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}/***Generates 3D Simplex Noise.**@name gln_simplex*@function*@param{vec3}v Point to sample Simplex Noise at.*@return{float}Value of Simplex Noise at point "p".**@example*float n=gln_simplex(position.xyz);*/float gln_simplex(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+1.0*C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.+3.0*C.xxx;i=mod(i,289.0);vec4 p=_permute(_permute(_permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=_taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}/***Generates 2D Fractional Brownian motion(fBm)from Simplex Noise.**@name gln_sfbm*@function*@param{vec2}v Point to sample fBm at.*@param{gln_tFBMOpts}opts Options for generating Simplex Noise.*@return{float}Value of fBm at point "p".**@example*gln_tFBMOpts opts=*gln_tFBMOpts(uSeed,0.3,2.0,0.5,1.0,5,false,false);**float n=gln_sfbm(position.xy,opts);*/float gln_sfbm(vec2 v,gln_tFBMOpts opts){v+=(opts.seed*100.0);float persistance=opts.persistance;float lacunarity=opts.lacunarity;float redistribution=opts.redistribution;int octaves=opts.octaves;bool terbulance=opts.terbulance;bool ridge=opts.terbulance&&opts.ridge;float result=0.0;float amplitude=1.0;float frequency=1.0;float maximum=amplitude;for(int i=0;i<MAX_FBM_ITERATIONS;i++){if(i>=octaves)break;vec2 p=v*frequency*opts.scale;float noiseVal=gln_simplex(p);if(terbulance)noiseVal=abs(noiseVal);if(ridge)noiseVal=-1.0*noiseVal;result+=noiseVal*amplitude;frequency*=lacunarity;amplitude*=persistance;maximum+=amplitude;}float redistributed=pow(result,redistribution);return redistributed/maximum;}/***Generates 3D Fractional Brownian motion(fBm)from Simplex Noise.**@name gln_sfbm*@function*@param{vec3}v Point to sample fBm at.*@param{gln_tFBMOpts}opts Options for generating Simplex Noise.*@return{float}Value of fBm at point "p".**@example*gln_tFBMOpts opts=*gln_tFBMOpts(uSeed,0.3,2.0,0.5,1.0,5,false,false);**float n=gln_sfbm(position.xy,opts);*/float gln_sfbm(vec3 v,gln_tFBMOpts opts){v+=(opts.seed*100.0);float persistance=opts.persistance;float lacunarity=opts.lacunarity;float redistribution=opts.redistribution;int octaves=opts.octaves;bool terbulance=opts.terbulance;bool ridge=opts.terbulance&&opts.ridge;float result=0.0;float amplitude=1.0;float frequency=1.0;float maximum=amplitude;for(int i=0;i<MAX_FBM_ITERATIONS;i++){if(i>=octaves)break;vec3 p=v*frequency*opts.scale;float noiseVal=gln_simplex(p);if(terbulance)noiseVal=abs(noiseVal);if(ridge)noiseVal=-1.0*noiseVal;result+=noiseVal*amplitude;frequency*=lacunarity;amplitude*=persistance;maximum+=amplitude;}float redistributed=pow(result,redistribution);return redistributed/maximum;}`,
  At = `#define GLSLIFY 1
/***@typedef{struct}gln_tWorleyOpts Options for Voronoi Noise generators.*@property{float}seed Seed for PRNG generation.*@property{float}distance Size of each generated cell*@property{float}scale "Zoom level" of generated noise.*@property{boolean}invert Invert generated noise.*/struct gln_tWorleyOpts{float seed;float distance;float scale;bool invert;};/***Generates Voronoi Noise.**@name gln_worley*@function*@param{vec2}x                  Point to sample Voronoi Noise at.*@param{gln_tWorleyOpts}opts Options for generating Voronoi Noise.*@return{float}Value of Voronoi Noise at point "p".**@example*gln_tWorleyOpts opts=gln_tWorleyOpts(uSeed,0.0,0.5,false);**float n=gln_worley(position.xy,opts);*/float gln_worley(vec2 point,gln_tWorleyOpts opts){vec2 p=floor(point*opts.scale);vec2 f=fract(point*opts.scale);float res=0.0;for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec2 b=vec2(i,j);vec2 r=vec2(b)-f+gln_rand(p+b);res+=1./pow(dot(r,r),8.);}}float result=pow(1./res,0.0625);if(opts.invert)result=1.0-result;return result;}/***Generates Fractional Brownian motion(fBm)from Worley Noise.**@name gln_wfbm*@function*@param{vec3}v Point to sample fBm at.*@param{gln_tFBMOpts}opts Options for generating Simplex Noise.*@return{float}Value of fBm at point "p".**@example*gln_tFBMOpts opts=*gln_tFBMOpts(1.0,0.3,2.0,0.5,1.0,5,false,false);**gln_tWorleyOpts voronoiOpts=*gln_tWorleyOpts(1.0,1.0,3.0,false);**float n=gln_wfbm(position.xy,voronoiOpts,opts);*/float gln_wfbm(vec2 v,gln_tFBMOpts opts,gln_tWorleyOpts vopts){v+=(opts.seed*100.0);float persistance=opts.persistance;float lacunarity=opts.lacunarity;float redistribution=opts.redistribution;int octaves=opts.octaves;bool terbulance=opts.terbulance;bool ridge=opts.terbulance&&opts.ridge;float result=0.0;float amplitude=1.0;float frequency=1.0;float maximum=amplitude;for(int i=0;i<MAX_FBM_ITERATIONS;i++){if(i>=octaves)break;vec2 p=v*frequency*opts.scale;float noiseVal=gln_worley(p,vopts);if(terbulance)noiseVal=abs(noiseVal);if(ridge)noiseVal=-1.0*noiseVal;result+=noiseVal*amplitude;frequency*=lacunarity;amplitude*=persistance;maximum+=amplitude;}float redistributed=pow(result,redistribution);return redistributed/maximum;}`,
  Dt = `#define GLSLIFY 1
#define gln_COPY 1
#define gln_ADD 2
#define gln_SUBSTRACT 3
#define gln_MULTIPLY 4
#define gln_ADDSUB 5
#define gln_LIGHTEN 6
#define gln_DARKEN 7
#define gln_SWITCH 8
#define gln_DIVIDE 9
#define gln_OVERLAY 10
#define gln_SCREEN 11
#define gln_SOFTLIGHT 12
float gln_softLight(float f,float b){return(f<0.5)? b-(1.0-2.0*f)*b*(1.0-b):(b<0.25)? b+(2.0*f-1.0)*b*((16.0*b-12.0)*b+3.0): b+(2.0*f-1.0)*(sqrt(b)-b);}vec4 gln_softLight(vec4 f,vec4 b){vec4 result;result.x=gln_softLight(f.x,b.x);result.y=gln_softLight(f.y,b.y);result.z=gln_softLight(f.z,b.z);result.a=gln_softLight(f.a,b.a);return result;}vec4 gln_screen(vec4 f,vec4 b){vec4 result;result=1.0-(1.0-f)*(1.0-b);return result;}float gln_overlay(float f,float b){return(b<0.5)? 2.0*f*b : 1.0-2.0*(1.0-f)*(1.0-b);}vec4 gln_overlay(vec4 f,vec4 b){vec4 result;result.x=gln_overlay(f.x,b.x);result.y=gln_overlay(f.y,b.y);result.z=gln_overlay(f.z,b.z);result.a=gln_overlay(f.a,b.a);return result;}vec4 gln_divide(vec4 f,vec4 b){vec4 result=vec4(0.0);result=b/f;return result;}vec4 gln_switch(vec4 f,vec4 b,float o){vec4 result=vec4(0.0);result=max((f*o),(b*(1.0-o)));return result;}vec4 gln_darken(vec4 f,vec4 b){vec4 result=vec4(0.0);result=min(f,b);return result;}vec4 gln_lighten(vec4 f,vec4 b){vec4 result=vec4(0.0);result=max(f,b);return result;}float gln_addSub(float f,float b){return f>0.5 ? f+b : b-f;}vec4 gln_addSub(vec4 f,vec4 b){vec4 result=vec4(0.0);result.r=gln_addSub(f.r,b.r);result.g=gln_addSub(f.g,b.g);result.b=gln_addSub(f.b,b.b);result.a=gln_addSub(f.a,b.a);return result;}vec4 gln_multiply(vec4 f,vec4 b){vec4 result=vec4(0.0);result=f*b;result.a=f.a+b.a*(1.0-f.a);return result;}vec4 gln_subtract(vec4 f,vec4 b){vec4 result=vec4(0.0);result=b-f;result.a=f.a+b.a*(1.0-f.a);return result;}vec4 gln_add(vec4 f,vec4 b){vec4 result=vec4(0.0);result=f+b;result.a=f.a+b.a*(1.0-f.a);return result;}vec4 gln_copy(vec4 f,vec4 b){vec4 result=vec4(0.0);result.a=f.a+b.a*(1.0-f.a);result.rgb=((f.rgb*f.a)+(b.rgb*b.a)*(1.0-f.a));return result;}/***Enum for gl-Noise Blend Modes.*@name gln_BLENDMODES*@enum{number}*@property{number}gln_COPY The<b>Copy</b>blending mode will just place the*foreground on top of the background.*@property{number}gln_ADD The<b>Add</b>blending mode will add the*foreground input value to each corresponding pixel in the background.*@property{number}gln_SUBSTRACT The<b>Substract</b>blending mode will*substract the foreground input value from each corresponding pixel in the*background.*@property{number}gln_MULTIPLY The<b>Multiply</b>blending mode will*multiply the background input value by each corresponding pixel in the*foreground.*@property{number}gln_ADDSUB The<b>Add Sub</b>blending mode works as*following:<ul><li>Foreground pixels with a value higher than 0.5 are added*to their respective background pixels.</li><li>Foreground pixels with a*value lower than 0.5 are substracted from their respective background pixels.*</li>*</ul>*@property{number}gln_LIGHTEN The<b>Lighten(Max)</b>Blending mode will*pick the higher value between the background and the foreground.*@property{number}gln_DARKEN The<b>Darken(Min)</b>Blending mode will pick*the lower value between the background and the foreground.*@property{number}gln_DIVIDE The<b>Divide</b>blending mode will divide the*background input pixels value by each corresponding pixel in the foreground.*@property{number}gln_OVERLAY The<b>Overlay</b>blending mode combines*Multiply and Screen blend modes:<ul><li>If the value of the lower layer*pixel is below 0.5,then a Multiply type blending is applied.</li><li>If*the value of the lower layer pixel is above 0.5,then a Screen type blending*is applied.</li>*</ul>*@property{number}gln_SCREEN With<b>Screen</b>blend mode the values of the*pixels in the two inputs are inverted,multiplied,and then inverted*again.</br>The result is the opposite effect to multiply and is always equal*or higher(brighter)compared to the original.*@property{number}gln_SOFTLIGHT The<b>Soft Light</b>blend mode creates a*subtle lighter or darker result depending on the brightness of the foreground*color.*</br>Blend colors that are more than 50% brightness will lighten the*background pixels and colors that are less than 50% brightness will darken*the background pixels.*//***Blends a Color with another.**@name gln_blend*@function*@param{vec4}f Foreground*@param{vec4}b Background*@param{gln_BLENDMODES}type Blend mode*@return{vec4}Mapped Value**@example*vec4 logo=texture2D(uLogo,uv);*vec4 rect=texture2D(uRect,uv);**vec4 final=gln_blend(logo,rect,gln_COPY);*/vec4 gln_blend(vec4 f,vec4 b,int type){vec4 n;if(type==gln_COPY){n=gln_copy(f,b);}else if(type==gln_ADD){n=gln_add(f,b);}else if(type==gln_SUBSTRACT){n=gln_subtract(f,b);}else if(type==gln_MULTIPLY){n=gln_multiply(f,b);}else if(type==gln_ADDSUB){n=gln_addSub(f,b);}else if(type==gln_LIGHTEN){n=gln_lighten(f,b);}else if(type==gln_DARKEN){n=gln_darken(f,b);}else if(type==gln_DIVIDE){n=gln_divide(f,b);}else if(type==gln_OVERLAY){n=gln_overlay(f,b);}else if(type==gln_SCREEN){n=gln_screen(f,b);}else if(type==gln_SOFTLIGHT){n=gln_softLight(f,b);}return n;}`,
  Bt = `#define GLSLIFY 1
#define MAX_FBM_ITERATIONS 30
#define gln_PI 3.1415926538
vec4 _permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}vec4 _taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}/***@typedef{struct}gln_tFBMOpts Options for fBm generators.*@property{float}seed Seed for PRNG generation.*@property{float}persistance Factor by which successive layers of noise*will decrease in amplitude.*@property{float}lacunarity Factor by which successive layers of noise*will increase in frequency.*@property{float}scale "Zoom level" of generated noise.*@property{float}redistribution Flatness in the generated noise.*@property{int}octaves Number of layers of noise to stack.*@property{boolean}terbulance Enable terbulance*@property{boolean}ridge Convert the fBm to Ridge Noise. Only works*when "terbulance" is set to true.*/struct gln_tFBMOpts{float seed;float persistance;float lacunarity;float scale;float redistribution;int octaves;bool terbulance;bool ridge;};/***Converts a number from one range to another.**@name gln_map*@function*@param{}value Value to map*@param{float}min1 Minimum for current range*@param{float}max1 Maximum for current range*@param{float}min2 Minimum for wanted range*@param{float}max2 Maximum for wanted range*@return{float}Mapped Value**@example*float n=gln_map(-0.2,-1.0,1.0,0.0,1.0);**/float gln_map(float value,float min1,float max1,float min2,float max2){return min2+(value-min1)*(max2-min2)/(max1-min1);}/***Normalized a value from the range[-1,1]to the range[0,1].**@name gln_normalize*@function*@param{float}v Value to normalize*@return{float}Normalized Value**@example*float n=gln_normalize(-0.2);**/float gln_normalize(float v){return gln_map(v,-1.0,1.0,0.0,1.0);}/***Generates a random 2D Vector.**@name gln_rand2*@function*@param{vec2}p Vector to hash to generate the random numbers from.*@return{vec2}Random vector.**@example*vec2 n=gln_rand2(vec2(1.0,-4.2));*/vec2 gln_rand2(vec2 p){return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);}/***Generates a random 3D Vector.**@name gln_rand3*@function*@param{vec3}p Vector to hash to generate the random numbers from.*@return{vec3}Random vector.**@example*vec3 n=gln_rand3(vec3(1.0,-4.2,0.2));*/vec3 gln_rand3(vec3 p){return mod(((p*34.0)+1.0)*p,289.0);}/***Generates a random 4D Vector.**@name gln_rand4*@function*@param{vec4}p Vector to hash to generate the random numbers from.*@return{vec4}Random vector.**@example*vec4 n=gln_rand4(vec4(1.0,-4.2,0.2,2.2));*/vec4 gln_rand4(vec4 p){return mod(((p*34.0)+1.0)*p,289.0);}/***Generates a random number.**@name gln_rand*@function*@param{float}n Value to hash to generate the number from.*@return{float}Random number.**@example*float n=gln_rand(2.5);*/float gln_rand(float n){return fract(sin(n)*1e4);}/***Generates a random number.**@name gln_rand*@function*@param{vec2}p Value to hash to generate the number from.*@return{float}Random number.**@example*float n=gln_rand(vec2(2.5,-1.8));*/float gln_rand(vec2 p){return fract(1e4*sin(17.0*p.x+p.y*0.1)*(0.1+abs(sin(p.y*13.0+p.x))));}`,
  Ot = `#define GLSLIFY 1
/***@typedef{struct}gln_tGerstnerWaveOpts Options for Gerstner Wave*generators.*@property{vec2}direction Direction of the wave*@property{float}steepness Steepness of the peeks*@property{float}wavelength Wavelength of the waves*/struct gln_tGerstnerWaveOpts{vec2 direction;float steepness;float wavelength;};/***Implimentation of Gerstner Wave*Based on: https:**@name gln_GerstnerWave*@function*@param{vec3}p Point to sample Gerstner Waves at.*@param{gln_tGerstnerWaveOpts}opts*@param{float}dt**@example*float n=gln_perlin(position.xy);*/vec3 gln_GerstnerWave(vec3 p,gln_tGerstnerWaveOpts opts,float dt){float steepness=opts.steepness;float wavelength=opts.wavelength;float k=2.0*gln_PI/wavelength;float c=sqrt(9.8/k);vec2 d=normalize(opts.direction);float f=k*(dot(d,p.xy)-c*dt);float a=steepness/k;return vec3(d.x*(a*cos(f)),a*sin(f),d.y*(a*cos(f)));}`,
  zt = `#define GLSLIFY 1
vec3 _snois3(vec3 x){float s=gln_simplex(vec3(x));float s1=gln_simplex(vec3(x.y-19.1,x.z+33.4,x.x+47.2));float s2=gln_simplex(vec3(x.z+74.2,x.x-124.5,x.y+99.4));vec3 c=vec3(s,s1,s2);return c;}/***Generates 3D Curl Noise.**@name gln_curl*@function*@param{vec2}p Point to sample Curl Noise at.*@return{float}Value of Curl Noise at point "p".**@example*vec3 n=gln_curl(position);*/vec3 gln_curl(vec3 p){const float e=.1;vec3 dx=vec3(e,0.0,0.0);vec3 dy=vec3(0.0,e,0.0);vec3 dz=vec3(0.0,0.0,e);vec3 p_x0=_snois3(p-dx);vec3 p_x1=_snois3(p+dx);vec3 p_y0=_snois3(p-dy);vec3 p_y1=_snois3(p+dy);vec3 p_z0=_snois3(p-dz);vec3 p_z1=_snois3(p+dz);float x=p_y1.z-p_y0.z-p_z1.y+p_z0.y;float y=p_z1.x-p_z0.x-p_x1.z+p_x0.z;float z=p_x1.y-p_x0.y-p_y1.x+p_y0.x;const float divisor=1.0/(2.0*e);return normalize(vec3(x,y,z)*divisor);}`;
const Lt = Ct,
  Ft = Pt,
  jt = At,
  Nt = Dt,
  Ee = Bt,
  Ut = Ot,
  Rt = zt,
  Le = [Lt, Ft, jt, Nt, Ut, Rt];
typeof process < "u" &&
  process.versions != null &&
  process.versions.node != null;
function Vt(d) {
  let r = [],
    u = [];
  return (
    d.forEach((l) => {
      const i = l.match(/#name: (.*)\n/),
        p = l.match(/#deps: (.*)\n/);
      r.push(i ? i[1] : ""), u.push(p ? p[1].split(" ") : []);
    }),
    { names: r, deps: u }
  );
}
function kt(d) {
  const { names: r, deps: u } = Vt(d);
  let l = [],
    i;
  if (
    (u.forEach((p, v) => {
      p.forEach((P, E) => {
        r.includes(P) || (l.push({ outter: v, inner: E }), (i = r[v]));
      });
    }),
    l.length !== 0)
  ) {
    const p = l.map((v) => u[v.outter][v.inner]);
    throw new Error(
      `glNoise: Missing dependencies "${p.join(", ")}" for "${i}"`
    );
  }
}
function Ht(d, r, u) {
  if (!d || d.length <= 0)
    throw new Error("glNoise: 'loadShaders' requires atleast one path.");
  let l;
  Array.isArray(d) ? (l = d) : (l = [d]),
    u || (u = new Array(l.length).fill(Ee));
  let i = l;
  return (
    r
      ? (i = i.map((p, v) => {
          let P;
          r[v] ? (P = r[v]) : (P = Le), kt(P);
          let E;
          return (
            u[v] ? (E = u[v]) : (E = Ee),
            `
` +
              E +
              `
` +
              P.join(`
`) +
              `
` +
              p
          );
        }))
      : (i = i.map((p, v) => {
          let P;
          return (
            u[v] ? (P = u[v]) : (P = Ee),
            `
` +
              P +
              `
` +
              Le.join(`
`) +
              `
` +
              p
          );
        })),
    Array.isArray(d) ? i : i[0]
  );
}
function he(d) {
  throw new Error(
    'Could not dynamically require "' +
      d +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var Ke = { exports: {} };
(function (d, r) {
  (function (u) {
    d.exports = u();
  })(function () {
    return (function u(l, i, p) {
      function v(B, M) {
        if (!i[B]) {
          if (!l[B]) {
            var j = typeof he == "function" && he;
            if (!M && j) return j(B, !0);
            if (P) return P(B, !0);
            throw new Error("Cannot find module '" + B + "'");
          }
          (M = i[B] = { exports: {} }),
            l[B][0].call(
              M.exports,
              function (R) {
                var O = l[B][1][R];
                return v(O || R);
              },
              M,
              M.exports,
              u,
              l,
              i,
              p
            );
        }
        return i[B].exports;
      }
      for (var P = typeof he == "function" && he, E = 0; E < p.length; E++)
        v(p[E]);
      return v;
    })(
      {
        1: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              var _ = u("crypto");
              function A(c, h) {
                h = I(c, h);
                var n;
                return (
                  (n =
                    h.algorithm !== "passthrough"
                      ? _.createHash(h.algorithm)
                      : new z()).write === void 0 &&
                    ((n.write = n.update), (n.end = n.update)),
                  S(h, n).dispatch(c),
                  n.update || n.end(""),
                  n.digest
                    ? n.digest(h.encoding === "buffer" ? void 0 : h.encoding)
                    : ((c = n.read()),
                      h.encoding !== "buffer" ? c.toString(h.encoding) : c)
                );
              }
              ((i = l.exports = A).sha1 = function (c) {
                return A(c);
              }),
                (i.keys = function (c) {
                  return A(c, {
                    excludeValues: !0,
                    algorithm: "sha1",
                    encoding: "hex",
                  });
                }),
                (i.MD5 = function (c) {
                  return A(c, { algorithm: "md5", encoding: "hex" });
                }),
                (i.keysMD5 = function (c) {
                  return A(c, {
                    algorithm: "md5",
                    encoding: "hex",
                    excludeValues: !0,
                  });
                });
              var m = _.getHashes ? _.getHashes().slice() : ["sha1", "md5"],
                x =
                  (m.push("passthrough"),
                  ["buffer", "hex", "binary", "base64"]);
              function I(c, h) {
                var n = {};
                if (
                  ((n.algorithm = (h = h || {}).algorithm || "sha1"),
                  (n.encoding = h.encoding || "hex"),
                  (n.excludeValues = !!h.excludeValues),
                  (n.algorithm = n.algorithm.toLowerCase()),
                  (n.encoding = n.encoding.toLowerCase()),
                  (n.ignoreUnknown = h.ignoreUnknown === !0),
                  (n.respectType = h.respectType !== !1),
                  (n.respectFunctionNames = h.respectFunctionNames !== !1),
                  (n.respectFunctionProperties =
                    h.respectFunctionProperties !== !1),
                  (n.unorderedArrays = h.unorderedArrays === !0),
                  (n.unorderedSets = h.unorderedSets !== !1),
                  (n.unorderedObjects = h.unorderedObjects !== !1),
                  (n.replacer = h.replacer || void 0),
                  (n.excludeKeys = h.excludeKeys || void 0),
                  c === void 0)
                )
                  throw new Error("Object argument required.");
                for (var a = 0; a < m.length; ++a)
                  m[a].toLowerCase() === n.algorithm.toLowerCase() &&
                    (n.algorithm = m[a]);
                if (m.indexOf(n.algorithm) === -1)
                  throw new Error(
                    'Algorithm "' +
                      n.algorithm +
                      '"  not supported. supported values: ' +
                      m.join(", ")
                  );
                if (
                  x.indexOf(n.encoding) === -1 &&
                  n.algorithm !== "passthrough"
                )
                  throw new Error(
                    'Encoding "' +
                      n.encoding +
                      '"  not supported. supported values: ' +
                      x.join(", ")
                  );
                return n;
              }
              function w(c) {
                if (typeof c == "function")
                  return (
                    /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(
                      Function.prototype.toString.call(c)
                    ) != null
                  );
              }
              function S(c, h, n) {
                n = n || [];
                function a(t) {
                  return h.update ? h.update(t, "utf8") : h.write(t, "utf8");
                }
                return {
                  dispatch: function (t) {
                    return this[
                      "_" +
                        ((t = c.replacer ? c.replacer(t) : t) === null
                          ? "null"
                          : typeof t)
                    ](t);
                  },
                  _object: function (t) {
                    var f,
                      g = Object.prototype.toString.call(t),
                      N = /\[object (.*)\]/i.exec(g);
                    if (
                      ((N = (N = N
                        ? N[1]
                        : "unknown:[" + g + "]").toLowerCase()),
                      0 <= (g = n.indexOf(t)))
                    )
                      return this.dispatch("[CIRCULAR:" + g + "]");
                    if (
                      (n.push(t), P !== void 0 && P.isBuffer && P.isBuffer(t))
                    )
                      return a("buffer:"), a(t);
                    if (
                      N === "object" ||
                      N === "function" ||
                      N === "asyncfunction"
                    )
                      return (
                        (g = Object.keys(t)),
                        c.unorderedObjects && (g = g.sort()),
                        c.respectType === !1 ||
                          w(t) ||
                          g.splice(
                            0,
                            0,
                            "prototype",
                            "__proto__",
                            "constructor"
                          ),
                        c.excludeKeys &&
                          (g = g.filter(function (L) {
                            return !c.excludeKeys(L);
                          })),
                        a("object:" + g.length + ":"),
                        (f = this),
                        g.forEach(function (L) {
                          f.dispatch(L),
                            a(":"),
                            c.excludeValues || f.dispatch(t[L]),
                            a(",");
                        })
                      );
                    if (!this["_" + N]) {
                      if (c.ignoreUnknown) return a("[" + N + "]");
                      throw new Error('Unknown object type "' + N + '"');
                    }
                    this["_" + N](t);
                  },
                  _array: function (t, L) {
                    L = L !== void 0 ? L : c.unorderedArrays !== !1;
                    var g = this;
                    if ((a("array:" + t.length + ":"), !L || t.length <= 1))
                      return t.forEach(function (U) {
                        return g.dispatch(U);
                      });
                    var N = [],
                      L = t.map(function (U) {
                        var D = new z(),
                          F = n.slice();
                        return (
                          S(c, D, F).dispatch(U),
                          (N = N.concat(F.slice(n.length))),
                          D.read().toString()
                        );
                      });
                    return (n = n.concat(N)), L.sort(), this._array(L, !1);
                  },
                  _date: function (t) {
                    return a("date:" + t.toJSON());
                  },
                  _symbol: function (t) {
                    return a("symbol:" + t.toString());
                  },
                  _error: function (t) {
                    return a("error:" + t.toString());
                  },
                  _boolean: function (t) {
                    return a("bool:" + t.toString());
                  },
                  _string: function (t) {
                    a("string:" + t.length + ":"), a(t.toString());
                  },
                  _function: function (t) {
                    a("fn:"),
                      w(t)
                        ? this.dispatch("[native]")
                        : this.dispatch(t.toString()),
                      c.respectFunctionNames !== !1 &&
                        this.dispatch("function-name:" + String(t.name)),
                      c.respectFunctionProperties && this._object(t);
                  },
                  _number: function (t) {
                    return a("number:" + t.toString());
                  },
                  _xml: function (t) {
                    return a("xml:" + t.toString());
                  },
                  _null: function () {
                    return a("Null");
                  },
                  _undefined: function () {
                    return a("Undefined");
                  },
                  _regexp: function (t) {
                    return a("regex:" + t.toString());
                  },
                  _uint8array: function (t) {
                    return (
                      a("uint8array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _uint8clampedarray: function (t) {
                    return (
                      a("uint8clampedarray:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _int8array: function (t) {
                    return (
                      a("int8array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _uint16array: function (t) {
                    return (
                      a("uint16array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _int16array: function (t) {
                    return (
                      a("int16array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _uint32array: function (t) {
                    return (
                      a("uint32array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _int32array: function (t) {
                    return (
                      a("int32array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _float32array: function (t) {
                    return (
                      a("float32array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _float64array: function (t) {
                    return (
                      a("float64array:"),
                      this.dispatch(Array.prototype.slice.call(t))
                    );
                  },
                  _arraybuffer: function (t) {
                    return a("arraybuffer:"), this.dispatch(new Uint8Array(t));
                  },
                  _url: function (t) {
                    return a("url:" + t.toString());
                  },
                  _map: function (t) {
                    return (
                      a("map:"),
                      (t = Array.from(t)),
                      this._array(t, c.unorderedSets !== !1)
                    );
                  },
                  _set: function (t) {
                    return (
                      a("set:"),
                      (t = Array.from(t)),
                      this._array(t, c.unorderedSets !== !1)
                    );
                  },
                  _file: function (t) {
                    return (
                      a("file:"),
                      this.dispatch([t.name, t.size, t.type, t.lastModfied])
                    );
                  },
                  _blob: function () {
                    if (c.ignoreUnknown) return a("[blob]");
                    throw Error(`Hashing Blob objects is currently not supported
(see https://github.com/puleos/object-hash/issues/26)
Use "options.replacer" or "options.ignoreUnknown"
`);
                  },
                  _domwindow: function () {
                    return a("domwindow");
                  },
                  _bigint: function (t) {
                    return a("bigint:" + t.toString());
                  },
                  _process: function () {
                    return a("process");
                  },
                  _timer: function () {
                    return a("timer");
                  },
                  _pipe: function () {
                    return a("pipe");
                  },
                  _tcp: function () {
                    return a("tcp");
                  },
                  _udp: function () {
                    return a("udp");
                  },
                  _tty: function () {
                    return a("tty");
                  },
                  _statwatcher: function () {
                    return a("statwatcher");
                  },
                  _securecontext: function () {
                    return a("securecontext");
                  },
                  _connection: function () {
                    return a("connection");
                  },
                  _zlib: function () {
                    return a("zlib");
                  },
                  _context: function () {
                    return a("context");
                  },
                  _nodescript: function () {
                    return a("nodescript");
                  },
                  _httpparser: function () {
                    return a("httpparser");
                  },
                  _dataview: function () {
                    return a("dataview");
                  },
                  _signal: function () {
                    return a("signal");
                  },
                  _fsevent: function () {
                    return a("fsevent");
                  },
                  _tlswrap: function () {
                    return a("tlswrap");
                  },
                };
              }
              function z() {
                return {
                  buf: "",
                  write: function (c) {
                    this.buf += c;
                  },
                  end: function (c) {
                    this.buf += c;
                  },
                  read: function () {
                    return this.buf;
                  },
                };
              }
              i.writeToStream = function (c, h, n) {
                return (
                  n === void 0 && ((n = h), (h = {})),
                  S((h = I(c, h)), n).dispatch(c)
                );
              };
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/fake_9a5aa49d.js",
              "/"
            );
          },
          { buffer: 3, crypto: 5, lYpoI2: 11 },
        ],
        2: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              (function (_) {
                var A = typeof Uint8Array < "u" ? Uint8Array : Array,
                  m = "+".charCodeAt(0),
                  x = "/".charCodeAt(0),
                  I = "0".charCodeAt(0),
                  w = "a".charCodeAt(0),
                  S = "A".charCodeAt(0),
                  z = "-".charCodeAt(0),
                  c = "_".charCodeAt(0);
                function h(n) {
                  return (
                    (n = n.charCodeAt(0)),
                    n === m || n === z
                      ? 62
                      : n === x || n === c
                      ? 63
                      : n < I
                      ? -1
                      : n < I + 10
                      ? n - I + 26 + 26
                      : n < S + 26
                      ? n - S
                      : n < w + 26
                      ? n - w + 26
                      : void 0
                  );
                }
                (_.toByteArray = function (n) {
                  var a, t;
                  if (0 < n.length % 4)
                    throw new Error(
                      "Invalid string. Length must be a multiple of 4"
                    );
                  var f = n.length,
                    f =
                      n.charAt(f - 2) === "="
                        ? 2
                        : n.charAt(f - 1) === "="
                        ? 1
                        : 0,
                    g = new A((3 * n.length) / 4 - f),
                    N = 0 < f ? n.length - 4 : n.length,
                    L = 0;
                  function U(D) {
                    g[L++] = D;
                  }
                  for (a = 0; a < N; a += 4, 0)
                    U(
                      (16711680 &
                        (t =
                          (h(n.charAt(a)) << 18) |
                          (h(n.charAt(a + 1)) << 12) |
                          (h(n.charAt(a + 2)) << 6) |
                          h(n.charAt(a + 3)))) >>
                        16
                    ),
                      U((65280 & t) >> 8),
                      U(255 & t);
                  return (
                    f == 2
                      ? U(
                          255 &
                            (t =
                              (h(n.charAt(a)) << 2) | (h(n.charAt(a + 1)) >> 4))
                        )
                      : f == 1 &&
                        (U(
                          ((t =
                            (h(n.charAt(a)) << 10) |
                            (h(n.charAt(a + 1)) << 4) |
                            (h(n.charAt(a + 2)) >> 2)) >>
                            8) &
                            255
                        ),
                        U(255 & t)),
                    g
                  );
                }),
                  (_.fromByteArray = function (n) {
                    var a,
                      t,
                      f,
                      g,
                      N = n.length % 3,
                      L = "";
                    function U(D) {
                      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(
                        D
                      );
                    }
                    for (a = 0, f = n.length - N; a < f; a += 3)
                      (t = (n[a] << 16) + (n[a + 1] << 8) + n[a + 2]),
                        (L +=
                          U(((g = t) >> 18) & 63) +
                          U((g >> 12) & 63) +
                          U((g >> 6) & 63) +
                          U(63 & g));
                    switch (N) {
                      case 1:
                        L =
                          (L += U((t = n[n.length - 1]) >> 2)) +
                          U((t << 4) & 63) +
                          "==";
                        break;
                      case 2:
                        L =
                          (L =
                            (L += U(
                              (t = (n[n.length - 2] << 8) + n[n.length - 1]) >>
                                10
                            )) + U((t >> 4) & 63)) +
                          U((t << 2) & 63) +
                          "=";
                    }
                    return L;
                  });
              })(i === void 0 ? (this.base64js = {}) : i);
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js",
              "/node_modules/gulp-browserify/node_modules/base64-js/lib"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        3: [
          function (u, l, i) {
            (function (p, v, m, E, B, M, j, R, O) {
              var _ = u("base64-js"),
                A = u("ieee754");
              function m(e, o, s) {
                if (!(this instanceof m)) return new m(e, o, s);
                var b,
                  y,
                  C,
                  k,
                  q = typeof e;
                if (o === "base64" && q == "string")
                  for (
                    e = (k = e).trim ? k.trim() : k.replace(/^\s+|\s+$/g, "");
                    e.length % 4 != 0;

                  )
                    e += "=";
                if (q == "number") b = Y(e);
                else if (q == "string") b = m.byteLength(e, o);
                else {
                  if (q != "object")
                    throw new Error(
                      "First argument needs to be a number, array or string."
                    );
                  b = Y(e.length);
                }
                if (
                  (m._useTypedArrays
                    ? (y = m._augment(new Uint8Array(b)))
                    : (((y = this).length = b), (y._isBuffer = !0)),
                  m._useTypedArrays && typeof e.byteLength == "number")
                )
                  y._set(e);
                else if (
                  W((k = e)) ||
                  m.isBuffer(k) ||
                  (k && typeof k == "object" && typeof k.length == "number")
                )
                  for (C = 0; C < b; C++)
                    m.isBuffer(e) ? (y[C] = e.readUInt8(C)) : (y[C] = e[C]);
                else if (q == "string") y.write(e, 0, o);
                else if (q == "number" && !m._useTypedArrays && !s)
                  for (C = 0; C < b; C++) y[C] = 0;
                return y;
              }
              function x(e, o, s, b) {
                return (m._charsWritten = ge(
                  (function (y) {
                    for (var C = [], k = 0; k < y.length; k++)
                      C.push(255 & y.charCodeAt(k));
                    return C;
                  })(o),
                  e,
                  s,
                  b
                ));
              }
              function I(e, o, s, b) {
                return (m._charsWritten = ge(
                  (function (y) {
                    for (var C, k, q = [], X = 0; X < y.length; X++)
                      (k = y.charCodeAt(X)),
                        (C = k >> 8),
                        (k = k % 256),
                        q.push(k),
                        q.push(C);
                    return q;
                  })(o),
                  e,
                  s,
                  b
                ));
              }
              function w(e, o, s) {
                var b = "";
                s = Math.min(e.length, s);
                for (var y = o; y < s; y++) b += String.fromCharCode(e[y]);
                return b;
              }
              function S(e, o, s, C) {
                C ||
                  (T(typeof s == "boolean", "missing or invalid endian"),
                  T(o != null, "missing offset"),
                  T(o + 1 < e.length, "Trying to read beyond buffer length"));
                var y,
                  C = e.length;
                if (!(C <= o))
                  return (
                    s
                      ? ((y = e[o]), o + 1 < C && (y |= e[o + 1] << 8))
                      : ((y = e[o] << 8), o + 1 < C && (y |= e[o + 1])),
                    y
                  );
              }
              function z(e, o, s, C) {
                C ||
                  (T(typeof s == "boolean", "missing or invalid endian"),
                  T(o != null, "missing offset"),
                  T(o + 3 < e.length, "Trying to read beyond buffer length"));
                var y,
                  C = e.length;
                if (!(C <= o))
                  return (
                    s
                      ? (o + 2 < C && (y = e[o + 2] << 16),
                        o + 1 < C && (y |= e[o + 1] << 8),
                        (y |= e[o]),
                        o + 3 < C && (y += (e[o + 3] << 24) >>> 0))
                      : (o + 1 < C && (y = e[o + 1] << 16),
                        o + 2 < C && (y |= e[o + 2] << 8),
                        o + 3 < C && (y |= e[o + 3]),
                        (y += (e[o] << 24) >>> 0)),
                    y
                  );
              }
              function c(e, o, s, b) {
                if (
                  (b ||
                    (T(typeof s == "boolean", "missing or invalid endian"),
                    T(o != null, "missing offset"),
                    T(o + 1 < e.length, "Trying to read beyond buffer length")),
                  !(e.length <= o))
                )
                  return (
                    (b = S(e, o, s, !0)), 32768 & b ? -1 * (65535 - b + 1) : b
                  );
              }
              function h(e, o, s, b) {
                if (
                  (b ||
                    (T(typeof s == "boolean", "missing or invalid endian"),
                    T(o != null, "missing offset"),
                    T(o + 3 < e.length, "Trying to read beyond buffer length")),
                  !(e.length <= o))
                )
                  return (
                    (b = z(e, o, s, !0)),
                    2147483648 & b ? -1 * (4294967295 - b + 1) : b
                  );
              }
              function n(e, o, s, b) {
                return (
                  b ||
                    (T(typeof s == "boolean", "missing or invalid endian"),
                    T(o + 3 < e.length, "Trying to read beyond buffer length")),
                  A.read(e, o, s, 23, 4)
                );
              }
              function a(e, o, s, b) {
                return (
                  b ||
                    (T(typeof s == "boolean", "missing or invalid endian"),
                    T(o + 7 < e.length, "Trying to read beyond buffer length")),
                  A.read(e, o, s, 52, 8)
                );
              }
              function t(e, o, s, b, y) {
                if (
                  (y ||
                    (T(o != null, "missing value"),
                    T(typeof b == "boolean", "missing or invalid endian"),
                    T(s != null, "missing offset"),
                    T(s + 1 < e.length, "trying to write beyond buffer length"),
                    _e(o, 65535)),
                  (y = e.length),
                  !(y <= s))
                )
                  for (var C = 0, k = Math.min(y - s, 2); C < k; C++)
                    e[s + C] =
                      (o & (255 << (8 * (b ? C : 1 - C)))) >>>
                      (8 * (b ? C : 1 - C));
              }
              function f(e, o, s, b, y) {
                if (
                  (y ||
                    (T(o != null, "missing value"),
                    T(typeof b == "boolean", "missing or invalid endian"),
                    T(s != null, "missing offset"),
                    T(s + 3 < e.length, "trying to write beyond buffer length"),
                    _e(o, 4294967295)),
                  (y = e.length),
                  !(y <= s))
                )
                  for (var C = 0, k = Math.min(y - s, 4); C < k; C++)
                    e[s + C] = (o >>> (8 * (b ? C : 3 - C))) & 255;
              }
              function g(e, o, s, b, y) {
                y ||
                  (T(o != null, "missing value"),
                  T(typeof b == "boolean", "missing or invalid endian"),
                  T(s != null, "missing offset"),
                  T(s + 1 < e.length, "Trying to write beyond buffer length"),
                  xe(o, 32767, -32768)),
                  e.length <= s || t(e, 0 <= o ? o : 65535 + o + 1, s, b, y);
              }
              function N(e, o, s, b, y) {
                y ||
                  (T(o != null, "missing value"),
                  T(typeof b == "boolean", "missing or invalid endian"),
                  T(s != null, "missing offset"),
                  T(s + 3 < e.length, "Trying to write beyond buffer length"),
                  xe(o, 2147483647, -2147483648)),
                  e.length <= s ||
                    f(e, 0 <= o ? o : 4294967295 + o + 1, s, b, y);
              }
              function L(e, o, s, b, y) {
                y ||
                  (T(o != null, "missing value"),
                  T(typeof b == "boolean", "missing or invalid endian"),
                  T(s != null, "missing offset"),
                  T(s + 3 < e.length, "Trying to write beyond buffer length"),
                  Be(o, 34028234663852886e22, -34028234663852886e22)),
                  e.length <= s || A.write(e, o, s, b, 23, 4);
              }
              function U(e, o, s, b, y) {
                y ||
                  (T(o != null, "missing value"),
                  T(typeof b == "boolean", "missing or invalid endian"),
                  T(s != null, "missing offset"),
                  T(s + 7 < e.length, "Trying to write beyond buffer length"),
                  Be(o, 17976931348623157e292, -17976931348623157e292)),
                  e.length <= s || A.write(e, o, s, b, 52, 8);
              }
              (i.Buffer = m),
                (i.SlowBuffer = m),
                (i.INSPECT_MAX_BYTES = 50),
                (m.poolSize = 8192),
                (m._useTypedArrays = (function () {
                  try {
                    var e = new ArrayBuffer(0),
                      o = new Uint8Array(e);
                    return (
                      (o.foo = function () {
                        return 42;
                      }),
                      o.foo() === 42 && typeof o.subarray == "function"
                    );
                  } catch {
                    return !1;
                  }
                })()),
                (m.isEncoding = function (e) {
                  switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (m.isBuffer = function (e) {
                  return !(e == null || !e._isBuffer);
                }),
                (m.byteLength = function (e, o) {
                  var s;
                  switch (((e += ""), o || "utf8")) {
                    case "hex":
                      s = e.length / 2;
                      break;
                    case "utf8":
                    case "utf-8":
                      s = ne(e).length;
                      break;
                    case "ascii":
                    case "binary":
                    case "raw":
                      s = e.length;
                      break;
                    case "base64":
                      s = Ae(e).length;
                      break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      s = 2 * e.length;
                      break;
                    default:
                      throw new Error("Unknown encoding");
                  }
                  return s;
                }),
                (m.concat = function (e, o) {
                  if (
                    (T(
                      W(e),
                      `Usage: Buffer.concat(list, [totalLength])
list should be an Array.`
                    ),
                    e.length === 0)
                  )
                    return new m(0);
                  if (e.length === 1) return e[0];
                  if (typeof o != "number")
                    for (y = o = 0; y < e.length; y++) o += e[y].length;
                  for (var s = new m(o), b = 0, y = 0; y < e.length; y++) {
                    var C = e[y];
                    C.copy(s, b), (b += C.length);
                  }
                  return s;
                }),
                (m.prototype.write = function (e, o, s, b) {
                  isFinite(o)
                    ? isFinite(s) || ((b = s), (s = void 0))
                    : ((X = b), (b = o), (o = s), (s = X)),
                    (o = Number(o) || 0);
                  var y,
                    C,
                    k,
                    q,
                    X = this.length - o;
                  switch (
                    ((!s || X < (s = Number(s))) && (s = X),
                    (b = String(b || "utf8").toLowerCase()))
                  ) {
                    case "hex":
                      y = (function (te, $, J, Q) {
                        J = Number(J) || 0;
                        var K = te.length - J;
                        (!Q || K < (Q = Number(Q))) && (Q = K),
                          T((K = $.length) % 2 == 0, "Invalid hex string"),
                          K / 2 < Q && (Q = K / 2);
                        for (var ae = 0; ae < Q; ae++) {
                          var Oe = parseInt($.substr(2 * ae, 2), 16);
                          T(!isNaN(Oe), "Invalid hex string"),
                            (te[J + ae] = Oe);
                        }
                        return (m._charsWritten = 2 * ae), ae;
                      })(this, e, o, s);
                      break;
                    case "utf8":
                    case "utf-8":
                      (C = this),
                        (k = o),
                        (q = s),
                        (y = m._charsWritten = ge(ne(e), C, k, q));
                      break;
                    case "ascii":
                    case "binary":
                      y = x(this, e, o, s);
                      break;
                    case "base64":
                      (C = this),
                        (k = o),
                        (q = s),
                        (y = m._charsWritten = ge(Ae(e), C, k, q));
                      break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      y = I(this, e, o, s);
                      break;
                    default:
                      throw new Error("Unknown encoding");
                  }
                  return y;
                }),
                (m.prototype.toString = function (e, o, s) {
                  var b,
                    y,
                    C,
                    k,
                    q = this;
                  if (
                    ((e = String(e || "utf8").toLowerCase()),
                    (o = Number(o) || 0),
                    (s = s !== void 0 ? Number(s) : q.length) === o)
                  )
                    return "";
                  switch (e) {
                    case "hex":
                      b = (function (X, te, $) {
                        var J = X.length;
                        (!te || te < 0) && (te = 0),
                          (!$ || $ < 0 || J < $) && ($ = J);
                        for (var Q = "", K = te; K < $; K++) Q += H(X[K]);
                        return Q;
                      })(q, o, s);
                      break;
                    case "utf8":
                    case "utf-8":
                      b = (function (X, te, $) {
                        var J = "",
                          Q = "";
                        $ = Math.min(X.length, $);
                        for (var K = te; K < $; K++)
                          X[K] <= 127
                            ? ((J += De(Q) + String.fromCharCode(X[K])),
                              (Q = ""))
                            : (Q += "%" + X[K].toString(16));
                        return J + De(Q);
                      })(q, o, s);
                      break;
                    case "ascii":
                    case "binary":
                      b = w(q, o, s);
                      break;
                    case "base64":
                      (y = q),
                        (k = s),
                        (b =
                          (C = o) === 0 && k === y.length
                            ? _.fromByteArray(y)
                            : _.fromByteArray(y.slice(C, k)));
                      break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      b = (function (X, te, $) {
                        for (
                          var J = X.slice(te, $), Q = "", K = 0;
                          K < J.length;
                          K += 2
                        )
                          Q += String.fromCharCode(J[K] + 256 * J[K + 1]);
                        return Q;
                      })(q, o, s);
                      break;
                    default:
                      throw new Error("Unknown encoding");
                  }
                  return b;
                }),
                (m.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (m.prototype.copy = function (e, o, s, b) {
                  if (
                    ((o = o || 0),
                    (b = b || b === 0 ? b : this.length) !== (s = s || 0) &&
                      e.length !== 0 &&
                      this.length !== 0)
                  ) {
                    T(s <= b, "sourceEnd < sourceStart"),
                      T(0 <= o && o < e.length, "targetStart out of bounds"),
                      T(0 <= s && s < this.length, "sourceStart out of bounds"),
                      T(0 <= b && b <= this.length, "sourceEnd out of bounds"),
                      b > this.length && (b = this.length);
                    var y =
                      (b = e.length - o < b - s ? e.length - o + s : b) - s;
                    if (y < 100 || !m._useTypedArrays)
                      for (var C = 0; C < y; C++) e[C + o] = this[C + s];
                    else e._set(this.subarray(s, s + y), o);
                  }
                }),
                (m.prototype.slice = function (e, o) {
                  var s = this.length;
                  if (((e = F(e, s, 0)), (o = F(o, s, s)), m._useTypedArrays))
                    return m._augment(this.subarray(e, o));
                  for (
                    var b = o - e, y = new m(b, void 0, !0), C = 0;
                    C < b;
                    C++
                  )
                    y[C] = this[C + e];
                  return y;
                }),
                (m.prototype.get = function (e) {
                  return (
                    console.log(
                      ".get() is deprecated. Access using array indexes instead."
                    ),
                    this.readUInt8(e)
                  );
                }),
                (m.prototype.set = function (e, o) {
                  return (
                    console.log(
                      ".set() is deprecated. Access using array indexes instead."
                    ),
                    this.writeUInt8(e, o)
                  );
                }),
                (m.prototype.readUInt8 = function (e, o) {
                  if (
                    (o ||
                      (T(e != null, "missing offset"),
                      T(
                        e < this.length,
                        "Trying to read beyond buffer length"
                      )),
                    !(e >= this.length))
                  )
                    return this[e];
                }),
                (m.prototype.readUInt16LE = function (e, o) {
                  return S(this, e, !0, o);
                }),
                (m.prototype.readUInt16BE = function (e, o) {
                  return S(this, e, !1, o);
                }),
                (m.prototype.readUInt32LE = function (e, o) {
                  return z(this, e, !0, o);
                }),
                (m.prototype.readUInt32BE = function (e, o) {
                  return z(this, e, !1, o);
                }),
                (m.prototype.readInt8 = function (e, o) {
                  if (
                    (o ||
                      (T(e != null, "missing offset"),
                      T(
                        e < this.length,
                        "Trying to read beyond buffer length"
                      )),
                    !(e >= this.length))
                  )
                    return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
                }),
                (m.prototype.readInt16LE = function (e, o) {
                  return c(this, e, !0, o);
                }),
                (m.prototype.readInt16BE = function (e, o) {
                  return c(this, e, !1, o);
                }),
                (m.prototype.readInt32LE = function (e, o) {
                  return h(this, e, !0, o);
                }),
                (m.prototype.readInt32BE = function (e, o) {
                  return h(this, e, !1, o);
                }),
                (m.prototype.readFloatLE = function (e, o) {
                  return n(this, e, !0, o);
                }),
                (m.prototype.readFloatBE = function (e, o) {
                  return n(this, e, !1, o);
                }),
                (m.prototype.readDoubleLE = function (e, o) {
                  return a(this, e, !0, o);
                }),
                (m.prototype.readDoubleBE = function (e, o) {
                  return a(this, e, !1, o);
                }),
                (m.prototype.writeUInt8 = function (e, o, s) {
                  s ||
                    (T(e != null, "missing value"),
                    T(o != null, "missing offset"),
                    T(o < this.length, "trying to write beyond buffer length"),
                    _e(e, 255)),
                    o >= this.length || (this[o] = e);
                }),
                (m.prototype.writeUInt16LE = function (e, o, s) {
                  t(this, e, o, !0, s);
                }),
                (m.prototype.writeUInt16BE = function (e, o, s) {
                  t(this, e, o, !1, s);
                }),
                (m.prototype.writeUInt32LE = function (e, o, s) {
                  f(this, e, o, !0, s);
                }),
                (m.prototype.writeUInt32BE = function (e, o, s) {
                  f(this, e, o, !1, s);
                }),
                (m.prototype.writeInt8 = function (e, o, s) {
                  s ||
                    (T(e != null, "missing value"),
                    T(o != null, "missing offset"),
                    T(o < this.length, "Trying to write beyond buffer length"),
                    xe(e, 127, -128)),
                    o >= this.length ||
                      (0 <= e
                        ? this.writeUInt8(e, o, s)
                        : this.writeUInt8(255 + e + 1, o, s));
                }),
                (m.prototype.writeInt16LE = function (e, o, s) {
                  g(this, e, o, !0, s);
                }),
                (m.prototype.writeInt16BE = function (e, o, s) {
                  g(this, e, o, !1, s);
                }),
                (m.prototype.writeInt32LE = function (e, o, s) {
                  N(this, e, o, !0, s);
                }),
                (m.prototype.writeInt32BE = function (e, o, s) {
                  N(this, e, o, !1, s);
                }),
                (m.prototype.writeFloatLE = function (e, o, s) {
                  L(this, e, o, !0, s);
                }),
                (m.prototype.writeFloatBE = function (e, o, s) {
                  L(this, e, o, !1, s);
                }),
                (m.prototype.writeDoubleLE = function (e, o, s) {
                  U(this, e, o, !0, s);
                }),
                (m.prototype.writeDoubleBE = function (e, o, s) {
                  U(this, e, o, !1, s);
                }),
                (m.prototype.fill = function (e, o, s) {
                  if (
                    ((o = o || 0),
                    (s = s || this.length),
                    T(
                      typeof (e =
                        typeof (e = e || 0) == "string"
                          ? e.charCodeAt(0)
                          : e) == "number" && !isNaN(e),
                      "value is not a number"
                    ),
                    T(o <= s, "end < start"),
                    s !== o && this.length !== 0)
                  ) {
                    T(0 <= o && o < this.length, "start out of bounds"),
                      T(0 <= s && s <= this.length, "end out of bounds");
                    for (var b = o; b < s; b++) this[b] = e;
                  }
                }),
                (m.prototype.inspect = function () {
                  for (var e = [], o = this.length, s = 0; s < o; s++)
                    if (((e[s] = H(this[s])), s === i.INSPECT_MAX_BYTES)) {
                      e[s + 1] = "...";
                      break;
                    }
                  return "<Buffer " + e.join(" ") + ">";
                }),
                (m.prototype.toArrayBuffer = function () {
                  if (typeof Uint8Array > "u")
                    throw new Error(
                      "Buffer.toArrayBuffer not supported in this browser"
                    );
                  if (m._useTypedArrays) return new m(this).buffer;
                  for (
                    var e = new Uint8Array(this.length), o = 0, s = e.length;
                    o < s;
                    o += 1
                  )
                    e[o] = this[o];
                  return e.buffer;
                });
              var D = m.prototype;
              function F(e, o, s) {
                return typeof e != "number"
                  ? s
                  : o <= (e = ~~e)
                  ? o
                  : 0 <= e || 0 <= (e += o)
                  ? e
                  : 0;
              }
              function Y(e) {
                return (e = ~~Math.ceil(+e)) < 0 ? 0 : e;
              }
              function W(e) {
                return (
                  Array.isArray ||
                  function (o) {
                    return (
                      Object.prototype.toString.call(o) === "[object Array]"
                    );
                  }
                )(e);
              }
              function H(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16);
              }
              function ne(e) {
                for (var o = [], s = 0; s < e.length; s++) {
                  var b = e.charCodeAt(s);
                  if (b <= 127) o.push(e.charCodeAt(s));
                  else
                    for (
                      var y = s,
                        C =
                          (55296 <= b && b <= 57343 && s++,
                          encodeURIComponent(e.slice(y, s + 1))
                            .substr(1)
                            .split("%")),
                        k = 0;
                      k < C.length;
                      k++
                    )
                      o.push(parseInt(C[k], 16));
                }
                return o;
              }
              function Ae(e) {
                return _.toByteArray(e);
              }
              function ge(e, o, s, b) {
                for (
                  var y = 0;
                  y < b && !(y + s >= o.length || y >= e.length);
                  y++
                )
                  o[y + s] = e[y];
                return y;
              }
              function De(e) {
                try {
                  return decodeURIComponent(e);
                } catch {
                  return String.fromCharCode(65533);
                }
              }
              function _e(e, o) {
                T(
                  typeof e == "number",
                  "cannot write a non-number as a number"
                ),
                  T(
                    0 <= e,
                    "specified a negative value for writing an unsigned value"
                  ),
                  T(e <= o, "value is larger than maximum value for type"),
                  T(Math.floor(e) === e, "value has a fractional component");
              }
              function xe(e, o, s) {
                T(
                  typeof e == "number",
                  "cannot write a non-number as a number"
                ),
                  T(e <= o, "value larger than maximum allowed value"),
                  T(s <= e, "value smaller than minimum allowed value"),
                  T(Math.floor(e) === e, "value has a fractional component");
              }
              function Be(e, o, s) {
                T(
                  typeof e == "number",
                  "cannot write a non-number as a number"
                ),
                  T(e <= o, "value larger than maximum allowed value"),
                  T(s <= e, "value smaller than minimum allowed value");
              }
              function T(e, o) {
                if (!e) throw new Error(o || "Failed assertion");
              }
              m._augment = function (e) {
                return (
                  (e._isBuffer = !0),
                  (e._get = e.get),
                  (e._set = e.set),
                  (e.get = D.get),
                  (e.set = D.set),
                  (e.write = D.write),
                  (e.toString = D.toString),
                  (e.toLocaleString = D.toString),
                  (e.toJSON = D.toJSON),
                  (e.copy = D.copy),
                  (e.slice = D.slice),
                  (e.readUInt8 = D.readUInt8),
                  (e.readUInt16LE = D.readUInt16LE),
                  (e.readUInt16BE = D.readUInt16BE),
                  (e.readUInt32LE = D.readUInt32LE),
                  (e.readUInt32BE = D.readUInt32BE),
                  (e.readInt8 = D.readInt8),
                  (e.readInt16LE = D.readInt16LE),
                  (e.readInt16BE = D.readInt16BE),
                  (e.readInt32LE = D.readInt32LE),
                  (e.readInt32BE = D.readInt32BE),
                  (e.readFloatLE = D.readFloatLE),
                  (e.readFloatBE = D.readFloatBE),
                  (e.readDoubleLE = D.readDoubleLE),
                  (e.readDoubleBE = D.readDoubleBE),
                  (e.writeUInt8 = D.writeUInt8),
                  (e.writeUInt16LE = D.writeUInt16LE),
                  (e.writeUInt16BE = D.writeUInt16BE),
                  (e.writeUInt32LE = D.writeUInt32LE),
                  (e.writeUInt32BE = D.writeUInt32BE),
                  (e.writeInt8 = D.writeInt8),
                  (e.writeInt16LE = D.writeInt16LE),
                  (e.writeInt16BE = D.writeInt16BE),
                  (e.writeInt32LE = D.writeInt32LE),
                  (e.writeInt32BE = D.writeInt32BE),
                  (e.writeFloatLE = D.writeFloatLE),
                  (e.writeFloatBE = D.writeFloatBE),
                  (e.writeDoubleLE = D.writeDoubleLE),
                  (e.writeDoubleBE = D.writeDoubleBE),
                  (e.fill = D.fill),
                  (e.inspect = D.inspect),
                  (e.toArrayBuffer = D.toArrayBuffer),
                  e
                );
              };
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/buffer/index.js",
              "/node_modules/gulp-browserify/node_modules/buffer"
            );
          },
          { "base64-js": 2, buffer: 3, ieee754: 10, lYpoI2: 11 },
        ],
        4: [
          function (u, l, i) {
            (function (p, v, _, E, B, M, j, R, O) {
              var _ = u("buffer").Buffer,
                A = 4,
                m = new _(A);
              m.fill(0),
                (l.exports = {
                  hash: function (x, I, w, S) {
                    for (
                      var z = I(
                          (function (t, f) {
                            t.length % A != 0 &&
                              ((g = t.length + (A - (t.length % A))),
                              (t = _.concat([t, m], g)));
                            for (
                              var g,
                                N = [],
                                L = f ? t.readInt32BE : t.readInt32LE,
                                U = 0;
                              U < t.length;
                              U += A
                            )
                              N.push(L.call(t, U));
                            return N;
                          })((x = _.isBuffer(x) ? x : new _(x)), S),
                          8 * x.length
                        ),
                        I = S,
                        c = new _(w),
                        h = I ? c.writeInt32BE : c.writeInt32LE,
                        n = 0;
                      n < z.length;
                      n++
                    )
                      h.call(c, z[n], 4 * n, !0);
                    return c;
                  },
                });
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        5: [
          function (u, l, i) {
            (function (p, v, _, E, B, M, j, R, O) {
              var _ = u("buffer").Buffer,
                A = u("./sha"),
                m = u("./sha256"),
                x = u("./rng"),
                I = { sha1: A, sha256: m, md5: u("./md5") },
                w = 64,
                S = new _(w);
              function z(t, f) {
                var g = I[(t = t || "sha1")],
                  N = [];
                return (
                  g || c("algorithm:", t, "is not yet supported"),
                  {
                    update: function (L) {
                      return (
                        _.isBuffer(L) || (L = new _(L)),
                        N.push(L),
                        L.length,
                        this
                      );
                    },
                    digest: function (L) {
                      var U = _.concat(N),
                        U = f
                          ? (function (D, F, Y) {
                              _.isBuffer(F) || (F = new _(F)),
                                _.isBuffer(Y) || (Y = new _(Y)),
                                F.length > w
                                  ? (F = D(F))
                                  : F.length < w && (F = _.concat([F, S], w));
                              for (
                                var W = new _(w), H = new _(w), ne = 0;
                                ne < w;
                                ne++
                              )
                                (W[ne] = 54 ^ F[ne]), (H[ne] = 92 ^ F[ne]);
                              return (
                                (Y = D(_.concat([W, Y]))), D(_.concat([H, Y]))
                              );
                            })(g, f, U)
                          : g(U);
                      return (N = null), L ? U.toString(L) : U;
                    },
                  }
                );
              }
              function c() {
                var t = [].slice.call(arguments).join(" ");
                throw new Error(
                  [
                    t,
                    "we accept pull requests",
                    "http://github.com/dominictarr/crypto-browserify",
                  ].join(`
`)
                );
              }
              S.fill(0),
                (i.createHash = function (t) {
                  return z(t);
                }),
                (i.createHmac = z),
                (i.randomBytes = function (t, f) {
                  if (!f || !f.call) return new _(x(t));
                  try {
                    f.call(this, void 0, new _(x(t)));
                  } catch (g) {
                    f(g);
                  }
                });
              var h,
                n = [
                  "createCredentials",
                  "createCipher",
                  "createCipheriv",
                  "createDecipher",
                  "createDecipheriv",
                  "createSign",
                  "createVerify",
                  "createDiffieHellman",
                  "pbkdf2",
                ],
                a = function (t) {
                  i[t] = function () {
                    c("sorry,", t, "is not implemented yet");
                  };
                };
              for (h in n) a(n[h]);
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          {
            "./md5": 6,
            "./rng": 7,
            "./sha": 8,
            "./sha256": 9,
            buffer: 3,
            lYpoI2: 11,
          },
        ],
        6: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              var _ = u("./helpers");
              function A(c, h) {
                (c[h >> 5] |= 128 << h % 32),
                  (c[14 + (((h + 64) >>> 9) << 4)] = h);
                for (
                  var n = 1732584193,
                    a = -271733879,
                    t = -1732584194,
                    f = 271733878,
                    g = 0;
                  g < c.length;
                  g += 16
                ) {
                  var N = n,
                    L = a,
                    U = t,
                    D = f,
                    n = x(n, a, t, f, c[g + 0], 7, -680876936),
                    f = x(f, n, a, t, c[g + 1], 12, -389564586),
                    t = x(t, f, n, a, c[g + 2], 17, 606105819),
                    a = x(a, t, f, n, c[g + 3], 22, -1044525330);
                  (n = x(n, a, t, f, c[g + 4], 7, -176418897)),
                    (f = x(f, n, a, t, c[g + 5], 12, 1200080426)),
                    (t = x(t, f, n, a, c[g + 6], 17, -1473231341)),
                    (a = x(a, t, f, n, c[g + 7], 22, -45705983)),
                    (n = x(n, a, t, f, c[g + 8], 7, 1770035416)),
                    (f = x(f, n, a, t, c[g + 9], 12, -1958414417)),
                    (t = x(t, f, n, a, c[g + 10], 17, -42063)),
                    (a = x(a, t, f, n, c[g + 11], 22, -1990404162)),
                    (n = x(n, a, t, f, c[g + 12], 7, 1804603682)),
                    (f = x(f, n, a, t, c[g + 13], 12, -40341101)),
                    (t = x(t, f, n, a, c[g + 14], 17, -1502002290)),
                    (n = I(
                      n,
                      (a = x(a, t, f, n, c[g + 15], 22, 1236535329)),
                      t,
                      f,
                      c[g + 1],
                      5,
                      -165796510
                    )),
                    (f = I(f, n, a, t, c[g + 6], 9, -1069501632)),
                    (t = I(t, f, n, a, c[g + 11], 14, 643717713)),
                    (a = I(a, t, f, n, c[g + 0], 20, -373897302)),
                    (n = I(n, a, t, f, c[g + 5], 5, -701558691)),
                    (f = I(f, n, a, t, c[g + 10], 9, 38016083)),
                    (t = I(t, f, n, a, c[g + 15], 14, -660478335)),
                    (a = I(a, t, f, n, c[g + 4], 20, -405537848)),
                    (n = I(n, a, t, f, c[g + 9], 5, 568446438)),
                    (f = I(f, n, a, t, c[g + 14], 9, -1019803690)),
                    (t = I(t, f, n, a, c[g + 3], 14, -187363961)),
                    (a = I(a, t, f, n, c[g + 8], 20, 1163531501)),
                    (n = I(n, a, t, f, c[g + 13], 5, -1444681467)),
                    (f = I(f, n, a, t, c[g + 2], 9, -51403784)),
                    (t = I(t, f, n, a, c[g + 7], 14, 1735328473)),
                    (n = w(
                      n,
                      (a = I(a, t, f, n, c[g + 12], 20, -1926607734)),
                      t,
                      f,
                      c[g + 5],
                      4,
                      -378558
                    )),
                    (f = w(f, n, a, t, c[g + 8], 11, -2022574463)),
                    (t = w(t, f, n, a, c[g + 11], 16, 1839030562)),
                    (a = w(a, t, f, n, c[g + 14], 23, -35309556)),
                    (n = w(n, a, t, f, c[g + 1], 4, -1530992060)),
                    (f = w(f, n, a, t, c[g + 4], 11, 1272893353)),
                    (t = w(t, f, n, a, c[g + 7], 16, -155497632)),
                    (a = w(a, t, f, n, c[g + 10], 23, -1094730640)),
                    (n = w(n, a, t, f, c[g + 13], 4, 681279174)),
                    (f = w(f, n, a, t, c[g + 0], 11, -358537222)),
                    (t = w(t, f, n, a, c[g + 3], 16, -722521979)),
                    (a = w(a, t, f, n, c[g + 6], 23, 76029189)),
                    (n = w(n, a, t, f, c[g + 9], 4, -640364487)),
                    (f = w(f, n, a, t, c[g + 12], 11, -421815835)),
                    (t = w(t, f, n, a, c[g + 15], 16, 530742520)),
                    (n = S(
                      n,
                      (a = w(a, t, f, n, c[g + 2], 23, -995338651)),
                      t,
                      f,
                      c[g + 0],
                      6,
                      -198630844
                    )),
                    (f = S(f, n, a, t, c[g + 7], 10, 1126891415)),
                    (t = S(t, f, n, a, c[g + 14], 15, -1416354905)),
                    (a = S(a, t, f, n, c[g + 5], 21, -57434055)),
                    (n = S(n, a, t, f, c[g + 12], 6, 1700485571)),
                    (f = S(f, n, a, t, c[g + 3], 10, -1894986606)),
                    (t = S(t, f, n, a, c[g + 10], 15, -1051523)),
                    (a = S(a, t, f, n, c[g + 1], 21, -2054922799)),
                    (n = S(n, a, t, f, c[g + 8], 6, 1873313359)),
                    (f = S(f, n, a, t, c[g + 15], 10, -30611744)),
                    (t = S(t, f, n, a, c[g + 6], 15, -1560198380)),
                    (a = S(a, t, f, n, c[g + 13], 21, 1309151649)),
                    (n = S(n, a, t, f, c[g + 4], 6, -145523070)),
                    (f = S(f, n, a, t, c[g + 11], 10, -1120210379)),
                    (t = S(t, f, n, a, c[g + 2], 15, 718787259)),
                    (a = S(a, t, f, n, c[g + 9], 21, -343485551)),
                    (n = z(n, N)),
                    (a = z(a, L)),
                    (t = z(t, U)),
                    (f = z(f, D));
                }
                return Array(n, a, t, f);
              }
              function m(c, h, n, a, t, f) {
                return z(
                  ((h = z(z(h, c), z(a, f))) << t) | (h >>> (32 - t)),
                  n
                );
              }
              function x(c, h, n, a, t, f, g) {
                return m((h & n) | (~h & a), c, h, t, f, g);
              }
              function I(c, h, n, a, t, f, g) {
                return m((h & a) | (n & ~a), c, h, t, f, g);
              }
              function w(c, h, n, a, t, f, g) {
                return m(h ^ n ^ a, c, h, t, f, g);
              }
              function S(c, h, n, a, t, f, g) {
                return m(n ^ (h | ~a), c, h, t, f, g);
              }
              function z(c, h) {
                var n = (65535 & c) + (65535 & h);
                return (
                  (((c >> 16) + (h >> 16) + (n >> 16)) << 16) | (65535 & n)
                );
              }
              l.exports = function (c) {
                return _.hash(c, A, 16);
              };
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { "./helpers": 4, buffer: 3, lYpoI2: 11 },
        ],
        7: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              l.exports = function (_) {
                for (var A, m = new Array(_), x = 0; x < _; x++)
                  !(3 & x) && (A = 4294967296 * Math.random()),
                    (m[x] = (A >>> ((3 & x) << 3)) & 255);
                return m;
              };
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        8: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              var _ = u("./helpers");
              function A(I, w) {
                (I[w >> 5] |= 128 << (24 - (w % 32))),
                  (I[15 + (((w + 64) >> 9) << 4)] = w);
                for (
                  var S,
                    z,
                    c,
                    h = Array(80),
                    n = 1732584193,
                    a = -271733879,
                    t = -1732584194,
                    f = 271733878,
                    g = -1009589776,
                    N = 0;
                  N < I.length;
                  N += 16
                ) {
                  for (
                    var L = n, U = a, D = t, F = f, Y = g, W = 0;
                    W < 80;
                    W++
                  ) {
                    h[W] =
                      W < 16
                        ? I[N + W]
                        : x(h[W - 3] ^ h[W - 8] ^ h[W - 14] ^ h[W - 16], 1);
                    var H = m(
                        m(
                          x(n, 5),
                          ((H = a),
                          (z = t),
                          (c = f),
                          (S = W) < 20
                            ? (H & z) | (~H & c)
                            : !(S < 40) && S < 60
                            ? (H & z) | (H & c) | (z & c)
                            : H ^ z ^ c)
                        ),
                        m(
                          m(g, h[W]),
                          (S = W) < 20
                            ? 1518500249
                            : S < 40
                            ? 1859775393
                            : S < 60
                            ? -1894007588
                            : -899497514
                        )
                      ),
                      g = f,
                      f = t,
                      t = x(a, 30),
                      a = n,
                      n = H;
                  }
                  (n = m(n, L)),
                    (a = m(a, U)),
                    (t = m(t, D)),
                    (f = m(f, F)),
                    (g = m(g, Y));
                }
                return Array(n, a, t, f, g);
              }
              function m(I, w) {
                var S = (65535 & I) + (65535 & w);
                return (
                  (((I >> 16) + (w >> 16) + (S >> 16)) << 16) | (65535 & S)
                );
              }
              function x(I, w) {
                return (I << w) | (I >>> (32 - w));
              }
              l.exports = function (I) {
                return _.hash(I, A, 20, !0);
              };
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { "./helpers": 4, buffer: 3, lYpoI2: 11 },
        ],
        9: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              function _(w, S) {
                var z = (65535 & w) + (65535 & S);
                return (
                  (((w >> 16) + (S >> 16) + (z >> 16)) << 16) | (65535 & z)
                );
              }
              function A(w, S) {
                var z,
                  c = new Array(
                    1116352408,
                    1899447441,
                    3049323471,
                    3921009573,
                    961987163,
                    1508970993,
                    2453635748,
                    2870763221,
                    3624381080,
                    310598401,
                    607225278,
                    1426881987,
                    1925078388,
                    2162078206,
                    2614888103,
                    3248222580,
                    3835390401,
                    4022224774,
                    264347078,
                    604807628,
                    770255983,
                    1249150122,
                    1555081692,
                    1996064986,
                    2554220882,
                    2821834349,
                    2952996808,
                    3210313671,
                    3336571891,
                    3584528711,
                    113926993,
                    338241895,
                    666307205,
                    773529912,
                    1294757372,
                    1396182291,
                    1695183700,
                    1986661051,
                    2177026350,
                    2456956037,
                    2730485921,
                    2820302411,
                    3259730800,
                    3345764771,
                    3516065817,
                    3600352804,
                    4094571909,
                    275423344,
                    430227734,
                    506948616,
                    659060556,
                    883997877,
                    958139571,
                    1322822218,
                    1537002063,
                    1747873779,
                    1955562222,
                    2024104815,
                    2227730452,
                    2361852424,
                    2428436474,
                    2756734187,
                    3204031479,
                    3329325298
                  ),
                  h = new Array(
                    1779033703,
                    3144134277,
                    1013904242,
                    2773480762,
                    1359893119,
                    2600822924,
                    528734635,
                    1541459225
                  ),
                  n = new Array(64);
                (w[S >> 5] |= 128 << (24 - (S % 32))),
                  (w[15 + (((S + 64) >> 9) << 4)] = S);
                for (var a, t, f = 0; f < w.length; f += 16) {
                  for (
                    var g = h[0],
                      N = h[1],
                      L = h[2],
                      U = h[3],
                      D = h[4],
                      F = h[5],
                      Y = h[6],
                      W = h[7],
                      H = 0;
                    H < 64;
                    H++
                  )
                    (n[H] =
                      H < 16
                        ? w[H + f]
                        : _(
                            _(
                              _(
                                ((t = n[H - 2]),
                                x(t, 17) ^ x(t, 19) ^ I(t, 10)),
                                n[H - 7]
                              ),
                              ((t = n[H - 15]), x(t, 7) ^ x(t, 18) ^ I(t, 3))
                            ),
                            n[H - 16]
                          )),
                      (z = _(
                        _(
                          _(
                            _(W, x((t = D), 6) ^ x(t, 11) ^ x(t, 25)),
                            (D & F) ^ (~D & Y)
                          ),
                          c[H]
                        ),
                        n[H]
                      )),
                      (a = _(
                        x((a = g), 2) ^ x(a, 13) ^ x(a, 22),
                        (g & N) ^ (g & L) ^ (N & L)
                      )),
                      (W = Y),
                      (Y = F),
                      (F = D),
                      (D = _(U, z)),
                      (U = L),
                      (L = N),
                      (N = g),
                      (g = _(z, a));
                  (h[0] = _(g, h[0])),
                    (h[1] = _(N, h[1])),
                    (h[2] = _(L, h[2])),
                    (h[3] = _(U, h[3])),
                    (h[4] = _(D, h[4])),
                    (h[5] = _(F, h[5])),
                    (h[6] = _(Y, h[6])),
                    (h[7] = _(W, h[7]));
                }
                return h;
              }
              var m = u("./helpers"),
                x = function (w, S) {
                  return (w >>> S) | (w << (32 - S));
                },
                I = function (w, S) {
                  return w >>> S;
                };
              l.exports = function (w) {
                return m.hash(w, A, 32, !0);
              };
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js",
              "/node_modules/gulp-browserify/node_modules/crypto-browserify"
            );
          },
          { "./helpers": 4, buffer: 3, lYpoI2: 11 },
        ],
        10: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              (i.read = function (_, A, m, x, f) {
                var w,
                  S,
                  z = 8 * f - x - 1,
                  c = (1 << z) - 1,
                  h = c >> 1,
                  n = -7,
                  a = m ? f - 1 : 0,
                  t = m ? -1 : 1,
                  f = _[A + a];
                for (
                  a += t, w = f & ((1 << -n) - 1), f >>= -n, n += z;
                  0 < n;
                  w = 256 * w + _[A + a], a += t, n -= 8
                );
                for (
                  S = w & ((1 << -n) - 1), w >>= -n, n += x;
                  0 < n;
                  S = 256 * S + _[A + a], a += t, n -= 8
                );
                if (w === 0) w = 1 - h;
                else {
                  if (w === c) return S ? NaN : (1 / 0) * (f ? -1 : 1);
                  (S += Math.pow(2, x)), (w -= h);
                }
                return (f ? -1 : 1) * S * Math.pow(2, w - x);
              }),
                (i.write = function (_, A, m, x, I, g) {
                  var S,
                    z,
                    c = 8 * g - I - 1,
                    h = (1 << c) - 1,
                    n = h >> 1,
                    a = I === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    t = x ? 0 : g - 1,
                    f = x ? 1 : -1,
                    g = A < 0 || (A === 0 && 1 / A < 0) ? 1 : 0;
                  for (
                    A = Math.abs(A),
                      isNaN(A) || A === 1 / 0
                        ? ((z = isNaN(A) ? 1 : 0), (S = h))
                        : ((S = Math.floor(Math.log(A) / Math.LN2)),
                          A * (x = Math.pow(2, -S)) < 1 && (S--, (x *= 2)),
                          2 <=
                            (A += 1 <= S + n ? a / x : a * Math.pow(2, 1 - n)) *
                              x && (S++, (x /= 2)),
                          h <= S + n
                            ? ((z = 0), (S = h))
                            : 1 <= S + n
                            ? ((z = (A * x - 1) * Math.pow(2, I)), (S += n))
                            : ((z = A * Math.pow(2, n - 1) * Math.pow(2, I)),
                              (S = 0)));
                    8 <= I;
                    _[m + t] = 255 & z, t += f, z /= 256, I -= 8
                  );
                  for (
                    S = (S << I) | z, c += I;
                    0 < c;
                    _[m + t] = 255 & S, t += f, S /= 256, c -= 8
                  );
                  _[m + t - f] |= 128 * g;
                });
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/ieee754/index.js",
              "/node_modules/gulp-browserify/node_modules/ieee754"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
        11: [
          function (u, l, i) {
            (function (p, v, P, E, B, M, j, R, O) {
              var _, A, m;
              function x() {}
              ((p = l.exports = {}).nextTick =
                ((A = typeof window < "u" && window.setImmediate),
                (m =
                  typeof window < "u" &&
                  window.postMessage &&
                  window.addEventListener),
                A
                  ? function (I) {
                      return window.setImmediate(I);
                    }
                  : m
                  ? ((_ = []),
                    window.addEventListener(
                      "message",
                      function (I) {
                        var w = I.source;
                        (w !== window && w !== null) ||
                          I.data !== "process-tick" ||
                          (I.stopPropagation(), 0 < _.length && _.shift()());
                      },
                      !0
                    ),
                    function (I) {
                      _.push(I), window.postMessage("process-tick", "*");
                    })
                  : function (I) {
                      setTimeout(I, 0);
                    })),
                (p.title = "browser"),
                (p.browser = !0),
                (p.env = {}),
                (p.argv = []),
                (p.on = x),
                (p.addListener = x),
                (p.once = x),
                (p.off = x),
                (p.removeListener = x),
                (p.removeAllListeners = x),
                (p.emit = x),
                (p.binding = function (I) {
                  throw new Error("process.binding is not supported");
                }),
                (p.cwd = function () {
                  return "/";
                }),
                (p.chdir = function (I) {
                  throw new Error("process.chdir is not supported");
                });
            }).call(
              this,
              u("lYpoI2"),
              typeof self < "u" ? self : typeof window < "u" ? window : {},
              u("buffer").Buffer,
              arguments[3],
              arguments[4],
              arguments[5],
              arguments[6],
              "/node_modules/gulp-browserify/node_modules/process/browser.js",
              "/node_modules/gulp-browserify/node_modules/process"
            );
          },
          { buffer: 3, lYpoI2: 11 },
        ],
      },
      {},
      [1]
    )(1);
  });
})(Ke);
var Gt = Ke.exports;
const Wt = be(Gt);
var Xe = [
    "precision",
    "highp",
    "mediump",
    "lowp",
    "attribute",
    "const",
    "uniform",
    "varying",
    "break",
    "continue",
    "do",
    "for",
    "while",
    "if",
    "else",
    "in",
    "out",
    "inout",
    "float",
    "int",
    "uint",
    "void",
    "bool",
    "true",
    "false",
    "discard",
    "return",
    "mat2",
    "mat3",
    "mat4",
    "vec2",
    "vec3",
    "vec4",
    "ivec2",
    "ivec3",
    "ivec4",
    "bvec2",
    "bvec3",
    "bvec4",
    "sampler1D",
    "sampler2D",
    "sampler3D",
    "samplerCube",
    "sampler1DShadow",
    "sampler2DShadow",
    "struct",
    "asm",
    "class",
    "union",
    "enum",
    "typedef",
    "template",
    "this",
    "packed",
    "goto",
    "switch",
    "default",
    "inline",
    "noinline",
    "volatile",
    "public",
    "static",
    "extern",
    "external",
    "interface",
    "long",
    "short",
    "double",
    "half",
    "fixed",
    "unsigned",
    "input",
    "output",
    "hvec2",
    "hvec3",
    "hvec4",
    "dvec2",
    "dvec3",
    "dvec4",
    "fvec2",
    "fvec3",
    "fvec4",
    "sampler2DRect",
    "sampler3DRect",
    "sampler2DRectShadow",
    "sizeof",
    "cast",
    "namespace",
    "using",
  ],
  Yt = [
    "<<=",
    ">>=",
    "++",
    "--",
    "<<",
    ">>",
    "<=",
    ">=",
    "==",
    "!=",
    "&&",
    "||",
    "+=",
    "-=",
    "*=",
    "/=",
    "%=",
    "&=",
    "^^",
    "^=",
    "|=",
    "(",
    ")",
    "[",
    "]",
    ".",
    "!",
    "~",
    "*",
    "/",
    "%",
    "+",
    "-",
    "<",
    ">",
    "&",
    "^",
    "|",
    "?",
    ":",
    "=",
    ",",
    ";",
    "{",
    "}",
  ],
  Qe = [
    "abs",
    "acos",
    "all",
    "any",
    "asin",
    "atan",
    "ceil",
    "clamp",
    "cos",
    "cross",
    "dFdx",
    "dFdy",
    "degrees",
    "distance",
    "dot",
    "equal",
    "exp",
    "exp2",
    "faceforward",
    "floor",
    "fract",
    "gl_BackColor",
    "gl_BackLightModelProduct",
    "gl_BackLightProduct",
    "gl_BackMaterial",
    "gl_BackSecondaryColor",
    "gl_ClipPlane",
    "gl_ClipVertex",
    "gl_Color",
    "gl_DepthRange",
    "gl_DepthRangeParameters",
    "gl_EyePlaneQ",
    "gl_EyePlaneR",
    "gl_EyePlaneS",
    "gl_EyePlaneT",
    "gl_Fog",
    "gl_FogCoord",
    "gl_FogFragCoord",
    "gl_FogParameters",
    "gl_FragColor",
    "gl_FragCoord",
    "gl_FragData",
    "gl_FragDepth",
    "gl_FragDepthEXT",
    "gl_FrontColor",
    "gl_FrontFacing",
    "gl_FrontLightModelProduct",
    "gl_FrontLightProduct",
    "gl_FrontMaterial",
    "gl_FrontSecondaryColor",
    "gl_LightModel",
    "gl_LightModelParameters",
    "gl_LightModelProducts",
    "gl_LightProducts",
    "gl_LightSource",
    "gl_LightSourceParameters",
    "gl_MaterialParameters",
    "gl_MaxClipPlanes",
    "gl_MaxCombinedTextureImageUnits",
    "gl_MaxDrawBuffers",
    "gl_MaxFragmentUniformComponents",
    "gl_MaxLights",
    "gl_MaxTextureCoords",
    "gl_MaxTextureImageUnits",
    "gl_MaxTextureUnits",
    "gl_MaxVaryingFloats",
    "gl_MaxVertexAttribs",
    "gl_MaxVertexTextureImageUnits",
    "gl_MaxVertexUniformComponents",
    "gl_ModelViewMatrix",
    "gl_ModelViewMatrixInverse",
    "gl_ModelViewMatrixInverseTranspose",
    "gl_ModelViewMatrixTranspose",
    "gl_ModelViewProjectionMatrix",
    "gl_ModelViewProjectionMatrixInverse",
    "gl_ModelViewProjectionMatrixInverseTranspose",
    "gl_ModelViewProjectionMatrixTranspose",
    "gl_MultiTexCoord0",
    "gl_MultiTexCoord1",
    "gl_MultiTexCoord2",
    "gl_MultiTexCoord3",
    "gl_MultiTexCoord4",
    "gl_MultiTexCoord5",
    "gl_MultiTexCoord6",
    "gl_MultiTexCoord7",
    "gl_Normal",
    "gl_NormalMatrix",
    "gl_NormalScale",
    "gl_ObjectPlaneQ",
    "gl_ObjectPlaneR",
    "gl_ObjectPlaneS",
    "gl_ObjectPlaneT",
    "gl_Point",
    "gl_PointCoord",
    "gl_PointParameters",
    "gl_PointSize",
    "gl_Position",
    "gl_ProjectionMatrix",
    "gl_ProjectionMatrixInverse",
    "gl_ProjectionMatrixInverseTranspose",
    "gl_ProjectionMatrixTranspose",
    "gl_SecondaryColor",
    "gl_TexCoord",
    "gl_TextureEnvColor",
    "gl_TextureMatrix",
    "gl_TextureMatrixInverse",
    "gl_TextureMatrixInverseTranspose",
    "gl_TextureMatrixTranspose",
    "gl_Vertex",
    "greaterThan",
    "greaterThanEqual",
    "inversesqrt",
    "length",
    "lessThan",
    "lessThanEqual",
    "log",
    "log2",
    "matrixCompMult",
    "max",
    "min",
    "mix",
    "mod",
    "normalize",
    "not",
    "notEqual",
    "pow",
    "radians",
    "reflect",
    "refract",
    "sign",
    "sin",
    "smoothstep",
    "sqrt",
    "step",
    "tan",
    "texture2D",
    "texture2DLod",
    "texture2DProj",
    "texture2DProjLod",
    "textureCube",
    "textureCubeLod",
    "texture2DLodEXT",
    "texture2DProjLodEXT",
    "textureCubeLodEXT",
    "texture2DGradEXT",
    "texture2DProjGradEXT",
    "textureCubeGradEXT",
  ],
  qt = Xe,
  Kt = qt
    .slice()
    .concat([
      "layout",
      "centroid",
      "smooth",
      "case",
      "mat2x2",
      "mat2x3",
      "mat2x4",
      "mat3x2",
      "mat3x3",
      "mat3x4",
      "mat4x2",
      "mat4x3",
      "mat4x4",
      "uvec2",
      "uvec3",
      "uvec4",
      "samplerCubeShadow",
      "sampler2DArray",
      "sampler2DArrayShadow",
      "isampler2D",
      "isampler3D",
      "isamplerCube",
      "isampler2DArray",
      "usampler2D",
      "usampler3D",
      "usamplerCube",
      "usampler2DArray",
      "coherent",
      "restrict",
      "readonly",
      "writeonly",
      "resource",
      "atomic_uint",
      "noperspective",
      "patch",
      "sample",
      "subroutine",
      "common",
      "partition",
      "active",
      "filter",
      "image1D",
      "image2D",
      "image3D",
      "imageCube",
      "iimage1D",
      "iimage2D",
      "iimage3D",
      "iimageCube",
      "uimage1D",
      "uimage2D",
      "uimage3D",
      "uimageCube",
      "image1DArray",
      "image2DArray",
      "iimage1DArray",
      "iimage2DArray",
      "uimage1DArray",
      "uimage2DArray",
      "image1DShadow",
      "image2DShadow",
      "image1DArrayShadow",
      "image2DArrayShadow",
      "imageBuffer",
      "iimageBuffer",
      "uimageBuffer",
      "sampler1DArray",
      "sampler1DArrayShadow",
      "isampler1D",
      "isampler1DArray",
      "usampler1D",
      "usampler1DArray",
      "isampler2DRect",
      "usampler2DRect",
      "samplerBuffer",
      "isamplerBuffer",
      "usamplerBuffer",
      "sampler2DMS",
      "isampler2DMS",
      "usampler2DMS",
      "sampler2DMSArray",
      "isampler2DMSArray",
      "usampler2DMSArray",
    ]),
  Ce = Qe;
Ce = Ce.slice().filter(function (d) {
  return !/^(gl\_|texture)/.test(d);
});
var Xt = Ce.concat([
    "gl_VertexID",
    "gl_InstanceID",
    "gl_Position",
    "gl_PointSize",
    "gl_FragCoord",
    "gl_FrontFacing",
    "gl_FragDepth",
    "gl_PointCoord",
    "gl_MaxVertexAttribs",
    "gl_MaxVertexUniformVectors",
    "gl_MaxVertexOutputVectors",
    "gl_MaxFragmentInputVectors",
    "gl_MaxVertexTextureImageUnits",
    "gl_MaxCombinedTextureImageUnits",
    "gl_MaxTextureImageUnits",
    "gl_MaxFragmentUniformVectors",
    "gl_MaxDrawBuffers",
    "gl_MinProgramTexelOffset",
    "gl_MaxProgramTexelOffset",
    "gl_DepthRangeParameters",
    "gl_DepthRange",
    "trunc",
    "round",
    "roundEven",
    "isnan",
    "isinf",
    "floatBitsToInt",
    "floatBitsToUint",
    "intBitsToFloat",
    "uintBitsToFloat",
    "packSnorm2x16",
    "unpackSnorm2x16",
    "packUnorm2x16",
    "unpackUnorm2x16",
    "packHalf2x16",
    "unpackHalf2x16",
    "outerProduct",
    "transpose",
    "determinant",
    "inverse",
    "texture",
    "textureSize",
    "textureProj",
    "textureLod",
    "textureOffset",
    "texelFetch",
    "texelFetchOffset",
    "textureProjOffset",
    "textureLodOffset",
    "textureProjLod",
    "textureProjLodOffset",
    "textureGrad",
    "textureGradOffset",
    "textureProjGrad",
    "textureProjGradOffset",
  ]),
  Qt = ar,
  $t = Xe,
  Fe = Yt,
  Jt = Qe,
  Zt = Kt,
  er = Xt,
  re = 999,
  je = 9999,
  Te = 0,
  Ie = 1,
  Ne = 2,
  Ue = 3,
  Re = 4,
  fe = 5,
  tr = 6,
  rr = 7,
  nr = 8,
  Ve = 9,
  or = 10,
  ke = 11,
  ir = [
    "block-comment",
    "line-comment",
    "preprocessor",
    "operator",
    "integer",
    "float",
    "ident",
    "builtin",
    "keyword",
    "whitespace",
    "eof",
    "integer",
  ];
function ar(d) {
  var r = 0,
    u = 0,
    l = re,
    i,
    p,
    v = [],
    P = [],
    E = 1,
    B = 0,
    M = 0,
    j = !1,
    R = !1,
    O = "",
    _;
  d = d || {};
  var A = Jt,
    m = $t;
  d.version === "300 es" && ((A = er), (m = Zt));
  for (var x = {}, I = {}, r = 0; r < A.length; r++) x[A[r]] = !0;
  for (var r = 0; r < m.length; r++) I[m[r]] = !0;
  return function (F) {
    return (P = []), F !== null ? S(F) : z();
  };
  function w(F) {
    F.length &&
      P.push({ type: ir[l], data: F, position: M, line: E, column: B });
  }
  function S(F) {
    (r = 0),
      F.toString && (F = F.toString()),
      (O += F.replace(
        /\r\n/g,
        `
`
      )),
      (_ = O.length);
    for (var Y; (i = O[r]), r < _; ) {
      switch (((Y = r), l)) {
        case Te:
          r = t();
          break;
        case Ie:
          r = a();
          break;
        case Ne:
          r = n();
          break;
        case Ue:
          r = f();
          break;
        case Re:
          r = L();
          break;
        case ke:
          r = N();
          break;
        case fe:
          r = U();
          break;
        case je:
          r = D();
          break;
        case Ve:
          r = h();
          break;
        case re:
          r = c();
          break;
      }
      if (Y !== r)
        switch (O[Y]) {
          case `
`:
            (B = 0), ++E;
            break;
          default:
            ++B;
            break;
        }
    }
    return (u += r), (O = O.slice(r)), P;
  }
  function z(F) {
    return v.length && w(v.join("")), (l = or), w("(eof)"), P;
  }
  function c() {
    return (
      (v = v.length ? [] : v),
      p === "/" && i === "*"
        ? ((M = u + r - 1), (l = Te), (p = i), r + 1)
        : p === "/" && i === "/"
        ? ((M = u + r - 1), (l = Ie), (p = i), r + 1)
        : i === "#"
        ? ((l = Ne), (M = u + r), r)
        : /\s/.test(i)
        ? ((l = Ve), (M = u + r), r)
        : ((j = /\d/.test(i)),
          (R = /[^\w_]/.test(i)),
          (M = u + r),
          (l = j ? Re : R ? Ue : je),
          r)
    );
  }
  function h() {
    return /[^\s]/g.test(i)
      ? (w(v.join("")), (l = re), r)
      : (v.push(i), (p = i), r + 1);
  }
  function n() {
    return (i === "\r" ||
      i ===
        `
`) &&
      p !== "\\"
      ? (w(v.join("")), (l = re), r)
      : (v.push(i), (p = i), r + 1);
  }
  function a() {
    return n();
  }
  function t() {
    return i === "/" && p === "*"
      ? (v.push(i), w(v.join("")), (l = re), r + 1)
      : (v.push(i), (p = i), r + 1);
  }
  function f() {
    if (p === "." && /\d/.test(i)) return (l = fe), r;
    if (p === "/" && i === "*") return (l = Te), r;
    if (p === "/" && i === "/") return (l = Ie), r;
    if (i === "." && v.length) {
      for (; g(v); );
      return (l = fe), r;
    }
    if (i === ";" || i === ")" || i === "(") {
      if (v.length) for (; g(v); );
      return w(i), (l = re), r + 1;
    }
    var F = v.length === 2 && i !== "=";
    if (/[\w_\d\s]/.test(i) || F) {
      for (; g(v); );
      return (l = re), r;
    }
    return v.push(i), (p = i), r + 1;
  }
  function g(F) {
    var Y = 0,
      W,
      H;
    do {
      if (
        ((W = Fe.indexOf(F.slice(0, F.length + Y).join(""))),
        (H = Fe[W]),
        W === -1)
      ) {
        if (Y-- + F.length > 0) continue;
        H = F.slice(0, 1).join("");
      }
      return w(H), (M += H.length), (v = v.slice(H.length)), v.length;
    } while (1);
  }
  function N() {
    return /[^a-fA-F0-9]/.test(i)
      ? (w(v.join("")), (l = re), r)
      : (v.push(i), (p = i), r + 1);
  }
  function L() {
    return i === "." || /[eE]/.test(i)
      ? (v.push(i), (l = fe), (p = i), r + 1)
      : i === "x" && v.length === 1 && v[0] === "0"
      ? ((l = ke), v.push(i), (p = i), r + 1)
      : /[^\d]/.test(i)
      ? (w(v.join("")), (l = re), r)
      : (v.push(i), (p = i), r + 1);
  }
  function U() {
    return (
      i === "f" && (v.push(i), (p = i), (r += 1)),
      /[eE]/.test(i) || ((i === "-" || i === "+") && /[eE]/.test(p))
        ? (v.push(i), (p = i), r + 1)
        : /[^\d]/.test(i)
        ? (w(v.join("")), (l = re), r)
        : (v.push(i), (p = i), r + 1)
    );
  }
  function D() {
    if (/[^\d\w_]/.test(i)) {
      var F = v.join("");
      return (
        I[F] ? (l = nr) : x[F] ? (l = rr) : (l = tr), w(v.join("")), (l = re), r
      );
    }
    return v.push(i), (p = i), r + 1;
  }
}
var sr = Qt,
  lr = ur;
function ur(d, r) {
  var u = sr(r),
    l = [];
  return (l = l.concat(u(d))), (l = l.concat(u(null))), l;
}
const cr = be(lr);
var fr = pr;
function pr(d) {
  for (var r = [], u = 0; u < d.length; u++)
    d[u].type !== "eof" && r.push(d[u].data);
  return r.join("");
}
const He = be(fr);
var dr = gr;
function gr(d) {
  var r = null,
    u = null,
    l = 0,
    i = 0,
    p = 0,
    v = 0,
    P = 0,
    E = [],
    B,
    M,
    j;
  for (B = 0, M; B < d.length; B++)
    if (((j = d[B]), j.data === "{")) {
      if (
        (l && l++) ||
        ((M = O(B, ie(")"), ie())), M < 0) ||
        ((v = M), (M = O(M, ie("("), ie(")"))), M < 0) ||
        ((P = M), (M = O(M, pe)), M < 0) ||
        d[M].type !== "ident" ||
        ((u = d[M].data), (M = O(M, pe)), M < 0)
      )
        continue;
      (l = 1), (i = B), (r = d[M].data), (p = M);
      var R = O(M, pe);
      switch (d[R] && d[R].data) {
        case "lowp":
        case "highp":
        case "mediump":
          p = R;
      }
    } else if (l && j.data === "}") {
      if (--l) continue;
      E.push({
        name: u,
        type: r,
        body: [i + 1, B],
        args: [P, v + 1],
        outer: [p, B + 1],
      });
    }
  for (B = 0; B < d.length; B++)
    if (((j = d[B]), j.data === ";")) {
      if (
        ((M = O(B, ie(")"), ie())),
        M < 0 ||
          ((v = M), (M = O(M, ie("("), ie(")"))), M < 0) ||
          ((P = M), (M = O(M, pe)), M < 0) ||
          d[M].type !== "ident" ||
          ((u = d[M].data), (M = O(M, pe)), M < 0) ||
          d[M].type === "operator" ||
          d[M].data === "return")
      )
        continue;
      (r = d[M].data),
        E.push({
          name: u,
          type: r,
          body: !1,
          args: [P, v + 1],
          outer: [M, B + 1],
        });
    }
  return E.sort(function (_, A) {
    return _.outer[0] - A.outer[0];
  });
  function O(_, A, m) {
    for (var x = _ - 1; x >= 0; x--) {
      if (A(d[x])) return x;
      if (m && m(d[x])) return -1;
    }
    return -1;
  }
}
function ie(d) {
  return function (r) {
    return r.type === "operator" && (!d || r.data === d);
  };
}
function pe(d) {
  return d.type !== "whitespace";
}
const mr = be(dr);
function hr(d, r) {
  if (typeof d != "object" || d === null) return d;
  var u = d[Symbol.toPrimitive];
  if (u !== void 0) {
    var l = u.call(d, r || "default");
    if (typeof l != "object") return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(d);
}
function $e(d) {
  var r = hr(d, "string");
  return typeof r == "symbol" ? r : String(r);
}
function G(d, r, u) {
  return (
    (r = $e(r)),
    r in d
      ? Object.defineProperty(d, r, {
          value: u,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (d[r] = u),
    d
  );
}
function Ge(d, r) {
  var u = Object.keys(d);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(d);
    r &&
      (l = l.filter(function (i) {
        return Object.getOwnPropertyDescriptor(d, i).enumerable;
      })),
      u.push.apply(u, l);
  }
  return u;
}
function se(d) {
  for (var r = 1; r < arguments.length; r++) {
    var u = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Ge(Object(u), !0).forEach(function (l) {
          G(d, l, u[l]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(u))
      : Ge(Object(u)).forEach(function (l) {
          Object.defineProperty(d, l, Object.getOwnPropertyDescriptor(u, l));
        });
  }
  return d;
}
function vr(d, r) {
  if (d == null) return {};
  var u = {},
    l = Object.keys(d),
    i,
    p;
  for (p = 0; p < l.length; p++)
    (i = l[p]), !(r.indexOf(i) >= 0) && (u[i] = d[i]);
  return u;
}
function yr(d, r) {
  if (d == null) return {};
  var u = vr(d, r),
    l,
    i;
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(d);
    for (i = 0; i < p.length; i++)
      (l = p[i]),
        !(r.indexOf(l) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(d, l) &&
          (u[l] = d[l]);
  }
  return u;
}
function br(d, r) {
  if (!(d instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function We(d, r) {
  for (var u = 0; u < r.length; u++) {
    var l = r[u];
    (l.enumerable = l.enumerable || !1),
      (l.configurable = !0),
      "value" in l && (l.writable = !0),
      Object.defineProperty(d, $e(l.key), l);
  }
}
function _r(d, r, u) {
  return (
    r && We(d.prototype, r),
    u && We(d, u),
    Object.defineProperty(d, "prototype", { writable: !1 }),
    d
  );
}
function Je(d) {
  if (d === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return d;
}
function Pe(d, r) {
  return (
    (Pe = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (l, i) {
          return (l.__proto__ = i), l;
        }),
    Pe(d, r)
  );
}
function xr(d, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Super expression must either be null or a function");
  (d.prototype = Object.create(r && r.prototype, {
    constructor: { value: d, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(d, "prototype", { writable: !1 }),
    r && Pe(d, r);
}
function ye(d) {
  return (
    (ye = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (u) {
          return u.__proto__ || Object.getPrototypeOf(u);
        }),
    ye(d)
  );
}
function wr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function Mr(d, r) {
  if (r && (typeof r == "object" || typeof r == "function")) return r;
  if (r !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Je(d);
}
function Sr(d) {
  var r = wr();
  return function () {
    var l = ye(d),
      i;
    if (r) {
      var p = ye(this).constructor;
      i = Reflect.construct(l, arguments, p);
    } else i = l.apply(this, arguments);
    return Mr(this, i);
  };
}
var V = {
    position: "csm_Position",
    positionRaw: "csm_PositionRaw",
    pointSize: "csm_PointSize",
    fragColor: "csm_FragColor",
    diffuseColor: "csm_DiffuseColor",
    normal: "csm_Normal",
    roughness: "csm_Roughness",
    metalness: "csm_Metalness",
    emissive: "csm_Emissive",
    ao: "csm_AO",
    bump: "csm_Bump",
  },
  Z,
  le,
  Er =
    ((Z = {}),
    G(Z, "".concat(V.normal), {
      "#include <beginnormal_vertex>": `
    vec3 objectNormal = `.concat(
        V.normal,
        `;
    #ifdef USE_TANGENT
	    vec3 objectTangent = vec3( tangent.xyz );
    #endif
    `
      ),
    }),
    G(Z, "".concat(V.position), {
      "#include <begin_vertex>": `
    vec3 transformed = `.concat(
        V.position,
        `;
  `
      ),
    }),
    G(Z, "".concat(V.positionRaw), {
      "#include <begin_vertex>": `
    vec4 csm_internal_positionUnprojected = `.concat(
        V.positionRaw,
        `;
    mat4x4 csm_internal_unprojectMatrix = projectionMatrix * modelViewMatrix;
    #ifdef USE_INSTANCING
      csm_internal_unprojectMatrix = csm_internal_unprojectMatrix * instanceMatrix;
    #endif
    csm_internal_positionUnprojected = inverse(csm_internal_unprojectMatrix) * csm_internal_positionUnprojected;
    vec3 transformed = csm_internal_positionUnprojected.xyz;
  `
      ),
    }),
    G(Z, "".concat(V.pointSize), {
      "gl_PointSize = size;": `
    gl_PointSize = `.concat(
        V.pointSize,
        `;
    `
      ),
    }),
    G(Z, "".concat(V.diffuseColor), {
      "#include <color_fragment>": `
    #include <color_fragment>
    diffuseColor = `.concat(
        V.diffuseColor,
        `;
  `
      ),
    }),
    G(Z, "".concat(V.fragColor), {
      "#include <dithering_fragment>": `
    #include <dithering_fragment>
    gl_FragColor  = `.concat(
        V.fragColor,
        `;
  `
      ),
    }),
    G(Z, "".concat(V.emissive), {
      "vec3 totalEmissiveRadiance = emissive;": `
    vec3 totalEmissiveRadiance = `.concat(
        V.emissive,
        `;
    `
      ),
    }),
    G(Z, "".concat(V.roughness), {
      "#include <roughnessmap_fragment>": `
    #include <roughnessmap_fragment>
    roughnessFactor = `.concat(
        V.roughness,
        `;
    `
      ),
    }),
    G(Z, "".concat(V.metalness), {
      "#include <metalnessmap_fragment>": `
    #include <metalnessmap_fragment>
    metalnessFactor = `.concat(
        V.metalness,
        `;
    `
      ),
    }),
    G(Z, "".concat(V.ao), {
      "#include <aomap_fragment>": `
    #include <aomap_fragment>
    reflectedLight.indirectDiffuse *= 1. - `.concat(
        V.ao,
        `;
    `
      ),
    }),
    G(Z, "".concat(V.bump), {
      "#include <normal_fragment_maps>": `
    #include <normal_fragment_maps>

    vec3 csm_internal_orthogonal = `
        .concat(V.bump, " - (dot(")
        .concat(
          V.bump,
          `, normal) * normal);
    vec3 csm_internal_projectedbump = mat3(csm_internal_vModelViewMatrix) * csm_internal_orthogonal;
    normal = normalize(normal - csm_internal_projectedbump);
    `
        ),
    }),
    Z),
  Tr =
    ((le = {}),
    G(le, "".concat(V.position), {
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":
        `
    gl_Position = projectionMatrix * modelViewMatrix * vec4( `.concat(
          V.position,
          `, 1.0 );
  `
        ),
    }),
    G(le, "".concat(V.positionRaw), {
      "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );":
        `
    gl_Position = `.concat(
          V.position,
          `;
  `
        ),
    }),
    G(le, "".concat(V.diffuseColor), {
      "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(
        V.diffuseColor,
        `;
  `
      ),
    }),
    G(le, "".concat(V.fragColor), {
      "gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );": `
    gl_FragColor = `.concat(
        V.fragColor,
        `;
  `
      ),
    }),
    le),
  Ir = `

#ifdef IS_VERTEX
    // csm_Position & csm_PositionRaw
    #ifdef IS_UNKNOWN
        vec3 csm_Position = vec3(0.);
        vec4 csm_PositionRaw = vec4(0.);
        vec3 csm_Normal = vec3(0.);
    #else
        vec3 csm_Position = position;
        vec4 csm_PositionRaw = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        vec3 csm_Normal = normal;
    #endif

    // csm_PointSize
    #ifdef IS_POINTSMATERIAL
        float csm_PointSize = size;
    #endif
#else
    // csm_DiffuseColor & csm_FragColor
    #if defined IS_UNKNOWN || defined IS_SHADERMATERIAL || defined IS_MESHDEPTHMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_SHADOWMATERIAL
        vec4 csm_DiffuseColor = vec4(1., 0., 1., 1.);
        vec4 csm_FragColor = vec4(1., 0., 1., 1.);
    #else
        #ifdef USE_MAP
            vec4 _csm_sampledDiffuseColor = texture2D(map, vMapUv);

            #ifdef DECODE_VIDEO_TEXTURE
            // inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)
            _csm_sampledDiffuseColor = vec4(mix(pow(_csm_sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), _csm_sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(_csm_sampledDiffuseColor.rgb, vec3(0.04045)))), _csm_sampledDiffuseColor.w);
            #endif

            vec4 csm_DiffuseColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
            vec4 csm_FragColor = vec4(diffuse, opacity) * _csm_sampledDiffuseColor;
        #else
            vec4 csm_DiffuseColor = vec4(diffuse, opacity);
            vec4 csm_FragColor = vec4(diffuse, opacity);
        #endif
    #endif

    // csm_Emissive, csm_Roughness, csm_Metalness
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL
        vec3 csm_Emissive = emissive;
        float csm_Roughness = roughness;
        float csm_Metalness = metalness;
    #endif

    // csm_AO
    #if defined IS_MESHSTANDARDMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHBASICMATERIAL || defined IS_MESHLAMBERTMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHTOONMATERIAL
        float csm_AO = 0.;
    #endif

    // csm_Bump
    #if defined IS_MESHLAMBERTMATERIAL || defined IS_MESHMATCAPMATERIAL || defined IS_MESHNORMALMATERIAL || defined IS_MESHPHONGMATERIAL || defined IS_MESHPHYSICALMATERIAL || defined IS_MESHSTANDARDMATERIAL || defined IS_MESHTOONMATERIAL || defined IS_SHADOWMATERIAL
        vec3 csm_Bump = vec3(0.);
    #endif
#endif
`,
  Cr = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
  Pr = `
    csm_internal_vModelViewMatrix = modelViewMatrix;
`,
  Ar = `
    varying mat4 csm_internal_vModelViewMatrix;
`,
  Dr = `

`,
  ee,
  Br =
    ((ee = {}),
    G(ee, "".concat(V.position), "*"),
    G(ee, "".concat(V.positionRaw), "*"),
    G(ee, "".concat(V.normal), "*"),
    G(ee, "".concat(V.pointSize), ["PointsMaterial"]),
    G(ee, "".concat(V.diffuseColor), "*"),
    G(ee, "".concat(V.fragColor), "*"),
    G(ee, "".concat(V.emissive), [
      "MeshStandardMaterial",
      "MeshPhysicalMaterial",
    ]),
    G(ee, "".concat(V.roughness), [
      "MeshStandardMaterial",
      "MeshPhysicalMaterial",
    ]),
    G(ee, "".concat(V.metalness), [
      "MeshStandardMaterial",
      "MeshPhysicalMaterial",
    ]),
    G(ee, "".concat(V.ao), [
      "MeshStandardMaterial",
      "MeshPhysicalMaterial",
      "MeshBasicMaterial",
      "MeshLambertMaterial",
      "MeshPhongMaterial",
      "MeshToonMaterial",
    ]),
    G(ee, "".concat(V.bump), [
      "MeshLambertMaterial",
      "MeshMatcapMaterial",
      "MeshNormalMaterial",
      "MeshPhongMaterial",
      "MeshPhysicalMaterial",
      "MeshStandardMaterial",
      "MeshToonMaterial",
      "ShadowMaterial",
    ]),
    ee),
  Or = [
    "baseMaterial",
    "fragmentShader",
    "vertexShader",
    "uniforms",
    "patchMap",
    "cacheKey",
    "silent",
  ],
  zr = function (r, u, l) {
    return r.split(u).join(l);
  },
  Lr = function (r) {
    return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  },
  Fr = function (r, u) {
    return new RegExp("\\b".concat(Lr(u), "\\b")).test(r);
  };
function jr(d) {
  try {
    new d();
  } catch (r) {
    if (r.message.indexOf("is not a constructor") >= 0) return !1;
  }
  return !0;
}
function Nr(d, r) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  Object.assign(d, r);
  var l = Object.getPrototypeOf(r);
  Object.entries(Object.getOwnPropertyDescriptors(l))
    .filter(function (i) {
      var p = typeof i[1].get == "function",
        v = typeof i[1].set == "function",
        P = typeof i[1].value == "function",
        E = i[0] === "constructor";
      return (p || v || P) && !E;
    })
    .forEach(function (i) {
      if (typeof d[i[0]] == "function") {
        u ||
          console.warn(
            "Function "
              .concat(i[0], " already exists on CSM, renaming to base_")
              .concat(i[0])
          );
        var p = "base_".concat(i[0]);
        d[p] = i[1].value.bind(d);
        return;
      }
      Object.defineProperty(d, i[0], i[1]);
    });
}
function Ur(d) {
  var r = d.toString().trim(),
    u = r.substring(r.indexOf("{") + 1, r.lastIndexOf("}"));
  return u.trim().length === 0;
}
function Ye(d) {
  return d.replace(/\s/g, "");
}
function Rr(d, r, u) {
  var l = d.lastIndexOf(r);
  return l === -1 ? d : d.substring(0, l) + u + d.substring(l + r.length);
}
var Vr = (function (d) {
  xr(u, d);
  var r = Sr(u);
  function u(l) {
    var i,
      p = l.baseMaterial,
      v = l.fragmentShader,
      P = l.vertexShader,
      E = l.uniforms,
      B = l.patchMap,
      M = l.cacheKey,
      j = l.silent,
      R = yr(l, Or);
    br(this, u);
    var O;
    if (
      (jr(p) ? (O = new p(R)) : ((O = p), Object.assign(O, R)),
      O.type === "RawShaderMaterial")
    )
      throw new Error(
        "CustomShaderMaterial does not support RawShaderMaterial"
      );
    (i = r.call(this)),
      Nr(Je(i), O, j),
      (i.__csm = {
        patchMap: B || {},
        fragmentShader: v || "",
        vertexShader: P || "",
        cacheKey: M,
        baseMaterial: p,
        instanceID: tt.generateUUID(),
        type: O.type,
        isAlreadyExtended: !Ur(O.onBeforeCompile),
        cacheHash: "",
        silent: j,
      }),
      (i.uniforms = se(se({}, i.uniforms || {}), E || {}));
    {
      var _ = i.__csm,
        A = _.fragmentShader,
        m = _.vertexShader,
        x = i.uniforms;
      (i.__csm.cacheHash = i.getCacheHash()), i.generateMaterial(A, m, x);
    }
    return i;
  }
  return (
    _r(u, [
      {
        key: "update",
        value: function () {
          var i =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          (this.uniforms = i.uniforms || this.uniforms),
            Object.assign(this.__csm, i);
          var p = this.__csm,
            v = p.fragmentShader,
            P = p.vertexShader,
            E = this.uniforms,
            B = this.getCacheHash();
          (this.__csm.cacheHash = B), this.generateMaterial(v, P, E);
        },
      },
      {
        key: "clone",
        value: function () {
          var i = {
              baseMaterial: this.__csm.baseMaterial,
              fragmentShader: this.__csm.fragmentShader,
              vertexShader: this.__csm.vertexShader,
              uniforms: this.uniforms,
              silent: this.__csm.silent,
              patchMap: this.__csm.patchMap,
              cacheKey: this.__csm.cacheKey,
            },
            p = new this.constructor(i);
          return Object.assign(this, p), p;
        },
      },
      {
        key: "getCacheHash",
        value: function () {
          var i = this.__csm,
            p = i.fragmentShader,
            v = i.vertexShader,
            P = this.uniforms,
            E = Object.values(P).reduce(function (M, j) {
              var R = j.value;
              return M + JSON.stringify(R);
            }, ""),
            B = Ye(p) + Ye(v) + E;
          return B.trim().length > 0 ? Wt(B) : this.customProgramCacheKey();
        },
      },
      {
        key: "generateMaterial",
        value: function (i, p, v) {
          var P = this,
            E = this.parseShader(i),
            B = this.parseShader(p);
          (this.uniforms = v || {}),
            (this.customProgramCacheKey = function () {
              return P.__csm.cacheHash;
            });
          var M = function (O) {
            try {
              if (E) {
                var _ = P.patchShader(E, O.fragmentShader, !0);
                O.fragmentShader = P.getMaterialDefine() + _;
              }
              if (B) {
                var A = P.patchShader(B, O.vertexShader);
                (O.vertexShader =
                  `#define IS_VERTEX;
` + A),
                  (O.vertexShader = P.getMaterialDefine() + O.vertexShader);
              }
              (O.uniforms = se(se({}, O.uniforms), P.uniforms)),
                (P.uniforms = O.uniforms);
            } catch (m) {
              console.error(m);
            }
          };
          if (this.__csm.isAlreadyExtended) {
            var j = this.onBeforeCompile;
            this.onBeforeCompile = function (R, O) {
              j(R, O), M(R);
            };
          } else this.onBeforeCompile = M;
          this.needsUpdate = !0;
        },
      },
      {
        key: "patchShader",
        value: function (i, p, v) {
          var P = this,
            E = p,
            B = se(se({}, this.getPatchMapForMaterial()), this.__csm.patchMap);
          Object.keys(B).forEach(function (R) {
            Object.keys(B[R]).forEach(function (O) {
              var _ = Br[R],
                A = P.__csm.type;
              if (R === "*" || Fr(i.main, R))
                if (!_ || (Array.isArray(_) && _.includes(A)) || _ === "*")
                  E = zr(E, O, B[R][O]);
                else
                  throw new Error(
                    "CSM: "
                      .concat(R, " is not available in ")
                      .concat(A, ". Shader cannot compile.")
                  );
            });
          }),
            (E = E.replace(
              "void main() {",
              `
        #ifndef CSM_IS_HEAD_DEFAULTS_DEFINED
          `
                .concat(
                  v ? Ar : Cr,
                  `
          #define CSM_IS_HEAD_DEFAULTS_DEFINED 1
        #endif

        `
                )
                .concat(
                  i.header,
                  `

        void main() {
          #ifndef CSM_IS_DEFAULTS_DEFINED
            `
                )
                .concat(
                  Ir,
                  `
            #define CSM_IS_DEFAULTS_DEFINED 1
          #endif

          #ifndef CSM_IS_MAIN_DEFAULTS_DEFINED
            `
                )
                .concat(
                  v ? Dr : Pr,
                  `
            #define CSM_IS_MAIN_DEFAULTS_DEFINED 1
          #endif

          // CSM_START
      `
                )
            ));
          var M = this.__csm.isAlreadyExtended,
            j = E.includes("// CSM_END");
          return (
            M && j
              ? (E = Rr(
                  E,
                  "// CSM_END",
                  `
          // CSM_END
          `.concat(
                    i.main,
                    `
          // CSM_END
        `
                  )
                ))
              : (E = E.replace(
                  "// CSM_START",
                  `
        // CSM_START
        `.concat(
                    i.main,
                    `
        // CSM_END
          `
                  )
                )),
            (E = i.defines + E),
            E
          );
        },
      },
      {
        key: "parseShader",
        value: function (i) {
          if (i) {
            var p = i.replace(/\/\*\*(.*?)\*\/|\/\/(.*?)\n/gm, ""),
              v = cr(p),
              P = mr(v),
              E = P.map(function (j) {
                return j.name;
              }).indexOf("main"),
              B = He(v.slice(0, E >= 0 ? P[E].outer[0] : void 0)),
              M = E >= 0 ? this.getShaderFromIndex(v, P[E].body) : "";
            return { defines: "", header: B, main: M };
          }
        },
      },
      {
        key: "getMaterialDefine",
        value: function () {
          var i = this.__csm.type;
          return i
            ? "#define IS_".concat(
                i.toUpperCase(),
                `;
`
              )
            : `#define IS_UNKNOWN;
`;
        },
      },
      {
        key: "getPatchMapForMaterial",
        value: function () {
          switch (this.__csm.type) {
            case "ShaderMaterial":
              return Tr;
            default:
              return Er;
          }
        },
      },
      {
        key: "getShaderFromIndex",
        value: function (i, p) {
          return He(i.slice(p[0], p[1]));
        },
      },
    ]),
    u
  );
})(rt);
class qe {
  constructor({ time: r }, u) {
    (this.time = r),
      (this.options = Object.assign(
        {},
        {
          baseMaterial: new ve({ color: 16777215 }),
          visible: !1,
          thickness: 0.1,
          intensity: 50,
          duration: 3,
          onFadeOut: () => {},
          color: "#eb5a13",
        },
        u
      )),
      this.init();
  }
  init() {
    let {
      baseMaterial: r,
      visible: u,
      thickness: l,
      intensity: i,
      duration: p,
      onFadeOut: v,
      color: P,
    } = this.options;
    const E = `
      varying vec2 vUv;
      varying vec3 vPosition; // use the world position instead of the uv
      void main() {
        vUv = uv;
        vPosition = position;
      }`,
      B = Ht(`
      varying vec2 vUv;
      varying vec3 vPosition;
      uniform float uThickness;
      uniform vec3 uColor;
      uniform float uProgress;


      void main() {
        gln_tFBMOpts opts = gln_tFBMOpts(1.0, 0.3, 2.0, 5.0, 1.0, 5, false, false);
        // float noise = gln_sfbm(vUv, opts); // THE ORIGINAL CODE FROM THE TUTORIAL
        float noise = gln_sfbm(vPosition, opts); //  use the world position instead of the uv for a better effect working on all objects
        noise = gln_normalize(noise);

        float progress = uProgress;

        float alpha = step(1.0 - progress, noise);
        float border = step((1.0 - progress) - uThickness, noise) - alpha;

        csm_DiffuseColor.a = alpha + border;
        csm_DiffuseColor.rgb = mix(csm_DiffuseColor.rgb, uColor, border);
      }`);
    let M = new Vr({
      baseMaterial: r,
      vertexShader: E,
      fragmentShader: B,
      transparent: !0,
      uniforms: {
        uThickness: { value: l },
        uColor: { value: new de(P).multiplyScalar(i) },
        uProgress: { value: 0 },
      },
    });
    this.material = M;
  }
  toggle(r) {
    this.options,
      (this.options.visible = !this.options.visible),
      _t.to(this.material.uniforms.uProgress, {
        value: this.options.visible ? 1 : 0,
        duration: this.options.duration,
        onComplete: () => {
          r && r(this.options.visible);
        },
      });
  }
}
class kr extends ct {
  constructor(r) {
    super(r),
      this.camera.instance.position.set(
        4.804676200109271,
        4.5393150049863085,
        6.942194863880983
      ),
      (this.scene.background = new de("#eeeeee")),
      this.init();
  }
  async init() {
    this.initSetting(),
      this.initEnvironment(),
      await this.initAssets(),
      this.initPlane(),
      this.initModel(),
      this.createBloom();
  }
  initEnvironment() {
    let r = new nt(16777215, 0.5);
    this.scene.add(r);
    let u = new ot(16777215, 0.5);
    u.position.set(10, 15, -10), (u.castShadow = !0);
    let l = new it(u, 2);
    this.scene.add(u, l);
    const i = this.debug.instance.addFolder("Environment");
    i.add(u.position, "x", -30, 30, 1),
      i.add(u.position, "y", -30, 30, 1),
      i.add(u.position, "z", -30, 30, 1),
      i.onChange((p) => {
        l.update();
      });
  }
  initSetting() {
    (this.debug = new pt(!0)),
      (this.stats = new dt()),
      document.body.appendChild(this.stats.dom),
      (this.renderer.instance.shadowMap.enabled = !0),
      (this.renderer.instance.shadowMap.type = at);
  }
  initAssets() {
    return new Promise((r) => {
      (this.assets = new ft()),
        this.assets.loadAll([{ type: "Texture", name: "flag", path: gt }]),
        this.assets.on("onLoad", () => {
          r();
        });
    });
  }
  initModel() {
    const r = xt("box"),
      u = { obj: "box" };
    let l = new qe(this, { baseMaterial: new ve({ color: 16777215 }) }),
      i = new st(2, 2, 2);
    i.translate(0, 1, 0);
    let p = new Se(i, l.material);
    (p.visible = !0), (p.castShadow = !0), this.scene.add(p), l.toggle();
    let v = new qe(this, {
        baseMaterial: new ve({ color: 16777215 }),
        color: "#00ffff",
      }),
      P = new lt(1);
    P.translate(0, 1, 0);
    let E = new Se(P, v.material);
    (E.castShadow = !0),
      this.scene.add(E),
      this.debug.instance
        .addFolder("model")
        .add(u, "obj", ["box", "sphere"])
        .onChange((M) => {
          (r.value = M),
            r.value === "box" &&
              v.toggle((j) => {
                (p.visible = !0), (E.visible = !1), l.toggle((R) => {});
              }),
            r.value === "sphere" &&
              l.toggle((j) => {
                (p.visible = !1), (E.visible = !0), v.toggle((R) => {});
              });
        });
  }
  createBloom() {
    const r = {
        exposure: 1,
        bloomStrength: 0.5,
        bloomThreshold: 1,
        bloomRadius: 0.3,
      },
      u = new yt(this.scene, this.camera.instance),
      l = new ue(new oe(this.sizes.width, this.sizes.height), 0.5, 0.3, 1);
    (l.threshold = r.bloomThreshold),
      (l.strength = r.bloomStrength),
      (l.radius = r.bloomRadius);
    const i = new bt(this.renderer.instance);
    i.addPass(u), i.addPass(l);
    const p = this.debug.instance.addFolder("bloomPass");
    p.add(r, "exposure", 0.1, 2).onChange((v) => {
      this.renderer.instance.toneMappingExposure = Math.pow(v, 4);
    }),
      p.add(r, "bloomThreshold", 0, 1).onChange((v) => {
        l.threshold = Number(v);
      }),
      p.add(r, "bloomStrength", 0, 3).onChange((v) => {
        l.strength = Number(v);
      }),
      p.add(r, "bloomRadius", 0, 1, 0.01).onChange((v) => {
        l.radius = Number(v);
      }),
      (this.composer = i),
      (this.renderer.postprocessing = !0),
      (this.renderer.composer = i),
      this.time.on("tick", () => {
        i.render();
      });
  }
  initPlane() {
    let r = new Se(new ut(20, 20, 1), new ve({ color: 16777215 }));
    (r.receiveShadow = !0), r.rotateX(-Math.PI / 2), this.scene.add(r);
  }
  update() {
    super.update(), this.stats && this.stats.update();
  }
  destroy() {
    super.destroy(),
      this.debug.destroy(),
      document.body.removeChild(this.stats.dom);
  }
}
const Hr = { id: "canvas" },
  Gr = {
    __name: "shader03-dissolve",
    setup(d) {
      let r = null;
      return (
        wt(() => {
          r = new kr(document.getElementById("canvas"));
        }),
        Mt(() => {
          r && r.destroy();
        }),
        (u, l) => (St(), Et("canvas", Hr))
      );
    },
  },
  tn = Tt(Gr, [["__scopeId", "data-v-9ac792d9"]]);
export { tn as default };
