<template>
  <div>
    <h1>Add Song</h1>
    <form @submit.prevent="addSong">
      <input v-model="name" placeholder="Name" required />
      <input v-model="image" placeholder="Image URL" required />
      <input type="file" @change="onFileChange" required />
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
      name: '',
      image: '',
      file: null, 
    };
  },
  methods: {
    onFileChange(event) {
      this.file = event.target.files[0];
    },
    addSong() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('image', this.image);
      formData.append('file', this.file);

      axios.post('http://localhost:80/v1/add/music', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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