import styled from "@emotion/styled";

type PathProps = { active: boolean };

export const Path = styled.path<PathProps>`
  stroke: ${({ active, theme }) =>
    active ? theme.color.primaryAccent : theme.color.iconNormal};
  fill: none;
  stroke-width: ${({ active }) => (active ? 3 : 2)}px;
  stroke-linecap: round;
  pointer-events: auto;
`;
