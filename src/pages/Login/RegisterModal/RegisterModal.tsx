import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import { Modal } from "@/shared/components/Modal/Modal";
import { RegisterContainer, RegisterTitle } from "./styles";

type RegisterModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export const RegisterModal = ({ isModalOpen, setIsModalOpen }: RegisterModalProps) => {
  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <RegisterTitle> Register</RegisterTitle>
      <Label>
        User name:
        <Input type="text" />
      </Label>
      <Label>
        Email:
        <Input type="email" />
      </Label>
      <Label>
        Password:
        <Input type="password" />
      </Label>
      <Label>
        Repeat password:
        <Input type="password" />
      </Label>
      <RegisterContainer>
        <Button onClick={() => setIsModalOpen(false)} variant="secondary">
          Cancel
        </Button>
        <Button onClick={() => {}}>Register</Button>
      </RegisterContainer>
    </Modal>
  );
};
