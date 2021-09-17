import styled from "@emotion/styled";
import { TooltipReference } from "reakit/Tooltip";

export const RoleDragIcon = styled(TooltipReference)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.color.neutralFull};
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  border-radius: 4px;
  padding: 0.5rem;
  touch-action: none;
  cursor: grab;
  transition: all 0.25s ease;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primaryAccent};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primaryAccent};
    background: ${({ theme }) => theme.color.neutralDarker};
  }

  &:hover path {
    transition: fill 0.25s ease;
    fill: ${({ theme }) => theme.color.primaryAccent};
  }
`;
