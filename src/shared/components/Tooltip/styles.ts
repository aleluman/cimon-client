import { styled } from "@/shared/configs/stitches";

export const TooltipContainer = styled("div", {
  backgroundColor: "$primaryAccent",
  borderRadius: "10px",
  border: "1px solid $primaryAccent",
  boxShadow: "$hoverShadowLarge",
  fontSize: "0.75rem",
  color: "white",
  display: "flex",
  flexDirection: "column",
  padding: "0.4rem",
  transition: "opacity 0.3s",
  zIndex: 9999,

  "&[data-popper-interactive='false']": {
    pointerEvents: "none",
  },

  "&[data-popper-placement*='bottom'] div": {
    left: 0,
    top: 0,
    marginTop: "-0.4rem",
  },

  "&[data-popper-placement*='bottom'] div::before": {
    borderColor: "transparent transparent $primaryAccent transparent",
    borderWidth: "0 0.5rem 0.4rem 0.5rem",
    position: "absolute",
    top: "-1px",
  },

  "&[data-popper-placement*='bottom'] div::after": {
    borderColor: "transparent transparent $primaryAccent transparent",
    borderWidth: "0 0.5rem 0.4rem 0.5rem",
  },

  "&[data-popper-placement*='top'] div": {
    bottom: 0,
    left: 0,
    marginBottom: "-1.08rem",
  },

  "&[data-popper-placement*='top'] div::before": {
    borderColor: "transparent transparent transparent transparent",
    borderWidth: "0.4rem 0.5rem 0 0.5rem",
    position: "absolute",
    top: "1px",
  },

  "&[data-popper-placement*='top'] div::after": {
    borderColor: "$primaryAccent transparent transparent transparent",
    borderWidth: "0.4rem 0.5rem 0 0.5rem",
  },

  "&[data-popper-placement*='right'] div": {
    left: 0,
    marginLeft: "-0.7rem",
  },

  "&[data-popper-placement*='right'] div::before": {
    borderColor: "transparent $primaryAccent transparent transparent",
    borderWidth: "0.5rem 0.4rem 0.5rem 0",
  },

  "&[data-popper-placement*='right'] div::after": {
    borderColor: "transparent transparent transparent transparent",
    borderWidth: "0.5rem 0.4rem 0.5rem 0",
    left: "6px",
    top: "0px",
  },

  "&[data-popper-placement*='left'] div": {
    marginRight: "-0.7rem",
    right: 0,
  },

  "&[data-popper-placement*='left'] div::before": {
    borderColor: "transparent transparent transparent $primaryAccent",
    borderWidth: "0.5rem 0 0.5rem 0.4em",
  },

  "&[data-popper-placement*='left'] div::after": {
    borderColor: "transparent transparent transparent $primaryAccent",
    borderWidth: "0.5rem 0 0.5rem 0.4em",
    left: "3px",
    top: 0,
  },
});

export const Arrow = styled("div", {
  height: "1rem",
  position: "absolute",
  width: "1rem",
  pointerEvents: "none",

  "&::before": {
    borderStyle: "solid",
    content: "",
    display: "block",
    height: 0,
    margin: "auto",
    width: 0,
  },

  "&::after": {
    borderStyle: "solid",
    content: "",
    display: "block",
    height: 0,
    margin: "auto",
    position: "absolute",
    width: 0,
  },
});
