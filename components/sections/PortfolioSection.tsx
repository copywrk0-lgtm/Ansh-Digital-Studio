import Image from 'next/image';
import Link from 'next/link';
import {portfolio} from '@/data/portfolio';
import {Eyebrow} from '@/components/ui/Eyebrow';

export function PortfolioSection(){
  const lead=portfolio[0];
  const detail=portfolio[2];
  const portrait=portfolio[3];
  const story=portfolio[4];
  return <section className='work'>
    <div className='workIntro section'>
      <div><Eyebrow>Selected stories</Eyebrow><h2>Not poses.<br/><em>Pieces of the day.</em></h2></div>
      <p>Portraits, rituals and details — presented with room to breathe instead of forcing every photograph into the same crop.</p>
    </div>
    <div className='featuredEditorial'>
      <article className='featuredLead'>
        <div className='featuredImage'><Image src={lead.image} alt={`${lead.type}: ${lead.title}`} fill className='cover' quality={92} sizes='(max-width:800px) 100vw, 42vw'/></div>
        <div className='featuredCaption'><span>01 · {lead.type}</span><h3>{lead.title}</h3></div>
      </article>
      <div className='featuredRight'>
        <article className='featuredWide'>
          <div className='featuredImage'><Image src={detail.image} alt={`${detail.type}: ${detail.title}`} fill className='cover' quality={92} sizes='(max-width:800px) 100vw, 58vw'/></div>
          <div className='featuredCaption'><span>02 · {detail.type}</span><h3>{detail.title}</h3></div>
        </article>
        <div className='featuredPair'>
          {[portrait,story].map((p,i)=><article className='featuredSmall' key={p.n}>
            <div className='featuredImage'><Image src={p.image} alt={`${p.type}: ${p.title}`} fill className='cover' quality={90} sizes='(max-width:800px) 100vw, 29vw'/></div>
            <div className='featuredCaption'><span>0{i+3} · {p.type}</span><h3>{p.title}</h3></div>
          </article>)}
        </div>
      </div>
    </div>
    <div className='workFooter'><Link href='/portfolio'>See the complete portfolio <span>↗</span></Link></div>
  </section>;
}
