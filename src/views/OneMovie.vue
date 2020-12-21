<template>
  <main id="OneMovie">
    <div class="container">
      <Loader v-if="Loading" />
      <OneElement v-if="!Loading"
        :titleElement="movie.title"
        :imgElement="movie.poster_path"
        :audienceElement="movie.adult"
        :nationalityElement="movie.production_countries"
        :producersElement="movie.production_companies"
        :releaseDateElement="movie.release_date"
        :descriptionElement="movie.overview"
        :ratingsElement="movie.vote_average"
        :genreElement="movie.genres"
      />
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import Loader from '../components/Loader.vue';
import OneElement from '../components/OneElement.vue';

export default Vue.extend({
  name: 'OneMovie',
  components: {
    Loader,
    OneElement,
  },
  data() {
    return {
      Loading: true,
      movie: {},
    };
  },
  async mounted() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US`,
      )
      .then((response) => {
        this.movie = response.data;
        this.Loading = false;
      });
  },
});
</script>
