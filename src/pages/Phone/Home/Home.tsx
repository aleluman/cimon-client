import { HomeContainer, Image, SharedWorkspace } from "./styles";

type HomeProps = {
  processType: string;
};

export const Home = ({ processType }: HomeProps) => {
  return (
    <HomeContainer>
      <SharedWorkspace>
        {(processType === "generic" || processType === "lodging") && (
          <div>Shared workspace / Actions</div>
        )}
        {processType === "todo/kanban" && (
          <Image src="/src/assets/mockups/todo.webp" alt="mockup" />
        )}
        {processType !== "generic" &&
          processType !== "lodging" &&
          processType !== "todo/kanban" && (
            <Image src={`/src/assets/mockups/${processType}.webp`} alt="mockup" />
          )}
      </SharedWorkspace>
    </HomeContainer>
  );
};
