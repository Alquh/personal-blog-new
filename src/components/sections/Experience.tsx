import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/layout/Section';
import { experiences } from '@/data/experience';
import { personalInfo } from '@/data/social';

export function Experience() {
  return (
    <Section id="experience" className="bg-card/35">
      <SectionHeader
        title="Work experience"
        subtitle="A career spent building automation, improving feedback loops, and raising the bar for release confidence."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 rounded-lg border border-border/70 bg-card/80 p-6 shadow-[0_20px_70px_rgb(var(--foreground)/0.08)]"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
          Current focus
        </p>
        <h3 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
          {personalInfo.title}
        </h3>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 mt-6 h-4 w-4 -translate-x-1.5 rounded-sm border-4 border-background bg-primary md:left-1/2 md:-translate-x-2" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="rounded-lg border border-border/70 bg-card/80 p-6 transition-colors hover:border-primary/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-semibold leading-tight text-foreground">
                      {exp.title}
                    </h3>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="leading-relaxed text-muted-foreground text-pretty">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
