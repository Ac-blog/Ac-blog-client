<template>
  <div class="tags-box">
    <div class="tags-box-header">热门标签</div>
    <ul class="tags-box-content">
      <li class="tag-container" v-for="(item, index) in tags" :key="index">
        <article-tag
          :icon-type="item.iconType"
          :tag-name="item.tagName"
          :article-numebr="item.articleNumebr"
          @handle-click="tagClick"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ArticleTag } from '@/components'

@Component({
  name: "TagsBox",
  components: {
    ArticleTag
  }
})

export default class TagsBox extends Vue {
  private tags: any[] = [
    { tagName: '按钮一', articleNumebr: 100},
    { tagName: '按钮二', articleNumebr: 1000},
    { tagName: '按钮一', articleNumebr: 10},
    { tagName: '按钮一', articleNumebr: 0},
    { tagName: '按钮一', articleNumebr: 100},
  ]

  tagClick (): void {
    console.log('button click')
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.tags-box {
  border: 1px solid @borderColorDeep;
  width: 320px;
  height: auto;
  box-sizing: border-box;
  &-header {
    padding: 10px;
    border-bottom: 1px solid @borderColorDeep;
    font-size: 14px;
    font-family: @defaultFontFamily;
    color: @white;
  }
  &-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 10px 15px;
    width: 100%;
    height: 100%;
    .tag-container {
      margin: 5px 15px 5px 0;
      &:nth-last-of-type(1) {
        margin-right: 0;
      }
    }
  }
}
</style>
