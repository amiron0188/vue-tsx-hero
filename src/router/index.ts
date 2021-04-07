import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layouts';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/hero',
    children: [
      {
        path: 'hero',
        name: 'Hero',
        component: () => import('@/views/Hero')
      },
      {
        path: 'item',
        name: 'Item',
        component: () => import('@/views/Item')
      },
      {
        path: 'summoner',
        name: 'Summoner',
        component: () => import('@/views/Summoner')
      },
      {
        path: 'herodetail/:ename',
        name: 'HeroDetail',
        component: () => import('@/views/HeroDetail')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
