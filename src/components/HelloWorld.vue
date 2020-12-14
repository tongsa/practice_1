<template>
  <div>
    {{ msg }}
    <el-button type="primary" @click="increment()">ADD</el-button>
    <el-button type="primary" @click="reduce()">DEL</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    //接收父组件传过来的数值
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    reduce() {
      this.$store.commit("reduce");
    },
    
  },
  beforeDestroy() {},
};
</script>

<style scoped>
</style>
