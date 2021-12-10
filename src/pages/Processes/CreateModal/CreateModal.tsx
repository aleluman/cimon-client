import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import { Modal } from "@/shared/components/Modal/Modal";
import { ModalFooterContainer, ModalTitle } from "@/shared/components/Modal/styles";
import { ValidationError } from "@/shared/components/ValidationError/ValidationError";
import { ModalForm } from "./styles";
import { usePhase } from "@/shared/hooks/phase";
import { useAmbit } from "@/shared/hooks/ambit";

type CreateWithName = {
  name: string;
};

type CreateModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  type: "phase" | "ambit";
  processId: string;
};

export const CreateModal = ({ isModalOpen, setIsModalOpen, type, processId }: CreateModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateWithName>();

  const { createPhase } = usePhase();
  const { createAmbit } = useAmbit();

  const operation = type === "ambit" ? createAmbit : createPhase;

  const onSubmit: SubmitHandler<CreateWithName> = async (data) => {
    await operation.mutateAsync({
      process: processId,
      name: data.name,
    });

    setIsModalOpen(false);
    reset();
  };

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <ModalForm onSubmit={handleSubmit(onSubmit)}>
        <ModalTitle css={{ width: "20rem" }}>Add {type}</ModalTitle>
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
          <Button color="secondary" type="button" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            type="submit"
            isWorking={operation.isLoading}
            disabled={operation.isLoading}
            css={{ width: "5.8rem", height: "2.1rem" }}
          >
            {operation.isLoading ? " " : `Add ${type}`}
          </Button>
        </ModalFooterContainer>
      </ModalForm>
    </Modal>
  );
};
