<template>
  <div class="home-page">
    <div class="page-content">
      <div class="article-lists">
        <article-card v-for="(item, index) in cardMsgList" :key="item.id" :cardMsg="item" />
        <Button v-if="cardMsgList.length" class="load-more-btn" type="primary" @click="handleLoadMoreClick">{{ isLoadAll ? '没有更多了' : '加载更多' }}</Button>
      </div>
      <div class="side-bar">
        <user-profile />
        <tags-box />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import { ArticleCard, TagsBox, UserProfile} from '@/components'
import { getList } from '@/api/blog'

interface PageBean {
  pageNo: number
  pageSize: number
  totalCount: number
}

@Component({
  components: {
    ArticleCard,
    TagsBox,
    UserProfile
  }
})
export default class IndexPage extends Vue {
  // 文章列表
  private cardMsgList: any[] = []
  // 当前页码
  private pageBean: PageBean = {
    pageNo: 1,
    pageSize: 10,
    totalCount: 0
  }

  // computed
  // 文章是否已经全部加载完毕
  get isLoadAll (): boolean {
    return this.pageBean.pageNo * this.pageBean.pageSize >= this.pageBean.totalCount
  }

  // methods
  async fetchArticleList () {
    const res: any = await getList({
      page: this.pageBean.pageNo
    })
    this.cardMsgList = this.cardMsgList.concat(res.items)
    this.pageBean = res.pageBean
  }

  handleLoadMoreClick () {
    if (this.isLoadAll) {
      return false
    }
    this.pageBean.pageNo++
    this.fetchArticleList()
  }

  // mounted
  mounted() {
    this.fetchArticleList()
  }
}
</script>

<style lang="less" scoped>
.home-page {
  .page-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
    .load-more-btn {
      display: block;
      margin: 50px auto 80px;
    }
  }
}
</style>
