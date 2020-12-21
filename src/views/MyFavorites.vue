<template>
  <main id="MyFavorites">
    <div class="container">
      <div class="bloc-title">
        <h1 class="views-title">
          My Favorites
        </h1>
        <div></div>
      </div>
      <Loader v-if="isLoading" />
      <div v-if="!isLoading" class="favorites-container">
        <MovieCard
          v-for="favory in favorites" :key="favory.id"
          :elementType="favory.title ? 'OneMovie' : 'OneTvShow'"
          :element="favory"
        />
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
  name: 'MyFavorites',
  store,
  components: {
    Loader,
    MovieCard,
  },
  data() {
    return {
      favorites: [],
      isLoading: true,
    };
  },
  mounted() {
    this.getFavorites();
    // eslint-disable-next-line no-unused-expressions
    store.getters.Favorites;
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    favorites: function () {
      this.getFavorites();
    },
  },
  methods: {
    getFavorites() {
      this.favorites = store.state.Favorites;
      this.isLoading = this.favorites.length > 0 && false;
    },
  },
});
</script>
<style lang="scss">
.favorites-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
