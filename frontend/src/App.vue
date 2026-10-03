<template>
  <div class="app-shell">
    <aside class="app-side">
      <h1 class="app-title">数据中心动力环境运维管理平台</h1>
      <nav class="nav-list">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item">
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>
    <main class="app-main">
      <header class="app-head">
        <span class="head-desc">面向机房台账、机柜位管理、不间断电源、精密空调、低压配电柜、柴油发电机组、蓄电池组、动环监控点、温湿度采集、漏水检测、气体消防、门禁通道、视频监控点位、告警处置、巡检任务、容量规划、线缆敷设与值班交接的一体化数据中心动力环境运维工作台。</span>
        <span class="head-user">当前值班：{{ store.operator }} · {{ store.shiftLabel }}</span>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/stores/session'

const store = useSessionStore()

const navItems = [{ label: "运营概览", path: "/" }, { label: "机房台账", path: "/room" }, { label: "机柜位管理", path: "/rack" }, { label: "不间断电源", path: "/ups" }, { label: "精密空调", path: "/crac" }, { label: "低压配电柜", path: "/powerdist" }, { label: "柴油发电机组", path: "/genset" }, { label: "蓄电池组", path: "/battery" }, { label: "动环监控点", path: "/dcm" }, { label: "温湿度采集", path: "/th" }, { label: "漏水检测", path: "/leak" }, { label: "气体消防", path: "/firegas" }, { label: "门禁通道", path: "/access" }, { label: "视频监控点位", path: "/cctv" }, { label: "告警处置", path: "/alarm" }, { label: "巡检任务", path: "/inspect" }, { label: "容量规划", path: "/capacity" }, { label: "线缆敷设", path: "/cabling" }, { label: "值班交接班", path: "/shift" }]
</script>
