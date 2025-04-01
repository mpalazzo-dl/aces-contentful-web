import { defaultLocale, getLocale, Locale } from "@maverick/i18n";
import { RouteDirectory } from "@maverick/types";
import { Icon, Link } from "@maverick/ui";

interface ArticleNavigations {
  showIcon?: boolean;
  lang: Locale;
}

export const BackToArticleListing = async ({
  showIcon = true,
  lang = defaultLocale,
}: ArticleNavigations) => {
  const t = await getLocale(lang, "common");

  return (
    <Link href={RouteDirectory.Articles} color="primary">
      {showIcon && <Icon icon="ChevronLeft" />}
      {t.postType.backToArticleListing}
    </Link>
  );
};
