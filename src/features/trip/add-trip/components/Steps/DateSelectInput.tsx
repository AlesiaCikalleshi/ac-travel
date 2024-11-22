import dayjs from "dayjs";
import { type Control, Controller } from "react-hook-form";

import type { SxProps, Theme } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  name: string;
  control: Control<any, unknown>;
  fullWidth?: boolean;
  label: string;
  requiredErrorText?: string;
  maxDate?: Date | null;
  minDate?: Date | null;
  sx?: SxProps<Theme>;
}

export default function DateSelectInput({
  name,
  label,
  control,
  maxDate,
  minDate,
  requiredErrorText,
  fullWidth,
  sx,
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
          onChange={(newValue) => {
            let value;
            try {
              value = dayjs(newValue).toISOString();
            } catch (_) {
              /* empty */
            }
            field.onChange(value ?? newValue);
          }}
          sx={{
            width: fullWidth ? "100%" : "auto",
            "& .MuiSvgIcon-root": { ml: 0.1 },
            ...sx,
          }}
          value={field.value ? dayjs(field.value) : null}
          maxDate={maxDate ? dayjs(maxDate) : null}
          minDate={minDate ? dayjs(minDate) : null}
        />
      )}
    />
  );
}
