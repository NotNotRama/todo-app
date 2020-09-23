import React, { useState } from "react";
import { editTodo } from "./todosSlice";
import { useDispatch } from "react-redux";
import { TodoProps } from "../../api/TodoProps";

type Todo = {
  todo: TodoProps;
  edit: Function;
};

export const InputForm = ({ todo, edit }: Todo) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editTodo({ text: input, id: todo.id.toString() }));
    edit(false);
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};
