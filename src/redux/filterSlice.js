import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { text: '' },
  reducers: {
    contactFilter(state, action) {
      state.text = action.payload;
    },
  },
});

export const { contactFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;