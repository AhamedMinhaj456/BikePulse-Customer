import { createSlice } from "@reduxjs/toolkit";

const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : null;
    } catch (err) {
        console.error("Error loading state from local storage:", err);
        return null;
    }
};

// Initial state loader functions
const initialCustomerIdState = loadState('customerId') || "";
const initialCustomerStatusState = loadState('customerStatus') || ""; 

const customerIdSlice = createSlice({
    name: 'customerId',
    initialState: initialCustomerIdState,
    reducers: {
        addCustomerId(state, action) {
            return action.payload;
        },
        clearCustomerId(state) {
            return "";
        }
    }
});

const customerStatusSlice = createSlice({
    name: 'customerStatus',
    initialState: initialCustomerStatusState,
    reducers: {
        addCustomerStatus(state, action) {
            return action.payload;
        },
        clearCustomerStatus(state) {
            return "";
        }
    }
});

export const { addCustomerId, clearCustomerId } = customerIdSlice.actions;
export const { addCustomerStatus, clearCustomerStatus } = customerStatusSlice.actions;

export const customerIdReducer = customerIdSlice.reducer;
export const customerStatusReducer = customerStatusSlice.reducer;
