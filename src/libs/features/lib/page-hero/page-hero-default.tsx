import { CfImageOverlayHeroServer } from "@maverick/cf";
import { defaultLocale } from "@maverick/i18n";
import { PageHeroProps } from "./page-hero-types";

export const DefaultPageHero = ({
  item,
  preview = false,
  lang = defaultLocale,
}: PageHeroProps) => {
  if (item === null) {
    return null;
  }

  switch (item.__typename) {
    case "ImageOverlayHero":
      return (
        <CfImageOverlayHeroServer
          id={item?.sys?.id || ""}
          preview={preview}
          lang={lang}
        />
      );
    default:
      return null;
  }
};
