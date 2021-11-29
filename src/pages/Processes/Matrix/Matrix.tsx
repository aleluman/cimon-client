import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Button } from "@/shared/components/Button/Button";
import { Checkbox } from "@/shared/components/Checkbox/Checkbox";
import { Icon } from "@/shared/components/Icon/Icon";
import { Modal } from "@/shared/components/Modal/Modal";
import { ModalFooterContainer, ModalTitle } from "@/shared/components/Modal/styles";
import { ProcessType } from "@/shared/types/process";
import { Ambit } from "../Ambit/Ambit";
import {
  AddButton,
  HelpText,
  ModalForm,
  PhaseContainer,
  Table,
  TableContainer,
  TableData,
  TableHead,
  TableRow,
} from "./styles";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import { useProcess } from "@/shared/hooks/process";
import { ValidationError } from "@/shared/components/ValidationError/ValidationError";

type NewPhaseInputs = {
  name: string;
};

type MatrixProps = {
  process: ProcessType;
};

export const Matrix = ({ process }: MatrixProps) => {
  const [isPhaseModalOpen, setIsPhaseModalOpen] = useState(false);

  const { updateProcess } = useProcess();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPhaseInputs>();

  const onSubmit: SubmitHandler<NewPhaseInputs> = async (data) => {
    await updateProcess.mutateAsync({
      id: process.id,
      phases: [...process.phases, { id: nanoid(), name: data.name }],
    });
    setIsPhaseModalOpen(false);
    reset();
  };

  const isEmpty = process.phases.length === 0 && process.ambits.length === 0;

  return (
    <>
      <TableContainer>
        {isEmpty && (
          <>
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
          </>
        )}
        {!isEmpty && (
          <>
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
          </>
        )}
      </TableContainer>
      <Modal isOpen={isPhaseModalOpen} setIsOpen={setIsPhaseModalOpen}>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle css={{ width: "20rem" }}>Add phase</ModalTitle>
          <Label>
            Name
            <Input
              {...register("name", {
                required: { value: true, message: "A name is required" },
                maxLength: {
                  value: 40,
                  message: "Name is too long",
                },
              })}
            />
            {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
          </Label>
          <ModalFooterContainer>
            <Button color="secondary" type="button">
              Cancel
            </Button>
            <Button type="submit">Add Phase</Button>
          </ModalFooterContainer>
        </ModalForm>
      </Modal>
    </>
  );
};
