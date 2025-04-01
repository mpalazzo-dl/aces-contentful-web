import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  CfImageProps,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing, palette } from "@maverick/theme";
import { Box, Container, H3, Text, Row, Col, FlexBox } from "@maverick/ui";

import { CfButton, CfButtonProps } from "../cf-button/render";
import { CfImage } from "../cf-image/render";



export interface CfBannerProps extends CfBaseComponent {
  headline?: string;
  subhead?: string;
  button?: CfButtonProps;
  media: CfImageProps;
  mediaAlignment: string;
  theme: string;
}

export const CfBanner = ({
  internalTitle,
  headline,
  subhead,
  button,
  media,
  mediaAlignment,
  theme,
  __typename,
  id,
  lang,
  preview,
}: CfBannerProps) => {
  const color = theme === "Primary Gradient" ? "common.white" : "text.primary";
  const align = mediaAlignment === "Center" ? "center" : "left";
  return (
    <Box 
      id={generateId(internalTitle)}
      data-component={__typename}
      paddingY={{ xs: componentSpacing.lg, 
                  md: componentSpacing.xl,
      }}
      style={{
        background:
          theme === "Blue Gray" ? palette.tertiary.grayblue 
          : mediaAlignment === "Right" ? palette.gradient.primaryMainLight270 
          : palette.gradient.primaryMainLight90,
      }}
    >
      <Container>
        <Row
          alignItems={"center"}
          flexDirection={{
            xs: "column-reverse",
            md: mediaAlignment === "Right" ? "row"
              : mediaAlignment === "Left" ? "row-reverse"
              : "column-reverse"
          }}
        >
        {(headline || subhead || button) && (
          <Col size={{xs: 12, md: 6}}>
            <FlexBox
              maxWidth={mediaAlignment === "Center" ? "800px" : "500px"}
              flexDirection={"column"}
              alignItems={ mediaAlignment === "Center" ? "center" : "start"}
              marginLeft={mediaAlignment === "Left" ? "auto" : "0px"}
              height={"100%"}
              gap={4}
              
            >
              {headline && (
                <H3
                  align={align}
                  color={color}
                  marginBottom={2}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "headline",
                    locale: lang,
                  })}
                >
                  {headline}
                </H3>
              )}
              {subhead && (
                <Text 
                  align={align}
                  color={color}
                  {...ContentfulLivePreview.getProps({
                    entryId: id,
                    fieldId: "subhead",
                    locale: lang,
                  })}
                >
                  {subhead}
                </Text>
              )}
              {button && (
                <CfButton 
                internalTitle={button.internalTitle}
                title={button.title}
                link={button.link}
                buttonStyle={button.buttonStyle}
                __typename={button.__typename}
                id={button?.sys?.id || ""}
                preview={preview}
                lang={lang}
                />
              )}
            </FlexBox>
          </Col>
        )}
        {media && (
          <Col size={{xs: 12, md: 6}}>
            <FlexBox 
              flexDirection={"column"}
              // minWidth={"300px"}
              >
              <CfImage
                internalTitle={media.internalTitle}
                image={media.image}
                __typename={media.__typename}
                id={id}
                lang={lang}
                preview={preview}
              />
            </FlexBox>
          </Col>
        )}
        </Row>
      </Container>
    </Box>
  );
};
