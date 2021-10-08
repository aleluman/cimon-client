import { styled } from "@/shared/configs/stitches";

export const InteractionsContainer = styled("div", {
  display: "flex",
  position: "absolute",
  bottom: 0,
  width: "calc(100% - 20.8rem)",
  margin: "0.4rem",
  background: "$neutralLight",
  boxShadow: "$subtleShadow",
  padding: "0.4rem",
  borderRadius: "8px",

  variants: {
    extended: {
      true: {
        width: "calc(100% - 0.8rem)",
      },
    },
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

export const Table = styled("table", {
  background: "$neutralFull",
  borderRadius: "8px",
  border: "1px solid $borderDark",
  borderSpacing: 0,
  flexGrow: 1,
});

export const THead = styled("thead", {});

export const Tr = styled("tr", {
  "&:hover": {
    background: "$neutralLight",
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
  borderBottom: "1px solid $borderLight",
  color: "$textImportant",
  fontWeight: 550,
  fontSize: "0.85rem",
  padding: "0.2rem",
});

export const Td = styled("td", {
  color: "$textNormal",
  fontSize: "0.85rem",
  padding: "0.3rem",
});
