<template>
  <div>
    <h1>Add Song</h1>
    <form @submit.prevent="addSong">
      <input v-model="title" placeholder="Title" required />
      <input v-model="artist" placeholder="Artist" required />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Add',
  data() {
    return {
      title: '',
      artist: '',
    };
  },
  methods: {
    addSong() {
      axios.post('http://your-api-endpoint/songs', {
        title: this.title,
        artist: this.artist,
      })
      .then(response => {
        this.$router.push('/');
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
};
</script>
