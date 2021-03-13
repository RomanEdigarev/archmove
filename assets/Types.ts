import { ReactComponentElement } from "react";

export type DataForFeatureSection = {
  iconAsComponent: ReactComponentElement<any>;
  titleForInformation: string;
  text: string;
};

export type DataForSection1 = {
  mainTitle: string;
  text: string;
  buttonText: string;
  imagePath: string;
};

export type DataForSection2 = {
  titleForSection: string;
  imagesPath: string[];
};

export type DataForSection3 = {
  titleForSection: string;
  imagePath: string;
  dataForFeaturesSection: DataForFeatureSection[];
};

type Comment = {
  commentText: string;
  author: {
    name: string;
    position: string;
  };
};

export type DataForSection4 = {
  titleForSection: string;
  comments: Comment[];
};

export type DataForSection5 = {
  titleForSection: string;
  buttonText: string;
  imagePath: string;
};

export type FooterData = {
  footerLinksText: string[];
  logoAsComponent: ReactComponentElement<any>;
};

export type GlobalData = {
  headerMenuItemsText: string[];
  dataForSection1: DataForSection1;
  dataForSection2: DataForSection2;
  dataForSection3: DataForSection3;
  dataForSection4: DataForSection4;
  dataForSection5: DataForSection5;
  footerData: FooterData;
};
