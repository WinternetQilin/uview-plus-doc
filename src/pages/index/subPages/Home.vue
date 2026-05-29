<script setup lang="ts">
import { useRouter } from 'vue-router'
import { componentGroups, guideItems } from '../data/components'

const router = useRouter()

function goToComponent(name: string) {
  router.push(`/components/${name}`)
}

function goToGuide(name: string) {
  router.push(`/guide/${name}`)
}
</script>

<template>
  <view class="home-content">
    <text>uview-plus</text>
    <text class="intro">全面兼容nvue/鸿蒙/uni-app-x的uni-app生态框架 - uni-app UI框架</text>

    <view class="sections">
      <view class="section">
        <text>起步</text>
        <view class="cards">
          <view
            v-for="item in guideItems"
            :key="item.name"
            class="card"
            @click="goToGuide(item.name)"
          >
            {{ item.title }}
          </view>
        </view>
      </view>

      <view
        v-for="group in componentGroups"
        :key="group.title"
        class="section"
      >
        <text>{{ group.title }}</text>
        <view class="cards">
          <view
            v-for="item in group.items"
            :key="item.name"
            class="card"
            @click="goToComponent(item.name)"
          >
            {{ item.title }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.home-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

text {
  font-size: 40px;
  color: #333;
  margin-bottom: 10px;
}

.intro {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 30px;
}

.section text {
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.card {
  padding: 15px 20px;
  background: #f5f7fa;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  color: #555;
  font-size: 14px;
  border: 1px solid #eee;
}

.card:hover {
  background: #409eff;
  color: #fff;
  border-color: #409eff;
}
</style>
