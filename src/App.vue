<template>
  <div id="app">
    <Header />
    <router-view id="app"/>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>
<style lang="scss">
$views-background: #131313;
$light-white: #fcfcfc;
$hover-white: #f8f9facf;
$flash-red:  #eb5555;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    text-decoration: none;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#app {
  background-color: $views-background;
  min-height: 80vh;
  .container {
    width: 70%;
    margin: 0 auto;
    padding: 40px 0;
    .bloc-title {
      .views-title {
        text-align: center;
        font-size: 60px;
        line-height: 80px;
        font-weight: 700;
        margin: 15px auto;
        color: $light-white;
        text-transform: uppercase;
        &:hover {
          color: $hover-white;
        }
      }
      div {
        height: 2px;
        width: 80%;
        margin: 0 auto 30px;
        background: linear-gradient(100deg,#161616,#eb5555 50%,#161616)
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 25px #000;
    width: 350px;
    height: 50px;
    margin: 0 auto;
    border-radius: 5px;
    .page-item {
       .page-link {
           cursor: pointer;
           margin: 0 2px;
           border: none;
           color: $light-white;
           background-color: transparent;
            font-size: 14px;
            font-weight: 800;
            transition: color 1s ease-in-out;
            &:hover {
                color:  $flash-red;
            }
           &.pagination-link--active {
               color:  $flash-red;
           }
       }
    }
  }
}
// reset css rules

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
</style>
