<template>
  <div class="varok-app">
    <varok-header />
    <div class="varok-main">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
  import VarokHeader from './VarokHeader.vue'

@Component({
  name: 'DefaultLayout',
  components: {
    VarokHeader
  }
})
export default class DefaultLayout extends  Vue {
}
</script>

<style lang="less">
@import '~@/styles/var.less';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: @darkTheme;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.varok-app {
  width: 100%;
  height: 100%;
}

.varok-main {
  margin-top: 100px;
}
</style>
