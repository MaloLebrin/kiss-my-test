<template>
  <div id="GenreTag">
    <ul class="tag-list" >
      <li :class="genre.name" v-for="genre in genres" :key="genre.id">{{ genre.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GenreTag',
  props: {
    genres: {
      type: Array,
      default: null,
    },
  },
  // data() {
  //   return {
  //     genres: ['Action', 'War'],
  //     classTag: '',
  //   };
  // },
});
</script>
<style lang="scss">
  @import '../assets/scss/_colors.scss';

#GenreTag {
  .tag-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 20px;
    li {
      color: $classic-white;
      margin: 0 10px;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      &.Action {
        background-color:  $action-tag;
      }
      &.Adventure {
        background-color:  $adventure-tag;
      }
      &.Animation {
        background-color:  $animation-tag
      }
      &.Comedy {
        background-color:  $comedy-tag
      }
      &.Crime {
        background-color:  $crime-tag;
      }
      &.Documentary {
        background-color:  $documentary-tag;
      }
      &.Drama {
        background-color:  $drama-tag;
      }
      &.Family {
        background-color:  $family-tag;
      }
      &.Fantasy {
        background-color: $fantasy-tag;
      }
      &.History {
        background-color:  $history-tag;
      }
      &.Horror {
        background-color:  $horror-tag;
      }
      &.Music {
        background-color:  $musics-tag;
      }
      &.Mystery {
        background-color:  $mystery-tag;
      }
      &.Romance {
        background-color:  $romance-tag;
      }
      &.Science {
        background-color: $science-tag;
      }
      &.Thriller {
        background-color: $thriller-tag;
      }
      &.TV {
        background-color:  $tv-tag;
      }
      &.War{
        background-color: $war-tag;
      }
      &.Western {
        background-color:  $western-tag;
      }
    }
  }
}
</style>
