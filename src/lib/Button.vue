<template>
    <div :size="size">
      <button v-bind="$attrs"><slot></slot></button> 
    </div>
</template>

<script lang="ts">
export default{
    inheritAttrs:false,
    setup(props,context) {
        const {size, ...rest}=context.attrs
        return {
            size,rest
        }
    },
}
</script>