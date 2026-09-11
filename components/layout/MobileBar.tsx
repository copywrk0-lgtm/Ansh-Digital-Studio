import Link from 'next/link';
import {site} from '@/lib/site';
export function MobileBar(){return <div className='mobileBar'><Link href='/portfolio'>View work</Link><a href={site.whatsapp} target='_blank' rel='noreferrer'>Check availability</a></div>}
