import { styled } from "@/shared/constants/stitches";

export const TableContainer = styled("div", {
  width: "100%",
  maxHeight: "30rem",
  background: "$neutralLight",
  borderRadius: "8px",
  boxShadow: "$subtleShadow",
  padding: "0.4rem",
});

export const Table = styled("table", {
  borderCollapse: "collapse",
});

export const TableRow = styled("tr", {
  borderRadius: "8px",
});

export const TableHead = styled("th", {
  color: "$textNormal",
  fontWeight: 600,
  padding: "0.6rem",
  width: "8rem",
  fontSize: "0.85rem",

  "&:first-of-type": {
    fontSize: "1rem",
  },
});

export const TableData = styled("td", {
  color: "$textNormal",
  textAlign: "center",
  padding: "0.3rem",
});
