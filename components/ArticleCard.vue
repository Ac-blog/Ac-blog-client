<template>
  <div class="article-card">
    <div class="preview">
      <img src="https://img1.dxycdn.com/2020/0424/279/3409583174073156398-2.png" alt="">
    </div>
    <div class="article-content">
      <h2 class="article-title">天眼陌路</h2>
      <p class="publish-date">2020 年 11 月 31 日</p>
      <div class="description">说不出怎般心绪，大概是突然卸下了一切负担的反向压抑。烟圈于眼前扭曲。相背酸涩地分割，时间平衡中空间分离。     此夏终结，再也不会。     天蒙蒙，看不清前方的瞬间，立刻被过往霸占...</div>
    </div>
    <div class="article-bar">
      <div class="bar-left">
        <a class="start-read-link" href="">开始阅读</a>
      </div>
      <div class="bar-right">
        <p class="article-data"><Icon type="md-eye" /> <span>100</span></p>
        <p class="article-data"><Icon type="md-chatboxes" /> <span>100</span></p>
        <p class="article-data"><Icon type="md-heart" /> <span>100</span></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

export default class ArticleCard extends Vue {
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.article-card {
  position: relative;
  border: 1px solid @borderColor;
  border-radius: 8px;
  width: 660px;
  height: auto;
  box-shadow: @lightBoxShadow;
  background-color: @black_middle;
  cursor: pointer;
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
