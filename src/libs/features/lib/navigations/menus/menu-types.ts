import { CfButtonProps } from "@aces/cf";
import { CfLinkProps } from "@aces/types";

export type CfMenuItemType = {
  internalTitle: string;
  title: string;
  link: CfLinkProps;
  externalLinkIcon?: boolean;
  __typename: string;
};

export type CfDropDownMenuType = {
  internalTitle: string;
  title: string;
  menuItemsCollection: {
    items: CfMenuItemType[];
  };
  __typename: string;
};

export const isCfMenuItem = (item: any): item is CfMenuItemType => {
  return "link" in item;
};

export const isCfDropDownMenu = (item: any): item is CfDropDownMenuType => {
  return "menuItemsCollection" in item;
};

export const isCfButton = (item: any): item is CfButtonProps => {
  return "buttonStyle" in item;
};
