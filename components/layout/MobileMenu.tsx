import Link from 'next/link';
import {navItems} from '@/data/nav';
import {site} from '@/lib/site';

export function MobileMenu({open,onClose}:{open:boolean;onClose:()=>void}){
  return <div id='mobile-navigation' className={`mobileMenu ${open?'open':''}`} aria-hidden={!open}>
    <p>ANSH DIGITAL STUDIO</p>
    {navItems.map(i=><Link key={i.label} href={i.href} onClick={onClose}>{i.label}</Link>)}
    <a href={site.whatsapp} target='_blank' rel='noreferrer' onClick={onClose}>Get pricing & availability ↗</a>
  </div>;
}
