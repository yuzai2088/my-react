import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "add",
  initialState: {
    num: 0,
  },
  reducers: {
    add: (state, action) => {
      console.log("action", action);
      state.num = action.payload + state.num;
    },
  },
});
const { add } = addSlice.actions;
console.log("addSlice", addSlice);
export { add };
export default addSlice.reducer;
