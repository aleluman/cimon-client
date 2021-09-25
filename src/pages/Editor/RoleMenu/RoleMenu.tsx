import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { memo, useState } from "react";
import { Divider, IconSelect, RoleMenuContainer } from "./styles";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Icon } from "@/shared/components/Icon/Icon";
import { useRole } from "@/shared/api/role";

type RoleMenuProps = {
  parentRef: React.RefObject<HTMLDivElement>;
  roleId: string;
  setEditing: (value: boolean) => void;
};

export const RoleMenu = memo(({ parentRef, roleId, setEditing }: RoleMenuProps) => {
  const { deleteRole, updateRole } = useRole();

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(parentRef.current, popperElement, {
    modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
  });

  return (
    <>
      {ReactDOM.createPortal(
        <RoleMenuContainer ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          <IconOnlyButton icon="edit" text="Edit name" handler={() => setEditing(true)} />
          <IconOnlyButton icon="delete" text="Delete" handler={() => deleteRole.mutate(roleId)} />
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
