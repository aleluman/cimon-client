import styled from "@emotion/styled";

export const ZoomBarContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: red;
  bottom: 0.4rem;
  backdrop-filter: blur(10px);
  left: 50%;
  transform: translateX(calc(-50% - 10rem));
  background: ${({ theme }) => theme.color.popoverBackground};
  padding: 0.3rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.popoverBorder};
  box-shadow: 0 0 12px ${({ theme }) => theme.color.subtleShadow};
  transition: transform ease 0.5s;
  user-select: none;
`;

export const Divider = styled.span`
  height: 1.8rem;
  width: 0;
  border-left: 1px solid ${({ theme }) => theme.color.popoverBorder};
  margin: 0 0.3rem;
`;
