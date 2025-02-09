import { gql } from "@apollo/client";

import { cfClient, cfPreviewClient, LinkFragment } from "@maverick/contentful";

export const MenuItemFragment = gql`
  ${LinkFragment}

  fragment MenuItem on MenuItem {
    internalTitle
    title
    link {
      ...Link
    }
    sys {
      id
    }
  }
`;

export const DropdownMenuFragment = gql`
  ${MenuItemFragment}

  fragment DropdownMenu on DropdownMenu {
    internalTitle
    title
    menuItemsCollection(limit: 8) {
      items {
        ...MenuItem
      }
    }
    sys {
      id
    }
  }
`;

export const HeaderNavigationsQuery = gql`
  ${MenuItemFragment}
  ${DropdownMenuFragment}

  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        mainNavigationCollection(limit: 8) {
          items {
            ...MenuItem
            ...DropdownMenu
          }
        }
      }
    }
  }
`;

export const FooterNavigationsQuery = gql`
  ${MenuItemFragment}

  query ($id: String!, $preview: Boolean!, $lang: String!) {
    appsCollection(
      where: { appId: $id }
      limit: 1
      preview: $preview
      locale: $lang
    ) {
      items {
        footerNavigationCollection(limit: 10) {
          items {
            ...MenuItem
          }
        }
        privacyNavigationCollection(limit: 10) {
          items {
            ...MenuItem
          }
        }
      }
    }
  }
`;

export const fetchHeaderNavigationsData = async (
  id: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: HeaderNavigationsQuery,
      variables: { id, preview, lang },
    });

    return {
      mainNavigation:
        response.data.appsCollection.items[0].mainNavigationCollection.items,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchFooterNavigationsData = async (
  id: string,
  preview: boolean,
  lang: string,
) => {
  const client = preview ? cfPreviewClient : cfClient;

  try {
    const response = await client.query({
      query: FooterNavigationsQuery,
      variables: { id, preview, lang },
    });

    return {
      footerNavigation:
        response.data.appsCollection.items[0].footerNavigationCollection.items,
      privacyNavigation:
        response.data.appsCollection.items[0].privacyNavigationCollection.items,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
