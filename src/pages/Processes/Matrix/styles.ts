import { styled } from "@/shared/constants/stitches";

export const TableContainer = styled("div", {
  width: "100%",
  maxHeight: "30rem",
  background: "$neutralLight",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
  padding: "1rem",
  position: "relative",
});

export const Table = styled("table", {
  borderCollapse: "collapse",
  marginBottom: "0.2rem",
});

export const TableRow = styled("tr", {
  borderRadius: "8px",
});

export const TableHead = styled("th", {
  color: "$textNormal",
  fontWeight: 600,
  padding: "0 0.6rem",
  width: "8rem",
  fontSize: "0.85rem",
  paddingBottom: "0.5rem",

  "&:first-of-type": {
    fontSize: "1rem",
  },
});

export const TableData = styled("td", {
  color: "$textNormal",
  textAlign: "center",
  padding: "0.3rem 0",
});

export const PhaseContainer = styled("span", {
  position: "absolute",
  right: "0.4rem",
  top: "0.4rem",
});

export const AddButton = styled("button", {
  display: "flex",
  gap: "0.4rem",
  justifyContent: "center",
  appearance: "none",
  border: "none",
  width: "12rem",
  background: "$primaryLight",
  padding: "0.5rem",
  borderRadius: "8px",
  color: "$textImportant",
  cursor: "pointer",
  transition: "all ease 0.25s",

  "& path": {
    fill: "$textImportant",
  },

  "&:hover": {
    background: "$primary",
    color: "$textReverse",
  },
});
