<template>
  <div class="varok-header">
    <div class="varok-header-content">
      <div class="header-title">
        <a href="http://">
          <Button type="text">VAROK</Button>
        </a>
      </div>
      <div class="menu-list">
        <a href="http://">首页</a>
        <a href="http://">留言</a>
        <a href="http://">友邻</a>
      </div>
      <div class="header-right-content">
        <Button class="setting-btn" type="primary" shape="circle" icon="md-settings"></Button>
        <Button class="login-btn" type="primary">登录</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'

  @Component({
    name: 'VarokHeader',
  })
  export default class VarokHeader extends Vue {

  }
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.varok-header {
  width: 100%;
  height: 56px;
  background-color: @darkTheme;
  &-content {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 80px;
    width: 100%;
    height: 100%;
    .header-title {
      a {
        display: block;
      }
      /deep/.ivu-btn-text {
        font-size: 26px;
        font-family: @defaultFontFamily!important;
        color: @lightTheme;
      }
    }
    .menu-list {
      a {
        display: inline-block;
        margin: 0 6px;
        min-width: 80px;
        height: 56px;
        line-height: 56px;
        text-align: center;
        font-family: @defaultFontFamily;
        font-size: 14px;
        font-weight: 500;
      }
    }
    .header-right-content {
      height: 56px;
      line-height: 56px;
      .setting-btn {
        margin-right: 10px;
      }
    }
  }
}
</style>
