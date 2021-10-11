import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { LastEditedText, ContentTitle, ContentTitleContainer } from "./styles";

type MainHeaderProps = {
  processName: string;
  lastEdited?: Date;
  category: ProcessType["category"];
};

export const MainHeader = ({ processName, lastEdited, category }: MainHeaderProps) => {
  return (
    <ContentTitleContainer>
      <ContentTitle>
        <Icon type={category} size={24} color="$primary" />
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
