import { CfCollectionItems } from "@maverick/types";
import { Chip, FlexBox } from "@maverick/ui";
import { ArticleFeatures } from "../../../config";

interface ArticleTagsProps {
  categoriesCollection: CfCollectionItems;
}

export const ArticleTags = ({
  categoriesCollection,
  ...rest
}: ArticleTagsProps) => {
  if (!ArticleFeatures.ShowArticleCategoryTags) return null;

  return (
    <FlexBox flexWrap="wrap" marginY={6} {...rest}>
      {categoriesCollection.items.map(
        (category: { title: string; slug: string }) => (
          <Chip
            key={category.slug}
            label={category.title}
            uppercase={false}
            style={{
              marginRight: "16px",
              marginBottom: { xs: "16px", sm: 0 },
            }}
          />
        ),
      )}
    </FlexBox>
  );
};
