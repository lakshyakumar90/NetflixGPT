import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        movieName: null,
        movieResults: null
    },
    reducers: {
        addGptMovies: (state, action) => {
            const {movieName, movieResults} = action.payload;
            state.movieName = movieName;
            state.movieResults = movieResults;
        },
        clearGptMovies: (state) => {
            state.movieName = null;
            state.movieResults = null;
        }
    }
})

export const {addGptMovies, clearGptMovies} = gptSlice.actions;
export default gptSlice.reducer;