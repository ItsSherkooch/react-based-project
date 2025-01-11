import { configureStore, createSlice } from "@reduxjs/toolkit";

const someOInitialState = {someString: ""}

const someSlice = createSlice({
  name: 'some-properties',
  initialState: someOInitialState,
  reducers: {
    setSth(state, action) {
      state.someString = action.payload
    }
  }
})

const store = configureStore({
  reducer: {
    project: someSlice.reducer
  }
})

export const someActions = someSlice.actions

export default store;