import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies, getWheather } from "../../service";

export const getPrognos = createAsyncThunk("/getPrognos", getWheather);
export const getMessage = createAsyncThunk("/getMessage", getWheather);

export const getMoviesAction = createAsyncThunk(
  "/getMoviesActionIzzet",
  getMovies
);

const initialState = {
  count: 0,
  status: null,
  info: null,
  messages: [],
  isLoading: false,
  error: null,
  movies: [],
  // basket: [{ id: 5, count: 1, name: "Apple" }],
};

export const userSlice = createSlice({
  name: "userName",
  initialState,

  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      state.status = "Increment value";
    },

    addBasket: (state, action) => {
      const productID = action.payload.id;

      const currentIndex = state.basket.findIndex(
        (item) => item.id == productID
      );

      if (currentIndex !== -1) {
        const newBasket = [...state.basket];
        newBasket[currentIndex].count += 1;

        state.basket = newBasket;
      } else {
        const newBasketItem = action.payload;

        newBasketItem.count = 1;

        state.basket = [...state.basket, newBasketItem];
      }
    },

    rmvBasket: (state, action) => {
      const productID = action.payload.id;

      const currentIndex = state.basket.findIndex(
        (item) => item.id == productID
      );

      if (currentIndex !== -1) {
        const newBasket = [...state.basket];
        newBasket[currentIndex].count -= 1;

        state.basket = newBasket;
      } else {
        const newBasketItem = action.payload;

        newBasketItem.count = 1;

        state.basket = state.basket;
      }
    },

    decrement: (state) => {
      state.count = state.count - 1;
      state.status = "Decrement value";
    },

    changeValue: (state, action) => {
      state.count = action.payload;
      state.status = "Change value";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPrognos.fulfilled, (state, action) => {
        state.info = action.payload;
      })
      .addCase(getMessage.fulfilled, (state, action) => {
        state.messages = action.payload;
      }) //? Movies Case --
      .addCase(getMoviesAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoviesAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(getMoviesAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Error";
      });
  },
});

export const { increment, decrement, changeValue } = userSlice.actions;

export default userSlice.reducer;
