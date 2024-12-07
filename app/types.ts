export interface TestimonialProps {
  name: string;
  content: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
}

export interface NavLinkProps {
  label: string;
}

export interface FooterColumnProps {
  title: string;
  links: string[];
}
