import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import Flight_logo from "@features/auth/assets/LandingImages/flight_logo.png";
import LandingImage_1 from "@features/auth/assets/LandingImages/landing-1.jpg";
import LandingImage_2 from "@features/auth/assets/LandingImages/landing-2.jpg";
import LandingImage_3 from "@features/auth/assets/LandingImages/landing-3.jpg";
import User_1 from "@features/auth/assets/LandingImages/user_1.png";
import User_2 from "@features/auth/assets/LandingImages/user_2.png";
import User_3 from "@features/auth/assets/LandingImages/user_3.png";
import User_4 from "@features/auth/assets/LandingImages/user_4.png";
import Vector from "@features/auth/assets/LandingImages/vector.png";
import AppButton from "@features/ui/logo/AppButton";
import Logo from "@features/ui/logo/Logo";

export default function LandingInformation() {
  return (
    <Box sx={{ overflow: "auto", width: "100%" }}>
      {/* Header section */}
      <Box
        sx={{
          px: { xs: 2, md: 12.5 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Box sx={{ display: "flex", gap: 2.5 }}>
          <AppButton type="submit" variant="outlined">
            Login
          </AppButton>
          <AppButton type="submit" variant="contained">
            Sign Up
          </AppButton>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 6 }}>
        <Grid item xs={12} md={6}>
          {/* Your text and form content */}
          <Stack flexDirection="row" gap={2} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                backgroundImage: `url(${Vector})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "light",
                backgroundSize: "cover",
                backgroundPosition: "center",
                left: -1,
                border: "1px solid white",
                height: "159px",
                width: "660px",
              }}
            />
            <Box
              sx={{
                backgroundImage: `url(${Flight_logo})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "light",
                backgroundSize: "cover",
                backgroundPosition: "center",
                mt: 12.5,
                height: "59px",
                width: "97px",
              }}
            />
          </Stack>
          <Stack
            sx={{
              px: { xs: 2, md: 12.5 },
              pb: 20,
            }}
          >
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: "bold", mt: 4 }}
            >
              Your Ultimate Trip Companion
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 4 }}>
              Welcome to ZaTravel – Your Passport to Seamless Adventures!
              Discover, plan, and track your journeys effortlessly with our
              intuitive web application. Start exploring now!
            </Typography>
            <Stack direction="row" gap={2}>
              <AppButton
                type="submit"
                variant="contained"
                sx={{
                  padding: "16px 32px",
                  fontSize: "18px",
                  minWidth: "200px",
                  height: "60px",
                }}
              >
                Plan your trip
                <ChevronRightIcon sx={{ mb: -0.8 }} />
              </AppButton>
              <AppButton
                type="submit"
                variant="outlined"
                sx={{
                  padding: "16px 32px",
                  fontSize: "18px",
                  minWidth: "200px",
                  height: "60px",
                }}
              >
                Learn more
              </AppButton>
            </Stack>
            <Divider sx={{ pt: 36 }} />
            <Stack direction="row" gap={4} sx={{ alignItems: "center" }}>
              <Typography variant="h2">1200 + users </Typography>
              <Stack direction="row" spacing={-1}>
                <img
                  src={User_1}
                  alt="User 1"
                  width="55px"
                  style={{ borderRadius: "50%" }}
                />
                <img
                  src={User_2}
                  alt="User 2"
                  width="55px"
                  style={{ borderRadius: "50%" }}
                />
                <img
                  src={User_3}
                  alt="User 3"
                  width="55px"
                  style={{ borderRadius: "50%" }}
                />
                <img
                  src={User_4}
                  alt="User 4"
                  width="55px"
                  style={{ borderRadius: "50%" }}
                />
              </Stack>
              <Stack>
                <Typography variant="subtitle1">
                  Track their trips in our App.
                </Typography>
              </Stack>
            </Stack>
            <Divider />
          </Stack>
        </Grid>

        {/* Right Side with Images */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundImage: `url(${LandingImage_1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: 5,
                  height: "451px",
                  // width: "403px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              />
              <Box
                sx={{
                  backgroundImage: `url(${LandingImage_2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: 5,
                  height: "451px",
                  mt: 3,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  backgroundImage: `url(${LandingImage_3})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "0 56px 56px 0",
                  height: "926px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
