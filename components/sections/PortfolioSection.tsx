import Image from 'next/image';
import Link from 'next/link';
import {portfolio} from '@/data/portfolio';
import {Eyebrow} from '@/components/ui/Eyebrow';

export function PortfolioSection(){
  const featured=[portfolio[0],portfolio[2],portfolio[4],portfolio[3]];
  return <section className='work'>
    <div className='workIntro section'>
      <div><Eyebrow light>Selected work</Eyebrow><h2>Every frame should<br/><em>earn its place.</em></h2></div>
      <p>A concise edit of couple portraits, bridal frames, ceremony atmosphere and wedding details. The photography leads; album design stays secondary.</p>
    </div>
    <div className='featuredGrid'>
      {featured.map((p,i)=><article className={`featuredProject fp${i+1}`} key={p.n}>
        <div className='featuredImage'><Image src={p.image} alt={`${p.type}: ${p.title}`} fill className='cover' sizes='(max-width:800px) 100vw, 50vw'/></div>
        <div className='featuredMeta'><span>{p.n} · {p.type}</span><h3>{p.title}</h3></div>
      </article>)}
    </div>
    <div className='workFooter'><Link href='/portfolio'>View the complete portfolio <span>↗</span></Link></div>
  </section>;
}
