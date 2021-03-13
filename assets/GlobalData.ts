import { GlobalData } from "./Types";
import { ArmorIcon, DollarsIcon, HouseIcon } from "./Icons";
import Logo from "./Logo";

export const data: GlobalData = {
  headerMenuItemsText: [
    "Design Gallery",
    "List of Architect",
    "Articles",
    "How it Works",
  ],
  dataForSection1: {
    mainTitle: "Build Your Dream House",
    text:
      "The first and most trusted marketplace of design & build house in The World. 100% guaranteed Build safe, comfortable and transparent with a project management for the best result",
    buttonText: "Free Consultation",
    imagePath: "/images/1.png",
  },
  dataForSection2: {
    titleForSection: "Build professional valuable room for you",
    imagesPath: [
      "/images/1.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png",
    ],
  },
  dataForSection3: {
    titleForSection: "Build your needs with Archmove",
    imagePath: "/images/6.png",
    dataForFeaturesSection: [
      {
        iconAsComponent: ArmorIcon({ size: 48 }),
        titleForInformation: "100% guaranteed project completion",
        text:
          "Build safe, comfortable and transparent with a project management application with a joint account.",
      },
      {
        iconAsComponent: DollarsIcon({ size: 48 }),
        titleForInformation: "No additional fees",
        text:
          "There are no hidden costs. The value of the offer you get is the value you paid.",
      },
      {
        iconAsComponent: HouseIcon({ size: 48 }),
        titleForInformation: "Get escort from the Team",
        text:
          "Monitor reports from the Arsitag team who check directly in the field.",
      },
    ],
  },
  dataForSection4: {
    titleForSection: "Sound Too Good To Be True?",
    comments: [
      {
        commentText:
          "We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.",
        author: {
          name: "Adam Morph",
          position: "CEO Alfatech",
        },
      },
      {
        commentText:
          "We just wanted to thank you for this fantastic website! We are so grateful for being able to advertise our Petite cabin and receive feedback from people from all over the U.S. and even further.",
        author: {
          name: "Adam Morph",
          position: "CEO Alfatech",
        },
      },
    ],
  },
  dataForSection5: {
    titleForSection: "Realize your dream project with Archmove",
    buttonText: "Free Consultation",
    imagePath: "/images/section5.png",
  },
  footerData: {
    footerLinksText: [
      "About Us",
      "How it Works",
      "FAQ",
      "Contact Us",
      "Privacy Policy",
    ],
    logoAsComponent: Logo(),
  },
};
