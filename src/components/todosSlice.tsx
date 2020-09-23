import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Fetch {
  dummy: string;
  secondDummy: string;
}

export const fetchThunk = createAsyncThunk(
  "todos/fetchThunk",
  async ({ dummy, secondDummy }: Fetch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await response.json();
    return { dummData: dummy, secondDummy: secondDummy, data };
  }
);

interface EditTodoType {
  text: string;
  id: string;
}

interface AddTodoType extends EditTodoType {
  completed: boolean;
}

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { text: "dummy data", completed: true, id: "12904109" },
    { text: "some more dummy data", completed: true, id: "151321" },
    { text: "do your homework", completed: false, id: "2851432" },
    { text: "practice more react", completed: false, id: "12810" },
    { text: "learn another language", completed: true, id: "78753" },
    { text: "and keep your focus", completed: false, id: "208541" },
  ],
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoType>) => {
      state.push({ ...action.payload });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      console.log(typeof action.payload);
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<EditTodoType>) =>
      state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      ),
    completeTodo: (state, action: PayloadAction<string>) =>
      state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    // testThunk: (state, action) => {
    //   console.log(action.payload);
    // }
  },
  extraReducers: {
    [fetchThunk.fulfilled.type]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  // testThunk
} = todosSlice.actions;

// export const fetchData = someWords => async dispatch => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/");
//   const data = await response.json();
//   dispatch(testThunk({ test: someWords, data: data }));
// };

export default todosSlice.reducer;
