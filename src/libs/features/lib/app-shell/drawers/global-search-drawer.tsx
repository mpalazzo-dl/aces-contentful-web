"use client";

import { useUIState } from "@maverick/store";
import { palette } from "@maverick/theme";
import { Slide, Container, FlexBox } from "@maverick/ui";

interface GlobalSearchDrawerProps {
  children: React.ReactNode;
}

export const GlobalSearchDrawer = ({ children }: GlobalSearchDrawerProps) => {
  const { searchOpen } = useUIState();

  return (
    <Slide in={searchOpen} direction="down" mountOnEnter unmountOnExit>
      <FlexBox
        paddingTop={2}
        paddingBottom={5}
        style={{
          backgroundColor: palette.common.white,
          boxShadow: "0 12px 12px rgba(0, 0, 0, 0.08)",
          position: "absolute",
          width: "100%",
        }}
      >
        <Container>{children}</Container>
      </FlexBox>
    </Slide>
  );
};
