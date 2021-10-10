import { Icon } from "../Icon/Icon";
import { iconPaths } from "../../constants/Icons";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "danger" | "secondary";
  icon?: keyof typeof iconPaths;
  disabled?: boolean;
  isWorking?: boolean;
  onClick: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  icon,
  disabled,
  isWorking,
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled && !isWorking) {
      onClick();
    }
  };

  return (
    <ButtonContainer
      onClick={handleClick}
      color={variant}
      disabled={disabled}
      isWorking={isWorking}
    >
      {icon && <Icon type={icon} />}
      {children}
    </ButtonContainer>
  );
};
