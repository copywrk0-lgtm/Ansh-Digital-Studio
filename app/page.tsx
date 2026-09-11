import type {Metadata} from 'next';
import {Hero} from '@/components/sections/Hero';
import {ProofStrip} from '@/components/sections/ProofStrip';
import {StorySection} from '@/components/sections/StorySection';
import {ServicesSection} from '@/components/sections/ServicesSection';
import {PortfolioSection} from '@/components/sections/PortfolioSection';
import {ExperienceSection} from '@/components/sections/ExperienceSection';
import {ReviewsSection} from '@/components/sections/ReviewsSection';
import {FaqSection} from '@/components/sections/FaqSection';
import {CtaSection} from '@/components/sections/CtaSection';

export const metadata:Metadata={
  title:'Wedding Photographer in Delhi',
  description:'Wedding photography, bridal portraits, couple sessions, album design and films by Ansh Digital Studio.',
};

export default function Home(){return <main><Hero/><ProofStrip/><StorySection/><PortfolioSection/><ServicesSection/><ExperienceSection/><ReviewsSection/><FaqSection/><CtaSection/></main>}
