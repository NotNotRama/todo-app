import React, { useState, memo } from "react";
import { deleteTodo, completeTodo } from "./todosSlice";
import { useDispatch } from "react-redux";
import { InputForm } from "./InputForm";
import Button from "../styled-components/Button";
import Li from "../styled-components/Li";
import TodoBttns from "../styled-components/TodoBttns";
import TodoDiv from "../styled-components/TodoDiv";
import editBttn from "../icons/create-outline.svg";
import deleteBttn from "../icons/trash-outline.svg";
import FormEdit from "../styled-components/FormEdit";
import { TodoProps } from "../../api/TodoProps";

type Todo = {
  todo: TodoProps;
};

const Todo = ({ todo }: Todo) => {
  const [isEditing, edit] = useState<boolean>(false);
  const dispatch = useDispatch();

  if (!isEditing) {
    return (
      <TodoDiv>
        <Li
          key={todo.id}
          completed={todo.completed}
          onClick={() => dispatch(completeTodo(todo.id))}
          // style={{
          //   textDecoration: todo.completed ? "line-through" : "none"
          // }}
        >
          {todo.text}
        </Li>

        <TodoBttns>
          <Button edit onClick={() => edit(!isEditing)}>
            <img src={editBttn} alt="Edit Button" />
          </Button>
          <Button delete onClick={() => dispatch(deleteTodo(todo.id))}>
            <img src={deleteBttn} alt="Delete Button" />
          </Button>
        </TodoBttns>
      </TodoDiv>
    );
  } else {
    return (
      <FormEdit>
        <InputForm key={todo.id} {...{ todo, edit }} />
      </FormEdit>
    );
  }
};

export default memo(Todo);
