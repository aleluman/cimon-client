import { Icon } from "../Icon/Icon";
import { iconPaths } from "../../constants/Icons";
import { ButtonContainer } from "./styles";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "danger" | "secondary";
  icon?: keyof typeof iconPaths;
  disabled?: boolean;
  isWorking?: boolean;
  size?: "large" | "medium";
  onClick: () => void;
};

export const Button = ({
  children,
  variant = "primary",
  icon,
  disabled,
  isWorking,
  size,
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
      size={size ?? "medium"}
    >
      {icon && <Icon type={icon} />}
      {children}
    </ButtonContainer>
  );
};
