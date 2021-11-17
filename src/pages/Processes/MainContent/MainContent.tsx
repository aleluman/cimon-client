import { useParams } from "react-router-dom";
import { MainHeader } from "../MainHeader/MainHeader";
import { Container } from "./styles";
import { Matrix } from "../Matrix/Matrix";
import { Details } from "../Details/Details";
import { useGetProcess } from "@/shared/hooks/process";

export const MainContent = () => {
  const { processId } = useParams();
  const { data, isError, isLoading } = useGetProcess(processId as string);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <Container>
          <MainHeader process={data} />
          <Details process={data} />
          <Matrix process={data} />
        </Container>
      )}
    </>
  );
};
