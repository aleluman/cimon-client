import { Select } from "@/shared/components/Select/Select";
import { categories } from "@/shared/constants/categories";
import { DetailsContainer, Label, SectionContainer, Textarea } from "./styles";

export const Details = () => {
  return (
    <DetailsContainer>
      <SectionContainer>
        <Label>
          Type
          <Select options={categories} handler={() => {}} selectedValue="1" />
        </Label>
        <Label css={{ height: "7rem" }}>
          Objective
          <Textarea placeholder="Write an objective for the process..." />
        </Label>
      </SectionContainer>
      <SectionContainer>
        <Label css={{ height: "12rem" }}>
          Description
          <Textarea placeholder="Write a description for the process..." />
        </Label>
      </SectionContainer>
      <SectionContainer>
        <Label>Roles </Label>
      </SectionContainer>
    </DetailsContainer>
  );
};
