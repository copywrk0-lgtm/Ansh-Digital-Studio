import {site} from '@/lib/site';
export function MobileBar(){return <div className='mobileBar'><a href={`tel:${site.phone}`}>Call now</a><a href={site.whatsapp} target='_blank' rel='noreferrer'>WhatsApp enquiry</a></div>}
