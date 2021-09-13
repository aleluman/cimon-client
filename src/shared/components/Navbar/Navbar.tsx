import React from "react";
import { AmbitSelector } from "../AmbitSelector/AmbitMenu";
import { Icon } from "../Icon/Icon";
import { UserMenu } from "../UserMenu/UserMenu";
import { HomeContainer, NavContainer, ProjectName, ProjectNav } from "./styles";

export const Navbar = () => {
  return (
    <NavContainer>
      <HomeContainer tabIndex={0}>
        <Icon type="home" size={20} />
      </HomeContainer>
      <ProjectNav>
        <ProjectName> Elderly Care</ProjectName> <Icon type="arrow-right" />
        <AmbitSelector />
      </ProjectNav>
      <UserMenu username="John Doe" />
    </NavContainer>
  );
};
