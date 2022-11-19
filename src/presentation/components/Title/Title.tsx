import React from "react";
import { TextTitle } from "./TitleStyles";

type Props = { children?: string };

export const Title: React.FC<Props> = ({ children }: Props) => {
  return <TextTitle>{children}</TextTitle>;
};
