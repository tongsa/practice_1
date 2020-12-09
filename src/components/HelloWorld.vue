<template>
<div>
  {{msg}}
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
    //接收父组件传过来的数值
  },
  data(){
    return{
    }
  },
  computed:{
  
  },
  created(){
  
  },
  beforeDestroy(){

  }
  }
</script>

<style scoped>

</style>
