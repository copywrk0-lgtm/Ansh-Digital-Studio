import type {Metadata} from 'next';
import {PageHero} from '@/components/sections/PageHero';
import {ServicesSection} from '@/components/sections/ServicesSection';
import {CtaSection} from '@/components/sections/CtaSection';
export const metadata:Metadata={title:'Photography & Videography Services',description:'Wedding photography, candid portraits, pre-weddings, wedding films, maternity, newborn and event coverage by Ansh Digital Studio.',alternates:{canonical:'/services'}};
export default function Services(){return <main><PageHero eyebrow='Services' title={<>Coverage built around<br/><em>real celebrations.</em></>} copy='From weddings and pre-weddings to films, portraits and events, coverage is shaped around people and the rhythm of the day.'/><ServicesSection/><CtaSection/></main>}
