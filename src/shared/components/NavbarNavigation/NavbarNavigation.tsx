import { useParams, useNavigate } from "react-router-dom";
import { useGetProcess } from "@/shared/hooks/process";
import { AmbitSelector } from "../AmbitSelector/AmbitSelector";
import { Icon } from "../Icon/Icon";
import { ProjectName } from "./styles";

export const NavbarNavigation = () => {
  const { processId } = useParams();
  const { data, isLoading } = useGetProcess(processId as string);

  const navigate = useNavigate();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {data && (
        <>
          <ProjectName onClick={() => navigate(`/processes/${processId}`)}>{data.name}</ProjectName>{" "}
          <Icon type="arrow-right" />
          <AmbitSelector ambits={data.ambits} />
        </>
      )}
    </>
  );
};
