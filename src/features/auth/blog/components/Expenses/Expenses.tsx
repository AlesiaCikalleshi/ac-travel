import { Box, Container, Divider, Grid } from "@mui/material";

import ExpenseHeader from "./ExpenseHeader";
import ExpenseTable from "./ExpenseTable";
import ExpensesCard from "./ExpensesCard";
import ExpensesInformation from "./ExpensesInformation";
import ExpensesList from "./ExpensesList";

export default function Expenses() {
  return (
    <>
      <Divider />

      <Container
        sx={{
          ml: { xs: 2, md: 0 },
          mr: { xs: 2, md: 0 },
        }}
      >
        <Grid container spacing={2}>
          {/* Left side: Expenses Information Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                pt: 3,
                ml: 0,
              }}
            >
              <ExpensesInformation />
            </Box>
          </Grid>

          {/* Right side: Expense Header Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: 2,
              }}
            >
              <ExpenseHeader />
              <ExpensesList />
              <ExpensesCard />
              <ExpenseTable />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
