<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="nav-logo">
        <h1>Nav Bookmark</h1>
      </div>
      <a-menu v-model:selectedKeys="state.selectedKeys" 
              mode="inline" 
              :open-keys="state.openKeys" 
              :items="menuItems"
              @openChange="onOpenChange">
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="site-header">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="site-content">
        <div class="content-wrapper">
          <NavCard title="博物展览" :items="navItems" />
          <NavCard title="AI" :items="aiItems" />
          <NavCard title="UI框架" :items="uiFrameItems" />
          <NavCard title="CSS" :items="cssItems" />
          <NavCard title="地图" :items="mapItems" />
          <NavCard title="翻译" :items="translateItems" />
          <NavCard title="语言" :items="languageItems" />
          <NavCard title="游戏" :items="gameItems" />
          <NavCard title="电影" :items="movieItems" />
          <NavCard title="科学上网" :items="overTheWallItems" />

        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref, reactive, h } from 'vue';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CompassOutlined,
  RobotOutlined,
  CodeOutlined,
  GlobalOutlined,
  TranslationOutlined,
  CodeSandboxOutlined,
  VideoCameraOutlined
} from '@ant-design/icons-vue';
import type { ItemType } from 'ant-design-vue';
import NavCard from './components/NavCard.vue'
import { 
  navItems, mapItems, translateItems, languageItems, 
  gameItems, aiItems, movieItems, uiFrameItems, cssItems,overTheWallItems
} from './data/navItems'

const collapsed = ref<boolean>(false);

// 侧边栏菜单配置
const menuItems = ref([
  {
    key: 'exhibition',
    icon: () => h(CompassOutlined),
    label: '博物展览',
  },
  {
    key: 'ai',
    icon: () => h(RobotOutlined),
    label: 'AI',
  },
  {
    key: 'ui',
    icon: () => h(CodeOutlined),
    label: 'UI/CSS',
    children: [
      {
        key: 'ui-frameworks',
        label: 'UI框架',
      },
      {
        key: 'css',
        label: 'CSS',
      },
    ],
  },
  {
    key: 'tools',
    icon: () => h(GlobalOutlined),
    label: '实用工具',
    children: [
      {
        key: 'map',
        label: '地图',
      },
      {
        key: 'translate',
        label: '翻译',
      },
      {
        key: 'language',
        label: '语言',
      },
    ],
  },
  {
    key: 'entertainment',
    icon: () => h(VideoCameraOutlined),
    label: '娱乐',
    children: [
      {
        key: 'game',
        label: '游戏',
      },
      {
        key: 'movie',
        label: '电影',
      },
    ],
  },
]);

const state = reactive({
  rootSubmenuKeys: ['ui', 'tools', 'entertainment'],
  openKeys: ['ui'],
  selectedKeys: ['exhibition'],
});

const onOpenChange = (openKeys: string[]) => {
  const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};
</script>

<style scoped>
.nav-logo {
  height: 64px;
  padding: 16px;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}

.nav-logo h1 {
  color: #1890ff;
  font-size: 20px;
  margin: 0;
  white-space: nowrap;
}

.site-header {
  background: #fff;
  padding: 0;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.site-content {
  margin: 24px 16px;
  padding: 24px;
  background: #fff;
  min-height: 280px;
  overflow-y: auto;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

:deep(.ant-layout-sider-children) {
  background-color: #fff;
}
</style>
