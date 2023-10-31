import styled from "@emotion/styled";

function Button({ isDisabled }) {
  const Button = styled.button<{ isDisabled?: boolean }>`
    width: "fit-content";
    height: 50px;
    background-color: red;
    opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
    user-select: ${({ isDisabled }) => (isDisabled ? "none" : "initiale")};
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
    border-radius: 0.125rem;
    padding: 0.5rem;

    &:hover {
      opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 0.75)};
    }

    span {
      color: white;
      font-size: 24px;
    }
  `;
  return <Button isDisabled={isDisabled} />;
}
export default Button;
