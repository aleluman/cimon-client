import { DetailsSidebar } from "../Details/styles";
import { Matrix } from "../Matrix/Matrix";
import { ProcessDetailsContainer } from "./styles";

export const ProcessDetails = () => {
  return (
    <ProcessDetailsContainer>
      <Matrix /> <DetailsSidebar />
    </ProcessDetailsContainer>
  );
};
