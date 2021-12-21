import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@/shared/components/Icon/Icon";
import { Input } from "@/shared/components/Input/Input";
import { queryClient, useEditor } from "@/shared/state/store";
import { Message } from "../Message/Message";
import {
  HeaderButton,
  BottomContainer,
  ContactContainer,
  ContactHeader,
  IconContainer,
  ImageContainer,
  MessageLog,
  RoleContainer,
  SendContainer,
  UserContainer,
  UserNameContainer,
  CallContainer,
  CallButton,
  DateContainer,
  UserPhoto,
} from "./styles";
import { AmbitType } from "@/shared/types/process";
import { InteractionType } from "@/shared/types/editor";

export const Contact = () => {
  const showContactHandler = useEditor((state) => state.setShowContact);
  const showCallHandler = useEditor((state) => state.setShowCall);
  const actor = useEditor((state) => state.selectedActor);
  const { ambitId } = useParams();

  const otherRoleServices = useMemo(() => {
    const { activeItem } = useEditor.getState();
    const ambit = queryClient.getQueryData(["ambit", ambitId]) as AmbitType;
    const { interactions, roles } = ambit.graph;
    const otherRoleId = roles.find((role) => role.name === (actor?.role as string))?.id as string;
    const currentInteraction = interactions.find((inter) => {
      return (
        (inter.source === activeItem.id && inter.target === otherRoleId) ||
        (inter.target === activeItem.id && inter.source === otherRoleId)
      );
    }) as InteractionType;
    if (currentInteraction.source === activeItem.id)
      return currentInteraction.targetServices as string[];
    return currentInteraction.sourceServices as string[];
  }, [ambitId, actor]);

  return (
    <ContactContainer>
      <ContactHeader>
        <HeaderButton onClick={() => showContactHandler(false)} css={{ paddingRight: "0.6rem" }}>
          <Icon type="arrow-left" size={24} />
        </HeaderButton>
        <ImageContainer>
          {actor?.type === "human" ? (
            <UserPhoto
              src={`/photos/f${(actor?.id as number) < 10 ? "0" : ""}${actor?.id}.webp`}
              alt="user"
            />
          ) : (
            <UserPhoto as="div">
              <Icon type={`${actor?.type as "service" | "repository"}-internal`} size={22} />
            </UserPhoto>
          )}
        </ImageContainer>
        <UserContainer>
          <UserNameContainer>
            {actor?.type === "human" ? actor.name : actor?.type}
            {actor?.services.includes("Priority") && <Icon type="clock" color="limeGreen" />}
            {actor?.services.includes("Encryption") && <Icon type="lock" />}
          </UserNameContainer>
          <RoleContainer>{actor?.role}</RoleContainer>
        </UserContainer>
        {actor?.services.includes("Other's location") && (
          <HeaderButton css={{ border: "none" }}>
            <Icon type="location" size={20} />
          </HeaderButton>
        )}
      </ContactHeader>
      <CallContainer>
        {actor?.services.includes("Start audioconference") && (
          <CallButton onClick={() => showCallHandler("audio")}>
            <Icon type="phone" size={20} color="white" />
            Call
          </CallButton>
        )}
        {actor?.services.includes("Start videoconference") && (
          <CallButton onClick={() => showCallHandler("video")}>
            <Icon type="video" size={20} color="white" />
            Video call
          </CallButton>
        )}
      </CallContainer>
      {actor?.services.includes("Communication log") && <DateContainer>Yesterday</DateContainer>}
      <MessageLog>
        {actor?.services.includes("Communication log") && (
          <>
            {((actor?.services.includes("Recipients can reply to sender") &&
              actor.name !== "Group") ||
              (actor?.services.includes("Recipients can reply to all") &&
                actor.name === "Group")) && (
              <>
                {otherRoleServices.includes("Send structured data") && (
                  <Message time="12:10" flipped>
                    <Icon type="contact" />
                    Contact
                  </Message>
                )}
                {otherRoleServices.includes("Send image") && (
                  <Message time="11:54" flipped>
                    <Icon type="image" />
                    Image (570kb)
                  </Message>
                )}
                {otherRoleServices.includes("Send video") && (
                  <Message time="11:45" flipped>
                    <Icon type="video" />
                    Video (0:26)
                  </Message>
                )}
                {otherRoleServices.includes("Send audio") && (
                  <Message time="11:34" flipped>
                    <Icon type="mic" />
                    Audio (0:17)
                  </Message>
                )}
                {otherRoleServices.includes("Send file") && (
                  <Message time="11:32" flipped>
                    <Icon type="kanban" />
                    File (44kb)
                  </Message>
                )}
                {otherRoleServices.includes("Send text message") && (
                  <Message time="11:28" flipped>
                    I&apos;m sending mine!
                  </Message>
                )}
              </>
            )}
            {actor?.services.includes("Send structured data") && (
              <Message time="11:20" checked={actor?.services.includes("Outgoing message status")}>
                <Icon type="contact" />
                Contact
              </Message>
            )}
            {actor?.services.includes("Send image") && (
              <Message time="10:54" checked={actor?.services.includes("Outgoing message status")}>
                <Icon type="image" />
                Image (570kb)
              </Message>
            )}
            {actor?.services.includes("Send video") && (
              <Message time="10:45" checked={actor?.services.includes("Outgoing message status")}>
                <Icon type="video" />
                Video (0:26)
              </Message>
            )}
            {actor?.services.includes("Send audio") && (
              <Message time="10:24" checked={actor?.services.includes("Outgoing message status")}>
                <Icon type="mic" />
                Audio (0:17)
              </Message>
            )}
            {actor?.services.includes("Send file") && (
              <Message time="10:21" checked={actor?.services.includes("Outgoing message status")}>
                <Icon type="kanban" />
                File (44kb)
              </Message>
            )}
            {actor?.services.includes("Send text message") && (
              <Message time="10:20" checked={actor?.services.includes("Outgoing message status")}>
                I am sending the data files
              </Message>
            )}
          </>
        )}
      </MessageLog>

      <BottomContainer>
        <SendContainer>
          {actor?.services.includes("Send audio") && (
            <IconContainer>
              <Icon type="mic" size={18} />
            </IconContainer>
          )}
          {actor?.services.includes("Send video") && (
            <IconContainer>
              <Icon type="video" size={18} />
            </IconContainer>
          )}
          {actor?.services.includes("Send image") && (
            <IconContainer>
              <Icon type="camera" size={18} />
            </IconContainer>
          )}
          {actor?.services.includes("Send structured data") && (
            <IconContainer>
              <Icon type="contact" size={18} />
            </IconContainer>
          )}
          {actor?.services.includes("Send file") && (
            <IconContainer>
              <Icon type="kanban" size={18} />
            </IconContainer>
          )}
        </SendContainer>
        {actor?.services.includes("Send text message") && (
          <Input placeholder="Write message" css={{ padding: "0.7rem", width: "100%" }} />
        )}
      </BottomContainer>
    </ContactContainer>
  );
};
