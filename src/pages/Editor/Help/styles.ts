import { styled } from "@/shared/constants/stitches";

export const InnerHelpContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  flexDirection: "column",
  width: "40rem",
  overflow: "auto",
});

export const TitleInfo = styled("div", {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  fontSize: "0.85rem",
});

export const HelpCard = styled("div", {
  background: "$popoverBackground",
  borderRadius: "8px",
  border: "1px solid $popoverBorder",
  padding: "1rem",
  marginRight: "0.4rem",
});

export const HelpSubtitle = styled("h3", {
  margin: 0,
  fontSize: "1.2rem",
});

export const Description = styled("p", {
  marginTop: "0.4rem",
  fontSize: "0.9rem",
  lineHeight: "1.3rem",
});

export const Explanation = styled("span", {
  fontSize: "0.85rem",
  display: "flex",
  alignItems: "flex-start",

  "&:not(:last-child)": {
    paddingBottom: "1rem",
  },
});

export const IconContainer = styled("span", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "3rem",
  height: "3rem",
  background: "$neutralFull",
  border: "1px solid $popoverBorder",
  padding: "0.6rem",
  marginRight: "0.8rem",
  borderRadius: "8px",
  color: "$primaryAccent",
  fontWeight: 750,
  fontSize: "1.2rem",
});

export const ExplanationTitle = styled("p", {
  fontWeight: 700,
  color: "$textImportant",
  display: "inline",
  wordWrap: "break-word",
});

export const ExplanationBody = styled("p", {
  display: "inline",
  wordWrap: "break-word",
  lineHeight: "1.3rem",
});
