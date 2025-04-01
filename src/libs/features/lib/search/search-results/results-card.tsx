"use client";

import { useState } from "react";

import { generateId, truncate } from "@maverick/utils";
import { CfLinkTypes, PageLinkTypes } from "@maverick/types";
import { fontWeights, palette, shape, typography } from "@maverick/theme";
import { Box, Card, Chip, FlexBox, H5, Skeleton, Text } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

import { SearchResultsProps } from "./types";

export const ResultsCard = ({
  title,
  slug,
  excerpt,
  keywords,
  __typename,
}: SearchResultsProps) => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <CfLink
      linkType={CfLinkTypes.PageLink}
      pageLink={{
        slug: slug,
        __typename: __typename as PageLinkTypes,
      }}
      customLink={undefined}
      target="_self"
      style={{
        display: "flex",
        width: "100%",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Card
        borderRadius={shape.borderRadius}
        style={{
          background: hover ? palette.grey[100] : palette.common.white,
          transition: "background 80ms ease",
        }}
      >
        <Box padding={5}>
          <Text.Small color="grey.500">{__typename}</Text.Small>
          <H5
            component="p"
            fontWeight={fontWeights.bold}
            marginTop={3}
            marginBottom={3}
            color={hover ? typography.link.color : palette.text.primary}
            style={{
              display: "inline-block",
              transition: "color 80ms ease",
              "&:hover": {},
            }}
          >
            {title}
          </H5>
          {excerpt ? (
            <Text>{truncate(excerpt, 20)}</Text>
          ) : (
            <Box>
              <Skeleton
                variant="text"
                width={"100%"}
                style={{ marginBottom: 1 }}
              />
              <Skeleton
                variant="text"
                width={"80%"}
                style={{ marginBottom: 1 }}
              />
            </Box>
          )}
          {keywords && (
            <FlexBox flexWrap="wrap" marginTop={5}>
              {keywords.map((item) => (
                <Chip
                  key={generateId(item)}
                  label={item}
                  uppercase={false}
                  size="small"
                  color="primary"
                  style={{
                    marginRight: 2,
                  }}
                />
              ))}
            </FlexBox>
          )}
        </Box>
      </Card>
    </CfLink>
  );
};
