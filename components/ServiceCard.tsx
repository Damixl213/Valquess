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
      <div className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 h-full shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Subtle inner gradient for glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-10 h-10 bg-[#3B2571] rounded flex items-center justify-center shadow-inner">
              <Icon className="w-5 h-5 text-gold" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-white tracking-wide">{title}</h3>
          </div>
          <p className="text-gray-200/90 text-[15px] font-light leading-relaxed">{description}</p>
        </div>
      </div>
    </SectionReveal>
  );
}
