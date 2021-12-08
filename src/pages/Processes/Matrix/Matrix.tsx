import { useState } from "react";
import { Button } from "@/shared/components/Button/Button";
import { Checkbox } from "@/shared/components/Checkbox/Checkbox";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { Ambit } from "../Ambit/Ambit";
import {
  HelpText,
  PhaseContainer,
  Table,
  TableContainer,
  TableData,
  TableDiv,
  TableHead,
  TableRow,
  AmbitsContainer,
  AmbitsTitle,
  EmptyContainer,
} from "./styles";
import { CreateModal } from "../CreateModal/CreateModal";
import { Phase } from "../Phase/Phase";

type MatrixProps = {
  process: ProcessType;
};

export const Matrix = ({ process }: MatrixProps) => {
  const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);
  const [isAmbitModalOpen, setIsAmbitModalOpen] = useState(false);

  const isEmpty = process.phases.length === 0 && process.ambits.length === 0;

  return (
    <>
      <TableContainer>
        {isEmpty && (
          <EmptyContainer>
            <HelpText>
              This process doesn&apos;t have any phases or ambits yet. To start modeling this
              process, add a phase and then add some ambits to it.
            </HelpText>
            <Button
              css={{ marginTop: "1rem" }}
              onClick={() => setIsPhaseModalOpen((prev) => !prev)}
            >
              <Icon type="plus" /> Add Phase
            </Button>
          </EmptyContainer>
        )}
        {!isEmpty && (
          <>
            <TableDiv>
              <AmbitsContainer>
                <AmbitsTitle>Ambits</AmbitsTitle>
                {process.ambits.map((ambit) => (
                  <Ambit id={ambit.id} name={ambit.name} />
                ))}
              </AmbitsContainer>
              <Table>
                <thead>
                  <TableRow>
                    {process.phases.map((phase) => (
                      <TableHead key={phase.id}>
                        <Phase id={phase.id} name={phase.name} processId={process.id} />
                      </TableHead>
                    ))}
                  </TableRow>
                </thead>
                <tbody>
                  {process.ambits.map((ambit) => (
                    <TableRow key={ambit.id}>
                      {process.phases.map((phase) => (
                        <TableData key={phase.id}>
                          <Checkbox checked={ambit.phases.includes(phase.id)} handler={() => {}} />
                        </TableData>
                      ))}
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableDiv>
            <PhaseContainer>
              <Button
                onClick={() => setIsPhaseModalOpen((prev) => !prev)}
                color="secondary"
                css={{ marginLeft: "1rem" }}
              >
                <Icon type="plus" /> Add Phase
              </Button>
            </PhaseContainer>
          </>
        )}
        <Button
          onClick={() => setIsAmbitModalOpen((prev) => !prev)}
          color="secondary"
          css={{ width: "13rem", position: "absolute", bottom: "1rem" }}
        >
          <Icon type="plus" /> Add Ambit
        </Button>
      </TableContainer>
      <CreateModal
        isModalOpen={isPhaseModalOpen}
        setIsModalOpen={setIsPhaseModalOpen}
        type="phase"
        processId={process.id}
      />
      <CreateModal
        isModalOpen={isAmbitModalOpen}
        setIsModalOpen={setIsAmbitModalOpen}
        type="ambit"
        processId={process.id}
      />
    </>
  );
};
