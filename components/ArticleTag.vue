<template>
  <div class="article-tag" v-if="tagName" @click="handleClick">
    <div class="article-tag-content">
      <Icon v-if="iconType" class="tag-icon" :type="iconType" />
      <span class="tag-name">{{ tagName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component({
  name: 'ArticleTag'
})
export default class ArticleTag extends Vue {
  @Prop(String)
  private iconType?: string

  @Prop(String)
  private tagName!: string

  @Emit()
  handleClick() {}
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.article-tag {
  display: inline-block;
  padding: 0 15px;
  border-radius: 4px;
  border: 1px solid @borderColorDeep;
  width: auto;
  height: 38px;
  line-height: 38px;
  cursor: pointer;
  &-content{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .tag-icon {
    margin-right: 8px;
    font-size: 20px;
  }
  .tag-name {
    font-family: @defaultFontFamily;
  }
}
</style>
