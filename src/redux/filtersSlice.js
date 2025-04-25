import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filtersSlice = createSlice({
  name: 'addFilter',
  initialState,
  reducers: {
    addFilter: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { addFilter } = filtersSlice.actions;
