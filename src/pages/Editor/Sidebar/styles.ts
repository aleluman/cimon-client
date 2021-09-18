import { css } from "@emotion/react";
import styled from "@emotion/styled";

type SidebarContainerProps = {
  hidden: boolean;
};

export const SidebarContainer = styled.aside<SidebarContainerProps>`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  flex-direction: column;
  width: 20rem;
  padding: 1rem;
  height: 100%;
  background: ${({ theme }) => theme.color.neutralLight};
  box-shadow: 0 0 12px ${({ theme }) => theme.color.subtleShadow};
  transition: transform ease 0.5s;
  user-select: none;
  overflow: visible;
  will-change: transform;

  ${({ hidden }) =>
    hidden &&
    css`
      transform: translateX(100%);
    `}
`;

export const SidebarWrapper = styled.div`
  overflow-y: auto;
  height: 100%;
`;

export const HideButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  height: 4rem;
  width: 0.8rem;
  padding: 0;
  border-radius: 4px 0 0 4px;
  box-shadow: -4px 0 8px ${({ theme }) => theme.color.subtleShadow};
  top: 4.5rem;
  left: -0.8rem;
  background: ${({ theme }) => theme.color.primary};
  border: none;
  border-right: 1px solid ${({ theme }) => theme.color.borderDark};
  transform: translateY(-100%);
  cursor: pointer;

  & path {
    fill: white;
  }
`;

export const Title = styled.h1`
  display: flex;
  gap: 0.2rem;
  margin: 0;
  color: ${({ theme }) => theme.color.textImportant};
  font-size: 1rem;
  font-weight: 500;
`;

export const TitleName = styled.span`
  display: inline-block;
  font-weight: 700;
  gap: 0.4rem;
  max-width: 10rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.color.textNormal};
  font-size: 0.85rem;
  margin: 1rem 0 0.4rem 0;
`;

export const Help = styled.p`
  color: ${({ theme }) => theme.color.textDull};
  font-size: 0.8rem;
  padding: 0;
  line-height: 1.3rem;
`;

export const Description = styled.textarea`
  margin-top: 0.5rem;
  border-radius: 8px;
  font-family: inherit;
  color: ${({ theme }) => theme.color.textNormal};
  width: 100%;
  min-height: 8rem;
  border: 1px solid ${({ theme }) => theme.color.borderDark};
  resize: none;
  font-size: 0.85rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.color.neutralFull};
`;
