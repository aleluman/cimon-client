import { styled } from "@/shared/constants/stitches";

export const TableContainer = styled("div", {
  position: "relative",
  width: "100%",
  display: "flex",
  background: "$neutralLight",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
  padding: "1rem",
  maxWidth: "80rem",
  minWidth: "50rem",
  maxHeight: "100%",
  overflow: "hidden",
});

export const TableDiv = styled("div", {
  flex: 1,
  display: "flex",
  width: "calc(100% - 8rem)",
  overflowX: "auto",
  marginBottom: "2.2rem",
});

export const Table = styled("table", {
  position: "relative",
  display: "block",
  maxWidth: "fit-content",
  tableLayout: "fixed",
  borderCollapse: "collapse",
});

export const TableRow = styled("tr", {
  borderRadius: "8px",
  marginBottom: "1rem",
});

export const TableHead = styled("th", {
  position: "sticky",
  top: 0,
  color: "$textNormal",
  fontWeight: 600,
  minWidth: "9rem",
  maxWidth: "9rem",
  fontSize: "0.85rem",
  paddingBottom: "0.5rem",
  background: "$neutralLight",
});

export const TableData = styled("td", {
  color: "$textNormal",
  textAlign: "center",
  paddingBottom: "0.34rem",
});

export const PhaseContainer = styled("span", {
  width: "8rem",
});

export const AmbitsContainer = styled("span", {
  position: "sticky",
  left: 0,
  minWidth: "13rem",
  maxWidth: "13rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.4rem",
  zIndex: 2,
  paddingRight: "1rem",
  borderRight: "1px solid $popoverBorder",
});

export const HelpText = styled("div", {
  color: "$textDull",
  fontSize: "0.9rem",
  textAlign: "center",
});

export const ModalForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const AmbitsTitle = styled("div", {
  position: "sticky",
  top: 0,
  fontSize: "1.1rem",
  width: "100%",
  textAlign: "center",
  color: "$textImportant",
  fontWeight: 600,
  paddingTop: "0.4rem",
  marginBottom: "0.4rem",
  zIndex: 10,
  background: "$neutralLight",
});

export const EmptyContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});
