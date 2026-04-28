import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ArrowDownIcon } from '@/components/ui/Icons';
import { personalInfo } from '@/data/social';

export function Hero() {
  return (
    <section className="relative flex min-h-[92dvh] items-center overflow-hidden pt-24">
      <div className="absolute inset-x-0 bottom-0 h-px bg-border" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -left-5 top-8 h-full w-full rounded-lg border border-border" />
            <div className="relative rounded-lg bg-card p-3 shadow-[0_28px_80px_rgb(var(--foreground)/0.14)]">
              <div className="overflow-hidden rounded-md">
                <img
                  src={personalInfo.headshotUrl}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary"
            >
              Quality engineering partner
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-5 font-display text-6xl font-bold leading-[0.9] text-foreground text-balance md:text-7xl lg:text-8xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-3 text-2xl font-semibold text-foreground md:text-3xl"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-7 text-lg font-medium text-primary"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0"
            >
              I build test systems, automation strategy, and AI-assisted quality workflows for teams that need software to behave under real pressure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button as="a" href="#contact" size="lg">
                Start a conversation
              </Button>
              <Button
                as="a"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
              >
                View resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex justify-center lg:justify-start"
            >
              <SocialLinks iconSize="lg" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDownIcon className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
