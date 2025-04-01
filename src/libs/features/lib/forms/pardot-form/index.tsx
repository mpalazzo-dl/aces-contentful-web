"use client";

import { ResponsiveSpacing } from "@maverick/types";
import { Box } from "@maverick/ui";

export interface PardotFormProps {
  pardotFormUrl: string;
  height?: ResponsiveSpacing;
  __typename?: string;
}

export const PardotForm = ({ pardotFormUrl }: PardotFormProps) => {
  return (
    <Box style={{ width: "100%" }}>
      <div
        style={{ width: "100%" }}
        dangerouslySetInnerHTML={{ __html: pardotFormUrl }}
      />
    </Box>
  );
};
