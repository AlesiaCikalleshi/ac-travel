import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Typography } from "@mui/material";

import AppButton from "@features/ui/logo/AppButton";

export default function FeaturesText() {
  return (
    <>
      <Box sx={{ width: "100%", padding: "32px" }}>
        <Typography variant="subtitle1" color="primary.main">
          DASHBOARD
        </Typography>
        <Typography variant="h4" color="text.primary">
          Organize All Your Trips in a Single Application
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          With our intuitive application, you can effortlessly organize all your
          trips in one convenient location. From itinerary details to travel
          notes and essential documents, everything you need for a smooth and
          stress-free journey is just a tap away.
        </Typography>
        <AppButton type="submit" variant="contained">
          Plan your trip
          <ChevronRightIcon />
        </AppButton>
      </Box>
    </>
  );
}
