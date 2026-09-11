import Link from 'next/link';
import {site} from '@/lib/site';

export function Footer(){
  return <footer className='footer'>
    <div className='footerBrand'>
      <Link href='/'><span>A</span><strong>ANSH DIGITAL STUDIO</strong></Link>
      <p>Wedding photography, portraits and films.<br/>{site.location} · Available beyond.</p>
    </div>
    <div className='footerLinks'>
      <Link href='/portfolio'>Portfolio</Link>
      <Link href='/services'>Services</Link>
      <Link href='/contact'>Contact</Link>
      <a href={site.instagram} target='_blank' rel='noreferrer'>Instagram ↗</a>
    </div>
    <div className='footerContact'>
      <span>Enquiries</span>
      <a href={`tel:${site.phone}`}>{site.phoneLabel}</a>
      <a href={site.whatsapp} target='_blank' rel='noreferrer'>WhatsApp ↗</a>
    </div>
  </footer>;
}
