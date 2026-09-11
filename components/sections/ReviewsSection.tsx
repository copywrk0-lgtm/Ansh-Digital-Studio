import {reviews} from '@/data/reviews';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {Stars} from '@/components/ui/Stars';
import {site} from '@/lib/site';
export function ReviewsSection(){return <section className='reviews section' id='reviews'><div className='sectionHeading'><Eyebrow>What people say</Eyebrow><div><h2>Proof that already<br/><em>exists offline.</em></h2><p>Rated {site.rating} from {site.reviewCount} Google reviews.</p></div></div><div className='reviewGrid'>{reviews.map(r=><blockquote key={r.name}><Stars/><p>“{r.text}”</p><footer>{r.name} · Google review</footer></blockquote>)}</div></section>}
