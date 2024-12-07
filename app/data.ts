import { TestimonialProps, FeatureProps, FooterColumnProps } from "./types";

export const navLinks = ["about", "pricing", "contact", "buy nfts"];

export const testimonials: TestimonialProps[] = [
  {
    name: "olivia code",
    content: "Greate app! keep working and helping the community grow.",
  },
  {
    name: "olivia code",
    content: "Greate app! keep working and helping the community grow.",
  },
  {
    name: "olivia code",
    content: "Greate app! keep working and helping the community grow.",
  },
];

export const features: FeatureProps[] = [
  {
    title: "built-in analytics to track your nFTs",
    description:
      "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.",
    buttonText: "View our pricing",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2b1f00844c6b7194eb0e2fb1ec57080e5d8526ad2611e0b841082dae18263579?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4",
    imageAlt: "Analytics dashboard interface",
    isReversed: false,
  },
  {
    title: "built-in analytics to track your nFTs",
    description:
      "Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.",
    buttonText: "View our pricing",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1f04a8b1af9a348ae8d38ded6cd580ea576940e74271b3db919ef0fcf9babc81?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4",
    imageAlt: "Analytics tracking interface",
    isReversed: true,
  },
];

export const footerColumns: FooterColumnProps[] = [
  {
    title: "krypto",
    links: ["Home", "About", "Buy NFTs", "Sell NFTs"],
  },
  {
    title: "Market",
    links: ["Browse NFTs", "Buy NFTs", "Sell NFTs"],
  },
  {
    title: "contact",
    links: ["Email", "LinkedIn", "Instagram", "Twitter"],
  },
];
