import { Select } from "@/shared/components/Select/Select";
import { Tag } from "@/shared/components/Tag/Tag";
import { categories } from "@/shared/constants/categories";
import { RoleType } from "@/shared/types/editor";
import { ProcessType } from "@/shared/types/process";
import {
  DetailsContainer,
  Label,
  SectionContainer,
  Textarea,
  TagContainer,
  RolesContainer,
} from "./styles";

type DetailsProps = {
  process: ProcessType;
};

export const Details = ({ process }: DetailsProps) => {
  const getRolesByType = (type: RoleType["role"]) => {
    const filteredRoles = process.roles.filter((role) => role.type === type);
    if (filteredRoles.length === 0) return "no roles";
    return filteredRoles.map((role) => role.name).join(", ");
  };

  return (
    <DetailsContainer>
      <SectionContainer>
        <Label>
          Type
          <Select options={categories} handler={() => {}} selectedValue={process.category} />
        </Label>
        <Label css={{ height: "7rem" }}>
          Objective
          <Textarea
            placeholder="Write an objective for the process..."
            defaultValue={process.objective}
          />
        </Label>
      </SectionContainer>
      <SectionContainer>
        <Label css={{ height: "12rem" }}>
          Description
          <Textarea
            placeholder="Write a description for the process..."
            defaultValue={process.description}
          />
        </Label>
      </SectionContainer>
      <SectionContainer>
        <Label>Roles </Label>
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
      </SectionContainer>
    </DetailsContainer>
  );
};
