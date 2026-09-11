import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';

export default function sitemap():MetadataRoute.Sitemap{
  return ['','/about','/services','/portfolio','/contact'].map(path=>({
    url:`${site.url}${path}`,
    lastModified:new Date(),
    changeFrequency:path===''?'weekly':'monthly',
    priority:path===''?1:(path==='/portfolio'||path==='/services')?.9:.7,
  }));
}
