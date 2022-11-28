<template>
    <div>this is button</div>
    <h1>示例1</h1>
    <Button theme=""> hi</Button>
    <Button theme="button"> hi</Button>
    <Button theme="link"> hi</Button>
    <Button theme="text"> hi</Button>
    <h1>示例2</h1>
    <Button size="big"> 大大大</Button>
    <Button > 普通</Button>
    <Button size="small" >小小小 </Button>
    <div>
    <Button size="big" theme="link"> 大大大</Button>
    <Button theme="link" > 普通</Button>
    <Button size="small" theme="link">小小小 </Button>
    </div>
    <div>
    <Button size="big" theme="text"> 大大大</Button>
    <Button theme="text" > 普通</Button>
    <Button size="small" theme="text">小小小 </Button>
    </div>
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
