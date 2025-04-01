import { Box, Container, FlexBox, Skeleton } from "@maverick/ui";
import { IconCardSkeleton } from "../cf-icon-card/skeleton";

export const IconCardGroupSkeleton = () => {
  const numberOfCards = 5;

  return (
    <Box>
      <Container>
        <Skeleton
          height={8}
          width={200}
          variant="text"
          style={{
            marginBottom: 4,
          }}
        />
        <FlexBox
          flexWrap="wrap"
          justifyContent="flex-start"
          marginX={{ xs: -1, md: -3 }}
        >
          {Array.from({ length: numberOfCards }).map((_, index) => (
            <Box
              key={index}
              marginX={{ xs: 1, md: 2 }}
              marginY={{ xs: 2, md: 4 }}
            >
              <IconCardSkeleton />
            </Box>
          ))}
        </FlexBox>
      </Container>
    </Box>
  );
};
