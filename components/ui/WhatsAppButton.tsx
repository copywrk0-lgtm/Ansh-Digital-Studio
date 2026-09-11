import {site} from '@/lib/site';
export function WhatsAppButton({label='WhatsApp the studio'}:{label?:string}){return <a className='primaryBtn' href={site.whatsapp} target='_blank' rel='noreferrer'><span>{label}</span><b aria-hidden='true'>↗</b></a>}
