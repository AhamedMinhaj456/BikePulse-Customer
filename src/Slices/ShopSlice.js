// ShopSlice.js

import { createSlice } from "@reduxjs/toolkit";

const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return null; 
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return null; 
    }
};

const initialShopState = loadState('shopId') || "";

const shopSlice = createSlice({
    name: 'shopId',
    initialState: initialShopState,
    reducers: {
        addShopId(state, action) {
            return action.payload; 
        },
        deleteShopId(state) {
            return ""; 
        }
    }
});

export const { addShopId, deleteShopId } = shopSlice.actions;

export default shopSlice.reducer;
