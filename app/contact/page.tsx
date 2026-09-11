import type {Metadata} from 'next';
import {PageHero} from '@/components/sections/PageHero';
import {InquiryForm} from '@/components/forms/InquiryForm';
import {site} from '@/lib/site';
export const metadata:Metadata={title:'Contact & Check Availability',description:'Check Ansh Digital Studio availability for weddings, pre-weddings, portraits, films and events.'};
export default function Contact(){return <main><PageHero eyebrow='Contact' title={<>Tell us about<br/><em>your date.</em></>} copy='Share the event, date and venue. Your enquiry will open directly in WhatsApp so the conversation can continue there.'/><section className='contactPage section'><div className='contactIntro'><span>DIRECT ENQUIRY</span><h2>Plan the coverage<br/><em>around your day.</em></h2><p>For the quickest response, send the essentials below. You can also call the studio directly.</p><div className='contactDetails'><a href={`tel:${site.phone}`}>{site.phoneLabel}</a><a href={site.instagram} target='_blank' rel='noreferrer'>Instagram ↗</a><a href={site.maps} target='_blank' rel='noreferrer'>{site.location} ↗</a></div></div><InquiryForm/></section></main>}
