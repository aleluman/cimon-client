import styled from "@emotion/styled";
import { Tooltip, TooltipArrow, TooltipReference } from "reakit/Tooltip";
import { Button } from "reakit/Button";
import { css } from "@emotion/react";

export const ButtonContainer = styled(TooltipReference)``;

export const Arrow = styled(TooltipArrow)`
  & path {
    fill: ${({ theme }) => theme.color.primaryAccent};
  }
`;

export const IconTooltip = styled(Tooltip)`
  background-color: ${({ theme }) => theme.color.primaryAccent};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.primaryAccent};
  box-shadow: 0 0 22px ${({ theme }) => theme.color.shadow};
  font-size: 0.75rem;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  transition: opacity 0.3s;
  z-index: 9999;
`;

type IconButtonProps = {
  working: boolean | undefined;
  disabled: boolean | undefined;
};

export const IconButton = styled(Button)<IconButtonProps>`
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
