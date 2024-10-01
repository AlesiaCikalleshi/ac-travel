import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import { Box, Link, Stack, TextField, Typography } from "@mui/material";

import { AppRoutes } from "@config/routes";
import AppButton from "@features/ui/AppButton";
import { useAppDispatch, useAppSelector } from "@store/index";

import { loginUser } from "../store/authActions";
import { selectAuth } from "../store/authSlice";

interface FormInput {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { handleSubmit, control, onSubmit } = useLoginForm();
  const auth = useAppSelector(selectAuth);

  if (auth) {
    // return <Navigate to={AppRoutes.dashboard} replace />;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ width: "100%" }}
    >
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
            autoFocus
            variant="standard"
            helperText={fieldState.error?.message}
            error={Boolean(fieldState.error)}
            sx={{ mb: { xs: 3, md: 3 }, mt: 0 }}
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
            sx={{ mb: { xs: 3, md: 5 }, mt: 0 }}
            {...field}
          />
        )}
      />
      <AppButton type="submit" fullWidth variant="contained" sx={{ mb: 2 }}>
        Login
      </AppButton>
      <Stack
        justifyContent="center"
        direction="row"
        spacing={0.5}
        sx={{ width: "100%" }}
      >
        <Typography color="text.secondary">
          Dont have an account yet?
        </Typography>
        <Link href={AppRoutes.signUp} variant="body2">
          Sign Up
        </Link>
      </Stack>
    </Box>
  );
}

function useLoginForm() {
  const dispatch = useAppDispatch();
  const { control, handleSubmit } = useForm<FormInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    dispatch(
      loginUser({
        email: data.email,
        password: data.password,
      }),
    );
  };

  return {
    handleSubmit,
    control,
    onSubmit,
  };
}
