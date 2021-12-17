import ReactDOM from "react-dom";
import { useState } from "react";
import { usePopper } from "react-popper";
import {
  Description,
  LastEditedText,
  RolesContainer,
  RolesDiv,
  SummaryContainer,
  TagContainer,
} from "./styles";
import { ProcessType } from "@/shared/types/process";
import { getRelativeTime } from "@/shared/utils/relativeTime";
import { RoleType } from "@/shared/types/editor";
import { Tag } from "@/shared/components/Tag/Tag";

type SummaryProps = {
  parentRef: React.RefObject<HTMLAnchorElement>;
  process: ProcessType;
};

export const Summary = ({ parentRef, process }: SummaryProps) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(parentRef.current, popperElement, {
    placement: "right",
    modifiers: [{ name: "offset", options: { offset: [0, 4] } }],
  });

  const getRolesByType = (type: RoleType["role"]) => {
    const filteredRoles = process.roles.filter((role) => role.role === type);
    if (filteredRoles.length === 0) return "no roles";
    return filteredRoles.map((role) => role.name).join(", ");
  };

  return (
    <>
      {ReactDOM.createPortal(
        <SummaryContainer ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          <Description>
            {process.description !== ""
              ? process.description
              : "This process doesn't have a description."}
          </Description>
          <RolesDiv>
            <TagContainer>
              <Tag text="Human" icon="human-internal" />
              <RolesContainer>{getRolesByType("human")}</RolesContainer>
            </TagContainer>
            <TagContainer>
              <Tag text="Service" icon="service-internal" />
              <RolesContainer>{getRolesByType("service")}</RolesContainer>
            </TagContainer>
            <TagContainer>
              <Tag text="Repository" icon="repository-internal" />
              <RolesContainer>{getRolesByType("repository")}</RolesContainer>
            </TagContainer>
          </RolesDiv>
          <LastEditedText>
            Last edited {getRelativeTime(new Date(process.lastEdited))}
          </LastEditedText>
        </SummaryContainer>,
        document.getElementById("tooltips") as HTMLDivElement
      )}
    </>
  );
};
