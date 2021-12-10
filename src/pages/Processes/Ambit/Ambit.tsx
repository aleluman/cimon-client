import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import { useState, KeyboardEvent, FocusEvent } from "react";
import { usePopper } from "react-popper";
import { useGesture } from "@use-gesture/react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/components/Button/Button";
import { Icon } from "@/shared/components/Icon/Icon";
import {
  AmbitContainer,
  AmbitText,
  EditingContainer,
  MenuButtonContainer,
  MenuContainer,
  MenuItem,
} from "./styles";
import { DeleteModal } from "../DeleteModal/DeleteModal";
import { useAmbit } from "@/shared/hooks/ambit";
import { Input } from "@/shared/components/Input/Input";

type AmbitProps = {
  id: string;
  name: string;
  processId: string;
};

export const Ambit = ({ id, name, processId }: AmbitProps) => {
  const [hovering, setHovering] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { strategy: "fixed" });

  const handlers = useGesture({
    onHover: async ({ active }) => {
      setHovering(active);
    },
  });

  const { updateAmbitName } = useAmbit();

  const changeNameHandler = (event: FocusEvent | KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    const newName = target.value;
    if (newName.length === 0) toast("An ambit can't have an empty name", { type: "error" });
    else updateAmbitName.mutateAsync({ id, process: processId, name: newName });
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
              width: "100%",
              height: "2rem",
              borderRadius: "4px 0 0 4px",
              marginLeft: "2px",
            }}
          />
          <Button css={{ height: "2.2rem", marginLeft: "-2px" }}>OK</Button>
        </EditingContainer>
      )}
      {!isEditing && (
        <AmbitContainer {...handlers()}>
          <AmbitText as={Link} to={`/processes/${processId}/${id}`}>
            {name}
          </AmbitText>
          <Menu as={MenuButtonContainer}>
            {({ open }) => (
              <>
                <Menu.Button
                  as={Button}
                  color="secondary"
                  css={{
                    padding: "0.25rem",
                    visibility: hovering || open ? "visible" : "hidden",
                    marginRight: "0.2rem",
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
                      <MenuItem as={Link} to={`/processes/${processId}/${id}`}>
                        <Icon type="generic" /> Edit graph
                      </MenuItem>
                    </Menu.Item>
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
        </AmbitContainer>
      )}
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        type="ambit"
        name={name}
        id={id}
        processId={processId}
      />
    </>
  );
};
