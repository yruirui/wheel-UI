<template>
    <div>tabs demo</div>
    <h1>示例1</h1>
    <Tabs>
     <Tab title="导航1">1</Tab>
     <Tab title="导航2">2</Tab>
    </Tabs>

</template>

<script lang="ts">
import Tab from '../lib/Tab.vue'
import Tabs from '../lib/Tabs.vue'
export default{
   components:{
    Tabs,Tab
   },
   setup(){
      
      
   }
}
</script>