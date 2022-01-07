// const console = {
//   log: () => { }
// }

// 声明变量
let camera, scene, controls, renderer2, renderer, dom, t, p, runScene;
import * as THREE from "three";
import jfThree from "js-funcs-three";

// 拿资源
const setAssets = (assets) => {
  camera = assets.camera;
  scene = assets.scene;
  controls = assets.controls;
  renderer2 = assets.renderer2;
  renderer = assets.renderer;
  dom = assets.dom;
  t = assets.t;
  p = assets.p;
};

// 整体场景事件
function Change(runScene, info) {
  /* 拿资源 分解资源 
      this挂载至t上 
      p为公共方法从runScene上取
      runScene上的其他Api可以直接runScene.直接使用
  */
  setAssets({ ...runScene.getAssets(), t: this, p: runScene.p, runScene });
  //排队需要执行的事件
  this.pending = [];
  // 全局使用的bus
  const { bus } = info;
  // 使用bus
  this.bus = bus;
  // 基本事件
  this.events = new Events();
  //视频看板
  this.video = new Video();
  //警告看板
  this.warning = new Warning();
  // 初始化
  this.init = (onDone) => {
    Promise.all(this.pending).then((results) => {
      // 实现running的每帧调用
      runScene.setLoopFn(this.running);
      //相机缓动
      controls.enableDamping = true;
           // 限制控制器的范围
           controls.screenSpacePanning = false;
           controls.minDistance = 10000;
           controls.maxDistance = 18000;
           controls.maxPolarAngle = Math.PI / 2 - 0.4;

      //入场动画
      //this.entranceAmin();

      // 成功回调
      onDone && onDone();
    });
    return this;
  };

  // 入场动画
  this.entranceAmin = () => {
    // 入场动画
    t.events.closeAnimaAtStart.enterAnima = p.camAnima(
      p.getCamLocal(),
      {
        cx: 471.2951135211026,
        cy: 519.2373984640583,
        cz: 598.643908898904,
        tx: 19.185011531545186,
        ty: 15.08775873654268,
        tz: 14.840330791862831,
      },
      1.5,
      () => {
        //设置相机距离原点的最小最远距离
        controls.minDistance = 500;
        controls.maxDistance = 50000;

        //相机缓动
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25;
      }
    );
  };

  // 每帧调用函数 render同步
  this.running = () => {};

  // 销毁
  this.dispose = () => {
    this.init = () => {};
    dom.removeEventListener("click", this.click);
    runScene.dispose();
  };
}
// 工具类
class Events {
  // 初始化
  constructor() {
    dom.addEventListener("pointerdown", this.mouseDown);
    dom.addEventListener("pointerup", this.mouseUp);
    controls.addEventListener("start", this.controlStart);
    dom.addEventListener("onkeydown ", this.keydownEvents);
  }

  // 点位
  downPosition = { x: 0, y: 0 };

  // 需要被打断的动画名称
  closeAnimaAtStart = {
    enterAnima: "",
  };

  keydownEvents = (event) => {
    console.log(event);
  };

  mouseDown = (event) => {
    this.downPosition = {
      x: event.offsetX,
      y: event.offsetY,
    };
  };

  mouseUp = (event) => {
    if (event.button === 2) return;
    const ux = event.offsetX;
    const uy = event.offsetY;
    const { x, y } = this.downPosition;
    // 当点击的位置和点击后的位置一致时就会触发
    ux === x && uy === y && this.triggerClick(event);
  };

  mouseMove = (e) => {
    const { intersects, obj } = p.getClickObj(e, scene.children);
    if (!obj) return;
    // console.log('悬浮选中的模型', obj,);
  };

  triggerClick = (e) => {
    console.log(
      `cx:${camera.position.x},cy:${camera.position.y},cz:${camera.position.z}`,
      "位置"
    );
    console.log(
      `tx:${controls.target.x},ty:${controls.target.y},tz:${controls.target.z}`,
      "相机视角"
    );

    const { intersects, obj } = p.getClickObj(e, scene.children, true);
    if (!obj) return;

    console.log("点击的对象", obj.name, obj);

    if (obj.name == "weidangtexiao1_46") {
      t.video.spriteDom.visible = !t.video.spriteDom.visible;
      t.video.line.visible = !t.video.line.visible;
    }
    // 点击打印模型接口
    t.bus.$emit("logClickModel", obj);
  };

  controlStart = () => {
    this.closeAnmia();
  };

  // 关闭所有的动画
  closeAnmia() {
    Object.values(this.closeAnimaAtStart).map(
      (item) =>
        // 暂停动画 并清空内容 item就是那个动画
        item && item.kill()
    );
  }

  dispose() {
    dom.removeEventListener("pointerdown", this.mouseDown);
    dom.removeEventListener("pointerup", this.mouseUp);
    controls.removeEventListener("start", this.controlStart);
  }
}
//视频看板
class Video {
  //点击的模型
  model = p.getModel("group1_297");
  //连线
  line;
  //dom
  spriteDom;
  constructor() {
    this.creatDom();
    this.creatLine();
  }
  //创建视频看板
  creatDom() {
    let dom = document.querySelector(".videoboard");
    let sprite = p.domTo3DSprite(dom);
    sprite.name = "视频面板";
    sprite.visible = false;
    sprite.position.y += 1000;
    sprite.position.z += 1000;
    this.spriteDom = sprite;
    this.model.add(sprite);
  }
  //创建线
  creatLine() {
    let qidian = p.getWorldLocal(this.model);
    let zhongdian = p.getWorldLocal(this.spriteDom);
    let material = new THREE.LineBasicMaterial({
      color: 0x00000,
      linewidth: 20,
    });
    let bufferGeom = new THREE.BufferGeometry();
    let position = new Float32Array([
      qidian.x,
      qidian.y,
      qidian.z,
      zhongdian.x,
      zhongdian.y,
      zhongdian.z,
    ]);
    bufferGeom.setAttribute("position", new THREE.BufferAttribute(position, 3));
    this.line = new THREE.Line(bufferGeom, material);
    this.line.visible = false;
    this.line.name = "视频面板连线";
    scene.add(this.line);
  }
}
//UI警告看板
class Warning {
  //点击的模型
  modelMap = {};
  //显示的看板
  boardMap = {};
  constructor() {
    //初始化点击的模型
    new Array(11).fill().map((_,i) => {
      this.modelMap[`Sprite${i+1}`] = p.getModel(`Sprite${i+1}`)
      
    });
    this.creatDom();
  }
  //创建看板
  creatDom() {
    Object.keys(this.modelMap).map((item) => {
      let dom = document.querySelector(`.${item}`);
      let sprite = p.domTo3DSprite(dom);
      sprite.name = `警告看板${item}`;
      sprite.visible = false;
      this.boardMap[item] = sprite;
      sprite.position.y += 1.5;
      sprite.position.z += 0.5;
      this.modelMap[item].add(sprite);
    });
  }
  //显示和隐藏看板
  showBoard(name) {
    this.boardMap[name].visible = !this.boardMap[name].visible;
  }
}
export default Change;
