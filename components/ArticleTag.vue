<template>
  <div class="article-tag" v-if="tagName" @click="handleClick">
    <div class="article-tag-content">
      <span class="tag-name">{{ tagName }} <strong>[{{ articleNumebr }}]</strong> </span>
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
  private tagName!: string

  @Prop({
    type: Number,
    default: 0
  })
  private articleNumebr!: number

  @Emit()
  handleClick() {}
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.article-tag {
  display: inline-block;
  padding: 0 8px;
  border-radius: 4px;
  border: 1px solid @borderColorDeep;
  width: auto;
  height: 34px;
  line-height: 34px;
  cursor: pointer;
  &-content{
    display: flex;
    align-items: center;
    width: 100%;
  }
  .tag-name {
    font-family: @defaultFontFamily;
  }
}
</style>
