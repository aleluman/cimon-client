import { styled } from "@/shared/constants/stitches";

export const DetailsContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  padding: "1rem",
  justifyContent: "space-between",
  background: "$neutralLight",
  maxWidth: "80rem",
  minWidth: "50rem",
  width: "100%",
  height: "13rem",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
});

export const SectionContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
  flex: 1,
});

export const Label = styled("label", {
  display: "flex",
  gap: "0.4rem",
  fontWeight: 500,
  fontSize: "0.8rem",
  flexDirection: "column",
  color: "$textNormal",
});

export const Textarea = styled("textarea", {
  flex: 1,
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

export const TagContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const RolesContainer = styled("div", {
  color: "$textNormal",
  fontSize: "0.85rem",
  lineHeight: "140%",
});
