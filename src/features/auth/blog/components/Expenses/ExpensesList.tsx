import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Box, Typography } from "@mui/material";

import { Colors } from "@config/styles";

export default function ExpensesList() {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "row",
          gap: 2,
          mt: 2,
          mb: 2,
        }}
      >
        {[
          {
            icon: <InfoIcon />,
            label: "Details",
          },
          {
            icon: <ArticleIcon />,
            label: "Documents",
          },
          {
            icon: <MenuIcon />,
            label: "Packing List",
          },
          {
            icon: <MonetizationOnIcon />,
            label: "Expenses",
          },
          {
            icon: <PhotoCameraIcon />,
            label: "Photos",
          },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                color:
                  item.icon.type === MonetizationOnIcon
                    ? "primary.main"
                    : Colors.disabled,
              }}
            >
              {item.icon}
            </Box>
            <Typography
              sx={{
                color:
                  item.label === "Expenses" ? "primary.main" : Colors.disabled,
                textDecoration:
                  item.label === "Expenses" ? "underline" : "none",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
