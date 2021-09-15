import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
  overflow: hidden;
  touch-action: none;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  touch-action: none;
  background: ${({ theme }) => theme.color.neutralDarker};
`;

type StageProps = {
  x: number;
  y: number;
  zoom: number;
};

export const ChildContainer = styled.div<StageProps>`
  position: relative;
  width: 0px;
  height: 0px;
  transform-origin: 0% 0%;
  touch-action: none;
  transform: ${({ x, y, zoom }) => `translate3d(${x}px,${y}px,0) scale3d(${zoom},${zoom},${zoom})`};

  & > * {
    position: absolute;
  }
`;
