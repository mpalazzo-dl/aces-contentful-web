import React from "react";
import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfBaseComponent, CfLinkProps } from "@aces/types";
import { typography } from "@aces/theme";
import { InlineBox } from "@aces/ui";

import { CfLink } from "../cf-link/render";

export interface CfLinkTextProps extends CfBaseComponent {
  link: CfLinkProps;
  title: string;
}

export const CfTextLink = ({ link, title, id, lang }: CfLinkTextProps) => {
  return (
    <CfLink
      linkType={link.linkType}
      pageLink={link.pageLink}
      customLink={link.customLink}
      target={link.target}
      lang={lang}
    >
      <InlineBox
        component="span"
        style={typography.link}
        {...ContentfulLivePreview.getProps({
          entryId: id,
          fieldId: "title",
          locale: lang,
        })}
      >
        {title}
      </InlineBox>
    </CfLink>
  );
};
