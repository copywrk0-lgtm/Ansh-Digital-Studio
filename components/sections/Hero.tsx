import Link from 'next/link';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {site} from '@/lib/site';

export function Hero(){
  return <section className='hero'>
    <div className='heroCopy'>
      <div className='heroMeta'><span>EST. 2015</span><span>{site.location}</span></div>
      <div>
        <Eyebrow light>Wedding photography · portraits · films</Eyebrow>
        <h1>Stories,<br/><em>held in light.</em></h1>
        <p>Warm, people-led wedding photography for the rituals, the portraits and the seconds nobody planned.</p>
        <div className='heroActions'>
          <a className='heroPrimary' href={site.whatsapp} target='_blank' rel='noreferrer'>Check your wedding date <span>↗</span></a>
          <Link className='heroSecondary' href='/portfolio'>View the portfolio</Link>
        </div>
      </div>
      <div className='heroFoot'><span>{site.rating}★ · {site.reviewCount} Google reviews</span><span>Available for destination celebrations</span></div>
    </div>
    <div className='heroImage photoPlaceholder' aria-label='Photography placeholder'>
      <div className='photoPlaceholderMark'>ANSH<small>verified photo set incoming</small></div>
    </div>
  </section>;
}
