import { useHistory } from "react-router-dom";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { ProcessContainer, ProcessName, RoleCounter } from "./styles";

type ProcessProps = {
  active?: boolean;
  process: ProcessType;
};

export const Process = ({ active, process }: ProcessProps) => {
  const history = useHistory();

  return (
    <ProcessContainer active={active} onClick={() => history.push(`/processes/${process.id}`)}>
      <Icon type={process.category} color="$primary" />
      <ProcessName>{process.name}</ProcessName>
      <RoleCounter>{process.roles.length}</RoleCounter>
    </ProcessContainer>
  );
};
