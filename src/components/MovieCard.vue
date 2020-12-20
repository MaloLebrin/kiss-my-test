<template>
  <div id="Movie-card">
    <Favorite :favos="element"/>
    <router-link
      :to="`/${elementType}/${element.id}`"
      class="item-content"
    >
      <div class="item-img">
        <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+element.poster_path" :alt="element.title || element.name" />
      </div>
      <div class="item-infos">
        <div class="item-infos-title">
          <h4>{{ element.title || element.name }}</h4>
        </div>
        <p class="description">
          {{ element.overview }}
        </p>
      </div>
    </router-link>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Favorite from './Favorite.vue';
import store from '../store/index';

export default Vue.extend({
  name: 'MovieCard',
  store,
  components: {
    Favorite,
  },
  props: {
    element: {
      type: Object,
      default: null,
    },
    elementType: {
      type: String,
      default: null,
    },
  },
});
</script>
<style lang="scss">
$gray-dark: #131313;

#Movie-card {
  width: 300px;
  height: 420px;
  margin-right: 20px;
  margin-bottom: 30px;
  padding: 15px;
  position: relative;
  .item-content {
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 0 15px #000;
    cursor: pointer;
    .item-img {
      flex: 1;
      opacity: 1;
      transition: opacity 0.25s ease-in-out;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    .item-infos {
      width: 30%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: width 0.25s ease-in-out;
      background-color: $gray-dark;
      // background-color: white;
      .item-infos-title {
        display: flex;
        justify-content: flex-end;
        h4 {
          font-size: 20px;
          line-height: 50px;
          margin-left: -65px;
          z-index: 3;
          color: white;
          text-transform: uppercase;
          text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        }
      }
      &::before {
        z-index: 2;
        content: "";
        position: absolute;
        display: inline-block;
        top: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        height: 0;
        width: 0;
        border-bottom: 425px solid $gray-dark;
        border-left: 100px solid transparent;
      }
      .description {
        opacity: 0;
        height: 50px;
        color: #eb5555;
        overflow: hidden;
        margin-right: 15px;
        transition: all 0.25s ease-in;
      }
    }
    &:hover {
      .item-img {
        opacity: 0.5;
      }
      .item-infos {
        width: 50%;
      }
      .description {
        height: 270px;
        opacity: 1;
      }
    }
  }
}
</style>
