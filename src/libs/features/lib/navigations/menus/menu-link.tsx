"use client";

import { CSSProperties, useState } from "react";

import { defaultLocale } from "@maverick/i18n";
import { CfLinkProps } from "@maverick/types";
import { typography } from "@maverick/theme";
import { FlexBox, Icon, Text } from "@maverick/ui";
import { CfLink } from "@maverick/cf";

interface MenuLinkProps {
  link: CfLinkProps;
  title: string;
  externalLinkIcon?: boolean;
  lang: string;
  fontSize?: string;
  fontFamily?: string;
  style?: CSSProperties;
  hoverEffect?: boolean;
}

export const MenuLink = ({
  link,
  title,
  externalLinkIcon,
  lang = defaultLocale,
  fontSize,
  fontFamily,
  style,
  hoverEffect = false,
}: MenuLinkProps) => {
  const [hover, setHover] = useState(false);

  const handleHover = (hover: boolean) => {
    if (hoverEffect) {
      setHover(hover);
    }
  };

  return (
    <CfLink
      linkType={link.linkType}
      target={link.target}
      pageLink={link.pageLink}
      customLink={link.customLink}
      lang={lang}
      style={style}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <FlexBox alignItems="center">
        <Text
          style={{
            fontSize: fontSize,
            fontFamily: fontFamily,
            transition: "color 100ms",
            color: hover ? typography.link.color : "inherit",
          }}
        >
          {title}
        </Text>
        {externalLinkIcon && (
          <Icon
            icon="OpenInNew"
            size={16}
            marginLeft={2}
            color={hover ? typography.link.color : "inherit"}
          />
        )}
      </FlexBox>
    </CfLink>
  );
};
