import { gql } from "@apollo/client";

import { defaultLocale } from "@maverick/i18n";
import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const OfferingItemQuery = gql`
  query ($id: String!, $preview: Boolean!, $locale: String) {
    offeringItem(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      icon
      headline
      bodyCopy {
        json
      }
      sys {
        id
      }
    }
  }
`;

export const fetchOfferingItemData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: OfferingItemQuery,
      variables: { id, preview, locale },
    });

    return response.data.offeringItem;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
