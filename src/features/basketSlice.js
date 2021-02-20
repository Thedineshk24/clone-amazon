import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
	name: "basket",
	initialState: {
		basket: [],
	},
	reducers: {
		ADD_TO_BASKET: (state, action) => {
			// when you want to tarck old state info write following way to track old state information
			state.basket = [...state.basket, action.payload];
		},
	},
});

export const { ADD_TO_BASKET } = basketSlice.actions;

export const selectBasket = (state) => state.basket.basket;

export default basketSlice.reducer;
