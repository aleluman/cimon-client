import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProcess } from "@/shared/api/process";
import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import { Modal } from "@/shared/components/Modal/Modal";
import { Select } from "@/shared/components/Select/Select";
import { categories } from "@/shared/constants/categories";
import { ModalButtonContainer, ModalTitle, NewProcessForm } from "./styles";
import { ProcessType } from "@/shared/types/process";

type NewProcessInputs = {
  name: string;
  objective: string;
  description: string;
};

type NewProcessModalProps = {
  show: boolean;
  handler: (value: boolean) => void;
};

export const NewProcessModal = ({ show, handler }: NewProcessModalProps) => {
  const [category, setCategory] = useState<ProcessType["category"]>("generic");

  const { createProcess } = useProcess();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewProcessInputs>();

  const onSubmit: SubmitHandler<NewProcessInputs> = async (data) => {
    await createProcess.mutateAsync({ ...data, category });
    setCategory("generic");
    handler(false);
  };

  return (
    <Modal isOpen={show} setIsOpen={handler}>
      <NewProcessForm onSubmit={handleSubmit(onSubmit)}>
        <ModalTitle>Add process</ModalTitle>
        <Label>
          Name
          <Input type="text" {...register("name")} />
        </Label>
        <Label>
          Type
          <Select options={categories} handler={setCategory} selectedValue={category} />
        </Label>
        <Label css={{ height: "6rem" }}>
          Objective
          <Input as="textarea" {...register("objective")} />
        </Label>
        <Label css={{ height: "9rem" }}>
          Description
          <Input as="textarea" {...register("description")} />
        </Label>
        <ModalButtonContainer>
          <Button type="button" color="secondary" onClick={() => handler(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={createProcess.isLoading}
            isWorking={createProcess.isLoading}
          >
            {createProcess.isLoading ? " " : "Create"}
          </Button>
        </ModalButtonContainer>
      </NewProcessForm>
    </Modal>
  );
};
