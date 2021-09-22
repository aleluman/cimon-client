import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { memo, useState } from "react";
import { Divider, IconSelect, RoleMenuContainer } from "./styles";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Icon } from "@/shared/components/Icon/Icon";

type RoleMenuProps = {
  parentRef: React.RefObject<HTMLDivElement>;
};

export const RoleMenu = memo(({ parentRef }: RoleMenuProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(parentRef.current, popperElement);

  return (
    <>
      {ReactDOM.createPortal(
        <RoleMenuContainer ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          <IconOnlyButton icon="edit" text="Edit name" handler={() => {}} />
          <IconOnlyButton icon="delete" text="Delete" handler={() => {}} />
          <Divider />
          <IconSelect>
            <Icon type="human-internal" />
          </IconSelect>
          <IconSelect>0..N</IconSelect>
        </RoleMenuContainer>,
        document.getElementById("tooltips") as HTMLDivElement
      )}
    </>
  );
});
