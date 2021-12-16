import { User } from "../User/User";
import { InnerContainer, NotificationsTabContainer } from "./styles";

type NotificationsProps = {
  roles: {
    role: string;
    actors: {
      role: string;
      name: string;
      id: number;
    }[];
  }[];
};

export const Notifications = ({ roles }: NotificationsProps) => {
  return (
    <NotificationsTabContainer>
      <InnerContainer>
        {roles.map((role) => (
          <User
            key={role.actors[0].id}
            id={role.actors[0].id}
            name={role.actors[0].name}
            role={role.actors[0].role}
            context="notifications"
          />
        ))}
      </InnerContainer>
    </NotificationsTabContainer>
  );
};
