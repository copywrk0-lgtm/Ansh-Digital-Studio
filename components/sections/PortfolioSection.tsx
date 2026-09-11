import Image from 'next/image';
import Link from 'next/link';
import {portfolio} from '@/data/portfolio';
import {Eyebrow} from '@/components/ui/Eyebrow';

export function PortfolioSection(){
  const featured=[portfolio[2],portfolio[0],portfolio[4],portfolio[1]];
  return <section className='work'>
    <div className='workIntro section'>
      <div><Eyebrow light>Selected stories</Eyebrow><h2>A day is never<br/><em>one kind of moment.</em></h2></div>
      <p>Details, portraits, people and atmosphere — selected from real wedding work and photographed to sit together as one story.</p>
    </div>
    <div className='featuredGrid'>
      {featured.map((p,i)=><article className={`featuredProject fp${i+1}`} key={p.n}>
        <div className='featuredImage'><Image src={p.image} alt={`${p.type}: ${p.title}`} fill className='cover' sizes='(max-width:800px) 100vw, 50vw'/></div>
        <div className='featuredMeta'><span>{p.n} · {p.type}</span><h3>{p.title}</h3></div>
      </article>)}
    </div>
    <div className='workFooter'><Link href='/portfolio'>Explore the full portfolio <span>↗</span></Link></div>
  </section>;
}
