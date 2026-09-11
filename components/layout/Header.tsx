'use client';

import Link from 'next/link';
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import {navItems} from '@/data/nav';
import {site} from '@/lib/site';
import {BrandMark} from '@/components/ui/BrandMark';
import {MobileMenu} from './MobileMenu';

export function Header(){
  const [open,setOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const pathname=usePathname();
  const isHome=pathname==='/';

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>24);
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    return()=>window.removeEventListener('scroll',onScroll);
  },[]);

  useEffect(()=>{
    document.body.style.overflow=open?'hidden':'';
    return()=>{document.body.style.overflow=''};
  },[open]);

  useEffect(()=>setOpen(false),[pathname]);

  return <>
    <header className={`nav ${scrolled||!isHome?'navSolid':''}`}>
      <Link className='brand' href='/' aria-label='Ansh Digital Studio home'>
        <BrandMark/>
        <span><b>ANSH</b><small>DIGITAL STUDIO</small></span>
      </Link>
      <nav className='desktopNav' aria-label='Primary navigation'>
        {navItems.slice(0,4).map(i=><Link key={i.label} href={i.href}>{i.label}</Link>)}
      </nav>
      <a className='navCta' href={site.whatsapp} target='_blank' rel='noreferrer'><span>Check your date</span><b aria-hidden='true'>↗</b></a>
      <button className='menuButton' aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls='mobile-navigation' onClick={()=>setOpen(!open)}>
        <span/><span/>
      </button>
    </header>
    <MobileMenu open={open} onClose={()=>setOpen(false)}/>
  </>;
}
