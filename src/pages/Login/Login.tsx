import { useState } from "react";
import { Button } from "@/shared/components/Button/Button";
import { Input } from "@/shared/components/Input/Input";
import { Label } from "@/shared/components/Label/Label";
import {
  LoginContainer,
  LoginFormContainer,
  LoginTitle,
  Divider,
  RegisterContainer,
  InfoText,
  LogoContainer,
} from "./styles";
import { Icon } from "@/shared/components/Icon/Icon";
import { useLogin } from "@/shared/api/login";
import { RegisterModal } from "./RegisterModal/RegisterModal";

export const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>
        <Label>
          Email:
          <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </Label>
        <Button onClick={() => login.mutate({ email, password })} size="large">
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
      <RegisterModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </LoginContainer>
  );
};
