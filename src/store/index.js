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
      console.log('dans le getter');
      Object.values(localStorage).forEach((value) => {
        const itemInFav = JSON.parse(value);
        console.log(itemInFav);
        const alReadyInState = state.Favorites.find((item) => item.id === itemInFav.id);
        if (!alReadyInState) {
          state.Favorites.push(itemInFav);
        }
      });
      state.Movies.filter((element) => element.favory);
      state.TvShows.filter((element) => element.favory);
    },
  },
  mutations: {
    addOrRemoveFav(state, favoryToAdd) {
      const alReadyInState = state.Favorites.find((item) => item.id === favoryToAdd.id);
      if (favoryToAdd.title) {
        // après ajout ou sup
        const newMovieFav = state.Movies.find((Movie) => Movie.id === favoryToAdd.id);
        if (newMovieFav.favory && !alReadyInState) {
          newMovieFav.favory = true;
          state.Favorites.push(newMovieFav);
          const NewMovieFavInLocalStorage = JSON.stringify(newMovieFav);
          localStorage.setItem(`${newMovieFav.id}`, NewMovieFavInLocalStorage);
        } else {
          console.log('dans la sup');
          newMovieFav.favory = false;
          const index = state.Favorites.findIndex((Movie) => Movie.id === favoryToAdd.id);
          state.Favorites.splice(index, 1);
          localStorage.removeItem(`${newMovieFav.id}`);
        }
      } else if (favoryToAdd.name) {
        const newTvShowFav = state.TvShows.find((TvShow) => TvShow.id === favoryToAdd.id);
        if (newTvShowFav.favory && !alReadyInState) {
          newTvShowFav.favory = true;
          state.Favorites.push(newTvShowFav);
          const NewTvShowavInLocalStorage = JSON.stringify(newTvShowFav);
          localStorage.setItem(`${newTvShowFav.id}`, NewTvShowavInLocalStorage);
        } else {
          newTvShowFav.favory = false;
          const index = state.Favorites.findIndex((Movie) => Movie.id === favoryToAdd.id);
          state.Favorites.splice(index, 1);
          localStorage.removeItem(`${newTvShowFav.id}`);
        }
      }
    },
    addDataTvShowToState: (state, data) => {
      data.results.forEach((element) => {
        const alreadyInState = state.TvShows.find((tvShow) => tvShow.id === element.id);
        if (!alreadyInState) {
          // eslint-disable-next-line no-param-reassign
          element.favory = false;
          state.TvShows.push(element);
        }
      });
    },
    addDataMoviesToState: (state, data) => {
      data.results.forEach((element) => {
        const alreadyInState = state.Movies.find((Movie) => Movie.id === element.id);
        if (!alreadyInState) {
          // eslint-disable-next-line no-param-reassign
          element.favory = false;
          state.Movies.push(element);
        }
      });
    },
  },
  actions: {
    addAllTvShows(context, page) {
      axios
        .get(`https://api.themoviedb.org/3/tv/popular?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US&page=${page}`)
        .then((response) => {
          context.commit('addDataTvShowToState', response.data);
        });
    },
    addAllMovies(context, page) {
      axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=a5c6813249f433c9d11d20d5a8682d44&language=en-US&page=${page}`)
        .then((response) => {
          context.commit('addDataMoviesToState', response.data);
        });
    },
  },
  modules: {
  },
});
