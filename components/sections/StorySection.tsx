import {Eyebrow} from '@/components/ui/Eyebrow';
import {TextLink} from '@/components/ui/TextLink';

export function StorySection(){return <section className='story section'>
  <div className='storyVisual'>
    <div className='storyImage photoPlaceholder' aria-label='Photography placeholder'><div className='photoPlaceholderMark'>ANSH<small>studio portrait incoming</small></div></div>
    <p className='storyCaption'>Portraits that leave room for<br/>the person inside the picture.</p>
  </div>
  <div className='storyCopy'>
    <Eyebrow>The studio</Eyebrow>
    <h2>Photographs that feel<br/><em>like the day did.</em></h2>
    <p>Good wedding photography is not a checklist of poses. It is attention — to family, colour, movement, nervous hands, loud laughter and the quieter seconds in between.</p>
    <TextLink href='/about'>Discover the approach</TextLink>
  </div>
</section>}
