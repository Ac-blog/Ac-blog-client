<template>
  <div class="login-and-register">
    <div class="modal-content">
      <div class="modal-header">
        <Icon type="md-arrow-back" @click="handleCloseEvent"/>
      </div>
      <div class="modal-middle">
        <h2 class="line-top">
          欢迎回来，
          <span class="register-btn" @click="switchStatus">{{ status === 0 ? '注册' : '登录' }}</span>
        </h2>
        <h3 class="line-bottom">请正确填写以下信息进行登录</h3>
      </div>
      <div class="modal-formdata">
        <Form ref="formdata" :model="varokFormdata" :rules="ruleValidate" :label-width="50" label-position="left">
          <FormItem label="邮箱" prop="email">
            <Input v-model="varokFormdata.email" placeholder="请输入邮箱地址"></Input>
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input v-model="varokFormdata.password" placeholder="请输入密码"></Input>
          </FormItem>
          <template v-if="status === 1">
            <FormItem label="昵称" prop="nickname">
              <Input v-model="varokFormdata.nickname" placeholder="请输入昵称"></Input>
            </FormItem>
            <FormItem class="image-radio-item" label="头像" prop="avatar">
              <RadioGroup v-model="varokFormdata.avatar">
                  <Radio label="male">
                    <img src="https://img1.dxycdn.com/2020/0430/149/3410754632845680955-2.jpg" alt="">
                  </Radio>
                  <Radio label="female">
                    <img src="https://img1.dxycdn.com/2020/0430/302/3410754922755981437-2.jpg" alt="">
                  </Radio>
              </RadioGroup>
            </FormItem>
          </template>
          <FormItem>
            <div class="next-btn" @click="handleNextClick">继续<Icon type="md-arrow-forward" /></div>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

interface FormItem {
  email: string,
  password: string,
  nickname?: string,
  avatar?: string
}

@Component({
  name: 'LoginAndRegister'
})
export default class LoginAndRegister extends Vue {
  @Prop({
    type: Boolean,
    default: false
  })
  private LoginAndRegisterVisible!: boolean

  /**
   * 登录注册框状态
   * 登录框：status = 0 默认
   * 注册框：status = 1
   */
  private status: number = 0

  // 注册表单对象
  private varokFormdata: FormItem = {
    email: '',
    password: '',
    nickname: '',
    avatar: ''
  }

  // 表单项验证
  private ruleValidate: any = {
    email: [
      { required: true, message: '请填写你的邮箱地址', trigger: 'blur' },
      { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请设置你的密码', trigger: 'blur' },
      { min: 6, message: '密码最少 6 位，数字、字母不限制', trigger: 'blur' }
    ],
    nickname: [
      { required: true, message: '请填写你的昵称', trigger: 'blur' }
    ],
    avatar: [
      { required: true, message: '请选择一个头像', trigger: 'change' }
    ],
  }

  // methods
  // 关闭弹出框
  @Emit('close')
  handleCloseEvent () {
    return true
  }

  // 切换状态
  switchStatus (): void {
    this.status = this.status === 0 ? 1 : 0
  }

  // 保存表单
  handleNextClick (): void {
    const ref = this.$refs.formdata as HTMLFormElement
    ref.validate((valid: boolean) => {
      if (valid) {
        // 提交 API
        this.$Message.success(this.status === 0 ? '登录成功' : '注册成功');
        ref.resetFields()
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.login-and-register {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: @maskColor;
  .modal-content {
    border-radius: 8px;
    width: 520px;
    height: auto;
    background-color: @black_middle;
    .modal-header {
      padding: 10px 30px 0;
      height: 58px;
      line-height: 48px;
      /deep/.ivu-icon {
        font-size: 28px;
        color: @white;
        cursor: pointer;
      }
    }
    .modal-middle {
      margin-top: 10px;
      padding: 0 30px;
      .line-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28px;
        color: @white;
        .register-btn {
          font-size: 16px;
          color: @orange;
          cursor: pointer;
        }
      }
      .line-bottom {
        margin-top: 10px;
        font-size: 16px;
        color: @white_high;
      }
    }
  }
  .modal-formdata {
    margin-top: 35px;
    padding: 0 30px;
    /deep/.ivu-form-item {
      margin-bottom: 35px;
      &-label {
        color: @white_high;
      }
    }
    .image-radio-item {
      /deep/.ivu-radio-group {
        display: flex;
        width: 100%;
      }
      /deep/.ivu-radio-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        justify-content: center;
        margin-right: 25px;
        width: 80px;
      }
      /deep/.ivu-radio {
        display: block;
        margin-top: 10px;
        text-align: center;
      }
      img {
        border-radius: 50%;
        border: 1px solid @borderColor;
        width: 100%;
      }
    }
    .next-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto 0;
      transform: translateX(-20px);
      border-radius: 4px;
      width: 160px;
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      color: @white;
      background-color: @black_high;
      cursor: pointer;
      &:hover {
        background-color: @black_low;
      }
      /deep/.ivu-icon {
        margin-left: 6px;
        font-size: 16px;
      }
    }
  }
}
</style>
