import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import MobileStepper from "@mui/material/MobileStepper";

import AppButton from "@features/ui/logo/AppButton";
import { useBreakpoints } from "@hooks/useBreakpoints";
import { useAppDispatch, useAppSelector } from "@store/index";

import { WIZARD_STEPS } from "../../data";
import { previousStep, selectCurrentStep } from "../../store/tripWizardSlice";

interface Props {
  isLoading?: boolean;
}

export default function Pagination({ isLoading }: Props) {
  const dispatch = useAppDispatch();
  const { md, lg } = useBreakpoints();
  const maxSteps = WIZARD_STEPS.length;
  const currentStep = useAppSelector(selectCurrentStep);

  const onBackButtonClick = () => dispatch(previousStep());

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
          loading={isLoading}
        >
          Next
        </AppButton>
      }
      backButton={
        <AppButton
          onClick={onBackButtonClick}
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
