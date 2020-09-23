import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todosSlice";
import { uuid } from "uuidv4";
import FormDiv from "../styled-components/FormDiv";
import Input from "../styled-components/Input";

function Form() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addTodo({ text: input, completed: false, id: uuid() }));
    setInput("");
  };
  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h1>Todo List</h1>
        <Input
          placeholder="Write your todo here"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </FormDiv>
  );
}

export default Form;
