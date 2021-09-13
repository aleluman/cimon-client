import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Menu, MenuButton, MenuItem } from "reakit/Menu";

export const AmbitButton = styled(MenuButton)`
  display: flex;
  max-width: 16rem;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.textImportant};
  cursor: pointer;
  transition: box-shadow ease 0.25s;

  &:hover {
    box-shadow: 0 2px 16px -4px ${({ theme }) => theme.color.shadow};
  }

  & p {
    margin: 0;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const AmbitMenu = styled(Menu)`
  display: flex;
  max-width: 16rem;
  max-height: 22rem;
  backdrop-filter: blur(12px);
  padding: 0.2rem;
  background: ${({ theme }) => theme.color.popoverBackground};
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  box-shadow: 0 0 16px ${({ theme }) => theme.color.shadow};
  overflow: auto;
  z-index: 1;
`;

type AmbitItemProps = {
  selected: boolean;
};

export const AmbitItem = styled(MenuItem)<AmbitItemProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
  background: transparent;
  color: ${({ theme }) => theme.color.textNormal};
  border: none;
  padding: 0.4rem;
  padding-right: 0.4rem;
  border-radius: 4px;
  cursor: pointer;

  & p {
    margin: 0;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    background: ${({ theme }) => theme.color.popoverSelect};
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      font-weight: 800;
      color: ${theme.color.textImportant};
    `}
`;
