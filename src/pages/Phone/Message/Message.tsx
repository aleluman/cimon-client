import { ReactNode } from "react";
import { Icon } from "@/shared/components/Icon/Icon";
import { InnerContainer, MessageContainer, TimeContainer } from "./styles";

type MessageProps = {
  time: string;
  children: ReactNode;
  flipped?: boolean;
  checked?: boolean;
};

export const Message = ({ time, children, flipped, checked }: MessageProps) => {
  return (
    <MessageContainer flipped={flipped}>
      <InnerContainer>
        {children} {!flipped && checked && <Icon type="doublecheck" color="$primary" />}
      </InnerContainer>
      <TimeContainer>{time}</TimeContainer>
    </MessageContainer>
  );
};
