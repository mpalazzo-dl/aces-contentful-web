import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfRichText } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { Box, Container, FlexBox, H5, Icon, IconEnum } from "@maverick/ui";

import { CfRichTextRender } from "../cf-rich-text-render";

export interface CfOfferingItemProps extends CfBaseComponent {
  icon?: string;
  headline: string;
  bodyCopy?: CfRichText;
}

export const CfOfferingItem = ({
  internalTitle,
  __typename,
  icon,
  headline,
  bodyCopy,
  id,
  lang,
}: CfOfferingItemProps) => {
  return (
    <Box id={generateId(internalTitle)} data-component={__typename}>
      <Container nested={true}>
        <FlexBox flexDirection={"column"} justifyContent={"start"} gap={4}>
          {icon && <Icon size={52} icon={icon as IconEnum} />}
          {headline && <H5 fontWeight={"bold"}>{headline}</H5>}
          {bodyCopy && (
            <CfRichTextRender
              lang={lang}
              preview={false}
              richTextDocument={bodyCopy.json}
            />
          )}
        </FlexBox>
      </Container>
    </Box>
  );
};
