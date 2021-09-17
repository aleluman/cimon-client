import styled from "@emotion/styled";
import { css } from "@emotion/react";

type IconButtonProps = {
  working: boolean | undefined;
  disabled: boolean | undefined;
};

export const IconButton = styled.button<IconButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  padding: 0.4rem;
  background: transparent;

  &:disabled {
    cursor: default;
  }

  &:disabled path {
    fill: ${({ theme }) => theme.color.iconDisabled};
  }

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.neutralDarker};
  }

  &:hover:not(:disabled) path {
    fill: ${({ theme }) => theme.color.primaryAccent} !important;
  }

  ${({ working, theme }) =>
    working &&
    css`
      box-shadow: 0 0 0 1px ${theme.color.primaryAccent}, inset 0 0 5px ${theme.color.primaryAccent};
      background: ${theme.color.neutralLight};
    `}
`;
