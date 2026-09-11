import Link from 'next/link';
import {services} from '@/data/services';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {site} from '@/lib/site';

const featured=[
  {...services[0],label:'The main story',href:'/portfolio'},
  {...services[2],label:'Before the wedding',href:'/portfolio'},
  {...services[3],label:'Motion + sound',href:site.whatsapp},
];

export function ServicesSection(){
  return <section className='services section'>
    <div className='sectionHeading'>
      <Eyebrow>What we capture</Eyebrow>
      <div><h2>Wedding-first coverage,<br/><em>shaped around your day.</em></h2><p>Photography and films should follow the celebration, not interrupt it. Start with the coverage you need, then shape the details around the people and functions that matter.</p></div>
    </div>

    <div className='serviceShowcase'>
      {featured.map((s,i)=><article className={`serviceFeature serviceFeature${i+1}`} key={s.n}>
        <div className='serviceFeatureImage photoPlaceholder'><div className='photoPlaceholderMark'>ANSH<small>{s.title}</small></div></div>
        <div className='serviceFeatureCopy'>
          <span>{s.n} · {s.label}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
          {s.href.startsWith('http')?<a href={s.href} target='_blank' rel='noreferrer'>Ask about coverage ↗</a>:<Link href={s.href}>View related work ↗</Link>}
        </div>
      </article>)}
    </div>

    <div className='serviceExtras' aria-label='Additional photography services'>
      {[services[1],services[4],services[5]].map(s=><article key={s.n}>
        <span>{s.n}</span>
        <div><h3>{s.title}</h3><p>{s.desc}</p></div>
      </article>)}
    </div>
  </section>;
}
