import { styled, css } from "@/shared/constants/stitches";

export const Overlay = styled("div", {
  position: "fixed",
  boxShadow: "inset 0 0 200px #202020",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,

  variants: {
    darker: {
      true: {
        boxShadow: "inset 0 0 300px 40px #000000",
      },
    },
  },
});

export const DialogContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 9999,
});

export const ModalContainer = styled("div", {
  display: "flex",
  gap: "0.8rem",
  flexDirection: "column",
  background: "$dialogBackground",
  backdropFilter: "blur(12px)",
  zIndex: 99999,
  maxHeight: "90%",
  borderRadius: "8px",
  boxShadow: "$hoverShadowLarge",
  padding: "1rem",
  color: "$textNormal",
  border: "1px solid $popoverBorder",
  willChange: "transform, opacity",

  "@supports not (backdrop-filter: blur(12px))": {
    background: "$popoverNSBackground",
  },
});

export const ModalTitle = styled("h1", {
  margin: 0,
  fontSize: "0.95rem",
  color: "$textImportant",
});

export const ModalText = styled("p", {
  fontSize: "0.85rem",
  margin: 0,
});

export const ModalFooterContainer = styled("div", {
  display: "flex",
  color: "$textDull",
  fontSize: "0.8rem",
  gap: "0.6rem",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const overlayTransition = css({
  transition: "opacity 0.3s ease",
});

export const overlayStart = css({
  opacity: 0,
});

export const overlayEnd = css({
  opacity: 1,
});

export const transitionDialog = css({
  transition: "transform 0.2s ease, opacity 0.2s ease",
});

export const dialogStart = css({
  transform: "scale(0.9) translateY(50px) translateZ(0)",
  opacity: 0,
});

export const dialogEnd = css({
  transform: "scale(1) translateZ(0)",
  opacity: 1,
});
