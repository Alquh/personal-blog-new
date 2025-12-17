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
        title="My Expertise"
        subtitle="Specialized services to help your team deliver quality software"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {expertiseItems.map((item, index) => {
          const Icon = iconMap[item.icon] || FlaskIcon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="mb-3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
