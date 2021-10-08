import { Icon } from "@/shared/components/Icon/Icon";
import { Ambit } from "../Ambit/Ambit";
import {
  LastEditedText,
  MatrixContainer,
  MatrixTitle,
  MatrixTitleContainer,
  Table,
  TableContainer,
  TableData,
  TableHead,
  TableRow,
} from "./styles";

export const Matrix = () => {
  return (
    <MatrixContainer>
      <MatrixTitleContainer>
        <MatrixTitle>
          <Icon type="generic" size={24} color="$primary" />
          Process 1
        </MatrixTitle>
        <LastEditedText>Last edited 4 days ago</LastEditedText>
        <button type="button">Delete</button>
      </MatrixTitleContainer>
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
    </MatrixContainer>
  );
};
