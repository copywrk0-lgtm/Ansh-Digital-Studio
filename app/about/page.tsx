import type {Metadata} from 'next';
import Image from 'next/image';
import {PageHero} from '@/components/sections/PageHero';
import {ExperienceSection} from '@/components/sections/ExperienceSection';
import {CtaSection} from '@/components/sections/CtaSection';
export const metadata:Metadata={title:'About the Studio',description:'Ansh Digital Studio photographs weddings, portraits and celebrations with a warm, candid and people-led approach.'};
export default function About(){return <main><PageHero eyebrow='About the studio' title={<>People first.<br/><em>Pictures second.</em></>} copy='Ansh Digital Studio documents weddings with a style that stays warm, polished and people-led.'/><section className='editorialSplit section'><div><Image src='/images/studio-cameras.jpg' alt='Professional camera equipment used by Ansh Digital Studio' fill className='cover' sizes='(max-width:800px) 100vw, 50vw'/></div><div><p>The strongest photographs happen when attention meets timing.</p><p className='aboutBody'>The process is built around clear communication, calm direction and an eye for the moments that feel natural rather than forced. From portraits and rituals to details and family interactions, the goal is to deliver images that feel elegant now and meaningful later.</p></div></section><ExperienceSection/><CtaSection/></main>}
