import { Checkbox } from "@/shared/components/Checkbox/Checkbox";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { Ambit } from "../Ambit/Ambit";
import {
  AddButton,
  PhaseContainer,
  Table,
  TableContainer,
  TableData,
  TableHead,
  TableRow,
} from "./styles";

type MatrixProps = {
  process: ProcessType;
};

export const Matrix = ({ process }: MatrixProps) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHead css={{ color: "$textImportant", fontWeight: 700, width: "12rem" }}>
              Ambits
            </TableHead>
            {process.phases.map((phase) => (
              <TableHead key={phase.id}>{phase.name}</TableHead>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {process.ambits.map((ambit) => (
            <TableRow key={ambit.id}>
              <TableData>
                <Ambit id={ambit.id} name={ambit.name} />
              </TableData>
              {process.phases.map((phase) => (
                <TableData key={phase.id}>
                  <Checkbox checked={ambit.phases.includes(phase.id)} handler={() => {}} />
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
      <AddButton onClick={() => {}}>
        <Icon type="plus" /> Add Ambit
      </AddButton>
      <PhaseContainer>
        <AddButton onClick={() => {}} css={{ width: "7rem" }}>
          <Icon type="plus" /> Add Phase
        </AddButton>
      </PhaseContainer>
    </TableContainer>
  );
};
