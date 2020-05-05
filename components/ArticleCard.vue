<template>
  <div class="article-card">
    <div class="preview">
      <img src="https://img1.dxycdn.com/2020/0424/279/3409583174073156398-2.png" alt="">
    </div>
    <div class="article-content">
      <h2 class="article-title">{{ cardMsg.title }}</h2>
      <p class="publish-date">{{ cardMsg.updated }}</p>
      <div class="description">{{ cardMsg.body | filterHTMLTag }}</div>
    </div>
    <div class="article-bar">
      <div class="bar-left">
        <router-link class="start-read-link" :to="`/article/${cardMsg._id}`">开始阅读</router-link>
      </div>
      <div class="bar-right">
        <p class="article-data"><Icon type="md-eye" /> <span>{{ cardMsg.readNumber }}</span></p>
        <p class="article-data"><Icon type="md-chatboxes" /> <span>{{ cardMsg.comments.length }}</span></p>
        <p class="article-data"><Icon type="md-heart" /> <span>{{ cardMsg.like }}</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'ArticleCard'
})
export default class ArticleCard extends Vue {
  @Prop({
    type: Object,
    default: () => {}
  })
  private cardMsg!: any
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.article-card {
  position: relative;
  margin-top: 35px;
  border: 1px solid @borderColor;
  border-radius: 8px;
  width: 660px;
  height: auto;
  box-shadow: @lightBoxShadow;
  background-color: @black_middle;
  cursor: pointer;
  &:nth-of-type(1) {
    margin-top: 0;
  }
  .preview {
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: calc(660px * (10 / 21));
    background-color: @white;
    img {
      width: 100%;
      max-height: 100%;
    }
  }
  .article-content {
    .article-title {
      padding: 20px;
      line-height: 32px;
      font-size: 24px;
      color: @white;
    }
    .publish-date {
      margin-top: -12px;
      padding: 0 20px;
      line-height: 22px;
      font-size: 14px;
      color: @white_high;
    }
    .description {
      padding: 20px;
      line-height: 22px;
      font-size: 14px;
      color: @white;
    }
  }
  .article-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 20px;
    .bar-left {
      .start-read-link {
        font-size: 14px;
        color: @orange;
      }
    }
    .bar-right {
      display: flex;
      .article-data {
        display: flex;
        align-items: center;
        margin-right: 30px;
        line-height: 22px;
        font-size: 12px;
        color: @white;
        &:nth-last-of-type(1) {
          margin-right: 0;
        }
      }
      /deep/.ivu-icon {
        margin-right: 3px;
        font-size: 12px;
        color: @white;
        &.ivu-icon-md-eye {
          font-size: 24px;
        }
        &.ivu-icon-md-chatboxes {
          font-size: 21px;
        }
        &.ivu-icon-md-heart {
          font-size: 19px;
        }
      }
    }
  }
}
</style>
