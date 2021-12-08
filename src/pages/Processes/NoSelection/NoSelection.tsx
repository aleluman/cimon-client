import { Icon } from "@/shared/components/Icon/Icon";
import { HelpText, NoSelectionContainer } from "./styles";

export const NoSelection = () => {
  return (
    <NoSelectionContainer>
      <Icon type="logo" size={56} color="$iconGray" />
      <HelpText>
        Create a new process on the sidebar or select an existing one to see its details.
      </HelpText>
    </NoSelectionContainer>
  );
};
