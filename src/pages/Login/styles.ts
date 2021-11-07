import { styled } from "@/shared/constants/stitches";

export const LoginContainer = styled("main", {
  display: "flex",
  background: "$neutralDarker",
  height: "100%",
});

export const LoginFormContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "10rem clamp(8rem, 8vw, 10rem)",
  gap: "1rem",
  width: "40%",
  minWidth: "30rem",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
});

export const Divider = styled("hr", {
  width: "100%",
  border: "none",
  borderBottom: "1px solid $borderLight",
});

export const LoginTitle = styled("h1", {
  margin: 0,
  color: "$textNormal",
  fontSize: "1.6rem",
  marginBottom: "0.4rem",
});

export const RegisterContainer = styled("div", {
  display: "flex",
  color: "$textDull",
  fontSize: "0.8rem",
  gap: "0.6rem",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const RegisterTitle = styled("h1", {
  margin: 0,
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "0.4rem",
  width: "20rem",
});

export const InfoText = styled("p", {
  margin: 0,
  padding: 0,
});

export const LogoContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  minWidth: "20rem",
  gap: "1rem",
  color: "$textDull",
  fontWeight: 550,
  fontSize: "1.4rem",
  marginBottom: "6rem",
});
