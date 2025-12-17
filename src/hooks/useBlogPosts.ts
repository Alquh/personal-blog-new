import { useState, useEffect } from 'react';
import { BlogPost } from '@/types';

const SUBSTACK_RSS = 'https://beardedtester.substack.com/feed';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

export function useBlogPosts(limit: number = 3) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${CORS_PROXY}${encodeURIComponent(SUBSTACK_RSS)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }

        const text = await response.text();
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
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
}
