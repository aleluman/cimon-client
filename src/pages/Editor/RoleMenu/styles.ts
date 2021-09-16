import styled from "@emotion/styled";

type RoleMenuContainerProps = {
  zoom: number;
  displacement: number;
};

export const RoleMenuContainer = styled.div<RoleMenuContainerProps>`
  display: flex;
  gap: 0.2rem;
  position: absolute;
  top: ${({ displacement }) => displacement}rem;
  left: 50%;
  padding: 0.3rem;
  backdrop-filter: blur(12px);
  background: ${({ theme }) => theme.color.popoverBackground};
  border: 2px solid ${({ theme }) => theme.color.primaryAccent};
  border-radius: 8px;
  transform: translateX(-50%) scale(${({ zoom }) => 1 / zoom});
`;

export const IconSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  font-size: 0.75rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  border-radius: 4px;
  padding: 0 0.2rem;
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme.color.subtleShadow};
  }
`;

export const Divider = styled.span`
  height: 1.8rem;
  width: 0;
  border-left: 1px solid ${({ theme }) => theme.color.popoverBorder};
  margin: 0 0.3rem;
`;
