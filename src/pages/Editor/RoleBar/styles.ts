import styled from "@emotion/styled";
import { TooltipReference } from "reakit/Tooltip";

export const RoleBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 7.7rem;
  background: ${({ theme }) => theme.color.popoverBackground};
  backdrop-filter: blur(10px);
  padding: 0.3rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  box-shadow: 0 0 12px ${({ theme }) => theme.color.subtleShadow};
  color: ${({ theme }) => theme.color.textNormal};
  position: absolute;
  top: 3.3rem;
  left: 0.4rem;
  user-select: none;
`;

export const Title = styled.h1`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.color.textImportant};
  font-weight: 600;
  margin: 0.1rem;
  margin-bottom: 0.3rem;
`;

export const Subtitle = styled.h2`
  font-size: 0.8rem;
  margin-top: 0.8rem;
  font-weight: 400;
  margin-bottom: 0.4rem;
  margin-left: 0.1rem;
`;

export const DragIconContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const RoleSpan = styled.span`
  touch-action: none;
`;

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

export const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 0.2rem;
  min-width: 0;
  position: relative;
  list-style: none;
  font-size: 0.75rem;
  width: 100%;
  background: ${({ theme }) => theme.color.neutralFull};
  padding: 0.15rem;
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  margin-top: -1px;
  cursor: grab;
  touch-action: none;
  transition: all 0.25s ease;

  &:hover {
    z-index: 2;
    background: ${({ theme }) => theme.color.neutralDarker};
    border: 1px solid ${({ theme }) => theme.color.primaryAccent};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primaryAccent};
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:last-child {
    border-radius: 0 0 4px 4px;
  }

  &:hover path {
    transition: fill 0.25s ease;
    fill: ${({ theme }) => theme.color.primaryAccent};
  }
`;

export const ListItemText = styled.p`
  flex: 1;
  padding: 0.1rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
