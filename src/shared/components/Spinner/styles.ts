import { keyframes, styled } from "@/shared/constants/stitches";

const rotate = keyframes({
  from: { transform: "rotate(0turn)" },
  to: { transform: "rotate(1turn)" },
});

export const SpinnerBox = styled("div", {
  borderRadius: "50%",
  animation: `${rotate} 1s ease infinite`,
});

export const SpinnerContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
});
