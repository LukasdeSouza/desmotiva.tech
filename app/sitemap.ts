import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://desmotiva.dev';
  
  // Define all routes
  const routes = ['', '/blog', '/sobre', '/recursos', '/contato', '/faq', '/privacy'];
  
  // Define individual blog posts
  const blogPosts = ['/blog/1', '/blog/2', '/blog/3'];
  
  // Generate sitemap entries for each locale and route
  const sitemapEntries: MetadataRoute.Sitemap = [];
  
  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = locale === 'pt' 
        ? `${baseUrl}${route}` 
        : `${baseUrl}/${locale}${route}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            pt: `${baseUrl}${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });
  
  // Add individual blog posts
  blogPosts.forEach((blogRoute) => {
    locales.forEach((locale) => {
      const url = locale === 'pt' 
        ? `${baseUrl}${blogRoute}` 
        : `${baseUrl}/${locale}${blogRoute}`;
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: {
          languages: {
            pt: `${baseUrl}${blogRoute}`,
            en: `${baseUrl}/en${blogRoute}`,
          },
        },
      });
    });
  });
  
  return sitemapEntries;
}
