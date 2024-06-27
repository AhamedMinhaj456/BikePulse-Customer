// store.js

import { configureStore } from "@reduxjs/toolkit";
import customerReducer from '../Slices/CustomerSlice.js';
import shopReducer from '../Slices/ShopSlice.js';
import { customerIdReducer, customerStatusReducer } from '../Slices/CustomerSlice.js'; // Import customer reducers

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

        const serializedCustomerStatusState = JSON.stringify(state.customerStatus); // Save customerStatus state
        localStorage.setItem('customerStatusId', serializedCustomerStatusState);

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
        customers: customerIdReducer,
        customerStatus: customerStatusReducer, // Add customerStatus reducer
        shops: shopReducer
    },
    preloadedState: {
        customers: loadState('customerId'),
        customerStatus: loadState('customerStatusId'), // Load customerStatus from localStorage
        shops: loadState('shopId')
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;
