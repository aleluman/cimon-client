import { SubmitHandler, useForm } from "react-hook-form";
import { useRegister } from "@/shared/hooks/register";
import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import { Modal } from "@/shared/components/Modal/Modal";
import { FormContainer, RegisterContainer, RegisterTitle } from "./styles";
import { ValidationError } from "@/shared/components/ValidationError/ValidationError";

type RegisterInputs = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

type RegisterModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export const RegisterModal = ({ isModalOpen, setIsModalOpen }: RegisterModalProps) => {
  const registerMutation = useRegister();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    registerMutation.mutate(data);
  };

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <RegisterTitle> Register</RegisterTitle>
        <Label>
          User name:
          <Input
            type="text"
            {...register("name", {
              required: { value: true, message: "User name is required" },
              minLength: { value: 4, message: "Must have at least 4 characters" },
              maxLength: { value: 100, message: "Must have at most 100 characters" },
            })}
          />
          {errors.name && <ValidationError>{errors.name.message}</ValidationError>}
        </Label>
        <Label>
          Email:
          <Input
            type="text"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: "Not a valid email address",
              },
            })}
          />
          {errors.email && <ValidationError>{errors.email.message}</ValidationError>}
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              minLength: { value: 6, message: "Must have at least 6 characters" },
            })}
          />
          {errors.password && <ValidationError>{errors.password.message}</ValidationError>}
        </Label>
        <Label>
          Repeat password:
          <Input
            type="password"
            {...register("repeatPassword", {
              required: { value: true, message: "Password is required" },
              validate: (value) => value === getValues("password") || "The passwords do not match",
            })}
          />
          {errors.repeatPassword && (
            <ValidationError>{errors.repeatPassword.message}</ValidationError>
          )}
        </Label>
        <RegisterContainer>
          <Button type="button" onClick={() => setIsModalOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={registerMutation.isLoading}
            isWorking={registerMutation.isLoading}
            css={{ width: "4.6rem", height: "2rem" }}
          >
            {registerMutation.isLoading ? " " : "Register"}
          </Button>
        </RegisterContainer>
      </FormContainer>
    </Modal>
  );
};
