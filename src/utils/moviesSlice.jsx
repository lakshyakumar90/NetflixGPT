import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    nowPlayingMovies: null,
    topRatedMovies:null,
    upcomingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => { 
      state.trailerVideo = action.payload;
    }
  },
});

export const { addPopularMovies, addNowPlayingMovies, addTopRatedMovies, addUpcomingMovies, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
