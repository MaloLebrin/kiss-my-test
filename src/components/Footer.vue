<template>
  <footer id="Footer">
      <div class="container">
        Made with <span class="bold">Vuejs</span> for
        <a href="https://www.kissmy.co/" class="bold">Kiss MY</a> by
        <a href="https://github.com/MaloLebrin/" class="bold">Malo Lebrin</a>
      </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
});
</script>
<style lang="scss">
$hover-white: #f8f9facf;

#Footer {
  background-color: #000000;
  .container {
    padding: 35px 0;
    text-align: center;
    color: white;
    a {
      text-decoration: none;
    }
    .bold {
      color: $hover-white;
      font-weight: bold;
    }
  }
}
</style>
