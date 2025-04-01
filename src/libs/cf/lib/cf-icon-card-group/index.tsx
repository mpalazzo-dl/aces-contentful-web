import type { CfFetchById, Nested } from "@maverick/types";

import { CfIconCardGroup } from "./render";
import { fetchIconCardGroupData } from "./services";
import { IconCardGroupSkeleton } from "./skeleton";

export interface CfIconCardGroupServerProps extends CfFetchById, Nested {}

export const CfIconCardGroupServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfIconCardGroupServerProps) => {
  let data;

  try {
    data = await fetchIconCardGroupData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <IconCardGroupSkeleton />;
  }

  if (!data) {
    return <IconCardGroupSkeleton />;
  }

  return (
    <CfIconCardGroup
      internalTitle={data.internalTitle}
      headline={data.headline}
      alignment={data.alignment}
      displayType={data.displayType}
      iconCardsCollection={data.iconCardsCollection.items}
      nested={nested}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
