import Link from 'next/link';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {WhatsAppButton} from '@/components/ui/WhatsAppButton';
export function CtaSection(){return <section className='cta section'><div className='ctaInner'><div><Eyebrow light>Planning something worth remembering?</Eyebrow><h2>Tell us the date.<br/><em>We’ll make the memories last.</em></h2></div><div className='ctaAside'><p>Share your event date, venue and the kind of coverage you need. We’ll confirm availability directly on WhatsApp.</p><div className='ctaActions'><WhatsAppButton label='Check your date on WhatsApp'/><Link className='ctaCall' href='tel:+919717847312'>Call the studio</Link></div><small>Usually replies directly · +91 97178 47312</small></div></div></section>}
