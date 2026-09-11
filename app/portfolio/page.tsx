import type {Metadata} from 'next';
import {PageHero} from '@/components/sections/PageHero';
import {GalleryGrid} from '@/components/sections/GalleryGrid';
import {CtaSection} from '@/components/sections/CtaSection';
export const metadata:Metadata={title:'Wedding Photography Portfolio',description:'Explore selected wedding, bridal, portrait and celebration photography by Ansh Digital Studio.'};
export default function Portfolio(){return <main><PageHero eyebrow='Portfolio' title={<>Photography first.<br/><em>Memories that stay elegant.</em></>} copy='A tighter, cleaner portfolio built around wedding portraits, bridal frames, ceremony moments and a small number of album-design samples.'/><GalleryGrid/><CtaSection/></main>}
