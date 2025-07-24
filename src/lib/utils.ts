import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FOOTER_TEXT = 'High Development';

export const LOGO_URL = '/logo-high.png';

export const OPEN_GRAPH = {
  url: 'https://www.high-development.com.br',
  title: 'High Development',
  description: FOOTER_TEXT,
  images: [
    {
      url: LOGO_URL,
      alt: 'High Development Logo',
    },
  ],
};

export const getMetadata = (title: string) => ({
  title,
  description: `${title} - ${FOOTER_TEXT}`,
  openGraph: OPEN_GRAPH,
});
