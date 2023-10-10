import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
    addUser:(state,action)=>{
      state.userInfo=action.payload;
    },
    removeUser:(state)=>{
      state.userInfo=null;
    },
  },
});

export const {
  addtocart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  addUser,
  removeUser
} = shopSlice.actions;
export default shopSlice.reducer;
