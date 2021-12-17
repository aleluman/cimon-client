import { useState, ChangeEvent } from "react";
import { Select } from "@/shared/components/Select/Select";
import { Tag } from "@/shared/components/Tag/Tag";
import { categories } from "@/shared/constants/categories";
import { useDebounce } from "@/shared/hooks/debounce";
import { useProcess } from "@/shared/hooks/process";
import { RoleType } from "@/shared/types/editor";
import { ProcessType } from "@/shared/types/process";
import { DetailsContainer, Label, SectionContainer, TagContainer, RolesContainer } from "./styles";
import { Input } from "@/shared/components/Input/Input";

type DetailsProps = {
  process: ProcessType;
};

export const Details = ({ process }: DetailsProps) => {
  const [objective, setObjective] = useState(process.objective);
  const [description, setDescription] = useState(process.description);

  const getRolesByType = (type: RoleType["role"]) => {
    const filteredRoles = process.roles.filter((role) => role.role === type);
    if (filteredRoles.length === 0) return "no roles";
    return filteredRoles.map((role) => role.name).join(", ");
  };

  const { updateProcess } = useProcess();

  useDebounce(() => updateProcess.mutate({ id: process.id, objective, description }), 1000, [
    objective,
    description,
  ]);

  return (
    <DetailsContainer>
      <SectionContainer>
        <div>
          <Label css={{ marginBottom: "0.4rem" }}>Type</Label>
          <Select
            options={categories}
            handler={(value) => updateProcess.mutate({ id: process.id, category: value })}
            selectedValue={process.category}
          />
        </div>
        <Label css={{ height: "7rem" }}>
          Objective
          <Input
            placeholder="Write an objective for the process..."
            defaultValue={process.objective}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setObjective(event.target.value)}
            maxLength={199}
            as="textarea"
          />
        </Label>
      </SectionContainer>
      <SectionContainer>
        <Label css={{ height: "12rem" }}>
          Description
          <Input
            placeholder="Write a description for the process..."
            defaultValue={process.description}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(event.target.value)
            }
            maxLength={399}
            as="textarea"
          />
        </Label>
      </SectionContainer>
      <SectionContainer css={{ overflow: "auto" }}>
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
