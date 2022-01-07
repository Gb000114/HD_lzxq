<template>
  <div class="three-scene" ref="three-scene" onselectstart="return false;">
    <!-- 视频dom -->
    <div class="videoboard" v-show="false" v-for="(item,index) in videoList" :key="index" :class="item">
      <video 
      controls
      src="https://mvwebfs.ali.kugou.com/202201071415/a32672f20fe6fc16533f4444d563e5f2/KGTX/CLTX002/acc5c3761511a61ef7f6af05cac011d1.mp4"></video>
    </div>
    <!-- 视频dom -->
    <!-- ------------------------------------- -->
    <!-- 报警dom -->
    <div class="warningboard" v-for="(item,index) in ui" :key="index" :class="item" v-show="false"></div>
    <!-- 报警dom -->
    <div
      class="btn"
      @pointerdown="
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        }
      "
    ></div>
  </div>
</template>

<script>
import Change from "./Change";
import { RunScene } from "run-scene";
import { Bus } from "run-scene";
// 场景的传值Bus
const bus = new Bus();
export default {
  data() {
    return {
      change: null,
      runScene: null,
      ui: [
        "Sprite7",
        "Sprite8",
        "Sprite10",
        "Sprite4",
      ],
      videoList:[
        'Sprite1',
        'Sprite2',
        'Sprite3',
        'Sprite6',
        'Sprite9',
        'Sprite11',
      ]
    };
  },
  mounted() {
    // 加载场景
    this.loadScene();
    // 打印点击的模型接口
    bus.$on("logClickModel", this.logClickModel);
  },
  methods: {
    // 加载场景
    loadScene() {
      this.runScene = new RunScene({
        path: "https://test2-1303915342.cos.ap-shanghai.myqcloud.com/Lzxq_demo/lzxq.glb",
        rootDom: this.$refs["three-scene"],
        options: {
          resize: true,
          // firstTexture:true
          css3DRender: true,
          css2DRender: true,
          // run: false,
          static: false,
          level: 2,
          progress: (pg) => {
            console.log("进度:", pg);
          },
          // controlsUpdate: false,
        },
      }).done(async (runScene) => {
        await Promise.resolve(1);
        let Info = { bus: bus };
        // 所需要的信息统一成对象传入Change中
        this.change = new Change(runScene, Info).init(this.onDone);
        this.$emit('ready')
      });
    },
    // 场景加载完毕回调
    onDone() {
      console.log("场景加载完毕~");
    },
    // 打印点击到的模型
    logClickModel(model) {
      console.log("点击的模型为:", model.name);
      this.ui.map((item)=>{
        if(model.name == item){
          console.log("111");
          this.change.warning.showBoard(item)
        }
      })
      this.videoList.map((item)=>{
        if(model.name == item){
          console.log(item);
          this.change.video.showBoard(item)
        }
      })
    },
    // 事件一
    events1() {
      console.log(1);
    },
  },
};
</script>

<style lang="less" scoped>
.three-scene {
  width: 100vw;
  height: 100vh;
  .btn {
    z-index: 10;
    position: absolute;
    button {
      float: left;
      color: black;
    }
  }
}

.showOpacity {
  opacity: 1 !important;
}
.videoboard {
  width: 100px;
  height: 100px;
  video{
    width: 100%;
    height: 100%;
  }
}
.warningboard{
  width: 1255px;
  height: 1385px;
  background-image: url('../../assets/warn-info.png');
  background-size: cover;
}
</style>
