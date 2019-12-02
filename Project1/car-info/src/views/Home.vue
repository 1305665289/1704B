<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions, mapState} from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      list: state=>state.home.list
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList: 'home/getMasterBrandList'
    })
  },
  created() {
    // 获取首页的数据 
    console.log('$store...', this.$store);
    this.getMasterBrandList();
  }
}
</script>
