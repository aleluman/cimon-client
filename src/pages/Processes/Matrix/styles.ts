import { styled } from "@/shared/configs/stitches";

export const MatrixContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  heigth: "100%",
});

export const MatrixTitleContainer = styled("div", {
  display: "flex",
  width: "60rem",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 0",
});

export const MatrixTitle = styled("h1", {
  display: "flex",
  gap: "0.4rem",
  flex: 1,
  color: "$textNormal",
  fontSize: "1.5rem",
  margin: 0,
});

export const LastEditedText = styled("span", {
  fontSize: "0.8rem",
  fontStyle: "oblique",
  color: "$textDull",
  borderRight: "1px solid $popoverBorder",
  paddingRight: "1rem",
  marginRight: "1rem",
});

export const TableContainer = styled("div", {
  width: "60rem",
  height: "30rem",
  background: "$neutralLight",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
});

export const Table = styled("table", {
  borderCollapse: "collapse",
});

export const TableRow = styled("tr", {
  borderRadius: "8px",

  "&:first-of-type": {
    lineHeight: "2rem",
  },
});

export const TableHead = styled("th", {
  color: "$textNormal",
  fontWeight: 600,
  padding: "0.6rem",
  width: "8rem",
});

export const TableData = styled("td", {
  color: "$textNormal",
  textAlign: "center",
  padding: "0.6rem",
});
