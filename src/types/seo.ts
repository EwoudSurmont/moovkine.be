export interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonicalURL?: string;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  image: string;
  url: string;
  type?: string;
  locale?: string;
  siteName?: string;
}

export interface TwitterCardProps {
  title: string;
  description: string;
  image: string;
  card?: "summary" | "summary_large_image" | "app" | "player";
}
