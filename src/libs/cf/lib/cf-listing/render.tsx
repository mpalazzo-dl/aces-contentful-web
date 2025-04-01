import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfImageProps, Nested } from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing, maxTextWidth, palette } from "@maverick/theme";
import { Box, Col, Container, Row } from "@maverick/ui";

import { CfCardProps } from "../cf-card/render";
import { CfRichTextSectionProps } from "../cf-rich-text-section/render";
import { CfRichTextSectionServer } from "../cf-rich-text-section";
import { CfImageServer } from "../cf-image";
import { CfIconCardGroupServer } from "../cf-icon-card-group";
import { CfServicesServer } from "../cf-services";

export interface CfListingProps extends CfBaseComponent, Nested {
  listingType: "Grid" | "Listing";
  showDividers: boolean;
  gridColumnCount: number;
  listItems: (CfCardProps | CfImageProps | CfRichTextSectionProps)[];
}

export const CfListing = ({
  internalTitle,
  listingType,
  showDividers,
  gridColumnCount,
  listItems,
  __typename,
  nested = false,
  id,
  lang,
  preview,
}: CfListingProps) => {
  const dividerStyle =
    listingType === "Grid"
      ? {
          borderRight: { xs: "none", md: `1px solid ${palette.grey[300]}` },
          borderBottom: { xs: `1px solid ${palette.grey[300]}`, sm: "none" },
          paddingLeft: { xs: 0, sm: 2, md: 6 },
          paddingRight: { xs: 0, sm: 8, md: 24 },
          paddingBottom: { xs: 12, sm: 0, md: 0 },
          marginBottom: { xs: 8, sm: 8, md: 0 },
          "&:first-child": { paddingLeft: 0 },
          "&:nth-child(even)": {
            borderRight: { sm: "none", md: `1px solid ${palette.grey[300]}` },
          },
          "&:nth-child(odd):not(:first-child)": {
            paddingLeft: { sm: 0, md: 6 },
          },
          "&:last-child": {
            borderRight: "none",
            borderBottom: "none",
            paddingBottom: 0,
            marginBottom: 0,
          },
        }
      : {
          borderBottom: `1px solid ${palette.grey[300]}`,
          paddingBottom: 12,
          marginBottom: 8,
          "&:last-child": {
            borderBottom: "none",
            paddingBottom: 0,
            marginBottom: 0,
          },
        };
  const colSize =
    listingType === "Grid"
      ? {
          xs: 12,
          sm: gridColumnCount >= 3 ? 6 : 12,
          md: 12 / gridColumnCount,
        }
      : { xs: 12, sm: 12, md: 10 };

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
      {...ContentfulLivePreview.getProps({
        entryId: id,
        fieldId: "listItems",
        locale: lang,
      })}
    >
      <Container nested={nested}>
        <Row
          spacing={!showDividers && listingType === "Grid" ? 12 : 6}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          {listItems.map((item, index) => {
            const typename = item.__typename;

            switch (typename) {
              case "IconCardGroup":
                return (
                  <Col
                    key={`${id}-${index}`}
                    size={colSize}
                    style={showDividers ? dividerStyle : {}}
                  >
                    <CfIconCardGroupServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                      nested={true}
                    />
                  </Col>
                );
              case "RichTextSection":
                return (
                  <Col
                    key={`${id}-${index}`}
                    size={colSize}
                    style={
                      showDividers
                        ? { maxWidth: maxTextWidth, ...dividerStyle }
                        : { maxWidth: maxTextWidth }
                    }
                  >
                    <CfRichTextSectionServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                      nested={true}
                    />
                  </Col>
                );
              case "Image":
                return (
                  <Col
                    key={`${id}-${index}`}
                    size={colSize}
                    style={showDividers ? dividerStyle : {}}
                  >
                    <CfImageServer
                      id={item?.sys?.id || ""}
                      preview={preview}
                      lang={lang}
                      key={index}
                      nested={true}
                    />
                  </Col>
                );
                case "Services":
                  return (
                    <Col
                      key={`${id}-${index}`}
                      size={colSize}
                      style={showDividers ? dividerStyle : {}}
                    >
                      <CfServicesServer
                        id={item?.sys?.id || ""}
                        preview={preview}
                        lang={lang}
                        key={index}
                        nested={true}
                      />
                    </Col>
                  );
              default:
                return null;
            }
          })}
        </Row>
      </Container>
    </Box>
  );
};
