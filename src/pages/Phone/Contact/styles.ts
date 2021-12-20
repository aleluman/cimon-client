import { styled } from "@/shared/constants/stitches";

export const ContactContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  display: "flex",
  flexDirection: "column",
  background: "$neutralDark",
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "2px solid $borderPhone",
  overflow: "hidden",
});

export const ContactHeader = styled("div", {
  display: "flex",
  background: "$neutralLightest",
  padding: "0.4rem",
  gap: "0.3rem",
  maxWidth: "100%",
});

export const ImageContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid $primary",
  width: "2.4rem",
  height: "2.4rem",
  borderRadius: "100px",
  marginLeft: "0.4rem",
});

export const UserContainer = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
});

export const HeaderButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  appearance: "none",
  border: "none",
  outline: "none",
  background: "transparent",
  borderRight: "1px solid $neutralDarker",
  width: "2.4rem",
  height: "2.4rem",
  cursor: "pointer",
});

export const UserNameContainer = styled("div", {
  display: "flex",
  gap: "0.3rem",
  color: "$textImportant",
  fontSize: "0.9rem",
  fontWeight: 650,
  alignItems: "center",
  overflow: "hidden",
});

export const RoleContainer = styled("div", {
  fontSize: "0.8rem",
  fontStyle: "italic",
  color: "$textDull",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const MessageLog = styled("div", {
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "flex-end",
  padding: "0.6rem",
  flex: 1,
  overflow: "auto",
  gap: "0.6rem",
});

export const DateContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  borderTop: "1px solid $popoverBorder",
  borderBottom: "1px solid $popoverBorder",
  fontSize: "0.85rem",
  color: "$textDull",
  padding: "0.4rem",
  background: "$neutralLight",
});

export const SendContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
  borderRadius: "8px 8px 0 0",
  marginRight: "0.6rem",
  marginBottom: "-2px",
});

export const BottomContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "0.3rem",
});

export const IconContainer = styled("div", {
  display: "flex",
  width: "2.4rem",
  justifyContent: "center",
  padding: "0.4rem",
  cursor: "pointer",
});

export const CallContainer = styled("div", {
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const CallButton = styled("div", {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
  appearance: "none",
  outline: "none",
  fontSize: "0.9rem",
  color: "$textImportant",
  background: "$primaryLight",
  padding: "0.7rem",
  borderRadius: "8px",
  width: "8rem",
  cursor: "pointer",
  boxShadow: "$subtleShadow",
  border: "1px solid $borderPhone",

  "& path": {
    fill: "$textNormal",
  },
});

export const UserPhoto = styled("img", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.2rem",
  height: "2.2rem",
  borderRadius: "100px",
  overflow: "hidden",
});
