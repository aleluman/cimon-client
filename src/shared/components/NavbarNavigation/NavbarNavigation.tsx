import { useGetProcess } from "@/shared/api/process";
import { AmbitSelector } from "../AmbitSelector/AmbitSelector";
import { Icon } from "../Icon/Icon";
import { ProjectName } from "./styles";

export const NavbarNavigation = () => {
  const { data } = useGetProcess();

  return (
    <>
      {data && (
        <>
          <ProjectName> {data.name}</ProjectName> <Icon type="arrow-right" />
          <AmbitSelector ambits={data.ambits} />
        </>
      )}
    </>
  );
};
