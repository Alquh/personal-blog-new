import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/layout/Section';

const highlights = [
  { label: '10+', description: 'Years Experience' },
  { label: '6+', description: 'Industries' },
  { label: '4+', description: 'Programming Languages' },
];

export function About() {
  return (
    <Section id="about" className="bg-card/50">
      <SectionHeader
        title="About Me"
        subtitle="A passionate Senior Test Engineer dedicated to improving software delivery"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I have been in the Software Testing field for 10+ years now. I've had the
              opportunity to take on many different roles in varying industries like{' '}
              <span className="text-foreground font-medium">Insurance</span>,{' '}
              <span className="text-foreground font-medium">Startups</span>,{' '}
              <span className="text-foreground font-medium">SaaS</span>, and{' '}
              <span className="text-foreground font-medium">Healthcare</span>, as well as
              contract work.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Across these different industries, I also gained experience with several
              different testing techniques. These include{' '}
              <span className="text-primary font-medium">API testing</span>,{' '}
              <span className="text-primary font-medium">Integration</span>,{' '}
              <span className="text-primary font-medium">Performance</span>,{' '}
              <span className="text-primary font-medium">Accessibility</span>,{' '}
              <span className="text-primary font-medium">UI</span>,{' '}
              <span className="text-primary font-medium">Usability</span>,{' '}
              <span className="text-primary font-medium">Mobile</span>, and{' '}
              <span className="text-primary font-medium">Contract Testing</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              I've developed Test Automation Frameworks in{' '}
              <span className="text-foreground font-medium">Java</span>,{' '}
              <span className="text-foreground font-medium">C#</span>,{' '}
              <span className="text-foreground font-medium">TypeScript</span>, and{' '}
              <span className="text-foreground font-medium">Python</span>.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border border-border"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">{item.description}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-cyan-400/10 rounded-xl border border-primary/20"
          >
            <p className="text-foreground font-medium text-center">
              "Quality is not an act, it is a habit."
            </p>
            <p className="text-muted-foreground text-sm text-center mt-2">
              — Aristotle
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* GitHub Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-foreground">GitHub Activity</h3>
          <a
            href="https://github.com/Alquh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium flex items-center gap-2"
          >
            @Alquh
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        {/* Stats and Streak Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-card rounded-xl p-4 border border-border flex items-center justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Alquh&show_icons=true&hide_border=true&bg_color=1e293b&title_color=22d3ee&icon_color=22d3ee&text_color=f8fafc&hide_title=false&include_all_commits=true&count_private=true"
              alt="GitHub Stats for Alquh"
              className="max-w-full h-auto"
            />
          </div>
          <div className="bg-card rounded-xl p-4 border border-border flex items-center justify-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Alquh&hide_border=true&background=1e293b&ring=22d3ee&fire=22d3ee&currStreakLabel=22d3ee&sideLabels=f8fafc&currStreakNum=f8fafc&sideNums=f8fafc&dates=94a3b8"
              alt="GitHub Streak for Alquh"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="bg-card rounded-xl p-6 border border-border overflow-x-auto">
          <img
            src="https://ghchart.rshah.org/22d3ee/Alquh"
            alt="GitHub Contribution Graph for Alquh"
            className="w-full min-w-[700px]"
          />
        </div>
      </motion.div>
    </Section>
  );
}
