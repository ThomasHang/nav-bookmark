<script lang="ts" setup>
import { defineProps } from 'vue';
import Icon from './Icon.vue';
import type { NavItemData } from '../data/navItems';

defineProps<{
  title: string;
  items: NavItemData[];
}>();
</script>

<template>
  <div class="nav-card">
    <h2>{{ title }}</h2>
    <div class="nav-items">
      <a v-for="item in items" 
         :key="item.path" 
         :href="item.path" 
         target="_blank" 
         class="nav-item">
        <!-- 根据是否有 iconName 来决定显示 Icon 还是 img -->
        <Icon v-if="item.iconName" 
              :name="item.iconName" 
              size="24px" />
        <img v-else-if="item.imgSrc" 
             :src="item.imgSrc" 
             :alt="item.text">
        <span class="nav-text">{{ item.text }}</span>
        <span class="nav-desc">{{ item.desc }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.nav-card {
  margin-bottom: 24px;
}

.nav-card h2 {
  font-size: 18px;
  margin-bottom: 16px;
  color: #1f2937;
}

.nav-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  background: #f9fafb;
  transition: all 0.3s ease;
  text-decoration: none;
}

.nav-item:hover {
  background: #f3f4f6;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.nav-item img {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  object-fit: contain;
}

.nav-item :deep(.iconfont) {
  font-size: 20px;  /* 调整图标大小 */
  margin-right: 12px;
  color: #4b5563;
}

.nav-text {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
  margin-right: 8px;
}

.nav-desc {
  font-size: 12px;
  color: #6b7280;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>