<template>
  <div>
    <h1>Delete Song</h1>
    <p>Are you sure you want to delete this song?</p>
    <button @click="deleteSong">Yes, delete it</button>
    <router-link to="/">No, go back</router-link>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Delete',
  methods: {
    deleteSong() {
      axios.delete(`http://your-api-endpoint/songs/${this.$route.params.id}`)
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
