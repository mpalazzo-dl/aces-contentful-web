import { gql } from "@apollo/client";

export const DefaultPageBodyQuery = gql`
  query ($id: String!, $preview: Boolean!) {
    page(id: $id, preview: $preview) {
      pageBodyCollection {
        items {
          ... on Image {
            sys {
              id
            }
          }
          ... on Lockup {
            sys {
              id
            }
          }
          ... on RichTextSection {
            sys {
              id
            }
          }
          ... on VideoEmbed {
            sys {
              id
            }
          }
          __typename
        }
      }
    }
  }
`;

export const PageQuery = gql`
  query ($slug: String!, $preview: Boolean!) {
    pageCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
      items {
        title
        slug
        specialtyPage
        seo
        sys {
          id
        }
      }
    }
  }
`;

export const SpecialtyPageQuery = gql`
  query ($specialtyPage: String!, $preview: Boolean!) {
    pageCollection(
      where: { specialtyPage: $specialtyPage }
      limit: 1
      preview: $preview
    ) {
      items {
        title
        slug
        seo
        pageHero {
          __typename
          sys {
            id
          }
        }
        sys {
          id
        }
      }
    }
  }
`;
