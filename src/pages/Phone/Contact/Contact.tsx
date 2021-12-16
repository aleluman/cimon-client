import { Icon } from "@/shared/components/Icon/Icon";
import { Input } from "@/shared/components/Input/Input";
import { useEditor } from "@/shared/state/store";
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

// type ContactProps = {
//   actors: {
//     role: string;
//     actors: {
//       role: string;
//       name: string;
//       id: number;
//     }[];
//   }[];
// };

export const Contact = () => {
  const showContactHandler = useEditor((state) => state.setShowContact);
  const showCallHandler = useEditor((state) => state.setShowCall);
  const actor = useEditor((state) => state.selectedActor);

  return (
    <ContactContainer>
      <ContactHeader>
        <HeaderButton onClick={() => showContactHandler(false)} css={{ paddingRight: "0.6rem" }}>
          <Icon type="arrow-left" size={24} />
        </HeaderButton>
        <ImageContainer>
          <UserPhoto
            src={`/src/assets/photos/f${(actor?.id as number) < 10 ? "0" : ""}${actor?.id}.webp`}
            alt="user"
          />
        </ImageContainer>
        <UserContainer>
          <UserNameContainer>
            {actor?.name}
            <Icon type="clock" color="limeGreen" />
            <Icon type="lock" />
          </UserNameContainer>
          <RoleContainer>{actor?.role}</RoleContainer>
        </UserContainer>
        <HeaderButton css={{ border: "none" }}>
          <Icon type="location" size={20} />
        </HeaderButton>
      </ContactHeader>
      <CallContainer>
        <CallButton onClick={() => showCallHandler("audio")}>
          <Icon type="phone" size={20} color="white" />
          Call
        </CallButton>
        <CallButton onClick={() => showCallHandler("video")}>
          <Icon type="video" size={20} color="white" />
          Video call
        </CallButton>
      </CallContainer>
      <DateContainer>Yesterday</DateContainer>
      <MessageLog>
        <Message time="12:10" flipped>
          <Icon type="contact" />
          Contact
        </Message>
        <Message time="11:54" flipped>
          <Icon type="image" />
          Image (570kb)
        </Message>
        <Message time="11:45" flipped>
          <Icon type="video" />
          Video (0:26)
        </Message>
        <Message time="11:34" flipped>
          <Icon type="mic" />
          Audio (0:17)
        </Message>
        <Message time="11:32" flipped>
          <Icon type="kanban" />
          File (44kb)
        </Message>
        <Message time="11:28" flipped>
          I&apos;m sending mine!
        </Message>
        <Message time="11:20">
          <Icon type="contact" />
          Contact
        </Message>
        <Message time="10:54">
          <Icon type="image" />
          Image (570kb)
        </Message>
        <Message time="10:45">
          <Icon type="video" />
          Video (0:26)
        </Message>
        <Message time="10:24">
          <Icon type="mic" />
          Audio (0:17)
        </Message>
        <Message time="10:21">
          <Icon type="kanban" />
          File (44kb)
        </Message>
        <Message time="10:20">I am sending the data files</Message>
      </MessageLog>
      <BottomContainer>
        <SendContainer>
          <IconContainer>
            <Icon type="clip" size={18} />
          </IconContainer>
          <IconContainer>
            <Icon type="camera" size={18} />
          </IconContainer>
          <IconContainer>
            <Icon type="mic" size={18} />
          </IconContainer>
          <IconContainer>
            <Icon type="contact" size={18} />
          </IconContainer>
          <IconContainer>
            <Icon type="kanban" size={18} />
          </IconContainer>
        </SendContainer>
        <Input placeholder="Write message" css={{ padding: "0.7rem", width: "100%" }} />
      </BottomContainer>
    </ContactContainer>
  );
};
