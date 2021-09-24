import { useGetProcess } from "@/shared/api/process";
import { AmbitSelector } from "../AmbitSelector/AmbitSelector";
import { Icon } from "../Icon/Icon";
import { UserMenu } from "../UserMenu/UserMenu";
import { HomeContainer, NavContainer, ProjectName, ProjectNav } from "./styles";

export const Navbar = () => {
  const { data, isLoading, isError } = useGetProcess();

  return (
    <NavContainer>
      <HomeContainer tabIndex={0}>
        <Icon type="home" size={20} />
      </HomeContainer>
      <ProjectNav>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {data && (
          <>
            <ProjectName> {data.name}</ProjectName> <Icon type="arrow-right" />
            <AmbitSelector ambits={data.ambits} />
          </>
        )}
      </ProjectNav>
      <UserMenu username="John Doe" />
    </NavContainer>
  );
};
