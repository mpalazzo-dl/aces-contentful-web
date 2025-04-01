"use client";

import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

import { defaultLocale } from "@maverick/i18n";
import { useUIState } from "@maverick/store";
import {
  FormControl,
  Icon,
  IconButton,
  Input,
  InputAdornment,
} from "@maverick/ui";

import { palette } from "@maverick/theme";
import { useGetLocale, useQueryParam } from "@maverick/hooks";
import { ResponsiveSpacing, RouteDirectory } from "@maverick/types";
import {
  GlobalSearchQuery,
  SearchableContentTypes,
  SearchContentTypeQuery,
} from "../config";

interface SearchBarProps {
  maxWidth?: ResponsiveSpacing;
  showSearchClose?: boolean;
  lang: string;
}

export const SearchBar = ({
  maxWidth,
  showSearchClose = false,
  lang = defaultLocale,
}: SearchBarProps) => {
  const router = useRouter();
  const { t, loading } = useGetLocale(lang, "common");
  const { getQueryParam } = useQueryParam();

  const { mobileMenuOpen, setMobileMenuOpen, searchOpen, setSearchOpen } =
    useUIState();
  const [searchValue, setSearchValue] = useState(
    getQueryParam(GlobalSearchQuery) || "",
  );

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (
      event.type === "keydown" &&
      (event as React.KeyboardEvent).key !== "Enter"
    ) {
      return;
    }

    event.preventDefault();

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    if (searchOpen) {
      setSearchOpen(false);
    }

    navigateToSearch(
      searchValue,
      router.push,
      getQueryParam(SearchContentTypeQuery),
    );
  };

  const handleSearchClose = () => {
    setSearchValue(getQueryParam(GlobalSearchQuery) || "");
    setSearchOpen(false);
  };

  return (
    <FormControl style={{ width: "100%", maxWidth: maxWidth }}>
      <Input
        id="site-search"
        backgroundColor={palette.grey[100]}
        placeholder={loading ? "" : t.search.searchbarPlaceholder}
        value={searchValue}
        fullWidth
        onChange={handleSearchInput}
        onKeyDown={handleSearch}
        autoFocus={searchOpen}
        showFeedback={false}
        startAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="site search" onClick={handleSearch}>
              <Icon icon="Search" size={24} />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          showSearchClose ? (
            <InputAdornment position="end">
              <IconButton aria-label="site search" onClick={handleSearchClose}>
                <Icon color={palette.grey[400]} icon="Close" size={24} />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        style={{
          borderRadius: "999px",
          paddingLeft: 1,
        }}
      />
    </FormControl>
  );
};

export const navigateToSearch = (
  query: string,
  navigate: (url: string) => void,
  contentType?: string | null,
) => {
  if (query.trim()) {
    navigate(
      `${RouteDirectory.Search}?${GlobalSearchQuery}=${encodeURIComponent(query)}${contentType ? `&${SearchContentTypeQuery}=${contentType}` : ""}`,
    );
  }
};
