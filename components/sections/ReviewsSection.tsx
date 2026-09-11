import {reviews} from '@/data/reviews';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {Stars} from '@/components/ui/Stars';
import {site} from '@/lib/site';
export function ReviewsSection(){return <section className='reviews section' id='reviews'><div className='sectionHeading'><Eyebrow>Client words</Eyebrow><div><h2>Kind words from people<br/><em>we’ve photographed.</em></h2><p>{site.rating}★ across {site.reviewCount} Google reviews. Real proof matters more than promises.</p><a className='reviewsLink' href={site.maps} target='_blank' rel='noreferrer'>View Google profile ↗</a></div></div><div className='reviewGrid'>{reviews.map(r=><blockquote key={r.name}><Stars/><p>“{r.text}”</p><footer>{r.name} · Google review</footer></blockquote>)}</div></section>}
