import { useHistory, useLocation } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { UserMenu } from "../UserMenu/UserMenu";
import { AppTitle, HomeContainer, NavContainer, ProjectNav } from "./styles";
import { NavbarNavigation } from "../NavbarNavigation/NavBarNavigation";

export const Navbar = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <NavContainer>
      <HomeContainer tabIndex={0} as="a" onClick={() => history.push("/processes")}>
        <Icon type="home" size={20} />
      </HomeContainer>
      <ProjectNav>
        {!location.pathname.includes("processes") ? (
          <NavbarNavigation />
        ) : (
          <AppTitle>CIMoN Manager</AppTitle>
        )}
      </ProjectNav>
      <UserMenu username="John Doe" />
    </NavContainer>
  );
};
