import { ReactNode } from "react";
import { Icon } from "@/shared/components/Icon/Icon";
import { InnerContainer, MessageContainer, TimeContainer } from "./styles";

type MessageProps = {
  time: string;
  children: ReactNode;
};

export const Message = ({ time, children }: MessageProps) => {
  return (
    <MessageContainer>
      <InnerContainer>
        {children} <Icon type="doublecheck" color="$primary" />
      </InnerContainer>
      <TimeContainer>{time}</TimeContainer>
    </MessageContainer>
  );
};
