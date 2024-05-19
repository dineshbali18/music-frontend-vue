<template>
  <div>
    <!-- <NavBar/> -->
    <h1>Update Song</h1>
    <form @submit.prevent="updateSong">
      <input v-model="name" placeholder="Name" required />
      <input v-model="image" placeholder="Image URL" required />
      <input type="file" @change="onFileChange" required />
      <button type="submit">Update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
// import NavBar from '@/components/NavBar.vue'

export default {
  name: 'UpdateSong',
  components:{
    // NavBar
  },
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
    updateSong() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('image', this.image);
      formData.append('file', this.file); 

      const songId = this.$route.params.id;

      axios.put(`http://localhost:80/v1/update/music/${songId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        console.log(response)
        this.$router.push('/');
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
  created() {
    const songId = this.$route.params.id;
    axios.get(`http://localhost:80/v1/music/${songId}`)
      .then(response => {
        const song = response.data;
        this.name = song.name;
        this.image = song.image;
      })
      .catch(error => {
        console.error(error);
      });
  }
};

</script>
