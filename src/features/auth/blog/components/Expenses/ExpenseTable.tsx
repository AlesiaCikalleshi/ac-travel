import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Divider, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Colors } from "@config/styles";
import AppButton from "@features/ui/logo/AppButton";

function createData(
  category: string,
  image: React.ReactNode,
  description: string,
  date: string,
  amount: string,
) {
  return { category, image, description, date, amount };
}

const rows = [
  createData(
    "Tickets",
    <LocalActivityIcon />,
    "Tickets from Rome to Warsaw",
    "14 Jan, 2022",
    "300$",
  ),
  createData("Food", <RestaurantIcon />, "Restaurant", "13 Jan, 2022", "150$"),
  createData(
    "Tickets",
    <LocalActivityIcon />,
    "Tickets from Warsaw to Rome",
    "10 Jan, 2022",
    "150$",
  ),
];

export default function ExpenseTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Handle page change
  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Paginate rows
  const paginatedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  return (
    <TableContainer component={Paper} sx={{ mb: "64px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
          padding: "12px",
        }}
      >
        <Typography color="text.secondary">All Expenses</Typography>
        <AppButton type="submit" variant="outlined">
          Add Expense
          <AddIcon sx={{ mb: -1 }} />
        </AppButton>
      </Box>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row) => (
            <TableRow key={row.category + row.date}>
              <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  sx={{
                    backgroundColor:
                      row.category === "Tickets"
                        ? Colors.thirdGreen
                        : Colors.lightBlue,
                    padding: "6px",
                    mr: 1,
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 1,
                  }}
                >
                  {row.image}
                </Box>
                {row.category}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
