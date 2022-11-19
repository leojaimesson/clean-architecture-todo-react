import React from "react";
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from "./CheckboxStyles";

type Props = {
  checked: boolean;
  onChange: () => {}
}

export const Checkbox: React.FC<Props> = ({ checked, onChange }: Props) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} onChange={onChange} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
