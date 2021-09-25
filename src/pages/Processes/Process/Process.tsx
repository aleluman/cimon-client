import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessContainer, ProcessName, RoleCounter } from "./styles";

type ProcessProps = {
  active?: boolean;
};

export const Process = ({ active }: ProcessProps) => {
  return (
    <ProcessContainer active={active}>
      <Icon type="download" color="$primary" />
      <ProcessName>Elderly Care</ProcessName>
      <RoleCounter>1</RoleCounter>
    </ProcessContainer>
  );
};
