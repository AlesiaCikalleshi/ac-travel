import { Controller, type SubmitHandler, useForm } from "react-hook-form";

import { Stack, TextField } from "@mui/material";

import { Trip } from "@features/trip/types";
import { useAppSelector } from "@store/index";

import { selectWizardTrip } from "../../store/tripWizardSlice";
import Pagination from "../Navigation/Pagination";

interface FormInput {
  locationFrom: Trip["locationFrom"];
}

export default function Destination() {
  const { onSubmit, control, handleSubmit } = useTravelInfoForm();

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ width: "100%" }}
      gap={3}
    >
      <Controller
        name="locationFrom"
        control={control}
        rules={{ required: "Please specify trip name!" }}
        render={({ field: { ref, ...field }, fieldState }) => (
          <TextField
            inputRef={ref}
            margin="normal"
            required
            fullWidth
            id="locationFrom"
            label="Location Form"
            autoFocus
            variant="standard"
            helperText={
              fieldState.error?.message ?? `${field.value.length}/200`
            }
            error={Boolean(fieldState.error)}
            {...field}
          />
        )}
      />
      <Pagination />
    </Stack>
  );
}

function useTravelInfoForm() {
  const trip = useAppSelector(selectWizardTrip);
  const { control, handleSubmit, watch } = useForm<FormInput>({
    defaultValues: {
      locationFrom: trip.locationFrom,
    },
  });
  const formValues = watch();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    //TODO save step info
    console.log(data);
  };

  return {
    onSubmit,
    control,
    handleSubmit,
    formValues,
  };
}
