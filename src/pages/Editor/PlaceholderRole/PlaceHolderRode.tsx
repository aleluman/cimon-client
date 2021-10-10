import { Icon } from "@/shared/components/Icon/Icon";
import { theme } from "@/shared/constants/stitches";
import { useEditor } from "@/shared/state/store";
import { PlaceholderRoleType } from "@/shared/types/editor";
import { PlaceholderContainer } from "./styles";

export const PlaceholderRole = () => {
  const { x, y, role } = useEditor((state) => state.placeholderRole as PlaceholderRoleType);
  return (
    <PlaceholderContainer css={{ transform: `translate3d(${x}px,${y}px,0)` }}>
      <Icon type={`${role}-internal`} size={32} color={`${theme.colors.primaryAccent.value}`} />
    </PlaceholderContainer>
  );
};
