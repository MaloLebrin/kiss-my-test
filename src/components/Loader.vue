<template>
  <div id="Loader">
    <div class="water"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Loader',
});
</script>
<style lang="scss">
$views-background: #131313;
$loaderSize: 200px;

#Loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(85vh - 120px);
  .water{
            width:$loaderSize;
            height: $loaderSize;
            background-color: $views-background;
            border-radius: 50%;
            position: relative;
            box-shadow: inset 0 0 30px 0 rgba(0,0,0,.7), 0 4px 10px 0 rgba(0,0,0,.7);
            overflow: hidden;
        }
        .water:before, .water:after{
            content:'';
            position: absolute;
            width:$loaderSize;
            height: $loaderSize;
            top:-100px;
            background-color: #fff;
        }
        .water:before{
            border-radius: 45%;
            background:rgba(0,0,0,.7);
            animation:wave 5s linear infinite;
        }
        .water:after{
            border-radius: 35%;
            background:rgba(255,255,255,.3);
            animation:wave 5s linear infinite;
        }
        @keyframes wave{
            0%{
                transform: rotate(0);
            }
            100%{
                transform: rotate(360deg);
            }
        }
}
</style>
