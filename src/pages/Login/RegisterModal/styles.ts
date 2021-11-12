import { styled } from "@/shared/constants/stitches";

export const FormContainer = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const RegisterTitle = styled("h1", {
  margin: 0,
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "0.4rem",
  width: "20rem",
});

export const RegisterContainer = styled("div", {
  display: "flex",
  color: "$textDull",
  fontSize: "0.8rem",
  gap: "0.6rem",
  justifyContent: "flex-end",
  alignItems: "center",
});
