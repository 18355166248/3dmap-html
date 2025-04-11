// import { Gr, la, w, Yr } from "./yuka.js";
import {
  EntityManager as EntityMgr,
  FollowPathBehavior as PathBehavior,
  NavMeshLoader as NavLoader,
  Vector3 as Vec3,
  Vehicle as VehicleEntity,
} from "./yuka.module.js";
import { mergeGeometries } from "../../three.js-r160/examples/jsm/utils/BufferGeometryUtils.js";
import { DRACOLoader } from "../../three.js-r160/examples/jsm/loaders/DRACOLoader.js";

// 导入d3地理投影工具
const geoMercator = d3.geoMercator;

// 几何体合并工具别名
const mergeGeo = mergeGeometries;

// 对象属性定义辅助函数
var defineProperty = Object.defineProperty;
var setProperty = (obj, key, value) =>
  key in obj
    ? defineProperty(obj, key, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: value,
      })
    : (obj[key] = value);
var defineClassProperty = (obj, key, value) => (
  setProperty(obj, typeof key != "symbol" ? key + "" : key, value), value
);
import {
  aF as Clock,
  B as yn,
  a2 as Ae,
  aG as oi,
  aH as rn,
  aI as Os,
  aJ as xn,
  F as ut,
  C as le,
  I as ne,
  m as fe,
  a5 as TextureLoader,
  b as Mesh,
  w as PerspectiveCamera,
  aV as OrthographicCamera,
  aW as _i,
  b9 as LoadingManager,
  aB as WebGLRenderer,
  aE as OrbitControls,
  aA as Scene,
  aD as AxesHelper,
} from "./OrbitControls-9c9ee6bc.js";
import { Ki as GLTFLoader } from "./GLTFLoader.js";

/**
 * 事件管理基类
 * 提供基本的事件发布订阅功能
 */
class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  /**
   * 注册事件监听
   * @param {string} eventName 事件名称
   * @param {Function} callback 回调函数
   */
  on(eventName, callback) {
    let handlers = this.events.get(eventName);
    handlers || ((handlers = new Set()), this.events.set(eventName, handlers)),
      handlers.add(callback);
  }

  /**
   * 移除事件监听
   * @param {string} eventName 事件名称
   * @param {Function} callback 要移除的回调函数，不传则移除该事件的所有监听
   */
  off(eventName, callback) {
    const handlers = this.events.get(eventName);
    handlers &&
      (callback ? handlers.delete(callback) : this.events.delete(eventName));
  }

  /**
   * 触发事件
   * @param {string} eventName 事件名称
   * @param {...any} args 事件参数
   */
  emit(eventName, ...args) {
    const handlers = this.events.get(eventName);
    handlers &&
      handlers.forEach((handler) => {
        handler(...args);
      });
  }

  /**
   * 注册一次性事件监听
   * @param {string} eventName 事件名称
   * @param {Function} callback 回调函数
   */
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args), this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
}

/**
 * 尺寸管理类，处理画布尺寸和设备像素比
 */
class SizeManager extends EventEmitter {
  constructor({ canvas: canvasElement }) {
    super();
    this.canvas = canvasElement;
    this.pixelRatio = 0;
    this.init();
    window.addEventListener("resize", () => {
      this.init(), this.emit("resize");
    });
  }

  /**
   * 初始化尺寸信息
   */
  init() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = this.pixelRatio || Math.min(window.devicePixelRatio, 2);
  }

  /**
   * 清理资源
   */
  destroy() {
    this.off("resize");
  }
}

/**
 * 时间管理类，处理动画帧和时间计算
 */
class TimeManager extends EventEmitter {
  constructor() {
    super();
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;
    this.clock = new Clock();
    this.timer = window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  /**
   * 时间帧更新
   */
  tick() {
    const now = Date.now();
    this.delta = now - this.current;
    this.current = now;
    this.elapsed = this.current - this.start;
    const deltaTime = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();
    if ((this.emit("tick", deltaTime, elapsedTime), this.stop))
      return window.cancelAnimationFrame(this.timer), !1;
    this.timer = window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  /**
   * 清理资源
   */
  destroy() {
    (this.stop = !0), this.off("tick");
  }
}

/**
 * 资源加载器类型映射
 */
let loaderTypes = {
  GLTFLoader: "GLTF",
  TextureLoader: "Texture",
  FontLoader: "Font",
  MMDLoader: "MMD",
  MTLLoader: "MTL",
  OBJLoader: "OBJ",
  PCDLoader: "PCD",
  FileLoader: "File",
  ImageLoader: "Image",
  ObjectLoader: "Object",
  MaterialLoader: "Material",
  CubeTextureLoader: "CubeTexture",
  RGBELoader: "RGBELoader",
  FBXLoader: "FBX",
};
const availableLoaderTypes = Object.values(loaderTypes);

/**
 * 资源管理器类，处理3D资源的加载和管理
 */
class ResourceManager extends EventEmitter {
  constructor({ dracoPath: dracoDecoderPath } = {}) {
    super();
    this.dracoPath = dracoDecoderPath || "./draco/gltf/";
    this.itemsLoaded = 0;
    this.itemsTotal = 0;
    this.assets = [];
    this.loaders = {};
    this.initDefaultLoader();
  }

  /**
   * 初始化加载管理器
   */
  initManager() {
    const manager = new LoadingManager();
    return (
      (manager.onProgress = (url, itemsLoaded, itemsTotal) => {
        this.itemsLoaded = itemsLoaded;
        this.itemsTotal = itemsTotal;
        this.emit("onProgress", url, itemsLoaded, itemsTotal);
      }),
      (manager.onError = (error) => {
        this.emit("onError", error);
      }),
      manager
    );
  }

  /**
   * 初始化默认加载器
   */
  initDefaultLoader() {
    [
      { loader: GLTFLoader, name: "GLTFLoader" },
      { loader: TextureLoader, name: "TextureLoader" },
    ].map((loaderInfo) => this.addLoader(loaderInfo.loader, loaderInfo.name));
  }

  /**
   * 初始化Draco解码器
   */
  initDraco(loader) {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(this.dracoPath),
      dracoLoader.preload(),
      loader.setDRACOLoader(dracoLoader);
  }

  /**
   * 添加资源加载器
   * @param {Function} LoaderClass 加载器类
   * @param {string} loaderName 加载器名称
   */
  addLoader(LoaderClass, loaderName = "") {
    if (LoaderClass.name && loaderTypes[loaderName]) {
      if (!this.loaders[loaderName]) {
        let loader = new LoaderClass(this.manager),
          typeName = loaderName;
        console.log(
          "loaderTypes[typeName]",
          loaderName,
          loaderTypes[typeName],
          this.loaders
        );

        loader instanceof xn &&
          (typeName === "GLTFLoader" && this.initDraco(loader),
          (this.loaders[loaderTypes[typeName]] = loader));
      }
    } else throw new Error("请配置正确的加载器");
  }

  /**
   * 加载单个资源
   * @param {Object} assetInfo 资源信息
   */
  loadItem(assetInfo) {
    return new Promise((resolve, reject) => {
      if (!this.loaders[assetInfo.type])
        throw new Error(`资源${assetInfo.path}没有配置加载器`);
      this.loaders[assetInfo.type].load(
        assetInfo.path,
        (loadedData) => {
          this.itemsLoaded++,
            this.emit(
              "onProgress",
              assetInfo.path,
              this.itemsLoaded,
              this.itemsTotal
            ),
            resolve({ ...assetInfo, data: loadedData });
        },
        null,
        (error) => {
          this.emit("onError", error), reject(error);
        }
      );
    });
  }

  /**
   * 加载所有资源
   * @param {Array} assetList 资源列表
   */
  loadAll(assetList) {
    return (
      (this.itemsLoaded = 0),
      (this.itemsTotal = 0),
      new Promise((resolve, reject) => {
        let assets = this.matchType(assetList),
          promises = [];
        (this.itemsTotal = assets.length),
          assets.map((asset) => {
            let promise = this.loadItem(asset);
            promises.push(promise);
          }),
          Promise.all(promises)
            .then((loadedAssets) => {
              (this.assets = loadedAssets),
                this.emit("onLoad"),
                resolve(loadedAssets);
            })
            .catch((error) => {
              this.emit("onError", error), reject(error);
            });
      })
    );
  }

  /**
   * 匹配资源类型
   * @param {Array} assetList 资源列表
   */
  matchType(assetList) {
    return (
      (this.assets = assetList
        .map((asset) => ({
          type: availableLoaderTypes.includes(asset.type) ? asset.type : "",
          path: asset.path,
          name: asset.name,
          data: null,
        }))
        .filter((asset) => {
          if (!asset.type) throw new Error(`资源${asset.path},type不正确`);
          return asset.type;
        })),
      this.assets
    );
  }

  /**
   * 获取已加载的资源
   * @param {string} assetName 资源名称
   */
  getResource(assetName) {
    let asset = this.assets.find((item) => item.name === assetName);
    if (!asset) throw new Error(`资源${assetName}不存在`);
    return asset.data;
  }

  /**
   * 清理资源
   */
  destroy() {
    this.off("onProgress"),
      this.off("onLoad"),
      this.off("onError"),
      (this.assets = []);
  }
}

// 全局对象引用，用于兼容不同环境
var globalObj =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};

/**
 * 处理ES模块导入
 */
function getDefaultExport(module) {
  return module &&
    module.__esModule &&
    Object.prototype.hasOwnProperty.call(module, "default")
    ? module.default
    : module;
}

var pointInPolygon = { exports: {} },
  pointInPolygonFlat = function (point, polygonFlat, start, end) {
    var x = point[0],
      y = point[1],
      inside = !1;
    start === void 0 && (start = 0),
      end === void 0 && (end = polygonFlat.length);
    for (
      var length = (end - start) / 2, i = 0, j = length - 1;
      i < length;
      j = i++
    ) {
      var xi = polygonFlat[start + i * 2 + 0],
        yi = polygonFlat[start + i * 2 + 1],
        xj = polygonFlat[start + j * 2 + 0],
        yj = polygonFlat[start + j * 2 + 1],
        intersect =
          yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      intersect && (inside = !inside);
    }
    return inside;
  },
  pointInPolygonNested = function (point, polygonNested, start, end) {
    var x = point[0],
      y = point[1],
      inside = !1;
    start === void 0 && (start = 0),
      end === void 0 && (end = polygonNested.length);
    for (var length = end - start, i = 0, j = length - 1; i < length; j = i++) {
      var xi = polygonNested[i + start][0],
        yi = polygonNested[i + start][1],
        xj = polygonNested[j + start][0],
        yj = polygonNested[j + start][1],
        intersect =
          yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
      intersect && (inside = !inside);
    }
    return inside;
  },
  flatImplementation = pointInPolygonFlat,
  nestedImplementation = pointInPolygonNested;
pointInPolygon.exports = function (point, polygon, start, end) {
  return polygon.length > 0 && Array.isArray(polygon[0])
    ? nestedImplementation(point, polygon, start, end)
    : flatImplementation(point, polygon, start, end);
};
pointInPolygon.exports.nested = nestedImplementation;
pointInPolygon.exports.flat = flatImplementation;
var pointInPolygonModule = pointInPolygon.exports;
const pointInPolygonFn = getDefaultExport(pointInPolygonModule);

/**
 * 渲染器类，管理Three.js渲染器
 */
class Renderer {
  constructor({
    canvas: canvasElement,
    sizes: sizeManager,
    scene: sceneInstance,
    camera: cameraManager,
    postprocessing: enablePostprocessing = !1,
    composer: composerInstance = null,
  }) {
    this.canvas = canvasElement;
    this.sizes = sizeManager;
    this.scene = sceneInstance;
    this.camera = cameraManager;
    this.postprocessing = enablePostprocessing;
    this.composer = composerInstance;
    this.setInstance();
  }

  /**
   * 创建渲染器实例
   */
  setInstance() {
    (this.instance = new WebGLRenderer({
      alpha: !0,
      antialias: !0,
      canvas: this.canvas,
    })),
      this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  /**
   * 调整渲染器尺寸
   */
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height),
      this.instance.setPixelRatio(this.sizes.pixelRatio);
  }

  /**
   * 渲染场景
   */
  update() {
    this.postprocessing && this.composer
      ? this.composer.render()
      : this.instance.render(this.scene, this.camera.instance);
  }

  /**
   * 清理资源
   */
  destroy() {
    this.instance.dispose(), this.instance.forceContextLoss();
  }
}

// 初始化空数组
new Array();

/**
 * 相机管理类
 */
class CameraManager {
  constructor(
    { sizes: sizeManager, scene: sceneInstance, canvas: canvasElement },
    options = { isOrthographic: !1 }
  ) {
    (this.sizes = sizeManager),
      (this.scene = sceneInstance),
      (this.wWidth = 0),
      (this.wHeight = 0),
      (this.canvas = canvasElement),
      (this.options = Object.assign({ isOrthographic: !1 }, options)),
      this.setInstance(),
      // 监听键盘事件切换相机模式
      document.addEventListener("keydown", (event) => {
        let currentPosition = new Vec3().copy(this.instance.position);
        switch (event.keyCode) {
          case 79: // O键 - 正交相机
            this.setCamera(),
              this.instance.position.copy(currentPosition),
              this.instance.updateProjectionMatrix();
            break;
          case 80: // P键 - 透视相机
            this.setCamera(!1),
              this.instance.position.copy(currentPosition),
              this.instance.updateProjectionMatrix();
            break;
        }
      });
  }

  /**
   * 获取相机视图尺寸
   */
  getCameraViewSize() {
    if (this.instance instanceof PerspectiveCamera) {
      const fovRad = (this.instance.fov * Math.PI) / 180,
        height = 2 * Math.tan(fovRad / 2) * Math.abs(this.instance.position.z),
        width = height * this.instance.aspect;
      (this.wWidth = width), (this.wHeight = height);
    } else
      (this.wWidth = this.instance.top - this.instance.bottom),
        (this.wHeight = this.instance.right - this.instance.left);
    return [this.wWidth, this.wHeight];
  }

  /**
   * 创建相机实例
   */
  setInstance() {
    this.instance = null;
    this.setCamera(this.options.isOrthographic);
    this.instance.position.set(10, 10, 10);
    this.scene.add(this.instance);
  }

  /**
   * 设置相机类型
   * @param {boolean} useOrthographic 是否使用正交相机
   */
  setCamera(useOrthographic = !0) {
    let aspectRatio = this.sizes.width / this.sizes.height;
    if (useOrthographic) {
      let frustumSize = 120;
      this.instance = new OrthographicCamera(
        -frustumSize * aspectRatio,
        frustumSize * aspectRatio,
        frustumSize,
        -frustumSize,
        1,
        1e4
      );
    } else this.instance = new PerspectiveCamera(45, aspectRatio, 1, 1e4);
    this.setControls(), this.getCameraViewSize();
  }

  /**
   * 设置相机控制器
   */
  setControls() {
    this.controls = new OrbitControls(this.instance, this.canvas);
    this.controls.enableDamping = !0;
    this.controls.update();
  }

  /**
   * 调整相机尺寸
   */
  resize() {
    let aspectRatio = this.sizes.width / this.sizes.height;
    if (this.options.isOrthographic) {
      let frustumSize = 120;
      this.instance.left = -frustumSize * aspectRatio;
      this.instance.right = frustumSize * aspectRatio;
      this.instance.top = frustumSize;
      this.instance.bottom = -frustumSize;
    } else this.instance.aspect = aspectRatio;
    this.instance.updateProjectionMatrix();
  }

  /**
   * 更新相机控制器
   */
  update() {
    this.controls.update();
  }

  /**
   * 清理资源
   */
  destroy() {
    this.controls.dispose();
  }
}

/**
 * 地图应用主类
 */
class MapApplication extends EventEmitter {
  constructor(canvasElement, options = {}) {
    super();
    defineClassProperty(this, "geoProjection", (coordinates) => {
      let {
        geoProjectionCenter: center,
        geoProjectionScale: scale,
        geoProjectionTranslate: translate,
      } = this.config;
      return geoMercator().center(center).scale(scale).translate(translate)(
        coordinates
      );
    });

    // 默认配置
    let defaultConfig = {
      geoProjectionCenter: [0, 0],
      geoProjectionScale: 120,
      geoProjectionTranslate: [0, 0],
      isOrthographic: !1,
    };

    // 合并配置
    this.config = Object.assign({}, defaultConfig, options);
    this.canvas = canvasElement;
    this.scene = new Scene();
    this.sizes = new SizeManager(this);
    this.time = new TimeManager(this);
    this.camera = new CameraManager(this, {
      isOrthographic: this.config.isOrthographic,
    });
    this.renderer = new Renderer(this);
    // 注册事件监听
    this.sizes.on("resize", () => {
      this.resize();
    });
    this.time.on("tick", (deltaTime) => {
      this.update(deltaTime);
    });
  }

  /**
   * 设置坐标轴辅助
   * @param {number} size 坐标轴大小
   */
  setAxesHelper(size = 250) {
    if (!size) return !1;
    let axesHelper = new AxesHelper(size);
    this.scene.add(axesHelper);
  }

  /**
   * 调整尺寸
   */
  resize() {
    this.camera.resize(), this.renderer.resize();
  }

  /**
   * 更新场景
   * @param {number} deltaTime 时间增量
   */
  update(deltaTime) {
    this.camera.update(deltaTime), this.renderer.update(deltaTime);
  }

  /**
   * 清理资源
   */
  destroy() {
    this.sizes.destroy();
    this.time.destroy();
    this.camera.destroy();
    this.renderer.destroy();
    // 遍历场景并清理资源
    this.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.geometry.dispose();
        for (const materialKey in object.material) {
          const material = object.material[materialKey];
          material &&
            typeof material.dispose == "function" &&
            material.dispose();
        }
      }
    });
    this.canvas.parentNode.removeChild(this.canvas);
  }
}
export {
  EntityMgr as E,
  PathBehavior as F,
  MapApplication as M,
  NavLoader as N,
  ResourceManager as R,
  Vec3 as V,
  getDefaultExport as a,
  VehicleEntity as b,
  globalObj as c,
  geoMercator as g,
  mergeGeo as m,
  pointInPolygonFn as p,
};
