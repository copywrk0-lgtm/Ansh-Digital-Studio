'use client';

import {FormEvent} from 'react';
import {site} from '@/lib/site';

export function InquiryForm(){
  function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    const data=new FormData(e.currentTarget);
    const name=String(data.get('name')||'');
    const event=String(data.get('event')||'');
    const date=String(data.get('date')||'');
    const venue=String(data.get('venue')||'');
    const coverage=String(data.get('coverage')||'');
    const message=`Hi Ansh Digital Studio, I'm ${name || 'planning a celebration'}. I'd like to check availability for ${event || 'an upcoming event'}${date?` on ${date}`:''}${venue?` at ${venue}`:''}.${coverage?` I’m interested in ${coverage}.`:''} Please share availability and suitable package options.`;
    window.open(`https://wa.me/${site.phone.replace('+','')}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }

  return <form className='inquiryForm' onSubmit={submit}>
    <div className='formBadge'>Usually easiest on WhatsApp</div>
    <label><span>Your name</span><input name='name' autoComplete='name' placeholder='Name'/></label>
    <label><span>What are you planning?</span><select name='event' defaultValue='' required><option value='' disabled>Select an event</option><option>Wedding</option><option>Pre-wedding</option><option>Engagement</option><option>Reception</option><option>Wedding film</option><option>Event / celebration</option></select></label>
    <div className='formRow'><label><span>Event date</span><input name='date' type='date'/></label><label><span>Venue / city</span><input name='venue' placeholder='Venue or city'/></label></div>
    <label><span>Coverage</span><select name='coverage' defaultValue=''><option value=''>Not sure yet</option><option>Photography</option><option>Photography + videography</option><option>Videography / wedding film</option><option>Portraits / pre-wedding</option><option>Album design</option></select></label>
    <button type='submit'>Get availability & package options on WhatsApp ↗</button>
    <small>No account or email required. This simply opens WhatsApp with your enquiry pre-filled.</small>
  </form>;
}
