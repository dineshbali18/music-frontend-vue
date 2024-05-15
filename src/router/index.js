// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import SongList from '@/components/SongList';
import AddSong from '@/components/AddSong';
import UpdateSong from '@/components/UpdateSong.vue';
import DeleteSong from '@/components/DeleteSong.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: SongList },
  { path: '/add', name: 'Add', component: AddSong },
  { path: '/update/:id', name: 'Update', component: UpdateSong },
  { path: '/delete/:id', name: 'Delete', component: DeleteSong },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
