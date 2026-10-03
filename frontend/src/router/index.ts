import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
const Room = () => import('@/views/room/index.vue')
const Rack = () => import('@/views/rack/index.vue')
const Ups = () => import('@/views/ups/index.vue')
const Crac = () => import('@/views/crac/index.vue')
const Powerdist = () => import('@/views/powerdist/index.vue')
const Genset = () => import('@/views/genset/index.vue')
const Battery = () => import('@/views/battery/index.vue')
const Dcm = () => import('@/views/dcm/index.vue')
const Th = () => import('@/views/th/index.vue')
const Leak = () => import('@/views/leak/index.vue')
const Firegas = () => import('@/views/firegas/index.vue')
const Access = () => import('@/views/access/index.vue')
const Cctv = () => import('@/views/cctv/index.vue')
const Alarm = () => import('@/views/alarm/index.vue')
const Inspect = () => import('@/views/inspect/index.vue')
const Capacity = () => import('@/views/capacity/index.vue')
const Cabling = () => import('@/views/cabling/index.vue')
const Shift = () => import('@/views/shift/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/room', name: 'room', component: Room },
    { path: '/rack', name: 'rack', component: Rack },
    { path: '/ups', name: 'ups', component: Ups },
    { path: '/crac', name: 'crac', component: Crac },
    { path: '/powerdist', name: 'powerdist', component: Powerdist },
    { path: '/genset', name: 'genset', component: Genset },
    { path: '/battery', name: 'battery', component: Battery },
    { path: '/dcm', name: 'dcm', component: Dcm },
    { path: '/th', name: 'th', component: Th },
    { path: '/leak', name: 'leak', component: Leak },
    { path: '/firegas', name: 'firegas', component: Firegas },
    { path: '/access', name: 'access', component: Access },
    { path: '/cctv', name: 'cctv', component: Cctv },
    { path: '/alarm', name: 'alarm', component: Alarm },
    { path: '/inspect', name: 'inspect', component: Inspect },
    { path: '/capacity', name: 'capacity', component: Capacity },
    { path: '/cabling', name: 'cabling', component: Cabling },
    { path: '/shift', name: 'shift', component: Shift },
  ],
})

export default router
