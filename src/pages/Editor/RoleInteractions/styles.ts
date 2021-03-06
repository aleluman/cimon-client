import { styled } from "@/shared/constants/stitches";

export const InteractionsContainer = styled("div", {
  display: "flex",
  position: "absolute",
  bottom: 0,
  width: "calc(100% - 20.8rem)",
  height: "18.8rem",
  margin: "0.4rem",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
  padding: "0.4rem",
  borderRadius: "8px",
  transition: "all 0.5s ease",

  variants: {
    hidden: {
      true: {
        transform: "translateY(calc(100% + 0.4rem))",
      },
    },

    mockup: {
      true: {
        width: "calc(100% - 22.8rem)",
      },
    },
    extended: {
      true: {
        width: "calc(100% - 0.8rem)",
      },
    },
  },
  compoundVariants: [
    {
      mockup: true,
      extended: true,
      css: {
        width: "calc(100% - 0.8rem)",
      },
    },
  ],
});

export const HideButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  height: "0.8rem",
  width: "4rem",
  padding: 0,
  borderRadius: "4px 4px 0 0",
  boxShadow: "$subtleShadow",
  top: "-0.8rem",
  left: "calc(50% - 2rem)",
  background: "$primary",
  border: "none",
  borderRight: "1px solid $borderDark",
  cursor: "pointer",

  "& path": {
    fill: "white",
  },
});

export const InnerContainer = styled("div", {
  display: "flex",
  gap: "1rem",
  width: "100%",
});

export const TabList = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  minWidth: "16rem",
});

export const TabTitle = styled("h1", {
  margin: 0,
  color: "$textNormal",
  fontWeight: 550,
  fontSize: "1rem",
  marginBottom: "0.4rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const TabItem = styled("button", {
  display: "flex",
  padding: "0.6rem",
  borderRadius: "8px",
  border: "none",
  fontSize: "0.9rem",
  background: "transparent",
  color: "$textNormal",
  cursor: "pointer",
  transition: "background ease 0.25s, box-shadow ease 0.25s",

  "&:hover": {
    background: "$neutralDarker",
  },

  variants: {
    selected: {
      true: {
        background: "$primaryLight",
        color: "$textImportant",
        fontWeight: 500,

        "&:hover": {
          background: "$primaryLight",
          boxShadow: "inset $subtleShadow",
        },
      },
    },
  },
});

export const TableContainer = styled("div", {
  overflowX: "auto",
  width: "100%",
});

export const Table = styled("table", {
  minWidth: "100%",
  width: "max-content",
  background: "$neutralLightest",
  borderRadius: "8px",
  border: "1px solid $borderDark",
  tableLayout: "fixed",
  borderSpacing: 0,
});

export const THead = styled("thead", {
  paddingBottom: "0.3rem",
});

export const Tr = styled("tr", {
  "&:hover": {
    background: "$neutralLight",
  },

  "&:last-of-type": {
    height: "100%",
    verticalAlign: "top",
  },

  variants: {
    head: {
      true: {
        "&:hover": {
          background: "transparent",
        },
      },
    },
  },
});

export const Th = styled("th", {
  display: "inline-block",
  color: "$textImportant",
  fontWeight: 550,
  fontSize: "0.85rem",
  padding: "0.2rem",
  width: "8rem",

  "&:first-of-type": {
    width: "14rem",
  },
});

export const THContained = styled("div", {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const Td = styled("td", {
  display: "inline-block",
  color: "$textNormal",
  fontSize: "0.85rem",
  padding: "0.1rem 0.6rem",
  width: "8rem",
  "&:first-of-type": {
    width: "14rem",
  },
});

export const NoSelection = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  color: "$textNormal",
});

export const FromGroup = styled("div", {
  color: "$textDull",
  fontWeight: 500,
  fontSize: "0.8rem",
});
