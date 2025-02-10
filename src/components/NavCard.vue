<script setup lang="ts">
import { defineProps } from 'vue';
import NavItem from './NavItem.vue';

interface NavItemData {
    path: string;
    imgSrc: string;
    text: string;
    desc: string;
}

defineProps<{ title: string; items: NavItemData[] }>();
</script>

<template>
    <div class="card-content">
        <div>
            {{ title }}
        </div>
        <div class="card-content-items">
            <NavItem v-for="item in items" :key="item.path" :msg="item.text" :img-src="item.imgSrc" :path="item.path" :desc="item.desc" />
        </div>
    </div>
</template>

<style scoped>
.card-content {}

.card-content-items {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
</style>