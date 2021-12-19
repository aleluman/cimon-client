import { useState } from "react";
import { useParams } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { css } from "@stitches/react";
import { Icon } from "@/shared/components/Icon/Icon";
import { IconOnlyButton } from "@/shared/components/IconOnlyButton/IconOnlyButton";
import { Container, Divider, ExportButton, ExportItem, ExportMenu } from "./styles";
import { Help } from "../Help/Help";
import { queryClient } from "@/shared/state/store";
import { AmbitType } from "@/shared/types/process";

export const ActionsToolbar = () => {
  const { ambitId } = useParams();
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const downloadJSON = () => {
    const ambit = queryClient.getQueryData<AmbitType>(["ambit", ambitId as string]);
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      `data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(ambit?.graph))}`
    );
    element.setAttribute("download", "graph.json");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  return (
    <>
      <Container>
        <IconOnlyButton
          icon="undo"
          text="Undo"
          handler={() => {}}
          disabled={false}
          color="$iconGray"
        />
        <IconOnlyButton
          icon="redo"
          text="Redo"
          handler={() => {}}
          disabled={false}
          color="$iconGray"
        />
        <Divider />
        <Menu as="div">
          <Menu.Button className={css(ExportButton)}>
            Export <Icon type="arrow-down" />
          </Menu.Button>
          <Menu.Items className={css(ExportMenu)}>
            <Menu.Item as="button" className={css(ExportItem)} onClick={() => downloadJSON()}>
              <Icon type="download" /> As JSON
            </Menu.Item>
            <Menu.Item as="button" className={css(ExportItem)}>
              <Icon type="image" /> As image
            </Menu.Item>
            <Menu.Item as="button" className={css(ExportItem)}>
              <Icon type="pdf" /> As PDF
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <IconOnlyButton icon="upload" text="Upload JSON" handler={() => {}} color="$iconGray" />
        <Divider />
        <IconOnlyButton
          icon="help"
          text="Help"
          handler={() => setIsHelpOpen(true)}
          color="$iconGray"
        />
      </Container>
      <Help isOpen={isHelpOpen} setIsOpen={setIsHelpOpen} />
    </>
  );
};
