import Link from 'next/link';
import {portfolio} from '@/data/portfolio';
import {Eyebrow} from '@/components/ui/Eyebrow';

export function PortfolioSection(){
  const lead=portfolio[1];
  const detail=portfolio[2];
  const portrait=portfolio[4];
  const story=portfolio[5];
  return <section className='work'>
    <div className='workIntro section'>
      <div><Eyebrow>Selected stories</Eyebrow><h2>Not poses.<br/><em>Pieces of the day.</em></h2></div>
      <p>Portraits, rituals and details — presented with room to breathe instead of forcing every photograph into the same crop.</p>
    </div>
    <div className='featuredEditorial'>
      <article className='featuredLead'>
        <div className='featuredImage photoPlaceholder'><div className='photoPlaceholderMark'>ANSH<small>{lead.type}</small></div></div>
        <div className='featuredCaption'><span>01 · {lead.type}</span><h3>{lead.title}</h3></div>
      </article>
      <div className='featuredRight'>
        <article className='featuredWide'>
          <div className='featuredImage photoPlaceholder'><div className='photoPlaceholderMark'>ANSH<small>{detail.type}</small></div></div>
          <div className='featuredCaption'><span>02 · {detail.type}</span><h3>{detail.title}</h3></div>
        </article>
        <div className='featuredPair'>
          {[portrait,story].map((p,i)=><article className='featuredSmall' key={p.n}>
            <div className='featuredImage photoPlaceholder'><div className='photoPlaceholderMark'>ANSH<small>{p.type}</small></div></div>
            <div className='featuredCaption'><span>0{i+3} · {p.type}</span><h3>{p.title}</h3></div>
          </article>)}
        </div>
      </div>
    </div>
    <div className='workFooter'><Link href='/portfolio'>See the complete portfolio <span>↗</span></Link></div>
  </section>;
}
