import { useState } from "react";
import { Droppable, DragDropContext, DropResult } from "react-beautiful-dnd";
import { Button } from "@/shared/components/Button/Button";
import { Checkbox } from "@/shared/components/Checkbox/Checkbox";
import { Icon } from "@/shared/components/Icon/Icon";
import { ProcessType } from "@/shared/types/process";
import { Ambit } from "../Ambit/Ambit";
import { CreateModal } from "../CreateModal/CreateModal";
import { Phase } from "../Phase/Phase";
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
import { useAmbit } from "@/shared/hooks/ambit";
import { useProcess } from "@/shared/hooks/process";

type MatrixProps = {
  process: ProcessType;
};

export const Matrix = ({ process }: MatrixProps) => {
  const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);
  const [isAmbitModalOpen, setIsAmbitModalOpen] = useState(false);

  const { updateAmbitPhases } = useAmbit();

  const { updateProcess } = useProcess();

  const checkerHandler = (ambitId: string, phaseId: string, phases: string[]) => {
    const newPhases = phases.includes(phaseId)
      ? phases.filter((phase) => phase !== phaseId)
      : phases.concat(phaseId);
    updateAmbitPhases.mutate({ id: ambitId, process: process.id, phases: newPhases });
  };

  const isEmpty = process.phases.length === 0 && process.ambits.length === 0;

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;
    const ambitName = process.ambits.find((ambit) => ambit.id === draggableId)?.name as string;
    const ambitOrders = process.ambitOrders.filter((ambit) => ambit !== ambitName);
    ambitOrders.splice(destination.index, 0, ambitName);
    updateProcess.mutate({ id: process.id, ambitOrders });
  };

  const ambitSort = (
    a: {
      id: string;
      name: string;
      phases: string[];
    },
    b: {
      id: string;
      name: string;
      phases: string[];
    }
  ) => {
    const orders = process.ambitOrders;
    if (orders.indexOf(a.name) < orders.indexOf(b.name)) return -1;
    return 1;
  };

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
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={process.id}>
                  {(provided) => (
                    <AmbitsContainer ref={provided.innerRef} {...provided.droppableProps}>
                      <AmbitsTitle>Ambits</AmbitsTitle>
                      {process.ambits.sort(ambitSort).map((ambit, i) => (
                        <Ambit
                          id={ambit.id}
                          name={ambit.name}
                          processId={process.id}
                          key={ambit.id}
                          index={i}
                        />
                      ))}
                      {provided.placeholder}
                    </AmbitsContainer>
                  )}
                </Droppable>
              </DragDropContext>

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
                  {process.ambits.sort(ambitSort).map((ambit) => (
                    <TableRow key={ambit.id}>
                      {process.phases.map((phase) => (
                        <TableData key={phase.id}>
                          <Checkbox
                            checked={ambit.phases.includes(phase.id)}
                            handler={() => checkerHandler(ambit.id, phase.id, ambit.phases)}
                            tooltipText={`Click to ${
                              ambit.phases.includes(phase.id)
                                ? `remove ${ambit.name} from`
                                : `add ${ambit.name} to`
                            } ${phase.name}`}
                          />
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
        {!isEmpty && (
          <Button
            onClick={() => setIsAmbitModalOpen((prev) => !prev)}
            color="secondary"
            css={{ width: "12rem", position: "absolute", bottom: "1rem" }}
          >
            <Icon type="plus" /> Add Ambit
          </Button>
        )}
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
