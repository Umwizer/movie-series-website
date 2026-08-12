import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type IncrementState = {
  value: number;
};

const initialState: IncrementState = {
  value: 0,
};

export const countSlice = createSlice({
  name: 'increment',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByPayload: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});