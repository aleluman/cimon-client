import { styled } from "@/shared/constants/stitches";

export const RoleBarContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "7.7rem",
  maxHeight: "25rem",
  background: "$popoverBackground",
  backdropFilter: "blur(10px)",
  padding: "0.3rem",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  boxShadow: "$subtleShadow",
  color: "$textNormal",
  position: "absolute",
  top: "3.3rem",
  left: "0.4rem",
  userSelect: "none",

  "@supports not (backdrop-filter: blur(12px))": {
    background: "$popoverNSBackground",
  },
});

export const Title = styled("h1", {
  fontSize: "0.9rem",
  color: "$textImportant",
  fontWeight: 600,
  margin: "0.1rem",
  marginBottom: "0.3rem",
});

export const Subtitle = styled("h2", {
  fontSize: "0.8rem",
  fontWeight: 400,
  marginTop: "0.8rem",
  marginBottom: "0.4rem",
  marginLeft: "0.1rem",
});

export const DragIconContainer = styled("div", {
  display: "flex",
  gap: "0.3rem",
});

export const RoleSpan = styled("span", {
  touchAction: "none",
});

export const RoleDragIcon = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$neutralFull",
  border: "1px solid $popoverBorder",
  borderRadius: "4px",
  padding: "0.5rem",
  touchAction: "none",
  cursor: "grab",
  transition: "all 0.25s ease",

  "&:hover": {
    border: "1px solid $primaryAccent",
    boxShadow: "$borderedPrimarySmall",
    background: "$neutralDarker",
  },

  "&:hover path": {
    transition: "fill 0.25s ease",
    fill: "$primaryAccent",
  },
});

export const ListContainer = styled("ul", {
  margin: 0,
  padding: 0,
  paddingTop: "0.2rem",
  overflow: "auto",
});

export const ListItem = styled("li", {
  display: "flex",
  gap: "0.2rem",
  minWidth: 0,
  position: "relative",
  listStyle: "none",
  fontSize: "0.75rem",
  width: "100%",
  background: "$neutralFull",
  padding: "0.15rem",
  border: "1px solid $popoverBorder",
  marginTop: -1,
  cursor: "grab",
  touchAction: "none",
  transition: "all 0.25s ease",

  "&:hover": {
    zIndex: 2,
    background: "$neutralDarker",
    border: "1px solid $primaryAccent",
    boxShadow: "$borderedPrimarySmall",
  },

  "&:first-of-type": {
    borderRadius: "4px 4px 0 0",
  },

  "&:last-of-type": {
    borderRadius: "0 0 4px 4px",
  },

  "&:hover path": {
    transition: "fill 0.25s ease",
    fill: "$primaryAccent",
  },
});

export const ListItemText = styled("p", {
  flex: 1,
  padding: "0.1rem",
  margin: 0,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
