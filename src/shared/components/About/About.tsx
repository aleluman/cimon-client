import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Modal } from "../Modal/Modal";
import { InnerText } from "./styles";

type AboutProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const About = ({ isOpen, setIsOpen }: AboutProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <InnerText css={{ fontWeight: 650, fontSize: "1.2rem" }}>
        <Icon type="logo" size={60} />
        CIMoN Manager
      </InnerText>
      <InnerText>Based on the work of Maximiliano Canché. </InnerText>
      <InnerText>Designed and programmed by Alejandro Lumán.</InnerText>
      <InnerText css={{ color: "$textDull", fontSize: "0.85rem" }}>2021</InnerText>
      <Button color="secondary" onClick={() => setIsOpen(false)}>
        Close
      </Button>
    </Modal>
  );
};
