import { useRef, useState } from "react";
import { useGesture } from "@use-gesture/react";
import { Link, useParams } from "react-router-dom";
import { queryClient } from "@/shared/state/store";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { ProcessContainer, ProcessName, RoleCounter } from "./styles";
import { Summary } from "../Summary/Summary";
import axios from "@/shared/constants/axios";
import { urls } from "@/shared/constants/urls";
import { iconPaths, processIcons } from "@/shared/constants/Icons";

type ProcessProps = {
  process: ProcessType;
};

export const Process = ({ process }: ProcessProps) => {
  const [summaryVisible, setSummaryVisible] = useState(false);
  const params = useParams();
  const processRef = useRef<HTMLAnchorElement>(null);

  const prefetch = async () => {
    const response = await axios.get<ProcessType>(`${urls.API_URL}/processes/${process.id}`);
    return response.data;
  };

  const handlers = useGesture({
    onHover: async ({ active }) => {
      setSummaryVisible(active);
      await queryClient.prefetchQuery(["process", process.id], prefetch, { staleTime: 50000 });
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
        <Icon type={processIcons[process.category] as keyof typeof iconPaths} color="$primary" />
        <ProcessName>{process.name}</ProcessName>
        <RoleCounter>{process.roles.length}</RoleCounter>
      </ProcessContainer>
      {summaryVisible && <Summary parentRef={processRef} process={process} />}
    </>
  );
};
