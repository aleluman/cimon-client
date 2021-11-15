import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { getRelativeTime } from "@/shared/utils/relativeTime";
import { LastEditedText, ContentTitle, ContentTitleContainer } from "./styles";

type MainHeaderProps = {
  process: ProcessType;
};

export const MainHeader = ({ process }: MainHeaderProps) => {
  return (
    <ContentTitleContainer>
      <ContentTitle>
        <Icon type={process.category} size={24} color="$primary" />
        {process.name}
      </ContentTitle>
      <LastEditedText>Last edited {getRelativeTime(new Date(process.lastEdited))}</LastEditedText>
      <Button color="secondary" onClick={() => {}}>
        <Icon type="delete" />
        Delete
      </Button>
    </ContentTitleContainer>
  );
};
