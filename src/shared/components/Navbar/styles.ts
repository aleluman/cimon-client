import styled from "@emotion/styled";

export const NavContainer = styled.nav`
  height: 2.4rem;
  z-index: 1;
  grid-area: navbar;
  display: flex;
  background: ${({ theme }) => theme.color.neutralLightest};
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 16px ${({ theme }) => theme.color.subtleShadow};
  color: ${({ theme }) => theme.color.textNormal};
  user-select: none;
`;

export const HomeContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.4rem;
  width: 2.4rem;
  cursor: pointer;
  border-right: 1px solid ${({ theme }) => theme.color.borderLight};

  &:hover path {
    fill: ${({ theme }) => theme.color.primaryAccent};
  }
`;

export const ProjectNav = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-grow: 1;
  font-size: 0.85rem;
  padding: 0.8rem;
`;

export const ProjectName = styled.div`
  max-width: 16rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
