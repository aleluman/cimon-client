import { css } from "@emotion/react";
import styled from "@emotion/styled";

type ContainerProps = {
  width: number;
  height: number;
  x: number;
  y: number;
  active: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: ${({ theme }) => theme.color.neutralFull};
  box-shadow: 0 2px 12px ${({ theme }) => theme.color.subtleShadow};
  color: ${({ theme }) => theme.color.textNormal};
  border-radius: 2px;
  touch-action: none;
  user-select: none;
  transform: ${({ x, y }) => `translate3d(${x}px, ${y}px, 0)`};

  ${({ active, theme }) =>
    active &&
    css`
      box-shadow: 0 0 0 3px ${theme.color.primaryAccent};
      z-index: 99;
    `}
`;

export const Title = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0.3rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.borderLight};
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 0.85rem;
`;

export const Abstract = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-style: italic;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.color.textDull};
  &::before {
    content: "<";
  }
  &::after {
    content: ">";
  }
`;
