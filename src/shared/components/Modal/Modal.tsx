import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { theme } from "@/shared/constants/stitches";
import {
  DialogContainer,
  dialogEnd,
  dialogStart,
  ModalContainer,
  Overlay,
  overlayEnd,
  overlayStart,
  overlayTransition,
  transitionDialog,
} from "./styles";
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
    <Transition show={isOpen}>
      <Dialog
        className={currentTheme === "light" ? lightTheme : theme}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        as={DialogContainer}
      >
        <Transition.Child
          as={Fragment}
          enter={overlayTransition().className}
          enterFrom={overlayStart().className}
          enterTo={overlayEnd().className}
          leave={overlayTransition().className}
          leaveFrom={overlayEnd().className}
          leaveTo={overlayStart().className}
        >
          <Dialog.Overlay as={Overlay} darker={currentTheme === "dark"} />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter={transitionDialog().className}
          enterFrom={dialogStart().className}
          enterTo={dialogEnd().className}
          leave={transitionDialog().className}
          leaveFrom={dialogEnd().className}
          leaveTo={dialogStart().className}
        >
          <ModalContainer>{children}</ModalContainer>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
