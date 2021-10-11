import { iconPaths } from "@/shared/constants/Icons";
import { Icon } from "../Icon/Icon";
import { TagContainer } from "./styles";

type TagProps = {
  text: string;
  icon?: keyof typeof iconPaths;
};

export const Tag = ({ text, icon }: TagProps) => {
  return (
    <TagContainer>
      {icon && <Icon type={icon} />}
      {text}
    </TagContainer>
  );
};
