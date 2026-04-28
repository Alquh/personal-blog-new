import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/layout/Section';
import { Card, CardTitle, CardDescription } from '@/components/ui/Card';
import {
  FlaskIcon,
  ChevronDoubleIcon,
  UserIcon,
  CodeIcon,
  DocumentIcon,
  RocketIcon,
  SparklesIcon,
} from '@/components/ui/Icons';
import { expertiseItems } from '@/data/expertise';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flask: FlaskIcon,
  'chevron-double': ChevronDoubleIcon,
  user: UserIcon,
  code: CodeIcon,
  document: DocumentIcon,
  rocket: RocketIcon,
  sparkles: SparklesIcon,
};

export function Expertise() {
  return (
    <Section id="expertise">
      <SectionHeader
        title="What I make sturdier"
        subtitle="Practical testing leadership across the places software usually bends first."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {expertiseItems.map((item, index) => {
          const Icon = iconMap[item.icon] || FlaskIcon;
          const spanClass = index === 0 || index === 3 ? 'md:col-span-4' : 'md:col-span-2';

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={spanClass}
            >
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-primary/12 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mb-3">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
                <div className="mt-8 h-px w-16 bg-primary/40" />
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
