import { type Control, Controller } from "react-hook-form";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  name: string;
  control: Control<any, unknown>;
  label: string;
  requiredErrorText?: string;
  maxDate?: Date | null;
  minDate?: Date | null;
}

export default function DateSelectInput({
  name,
  label,
  control,
  maxDate,
  minDate,
  requiredErrorText,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredErrorText }}
      render={({ field: { ref, ...field }, fieldState }) => (
        <DatePicker
          label={label}
          slotProps={{
            textField: {
              inputRef: ref,
              variant: "standard",
              helperText: fieldState.error?.message,
              error: Boolean(fieldState.error),
            },
            inputAdornment: { position: "start" },
          }}
          {...field}
          sx={{ width: "100%", "& .MuiSvgIcon-root": { ml: 0.1 } }}
          maxDate={maxDate}
          minDate={minDate}
        />
      )}
    />
  );
}
