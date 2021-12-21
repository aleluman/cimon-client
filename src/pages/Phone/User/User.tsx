import { Icon } from "@/shared/components/Icon/Icon";
import { useEditor } from "@/shared/state/store";
import {
  Location,
  UserContainer,
  UserData,
  UserName,
  UserPhoto,
  UserPhotoContainer,
  UserRoleContainer,
  UserStatus,
} from "./styles";

const status: ("online" | "offline" | "busy")[] = ["online", "offline", "busy"];

type UserProps = {
  name: string;
  role: string;
  id: number;
  context: "notifications" | "users";
  type?: string;
  services: string[];
};

export const User = ({ name, role, id, context, services, type = "human" }: UserProps) => {
  const showContactHandler = useEditor((state) => state.setShowContact);
  const setSelectedActor = useEditor((state) => state.setSelectedActor);

  const clickHandler = () => {
    showContactHandler(true);
    setSelectedActor({ id, name, role, type, services });
  };

  return (
    <UserContainer
      onClick={() => clickHandler()}
      css={{ pointerEvents: services.includes("Send to one") ? "auto" : "none" }}
    >
      <UserPhotoContainer>
        {type === "human" ? (
          <UserPhoto src={`/src/assets/photos/f${id < 10 ? "0" : ""}${id}.webp`} alt="user" />
        ) : (
          <UserPhoto as="div">
            <Icon type={`${type as "service" | "repository"}-internal`} size={22} />
          </UserPhoto>
        )}
        <UserStatus
          presence={services.includes("Other's presence")}
          status={
            services.includes("Other's availability")
              ? status[Math.floor(3 * Math.random())]
              : "noStatus"
          }
        />
      </UserPhotoContainer>
      <UserData>
        <UserName>{type === "human" ? name : type}</UserName>
        <Location>
          {context === "users" && type === "human" && services.includes("Other's location") ? (
            <>
              <Icon type="location" size={12} /> Located {(Math.random() * 10).toFixed(2)} km away
            </>
          ) : (
            <UserRoleContainer>{role}</UserRoleContainer>
          )}
        </Location>
      </UserData>
      {context === "notifications" && <Icon type="message" size={22} color="$primary" />}
      {services.includes("Send to one") && <Icon type="arrow-right" />}
    </UserContainer>
  );
};
