import styled from "styled-components";

type CheckboxContainerProps = {
  checked: boolean;
  editMode: boolean;
};

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  opacity: ${({ checked }: CheckboxContainerProps) => (checked ? "0.5" : "1")};

  flex: ${({ editMode }: CheckboxContainerProps) => (editMode ? "1" : "none")};

  span {
    margin: 0px 1rem;
    font-size: 1.2rem;
    min-height: 28px;
    text-decoration: ${({ checked }: CheckboxContainerProps) =>
      checked ? "line-through" : "none"};
    color: ${({ checked }: CheckboxContainerProps) =>
      checked ? "var(--color-green)" : "var(--shape)"};
  }

  textarea {
    width: 100%;
    margin: 0px 1rem;
    font-size: 1.2rem;
    resize: none;
    border: none;
    padding: 5px;
    min-height: 35px;
    overflow: hidden;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;

export const ButtonActionsContainer = styled.div`
  button {
    margin-right: 10px;

    &:last-child {
      margin: 0;
    }
  }
`;
