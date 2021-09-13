import styled from "@emotion/styled";

type PathProps = {
  color?: string;
};

export const Path = styled.path<PathProps>`
  fill: ${({ color, theme }) => color || theme.color.iconNormal};
`;
