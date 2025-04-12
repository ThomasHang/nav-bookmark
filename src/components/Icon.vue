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
@import url('//at.alicdn.com/t/c/font_4823877_sd3hyt6fdo.css');
/* 确保这个 URL 是你的 iconfont 项目的正确地址 */

.iconfont {
    font-family: 'iconfont' !important;
    font-size: 20px;  /* 修改默认大小 */
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
