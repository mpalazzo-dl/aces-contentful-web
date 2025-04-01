import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { palette, shape } from "@maverick/theme";
import { Box, FlexBox, Icon, IconEnum, Text } from "@maverick/ui";

export interface CfIconCardProps extends CfBaseComponent {
  icon: string;
  caption: string;
}

export const CfIconCard = ({
  internalTitle,
  icon,
  caption,
  __typename,
  id,
  lang,
}: CfIconCardProps) => {
  return (
    <FlexBox
      id={generateId(internalTitle)}
      data-component={__typename}
      alignItems="center"
      flexDirection="column"
      gap={2}
    >
      <FlexBox
        alignItems="center"
        borderRadius={shape.borderRadius}
        justifyContent="center"
        width={140}
        height={140}
        style={{
          backgroundColor: palette.primary.light,
        }}
      >
        {icon && (
          <Icon
            icon={icon as IconEnum}
            size={106}
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "icon",
              locale: lang,
            })}
          />
        )}
      </FlexBox>
      <Box maxWidth={140} textAlign="center">
        {caption && (
          <Text
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "caption",
              locale: lang,
            })}
          >
            {caption}
          </Text>
        )}
      </Box>
    </FlexBox>
  );
};
