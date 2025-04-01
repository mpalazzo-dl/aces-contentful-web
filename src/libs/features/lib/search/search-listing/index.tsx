"use client";

import { useEffect, useState } from "react";

import { defaultLocale, Locale } from "@maverick/i18n";
import { useQueryParam } from "@maverick/hooks";
import { Col, Container, Row } from "@maverick/ui";

import { PaginationUrlParam } from "../../../config";
import { Pagination } from "../../pagination";
import {
  GlobalSearchQuery,
  SearchableContentTypes,
  SearchConfig,
  SearchContentTypeQuery,
} from "../config";
import { fetchSearchResults } from "../services";
import { ResultsItem } from "../search-results";
import { SearchTabs } from "./search-tabs";

interface SearchListingProps {
  initialResults: any[];
  initialTotal: number;
  preview?: boolean;
  lang?: Locale;
}

export const SearchListing = ({
  initialResults,
  initialTotal,
  preview = false,
  lang = defaultLocale,
}: SearchListingProps) => {
  const { getQueryParam, setQueryParam } = useQueryParam();

  const [results, setResults] = useState(initialResults);
  const [total, setTotal] = useState(initialTotal);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUpdatedResults = async () => {
    const contentTypeParam = getQueryParam(SearchContentTypeQuery)
      ? getQueryParam(SearchContentTypeQuery)
      : SearchConfig.DefaultSearchContentType;
    const queryParam = getQueryParam(GlobalSearchQuery)
      ? getQueryParam(GlobalSearchQuery)
      : null;

    const contentType = contentTypeParam as SearchableContentTypes;
    const query = queryParam as typeof GlobalSearchQuery;

    setIsLoading(true);

    try {
      const { items: newResults, total: updatedTotal } =
        await fetchSearchResults(
          contentType,
          query,
          SearchConfig.ListingLimit,
          0,
          preview,
          lang,
        );

      setResults(newResults);
      setTotal(updatedTotal);
    } catch (error) {
      console.error("Error fetching updated results:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadPage = async (page: number) => {
    try {
      const contentTypeParam = getQueryParam(SearchContentTypeQuery)
        ? getQueryParam(SearchContentTypeQuery)
        : SearchConfig.DefaultSearchContentType;
      const queryParam = getQueryParam(GlobalSearchQuery)
        ? getQueryParam(GlobalSearchQuery)
        : null;

      const contentType = contentTypeParam as SearchableContentTypes;
      const query = queryParam as typeof GlobalSearchQuery;

      const offset = (page - 1) * SearchConfig.ListingLimit;

      const { items: newResults, total: updatedTotal } =
        await fetchSearchResults(
          contentType,
          query,
          SearchConfig.ListingLimit,
          offset,
          preview,
          lang,
        );

      setResults(newResults);
      setTotal(updatedTotal);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (!getQueryParam(SearchContentTypeQuery)) {
      setQueryParam(
        SearchContentTypeQuery,
        SearchConfig.DefaultSearchContentType,
      );
    }
  }, [getQueryParam(GlobalSearchQuery)]);

  useEffect(() => {
    fetchUpdatedResults();
  }, [getQueryParam(SearchContentTypeQuery), getQueryParam(GlobalSearchQuery)]);

  useEffect(() => {
    const pageParam = getQueryParam(PaginationUrlParam);
    const pageValue = pageParam ? parseInt(pageParam, 10) : 1;

    loadPage(pageValue);
  }, [getQueryParam(PaginationUrlParam)]);

  return (
    <Container>
      <SearchTabs />
      <Row columnSpacing={5} rowSpacing={7} marginTop={8}>
        {isLoading ? (
          <>Loading</>
        ) : (
          <>
            {results.map((item: any) => (
              <Col key={item.slug} size={{ xs: 12 }}>
                <ResultsItem
                  title={item.title}
                  slug={item.slug}
                  excerpt={item.excerpt}
                  keywords={item.keywords}
                  __typename={item.__typename}
                />
              </Col>
            ))}
          </>
        )}
        <Pagination count={Math.ceil(total / SearchConfig.ListingLimit)} />
      </Row>
    </Container>
  );
};
