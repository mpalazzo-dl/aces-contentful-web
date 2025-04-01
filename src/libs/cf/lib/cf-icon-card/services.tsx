import { gql } from "@apollo/client";

import { defaultLocale } from "@maverick/i18n";
import { cfClient, cfPreviewClient } from "@maverick/contentful";

export const IconCardFragment = gql`
  fragment IconCardFragment on IconCard {
    internalTitle
    icon
    caption
    sys {
      id
    }
  }
`;

export const IconCardQuery = gql`
  ${IconCardFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    iconCard(id: $id, preview: $preview, locale: $locale) {
      ...IconCard
    }
  }
`;

export const fetchIconCardData = async (
  id: string,
  preview = false,
  locale: string = defaultLocale,
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: IconCardQuery,
      variables: { id, preview, locale },
    });

    return response.data.iconCard;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
