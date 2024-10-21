import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Grid, Typography } from "@mui/material";

import { EXPENSE_TEXT } from "@config/constants";
import AppButton from "@features/ui/logo/AppButton";

export default function ExpensesInformation() {
  return (
    <Grid container spacing={2} sx={{ mt: 6 }}>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            ml: { xs: 2, md: 0 },
          }}
        >
          <Box>
            <Typography color="primary.main">Expenses</Typography>
            <Typography variant="h2">
              Expense Tracking for Your Travels
            </Typography>
            <Typography color="text.secondary">{EXPENSE_TEXT}</Typography>
          </Box>

          <AppButton
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-start", mt: 4 }}
          >
            Plan your trip
            <ArrowForwardIcon sx={{ mb: -0.8 }} />
          </AppButton>
        </Box>
      </Grid>
    </Grid>
  );
}
