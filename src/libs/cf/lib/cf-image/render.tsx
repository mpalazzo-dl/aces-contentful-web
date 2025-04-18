import { ContentfulLivePreview } from "@contentful/live-preview";

import { CfImageProps, ResponsiveSpacing } from "@aces/types";
import { generateId } from "@aces/utils";
import { componentSpacing } from "@aces/theme";
import { Box, Container, Image, ImageCover } from "@aces/ui";

import { ImageSkeleton } from "./skeleton";

export const CfImage = ({
  internalTitle,
  image,
  altText = "",
  nested = false,
  responsive = true,
  maxWidth,
  maxHeight,
  __typename,
  id,
  lang,
}: CfImageProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : 0,
        md: !nested ? componentSpacing.md : 0,
      }}
    >
      <Container nested={nested}>
        {!image || !image.url ? (
          <ImageSkeleton
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        ) : (
          <Image
            url={image.url}
            alt={altText}
            width={image.width}
            height={image.height}
            responsive={responsive}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        )}
      </Container>
    </Box>
  );
};

interface CfImageCoverProps extends CfImageProps {
  coverWidth?: ResponsiveSpacing;
  coverHeight?: ResponsiveSpacing;
}

export const CfImageCover = ({
  internalTitle,
  image,
  altText = "",
  nested = false,
  coverWidth = "100%",
  coverHeight = "380px",
  __typename,
  id,
  lang,
}: CfImageCoverProps) => {
  return (
    <Box
      id={generateId(internalTitle)}
      data-component={__typename}
      marginY={{
        xs: !nested ? componentSpacing.xs : "",
        md: !nested ? componentSpacing.md : "",
      }}
      style={{ height: coverHeight }}
    >
      <Container nested={nested} style={{ height: coverHeight }}>
        {!image || !image.url ? (
          <ImageSkeleton
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        ) : (
          <ImageCover
            url={image.url}
            alt={altText}
            width={image.width}
            height={image.height}
            coverWidth={coverWidth}
            coverHeight={coverHeight}
            {...ContentfulLivePreview.getProps({
              entryId: id,
              fieldId: "image",
              locale: lang,
            })}
          />
        )}
      </Container>
    </Box>
  );
};
