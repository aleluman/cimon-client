import { Icon } from "@/shared/components/Icon/Icon";
import { useEditor } from "@/shared/state/store";
import {
  Location,
  UserContainer,
  UserData,
  UserName,
  UserPhoto,
  UserPhotoContainer,
  UserStatus,
} from "./styles";

const status: ("online" | "offline" | "busy")[] = ["online", "offline", "busy"];

type UserProps = {
  name: string;
  role: string;
  id: number;
  context: "notifications" | "users";
};

export const User = ({ name, role, id, context }: UserProps) => {
  const showContactHandler = useEditor((state) => state.setShowContact);
  const setSelectedActor = useEditor((state) => state.setSelectedActor);

  const clickHandler = () => {
    showContactHandler(true);
    setSelectedActor({ id, name, role });
  };

  return (
    <UserContainer onClick={() => clickHandler()}>
      <UserPhotoContainer>
        <UserPhoto src={`/src/assets/photos/f${id < 10 ? "0" : ""}${id}.webp`} alt="user" />
        <UserStatus presence status={status[Math.floor(3 * Math.random())]} />
      </UserPhotoContainer>
      <UserData>
        <UserName>{name}</UserName>
        <Location>
          {context === "users" ? (
            <>
              <Icon type="location" size={12} /> Located {(Math.random() * 10).toFixed(2)} km away
            </>
          ) : (
            <div>{role}</div>
          )}
        </Location>
      </UserData>
      {context === "notifications" && <Icon type="message" size={22} color="$primary" />}
      <Icon type="arrow-right" />
    </UserContainer>
  );
};
