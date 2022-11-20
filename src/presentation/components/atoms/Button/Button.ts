import styled from "styled-components";

type Props = {
  background?: string;
};

export const Button = styled.button`
  background: ${({ background }: Props) =>
    background ? background : "var(--color-secondary)"};
  color: white;
  text-transform: uppercase;
  border: none;
  font-weight: 600;
  padding: 0.6rem;
  max-height: 2.5rem;
  min-width: 2.5rem;
  font-size: 1rem;
  appearance: none;
  border-radius: 4px;
  font-weight: 400;
  letter-spacing: 0.2rem;
  transition: 0.3s all;

  img {
    max-height: 1rem;
  }
`;
