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
          <MainHeader processName={data.name} />
          <Details />
          <Matrix />
        </Container>
      )}
    </>
  );
};
