import { Icon } from "@/shared/components/Icon/Icon";
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
          <TableRow>
            <TableHead css={{ color: "$textImportant", fontWeight: 700, width: "12rem" }}>
              Ambits
            </TableHead>
            <TableHead>Phase 1</TableHead>
            <TableHead>Phase 2</TableHead>
            <TableHead>Phase 3</TableHead>
            <TableHead>Phase 4</TableHead>
          </TableRow>
          <TableRow>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
          </TableRow>
          <TableRow>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
          </TableRow>
          <TableRow>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
            <TableData>asdfasdf</TableData>
          </TableRow>
        </Table>
      </TableContainer>
    </MatrixContainer>
  );
};
