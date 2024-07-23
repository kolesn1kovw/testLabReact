import { configureStore } from '@reduxjs/toolkit';
import mockSlice from './mockSlice/mockSlice';

export const store = configureStore({
  reducer: {
    test: mockSlice,
  },
});
