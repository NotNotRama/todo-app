import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { RootState } from "../../api/TodoProps";

function Todos() {
  const todos = useSelector((state: RootState) => state.todos);
  const footer = useSelector((state: RootState) => state.footer);

  if (footer.hideAll) {
    if (footer.showCompleted) {
      return (
        <>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <ul>
                <Todo todo={todo} />
              </ul>
            ))}
        </>
      );
    }
    return (
      <>
        {todos.map((todo) => (
          <div>
            <Todo todo={todo} />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {todos.map(() => (
        <div></div>
      ))}
    </>
  );
}

export default Todos;
