import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  type: "text"
}))`
  color: #dde4e8;
  margin: 0 0 1em;

  ::placeholder {
    font-style: italic;
    font-size: 1.75rem;
    color: #838789;
  }
`;

export default Input;
