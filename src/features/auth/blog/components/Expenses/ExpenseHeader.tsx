import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Grid, Stack, Typography } from "@mui/material";

import { Colors } from "@config/styles";
import PreviewImage from "@features/auth/assets/LandingImages/preview_image.png";
import AppButton from "@features/ui/logo/AppButton";

export default function ExpenseHeader() {
  return (
    <Box sx={{ width: "100%", pt: "16px" }}>
      {/* Header Section */}
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Stack direction="row">
          <Typography>Trips / </Typography>
          <Typography sx={{ color: "text.secondary" }}>Rome</Typography>
        </Stack>

        <AppButton
          variant="contained"
          sx={{
            height: "auto",
            backgroundColor: "error.main",
            "&:hover": {
              backgroundColor: "error.main",
            },
          }}
        >
          Delete <DeleteIcon sx={{ mb: -0.5 }} />
        </AppButton>
      </Stack>

      {/* Grid Container for the background image */}
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            position: "relative",
            height: "200px",
            width: "730px",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Background image */}
          <Box
            sx={{
              backgroundImage: `url(${PreviewImage})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              width: "100%",
              borderRadius: "12px",
            }}
          />

          {/* Dark overlay for better readability */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity for better contrast
              borderRadius: "12px",
            }}
          />

          {/* Content displayed over the image */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              padding: "16px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              textAlign: "center", 
            }}
          >
            <Typography
              sx={{
                color: Colors.orange,
                backgroundColor: Colors.lightOrange,
                borderRadius: 2,
                padding: "4px 8px",
                display: "inline-block",
              }}
            >
              Upcoming
            </Typography>

            <Typography variant="h4" sx={{ mt: 1 }}>
              Rome
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center" 
              gap={1}
              sx={{ mt: 1 }}
            >
              <LocationOnIcon
                sx={{
                  color: Colors.secondaryBlue,
                  backgroundColor: Colors.lightBlue,
                  borderRadius: "50%",
                  padding: "4px",
                }}
              />
              <Typography>
                Warsaw, Poland -
                <span style={{ textDecoration: "underline" }}>Rome, Italy</span>
                - Monopoly, Italy
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
