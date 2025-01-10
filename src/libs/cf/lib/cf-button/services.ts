import { gql } from "@apollo/client";

import {
  ButtonFragment,
  cfClient,
  cfPreviewClient,
} from "@maverick/contentful";

export const ButtonQuery = gql`
  ${ButtonFragment}

  query ($id: String!, $preview: Boolean!, $locale: String) {
    button(id: $id, preview: $preview, locale: $locale) {
      ...Button
    }
  }
`;

export const fetchButton = async (
  id: string,
  preview = false,
  locale: string = "en-US",
) => {
  const client = preview ? cfPreviewClient : cfClient;
  try {
    const response = await client.query({
      query: ButtonQuery,
      variables: { id, preview, locale },
    });

    return response.data.button;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
