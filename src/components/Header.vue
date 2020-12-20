<template>
  <header id="Header">
    <nav class="navigation-bar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/TvShows">Tv show</router-link></li>
        <li><router-link to="/MyFavorites">My Favs</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',

});
</script>
<style lang="scss">
  @import '../assets/scss/_colors.scss';

#Header {
  background-color: $classic-black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  height: 88px;
  .navigation-bar {
    ul {
      display: flex;
      font-size: 20px;
      padding: 20px;
      font-weight: 700;
      li {
        padding: 20px 0;
        border-bottom: 2px solid rgba(255, 255, 255, 0);
        transition: border-bottom 0.25s ease-in-out;
        a{
          color: $light-white;
          &:hover {
            color: $hover-white;
          }
        }
      }
      li:hover {
        border-bottom: 2px solid rgba(255, 255, 255, 1);
      }
      li:not(:last-child) {
        margin-right: 25px;
      }
    }
  }
}
</style>
