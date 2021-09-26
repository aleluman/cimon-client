import { Icon } from "@/shared/components/Icon/Icon";
import { HelpText, NoSelectionContainer } from "./styles";

type NoSelectionProps = {
  noProcesses?: boolean;
};

export const NoSelection = ({ noProcesses }: NoSelectionProps) => {
  return (
    <NoSelectionContainer>
      <Icon type="logo" size={56} color="$iconGray" />
      <HelpText>
        {noProcesses
          ? "Create a new process on the sidebar."
          : "Select a process on the sidebar to see its details."}
      </HelpText>
    </NoSelectionContainer>
  );
};
