import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  margin: 0.2rem 0.5rem 0.2rem 0;
  transitiom: all 0.5s 0.2rem 0;
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  //background-color: var(--mainBlue);
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mianBlue);
  }
  &:focus {
    outline: none;
  }
`;
