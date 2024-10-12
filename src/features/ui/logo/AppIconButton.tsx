import LoadingButton from "@mui/lab/LoadingButton";
import { type SxProps, type Theme } from "@mui/material";

interface Props {
  isSmall?: boolean;
  onClick: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  "aria-label": string;
  children: JSX.Element;
  variant?: "outlined" | "contained";
  disabled?: boolean;
  isLoading?: boolean;
  sx?: SxProps<Theme>;
}

export default function AppIconButton(props: Props) {
  return (
    <LoadingButton
      loading={props.isLoading}
      onClick={props.onClick}
      aria-label={props["aria-label"]}
      variant={props.variant ?? "outlined"}
      disabled={props.disabled}
      sx={{
        borderRadius: 2,
        minWidth: "auto",
        width: { xs: props.isSmall ? 34 : 48, md: props.isSmall ? 34 : 58 },
        height: { xs: props.isSmall ? 34 : 48, md: props.isSmall ? 34 : 58 },
        ...props.sx,
      }}
    >
      {props.children}
    </LoadingButton>
  );
}
