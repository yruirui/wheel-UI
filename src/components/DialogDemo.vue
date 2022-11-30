<template>
     <h1>示例1</h1>
     <Button @click="toggle">toggle</Button>
     <Dialog :visible="x" @update:visible="x = $event"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default{

     components:{
          Dialog,Button
     },
     setup(){
      const x=ref(false)
      const toggle=()=>{
          x.value=!x.value
      }
      return{x,toggle}
     }
}
</script>