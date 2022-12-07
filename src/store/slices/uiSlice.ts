import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: [],
    reducers: {
        notify: (state, action) => {
            const todo = {
                text: action.payload,
            };

        }
    }})

// this is for dispatch
export const { notify } = uiSlice.actions;

// this is for configureStore
export default uiSlice.reducer;
