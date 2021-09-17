import styled from "@emotion/styled";
import { Tooltip as DefaultTooltip, TooltipArrow } from "reakit/Tooltip";

export const Arrow = styled(TooltipArrow)`
  & path {
    fill: ${({ theme }) => theme.color.primaryAccent};
  }
`;

export const CommonTooltip = styled(DefaultTooltip)`
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
