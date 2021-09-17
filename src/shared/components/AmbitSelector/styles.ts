import { css, Theme } from "@emotion/react";

export const AmbitButton = (theme: Theme) => css`
  display: flex;
  max-width: 16rem;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  background: transparent;
  border: 1px solid ${theme.color.popoverBorder};
  border-radius: 8px;
  color: ${theme.color.textImportant};
  cursor: pointer;
  transition: box-shadow ease 0.25s;

  &:hover {
    box-shadow: 0 2px 16px -4px ${theme.color.shadow};
  }

  & p {
    margin: 0;
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const AmbitMenu = (theme: Theme) => css`
  display: flex;
  position: absolute;
  margin-top: 0px;
  max-width: 16rem;
  max-height: 22rem;
  backdrop-filter: blur(12px);
  padding: 0.2rem;
  background: ${theme.color.popoverBackground};
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${theme.color.popoverBorder};
  box-shadow: 0 0 16px ${theme.color.shadow};
  overflow: auto;
  z-index: 1;
`;

export const AmbitItem = (theme: Theme, selected: boolean) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 1rem;
  background: transparent;
  color: ${theme.color.textNormal};
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
    background: ${theme.color.popoverSelect};
  }

  ${selected &&
  css`
    font-weight: 800;
    color: ${theme.color.textImportant};
  `}
`;
