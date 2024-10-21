import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import PaymentsIcon from "@mui/icons-material/Payments";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Box, Typography } from "@mui/material";

import { Colors } from "@config/styles";

export default function ExpensesCard() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 2,
            mt: 2,
            mb: 2,
          }}
        >
          {/* Cards */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "row",
              gap: 2,
            }}
          >
            {[
              {
                icon: <LocalActivityIcon sx={{ color: "primary.main" }} />,
                label: "Tickets",
                amount: "450$",
                backgroundColor: Colors.thirdGreen,
              },
              {
                icon: <RestaurantIcon sx={{ color: Colors.secondaryBlue }} />,
                label: "Food",
                amount: "300$",
                backgroundColor: Colors.lightBlue,
              },
              {
                icon: <PaymentsIcon sx={{ color: Colors.red }} />,
                label: "Hotel",
                amount: "200$",
                backgroundColor: Colors.lightRed,
              },
              {
                icon: (
                  <EmojiEmotionsIcon sx={{ color: Colors.secondaryOrange }} />
                ),
                label: "Entertainment",
                amount: "120$",
                backgroundColor: Colors.thirdOrange,
              },
              {
                icon: <PaymentsIcon sx={{ color: Colors.darkGrey }} />,
                label: "Others",
                amount: "50$",
                backgroundColor: Colors.lightGrey,
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1.5,
                  border: `1px solid`,
                  borderColor: "grey.200",
                  width: "140px",
                  height: "150px",
                  borderRadius: 2,
                  padding: "16px 12px",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: item.backgroundColor,
                    borderRadius: 0.5,
                    padding: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "45%",
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{ fontWeight: "medium", color: "text.secondary" }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "medium", color: Colors.thirdBlue }}
                >
                  {item.amount}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
