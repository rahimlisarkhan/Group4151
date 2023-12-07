import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPrognos = createAsyncThunk(
  "/getPrognos",
  async (city = "Baku") => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d32bd17e782e54a0729a829c462c76ac`;

    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
);

const initialState = {
  count: 0,
  status: null,
  info: null,
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
    builder.addCase(getPrognos.fulfilled, (state, action) => {
      state.info = action.payload;
    });
  },
});

export const { increment, decrement, changeValue } = userSlice.actions;

export default userSlice.reducer;
