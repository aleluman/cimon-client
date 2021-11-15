import { useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { ProcessContainer, ProcessName, RoleCounter } from "./styles";
import { Summary } from "../Summary/Summary";

type ProcessProps = {
  process: ProcessType;
};

export const Process = ({ process }: ProcessProps) => {
  const [summaryVisible, setSummaryVisible] = useState(false);
  const params = useParams();
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
        active={params["*"] === process.id}
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
