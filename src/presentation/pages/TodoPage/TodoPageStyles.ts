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

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;

  span {
    margin: 0px 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    height: 28px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;
