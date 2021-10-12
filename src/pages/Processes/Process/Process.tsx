import { useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { ProcessContainer, ProcessName, RoleCounter } from "./styles";
import { ProcessRouteParams } from "@/shared/types/routes";
import { Summary } from "../Summary/Summary";

type ProcessProps = {
  process: ProcessType;
};

export const Process = ({ process }: ProcessProps) => {
  const [summaryVisible, setSummaryVisible] = useState(false);
  const { pathname } = useLocation();
  const match = matchPath<ProcessRouteParams>(pathname, "/processes/:processId");
  const processRef = useRef<HTMLAnchorElement>(null);

  const handlers = useGesture({
    onHover: ({ active }) => {
      setSummaryVisible(active);
    },
  });

  return (
    <>
      <ProcessContainer
        {...handlers()}
        ref={processRef}
        active={match?.params.processId === process.id}
        as={Link}
        to={`/processes/${process.id}`}
      >
        <Icon type={process.category} color="$primary" />
        <ProcessName>{process.name}</ProcessName>
        <RoleCounter>{process.roles.length}</RoleCounter>
      </ProcessContainer>
      {summaryVisible && <Summary parentRef={processRef} process={process} />}
    </>
  );
};
