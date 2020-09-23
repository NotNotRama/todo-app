import styled from "styled-components";

const FormDiv = styled.div`
  padding: 5rem 3rem 1rem;
  align-items: flex-start;
  display: flex;
  margin: 0;

  & form {
    display: flex;
    flex-direction: column;
    align-content: space-around;

    & h1 {
      font-weight: 400;
      font-size: 3rem;
    }

    & input {
      padding-top: 2rem;
      font-size: 2.5rem;
      border: 0;
      outline: 0;
      background: transparent;
      border-bottom: 1px solid #dde4e8;
      width: 25vw;
      height: 7rem;
    }
  }
`;

export default FormDiv;
