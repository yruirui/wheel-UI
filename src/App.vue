<template>
  <router-view/>
</template>

<script>
import { ref,provide } from 'vue'



export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const memuVisible=ref(width<=500 ? false : true )
    //后代都可以调用
    provide('menuVisible',memuVisible)
  }
}
</script>
