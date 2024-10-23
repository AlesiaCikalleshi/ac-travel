import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Box, Stack, Typography } from "@mui/material";

import { PREVIEW_TEXT } from "@config/constants";
import { Colors } from "@config/styles";
import PreviewImage from "@features/auth/assets/LandingImages/preview_image.png";

export default function FeaturesTrip() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 2,
            padding: 2,
          }}
        >
          <Typography variant="h6">Your upcoming trip!</Typography>

          <Stack direction={{ xs: "column", md: "row" }} gap={3}>
            <Box
              sx={{
                backgroundImage: `url(${PreviewImage})`,
                borderRadius: 2,
                minWidth: { xs: "100%", md: 152 },
                minHeight: 152,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Stack sx={{ width: "100%" }} gap={2}>
              <Stack direction="row" gap={1}>
                <Typography variant="h6">Rome</Typography>
                <Typography
                  sx={{
                    color: Colors.orange,
                    backgroundColor: Colors.lightOrange,
                    borderRadius: 2,
                    padding: "2px 6px",
                  }}
                >
                  Upcoming
                </Typography>
              </Stack>

              <Stack direction="row" gap={1} alignItems="center">
                <LocationOnIcon
                  sx={{
                    color: Colors.secondaryBlue,
                    backgroundColor: Colors.lightBlue,
                    borderRadius: 0.5,
                  }}
                />
                <Typography>
                  Warsaw, Poland -
                  <span style={{ textDecoration: "underline" }}>
                    Rome, Italy
                  </span>
                  - Monopoly, Italy
                </Typography>
              </Stack>

              <Stack direction="row" gap={1}>
                <Typography>Details</Typography>
              </Stack>

              <Stack direction="row" gap={2} alignItems="center">
                <InsertInvitationIcon
                  sx={{
                    color: Colors.secondaryBlue,
                    backgroundColor: Colors.lightBlue,
                    borderRadius: 0.5,
                  }}
                />
                <Typography>12 Jan - 15 Jan</Typography>
                <LocationOnIcon
                  sx={{
                    color: Colors.secondaryBlue,
                    backgroundColor: Colors.lightBlue,
                    borderRadius: 0.5,
                  }}
                />
                <Typography>Rome, Italy</Typography>
                <MonetizationOnIcon
                  sx={{
                    color: Colors.secondaryBlue,
                    backgroundColor: Colors.lightBlue,
                    borderRadius: 0.5,
                  }}
                />
                <Typography>~360$</Typography>
              </Stack>

              <Typography sx={{ whiteSpace: "pre-line" }}>
                {PREVIEW_TEXT}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
