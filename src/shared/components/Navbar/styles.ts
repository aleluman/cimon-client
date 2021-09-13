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
