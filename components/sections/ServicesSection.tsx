import {services} from '@/data/services';
import {Eyebrow} from '@/components/ui/Eyebrow';
export function ServicesSection(){return <section className='services section'><div className='sectionHeading'><Eyebrow>Coverage</Eyebrow><div><h2>Built around the day,<br/><em>not a template.</em></h2><p>Photography, portraits, films and album design can be combined around the functions you actually need covered.</p></div></div><div className='serviceList'>{services.map(s=><article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div></section>}
