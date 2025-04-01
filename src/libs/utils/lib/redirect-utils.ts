import { redirect } from "next/navigation";

import { RouteDirectory, SpecialtyPages } from "@maverick/types";
import { EnableArticles } from "@maverick/features";

export const specialtyPageRedirect = (specialtyPage: string) => {
  if (specialtyPage) {
    switch (specialtyPage) {
      case SpecialtyPages.Homepage:
        redirect(RouteDirectory.Homepage);
      case SpecialtyPages.Articles:
        if (EnableArticles) {
          redirect(RouteDirectory.Articles);
        }
      default:
        break;
    }
  }
};
