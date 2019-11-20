import React from "react";
import {
  TablePagination as MuiTablePagination,
  TableFooter,
  TableRow,
  Table
} from "@material-ui/core";

import styled from "styled-components";

const TablePagination = styled(MuiTablePagination)`
  margin: ${props => props.theme.spacing(2)}px 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .MuiTablePagination-spacer {
    display: none;
  }
`;

const Pagination = ({
  count,
  rowsPerPage,
  page,
  onChangePage,
  handlePaginationChange
}) => {
  const handlePageChange = (_, page) => {
    onChangePage(page + 1);
  };
  return (
    <Table>
      <TableFooter>
        <TableRow>
          <TablePagination
            count={count}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 15, 20]}
            labelRowsPerPage="Rows"
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePaginationChange}
            page={page}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default Pagination;
