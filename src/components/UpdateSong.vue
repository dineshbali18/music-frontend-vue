<template>
  <div>
    <h1>Update Song</h1>
    <form @submit.prevent="updateSong">
      <input v-model="title" placeholder="Title" required />
      <input v-model="artist" placeholder="Artist" required />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Update',
  data() {
    return {
      title: '',
      artist: '',
    };
  },
  created() {
    this.fetchSong();
  },
  methods: {
    fetchSong() {
      axios.get(`http://your-api-endpoint/songs/${this.$route.params.id}`)
        .then(response => {
          const song = response.data;
          this.title = song.title;
          this.artist = song.artist;
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateSong() {
      axios.put(`http://your-api-endpoint/songs/${this.$route.params.id}`, {
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
