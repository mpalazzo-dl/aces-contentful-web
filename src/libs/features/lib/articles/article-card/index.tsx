import { Locale } from "@aces/i18n";
import {
  CfImageProps,
  ResponsiveSpacing,
  RouteDirectory,
} from "@aces/types";
import { formatDate } from "@aces/utils";
import { Avatar, Card, FlexBox, H4, LinkWrapper, Text } from "@aces/ui";

export interface ArticleCardProps {
  featuredImage: CfImageProps;
  title: string;
  author: {
    name: string;
    profileImage: CfImageProps;
  };
  publishDate: string;
  mediaHeight?: ResponsiveSpacing;
  slug: string;
  lang: Locale;
}

export const ArticleCard = ({
  featuredImage,
  title,
  author,
  publishDate,
  mediaHeight = { xs: 200, md: 380 },
  slug,
  lang,
}: ArticleCardProps) => {
  return (
    <LinkWrapper href={`${RouteDirectory.Articles}/${slug}`} passHref>
      <Card borderRadius="12px">
        <Card.ActionArea>
          <Card.Media
            imageSize="fill"
            alt={featuredImage.altText}
            image={featuredImage.image.url}
            height={mediaHeight}
          />
          <Card.Content paddingX={{ xs: 4, md: 8 }} paddingY={{ xs: 4, md: 8 }}>
            <H4 component="p" marginBottom={10}>
              {title}
            </H4>
            <FlexBox
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              justifyContent="space-between"
            >
              <FlexBox alignItems="center" marginBottom={{ xs: 4, md: 0 }}>
                <Avatar
                  image={author.profileImage.image.url}
                  size={48}
                  alt={author.profileImage.altText}
                />
                <Text.Small style={{ marginLeft: 5 }}>{author.name}</Text.Small>
              </FlexBox>
              <Text.Small>{formatDate(publishDate, lang)}</Text.Small>
            </FlexBox>
          </Card.Content>
        </Card.ActionArea>
      </Card>
    </LinkWrapper>
  );
};
