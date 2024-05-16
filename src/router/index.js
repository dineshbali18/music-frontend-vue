// src/router/index.js
// import Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import SongList from '@/components/SongList';
import AddSong from '@/components/AddSong';
import UpdateSong from '@/components/UpdateSong.vue';

const routes = [
  { path: '/', name: 'Home', component: SongList },
  { path: '/add', name: 'Add', component: AddSong },
  { path: '/update/:id', name: 'Update', component: UpdateSong },
];

const router = new createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
