import { Link, matchPath, useLocation } from "react-router-dom";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { ProcessContainer, ProcessName, RoleCounter } from "./styles";
import { ProcessRouteParams } from "@/shared/types/routes";

type ProcessProps = {
  process: ProcessType;
};

export const Process = ({ process }: ProcessProps) => {
  const { pathname } = useLocation();
  const match = matchPath<ProcessRouteParams>(pathname, "/processes/:processId");

  return (
    <ProcessContainer
      active={match?.params.processId === process.id}
      as={Link}
      to={`/processes/${process.id}`}
    >
      <Icon type={process.category} color="$primary" />
      <ProcessName>{process.name}</ProcessName>
      <RoleCounter>{process.roles.length}</RoleCounter>
    </ProcessContainer>
  );
};
