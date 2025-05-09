"use client";

import { useUIState } from "@aces/store";
import { palette } from "@aces/theme";
import { Slide, Container, FlexBox } from "@aces/ui";

interface GlobalSearchDrawerProps {
  children: React.ReactNode;
}

export const GlobalSearchDrawer = ({ children }: GlobalSearchDrawerProps) => {
  const { searchOpen } = useUIState();

  return (
    <Slide in={searchOpen} direction="down" mountOnEnter unmountOnExit>
      <FlexBox
        paddingY={14}
        style={{
          backgroundColor: palette.grey[200],
          boxShadow: "0 40px 40px rgba(0, 0, 0, 0.16)",
          position: "absolute",
          width: "100%",
        }}
      >
        <Container maxWidth="md">{children}</Container>
      </FlexBox>
    </Slide>
  );
};
