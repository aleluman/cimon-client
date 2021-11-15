import { Icon } from "@/shared/components/Icon/Icon";
import { SearchButton, SearchContainer, SearchInput } from "./styles";

type SearchBarProps = {
  handler: (value: string) => void;
};

export const Searchbar = ({ handler }: SearchBarProps) => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" onChange={(event) => handler(event.target.value)} />
      <SearchButton>
        <Icon type="search" />
      </SearchButton>
    </SearchContainer>
  );
};
