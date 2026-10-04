export const SITE = {
  name: "sdl.rentals",
  title: "sdl.rentals | Premium Domain for Sale | SDL Rentals Scottsdale",
  description:
    "sdl.rentals for sale — premium .rentals domain for Scottsdale vacation, luxury & long-term rentals. Asking $55k (serious offers from $28k). Secure Escrow.com transfer. Inquire now — 1 of 1 asset.",
  url: "https://sdl.rentals/",
  email: "sales@desertrich.com",
  locale: "en_US",
  location: "Scottsdale, Arizona",
  keywords:
    "buy .rentals domains, sdl.rentals for sale, premium domain names, Scottsdale rentals domain, vacation rental domain for sale, luxury rentals domain, investment domains, brandable domains, expired domains, domain marketplace",
  googleSiteVerification: "cciv_c_o-7QJG5jMYq57oXO5M6zV8SMDFZTl-805YTc"
} as const;

export const CF_IMAGES = {
  accountHash: "-sPAUAWeA405NiWJ0SNIQA",
  heroImageId: "3e5fb84a-7803-415b-daf5-4d21bdcca700"
} as const;

export function cfImageUrl(imageId: string, variant = "public"): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const PUBLISHED_DATE = "2026-10-04";

/** Asking price for Product/Offer structured data (USD). */
export const DOMAIN_PRICE = {
  price: "55000.00",
  minPrice: 28000,
  maxPrice: 55000,
  currency: "USD"
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent("SDL.Rentals Domain Acquisition Inquiry — $55k Asking")}&body=${encodeURIComponent("Hello,\n\nI am interested in acquiring sdl.rentals.\n\nIntended use:\nBudget range:\nTimeline:\n\nThank you.")}`;

export const DISCLAIMER_DATE = "October 4, 2026";
