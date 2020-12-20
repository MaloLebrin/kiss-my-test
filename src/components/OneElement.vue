<template>
  <div id="OneElement">
    <div class="movie-wrapper">
      <div class="movie-poster-wrapper">
        <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+imgElement" :alt="titleElement" />
      </div>
      <div class="movie-infos-wrapper">
        <h2 class="movie-title">{{ titleElement }}</h2>
        <div class="movie-meta-data">
          <span>{{ audienceElement ? '🔞': "All Audiences" }}</span>
          <span v-if="nationalityElement.length > 0">
            Nationality : {{ nationalityElement[0].name }}</span>
          <span v-if="producersElement.length > 0">
              Producer : {{producersElement[0].name}}</span>
          <span class="movie-details-release-date"> Release date : {{releaseDateElement}}</span>
        </div>
        <p class="movie-description">{{ descriptionElement }}</p>
        <div class="movie-details-wrapper">
          <RatingStars :Rating="ratingsElement"  />
          <GenreTag :genres="genreElement" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RatingStars from './RatingStars.vue';
import GenreTag from './GenreTag.vue';

export default Vue.extend({
  name: 'OneElement',
  components: {
    RatingStars,
    GenreTag,
  },
  props: {
    titleElement: {
      type: String,
      default: null,
    },
    imgElement: {
      type: String,
      default: null,
    },
    audienceElement: {
      type: Boolean,
      default: null,
    },
    nationalityElement: {
      type: Array,
      default: null,
    },
    producersElement: {
      type: Array,
      default: null,
    },
    releaseDateElement: {
      type: String,
      default: null,
    },
    descriptionElement: {
      type: String,
      default: null,
    },
    ratingsElement: {
      type: Number,
      default: 0,
    },
    genreElement: {
      type: Array,
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
        background-color: $grey-dark;
        box-shadow: 0 0 20px $classic-black;
        width: 600px;
        padding: 20px;
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
