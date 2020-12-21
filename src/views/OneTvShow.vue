<template>
  <main class="OneTvShow">
    <div class="container">
      <Loader v-if="Loading" />
      <OneElement v-if="!Loading"
        :titleElement="TvShow.name"
        :imgElement="TvShow.poster_path"
        :audienceElement="TvShow.adult"
        :nationalityElement="TvShow.production_countries"
        :producersElement="TvShow.production_companies"
        :releaseDateElement="TvShow.first_air_date"
        :descriptionElement="TvShow.overview"
        :ratingsElement="TvShow.vote_average"
        :genreElement="TvShow.genres"
      />
      <div class="seasons-elements" v-if="!Loading">
        <div class="season" v-for="season in TvShow.seasons" :key="season.id">
          <div class="season-basic-infos">
            <h3 class="season-title">{{ season.name }}</h3>
            <p class="season-release-date">{{ season.air_date }}</p>
            <div class="season-description-wrapper">
              <p class="season-description">{{ season.overview }}</p>
              <p class="season-episodes-count">Number of episodes : {{ season.episode_count }}</p>
            </div>
          </div>
          <div class="season-image-wrapper">
            <img :src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+season.poster_path" :alt="season.name"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import Loader from '../components/Loader.vue';
import OneElement from '../components/OneElement.vue';

export default Vue.extend({
  name: 'OneTvShow',
  components: {
    Loader,
    OneElement,
  },
  data() {
    return {
      Loading: true,
      TvShow: {},
    };
  },
  async mounted() {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${this.$route.params.id}?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US`,
      )
      .then((response) => {
        this.TvShow = response.data;
        this.Loading = false;
      });
  },
});
</script>
<style lang="scss">
  @import '../assets/scss/_colors.scss';

.OneTvShow {
  .container {
    .seasons-elements {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 50px;
      .season {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
        .season-basic-infos {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 50%;
          width: 70%;
          box-shadow: 0 0 25px $classic-black;
          padding: 10px 15px;
          .season-title {
            color: $light-grey;
            font-size: 22px;
            font-weight: 500;
            letter-spacing: 1.2px;
            margin-bottom: 5px;
            &:hover {
              color: $hover-white;
            }
          }
          .season-release-date {
            color: $hover-white;
            font-size: 10px;
            font-weight: bold;
            &:hover {
              color: $light-grey;
            }
          }
          .season-description-wrapper {
            display: flex;
            flex-direction: column;
            margin: 20px 0 10px;
            .season-description {
              color: $red;
              line-height: 1.2;
              margin-bottom: 10px;
            }
            .season-episodes-count {
              color: $light-grey;
              font-size: 14px;
            }
          }
        }
        .season-image-wrapper {
          box-shadow: 0 0 25px $classic-black;
          margin-left: 30px;
          display: flex;
          img {
            width: 200px;
          }
        }
      }
    }
  }
}
</style>
