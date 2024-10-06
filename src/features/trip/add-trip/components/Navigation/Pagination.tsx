import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";

import AppButton from "@features/ui/AppButton";
import { useBreakpoints } from "@hooks/useBreakpoints";

import { WIZARD_STEPS } from "../../data";

export default function TextMobileStepper() {
  const { md, lg } = useBreakpoints();

  const maxSteps = WIZARD_STEPS.length;

  const currentStep = 0;

  return (
    <MobileStepper
      variant={lg ? "dots" : "text"}
      steps={maxSteps}
      position="static"
      activeStep={currentStep}
      nextButton={
        <AppButton
          fullWidth={!md}
          type="submit"
          endIcon={<KeyboardArrowRight />}
        >
          Next
        </AppButton>
      }
      backButton={
        <AppButton
          fullWidth={!md}
          variant="outlined"
          startIcon={<KeyboardArrowLeft />}
          sx={{
            visibility: currentStep === 0 ? "hidden" : "visible",
          }}
        >
          Back
        </AppButton>
      }
      sx={{
        ".MuiMobileStepper-dots": {
          visibility: "hidden",
        },
        display: "flex",
        gap: 2,
        whiteSpace: "nowrap",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        borderRadius: 4,
        p: { xs: 2, md: 3 },
      }}
    />
  );
}
