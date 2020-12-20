import Vue from 'vue';
import axios from 'axios';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Favorites: [],
    Movies: [],
    TvShows: [],
  },
  getters: {
    Favorites: (state) => {
      state.Movies.filter((element) => element.favory);
      // state.TvShows.filter((element) => element.favory);
    },
  },
  mutations: {
    addFavory(state, item) {
      const foundFav = state.Favorites.find((element) => element.id === item.id);
      if (foundFav) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < state.Favorites.length; i++) {
          const element = state.Favorites[i];
          if (element.id === item.id) {
            state.Favorites.splice(i, 1);
          }
        }
      } else {
        // eslint-disable-next-line no-param-reassign
        item.active = true;
        state.Favorites.push(item);
        console.log('is Active ?', item);
      }
    },
    // addAllMovies(state, page) {
    //   axios
    //     .get(`https://api.themoviedb.org/3/movie/popular?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US&page=${page}`)
    //     .then((response) => {
    //       response.data.results.forEach((element) => {
    //         const alreadyInState = state.Movies.find((movie) => movie.id === element.id);
    //         if (!alreadyInState) {
    //           // eslint-disable-next-line no-param-reassign
    //           element.favory = false;
    //           state.Movies.push(element);
    //         }
    //       });
    //     });
    // },
    // addAllTvShows(state, page) {
    //   axios
    //     .get(`https://api.themoviedb.org/3/tv/popular?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US&page=${page}`)
    //     .then((response) => {
    //       response.data.results.forEach((element) => {
    //         const alreadyInState = state.TvShows.find((tvShow) => tvShow.id === element.id);
    //         if (!alreadyInState) {
    //           // eslint-disable-next-line no-param-reassign
    //           element.favory = false;
    //           state.TvShows.push(element);
    //         }
    //       });
    //     });
    // },
    addOrRemoveFav(state, favoryToAdd) { // ajouter spécification movie or tvshow
      const alReadyInState = state.Favorites.find((item) => item.id === favoryToAdd.id);
      // console.log(alReadyInState);
      if (favoryToAdd.title) {
        // après ajout ou sup
        const newMovieFav = state.Movies.find((Movie) => Movie.id === favoryToAdd.id);
        if (newMovieFav.favory && !alReadyInState) {
          newMovieFav.favory = true;
          state.Favorites.push(newMovieFav);
        } else {
          newMovieFav.favory = false;
          const index = state.Favorites.findIndex((Movie) => Movie.id === favoryToAdd.id);
          // console.log(index);
          state.Favorites.splice(index, 1);
        }
      } else if (favoryToAdd.name) {
        const newTvShowFav = state.TvShows.find((TvShow) => TvShow.id === favoryToAdd.id);
        if (newTvShowFav.favory && !alReadyInState) {
          newTvShowFav.favory = true;
          state.Favorites.push(newTvShowFav);
        } else {
          newTvShowFav.favory = false;
          const index = state.Favorites.findIndex((Movie) => Movie.id === favoryToAdd.id);
          // console.log(index);
          state.Favorites.splice(index, 1);
        }
      }
    },
  },
  actions: {
    // request ici
    addAllTvShows(state, page) {
      axios
        .get(`https://api.themoviedb.org/3/tv/popular?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US&page=${page}`)
        .then((response) => {
          response.data.results.forEach((element) => {
            const alreadyInState = state.TvShows.find((tvShow) => tvShow.id === element.id);
            if (!alreadyInState) {
              // eslint-disable-next-line no-param-reassign
              element.favory = false;
              state.TvShows.push(element);
            }
          });
        });
    },
    addAllMovies(state, page) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US&page=${page}`)
        .then((response) => {
          response.data.results.forEach((element) => {
            const alreadyInState = state.Movies.find((movie) => movie.id === element.id);
            if (!alreadyInState) {
              // eslint-disable-next-line no-param-reassign
              element.favory = false;
              state.Movies.push(element);
            }
          });
        });
    },
  },
  modules: {
  },
});
