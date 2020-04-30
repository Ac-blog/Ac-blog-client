<template>
  <div class="user-profile">
    <div class="user-profile--avatar">
      <img :src="userProfile.avatar" alt="头像">
    </div>
    <div class="user-profile--base">
      <p class="user-name">{{ userProfile.name }}</p>
      <p class="user-description">{{ userProfile.desc }}</p>
    </div>
    <div class="user-profile--msg">
      <p class="user-company"><Icon type="md-people" />{{ userProfile.company }}</p>
      <p class="user-address"><Icon type="md-globe" />{{ userProfile.address }}</p>
      <p class="user-email"><Icon type="md-mail" />{{ userProfile.email }}</p>
      <ul class="user-social" v-if="userProfile.socialList.length">
        <li
          class="social-item"
          v-for="(item, index) in userProfile.socialList">
          <a :href="item.link"><Icon :type="item.iconType" /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

/**
 * 定义用户信息接口
*/
interface UserProfileMsg {
  avatar: string,
  name: string,
  desc: string,
  company: string,
  address: string,
  email: string,
  socialList?: any[]
}

@Component({
  name: 'UserProfile'
})
export default class UserProfile extends Vue {
  private userProfile: UserProfileMsg = {
    avatar: 'https://avatars0.githubusercontent.com/u/17878239?s=460&u=8e383131ba2f70643adedb7e44a5fe4e71dd3988&v=4',
    name: 'AllenChinese',
    desc: 'This is AllenChinese speak',
    company: '@丁香园',
    address: 'hangzhou',
    email: '13967395932@163.com',
    socialList: [
      { iconType: 'logo-github', link: "https://github.com/AllenChinese" },
      { iconType: 'ios-chatbubbles', link: '' }
    ]
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/var.less';
.user-profile {
  padding: 30px 0 30px 30px;
  border: 1px solid @borderColorDeep;
  width: 320px;
  height: auto;
  &--avatar {
    width: 160px;
    height: 160px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &--base {
    margin-top: 20px;
    color: @white;
    font-size: 14px;
    font-family: @defaultFontFamily;
  }
  &--msg {
    margin-top: 20px;
    font-size: 14px;
    color: @white_high;
    font-family: @defaultFontFamily;
    p {
      display: flex;
      align-items: center;
      line-height: 28px;
      /deep/.ivu-icon {
        margin-right: 6px;
        font-size: 16px;
      }
    }
    .user-social {
      display: flex;
      margin-top: 10px;
      font-size: 24px;
      color: @white;
      cursor: pointer;
      .social-item {
        margin-right: 20px;
        &:nth-last-of-type(1) {
          margin-right: 0;
        }
        &:hover {
          color: @orange;
        }
      }
    }
  }
}
</style>
