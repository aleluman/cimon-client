import { styled } from "@/shared/constants/stitches";

export const Overlay = styled("div", {
  position: "fixed",
  boxShadow: "inset 0 0 200px #202020",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
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
