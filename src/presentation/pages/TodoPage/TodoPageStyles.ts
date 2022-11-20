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
  margin-top: 40px;
  border: 1px solid var(--color-primary);
  padding: 35px 15px 15px 15px;
  border-radius: 5px;
  position: relative;
`;

export const ActionsContainer = styled.div`
  position: absolute;
  right: 15px;
  top: -16px;
`;
