import { Icon } from "@/shared/components/Icon/Icon";
import { SearchButton, SearchContainer, SearchInput } from "./styles";

export const Searchbar = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" />
      <SearchButton>
        <Icon type="search" />
      </SearchButton>
    </SearchContainer>
  );
};
