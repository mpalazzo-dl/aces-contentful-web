"use client";

import { useEffect, useState } from "react";

import { Locale } from "@maverick/i18n";
import { generateId } from "@maverick/utils";
import { useGetLocale } from "@maverick/hooks";
import { palette } from "@maverick/theme";
import { Box, Col, Container, Row, Text, Skeleton } from "@maverick/ui";

import { fetchTopResults } from "../services";
import { ResultsCard } from "../search-results";

interface TopSearchResultsProps {
  query?: string | null;
  preview: boolean;
  lang: Locale;
}

export const TopSearchResults = ({
  query,
  preview,
  lang,
}: TopSearchResultsProps) => {
  const [topResults, setTopResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t, loading } = useGetLocale(lang, "common");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      setIsLoading(true);
      try {
        const results = await fetchTopResults(query, preview, lang);
        setTopResults(results);
      } catch (error) {
        console.error("Error fetching top search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query, preview, lang]);

  if (!query) {
    return null;
  }

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box
      style={{ background: palette.grey[50] }}
      paddingTop={6}
      paddingBottom={8}
    >
      <Container>
        {loading ? (
          <Skeleton variant="text" width={60} />
        ) : (
          <Text.SubtitleSmall marginBottom={4}>
            {t.search.topResultsHeader}
          </Text.SubtitleSmall>
        )}
        <Row columnSpacing={4} rowSpacing={4} alignItems={"stretch"}>
          {topResults.map((item) => (
            <Col
              key={generateId(item.slug)}
              size={{ xs: 12, md: 6 }}
              style={{ display: "flex", width: "100%" }}
            >
              <ResultsCard
                title={item.title}
                slug={item.slug}
                excerpt={item.excerpt}
                keywords={item.keywords}
                __typename={item.__typename}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
};
