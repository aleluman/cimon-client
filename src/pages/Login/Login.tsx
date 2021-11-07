import { useState } from "react";
import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import { Modal } from "@/shared/components/Modal/Modal";
import {
  LoginContainer,
  LoginFormContainer,
  LoginTitle,
  Divider,
  RegisterContainer,
  InfoText,
  RegisterTitle,
  LogoContainer,
} from "./styles";
import { Icon } from "@/shared/components/Icon/Icon";

export const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>
        <Label>
          Email:
          <Input type="email" />
        </Label>
        <Label>
          Password:
          <Input type="password" />
        </Label>
        <Button onClick={() => {}} size="large">
          Login
        </Button>
        <Divider />
        <RegisterContainer css={{ marginBottom: "10rem" }}>
          <InfoText>Don&apos;t have an account?</InfoText>
          <Button onClick={() => setIsModalOpen(!isModalOpen)} variant="success">
            Register
          </Button>
        </RegisterContainer>
      </LoginFormContainer>
      <LogoContainer>
        <Icon type="logo" size={88} />
        CIMoN Manager
      </LogoContainer>
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
    </LoginContainer>
  );
};
