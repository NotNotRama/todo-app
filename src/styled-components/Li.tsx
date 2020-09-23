import styled from "styled-components";

const Li = styled.li<{ completed: boolean }>`
  flex: 1;
  padding: 1.5rem;
  margin: 1rem;
  list-style-type: none;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#4A4747" : "none")};
  transition: all 0.15s ease;
`;

export default Li;
