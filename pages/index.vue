<template>
  <div class="home-page">
    <div class="page-content">
      <div class="article-lists">
        <article-card v-for="(item, index) in cardMsgList" :key="item.id" :cardMsg="item" />
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

@Component({
  components: {
    ArticleCard,
    TagsBox,
    UserProfile
  }
})
export default class IndexPage extends Vue {
  private cardMsgList: any[] = [
    {
      id: 123,
      title: '天眼陌路',
      updated: '2020 年 11 月 31 日',
      body: '说不出怎般心绪，大概是突然卸下了一切负担的反向压抑。烟圈于眼前扭曲。相背酸涩地分割，时间平衡中空间分离。     此夏终结，再也不会。     天蒙蒙，看不清前方的瞬间，立刻被过往霸占..',
      readNumber: 100,
      comments: 10,
      like: 100
    },
    {
      id: 1235,
      title: '天眼陌路',
      updated: '2020 年 11 月 31 日',
      body: '说不出怎般心绪，大概是突然卸下了一切负担的反向压抑。烟圈于眼前扭曲。相背酸涩地分割，时间平衡中空间分离。     此夏终结，再也不会。     天蒙蒙，看不清前方的瞬间，立刻被过往霸占..',
      readNumber: 100,
      comments: 10,
      like: 100
    },
    {
      id: 1234,
      title: '天眼陌路',
      updated: '2020 年 11 月 31 日',
      body: '说不出怎般心绪，大概是突然卸下了一切负担的反向压抑。烟圈于眼前扭曲。相背酸涩地分割，时间平衡中空间分离。     此夏终结，再也不会。     天蒙蒙，看不清前方的瞬间，立刻被过往霸占..',
      readNumber: 100,
      comments: 10,
      like: 100
    },
    {
      id: 1237,
      title: '天眼陌路',
      updated: '2020 年 11 月 31 日',
      body: '说不出怎般心绪，大概是突然卸下了一切负担的反向压抑。烟圈于眼前扭曲。相背酸涩地分割，时间平衡中空间分离。     此夏终结，再也不会。     天蒙蒙，看不清前方的瞬间，立刻被过往霸占..',
      readNumber: 100,
      comments: 10,
      like: 100
    },
  ]
}
</script>

<style lang="less" scoped>
.home-page {
  .page-content {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
  }
}
</style>
