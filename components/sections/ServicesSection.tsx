import {services} from '@/data/services';
import {Eyebrow} from '@/components/ui/Eyebrow';
export function ServicesSection(){return <section className='services section'><div className='sectionHeading'><Eyebrow>What we capture</Eyebrow><div><h2>Built around people,<br/><em>not packages.</em></h2><p>Start with the celebration. Coverage can be shaped around the parts of the day you actually care about.</p></div></div><div className='serviceList'>{services.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div></section>}
