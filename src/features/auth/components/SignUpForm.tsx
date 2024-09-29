import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Box, Link, Stack, TextField, Typography } from "@mui/material";

import { AppRoutes } from "@config/routes";
import AppButton from "@features/ui/AppButton";

interface FormInput {
  name: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export default function SignUpForm() {
  const { control, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    // TODO: Register user through firebase
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ width: "100%" }}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: "Please specify your name!" }}
        render={({ field, fieldState }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
            placeholder="Alesia Cikalleshi"
            autoFocus
            variant="standard"
            helperText={fieldState.error?.message}
            error={Boolean(fieldState.error)}
            sx={{ mb: 3, mt: 0 }}
            {...field}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: "Please specify email address!" }}
        render={({ field, fieldState }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            placeholder="john@gmail.com"
            variant="standard"
            helperText={fieldState.error?.message}
            error={Boolean(fieldState.error)}
            sx={{ mb: 3, mt: 0 }}
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: "Please specify your password!" }}
        render={({ field, fieldState }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            autoComplete="current-password"
            placeholder="Your password"
            variant="standard"
            helperText={fieldState.error?.message}
            error={Boolean(fieldState.error)}
            sx={{ mb: 3, mt: 0 }}
            {...field}
          />
        )}
      />

      <Controller
        name="passwordRepeat"
        control={control}
        rules={{ required: "Please confirm your password!" }}
        render={({ field, fieldState }) => (
          <TextField
            margin="normal"
            required
            fullWidth
            id="passwordRepeat"
            label="Confirm Password"
            autoComplete="current-password"
            placeholder="Your password"
            variant="standard"
            helperText={fieldState.error?.message}
            error={Boolean(fieldState.error)}
            sx={{ mb: { xs: 3, md: 5 }, mt: 0 }}
            {...field}
          />
        )}
      />
      <AppButton type="submit" fullWidth variant="contained" sx={{ mb: 2 }}>
        Sign up
      </AppButton>
      <Stack
        justifyContent="center"
        direction="row"
        spacing={0.5}
        sx={{ width: "100%" }}
      >
        <Typography color="text.secondary">
          Do you have an account already?
        </Typography>
        <Link href={AppRoutes.login} variant="body2">
          Login
        </Link>
      </Stack>
    </Box>
  );
}
