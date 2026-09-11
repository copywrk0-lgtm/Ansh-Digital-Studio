import Image from 'next/image';
import {portfolio} from '@/data/portfolio';
export function GalleryGrid(){return <section className='galleryGrid section'>{portfolio.map((p,i)=><figure className={`galleryItem ${p.orientation}`} key={p.n}><div><Image src={p.image} alt={`${p.type}: ${p.title}`} fill className='cover' sizes='(max-width:800px) 100vw, 50vw'/></div><figcaption><span>{String(i+1).padStart(2,'0')}</span><div><strong>{p.type}</strong><small>{p.title}</small></div></figcaption></figure>)}</section>}
