import { ContentfulLivePreview } from "@contentful/live-preview";

import { Locale } from "@maverick/i18n";
import { CfAlignment, CfBaseComponent, Nested } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Container, FlexBox, Text } from "@maverick/ui";

import { CfIconCard, CfIconCardProps } from "../cf-icon-card/render";

export interface CfIconCardGroupProps extends CfBaseComponent, Nested {
  headline?: string;
  alignment: CfAlignment;
  displayType: "Grid" | "Slider";
  iconCardsCollection: CfIconCardProps[];
}

export const CfIconCardGroup = ({
  internalTitle,
  headline,
  alignment,
  displayType,
  iconCardsCollection,
  __typename,
  nested,
  id,
  lang,
  preview,
}: CfIconCardGroupProps) => {
  const alignmentStyle =
    alignment === "Right"
      ? "flex-end"
      : alignment === "Center"
        ? "center"
        : "flex-start";

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container nested={nested}>
        {headline && (
          <Text.SubtitleSmall marginBottom={4}>{headline}</Text.SubtitleSmall>
        )}
        {displayType === "Slider" ? (
          <>Slider</>
        ) : (
          <IconCardGrid
            alignment={alignmentStyle}
            iconCardsCollection={iconCardsCollection}
            lang={lang}
            preview={preview}
          />
        )}
      </Container>
    </Box>
  );
};

interface IconCardGridSliderProps {
  alignment: "flex-start" | "center" | "flex-end";
  iconCardsCollection: CfIconCardProps[];
  lang: Locale;
  preview: boolean;
}

const IconCardGrid = ({
  alignment,
  iconCardsCollection,
  lang,
  preview,
}: IconCardGridSliderProps) => {
  return (
    <FlexBox
      flexWrap="wrap"
      justifyContent={alignment}
      marginX={{ xs: -1, md: -3 }}
    >
      {iconCardsCollection.map((iconCard) => (
        <Box
          key={generateId(iconCard.internalTitle)}
          marginX={{ xs: 1, md: 2 }}
          marginY={{ xs: 2, md: 4 }}
        >
          <CfIconCard
            internalTitle={iconCard.internalTitle}
            icon={iconCard.icon}
            caption={iconCard.caption}
            __typename={iconCard.__typename}
            id={iconCard?.sys?.id || ""}
            lang={lang}
            preview={preview}
          />
        </Box>
      ))}
    </FlexBox>
  );
};
