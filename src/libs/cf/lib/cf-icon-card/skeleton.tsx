import { FlexBox, Skeleton } from "@maverick/ui";

export const IconCardSkeleton = () => {
  return (
    <FlexBox flexDirection={"column"} alignItems={"center"} gap={2}>
      <Skeleton width="140px" height="140px" variant="rounded" />
      <Skeleton width="100px" height="12px" variant="text" />
    </FlexBox>
  );
};
