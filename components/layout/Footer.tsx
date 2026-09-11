import Link from 'next/link';
import {site} from '@/lib/site';

export function Footer(){
  return <footer className='footer'>
    <div className='footerBrand'>
      <Link href='/'><span className='brandMark footerMark' aria-hidden='true'><i/></span><strong>ANSH DIGITAL STUDIO</strong></Link>
      <p>Wedding photography, portraits, albums and films.<br/>{site.location} · Available for celebrations beyond Delhi too.</p>
    </div>
    <div className='footerLinks'>
      <Link href='/portfolio'>Portfolio</Link>
      <Link href='/services'>Services</Link>
      <Link href='/about'>About</Link>
      <Link href='/contact'>Contact</Link>
      <a href={site.instagram} target='_blank' rel='noreferrer'>Instagram ↗</a>
    </div>
    <div className='footerContact'>
      <span>Quick enquiry</span>
      <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
      <a href={`tel:${site.alternatePhone}`}>{site.alternatePhoneLabel}</a>
      <a href={site.whatsapp} target='_blank' rel='noreferrer'>Get pricing on WhatsApp ↗</a>
    </div>
  </footer>;
}
