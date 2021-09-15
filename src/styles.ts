import styled from "@emotion/styled";

export const AppContainer = styled.div`
  display: grid;
  height: 100%;
  max-height: 100%;
  grid-template-areas:
    "navbar"
    "main";
  grid-template-rows: 2.4rem 1fr;
`;

export const MainContent = styled.main`
  grid-area: "main";
  height: 100%;
`;
