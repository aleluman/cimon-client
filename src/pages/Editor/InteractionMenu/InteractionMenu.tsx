import ReactDOM from "react-dom";
import { Placement, Rect } from "@popperjs/core";
import { useParams } from "react-router-dom";
import { usePopper } from "react-popper";
import { memo, useState } from "react";
import { Divider, RoleMenuContainer } from "./styles";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { InteractionType } from "@/shared/types/editor";
import { useInteraction } from "@/shared/hooks/interaction";
import { getRole } from "@/shared/hooks/role";

export type OffsetsFunction = {
  popper: Rect;
  reference: Rect;
  placement: Placement;
};

const tooltipOffset = ({ reference, popper }: OffsetsFunction): [number, number] => {
  return [0, -reference.height / 2 - popper.height / 2];
};

type RoleMenuProps = {
  parentRef: React.RefObject<SVGPathElement>;
  interaction: InteractionType;
};

export const InteractionMenu = memo(({ parentRef, interaction }: RoleMenuProps) => {
  const { ambitId } = useParams();
  const { deleteInteraction, updateInteraction } = useInteraction(ambitId as string);
  const role1 = getRole(interaction.source, ambitId as string);
  const role2 = getRole(interaction.target, ambitId as string);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(parentRef.current, popperElement, {
    modifiers: [{ name: "offset", options: { offset: tooltipOffset } }],
  });

  const changeHandler = () => {
    updateInteraction.mutateAsync({ ...interaction, inherit: !interaction.inherit });
  };

  return (
    <>
      {ReactDOM.createPortal(
        <RoleMenuContainer ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          {interaction.source !== interaction.target && role1.role === role2.role && (
            <>
              {interaction.inherit ? (
                <IconOnlyButton
                  icon="line"
                  text="Change to interaction"
                  handler={() => changeHandler()}
                  tooltipPlacement="top"
                />
              ) : (
                <IconOnlyButton
                  icon="dash"
                  text="Change to group"
                  handler={() => changeHandler()}
                  tooltipPlacement="top"
                />
              )}
              <Divider />
            </>
          )}
          <IconOnlyButton
            icon="delete"
            text="Delete"
            handler={() => deleteInteraction.mutate(interaction.id)}
            tooltipPlacement="top"
          />
        </RoleMenuContainer>,
        document.getElementById("canvasTooltips") as HTMLDivElement
      )}
    </>
  );
});
