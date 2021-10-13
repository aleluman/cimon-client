import { styled } from "@/shared/constants/stitches";

export const SidebarContainer = styled("aside", {
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  minWidth: "20rem",
  padding: "1rem",
  height: "100%",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
  transition: "transform ease 0.5s",
  userSelect: "none",
  overflow: "visible",
  willChange: "transform",

  variants: {
    hidden: {
      true: {
        transform: "translateX(100%)",
      },
    },
  },
});

export const Title = styled("h1", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "0.2rem",
  margin: 0,
  color: "$textImportant",
  fontSize: "1.05rem",
  fontWeight: 500,
});

export const ProcessesContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  width: "100%",
});

export const ModalLabel = styled("label", {
  display: "flex",
  flexDirection: "column",
  fontSize: "0.8rem",
  gap: "0.3rem",
});

export const ModalButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
  gap: "0.4rem",
});

export const ModalTitle = styled("h1", {
  margin: 0,
  fontSize: "0.95rem",
});

export const ModalInput = styled("input", {
  appearance: "none",
  width: "20rem",
  background: "$neutralFull",
  border: "1px solid $borderDark",
  borderRadius: "8px",
  padding: "0.4rem",
  fontSize: "0.85rem",
  color: "$textNormal",

  "&:focus": {
    border: "1px solid $primary",
    boxShadow: "$borderedPrimarySmall",
    outline: "none",
  },

  "&::placeholder": {
    color: "$textDull",
  },
});

export const ModalTextarea = styled("textarea", {
  appearance: "none",
  background: "$neutralFull",
  height: "100%",
  border: "1px solid $borderDark",
  borderRadius: "8px",
  padding: "0.4rem",
  resize: "none",
  fontSize: "0.85rem",
  color: "$textNormal",

  "&:focus": {
    border: "1px solid $primary",
    boxShadow: "$borderedPrimarySmall",
    outline: "none",
  },

  "&::placeholder": {
    color: "$textDull",
  },
});
