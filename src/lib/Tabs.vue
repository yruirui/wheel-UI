<template>
    <div> tabs</div>
    <!-- <component :is="defaults[0]" /> -->
</template>
<script lang="ts">


export default {
        setup(props,context){
            const defaults=context.slots.default()
      console.log({...context.slots.default()})
      
   }
}
</script>
