<template>
    <div>this is button</div>
    <h1>示例1</h1>
    <Button @click="onClick"
    @focus="onClick"
    @mouseover="onClick"> hi</Button>
</template>
<script>
import Button from '../lib/Button.vue'

export default {
    components:{Button},
    setup() {
        const onClick=()=>{
            console.log('hi')
        }
        return {onClick}
    },
}
</script>
