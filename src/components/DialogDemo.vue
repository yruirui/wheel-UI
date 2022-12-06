<template>
     <h1>示例1</h1>
     <Button @click="toggle">toggle</Button>
     <Dialog v-model:visible="x" :closeOnClickOverlay=false :ok="f1" :cancel="f2" >
     <template v-slot:content>
          <p>1</p>
          <p>2</p>
     </template>
     <template v-slot:title>
          <div>标题</div>
     </template>
     </Dialog>
     <h1>示例2</h1>
     <Button @click="showDialog">show</Button>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
import {openDialog} from '../lib/openDialog'

export default{

     components:{
          Dialog,Button
     },
     setup(){
      const x=ref(false)
      const toggle=()=>{
          x.value=!x.value
      }
      const f1=()=>{
          return false
          
      }
      const f2=()=>{}
     const showDialog=()=>{
          openDialog({title:'你好',content:"文本",
     ok:()=>{ console.log('ok');
     },
     cancel:()=>{console.log('cancel');}
     })

     }
      return{x,toggle,f1,f2,showDialog}
     }
}
</script>