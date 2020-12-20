<template>
  <div id="Favorite" v-on:click="addOrRemoveFav()">
    <svg :class="favos.favory ? 'active' : ''" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" class="svg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200
      0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6
      482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4
      20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import { Vue2Storage } from 'vue2-storage';
import store from '../store/index';

// Vue.use(Vue2Storage, {
//   prefix: 'app_',
//   driver: 'local',
//   ttl: 60 * 60 * 24 * 1000, // 24 hours
// });

export default Vue.extend({
  name: 'Favorite',
  store,
  props: {
    favos: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.isInFavorites();
  },
  watch: {
    isInFavorites(val) {
      this.favos.favory = val;
    },
  },
  methods: {
    isInFavorites() {
      return this.favos.favory && true;
    },
    addOrRemoveFav() {
      this.favos.favory = !this.favos.favory;
      return store.commit('addOrRemoveFav', this.favos);
    },
  },
});
</script>
<style lang="scss">
  @import '../assets/scss/_colors.scss';

#Favorite {
    svg {
      width: 60px;
      height: 60px;
      position: absolute;
      background-color: $favorite-background;
      border-radius: 70%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      left: -15px;
      top: 50%;
      font-size: 30px;
      box-shadow: -3px 2px 10px rgba(0,0,0,.5);
      color: $base-favorite;
      transform: translateY(-157%);
      transition: all .25s ease-in-out;
      font-size: inherit;
      z-index: 1000;
      overflow: hidden;
      vertical-align: -0.125em;
      &.active {
        box-shadow: 0 0 15px $hover-favorite;
        color: $hover-favorite;
      }
    }
    &:hover {
      svg {
        box-shadow: 0 0 15px $hover-favorite;
        color: $hover-favorite;
      }
    }
  }
</style>
