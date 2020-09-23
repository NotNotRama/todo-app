import React from "react";
import Form from "./Form";
import Todos from "./Todos";
import Footer from "./Footer";
import Body from "../styled-components/Body";
import AppDiv from "../styled-components/AppDiv";

function TodoApp() {
  return (
    <Body>
      <AppDiv>
        <Form />
        <Todos />
        <Footer />
      </AppDiv>
    </Body>
  );
}

export default TodoApp;
