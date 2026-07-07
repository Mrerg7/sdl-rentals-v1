export const SITE = {
  name: "sdl.rentals",
  title: "SDL.Rentals | Premium Domain for Scottsdale AZ Rentals • Vacation & Luxury Homes",
  description:
    "SDL.Rentals — The rare, premium .rentals domain perfectly positioned to capture all rental properties in Scottsdale, AZ. Ideal for vacation rentals, luxury home rentals, property management, or a Scottsdale rental marketplace.",
  url: "https://sdl.rentals/",
  email: "sales@desertrich.com",
  locale: "en_US",
  location: "Scottsdale, Arizona",
  keywords:
    "SDL.Rentals, Scottsdale rentals domain for sale, vacation rentals Scottsdale domain, luxury home rentals Scottsdale, premium .rentals domain Arizona"
} as const;

export const CF_IMAGES = {
  accountHash: "-sPAUAWeA405NiWJ0SNIQA",
  heroImageId: "3e5fb84a-7803-415b-daf5-4d21bdcca700"
} as const;

export function cfImageUrl(imageId: string, variant = "public"): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent("SDL.Rentals Domain Acquisition Inquiry")}&body=${encodeURIComponent("Hello,\n\nI am interested in acquiring sdl.rentals.\n\nIntended use:\nBudget range:\n\nThank you.")}`;

export const DISCLAIMER_DATE = "July 7, 2026";
