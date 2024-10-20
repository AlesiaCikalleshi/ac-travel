import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Colors } from "@config/styles";
import Logo from "@features/ui/logo/Logo";

export default function Footer() {
  return (
    <>
      <Divider />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 3,
          textAlign: { sm: "center", md: "center" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "center",
            textAlign: { sm: "center", md: "center" },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              <Logo />
            </Typography>
            <Typography variant="body1">Get in touch</Typography>
            <Typography color="text.secondary" variant="subtitle1" sx={{mb: 2}}>
              Contact us anytime for getting support
            </Typography>
            <Typography variant="body1">
              contact@<span style={{ fontWeight: "bold" }}>actravel</span>.com
            </Typography>
            <Typography
              sx={{
                color: Colors.secondaryGreen,
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                  justifyContent: "center",
                  color: "text.secondary",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: Colors.thirdGreen,
                    color: "primary.main",
                    borderRadius: 1,
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box
                  sx={{
                    backgroundColor: Colors.thirdGreen,
                    color: "primary.main",
                    borderRadius: 1,
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FacebookIcon />
                </Box>
                <Box
                  sx={{
                    backgroundColor: Colors.thirdGreen,
                    color: "primary.main",
                    borderRadius: 1,
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TwitterIcon />
                </Box>
              </Stack>
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
