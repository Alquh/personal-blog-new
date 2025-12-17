import { useState, useEffect } from 'react';
import { BlogPost } from '@/types';

const SUBSTACK_RSS = 'https://beardedtester.substack.com/feed';

// Use Netlify function in production, CORS proxies as fallback
const RSS_SOURCES = [
  '/.netlify/functions/blog-feed', // Netlify function (no CORS issues)
  `https://corsproxy.io/?${encodeURIComponent(SUBSTACK_RSS)}`,
  `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(SUBSTACK_RSS)}`,
];

export function useBlogPosts(limit: number = 3) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFromSource = async (url: string): Promise<string> => {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Fetch failed');
      return response.text();
    };

    const fetchPosts = async () => {
      let text: string | null = null;

      // Try each source until one works
      for (const source of RSS_SOURCES) {
        try {
          text = await fetchFromSource(source);
          break;
        } catch {
          continue;
        }
      }

      if (!text) {
        setError('Unable to load blog posts');
        setLoading(false);
        return;
      }

      try {
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'text/xml');
        const items = xml.querySelectorAll('item');

        const parsedPosts: BlogPost[] = [];
        items.forEach((item, index) => {
          if (index >= limit) return;

          const title = item.querySelector('title')?.textContent || '';
          const link = item.querySelector('link')?.textContent || '';
          const pubDate = item.querySelector('pubDate')?.textContent || '';
          const description =
            item.querySelector('description')?.textContent || '';

          // Strip HTML and truncate description
          const cleanDescription = description
            .replace(/<[^>]*>/g, '')
            .substring(0, 150)
            .trim();

          parsedPosts.push({
            title,
            link,
            pubDate: new Date(pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
            description: cleanDescription + (cleanDescription.length >= 150 ? '...' : ''),
          });
        });

        setPosts(parsedPosts);
        setError(null);
      } catch (err) {
        setError('Unable to load blog posts');
        console.error('Error parsing blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
}
