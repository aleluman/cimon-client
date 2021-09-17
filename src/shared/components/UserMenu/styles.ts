import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const UserNameContainer = (theme: Theme) => css`
  display: flex;
  gap: 0.2rem;
  padding: 0.4rem;
  background: transparent;
  border: none;
  color: ${theme.color.textNormal};
  cursor: pointer;

  & p {
    max-width: 12rem;
    margin: 0;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const MenuContainer = (theme: Theme) => css`
  backdrop-filter: blur(12px);
  z-index: 1;
  padding: 0.2rem;
  border-radius: 4px;
  border: 1px solid ${theme.color.popoverBorder};
  box-shadow: 0 0 16px ${theme.color.shadow};
  background: ${theme.color.popoverBackground};
`;

export const UserMenuItem = styled.button`
  display: flex;
  width: 100%;
  gap: 0.6rem;
  border: none;
  background: transparent;
  padding: 0.6rem;
  border-radius: 4px;
  color: ${({ theme }) => theme.color.textNormal};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.popoverSelect};
  }
`;
