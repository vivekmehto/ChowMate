import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove if quantity becomes 0
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload
          );
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decreaseItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
