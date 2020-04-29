<template>
  <div class="tags-box">
    <ul class="tags-box-content">
      <li class="tag-container" v-for="(item, index) in tags" :key="index">
        <article-tag
          :icon-type="item.iconType"
          :tag-name="item.tagName"
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
    { iconType: 'md-eye', tagName: '按钮一'},
    { iconType: 'md-albums', tagName: '按钮二'},
    { iconType: 'md-alert', tagName: '按钮一'},
    { iconType: 'md-aperture', tagName: '按钮一'},
    { iconType: 'md-american-football', tagName: '按钮一'},
  ]

  tagClick (): void {
    console.log('button click')
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.tags-box {
  padding: 10px;
  border: 1px solid @borderColorDeep;
  width: 380px;
  height: auto;
  box-sizing: border-box;
  &-content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    .tag-container {
      margin: 5px 20px 5px 0;
      &:nth-last-of-type(1) {
        margin-right: 0;
      }
    }
  }
}
</style>
