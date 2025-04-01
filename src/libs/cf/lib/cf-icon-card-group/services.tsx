import { gql } from "@apollo/client";

import { defaultLocale } from "@maverick/i18n";
import { cfClient, cfPreviewClient } from "@maverick/contentful";
import { IconCardFragment } from "../cf-icon-card/services";

export const IconCardGroupQuery = gql`
  ${IconCardFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    iconCardGroup(id: $id, preview: $preview, locale: $locale) {
      internalTitle
      headline
      alignment
      displayType
      iconCardsCollection(limit: 20) {
        items {
          ...IconCardFragment
        }
      }
      sys {
        id
      }
    }
  }
`;

export const fetchIconCardGroupData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: IconCardGroupQuery,
      variables: { id, preview, locale },
    });

    return response.data.iconCardGroup;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
