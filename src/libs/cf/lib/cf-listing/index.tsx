import type { CfFetchById, Nested } from "@maverick/types";

import { CfListing } from "./render";
import { fetchListingData } from "./services";
import { ListingSkeleton } from "./skeleton";

export interface CfListingServerProps extends CfFetchById, Nested {}

export const CfListingServer = async ({
  id,
  preview,
  lang,
  nested,
}: CfListingServerProps) => {
  let data;

  try {
    data = await fetchListingData(id, preview, lang);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <ListingSkeleton />;
  }

  if (!data) {
    return <ListingSkeleton />;
  }

  return (
    <CfListing
      internalTitle={data.internalTitle}
      listingType={data.listingType}
      showDividers={data.showDividers}
      gridColumnCount={data.gridColumnCount}
      listItems={data.listItemsCollection.items}
      __typename={data.__typename}
      nested={nested}
      id={id}
      lang={lang}
      preview={preview}
    />
  );
};
