<template>
  <div class="varok-header">
    <div class="varok-header-content">
      <div class="header-title">
        <router-link to="/">
          <span>VAROKS</span>
        </router-link>
      </div>
      <div class="menu-list">
        <a href="http://">首页</a>
        <a href="http://">留言</a>
        <a href="http://">友邻</a>
      </div>
      <div class="header-right-content">
        <Button class="login-btn" type="primary" @click="handleLoginEvent">登录</Button>
      </div>
    </div>
    <!-- 登录与注册 -->
    <loginAndRegister v-if="LoginAndRegisterVisible" @close="LoginAndRegisterVisible = false"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { LoginAndRegister } from '@/components'

@Component({
  name: 'VarokHeader',
  components: {
    LoginAndRegister
  }
})
export default class VarokHeader extends Vue {
  // 登录注册弹出框显示、隐藏
  private LoginAndRegisterVisible: boolean = false

  // methods
  handleLoginEvent (): void {
    this.LoginAndRegisterVisible = true
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.varok-header {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
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
      display: flex;
      align-items: center;
      a {
        display: block;
      }
      span {
        font-size: 26px;
        font-family: @defaultFontFamily!important;
        color: @white;
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
