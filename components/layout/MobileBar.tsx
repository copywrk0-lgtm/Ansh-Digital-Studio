import {site} from '@/lib/site';
export function MobileBar(){return <div className='mobileBar' role='navigation' aria-label='Quick contact'><a href={`tel:${site.phone}`}>Call</a><a href={site.whatsapp} target='_blank' rel='noreferrer'>Check date on WhatsApp <span>↗</span></a></div>}
