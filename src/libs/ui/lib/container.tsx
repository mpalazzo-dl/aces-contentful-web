import { containerPadding } from "@maverick/theme";
import MuiContainer, {
  ContainerProps as MuiContainerProps,
} from "@mui/material/Container";

interface ContainerProps
  extends Pick<MuiContainerProps, "maxWidth" | "disableGutters" | "children"> {
  noPadding?: boolean;
  nested?: boolean;
  style?: object;
}

export const Container = ({
  nested = false,
  disableGutters = nested,
  noPadding = nested,
  maxWidth = nested ? false : "xl",
  style,
  children,
  ...props
}: ContainerProps) => {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        ...(!noPadding && {
          paddingLeft: containerPadding,
          paddingRight: containerPadding,
        }),
        flexDirection: "column",
        ...style,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};
