<template>
  <div>导航栏</div>
  <router-link to="/">首页</router-link>
  <router-link to="/2">选项2</router-link>
  <hr />
  <router-view/>
</template>

<script>
import fu from './components/fu.vue'

export default {
  name: 'App',
  components: {
    fu
  }
}
</script>
