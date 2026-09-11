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
    const message=`Hi Ansh Digital Studio, I'm ${name || 'planning an event'}. I'd like to check availability for ${event || 'an upcoming event'}${date?` on ${date}`:''}${venue?` at ${venue}`:''}. Please share suitable photography/videography options.`;
    window.open(`https://wa.me/${site.phone.replace('+','')}?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  }

  return <form className='inquiryForm' onSubmit={submit}>
    <label><span>Your name</span><input name='name' autoComplete='name' placeholder='Name'/></label>
    <label><span>What are you planning?</span><select name='event' defaultValue=''><option value='' disabled>Select an event</option><option>Wedding</option><option>Pre-wedding</option><option>Engagement</option><option>Wedding film</option><option>Maternity / newborn</option><option>Event / celebration</option><option>Commercial shoot</option></select></label>
    <div className='formRow'><label><span>Event date</span><input name='date' type='date'/></label><label><span>Venue / city</span><input name='venue' placeholder='Venue or city'/></label></div>
    <button type='submit'>Continue on WhatsApp ↗</button>
    <small>This form opens WhatsApp with your enquiry pre-filled. Nothing is stored on this website.</small>
  </form>;
}
