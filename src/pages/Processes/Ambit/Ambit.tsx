import ReactDOM from "react-dom";
import { Draggable } from "react-beautiful-dnd";
import { toast } from "react-toastify";
import { useState, KeyboardEvent, FocusEvent, useRef, useEffect } from "react";
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
import { Tooltip } from "@/shared/components/Tooltip/Tooltip";

type AmbitProps = {
  id: string;
  name: string;
  processId: string;
  index: number;
};

export const Ambit = ({ id, name, processId, index }: AmbitProps) => {
  const [hovering, setHovering] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isOverflowed, setIsOverflow] = useState(false);

  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, { strategy: "fixed" });

  const textRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (textRef.current) setIsOverflow(textRef.current.scrollWidth > textRef.current.clientWidth);
  }, [name]);

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
        <Draggable draggableId={id} index={index}>
          {(provided) => (
            <EditingContainer
              {...handlers()}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <Input
                defaultValue={name}
                autoFocus
                maxLength={60}
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
        </Draggable>
      )}
      {!isEditing && (
        <Draggable draggableId={id} index={index}>
          {(provided) => (
            <AmbitContainer
              {...handlers()}
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              {isOverflowed ? (
                <Tooltip text={name} tooltipPlacement="top">
                  <AmbitText as={Link} to={`/processes/${processId}/${id}`}>
                    {name}
                  </AmbitText>
                </Tooltip>
              ) : (
                <AmbitText as={Link} to={`/processes/${processId}/${id}`} ref={textRef}>
                  {name}
                </AmbitText>
              )}
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
                        marginTop: "0.2rem",
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
        </Draggable>
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
