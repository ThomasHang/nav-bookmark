<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string; imgSrc: string; path: string; desc: string }>();


function openLink(path: string) {
  window.open(path, '_blank');
}
</script>

<template>
  <div class="nav-item" @click="openLink(path)">
    <img :src="imgSrc" alt="placeholder" class="nav-item-image" />
    <div>
      <h1 class="nav-item-text">{{ msg }}</h1>
      <div class="nav-item-desc">{{ desc }}</div>
    </div>

  </div>
</template>

<style scoped>
.nav-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s;
  width: 300px;
  /* 设置宽度 */
  cursor: pointer;
  /* 添加鼠标指针样式 */
}

.nav-item:hover {
  background-color: #f0f0f0;
}

.nav-item-desc {
  font-size: 0.8em;
  color: #666;
}

.nav-item-image {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
}

.nav-item-text {
  font-size: 1.2em;
  color: #333;
}
</style>
