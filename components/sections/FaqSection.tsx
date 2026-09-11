import {Eyebrow} from '@/components/ui/Eyebrow';

const faqs=[
  ['How early should we enquire?','As soon as your date is reasonably fixed. Wedding dates can overlap, so checking availability early gives you more flexibility.'],
  ['Can we book photography and video together?','Yes. Photography and videography coverage can be planned together so the team works around one timeline.'],
  ['Do you cover celebrations outside Delhi?','Yes. Destination and outstation celebrations can be discussed based on the venue, dates and coverage needed.'],
  ['Can coverage be customised?','Yes. Share the functions, timings and priorities, and the coverage can be shaped around the parts of the celebration that matter most.'],
  ['Do you provide albums?','Yes. Album design can be added after the photographs are selected, with layouts built from the final edited gallery.'],
];

export function FaqSection(){return <section className='faq section'><div className='faqIntro'><Eyebrow>Before you enquire</Eyebrow><h2>A few useful<br/><em>answers first.</em></h2><p>Enough information to make the first conversation easier — without turning the enquiry into a long form.</p></div><div className='faqList'>{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>{String(i+1).padStart(2,'0')}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>}
