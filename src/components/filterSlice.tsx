import { createSlice } from "@reduxjs/toolkit";

const todosSatus = createSlice({
  name: "todosSatus",
  initialState: { hideAll: true, showCompleted: false },
  reducers: {
    switchAll: state => ({ ...state, hideAll: !state.hideAll }),
    switchCompleted: state => {
      return { ...state, showCompleted: !state.showCompleted };
    }
  }
});

export const { switchAll, switchCompleted } = todosSatus.actions;

export default todosSatus.reducer;
