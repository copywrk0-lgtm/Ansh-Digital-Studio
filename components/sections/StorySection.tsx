import Image from 'next/image';
import {Eyebrow} from '@/components/ui/Eyebrow';
import {TextLink} from '@/components/ui/TextLink';

export function StorySection(){return <section className='story section'>
  <div className='storyVisual'>
    <div className='storyImage'><Image src='/images/bride-red-portrait.jpg' alt='Bridal portrait by Ansh Digital Studio' fill className='cover' sizes='(max-width:800px) 100vw, 42vw' style={{objectPosition:'center top'}}/></div>
    <p className='storyCaption'>Portraits that keep the styling,<br/>expression and emotion in balance.</p>
  </div>
  <div className='storyCopy'>
    <Eyebrow>The studio</Eyebrow>
    <h2>Photographs that feel<br/><em>alive after the day.</em></h2>
    <p>The strongest wedding images do more than document outfits and rituals. They preserve atmosphere, expression, family energy and the small details that make one celebration feel different from the next.</p>
    <TextLink href='/about'>Discover the approach</TextLink>
  </div>
</section>}
