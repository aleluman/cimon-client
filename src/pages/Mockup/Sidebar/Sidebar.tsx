import { ActionsToolbar } from "@/shared/components/ActionsToolbar/ActionsToolbar";
import { Select } from "@/shared/components/Select/Select";
import { PhoneContainer } from "../PhoneContainer/PhoneContainer";
import { SidebarContainer } from "./styles";

const options = [
  { id: "1", name: "Hola", value: "hola" },
  { id: "2", name: "Hola", value: "hole" },
  { id: "3", name: "Hola", value: "holi" },
  { id: "4", name: "Hola", value: "holo" },
];

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <ActionsToolbar inMockup />

      <PhoneContainer />
      <Select options={options} selectedValue="hola" handler={() => {}} />
    </SidebarContainer>
  );
};
