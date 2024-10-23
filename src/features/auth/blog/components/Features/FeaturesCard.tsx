import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography } from "@mui/material";
import PreviewImage from "@features/auth/assets/LandingImages/preview_image.png";

import { Colors } from "@config/styles";

export default function FeaturesCard() {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "row",
          gap: 2,
        }}
      >
        {[{
            backgroundImage: PreviewImage,
            label: "Bali - relax trip",
            date: "10 Jul - 09 Aug",
            location: "Bali, Indonesia"
          },
          {
            backgroundImage: PreviewImage,
            label: "Tokyo - Asia",
            date: "12 Jan - 15 Jan",
            location: "Tokyo, Japan"
          },
          {
            backgroundImage: PreviewImage,
            label: "Bali - relax trip",
            date: "12 Jan - 15 Jan, 2022",
            location: "Como, Italy"
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              border: "1px solid",
              borderColor: "grey.200",
              width: "200px",
              height: "auto",
              borderRadius: 2,
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${item.backgroundImage})`,
                borderRadius: 2,
                minWidth: "100%",
                minHeight: 152,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Box
              sx={{
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{ fontWeight: "medium", color: Colors.thirdBlue }}
              >
                {item.label}
              </Typography>
            </Box>

            <Typography
              sx={{ fontWeight: "medium", color: "text.secondary", display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
              <InsertInvitationIcon
                sx={{
                  color: Colors.secondaryBlue,
                  backgroundColor: Colors.lightBlue,
                  borderRadius: 0.5,
                }}
              />
              {item.date}
            </Typography>

            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <LocationOnIcon
                sx={{
                  color: Colors.secondaryBlue,
                  backgroundColor: Colors.lightBlue,
                  borderRadius: 0.5,
                }}
              />
              {item.location}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
