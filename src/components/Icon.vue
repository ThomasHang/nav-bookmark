<template>
    <i :class="['iconfont', `icon-${name}`]" :style="{ fontSize: size, color: color }"></i>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps<{
    name: string;
    size?: string;
    color?: string;
}>();
</script>

<style scoped>
@import url('//at.alicdn.com/t/c/font_4823877_w394teoctvm.css');
/* 替换为你的iconfont项目地址 */

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
