import Image from 'next/image';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {site} from '@/lib/site';

export function Hero(){
  return <section className='hero'>
    <div className='heroCopy'>
      <div className='heroMeta'><span>EST. {site.established}</span><span>{site.location}</span></div>
      <div>
        <Eyebrow light>Wedding photography · portraits · films</Eyebrow>
        <h1>Elegant wedding coverage,<br/><em>without the clichés.</em></h1>
        <p>For couples and families who want polished portraits, warm candid moments and a wedding gallery that still feels beautiful years later.</p>
        <div className='heroActions'>
          <a className='heroPrimary' href={site.whatsapp} target='_blank' rel='noreferrer'>Get pricing & availability</a>
          <a className='heroSecondary' href={`tel:${site.phone}`}>Call the studio</a>
        </div>
        <div className='heroTrust'>
          <span>{site.rating}★ Google rating</span>
          <span>{site.reviewCount} reviews</span>
          <span>Fast WhatsApp response</span>
        </div>
      </div>
      <div className='heroFoot'><span>Wedding photos, portraits & films</span><span>Serving Delhi and nearby celebrations</span></div>
    </div>
    <div className='heroImage'>
      <Image src='/images/hero-couple.jpg' alt='Bride and groom portrait by Ansh Digital Studio' fill priority quality={92} sizes='(max-width: 800px) 100vw, 50vw' className='cover' style={{objectPosition:'center 18%'}}/>
      <div className='heroImageShade'/>
      <span className='imageIndex'>01 / SIGNATURE PORTRAIT</span>
    </div>
  </section>;
}
