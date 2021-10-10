import { Ambit } from "../Ambit/Ambit";
import { Table, TableContainer, TableData, TableHead, TableRow } from "./styles";

export const Matrix = () => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            <TableHead css={{ color: "$textImportant", fontWeight: 700, width: "12rem" }}>
              Ambits
            </TableHead>
            <TableHead>Phase 1</TableHead>
            <TableHead>Phase 2</TableHead>
            <TableHead>Phase 3</TableHead>
            <TableHead>Phase 4</TableHead>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>
              <Ambit id="1" name="Home Care" />
            </TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <Ambit id="2" name="Emergencies" />
            </TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <Ambit id="3" name="Contact" />
            </TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
            <TableData>-</TableData>
          </TableRow>
        </tbody>
      </Table>
    </TableContainer>
  );
};
