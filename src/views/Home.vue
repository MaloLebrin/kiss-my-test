<template>
  <main id="Home">
    <div class="container">
      <div class="bloc-title">
        <h1 class="views-title">
          Movies
        </h1>
        <div></div>
      </div>
      <div v-if="!isLoading" class="movies-container">
        <MovieCard
          v-for="movie in movies" :key="movie.id"
          elementType="OneMovie"
          :element="movie"
        />
      </div>
      <Loader v-if="isLoading" />
      <div class="button-show-more-wrapper">
        <button class="show-more-button" v-on:click="getMovies(currentPage++)">Show More</button>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from 'vue';
import MovieCard from '../components/MovieCard.vue';
import Loader from '../components/Loader.vue';
import store from '../store/index';

export default Vue.extend({
  name: 'Home',
  store,
  data() {
    return {
      movies: {},
      isLoading: true,
      currentPage: 1,
    };
  },
  components: {
    MovieCard,
    Loader,
  },
  mounted() {
    this.$store.dispatch('addAllMovies');
    this.getMovies(this.currentPage);
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    currentPage: function (val) {
      this.getMovies(val);
    },
  },
  methods: {
    getMovies(page) {
      store.dispatch('addAllMovies', page);
      this.movies = store.state.Movies;
      this.isLoading = false;
    },
  },
});
</script>
<style lang="scss">

.movies-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
