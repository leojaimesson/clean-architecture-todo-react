import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 0px 15px;
`;

export const ListContainer = styled.div`
  background-color: var(--color-purple);
  margin-top: 20px;
  border: 1px solid var(--color-primary);
  padding: 15px;
  border-radius: 5px;
`;

type CheckboxContainerProps = {
  checked: boolean;
};

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;

  span {
    margin: 0px 1rem;
    font-size: 1.2rem;
    min-height: 28px;
    text-decoration: ${({ checked }: CheckboxContainerProps) =>
      checked ? "line-through" : "none"};
    color: ${({ checked }: CheckboxContainerProps) =>
      checked ? "var(--color-green)" : "var(--shape)"};
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
