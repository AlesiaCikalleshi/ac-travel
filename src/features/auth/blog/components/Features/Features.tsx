import { Box } from "@mui/material";

import FeaturesInformation from "./FeaturesInformation";

export default function Features() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          borderColor: "divider",
        }}
      />
      <FeaturesInformation />
    </>
  );
}
