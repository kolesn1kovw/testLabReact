import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  test: '',
};

export const mockSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    // test: (state, action) => {},
  },
});

// export const { test } = mockSlice.actions;

export default mockSlice.reducer;
