import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/layout/Section';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ExternalLinkIcon } from '@/components/ui/Icons';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { personalInfo } from '@/data/social';

export function Blog() {
  const { posts, loading, error } = useBlogPosts(3);

  return (
    <Section id="blog" className="bg-card/50">
      <SectionHeader
        title="Latest from My Blog"
        subtitle="Thoughts and insights on software testing, automation, and quality engineering"
        centered
      />

      {loading ? (
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 border border-border animate-pulse"
            >
              <div className="h-4 bg-muted rounded w-1/3 mb-4" />
              <div className="h-6 bg-muted rounded w-full mb-3" />
              <div className="h-4 bg-muted rounded w-full mb-2" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : error ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground mb-6">
            Unable to load blog posts. Check out my Substack directly!
          </p>
          <Button
            as="a"
            href={personalInfo.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Blog
            <ExternalLinkIcon className="ml-2" />
          </Button>
        </motion.div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block group"
              >
                <Card className="h-full">
                  <p className="text-sm text-primary mb-3">{post.pubDate}</p>
                  <CardTitle className="mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium">
                    Read more
                    <ExternalLinkIcon className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10"
          >
            <Button
              as="a"
              href={personalInfo.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              View All Posts
              <ExternalLinkIcon className="ml-2" />
            </Button>
          </motion.div>
        </>
      )}
    </Section>
  );
}
