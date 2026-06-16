<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { computed, defineAsyncComponent, ref } from 'vue'
import { allComponents, componentGroups, guideItems } from './data/components'

defineOptions({
  name: 'Home',
})
definePage({
  type: 'home',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
})

interface SidebarItem {
  title: string
  path: string
}

interface SidebarGroup {
  title: string
  items: SidebarItem[]
}

const sidebarGroups = computed<SidebarGroup[]>(() => {
  const groups: SidebarGroup[] = [
    {
      title: '起步',
      items: guideItems.map(item => ({ ...item, path: `/guide/${item.name}` })),
    },
  ]

  groups.push(
    ...componentGroups.map(group => ({
      title: group.title,
      items: group.items.map(item => ({
        ...item,
        path: `/components/${item.name}`,
      })),
    })),
  )

  return groups
})

const expandedGroups = ref<Set<string>>(
  new Set([
    '起步',
    '新增组件',
    '基础组件',
    '表单组件',
    '数据组件',
    '反馈组件',
    '布局组件',
    '导航组件',
    '其他组件',
  ]),
)

function toggleGroup(title: string) {
  if (expandedGroups.value.has(title)) {
    expandedGroups.value.delete(title)
  }
  else {
    expandedGroups.value.add(title)
  }
}

const currentPath = ref('')
const activePath = ref('')

function goToPage(path: string) {
  currentPath.value = path
  activePath.value = path
}

function goHome() {
  currentPath.value = ''
  activePath.value = ''
}

function isActive(path: string) {
  return activePath.value === path
}

const componentMap: Record<string, any> = {
  '/guide/intro': defineAsyncComponent(() => import('./subPages/intro.vue')),
  '/guide/install': defineAsyncComponent(() => import('./subPages/install.vue')),
  '/guide/setting': defineAsyncComponent(() => import('./subPages/setting.vue')),
  '/guide/quickstart': defineAsyncComponent(() => import('./subPages/quickstart.vue')),
  '/guide/common': defineAsyncComponent(() => import('./subPages/common.vue')),
  '/guide/feature': defineAsyncComponent(() => import('./subPages/feature.vue')),
  '/guide/diff1.x': defineAsyncComponent(() => import('./subPages/diff1.x.vue')),
  '/guide/changelog': defineAsyncComponent(() => import('./subPages/changelog.vue')),
  '/guide/changeGuide': defineAsyncComponent(() => import('./subPages/changeGuide.vue')),
}

allComponents.forEach((item) => {
  const path = `/components/${item.name}`
  componentMap[path] = defineAsyncComponent(() => import(`./subPages/${item.name}.vue`))
})

const currentComponent = computed(() => {
  return currentPath.value ? componentMap[currentPath.value] : null
})

onLoad((options) => {
  if (options?.path) {
    currentPath.value = `/${options.path}`
    activePath.value = `/${options.path}`
  }
})
</script>

<template>
  <view class="docs-layout">
    <view class="navbar">
      <view class="home-link" @click="goHome">
        <image src="@/static/logo.png" alt="uview-plus" class="logo" />
        <text class="site-name">uview-plus</text>
      </view>
    </view>

    <view class="sidebar">
      <scroll-view scroll-y class="sidebar-scroll">
        <view class="sidebar-links">
          <view v-for="group in sidebarGroups" :key="group.title" class="sidebar-group">
            <view
              class="sidebar-heading"
              :class="{ open: expandedGroups.has(group.title) }"
              @click="toggleGroup(group.title)"
            >
              <text>{{ group.title }}</text>
            </view>
            <view v-show="expandedGroups.has(group.title)" class="sidebar-group-items">
              <view
                v-for="item in group.items"
                :key="item.path"
                class="sidebar-link"
                :class="{ active: isActive(item.path) }"
                @click="goToPage(item.path)"
              >
                {{ item.title }}
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <view class="page">
      <scroll-view scroll-y class="page-scroll">
        <view v-if="currentComponent" class="page-content">
          <component :is="currentComponent" />
        </view>
        <view v-else class="page-content home-content">
          <view class="mt-10">
            <image src="/static/logo.svg" alt="" class="mx-auto block h-28 w-28" />
          </view>
          <view class="mt-4 text-center text-4xl text-[#d14328]">
            uview-plus
          </view>
          <view class="mb-8 mt-2 text-center text-2xl">
            组件文档
          </view>
          <view class="m-auto mb-2 max-w-100 text-justify indent text-4">
            点击左侧组件查看详情
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.docs-layout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #eaecef;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
}

.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.home-link .logo {
  height: 32px;
  width: 32px;
  margin-right: 10px;
}

.site-name {
  font-size: 20px;
  font-weight: 600;
  color: #409eff;
}

.sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 260px;
  background: #f5f5f5;
  border-right: 1px solid #eaecef;
  z-index: 50;
}

.sidebar-scroll {
  height: 100%;
  padding: 20px 0;
}

.sidebar-links {
  list-style: none;
}

.sidebar-group {
  margin-bottom: 10px;
}

.sidebar-heading {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: '▶';
    font-size: 10px;
    transition: transform 0.3s;
  }

  &.open::after {
    transform: rotate(90deg);
  }
}

.sidebar-group-items {
  padding-left: 0;
}

.sidebar-link {
  display: block;
  padding: 8px 20px 8px 30px;
  font-size: 14px;
  color: #555;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #409eff;
  }

  &.active {
    color: #409eff;
    font-weight: 500;
  }
}

.page {
  position: fixed;
  top: 60px;
  left: 260px;
  right: 0;
  bottom: 0;
  background: #f5f5f5;
}

.page-scroll {
  height: 100%;
}

.page-content {
  padding: 20px;
  min-height: 100%;
}

.home-content {
  max-width: 800px;
}
</style>
