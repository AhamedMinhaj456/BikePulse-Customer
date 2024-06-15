// store.js

import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../Slices/CustomerSlice.js';
import shopReducer from '../Slices/ShopSlice.js'; 

const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        const serializedCustomersState = JSON.stringify(state.customers);
        localStorage.setItem('customerId', serializedCustomersState);

        const serializedShopsState = JSON.stringify(state.shops);
        localStorage.setItem('shopId', serializedShopsState);
    } catch (err) {
        console.error("Error saving state to local storage:", err);
    }
};

const localStorageMiddleware = store => next => action => {
    const result = next(action);
    saveState(store.getState());
    return result;
};

const store = configureStore({
    devTools: true,
    reducer: {
        customers: customerReducer,
        shops: shopReducer
    },
    preloadedState: {
        customers: loadState('customerId'),
        shops: loadState('shopId')
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
