import { useParams } from "react-router-dom";
import { useGetProcess } from "@/shared/hooks/process";
import { AmbitSelector } from "../AmbitSelector/AmbitSelector";
import { Icon } from "../Icon/Icon";
import { ProjectName } from "./styles";

export const NavbarNavigation = () => {
  const { processId } = useParams();
  const { data, isLoading } = useGetProcess(processId as string);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <ProjectName> {data.name}</ProjectName> <Icon type="arrow-right" />
          <AmbitSelector ambits={data.ambits} />
        </>
      )}
    </>
  );
};
