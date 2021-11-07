import { Dialog } from "@headlessui/react";
import { css, theme } from "@/shared/constants/stitches";
import { DialogContainer, ModalContainer, Overlay } from "./styles";
import { usePreferences } from "@/shared/state/store";
import { lightTheme } from "@/shared/constants/lightTheme";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const Modal = ({ children, isOpen, setIsOpen }: ModalProps) => {
  const currentTheme = usePreferences((state) => state.theme);
  return (
    <Dialog
      className={currentTheme === "light" ? lightTheme : theme}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      as={DialogContainer}
    >
      <Dialog.Overlay className={css(Overlay)} />
      <ModalContainer>{children}</ModalContainer>
    </Dialog>
  );
};
