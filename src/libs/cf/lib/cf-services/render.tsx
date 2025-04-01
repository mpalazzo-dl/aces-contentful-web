import { ContentfulLivePreview } from "@contentful/live-preview";

import {
  CfBaseComponent,
  Nested,
} from "@maverick/types";
import { generateId } from "@maverick/utils";
import { componentSpacing } from "@maverick/theme";
import { Box, Col, Container, FlexBox, H4, Icon, IconEnum, Row } from "@maverick/ui";
import { CfOfferingItem, CfOfferingItemProps } from "../cf-offering-item/render";

export interface CfServicesProps extends CfBaseComponent, Nested {
  headline: string;
  icon?: keyof typeof IconEnum;
  offeringItems: CfOfferingItemProps[];
  total: number;
}

export const CfServices = ({
  internalTitle,
  headline,
  icon,
  offeringItems,
  __typename,
  id,
  lang,
  preview,
  total,
  nested = false,
}: CfServicesProps) => {

  const leftColumnOfferingItems = offeringItems?.slice(0, -total/2);
  const rightColumnOfferingItems = offeringItems?.slice(-total/2);

  const colSize = {xs: 12, md:6};

  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{ xs: componentSpacing.xs, md: componentSpacing.md }}
    >
      <Container nested={nested}>
        <FlexBox flexDirection={"column"} gap={15}>
          <FlexBox justifyContent={"space-between"}>
            <H4 style={{fontSize: "1.875rem"}}>
              {headline}
            </H4>
            <Icon 
              size={52}
              icon={icon as IconEnum}
            />
          </FlexBox>
          <Row rowSpacing={12} columnSpacing={nested ? 8 : 12}>
            <Col size={colSize}>
              <FlexBox flexDirection={"column"} gap={12}>
                {leftColumnOfferingItems && (
                  leftColumnOfferingItems.map((item, index) => {
                    return (
                      <CfOfferingItem
                        key={index}
                        internalTitle={item.internalTitle}
                        headline={item.headline}
                        bodyCopy={item.bodyCopy}
                        __typename={item.__typename}
                        id={item.id}
                        lang={lang}
                        preview={preview}
                      />
                    )
                  })
                )}
              </FlexBox>
            </Col>
            <Col size={colSize}>
              <FlexBox flexDirection={"column"} gap={12}>
                {rightColumnOfferingItems && (
                  rightColumnOfferingItems.map((item, index) => {
                    return(
                      <CfOfferingItem
                      key={index}
                      internalTitle={item.internalTitle}
                      headline={item.headline}
                      bodyCopy={item.bodyCopy}
                      __typename={item.__typename}
                      id={item.id}
                      lang={lang}
                      preview={preview}
                      />
                    )
                  })
                )}
              </FlexBox>
            </Col>
          </Row>
        </FlexBox>
      </Container>
    </Box>
  );
};
  