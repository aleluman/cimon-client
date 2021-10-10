import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { LastEditedText, ContentTitle, ContentTitleContainer } from "./styles";

type MainHeaderProps = {
  processName: string;
  lastEdited?: Date;
};

export const MainHeader = ({ processName, lastEdited }: MainHeaderProps) => {
  return (
    <ContentTitleContainer>
      <ContentTitle>
        <Icon type="generic" size={24} color="$primary" />
        {processName}
      </ContentTitle>
      <LastEditedText>
        {lastEdited ? lastEdited.getTime() : "Last modified just now"}
      </LastEditedText>
      <Button variant="secondary" icon="delete" onClick={() => {}}>
        Delete
      </Button>
    </ContentTitleContainer>
  );
};
