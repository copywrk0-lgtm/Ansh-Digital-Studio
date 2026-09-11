import type { Metadata } from 'next';
import { site } from './site';

export const baseMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Wedding Photographer in Delhi | Ansh Digital Studio',
    template: '%s | Ansh Digital Studio',
  },
  description:
    'Wedding photography, candid portraits, pre-wedding stories and videography by Ansh Digital Studio. Established in 2015 and available for celebrations in Delhi and beyond.',
  keywords: [
    'wedding photographer Delhi',
    'wedding photography Delhi',
    'candid wedding photographer',
    'pre wedding photography Delhi',
    'wedding videography Delhi',
    'Ansh Digital Studio',
  ],
  openGraph: {
    title: 'Ansh Digital Studio — Wedding Photography in Delhi',
    description:
      'Warm, people-led wedding photography and videography for celebrations in Delhi and beyond.',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/images/wedding-collage-wide.jpg', width: 1964, height: 801, alt: 'Wedding photography by Ansh Digital Studio' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ansh Digital Studio — Wedding Photography in Delhi',
    description: 'Wedding photography, candid portraits, pre-weddings and videography.',
    images: ['/images/wedding-collage-wide.jpg'],
  },
};
