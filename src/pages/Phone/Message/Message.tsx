import { ReactNode } from "react";
import { Icon } from "@/shared/components/Icon/Icon";
import { InnerContainer, MessageContainer, TimeContainer } from "./styles";

type MessageProps = {
  time: string;
  children: ReactNode;
  flipped?: boolean;
};

export const Message = ({ time, children, flipped }: MessageProps) => {
  return (
    <MessageContainer flipped={flipped}>
      <InnerContainer>
        {children} {!flipped && <Icon type="doublecheck" color="$primary" />}
      </InnerContainer>
      <TimeContainer>{time}</TimeContainer>
    </MessageContainer>
  );
};
