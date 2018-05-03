<template>
  <div class="loginpage">
    <m-unlogin v-if="userisLogin===0"/>
    <!-- <m-unlogin v-if-else="userisLogin==='B'"/> -->
    <div v-else-if="userisLogin===-1">注册页面</div>

    <div v-else-if="userisLogin===-1">登录成功</div>
  </div>
</template>

<script>
import unlogin from './unlogin'
// import register from './Register.Vue'
import { mapState } from 'vuex'
export default {
  components: {
   'm-unlogin': unlogin
  },
  computed: {
    ...mapState(['userisLogin'])
  },
  mutations: {
    ...mapState(['userisLogin'])
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../static/hotcss/px2rem.scss';
</style>
