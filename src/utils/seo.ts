import type { SEOProps } from "../types/seo";

export const SITE_CONFIG = {
  name: "MOOV",
  url: "https://www.moovkine.be",
  defaultDescription: "MOOV Kine is een multidisciplinaire groepspraktijk voor kinesitherapie en psychotherapie gelegen te Kortemark. Gespecialiseerd in manuele therapie, sportrevalidatie, zwangerschapsbegeleiding en meer.",
  defaultOGImage: "/og-image.jpg",
  locale: "nl_BE",
  themeColor: "#005D5F",
} as const;

export function getSEODefaults(props: SEOProps) {
  return {
    title: `${SITE_CONFIG.name} | ${props.title}`,
    description: props.description || SITE_CONFIG.defaultDescription,
    keywords: props.keywords || [],
    ogImage: props.ogImage || SITE_CONFIG.defaultOGImage,
    noindex: props.noindex || false,
    nofollow: props.nofollow || false,
  };
}
