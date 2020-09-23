import styled from "styled-components";

const Button = styled.button<{ edit?: boolean; delete?: boolean }>`
  width: 3.2rem;
  height: 3.8rem;
  margin-right: 0.5rem;
  background: ${(props) => (props.delete ? "#E13737" : "#E4E7EA")};
  border-radius: 4px;
  border: 0;
  transition: all 0.2s ease;

  & img {
    width: 2.2rem;
  }

  &:hover {
    background: ${(props) => (props.delete ? "#861818" : "#AAB3BC")};
  }
`;

export default Button;
