import { Link, useLocation } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { UserMenu } from "../UserMenu/UserMenu";
import { AppTitle, HomeContainer, NavContainer, ProjectNav } from "./styles";
import { NavbarNavigation } from "../NavbarNavigation/NavbarNavigation";
import { useAuth } from "@/shared/state/store";

export const Navbar = () => {
  const location = useLocation();
  const username = useAuth((state) => state.username);
  return (
    <NavContainer>
      <HomeContainer tabIndex={0} as={Link} to="/processes">
        <Icon type="home" size={20} />
      </HomeContainer>
      <ProjectNav>
        {!location.pathname.includes("ambits") ? (
          <AppTitle>CIMoN Manager</AppTitle>
        ) : (
          <NavbarNavigation />
        )}
      </ProjectNav>
      <UserMenu username={username ?? ""} />
    </NavContainer>
  );
};
