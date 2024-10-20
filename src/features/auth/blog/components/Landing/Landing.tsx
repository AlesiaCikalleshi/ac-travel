import { Box } from "@mui/material";

import LandingInformation from "./LandingInformation";

export default function Landing() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          pb: 2,
        }}
      />
      <LandingInformation />
    </>
  );
}
