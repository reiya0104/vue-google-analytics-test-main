/**
 * Copyright (c) 2021 reiya0104 (Student)
 * This software is released under the MIT License, see LICENSE.
 */

import { createRouter, createWebHistory } from 'vue-router'
// HomeビューとAboutビューのインポート
import Home from '@v/Home.vue';
import About from '@v/About.vue';

const routes = [
  {
    path: '/',
    component: Home  // Homeビュールーティング
  },
  {
    path: '/about',
    component: About  // Aboutビュールーティング
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
