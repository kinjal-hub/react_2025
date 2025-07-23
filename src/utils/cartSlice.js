import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
reducers: {
    addItem: (state, action) => {
       state.items.push(action.payload);
    },
    removeItems: (state, action) => {
        state.items.pop();
    },
    clearCart: (state, action) => {
        // rtk -either mutate the  exsiting  state or a  return  a  new  state
        state.items.length = 0; // state = [];
    },
}

});
export const { addItem, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;