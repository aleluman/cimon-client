import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { ValidationError } from "@/shared/components/ValidationError/ValidationError";

type LoginInputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const login = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => login.mutate(data);

  return (
    <LoginContainer>
      <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>Login</LoginTitle>
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
          {errors.email && <ValidationError>{errors.email?.message}</ValidationError>}
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
            })}
          />
          {errors.password && <ValidationError>{errors.password?.message}</ValidationError>}
        </Label>
        <Button type="submit" size="large" disabled={login.isLoading} isWorking={login.isLoading}>
          {login.isLoading ? " " : "Login"}
        </Button>
        <Divider />
        <RegisterContainer css={{ marginBottom: "10rem" }}>
          <InfoText>Don&apos;t have an account?</InfoText>
          <Button type="button" onClick={() => setIsModalOpen(!isModalOpen)} color="success">
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
