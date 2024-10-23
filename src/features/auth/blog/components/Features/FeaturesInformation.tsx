import { Controller, useForm } from "react-hook-form";

import AddIcon from "@mui/icons-material/Add";
import { Box, Grid, Stack, TextField, Typography } from "@mui/material";

import Flight_logo from "@features/auth/assets/LandingImages/flight_logo.png";
import PreviewImage from "@features/auth/assets/LandingImages/preview_image.png";
import Vector from "@features/auth/assets/LandingImages/vector.png";
import DateSelectInput from "@features/trip/add-trip/components/Steps/DateSelectInput";
import { selectWizardTrip } from "@features/trip/add-trip/store/tripWizardSlice";
import { TRIP_PREVIEW_IMAGES } from "@features/trip/data";
import { Trip } from "@features/trip/types";
import AppButton from "@features/ui/logo/AppButton";
import { useAppSelector } from "@store/index";

import FeaturesCard from "./FeaturesCard";
import FeaturesText from "./FeaturesText";
import FeaturesTrip from "./FeaturesTrip";

interface FormInput {
  previewImage: Trip["previewImage"];
  name: Trip["name"];
  description: Trip["description"];
  startDate: Trip["startDate"];
  endDate: Trip["endDate"];
}

export default function FeaturesInformation() {
  const { control, formValues } = useTravelInfoForm({
    closePreviewImageDialog: close,
  });

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid container spacing={2} sx={{ mt: 6 }}>
        {/* Left side with image and form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            backgroundColor: "primary.main",
            borderRadius: 2,
            gap: 2,
            padding: "24px 12px 36px 12px",
            height: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "728px",
          }}
        >
          <Stack flexDirection="row" gap={2} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                backgroundImage: `url(${PreviewImage})`, 
                backgroundRepeat: "no-repeat",
                backgroundColor: "light",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "auto",
                width: "100%", 
                maxWidth: "660px", 
              }}
            />

            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 8,
                textAlign: { sm: "center", md: "center" },
                color: "primary.main",
                width: "100%",
                mx: 0,
              }}
            >
              {/* Flight Logo and Vector  */}
              <Box
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "-9%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                }}
              />
              <Box
                sx={{
                  backgroundImage: `url(${Vector})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "159px",
                  width: "660px",
                }}
              />

              <Box
                sx={{
                  backgroundImage: `url(${Flight_logo})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "59px",
                  width: "97px",
                  ml: "-13%",
                  mb: "50%",
                }}
              />
            </Box>
          </Stack>

          {/* Form Overlay */}
          <Box
            sx={{
              position: "absolute",
              zIndex: 1,
            }}
          >
            <Stack
              sx={{
                color: "white",
                pl: 2.5,
                pt: 2.5,
              }}
            >
              <Typography variant="h5">Hi, Alesia!</Typography>
              <Typography>Let's plan your next trip!</Typography>
            </Stack>
            <Stack
              direction="row"
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                padding: "16px",
                width: "621px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Form fields */}
              <Controller
                name="name"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    inputRef={ref}
                    margin="normal"
                    fullWidth
                    id="from"
                    label="From"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <Controller
                name="name"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    inputRef={ref}
                    margin="normal"
                    fullWidth
                    id="to"
                    label="To"
                    variant="standard"
                    {...field}
                  />
                )}
              />
              <DateSelectInput
                label="From"
                name="startDate"
                control={control}
                requiredErrorText="Please specify start date!"
                maxDate={formValues.endDate}
              />
              <DateSelectInput
                label="Till"
                name="endDate"
                control={control}
                requiredErrorText="Please specify end date!"
                minDate={formValues.startDate}
              />
              <AppButton type="submit" variant="contained">
                Go Travel <AddIcon />
              </AppButton>
            </Stack>
          </Box>

          {/* <FeaturesTrip />
          <FeaturesCard /> */}
        </Grid>

        {/* Right Side with text */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FeaturesText />
              {/* <FeaturesTrip /> */}
              {/* <FeaturesCard /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function useTravelInfoForm({
  closePreviewImageDialog,
}: {
  closePreviewImageDialog: () => void;
}) {
  const trip = useAppSelector(selectWizardTrip);
  const {
    control,
    handleSubmit,
    watch,
    register,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<FormInput>({
    defaultValues: {
      name: trip.name,
      description: trip.description,
      startDate: trip.startDate,
      endDate: trip.endDate,
      previewImage: trip.previewImage,
    },
  });
  const formValues = watch();
  const previewImageSrc = formValues.previewImage?.templateImageId
    ? TRIP_PREVIEW_IMAGES.find(
        (image) => image.id === formValues.previewImage?.templateImageId,
      )
    : null;

  const onPreviewImageSave = (previewImage: Trip["previewImage"]) => {
    closePreviewImageDialog();
    setValue("previewImage", previewImage);
    trigger("previewImage");
  };

  return {
    control,
    handleSubmit,
    formValues,
    register,
    errors,
    previewImageSrc,
    onPreviewImageSave,
  };
}
