import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Colors } from "@config/styles";

const advantages = [
  {
    icon: <PhotoCameraIcon />,
    title: "Keep memories from the trip",
    description:
      "Keeping your travel photos within your trip-planning app is incredibly practical.",
  },
  {
    icon: <LocationOnIcon />,
    title: "Add places you want to visit",
    description:
      "Our user-friendly tools help you plan and organize your packing with ease.",
  },
  {
    icon: <FolderCopyIcon />,
    title: "Centralize all your documents",
    description:
      "Simplify Your Life by Bringing Together All Your Essential Documents and Files in a Single, Easily Accessible Location.",
  },
];

export default function About() {
  const commonIconStyles = {
    backgroundColor: Colors.primaryBlue,
    color: "white",
    padding: 2,
    borderRadius: 1,
    width: 8,
    height: 8,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    margin: "0 auto",
  };

  return (
    <>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "primary.main",
              display: "flex",
              justifyContent: "center",
            }}
          >
            ADVANTAGES
          </Typography>
          <Typography variant="h5" sx={{ color: "text.primary" }}>
            Why choose us?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            mt: 4,
          }}
        >
          {advantages.map((advantage, index) => (
            <Box
              key={index}
              sx={{ width: { xs: "100%", sm: "30%" }, textAlign: "center" }}
            >
              <Stack sx={commonIconStyles}>{advantage.icon}</Stack>
              <Typography sx={{ mb: 2, mt: 2, fontWeight: "bold" }}>
                {advantage.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 4 }}>
                {advantage.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
