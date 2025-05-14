import {createRouter, createWebHistory, type Router} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/FirstComponent.vue'),
  },
  {
    path: '/second',
    name: 'second',
    component: () => import('@/components/SecondComponent.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('@/components/Todo/TodoList.vue'),
  },
  {
    path: '/hotel',
    name: 'hotel',
    component: () => import('@/components/Hotel/HotelLayout.vue'),
    children: [
      {
        path: 'rooms',
        name: 'rooms',
        component: () => import('@/components/Hotel/RoomList.vue'),
      },
      {
        path: 'reservations',
        name: 'reservations',
        component: () => import('@/components/Hotel/ReservationList.vue'),
      }
    ]
  }
];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});
