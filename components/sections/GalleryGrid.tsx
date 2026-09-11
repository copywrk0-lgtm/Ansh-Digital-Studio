import {portfolio} from '@/data/portfolio';

const galleryLayout = [
  'galleryLead',
  'galleryCouple',
  'galleryDetail',
  'galleryPortrait',
  'galleryPortrait',
  'galleryPortrait',
  'galleryPortrait',
  'galleryStory',
];

export function GalleryGrid(){
  const selected=[portfolio[0],portfolio[1],portfolio[2],portfolio[3],portfolio[4],portfolio[5],portfolio[6],portfolio[7]];
  return <section className='galleryGrid section' aria-label='Selected wedding photography'>
    {selected.map((p,i)=><figure className={`galleryItem ${galleryLayout[i]}`} key={p.n}>
      <div className='galleryMedia photoPlaceholder'><div className='photoPlaceholderMark'>ANSH<small>{p.type}</small></div></div>
      <figcaption>
        <span className='galleryNumber'>{String(i+1).padStart(2,'0')}</span>
        <div><strong>{p.title}</strong><small>{p.type}</small></div>
      </figcaption>
    </figure>)}
  </section>;
}
