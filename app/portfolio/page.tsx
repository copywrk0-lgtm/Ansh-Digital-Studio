import type {Metadata} from 'next';
import {PageHero} from '@/components/sections/PageHero';
import {GalleryGrid} from '@/components/sections/GalleryGrid';
import {CtaSection} from '@/components/sections/CtaSection';
export const metadata:Metadata={title:'Wedding Photography Portfolio',description:'Explore selected wedding, bridal, portrait and celebration photography by Ansh Digital Studio.',alternates:{canonical:'/portfolio'}};
export default function Portfolio(){return <main><PageHero eyebrow='Portfolio' title={<>A few moments<br/><em>worth keeping.</em></>} copy='Wedding portraits, details, celebrations and quieter frames — selected to show how a full day can feel.'/><GalleryGrid/><CtaSection/></main>}
