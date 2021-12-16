import { useState } from "react";
import { Icon } from "@/shared/components/Icon/Icon";
import { useEditor } from "@/shared/state/store";
import {
  ButtonsContainer,
  CallButton,
  CallContainer,
  HeaderContainer,
  MeImage,
  ProgressContainer,
  VideoContainer,
  WhiteBoard,
  WhiteBoardIcons,
} from "./styles";

type CallProps = {
  whiteboard: boolean;
};

export const Call = ({ whiteboard }: CallProps) => {
  const [showWhiteboard, setShowWhiteboard] = useState(whiteboard);
  const showCall = useEditor((state) => state.showCall);
  const setShowCall = useEditor((state) => state.setShowCall);
  const actor = useEditor((state) => state.selectedActor);

  return (
    <CallContainer>
      <HeaderContainer>
        {showCall === "audio" ? "Call with " : "Video call with "} {actor?.name}
      </HeaderContainer>
      <ProgressContainer>
        {showCall === "audio" ? (
          <Icon type="mic" size={62} />
        ) : (
          <VideoContainer>
            <img
              src={`/src/assets/photos/f${(actor?.id as number) < 10 ? "0" : ""}${
                actor?.id as number
              }.webp`}
              alt="videocall"
            />
            <MeImage src="/src/assets/photos/me.webp" alt="videocall" />
          </VideoContainer>
        )}
        <div>In Progress</div>
      </ProgressContainer>
      {showWhiteboard && (
        <WhiteBoard>
          <WhiteBoardIcons>
            <Icon type="pencil" />
            <Icon type="eraser" />
            <Icon type="minus" />
            <Icon type="fit" />
            <Icon type="plus" />
          </WhiteBoardIcons>
        </WhiteBoard>
      )}
      <ButtonsContainer>
        <CallButton
          type="button"
          onClick={() => setShowWhiteboard((prev) => !prev)}
          active={showWhiteboard}
        >
          <Icon type="whiteboard" />
        </CallButton>
        {showCall === "audio" && (
          <CallButton type="button" onClick={() => setShowCall("video")}>
            <Icon type="video" />
          </CallButton>
        )}
        <CallButton type="button">
          <Icon type="volume-minus" />
        </CallButton>
        <CallButton type="button">
          <Icon type="volume-plus" />
        </CallButton>
        <CallButton type="button" onClick={() => setShowCall("none")} red>
          <Icon type="phone" color="$red" />
        </CallButton>
      </ButtonsContainer>
    </CallContainer>
  );
};
