import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/layout/Section';
import { experiences } from '@/data/experience';
import { personalInfo } from '@/data/social';

export function Experience() {
  return (
    <Section id="experience" className="bg-card/50">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey in software quality and test engineering"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-card p-6"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Current Focus
        </p>
        <h3 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
          {personalInfo.title}
        </h3>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

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
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1.5 md:-translate-x-2 mt-6" />

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
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
