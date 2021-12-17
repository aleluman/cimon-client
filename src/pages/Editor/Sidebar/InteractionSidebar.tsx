import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useParams } from "react-router-dom";
import { getInteraction, useInteraction } from "@/shared/hooks/interaction";
import { Bold, CheckboxList, Help, SubTitle, TabButton, TabContainer, Title } from "./styles";
import { getRole } from "@/shared/hooks/role";
import { awareness, communication, transmission } from "@/shared/constants/services";
import { LineCheck } from "@/shared/components/LineCheck/LineCheck";
import { Services } from "@/shared/types/editor";

type InteractionSidebarProps = {
  interactionId: string;
};

export const InteractionSidebar = ({ interactionId }: InteractionSidebarProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const { ambitId } = useParams();
  const interaction = getInteraction(interactionId, ambitId as string);
  const role1 = getRole(interaction.source, ambitId as string);
  const role2 = getRole(interaction.target, ambitId as string);

  const { updateInteraction } = useInteraction(ambitId as string);

  const tabChangeHandler = (index: number) => {
    setActiveTab(index);
  };

  const checkService = (service: keyof Services, initiator: "source" | "target") => {
    return interaction[`${initiator}Services`].includes(service);
  };

  const updateHandler = (service: keyof Services, initiator: "source" | "target") => {
    if (initiator === "source") {
      if (checkService(service, initiator)) {
        updateInteraction.mutateAsync({
          ...interaction,
          sourceServices: interaction.sourceServices.filter((item) => item !== service),
        });
      } else {
        updateInteraction.mutateAsync({
          ...interaction,
          sourceServices: interaction.sourceServices.concat(service),
        });
      }
    } else if (checkService(service, initiator)) {
      updateInteraction.mutateAsync({
        ...interaction,
        targetServices: interaction.targetServices.filter((item) => item !== service),
      });
    } else {
      updateInteraction.mutateAsync({
        ...interaction,
        targetServices: interaction.targetServices.concat(service),
      });
    }
  };

  return (
    <>
      <Title>Interactions</Title>

      {interaction.inherit && (
        <Help>
          This is a group. <Bold>{role1.name}</Bold> inherits all the relationships from{" "}
          <Bold>{role2.name}</Bold>
        </Help>
      )}
      {!interaction.inherit && (
        <>
          <Help>
            Between <Bold>{role1.name}</Bold> and <Bold>{role2.name}</Bold>
          </Help>
          <SubTitle>Initiator</SubTitle>
          <Tab.Group onChange={tabChangeHandler}>
            <Tab.List as={TabContainer}>
              <Tab as={TabButton} active={activeTab === 0}>
                {role1.name}
              </Tab>
              <Tab as={TabButton} active={activeTab === 1}>
                {role2.name}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <SubTitle>Communication services</SubTitle>
                <CheckboxList>
                  {communication.map((item) => (
                    <LineCheck
                      key={item}
                      checked={checkService(item as keyof Services, "source")}
                      label={item}
                      handler={() => updateHandler(item as keyof Services, "source")}
                    />
                  ))}
                </CheckboxList>
                <SubTitle>Transmission services</SubTitle>
                <CheckboxList>
                  {transmission.map((item) => (
                    <LineCheck
                      key={item}
                      checked={checkService(item as keyof Services, "source")}
                      label={item}
                      handler={() => updateHandler(item as keyof Services, "source")}
                    />
                  ))}
                </CheckboxList>
                <SubTitle>Awareness services</SubTitle>
                <CheckboxList>
                  {awareness.map((item) => (
                    <LineCheck
                      key={item}
                      checked={checkService(item as keyof Services, "source")}
                      label={item}
                      handler={() => updateHandler(item as keyof Services, "source")}
                    />
                  ))}
                </CheckboxList>
              </Tab.Panel>
              <Tab.Panel>
                <SubTitle>Communication services</SubTitle>
                <CheckboxList>
                  {communication.map((item) => (
                    <LineCheck
                      key={item}
                      checked={checkService(item as keyof Services, "target")}
                      label={item}
                      handler={() => updateHandler(item as keyof Services, "target")}
                    />
                  ))}
                </CheckboxList>
                <SubTitle>Transmission services</SubTitle>
                <CheckboxList>
                  {transmission.map((item) => (
                    <LineCheck
                      key={item}
                      checked={checkService(item as keyof Services, "target")}
                      label={item}
                      handler={() => updateHandler(item as keyof Services, "target")}
                    />
                  ))}
                </CheckboxList>
                <SubTitle>Awareness services</SubTitle>
                <CheckboxList>
                  {awareness.map((item) => (
                    <LineCheck
                      key={item}
                      checked={checkService(item as keyof Services, "target")}
                      label={item}
                      handler={() => updateHandler(item as keyof Services, "target")}
                    />
                  ))}
                </CheckboxList>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </>
      )}
    </>
  );
};
