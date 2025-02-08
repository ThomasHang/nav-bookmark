<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="nav-item">
    <img src="https://via.placeholder.com/150" alt="placeholder" class="nav-item-image" />
    <h1 class="nav-item-text">{{ msg }}</h1>
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
  width: 300px; /* 设置宽度 */
}

.nav-item:hover {
  background-color: #f0f0f0;
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
