import { styled } from "@/shared/constants/stitches";

export const UsersTabContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxHeight: "100%",
  padding: "0.6rem",
  gap: "0.6rem",
  position: "relative",
});

export const UsersGroupsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  background: "$neutralLightest",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
  maxWidth: "100%",
});

export const SearchIconContainer = styled("div", {
  position: "absolute",
  top: "1.35rem",
  right: "1.4rem",
});

export const DisclosureContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  background: "$primaryLight",
  color: "$textNormal",
  padding: "0 0.4rem",
  fontWeight: 550,
  border: "1px solid $borderPhone",

  "& path": {
    fill: "$textNormal",
  },

  "&:first-child": {
    borderRadius: "8px 8px 0 0",
  },

  "&:last-child": {
    borderRadius: "0 0 8px 8px",
  },
});

export const DisclosureButton = styled("button", {
  background: "transparent",
  flex: 1,
  border: "none",
  outline: "none",
  height: "1.8rem",
  color: "$textImportant",
  fontSize: "0.9rem",
});
