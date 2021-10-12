import { MainHeader } from "../MainHeader/MainHeader";
import { Container } from "./styles";
import { Matrix } from "../Matrix/Matrix";
import { Details } from "../Details/Details";
import { useGetProcess } from "@/shared/api/process";

export const MainContent = () => {
  const { data, isError, isLoading } = useGetProcess();

  return (
    <>
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
