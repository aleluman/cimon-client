import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { usePopper } from "react-popper";
import { memo, useMemo, useState } from "react";
import {
  ActorsButton,
  Divider,
  IconContainer,
  IconSelect,
  MenuDivider,
  RoleMenuContainer,
  SelectMenu,
  SelectMenuText,
} from "./styles";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Icon } from "@/shared/components/Icon/Icon";
import { useRole } from "@/shared/hooks/role";
import { css } from "@/shared/constants/stitches";
import { RoleType } from "@/shared/types/editor";
import { Tooltip } from "@/shared/components/Tooltip/Tooltip";
import { queryClient } from "@/shared/state/store";
import { AmbitType } from "@/shared/types/process";

type RoleMenuProps = {
  parentRef: React.RefObject<HTMLDivElement>;
  role: RoleType;
  setEditing: (value: boolean) => void;
  stakeholder: boolean;
};

export const RoleMenu = memo(({ parentRef, role, setEditing, stakeholder }: RoleMenuProps) => {
  const { ambitId } = useParams();
  const { deleteRole, updateRole } = useRole(ambitId as string);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(parentRef.current, popperElement, {
    modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
  });

  const updateRoleType = (type: RoleType["role"]) => {
    updateRole.mutate({ ...role, role: type });
  };

  const updateRoleUse = (solutionUse: RoleType["solutionUse"]) => {
    updateRole.mutate({ ...role, solutionUse });
  };

  const updateRoleActors = (numberOfActors: RoleType["numberOfActors"]) => {
    updateRole.mutate({ ...role, numberOfActors });
  };

  const isInGroup = useMemo(() => {
    const ambit = queryClient.getQueryData<AmbitType>(["ambit", ambitId]) as AmbitType;
    const { interactions } = ambit.graph;
    return interactions.some(
      (interaction) =>
        interaction.inherit && (interaction.source === role.id || interaction.target === role.id)
    );
  }, [ambitId, role.id]);

  return (
    <>
      {ReactDOM.createPortal(
        <RoleMenuContainer ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          <IconOnlyButton
            icon="edit"
            text="Edit name"
            handler={() => setEditing(true)}
            tooltipPlacement="top"
          />
          <IconOnlyButton
            icon="delete"
            text="Delete"
            handler={() => deleteRole.mutate(role.id)}
            tooltipPlacement="top"
          />
          {!stakeholder && (
            <>
              <Divider />
              {!isInGroup && (
                <Popover as="div">
                  <Tooltip text="Change role or use" tooltipPlacement="top">
                    <Popover.Button className={css(IconSelect)}>
                      <Icon type={`${role.role}-${role.solutionUse}`} />
                    </Popover.Button>
                  </Tooltip>
                  <Popover.Panel className={css(SelectMenu)}>
                    <SelectMenuText>Role</SelectMenuText>
                    <IconContainer>
                      <IconOnlyButton
                        text="Human"
                        icon={`human-${role.solutionUse}`}
                        handler={() => updateRoleType("human")}
                        working={role.role === "human"}
                      />
                      <IconOnlyButton
                        text="Service"
                        icon={`service-${role.solutionUse}`}
                        handler={() => updateRoleType("service")}
                        working={role.role === "service"}
                      />
                      <IconOnlyButton
                        text="Repository"
                        icon={`repository-${role.solutionUse}`}
                        handler={() => updateRoleType("repository")}
                        working={role.role === "repository"}
                      />
                    </IconContainer>
                    <MenuDivider />
                    <SelectMenuText>Solution use</SelectMenuText>
                    <IconContainer>
                      <IconOnlyButton
                        text="Internal"
                        icon={`${role.role}-internal`}
                        handler={() => updateRoleUse("internal")}
                        working={role.solutionUse === "internal"}
                      />
                      <IconOnlyButton
                        text="External"
                        icon={`${role.role}-external`}
                        handler={() => updateRoleUse("external")}
                        working={role.solutionUse === "external"}
                      />
                      <IconOnlyButton
                        text="Both"
                        icon={`${role.role}-both`}
                        handler={() => updateRoleUse("both")}
                        working={role.solutionUse === "both"}
                      />
                    </IconContainer>
                  </Popover.Panel>
                </Popover>
              )}
              <Popover as="div">
                <Tooltip text="Change actors" tooltipPlacement="top">
                  <Popover.Button className={css(IconSelect)}>{role.numberOfActors}</Popover.Button>
                </Tooltip>
                <Popover.Panel className={css(SelectMenu)}>
                  <SelectMenuText>Number of Actors</SelectMenuText>
                  <IconContainer>
                    <ActorsButton
                      onClick={() => updateRoleActors("0..N")}
                      working={role.numberOfActors === "0..N"}
                    >
                      0..N
                    </ActorsButton>
                    <ActorsButton
                      onClick={() => updateRoleActors("1..N")}
                      working={role.numberOfActors === "1..N"}
                    >
                      1..N
                    </ActorsButton>
                    <ActorsButton
                      onClick={() => updateRoleActors("0..1")}
                      working={role.numberOfActors === "0..1"}
                    >
                      0..1
                    </ActorsButton>
                    <ActorsButton
                      onClick={() => updateRoleActors("1")}
                      working={role.numberOfActors === "1"}
                    >
                      1
                    </ActorsButton>
                    <ActorsButton
                      onClick={() => updateRoleActors("?")}
                      working={role.numberOfActors === "?"}
                    >
                      ?
                    </ActorsButton>
                  </IconContainer>
                </Popover.Panel>
              </Popover>
            </>
          )}
        </RoleMenuContainer>,
        document.getElementById("canvasTooltips") as HTMLDivElement
      )}
    </>
  );
});
