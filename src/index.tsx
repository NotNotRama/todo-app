import React from "react";
import { render } from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import TodoApp from "./components/TodoApp";
import todosReducer from "./components/todosSlice";
import footerReducer from "./components/filterSlice";
import Global from "./styled-components/GlobalStyle";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    footer: footerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

render(
  <Provider store={store}>
    <>
      <Global />
      <TodoApp />
    </>
  </Provider>,
  document.getElementById("root")
);
