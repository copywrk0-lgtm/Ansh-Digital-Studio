import {Eyebrow} from '@/components/ui/Eyebrow';

const faqs=[
  {q:'How far in advance should we book?',a:'For wedding dates, earlier is better — especially in peak season. Share your date on WhatsApp and the studio can confirm availability directly.'},
  {q:'Do you travel for destination weddings?',a:'Yes. Ansh Digital Studio is based in Delhi and is available for destination celebrations. Travel details are planned around the event schedule and venue.'},
  {q:'Can we book photography and films together?',a:'Yes. Wedding photography and videography can be planned together so the coverage feels coordinated rather than like two separate teams working around each other.'},
  {q:'How long does delivery take?',a:'Delivery timing depends on the event and the amount of coverage. The studio confirms the expected timeline before the booking so there is a clear handover plan.'},
  {q:'Do you offer albums?',a:'Album options can be discussed with the studio based on the event, number of functions and the kind of final presentation you want.'},
];

export function FaqSection(){
  return <section className='faq section' aria-labelledby='faq-title'>
    <div className='faqIntro'>
      <Eyebrow>Before you book</Eyebrow>
      <h2 id='faq-title'>A few things<br/><em>people usually ask.</em></h2>
      <p>Short answers to the questions that normally come up before a wedding photography enquiry.</p>
    </div>
    <div className='faqList'>
      {faqs.map((item,i)=><details key={item.q}>
        <summary><span>{String(i+1).padStart(2,'0')}</span><strong>{item.q}</strong><b aria-hidden='true'>+</b></summary>
        <p>{item.a}</p>
      </details>)}
    </div>
  </section>;
}
