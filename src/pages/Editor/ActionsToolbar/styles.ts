import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
// import { Menu, MenuItem, MenuButton } from "reakit/Menu";

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  background: ${({ theme }) => theme.color.popoverBackground};
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  backdrop-filter: blur(10px);
  padding: 0.3rem;
  border-radius: 8px;
  box-shadow: 0 0 12px ${({ theme }) => theme.color.subtleShadow};
`;

export const ToggleContainer = styled.span`
  display: flex;
  align-items: center;
  width: 7rem;
  gap: 0.2rem;
  margin-right: 0.2rem;
`;

export const ToggleActive = styled.button`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.primary};
  border: none;
  color: white;
  padding: 0.4rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: ${({ theme }) => theme.color.primaryAccent};
    box-shadow: 0 0 8px ${({ theme }) => theme.color.shadow};
  }
`;

export const ToggleInactive = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.textNormal};
  cursor: pointer;
  transition: all ease 0.3s;
  padding: 0.4rem;
  border-radius: 4px;

  &:hover {
    color: ${({ theme }) => theme.color.textImportant};
    box-shadow: 0 0 8px ${({ theme }) => theme.color.shadow};
  }
`;

export const Divider = styled.span`
  height: 1.8rem;
  width: 0;
  border-left: 1px solid ${({ theme }) => theme.color.popoverBorder};
  margin: 0 0.3rem;
`;

export const ExportButton = (theme: Theme) => css`
  position: relative;
  display: flex;
  gap: 0.3rem;
  background: transparent;
  border: 1px solid ${theme.color.popoverBorder};
  padding: 0.3rem;
  color: ${theme.color.textNormal};
  border-radius: 4px;
  margin-right: 0.2rem;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    box-shadow: 0 0 10px ${theme.color.shadow};
  }
`;

export const ExportMenu = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0.2rem;
  background: ${theme.color.neutralFull};
  border-radius: 4px;
  border: 1px solid ${theme.color.popoverBorder};
  box-shadow: 0 0 12px -4px ${theme.color.shadow};
`;

export const ExportItem = (theme: Theme) => css`
  display: flex;
  align-items: center;
  margin: 0.1rem 0;
  padding: 0.3rem;
  gap: 0.4rem;
  background: transparent;
  border-radius: 4px;
  border: none;
  color: ${theme.color.textNormal};
  cursor: pointer;

  &:hover {
    background: ${theme.color.popoverSelect};
  }
`;
