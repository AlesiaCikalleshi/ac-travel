import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Colors } from "@config/styles";
import Cloud_1 from "@features/auth/assets/LandingImages/cloud_1.png";
import Cloud_2 from "@features/auth/assets/LandingImages/cloud_2.png";
import Cloud_3 from "@features/auth/assets/LandingImages/cloud_3.png";
import Flight_logo from "@features/auth/assets/LandingImages/flight_logo.png";
import Vector from "@features/auth/assets/LandingImages/vector.png";
import AppButton from "@features/ui/logo/AppButton";

export default function PlanTrip() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 8,
          textAlign: { sm: "center", md: "center" },
          backgroundColor: Colors.secondaryGreen,
          color: "primary.main",
          width: "100%",
          mx: 0,
        }}
      >
        {/* Flight Logo and Vector  */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-9%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Vector Image */}
          <Box
            sx={{
              backgroundImage: `url(${Vector})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "159px",
              width: "660px",
            }}
          />

          {/* Flight Logo */}
          <Box
            sx={{
              backgroundImage: `url(${Flight_logo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "59px",
              width: "97px",
              ml: "-13%",
              mb: "-12%",
            }}
          />
        </Box>

        {/* Cloud 1 */}
        <Box
          component="img"
          src={Cloud_3}
          alt="Cloud 3"
          sx={{
            position: "absolute",
            top: "3%",
            right: "25%",
            width: "152px",
            height: "93px",
          }}
        />

        {/* Cloud 2 */}
        <Box
          component="img"
          src={Cloud_2}
          alt="Cloud 2"
          sx={{
            position: "absolute",
            top: "10%",
            right: "25%",
            width: "152px",
            height: "93px",
          }}
        />

        {/* Cloud 3 */}
        <Box
          component="img"
          src={Cloud_1}
          alt="Cloud 1"
          sx={{
            position: "absolute",
            bottom: "3%",
            left: "22%",
            width: "152px",
            height: "93px",
          }}
        />

        {/* Main Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            textAlign: { sm: "center", md: "center" },
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              justifyContent: "center" ,
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Let’s plan your next trip together?
            </Typography>
            <AppButton
              type="submit"
              variant="contained"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Plan your trip
              <ArrowForwardIcon sx={{ mb: -0.8 }} />
            </AppButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
