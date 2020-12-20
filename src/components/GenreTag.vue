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
#GenreTag {
  .tag-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 20px;
    li {
      color: white;
      margin: 0 10px;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      &.Action {
        background-color:  #4258a1;
      }
      &.Adventure {
        background-color:  #43aa8b;
      }
      &.Animation {
        background-color:  #4ecdc4;
      }
      &.Comedy {
        background-color:  #db7c26;
      }
      &.Crime {
        background-color:  #073b4c;
      }
      &.Documentary {
        background-color:  #f4f1de;
      }
      &.Drama {
        background-color:  #f2cc8f;
      }
      &.Family {
        background-color:  #ff6b6b;
      }
      &.Fantasy {
        background-color: #ef7a85;
      }
      &.History {
        background-color:  #81b29a;
      }
      &.Horror {
        background-color:  #f4a261;
      }
      &.Music {
        background-color:  #ff6b6b;
      }
      &.Mystery {
        background-color:  #489fb5;
      }
      &.Romance {
        background-color:  #d88c9a;
      }
      &.Science {
        background-color: #2d3142;
      }
      &.Thriller {
        background-color: #50514f;
      }
      &.TV {
        background-color:  #344e41;
      }
      &.War{
        background-color: #f94144;
      }
      &.Western {
        background-color:  #a47e1b;
      }
    }
  }
}
</style>
