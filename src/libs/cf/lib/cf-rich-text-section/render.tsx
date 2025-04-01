import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfAlignment,
  CfBaseComponent,
  CfBorderSelector,
  CfComponentSpacing,
  CfContainerWidth,
  CfRichText,
  Nested,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing, palette } from "@maverick/theme";
import { Box, Container, FlexBox } from "@maverick/ui";
import { CfRichTextRender } from "@maverick/cf";

export interface CfRichTextSectionProps extends CfBaseComponent, Nested {
  alignment: CfAlignment;
  containerWidth: CfContainerWidth;
  cfComponentSpacing?: CfComponentSpacing;
  grayBackground: boolean;
  bodyCopy: CfRichText;
  border: CfBorderSelector;
}

export const CfRichTextSection = ({
  internalTitle,
  alignment,
  containerWidth,
  cfComponentSpacing = "md",
  grayBackground,
  bodyCopy,
  border,
  __typename,
  nested,
  id,
  lang,
  preview,
}: CfRichTextSectionProps) => {
  const isNarrow = containerWidth === "Narrow";
  const hasTopBorder = border === "Top" || border === "Top & Bottom";
  const hasBottomBorder = border === "Bottom" || border === "Top & Bottom";
  const borderStyles = `1px solid ${palette.grey[300]}`;

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      bgcolor={grayBackground ? palette.tertiary.grayblue : undefined}
      paddingY={nested ? 0 : componentSpacing[cfComponentSpacing]}
      style={{
        borderTop: hasTopBorder ? borderStyles : "none",
        borderBottom: hasBottomBorder ? borderStyles : "none",
      }}
    >
      <Container maxWidth={isNarrow ? "md" : "lg"} nested={nested}>
        <FlexBox
          maxWidth={isNarrow ? "700px" : "none"}
          flexDirection="column"
          marginX={"auto"}
        >
          <CfRichTextRender
            richTextDocument={bodyCopy.json}
            alignment={alignment}
            lang={lang}
            preview={preview}
            enableMaxTextWidth
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "bodyCopy",
              locale: lang,
            })}
          />
        </FlexBox>
      </Container>
    </Box>
  );
};
