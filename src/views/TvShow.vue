<template>
  <main id="TvShow">
    <div class="container">
      <div class="bloc-title">
        <h1 class="views-title">
          TV Shows
        </h1>
        <div></div>
      </div>
      <Loader v-if="isLoading"/>
      <div v-if="!isLoading" class="movies-container">
        <MovieCard
          v-for="TvShow in TvShows" :key="TvShow.id"
          elementType="OneTvShow"
          :element="TvShow"
        />
      </div>
      <div class="button-show-more-wrapper">
        <button class="show-more-button" v-on:click="getMovies(currentPage++)">Show More</button>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
import MovieCard from '../components/MovieCard.vue';
import Loader from '../components/Loader.vue';
import store from '../store/index';

export default Vue.extend({
  name: 'TvShow',
  data() {
    return {
      TvShows: {},
      isLoading: true,
      currentPage: 1,
    };
  },
  components: {
    MovieCard,
    Loader,
  },
  mounted() {
    this.$store.dispatch('addAllTvShows');
    this.getTvShows(this.currentPage);
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    currentPage: function (val) {
      this.getTvShows(val);
    },
  },
  methods: {
    // eslint-disable-next-line object-shorthand
    getTvShows: function (page) {
      store.dispatch('addAllTvShows', page);
      this.TvShows = store.state.TvShows;
      this.isLoading = false;
    },
  },
});
</script>
