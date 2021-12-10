import ReactDOM from "react-dom";
import { FocusEvent, KeyboardEvent, useState } from "react";
import { toast } from "react-toastify";
import { usePopper } from "react-popper";
import { useGesture } from "@use-gesture/react";
import { Menu } from "@headlessui/react";
import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import {
  EditingContainer,
  MenuButtonContainer,
  MenuContainer,
  MenuItem,
  PhaseContainer,
  PhaseName,
} from "./styles";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { Input } from "@/shared/components/Input/Input";
import { usePhase } from "@/shared/hooks/phase";

type PhaseProps = {
  name: string;
  id: string;
  processId: string;
};

export const Phase = ({ name, id, processId }: PhaseProps) => {
  const [hovering, setHovering] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  const { updatePhase } = usePhase();

  const handlers = useGesture({
    onHover: ({ active }) => {
      setHovering(active);
    },
  });

  const changeNameHandler = (event: FocusEvent | KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    const newName = target.value;
    if (newName.length === 0) toast("A phase can't have an empty name", { type: "error" });
    else updatePhase.mutateAsync({ id, process: processId, name: newName });
    setIsEditing(false);
  };

  const keyboardHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === "Escape") changeNameHandler(event);
  };

  return (
    <>
      {isEditing && (
        <EditingContainer>
          <Input
            defaultValue={name}
            autoFocus
            maxLength={40}
            onBlur={changeNameHandler}
            onKeyDown={keyboardHandler}
            css={{
              width: "4rem",
              height: "1.6rem",
              borderRadius: "4px 0 0 4px",
              marginRight: "-2px",
            }}
          />
          <Button css={{ height: "1.8rem" }}>OK</Button>
        </EditingContainer>
      )}
      {!isEditing && (
        <>
          <PhaseContainer {...handlers()} hovering={hovering}>
            <PhaseName>{name}</PhaseName>
            <Menu as={MenuButtonContainer}>
              {({ open }) => (
                <>
                  <Menu.Button
                    as={Button}
                    color="secondary"
                    css={{
                      padding: "0.25rem",
                      visibility: hovering || open ? "visible" : "hidden",
                    }}
                    ref={setReferenceElement}
                  >
                    <Icon type="dots" />
                  </Menu.Button>
                  {ReactDOM.createPortal(
                    <Menu.Items
                      as={MenuContainer}
                      ref={setPopperElement}
                      style={styles.popper}
                      {...attributes.popper}
                    >
                      <Menu.Item>
                        <MenuItem onClick={() => setIsEditing(true)}>
                          <Icon type="edit" /> Rename
                        </MenuItem>
                      </Menu.Item>
                      <Menu.Item>
                        <MenuItem onClick={() => setShowDeleteModal(true)}>
                          <Icon type="delete" />
                          Delete
                        </MenuItem>
                      </Menu.Item>
                    </Menu.Items>,
                    document.getElementById("tooltips") as HTMLElement
                  )}
                </>
              )}
            </Menu>
          </PhaseContainer>
          <DeleteModal
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
            type="phase"
            name={name}
            id={id}
            processId={processId}
          />
        </>
      )}
    </>
  );
};
