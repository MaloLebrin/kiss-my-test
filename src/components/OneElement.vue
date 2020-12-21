<template>
  <div id="OneElement">
    <div class="movie-wrapper">
      <div class="movie-poster-wrapper">
        <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+element.poster_path" :alt="element.title" />
      </div>
      <div class="movie-infos-wrapper">
          <Favorite :favos="element" />
        <h2 class="movie-title">{{ element.title }}</h2>
        <div class="movie-meta-data">
          <span>{{ element.adult ? '🔞': "All Audiences" }}</span>
          <span v-if="element.production_countries > 0">
            Nationality : {{ element.production_countries[0].name }}</span>
          <span v-if="element.production_companies > 0">
              Producer : {{element.production_companies[0].name}}</span>
          <span class="movie-details-release-date"> Release date : {{element.release_date}}</span>
        </div>
        <p class="movie-description">{{ element.overview }}</p>
        <div class="movie-details-wrapper">
          <RatingStars :Rating="element.vote_average"  />
          <GenreTag :genres="element.genres" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RatingStars from './RatingStars.vue';
import GenreTag from './GenreTag.vue';
import Favorite from './Favorite.vue';

export default Vue.extend({
  name: 'OneElement',
  components: {
    RatingStars,
    GenreTag,
    Favorite,
  },
  props: {
    element: {
      type: Object,
      default: null,
    },
  },
});
</script>
<style lang="scss">
  @import '../assets/scss/_colors.scss';

#OneElement {
    .movie-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      .movie-poster-wrapper {
        box-shadow: 0 0 15px $classic-black;
        margin-right: 30px;
      }
      .movie-infos-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        background-color: $grey-dark;
        box-shadow: 0 0 20px $classic-black;
        width: 600px;
        padding: 20px;
        #Favorite {
          svg {
            top: 110px;
            left: 500px;
          }
        }
        .movie-title {
          color: $classic-white;
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .movie-meta-data {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          color: $light-grey;
          font-size: 12px;
          margin-bottom: 30px;
          font-weight: 500;
          span {
            margin: 2px 0;
          }
        }
        .movie-description {
          color: $red;
          font-weight: 500;
          line-height: 1.4;
          margin-bottom: 20px;
        }
        &:hover {
          .movie-title {
            color: $hover-white;
          }
        }
      .movie-details-wrapper {
        display: flex;
        align-items: center;
        .movie-details-release-date {
          color: $light-grey;
          margin-left: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
