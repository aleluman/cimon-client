import { useState } from "react";
import { Icon } from "@/shared/components/Icon/Icon";
import { useEditor } from "@/shared/state/store";
import { CallContainer } from "./styles";

type CallProps = {
  whiteboard: boolean;
};

export const Call = ({ whiteboard }: CallProps) => {
  const [showWhiteboard, setShowWhiteboard] = useState(whiteboard);
  const showCall = useEditor((state) => state.showCall);
  const setShowCall = useEditor((state) => state.setShowCall);

  return (
    <CallContainer>
      <div>{showCall === "audio" ? "Call with " : "Video call with "} Username</div>
      <div>In Progress</div>
      {showWhiteboard && <div>Whiteboard</div>}
      <div>
        <button type="button" onClick={() => setShowWhiteboard((prev) => !prev)}>
          <Icon type="whiteboard" />
        </button>
        {showCall === "audio" && (
          <button type="button" onClick={() => setShowCall("video")}>
            <Icon type="video" />
          </button>
        )}
        <button type="button">
          <Icon type="volume-minus" />
        </button>
        <button type="button">
          <Icon type="volume-plus" />
        </button>
        <button type="button" onClick={() => setShowCall("none")}>
          <Icon type="phone" />
        </button>
      </div>
    </CallContainer>
  );
};
