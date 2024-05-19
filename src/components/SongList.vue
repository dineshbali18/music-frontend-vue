<template>
<div>
<!-- <NavBar /> -->
  <div>
    <h3>Top Trending</h3>
    <div class="song-container">
      <div v-for="song in songs" :key="song.id" class="song-card">
        <img :src="song.image" class="song-image" alt="Song Image">
        <div class="song-details">
          <h2>{{ song.name }}</h2>
          <div class="song-actions">
            <router-link :to="'/update/' + song.id" class="btn btn-primary">Update</router-link>
            <button @click="confirmDelete(song.id)" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
import axios from 'axios';

export default {
  name: 'SongList',
  components: {
    // NavBar,
  },
  data() {
    return {
      songs: [
        {
          id: 1,
          name: "guntur karam",
          image: "https://gallery.123telugu.com/content/images/guntur-fea.jpg"
        }
      ],
    };
  },
  created() {
    this.fetchSongs();
  },
  methods: {
    fetchSongs() {
      axios.get('http://localhost:80/v1/get/music',{headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        }})
        .then(response => {
          console.log(response)
          this.songs = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    confirmDelete(id) {
      if (confirm("Are you sure you want to delete this song?")) {
        this.deleteSong(id);
      }
    },
    deleteSong(id) {
      axios.delete(`http://localhost:80/v1/delete/music/${id}`,{
         headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        },
      })
        .then(response => {
          console.log(response.status)
          this.fetchSongs();
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.song-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.song-card {
  width: 300px;
  margin: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.song-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.song-details {
  padding: 20px;
}

.song-details h2 {
  margin: 0 0 10px;
}

.song-actions {
  display: flex;
  justify-content: space-between;
}
</style>
