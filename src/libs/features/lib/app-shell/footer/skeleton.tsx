import { Container, FlexBox, Skeleton } from "@maverick/ui";

import { MainNavigationSkeleton } from "../../navigations";

export const FooterSkeleton = () => {
  return (
    <FlexBox
      component="header"
      alignItems="center"
      justifyContent="center"
      style={{
        backgroundColor: "common.white",
        position: "fixed",
        top: 0,
        height: "80px",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container>
        <FlexBox alignItems="center" justifyContent="space-between">
          <Skeleton width={250} height={48} />
          <MainNavigationSkeleton />
        </FlexBox>
      </Container>
    </FlexBox>
  );
};
