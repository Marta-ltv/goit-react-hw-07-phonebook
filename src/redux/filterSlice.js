import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    
    reducers: {
         contatcFilter(state, action) {
      state.value = action.payload;
        },
    },
});

export const { contactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
