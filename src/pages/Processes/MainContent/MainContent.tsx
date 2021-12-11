import { useParams } from "react-router-dom";
import { MainHeader } from "../MainHeader/MainHeader";
import { Container, ErrorText } from "./styles";
import { Matrix } from "../Matrix/Matrix";
import { Details } from "../Details/Details";
import { useGetProcess } from "@/shared/hooks/process";
import { Spinner } from "@/shared/components/Spinner/Spinner";

export const MainContent = () => {
  const { processId } = useParams();
  const { data, isError, isLoading } = useGetProcess(processId as string);

  return (
    <>
      {isLoading && <Spinner size={50} thickness={6} />}
      {isError && <ErrorText>There was an error loading this process.</ErrorText>}
      {!isLoading && !isError && data && (
        <Container>
          <MainHeader process={data} />
          <Details process={data} />
          <Matrix process={data} />
        </Container>
      )}
    </>
  );
};
