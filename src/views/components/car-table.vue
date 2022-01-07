<template>
  <table>
      <tr>
          <th>状态</th>
          <th>车牌号</th>
          <th>连续运行时长</th>
          <th>当前人数</th>
          <th>核载人数</th>
          <th>前一站点</th>
          <th>后一站点</th>
          <th>操作</th>
      </tr>
      <tr>
          <td class="green">正常</td>
          <td>苏B12345</td>
          <td>6.3小时</td>
          <td>60</td>
          <td>60</td>
          <td>禅者之家</td>
          <td>一池荷叶</td>
          <td class="blue">督办  记录</td>
      </tr>
      <tr>
          <td class="yellow">停运</td>
          <td class="yellow">苏B12345</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="blue">督办  记录</td>
      </tr>
      <tr>
          <td class="green">正常</td>
          <td>苏B12345</td>
          <td>6.3小时</td>
          <td>60</td>
          <td>60</td>
          <td>禅者之家</td>
          <td>一池荷叶</td>
          <td class="blue">督办  记录</td>
      </tr>
      <tr>
          <td class="red">超载</td>
          <td class="red">苏B12345</td>
          <td>6.3小时</td>
          <td>60</td>
          <td>60</td>
          <td>禅者之家</td>
          <td>一池荷叶</td>
          <td class="blue">督办  记录</td>
      </tr>
      <tr>
          <td class="green">正常</td>
          <td>苏B12345</td>
          <td>6.3小时</td>
          <td>60</td>
          <td>60</td>
          <td>禅者之家</td>
          <td>一池荷叶</td>
          <td class="blue">督办  记录</td>
      </tr>
  </table>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
table{
    margin-top: 28px;
    margin-left: 23px;
    font-size: 12px;
    width: 874px;
    height: 170px;
    td{
        text-align: center;
    }
}
.green{
    color: rgba(0, 186, 173, 1);
}
.yellow{
    color: rgba(255, 194, 75, 1);
}
.red{
    color: rgba(251, 118, 131, 1);
}
.blue{
    color: rgba(118, 221, 251, 1);
}
</style>