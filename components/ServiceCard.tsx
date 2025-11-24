import { Target, Palette, Monitor, FileText } from 'lucide-react';
import { SectionReveal } from './SectionReveal';

const iconMap = {
  target: Target,
  palette: Palette,
  monitor: Monitor,
  'file-text': FileText,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <SectionReveal delay={delay}>
      <div className="group bg-black/40 backdrop-blur-sm border border-gold/30 rounded-lg p-6 hover:border-gold hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Icon className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-xl font-serif font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </SectionReveal>
  );
}
