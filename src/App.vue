<template>
  <router-view/>
</template>

<script>
import { ref,provide } from 'vue'



export default {
  name: 'App',
  setup(){
    const memuVisible=ref(false)
    //后代都可以调用
    provide('menuVisible',memuVisible)
  }
}
</script>
