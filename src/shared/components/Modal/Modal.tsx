import { Dialog } from "@headlessui/react";
import { css } from "@/shared/constants/stitches";
import { DialogContainer, ModalContainer, Overlay } from "./styles";

type HelpProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const Modal = ({ children, isOpen, setIsOpen }: HelpProps) => {
  return (
    <Dialog className={css(DialogContainer)} open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Overlay className={css(Overlay)} />
      <ModalContainer>{children}</ModalContainer>
    </Dialog>
  );
};
