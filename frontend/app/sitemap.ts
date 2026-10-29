import type { MetadataRoute } from 'next';
import { products } from '@/lib/site-content';

export const dynamic = 'force-static';

const baseUrl = 'https://www.dynamicair.com.np';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const solutionRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/solutions/${product.id}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/enquiry`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    ...solutionRoutes,
  ];
}
