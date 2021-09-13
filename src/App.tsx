import React from "react";
import { MainContent } from "./styles";
import { Editor } from "./pages/Editor/Editor";
import { Navbar } from "./shared/components/Navbar/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Editor />
      </MainContent>
    </>
  );
};
