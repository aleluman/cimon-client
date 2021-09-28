import { Matrix } from "./Matrix/Matrix";
import { Sidebar } from "./Sidebar/Sidebar";
import { Container } from "./styles";

export const Mockup = () => {
  return (
    <Container>
      <Sidebar />
      <Matrix />
    </Container>
  );
};
