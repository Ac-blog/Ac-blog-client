<template>
  <div class="home-page">
    <div class="page-content">
      <div class="article-lists">
        <article-card />
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
