import { styled } from "@/shared/constants/stitches";

export const UserContainer = styled("div", {
  display: "flex",
  padding: "0.4rem",
  fontSize: "0.85rem",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.6rem",
  cursor: "pointer",
});

export const UserPhotoContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid $primary",
  borderRadius: "100px",
  width: "2.4rem",
  height: "2.4rem",
  position: "relative",
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

export const UserStatus = styled("div", {
  position: "absolute",
  top: "0rem",
  right: "0rem",
  borderRadius: "100px",
  width: "0.6rem",
  height: "0.6rem",
  background: "transparent",

  variants: {
    presence: {
      true: {
        border: "1px solid $textNormal",
        background: "$neutralLightest",
      },
    },
    status: {
      online: { background: "lime" },
      offline: { background: "red" },
      busy: { background: "gold" },
      noStatus: {},
    },
  },
});

export const UserData = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  maxWidth: "100%",
  overflow: "hidden",
});

export const UserName = styled("div", {
  fontWeight: 600,
  color: "$textImportant",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const Location = styled("div", {
  display: "flex",
  alignItems: "center",
  fontStyle: "italic",
  color: "$textDull",
  fontSize: "0.8rem",
  gap: "0.3rem",
});

export const UserRoleContainer = styled("div", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
