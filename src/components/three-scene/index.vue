<template>
  <div class="three-scene" ref="three-scene" onselectstart="return false;">
    <div class="videoboard" v-show="false"></div>
    <div class="warningboard" v-for="(item,index) in ui" :key="index" :class="item" v-show="false"></div>
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
        "Sprite2",
        "Sprite1",
        "Sprite10",
        "Sprite4",
        "Sprite6",
        "Sprite11",
        "Sprite9",
        "Sprite3",
      ],
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
          // css2DRender: true,
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
  width: 400px;
  height: 400px;
  background-color: blue;
}
.warningboard{
  width: 400px;
  height: 400px;
  background-color: red;
}
</style>
