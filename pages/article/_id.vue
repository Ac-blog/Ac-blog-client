<template>
  <div class="article-detail">
    <div class="varok-article" v-html="articleDetailMsg.body"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { getArticleDetail } from '@/api/blog'

@Component({
  name: 'ArticleDetail'
})


export default class ArticleDetail extends Vue {
  // 文章详情对象
  private articleDetailMsg: any = {}

  @Watch('$route', {
    immediate: true,
  })
  private routeChange (to: Route, from: Route) {
    this.fetchArticleDetail(to.params.id)
  }

  // methods
  /**
   * 获取文章详情页内容
   * @param {string} articleId - 文章 id
  */
  async fetchArticleDetail (articleId) {
    const res = await getArticleDetail({
      articleId
    })
    this.articleDetailMsg = res.results
    console.log(this.articleDetailMsg)
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/article.less';
@import '~@/styles/var.less';
.article-detail {
  margin: 120px auto 80px;
  border: 1px solid @borderColor;
  width: 1000px;
}
</style>
