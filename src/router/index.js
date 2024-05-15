// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import SongList from '@/views/Home.vue';
import Add from '@/views/AddSong.vue';
import Update from '@/views/UpdateSong.vue';
import Delete from '@/views/DeleteSong.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: SongList },
  { path: '/add', name: 'Add', component: Add },
  { path: '/update/:id', name: 'Update', component: Update },
  { path: '/delete/:id', name: 'Delete', component: Delete },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
