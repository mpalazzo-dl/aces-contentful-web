import type { CfFetchById } from "@maverick/types";

import { CfIconCard } from "./render";
import { fetchIconCardData } from "./services";
import { IconCardSkeleton } from "./skeleton";

export interface CfIconCardServerProps extends CfFetchById {}

export const CfIconCardServer = async ({
  id,
  preview,
  lang,
}: CfIconCardServerProps) => {
  let data;

  try {
    data = await fetchIconCardData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <IconCardSkeleton />;
  }

  if (!data) {
    return <IconCardSkeleton />;
  }

  return (
    <CfIconCard
      internalTitle={data.internalTitle}
      icon={data.icon}
      caption={data.caption}
      __typename={data.__typename}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
