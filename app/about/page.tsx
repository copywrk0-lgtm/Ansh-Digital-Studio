import type {Metadata} from 'next';
import Image from 'next/image';
import {PageHero} from '@/components/sections/PageHero';
import {ExperienceSection} from '@/components/sections/ExperienceSection';
import {CtaSection} from '@/components/sections/CtaSection';
export const metadata:Metadata={title:'About the Studio',description:'Ansh Digital Studio has photographed weddings, portraits and celebrations since 2015 with a warm, candid and people-led approach.'};
export default function About(){return <main><PageHero eyebrow='About the studio' title={<>People first.<br/><em>Pictures second.</em></>} copy='Since 2015, Ansh Digital Studio has documented weddings and celebrations with a warm, candid and people-led approach.'/><section className='editorialSplit section'><div><Image src='/images/peach-bride-collage.jpg' alt='Bridal portrait collection by Ansh Digital Studio' fill className='cover' sizes='(max-width:800px) 100vw, 50vw'/></div><div><p>The strongest photographs often happen between the expected moments.</p><p className='aboutBody'>The approach is built around attention, timing and enough direction to help — never enough to interrupt. That means making space for family, rituals, portraits and the unscripted reactions that make one wedding feel completely different from another.</p></div></section><ExperienceSection/><CtaSection/></main>}
