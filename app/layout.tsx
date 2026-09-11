import type {Metadata} from 'next';
import './globals.css';
import './polish.css';
import './final-polish.css';
import './mobile-first.css';
import './responsive.css';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {MobileBar} from '@/components/layout/MobileBar';
import {baseMetadata} from '@/lib/seo';
import {site} from '@/lib/site';

export const metadata:Metadata=baseMetadata;

export default function RootLayout({children}:{children:React.ReactNode}){
  const structuredData={
    '@context':'https://schema.org',
    '@type':'ProfessionalService',
    '@id':`${site.url}/#business`,
    name:site.name,
    url:site.url,
    telephone:site.phone,
    image:`${site.url}/images/wedding-collage-wide.jpg`,
    foundingDate:site.established,
    address:{'@type':'PostalAddress',streetAddress:'Block D, Laxmi Nagar',addressLocality:'Delhi',postalCode:'110092',addressCountry:'IN'},
    areaServed:['Delhi','India'],
    sameAs:[site.instagram],
    aggregateRating:{'@type':'AggregateRating',ratingValue:site.rating,reviewCount:site.reviewCount,bestRating:'5'},
    serviceType:['Wedding Photography','Pre-Wedding Photography','Portrait Photography','Wedding Videography','Event Photography'],
  };
  return <html lang='en'>
    <head>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous'/>
    </head>
    <body><Header/>{children}<Footer/><MobileBar/><script type='application/ld+json' dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/></body>
  </html>;
}
