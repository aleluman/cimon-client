import { Link, useParams } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { UserMenu } from "../UserMenu/UserMenu";
import { AppTitle, HomeContainer, NavContainer, ProjectNav } from "./styles";
import { NavbarNavigation } from "../NavbarNavigation/NavbarNavigation";
import { useAuth } from "@/shared/state/store";

export const Navbar = () => {
  const username = useAuth((state) => state.username);
  const { ambitId } = useParams();

  return (
    <NavContainer>
      <HomeContainer tabIndex={0} as={Link} to="/processes">
        <Icon type="home" size={20} />
      </HomeContainer>
      <ProjectNav>
        {!ambitId ? <AppTitle>CIMoN Manager</AppTitle> : <NavbarNavigation />}
      </ProjectNav>
      <UserMenu username={username ?? ""} />
    </NavContainer>
  );
};
