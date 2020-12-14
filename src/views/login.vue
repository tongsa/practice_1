<template>
  <div>
    <section class="icon-list">
      <i class="nes-mario"></i>
    </section>
    <div style="margin: 10px 20px">
      <div class="nes-field">
        <label for="name_field">Your name</label>
        <input
          type="text"
          id="name_field"
          class="nes-input"
          v-model="form.userInfo"
          placeholder="请输入账户名"
        />
      </div>
    </div>
    <div style="margin: 20px 20px 10px">
      <div class="nes-field">
        <input
          type="text"
          id="password_field"
          class="nes-input"
          v-model="form.password"
          placeholder="请输入密码"
        />
      </div>
    </div>

    <button type="button" class="nes-btn is-primary" @click="login()">
      登录
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userInfo: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.commit("login", this.form); //修改信息
      
    },
  },
};
</script>

<style lang="scss">
.item-list {
  padding: 10px;
}
</style>


