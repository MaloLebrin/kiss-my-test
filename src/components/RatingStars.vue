<template>
  <div id="Rating-Stars">
    <StarRating v-model="rating" :star-size='20' :show-rating='false'/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import StarRating from 'vue-star-rating';

export default Vue.extend({
  name: 'RatingStars',
  components: {
    StarRating,
  },
  props: {
    Rating: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return { rating: this.Rating / 2 };
  },
});
</script>
<style lang="scss">
#Rating-Stars {
}
</style>
